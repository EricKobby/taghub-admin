import Box from '@mui/material/Box';
import { Appbar, Divider, Sidebar } from 'components';
import React, { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import LayoutWrap, { Content } from './Layout.style';

const Layout: React.FC<PropsWithChildren> = ({children}) => {
  return (
      <LayoutWrap>
        <Sidebar />
        <Box 
          display="flex" 
          flex="85%" 
          width="100%" flexDirection="column"
        >
          <Appbar />
          <Divider />
          <Content>
            {<Outlet />}
          </Content>
        </Box>
      </LayoutWrap>
  );
}

export default Layout;