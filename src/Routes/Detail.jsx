import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';


// import React, {useParams, useEffect, useState} from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
// import axios from 'axios';
import { createTheme } from '@mui/material/styles';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const theme = createTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#ff4400',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        light: '#0066ff',
        main: '#0044ff',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#ffcc00',
      },
       // Provide every color token (light, main, dark, and contrastText) when using
       // custom colors for props in Material UI's components.
       // Then you will be able to use it like this: `<Button color="custom">`
       // (For TypeScript, you need to add module augmentation for the `custom` value)
      custom: {
        light: '#ffa726',
        main: '#f57c00',
        dark: '#ef6c00',
        contrastText: 'rgba(0, 0, 0, 0.87)',
      }
    },
  });

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  let {id} = useParams()

  const [odontologoDetalle, setOdontologoDetalle] = useState([]);
  
  useEffect(()=>{
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setOdontologoDetalle(res.data))
    }, []);

  return (
    <div style={{minHeight:"70vh"}}>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <main style={{display:"flex", flexWrap:"wrap", border:"solid black 2px"}}>
        <div style={{padding:"8px", width:"25%", border:"solid black 1px", fontWeight:"bold", textAlign:"center"}}>Name</div>
        <div style={{padding:"8px", width:"25%", border:"solid black 1px", fontWeight:"bold", textAlign:"center"}}>Email</div>
        <div style={{padding:"8px", width:"25%", border:"solid black 1px", fontWeight:"bold", textAlign:"center"}}>Phone</div>
        <div style={{padding:"8px", width:"25%", border:"solid black 1px", fontWeight:"bold", textAlign:"center"}}>Website</div>
        <div style={{padding:"8px", width:"25%", border:"solid black 1px", textAlign:"center"}}>{odontologoDetalle.name}</div>
        <div style={{padding:"8px", width:"25%", border:"solid black 1px", textAlign:"center"}}>{odontologoDetalle.email}</div>
        <div style={{padding:"8px", width:"25%", border:"solid black 1px", textAlign:"center"}}>{odontologoDetalle.phone}</div>
        <div style={{padding:"8px", width:"25%", border:"solid black 1px", textAlign:"center"}}>{odontologoDetalle.website}</div>
      </main>
      {/* <table  border="1" width="100%" align="center" cellpadding="10px">
          <tr align="center">
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Website</td>
          </tr>
          <tr align="center">
              <td>{odontologoDetalle.name}</td>
              <td>{odontologoDetalle.email}</td>
              <td>{odontologoDetalle.phone}</td>
              <td>{odontologoDetalle.website}</td>
          </tr>
        </table> */}

{/* <Card sx={{ display: 'flex', backgroundColor: theme.palette.primary.main }}>
      <CardMedia
        component="img"
        sx={{ width: 500 }}
        image="../images/doctor.jpg" 
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h2">
            {odontologoDetalle.name}
          </Typography>
          <Typography variant="subtitle1" color="text.dark" component="div">
            @{odontologoDetalle.username}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            E-mail: {odontologoDetalle.email}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Phone: {odontologoDetalle.phone}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Website: {odontologoDetalle.website}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Address: {odontologoDetalle.address.suite} {odontologoDetalle.address.suite}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            City: {odontologoDetalle.address.city}
          </Typography>
        </CardContent>
      </Box>
      
    </Card> */}


    </div>
  )
}

export default Detail