import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HeaderComponent from "../shared/components/Navigation/HeaderComponent";
import Footer from "../shared/components/Navigation/Footer";
import { getAllProducts } from "../actions/ProductAction";

const Home = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [page, setPage] = useState(1);
  const [pageSize, setpageSize] = useState(10);

  const { products, loading } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getAllProducts(pageSize, page));
  }, []);

  let productItems = [];
  useEffect(() => {
    // console.log(products?.products, loading, products?.maxProducts);
    if (products != undefined && loading == false) {
      console.log(products?.products);
      productItems.push(products?.products);
    }
    console.log(loading);
  }, [products]);

  console.log(productItems);
  return (
    <>
      <HeaderComponent />

      <div>
        <section className="ow-shop">
          <div className="container">
            <div className="row">
              {/*Row with three columns divided in 1:4:1 ratio*/}
              <div className="row">
                <div className="col-lg-2">
                  <div className="demo-content">
                    <img src="./images/Rectangle 95.PNG" />
                    <img
                      src="./images/Vector 12.PNG"
                      height="52px"
                      width="198px"
                      style={{
                        marginTop: "-218px",
                        transform: "rotate(345deg)",
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-6 m-auto m-ext-info">
                  <div className="demo-content bg-alt">
                    <h2>
                      Ollivander's Wand Shop{" "}
                      <img src="./images/Vector(5).PNG" />
                    </h2>
                    <div className="d-inline-flex">
                      <div className="p-2">
                        <i className="fa fa-envelope-o" aria-hidden="true" />{" "}
                        Contact Seller
                      </div>
                      <div className="p-2">Report seller</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 m-auto">
                  <div className="demo-content">
                    <button className="follow-burron">Follow</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container follow-after">
            <div className="row">
              {/*Row with three columns divided in 1:4:1 ratio*/}
              <div className="row">
                <div className="col d-inline-flex">
                  <div className="p-2">
                    <img src="./images/Group 163.PNG" />
                  </div>
                  <div className="m-auto">
                    <span className="h6 first-content">Store is open</span>
                    <br />
                    <span className="second-content">
                      12.12.2020 ( 1 year )
                    </span>
                  </div>
                </div>
                <div className="col d-inline-flex">
                  <div className="p-2">
                    <img src="./images/Group 163(1).PNG" />
                  </div>
                  <div className="m-auto">
                    <span className="h6 first-content">Performed deals</span>
                    <br />
                    <span className="second-content"> 8643286486432861 </span>
                  </div>
                </div>
                <div className="col d-inline-flex">
                  <div className="p-2">
                    <img src="./images/Group 163.PNG" />
                  </div>
                  <div className="m-auto">
                    <span className="h6 first-content">Shipping from</span>
                    <br />
                    <span className="second-content">
                      <img src="./images/usa.PNG" /> United States{" "}
                    </span>
                  </div>
                </div>
                <div className="col d-inline-flex"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="pro-search-main">
          <div className="container">
            <div className="row row-cols-3">
              <div className="col-4">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control soi-info"
                    placeholder="Search Ollivander’s item"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-secondary pro-search-box"
                      type="button"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-6 text-center middle-button-info">
                <button className="pro-btn-info all-item-active">
                  All Items
                </button>
                <button className="pro-btn-info">Best Sellers</button>
                <button className="pro-btn-info">Features</button>
              </div>
              <div className="col-2 paddind-none">
                <span className="sort-by">Sort By:</span>{" "}
                <span className="price-low">Price - High to Low</span>{" "}
                <img src="./images/Vector(6).PNG" />
              </div>
            </div>
            <div className="row row-cols-5">
              {console.log(productItems)}
              {loading != undefined &&
                loading != true &&
                products.products.map((item, index) => (
                  <div className="col">
                    <div className="wishlist-img">
                      <img src="./images/Vector(7).PNG" />
                    </div>
                    <div className>
                      <img src={item.image} height="218px" width="218px" />
                    </div>
                    <div className="two-button-main">
                      <a href="#" className="discount-item">
                        -33%
                      </a>
                      <a href="#" className="free-shiping-item">
                        Free Shiping
                      </a>
                      <br />
                      <div className="card border-0">
                        <div className="d-flex justify-content-between align-items-center ext-mtb">
                          <div className="ratings">
                            <i className="fa fa-star checked" />
                            <i className="fa fa-star checked" />
                            <i className="fa fa-star checked" />
                            <i className="fa fa-star checked" />
                            <i className="fa fa-star" />
                          </div>
                          <h5 className="review-count h6 m-auto">12 Reviews</h5>
                        </div>
                        <div className="des-info">
                          <p>{item.name}</p>
                          <ins>
                            ${item.price}.<sup>00</sup>
                          </ins>
                          <del>
                            $150.<sup>00</sup>
                          </del>
                        </div>
                        <button className="buy-info">Buy</button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
        <section className="pagi-info">
          <div className="container">
            <div className="row row-cols-2">
              <div className="col">
                <div className>
                  1-10 of{" "}
                  {loading != undefined &&
                    loading != true &&
                    products?.maxProducts}
                </div>
              </div>
              <div className="col">
                <div className>
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-start">
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">«</span>
                          <span className="sr-only">Previous</span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">»</span>
                          <span className="sr-only">Next</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="client-four-box">
          <div className="container">
            <div className="row">
              {/*Row with three columns divided in 1:4:1 ratio*/}
              <div className="row">
                <div className="col">
                  <div className="text-center">
                    <img src="./images/Group 234.PNG" />
                  </div>
                  <br />
                  <div className="text-center text-white">
                    Returns &amp; Exchanges
                  </div>
                </div>
                <div className="col">
                  <div className="text-center">
                    <img src="./images/Group 233.PNG" />
                  </div>
                  <br />
                  <div className="text-center text-white">
                    Visit our Support Center
                  </div>
                </div>
                <div className="col">
                  <div className="text-center">
                    <img src="./images/Group 232.PNG" />
                  </div>
                  <br />
                  <div className="text-center text-white">
                    Check your Order Status
                  </div>
                </div>
                <div className="col">
                  <div className="text-center">
                    <img src="./images/Group 230.PNG" />
                  </div>
                  <br />
                  <div className="text-center text-white">
                    Shipping, Delivery &amp; Store Pickup
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Home;
