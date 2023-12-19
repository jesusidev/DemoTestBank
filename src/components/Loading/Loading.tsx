import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { color } from '../../styles/default.ts';

export default function Loading() {
  return (
    <Container
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: color.darkBlue,
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          textAlign="center"
          variant="h3"
          style={{ marginTop: 16 }}
          color={'white'}
        >
          Welcome to Trayt Bank
        </Typography>
        <Typography
          textAlign="center"
          variant="h6"
          style={{ marginTop: 16 }}
          color={'white'}
        >
          Logging you in securly...
        </Typography>
        <Grid container justifyContent="center">
          <CircularProgress
            size={80}
            thickness={4}
            color={'info'}
            content={'loading'}
          />
        </Grid>
      </motion.div>
    </Container>
  );
}
