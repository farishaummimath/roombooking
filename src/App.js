import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Add from './components/RoomAdd'
import Box from '@material-ui/core/Box';
import GroupIcon from '@material-ui/icons/Group';
import { Typography } from '@material-ui/core';



function App(){
        return (
          <BrowserRouter>
          <div style={{ width: '70%', margin: '100px auto'}}>
          <Box color="#2c3487">
          
          <Typography>
          <GroupIcon style={{ color: '#2c3487' }}/>
          Choose number of <span style={{fontWeight:"bolder"}}>People</span>
          </Typography>
          </Box>
          <Box color="primary.main" display="flex" border={1} >
            <Switch>
            <Route to='/'component={Add} exact/>
            </Switch>
          </Box>
           
          </div>
         
          </BrowserRouter>
          
        );

    }


export default App;
