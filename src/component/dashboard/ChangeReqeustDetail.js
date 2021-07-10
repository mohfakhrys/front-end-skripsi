import React,{Component} from 'react'

class ChangeReqeustDetail extends Component{

    render(){
        const checkRole = localStorage.getItem('role');
        let button;

            if (checkRole ===  'tim operasional') {
                button = 
                <div className="card" style={{width: '100%',height:'70%',marginTop:'0px',borderColor:'#004f97'}}>
                    <button className="Approve" style={{marginTop:'15px'}}>Approve</button> 
                    <button className="Reject" style={{marginTop:'15px'}}>Reject</button>
                </div>
                
            } else {
                button = <h4> maaf anda tidak punya hak approve</h4>
            }
        

        return(
            <div className="background" style={{height:'565px',width:'100%' ,paddingTop:'70px',paddingBottom:'80px',backgroundColor:'white'}}>
            <h3 style={{marginLeft:'180px'}}>Change Request Tiket</h3>
            <div className="card" style={{width: '1165px',height:'120%',marginTop:'10px',marginLeft:'180px',borderColor:'#004f97'}}>
                <div className ="id-tiket" style={{marginLeft:'5px',marginTop:'5px'}}>Tiket 1 - bambang 
                </div>
                
            <div className="card" style={{width: '100%',height:'70%',marginTop:'10px',borderColor:'#004f97'}}>
                <div className="desc" >
                    nasabah sudah berhasil di debet namun tidak terupdate di aplikasi , change request untuk mengupdate data transaksi nasabah
                </div>
            </div>
               {button}
            </div>
        </div>
        )
    }
}

export default ChangeReqeustDetail