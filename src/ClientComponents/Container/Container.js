import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Inventory from './Inventory';
import DatePickers from '../TextFields/textField'

const styles = theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 3}px`,
  },
  wrapper: {
    minWidth:'100%',
    maxWidth:'100%',
  },
 paper: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2,
  },
});

function CSSGrid(props) {
  const { classes } = props;

  return (
    <div>
    {!props.valid?
    <span>
      <Grid container spacing={16}>
        <Grid item lg={props.lg} md={props.md} sm={props.sm} xs={props.xs} >
          <Paper className={classes.paper}>{props.product}</Paper>
        </Grid>
        {props.isValid?<Inventory Paper={classes.paper} lg={4} md={4} sm={9} xs={12}/>:null}
      </Grid>
     </span>
      :<span>
      {props.value.map((data,index)=>(
      <Grid>
          <span>
          {console.log(index,data)}
        <Grid  item lg={props.lg} md={props.md} sm={props.sm} xs={props.xs} className={classes.wrapper}>
          <Paper id="grid" className={classes.paper}>
            <span id="brand">Brand : {data.name}<hr/></span>
            <span id="desc">Description : {data.description}</span>
            <span id="details"><span id="price">price</span> : {data.price}</span><br/>
            <span id="details"><span id="price">Stock-left </span>: {data.quantity}</span><br/>
            <DatePickers id="date" datas={data} index={index}></DatePickers><br/>
          </Paper>
        </Grid>
        </span>
       
        </Grid> ))}
        
      </span>}
    </div>
  );
}

CSSGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CSSGrid);