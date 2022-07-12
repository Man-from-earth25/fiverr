import React from 'react'
import { Sidebar_Dev,Sidebar_Pro,Navbar, Welcome, Footer, Services, Transactions } from "../components";


function About() {
  return (

      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
 
 <div id="small-sidebar" className="close shadow-sm ">
  <ul id="ss-ul">

    <li className="ss-li hover:shadow-2xl" id="ss-li1">
      <link to="/home" />
      <ion-icon name="home-outline" />
      <a href="#">Home</a>
    </li>
    <link to="/exchange" />
    <li className="ss-li hover:shadow-2xl" id="ss-li2">
      <ion-icon name="cash-outline" />
      <a href="#">Exchange</a>                               
    </li>
    <li className="ss-li hover:shadow-2xl" id="ss-li2">
      <link to="/nft" />
      <ion-icon name="diamond-outline" />
      <a href="#">Nft</a>
    </li>
    <li className="ss-li hover:shadow-2xl" id="ss-li2">
      <link to="/stack" />
      <ion-icon name="analytics-outline" />
      <a href="#">Stack</a>
    </li>
    <li className="ss-li hover:shadow-2xl" id="ss-li2">
      <link to="/airdrop" />
      <ion-icon name="egg-outline" />
      <a href="#">Airdrop</a>
    </li>
    <li className="ss-li hover:shadow-2xl" id="ss-li3">
      <link to="/ido_event" />
      <ion-icon name="medal-outline" />
      <a href="#">Ido-Event</a>
    </li>
    <li className="ss-li hover:shadow-2xl" id="ss-li4">
      <ion-icon name="ribbon-outline" />
      <a href="#">Ido</a>
    </li>
    <li className="ss-li hover:shadow-2xl" id="ss-li5">
      <link to="/gamefi" />
      <ion-icon name="game-controller-outline" />
      <a href="#">GameFi</a>
    </li>
    <li className="ss-li hover:shadow-2xl" id="ss-li7">
      <link to="/support_ukrane" />
      <ion-icon name="sparkles-outline" />
      <a href="#">Support Ukraine</a>
    </li>
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
      </div>
  )
}

export default About 




