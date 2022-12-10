import React, { useContext, useState } from "react";
// import "../index.css"
import { TextField, Grid, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ContextGlobal } from "../Components/utils/global.context";
import styles from "./Form.module.css";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const { state } = useContext(ContextGlobal);

  const [datos, setDatos] = useState()

  const { /*handleChange,*/ handleSubmit, values, setFieldValue, errors } =
    useFormik({
      initialValues: {
        name: "",
        lastName: "",
        email: "",
      },
      validationSchema: Yup.object({
        name: Yup.string().required("Enter your name").min(5),
        lastName: Yup.string().required("Enter your last name").min(5),
        email: Yup.string().required("Enter your mail"),
      }),
      onSubmit: (data) => {
        console.log(data);
        
        setDatos(<p>Thank you {data.name} {data.lastName}, we will contact you via email very soon</p>)
            
        
        
      },
    });


  return (
    <div>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        style={{ filter: state.bgFlag === "DARK" ? "invert(100%)" : null }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="space-evenly"
          spacing={2}
          sx={{ width: "100%" }}
        >
          <Grid item xs={12} sm={10} md={7}>
            <TextField
              color=""
              type="text"
              label="Enter your name"
              variant="outlined"
              fullWidth
              // name="nombre"
              onChange={(e) => {
                setFieldValue("name", e.target.value);
              }}
              value={values.name}
              error={errors.name}
              helperText={errors.name}
            />
          </Grid>
          <Grid item xs={12} sm={10} md={7}>
            <TextField
              type="text"
              label="Enter your last name"
              variant="outlined"
              fullWidth
              // name="apellido"
              onChange={(e) => {
                setFieldValue("lastName", e.target.value);
              }}
              value={values.lastName}
              error={errors.lastName}
              helperText={errors.lastName}
            />
          </Grid>
          <Grid item xs={12} sm={10} md={7}>
            <TextField
              type="email"
              label="Enter your email"
              variant="outlined"
              fullWidth
              // name="email"
              onChange={(e) => {
                setFieldValue("email", e.target.value);
              }}
              value={values.email}
              error={errors.email}
              helperText={errors.email}
            />
          </Grid>
        </Grid>
        <Button
          color="error"
          type="submit"
          variant="contained"
          style={{ width: "200px", margin: "40px" }}
        >
          Send
        </Button>
      </form>
      <h4 className={styles.message} >
        {datos}
      </h4>
    </div>
  );
};

export default Form;
