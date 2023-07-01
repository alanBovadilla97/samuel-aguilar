import { useState } from "react";
// utils
import ReactCardFlip from "react-card-flip";
import { Box, Stack, styled, Typography, useTheme } from "@mui/material";
import Map from "./Map";

// -------------------------------------------------------------------------

const Name = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '0.7rem',
  letterSpacing: '1px',
  '&::first-letter': {
    fontSize: '1rem'
  }
}));

const LastName = styled(Typography)(() => ({
  fontWeight: 600,
  letterSpacing: '1px'
}));

const Description = styled(Typography)(() => ({
  fontWeight: 600,
  letterSpacing: '1px',
  fontSize: '0.85rem'
}));

const Phone = styled(Typography)(() => ({
  fontWeight: 600,
  fontSize: '0.9rem',
  textAlign: 'left'
}));

const Email = styled(Typography)(() => ({
  fontWeight: 600,
  fontSize: '0.9rem',
  textAlign: 'right'
}));

// -------------------------------------------------------------------------

export default function ContactMeCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlipCard = () => {
    setIsFlipped(st => !st);
  };
  const theme = useTheme();

  const classes = {
    card: {
      borderRadius: 5,
      padding: theme.spacing(2),
      background: 'url("https://www.transparenttextures.com/patterns/paper.png"), #fff',
      fontFamily: 'none',
      height: '100%'
    }
  };

  return(
    <ReactCardFlip
      isFlipped={isFlipped}
      cardStyles={{
        front: classes.card,
        back: classes.card
      }}
      containerStyle={{
        height: '100%',
        width: '100%'
      }}
    >
      <Box onClick={handleFlipCard} sx={{ '& *': {fontFamily: 'none' }}}>
        <Phone>33-1280-2544</Phone>
        <Stack alignItems="center" py={5}>
          <Stack direction="row" gap={0.5}>
            <Name>SAMUEL</Name>
            <LastName>AGUILAR</LastName>
          </Stack>
          <Description>Contador Público</Description>
        </Stack>
        <Email>samuel.aguilar.lcp@gmail.com</Email>
      </Box>
      {/* <p onClick={handleFlipCard}> */}
        <Map />
      {/* </p> */}
    </ReactCardFlip>
  );
};
