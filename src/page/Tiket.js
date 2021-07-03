import React,{Component} from 'react'
import Navbar from '../component/Navbar'
import SideBar from '../component/SideBar'
import Footer from '../component/Footer'
import Tiket from '../component/dashboard/ListTiket'

class Hero extends Component{
    render(){
        return(
            <div className="bg-dark">
                <Navbar/>
                 <SideBar/>
                 <Tiket/>
                <Footer/>
            </div>
        )
    }
}

export default Hero