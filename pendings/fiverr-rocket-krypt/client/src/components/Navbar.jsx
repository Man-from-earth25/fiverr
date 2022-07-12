import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import {
  Link
} from 'react-router-dom';
import logo from "../../images/logo.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    
    <>
    <nav className=" multiVerse_navbarTop">
                   
              <li className="pnt-li menu_tg_cr pnt-li1">
                <div id="pnt-it1" className="pnt-it menu_tg pnt-it1">
                  <ion-icon name="menu-outline" id="pnt-in" />
                  <ion-icon name="close-outline" id="pnt-in" />
                </div>
              </li>

      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer logo" />
      </div>

              <li className="pnt-li">
                
              
              </li>
      

      <li className="pnt-li pnt-li4 ">
        <div id="pnt-it5" className="pnt-it">
                 <Link to="/farms">Farms</Link>
      
        </div>
      </li>
      <li className="pnt-li pnt-li4 ">
        <div id="pnt-it5" className="pnt-it">
                  <Link to="/pools">Pools</Link>
                               
        </div>
      </li>
      <li className="pnt-li pnt-li4 ">
        <div id="pnt-it5" className="pnt-it">
          <Link to="/swap">Swap</Link>
                                  
        </div>
      </li>
        <li className=" chain">
          Etherium 
        </li>
          
        <li className=" profile bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] p-5">
          Login
        </li>
      
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
    </nav>
    
 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  );
};

export default Navbar;
