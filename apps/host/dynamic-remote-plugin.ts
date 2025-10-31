import type { ModuleFederationRuntimePlugin } from '@module-federation/enhanced/runtime';

interface SharePackageType {
  version: string;
  from: string;
  useIn: string[];
}

const getSharedPackage = (sharedScope: object): SharePackageType =>
  Object.entries(sharedScope).reduce((acc: any, [pkgName, versions]) => {
    const versionEntries = Object.entries(versions);
    const [version, details] = versionEntries[0];
    const shared = details as unknown as SharePackageType;

    acc[pkgName] = {
      version,
      from: shared.from,
      usedIn: shared.useIn,
    };
    return acc;
  }, {} as SharePackageType);

const runtimePlugin: () => ModuleFederationRuntimePlugin = function () {
  return {
    name: 'dynamic-remote-plugin',
    beforeRequest(args) {
      const { id, options } = args;
      const remote = options.remotes?.find((r) => r.name === id);

      if (!remote) return args;

      // @ts-expect-error
      remote.entry = 'http://localhost:4201/mf-manifest.json';
      return args;
    },
    async onLoad(args) {
      const sharedScope = args.options.host.shareScopeMap['default'];
      const sharedPkg = getSharedPackage(sharedScope);
      console.log('Shared Packages in Host:', sharedPkg);
      return args;
    },
  };
};

export default runtimePlugin;
