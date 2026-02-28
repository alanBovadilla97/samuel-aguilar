import { Box, Container, Typography, styled, Grid } from "@mui/material";

import Serviceitem from "./ServiceItem";

import { useNavigate } from "react-router-dom";
import { PATH_SERVICES } from "src/routes/path";
import { useTranslation } from "react-i18next";

// -------------------------------------------------------------------------

const BoxStyled = styled(Box)(({ theme }) => ({
  background: theme.palette.grey[800],
}));

const ContainerStyled = styled(Container)(({ theme }) => ({
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.info.contrastText,
  fontWeight: 600
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 300,
  width: '70%'
}));

// -------------------------------------------------------------------------

export default function Services () {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const SERVICES = [
    {
      title: 'Contabilidad', 
      image: '/static/contabilidad.jpg.webp',
      description: 'Ofrecemos servicios contables precisos y eficientes para garantizar la integridad financiera de tu empresa',
      action: () => handleNavigate(PATH_SERVICES.accounting)
    },
    {
      title: 'Auditorias', 
      image: '/static/auditorias.webp',
      description: 'Nuestros servicios de auditoría están diseñados para brindarte una evaluación exhaustiva y objetiva de tus estados financieros con un enfoque detallado y profesional'
    },
    {
      title: 'Impuestos', 
      image: 'static/impuestos.jpeg',
      description: 'Simplificamos la complejidad del cumplimiento tributario para tu empresa. Desde la preparación de declaraciones fiscales hasta la planificación estratégica'
    },
    {
      title: 'Consultoria', 
      image: 'static/consultoria.jpeg',
      description: 'Nuestra consultoría financiera va más allá de los números. Colaboramos estrechamente contigo para comprender tus metas comerciales y desarrollar estrategias financieras personalizadas'
    }
  ];

  return(
    <BoxStyled px={4} py={6}>
      <ContainerStyled maxWidth="xl">
        <Title variant="h3">{t('Services Title')}</Title>
        <Subtitle>
          {t('Services Description')}
        </Subtitle>
        <Grid container mt={5} spacing={5}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {SERVICES.map(service => (
                <Grid item xs={12} md={6} lg={3}>
                  <Serviceitem service={service} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </ContainerStyled>
    </BoxStyled>
  );
};
