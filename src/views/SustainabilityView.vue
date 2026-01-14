<script setup lang="ts">
import { ref, computed } from 'vue'
import { useScrollToTop } from '@/composables/useScrollToTop'
import homeBanner from '@/assets/sus.mp4'
import { useI18n } from 'vue-i18n'

const { scrollToTop } = useScrollToTop()
const { tm, locale } = useI18n()



const videoRef = ref<HTMLVideoElement | null>(null)
const isMuted = ref(true)

const intro = computed(() => tm('sustain.intro') || {})
const water = computed(() => tm('sustain.water') || {})
const paper = computed(() => tm('sustain.paper') || {})
const fiber = computed(() => tm('sustain.fiber') || {})



const toggleSound = () => {
  if (videoRef.value) {
    videoRef.value.muted = !videoRef.value.muted
    isMuted.value = videoRef.value.muted
  }
}

const contentSection = ref<HTMLElement | null>(null)

</script>

<template>
  <div class="sustainability-container">
    <div class="hero-section-container">
      <section class="hero-section">
        <video class="hero-video" autoplay loop muted playsinline ref="videoRef">
          <source :src="homeBanner" type="video/mp4">
        </video>
        <div class="hero-content">
          <!-- <h2 class="hero-title">{{ $t('sustain.bannerTitle') }}</h2> -->
          <div class="hero-subtitle-group">
            <!-- <h3>{{ $t('sustain.bannerSubtitle') }}</h3>
            <p>{{ $t('sustain.bannerText') }}</p> -->
          </div>
          <!-- <div class="scroll-indicator" @click="scrollToContent">
            <img src="@/assets/arrow-right.svg" alt="">
          </div> -->
        </div>
        <button class="sound-control" @click="toggleSound">
          {{ isMuted ? 'SOUND ON' : 'SOUND OFF' }}
        </button>
      </section>
    </div>

    <section class="sustain-section" ref="contentSection">
      <!-- 1. 顶部文案 + 循环示意 -->
      <div class="intro-block" :class="{ 'zh-intro': locale === 'zh' }">
        <div class="intro-text" style="text-align: left;">
          <template v-if="intro.p1_1">
            <p class="p1-container">
              {{ intro.p1_1 }}
              <span class="inline-separator"></span>
            </p>
            <p>{{ intro.p1_2 }}</p>
          </template>
          <p v-else>{{ $t('sustain.intro.p1') }}</p>
          <p>{{ $t('sustain.intro.p2') }}</p>
          <p>{{ $t('sustain.intro.p3') }}</p>
          <p>{{ $t('sustain.intro.p4') }}</p>

          <template v-if="intro.p5t">
            <div style="margin-top: 24px;">
              <p><strong>{{ intro.p5t }}</strong></p>
              <p>{{ intro.p5d }}</p>
            </div>
            <div style="margin-top: 24px;">
              <p><strong>{{ intro.p6t }}</strong></p>
              <p>{{ intro.p6d }}</p>
            </div>
            <div style="margin-top: 24px;">
              <p><strong>{{ intro.p7t }}</strong></p>
              <p>{{ intro.p7d }}</p>
            </div>
          </template>
          <template v-else>
            <p>{{ $t('sustain.intro.p5') }}</p>
            <p>{{ $t('sustain.intro.p6') }}</p>
            <p>{{ $t('sustain.intro.p7') }}</p>
          </template>
        </div>

        <div class="cycle-diagram">
          <div class="diagram-placeholder">
            <img src="@/assets/sub1.webp" alt="">
          </div>
        </div>
      </div>

      <!-- 2. Circular Water -->
      <div class="content-block">
        <div class="image">
          <div class="img-placeholder" style="display: block;">
            <img src="@/assets/sub2.webp" alt="">
          </div>
        </div>
        <div class="text">
          <h3>{{ $t('sustain.water.title') }}</h3>
          <div class="text-block">
            <p v-if="water.desc" style="white-space: pre-line;">{{ water.desc }}</p>
            <p v-if="water.p1">{{ $t('sustain.water.p1') }}</p>
            <p v-if="water.p2">{{ $t('sustain.water.p2') }}</p>
            <p v-if="water.p3">{{ $t('sustain.water.p3') }}</p>
            <p v-if="water.p4">{{ $t('sustain.water.p4') }}</p>
            <p v-if="water.p5">{{ $t('sustain.water.p5') }}</p>
            <p v-if="water.p6">{{ $t('sustain.water.p6') }}</p>
          </div>
        </div>
      </div>

      <!-- 3. Paper Journey -->
      <div class="center-block">
        <h3 :style="{ textAlign: locale === 'zh' ? 'center' : 'left' }">
          {{
            $t('sustain.paper.title') }}</h3>
        <div>
          <p v-if="paper.p1">{{ $t('sustain.paper.p1') }}</p>
          <p v-if="paper.p2">{{ $t('sustain.paper.p2') }}</p>
          <p v-if="paper.p3">{{ $t('sustain.paper.p3') }}</p>
          <p v-if="paper.p4">{{ $t('sustain.paper.p4') }}</p>
        </div>

        <div class="wide-image">
          <div class="img-placeholder">
            <img style="width: 100%;height: 900px;" src="@/assets/sustainability.png" alt="">
          </div>
        </div>
      </div>

      <!-- 4. Fiber Illustration -->
      <div class="content-block reverse">
        <div class="image">
          <div class="img-placeholder"><img src="@/assets/sub3.webp" alt=""></div>
        </div>
        <div class="text">
          <div>
            <p v-if="fiber.desc" style="white-space: pre-line;">{{ fiber.desc }}</p>
            <p v-if="fiber.p1">{{ $t('sustain.fiber.p1') }}</p>
            <p v-if="fiber.p2">{{ $t('sustain.fiber.p2') }}</p>
          </div>
        </div>
      </div>

      <!-- 5. Growing Together -->
      <div class="content-block">
        <div class="image">
          <div class="img-placeholder"><img class="growing" src="@/assets/sub4.webp" alt=""></div>
        </div>
        <div class="text">
          <h3>{{ $t('sustain.growth.title') }}</h3>
          <div style="white-space: pre-line;">
            {{ $t('sustain.growth.text') }}
          </div>
        </div>
      </div>

      <!-- 6. Factory -->
      <div class="content-block reverse">
        <div class="image">
          <div class="img-placeholder"><img src="@/assets/sub5.webp" alt=""></div>
        </div>
        <div class="text">
          <h3>{{ $t('sustain.factory.title') }}</h3>
          <div style="white-space: pre-line;">
            {{ $t('sustain.factory.text') }}
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Indicator -->
    <footer class="footer-indicator" @click="scrollToTop">
      <img src="@/assets/arrow-top.svg" alt="">
    </footer>
  </div>
</template>

<style scoped lang="scss">
.sustainability-container {
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f0;
  color: #4a4a4a;
}

/* Hero Section */
.hero-section {
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
  position: relative;
  width: 100%;
  height: auto;
  display: block;
  z-index: 0;
}

.hero-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  /* Ensure content is above video */
  display: flex;
  /* Restore flex context if needed for children, or just inherit */
  flex-direction: column;
  align-items: center;
  pointer-events: none;
}

.hero-content>* {
  pointer-events: auto;
}

.hero-title {
  font-size: 3rem;
  font-weight: 300;
  letter-spacing: 5px;
}

.hero-subtitle-group {
  position: absolute;
  bottom: 159px;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    bottom: 90px;
    width: 90%;
  }
}

.hero-subtitle-group h3 {
  font-weight: 400;
  font-size: 40px;
  color: #FFFFFF;
  line-height: 50px;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: normal;
  }
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
  cursor: pointer;

  @media (max-width: 768px) {
    bottom: 30px;
    display: none;
  }
}

.sound-control {
  position: absolute;
  bottom: 40px;
  right: 40px;
  z-index: 20;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 12px;
  letter-spacing: 1px;
  backdrop-filter: blur(4px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 768px) {
    padding: 4px 10px;
    font-size: 10px;
    bottom: 20px;
    right: 20px;
  }
}

$bg: #f2f0eb;
$text-main: #333;
$text-sub: #777;

.sustain-section {
  background: $bg;
  padding: 120px 0 160px;
  color: $text-main;

  @media (max-width: 768px) {
    padding: 40px 0 60px;
  }
}

/* 通用图片占位 */
.img-placeholder,
.diagram-placeholder {
  color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
  font-size: 13px;

  .growing {
    width: 500px;
    height: 376px;
  }
}

/* 1. 顶部 */
.intro-block {
  max-width: 1080px;
  margin: 0 auto 300px;
  text-align: center;
}

.intro-text {
  font-weight: 400;
  font-size: 14px;
  color: #5E4F46;
  margin-bottom: 80px;

  p {
    margin-bottom: 10px
  }
}

.cycle-diagram {
  max-width: 520px;
  margin: 0 auto;

  .diagram-placeholder {
    width: 100%;
    // aspect-ratio: 1 / 1;

    img {
      width: 632px;
      height: 681px;
      max-width: unset;
    }
  }
}

@media (min-width: 769px) {
  .intro-block.zh-intro {
    max-width: 1080px;
    display: flex;
    align-items: flex-start;

    /* gap: 80px; */
    .intro-text {
      margin-right: 80px;
    }

    .intro-text {
      flex: 1;
      margin-bottom: 0;
    }

    .cycle-diagram {
      flex: 1;
      margin: 0;
      margin-top: 100px;
    }
  }
}

/* 通用左右图文块 */
.content-block {
  max-width: 1080px;
  margin: 0 auto 300px;
  display: flex;
  /* gap: 120px; */
  /* margin handled in children */
  align-items: flex-start;

  &.reverse {
    flex-direction: row-reverse;
  }

  font-weight: 400;
  font-size: 14px;
  color: #5E4F46;
  line-height: 28px;
  text-align: left;

  &:last-child {
    margin-bottom: 0;
  }
}

.image {
  flex: 0 0 420px;

  .img-placeholder {
    @media screen and (max-width: 768px) {
      /* aspect-ratio: unset; */
      height: auto;
      padding-bottom: 0;
    }
  }

  /* Gap replacement */
  .content-block:not(.reverse) & {
    margin-right: 120px;
  }

  .content-block.reverse & {
    margin-left: 120px;
  }
}

.text {
  flex: 1;
  padding-top: 40px;

  h3 {
    font-weight: bold;
    font-size: 20px;
    color: #5E4F46;
    line-height: 30px;
    margin-bottom: 24px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    color: #5E4F46;
  }

  &-block {
    p {
      margin-bottom: 10px;
    }
  }
}

/* 居中块 */
.center-block {
  max-width: 1080px;
  margin: 0 auto 250px;

  h3 {
    font-weight: bold;
    font-size: 20px;
    color: #5E4F46;
    line-height: 30px;
    margin-bottom: 30px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    color: #5E4F46;
    line-height: 28px;
  }
}

.wide-image {
  margin-top: 100px;

  .img-placeholder {
    width: 100%;
  }
}

/* 底部圆点 */
.bottom-dot {
  display: flex;
  justify-content: center;

  span {
    width: 8px;
    height: 8px;
    border: 1px solid #999;
    border-radius: 50%;
  }
}

/* 响应式 */
@media (max-width: 768px) {
  .content-block {
    flex-direction: column-reverse !important;

    /* gap: 40px; */
    .image {
      margin-right: 0 !important;
      margin-left: 0 !important;
      margin-top: 40px;
    }

    padding: 0 24px;
    margin: 0 auto 120px;
  }

  .image {
    flex: none;
    width: 100%;
  }

  .intro-block,
  .center-block {
    padding: 0 24px;
    margin: 0 auto 120px;
  }

  .diagram-placeholder {
    img {
      width: 100% !important;
      height: auto !important;
      object-fit: contain;
    }
  }

  .img-placeholder {
    img {
      width: 100% !important;
      height: auto !important;
      object-fit: contain;
    }
  }
}

.footer-indicator {
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  padding-bottom: 150px;
  background-color: #f2f0eb;
}

@media screen and (max-width: 768px) {
  .footer-indicator {
    padding-bottom: 50px;
  }
}

@media (max-width: 768px) {
  .story-item {
    flex-direction: column !important;

    /* gap: 40px; */
    >*:not(:last-child) {
      margin-bottom: 40px;
    }

    padding: 0 24px;
  }

  .story-image {
    flex: none;
    width: 100%;
  }
}

.intro-text .p1-container {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
}

.inline-separator {
  display: inline-block;
  width: 25px;
  height: 1px;
  background-color: #5E4F46;
}
</style>
