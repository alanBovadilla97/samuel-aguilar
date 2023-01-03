import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import LoadingScreen from "src/components/LoadingScreen";

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
      element: <Index />
    }
  ])
};

// -------------------------------------------------------------------------

const Index = Loadable(lazy(() => import('src/pages/Index')));