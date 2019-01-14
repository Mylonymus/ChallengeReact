import React, { Fragment, Component } from 'react'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles' 
import Grid from '@material-ui/core/Grid'
import TitleContainer from '../container/TitleContainer'
import Numbers from '../container/Numbers'
import Results from '../container/Results'
import Pod1 from '../container/Pod1'
import Pod2 from '../container/Pod2'

import axios from 'axios'


const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    width:'100%'
  }, 
  leftCol:{
    width:'60%',
    justifyContent: 'flex-start',
    flexGrow:2
  },
  rightCol:{
    width:'30%',
    justifyContent: 'flex-end',
    flexGrow:1
  },
  title: {
    width:'100%',
    display:'block'
  }
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
      this.setState({ pod1: <Pod1 model={response.data}/> })
      this.setState({ pod2: <Pod2 model={response.data}/> })
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  

  render() {
    const { classes } = this.props;
     
    return (
      <Fragment>
        <div className={classes.title}>
          {this.state.titleContainer}
          {this.state.numbers}
        </div>
        <div className={classes.root}> 
            <div className={classes.leftCol}> 
              {this.state.results}
            </div>
            <div className={classes.rightCol}>
              {this.state.pod1}
              {this.state.pod2}
            </div> 
        </div>
      </Fragment>
    )
      
  }
}

export default withStyles(styles)(Eurojackpot) 