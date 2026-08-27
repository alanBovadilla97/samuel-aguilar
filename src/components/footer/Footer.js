import { Box, Container, Grid, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
// components
import Copyright from "./Copyright";
import { PATH_SERVICES } from "src/routes/path";
import FooterList from "./FooterList";
// icons
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SocialNetworks from "./SocialNetworks";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// -------------------------------------------------------------------------

const BoxStyled = styled(Box)(({ theme }) => ({
  background: theme.palette.grey[800],
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(8),
}));

const FOOTER_SERVICE_ITEMS = [
  { id: 'accounting', path: PATH_SERVICES.accounting },
  { id: 'auditing', path: PATH_SERVICES.index },
];

// -------------------------------------------------------------------------

export default function Footer() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const about = [{ text: t('footer.about') }];

  const services = FOOTER_SERVICE_ITEMS.map(({ id, path }) => ({
    text: t(`services.items.${id}.title`),
    action: () => navigate(path),
  }));

  const contact = [
    { text: 'contacto@blackstock.com.mx', icon: <ContactMailIcon /> },
  ];

  const sns = [
    { name: 'Facebook', icon: <FacebookIcon />, url: 'https://www.facebook.com/BlackStock-Tax-and-Legal-112262551906624' },
    { name: 'Instagram', icon: <InstagramIcon />, url: 'https://www.instagram.com/bstaxandlegal' },
    { name: 'Linkedin', icon: <LinkedInIcon /> }
  ];

  return (
    <>
      <BoxStyled>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item xs={12} md={6}>
              <FooterList img={process.env.PUBLIC_URL + '/static/logo-white.png'} items={about} />
            </Grid>
            <Grid item xs={12} md={3}>
              <FooterList title={t('footer.sections.services')} items={services} />
            </Grid>
            <Grid item xs={12} md={3}>
              <FooterList title={t('footer.sections.contact')} items={contact} />
            </Grid>
          </Grid>
          <SocialNetworks items={sns} />
        </Container>
      </BoxStyled>
      <Copyright />
    </>
  );
};
