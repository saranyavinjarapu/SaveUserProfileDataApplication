import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { createContext } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./ProfileUpdate.module.css";
import * as yup from "yup";

export const ValidationSchema = yup.object().shape({
  workPhone: yup.string().min(3, "too short").max(10, "too long"),
  personalPhone: yup.string().min(3, "too short").max(10, "too long"),
  email: yup.string().required("Email is required").email("Email is invalid"),
});

export const FormItem = ({ label, name, icon, changeHandler, dataType }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <TextField
        type={dataType && dataType}
        label={label}
        size="small"
        {...register(name)}
        required
        onChange={changeHandler}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),
        }}
      />
      {Object.keys(errors).length > 0 && errors[name] && (
        <p className={styles.ErrorDisplay}>{errors[name]["message"]}</p>
      )}
    </div>
  );
};

export const ProfileContext = createContext(null);
