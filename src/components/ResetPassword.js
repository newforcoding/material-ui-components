import React from 'react'
import {Button,Grid,TextField} from '@material-ui/core'
import {Link} from 'react-router-dom'

function ResetPassword() {
    return (
        <div>
            <Grid container style={{minHeight:"100vh"}}>
       <Grid item xs={12} sm={6}>
          <img src='https://www.radzen.com/documentation/login-background.png'
               style={{ width:"100%",height:"100%",objectFit:"cover"}}
               alt="brand"
          />
         </Grid>
         <Grid item container xs={12} sm={6} 
               direction="column" 
               justify="space-between" 
               alignItems="center" 
               style={{padding:10}}>
          <div/> 
           <div style={{display:"flex",flexDirection:"column",
                 minWidth:400, maxWidth:300
                 }}>
           <TextField label='Email'
                      type='email' 
                      placeholder='Enter your email address' 
                      autoComplete='off' 
                      margin='normal'
                      required
                      />
            <Button color='primary' 
                   variant="contained" 
                   type='submit' 
                   
            style={{margin:'8px 0px'}}>  
           Reset Password
           </Button> 

            <Link to='/login' 
                  style={{color:"blue",
                          fontSize:'15px',
                          textAlign:'center',
                          marginTop:'15px'
                        }}>
              Back to Login
            </Link>         
            </div>
            <div/>
          </Grid>
         </Grid>
        </div>
    )
}

export default ResetPassword
