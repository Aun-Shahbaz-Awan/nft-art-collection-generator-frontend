import React, { useState } from "react";
import Layer from "./sub-components/Layer";
import { AiFillQuestionCircle } from "react-icons/ai";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Layers = ({
  layerSelected,
  onLayerSelected,
  onAddImagesLayer,
  layers,
  updateLayers,
}) => {
  console.log("layers:", layers);
  const [totalLayers, incrementLayer] = useState(1);
  const [layerName, updateLayerName] = useState(""); // Adding New Layer
  // Beautify DnD - Layer Drag and Drop
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(layers);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateLayers(items);
  }
  console.log("Layer Name:", layers[layerSelected].name);

  return (
    <React.Fragment>
      <h1 className="mb-3 text-xl font-semibold">Layers</h1>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="layers">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {layers &&
                layers.map((layer, index) => {
                  return (
                    <Draggable
                      key={layer.id}
                      draggableId={layer.id}
                      index={index}
                    >
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          onClick={() => onLayerSelected(layer.id)}
                        >
                          <Layer
                            name={layer.name}
                            active={layerSelected === layer.id}
                          />
                        </li>
                      )}
                    </Draggable>
                  );
                })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <hr className="mb-3" />
      <div className="bg-custom_gray p-3 mb-3 rounded-md">
        <form className=" flex justify-between">
          <input
            required
            type="text"
            placeholder="New Layer"
            className="flex-1 mr-3 rounded-md py-1 px-2 text-sm text-primary outline-none"
            value={layerName}
            onChange={(e) => updateLayerName(e.target.value)}
          />
          <button
            type="submit"
            className="px-3 bg-primary rounded-md cursor-pointer"
            onClick={(e) => {
              if (layerName !== "") {
                updateLayers((layers) => [
                  ...layers,
                  { id: "" + totalLayers, name: layerName },
                ]);
                updateLayerName("");
                onAddImagesLayer();
                incrementLayer(totalLayers + 1);
                e.preventDefault();
              }
            }}
          >
            Add
          </button>
        </form>
      </div>
      <hr className="mb-3" />
      <div className="p-3 border border-primary rounded-md">
        <div className="flex justify-between items-center">
          <p className="mb-3">Layer Setting</p>
          <span className="mb-3">
            <AiFillQuestionCircle />
          </span>
        </div>

        <span className="w-full py-2 flex justify-center items-center border border-primary rounded-md">
          {layers[layerSelected].name}
        </span>
        <button className="w-full px-3 py-2 mt-3 bg-shade_light rounded-md cursor-pointer">
          Rarity Setting
        </button>
      </div>
    </React.Fragment>
  );
};

export default Layers;
