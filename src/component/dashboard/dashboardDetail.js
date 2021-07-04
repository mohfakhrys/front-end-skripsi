import React,{Component} from 'react'
import logo from '../../images/logo_bri.png'
import Chart from './chart/chart'

class Dashboard extends Component{
    render(){
        return(
        <div className="background" style={{height:'565px',width:'1280px' ,paddingTop:'100px',paddingBottom:'80px',backgroundColor:'white'}}>
            <div className="card" style={{width: '900px',height:'100%',margin:'0 auto',borderColor:'#004f97'}}>
                {/* <img src={logo} className="card-img-top" alt="logo" style={{maxHeight:'100px',maxWidth:'100px',marginLeft:'65px'}}/> */}
                {/* <Chart></Chart> */}
            </div>
        </div>
        )
    }
}

export default Dashboard