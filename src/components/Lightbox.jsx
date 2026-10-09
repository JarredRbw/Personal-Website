import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import './Lightbox.css'

// 全屏看图：左右切换、键盘方向键、手机左右滑动、Esc 关闭
const Lightbox = ({ items, index, onClose, onChange, labels }) => {
  const [loaded, setLoaded] = useState(false)
  const touchStartX = useRef(null)
  const item = items[index]
  const count = items.length

  const go = (step) => {
    setLoaded(false)
    onChange((index + step + count) % count)
  }

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  })

  // 预加载前后两张大图，切换时不用等
  useEffect(() => {
    ;[1, -1].forEach((step) => {
      const next = items[(index + step + count) % count]
      const img = new Image()
      img.src = next.src
    })
  }, [index, items, count])

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
    touchStartX.current = null
  }

  return (
    <motion.div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="lightbox-top" onClick={(e) => e.stopPropagation()}>
        <span className="lightbox-meta">
          {labels.category(item.category)}
          <span className="lightbox-count">{index + 1} / {count}</span>
        </span>
        <button type="button" className="lightbox-btn" onClick={onClose} aria-label={labels.close}>
          <X size={22} />
        </button>
      </div>

      <div className="lightbox-stage">
        <AnimatePresence mode="wait">
          <motion.div
            key={item.src}
            className="lightbox-frame"
            style={{ aspectRatio: `${item.w} / ${item.h}` }}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* 先显示已缓存的缩略图，大图加载完再覆盖 */}
            <img className="lightbox-thumb" src={item.thumb} alt="" aria-hidden="true" />
            <img
              className={`lightbox-full ${loaded ? 'is-loaded' : ''}`}
              src={item.src}
              alt={item.alt}
              onLoad={() => setLoaded(true)}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            className="lightbox-btn lightbox-nav lightbox-prev"
            onClick={(e) => { e.stopPropagation(); go(-1) }}
            aria-label={labels.prev}
          >
            <ChevronLeft size={28} />
          </button>
          <button
            type="button"
            className="lightbox-btn lightbox-nav lightbox-next"
            onClick={(e) => { e.stopPropagation(); go(1) }}
            aria-label={labels.next}
          >
            <ChevronRight size={28} />
          </button>
        </>
      )}
    </motion.div>
  )
}

export default Lightbox
