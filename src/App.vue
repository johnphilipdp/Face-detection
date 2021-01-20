<template>
  <div id="app">
    <Nav />
    <Camera />
  </div>
</template>

<script>
import Camera from "./components/Camera";
import Nav from "./components/Nav";
export default {
  name: "App",
  components: {
    Camera,
    Nav,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
* {
  box-sizing: border-box;
}
body {
  height: 100vh;
  width: 100wh;
  background: rgb(19, 83, 145);
  background: linear-gradient(
    53deg,
    rgba(19, 83, 145, 1) 0%,
    rgba(182, 21, 190, 1) 100%
  );
}
</style>