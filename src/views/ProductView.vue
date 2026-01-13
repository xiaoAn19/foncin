<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollToTop } from '@/composables/useScrollToTop'
import product1 from '@/assets/product1.png'
import product2 from '@/assets/product2.png'
import product3 from '@/assets/product3.png'
import product4 from '@/assets/product4.png'
import productBanner from '@/assets/product-banner.webp'

const { tm } = useI18n()
const { scrollToTop } = useScrollToTop()

const imgList = [product1, product2, product3, product4]

const productList = computed(() => {
  return tm('product.productList') as { title: string }[] || []
})

const introText = computed(() => {
  return productList.value[0]?.title || ''
})

const products = computed(() => {
  const list = productList.value.slice(1)
  return list.map((item, index) => ({
    title: item.title,
    img: imgList[index] || imgList[0]
  }))
})

const contentSection = ref<HTMLElement | null>(null)

const scrollToContent = () => {
  contentSection.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="product-container">

    <div class="hero-section-container">
      <section class="hero-section">
        <img :src="productBanner" class="hero-image" alt="Product Banner">
        <div class="hero-content">
          <div class="hero-subtitle-group">
            <h3>{{ $t('product.bannerTitle') }}</h3>
            <p>{{ $t('product.bannerDesc') }}</p>
          </div>
          <div class="scroll-indicator" @click="scrollToContent">
            <img src="@/assets/arrow-right.svg" alt="">
          </div>
        </div>
      </section>
    </div>

    <!-- Product List Section -->
    <section class="product-section" ref="contentSection">
      <!-- 顶部说明文案 -->
      <div class="intro">
        <p>
          {{ introText }}
        </p>
      </div>

      <!-- 产品列表 -->
      <div class="product-item" v-for="(item, index) in products" :key="index">
        <div class="image-wrap">
          <div class="product-image">
            <img :src="item.img" :alt="item.title">
          </div>
        </div>
        <p class="caption">{{ item.title }}</p>
      </div>

    </section>

    <!-- Footer Indicator -->
    <footer class="footer-indicator" @click="scrollToTop">
      <img src="@/assets/arrow-top.svg" alt="">
    </footer>
  </div>
</template>

<style scoped lang="scss">
.product-container {
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f0;
  color: #4a4a4a;
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



.hero-section {
  height: calc(100vh - 100px);
  width: 100%;
  /* background: url('@/assets/product-banner.webp') no-repeat center center; */
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

  @media (max-width: 768px) {
    height: 210px;
  }
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
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

  @media (max-width: 768px) {
    bottom: 30px;
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

$product-bg: #f2f0eb;
$text-main: #333;
$text-sub: #777;

.product-section {
  background: $product-bg;
  padding: 160px 0 120px;
}

/* 顶部文案 */
.intro {
  max-width: 520px;
  margin: 0 auto 140px;
  text-align: center;

  p {
    font-weight: 400;
    font-size: 14px;
    color: #5E4F46;
    line-height: 28px;
    letter-spacing: 0.3px;
  }
}

/* 单个产品块 */
.product-item {
  margin-bottom: 140px;
  text-align: center;
}

/* 图片区域 */
.image-wrap {
  max-width: 960px;
  margin: 0 auto;
}

.product-image {
  width: 100%;
  height: 428px;

  img {
    width: 100%;
    height: 100%;
  }
}

.img-placeholder {
  width: 100%;
  aspect-ratio: 16 / 7;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaa;
  font-size: 14px;
  letter-spacing: 2px;
}

/* 图片下方文字 */
.caption {
  margin-top: 24px;
  font-weight: 400;
  font-size: 20px;
  color: #5E4F46;
  line-height: 28px;
}

/* 底部按钮 */
.scroll-top {
  margin-top: 80px;
  display: flex;
  justify-content: center;

  span {
    width: 32px;
    height: 32px;
    border: 1px solid #999;
    border-radius: 50%;
    font-size: 14px;
    color: #666;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      border-color: #333;
      color: #333;
    }
  }
}

/* 响应式 */
@media (max-width: 1024px) {
  .image-wrap {
    padding: 0px;
  }
}

@media (max-width: 768px) {
  .product-section {
    padding: 120px 0 80px;
  }

  .intro {
    margin-bottom: 100px;
    padding: 0 24px;
  }

  .product-item {
    margin-bottom: 100px;
  }
}

.footer-indicator {
  cursor: pointer;
  text-align: center;
  padding: 2rem;
  background-color: #f2f0eb;
}

@media (max-width: 768px) {
  .product-item {
    flex-direction: column !important;
    gap: 40px;
    padding: 0 24px;
  }

  .product-image {
    flex: none;
    width: 100%;
    height: 200px;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
