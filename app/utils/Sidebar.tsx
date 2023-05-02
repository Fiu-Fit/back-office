'use client';
import PersonIcon from '@mui/icons-material/Person';
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import Image from 'next/image';
import { ReactElement } from 'react';
import { drawerWidth } from '@/app/utils/constants';

export const SidebarItems: Array<{
  displayName: string;
  icon: ReactElement;
  link: string;
}> = [
  {
    displayName: 'Users',
    icon:        <PersonIcon />,
    link:        '/users',
  },
];
export const Sidebar = () => {
  return (
    <Drawer
      sx={{
        width:                drawerWidth,
        flexShrink:           0,
        '& .MuiDrawer-paper': {
          width:     drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant='permanent'
      anchor='left'
    >
      <div className='flex justify-center'>
        <Image
          src='/fiufit.svg'
          className='w-1/3 lg:block invert dark:invert-0 m-6'
          alt='FiuFit'
          width={50}
          height={50}
        />
      </div>

      <Divider />
      <List>
        {SidebarItems.map(({ displayName, icon, link }) => (
          <ListItem key={displayName} disablePadding>
            <ListItemButton href={link}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={displayName} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
