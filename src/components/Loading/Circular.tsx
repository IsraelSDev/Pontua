import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Circular() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '250px' }}>
      <CircularProgress size={50} />
    </Box>
  );
}
