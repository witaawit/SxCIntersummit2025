import { cn } from "@/lib/utils";
import React from "react";
const DATA_ITEMS1 = 10;
const direction1 = "left";
const direction2 = "right";

const MediaPartner = () => {
  return (
    <>
      <img src="/images/homepage/mediaPartner.png" alt="" />
      <p className="text-center text-xl max-w-[700px] my-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        perspiciatis ipsum nostrum. Soluta eum similique, nobis deserunt
        suscipit reprehenderit dolores, quidem illum necessitatibus nam
        doloremque accusantium, hic quam quod ipsa.
      </p>
      <button className="cursor-pointer px-4 py-2 bg-[#c4ef7b82] rounded-full text-white mb-5">
        Contact Us
      </button>

      {/* Going Right */}
      <div className="w-full   z-50 flex items-center   justify-center ">
        {" "}
        {/* Carousel */}
        <div
          style={{
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
          }}
          className="wrapper relative mx-3 h-[100px]  w-[95%] max-w-full overflow-hidden"
        >
          {Array.from({ length: 20 }).map((testimonial, index) => {
            return (
              <div
                key={index}
                className={cn(
                  "absolute item py-4 px-6  flex justify-between mr-4 flex-col bg-[#ade67f25]   rounded-xl",
                  direction1 === "left"
                    ? "animate-scrollLeft"
                    : "animate-scrollRight"
                )}
                style={{
                  [direction1 === "left" ? "left" : "right"]:
                    direction1 === "left"
                      ? `max(calc(200px * ${DATA_ITEMS1}), 100%)`
                      : "-350px",
                  animationDelay: `calc(30s / ${DATA_ITEMS1} * (${DATA_ITEMS1} - ${
                    index + 1
                  }) * -1)`,
                }}
              >
                <img className="" src="/images/homepage/figmaTemp.png" alt="" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Going Left */}
      <div className="w-full   z-50 flex items-center   justify-center">
        {" "}
        {/* Carousel */}
        <div
          style={{
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
          }}
          className="wrapper relative mx-3 h-[100px] w-[95%] max-w-full overflow-hidden"
        >
          {Array.from({ length: 20 }).map((testimonial, index) => {
            return (
              <div
                key={index}
                className={cn(
                  "absolute item py-4 px-6  flex justify-between mr-4 flex-col bg-[#ade67f25]   rounded-xl",
                  direction2 === "right"
                    ? "animate-scrollRight"
                    : "animate-scrollLeft"
                )}
                style={{
                  [direction2 === "right" ? "right" : "left"]:
                    direction2 === "right"
                      ? "-350px"
                      : `max(calc(200px * ${DATA_ITEMS1}), 100%)`,
                  animationDelay: `calc(30s / ${DATA_ITEMS1} * (${DATA_ITEMS1} - ${
                    index + 1
                  }) * -1)`,
                }}
              >
                <img className="" src="/images/homepage/figmaTemp.png" alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MediaPartner;
