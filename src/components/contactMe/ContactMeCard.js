import { useState } from "react";
import ReactCardFlip from "react-card-flip";

import { Box, Grid, IconButton, Tooltip, useTheme } from "@mui/material";
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
    justifyContent: 'center',
    alignItems: 'center',
    '& *': {
      fontFamily: 'none' 
    }
  },
  logo: {
    width: '50%',
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
    minHeight: '100%'
  },
  cardFlipContainer: {
    [theme.breakpoints.up('xs')]: {
      height: 200
    },
    [theme.breakpoints.up('sm')]: {
      height: 375
    },
    [theme.breakpoints.up('md')]: {
      height: 'auto'
    }
  },
  rotateButtonContainer: {
    display: 'flex',
    justifyContent: 'center'
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
    <Grid container className={classes.contactMeCardContainer}>
      <Grid item xs={12} md={11} className={classes.cardFlipContainer}>
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
          </Box>
          <Map />
        </ReactCardFlip>
      </Grid>
      <Grid item xs={12} md={1} className={classes.rotateButtonContainer}>
        <Tooltip title="Rotar" arrow placement="top">
          <IconButton  className={classes.rotateButton} onClick={handleFlipCard}>
            <ThreeSixtyIcon />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
};
