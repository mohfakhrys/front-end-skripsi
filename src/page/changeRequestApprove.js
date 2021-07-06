import React,{Component} from 'react'
import Navbar from '../component/Navbar'
import SideBar from '../component/SideBar'
import TiketApprove from '../component/dashboard/ListApproveCR'

class ApproveCR extends Component{
    render(){
        return(
            <div className="bg-dark">
                <Navbar/>
                 <SideBar />
                 <TiketApprove/>
            </div>
        )
    }
}

export default ApproveCR