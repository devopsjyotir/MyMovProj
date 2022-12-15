
import { Link } from 'react-router-dom'
import '../styles/TopNavBar.css'
// import logo from '../assets/Fretyir.png'
// import { Link } from "react-router-dom";

const TopNav = () => {
    return (
        <nav className="top-navbar">
          <h4><i><span className='hub'>MyMovie</span> </i>LIST.</h4>
          <div>
            <Link to="/" className="linky">
              Home
            </Link>
    
    
            <Link to="/register" className="linky">
      Register
            </Link>
            <Link to="/sigin" className="linky">
      Log In
            </Link>
          </div>
        </nav>
      );
    };
export default TopNav