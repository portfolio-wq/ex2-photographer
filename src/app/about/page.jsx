import React from "react";
import hero from "../../../public/hero.jpg";
import Image from "next/image";
function page() {
  return (
    <div className="flex  flex-wrap md:flex-nowrap gap-5 mt-20 p-5 md:p-0">
      <div className="flex flex-col gap-20">
        <div className=" flex flex-col gap-5">
          <span>About</span>
          <div className=" flex flex-col gap-5 text-gray-400 w-[80%]">
            {" "}
            <p>
              Hi there, I'm Nora Sabri, a 23-year-old photographer from the
              vibrant streets of Morocco. With my camera always by my side, I
              embark on a journey to capture the beauty and essence of my
              homeland through my lens.
            </p>
            <p>
              Growing up surrounded by the rich culture and diverse landscapes
              of Morocco, I developed a deep connection to my roots. From the
              bustling markets of Marrakech to the serene beaches of Essaouira,
              each corner of my country holds a story waiting to be told.
            </p>
            <p>
              Join me as I explore the hidden gems and everyday wonders of
              Morocco, one photograph at a time. Together, let's embark on a
              journey of discovery and celebration of the extraordinary in the
              ordinary. Welcome to my world behind the lens.
            </p>
          </div>
        </div>
        <div className=" flex flex-col gap-5">
          <span>Education</span>
          <div className=" flex flex-col gap-5 text-gray-400">
            {" "}
            <p>2015 - Communication University of China BA Advertising</p>
            <p>2018 - School of Visual Arts MFA Illustration</p>
          </div>
        </div>
        <div className=" flex flex-col gap-5">
          <span>Clients</span>
          <div className=" flex flex-col gap-5 text-gray-400">
            {" "}
            <p>TBWA PARIS</p>
            <p>Fast Company</p>
            <p>B Sleep</p>
            <p>Vans China</p>
          </div>
        </div>
        <div className=" flex flex-col gap-5">
          <span>Recomendation</span>
          <div className=" flex flex-col gap-5 text-gray-400">
            <p>Mr. Jack Minto</p>
            <p>Mr. Lampard Rino </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div>
        <div className="relative ">
          <Image src="https://rb.gy/ytg4xz" width={500} height={500} alt="" />
        </div>

        <p className="text-gray-400 mt-2  ">My farvourite Photo, Morocco.</p>
      </div>
    </div>
  );
}

export default page;
