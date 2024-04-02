import React from "react";
import photo from "../../../public/logo0.jpg";
import photo2 from "../../../public/atos.png";
import Image from "next/image";
const company = [
  {
    name: "NYC Company",
    type: "remote",
    duration: "2019-2020",
    place: "Monaco",
    photo: photo,
    job: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quisquam nam magnam blanditiis quas dolore! Accusantium odio recusandae ducimus sed dicta maxime maiores quo! Assumenda numquam aliquam culpa facere iusto!",
  },
  {
    name: "NYC Company",
    type: "hybrid",
    duration: "2019-2020",
    place: "Monaco",
    photo: photo2,
    job: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quisquam nam magnam blanditiis quas dolore! Accusantium odio recusandae ducimus sed dicta maxime maiores quo! Assumenda numquam aliquam culpa facere iusto!",
  },
  {
    name: "NYC Company",
    duration: "2019-2020",
    type: "in company",
    place: "Monaco",
    photo: photo,
    job: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quisquam nam magnam blanditiis quas dolore! Accusantium odio recusandae ducimus sed dicta maxime maiores quo! Assumenda numquam aliquam culpa facere iusto!",
  },
  {
    name: "NYC Company",
    duration: "2019-2020",
    type: "in company",
    place: "Monaco",
    photo: photo2,
    job: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quisquam nam magnam blanditiis quas dolore! Accusantium odio recusandae ducimus sed dicta maxime maiores quo! Assumenda numquam aliquam culpa facere iusto!",
  },
];
function page() {
  return (
    <div className="w-[80%] mx-auto flex flex-col items-center mt-20">
      {company.map((comp, i) => (
        <div key={i} className="flex gap-3 mb-20  ">
          <div>
            <Image src={comp.photo} alt="" width={150} height={150} />
          </div>

          <div>
            <h1 className="text-xl ">{comp.name}</h1>
            <span className="text-gray-400">{comp.duration}</span>
            <p className="text-gray-400 mb-5">
              {comp.place}, {comp.type}
            </p>
            <p className=" lg:w-[500px] leading-8">{comp.job}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default page;
