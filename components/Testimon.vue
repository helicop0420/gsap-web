<template>
	<div class="testimon-wrapper" id="test-wrapper">
		<h1>Take their word for it</h1>
		<div class="testimon-video">
			<video id="main-video" src="https://youtu.be/0MqLI3B4fs4" style="max-height: 68vh; height: 68vh;" controls></video>
		</div>
		<p class="testimon-subtitle">PHYSICIAN TESTIMONIAL</p>
		<p class="testimon-content">How does Oscar change the way to approach your procedures?</p>
		<div class="carousel-section">
			<agile :options="options">
					<div class="slide-item">
						<div class="slide">
								<video class="carousel-video" src="https://youtu.be/0MqLI3B4fs4" @click="(e)=>onClickVideo(e, 0)"></video>
								<div class="playing-mask" v-if="videoNo == 0">
								<div>
									<div style="display: flex; justify-content: center; height: 100px;"><triangleSVG></triangleSVG></div>
									<p style="color: #F04E23;">NOW PLAYING</p>
								</div>
							</div>
						</div>
						<p class="mt-3">How does Oscar change the way to approach your procedures?</p>
						<div class="flex mt-2" style="color: #7C8082">
							<p class="mr-3">4:32</p>
							<p>01/08/23</p>
						</div>
					</div>
					<div class="slide-item">
						<div class="slide">
							<video class="carousel-video" src="https://youtu.be/0MqLI3B4fs4" @click="(e)=>onClickVideo(e, 1)"></video>
							<div class="playing-mask" v-if="videoNo == 1">
								<div>
									<div style="display: flex; justify-content: center; height: 100px;"><triangleSVG></triangleSVG></div>
									<p style="color: #F04E23;">NOW PLAYING</p>
								</div>
							</div>
						</div>
						<p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
						<div class="flex mt-2" style="color: #7C8082">
							<p class="mr-3">4:32</p>
							<p>01/08/23</p>
						</div>
					</div>
					<div class="slide-item">
						<div class="slide">
							<div id="player"></div>
							<video class="carousel-video" src="https://youtu.be/0MqLI3B4fs4" @click="(e)=>onClickVideo(e, 2)"></video>
							<div class="playing-mask" v-if="videoNo == 2">
								<div>
									<div style="display: flex; justify-content: center; height: 100px;"><triangleSVG></triangleSVG></div>
									<p style="color: #F04E23;">NOW PLAYING</p>
								</div>
							</div>
						</div>
						<p class="mt-3">Proin mattis dolor enim, eget bibendum est feugiat non.</p>
						<div class="flex mt-2" style="color: #7C8082">
							<p class="mr-3">4:32</p>
							<p>01/08/23</p>
						</div>
					</div>
			</agile>
		</div>
	</div>
</template>
  
<style scoped>
.testimon-wrapper {
	background-color: black;
	color: white;
	padding-left: 10vw;
	padding-right: 10vw;
	padding-top: 30px;
	padding-bottom: 50px;
}

.carousel-video {
	cursor: pointer;
	height: 200px;
}

.carousel-section {
	margin-top: 80px;
	padding-top: 70px;
	padding-bottom: 70px;
	border-top: 1px solid white;
	border-bottom: 1px solid white;
}

.testimon-wrapper h1 {
	font-size: 70px;
	margin-top: 20px;
}
.testimon-video {
	flex-grow: 1;
}
.testimon-content {
	font-size: 40px;
}
.testimon-subtitle {
	margin-top: 10px;
	color: #EF5923;
}
.slide-item {
	padding: 10px;
	color: white;
}
.slide {
	background-color: black;
	height: 200px;
	position: relative;
}
.playing-mask {
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute; 
	left: 0; 
	top: 0; 
	height: 200px;
	background-color: white;
	opacity: 0.9;
	width: 100%;
	font-size: 23px;
	font-weight: bold;
}

  .agile {
    position: relative;
  }

  .agile--ssr .agile__slides--cloned {
    display: none
  }

  .agile--ssr .agile__slides > * {
    overflow: hidden;
    width: 0
  }

  .agile--ssr .agile__slides > *:first-child {
    width: 100%
  }

  .agile--rtl .agile__track,
  .agile--rtl .agile__slides,
  .agile--rtl .agile__actions,
  .agile--rtl .agile__dots {
    flex-direction: row-reverse;
  }

  .agile:focus, .agile:active, .agile *:focus, .agile *:active {
    outline: none;
  }

  .agile__list {
    display: block;
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .agile__track {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .agile__actions {
    display: flex;
    justify-content: space-between;
  }

  .agile--no-nav-buttons .agile__actions {
    justify-content: center;
  }

  .agile__slides {
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    flex-shrink: unset;
    flex-wrap: nowrap;
    justify-content: flex-start;
  }

  .agile--disabled .agile__slides {
    display: block;
    width: 100%;
  }

  .agile__slide {
    display: block;
    flex-grow: 1;
    flex-shrink: 0;
  }

  .agile__slide,
  .agile__slide * {
    -webkit-user-drag: none;
  }

  .agile--fade .agile__slide {
    opacity: 0;
    position: relative;
    z-index: 0;
  }

  .agile--fade .agile__slide--active {
    opacity: 1;
    z-index: 2;
  }

  .agile--fade .agile__slide--expiring {
    opacity: 1;
    transition-duration: 0s;
    z-index: 1;
  }

  .agile__nav-button[disabled] {
    cursor: default;
  }

  .agile__dots {
    align-items: center;
    display: flex;
    list-style: none;
    padding: 0;
    white-space: nowrap;
  }

  .agile__dot button {
    cursor: pointer;
    display: block;
    font-size: 0;
    line-height: 0;
  }
</style>
  
<script>
  import gsap from 'gsap'
  import lottie from 'lottie-web'
	import triangleSVG from '../assets/img/triangle.svg'
  // var ScrollTrigger = null;
  if (process.client) {
    var {ScrollTrigger} = require('gsap/ScrollTrigger');
    var {ScrollToPlugin} = require('gsap/ScrollToPlugin')
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  }
  export default {
    components: {
        'triangleSVG': triangleSVG,
    },
  
    data() {
      return {
				options: {
					// infinite: true,
					slidesToShow: 3,
					dots: false,
					centerMode: false
				},
				videoNo: 0
      };
    },
    mounted() {			
		// this.onYouTubeIframeAPIReady()
	},

	methods: {
		onClickVideo(e, no) {
			console.log(e.target, e.target.src)
			let url = e.target.src;
			let mainVideo = document.getElementById('main-video')
			mainVideo.src = url;
			mainVideo.load();
			this.videoNo = no;
		},

		// onYouTubeIframeAPIReady() {
    	// 	// Create an instance of the YouTube player
		// 	new YT.Player('player', {
		// 		videoId: '0MqLI3B4fs4', // Replace with your video ID
		// 		events: {
		// 			// Handle video click event
		// 			onReady: function(event) {
		// 			event.target.getIframe().addEventListener('click', function() {
		// 				onClickVideo(event, 2);
		// 			});
		// 			}
		// 		}
		// 	})
		// }
	}
  };
  
  
  
</script>
  
  
  
  