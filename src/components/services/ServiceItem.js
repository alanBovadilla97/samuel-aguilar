import { Stack, Typography, styled, Tooltip, Box } from "@mui/material";

// -------------------------------------------------------------------------

const StackStyled = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  gap: theme.spacing(0.5),
  border: '1px solid transparent',
  transition: 'transform 200ms',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  height: '100%',
  '&:hover': {
    transform: 'scale(1)',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  }
}));

const ServiceImage = styled(Box)(({ theme }) => ({
 borderRadius: '50%',
 width: 250,
 height: 250,
 objectFit: 'cover'
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.info.contrastText,
  fontWeight: 600,
  fontSize: '1.3rem',
  letterSpacing: 2,
  marginTop: theme.spacing(6)
}));

const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[500],
  fontWeight: 500,
  fontSize: '1rem',
  width: '70%'
}));

// -------------------------------------------------------------------------

export default function Serviceitem ({ service }) {
  return(
    <Tooltip title="Leer mas" placement="top" arrow>
      <StackStyled onClick={service.action}>
        <ServiceImage 
          component="img"
          src={service.image}
          alt={service.title}
        />
        <Title>{service.title}</Title>
        <Description>{service.description}</Description>
      </StackStyled>
    </Tooltip>
  );
};
