import React from 'react'
import { Sidebar_Dev,Sidebar_Pro,Navbar, Welcome, Footer, Services, Transactions } from "../components";
import { Link } from 'react-router-dom';

function Home() {

  return (

      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
 
 <div id="small-sidebar" className="close shadow-sm ">
  <ul id="ss-ul">

      
                            <Link to="/docs" >
                                               
                        <li className="ss-li" id="ss-li1" >
                            

                                <ion-icon name="game-controller-outline"></ion-icon>
               
                                               
                            
                                
                                <a href="#">Home</a>
                                
                            
                        </li>
  </Link>                            
                            

    {/* <li class="line"></li> */}
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
   
                
          <Navbar />
          <Welcome />
        </div>
        <Services />
        <Transactions />
        <Footer />
        
                    
            <li><Link to="/docs" className="text-gray-400 hover:text-gray-100">Docs</Link></li>

      </div>
  )
}

export default Home




