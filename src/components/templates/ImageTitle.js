import { Box, styled, Typography } from "@mui/material";

// -------------------------------------------------------------------------

const BoxStyled = styled(Box)(({ theme }) => ({
  position: 'relative'
}))

const ImageBox = styled((props) => {
  return <Box component="img" {...props} />
})(({ theme }) => ({
  width: '100%',
  height: '60vh',
  objectFit: 'cover',
  objectPosition: '0 25%'
}));

const BoxTitle = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  paddingLeft: theme.spacing(8),
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center'
}));

const Title = styled((props) => {
  return <Typography variant="h1" {...props} />
})(({ theme }) => ({
  color: theme.palette.common.white,
  letterSpacing: 10
}));

// -------------------------------------------------------------------------

export default function ImageTitle({ path, title }) {
  return(
    <BoxStyled>
      <ImageBox
        src={process.env.PUBLIC_URL + path} 
        alt="Contabilidad"
      />
      <BoxTitle>
        <Title>{title}</Title>
      </BoxTitle>
    </BoxStyled>
  );
};
