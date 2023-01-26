import { Button, Grid, styled, TextField, Typography, Paper } from "@mui/material";

// -------------------------------------------------------------------------

const PaperStyled = styled(Paper)(({ theme }) => ({
  background: theme.palette.common.white,
  borderRadius: 2,
  padding: theme.spacing(4)
}));

const Title = styled(Typography)(() => ({
  fontWeight: 600
}));

const ButtonSend = styled(Button)(({ theme }) => ({
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4), 
  fontWeight: 600,
  background: theme.palette.grey[700],
  '&:hover': {
    background: theme.palette.grey[800]
  }
}));

// -------------------------------------------------------------------------

export default function ContactMeForm() {
  return(
    <PaperStyled elevation={10}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Title>Informacion personal</Title>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
            label="Nombre" 
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
            label="Apellido" 
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField 
            label="Correo" 
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField 
            label="Mensaje" 
            size="small"
            fullWidth
            multiline
            rows={5}
          />
        </Grid>
        <Grid item sx={{ width: '100%', textAlign: 'center' }}>
          <ButtonSend variant="contained">
            Enviar
          </ButtonSend>
        </Grid>
      </Grid>
    </PaperStyled>
  );
};