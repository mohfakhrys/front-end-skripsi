import React,{Component} from 'react'
import Navbar from '../component/Navbar'
import SideBar from '../component/SideBar'
import Tiket from '../component/dashboard/ListTiket'

class TiketNew extends Component{
    render(){
        return(
            <div className="bg-dark">
                <Navbar/>
                 <SideBar />
                 <Tiket/>
            </div>
        )
    }
}

export default TiketNew