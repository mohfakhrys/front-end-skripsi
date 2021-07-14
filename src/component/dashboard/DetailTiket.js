import React,{Component} from 'react'
import axios from 'axios';

import jwt from 'jsonwebtoken';
import { AssignData , updateStatus } from '../../services/apps/pinang/assign';
import { asyncLocalStorage } from '../../helpers';

const options = [
    {
        label: "Pilih Pekerja",
        value: "Pilih Pekerja",
      },
    {
      label: "Operasional 1",
      value: "Operasional 1",
    },
    {
      label: "Operasional 2",
      value: "Operasional 2",
    },
    {
      label: "Operasional 3",
      value: "Operasional 3",
    }
  ];

  const optionStatus = [
    {
        label: "Pilih Status",
        value: "Pilih Status",
      },
    {
      label: "New",
      value: "New",
    },
    {
      label: "In Progress",
      value: "In Progress",
    },
    {
      label: "Pending",
      value: "Pending",
    },
    {
        label: "Done",
        value: "Done",
      }
  ];
class DetailTiket extends Component{
    constructor(props){
        super(props)
        this.state = {
          tiket:[],
          values: {
              pekerja: '',
              status: '',
              user: ''
            },
            touched: {
              pekerja: false,
              status: false
            },
            submitError: null,
            deskripsi:'',
            photos:[],
            isOpen: false
        }
    }

    componentDidMount() {
        const id = this.props.id
        // Simple GET request using axios
        axios.get(`http://localhost:8000/tiket/list/id_tiket=${id}`)
            .then(response => this.setState({ tiket: response.data }));
        
        axios.get(`http://localhost:8080/ticket/image/${id}/thumbnail`)
            .then(response => this.setState({ photos: response.data }));

            console.log(this.state.photos)
    }

    handleShowDialog = () => {
      this.setState({ isOpen: !this.state.isOpen });
      console.log('cliked');
    };
  

    handleAssign = async (event) => {
    event.preventDefault();
    const id = this.props.id
    
    const { history } = this.props;
    const { values } = this.state

    this.setState({ isLoading: true });

    // console.log(this.state.values.userRole)
    const { data, status, statusText } = await AssignData(id, values.pekerja )

    let setOpenSnackbarLogin = false

    this.setState({ statusCode: status })

    if( status !== 200 ){
      setOpenSnackbarLogin = true

      var snackBarMessage = statusText

      values.pekerja = ''

      this.setState({isValid: false})
    } else {
      setOpenSnackbarLogin = true
      
      const { credentials } = data

      if(credentials && credentials ) {
        const decoded = jwt.decode(credentials);
        
        await asyncLocalStorage.setItem('nama', decoded.username)
        await asyncLocalStorage.setItem('role', decoded.role)
        

        snackBarMessage = 'Login success!'
        history.push(`/tiket/list/id_tiket=${id}`)
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
  handleStatus = async (event) => {
    event.preventDefault();
    const id = this.props.id
    
    const { history } = this.props;
    const { values } = this.state

    this.setState({ isLoading: true });

    // console.log(this.state.values.userRole)
    const { data, status, statusText } = await updateStatus(id, values.status )

    let setOpenSnackbarLogin = false

    this.setState({ statusCode: status })

    if( status !== 200 ){
      setOpenSnackbarLogin = true

      var snackBarMessage = statusText

      values.pekerja = ''

      this.setState({isValid: false})
    } else {
      setOpenSnackbarLogin = true
      
      const { credentials } = data

      if(credentials && credentials ) {
        const decoded = jwt.decode(credentials);
        
        await asyncLocalStorage.setItem('nama', decoded.username)
        await asyncLocalStorage.setItem('role', decoded.role)
        

        snackBarMessage = 'Login success!'
        history.push(`/tiket/list/id_tiket=${id}`)
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
    
    handleFieldChange = (field, value) => {
        const newState = { ...this.state };
    
        newState.submitError = null;
        newState.touched[field] = true;
        newState.values[field] = value;
    
        this.setState(newState, this.validateForm);
      };

      handleChangeDeskripsi = event =>{
        this.setState({ 
          deskripsi: event.target.value
          });
      }

      handleSubmit = event => {
        event.preventDefault();
        const id =  this.props.id
        
        const jawaban = this.state.deskripsi
        
        axios.put(`http://localhost:8000/submit/id_tiket=${id}`, { jawaban })
          .then(res=>{
            window.location = `/tiket/list/id_tiket=${id}` //This line of code will redirect you once the submission is succeed
          })
      }
      

    render(){
        const { tiket,values } = this.state;
        const { role } = localStorage.getItem('role')
        let button;
            if (tiket.jawaban ===  null) {
                button = 
                <textarea type='Text' className="form-control" align="top" 
                style={{ width: '100%',height:'100%',borderColor:'#004f97'}}
                onChange = {this.handleChangeDeskripsi}/>
                
            } else {
                button = 
            <div className="card" style={{width: '100%',height:'100%',borderColor:'#004f97'}}>
                <div>
                    {tiket.jawaban}
                </div>
            </div>
            }
        let assign;
            if ( role === 'tim helpdesk' ){
              assign = 
              <div className ="assig-tiket"style={{marginTop:'5px'}}> 
                <select class="form-select"  value={values.status} onChange={event =>
                        this.handleFieldChange('pekerja', event.target.value)
                      } aria-label="Default select example" style={{marginLeft:'5px'}}>
                  {options.map((option)=>(
                      <option value={option.value}>{option.label}</option>
                  ))
                  }
                </select>
                <button style={{marginLeft:'5px'}} onClick={this.handleAssign}>Submit Pekerja</button>
                <select class="form-select"  value={values.pekerja} onChange={event =>
                        this.handleFieldChange('status', event.target.value)
                      } aria-label="Default select example" style={{marginLeft:'10px'}}>
                  {optionStatus.map((option)=>(
                      <option value={option.value}>{option.label}</option>
                  ))
                  }
                </select>
                    <button style={{marginLeft:'5px'}} onClick={this.handleStatus}>Submit Status</button>
              </div>
              
            }else {
              assign = 
              <div className ="assig-tiket" style={{marginTop:'5px'}}> 
                <select class="form-select"  value={values.pekerja} onChange={event =>
                        this.handleFieldChange('status', event.target.value)
                      } aria-label="Default select example" style={{marginLeft:'5px'}}>
                  {optionStatus.map((option)=>(
                      <option value={option.value}>{option.label}</option>
                  ))
                  }
                </select>
                    <button style={{marginLeft:'5px'}} onClick={this.handleStatus}>Submit Status</button>
              </div>
            }
        return(
            <div className="background" style={{height:'565px',width:'100%' ,paddingTop:'70px',paddingBottom:'80px',backgroundColor:'white'}}>
            <h3 style={{marginLeft:'180px'}}>Detail Tiket</h3>
            <div className="card" style={{width: '1165px',height:'120%',marginTop:'10px',marginLeft:'180px',borderColor:'#004f97'}}>
                <div className ="id-tiket" style={{marginLeft:'5px',marginTop:'5px'}}>Tiket  {tiket.id_tiket} - {tiket.name} - {tiket.rekening} - {tiket.nomer_hp}
                    <button style={{marginLeft:'5px'}} onClick={this.handleShowDialog}>Lihat Lampiran</button>
                    {this.state.isOpen && (
                      <dialog
                        className="dialog"
                        style={{ position: 'right' }}
                        open
                        onClick={this.handleShowDialog}
                      > 
                      <img
                        className="image"
                        src="/Anj.png"
                        onClick={this.handleShowDialog}
                        alt="no image"
                      />
                      </dialog>
                    )}
                </div>
            {assign}
            <div className="card" style={{width: '100%',height:'40%',marginTop:'10px',borderColor:'#004f97'}}>
                <div>
                    {tiket.komplain}
                </div>
            </div>
            <div className="card" style={{width: '100%',height:'50%',marginTop:'10px',borderColor:'#004f97'}}>
                {button}
            </div>
                <button onClick={this.handleSubmit}>Submit Answer</button>
            </div>
        </div>
        )
    }
}

export default DetailTiket