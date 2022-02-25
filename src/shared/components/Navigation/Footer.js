import React from "react";

const Footer = () => {
  return (
  <>
   <div>
  <section className="footer-main">
    <div className="container">
      {/* Six equal columns */}
      <div className="row row-cols-5">
        <div className="col-4">
          <div className="footer-logo"><img src="./images/Group(3).PNG" /> <img className="logo-img-info" src="./images/Group(4).PNG" /></div>
          <div className="input-group">
            <input type="text" className="form-control soi-info2" placeholder="Search Ollivander’s item" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary pro-search-Subscribe" type="button">Subscribe</button>
            </div>
          </div>
          <div className="d-inline-flex">
            <div className="icon-item"><img src="./images/fb.svg" /></div>
            <div className="icon-item"><img src="./images/insta.svg" /></div>
            <div className="icon-item"><img src="./images/twtr.svg" /></div>
            <div className="icon-item"><img src="./images/utube.svg" /></div>
            <div className="icon-item"><img src="./images/link.svg" /></div>
          </div>
        </div>
        <div className="col-2">
          <h5 className="text-white mb-info">
            Community
          </h5><h5>
            <div className="footer-sub-menu">
              <div className="text-white"><h6>Affiliate Program</h6></div>
              <div className="text-white"><h6>Advertise with Us</h6></div>
              <div className="text-white"><h6>Developers</h6></div>
              <div className="text-white"><h6>Digit Carts Community</h6></div>
            </div>
          </h5></div>
        <div className="col-2">
          <h5 className="text-white mb-info">
            Order &amp; Purchases
          </h5><h5>
            <div className="footer-sub-menu">
              <div className="text-white"><h6>Check Order Status</h6></div>
              <div className="text-white"><h6>Shipping, Delivery &amp; Pickup</h6></div>
              <div className="text-white"><h6>Returns &amp; Exchanges</h6></div>
            </div>
          </h5></div>
        <div className="col-2">
          <h5 className="text-white mb-info">
            Support &amp; Services
          </h5><h5>
            <div className="footer-sub-menu">
              <div className="text-white"><h6>Visit our Support Center</h6></div>
              <div className="text-white"><h6>Shop with an Expert</h6></div>
              <div className="text-white"><h6>Contact Us</h6></div>
            </div>
          </h5></div>
        <div className="col-2">
          <h5 className="text-white mb-info">
            Digitcarts.com
          </h5><h5>
            <div className="footer-sub-menu">
              <div className="text-white"><h6>Sell with Digit Carts</h6></div>
              <div className="text-white"><h6>Sellers policy</h6></div>
              <div className="text-white"><h6>About Digit Carts</h6></div>
            </div>
          </h5></div>
      </div>
    </div>
  </section>
  <section className="last-footer">
    <div className="container">
      <div className="row">
        <div className="col-xl text-white">Copyright © 2021 Digit Carts, Inc. All rights reserved</div>
      </div>
    </div>
  </section>
</div>

  </>
  );
};

export default Footer;
