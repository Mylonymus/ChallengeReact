import React, { Fragment, Component } from 'react'

import { withStyles } from '@material-ui/core/styles' 
import TitleContainer from '../container/TitleContainer'
import Numbers from '../container/Numbers'
import Results from '../container/Results'
import Pod1 from '../container/Pod1'
import Pod2 from '../container/Pod2'

import {Get} from 'react-axios'


const styles = {
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
};

 class Eurojackpot extends Component {

  constructor(props){
    super(props);
    this.state = {}; 
    
  }

  componentDidMount(){
    
  }
  

  render() {
    const { classes } = this.props; 
    return (
      <Fragment>
        <Get url="https://www.lottoland.com/api/drawings/euroJackpot">
        {(error, response, isLoading, makeRequest, axios) => {
          if(error) {
            return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
          }
          else if(isLoading) {
            return (<div>Loading...</div>)
          }
          else if(response !== null) {
            return (
              <Fragment>
                  <div className={classes.title}>
                    <TitleContainer model={response.data}/>
                    <Numbers numbers={response.data}/>
                  </div>
                  <div className={classes.root}> 
                      <div className={classes.leftCol}> 
                        <Results model={response.data}/> })
                      </div>
                      <div className={classes.rightCol}>
                        <Pod1 model={response.data}/>
                        <Pod2 model={response.data}/>
                      </div> 
                  </div>
              </Fragment>
            )
          }
          return (<div>Default message before request is made.</div>)
        }}
          
        </Get>
        
      </Fragment>
    )
      
  }
}

export default withStyles(styles)(Eurojackpot) 