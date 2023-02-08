import { Chip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

export default function () {
  return (
    <Box width="100%" display="flex" justifyContent="flex-end">
      <Chip avatar={<Avatar>EK</Avatar>} label="Eric Kobby" color="primary" clickable/>
    </Box>
  )
}