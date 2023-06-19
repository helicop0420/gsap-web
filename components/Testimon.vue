<template>
	<div class="testimon-wrapper">
		<h1>Take their word for it</h1>
		<div class="testimon-video">
			<video></video>
		</div>
		<p class="testimon-subtitle">PHYSICIAN TESTIMONIAL</p>
		<p class="testimon-content">How does Oscar change the way to approach your procedures?</p>
	</div>
</template>
  
<style scoped>
.testimon-wrapper {
	background-color: black;
	height: 100vh;
	display: flex;
	flex-direction: column;
	color: white;
	padding-left: 10vw;
	padding-right: 10vw;
}

.testimon-wrapper h1 {
	font-size: 70px;
	margin-top: 100px;
}
.testimon-video {
	flex-grow: 1;
	background-color: aqua;
}
.testimon-content {
	font-size: 40px;
}
.testimon-subtitle {
	margin-top: 10px;
	color: #EF5923;
}
</style>
  
<script>
  import gsap from 'gsap'
  import lottie from 'lottie-web'
  // var ScrollTrigger = null;
  if (process.client) {
    var {ScrollTrigger} = require('gsap/ScrollTrigger');
    var {ScrollToPlugin} = require('gsap/ScrollToPlugin')
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  }
  export default {
    // components: { lottie },
  
    data() {
      return {
      };
    },
    mounted() {			
			
		}
  };
  
  
  
</script>
  
  
  
  