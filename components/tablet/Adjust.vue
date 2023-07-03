<template>
	<div style="position: relative;" id="adjust-wrapper">
		<div class="pta-text">
			<p class="pta-text-1">Customize your angioplasty to accurately<br> match the ballon length to lesion length</p>
			<p class="pta-text-2">The uniques solution allows in-vessel<br> adjustments of the ballon length from 20<br> to 180 mm, designed to dialte various<br> lesion lengths or focal residual stenosis<br> with the same balloon</p>
		</div>
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
						<img src="../../assets/img/adjust/Slider.png" alt="" class="img-slider" id="img-slider">
					</div>
				</div>
			</div>
				
		</div>
		<div class="metal-section">
			<img class="img-ballon" src="../../assets/img/adjust/vertical_balloon.png" style="width: 77px;" />
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
		</div>
		<div style="position: relative; background-color: #f45c24;">
			<img class="img-ballon-2" src="../../assets/img/adjust/ballon.png" />
			<div id="main-content" style="height: 60vh; ">
				
			</div>
		</div>
	</div>
</template>

<style scoped>
	.pta-section {
		position: relative;
		height: 100vh;
		width: 100vw;
		background-color: black;
	}
	.img-panel {
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
	.img-ballon-2 {
		left: 5%;
		right: 0px;
		position: absolute;
		top: 13vw;
		max-width: 120%;
		width: 110%;
		z-index: 15;
	}

	.pta-text {
		color: white;
		width: 100%;
		background-color: black;
		padding-top: 40px;
		padding-left: 40px;
	}
	.pta-text-1 {
		font-size: 22px;
	}

	.pta-text-2 {
		font-size: 22px;
	}

	.metal-section {
		background-color: rgb(244, 101, 38);
		position: relative;
		display: flex;
		justify-content: flex-end;
		padding-right: 20%;
	}

	.img-ballon {
		transform: rotateZ(90);
	}

	.first-marker {
		position: absolute;
		color: white;
		top: 100px;
		left: 10%;
	}

	.first-marker-arrow {
		width: 50vw;
		height: 1px;
		border-bottom: 1px solid white;
	}

	.first-marker-title {
		font-size: 20px;
	}
	.first-marker-content {
		font-size: 16px;
	}

	.second-marker {
		position: absolute;
		color: white;
		bottom: 60px;
		left: 10%;
	}
	.second-marker-arrow {
		width: 50vw;
		height: 1px;
		border-bottom: 1px solid white;
	}

	.second-marker-title {
		font-size: 20px;
	}
	.second-marker-content {
		font-size: 16px;
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

	.img-bounder {
		height: 100px;
		margin-left: 17%;
		width: 91%;
	}
	
</style>

<script>
import gsap from 'gsap'
import lottie from 'lottie-web'
import adjustSVG from '../../assets/img/adjust/standard_without_text.svg'
import restoreSVG from '../../assets/img/adjust/restore_without_text.svg'
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

		const animation3 = lottie.loadAnimation({
                container: gsap.utils.toArray("#main-content")[0],
                renderer: "svg",
                loop: false,
                autoplay: false,
                path: 'https://assets1.lottiefiles.com/packages/lf20_2xrsDhrCLE.json'
            });

		ScrollTrigger.create({
			trigger: '#main-content',
			start: "center center",
			onToggle: self => {
				animation3.play();
			}
		});
	}
};



</script>