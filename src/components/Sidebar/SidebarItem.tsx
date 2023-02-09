import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap, SxProps, Theme } from "@mui/material";
import { ListItem, StyledNavLink } from "./style";
import { To } from "react-router-dom";
import { useCallback } from "react";

type IconType = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
  muiName: string;
}

interface SidebarItemProps {
  icon: IconType;
  text: string;
  to?: To;
  onClick?: () => void;
  children?: React.ReactNode;
  sx?: SxProps<Theme>
}

const renderItem = ({ icon: Icon, text, children, onClick, sx }: Omit<SidebarItemProps, "to">) => {
  return (
    <ListItem onClick={onClick} sx={sx}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={text} />
      {children}
    </ListItem>
  );
};


export default function ({ to, ...props }: SidebarItemProps) {
  if (!to) return renderItem(props)
  return (
    <StyledNavLink className='__link' to={to}>
      {renderItem(props)}
    </StyledNavLink>
  );
}