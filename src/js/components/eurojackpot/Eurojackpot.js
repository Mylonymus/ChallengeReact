import React, { Fragment, Component } from 'react'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles' 
import Grid from '@material-ui/core/Grid'
import TitleContainer from '../container/TitleContainer'
import Numbers from '../container/Numbers'
import Results from '../container/Results'

import axios from 'axios'


const styles = theme => ({
  root: {
    flexGrow: 1,
  }, 
});

 class Eurojackpot extends Component {

  constructor(props){
    super(props);
    this.state = {}; 
    
  }

  componentDidMount(){
    axios.get('https://www.lottoland.com/api/drawings/euroJackpot')
    .then(response => {
      this.setState({ titleContainer: <TitleContainer model={response.data}/> });
      this.setState({ numbers: <Numbers numbers={response.data}/> });
      this.setState({ results: <Results model={response.data}/> })
      
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  

  render() {
    const { classes } = this.props;
     
    return (
      
      <Grid className={classes.root}   
        container
        direction="column"
        justify="space-around"
        alignItems="stretch"> 
          {this.state.titleContainer}
          {this.state.numbers}
          {this.state.results}
          
      </Grid>
  
     
    )
      
  }
}

export default withStyles(styles)(Eurojackpot) 