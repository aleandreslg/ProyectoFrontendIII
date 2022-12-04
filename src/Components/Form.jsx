import React from "react";
// import "../index.css"
import { TextField, Grid, Button } from "@mui/material"
import { useFormik } from "formik"
import * as Yup from "yup"


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const {/*handleChange,*/ handleSubmit, values, setFieldValue, errors} = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: ""
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("Debes ingresar un nombre").length(5),
      apellido: Yup.string().required("Debes ingresar un apellido").length(5),
      email: Yup.string().required("Debes ingresar un apellido"),
    }),
    onSubmit: (data) =>{
      console.log(data);
    }
  })


  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <Grid 
          container
          alignItems="center" 
          justifyContent="space-evenly"
          spacing={2}
          sx={{width:"100%"}}
          >
          <Grid item xs={12} sm={10} md={7}>
            <TextField 
            type="text" 
            label="Ingrese su nombre" 
            variant="outlined" 
            fullWidth
            // name="nombre"
            onChange={(e)=>{
              setFieldValue("nombre", e.target.value)
            }}
            value={values.nombre}
            error={errors.nombre}
            helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12} sm={10} md={7}>
            <TextField 
            type="text" 
            label="Ingrese su apellido" 
            variant="outlined" 
            fullWidth
            // name="apellido"
            onChange={(e)=>{
              setFieldValue("apellido", e.target.value)
            }}
            value={values.apellido}
            error={errors.apellido}
            helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12} sm={10} md={7} >
            <TextField 
            type="email" 
            label="Ingrese su email" 
            variant="outlined" 
            fullWidth
            // name="email"
            onChange={(e)=>{
              setFieldValue("email", e.target.value)
            }}
            value={values.email}
            error={errors.email}
            helperText={errors.email}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" >Enviar</Button>
      </form>
    </div>
  );
};

export default Form;
