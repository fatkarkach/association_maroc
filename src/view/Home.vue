<template>
<Navbar></Navbar>
  <header>

    <!-- This div is  intentionally blank. It creates the transparent black overlay over the video which you can modify in the CSS -->
    <div class="overlay"></div>

    <!-- The HTML5 video element that will create the background video on the header -->
    <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
      <source src="~@/assets/images/video_back.mp4" type="video/mp4">
    </video>

    <!-- The header content -->
    <div class="container h-100">
      <div class="d-flex h-100 text-center align-items-center">
        <div class="w-100 text-white">
          <h1 class="display-3">Associations Marocaines</h1>
          <p class="lead mb-0">Une platforme pour gérer les association de région Drâa-Tafilalet</p>
          <br>
          <a class="btn btn-outline-light btn-lg rejoine" href="#!" role="button">Rejoignez-nous</a>
        </div>
      </div>
    </div>
  </header>

  <!-- Page section example for content below the video header -->

      <sliderassoc></sliderassoc>

  <!-- Page section example for content below the video section -->
  <Services></Services>
  <footer class="footer-section">
  <Footer></Footer>
  </footer>
</template>

<script>
import Navbar from "../components/Navbar";
import sliderassoc from "@/components/sliderassoc";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
export default {
  name: `Home`,
  components: {
    Navbar,
    sliderassoc,
    Footer,
    Services

  },
}
</script>

<style scoped>
header {
  position: relative;
  height: 88vh;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
}

header video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

header .container {
  position: relative;
  z-index: 2;
}

header .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #211f24;
  opacity: 0.5;
  z-index: 1;
}

/* Media Query for devices withi coarse pointers and no hover functionality */

/* This will use a fallback image instead of a video for devices that commonly do not support the HTML5 video element */

@media (pointer: coarse) and (hover: none) {
  header {
    background: url("~@/assets/images/slide3.jpg") black no-repeat center center scroll;
  }

  header video {
    display: none;
  }
}

a,p,h1,h2,h3,h4,ul {
  margin: 0;
  padding: 0;
}
.footer-section {
  background: #24252a;
  position: relative;
}
.rejoine{
  padding: 10px;
}
</style>