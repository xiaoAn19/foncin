<script setup lang="ts">
import homeBanner from '@/assets/home-banner.mp4'
</script>

<template>
  <div class="home-container">
    <!-- Header -->
    <!-- Hero Section -->
    <div class="hero-section-container">
      <section class="hero-section">
        <video class="hero-video" autoplay loop muted playsinline>
          <source :src="homeBanner" type="video/mp4">
        </video>
        <div class="hero-content">
          <h2 class="hero-title">循环视频</h2>
          <div class="hero-subtitle-group">
            <h3>From water</h3>
            <p>We weave（knit）a more sustainable future .</p>
          </div>
          <div class="scroll-indicator">
            <img src="@/assets/arrow-right.svg" alt="">
          </div>
        </div>
      </section>
    </div>

    <!-- Fabric Story Section -->
    <section class="story-section">
      <div class="story-content-wrapper">
        <!-- Intro Text -->
        <div class="story-intro">
          <div class="intro-left">
            <p>For nearly 40 years, we have been an integratedtextile mill -from yarn dyeing、 knitting, fabricdyeing to
              finished fabrics.
              <br>
              In the most water-intensive stage of production, westart with living water: investing in
              wastewatertreatment, heat recovery and biodegradable fabrics,to offer world-wide partners fabrics that are
              bothbeautiful and responsible.
            </p>
          </div>
          <div class="intro-right">
            <!-- Placeholder for Factory Image -->
            <div class="image-placeholder factory-image">
              <img src="@/assets/home1.webp" alt="">
            </div>
          </div>
        </div>

        <!-- Navigation/Tabs -->
        <div class="story-nav">
          <button class="nav-btn active">Explore Sustainability</button>
          <button class="nav-btn">Explore Our Fabrics</button>
          <button class="nav-btn">Explore Us</button>
        </div>

        <div class="story-content1">
          <img src="@/assets/home2.webp" alt="">
          <div>Yarn Weaving</div>
        </div>
        <div class="story-content2">
          <img src="@/assets/home3.webp" alt="">
          <div>Yarn inspection</div>
        </div>
        <div class="story-content3">
          <img src="@/assets/home4.webp" alt="">
          <div>Fabric weaving</div>
        </div>
        <div class="story-content4">
          <img src="@/assets/home5.webp" alt="">
          <div>Fabric Dyeing</div>
        </div>
        <div class="story-content5">
          <img src="@/assets/home6.webp" alt="">
          <div>Fabric</div>
        </div>

        <div class="story-content6">
          <img src="@/assets/home7.webp" alt="">
        </div>
        <!-- Sustainability Framework -->
        <div class="sustainability-footer">
          <h4>Our Sustainability Framework</h4>
          <p>We see sustainability as a complete system.</p>
          <p>Planet - reducing our impact on water and energy.</p>
          <p>Product - making fabrics more responsible, from materials to processes.</p>
          <p>People - ensuring everyone behind our fabrics is treated with care.</p>
        </div>
      </div>
    </section>

    <!-- Footer Indicator -->
    <footer class="footer-indicator">
      <img src="@/assets/arrow-top.svg" alt="">
    </footer>
  </div>
</template>

<style scoped lang="scss">
/* Layout Containers */
.home-container {
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f0;
  font-family: 'Inter', sans-serif;
  color: #4a4a4a;

  /* Ensure the main content doesn't exceed design width on huge screens,
     but usually for a 1920px design we want full width backgrounds with centered content.
     If the user implementation implies a fixed 1920px board, we can set max-width on specific inner containers. */
}



/* Hero Section */
.hero-section {
  height: 980px;
  width: 100%;
  background: #404040;
  /* Fallback color */
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  /* Ensure video doesn't spill out */

  &-container {
    width: 100%;
    display: flex;
    justify-items: center;

  }
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.hero-content {
  z-index: 10;
  /* Ensure content is above video */
  display: flex;
  /* Restore flex context if needed for children, or just inherit */
  flex-direction: column;
  align-items: center;
}

.hero-title {
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 2rem;
  letter-spacing: 5px;
}

.hero-subtitle-group {
  position: absolute;
  bottom: 159px;
  left: 50%;
  transform: translateX(-50%);
}

.hero-subtitle-group h3 {
  font-weight: 400;
  font-size: 40px;
  color: #FFFFFF;
  line-height: 50px;
}

.hero-subtitle-group p {
  font-size: 1rem;
  opacity: 0.9;
}

.scroll-indicator {
  position: absolute;
  bottom: 89px;
  width: 40px;
  height: 40px;
}

/* Story Section */
.story-section {
  width: 100%;
  padding: 4rem 0;
  /* Remove side padding from container, move to inner */
  position: relative;
  background-color: #f2f0eb;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.story-content-wrapper {
  position: relative;
  width: 1200px;
  height: 2600px;
  /* max-width removed as #app is constrained */
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url('@/assets/line.webp') no-repeat;
  background-size: 100% 100%;

}

.story-intro {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 163px;
  left: 127px;
  /* Optimized reading width for intro, within the 1920px canvas */
}

.intro-left {
  flex: 1;
  max-width: 400px;
  font-size: 0.9rem;
  line-height: 1.6;
}

.intro-right {
  flex: 1;
  display: flex;
  justify-content: center;
}

.image-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  border-radius: 4px;
}

.factory-image {
  width: 100%;
  max-width: 500px;
  /* Reasonable limit for the image */
  height: 232px;
  /* Taller for better visual */
}

/* Navigation Buttons */
.story-nav {
  position: absolute;
  top: 534px;
  left: 324px;
  display: flex;
  justify-content: center;
  gap: 30px;
}

.nav-btn {
  background: transparent;
  border: 1px solid #999;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-size: 0.8rem;
  cursor: pointer;
  color: #666;
  transition: all 0.3s;
}

.nav-btn:hover {
  background-color: #eee;
}

.nav-btn.active {
  background-color: #5d4a41;
  color: white;
  border-color: #5d4a41;
}

.story-content1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 858px;
  left: 340px;
}

.story-content2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 944px;
  left: 544px;
}

.story-content3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 1229px;
  left: 600px;
}

.story-content4 {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 1455px;
  left: 465px;
}

.story-content5 {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 1679px;
  left: 800px;
}

.story-content6 {
  position: absolute;
  top: 1966px;
  left: 20px;

  img {
    width: 500px;
    height: 284px;
  }
}

/* Simulated Red Thread */
.red-thread-path {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  background-color: #d9534f;
  transform: translateX(-50%);
  z-index: 0;
}

.process-step {
  z-index: 1;
  background-color: #f2f0eb;
  padding: 20px;
  /* More breathing room */
}

.icon-placeholder {
  width: 100px;
  /* Larger icons for 1920px */
  height: 100px;
  background-color: #e0e0e0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 0.8rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.section-title {
  font-weight: bold;
  color: #d9534f;
  background: #f2f0eb;
  z-index: 1;
  padding: 0 2rem;
  font-size: 1.2rem;
}

.intro-bottom {
  z-index: 1;
  background-color: #f2f0eb;
  padding: 20px;
}

.facility-image {
  width: 400px;
  /* Larger */
  height: 250px;
}

/* Footer Section specific to story */
.sustainability-footer {
  position: absolute;
  bottom: 163px;
  right: -95px;
  width: 400px;
  font-size: 14px;
  color: #666;
  background-color: #f2f0eb;
}

.sustainability-footer h4 {
  font-weight: bold;
  font-size: 20px;
  color: #5E4F46;
  line-height: 28px;
  text-align: left;
  margin-bottom: 45px;
}

.footer-indicator {
  text-align: center;
  padding: 2rem;
  background-color: #f2f0eb;
}
</style>
