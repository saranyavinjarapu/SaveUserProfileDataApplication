import React from "react";
import styles from "./Sidebar.module.css";
import SideBarItem from "./helpers";
import { Box, IconButton } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CompanyNameLogo from "../../assets/company_name.png";
import MenuList from "@mui/material/MenuList";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import WindowIcon from "@mui/icons-material/Window";
import ForumIcon from "@mui/icons-material/Forum";
import Badge from "@mui/material/Badge";
import SourceIcon from "@mui/icons-material/Source";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const Siderbar = () => {
  return (
    <div className={styles.Sidebar}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        ml="15px"
      >
        <img
          alt="company-name-logo"
          width="120px"
          height="50px"
          src={CompanyNameLogo}
          style={{
            cursor: "pointer",
            display: "flex",
          }}
        />
        <IconButton style={{ transform: "scale(1.2)" }}>
          <MenuOutlinedIcon />
        </IconButton>
      </Box>
      <Box mt="35px">
        <MenuList>
          <SideBarItem title="Home" icon={<HomeIcon />} />
          <SideBarItem title="Projects" icon={<ArticleIcon />} />
          <SideBarItem title="Dashboard" icon={<WindowIcon />} />
          <SideBarItem
            title="Messages"
            icon={<ForumIcon />}
            badge={
              <Badge badgeContent="06" sx={{ pl: 5 }} color="error"></Badge>
            }
          />
          <SideBarItem title="Documents" icon={<SourceIcon />} />
          <SideBarItem title="Organizations" icon={<CorporateFareIcon />} />
          <SideBarItem title="Settings" icon={<SettingsIcon />} />
        </MenuList>
      </Box>
      <Box position="absolute" bottom="100px">
        <SideBarItem
          title="Logout"
          icon={<LogoutIcon />}
          sx={{ position: "absolute", bottom: "10px" }}
        />
      </Box>
    </div>
  );
};

export default Siderbar;
