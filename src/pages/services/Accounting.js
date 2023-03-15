import { Container, List, Typography } from "@mui/material";
import Page from "src/components/Page";
import ServiceListItem from "src/components/services/ServiceListItem";
import ExpandableList from "src/components/templates/ExpandableList";
import ImageTitle from "src/components/templates/ImageTitle";

// -------------------------------------------------------------------------

export default function Accounting() {
  const ITEMS = [
    {
      title: 'Servicios de auditoría interna',
      content: <>
        <Typography>
          Ponemos a tu disposición a nuestros Certified Fraud Examiners y expertos en investigación y contabilidad forense 
          para identificar y cuantificar daños y riegos que afecten tu patrimonio u operaciones de tu compañía:
        </Typography>
        <List dense>
          <ServiceListItem 
            text="Investigaciones de antecedentes de individuos y corporativos con la finalidad de 
                identificar riesgos en transacciones (laborales o de inversión) y de índole reputacional."  
          />
          <ServiceListItem 
            text="Contabilidad forense como parte de una investigación de fraude o de un proceso de reclamo de seguro."
          />
        </List>
      </>
    },
    {
      title: 'Servicios de auditoría interna',
      content: <>
        <Typography>
          Ponemos a tu disposición a nuestros Certified Fraud Examiners y expertos en investigación y contabilidad forense 
          para identificar y cuantificar daños y riegos que afecten tu patrimonio u operaciones de tu compañía:
        </Typography>
      </>
    }
  ];

  return(
    <Page title='Contabilidad | Samuel Aguilar'>
      <ImageTitle path="/static/accounting.jpeg" title="Contabilidad" />
      <Container maxWidth="contentSize" sx={{ py: 2 }}>
        <Typography variant="h3">Contabilidad</Typography>
        <Typography pt={2}>
          Nuestra experiencia nos permite ofrecer una variedad de servicios respaldados con alianzas de 
          empresas tecnológicas que automatizan los procesos por ti. Gestionamos y minimizamos los riesgos 
          a los que tu negocio está expuesto en materia de finanzas corporativas, optimización de recursos, 
          fraude y corrupción, y auditoría interna.
        </Typography>
        <ExpandableList items={ITEMS} title="Servicios de contabilidad" />
      </Container>
    </Page>
  );
};
