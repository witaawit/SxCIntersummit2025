import { cn } from "@/lib/utils";
import React from "react";
const DATA_ITEMS1 = 10;
const direction1 = "left";
const direction2 = "right";

const MediaPartner = () => {
  return (
    <div className="w-full   z-50 flex items-center h-[300px]  justify-center mb-20 ">
      {" "}
      {/* Carousel */}
      <div
        style={{
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
        }}
        className="wrapper relative mx-3 h-[300px] w-[95%] max-w-full overflow-hidden"
      >
        {Array.from({ length: 10 }).map((testimonial, index) => {
          return (
            <div
              key={index}
              className={cn(
                "absolute item p-4 w-[300px] h-[200px] flex justify-between mr-4 flex-col bg-[#ade67f2b]   rounded-lg",
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
              <img
                className="w-[300px] h-[150px] bg-amber-200"
                src="/images/homepage/figmaTemp.png"
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MediaPartner;
