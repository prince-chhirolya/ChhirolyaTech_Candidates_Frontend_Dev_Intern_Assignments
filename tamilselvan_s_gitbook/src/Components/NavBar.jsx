import React from "react";
import "../Components/NavBar.css"


const NavBar = () => {


  return (
    <div>
      
      <div className="totalnavbar ">
    <nav className="navbar navbar-expand-lg navbar-dark  navbar-shrink " id="mainNav">
  <div className="container-fluid m-2">
  <div className="gitbook_nav d-flex align-items-center gap-1 white "> GITBOOK </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      Menu
      <svg className="svg-inline--fa fa-bars ms-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg><path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav  ms-5 py-4 py-lg-0 gap-4">
        <li className="nav-item white">Product</li>
        <li className="nav-item white">Features</li>
        <li className="nav-item white">Resources</li>
        <li className="nav-item white">Pricing</li>
        <li className="nav-item yellow"><i class="fa-solid fa-user-plus"/> We're hiring!</li>
      </ul>

      <div className="login_start_free ">
      <button className="bg-black white ls"> Login </button>
      <button className="bgyellow btn-black ls"> Start for free <i class="fa-solid fa-arrow-right-long"/> </button>
      </div>

    </div>
   
  </div>
</nav>
</div>

</div>



  );
};

export default NavBar;
