import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import routes from '../../routes'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});
let value=0;

// Table for the admin to view the added products
class SimpleTable extends Component {
  constructor(props){
    super(props)
      this.state={
        storage:[],
        valid:false,
        check:false
      }
  }
  componentWillMount(){
    const user=JSON.parse(localStorage.getItem('user'));
    let login=JSON.parse(localStorage.getItem('login'));
    let check=false
    if(user==null){
      const user={Shoes:[],Watches:[],TShirt:[],Mobile:[]};
      localStorage.setItem('user',JSON.stringify(user));
      check=true
      }
    const users=JSON.parse(localStorage.getItem('user'));
    if(user!=null){
      check=true
    }
    this.setState({
      storage:users,
      valid:login,
      check:check
    })
  }
  
  deleteHandle=(i,cat)=>{
    const user=JSON.parse(localStorage.getItem('user'));
    user[cat].splice(i,1);
    this.setState({
      storage:user
    })
    localStorage.setItem('user',JSON.stringify(user));
  }
 
  getData(i,store){
    let len = Object.keys(store).length;
    for(let i=0;i<len;i++){
      
    }
    return(
      value
    )
  }
  render(){
    let  { classes } = this.props

  return (
    <Paper className={classes.root} id="table">
      <Table className={classes.table}>
        <TableHead>
          <TableRow >
            <TableCell id="table-row" >Categories</TableCell>
            <TableCell id="table-row" >ProductName</TableCell>
            <TableCell id="table-row" numeric>Price</TableCell>
            <TableCell id="table-row" numeric>Quantity</TableCell>
            <TableCell id="table-row" >Description</TableCell>
            <TableCell id="table-row" >Edit</TableCell>
            <TableCell id="table-row" >Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {this.state.check?this.state.storage.Mobile.map((row,ind)=>(
                 <TableRow>
                 <TableCell component="th" scope="row">
                   {row.category}
                 </TableCell>
                 <TableCell>{row.name}</TableCell>
                 <TableCell numeric>{row.price}</TableCell>
                 <TableCell numeric>{row.quantity}</TableCell>
                 <TableCell>{row.description}</TableCell>
                 <TableCell onClick={routes}>
                  <Link to={`/table/${ind}/${row.category}`}><EditIcon className={classes}></EditIcon></Link></TableCell>
                  <TableCell onClick={()=>this.deleteHandle(ind,row.category)} ><DeleteIcon></DeleteIcon></TableCell>
               </TableRow>
            )
            )
            :null}
            {this.state.check?this.state.storage.TShirt.map((row,ind)=>(
                 <TableRow>
                 <TableCell component="th" scope="row">
                   {row.category}
                 </TableCell>
                 <TableCell>{row.name}</TableCell>
                 <TableCell numeric>{row.price}</TableCell>
                 <TableCell numeric>{row.quantity}</TableCell>
                 <TableCell>{row.description}</TableCell>
                 <TableCell onClick={routes}>
                 <Link to={`/table/${ind}/${row.category}`}><EditIcon className={classes}></EditIcon></Link></TableCell>
                 <TableCell onClick={()=>this.deleteHandle(ind,row.category)} ><DeleteIcon></DeleteIcon></TableCell>
               </TableRow>
            )
            )
            :null}
            {this.state.check?this.state.storage.Shoes.map((row,ind)=>(
                 <TableRow>
                 <TableCell component="th" scope="row">
                   {row.category}
                 </TableCell>
                 <TableCell>{row.name}</TableCell>
                 <TableCell numeric>{row.price}</TableCell>
                 <TableCell numeric>{row.quantity}</TableCell>
                 <TableCell>{row.description}</TableCell>
                 <TableCell onClick={routes}>
                 <Link to={`/table/${ind}/${row.category}`}><EditIcon className={classes}></EditIcon></Link></TableCell>
                 <TableCell onClick={()=>this.deleteHandle(ind,row.category)} ><DeleteIcon></DeleteIcon></TableCell>
               </TableRow>
            )
            )
            :null}
            {this.state.check?this.state.storage.Watches.map((row,ind)=>(
                 <TableRow>
                 <TableCell component="th" scope="row">
                   {row.category}
                 </TableCell>
                 <TableCell>{row.name}</TableCell>
                 <TableCell numeric>{row.price}</TableCell>
                 <TableCell numeric>{row.quantity}</TableCell>
                 <TableCell>{row.description}</TableCell>
                 <TableCell onClick={routes}>
                 <Link to={`/table/${ind}/${row.category}`}><EditIcon className={classes}></EditIcon></Link></TableCell>
                 <TableCell onClick={()=>this.deleteHandle(ind,row.category)} ><DeleteIcon></DeleteIcon></TableCell>
               </TableRow>
            )
            )
            :null}
            
              </TableBody>
      </Table>
    </Paper>
  );
}
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);