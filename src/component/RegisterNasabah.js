import React,{Component} from 'react';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import SideBar from '../component/SideBar';
import { SnackbarContent } from '@material-ui/core';

import {
  TextField,
  Snackbar
} from '@material-ui/core';


import validate from 'validate.js';
import _ from 'underscore';
import schema from '../component/schema';
import { addNasabah } from '../services/apps/pinang/approval';

class RegisterNasabah extends Component{
  constructor(props){
      super(props)
      this.state = {
        values: {
            username: '',
            nomerHp: '',
            rekening: '',
            alamat: '',
            kodeCabang:'',
          },
          touched: {
            username: false,
            nomerHp: false,
            rekening: false,
            alamat: false,
            kodeCabang: false
          },
          errors: {
            username: null,
            nomerHp: null,
            rekening: null,
            alamat: null,
            kodeCabang: null
          },
          isValid: false,
          isLoading: false,
          submitError: null,
          shownomerHp: false,
          setOpenSnackbarLogin: false,
          snackBarMessage: '',
      }
  }


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

  handleAddNasabah = async (event) => {
    event.preventDefault();
    
    const { history } = this.props;
    const { values } = this.state

    this.setState({ isLoading: true });
    console.log(this.state.values.userRole)
    const { data, status, statusText } = await addNasabah(values.rekening,  values.username ,values.nomerHp, values.alamat, values.kodeCabang)

    let setOpenSnackbarLogin = false

    this.setState({ statusCode: status })

    if( status !== 200 ){
      setOpenSnackbarLogin = true

      var snackBarMessage = statusText

      values.username = ''
      values.nomerHp = ''
      values.alamat = ''
      values.kodeCabang = ''
      values.rekening = ''
      values.userRole = ''

      this.setState({isValid: false})
    } else {
      setOpenSnackbarLogin = true
      
      const { credentials } = data

      if(credentials && credentials ) {
 

        snackBarMessage = 'Upload success!'
        history.push('/Tiket')
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
    //   touched,
    //   errors,
    } = this.state;
    console.log(values.userRole)
    
        return(
        <div>
            <Navbar/>
            <SideBar/>
          <div className="background" style={{height:'100%',width:'100%' ,paddingTop:'100px',paddingBottom:'80px',backgroundColor:'white'}}>
            <div className="card" style={{width: '400px',height:'100%',margin:'0 auto',borderColor:'#004f97'}}>
                <div class="form-row">
                 <TextField
                      className="form-group"
                      label="Username"
                      name="username"
                      style={{backgroundColor:'white',width:'100%',marginTop:'10px',marginLeft:'10px',marginRight:'10px'}}
                      onChange={event =>
                        this.handleFieldChange('username', event.target.value)
                      }
                      type="text"
                      value={values.username}
                      variant="outlined"
                    />
                    <TextField
                      className="form-group"
                      label="nomer hp"
                      name="nomerHp"
                      style={{backgroundColor:'white',marginTop:'10px',width:'100%',marginLeft:'10px',marginRight:'10px'}}
                      onChange={event =>
                        this.handleFieldChange('nomerHp', event.target.value)
                      }
                      type="number"
                      value={values.nomerHp}
                      variant="outlined"
                    />
                    <TextField
                      className="form-group"
                      label="rekening"
                      name="rekening"
                      style={{backgroundColor:'white',marginTop:'10px',width:'100%',marginLeft:'10px',marginRight:'10px'}}
                      onChange={event =>
                        this.handleFieldChange('rekening', event.target.value)
                      }
                      type="text"
                      value={values.rekening}
                      variant="outlined"
                    />
                    <TextField
                      className="form-group"
                      label="alamat"
                      name="alamat"
                      style={{backgroundColor:'white',marginTop:'10px',width:'100%',marginLeft:'10px',marginRight:'10px'}}
                      onChange={event =>
                        this.handleFieldChange('alamat', event.target.value)
                      }
                      type="text"
                      value={values.alamat}
                      variant="outlined"
                    />
                    <TextField
                      className="form-group"
                      label="kode cabang"
                      name="kodeCabang"
                      style={{backgroundColor:'white',marginTop:'10px',width:'100%',marginLeft:'10px',marginRight:'10px'}}
                      onChange={event =>
                        this.handleFieldChange('kodeCabang', event.target.value)
                      }
                      type="text"
                      value={values.kodeCabang}
                      variant="outlined"
                    />
                </div>
                <button onClick={this.handleAddNasabah} style={{marginTop:'10px'}}>Tambah Nasabah</button>
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
        </div>
        
        );
    }
}

export default RegisterNasabah