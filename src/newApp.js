//refactored App.js so that it's a react component rather than a const
//This was done to add a constructor and state but is nonfunctional right now


/*
import React, { useState, Component } from "react";
import useForm from "./hooks/useForm";
import { ReactMic } from "react-mic";

class newApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hello: "World"
        };

        const { values, handleChange, handleSubmit } = useForm(submit);
    }

    startRecord = () => {
        const [recording, setRecording] = useState(false);
        setRecording(true);
    }

    endRecord = () => {
        const [recording, setRecording] = useState(false);
        setRecording(false);
    }

    onData = (recordedBlob) => {
        console.log("chunk of real-time data is: ", recordedBlob);
    }

    onStop = (recordedBlob) => {
        const [recordBlob, setrecordBlob] = useState();
        console.log("recordedBlob is: ", recordedBlob);
        setrecordBlob(recordedBlob);
    }

    async submit() {
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("recording", recordBlob);

        console.log("user values");
        console.log(values);
        console.log("audio blob");
        console.log(recordBlob);

        console.log("formData");
        for (var value of formData.values()) {
            console.log(value);
        }

        let response = await fetch("index.php", {
            credentials: "same-origin",
            method: "POST",
            body: formData,
        });

        let result = await response.json();

        console.log(result);
    }

    render() {
        return (
            <div className="newApp">
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
    }
}

export default newApp;
*/