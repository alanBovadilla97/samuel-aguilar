import { useEffect, useState } from 'react';

import { Box, Button, styled, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { PATH_SERVICES } from 'src/routes/path';

// -------------------------------------------------------------------------

const Container = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

const Title = styled(Box)(({ theme }) => ({
  width: '100%',
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
  fontSize: '1rem',
  letterSpacing: 2,
  '&:hover': {
    background: theme.palette.common.white,
    color: theme.palette.common.black,
    border: `4px solid ${theme.palette.common.white}`
  }
}));

// -------------------------------------------------------------------------

export default function IntroImage() {
  const navigate = useNavigate();
  const [offset, setOffset] = useState(0);

  const handleOpenServices = () => {
    navigate(PATH_SERVICES.index);
  };

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
}, []);

  return(
    <Container>
      <Title>
        {/* <Typography variant="h2" letterSpacing={8}>
          BLACKSTOCK
        </Typography>
        <Typography variant="h5" sx={{ lineHeight: 0 }}>
          Expertos en contabilidad
        </Typography> */}
        <Box component="img" src={process.env.PUBLIC_URL + '/static/logo-white.png'} alt="BLACKSTOCK" sx={{ width: 400 }} />
        <ButtonServices variant="outlined" color="inherit" onClick={handleOpenServices}>
          Servicios
        </ButtonServices>
      </Title>
      <BoxStyled
        component="img" 
        src={process.env.PUBLIC_URL + '/static/skyscraper.png'} 
        alt="logo"
        // sx={{ transform: `translate(0px, ${offset}px)`}}
      />
    </Container>
  );
}
