import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo_bri.png';
import Footer from '../component/Footer'
import { SnackbarContent } from '@material-ui/core';

import {
  Button,
  CircularProgress,
  TextField,
  Typography,
  Snackbar
} from '@material-ui/core';


import validate from 'validate.js';
import _ from 'underscore';
import schema from '../component/schema';
import jwt from 'jsonwebtoken';
import { SignUpData } from '../services/apps/pinang/signUp';
import { asyncLocalStorage } from '../helpers';

class RegisterNasabah extends Component{
  constructor(props){
      super(props)
      this.state = {
        values: {
            username: '',
            password: '',
            rekening: '',
            email: '',
            fullname:'',
            userRole: ''
          },
          touched: {
            username: false,
            password: false,
            rekening: false,
            email: false,
            fullname: false
          },
          errors: {
            username: null,
            password: null,
            rekening: null,
            email: null,
            fullname: null
          },
          isValid: false,
          isLoading: false,
          submitError: null,
          showPassword: false,
          setOpenSnackbarLogin: false,
          snackBarMessage: '',
      }
  }


  // componentDidMount(){
  //   if (localStorage.getItem('accessToken')) this.props.history.push('/dashboard')
  // }


  handleBack = () => {
    const { history } = this.props;

    history.goBack();
  };

  validateForm = _.debounce(() => {
    const { values } = this.state;

    const newState = { ...this.state };
    const errors = validate(values, schema);

    newState.errors = errors || {};
    newState.isValid = errors ? false : true;

    this.setState(newState);
  }, 300);

  handleFieldChange = (field, value) => {
    const newState = { ...this.state };

    newState.submitError = null;
    newState.touched[field] = true;
    newState.values[field] = value;

    this.setState(newState, this.validateForm);
  };

  handleSignIn = async (event) => {
    event.preventDefault();
    
    const { history } = this.props;
    const { values } = this.state

    this.setState({ isLoading: true });

    console.log(this.state.values.userRole)
    const { data, status, statusText } = await SignUpData(values.username,  values.fullname ,values.rekening, values.email, values.password, values.userRole)

    let setOpenSnackbarLogin = false

    this.setState({ statusCode: status })

    if( status !== 200 ){
      setOpenSnackbarLogin = true

      var snackBarMessage = statusText

      values.username = ''
      values.password = ''
      values.email = ''
      values.fullname = ''
      values.rekening = ''
      values.userRole = ''

      this.setState({isValid: false})
    } else {
      setOpenSnackbarLogin = true
      
      const { credentials } = data

      if(credentials && credentials ) {
        const decoded = jwt.decode(credentials);
        
        // const roles = decoded.resource_access && decoded.resource_access['portal-web'] && decoded.resource_access['portal-web'].roles ? decoded.resource_access['portal-web'].roles : []
        // const { payload } = decoded

        // await asyncLocalStorage.setItem('accessToken', access_token)
        // await asyncLocalStorage.setItem('refreshToken', refresh_token)
        await asyncLocalStorage.setItem('nama', decoded.username)
        await asyncLocalStorage.setItem('role', decoded.role)
        // await asyncLocalStorage.setItem('roles', roles)
        // if(payload) await asyncLocalStorage.setItem('name', decoded.username)
        // if(payload) await asyncLocalStorage.setItem('role', decoded.role)
        // if(payload) await asyncLocalStorage.setItem('role', payload.role)
        // if(preferred_username) await asyncLocalStorage.setItem('username', preferred_username)

        snackBarMessage = 'Register success!'
        history.push('/dashboard')
      } else {
        snackBarMessage = 'Invalid token. Please try again'
      } 
    }

    this.setState({
      setOpenSnackbarLogin,
      snackBarMessage,
      isLoading: false,
      values
    })
  };

  handleCloseSnackBar() {
    this.setState({setOpenSnackbarLogin: false});
  }

  handleChangeRole(event){
    //   const  =this.state.values.userRole
      this.setState({userRole: event.taget.value });
      console.log(this.state.values.userRole)
  }
   
  render(){
    const {
      values,
      touched,
      errors,
      isValid,
      submitError,
      isLoading,
      showPassword,
    } = this.state;
    console.log(values.userRole)

    const showEmailError = touched.username && errors.username;
    const showPasswordError = touched.password && errors.password;
    
        return(
          <div className="background" style={{height:'100%',width:'100%' ,paddingTop:'30px',paddingBottom:'80px',backgroundColor:'white'}}>
            <div className="card" style={{width: '236px',height:'100%',margin:'0 auto',borderColor:'#004f97'}}>
                <div class="form-row">
                 <TextField
                      className="form-group"
                      label="Username"
                      name="username"
                      style={{backgroundColor:'white'}}
                      onChange={event =>
                        this.handleFieldChange('username', event.target.value)
                      }
                      type="text"
                      value={values.username}
                      variant="outlined"
                    />
                </div>
            <div>
            <Snackbar
                      anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                      }}
                      open={this.state.setOpenSnackbarLogin}
                      autoHideDuration={2500}
                      onClose={this.handleCloseSnackBar.bind(this)}
                      ContentProps={{
                          'aria-describedby': 'message-id',
                      }}
                      
                      >
                        <SnackbarContent
                          className="snackbar"
                          onClose={this.handleCloseSnackBar.bind(this)}
                          message={ this.state.snackBarMessage }
                        >
                        </SnackbarContent>
                      </Snackbar>
            </div>
            <Footer/>
          </div>
          </div>
        );
    }
}

export default RegisterNasabah