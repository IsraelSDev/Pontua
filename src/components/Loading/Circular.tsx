import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Circular({ noMargin }) {
  return !noMargin ? (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '250px' }}>
      <CircularProgress size={50} />
    </Box>
  ) : (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CircularProgress size={50} />
    </Box>
  );
}
