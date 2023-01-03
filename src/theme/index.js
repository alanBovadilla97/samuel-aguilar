import PropTypes from 'prop-types';
import { useMemo } from 'react';
// material
import { ThemeProvider, createTheme, StyledEngineProvider, CssBaseline } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// 
import palette from './palette';
// import shape from './shape';
import typography from './typography';
import breakpoints from './breakpoints';
import GlobalStyles from './globalStyles';
import shadows, { customShadows } from './shadows';

// ----------------------------------------------------------------------

ThemeConfig.propTypes = {
  children: PropTypes.node
};

// -------------------------------------------------------------------------

export default function ThemeConfig({ children }) {
  const { themeMode, themeDirection } = useSettings();
  const isLight = themeMode === 'light';

  const themeOptions = useMemo(
    () => ({
      palette: isLight ? { ...palette.light, mode: 'light' } : { ...palette.dark, mode: 'dark' },
      // shape,
      typography,
      breakpoints,
      direction: themeDirection,
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? customShadows.light : customShadows.dark
    }),
    [isLight, themeDirection]
  );

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

