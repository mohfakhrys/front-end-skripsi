import React,{Component} from 'react'
import Navbar from '../component/Navbar'
import SideBar from '../component/SideBar'
import Footer from '../component/Footer'
import TiketDone from '../component/dashboard/ListTiketDone'

class Hero extends Component{
    render(){
        return(
            <div className="bg-dark">
                <Navbar/>
                 <SideBar/>
                 <TiketDone/>
                <Footer/>
            </div>
        )
    }
}

export default Hero