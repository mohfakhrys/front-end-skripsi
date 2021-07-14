import React,{Component} from 'react';
import axios from "axios";

class changeRequest extends Component{
    state = {
        name: '',
        deskripsi: '',
        tiket:[],
        values: {
          id_tiket: '',
        },
        touched: {
          id_tiket: false,
        },
      };

    componentDidMount() {
        // Simple GET request using axios
        axios.get(`http://localhost:8000/allTiket`)
            .then(response => this.setState({ tiket: response.data }));
          
    }
    
    handleSubmit = event => {
        event.preventDefault();
        // const username =  this.state.name
        const username = localStorage.getItem('id')
        
        const description = this.state.deskripsi
        const tiketId = this.state.values.id_tiket
        
        axios.post('http://localhost:8000/Change', { username ,description,tiketId })
          .then(res=>{
            console.log(res);
            console.log(res.data);
            window.location = "/Request" //This line of code will redirect you once the submission is succeed
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
      const username = localStorage.getItem('nama')
      const {values,tiket} = this.state
      console.log(values.id_tiket)
        return(
          
            <div className="background" style={{height:'565px',width:'100%' ,paddingTop:'70px',paddingBottom:'80px',backgroundColor:'white'}}>
                <h3 style={{marginLeft:'180px'}}>Change Request</h3>
                
                <div className="card" style={{width: '1165px',height:'110%',marginTop:'10px',marginLeft:'180px',borderColor:'#004f97'}}>
                    <label for="text" className="form-label" style={{color:'black',borderColor:'#004f97',marginLeft:'5px'}}>Username</label>
                    <h5 type="text" className="form-control" id="Username" aria-describedby="Username" name = "name" onChange= {this.handleChangeName}>{username}</h5>
                    <label className="lable" style={{marginLeft:'5px'}}>Id Tiket Komplain</label>
                    <select class="form-select"  value={tiket.id_tiket} onChange={event =>
                        this.handleFieldChange('id_tiket', event.target.value)
                      } aria-label="Default select example" >
                    {tiket.map((tiket)=>(
                      <option value={tiket.id_tiket}>{tiket.id_tiket}</option>
                    ))
                    }
                    </select>
                    <label for="text" className="form-label" style={{color:'black',borderColor:'#004f97'}}>Deskripsi</label>
                    <textarea type="text" className="form-control input-lg" rows="10" id="desc" aria-describedby="deskripsi" name = "deskripsi" onChange= {this.handleChangeDeskripsi}/>
                    <button className="approve" style={{marginTop:'30px'}}  onClick = { this.handleSubmit }>Submit</button>
            </div>
        </div>
        )
    }
}

export default changeRequest