import { Container, Grid } from '@mui/material';
import React from 'react';

type GridLoggedInProps = {
  sidebar: React.ReactNode | React.ReactNode[];
  mainContent: React.ReactNode | React.ReactNode[];
};

export default function GridLoggedIn({
  sidebar,
  mainContent,
}: GridLoggedInProps) {
  return (
    <Grid container>
      <Grid
        item
        xs={2}
        sx={{
          display: { xs: 'none', md: 'block' },
        }}
      >
        {sidebar}
      </Grid>

      <Grid item xs={12} md={10} bgcolor="white">
        <Container>{mainContent}</Container>
      </Grid>
    </Grid>
  );
}
