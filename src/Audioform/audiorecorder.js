import AudioRecorder from "audio-recorder-polyfill";
import mpegEncoder from "audio-recorder-polyfill/mpeg-encoder";
import { isMobileSafari, isSafari } from "react-device-detect";


/**
 * @description
 * 
 * recordAudio()
 * Sets up a WebRTC recorder to record user audio
 * Wrapped in a promise because there's an indeterminate wait time to get the audio stream because user approval is needed
 */
const recordAudio = () =>
  new Promise(async (resolve, reject) => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    let mediaRecorder = null;

    // use polyfill audiorecorder on safari

    if (isMobileSafari || isSafari) {
      AudioRecorder.encoder = mpegEncoder;
      AudioRecorder.prototype.mimeType = "audio/mpeg";
      mediaRecorder = new AudioRecorder(stream);
    } else mediaRecorder = new MediaRecorder(stream);

    const audioChunks = [];

    // as user records, add data to the audioChunks array

    mediaRecorder.addEventListener("dataavailable", (event) => {
      audioChunks.push(event.data);
    });

    // functions to control the mediarecorder itself

    const start = () => {
      mediaRecorder.start();
    };

    const pause = () => {
      mediaRecorder.pause();
    };

    const resume = () => {
      mediaRecorder.resume();
    };

    // when stopping, need to make a Blob object from the audio chunks and convert it into a wav
    const stop = () =>
      new Promise((resolve) => {
        mediaRecorder.addEventListener("stop", () => {
          // providing the raw audio file, a way to play it inside a audio tag, and a function to play the audio w/o an audio tag
          const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
          const audioURL = URL.createObjectURL(audioBlob);

          const audio = new Audio(audioURL);
          const play = () => audio.play();

          resolve({ audioBlob, audioURL, play });
        });

        // stopping mediaRecorder and all audioTracks (removes the mic button from the user's tab)
        mediaRecorder.stop();
        stream.getTracks().forEach((track) => track.stop());
      });

    
    resolve({ start, stop, pause, resume });
  });

export default recordAudio;
