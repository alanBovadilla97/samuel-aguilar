// material
import { Box, CircularProgress, styled } from "@mui/material";

// -------------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.default
}))

// -------------------------------------------------------------------------

export default function LoadingScreen({ ...other }) {
  return(
    <RootStyle>
      <Box sx={{ width: 70 }} align="center">
        <CircularProgress size={70} />
      </Box>
    </RootStyle>
  );
};