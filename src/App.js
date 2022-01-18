import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Layers from "./components/Layers";
import MainPreview from "./components/MainPreview";
import Setting from "./components/Setting";
import axios from "axios";
import MsgPopup from "./components/MsgPopup";

function App() {
  // ____________________________________________ useState
  const [postImage, setPostImages] = useState(false);
  const [layerSelected, setLayerSelected] = useState("0");
  const [layers, updateLayers] = useState([{ id: "0", name: "Background" }]);
  const [layerImages, setLayerImages] = useState([
    { images: undefined, previewImages: undefined },
  ]);
  const [config, setConfig] = useState({
    projectName: "",
    projectDescription: "",
    collectionSize: "",
  });
  const [isOpen, setIsOpen] = useState(false); // Msg Popup
  // ____________________________________________ Functions
  // Add new Images Layer ()
  const addImagesLayer = () => {
    setLayerImages((layerImages) => [
      ...layerImages,
      { images: undefined, previewImages: undefined },
    ]);
  };
  // Handle Layer Images [Upload]
  const uploadLayerImages = (event) => {
    // For Image Preview Purpose
    let pre_images = [];
    for (let i = 0; i < event.target.files.length; i++) {
      pre_images.push({
        url: URL.createObjectURL(event.target.files[i]),
        name: event.target.files[i].name,
      });
    }
    // Set Layer Images
    setLayerImages(
      [...layerImages].map((layer, index) => {
        if (index.toString() === layerSelected)
          return {
            images: event.target.files,
            previewImages: pre_images,
          };
        else return { ...layer };
      })
    );
    // Post Layer images
    setPostImages(true);
  };
  // ____________________________________________ Apis
  // Post LayerImages
  const postLayerImages = () => {
    const formData = new FormData();
    formData.append("layerName", layers[layerSelected].name);
    Array.from(layerImages[layerSelected].images).forEach((file) => {
      formData.append("layerImages", file);
    });
    axios
      .post("http://localhost:5000/upload-images", formData)
      .then(async (response) => {
        console.log("responce:", response);
      })
      .catch(function (error) {
        console.log("error:", error);
      });
  };
  // ____________________________________________ APIs
  const handleGenerate = (event) => {
    setIsOpen(true);
    const formData = new FormData();
    formData.append("layerName", layers[layerSelected].name);
    formData.append("projectName", config.projectName);
    formData.append("projectDescription", config.projectDescription);
    formData.append("collectionSize", config.collectionSize);
    for (let i = 0; i < layers.length; i++) {
      formData.append("layersOrder", layers[i].name);
    }
    axios
      .post("http://localhost:5000/generate", formData)
      .then(async (response) => {
        console.log("Port 500 Responce:", response.data.success);
        setIsOpen(false);
        // If responce is successful than call zip download api
        if (response.data.success) {
          var url = "http://localhost:5000/get-zip";
          window.open(url, "Download");
        }
      })
      .catch(function (error) {
        setIsOpen(false);
        console.log(error);
      });
    // _start__________________________________________ Clear all fields input
    updateLayers([{ id: "0", name: "Background" }]);
    setLayerSelected("0");
    setLayerImages([{ images: undefined, previewImages: undefined }]);
    setConfig({
      projectName: "",
      projectDescription: "",
      collectionSize: "",
    });
    // _end____________________________________________ Clear all fields input
    event.preventDefault();
  };
  useEffect(() => {
    if (layerImages[layerSelected].images !== undefined && postImage) {
      postLayerImages();
      setPostImages(false);
    }
  }, [layerImages, postImage]);
  return (
    <React.Fragment>
      <MsgPopup isOpen={isOpen} setIsOpen={setIsOpen} />
      <Header />
      <div className="mx-auto py-3 min-h-screen">
        <div className="flex flex-col lg:flex-row">
          <div className="m-3 w-full lg:w-1/4">
            <Layers
              layerSelected={layerSelected}
              onLayerSelected={(layerIndex) => setLayerSelected(layerIndex)}
              onAddImagesLayer={addImagesLayer} // Use to set "Increment in layerImages" as the user "Add New Layer"
              layers={layers} // All layers with name
              updateLayers={updateLayers} // Add new Layer name
            />
          </div>
          <div className="p-3 m-3 w-full lg:w-2/4 border border-custom_gray rounded-md">
            <MainPreview
              onUploadLayerImages={uploadLayerImages}
              layerSelected={layerSelected}
              layerImages={layerImages}
            />
          </div>
          <div className="m-3 w-full lg:w-1/4">
            <Setting
              onHandleGenerate={handleGenerate}
              config={config}
              setConfig={setConfig}
            />
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
