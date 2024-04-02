"use client";
import Image from "next/image";
import React, { useState } from "react";

function Personal() {
  const images = [
    { id: 0, value: "https://rb.gy/nw4n8l" },
    { id: 1, value: "https://source.unsplash.com/rMHNK_skwwU" },
    { id: 2, value: "https://rb.gy/sbfjh6" },
    { id: 3, value: "https://rb.gy/czg89r" },
    { id: 4, value: "https://source.unsplash.com/rMHNK_skwwU" },
    { id: 5, value: "https://source.unsplash.com/WBMjuGpbrCQ" },
    { id: 6, value: "https://source.unsplash.com/nCUZ5BYBL_o" },
    { id: 7, value: "https://source.unsplash.com/3u4fzMQZhjc" },
  ];
  const [sliderData, setSliderData] = useState(images[0]);

  const handleclick = (index) => {
    console.log(index);
    const slider = images[index];
    setSliderData(slider);
  };
  console.log(sliderData);
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-5 mt-20">
        <div className="flex justify-center bg-black  relative">
          <Image src={sliderData.value} alt="" width={500} height={500} />
        </div>
        <div className="flex  justify-center gap-1 flex-wrap">
          {images.map((img, i) => (
            <Image
              key={img.id}
              onClick={() => handleclick(i)}
              src={img.value}
              width={50}
              height={50}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Personal;
