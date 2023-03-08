import ThemePrimaryColor from './components/ThemePrimaryColor';
import Router from './routes';
import ThemeConfig from './theme';
import NotistackProvider from './components/NotistackProvider';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ThemeConfig>
      <ThemePrimaryColor>
        <NotistackProvider>
          <HelmetProvider>
            <ScrollToTop />
            <Router />
          </HelmetProvider>
        </NotistackProvider>
      </ThemePrimaryColor>
    </ThemeConfig>
  );
}

export default App;
