export function useScrollToTop() {
  const scrollToTop = () => {
    // 1. Window scroll with smooth behavior (best effort)
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch {
      window.scrollTo(0, 0)
    }

    // 2. Force reset standard containers (instant)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0

    // 3. Check specific app containers (handling overflow: hidden/auto on wrappers)
    const app = document.getElementById('app')
    if (app) {
      app.scrollTop = 0
    }

    // 4. Delayed backup to handle race conditions or async layout shifts
    setTimeout(() => {
      window.scrollTo(0, 0)
      if (document.documentElement) document.documentElement.scrollTop = 0
      if (document.body) document.body.scrollTop = 0
    }, 50)
  }

  return {
    scrollToTop,
  }
}
