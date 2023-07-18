import { Box, Container, Typography, styled, Grid } from "@mui/material";
// icons
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import Serviceitem from "./ServiceItem";
import { useNavigate } from "react-router-dom";
import { PATH_SERVICES } from "src/routes/path";

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

const ServicesImage = styled(Container)(({ theme }) => ({
  backgroundImage: 'url(/static/corp-meeting.jpeg)',
  width: '100%',
  height: '100%',
  boxShadow: `0 0 15px 6px ${theme.palette.grey[800]} inset`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  padding: 0
}));

// -------------------------------------------------------------------------

export default function Services () {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const SERVICES = [
    {
      title: 'Contabilidad', 
      icon: <AccountBalanceOutlinedIcon />,
      action: () => handleNavigate(PATH_SERVICES.accounting)
    },
    {
      title: 'Auditorias', icon: <AccountBalanceOutlinedIcon />
    },
    {
      title: 'Test', icon:  <AccountBalanceOutlinedIcon />
    },
    {
      title: 'Test', icon:  <AccountBalanceOutlinedIcon />
    }
  ];

  return(
    <BoxStyled px={4} py={6}>
      <ContainerStyled maxWidth="xl">
        <Title variant="h3">Servicios</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel congue tellus. Pellentesque congue lacinia elit id condimentum. 
          In hac habitasse platea dictumst. Aliquam accumsan, ante placerat aliquam lacinia, velit nunc tincidunt massa, id euismod augue 
          dui quis ex.
        </Subtitle>
        <Grid container mt={5} spacing={5}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {SERVICES.map(service => (
                <Grid item xs={12} md={6}>
                  <Serviceitem service={service} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={0} md={6}>
            <ServicesImage />
          </Grid>
        </Grid>
      </ContainerStyled>
    </BoxStyled>
  );
};
