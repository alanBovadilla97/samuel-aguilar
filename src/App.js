import ThemePrimaryColor from './components/ThemePrimaryColor';
import Router from './routes';
import ThemeConfig from './theme';
import NotistackProvider from './components/NotistackProvider';

function App() {
  return (
    <ThemeConfig>
      <ThemePrimaryColor>
        <NotistackProvider>
          <Router />
        </NotistackProvider>
      </ThemePrimaryColor>
    </ThemeConfig>
  );
}

export default App;
