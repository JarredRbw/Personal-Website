import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useLanguage } from '../i18n/language'
import './Photography.css'

// 摄影作品系列数据 - 根据实际文件夹结构组织
const photoSeries = [
  {
    id: 1,
    title: { en: 'City', zh: '城市系列' },
    category: 'city',
    coverImage: '/images/Assets/City/370f61d956d8e9e5abc2e1dbb8824179.JPG',
    images: [
      '/images/Assets/City/370f61d956d8e9e5abc2e1dbb8824179.JPG',
      '/images/Assets/City/684416b7f4ccbccff372a9a495ea41fe.JPG'
    ]
  },
  {
    id: 2,
    title: { en: 'Nature', zh: '自然系列' },
    category: 'nature',
    coverImage: '/images/Assets/Nature/1-1.jpg',
    images: [
      '/images/Assets/Nature/1-1.jpg',
      '/images/Assets/Nature/2-1.jpg',
      '/images/Assets/Nature/4-1.jpg'
    ]
  },
  {
    id: 3,
    title: { en: 'Hiking', zh: '徒步系列' },
    category: 'hiking',
    coverImage: '/images/Assets/Hiking/_DSC8637.JPG',
    images: [
      '/images/Assets/Hiking/_DSC8637.JPG',
      '/images/Assets/Hiking/_DSC8777.JPG',
      '/images/Assets/Hiking/_DSC8874.JPG'
    ]
  },
  {
    id: 4,
    title: { en: 'Museum', zh: '博物馆系列' },
    category: 'culture',
    coverImage: '/images/Assets/Human/Museum/_DSC9794.JPG',
    images: [
      '/images/Assets/Human/Museum/_DSC9794.JPG',
      '/images/Assets/Human/Museum/_DSC9802.JPG',
      '/images/Assets/Human/Museum/_DSC9833.JPG',
      '/images/Assets/Human/Museum/_DSC9837.JPG',
      '/images/Assets/Human/Museum/_DSC9839.JPG',
      '/images/Assets/Human/Museum/_DSC9844.JPG',
      '/images/Assets/Human/Museum/_DSC9858.JPG',
      '/images/Assets/Human/Museum/_DSC9861.JPG',
      '/images/Assets/Human/Museum/_DSC9897.JPG',
      '/images/Assets/Human/Museum/_DSC9924.JPG'
    ]
  },
  {
    id: 5,
    title: { en: 'Ancient Architecture', zh: '古建筑系列' },
    category: 'culture',
    coverImage: '/images/Assets/Human/Ancient Architecture/3-1.jpg',
    images: [
      '/images/Assets/Human/Ancient Architecture/3-1.jpg'
    ]
  }
]

const categories = [
  { id: 'all', label: { en: 'All', zh: '全部' } },
  { id: 'city', label: { en: 'City', zh: '城市' } },
  { id: 'nature', label: { en: 'Nature', zh: '自然' } },
  { id: 'hiking', label: { en: 'Hiking', zh: '徒步' } },
  { id: 'culture', label: { en: 'Culture', zh: '人文' } }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const Photography = () => {
  const { lang } = useLanguage()
  const [selectedSeries, setSelectedSeries] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredSeries = selectedCategory === 'all'
    ? photoSeries
    : photoSeries.filter(series => series.category === selectedCategory)

  // 打开详情时按 Esc 关闭，并锁定背景滚动
  useEffect(() => {
    if (!selectedSeries) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedSeries(null)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedSeries])

  const photoCount = (n) => (lang === 'en' ? `${n} photo${n > 1 ? 's' : ''}` : `${n} 张`)

  return (
    <div className="page-container">
      <div className="photography-container">
        <motion.div
          className="photography-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>{lang === 'en' ? 'Photography' : '摄影'}</h1>
          <p>{lang === 'en' ? 'Selected works' : '精选作品'}</p>
        </motion.div>

        {/* 分类筛选 */}
        <motion.div
          className="category-filter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label[lang]}
            </button>
          ))}
        </motion.div>

        {/* 作品网格 */}
        <motion.div
          className="photography-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={selectedCategory}
        >
          {filteredSeries.map((series) => (
            <motion.button
              key={series.id}
              type="button"
              className="photo-card"
              variants={itemVariants}
              onClick={() => setSelectedSeries(series)}
            >
              <div className="photo-image">
                <img src={series.coverImage} alt={series.title[lang]} loading="lazy" />
              </div>
              <div className="photo-title">
                <h3>{series.title[lang]}</h3>
                <span>{photoCount(series.images.length)}</span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* 系列详情，展示系列所有图片 */}
        <AnimatePresence>
          {selectedSeries && (
            <motion.div
              className="photo-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSeries(null)}
              role="dialog"
              aria-modal="true"
              aria-label={selectedSeries.title[lang]}
            >
              <motion.div
                className="modal-content"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  className="close-btn"
                  onClick={() => setSelectedSeries(null)}
                  aria-label={lang === 'en' ? 'Close' : '关闭'}
                >
                  <X size={24} />
                </button>

                <div className="modal-header">
                  <h2>{selectedSeries.title[lang]}</h2>
                </div>

                <div className="series-gallery">
                  {selectedSeries.images.map((imageUrl, index) => (
                    <motion.div
                      key={imageUrl}
                      className="series-image-item"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <img src={imageUrl} alt={`${selectedSeries.title[lang]} ${index + 1}`} loading="lazy" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Photography
