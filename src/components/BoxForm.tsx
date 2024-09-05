import React from "react";
import { TextField, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { BoxDimensions } from "../types";
import formStyles from "../styles/BoxForm.module.css";

interface BoxFormProps {
  onSubmit: (data: BoxDimensions) => void;
  dimensions: {
    height: number;
    width: number;
    length: number;
  };
}

export const BoxForm: React.FC<BoxFormProps> = ({ onSubmit, dimensions }) => {
  const { control, handleSubmit } = useForm<BoxDimensions>({
    defaultValues: dimensions,
  });

  return (
    <form
      className={formStyles.formContainer}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="height"
        control={control}
        rules={{ required: true, min: 0, max: 500 }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Height"
            type="number"
            margin="normal"
            variant="outlined"
          />
        )}
      />
      <Controller
        name="width"
        control={control}
        rules={{ required: true, min: 0, max: 500 }}
        render={({ field }) => (
          <TextField {...field} label="Width" type="number" margin="normal" />
        )}
      />
      <Controller
        name="length"
        control={control}
        rules={{ required: true, min: 0, max: 500 }}
        render={({ field }) => (
          <TextField {...field} label="Length" type="number" margin="normal" />
        )}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ marginTop: "25px" }}
      >
        Calculate
      </Button>
    </form>
  );
};
