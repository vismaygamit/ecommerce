import React from "react";

const HeaderComponent = () => {
  return (
   <div>
  <section className="top-header-info bg-light">
    <div className="container">
      <div className="m-0">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a href="#" className="nav-item nav-link top-left-menu">
              <img src="./images/usa.PNG" /> United States ($) <img src="./images/blackdownarrow.svg" />
            </a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto">
                <a href="#" className="nav-item nav-link top-left-menu"><img src="./images/Vector.PNG" /> Help</a>
                <a href="#" className="nav-item nav-link top-left-menu"><img src="./images/Vector(1).PNG" /> Hot Sales</a>
                <a href="#" className="nav-item nav-link top-left-menu"><img src="./images/RocketLaunch.PNG" /> Fast Delivery</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div></section>
  <section className="header-box-info">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        {/* Container wrapper */}
        <div className="container-fluid">
          {/* Toggle button */}
          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCenteredExample">
            <span className="navbar-toggler-icon" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarCenteredExample">
            {/* Left links */}
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#"><img src="./images/Group(2).PNG" /> <img className="logo-img-info" src="./images/Group.PNG" /></a>
              </li>
              <li className="nav-item">
                <button type="button" className="nav-link btn btn-primary text-white ext-button">Catalog</button>
              </li>
              {/* Navbar dropdown */}
              <li className="nav-item">
                <div className="input-group mb-3 search-main">
                  <div className="input-group-prepend">
                    <button className="btn dropdown-toggle head-button-item" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Categories</button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <a className="dropdown-item" href="#">Something else here</a>
                      <div role="separator" className="dropdown-divider" />
                      <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                  </div>
                  <input type="text" className="form-control ext-search-ino" placeholder="Search on Digit Carts" aria-label="Text input with dropdown button" />
                  <button className="btn btn-success search-ext-button" type="submit">Search</button>
                </div>
              </li>
              <li className="nav-item text-center ml-space">
                <img src="./images/User.PNG" className="ext-size" />
                <a className="nav-link nopadding-ino" href="#">Join</a>
              </li>
              <li className="nav-item text-center mlr-space">
                <img src="./images/Vector(3).PNG" className="ext-size" />
                <a className="nav-link nopadding-ino" href="#">Whihlist</a>
              </li>
              <li className="nav-item text-center">
                <img src="./images/Vector(2).PNG" className="ext-size" />
                <a className="nav-link nopadding-ino" href="#">Cart</a>
              </li>
            </ul>
            {/* Left links */}
          </div>
          {/* Collapsible wrapper */}
        </div>
        {/* Container wrapper */}
      </nav>
    </div>
    <nav className="navbar navbar-expand-lg navbar-light">
      {/* Container wrapper */}
      <div className="container">
        {/* Toggle button */}
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarmain">
          <span className="navbar-toggler-icon" />
        </button>
        {/* Collapsible wrapper */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarmain">
          {/* Left links */}
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#"><img src="./images/Vector(4).PNG" /> Black Friday</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Electronics</a>
            </li>
            {/* Navbar dropdown */}
            <li className="nav-item">
              <a className="nav-link" href="#">Fashion</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Health &amp; Beauty</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Home &amp; Garden</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sports</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Collectibles and Art</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Industrial equipment</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Toys &amp; Hobbies</a>
            </li>
          </ul>
          {/* Left links */}
        </div>
        {/* Collapsible wrapper */}
      </div>
      {/* Container wrapper */}
    </nav>
  </section>
  <section className="olli-shop-main">
    <div className="container">
      <div className="row row-cols-3">
        <div className="col text-end"><img src="./images/Vector 12.PNG" /></div>
        <div className="col"><img src="./images/Ollivander's Wand Shop.PNG" /></div>
        <div className="col text-center"><img src="./images/Vector 12.PNG" /></div>
      </div>
    </div>
  </section>
</div>

    );
};

export default HeaderComponent;
