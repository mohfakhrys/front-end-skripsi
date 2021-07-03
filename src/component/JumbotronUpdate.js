import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class JumbotronUpdate extends Component{
    render(){
        return(
            <div className="background" style={{height:'485px',width:'1280px',paddingTop:'110px',paddingBottom:'80px',backgroundColor:'white'}}>
            <div className="card" style={{width: '90%',height:'100%',margin:'0 auto',borderColor:'#004f97'}}>
            <div class="card-body" style={{backgroundColor:'#004f97'}}>
              <form>
              <div class="mb-3">
                <label for="text" className="form-label" style={{color:'white'}}>Username</label>
                <input type="text" className="form-control" id="Username" aria-describedby="Username"/>
                <label for="text" className="form-label" style={{color:'white'}}>Desc</label>
                <textarea type="text" className="form-control input-lg" rows="5" id="desc" aria-describedby="password"/>
                <select class="form-select" aria-label="Default select example" style={{marginTop:'10px'}}>
                    <button>Upload Lampiran</button>
                    {/* <option value="1">Pinang</option>
                    <option value="2">Ceria</option>
                    <option value="3">BRIAPI</option> */}
                </select>
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