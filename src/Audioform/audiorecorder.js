import AudioRecorder from "audio-recorder-polyfill";
import { isMobileSafari, isSafari } from "react-device-detect";

const recordAudio = () =>
  new Promise(async (resolve, reject) => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    let mediaRecorder = null;

    if (isMobileSafari || isSafari) {
      mediaRecorder = new AudioRecorder(stream);
    } else mediaRecorder = new MediaRecorder(stream);

    const audioChunks = [];

    mediaRecorder.addEventListener("dataavailable", (event) => {
      audioChunks.push(event.data);
    });

    const start = () => {
      mediaRecorder.start();
    };

    const pause = () => {
      mediaRecorder.pause();
    };

    const resume = () => {
      mediaRecorder.resume();
    };

    const stop = () =>
      new Promise((resolve) => {
        mediaRecorder.addEventListener("stop", () => {
          const audioBlob = new Blob(audioChunks, { type: "audio/wav" });

          const audioURL = URL.createObjectURL(audioBlob);

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
