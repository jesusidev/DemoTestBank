import { Container, styled, Typography } from '@mui/material';

type ContentProps = {
  title?: string;
  children: React.ReactNode | React.ReactNode[];
};

const StyledContainer = styled(Container)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '4em 0',
}));
export default function Content({ title, children }: ContentProps) {
  return (
    <StyledContainer>
      {title && <Typography variant="h1">{title}</Typography>}
      {children}
    </StyledContainer>
  );
}
