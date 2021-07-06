import React,{Component} from 'react'
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';

class DetailTiket extends Component{
    state = {
        tiket: [],
    }

    // componentDidMount() {
        
        // Simple GET request using axios
        // axios.get(`http://localhost:8000/tiket/list/id_tiket=${id}`)
        //     .then(response => this.setState({ tiket: response.data }));
    // }
    
    render(){
        // const { tiket } = this.state;
        // let url = new URL('http://www.test.com/t.html?a=1&b=3&c=m2-m3-m4-m5');
        // let url = useLocation().search
        // let searchParams = new URLSearchParams(url);
        // console.log(searchParams.get('id_tiket'));  // outputs "m2-m3-m4-m5"

        return(
            <div className="background" style={{height:'565px',width:'100%' ,paddingTop:'70px',paddingBottom:'80px',backgroundColor:'white'}}>
            <h3 style={{marginLeft:'180px'}}>Detail Tiket</h3>
            <div className="card" style={{width: '1165px',height:'120%',marginTop:'10px',marginLeft:'180px',borderColor:'#004f97'}}>
                <div className ="id-tiket" style={{marginLeft:'5px',marginTop:'5px'}}>Tiket  1 - bambang 
                    <select class="form-select" aria-label="Default select example" style={{marginLeft:'650px'}}>Status
                        <option value="1">Status</option>
                        <option value="1">New</option>
                        <option value="1">In Progress</option>
                        <option value="2">Pending</option>
                        <option value="3">Done</option>
                    </select>
                    <select class="form-select" aria-label="Default select example" style={{marginLeft:'10px'}}>
                        <option value="1">Pilih Pekerja</option>
                        <option value="1">Operasional 1</option>
                        <option value="2">Operasional 2</option>
                        <option value="3">Operasional 3</option>
                    </select>
                    <button style={{marginLeft:'5px'}}>Submit Assign</button>
                </div>
                
            <div className="card" style={{width: '100%',height:'40%',marginTop:'10px',borderColor:'#004f97'}}>
                <div>
                    deskripsi
                </div>
            </div>
            <div className="card" style={{width: '100%',height:'50%',marginTop:'10px',borderColor:'#004f97'}}>
                <textarea type='Text' className="form-control" align="top" style={{ width: '100%',height:'100%',borderColor:'#004f97'}}/>
            </div>
                <button>Submit Answer</button>
            </div>
        </div>
        )
    }
}

export default DetailTiket