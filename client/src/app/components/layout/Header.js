import React, { } from 'react';
import { Link, NavLink  } from 'react-router-dom';
import logo from '../../static/images/logo.png';
import line_up from '../../static/images/line-up.jpg';
import info from '../../static/images/info.jpg';
import camping from '../../static/images/camping.jpg';
import tickets from '../../static/images/tickets.jpg';
import * as Routes from '../../routes';

import './Header.scss';

const Header = ({children}) => {

  const handleToggle = (ev) => {
    document.body.classList.toggle(`is-navigation-open`);
  };

  const test = (ev) => {
    window.addEventListener('load', function() {
      let navigation = document.getElementsByClassName('navbarContent')[0];
      let hamburger = document.getElementsByClassName('hamburger')[0].addEventListener('click', function() {
        navigation.style.display = 'block';
      })
      for (let i = 0; i < 4; i++) {
      let test = document.getElementsByClassName('navCat')[i];
      test.addEventListener('click', function() {
        navigation.style.display = 'none';
      })
    }
     
      
    })
  }

  return (
    <header className="app-header">
      {test()}
      <nav className="navbar navbar-light navigation">
        <h1 className="centerLogo">
          <Link to={Routes.LANDING}><img onClick={{style: document.body.style.backgroundImage = '../static/images/homebackground.jpg'}} className="logo" src={logo}></img></Link>
        </h1>
        <button onClick={ev => handleToggle(ev)} className="hamburger" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <div></div>
          <div></div>
          <div></div>
        </button>
        <div className="navbarContent collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbarDesign">
          <ul className="allItems">
            <li className="navCat leftSide ">
              <NavLink onClick={ev => handleToggle(ev)} to={Routes.LANDING} className="nav-link" activeClassName="active">
              <p>Line up</p>
              <img src={line_up}></img>
              </NavLink>
            
            </li> 
            <li className="navCat rightSide">
              <NavLink onClick={ev => handleToggle(ev)} to={Routes.INFO} className="nav-link" activeClassName="active">
              <p>Info</p>
              <img src={info}></img>
              </NavLink>
            </li> 
            <li className="navCat leftSide">
              <NavLink onClick={ev => handleToggle(ev)} to={Routes.CAMPING} className="nav-link" activeClassName="active">
              <p>Camping</p>
              <img src={camping}></img>
              </NavLink>
            </li>          
            <li className="navCat rightSide">
              <NavLink onClick={ev => handleToggle(ev)} to={Routes.TICKETS} className="nav-link" activeClassName="active">
              <p>Tickets</p>
              <img src={tickets}></img>
              </NavLink>
            </li> 
          </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
