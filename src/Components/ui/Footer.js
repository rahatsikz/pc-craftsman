/* eslint-disable @next/next/no-img-element */
import logo from "/public/pc-high-resolution-logo-black-on-transparent-background.png";
import { FaFacebookSquare, FaTwitter, FaReddit } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-300 text-primary-content gap-6">
      <div>
        <img src={logo.src} alt="" className="w-20" />
        <p className="font-bold">
          PC Craftsman Ltd. <br />
          Providing Reliable Tech Since 2008
        </p>
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4 text-3xl">
          <span className="cursor-pointer">
            <FaFacebookSquare />
          </span>
          <span className="cursor-pointer">
            <FaTwitter />
          </span>
          <span className="cursor-pointer">
            <FaReddit />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
