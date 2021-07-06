import React,{Component} from 'react';
import axios from "axios";

class JumbotronUpdate extends Component{
  state = {
    name: '',
    deskripsi: ''  
  };

  handleSubmit = event => {
    event.preventDefault();
    const username =  this.state.name
    
    const description = this.state.deskripsi
    
    axios.post('http://localhost:8000/komplain', { username ,description })
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

    render(){
        return(
            <div className="background" style={{height:'100%',width:'100%',paddingTop:'110px',paddingBottom:'80px',backgroundColor:'white'}}>
            <div className="card" style={{width: '90%',height:'100%',margin:'0 auto',borderColor:'#004f97'}}>
            <div class="card-body" style={{backgroundColor:'#004f97'}}>
              <form >
              <div class="mb-3">
                <label for="text" className="form-label" style={{color:'white'}}>Username</label>
                <input className="form-control" id="Username" aria-describedby="Username" type = "text" name = "name" onChange= {this.handleChangeName}/>
                <label for="text" className="form-label" style={{color:'white',marginTop:'5px'}}>Deskripsi</label>
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