import React,{Component} from 'react'
import Navbar from '../component/Navbar'
import SideBar from '../component/SideBar'
import DetailTiket from '../component/dashboard/ChangeReqeustDetail'
import { withRouter } from "react-router-dom";

class DetailCR extends Component{
    render(){
        const { id_change } = this.props.match.params;
        console.log(id_change)
        return(
            <div className="bg-dark">
                <Navbar/>
                 <SideBar/>
                 <DetailTiket id={id_change}/>
            </div>
        )
    }
}

export default withRouter (DetailCR)