import React from "react";
import { AiFillQuestionCircle } from "react-icons/ai";

const Setting = ({ config, setConfig, onHandleGenerate }) => {
  return (
    <React.Fragment>
      <div className="flex justify-between items-center">
        <h1 className="mb-3 text-xl font-semibold">Project Setting</h1>
        <button className="px-3 py text-sm bg-shade_light rounded-md cursor-pointer">
          Reset
        </button>
      </div>
      <form>
        <div className="mb-3 w-full">
          {/* Name */}
          <input
            required
            type="text"
            placeholder="Project Name"
            className="w-full px-3 py-2 mb-3 text-sm text-primary border border-primary bg-transparent rounded-md outline-none"
            value={config.projectName}
            onChange={(event) =>
              setConfig({ ...config, projectName: event.target.value })
            }
          />
          {/* Description */}
          <input
            required
            type="text"
            placeholder="Project Description"
            className="w-full px-3 py-2 mb-3 text-sm text-primary border border-primary bg-transparent rounded-md outline-none"
            value={config.projectDescription}
            onChange={(event) =>
              setConfig({ ...config, projectDescription: event.target.value })
            }
          />
          {/* Collection size */}
          <div className="flex justify-between items-center">
            <input
              required
              type="number"
              placeholder="Collection Size"
              className="w-full px-3 py-2 mb-3 text-sm text-primary border border-primary bg-transparent rounded-md outline-none"
              value={config.collectionSize}
              onChange={(event) =>
                setConfig({ ...config, collectionSize: event.target.value })
              }
            />
            <span className="mb-3 p-3">
              <AiFillQuestionCircle />
            </span>
          </div>
          {/* Dimensions */}
          <div className="p-2 mb-3 rounded-md bg-custom_gray">
            <div className="flex justify-between items-center">
              <p>Dimension</p>
              <span>
                <AiFillQuestionCircle />
              </span>
            </div>
            <div className="flex justify-between mt-2 w-full">
              <input
                disabled
                type="number"
                placeholder="width"
                className=" w-1/2 rounded-md py-1 px-2 text-sm text-primary outline-none border border-primary mr-2"
              />
              <input
                disabled
                type="number"
                placeholder="hight"
                className=" w-1/2 rounded-md py-1 px-2 text-sm text-primary outline-none border border-primary"
              />
            </div>
          </div>
          {/* Export Option */}
          <button className="w-full px-3 py-2 bg-shade_light rounded-md cursor-pointer">
            Export to: webp
          </button>
        </div>
        <hr className="mb-3" />
        <div className="flex justify-between">
          <button
            className="px-3 py-2 py-auto mr-3 bg-yellow-200 text-yellow-900 rounded-md cursor-pointer"
            disabled
          >
            Perview
          </button>
          <button
            type="submit"
            onClick={(event) =>onHandleGenerate(event)}
            className=" flex-1 px-3 py-2 bg-green-200 text-green-900 rounded-md cursor-pointer"
          >
            Generate Collection
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Setting;
