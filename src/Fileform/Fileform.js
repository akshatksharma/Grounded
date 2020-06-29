import React, { useState, useMemo } from "react";
import { useDropzone } from "react-dropzone";

import "./Fileform.css";

const Fileform = (props) => {
  const [files, setFiles] = useState([]);

  const truncate = (str, n) => {
    if (!str) return;
    const [name, ext] = str.split(".");
    return name.length > n ? `${name.substr(0, n - 1)}[...].${ext}` : str;
  };

  const handleFile = (acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
    props.dataUpdater(["image", acceptedFiles]);
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/*",
    multiple: false,
    onDrop: handleFile,
  });

  // styles
  const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
  };

  const activeStyle = {
    borderColor: "#2196f3",
  };

  const acceptStyle = {
    borderColor: "#00e676",
  };

  const rejectStyle = {
    borderColor: "#ff1744",
  };

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [
      isDragActive,
      isDragReject,
      isDragAccept,
      baseStyle,
      activeStyle,
      rejectStyle,
      acceptStyle,
    ]
  );

  // render

  let content = (
    <div className="imageUpload">
      <div
        {...getRootProps({
          className: "dropzone",
          style,
        })}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop image here ...</p>
        ) : (
          <p>Choose an image or drag it here</p>
        )}
      </div>
      {files.map((file) => (
        <div className="thumbnail" key={file.name}>
          <div className="thumb">
            <div className="thumbInner">
              <img src={file.preview} alt={file.name} />
            </div>
          </div>
          <div className="thumbName">
            <div>
              <p className="bold">{truncate(file.name, 10)}</p>
            </div>
            <div>
              <p className="text--small">Uploaded</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
  return content;
};

export default Fileform;
