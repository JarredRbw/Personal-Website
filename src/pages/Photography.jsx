import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText } from 'lucide-react'
import Lightbox from '../components/Lightbox'
import { photos, photoCategories } from '../data/photos'
import { contact } from '../data/profile'
import { useLanguage } from '../i18n/language'
import './Photography.css'

const copy = {
  en: {
    title: 'Photography',
    intro: 'Architecture, street scenes, landscapes and live events. Click any photo to view it full screen.',
    all: 'All',
    resume: 'Photography resume',
    close: 'Close',
    prev: 'Previous photo',
    next: 'Next photo'
  },
  zh: {
    title: '摄影',
    intro: '建筑、街拍、风光和现场活动。点击任意照片可全屏浏览。',
    all: '全部',
    resume: '摄影方向简历',
    close: '关闭',
    prev: '上一张',
    next: '下一张'
  }
}

const PhotoGrid = ({ items, onOpen }) => (
  <div className="masonry">
    {items.map((photo) => (
      // 不用滚动进入视口的淡入动画：Safari 在多栏布局里检测不准，照片会一直透明
      <button
        key={photo.src}
        type="button"
        className="masonry-item"
        onClick={() => onOpen(photo)}
      >
        <img
          src={photo.thumb}
          alt={photo.alt}
          width={photo.w}
          height={photo.h}
          loading="lazy"
          decoding="async"
        />
      </button>
    ))}
  </div>
)

const Photography = () => {
  const { lang } = useLanguage()
  const c = copy[lang]
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [openIndex, setOpenIndex] = useState(null)

  const categoryLabel = (id) => photoCategories.find((cat) => cat.id === id)?.label[lang] ?? id
  const inCategory = (id) => photos.filter((p) => p.category === id)

  // 看图时按当前筛选结果的顺序前后翻
  const visiblePhotos = useMemo(
    () => (selectedCategory === 'all' ? photos : photos.filter((p) => p.category === selectedCategory)),
    [selectedCategory]
  )

  const openPhoto = (photo) => setOpenIndex(visiblePhotos.indexOf(photo))

  const tabs = [{ id: 'all', label: { en: c.all, zh: c.all }, count: photos.length }].concat(
    photoCategories.map((cat) => ({ ...cat, count: inCategory(cat.id).length }))
  )

  return (
    <div className="page-container">
      <div className="photography-page">
        <motion.header
          className="photography-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h1>{c.title}</h1>
            <p>{c.intro}</p>
          </div>
          {contact.photographyResumeUrl && (
            <a
              href={contact.photographyResumeUrl}
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText size={16} />
              {c.resume}
            </a>
          )}
        </motion.header>

        <nav className="category-tabs" aria-label={c.title}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`category-tab ${selectedCategory === tab.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(tab.id)}
              aria-pressed={selectedCategory === tab.id}
            >
              {tab.label[lang]}
              <span className="category-count">{tab.count}</span>
            </button>
          ))}
        </nav>

        {selectedCategory === 'all' ? (
          photoCategories.map((cat) => (
            <section key={cat.id} className="photo-section">
              <div className="photo-section-head">
                <h2>{cat.label[lang]}</h2>
                <span className="photo-section-count">{inCategory(cat.id).length}</span>
              </div>
              <PhotoGrid items={inCategory(cat.id)} onOpen={openPhoto} />
            </section>
          ))
        ) : (
          <section className="photo-section" key={selectedCategory}>
            <PhotoGrid items={visiblePhotos} onOpen={openPhoto} />
          </section>
        )}
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <Lightbox
            items={visiblePhotos}
            index={openIndex}
            onChange={setOpenIndex}
            onClose={() => setOpenIndex(null)}
            labels={{ close: c.close, prev: c.prev, next: c.next, category: categoryLabel }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default Photography
