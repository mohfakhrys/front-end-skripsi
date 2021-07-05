import React,{Component} from 'react'

class changeRequest extends Component{
    render(){
        return(
            <div className="background" style={{height:'565px',width:'100%' ,paddingTop:'70px',paddingBottom:'80px',backgroundColor:'white'}}>
                <h3 style={{marginLeft:'180px'}}>Change Request</h3>
                <div className="card" style={{width: '1165px',height:'110%',marginTop:'10px',marginLeft:'180px',borderColor:'#004f97'}}>
                    <label for="text" className="form-label" style={{color:'black',borderColor:'#004f97'}}>Username</label>
                    <input type="text" className="form-control" id="Username" aria-describedby="Username" />
                    <label for="text" className="form-label" style={{color:'black',borderColor:'#004f97'}}>Deskripsi</label>
                    <textarea type="text" className="form-control input-lg" rows="10" id="desc" aria-describedby="deskripsi"/>
                    <button className="approve" style={{marginTop:'30px'}}>Submit</button>
                    {/* <button className="approve" style={{marginTop:'10px'}}>Reject</button> */}
            </div>
        </div>
        )
    }
}

export default changeRequest