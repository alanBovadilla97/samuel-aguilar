import { forwardRef } from 'react';
import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';

// -------------------------------------------------------------------------

const Page = forwardRef(({ children, title = '', ...other}, ref) => {
  return (
    <Box ref={ref} {...other}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </Box>
  );
});

export default Page;