import { Link } from "react-router-dom";

import { useState } from "react";

const Header = () => {
  console.log("test")
  
  const [btnNameReact,setbtnNameReact] = useState("Logout");
    return (
      <div className="flex justify-between bg-pink-200 shadow-lg m-2">
        <div className="logo-container">
          <img
            className="w-24"
            src="https://png.pngtree.com/png-vector/20230217/ourmid/pngtree-food-logo-design-for-restaurant-and-business-png-image_6604922.png"
           
          />
        </div>
        <div className="flex items-center">
          <ul className="flex px-2 text-xl text-blue-600">
            <li className="px-4"> <Link to="/">Home </Link></li>


            <li className="px-4"> <Link to="/about">About Us </Link></li>
            <li className="px-4">
           <Link to="/contact">Contact Us</Link></li>
            <li className="px-4 text-gray-500">Cart</li>
            <button className="login" onClick={()=>
              {btnNameReact =="Logout" ?setbtnNameReact("Login") : setbtnNameReact("Logout")
                console.log(btnNameReact)
              }}>
              {btnNameReact}
              </button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;