import React, {Component} from 'react';
import {Link} from "react-router-dom";

const Separator = () => <span> &middot; </span>;
class NavBar extends Component {
    render (){
        return <div  className="menu">
          <Link to="/">Home</Link>
          <Separator/>
          <Link to="/about">About</Link>
          <Separator/>
          <Link to="/services">Services</Link>
          <Separator/>
          <Link to="/contacts">Contacts</Link>
        </div>
    }
}
export default NavBar;