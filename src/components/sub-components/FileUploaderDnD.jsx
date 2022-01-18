// import React, { useEffect } from "react";

// const FileUploaderDnD = ({ changeInputFile }) => {
//   const state = {
//     inDropZone: false,
//     fileList: [],
//   };

//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "AddToDropZone":
//         return { ...state, inDropZone: action.inDropZone };
//       case "AddToList":
//         return { ...state, fileList: state.fileList.concat(action.files) };
//       default:
//         return state;
//     }
//   };

//   const [data, dispatch] = React.useReducer(reducer, state);

//   const handleDragEnter = (event) => {
//     event.preventDefault();
//     dispatch({ type: "AddToDropZone", inDropZone: true });
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//     event.dataTransfer.dropEffect = "move";
//     dispatch({ type: "AddToDropZone", inDropZone: true });
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();

//     let files = [...event.dataTransfer.files];
//     let files_with_preview = [];

//     files.map((file, index) => {
//       file[`image_${index}`] = URL.createObjectURL(file);
//       files_with_preview.push(file);
//     });

//     if (files) {
//       dispatch({ type: "AddToList", files });
//       dispatch({ type: "AddToDropZone", inDropZone: false });
//     }
//   };

//   useEffect(() => {
//     if (data.fileList[0]) {
//       const latestImage = data.fileList[data.fileList.length - 1];
//       let blob = latestImage.preview;
//       let name = latestImage.name;
//       let img = new Image();
//       img.src = blob;

//       let reader = new FileReader();
//       reader.readAsDataURL(latestImage);
//       reader.onloadend = function () {
//         let base64data = reader.result;
//         changeInputFile.changeInputFile({
//           name: name,
//           file: base64data,
//           width: img.width,
//           height: img.height,
//         });
//       };
//     }
//   }, [data]);

//   return (
//     <div
//       className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-primary border-dashed rounded-md"
//       id="fileuploaderdnd-container"
//       onDrop={(event) => handleDrop(event)}
//       onDragOver={(event) => handleDragOver(event)}
//       onDragEnter={(event) => handleDragEnter(event)}
//     >
//       <div className="space-y-1 text-center">
//         <svg
//           className="mx-auto h-12 w-12 text-custom_gray"
//           stroke="currentColor"
//           fill="none"
//           viewBox="0 0 48 48"
//           aria-hidden="true"
//         >
//           <path
//             d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
//             strokeWidth={2}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>

//         <div className="flex text-sm">

//             <span>Upload a file</span>

//           <p className="pl-1 text-custom_gray">or drag and drop</p>
//         </div>
//         <p className="text-xs text-custom_gray">PNG, JPG, GIF up to 10MB</p>
//       </div>
//     </div>
//   );
// };

// export default FileUploaderDnD;
