import React from "react";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
function Footer() {
  return (
    <div className=" mt-10 flex justify-end p-5 gap-3 items-center">
      <FaLinkedinIn />
      <FaBehance style={{ width: "30px" }} />
      <FaInstagram style={{ height: "30px" }} />
    </div>
  );
}

export default Footer;
