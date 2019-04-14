import React from 'react';
import './Menu.css'
import {Link} from 'react-router-dom';
const Menu = (props) => {
    return(<div className="ml-auto">
        <ul className="nav">
  <li className="nav-item">
    <Link to="/temp" className="nav-link text-info menuBar active" onClick={props.temHendler}>Temp</Link>
  </li>
  <li className="nav-item">
    <Link to="/humidity" className="nav-link text-info menuBar" >Humidity</Link>
  </li>
  <li className="nav-item">
    <Link to="/pressure" className="nav-link text-info menuBar" >Pressure</Link>
  </li>
  <li className="nav-item">
    <Link to="/condition" className="nav-link text-info menuBar" >Condition</Link>
  </li> 
</ul>
        </div>)
}

export default Menu;