import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Typography } from "@mui/material";

const SideBarItem = ({ title, icon, badge }) => {
  return (
    <MenuItem sx={{ mt: 0.8 }}>
      <ListItemIcon style={{ color: "#9e9e9e" }}>{icon}</ListItemIcon>
      <Typography variant="body2" color="#9e9e9e">
        {title}
      </Typography>
      {badge && badge}
    </MenuItem>
  );
};

export default SideBarItem;
