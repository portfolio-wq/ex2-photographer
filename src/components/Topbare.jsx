"use client";
import React, { useState } from "react";
import logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
function Topbare() {
  const [dropdown, setDropdown] = useState(false);
  const handleClickMenu = () => {
    setDropdown((prevState) => !prevState);
  };
  let path = usePathname();
  return (
    <div className="flex flex-col md:flex-row justify-center lg:justify-between md:flex-wrap relative text-sm">
      <ul
        className={`${
          !dropdown ? "hidden" : "flex flex-col "
        }  justify-center items-center md:hidden `}
      >
        <li
          className={`${
            path === "/"
              ? "text-black p-3  "
              : "p-3 text-gray-400 hover:text-black"
          } `}
        >
          <Link href="/">RECENT WORK</Link>
        </li>
        <li
          className={`${
            path === "/experience"
              ? "text-black"
              : "p-3 text-gray-400 hover:text-black"
          }`}
        >
          <Link href="/experience">EXPERIENCE</Link>
        </li>
        <li
          className={`${
            path === "/personal-work"
              ? "text-black"
              : "p-3 text-gray-400 hover:text-black"
          } `}
        >
          <Link href="/personal-work">PERSONAL WORK</Link>{" "}
        </li>
        <li
          className={`${
            path === "/contact"
              ? "text-black"
              : "p-3 text-gray-400 hover:text-black"
          } `}
        >
          <Link href="/contact">CONTACT</Link>
        </li>
        <li
          className={`${
            path === "/about"
              ? "text-black"
              : "p-3 text-gray-400 hover:text-black"
          } `}
        >
          <Link href="/about">ABOUT</Link>
        </li>
        <div className="w-[80%] h-[1px] bg-gray-300 self-center mt-5"></div>
      </ul>

      <button
        onClick={handleClickMenu}
        className="text-gray-400   md:hidden pt-10 pb-10 text-lg"
      >
        MENU
      </button>
      {/* lgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
      <div className="flex items-center justify-center ">
        <Link href="/">
          <Image src={logo} alt="nora nasri" width={300} height={200} />
        </Link>
      </div>
      <ul className="md:flex gap-5 hidden items-center">
        <li
          className={`${
            path === "/"
              ? "text-black p-3  "
              : "p-3 text-gray-400 hover:text-black"
          } `}
        >
          <Link href="/">RECENT WORK</Link>
        </li>
        <li
          className={`${
            path === "/experience"
              ? "text-black"
              : "p-3 text-gray-400 hover:text-black"
          }`}
        >
          <Link href="/experience">EXPERIENCE</Link>
        </li>
        <li
          className={`${
            path === "/prsonal-work"
              ? "text-black"
              : "p-3 text-gray-400 hover:text-black"
          } `}
        >
          <Link href="/personal-work">PERSONAL WORK</Link>{" "}
        </li>
        <li
          className={`${
            path === "/contact"
              ? "text-black"
              : "p-3 text-gray-400 hover:text-black"
          } `}
        >
          <Link href="/contact">CONTACT</Link>
        </li>
        <li
          className={`${
            path === "/about"
              ? "text-black"
              : "p-3 text-gray-400 hover:text-black"
          } `}
        >
          <Link href="/about">ABOUT</Link>
        </li>
      </ul>
    </div>
  );
}

export default Topbare;
