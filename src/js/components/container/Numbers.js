import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'; 
import classNames from 'classnames';
const styles = theme => ({
    root: {
      flexGrow: 1,
      
    }, 
    resetMarginPadding:{
        margin:0,
        padding:0
    },
    numbers: {
        
        float: 'left',
        width: 35,
        border: '1px solid black',
        listStyle: 'none',
        borderRadius: 30,
        textAlign: 'center',
        height: 25,
        position: 'relative',
        paddingTop: 10,
        margin: 10,
        fontWeight:'bold'

    },
    extraNumber: {
        border: '1px solid #ca7f26',
    },
    euroJackpotColor:{
        fontWeight:200,
        fontFamily: 'Poppins',
        fontSize: 18
    },
    euroJackpotColor:{
        fontWeight:200,
        color: '#815422',
        fontFamily: 'Poppins',
        fontSize: 18
    },
    resultsDateStr:{
        fontWeight:200,
        fontFamily: 'Poppins',
        fontSize: 18
    }
  });

export class Numbers extends Component {

    constructor(props){
        super(props);
        this.state  = {}
    }
  render() {
      
    const { classes, numbers } = this.props;
    this.state.numbers = numbers;
    return (
      <section className={classes.numbersContainer}>
        <header>
            <span className={classes.euroJackpotColor}>
                Eurojackpot 
            </span>    
            <span className={classes.resultsDateStr}> Results for {numbers.last.date.full}</span>
        </header>  
        <div>
            <ul className={classes.resetMarginPadding}>
                {numbers.last.numbers.map ( i => {
                    return (
                    <li className={classes.numbers+" numberLotery"} key={i}>
                    {i}
                    </li>
                )
                } )}
                {numbers.last.euroNumbers.map(i => {
                    return(
                        <li key={i} className={classes.numbers+' '+classes.extraNumber}>
                        {i}
                        </li>
                    )
                })}
            </ul>
        </div>
      </section>
    )
  }
}

export default withStyles(styles)(Numbers);
