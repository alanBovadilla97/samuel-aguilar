import { useState } from "react";
import ReactCardFlip from "react-card-flip";

import { Box, IconButton, Stack, Tooltip, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';

import Map from "./Map";

// -------------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    '& *': {
      fontFamily: 'none' 
    }
  },
  logo: {
    width: '30%',
    alignSelf: 'flex-end'
  },
  infoContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-end'
  },
  info: {
    width: '35%'
  },
  contactMeCardContainer: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing(0.5)
  },
  rotateButton: {
    alignSelf: 'flex-end'
  }
}));

// -------------------------------------------------------------------------

export default function ContactMeCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const cardClasses = {
    card: {
      borderRadius: 5,
      padding: theme.spacing(4),
      background: 'url("https://www.transparenttextures.com/patterns/paper.png"), #fff',
      fontFamily: 'none',
      height: '100%'
    }
  };

  const handleFlipCard = () => {
    setIsFlipped(st => !st);
  };

  return(
    <Stack className={classes.contactMeCardContainer}>
      <ReactCardFlip
        isFlipped={isFlipped}
        cardStyles={{
          front: cardClasses.card,
          back: cardClasses.card
        }}
        containerStyle={{
          height: '100%',
          width: '100%'
        }}
      >
        <Box className={classes.root}>
          <Box component="img" src='/static/logo-sec.png'  alt="logo" className={classes.logo} />
          <Box className={classes.infoContainer}>
            <Box component="img" src="/static/signature-2.png" alt="signature" className={classes.info} />
          </Box>
        </Box>
        {/* <p onClick={handleFlipCard}> */}
          <Map />
        {/* </p> */}
      </ReactCardFlip>
      <Tooltip title="Rotar" arrow placement="top">
        <IconButton  className={classes.rotateButton} onClick={handleFlipCard}>
          <ThreeSixtyIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};
