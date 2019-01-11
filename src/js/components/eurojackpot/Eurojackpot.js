import React, { Fragment, Component } from 'react'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles' 
import Grid from '@material-ui/core/Grid'
import TitleContainer from '../container/TitleContainer'
import Numbers from '../container/Numbers'
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
import axios from 'axios'


const styles = theme => ({
  root: {
    flexGrow: 1,
  }, 
});
let self = this;
axios.get('https://www.lottoland.com/api/drawings/euroJackpot')
    .then(function (response) {
      // handle success
      self.setState({model: response.data})
      console.log(this.state);
      
    })
    .catch(function (error) {
      // handle error
      console.log(error);
       
    })
    .then(function () {
      // always executed
      
    });

 class Eurojackpot extends Component {

  constructor(props){
    super(props);
    this.state = {}; 
    
  }
 
  render() {
    const { classes } = this.props;
     
    return (
      <Get url="https://www.lottoland.com/api/drawings/euroJackpot">
         <Grid className={classes.root}   
            container
            direction="column"
            justify="space-around"
            alignItems="stretch"> 
          
              <TitleContainer   /> 
              <Numbers/>
          </Grid>
      </Get>
     
    )
      
  }
}

export default withStyles(styles)(Eurojackpot) 