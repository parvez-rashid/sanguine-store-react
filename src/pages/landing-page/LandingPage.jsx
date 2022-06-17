import "./landingPage.css";

import img2 from "../../assets/images/phone-vertical.jpg";
import img3 from "../../assets/images/tablet.jfif";
import img4 from "../../assets/images/laptop.jpg";
import img5 from "../../assets/images/pc.png";
import img6 from "../../assets/images/accessories.webp";
import { NavigationTop } from "../../components";

export default function LandingPage() {
  return (
    <div>
      <NavigationTop />

      <main className="landing-page">
        <section className="hero">
          <div className="hero-img">
            <div className="hero-txt">
              <h1 className="h1 text-wt-bold padding-md">
                Welcome to Sanguine Store
              </h1>
              <p className="text-size-lg text-wt-semibold padding-md">
                One-stop shop for all gadget-heads!
              </p>
              <button className="btn btn-primary margin-lg">
                <a
                  className="text-dec-none text-wt-bold"
                  href="/product-page/index.html"
                >
                  SHOP NOW
                </a>
              </button>
            </div>
          </div>
        </section>
        <h2 className="h2 text-wt-bold">Browse by categories</h2>
        <section className="category-list">
          <div className="card card-vertical box-shadow border-rad-md">
            <div className="card card-vertical text-overlay border-rad-md">
              <a
                className="h4 text-wt-bold btn btn-link text-dec-none"
                href="/product-page/index.html"
              >
                Smartphones
              </a>
            </div>
            <img
              className="img-responsive border-rad-md"
              src={img2}
              alt="smartphones"
            />
          </div>

          <div className="card card-vertical box-shadow border-rad-md">
            <div className="card card-vertical text-overlay border-rad-md">
              <a
                className="h4 text-wt-bold btn btn-link text-dec-none"
                href="/product-page/index.html"
              >
                Tablets
              </a>
            </div>
            <img
              className="img-responsive border-rad-md"
              src={img3}
              alt="tablets"
            />
          </div>

          <div className="card card-vertical box-shadow border-rad-md">
            <div className="card card-vertical text-overlay border-rad-md">
              <a
                className="h4 text-wt-bold btn btn-link text-dec-none"
                href="/product-page/index.html"
              >
                Laptops
              </a>
            </div>
            <img
              className="img-responsive border-rad-md"
              src={img4}
              alt="laptops"
            />
          </div>

          <div className="card card-vertical box-shadow border-rad-md">
            <div className="card card-vertical text-overlay border-rad-md">
              <a
                className="h4 text-wt-bold btn btn-link text-dec-none"
                href="/product-page/index.html"
              >
                Pre-built PCs
              </a>
            </div>
            <img
              className="img-responsive border-rad-md"
              src={img5}
              alt="PCs"
            />
          </div>

          <div className="card card-vertical box-shadow border-rad-md">
            <div className="card card-vertical text-overlay border-rad-md">
              <a
                className="h4 text-wt-bold btn btn-link text-dec-none"
                href="/product-page/index.html"
              >
                Accessories
              </a>
            </div>
            <img
              className="img-responsive border-rad-md"
              src={img6}
              alt="Accessories"
            />
          </div>
        </section>
      </main>
      <footer className="footer">
        <h3 className="h6 text-wt-bold">made with 🤍 by Parvez Rashid</h3>
        <p className="text-size-sm text-wt-semibold">Connect with me below</p>
        <ul className="list-inline list-style-none">
          <li>
            <a
              className="text-size-sm link options-alt"
              href="https://www.linkedin.com/in/mohammed-parvez-rashid-198a6b194"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="text-size-sm link options-alt"
              href="https://github.com/parvez-rashid"
              target="_blank"
            >
              GitHub
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
