// 全站共用的动画参数，保证各页面节奏一致
export const ease = [0.22, 1, 0.36, 1]

// 滚动到视口时淡入上移，只播放一次
export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease }
}

// 页面首屏内容：加载后直接播放
export const fadeUpOnLoad = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease }
}

// 首屏依次出现：父元素用 heroContainer，子元素用 heroItem
export const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } }
}

export const heroItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } }
}

// 同一组卡片依次出现；延迟封顶，避免靠后的卡片等太久
export const stagger = (i) => ({
  ...fadeUp,
  transition: { ...fadeUp.transition, delay: Math.min(i, 3) * 0.08 }
})

// 卡片悬停时轻微上浮
export const hoverLift = {
  whileHover: { y: -4, transition: { duration: 0.25, ease } }
}
