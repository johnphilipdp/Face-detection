<template>
  <div style="position: relative" id="video_container">
    <video
      style="position: absolute"
      ref="video"
      width="720"
      height="560"
      autoplay
      muted
    ></video>
  </div>
</template>

<script>
import * as faceapi from "face-api.js";
export default {
  mounted() {
    const video = this.$refs.video;

    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("Face-detection/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("Face-detection/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("Face-detection/models"),
      faceapi.nets.faceExpressionNet.loadFromUri("Face-detection/models"),
    ]).then(this.startVideo());
    video.addEventListener("play", () => {
      const canvas = faceapi.createCanvasFromMedia(video);
      document.querySelector("#video_container").append(canvas);
      const displaySize = { width: video.width, height: video.height };
      faceapi.matchDimensions(canvas, displaySize);
      setInterval(async () => {
        const detections = await faceapi
          .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks()
          .withFaceExpressions();
        const resizeDetections = faceapi.resizeResults(detections, displaySize);
        canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
        faceapi.draw.drawDetections(canvas, resizeDetections);
        faceapi.draw.drawFaceLandmarks(canvas, resizeDetections);
        faceapi.draw.drawFaceExpressions(canvas, resizeDetections);
      }, 100);
    });
  },
  methods: {
    startVideo() {
      const video = this.$refs.video;
      navigator.getUserMedia(
        {
          video: {},
        },
        (stream) => {
          return (video.srcObject = stream);
        },
        (error) => {
          return console.error(error);
        }
      );
    },
  },
};
</script>

<style>
#video_container {
  max-width: 600px;
  margin: 0 auto;
}
video {
  position: absolute;
  box-shadow: 1px 11px 51px rgb(0 0 0 / 22%);
  height: 560px;
  width: 749px;
  border: 3px solid #dcdcdc;
}
canvas {
  position: absolute;
}
</style>