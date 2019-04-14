import React from 'react';

class Nn extends React.Component {
    currYear(){
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      
      const d = new Date();
      
        return (`${d.getDate()} ${monthNames[d.getMonth()]} ${d.getFullYear()}`);
    }

    render(){
        return(<div>{this.currYear()}</div>)
    }
}
export default Nn;