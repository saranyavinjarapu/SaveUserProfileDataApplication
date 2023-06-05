import React, { useContext } from "react";
import styles from "./Header.module.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import dayjs from "dayjs";
import UserIcon from "../../assets/user_icon.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ProfileContext } from "../ProfileUpdate/helpers";

const Header = () => {
  const { userData } = useContext(ProfileContext);
  const userFirstName = userData.firstName ? userData.firstName : "User";
  const currentFormattedDate = dayjs(new Date()).format("MMMM DD, YYYY");
  return (
    <div className={styles.Header}>
      <div>
        <p className={styles.GreetingHeadline}>
          Good Morning,{" "}
          <span className={styles.GreetingName}>{userFirstName}</span>
        </p>
        <p className={styles.GreetingDate}>{currentFormattedDate}</p>
      </div>
      <div className={styles.Account}>
        <Button
          variant="contained"
          size="small"
          color="error"
          startIcon={<AddIcon />}
        >
          ADD PROJECT
        </Button>
        <img alt="user-icon" src={UserIcon} />
        <div className={styles.AccountInfo}>
          <p className={styles.AccountName}>{userFirstName}</p>
          <p className={styles.AccountRole}>Project Manager</p>
        </div>
        <ArrowDropDownIcon style={{ color: "#908e8e" }}></ArrowDropDownIcon>
      </div>
    </div>
  );
};

export default Header;
