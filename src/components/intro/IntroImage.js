import { useEffect, useState } from 'react';

import { Box, Button, styled, Typography } from "@mui/material";

// -------------------------------------------------------------------------

const Container = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}))

const Title = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  float: 'left',
  position: 'absolute',
  zIndex: 1000,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  color: theme.palette.common.white,
  fontWeight: 'bold',
  borderRadius: 3,
  padding: theme.spacing(4)
}));

const BoxStyled = styled(Box)(() => ({
  width: '100%'
}));

const ButtonServices = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(6),
  border: '4px solid',
  borderRadius: 0,
  padding: `${theme.spacing(0.5)} ${theme.spacing(8)}`,
  fontSize: '1rem'
}));

// -------------------------------------------------------------------------

export default function IntroImage() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
}, []);

  return(
    <Container>
      <Title>
        <Typography variant="h2" letterSpacing={8}>
          SAMUEL AGUILAR
        </Typography>
        <Typography variant="h5" sx={{ lineHeight: 0 }}>
          Experto en contabilidad
        </Typography>
        <ButtonServices variant="outlined" color="inherit">
          Servicios
        </ButtonServices>
      </Title>
      <BoxStyled
        component="img" 
        src={process.env.PUBLIC_URL + '/static/landmark.jpg'} 
        alt="logo"
        // sx={{ transform: `translate(0px, ${offset}px)`}}
      />
    </Container>
  );
}
