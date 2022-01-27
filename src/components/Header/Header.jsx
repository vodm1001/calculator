import React from 'react'
import logo from './img/logo.png'
import s from './Header.module.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';




/*const Header = () => {
   return <header className={s.header}>
      <img src={logo} alt="logo" />
   </header>
}
export default Header*/

const Item = styled(Paper)(({ theme }) => ({
   ...theme.typography.body2,
   padding: theme.spacing(1),
   textAlign: 'center',
   color: theme.palette.text.secondary,
 }));
 
 export default function ColumnsGrid() {
   return (
     <Box sx={{ flexGrow: 1 }}>
       <Grid container spacing={4} columns={4}>
         <Grid item xs={1}>
           <Item>logo</Item>
         </Grid>
         <Grid item xs={2}>
           <Item>Main</Item>
         </Grid>
         <Grid item xs={1}>
           <Item>login</Item>
         </Grid>
       </Grid>
     </Box>
   );
 }
 