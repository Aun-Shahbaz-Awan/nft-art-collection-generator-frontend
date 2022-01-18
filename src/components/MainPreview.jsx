import React from "react";
// import FileUploaderDnD from "./sub-components/FileUploaderDnD";
import LayerView from "./sub-components/LayerView";

const MainPreview = ({ layerSelected, onUploadLayerImages, layerImages }) => {
  // console.log("layer Images:",layerImages[layerSelected].images.length);
  return (
    <React.Fragment>
      <div className="mb-3">
        <span className=" bg-custom_gray py-1 px-3 rounded-md mr-3">
          {/* #Name */}
        </span>
        <span className=" bg-custom_gray py-1 px-3 rounded-md mr-3">
          {layerImages[layerSelected].images === undefined
            ? 0
            : layerImages[layerSelected].images.length}{" "}
          images(s)
        </span>
      </div>
      {/* Layers Preview */}
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-2 mb-3">
        {layerImages[layerSelected].previewImages &&
          layerImages[layerSelected].previewImages.map(function (image, index) {
            return (
              <LayerView key={index} image={image.url} name={image.name} />
            );
          })}
      </div>
      {/* Grag and Drop */}
      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-primary border-dashed rounded-md">
        <div className="space-y-1 text-center">
          <svg
            className="mx-auto h-12 w-12 text-custom_gray"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="flex text-sm">
            <label
              htmlFor="file-upload"
              className="py-px px-1 relative cursor-pointer bg-custom_gray rounded-md font-medium hover:text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary"
            >
              <span>Upload your asset</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                multiple
                className="sr-only"
                onChange={(event) => onUploadLayerImages(event)}
              />
            </label>
            <p className="pl-1 text-custom_gray">or drag and drop</p>
          </div>
          <p className="text-xs text-custom_gray">PNG
            {/* , JPG, GIF up to 10MB */}
          </p>
        </div>
      </div>

      {/* <FileUploaderDnD changeInputFile={setImageAction} /> */}
    </React.Fragment>
  );
};

export default MainPreview;
