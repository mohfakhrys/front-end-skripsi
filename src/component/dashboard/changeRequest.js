import React,{Component} from 'react';
import axios from "axios";

class changeRequest extends Component{
    state = {
        name: '',
        deskripsi: ''  
      };

    handleSubmit = event => {
        event.preventDefault();
        // const username =  this.state.name
        const username = localStorage.getItem('nama')
        
        const description = this.state.deskripsi
        
        axios.post('http://localhost:8000/Change', { username ,description })
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
    render(){
      const username = localStorage.getItem('nama')
        return(
          
            <div className="background" style={{height:'565px',width:'100%' ,paddingTop:'70px',paddingBottom:'80px',backgroundColor:'white'}}>
                <h3 style={{marginLeft:'180px'}}>Change Request</h3>
                <div className="card" style={{width: '1165px',height:'110%',marginTop:'10px',marginLeft:'180px',borderColor:'#004f97'}}>
                    <label for="text" className="form-label" style={{color:'black',borderColor:'#004f97'}}>Username</label>
                    <h5 type="text" className="form-control" id="Username" aria-describedby="Username" name = "name" onChange= {this.handleChangeName}>{username}</h5>
                    <label for="text" className="form-label" style={{color:'black',borderColor:'#004f97'}}>Deskripsi</label>
                    <textarea type="text" className="form-control input-lg" rows="10" id="desc" aria-describedby="deskripsi" name = "deskripsi" onChange= {this.handleChangeDeskripsi}/>
                    <button className="approve" style={{marginTop:'30px'}}  onClick = { this.handleSubmit }>Submit</button>
            </div>
        </div>
        )
    }
}

export default changeRequest