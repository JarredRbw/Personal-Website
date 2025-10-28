import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './HeroCarousel.css'

const HeroCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  // 移除自动轮播，只响应鼠标/触摸滑动

  // 切换到下一张
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  // 切换到上一张
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  // 触摸事件处理
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextImage()
    }
    if (isRightSwipe) {
      prevImage()
    }

    setTouchStart(null)
    setTouchEnd(null)
  }

  // 鼠标拖拽处理
  const handleMouseDown = (e) => {
    setTouchStart(e.clientX)
  }

  const handleMouseMove = (e) => {
    if (touchStart !== null) {
      setTouchEnd(e.clientX)
    }
  }

  const handleMouseUp = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextImage()
    }
    if (isRightSwipe) {
      prevImage()
    }

    setTouchStart(null)
    setTouchEnd(null)
  }

  return (
    <div
      className="hero-carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* 图片背景 - 使用滑动切换 */}
      <motion.div
        className="hero-images-container"
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="hero-image"
          >
            <img src={image.url} alt={image.title} />
            <div className="image-overlay" />
          </motion.div>
        ))}
      </motion.div>

      {/* 导航按钮 */}
      <button className="nav-button nav-button-left" onClick={prevImage}>
        <ChevronLeft size={32} />
      </button>
      <button className="nav-button nav-button-right" onClick={nextImage}>
        <ChevronRight size={32} />
      </button>

    </div>
  )
}

export default HeroCarousel
