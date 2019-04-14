import React, { Component } from 'react';
import './Day.css';
class Allinfo extends Component {

   timeConverter=(parm)=>{
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var a = new Date(parm * 1000);
    var day = a.getDay()
    return days[day];
  }
  

  render() {
      var d = this.timeConverter(this.props.day.dt);

    return (
      <table  className="table table-striped table-dark ml-4 table-auto">
         <tbody>
           <tr >
           <td className='px-3' style={{width:'265px'}}>{d}</td>
           <td className='px-3' style={{width:'82px'}}>{(this.props.day.temp.min-273).toPrecision(2)+'\xB0'}</td>
           <td className='px-3' style={{width:'75px'}}>{this.props.day.humidity}</td>
           <td className='px-3' style={{width:'82px'}}>{this.props.day.pressure-273}</td>
           <td>{(this.props.day.weather[0].description)}</td>
           </tr>
         </tbody>
      </table>
      // <div className="container" style={{height:'40px'}}>
      //  <div className="row pl-4 ">
      //     <div className="col-md-6 col-xs-6">
      //     <li className="text-danger">{d}</li>
      //     </div>
      //     <div className="col-md-1 col-xs-1">
      //     <li className="ml-auto">{(this.props.day.temp.min-273).toPrecision(2)+'\xB0'}
      //     </li>
      //     </div>
      //     <div className="col-md-1 col-xs-2 pl-4">
      //       <li>{this.props.day.humidity}</li>
      //     </div>
      //     <div className="col-md-2 col-xs-2 pl-5">
      //       <li>{this.props.day.pressure-273}</li>
      //     </div>
      //     <div className="col-md-2 col-xs-1 pl-5">
      //       <li>{(this.props.day.weather[0].description)}</li>
      //     </div>
      //  </div>
      // </div>

    );
  }
}

export default Allinfo;

