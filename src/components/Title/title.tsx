import { Typography } from '@mui/material';

export default function Title({ title }: { title: string }) {
  return (
    <Typography variant="h2" marginBottom={'1em'}>
      {title}
    </Typography>
  );
}
