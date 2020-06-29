import React, { useState } from "react";
import useForm from "./hooks/useForm";
import { ReactMic } from "react-mic";
import axios from "axios";

const App = () => {
  const [recordBlob, setrecordBlob] = useState();
  const [recording, setRecording] = useState(false);
  const { values, handleChange, handleSubmit } = useForm(submit);

  let formData = new FormData();

  const startRecord = () => {
    setRecording(true);
  };

  const endRecord = () => {
    setRecording(false);
  };

  const onData = (recordedBlob) => {
    console.log("chunk of real-time data is: ", recordedBlob);
  };

  const onStop = (recordedBlob) => {
    console.log("recordedBlob is: ", recordedBlob);
      setrecordBlob(recordedBlob);
  };

  async function submit() {
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("recording", recordBlob.blob)

    console.log("user values");
    console.log(values);
    console.log("audio blob");
    console.log(recordBlob);

    console.log("formData");
    for (var value of formData.values()) {
      console.log(value);
    }

    
    fetch("http://localhost:9000/submitAudio",
        {
            method: 'POST',
            headers: { 'enctype': 'multipart/form-data' },
            body: formData
        })
    .then((res) => res.json())
    .then(res => console.log(res))
    .catch(err => err);
  }

  let content = (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1> Form </h1>
        <input type="text" id="name" name="name" onChange={handleChange} />
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          required
        />
        <button type="submit">submit</button>
      </form>
      <ReactMic
        record={recording}
        pause={false}
        className="sound-wave"
        onStop={onStop}
        onData={onData}
        mimeType="audio/mp3"
        strokeColor="#000000"
        backgroundColor="#FF4081"
      />
      <button onClick={startRecord} type="button">
        Start
      </button>
      <button onClick={endRecord} type="button">
        Stop
      </button>
    </div>
  );

  return content;
};

export default App;
