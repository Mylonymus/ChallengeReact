import React, { Fragment, Component } from 'react'
import { withStyles } from '@material-ui/core/styles'; 
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow'; 
import Row from './Row'


let styles = {
    root: {
        flexGrow: 1 
      },
    TH: {
        fontSize:20,
        fontWeight:500,
        fontFamily:'Poppins',
    },
    TD:{
        fontFamily:'Poppins',
        fontSize:18,
        fontWeight: 200
    }

}
let currencies = {
    'USD': '$',
    'EUR': '€'
}
export class Results extends Component {
 
    constructor(props){
        super(props);
        this.state = {
            rowsResults: []
        }
    }

    
   componentDidMount(){
       const { model } = this.props;
       let rowsResults = [];
        Object.keys(model.last.odds).map(function(el, i){
                rowsResults.push(model.last.odds['rank'+i])
        })
        this.setState({rowsResults: rowsResults})
   }
  render() {
      const { classes, model } = this.props;
      const { rowsResults } = this.state;
      
    return (
      <div className={classes.root}> 
        <Table className={classes.root}>
            <TableHead >
                <TableRow>
                    <TableCell className={classes.TH}>
                        Tier
                    </TableCell> 
                    <TableCell className={classes.TH}>
                        Match
                    </TableCell> 
                    <TableCell className={classes.TH}>
                        Winners
                    </TableCell>
                    <TableCell className={classes.TH}>
                        Amount
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody > 
                {
                    rowsResults.map(function(i,index) {
                        if(index > 0){
                            return(
                                <Row tdClass={classes.TD} key={index.toString()} index={index} winners={i.winners} prize={i.prize} amount={i.amount} currency={currencies[model.last.currency]} />
                            )
                        }
                        else{
                            return(<TableRow key={index.toString()}></TableRow>)
                        } 
                    })
                }
            </TableBody>
        </Table>
              
      </div>
    )
  }
}

export default withStyles(styles)(Results)
