# mf-ecom-react19

This is an evolving learning project where I'm continuously adding advanced micro frontend patterns, Nx capabilities, and Module Federation techniques. The goal is to build a comprehensive reference implementation for production-ready micro frontends.

## Getting Started

Prerequisites: Node.js 18+ and pnpm installed.

Install dependencies:

```zsh
pnpm install
```

**Important**: Start the remote first, then the host:

```zsh
# Terminal 1: Start products remote
npx nx serve products

# Terminal 2: Start host application
npx nx serve host
```

Or run both together:

```zsh
npx nx run-many -t serve -p products host
```

Access the apps:

- Host: http://localhost:4200
- Products Remote: http://localhost:4201

Build for production:

```zsh
npx nx build host
npx nx build products
```

View dependency graph:

```zsh
npx nx graph
```

### Module Federation Mastery

- **Exposing Multiple Modules**: Products remote exposes components (`ProductsGrid`, `ProductDetails`) and hooks (`useTest`)
- **Dynamic Remote Loading**: Host consumes remote modules at runtime without bundling them together
- **Type Federation**: Auto-generated TypeScript definitions in `@mf-types` maintain type safety across federated boundaries
- **Shared Dependencies**: Optimized bundle size by sharing React, React-DOM, and React-Router between host and remotes
- **Independent Deployment**: Each app can be deployed separately without affecting others

### Nx Monorepo Capabilities

- **Task Orchestration**: Running multiple apps with `run-many` command
- **Build Optimization**: Incremental builds and caching
- **Dependency Graph**: Visual representation of app dependencies
- **Code Generators**: Scaffolding new apps and components
- **Consistent Tooling**: Shared ESLint, TypeScript, and build configurations

### Products Remote (Provider)

```typescript
// module-federation.config.ts
exposes: {
  './ProductsGrid': './src/components/products/products-grid.tsx',
  './ProductDetails': './src/components/products/details/product-details.tsx',
  './useTest': './src/components/hooks/useTest.ts',
}
```

### Host (Consumer)

```typescript
// module-federation.config.ts
remotes: ['products'];
```

The host dynamically imports from products:

```typescript
import ProductsGrid from 'products/ProductsGrid';
import { ProductDetailsPage } from 'products/ProductDetails';
```

## Key Technologies

- **React 19** - Latest React with automatic compiler optimizations
- **TypeScript** - Full type safety across federated modules
- **Module Federation** - Runtime micro frontend integration
- **Rspack** - Fast Rust-based bundler (primary)
- **Vite** - Alternative bundler configuration available
- **Nx** - Monorepo management and task orchestration
- **React Router** - Client-side routing
- **CSS Modules** - Component-scoped styling
- **pnpm** - Fast, efficient package manager

## Common Commands

```zsh
# Development
npx nx serve host              # Start host app
npx nx serve products          # Start products remote
npx nx run-many -t serve       # Start all apps

# Build
npx nx build host              # Build host
npx nx build products          # Build products
npx nx run-many -t build       # Build all apps

# Testing & Linting
npx nx test products           # Run tests
npx nx lint host               # Lint code
npx nx type-check products     # Type checking

# Utilities
npx nx graph                   # View dependency graph
npx nx show project host       # Show project details
npx nx list                    # List installed plugins
```
