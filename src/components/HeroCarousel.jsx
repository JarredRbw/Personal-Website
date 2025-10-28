import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import './HeroCarousel.css'

const HeroCarousel = ({ images }) => {
  const containerRef = useRef(null)
  const [mouseX, setMouseX] = useState(0)
  
  // 使用 useMotionValue 追踪鼠标
  const x = useMotionValue(0)
  const smoothX = useSpring(x, { stiffness: 300, damping: 30 })

  // 监听鼠标移动
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const mouseXPercent = ((e.clientX - rect.left) / rect.width) * 100
        
        // 将鼠标位置转换为图片偏移量
        // 鼠标在左边时显示第一张，在右边时显示第二张
        const maxOffset = (images.length - 1) * -100
        const offset = ((mouseXPercent - 50) / 50) * maxOffset * 0.5
        
        x.set(offset)
        setMouseX(e.clientX)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      return () => container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [images.length, x])

  return (
    <div className="hero-carousel" ref={containerRef} style={{ '--image-count': images.length }}>
      {/* 图片容器 - 随鼠标移动 */}
      <motion.div
        className="hero-images-container"
        style={{ x: smoothX }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="hero-image"
          >
            <img src={image.url} alt={image.title} />
            <div className="image-overlay" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default HeroCarousel
