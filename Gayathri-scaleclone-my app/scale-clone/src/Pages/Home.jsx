
// eslint-disable-next-line no-unused-vars
import React from "react";
import "../Pages/Home.css";
import gitbookeditor from "../images/gitbookeditor.svg";
import gitbook from "../images/gitbook.png";
import NavBar from "../Components/NavBar";
import image1 from '../images/1.png'; 

import image3 from '../images/3.png';
import image4 from '../images/4.png';
import image5 from '../images/5.png';
import image6 from '../images/6.png';







const Home = () => {
  return (
    <>
      <NavBar />

      <div className="gitbook">
        <div className="total_product_doc">
          <div className="product_doc_img">
          <img src={gitbook} alt="GitBook" style={{ display: 'block', margin: '0 auto', padding: '20px', width: '200px', height: 'auto' }} />

          </div>
          <div className="card-container">
  <div className="card special-card">
    <div className="card-content">
      <h2 className="title-section">
        Product documentation your users will love
      </h2>
      <p className="description">
        Forget building your own custom docs platform. With GitBook you get beautiful documentation for your users, and a branch-based Git workflow for your team.
      </p>
      <div className="two_buttons">
        <p className="sign_up_with_github">
          <i className="fa-brands fa-github" /> Sign up with GitHub
        </p>
        <p className="start_for_free">
          Start for free <i className="fa-solid fa-arrow-right-long" />
        </p>
      </div>
    </div>
    <div className="gitbookeditor_img large-image">
      <img src={gitbookeditor} alt="GitBook Editor" />
    </div>
  </div>
</div>



      <div className="cards-container">
      <div className="cards-container">
      <div className="card-page">
  <div className="card-content">
    <h3>Publish unbeatable documentation</h3>
    <p>
      Effortlessly migrate your product docs to GitBook, customize them to match your brand, then publish them to the world — or just a selected group, if you prefer. Then keep them updated with built-in content insights.
    </p>
  </div>
  <div className="card-image">
    <img src={image1} alt="Publish Unbeatable Documentation" />
  </div>
</div>


  <div className="card-page">
    <div className="card-image">
      <img src={image3} alt="Better Internal Documentation" />
    </div>
    <div className="card-content">
      <h3>Better internal documentation</h3>
      <p>Effortlessly migrate your product docs to GitBook, customize them to match your brand, then publish them to the world — or just a selected group, if you prefer. Then keep them updated with built-in content insights.</p>
    </div>
  </div>

  <div className="card-page">
    <div className="card-content">
      <h3>Collaborate on docs</h3>
      <p>Effortlessly migrate your product docs to GitBook, customize them to match your brand, then publish them to the world — or just a selected group, if you prefer. Then keep them updated with built-in content insights.</p>
    </div>
    <div className="card-image">
      <img src={image4}alt="Collaborate on Docs" />
    </div>
  </div>

  <div className="card-page">
    <div className="card-image">
      <img src={image5} alt="Smarter AI-powered Documentation" />
    </div>
    <div className="card-content">
      <h3>Smarter AI-powered documentation</h3>
      <p>Effortlessly migrate your product docs to GitBook, customize them to match your brand, then publish them to the world — or just a selected group, if you prefer. Then keep them updated with built-in content insights.</p>
    </div>
  </div>

  <div className="card-page">
    <div className="card-content">
      <h3>Control Access</h3>
      <p>Effortlessly migrate your product docs to GitBook, customize them to match your brand, then publish them to the world — or just a selected group, if you prefer. Then keep them updated with built-in content insights.</p>
    </div>
    <div className="card-image">
      <img src={image6} alt="Control Access" />
    </div>
  </div>
</div>



      <div className="our_customers_love_gitbook">
        <div className="love_gitbook_title">
          <i className="fa-regular fa-heart yellow" />
          <h1 className="white">Our Customers</h1>
          <h1 className="powblue">Love GitBook!</h1>
        </div>

        <div className="total_agilesix">
          <div className="agilesix">
            <div className="agilesix_title">
              <h1 className="agilesix_title_text white">agilesix</h1>
            </div>

            <div className="agilesix_content_text white">
              <p className="agilesix_line1 white">
                GitBook is uniquely designed to serve both as an internal wiki
                and as a source for easily editable public docs — all
              </p>
              <p className="agilesix_line2 white">
                backed by change requests, custom domain configuration, and git. This combination really differentiates the tool and has been super helpful to our team.
              </p>
              <div className="agilesix_author">
                <p className="white">
                  <i className="fa-solid fa-quote-right" /> Billy Daly
                </p>
              </div>
            </div>
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
