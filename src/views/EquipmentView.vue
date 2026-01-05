<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Rellax from 'rellax'
import { onMounted, onUnmounted, ref } from 'vue'
import eq1 from '@/assets/eq1.webp'
import eq2 from '@/assets/eq2.webp'
import eq3 from '@/assets/eq3.webp'
import eq4 from '@/assets/eq4.webp'
import eq5 from '@/assets/eq5.webp'
import eq6 from '@/assets/eq6.webp'

import { useScrollToTop } from '@/composables/useScrollToTop'

const { tm } = useI18n()
const { scrollToTop } = useScrollToTop()

const rellaxInstance = ref<Rellax.RellaxInstance | null>(null)

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

const eqImages = [eq1, eq2, eq3, eq4, eq5]

const formatText = (text: string) => {
  if (!text) return []
  return text
    .replace(/([，,])\s*\n+\s*/g, '$1') // Remove newlines after commas
    .replace(/([。\.])\s*/g, '$1\n')    // Ensure newlines after periods
    .split('\n')
    .map(t => t.trim())
    .filter(t => t)
}

const blocks = computed(() => {
  const list = tm('equipment.list') as { title: string }[] || []
  return list.map((item, index) => ({
    paragraphs: formatText(item.title),
    img: eqImages[index] || eqImages[0]
  }))
})

const footerTitleLines = computed(() => {
  return formatText(tm('equipment.footerTitle') as string)
})

const footerTitle2Lines = computed(() => {
  return formatText(tm('equipment.footerTitle2') as string)
})
const contentSection = ref<HTMLElement | null>(null)

const scrollToContent = () => {
  contentSection.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="home-container">
    <!-- Hero Section -->
    <div class="hero-section-container">
      <section class="hero-section">
        <div class="hero-content">
          <!-- <h2 class="hero-title">Equipment</h2> -->
          <div class="hero-subtitle-group">
            <h3>{{ $t('equipment.bannerTitle') }}</h3>
            <p>{{ $t('equipment.bannerDesc') }}</p>
          </div>
          <div class="scroll-indicator" @click="scrollToContent">
            <img src="@/assets/arrow-right.svg" alt="">
          </div>
        </div>
      </section>
    </div>

    <!-- Fabric Story Section -->
    <section class="equipment" ref="contentSection">

      <!-- 图文块 -->
      <div v-for="(item, index) in blocks" :key="index" class="block reveal active"
        :class="{ reverse: index % 2 === 1 }">
        <div class="text rellax" data-rellax-speed="-2">
          <span class="line"></span>
          <p v-for="(p, i) in item.paragraphs" :key="i">{{ p }}</p>
        </div>

        <div class="image rellax" data-rellax-speed="4">
          <div class="img-placeholder">
            <img :src="item.img" alt="">
          </div>
        </div>
      </div>

      <!-- 中间大图 -->
      <div class="wide-image reveal active">
        <div class="reveal active" style="text-align: right;margin-bottom: 100px;">
          <div style="display: flex;justify-content: flex-end;"><span class="line"></span></div>
          <div style="text-align: right;">
            <p v-for="(p, i) in footerTitleLines" :key="i">
              {{ p }}
            </p>
          </div>
        </div>
        <div class="img-placeholder"><img :src="eq6" alt=""></div>
        <div class="reveal active" style="text-align: left;margin-top: 100px;">
          <span class="line"></span>
          <div style="text-align: left;">
            <p v-for="(p, i) in footerTitle2Lines" :key="i">
              {{ p }}
            </p>
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
/* Layout Containers */
.home-container {
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f0;
  font-family: 'Inter', sans-serif;
  color: #4a4a4a;
}

/* Hero Section */
.hero-section {
  height: 980px;
  width: 100%;
  background: url('@/assets/eqbannber.webp') no-repeat;
  background-size: cover;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;

  &-container {
    width: 100%;
    display: flex;
    justify-items: center;
  }

  @media (max-width: 768px) {
    height: 400px;
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
  display: flex;
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
}

$bg: #f0efeb;
$text-main: #333;
$text-sub: #777;

.equipment {
  background: $bg;
  padding: 140px 0 160px;
}

/* 滚动动效 */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.9s ease;

  &.active {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Intro */
.intro {
  text-align: center;
  margin-bottom: 160px;

  p {
    font-size: 16px;
    line-height: 2;
    color: $text-main;
    letter-spacing: 0.5px;
  }
}

/* 图文块 */
.block {
  max-width: 1080px;
  margin: 0 auto 220px;
  display: flex;
  gap: 120px;
  align-items: flex-start;

  &.reverse {
    flex-direction: row-reverse;
  }
}

.text {
  flex: 1;

  .line {
    display: block;
    width: 58px;
    height: 1px;
    background: #5E4F46;
    margin-bottom: 24px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    color: #5E4F46;
    line-height: 28px;
    margin-bottom: 24px;
  }
}

.image {
  flex: 0 0 420px;
  padding-top: 40px;

  .img-placeholder {
    width: 100%;
    color: #999;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 2px;
    font-size: 13px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}

/* 中间大图 */
.wide-image {
  max-width: 1080px;
  margin: 0 auto 140px;

  .img-placeholder {
    width: 100%;
    display: flex;
    align-items: center;
    color: #5E4F46;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .line {
    display: block;
    width: 58px;
    height: 1px;
    background: #5E4F46;
    margin-bottom: 24px;
  }

  p {
    margin-bottom: 24px;
  }
}

/* 结尾 */
.ending {
  max-width: 520px;
  margin: 0 auto 120px;
  text-align: center;

  p {
    font-size: 13px;
    line-height: 2;
    color: $text-sub;
  }
}

/* 响应式 */
@media (max-width: 768px) {
  .block {
    flex-direction: column !important;
    gap: 40px;
    padding: 0 24px;
    margin: 0 auto 120px;
  }

  .image {
    flex: none;
    width: 100%;
  }

  .intro,
  .ending {
    padding: 0 24px;
  }

  .wide-image {
    padding: 0 24px;
  }
}

.footer-indicator {
  cursor: pointer;
  text-align: center;
  padding: 2rem;
  background-color: #f2f0eb;
}
</style>
