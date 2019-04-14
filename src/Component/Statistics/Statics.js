import React, { Component } from 'react';
import "./Statics.css"
class Statics extends Component {

    render() {
        return (
          <div className="Statistic py-1">
            <h4 className="mx-4 text-muted statisticsSec">Statistics
            </h4>
            <hr className="mx-4 px-2"/>
            <div className="row d-flex text-center">
             <div className="col-md-3 col-sm-6">
             <span>
                   <i className="fas fa-tint  static"></i>
                   <div>
                     <p className=" py-3 text-muted statisticsSec">{this.props.temp}</p>
                   </div>
              </span>
             </div>
              <div className="col-md-3  col-sm-6">
              <span>
                   <i className="fas fa-clock  static"></i>
                   <div>
                     <p className=" py-3 text-muted statisticsSec">{this.props.humidity}</p>
                   </div>
              </span>
              </div>
              <div className="col-md-3 col-sm-6">
              <span>
                   <i className="fas fa-wind  static"></i>
                   <div>
                     <p className="py-3 text-muted statisticsSec">{this.props.wind}</p>
                   </div>
              </span>
              </div>
              <div className="col-md-3 col-sm-6">
              <span>
                   <i className="fas fa-cloud  static"></i>
                   <div>
                     <p className="py-3  text-muted statisticsSec">{this.props.condition}</p>
                   </div>
              </span>
              </div>
            </div>
          </div>  
        );
    }
}

export default Statics;