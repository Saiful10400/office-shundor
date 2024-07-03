import { Button } from "@mui/material";
import React, { useState } from "react";

const ImageUploader = (props) => {
  const [img, setImg] = useState([]);
  const [Imagestate, setImagestate] = useState({
    selectedImages: [],
  });

  const handleImageUpload = (event) => {
    const files = event.target.files;
    if (files) {
      var imagesArray = [];
      const remainingSlots = 1 - Imagestate.selectedImages.length;
      const filesToUpload = Array.from(files).slice(0, 1);
      setImg(filesToUpload);
      props.imgData(filesToUpload);
      for (let i = 0; i < filesToUpload.length; i++) {
        const file = filesToUpload[i];
        const reader = new FileReader();
        reader.onloadend = () => {
          imagesArray.push(reader.result.toString());
          if (imagesArray.length === filesToUpload.length) {
            const updatedImages = [...imagesArray];
            setImagestate({ selectedImages: updatedImages });
            props.previewImageData(updatedImages);
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        component="label"
        //   color="primary"
        className="uploadButton"
        style={{ backgroundColor: "transparent", color: "gray" }}
      >
        Upload Image
        <input
          hidden
          accept="image/*"
          // multiple
          type="file"
          onChange={handleImageUpload}
          // disabled={state.selectedImages.length >= 1}
        />
      </Button>
      <div className="d-flex align-items-center" style={{ gap: "10px" }}></div>
    </div>
  );
};

export default ImageUploader;
