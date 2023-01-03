import ThemePrimaryColor from './components/ThemePrimaryColor';
import Router from './routes';
import ThemeConfig from './theme';

function App() {
  return (
    <ThemeConfig>
      <ThemePrimaryColor>
        <Router />
      </ThemePrimaryColor>
    </ThemeConfig>
  );
}

export default App;
