import {
  List,
  ListItemButton,
  ListItemText,
  Stack,
  styled,
} from '@mui/material';
import { color } from '../../styles/default.ts';

const StyledSidebar = styled(Stack)(() => ({
  width: 200,
  height: '100vh',
  flexShrink: 0,
  backgroundColor: color.lightGrey,
  display: 'flex',
  flexDirection: 'column',
}));

const sideNavItems = [
  { id: 1, label: 'Personal' },
  { id: 2, label: 'Small Business' },
  { id: 3, label: 'Wealth Management' },
  { id: 4, label: 'Business & Institutions' },
  { id: 5, label: 'About Us' },
];
export default function () {
  return (
    <StyledSidebar spacing={2}>
      <List>
        {sideNavItems.map((item) => (
          <ListItemButton key={item.id}>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </StyledSidebar>
  );
}
