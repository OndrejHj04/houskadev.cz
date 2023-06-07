"use client";
import { useState } from "react";
import "../styles/gallery.css";
import Image from "next/image";
function Gallery() {
  const [page, setPage] = useState(3);
  const imgs = [
    "/flowers.jpg",
    "/forrest.jpg",
    "/tree.jpg",
    "/bloom.jpg",
    "/sunset.jpg",
  ];

  const handleClick = (e, i) => {
    if (e.target.className.includes("clickable")) {
      setPage(i);
    }
  };

  return (
    <div className="mt-3 mb-8">
      <h3 className="text-center md:text-3xl text-2xl">
        Fotky z minulého ročníku
      </h3>
      <div className=" justify-center mt-3 relative flex">
        {imgs.map((item, i) => {
          let order = "";
          if (i === page) {
            order = "order-3 z-50";
          }
          if (i + 1 === page || (page === 0 && i === imgs.length - 1)) {
            order =
              "order-2 opacity-50 left-20 top-5 clickable cursor-pointer hover:scale-105";
          }
          if (i - 1 === page || (page === imgs.length - 1 && i === 0)) {
            order =
              "order-4 opacity-50 right-20  top-5 clickable cursor-pointer hover:scale-105";
          }
          if (!order.length) {
            order = "hidden";
          }
          return (
            <img
              key={i}
              src={item}
              alt=""
              className={`xl:w-80 relative ${order} md:w-64 w-40 rounded-full object-cover aspect-square border-4 border-gray-500`}
              onClick={(e) => handleClick(e, i)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
