import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import Layout from './layout';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary
        fallback={<div>Something went wrong.</div>}
        onError={(err) => console.log(err)}
      >
        <Layout>
          <App />
        </Layout>
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);
