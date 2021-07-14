import React,{Component} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

import {
    TableCell,
    TableRow,
    Typography
  } from '@material-ui/core';



class ListCR extends Component{
    state = {
        tiket: []
    }
    componentDidMount() {
        // Simple GET request using axios
        axios.get('http://localhost:8000/allCR')
            .then(response => this.setState({ tiket: response.data }));
    }

    render(){
        const { tiket } = this.state;
        return(
            <div className="background" style={{height:'565px',width:'100%' ,paddingTop:'70px',paddingBottom:'80px',backgroundColor:'white'}}>
            <h3 style={{marginLeft:'180px'}}>Tiket Change Request</h3>
            <div className="card" style={{width: '1165px',height:'110%',marginTop:'10px',marginLeft:'180px',borderColor:'#004f97'}}>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Username Operasional</th>
                        <th scope="col">Keterangan</th>
                        <th scope="col">Status</th>
                        <th scope="col">Tanggal Request</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tiket.map(
                            tiket => (
                            <TableRow>
                                <TableCell>
                                        <Link to={`/change/id_change=${tiket.id_change}`}>
                                        {/* <Link to='/tiket/list'> */}
                                          <Typography
                                            variant="body1"
                                          >
                                            {tiket.id_change}
                                          </Typography>
                                        </Link>
                                  {/* </div> */}
                                </TableCell>
                                <TableCell >
                                  {tiket.user_name}
                                </TableCell>
                                <TableCell >
                                  {tiket.keterangan}
                                </TableCell>
                                <TableCell >
                                  {tiket.status_change}
                                </TableCell>
                                <TableCell >
                                  {tiket.created_at}
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

export default ListCR