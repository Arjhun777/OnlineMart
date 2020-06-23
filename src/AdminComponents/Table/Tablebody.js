import React, { Component } from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Link } from 'react-router-dom';
import routes from '../../routes'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


class Tablebody extends Component{
    
    render(){
        let storage=this.props.storage;
        let store=[];
        for(let i in storage){
            if(storage[i]!=''){
            store.push([storage[i]])
            }
            // console.log((store))
        }
        return(
            <TableBody>
            {store.map((category,i)=>(category.map((row,ind)=>(
                
                 <TableRow >{console.log(row)}
                 <TableCell component="th" scope="row">
                   {row[ind].category}
                 </TableCell>
                 <TableCell>{row[ind].name}</TableCell>
                 <TableCell numeric>{row[ind].price}</TableCell>
                 <TableCell numeric>{row[ind].quantity}</TableCell>
                 <TableCell>{row[ind].description}</TableCell>
                 <TableCell onClick={routes}>
                  <Link to={`/table/${ind}/${row.category}`}><EditIcon className={this.props.cls.name}></EditIcon></Link></TableCell>
                 <TableCell onClick={()=>this.deleteHandle(ind)}><DeleteIcon></DeleteIcon></TableCell>
               </TableRow>
              )
        )
        )
            ) 
    }
    </TableBody>
    
        )
}
}
export default Tablebody;