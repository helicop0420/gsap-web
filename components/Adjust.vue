<template>
	<div style="position: relative;" id="adjust-wrapper">
					<div class="pta-section">
							<div style="overflow: hidden;">
											<!-- <img class="img-adjust" src="../assets/img/adjust/standard_adjust.png" /> -->
											<div class="img-panel" id="img-panel">
															<div class="img-adjust" id="img-adjust">
																<adjustSVG style="position: absolute; width: 100vw;"></adjustSVG>
															</div>
															<div class="img-restore" id="img-restore">
																<restoreSVG></restoreSVG>
															</div>
															<div class="img-bounder" id="img-bounder">
																<img src="../assets/img/adjust/Slider.png" alt="" class="img-slider" id="img-slider">
															</div>
											</div>
							</div>
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
							<div class="first-marker-content flex" style="align-items: end;">
								Metal ring on support<br/>
								catheter aids visualization<br/>
								ad resists tip deformation<p style="font-size: 13px; margin-bottom: 8px;">2</p>
							</div>
						</div>
						<div class="second-marker">
							<div class="second-marker-arrow"></div>
							<div class="second-marker-title" style="margin-right: 71px;">Balloon markers</div>
							<div class="second-marker-content flex" style="align-items: end;">
											Markers on distal balloon shoulder<br/>
											and every 60 mm aid accurate<br/>
											balloon-to-lesion measurement<p style="font-size: 13px; margin-bottom: 8px; margin-left: -26px;">2</p>
							</div>
						</div>
						<div id="adjust-content" class="adjust-content">

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
	.img-panel {
		position: absolute;
		z-index: 20;
		width: 80vw;
	}

	.img-adjust {
		position: absolute;
		z-index: 10;
		left: 0;
    right: -7%;
    overflow: hidden;
    height: 100vh;
	}
	.img-restore {
					position: absolute;
					z-index: 9;
					width: 100vw;
	}
	.img-slider {
		position: absolute;
		z-index: 11;
		right: -9%;
		top: 8vw;
		height: 40vw;
		cursor: pointer;
	}
	.img-stick {
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					right: 14vw;
					z-index: 100;
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
		z-index: 30;
	}

	.first-marker {
		position: absolute;
		color: white;
		opacity: 0;
		top: 55%;
		left: 13vw;
		z-index: 25;
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
		z-index: 25;
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

	.adjust-content {
		position: absolute;
		opacity: 0;
		bottom: 0;
		color: white;
		z-index: 20;
	}
	.third-marker-content {
		text-align: right;
		font-size: 20px;
	}

	.img-bounder {
		height: 100px;
		margin-left: 17%;
		width: 91%;
	}
	
</style>

<script>
import gsap from 'gsap'
import lottie from 'lottie-web'
import adjustSVG from '../assets/img/adjust/standard_adjust.svg'
import restoreSVG from '../assets/img/adjust/restore_adjust.svg'
// var ScrollTrigger = null;
if (process.client) {
	var {ScrollTrigger} = require('gsap/ScrollTrigger');
	var {ScrollToPlugin} = require('gsap/ScrollToPlugin')
	var {Draggable} = require('gsap/Draggable')
	gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
	gsap.registerPlugin(Draggable)
}
export default {
	components: { adjustSVG, restoreSVG },

	data() {
			return {
			};
	},
	mounted() {       
		let playhead = {frame: 0}
		const animation3 = lottie.loadAnimation({
                container: gsap.utils.toArray("#adjust-content")[0],
                renderer: "svg",
                loop: false,
                autoplay: false,
                path: 'https://assets1.lottiefiles.com/packages/lf20_2xrsDhrCLE.json'
            });  
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
		.to(".img-panel", {top: '-24vw', duration: 2 }, "image-up")
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
		.to(".img-ballon", {top: '20%', width: '115vw', height: '16vw', duration: 6, x: 0, delay:2, opacity: 1 }, "ballonmove-2")
		.to(".adjust-content", {opacity:1, duration: 3, onStart: (a,b,c) => {
                animation3.play()
            },})

		Draggable.create('#img-slider', {
			type: 'x',
			bounds: document.getElementById('img-bounder'),
			onDrag () {
				let style =  window.getComputedStyle(document.getElementById('img-slider'));
				var transformX = new WebKitCSSMatrix(style.transform).m41;
				console.log('rightPos', transformX)
				console.log('adust', document.getElementById('img-adjust').style)
				var parentW = document.getElementById('img-adjust').parentElement.clientWidth
				document.getElementById('img-adjust').style.right = `${-0.08*parentW-transformX}px`
				
			}
		})
	}
};



</script>