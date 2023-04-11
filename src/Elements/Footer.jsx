import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black min-h-[400px] flex flex-col justify-center p-3">
      <div className="footer-border text-white mx-52 flex items-start justify-between md:flex-row flex-col">
        <div className="w-[200px]">
          <h3 className="text-3xl font-semibold mb-4">workWithLevi</h3>
          <p>
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
        </div>

        <ul className="gray-text space-y-3">
          <li>
            <Link to="" className="text-xl font-semibold">
              Company
            </Link>
          </li>
          <li>
            <Link to=""> About Us</Link>
          </li>
          <li>
            <Link to="">Work</Link>
          </li>
          <li>
            <Link to="">Latest News</Link>
          </li>
          <li>
            <Link to="">Careers</Link>
          </li>
        </ul>

        <ul className="gray-text space-y-3">
          <li>
            <Link to="" className="text-xl font-semibold">
              Product
            </Link>
          </li>
          <li>
            <Link to=""> Prototype</Link>
          </li>
          <li>
            <Link to="">Plans & Pricing</Link>
          </li>
          <li>
            <Link to="">Customers</Link>
          </li>
          <li>
            <Link to="">Integration</Link>
          </li>
        </ul>

        <ul className="gray-text space-y-3">
          <li>
            <Link to="" className="text-xl font-semibold">
              Support
            </Link>
          </li>
          <li>
            <Link to="">Help Desk</Link>
          </li>
          <li>
            <Link to="">Sales</Link>
          </li>
          <li>
            <Link to="">Become a partner</Link>
          </li>
          <li>
            <Link to="">Developers</Link>
          </li>
        </ul>

        <ul className="gray-text space-y-3">
          <li>
            <Link to="" className="text-xl font-semibold">
              Contact
            </Link>
          </li>
          <li>
            <Link to=""> 524 Broadway , NYC</Link>
          </li>
          <li>
            <Link to="">524 Broadway , NYC</Link>
          </li>
        </ul>
      </div>

      <div className="text-gray-600 mx-52 flex justify-between pt-4">
        <span>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </span>

        <span>Powered by CareerHub</span>
      </div>
    </div>
  );
};

export default Footer;
