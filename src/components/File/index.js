import { useState } from "react";
import { saveAs } from "file-saver";

const File = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [outpoutFormat, setOutputFormat] = useState("png");

  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Use `files` instead of `file`
    setSelectedFile(file);
    displayImage(file);
  };

  const displayImage = (file) => {
    const reader = new FileReader();
    reader.onload = function name(params) {
      const dataURL = reader.result;
      document.getElementById("image-display").src = dataURL;
    };
    reader.readAsDataURL(file);
  };
  const handleChangeFormat = (event) => {
    setOutputFormat(event.target.value);
  };
  const convertImage = () => {
    if (!selectedFile) {
      alert("Selectionnez un fichier");
      return;
    }
    const read = new FileReader();
    read.onload = function name() {
      const dataURL = read.result;
      const blob = dataURItoBlob(dataURL);
      saveAs(blob, `converted_image${outpoutFormat}`);
    };
    read.readAsDataURL(selectedFile);
  };
  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

  return (
    <div>
      <input
        type="file"
        accept="image/"
        onChange={handleFileChange}
        // value={outpoutFormat}
      />
      <select onChange={handleChangeFormat}>
        <option value="png">PNG</option>
        <option value="jpg">JPG</option>
        <option value="webp">WEBP</option>
        <option value="gif">GIF</option>
        <option value="tiff">TIFF</option>
      </select>
      <button className="btn" onClick={convertImage}>
        convertir
      </button>
      <img src="" alt="" id="image-display" />
    </div>
  );
};

export default File;
