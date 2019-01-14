import React, { Component } from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import NumberFormat from 'react-number-format';
 
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

class Row extends Component {
  
    constructor(props){
        super(props); 
    }
  
    render() {
      const { tdClass, index, winners, prize, amount, currency } = this.props;
    
      
            return(<TableRow key={index.toString()}>   
                        
                <TableCell className={tdClass} xs={3}>
                    {listTier[index]}
                </TableCell>
                <TableCell className={tdClass}>
                {listMatchs[index]}
                </TableCell> 
                <TableCell xs={3} className={tdClass+' winners'}>
                    <NumberFormat displayType="text" value={winners} thousandSeparator={true} suffix={'x'}/>
                </TableCell> 
                <TableCell xs={3} className={tdClass+' prize'}>
                <NumberFormat displayType="text" value={prize} thousandSeparator={true} prefix={currency}/>
                    
                </TableCell> 
            </TableRow>)
      
  }
}

export default Row
