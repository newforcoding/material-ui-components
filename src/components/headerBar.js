import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Drawer  from '@material-ui/core/Drawer';
import {List, ListItem, ListItemText } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PieChartIcon from '@material-ui/icons/PieChart';

function LoginAppBar() {
 const [open,setOpen] = useState(false)
 const handleDrawerOpen = () =>{
   console.log('open')
   setOpen(true)
 }
 const handleDrawerClose = () =>{
  console.log('close')
  setOpen(false)
}
  return (
    <div>
    <AppBar position="fix">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="open-drawer" onClick={handleDrawerOpen}>
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6" noWrap>
          Welcome To UI
          </Typography>
      </Toolbar>
    </AppBar>
    <Drawer variant="persistent"
            anchor="left"
            open={open}
            color="inherit" >
       <IconButton onClick={handleDrawerClose}/>
       <List>
         {['Profile','Chart','Date Picker'].map((text,index)=>(
          <ListItem button key={text}>  
           <ListItemIcon>{index % 2 === 0 ? <AccountCircleIcon /> : <PieChartIcon />}</ListItemIcon>
           <ListItemText primary={text}/>
         </ListItem>       
         ))}
         </List>    
         </Drawer>
        </div>
    );
}
export default LoginAppBar

