import React,{Component} from 'react'

class Foorter extends Component{
    render(){
        return(
        <footer className="page-footer blue" style={{backgroundColor: '#004f97',left: '0', bottom: '0', width: '100%',position: 'fixed'}}>
            <div className="footer-copyright text-center py-2" style={{color:'white'}}>
            Copyright @Mohammad Fakhry Syafrul 2020
            </div>
        </footer>
        )
    }
}

export default Foorter