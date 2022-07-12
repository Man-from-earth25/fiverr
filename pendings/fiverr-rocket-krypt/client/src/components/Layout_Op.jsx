

import Link from 'next/link'
import Script from 'next/script'
import Head from 'next/head'



// opbro🎉🎉🎉🎉😎😎😎😎
export const Layout = ({ children }) => {
    
  return (
    <>




  {/* Header start */}
  <header>
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand m-0 p-0" href="index.html"> <img src="https://cdn.jsdelivr.net/gh/Man-from-earth25/apex-frontend_spck-problem/html/images/logo.png" alt="hi" /> </a>
        <button id="ChangeToggle" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#MenuNavbar" aria-controls="MenuNavbar" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon" id="navbar-hamburger">
            <svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" /> 
            </svg>
          </span> <span className="navbar-toggler-icon hidden" id="navbar-close">
            <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
              <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
            </svg>
          </span> </button>
        <div className="collapse navbar-collapse" id="MenuNavbar">
          <div className="mobile-nav-header d-flex d-lg-none justify-content-between align-items-center">
            <div className="mobile-nav-header-logo">
              <a href="index.html"> <img src="images/logo.png" alt /> </a>
            </div>
            <div className="mobile-nav-header-icon d-flex align-items-center">
              <a href="javascript:void(0)" className="position-relative mobile-nav-header-icon-notification"> <i className="bi bi-bell" /> <span className="notification-count" /> </a>
              <a href="javascript:void(0)"> <i className="bi bi-person-circle" /></a>
            </div>
          </div>
          <ul className="navbar-nav align-items-center ms-5">
            <li className="nav-item"> <a className="nav-link" href="javascript:void(0)">Art Market</a> </li>
            <li className="nav-item"> <a className="nav-link" href="javascript:void(0)">Easy Trade</a> </li>
            <li className="nav-item"> <a className="nav-link" href="javascript:void(0)">Art Pre-sale </a> </li>
            {/*                         <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">  Company  </a>
                      <ul class="dropdown-menu fade-up">
                        <li><a class="dropdown-item" href="#"> About us </a></li>
                        <li><a class="dropdown-item" href="#"> Help Center </a></li>
                      </ul>
                  </li> */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">  Company</a>
              <ul className="dropdown-menu fade-up">
                <li><a className="dropdown-item" href="#"> About us </a></li>
                <li><a className="dropdown-item" href="#"> Help Center </a></li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav align-items-center ms-auto">
            <li className="nav-item  d-none d-lg-inline-block desktop-nav-header-icon">
              <a href="javascript:void(0)" className="position-relative desktop-nav-header-icon-notification"> <i className="bi bi-bell" /> <span className="notification-count" /> </a>
            </li>
            <li className="nav-item ms-3"> <a className="nav-link btn-secondary-border" href="javascript:void(0)">Wallet </a> </li>
            <li className="nav-item ms-3  d-none d-lg-inline-block desktop-nav-header-icon">
              <a href="javascript:void(0)"> <i className="bi bi-person-circle" /></a>
            </li>
            <li className="nav-item ms-2 d-inline-block d-lg-none">
              <a className="nav-link btn-secondary-border" href="javascript:void(0)"> <i className="bi bi-brightness-high" /> </a>
            </li>
            <li className="nav-item ms-2 d-inline-block d-lg-none ms-auto">
              <a className="mobile-search-icon" href="javascript:void(0)"> <i className="bi bi-search" /></a>
            </li>
            <li className="nav-item ms-3 d-none d-lg-inline-block"> <a className="nav-link text-uppercase text-dark" href="javascript:void(0)">EN/USD <i className="bi bi-chevron-down ms-2" /></a> </li>
            <li className="nav-item ms-4 d-none d-lg-inline-block">
              <a className="nav-link btn-secondary-border border-0" href="javascript:void(0)"> <i className="bi bi-brightness-high" /> </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  {/* Header End */}
  {/* Breadcrum Start */}
  <section className="page-breadcrumb">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <nav aria-label="breadcrumb" style={{"--bs-breadcrumb-divider":"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E\")"}}>
            <ol className="breadcrumb m-0">
              <li className="breadcrumb-item"><a href="#">Company</a></li>
              <li className="breadcrumb-item active" aria-current="page">About Us</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>
  {/* Breadcrum End */}





{ children }








  {/* Footer Start */}
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-4 footer-space">
          <div className="d-lg-flex w-100">
            <div className="footer-logo"> <img src="images/logo.png" alt="Artex" /> </div>
            <div className="footer-link">
              <ul>
                <li> <a href="javascript:void(0)">Art Market</a> </li>
                <li> <a href="javascript:void(0)">Easy Trade</a> </li>
                <li> <a href="javascript:void(0)">Art Pre-sale </a> </li>
                <li> <a href="javascript:void(0)">About Us</a> </li>
                <li> <a href="javascript:void(0)">Help Center</a> </li>
                <li> <a href="javascript:void(0)">Contact Us</a> </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 footer-space d-flex flex-column">
          <div className="ms-auto me-auto">
            <h4 className="text-uppercase">contact</h4>
            <p className="m-0">43252 Borer Mountains
              <br /> Zackerychester
              <br /> Bahamas
              <br /> 732-528-4945 </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 footer-space d-flex flex-column border-0">
          <div className="ms-auto me-auto">
            <h4 className="text-uppercase">Stay Up To Date On <br /> Artex</h4>
            <div className="footer-newsletter">
              <input type="text" placeholder="Enter your email" /> <a href="javascript:void(0)"><i className="bi bi-arrow-right-circle-fill" /></a> </div>
            <div className="footer-social-media">
              <ul>
                <li>
                  <a href="javascript:void(0)"><img src="images/twitter.png" alt /></a>
                </li>
                <li>
                  <a href="javascript:void(0)"><img src="images/msg-send.png" alt /></a>
                </li>
                <li>
                  <a href="javascript:void(0)"><img src="images/messanger.png" alt /></a>
                </li>
                <li>
                  <a href="javascript:void(0)"><img src="images/github.png" alt /></a>
                </li>
                <li>
                  <a href="javascript:void(0)"><img src="images/rebbit.png" alt /></a>
                </li>
                <li>
                  <a href="javascript:void(0)"><img src="images/linkdin.png" alt /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* Footer End */}
  {/* Copy Right Start */}
  <section className="footer-copyright">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center"> Copyright © 2022 Artex All rights reserved </div>
      </div>
    </div>
  </section>
  {/* Copy Right End */}
  {/* Mobile Footer Start */}
  <section className="mobile-footer d-flex d-md-none"> <a href="javascript:void(0)" className="active"><i className="bi bi-house" /></a> <a href="javascript:void(0)"><i className="bi bi-graph-up" /></a> <a href="javascript:void(0)"><i className="bi bi-image" /></a> <a href="javascript:void(0)"><i className="bi bi-wallet" /></a>      </section>
  {/* Mobile Footer End */}






















      <Script
        src="https://cdn.jsdelivr.net/gh/Man-from-earth25/apex-frontend_spck-problem/html/js/aos.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/gh/Man-from-earth25/apex-frontend_spck-problem/html/js/custom.js"
        strategy="beforeInteractive"
      />
        <Script
        src="https://cdn.jsdelivr.net/gh/Man-from-earth25/apex-frontend_spck-problem/html/js/slick.js"
        strategy="beforeInteractive"
      />
           <Script
        src="https://cdn.jsdelivr.net/gh/Man-from-earth25/apex-frontend_spck-problem/html/js/popper.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/gh/Man-from-earth25/apex-frontend_spck-problem/html/js/jquary.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/gh/Man-from-earth25/apex-frontend_spck-problem/html/js/bootstrap.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/gh/Man-from-earth25/apex-frontend_spck-problem/html/js/bootstrap.bundle.min.js"
        strategy="beforeInteractive"
      />
      
            <Script
        src="https://cdn.jsdelivr.net/gh/Man-from-earth25/apex-frontend_spck-problem/html/js/slider_custom.js"
        strategy="beforeInteractive"
      />

            <Script
        src="https://cdn.jsdelivr.net/gh/Man-from-earth25/apex-frontend_spck-problem/html/js/hs.slick-carousel.js"
        strategy="beforeInteractive"
      />
            <Script
        src="https://cdn.jsdelivr.net/gh/Man-from-earth25/apex-frontend_spck-problem/html/js/ready.js"
        strategy="beforeInteractive"
      />

    <Head>
        <title>Crypto-Dragons</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="stylesheet" href="https://unpkg.com/open-props"/>
        <link rel="stylesheet" href="https://unpkg.com/open-props/normalize.min.css"/>
        <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet' />
        
        
        
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Man-from-earth25/apex-frontend_spck-problem/html/css/style.css"/>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Man-from-earth25/apex-frontend_spck-problem/html/css/aos.css"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Man-from-earth25/apex-frontend_spck-problem/html/css/ainmate.min.css"/>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Man-from-earth25/apex-frontend_spck-problem/html/css/slick.css"/>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Man-from-earth25/apex-frontend_spck-problem/html/css/bootstrap.min.css"/>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Man-from-earth25/apex-frontend_spck-problem/html/css/bootstrap-icons.css"/>
                    
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Man-from-earth25/apex-frontend_spck-problem/html/css/responsive.css"/>
                  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Man-from-earth25/apex-frontend_spck-problem/slick-theame.css"/>
        
        
        
    
  {/* Font CSS */}
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" crossOrigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
  {/* Icon Font CSS */}

        
        
        
    </Head>
    </>
  );
};




export default Layout

