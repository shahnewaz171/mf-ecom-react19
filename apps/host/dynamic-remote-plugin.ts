import type { ModuleFederationRuntimePlugin } from '@module-federation/enhanced/runtime';

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
      console.log('onLoad: ', args);
      return args;
    },
  };
};

export default runtimePlugin;
