import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'; 

const styles = theme => ({
    root: {
      flexGrow: 1,
    }, 
  });

export class Numbers extends Component {

    constructor(props){
        super(props);
        this.state  = {}
    }
  render() {
      
    const { numbers } = this.props;
    this.state.numbers = numbers;
    return (
      <section className="numbersContainer">
        <header>
            <span className="euroJackpotColor">
                Eurojackpot
            </span>    
            Results for Friday 04 Jan 2019
        </header>  
        <div className="results">
            <ul>
                {numbers.map ( i => {
                    return (
                    <li className="numberLotery">
                    i
                    </li>
                )
                } )}
            </ul>
        </div>
      </section>
    )
  }
}

export default withStyles(styles)(Numbers);
