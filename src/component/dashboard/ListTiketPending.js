import React,{Component} from 'react'

import { Link } from 'react-router-dom';

class TiketPending extends Component{
    render(){
        return(
            <div className="background" style={{height:'565px',width:'100%' ,paddingTop:'70px',paddingBottom:'80px',backgroundColor:'white'}}>
            <h3 style={{marginLeft:'180px'}}>Tiket Pending</h3>
            <div className="card" style={{width: '1165px',height:'110%',marginTop:'10px',marginLeft:'180px',borderColor:'#004f97'}}>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Pekerja Tiket</th>
                        <th scope="col">Katagori</th>
                        <th scope="col">Status</th>
                        <th scope="col">Tanggal Komplain</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                    <Link to='/tiket/list'>
                      <th scope="row">1</th>
                    </Link>  
                      <td>fakhry</td>
                      <td>New</td>
                      <td>gagal debet</td>
                      <td>20-06-2021</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>galih</td>
                      
                      <td>gagal pengajuan</td>
                      <td>10-06-2021</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
        )
    }
}

export default TiketPending