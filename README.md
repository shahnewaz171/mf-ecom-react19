# mf-ecom-react19

This is my personal learning project where I'm diving deep into Micro Frontends using Module Federation within an Nx monorepo.

The workspace has a minimal microfrontend setup with two main apps:

- `host` — the shell application that brings together remote microfrontends
- `products` — a remote app that exposes a simple button component

## What I'm Learning

I built this repo to experiment and learn hands-on. Here's what I'm exploring:

- How Module Federation works with modern bundlers (I've got both rspack and vite configs in here)
- Sharing TypeScript types between apps (check out `@mf-types`)
- Working with Nx monorepo structure and running tasks

## Getting Started

First, make sure Node.js (LTS) is installed. I'm using pnpm for package management here.

To run the host app in dev mode:

```zsh
npx nx serve host
```

To start the products remote separately:

```zsh
npx nx serve products
```

To build for production:

```zsh
npx nx build host
```

## How It's Organized

- `apps/host` — The main shell app that loads remotes via Module Federation
- `apps/products` — Remote app with a `RemoteButton` component
- `@mf-types` — TypeScript definitions I wrote to share types between apps
- Config files — Various `module-federation.config.ts`, `rspack.config.ts`, and `vite.config.ts` files showing different bundler setups

## Key Learnings

- **Module Federation Setup**: Successfully configured Module Federation with both rspack and vite bundlers in an Nx monorepo
- **Dynamic Remote Loading**: Implemented runtime loading of remote microfrontends, allowing the host to fetch and integrate remote modules on-demand without bundling them together
- **Type Safety Across Apps**: Created shared TypeScript type definitions in `@mf-types` to maintain type safety between the host and remote apps
- **Remote Component Exposure**: Built and exposed a `RemoteButton` component from the products app that the host can consume dynamically
- **Nx Task Orchestration**: Learned how to run and build multiple apps independently using Nx commands
- **Host-Remote Architecture**: Implemented a shell app (host) that loads and composes UI from remote microfrontends at runtime, enabling true independent deployment
- **Type Declaration Management**: Discovered the importance of keeping type declarations in sync when changing remote interfaces

## Notes

Built this workspace with Nx and adapted it to learn Module Federation patterns. It's been a great learning experience so far!
