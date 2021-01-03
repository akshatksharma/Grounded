import React, { useState, useMemo } from "react";
import { useDropzone } from "react-dropzone";

import "./Fileform.css";

/**
 * @description
 *
 * Fileform
 * React component for the image upload section of the main page. Users need to be able upload images here
 * 
 * @props
 *
 * @param {Function} dataUpdater -- function that appends some data to a formData object for a submission
 *
 */

const Fileform = (props) => {
  /**
   * @state {Array} files
   * Array of size 1 that contains the image that the user will upload
   */
  const [files, setFiles] = useState([]);

  /**
   * truncate()
   * @param {String} str - string to be truncated
   * @param {Int} n - how many letters before truncation
   */
  const truncate = (str, n) => {
    if (!str) return;
    const [name, ext] = str.split(".");
    return name.length > n ? `${name.substr(0, n - 1)}[...].${ext}` : str;
  };

  /**
   * handleFile()
   * @param {[File]} acceptedFiles
   * Maps the array of files into a new array of objects that contain the file as well as a preview for it
   * The file itself is sent to App.js to be inserted into the submission formObject
   */
  const handleFile = (acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
    props.dataUpdater(["image", acceptedFiles[0]]);
  };

  // extracting the necessary functions and states out of the useDropzone package
  // dropZone enables drag n drop functionality for file upload

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

  // styles for the dropzone area
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

  // setting the appropriate styles based on whether the file is an image or not

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

  // rendering the main content
  // uses the dropZone states to render differnt content to the user

  let content = (
    <div className="imageUpload">
      <div
        {...getRootProps({
          className: "dropzone",
          style,
        })}
      >
        {/* the actual dropzone file input */}
        <input {...getInputProps()} />

        {isDragActive ? (
          <p>Drop image here ...</p>
        ) : (
          <p>Click to choose an image, or drag it here</p>
        )}
      </div>
      {/* mapping the one file the user uploads to a small preview under the upload */}
      {files.map((file) => (
        <div className="thumbnail" key={file.name} aria-label="Image Preview">
          <div className="thumb">
            <div className="thumbInner">
              <img src={file.preview} alt={"The thumbnail"} />
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
