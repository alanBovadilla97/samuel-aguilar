import { SnackbarProvider } from 'notistack';

export default function NotistackProvider({ children }) {
  return(
    <SnackbarProvider
      dense
      maxSnack={1}
      preventDuplicate
      autoHideDuration={5000}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      style={{
        whiteSpace: 'pre-line',
        textAlign: 'center'
      }}
    >
      {children}
    </SnackbarProvider>
  );
};
