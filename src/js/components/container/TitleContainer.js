import React, { Component } from "react";
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({ 
  TitleContainer: {
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    } 
})

class TitleContainer extends Component {
    
  constructor() {
    super();
    this.state = {
      next: false,
      last: true
    };
    this.handleClickButton = this.handleClickButton.bind(this);
  }

  handleClickButton(e) {
    this.setState({ next: !this.state.next, last: !this.state.last });
  } 
  render() { 

    const { classes } = this.props;
    return (
        <section className={classNames(classes.TitleContainer)}>
             EUROJACKPOT RESULTS & WINNING NUMBERS  
      </section>
    );
  }
}
export default withStyles(styles)(TitleContainer);
