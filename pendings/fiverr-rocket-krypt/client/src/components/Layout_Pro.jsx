import React from "react";
import { Link } from 'react-router-dom';





// opbro🎉🎉🎉🎉😎😎😎😎
export const Layout_Dev = () => {
  
  
 
          return (
            <>
          {/* Navbar top */}
          <nav id="pro_navbartop_container" className=" shadow-sm ">
            <ul id="pnt-ul">
            
            
              <li className="pnt-li pnt-li1">
                <div id="pnt-it1" className="pnt-it pnt-it1">
                  <ion-icon name="menu-outline" id="pnt-in" />
                  <ion-icon name="close-outline" id="pnt-in" />
                </div>
              </li>
              <li className="pnt-li pnt-li4 ">
                <div id="pnt-it5" className="pnt-it">
                  <ion-icon name="sunny-outline" />
                  <ion-icon name="moon-outline" />
                </div>
              </li>
                <li className="pnt-li pnt-li2 notifications-toggler">
                  <div className="pnt-it notifications-tg" id="pnt-it2">
                    <div className="main-ic">
                      <ion-icon className="pnt-it2" name="notifications-outline" id="pnt-in" />
                      <ion-icon className="pnt-it2" name="close-outline" id="pnt-in" />
                    </div>
                    <div className="high-lighter">1</div>
                  </div>
                  {/* <img srcset="../public/Google.png" src="../public/Google.png" alt="../public/Google.png"> */}
                </li>
        
        
                <li className="pnt_divider pnt-li3 ">
                  <div id="pnt-lg" className="pnt-it">
                    {/* <img src="./jrzy-logo.png" alt="logo"> 
                         <img className="pc-block mb-none krypt-logo" src="https://cdn.jsdelivr.net/gh/Man-from-earth25/fiverr-krypt/web/images/logo.png" alt="logo" />
                       
                    */}
                    
                            
                            <img className="pc-block krypt-logo" src="https://cdn.jsdelivr.net/gh/Man-from-earth25/fiverr-krypt/web/images/logo.png" alt="logo" />
                            <img className="mb-block" src="https://cdn.jsdelivr.net/gh/Harry1o1/Cryto-Dragons/solana/Jrzy/jrzy-logo.png" alt="logo" />
                    
                  </div>
                </li>
        
                {/* Wallet & Settings */}
                <div className="navbar-end ">
                  <div className="dropdown psd-toggler">
                       
                    <div tabIndex={0} className="btn btn-square btn-ghost">
                    <li className="pnt-li pnt-li4 ">
                        
                        <div id="pnt-it5" className="pnt-it">
                            
                            <ion-icon name="settings-outline"></ion-icon>
                            
                        </div>
                        
                        
                    </li>
                      
                      
                    </div>
                    <ul tabIndex={0} className="p-s-d p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                      <li>
                        <div className="form-control">
                          <label className="cursor-pointer label">
                            <div>Autoconnect</div>
                      
                          </label>
                        </div>
                      </li>
                      <li>
                        <div>Slippage (pending)</div>
                      </li>
                      <li>
                        <div>Setting 3</div>
                      </li>
                    </ul>
                  </div>
                  
                  
                  <WalletMultiButton className="wallet btn btn-ghost mr-2" />
                  
                  
                </div>
              
              
              
              
            </ul>
          </nav>
          
          
          
          
          
          
          <div id="small-sidebar" className="close shadow-sm ">
            <ul id="ss-ul">
        
                                <li className="ss-li" id="ss-li1">
                                    <Link to="/home">
                                        
                                        <ion-icon name="home-outline"></ion-icon>
                                        
                                    </Link>                            
                                    
                                    
                                    <Link to="/home">
                                        
                                        <a href="#">Home</a>
                                        
                                    </Link>                            
                                    
                                </li>
        
                                <li className="ss-li" id="ss-li1">
                                    <Link to="/home">
                                        
                                        <ion-icon name="home-outline"></ion-icon>
                                        
                                    </Link>                            
                                    
                                    
                                    <Link to="/home">
                                        
                                        <a href="#">Home</a>
                                        
                                    </Link>                            
                                    
                                </li>        
                                <li className="ss-li" id="ss-li1">
                                    <Link to="/home">
                                        
                                        <ion-icon name="home-outline"></ion-icon>
                                        
                                    </Link>                            
                                    
                                    
                                    <Link to="/home">
                                        
                                        <a href="#">Home</a>
                                        
                                    </Link>                            
                                    
                                </li>        
                                <li className="ss-li" id="ss-li1">
                                    <Link to="/home">
                                        
                                        <ion-icon name="home-outline"></ion-icon>
                                        
                                    </Link>                            
                                    
                                    
                                    <Link to="/home">
                                        
                                        <a href="#">Home</a>
                                        
                                    </Link>                            
                                    
                                </li>        
                                <li className="ss-li" id="ss-li1">
                                    <Link to="/home">
                                        
                                        <ion-icon name="home-outline"></ion-icon>
                                        
                                    </Link>                            
                                    
                                    
                                    <Link to="/home">
                                        
                                        <a href="#">Home</a>
                                        
                                    </Link>                            
                                    
                                </li>        
              {/* <li className="line"></li> */}
              <div className="strat-line">
                <li className="st st1">
                  <div className="st-main" id="st-m1">
                    <ion-icon name="list-outline" />
                    <a href="#">More</a>
                    <ion-icon name="chevron-forward-outline" />
                  </div>
                  <div className="st-toggle">
                    <a href="#">Twitter</a>
                    <a href="#">Discord</a>
                    <a href="#">Facebook</a>
                    <a href="#">Telegram</a>
                  </div>
                </li>
                <li className="st st2">
                  <div className="st-main" id="st-m2">
                    <ion-icon name="heart-outline" />
                    <a href="#">Favorite</a>
                    <ion-icon name="chevron-forward-outline" />
                  </div>
                  <div className="st-toggle">
                    <a href="#">Exchange</a>
                    <a href="#">Nft</a>
                    <a href="#">Airdrop</a>
                    <a href="#">Gamefi</a>
                  </div>
                </li>
                <li className="st st3">
                  <div className="st-main" id="st-m3">
                    <ion-icon name="book-outline" />
                    <a href="#">Docs</a>
                    <ion-icon name="chevron-forward-outline" />
                  </div>
                  <div className="st-toggle">
                    <a href="#">All</a>
                    <a href="#">Assigned to me</a>
                    <a href="#">Shared with me</a>
                    <a href="#">Private</a>
                  </div>
                </li>
                <li className="st st4">
                  <div className="st-main" id="st-m4">
                    <ion-icon name="bar-chart-outline" />
                    {/* <ion-icon name="list-outline"></ion-icon> */}
                    <a href="#">Analysis</a>
                    <ion-icon name="chevron-forward-outline" />
                  </div>
                  <div className="st-toggle">
                    <a href="#">Twitter</a>
                    <a href="#">Discord</a>
                    <a href="#">Facebook</a>
                    <a href="#">Telegram</a>
                  </div>
                </li>
                <li className="st st5">
                  <div className="st-main" id="st-m5">
                    <ion-icon name="cloud-upload-outline" />
                    {/* <ion-icon name="heart-outline"></ion-icon> */}
                    <a href="#">Uploads</a>
                    <ion-icon name="chevron-forward-outline" />
                  </div>
                  <div className="st-toggle">
                    <a href="#">Exchange</a>
                    <a href="#">Nft</a>
                    <a href="#">Airdrop</a>
                    <a href="#">Gamefi</a>
                  </div>
                </li>
                <li className="st st6">
                  <div className="st-main" id="st-m6">
                    <ion-icon name="library-outline" />
                    {/* <ion-icon name="bar-chart-outline"></ion-icon> */}
                    {/* <ion-icon name="book-outline"></ion-icon> */}
                    <a href="#">Library</a>
                    <ion-icon name="chevron-forward-outline" />
                  </div>
                  <div className="st-toggle">
                    <a href="#">All</a>
                    <a href="#">Assigned to me</a>
                    <a href="#">Shared with me</a>
                    <a href="#">Private</a>
                  </div>
                </li>
              </div>
            </ul>
          </div>
          
          
          
          
          
          {/* Notifications Container     #notifications-container>ul#n-ul>li.n-li.n-li$**/}
          <div className="drop notifications-container">
            <div className="drop__container" id="drop-items">
              <div className="drop__card">
                <div className="drop__data">
                  <img src="https://cdn.jsdelivr.net/gh/Harry1o1/Cryto-Dragons/solana/public/img3.jpg" alt="hi" className="drop__img" />
                  <div>
                    <h1 className="drop__name">Robbie Ford</h1>
                    <span className="drop__profession">Ui/Ux design</span>
                  </div>
                </div>
                <div>
                  <a href="#" className="drop__social"><i className="bx bxl-instagram" /></a>
                  <a href="#" className="drop__social"><i className="bx bxl-facebook" /></a>
                  <a href="#" className="drop__social"><i className="bx bxl-twitter" /></a>
                </div>
              </div>
              <div className="drop__card">
                <div className="drop__data">
                  <img src="https://cdn.jsdelivr.net/gh/Harry1o1/Cryto-Dragons/solana/public/img3.jpg" alt="hi" className="drop__img" />
                  <div>
                    <h1 className="drop__name">Robbie Ford</h1>
                    <span className="drop__profession">Ui/Ux design</span>
                  </div>
                </div>
                <div>
                  <a href="#" className="drop__social"><i className="bx bxl-instagram" /></a>
                  <a href="#" className="drop__social"><i className="bx bxl-facebook" /></a>
                  <a href="#" className="drop__social"><i className="bx bxl-twitter" /></a>
                </div>
              </div>
              <div className="drop__card">
                <div className="drop__data">
                  <img src="https://cdn.jsdelivr.net/gh/Harry1o1/Cryto-Dragons/solana/public/img2.jpg" alt="hi" className="drop__img" />
                  <div>
                    <h1 className="drop__name">Robbie Ford</h1>
                    <span className="drop__profession">Ui/Ux design</span>
                  </div>
                </div>
                <div>
                  <a href="#" className="drop__social"><i className="bx bxl-instagram" /></a>
                  <a href="#" className="drop__social"><i className="bx bxl-facebook" /></a>
                  <a href="#" className="drop__social"><i className="bx bxl-twitter" /></a>
                </div>
              </div>
              
              
              <div className="drop__card">
                <div className="drop__data">
                  <img src="https://cdn.jsdelivr.net/gh/Harry1o1/Cryto-Dragons/solana/public/img3.jpg" alt="hi" className="drop__img" />
                  <div>
                    <h1 className="drop__name">Robbie Ford</h1>
                    <span className="drop__profession">Ui/Ux design</span>
                  </div>
                </div>
                <div>
                  <a href="#" className="drop__social"><i className="bx bxl-instagram" /></a>
                  <a href="#" className="drop__social"><i className="bx bxl-facebook" /></a>
                  <a href="#" className="drop__social"><i className="bx bxl-twitter" /></a>
                </div>
              </div>
              
              
              <div className="drop__card">
                <div className="drop__data">
                  <img src="https://cdn.jsdelivr.net/gh/Harry1o1/Cryto-Dragons/solana/public/img4.jpg" alt="hi" className="drop__img" />
                  <div>
                    <h1 className="drop__name">Jenny Lit</h1>
                    <span className="drop__profession">Digital marketing</span>
                  </div>
                </div>
                <div>
                  <a href="#" className="drop__social"><i className="bx bxl-instagram" /></a>
                  <a href="#" className="drop__social"><i className="bx bxl-facebook" /></a>
                  <a href="#" className="drop__social"><i className="bx bxl-twitter" /></a>
                </div>
              </div>
            </div>
          </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                  {/* Main */}
                  <main>
                     <div id="pro_main_container">
                            { children }
                    </div>
                    <footer>
                      <ul id="pf-ul1">
                        <h1>About us</h1>
                        <div id="main-link1" className="main-links">
                          <li id="pf-li1" className="pf-li"><a href="#" className="pf-a"> Join a meetup </a></li>
                          <li id="pf-li2" className="pf-li"><a href="#" className="pf-a"> Ask a question</a></li>
                          <li id="pf-li3" className="pf-li"><a href="#" className="pf-a"> Help </a></li>
                        </div>
                      </ul>
                      <ul id="pf-ul2">
                        <h1>Pages</h1>
                        <div id="main-link2" className="main-links">
                          <li id="pf-li1" className="pf-li"><a href="#" className="pf-a"> Airdrop </a></li>
                          <li id="pf-li2" className="pf-li"><a href="#" className="pf-a"> Nft </a></li>
                          <li id="pf-li3" className="pf-li"><a href="#" className="pf-a"> Gamefi</a></li>
                          <li id="pf-li4" className="pf-li"><a href="#" className="pf-a"> Stack </a></li>
                          <li id="pf-li5" className="pf-li"><a href="#" className="pf-a"> Exchange </a></li>
                        </div>
                      </ul>
                      <ul id="pf-ul3">
                        <h1>What new Events</h1>
                        <div id="main-link3" className="main-links">
                          <li id="pf-li1" className="pf-li"><a href="#" className="pf-a"> Ido drop </a></li>
                          <li id="pf-li2" className="pf-li"><a href="#" className="pf-a"> Ido Events drop </a></li>
                          <li id="pf-li3" className="pf-li"><a href="#" className="pf-a"> Sales </a></li>
                        </div>
                      </ul>
                      <ul id="pf-ul4">
                        <h1>Join us</h1>
                        <div id="main-link4" className="main-links">
                          <li id="pf-li1" className="pf-li"><a href="#" className="pf-a"> Twitter </a></li>
                          <li id="pf-li2" className="pf-li"><a href="#" className="pf-a"> Discord </a></li>
                          <li id="pf-li3" className="pf-li"><a href="#" className="pf-a"> Facebook </a></li>
                          <li id="pf-li4" className="pf-li"><a href="#" className="pf-a"> Skillshare </a></li>
                          <li id="pf-li5" className="pf-li"><a href="#" className="pf-a"> YouTube </a></li>
                        </div>
                      </ul>
                      <div id="copyright">
                        All rights reserved to  
                      </div>
                    </footer>
                </main>
        
            </>
          );
      }; 

 
export default Layout_Dev;