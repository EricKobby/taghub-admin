import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AppBarOptions from './AppBarOptions';

const TopNav: React.FC = () => {
  return (
    <AppBar 
      position="static"
      style={{ background: 'transparent', color: '#1976d2' }}
      elevation={0}
    >
      <Toolbar variant="dense">
        <AppBarOptions />
      </Toolbar>
    </AppBar>
  );
}

export default TopNav;
