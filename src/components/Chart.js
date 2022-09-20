import React, { useState } from "react";
import data from "../local-json/data.json";

const Chart = () => {
  const [isHovering, setIsHovering] = useState(null);

  const handleMouseEnter = (i) => {
    if (isHovering === i) {
      return setIsHovering(null);
    }
    setIsHovering(i);
  };

  const handleMouseLeave = (i) => {
    if (isHovering === i) {
      return setIsHovering(false);
    }
    setIsHovering(false);
  };

  let barFillHeight = "0%";
  let translate = "0rem";
  let allValues = data.map((data) => data.amount);
  const maxAmount = Math.max(...allValues);

  const fillClass = (amount) => {
    const barFill = Math.round((amount / maxAmount) * 100);
    translate = -(barFill + 55) * 0.1 + "rem";
    barFillHeight = barFill + "%";
    let classes = `w-full cursor-pointer ${
      barFillHeight === "100%"
        ? "bg-cyan hover:opacity-40"
        : "bg-softRed hover:opacity-40"
    } rounded-[0.3rem]`;
    return classes;
  };

  return (
    <div className="flex gap-[1.5rem] justify-center mt-[4rem]">
      {data.map((data, i) => (
        <div key={data.id} className="relative">
          <div className="h-[15rem] w-[3rem] sm:w-[3.8rem] flex items-end ">
            <div
              onMouseEnter={() => {
                handleMouseEnter(i);
              }}
              onMouseLeave={() => {
                handleMouseLeave(i);
              }}
              className={fillClass(data.amount)}
              style={{ height: barFillHeight }}
            ></div>
            <div
              className="w-[4.5rem] h-[3rem] left-[-0.7rem] sm:left-[-0.3rem] opacity-0 invisible bg-darkBrown absolute grid place-items-center rounded-[.3rem] smooth"
              style={{
                transform: isHovering === i ? `translateY(${translate})` : "",
                visibility: isHovering === i ? 'visible' : '',
                opacity: isHovering === i ? 1: '',
              }}
            >
              <span className="text-white font-bold">${data.amount}</span>
            </div>
          </div>
          <div className="text-center mt-4 text-lg text-mediumBrown">
            {data.day}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chart;
