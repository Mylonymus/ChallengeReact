import React, { Fragment, Component } from 'react'
import { withStyles } from '@material-ui/core/styles'; 
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import NumberFormat from 'react-number-format';
import classNames from 'classnames';
import Row from './Row'
let listTier = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
    11: "XI",
    12: "XII",
    13: "XIII",
    14: "XIV",
    15: "XV",
    16: "XVI",
    17: "XVII",
    18: "XVIII",
    19: "XIX",
    20: "XX"
}
let listMatchs = {
    1: "5 Numbers + 2 Euronumbers",
    2: "5 Numbers + 1 Euronumbers",
    3: "5 Numbers + 0 Euronumbers",
    4: "4 Numbers + 2 Euronumbers",
    5: "4 Numbers + 1 Euronumbers",
    6: "4 Numbers + 0 Euronumbers",
    7: "3 Numbers + 2 Euronumbers",
    8: "2 Numbers + 2 Euronumbers",
    9: "3 Numbers + 1 Euronumbers",
    10: "3 Numbers + 0 Euronumbers",
    11: "1 Numbers + 2 Euronumbers",
    12: "2 Numbers + 1 Euronumbers"
    


}
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
        Object.keys(model.last.odds).map(function(x, i){
                    
             
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
