<script setup lang="ts">
import homeBanner from '@/assets/story.mp4'
import Rellax from 'rellax'
import { onMounted, onUnmounted, ref } from 'vue'
import about1 from '@/assets/about1.png'
import about2 from '@/assets/about2.png'
import about3 from '@/assets/about3.png'
import about4 from '@/assets/about4.png'
import about5 from '@/assets/about5.png'
import about6 from '@/assets/about6.png'
import about7 from '@/assets/about7.png'
import about8 from '@/assets/about8.png'
import about9 from '@/assets/about9.png'
import about10 from '@/assets/about10.png'

const rellaxInstance = ref<Rellax.RellaxInstance | null>(null)
const videoRef = ref<HTMLVideoElement | null>(null)
const isMuted = ref(true)

import { useScrollToTop } from '@/composables/useScrollToTop'

const { scrollToTop } = useScrollToTop()

const toggleSound = () => {
  if (videoRef.value) {
    videoRef.value.muted = !videoRef.value.muted
    isMuted.value = videoRef.value.muted
  }
}

onMounted(() => {
  if (window.innerWidth > 768) {
    rellaxInstance.value = new Rellax('.rellax', {
      center: true
    })

    // 延迟刷新以确保布局和图片高度稳定，解决底部偏移偏差
    setTimeout(() => {
      rellaxInstance.value?.refresh()
    }, 500)
  }
})

onUnmounted(() => {
  if (rellaxInstance.value) {
    rellaxInstance.value.destroy()
  }
})

import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()

type StoryItem = {
  title: string
  paragraphs: string
}

const storyImages = [
  about1, about2, about3, about4, about5,
  about6, about7, about8, about9, about10
]

const stories = computed(() => {
  const localizedStories = tm('about.storyintorduce') as StoryItem[] || []
  return localizedStories.map((story, index) => ({
    title: story.title.replace(/(\d{4}\s*年[，,])/, '$1<br>'),
    paragraphs: story.paragraphs ? story.paragraphs.split('\n') : [],
    image: storyImages[index] || storyImages[0] // Fallback image if index out of bounds
  }))
})

const contentSection = ref<HTMLElement | null>(null)

const scrollToContent = () => {
  contentSection.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="home-container">
    <!-- Header -->
    <!-- Hero Section -->
    <div class="hero-section-container">
      <section class="hero-section">
        <video class="hero-video" autoplay loop muted playsinline ref="videoRef">
          <source :src="homeBanner" type="video/mp4">
        </video>
        <div class="hero-content">
          <!-- <h2 class="hero-title">循环视频</h2> -->
          <!-- <div class="hero-subtitle-group">
            <h3>From water</h3>
            <p>We weave（knit）a more sustainable future .</p>
          </div> -->
          <!-- <div class="scroll-indicator" @click="scrollToContent">
            <img src="@/assets/arrow-right.svg" alt="">
          </div> -->
        </div>
        <button class="sound-control" @click="toggleSound">
          {{ isMuted ? $t('homePage.soundOn') : $t('homePage.soundOff') }}
        </button>
      </section>
    </div>

    <!-- Fabric Story Section -->
    <section class="story-section" ref="contentSection">
      <div class="story-item" v-for="(item, index) in stories" :key="index" :class="{ reverse: index % 2 === 0 }">
        <!-- 图片 -->
        <div class="story-image rellax" data-rellax-speed="4">
          <div class="img-placeholder">
            <img :src="item.image" alt="">
          </div>
        </div>

        <!-- 文案 -->
        <div class="story-content rellax" data-rellax-speed="-2">
          <span class="line"></span>
          <h3 class="story-title" v-html="item.title"></h3>
          <p class="story-text" v-for="(p, i) in item.paragraphs" :key="i">
            {{ p }}
          </p>
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
/* Layout Containers */
.home-container {
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f0;
  color: #4a4a4a;

  /* Ensure the main content doesn't exceed design width on huge screens,
     but usually for a 1920px design we want full width backgrounds with centered content.
     If the user implementation implies a fixed 1920px board, we can set max-width on specific inner containers. */
}



/* Hero Section */
.hero-section {
  width: 100%;
  position: relative;
  overflow: hidden;

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
  margin-bottom: 2rem;
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

/* Story Section */
.story-section {
  background-color: #f2f0eb;
  padding: 120px 0 160px;
}

/* 单个故事块 */
.story-item {
  max-width: 1080px;
  margin: 0 auto 220px;
  display: flex;
  // align-items: flex-start;
  gap: 120px;

  &.reverse {
    flex-direction: row-reverse;
  }
}

/* 图片区域 */
.story-image {
  flex: 0 0 420px;

  .img-placeholder {
    width: 100%;
    aspect-ratio: 4 / 5;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
    font-size: 14px;
    letter-spacing: 2px;
  }
}

/* 文案区域 */
.story-content {
  flex: 1;
  padding-top: 100px;
}

.line {
  display: block;
  width: 58px;
  height: 1px;
  background: #5E4F46;
  margin-bottom: 24px;
}

.story-title {
  letter-spacing: 1px;
  margin-bottom: 28px;
  font-weight: bold;
  font-size: 20px;
  color: #5E4F46;
}

.story-text {
  font-size: 14px;
  line-height: 2;
  color: #666;
  margin-bottom: 18px;
}

/* 底部小圆点 */
.end-dot {
  display: flex;
  justify-content: center;
  margin-top: 60px;

  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid #999;
  }
}

/* 响应式 */
@media (max-width: 1024px) {
  .story-item {
    gap: 60px;
    padding: 0 24px;
  }
}

@media (max-width: 768px) {
  .story-item {
    flex-direction: column !important;
    gap: 40px;
    margin: 0 auto 300px;
  }

  .story-image {
    flex: none;
    width: 100%;

    .img-placeholder {
      overflow: hidden;
      aspect-ratio: unset;
    }
  }

  .story-content {
    padding-top: 0;
  }

  .story-section {
    background-color: #f2f0eb;
    padding: 20px 0 80px;
  }
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
  cursor: pointer;
  text-align: center;
  padding: 2rem;
  background-color: #f2f0eb;
}
</style>
