import React from 'react'
import { assets } from "../assets/assets.js";
const Carsoles = () => {
   const images = [
      assets.demo1,
      assets.demo2,
      assets.demo3,
      assets.demo4,
      assets.demo5,
      assets.demo6,
      assets.demo7,
      assets.demo8,
      assets.demo9,
      assets.sample_img_1,
      assets.sample_img_2,
    ];
  return (
      <div className="overflow-hidden py-8">
        <style>
          {`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .scroll-animation {
              display: flex;
              animation: scroll 15s linear infinite;
              will-change: transform;
            }
            // .scroll-animation:hover {
            //   animation-play-state: paused;
            // }
            .image-container {
              flex: 0 0 auto;
              width: 256px;
              margin-right: 16px;
            }
          `}
        </style>
        <div className="scroll-animation w-[200%] flex flex-nowrap">
          {/* First set of images */}
          <div className="flex flex-nowrap">
            {images.map((src, index) => (
              <div key={`img1-${index}`} className="image-container">
                <img
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="w-64 h-40 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless scrolling */}
          <div className="flex flex-nowrap">
            {images.map((src, index) => (
              <div key={`img2-${index}`} className="image-container">
                <img
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="w-64 h-40 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Carsoles
