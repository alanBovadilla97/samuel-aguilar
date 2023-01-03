import { Button, Grid, styled, TextField, Box, Typography } from "@mui/material";

// -------------------------------------------------------------------------

const BoxStyled = styled(Box)(({ theme }) => ({
  background: theme.palette.common.white,
  borderRadius: 2,
  padding: theme.spacing(4)
}));

const Title = styled(Typography)(() => ({
  fontWeight: 600
}))

// -------------------------------------------------------------------------

export default function ContactMeForm() {
  return(
    <BoxStyled>
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
          <Button 
            variant="contained"
            sx={{ px: 4, fontWeight: 600 }}
            color="info"
          >
            Enviar
          </Button>
        </Grid>
      </Grid>
    </BoxStyled>
  );
};