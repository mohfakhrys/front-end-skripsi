import React,{Component} from 'react'
import logo from '../../images/logo_bri.png'
import Chart from './chart/chart'

class TiketDone extends Component{
    render(){
        return(
        <div className="background" style={{height:'565px',width:'1280px' ,paddingTop:'100px',paddingBottom:'80px',backgroundColor:'white'}}>
            <div className="card" style={{width: '900px',height:'100%',margin:'0 auto',borderColor:'#004f97'}}>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Pekerja Tiket</th>
                        <th scope="col">Katagori</th>
                        <th scope="col">Tanggal Komplain</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>asep</td>
                      <td>gagal debet</td>
                      <td>21-05-2021</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>riyan</td>
                      <td>gagal pengajuan</td>
                      <td>19-06-2021</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
        )
    }
}

export default TiketDone