import React, { Component } from "react";
import Button from "../presentational/Button.jsx";
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({ 
    globalPaginator: {
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    } 
})

class GlobalPaginator extends Component {
    
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
        <form className={classNames(classes.globalPaginator)}>
            <Button
            text="Last"  
            id="btn-last"    
            disabled={true}
            handleClick={this.handleClickButton}
            />
            <Button
            text="Next"  
            id="btn-next"   
            disabled={false} 
            handleClick={this.handleClickButton}
            />
      </form>
    );
  }
}
export default withStyles(styles)(GlobalPaginator);
