import React from 'react'
import {
  Sidebar_Dev,
  Sidebar_Pro,
  Navbar,
  Welcome,
  Footer,
  Services,
  Transactions
} from "../components";
import {
  Link
} from 'react-router-dom';


 
function Home() {

 

const loggerclick = () => {
  console.log("HomeIcon clicked baby 🍼🍼 🐥🐥!!!");
}
const usehistorybaby = () => {
  console.log("usehistorybaby Clicked !!");
 window.location.href = "http://localhost:3000/about";
 
}


  return (

    <div className="min-h-screen">
        <div className="gradient-bg-welcome">
 <div id="small-sidebar" className="close shadow-sm ">
  <ul id="ss-ul">
    <li className="ss-li" id="ss-li1" onClick={loggerclick}>
        
        <ion-icon name="home-outline"></ion-icon>
         <Link to="/home">
           <a href="#">Home</a>
         </Link>
    </li>
    <li className="ss-li" id="ss-li1">
    
        <ion-icon name="cash-outline"></ion-icon>
         <Link to="/exchange">
           <a href="#">Exchange</a>
         </Link>
    </li>
  
    <li className="ss-li" id="ss-li1">
    
        <ion-icon name="diamond-outline"></ion-icon>
         <Link to="/nft_marketplace">
           <a href="#">Nft-Marketplace</a>
         </Link>
    </li>
    <li className="ss-li" id="ss-li1">
    
        <ion-icon name="easel-outline"></ion-icon>
         <Link to="/nft_collections">
           <a href="#">Nft-Collections</a>
         </Link>
    </li>
    <li className="ss-li" id="ss-li1">
    
        <ion-icon name="easel-outline"></ion-icon>
         <Link to="/nft_exproler">
           <a href="#">Nft-Exproler</a>
         </Link>
    </li>
    <li className="ss-li" id="ss-li1">
    
        <ion-icon name="checkmark-done-outline"></ion-icon>
         <Link to="/transactions">
           <a href="#">Transactions</a>
         </Link>
    </li>
    <li className="ss-li" id="ss-li1">
    
        <ion-icon name="mail-unread-outline"></ion-icon>
         <Link to="/message">
           <a href="#">Message</a>
         </Link>
    </li>
    <li className="ss-li" id="ss-li1">
    
        <ion-icon name="heart-outline"></ion-icon>
         <Link to="/favorite">
           <a href="#">Favorite</a>
         </Link>
    </li>

    <li className="ss-li" id="ss-li1">
    
        <ion-icon name="golf-outline"></ion-icon>
         <Link to="/arena">
           <a href="#">Arena</a>
         </Link>
    </li>
    <li className="ss-li" id="ss-li1">
    
        <ion-icon name="game-controller-outline"></ion-icon>
         <Link to="/gamefi">
           <a href="#">GameFi</a>
         </Link>
    </li>
    
    <li className="ss-li" id="ss-li1">
        <ion-icon name="library-outline"></ion-icon>
         <Link to="/about">
           <a href="#">About</a>
         </Link>
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
          <a href="#">Playlists</a>
          <ion-icon name="chevron-forward-outline" />
    </div>
        <div className="st-toggle">
          <a href="#">Liqdity</a>
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
            <li><Link to="/docs" className="text-gray-400 hover:text-gray-100">Home</Link></li>
            
          <li><h1 onClick={ usehistorybaby }className="text-gray-400 hover:text-gray-100">usehistorybaby</h1></li>
                        
            
            
    </div>
  )
}

export default Home