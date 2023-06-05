import React from "react";
import styles from "./ProfileUpdate.module.css";
import ProfileUpdateForm from "./ProfileUpdateForm";

const ProfileUpdate = () => {
  return (
    <div className={styles.ProfileUpdate}>
      My Profile
      <ProfileUpdateForm></ProfileUpdateForm>
    </div>
  );
};

export default ProfileUpdate;
