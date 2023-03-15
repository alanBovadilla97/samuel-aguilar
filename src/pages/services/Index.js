import { Container, Typography } from "@mui/material";
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';

import { useNavigate } from "react-router-dom";

import Page from "src/components/Page";
import ImageTitle from "src/components/templates/ImageTitle";
import StaticList from "src/components/templates/StaticList";

import { PATH_SERVICES } from "src/routes/path";

export default function Index() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const ITEMS = [
    { title: 'Contabilidad', icon: <AccountBalanceOutlinedIcon />, action: () => handleNavigate(PATH_SERVICES.accounting)},
    { title: 'Auditorias' , icon: <AccountBalanceOutlinedIcon />, action: () => handleNavigate(PATH_SERVICES.accounting)}
  ];

  return(
    <Page title="Servicios | Samuel Aguilar">
      <ImageTitle path="/static/services-index.jpeg" title="Servicios" />
      <Container maxWidth="contentSize" sx={{ py: 2 }}>
      <Typography variant="h3">Servicios</Typography>
      <Typography pt={2}>
          Nuestra experiencia nos permite ofrecer una variedad de servicios respaldados con alianzas de 
          empresas tecnológicas que automatizan los procesos por ti. Gestionamos y minimizamos los riesgos 
          a los que tu negocio está expuesto en materia de finanzas corporativas, optimización de recursos, 
          fraude y corrupción, y auditoría interna.
        </Typography>
        <StaticList items={ITEMS} />
      </Container>
    </Page>
  );
};
