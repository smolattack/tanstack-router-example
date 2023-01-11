import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import {
  Outlet,
  RouterProvider,
  Link,
  createReactRouter,
  createRouteConfig,
} from '@tanstack/react-router';

const rootRoute = createRouteConfig({
  component: () => (
    <>
      <div>
        <Link to="/">Home</Link> <Link to="/about">About</Link>
      </div>
      <hr />
      <Outlet />
    </>
  ),
});

const indexRoute = rootRoute.createRoute({
  path: '/',
  component: Index,
});

const aboutRoute = rootRoute.createRoute({
  path: '/about',
  component: About,
});

const routeConfig = rootRoute.addChildren([indexRoute, aboutRoute]);

const router = createReactRouter({ routeConfig });

function App() {
  return <RouterProvider router={router} />;
}

function Index() {
  return (
    <div>
      <h3>Welcome Home!!</h3>
    </div>
  );
}

function About() {
  return <div>Hello from About!</div>;
}

const rootElement = document.getElementById('app')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

declare module '@tanstack/react-router' {
  interface RegisterRouter {
    router: typeof router;
  }
}
