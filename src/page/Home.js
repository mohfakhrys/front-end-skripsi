import React,{Component} from 'react'
import Navbar from '../component/Navbar'
import Card from '../component/Card'
import Gridimage from '../component/Gridimage'
import Footer from '../component/Footer'

class Home extends Component{
    render(){
        return(
            <div className="container-lg" >
                <Navbar/>
                <Card/>
                {/* <Gridimage/> */}
                {/* <JumbotronHero/> */}
                {/* <JumbotronTurney/> */}
                <Footer/>
            </div>
        );
    }
}

export default Home