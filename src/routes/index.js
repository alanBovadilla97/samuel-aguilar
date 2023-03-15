import { lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import LoadingScreen from "src/components/LoadingScreen";
import MainLayout from "src/layouts/main/Index";

// -------------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  return (
    <Suspense
      fallback={
        <LoadingScreen 
          sx={{
            top: 0,
            left: 0,
            width: 1,
            zIndex: 9999,
            position: 'fixed'
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
}

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Index />
        }
      ]
    },
    {
      path: 'servicios',
      element: <MainLayout />,
      children: [
        {
          path: 'contabilidad',
          element: <Accounting />
        }
      ]
    },
    {
      path: '*',
      element: <MainLayout />,
      children: [
        { path: '404', element: <p>Error 404</p> },
        { path: '*', element: <Navigate to="/404" replace /> }
      ]
    }
  ])
};

// -------------------------------------------------------------------------

const Index = Loadable(lazy(() => import('src/pages/Index')));
// services
const Accounting = Loadable(lazy(() => import('src/pages/services/Accounting')));