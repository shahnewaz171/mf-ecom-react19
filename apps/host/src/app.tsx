import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { registerRemotes } from '@module-federation/enhanced/runtime';
import { ErrorBoundary } from 'react-error-boundary';
import App from './app/app';

registerRemotes([
  {
    name: 'products',
    alias: 'products',
    entry: 'http://localhost:4201/mf-manifest.json',
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ErrorBoundary
        fallback={<div>Something went wrong.</div>}
        onError={(err) => console.log(err)}
      >
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);
