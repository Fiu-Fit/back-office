'use client';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppBar, Toolbar } from '@mui/material';

export const Header = () => {
  return (
    <AppBar className='border-b border-gray-600' position='relative'>
      <Toolbar className='flex flex-row-reverse'>
        <AccountCircleIcon width={200} />
      </Toolbar>
    </AppBar>
  );
};
