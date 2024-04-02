"use client";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export default function Home() {
  const images = [
    "https://rb.gy/nw4n8l",
    "https://rb.gy/sbfjh6",
    "https://rb.gy/czg89r",
    "https://source.unsplash.com/rMHNK_skwwU",
    "https://source.unsplash.com/WBMjuGpbrCQ",
    "https://source.unsplash.com/nCUZ5BYBL_o",
    "https://source.unsplash.com/3u4fzMQZhjc",
    "https://source.unsplash.com/haOIqIPSwps",
    "https://source.unsplash.com/3UrYD7NNVxk",
    "https://source.unsplash.com/fm1JKDItlVM",
  ];
  return (
    <PhotoProvider>
      <div className="px-5 mt-10 sm:p-8">
        <div className="columns-2 gap-5 [&>img:not(:first-child)]:mt-8">
          {images.map((item, i) => (
            <PhotoView key={i} src={item}>
              <img src={item} />
            </PhotoView>
          ))}
        </div>
      </div>
    </PhotoProvider>
  );
}
