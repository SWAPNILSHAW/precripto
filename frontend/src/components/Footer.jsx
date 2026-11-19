import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { useNavigate } from "react-router-dom";

const footerItems = [
  { title: "Home", path: "/" },
  { title: "About us", path: "/about" },
  { title: "Contact us", path: "/contact" },
  { title: "Privacy policy", path: "/contact" },
];

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* -------------left----------- */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias,
            nam tenetur. Dicta reprehenderit expedita soluta beatae in aperiam
            vitae nesciunt! Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Soluta nulla dicta maxime, ad ducimus asperiores dolore
            laborum voluptatibus. Animi, itaque?
          </p>
        </div>

        {/* -------------center----------- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            {footerItems.map((item, ind) => (
              <li
                onClick={() => {
                  navigate(item.path);
                  scrollTo(0, 0);
                }}
                className="hover:text-primary transition-all duration-300 cursor-pointer"
                key={ind}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        {/* -------------right----------- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91-8420425227</li>
            <li>swapniltheleader@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* ------------copyright section--------------- */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ Swapnil&Teams - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
