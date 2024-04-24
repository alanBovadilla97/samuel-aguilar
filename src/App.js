import ThemePrimaryColor from './components/ThemePrimaryColor';
import Router from './routes';
import ThemeConfig from './theme';
import NotistackProvider from './components/NotistackProvider';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ThemeConfig>
      <ThemePrimaryColor>
        <NotistackProvider>
          <HelmetProvider>
          <I18nextProvider i18n={i18n}>
              <ScrollToTop />
              <Router />
            </I18nextProvider>
          </HelmetProvider>
        </NotistackProvider>
      </ThemePrimaryColor>
    </ThemeConfig>
  );
}

export default App;
