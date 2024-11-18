import React from "react";
import "../Pages/Home.css";
import gitbookeditor from "../images/gitbookeditor.svg";
import gitbook from "../images/gitbook.png";
import publish_unbeatable from "../videos/publish_unbeatable.mp4";
import Better_internal from "../videos/Better_internal_docs.mp4";
import Collaborate from "../videos/Collaborate.mp4";
import Smarter_AIpowered from "../videos/Smarter_AIpowered.mp4";
import Control_access from "../videos/Control_access.mp4";

const Home = () => {
  return (
    <>
      <div className="total_gitbook">
        <div className="totalnavbar ">
          <nav
            className="navbar navbar-expand-lg navbar-dark  navbar-shrink "
            id="mainNav"
          >
            <div className="container-fluid m-2">
              <div className="gitbook_nav d-flex align-items-center gap-1 white ">
                {" "}
                GITBOOK{" "}
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                Menu
                <svg
                  className="svg-inline--fa fa-bars ms-1"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="bars"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  data-fa-i2svg
                >
                  <path
                    fill="currentColor"
                    d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                  />
                </svg>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav  ms-5 py-4 py-lg-0 gap-4">
                  <li className="nav-item white">Product</li>
                  <li className="nav-item white">Features</li>
                  <li className="nav-item white">Resources</li>
                  <li className="nav-item white">Pricing</li>
                  <li className="nav-item yellow">
                    <i class="fa-solid fa-user-plus" /> We're hiring!
                  </li>
                </ul>

                <div className="login_start_free ">
                  <button className="bg-black white ls"> Login </button>
                  <button className="bgyellow btn-black ls">
                    {" "}
                    Start for free <i class="fa-solid fa-arrow-right-long" />{" "}
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="gitbook">
          <div className="total_product_doc">
            <div className="product_doc_img">{/* <img src={gitbook} /> */}</div>
            <div className="product_doc_title d-flex justify-content-center align-items-center flex-column">
              <h1 className="title_line1 white">Product documentation</h1>
              <h1 className="title_line2 powblue">your users will love</h1>
            </div>
            <div className="product_doc_paraline d-flex justify-content-center align-items-center flex-column white">
              <span class="first-line">
                Forget building your own custom docs platform. With GitBook you
                get beautiful
              </span>
              documentation for your users, and a branch-based Git workflow for
              your team.
            </div>

            <div className="two_buttons">
              <p className="sign_up_with_github white">
                <i class="fa-brands fa-github" /> Sign up with GitHub
              </p>
              <p className="Start_for_free">
                {" "}
                Start for free <i class="fa-solid fa-arrow-right-long" />
              </p>
            </div>
            <div className="gitbookeditor_img">
              <img src={gitbookeditor} />
            </div>
          </div>
        </div>

        <div className="total_publish_unbeatable">
          <div className="Publish_unbeatable">
            <div className="Publish_unbeatable_text">
              <div className="publish_unbeatable_title">
                <h1 className="publish_title white">
                  Publish unbeatable documentation
                </h1>
              </div>
              <div className="publish_unbeatable_docs-content">
                <p className="white">
                  Effortlessly migrate your product docs to
                </p>
                <p className="white">GitBook, customize them to match your</p>
                <p className="white">
                  brand, then publish them to the world — or
                </p>
                <p className="white">
                  just a selected group, if you prefer. Then
                </p>
                <p className="white">
                  keep them updated with built-in content insights.
                </p>
              </div>
            </div>
            <div className="publish_unbeatable_video">
              <video width="640" height="360" loop>
                <source src={publish_unbeatable} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        <div className="total_better_internal">
          <div className="better_internal">
            <div className="better_internal_video">
              <video width="640" height="360" loop>
                <source src={Better_internal} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="better_internal_text">
              <div className="better_internal_title">
                <h1 className="better_title white">
                  Better internal documentation
                </h1>
              </div>
              <div className="better_internal_docs-content">
                <p className="white">
                  Effortlessly migrate your product docs to
                </p>
                <p className="white">GitBook, customize them to match your</p>
                <p className="white">
                  brand, then publish them to the world — or
                </p>
                <p className="white">
                  just a selected group, if you prefer. Then
                </p>
                <p className="white">
                  keep them updated with built-in content insights.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="total_collaborate_on_docs">
          <div className="collaborate_on_docs">
            <div className="collaborate_on_docs_text">
              <div className="collaborate_on_docs_title">
                <h1 className="collaborate_title white">Collaborate on docs</h1>
              </div>
              <div className="collaborate_on_docs_docs-content">
                <p className="white">
                  Effortlessly migrate your product docs to
                </p>
                <p className="white">GitBook, customize them to match your</p>
                <p className="white">
                  brand, then publish them to the world — or
                </p>
                <p className="white">
                  just a selected group, if you prefer. Then
                </p>
                <p className="white">
                  keep them updated with built-in content insights.
                </p>
              </div>
            </div>
            <div className="collaborate_on_docs_video">
              <video width="640" height="360" loop>
                <source src={Collaborate} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        <div className="total_smarter_ai_powered">
          <div className="smarter_ai_powered">
            <div className="smarter_ai_powered_video">
              <video width="640" height="360"  loop>
                <source src={Smarter_AIpowered} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="smarter_ai_powered_text">
              <div className="smarter_ai_powered_title">
                <h1 className="smarter_title white">
                  Smarter AI-powered documentation
                </h1>
              </div>
              <div className="smarter_ai_powered_docs-content">
                <p className="white">
                  Effortlessly migrate your product docs to
                </p>
                <p className="white">GitBook, customize them to match your</p>
                <p className="white">
                  brand, then publish them to the world — or
                </p>
                <p className="white">
                  just a selected group, if you prefer. Then
                </p>
                <p className="white">
                  keep them updated with built-in content insights.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="total_control_access">
          <div className="control_access">
            <div className="control_access_text">
              <div className="control_access_title">
                <h1 className="control_title white">Control Access</h1>
              </div>
              <div className="control_access_docs-content">
                <p className="white">
                  Effortlessly migrate your product docs to
                </p>
                <p className="white">GitBook, customize them to match your</p>
                <p className="white">
                  brand, then publish them to the world — or
                </p>
                <p className="white">
                  just a selected group, if you prefer. Then
                </p>
                <p className="white">
                  keep them updated with built-in content insights.
                </p>
              </div>
            </div>
            <div className="control_access_video">
              <video width="640" height="360" loop>
                <source src={Control_access} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        <div className="our_customers_love_gitbook">
          <div className="love_gitbook_title">
            <i class="fa-regular fa-heart yellow" />
            <h1 className="white">Our Customers</h1>
            <h1 className="powblue">Love GitBook!</h1>
          </div>

          <div className="total_agilesix">
          <div className="agilesix">
            <div className="agilesix_title">
              <h1 className="agilesix_title_text white"> agilesix</h1>
            </div>

            <div className="agilesix_content_text white">
              <p className=" agilesix_line1 white">
                "GitBook is uniquely designed to serve both as an internal wiki
                and as a source for easily editable public docs — all
              </p>
              <p className="agilesix_line2 white">
              backed by change requests, custom domain configuration, and git. This combination really differentiates the tool 
              </p>
              <p className=" agilesix_line3 white">
              and has been super helpful to our team."
              </p>

              <div  className="agilesix_author">
              <p className="white">
                <i class="fa-solid fa-quote-right" /> Billy Daly
              </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
