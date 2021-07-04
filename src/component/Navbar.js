import React,{Component} from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logoBRI.png'

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#004f97',position: 'fixed',width: '100%'}}>
                <Link to="/">
                <a className="navbar-brand text-white" href="/" >
                    <img src={logo} className="card-img mr-2" alt="..." style={{maxWidth:"100px"}}/>
                </a>
                </Link>
            </nav>
        )
    }
}

export default Navbar