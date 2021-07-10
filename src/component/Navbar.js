import React,{Component} from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logoBRI.png'

class Navbar extends Component{
    render(){
        const username = localStorage.getItem('nama')
        const role = localStorage.getItem('role')
        return(
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#004f97',position: 'fixed',width: '100%'}}>
                <Link to="/">
                <a className="navbar-brand text-white" href="/" >
                    <img src={logo} className="card-img mr-2" alt="..." style={{maxWidth:"100px"}}/>
                </a>
                </Link>
                <h5 clasname = "information" style={{marginLeft:'950px',color:'white'}}>{username} - {role}</h5>
            </nav>
        )
    }
}

export default Navbar