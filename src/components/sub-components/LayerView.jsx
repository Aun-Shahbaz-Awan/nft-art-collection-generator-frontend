import React from "react";

const LayerView = ({ image, name }) => {
  return (
    <div className="bg-custom_gray rounded-md">
      <span className="text-xs bg-primary py-px px-1 m-1 rounded-md absolute">
        15%
      </span>
      <img src={image} alt="layer_preview" />
      <span className="flex justify-center py-2 overflow-hidden">{name}</span>
    </div>
  );
};

export default LayerView;
