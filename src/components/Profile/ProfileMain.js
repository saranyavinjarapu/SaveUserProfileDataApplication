import React, { useState } from "react";
import styles from "./ProfileMain.module.css";
import Header from "../Header/Header";
import ProfileUpdate from "../ProfileUpdate/ProfileUpdate";
import ProfileDisplay from "../ProfileDisplay/ProfileDisplay";
import { ProfileContext } from "../ProfileUpdate/helpers";
const ProfileMain = () => {
  const [userData, setUserData] = useState([]);
  return (
    <div className={styles.Main}>
      <ProfileContext.Provider value={{ userData, setUserData }}>
        <Header></Header>
        <div className={styles.UserProfile}>
          <ProfileUpdate></ProfileUpdate>
          <ProfileDisplay></ProfileDisplay>
        </div>
      </ProfileContext.Provider>
    </div>
  );
};

export default ProfileMain;
