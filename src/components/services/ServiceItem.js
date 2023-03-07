import { Avatar, Stack, Typography, styled, Tooltip } from "@mui/material";

// -------------------------------------------------------------------------

const StackStyled = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  gap: theme.spacing(0.5),
  border: '1px solid transparent',
  transition: 'transform 200ms',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  '&:hover': {
    transform: 'scale(1.1)',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  }
}));

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  width: 50,
  height: 50,
  color: theme.palette.grey[800]
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.info.contrastText,
  fontWeight: 600,
  letterSpacing: 2
}));

const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[500],
  fontWeight: 300,
  fontSize: '0.95rem',
  width: '70%'
}));

// -------------------------------------------------------------------------

export default function Serviceitem ({ service }) {
  return(
    <Tooltip title="Leer mas" placement="top" arrow>
    <StackStyled onClick={service.action}>
      <AvatarStyled>{service.icon}</AvatarStyled>
      <Title>{service.title}</Title>
      <Description>
        Duis elementum ac lorem vitae tincidunt. Praesent velit magna, viverra et orci eu, sollicitudin aliquet sapien.
        Cras sit amet rhoncus lectus. Ut eu euismod ex, vitae ultrices neque. 
      </Description>
    </StackStyled>
    </Tooltip>
  );
};
