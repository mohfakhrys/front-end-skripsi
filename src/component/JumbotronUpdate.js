import React,{Component} from 'react';
import axios from "axios";

const options = [
  {
      label: "Pilih Katagori",
      value: "Pilih Katagori",
    },
  {
    label: "Pembayaran Tagihan",
    value: "Pembayaran Tagihan",
  },
  {
    label: "Pencairan Dana",
    value: "Pencairan Dana",
  },
  {
    label: "Pengajuan Pinjaman",
    value: "Pengajuan Pinjaman",
  },
  {
    label: "Penipuan",
    value: "Penipuan",
  }
];

class JumbotronUpdate extends Component{
  constructor(props){
    super(props)
    this.state = {
      tiket:[],
      values: {
          pekerja: ''
        },
        touched: {
          pekerja: false
        },
        submitError: null,
        name: '',
        deskripsi: '', 
    }
}

  componentDidMount() {
    const id = localStorage.getItem('nama')
    // Simple GET request using axios
    axios.get(`http://localhost:8000/user/username=${id}`)
        .then(response => this.setState({ tiket: response.data }));
  }

  handleSubmit = event => {
    event.preventDefault();
    const id =  this.state.tiket.id
    const katagori = this.state.values.pekerja
    
    const description = this.state.deskripsi
    
    axios.post('http://localhost:8000/komplain', { id ,description,katagori })
      .then(res=>{
        console.log(res);
        console.log(res.data);
        window.location = "/Update" //This line of code will redirect you once the submission is succeed
      })
  }
  
  
  handleChangeName = event =>{
    this.setState({ 
      name: event.target.value,
      });
  }

  handleChangeDeskripsi = event =>{
    this.setState({ 
      deskripsi: event.target.value
      });
  }
  handleFieldChange = (field, value) => {
    const newState = { ...this.state };

    newState.submitError = null;
    newState.touched[field] = true;
    newState.values[field] = value;

    this.setState(newState, this.validateForm);
  };

    render(){
      const { tiket,values } = this.state
      console.log(values.pekerja)
        return(
            <div className="background" style={{height:'100%',width:'100%',paddingTop:'110px',paddingBottom:'80px',backgroundColor:'white'}}>
            <div className="card" style={{width: '90%',height:'100%',margin:'0 auto',borderColor:'#004f97'}}>
            <div class="card-body" style={{backgroundColor:'#004f97'}}>
              <form >
              <div class="mb-3">
                <h3 for="text" className="form-label" style={{color:'white'}}>Username</h3>
                <h5 className="username" style={{color:'white'}}>{tiket.user_name} - {tiket.first_name}</h5>
                <select class="form-select"  value={values.pekerja} onChange={event =>
                        this.handleFieldChange('pekerja', event.target.value)
                      } aria-label="Default select example" >
                  {options.map((option)=>(
                      <option value={option.value}>{option.label}</option>
                  ))
                  }
                </select>
                <div>
                  <h3 for="text" className="form-label" style={{color:'white',marginTop:'5px'}}>Deskripsi</h3>
                </div>
                <textarea className="form-control input-lg" rows="5" id="desc" aria-describedby="password" type = "text" name = "deskripsi" onChange= {this.handleChangeDeskripsi}/>
                    <button className = 'upload-image'style={{color:'black',marginTop:'10px'}}>Upload Lampiran</button>
                <div>
                  <button onClick = { this.handleSubmit } type="button" className="btn btn-primary" style={{marginTop:'10px',backgroundColor:'white',color:'#004f97'}}>Submit</button>
                </div>
              </div>
              </form>
            </div>
          </div>
          </div>
        )
    }
}

export default JumbotronUpdate