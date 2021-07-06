import React,{Component} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

import {
    TableCell,
    TableRow,
    Typography
  } from '@material-ui/core';



class Tiket extends Component{
    state = {
        tiket: []
    }
    componentDidMount() {
        // Simple GET request using axios
        axios.get('http://localhost:8000/new')
            .then(response => this.setState({ tiket: response.data }));
    }

    render(){
        const { tiket } = this.state;
        return(
            <div className="background" style={{height:'565px',width:'100%' ,paddingTop:'70px',paddingBottom:'80px',backgroundColor:'white'}}>
            <h3 style={{marginLeft:'180px'}}>Tiket New</h3>
            <div className="card" style={{width: '1165px',height:'110%',marginTop:'10px',marginLeft:'180px',borderColor:'#004f97'}}>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Username Nasabah</th>
                        <th scope="col">Pekerja Tiket</th>
                        <th scope="col">Status</th>
                        <th scope="col">Tanggal Komplain</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tiket.map(
                            tiket => (
                            <TableRow>
                                <TableCell>
                                        <Link to={`/tiket/list/id_tiket=${tiket.id_tiket}`}>
                                        {/* <Link to='/tiket/list'> */}
                                          <Typography
                                            variant="body1"
                                          >
                                            {tiket.id_tiket}
                                          </Typography>
                                        </Link>
                                  {/* </div> */}
                                </TableCell>
                                <TableCell >
                                  {tiket.username}
                                </TableCell>
                                <TableCell >
                                  {tiket.pekerja}
                                </TableCell>
                                <TableCell >
                                  {tiket.status}
                                </TableCell>
                                <TableCell >
                                  {tiket.tanggal_komplain}
                                </TableCell>
                              </TableRow>
                            
                            )
                        )
                    }
                    
                </tbody>
            </table>
            </div>
        </div>
        )
    }
}

export default Tiket