import React,{Component} from 'react'
import { Link } from 'react-router-dom'
// import style from '../component/SideBar.css'



class SideBar extends Component{
    render(){
        return(
            <div class="sidenav" style={{height: '100%',width: '160px',position: 'fixed',zIndex: '1',top: '50px',left:'0',backgroundColor:'#004f97', overflowX:'hidden',paddingTop:'20px'}}>
                <Link to='/Dashboard'>
                    <div style={{ padding: '6px 8px 6px 16px',textDecoration: 'none',fontSize: '15px',color: 'white',display: 'block'}}>Dashboard</div>
                </Link>
                <Link to='/Tiket'>
                    <div href="#services" style={{ padding: '6px 8px 6px 16px',textDecoration: 'none',fontSize: '15px',color: 'white',display: 'block'}}>Ticket New</div>
                </Link>
                <Link to='/TiketInProgress'>
                    <div href="#contact" style={{ padding: '6px 8px 6px 16px',textDecoration: 'none',fontSize: '15px',color: 'white',display: 'block'}}>Ticket In-Progress</div>
                </Link>
                <Link to='/TiketPending'>
                    <div href="#contact" style={{ padding: '6px 8px 6px 16px',textDecoration: 'none',fontSize: '15px',color: 'white',display: 'block'}}>Ticket Pending</div>
                </Link>
                <Link to='/TiketDone'>
                    <div href="#contact" style={{ padding: '6px 8px 6px 16px',textDecoration: 'none',fontSize: '15px',color: 'white',display: 'block'}}>Ticket Done</div>
                </Link>
                <Link to='/Request'>
                    <div href="#clients" style={{ padding: '6px 8px 6px 16px',textDecoration: 'none',fontSize: '15px',color: 'white',display: 'block'}}>Change Request</div>
                </Link>
                <Link to='/Tiket/CR'>
                    <div href="#services" style={{ padding: '6px 8px 6px 16px',textDecoration: 'none',fontSize: '15px',color: 'white',display: 'block'}}>Ticket Change Request</div>
                </Link>
            </div>
            
        )
    }
}

export default SideBar