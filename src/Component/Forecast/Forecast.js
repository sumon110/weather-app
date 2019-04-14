import React, { Component } from 'react';
import './Forecast.css'
import Menu from './Menu/Menu'
import Allinfo from './Days/temp';



class Forecast extends Component {


    render() {
        return (
            
            <div>
              <div className="row d-flex">
              <h4 className="ml-5 text-muted forecastsHeading">Forecasts</h4>
              <Menu temHendler={this.props.temHendler}/>
              </div>
              <hr className="mx-4 hrRow"/>
               {this.props.daylist.map((day)=>{
                   return <Allinfo day={day}/>
               })}
            </div>
        );
    }
}

export default Forecast;