import { useState, useEffect } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './HeroCarousel.css'

const HeroCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // 使用 useMotionValue 跟踪拖动
  const x = useMotionValue(currentIndex * -100)

  // 拖动结束
  const handleDragEnd = (event, info) => {
    const threshold = 50
    
    if (info.offset.x > threshold && currentIndex > 0) {
      // 向右拖动，显示上一张
      const newIndex = currentIndex - 1
      setCurrentIndex(newIndex)
    } else if (info.offset.x < -threshold && currentIndex < images.length - 1) {
      // 向左拖动，显示下一张
      const newIndex = currentIndex + 1
      setCurrentIndex(newIndex)
    }
  }

  // 监听 currentIndex 变化，更新位置
  useEffect(() => {
    x.set(currentIndex * -100)
  }, [currentIndex, x])

  // 切换到下一张
  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  // 切换到上一张
  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <div className="hero-carousel" style={{ '--image-count': images.length }}>
      {/* 图片容器 - 使用 draggable */}
      <motion.div
        className="hero-images-container"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
        animate={{ x: `${currentIndex * -100}%` }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
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

      {/* 导航按钮 */}
      <button 
        className="nav-button nav-button-left" 
        onClick={prevImage}
        disabled={currentIndex === 0}
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        className="nav-button nav-button-right" 
        onClick={nextImage}
        disabled={currentIndex === images.length - 1}
      >
        <ChevronRight size={32} />
      </button>
    </div>
  )
}

export default HeroCarousel
