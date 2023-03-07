import ThemePrimaryColor from './components/ThemePrimaryColor';
import Router from './routes';
import ThemeConfig from './theme';
import NotistackProvider from './components/NotistackProvider';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <ThemeConfig>
      <ThemePrimaryColor>
        <NotistackProvider>
          <HelmetProvider>
            <Router />
          </HelmetProvider>
        </NotistackProvider>
      </ThemePrimaryColor>
    </ThemeConfig>
  );
}

export default App;
