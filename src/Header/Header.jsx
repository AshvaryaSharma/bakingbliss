import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {useStateValue} from "../Store/StateProvider";

function Header(props) {

 console.log("Location: " + props.path);
  const [mobNavOpen, setMobNavOpen] = useState(false)
const className = mobNavOpen?('main-nav js-main-nav visible'):('main-nav js-main-nav');
const [{basket,user}, dispatch] = useStateValue();
  const handleSignOut = () => {
    dispatch({
      type:"SIGN_OUT"
    })

    

  }
  console.log("User name:" + user + "Yo")
    return (
      <div className="nav sticky">
        <div className="sticky-logo visible">
           <Link to="/">
             <span className="logo__top">Baking</span>
          <span className="logo__bottom"> Bliss</span>
           </Link>
        </div>
        <div className="mobile__nav">
          {mobNavOpen?
          (<i className="fas fa-times" onClick={()=>setMobNavOpen(false)}></i>) : ( <i className="fas fa-bars" onClick={()=>setMobNavOpen(true)}></i>)
        }
         
          
        </div>
        <ul className={className} >
          <li>
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>

          <li>
            <Link to="/Products">Our Bakes</Link>
          </li>
          <li>
            <Link to="/Gallery" className="nav__link">
              Gallery
            </Link>
          </li>
          {/* <li>
            <a href="">Social Media</a>
          </li> */}

          <li>
            <Link to="/ContactUs" className="nav__link">
              Contact Us
            </Link>
          </li>

          <li>
        {(user === null || user =='')?(<Link to="/Login">Sign In</Link>):<Link onClick={handleSignOut}>{user.displayName.split(" ")[0] + " Sign Out"}</Link>}
          </li>
          <li>
            <Link to="/Checkout">
              <i className="fas fa-shopping-basket">
                <p>{basket.length===0?"":basket.length}</p>
                {/* <div className="cart__container">
                  <span className="cart__popup">No items in cart</span>
                </div> */}
              </i>
            </Link>
          </li>
        </ul>
      </div>
    );
}

export default Header
