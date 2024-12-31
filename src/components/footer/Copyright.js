import { DateTime } from "luxon";
import { Box, styled, Typography } from "@mui/material";

// -------------------------------------------------------------------------

const BoxStyled = styled(Box)(({ theme }) => ({
  background: theme.palette.grey[900],
  padding: theme.spacing(1),
  textAlign: 'center'
}));

const TypographyStyled = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 500,
  fontSize: '0.8rem'
}));

// -------------------------------------------------------------------------

export default function Copyright() {
  const currentYear = DateTime.now().year;

  return (
    <BoxStyled>
      <TypographyStyled>
        ©{currentYear}. BLACKSTOCK
      </TypographyStyled>
    </BoxStyled>
  );
};
