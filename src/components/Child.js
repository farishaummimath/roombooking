import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Typography } from '@material-ui/core';



import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { loadCSS } from 'fg-loadcss';
import Icon from '@material-ui/core/Icon';




function Child(props){
    
    React.useEffect(() => {
        loadCSS(
          'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
          document.querySelector('#font-awesome-css'),
        );
      }, []);
    return (
        <>
          <ListItem alignItems="flex-start">
          <ListItemIcon>
            {props.icon}

            </ListItemIcon>
            
          <ListItemText primary={
              <>
           <Typography>
            {props.name}
          </Typography>
              
              </>
              
            }/>
            <ListItemSecondaryAction>
             
            <Icon className="fa fa-minus-circle" style={{ color: '#2c3487',marginRight:'25px' }} onClick={()=>props.handleDown()} />
            <Icon style={{ color: '#aaa2a2', fontSize:'16px' }}>{props.count}</Icon>
            <Icon className="fa fa-plus-circle" color="secondary" style={{marginLeft:'25px' }} onClick={()=>props.handleUp()} />


            </ListItemSecondaryAction>
            </ListItem>

       
        </>
    )
}

export default Child