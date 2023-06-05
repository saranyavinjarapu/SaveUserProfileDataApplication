import React, { useContext } from "react";
import styles from "./ProfileDisplay.module.css";
import ProfilePicture from "../../assets/user_icon.png";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { ProfileContext } from "../ProfileUpdate/helpers";

const ProfileDisplay = () => {
  const { userData } = useContext(ProfileContext);
  const { firstName, lastName, email } = userData;
  return (
    <div className={styles.ProfileDisplay}>
      <div className={styles.ProfileDisplayContainer}>
        <img alt="user" src={ProfilePicture} />
        <div className={styles.CameraIcon}>
          <CameraAltIcon></CameraAltIcon>
        </div>
        <h3>
          {firstName ? firstName : "First"} {lastName ? lastName : "Last Name"}
        </h3>
        <p>{email ? email : "User Email"}</p>
      </div>
    </div>
  );
};

export default ProfileDisplay;
