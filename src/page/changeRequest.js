import React,{Component} from 'react'
import Navbar from '../component/Navbar'
import SideBar from '../component/SideBar'
import DashboardDetail from '../component/dashboard/changeRequest'

class pageChange extends Component{
    render(){
        return(
            <div className="bg-dark">
                <Navbar/>
                 <SideBar/>
                 <DashboardDetail/>
            </div>
        )
    }
}

export default pageChange