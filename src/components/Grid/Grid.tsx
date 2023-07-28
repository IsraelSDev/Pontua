import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '~/components/Card/Card';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid({ data }) {
  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{ borderBottom: ' 1px solid #EAECF0', margin: '40px 0', paddingBottom: '32px' }}
    >
      <Grid container spacing={2}>
        {data ? (
          data.map((hero, index) => {
            if (index != 8 && index != 9) {
              return (
                <Grid xs={6} md={3}>
                  <Card data={hero} />
                </Grid>
              );
            } else {
              return (
                <Grid xs={6} md={6}>
                  <Card data={hero} />
                </Grid>
              );
            }
          })
        ) : (
          <Grid xs={6} md={3}>
            <Card />
          </Grid>
        )}
      </Grid>
    </Box>
  );
}