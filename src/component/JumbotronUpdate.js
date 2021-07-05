import React,{Component} from 'react';

class JumbotronUpdate extends Component{
    render(){
        return(
            <div className="background" style={{height:'100%',width:'100%',paddingTop:'110px',paddingBottom:'80px',backgroundColor:'white'}}>
            <div className="card" style={{width: '90%',height:'100%',margin:'0 auto',borderColor:'#004f97'}}>
            <div class="card-body" style={{backgroundColor:'#004f97'}}>
              <form>
              <div class="mb-3">
                <label for="text" className="form-label" style={{color:'white'}}>Username</label>
                <input type="text" className="form-control" id="Username" aria-describedby="Username"/>
                <label for="text" className="form-label" style={{color:'white',marginTop:'5px'}}>Deskripsi</label>
                <textarea type="text" className="form-control input-lg" rows="5" id="desc" aria-describedby="password"/>
                    <button className = 'upload-image'style={{color:'black',marginTop:'10px'}}>Upload Lampiran</button>
                <div>
                  <button type="button" className="btn btn-primary" style={{marginTop:'10px',backgroundColor:'white',color:'#004f97'}}>Submit</button>
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