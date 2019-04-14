import React, { Component } from "react";
import "./App.css";
import weather from './weather.gif'
import {BrowserRouter} from 'react-router-dom'
import Search from './Search/Search';
import Statics from './Statistics/Statics';
import Forecast from './Forecast/Forecast';
import axios from 'axios';
import Nn from './Nn';

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      city:'',
      temp:'',
      humidity:'',
      wind:'',
      condition:'',
      date:'',
      list:[]
    }

  }
 
getWeather =(e) =>{
  
 if(e.key === 'Enter'){
   let city = e.target.value;
  axios.get("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=49e205a0f7848605b41aa220e12788f3")
  .then(response=>{
    console.log(response.data)
    this.setState({
      city: response.data.name,
      temp: (response.data.main.temp-273).toPrecision(2)+'\xB0',
      humidity: response.data.main.humidity,
      wind:(response.data.wind.deg-273).toPrecision(2)+'\xB0',
      condition: response.data.weather[0].description,
      date:(response.data).dt
      
    })
  })
  .catch(err=>{
    console.log(err)
  })
 
  axios.get("https://api.openweathermap.org/data/2.5/forecast/daily?q="+city+"&appid=49e205a0f7848605b41aa220e12788f3")
       .then(res=>{
         this.setState({
           list:res.data.list
         })
         console.log(this.state.list)
       })
       .catch(err=>console.log(err))

 }
}

temHendler=(e)=>{
 e.preventDefault()
  console.log("all temperature")
}

  render() {
   
    return (
      
      <BrowserRouter>
      <div className="App container">
        
      <div className="row  justify-content-center weatherApp">
        <div className="col-md-10 ">
        
      <div className="row">
        <div className="col-md-4 " style={{backgroundImage:`url(${weather})`,backgroundSize:'cover',height:'590px'}}>
          <h6 className="text-white text-center py-4"> <Nn/> </h6>
          <div>
          <h2 className="text-white text-center  secLoc">{this.state.temp}</h2>
          <h2 className="text-white text-center ">{this.state.city}</h2>
          </div>
        </div>
        <div className="col-md-8" style={{"height":"550px"}}>
           <Search ref={this.myform}  getWeather={this.getWeather} keyPraseHandler={this.keyPraseHandler}/>
           <Statics 
           temp={this.state.temp}
           humidity={this.state.humidity}
           wind={this.state.wind}
           condition={this.state.condition}
           />
           <Forecast daylist={this.state.list} temHendler={this.temHendler}/>
        </div>
      </div>
        </div>
      </div>
      
    </div>
     
      </BrowserRouter>
    );
  }
}

export default App;
