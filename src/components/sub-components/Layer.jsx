import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const Layer = ({ name, active }) => {
  return (
    <React.Fragment>
      {/* {console.log("I am Selected:", active)} */}
      <div
        className={
          active
            ? "bg-custom_gray p-3 mb-3 rounded-md flex justify-between border border-primary"
            : "bg-custom_gray p-3 mb-3 rounded-md flex justify-between"
        }
      >
        <h3>{name}</h3>
        <p className="text-xs flex items-center">
          <span className="border bg-primary py-px px-1 rounded-sm mr-2">
            0
          </span>
          <span className="border bg-primary py-px px-1 rounded-sm">100%</span>
          {active && <BsCheckCircleFill className="mr-1 ml-2 text-lg" />}
        </p>
      </div>
    </React.Fragment>
  );
};

export default Layer;
