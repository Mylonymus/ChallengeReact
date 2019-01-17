import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles' 

const style = {
  root: {
    padding:21,
    marginLeft:28,
    border: '1px solid #d9deda',
    boxShadow: '-7px 0 0 0 #69a507',
    marginBottom:14,
    fontWeight:400,
    fontSize:18
  },
  p:{
    fontFamily:'Poppins',
    fontWeight:300,
    fontSize:17
  },
  pLight:{
    fontFamily:'Poppins',
    fontWeight:100,
    fontSize:18
  }
}
export class Pod2 extends Component {


  render() {

    const { model, classes } = this.props;
    return (
      <div className={classes.root}>
        <p className={classes.pLight}>The EuroJackpot numbers for {model.last.date.day}.{model.last.date.month}.{model.last.date.year}</p>
        <p className={classes.p}>The balls used for the draw are made of a synthetic polymer, softer than ping-pong balls. The results are broadcast after the draw, with the draw-machines independently checked by the VTT Technical Research Center of Finland.</p>
        <p className={classes.p}>Lottoland published the draw results immediately after the draw on <span className={classes.pLight}>{model.last.date.day}.{model.last.date.month}.{model.last.date.year}.</span></p>
      </div>
    )
  }
}

export default withStyles(style)(Pod2);
