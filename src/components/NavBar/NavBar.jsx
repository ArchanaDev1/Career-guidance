import React, { useEffect, useState } from "react";
import { IoFunnel } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavBar = ({reload, setReload}) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const user = localStorage.getItem("student");
    if(user){
      setIsLoggedIn(true);
    }
    else{
      setIsLoggedIn(false);
    }
  }, [reload])

  const logout = () => {
    localStorage.removeItem("student")
    setReload(pre=>!pre)
  }

  return (
    <nav className="navbar" key={reload}>
      <Link to="/">
        <header className="nav-header">
          <span>Career</span>
          <span>Guidance</span>
        </header>
      </Link>
      <ul className="nav-links">
        <Link to="/"><li>Home</li></Link>
        <Link to="/careers"><li>Careers</li></Link>
        {isLoggedIn?<Link to="/profile"><li>Profile</li></Link>:null}
        {isLoggedIn?<Link to='#' onClick={logout}><li>Sign out</li></Link>:<Link to='/signin'><li>Sign in</li></Link>}
      </ul>
    </nav>
  );
};

export default NavBar;
