<template>
	<div class="restore-wrapper" id="restore-wrapper">
		<div class="world-section">
			<h1>A Real-World User Evaluation </h1>
			<div class="grid grid-cols-2 gap-4 align-stretch">
				<div class="world-item world-left col-span-1">
					<h2>Real-World User Evaluation</h2>
					<div class="world-content">
						<div class="world-content-left flex align-center gap-3">
							<img class="world-left-image" src="../assets/img/restore/Icon_1.png"/>
							<div>
								<p><span class="color-orange">Oscar</span> was evaluated in very complex lesions:</p>
								<ul>
									<li>80% CLI patients</li>
									<li>74% severe or moderate lesion calcification</li>
									<li>53% of lesions were occlusions</li>
									<li>Average lesion length of 151mm</li>
								</ul>
							</div>
						</div>
						<div class="world-content-left flex align-center gap-3">
							<img class="world-left-image" src="../assets/img/restore/Icon_2.png"/>
							<div>
								<p><span class="color-orange">Oscar</span> use was evaluated:</p>
								<ul>
									<li>In 12 different hospitals across the US</li>
									<li>By 15 physicians; 7 interventional cardiologists, 5 interventional radiologists and 3 vascular surgeons</li>
								</ul>
							</div>
						</div>
						<div class="world-content-left flex align-center gap-3">
							<img class="world-left-image" src="../assets/img/restore/Icon_3.png"/>
							<div>
								<p><span class="color-orange">Oscar</span> in numbers:</p>
								<ul>
									<li>Was used in 78 cases</li>
									<li>A total of 91 kits were used</li>
									<li>51 4F/0.014" and 40 6F/0.018" kits</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="world-item world-right col-span-1">
					<h2>Oscar User Evaluation</h2>
					<div class="world-content">
						<div class="grid gap-2 grid-cols-2">
							<div class="col-span-1"></div>
							<div class="col-span-1"></div>
							<div class="col-span-1"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="achieve-section">
			<h1>Achieve the pushability of an 0.035" system on an 0.018" platform</h1>
			<div class="grid grid-cols-2 gap-4">
				<div class="col-span-1">
					<p class="achieve-title"><span class="color-orange">Oscar</span> pushability on the bench </p>
				</div>
				<div class="col-span-1"></div>
			</div>
			<div class="grid grid-cols-2 gap-4">
				<div class="col-span-1">
					<p class="achieve-title"><span class="color-orange">Oscar</span> user evaluation </p>
					<p>Physicians rated <span class="color-orange">Oscar</span> 0.018" Support Catheter and Dilator combination 91.7% much better/better or equal in crossing performance when compared to the Terumo NaviCross 0.035" crossing catheter</p>
				</div>
				<div class="col-span-1"></div>
			</div>
			

		</div>
		<div class="meet-section">
			<img src="../assets/img/restore/left-balloon.png" alt="" class="meet-left" />
			<div class="meet-right">
				<h1>Meet Oscar</h1>
				<p>
				The all-in-one solution to reach,<br/>
				cross and prepare lesions
				</p>
				<div class="meet-solution">
					<img src="../assets/img/restore/solution.png" class="meet-solution-image"/>
					<div class="mask"></div>
					<button class="meet-button">Watch the video</button>
				</div>
				<button class="btn-brochure">View the brochure</button>
			</div>
		</div>
	</div>
</template>
  
<style scoped>
	.restore-wrapper {
		background-color: #EF5923;
		padding-top: 15vh;
		padding-bottom: 15vh;
	}
	.world-section {
		width: 80vw;
		margin-left: 10vw;
		margin-bottom: 20px;
		opacity: 0;
	}
	.world-section>h1 {
		font-size: 50px;
		color: white;
		margin-bottom: 20px;
	}
	.achieve-section>h1 {
		font-size: 30px;
		color: #EF5923;
		margin-bottom: 20px;
	}
	.world-item {
		background-color: white;
		padding: 10px 50px 10px 10px !important;
	}
	.world-item>h2 {
		color: #EF5923;
		font-size: 30px;
		margin-bottom: 20px;
	}
	.color-orange {
		color: #EF5923;
		font-weight: bold;
	}
	.world-content-left {
		margin-bottom: 20px;
	}
	.world-left-image {
		width: 104px;
		height: 104px;
		margin-right: 24px;
	}
	.world-content-left ul {
		list-style: disc;
		margin-left: 20px;
	}
	.achieve-section {
		background-color: white;
		width: 80vw;
		margin-left: 10vw;
		padding: 10px;
		opacity: 0.1;
		height: 60vh;
	}
	.achieve-title {
		font-size: 20px;
		font-weight: bold;
	}

	.meet-section {
		position: relative;
		background-color: #EF5923;
		height: 100vh;
		margin-top: 40px;
	}
	.meet-left {
		position: absolute;
		left: -200px;
		top: -10%;
	}
	.meet-right {
		margin-left: 40%;
		color: white;
	}
	.meet-right h1 {
		font-size: 60px;
	}
	.meet-right> p {
		font-size: 40px;
		line-height: 40px;
	}
	.meet-solution {
		margin-top: 50px;
		margin-bottom: 50px;
		position: relative;
		width: 650px;
		height: 360px;
	}
	.meet-solution-image {
		position: absolute;
		width: 100%;
		height: 100%;
	}
	.mask {
		opacity: 0.5;
		background-color: white;
		width: 100%;
		height: 100%;
		z-index: 10;
	}

	.btn-brochure {
		background-color: white;
		padding: 10px 50px 10px 50px;
		border-radius: 25px;
		box-shadow: 1px 2px 3px 2px #1c1a1a91;
		color: #EF5923;
		position: relative;
		z-index: 30;
	}

	.meet-button {
		background-color: #F04E23;
		padding: 10px 20px 10px 20px;
		border-radius: 25px;
		box-shadow: 1px 2px 3px 2px #1c1a1a91;
		color: white;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
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
			gsap.timeline({
        scrollTrigger: {
          trigger: '.world-section',
          start: 'top bottom',
          scrub: true,
					end: "top top",
        }
      })
			.to(".world-section", {opacity:1})

			gsap.timeline({
        scrollTrigger: {
          trigger: '.achieve-section',
          start: 'top bottom',
          scrub: true,
					end: "top top",
        }
      })
			.to(".achieve-section", {opacity:1})

			gsap.timeline({
        scrollTrigger: {
          trigger: '.meet-section',
          start: 'top center',
          scrub: true,
					end: "top top",
        }
      })
			.to(".meet-left", {left:0})
		}
  };
  
  
  
</script>
  
  
  
  