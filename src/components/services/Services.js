import { Box, Container, Typography, styled, Grid } from "@mui/material";

import Serviceitem from "./ServiceItem";

import { useNavigate } from "react-router-dom";
import { PATH_SERVICES } from "src/routes/path";
import { useTranslation } from "react-i18next";

// -------------------------------------------------------------------------

const BoxStyled = styled(Box)(({ theme }) => ({
  background: theme.palette.grey[800],
}));

const ContainerStyled = styled(Container)(() => ({
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.info.contrastText,
  fontWeight: 600
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 300,
  maxWidth: '70%',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'left',
    alignSelf: 'center',
    maxWidth: '100%',
  },
}));

// -------------------------------------------------------------------------

const SERVICE_ITEM_CONFIG = [
  {
    id: 'accounting',
    image: '/static/contabilidad.jpg.webp',
    path: PATH_SERVICES.accounting,
  },
  {
    id: 'auditing',
    image: '/static/auditorias.webp',
  },
  {
    id: 'taxes',
    image: '/static/impuestos.jpeg',
  },
  {
    id: 'consulting',
    image: '/static/consultoria.jpeg',
  },
];

// -------------------------------------------------------------------------

export default function Services () {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const services = SERVICE_ITEM_CONFIG.map(({ id, image, path }) => ({
    id,
    image,
    title: t(`services.items.${id}.title`),
    description: t(`services.items.${id}.description`),
    ...(path && { action: () => handleNavigate(path) }),
  }));

  return(
    <BoxStyled px={4} py={6}>
      <ContainerStyled maxWidth="xl">
        <Title variant="h3">{t('services.title')}</Title>
        <Subtitle>
          {t('services.description')}
        </Subtitle>
        <Grid container spacing={2} mt={0}>
          {services.map((service) => (
            <Grid item xs={12} md={6} lg={3} key={service.id}>
              <Serviceitem service={service} />
            </Grid>
          ))}
        </Grid>
      </ContainerStyled>
    </BoxStyled>
  );
};
