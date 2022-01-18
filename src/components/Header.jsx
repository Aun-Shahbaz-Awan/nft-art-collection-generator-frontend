import React from "react";
import { SiHiveBlockchain } from "react-icons/si";

const Header = () => {
  return (
    <React.Fragment>
      <div className="m-3 bg-primary rounded-lg">
        <div className="mx-auto py-3 lg:px-9 sm:px-9 ">
          <div className="flex items-center justify-between flex-wrap">
            {/* Left */}
            <div className="w-80 flex items-center ">
              <SiHiveBlockchain className="" />
              <span className="flex text-xl font-bold ml-2">
                NFT Collection Generator
              </span>
            </div>

            {/* Mid */}
            <div>
              <strong className="cursor-pointer hover:text-shade_light mx-4">
                Feature
              </strong>
              <strong className="cursor-pointer hover:text-shade_light mx-4">
                Pricing
              </strong>
            </div>

            {/* Right */}
            <div className="flex w-80 md:w-auto sm:auto sm:flex justify-between ">
              {/* Create NFT */}
              <div className="order-1 mt-2 mx-4 flex-shrink-0 sm:order-4 sm:mt-0 border rounded-lg cursor-pointer">
                <span className="flex items-center justify-center px-4 py-2 text-sm font-medium ">
                  Get Started
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Header;
