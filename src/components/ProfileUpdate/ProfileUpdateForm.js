import React, { useContext } from "react";
import styles from "./ProfileUpdate.module.css";
import { FormItem, ProfileContext, ValidationSchema } from "./helpers";
import PersonIcon from "@mui/icons-material/Person";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";
//import axios from "axios";
import { useForm, FormProvider } from "react-hook-form";
import { useSnackbar } from "notistack";
import { yupResolver } from "@hookform/resolvers/yup";

const ProfileUpdateForm = () => {
  const methods = useForm({
    resolver: yupResolver(ValidationSchema),
  });
  const { userData, setUserData } = useContext(ProfileContext);
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveUserProfile = (formValues) => {
    enqueueSnackbar("User Profile has been saved", {
      variant: "success",
    });
    /* axios
      .post("userProfile", {
        formValues,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        enqueueSnackbar(response.data, {
          variant: "success",
        });
      })
      .catch(function (thrown) {
        let errorMessage = thrown.response.data
          ? thrown.response.data
          : "Error processing the request";
        enqueueSnackbar(errorMessage, {
          variant: "error",
        });
      });*/
  };
  const onFormInputChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };
  return (
    <FormProvider {...methods}>
      <form
        className={styles.ProfileUpdateForm}
        onSubmit={methods.handleSubmit(handleSaveUserProfile)}
      >
        <div className={styles.ProfileUpdateFormBody}>
          <FormItem
            label="First Name"
            name="firstName"
            icon={<PersonIcon />}
            changeHandler={onFormInputChange}
          />
          <FormItem
            label="Last Name"
            name="lastName"
            icon={<PersonIcon />}
            changeHandler={onFormInputChange}
          />
          <FormItem
            label="Display Name"
            name="displayName"
            icon={<AccountBoxIcon />}
          />
          <FormItem
            label="Email"
            name="email"
            icon={<MailOutlineIcon />}
            changeHandler={onFormInputChange}
          />
          <FormItem
            label="Phone No(Work)"
            name="workPhone"
            icon={<LocalPhoneIcon />}
            dataType="number"
          />
          <FormItem
            label="Phone No(Personal)"
            name="personalPhone"
            icon={<LocalPhoneIcon />}
            dataType="number"
          />
          <FormItem
            label="Location"
            name="location"
            icon={<LocationOnIcon />}
          />
        </div>
        <div className={styles.ProfileUpdateFormFooter}>
          <Button type="submit" variant="contained" size="small" color="error">
            Save Changes
          </Button>
          <Button type="reset" variant="contained" size="small" color="error">
            Reset
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default ProfileUpdateForm;
