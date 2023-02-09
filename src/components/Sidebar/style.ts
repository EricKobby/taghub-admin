import styled from '@emotion/styled';
import { List } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import { NavLink } from 'react-router-dom';

export const NavWrapper =  styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  flex: 15%;
  color: #5c5c5c !important;
  border-right: 1px solid #E7EBF0;
`;

export const LogoHolder = styled.div`
  min-height: 49px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  border-bottom: 1px solid #E7EBF0;
  cursor: pointer;
`;

const StyledNav = styled(List)`
  height: 100%;
  overflow: auto hidden;
`;

export const ListItem = styled(ListItemButton)`
  border-radius: 8px;
  & span {
    font-size: 0.875rem;
    line-height: 1.5;
  }

  & svg {
    color: #1976D2;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;

export default StyledNav;