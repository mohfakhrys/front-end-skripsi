import React,{Component} from 'react'
import Navbar from '../component/Navbar'
import SideBar from '../component/SideBar'
import Footer from '../component/Footer'
import DashboardDetail from '../component/dashboard/dashboardDetail'

class Hero extends Component{
    render(){
        return(
            <div className="bg-dark">
                <Navbar/>
                 <SideBar/>
                 <DashboardDetail/>
                <Footer/>
            </div>
        )
    }
}

export default Hero