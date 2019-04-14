import React, { Component } from 'react';
import './Search.css'
let initial ={
    city:''
}

class Search extends Component {
  constructor(props) {
    super(props)
    this.myform=React.createRef()
  }
     state ={...initial}
     
      changeHandler = (e) =>{
          this.setState({
            [e.target.name]:e.target.value   
          })
          
      }

    render() {
        
        return (
            <div className="Search py-2">
               <div className="d-flex">
                <label htmlFor="location"><i className="fas fa-map-marker-alt mx-4 pt-1"></i></label>
                <input type="text" className="form-control search" placeholder="search city.."       name="city"
                 value={this.state.city} 
                 onKeyPress={this.props.getWeather}
                 onChange={this.changeHandler}
                 ref={this.myform}
                 />
               </div>
            </div>
        );
    }
}

export default Search;