<template>
	<div style="position: relative;" id="adjust-wrapper">
			<div class="pta-section">
				<img class="img-adjust" src="../assets/img/adjust/standard_adjust.png" />
					<div class="pta-text">
							<p class="pta-text-1">Customize your angioplasty to accurately match the ballon length to lesion length</p>
							<p class="pta-text-2">The uniques solution allows in-vessel adjustments of the ballon length from 20 to 180 mm, designed to dialte various lesion lengths or focal residual stenosis with the same balloon</p>
					</div>
			</div>
			<div class="metal-section-temp">
			</div>
			<div class="metal-section">
					<img class="img-ballon" src="../assets/img/adjust/ballon.png" />
					<div class="first-marker">
							<div class="first-marker-arrow"></div>
							<p class="first-marker-title">Proximal marker</p>
							<p class="first-marker-content">
							Metal ring on support<br/>
							catheter aids visualization<br/>
							ad resists tip deformation
							</p>
					</div>
					<div class="second-marker">
							<div class="second-marker-arrow"></div>
							<p class="second-marker-title">Balloon markers</p>
							<p class="second-marker-content">
									Markers on distal balloon shoulder<br/>
									and every 60 mm aid accurate<br/>
									balloon-to-lesion measurement
							</p>
					</div>
					<div class="third-marker">
							<p class="third-marker-content">
									<b>Adjustable ballon length</b><br/>
									Reinflatable balloon can achieve<br/>
									lengths from 20 to 180 mm
									</p>
					</div>
			</div>
	</div>
</template>

<style scoped>
	.pta-section {
			top: 0;
			left: 0;
			right: 0;
			z-index: 5;
			position: absolute;
			height: 100vh;
			width: 100vw;
			background-color: black;
	}
	.img-adjust {
		position: absolute;
		z-index: 20;
		top: 50%;
		left: 50%;
		width: 80vw;
		transform: translate(-50%, -50%);
	}
	.pta-text {
			z-index: 10;
			left: 10vw;
			position: absolute;
			color: white;
			width: 50vw;
			bottom: 15vh;
			opacity: 0;
	}
	.pta-text-1 {
			font-size: 40px;
	}

	.pta-text-2 {
			font-size: 30px;
	}

	.metal-section-temp {
			background-color: rgb(244, 101, 38);
			height: 100vh;
	}

	.metal-section {
			background-color: rgb(244, 101, 38);
			height: 100vh;
			position: relative;
			overflow: hidden;
	}

	.img-ballon {
			position: absolute;
			top: 50%;
			height: 67vw;
	max-width: 400vw;
	width: 400vw;
			transform: translateY(-50%);
	}

	.first-marker {
			position: absolute;
			color: white;
			opacity: 0;
			top: 55%;
	left: 13vw;
	}

	.first-marker-arrow {
			width: 123px;
	height: 123px;
			border-right: 1px solid white;
			border-bottom: 1px solid white;
	}

	.first-marker-title {
			font-size: 30px;
	}
	.first-marker-content {
			font-size: 20px;
	}

	.second-marker {
			display: flex;
			flex-direction: column;
			align-items: center;
			position: absolute;
			color: white;
			opacity: 0;
			top: 55%;
			right: 10vw;
	}
	.second-marker-arrow {
			width: 40vw;
			height: 8vw;
			border-bottom: 1px solid white;
			border-left: 1px solid white;
	}

	.second-marker-title {
			font-size: 30px;
	}
	.second-marker-content {
			font-size: 20px;
	}

	.third-marker {
			position: absolute;
			left: -100px;
			opacity: 0;
			bottom: 10%;
			color: white;
			padding-right: 5px;
			border-right: 1px solid white;
	}
	.third-marker-content {
			text-align: right;
			font-size: 20px;
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


	data() {
		return {
		};
	},
	mounted() {         
					gsap.timeline({
			scrollTrigger: {
				trigger: '.pta-section',
				start: 'top top',
									end: '+=4000',
				scrub: true,
									pin: true
			}
		})
					.add('image-up')
					.to(".img-adjust", {top: '2%', duration: 2 }, "image-up")
					.to(".pta-text", {opacity: 1, duration: 2}, "image-up")
					.to(".pta-section", {top: '-100vh', opacity: 0, delay:2, duration: 10})

					gsap.timeline({
			scrollTrigger: {
				trigger: '.metal-section',
				start: 'top top',
									end: '+=8000',
				scrub: true,
									pin: true,
				// ease: gsap.Power3.easeOut
			}
		})
					.to(".first-marker", {opacity:1, duration: 3, ease: "power2.out", delay: 13})
					.add("ballon-move-1")
					.to(".first-marker", {x: '-250vw', duration: 10, delay:2}, "ballon-move-1")
					.to(".img-ballon", {x: '-250vw', duration: 10, delay: 2}, "ballon-move-1")
					.to(".second-marker", {opacity:1, duration: 3, ease: "power2.out"})
					.add("ballon-move-2")
					.to(".second-marker", {x: '150px', opacity:0, duration: 6, ease: "power2.out", delay: 2}, "ballonmove-2")
					.to(".img-ballon", {top: '20%', width: '100vw', height: '14vw', duration: 6, x: 0, delay:2 }, "ballonmove-2")
					.to(".third-marker", {opacity: 1, duration: 3})
					.to(".third-marker", {left: '70vw', duration:6, delay: 2})
			}
};



</script>



