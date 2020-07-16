import AudioRecorder from "audio-recorder-polyfill";
import { isMobileSafari, isSafari } from "react-device-detect";

const recordAudio = () =>
  new Promise(async (resolve, reject) => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    let mediaRecorder = null;

    if (isMobileSafari || isSafari) {
      mediaRecorder = new AudioRecorder(stream);
    } else mediaRecorder = new MediaRecorder(stream);

    console.log(mediaRecorder);
    const audioChunks = [];

    mediaRecorder.addEventListener("dataavailable", (event) => {
      console.log("data");
      console.log(event.data);
      audioChunks.push(event.data);
      console.log(audioChunks);
    });

    const start = () => {
      mediaRecorder.start();
      console.log("start");
    };

    const pause = () => {
      mediaRecorder.pause();
      console.log("paused");
    };

    const resume = () => {
      mediaRecorder.resume();
      console.log("resume");
    };

    const stop = () =>
      new Promise((resolve) => {
        mediaRecorder.addEventListener("stop", () => {
          console.log("chunks");
          console.log(audioChunks);
          const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
          console.log("blob");
          console.log(audioBlob);
          const audioURL = URL.createObjectURL(audioBlob);
          console.log("url");
          console.log(audioURL);
          const audio = new Audio(audioURL);
          const play = () => audio.play();
          resolve({ audioBlob, audioURL, play });
        });
        mediaRecorder.stop();
        stream.getTracks().forEach((track) => track.stop());
      });

    resolve({ start, stop, pause, resume });
  });

export default recordAudio;
