import React  from 'react';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Child from './Child'
import HotelIcon from '@material-ui/icons/Hotel';
import PersonIcon from '@material-ui/icons/Person';
  
 class Add extends React.Component{
     constructor(){
         super()
         this.state = {
             rooms : 1,
             adults: 1,
             children : 0
         }
     }

    handleRoomUp = ()=>{
        console.log('clicked room up')
        // first check for the room current adult and children
        // if we increase room adult will also increase and vice versa
        this.setState(prevstate=>{
            if(prevstate.rooms<5){
            return {
                rooms : prevstate.rooms += 1,
                adults : prevstate.adults += 1
            }
        }
        })
    }

    handleRoomDown = ()=>{
        console.log('clicked room down')
        this.setState(prevstate=>{
            if(prevstate.rooms>1){
                return {
                    rooms : prevstate.rooms -= 1,
                    adults : (prevstate.adults < prevstate.rooms * 4) ? (prevstate.adults -= 1 ): (prevstate.rooms * 4)
                }
            }
            
        })
    }
    // save

    
    handleAdultUp = ()=>{
        this.setState(prevstate=>{
            
                return{
                    adults : prevstate.adults += 1,
                    rooms : Math.ceil((prevstate.adults  + prevstate.children )/ 4)
                }
            
            
        })
    }

    handleAdultDown = ()=>{
        console.log('clicked adult down')
        this.setState(prevstate=>{
            if(prevstate.adults!=1){
                return {
                    adults : prevstate.adults -= 1,
                    rooms : Math.ceil((prevstate.adults  + prevstate.children )/ 4)
                }
            }
     })
    }
    handleChildrenUp = ()=>{
        console.log('clicked children up')
            this.setState(prevstate=>{
                //if(prevstate.children + prevstate.adults <4){
                    return {
                        children : prevstate.children +=1,
                        rooms : Math.ceil((prevstate.adults  + prevstate.children )/ 4)
                    }
              //  }   
            })

    }

    handleChildrenDown = ()=>{
        console.log('clicked children down')
        this.setState(prevstate=>{
                return {
                    children : prevstate.children -=1,
                    rooms : Math.ceil((prevstate.adults  + prevstate.children )/ 4)
                }
          //  }   
        })
    }

    render(){
        const { classes } = this.props;
        return (
          
          <List className={classes.root} style={{padding: '13px'}}>
    
            <Child name={'ROOMS'} count ={this.state.rooms} handleUp ={this.handleRoomUp} handleDown ={this.handleRoomDown}icon={ <HotelIcon style={{ color: '#2c3487' }}/>}/>
    
            <Divider variant="inset" component="li" style={{marginLeft:0}}/>
    
            <Child name={'ADULTS'} count ={this.state.adults} handleUp ={this.handleAdultUp} handleDown ={this.handleAdultDown} icon={ <PersonIcon style={{ color: '#2c3487' }}/>} />

            <Divider variant="inset"  component="li" style={{marginLeft:0}}/>
            
            <Child name={'CHILDREN'} count ={this.state.children} handleUp ={this.handleChildrenUp} handleDown ={this.handleChildrenDown} icon={ <HotelIcon style={{ color: '#2c3487' }}/>}/>
               
          </List>

        );
    }
   
    

  }
  const useStyles = theme => ({
    root: {

      width: '100%',
      backgroundColor: theme.palette.background.paper,
      '& > .fa': {
        margin: theme.spacing(2),
        
      },
      
    },
    inline: {
      display: 'inline',
    },
  })
export default withStyles(useStyles)(Add)
