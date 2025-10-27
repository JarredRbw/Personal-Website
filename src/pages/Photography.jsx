import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Heart, Share2, Download } from 'lucide-react'
import './Photography.css'

const Photography = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [likedPhotos, setLikedPhotos] = useState(new Set())

  // 摄影作品数据
  const photos = [
    {
      id: 1,
      title: '专注的创作',
      description: '捕捉创作过程中的专注瞬间，柔和的侧影展现内心的宁静',
      category: '人像摄影',
      date: '2024-01-20',
      likes: 42,
      image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&h=600&fit=crop'
    },
    {
      id: 2,
      title: '纸间时光',
      description: '记录手与纸张的亲密接触，黑白影调赋予日常以诗意',
      category: '静物摄影',
      date: '2024-01-18',
      likes: 38,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
    },
    {
      id: 3,
      title: '沉思时刻',
      description: '低头凝视的瞬间，长发与纸张的对话',
      category: '人像摄影',
      date: '2024-01-15',
      likes: 56,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=800&h=600&fit=crop'
    },
    {
      id: 4,
      title: '动态瞬间',
      description: '捕捉运动中的模糊美感，时间在画面中流淌',
      category: '抽象摄影',
      date: '2024-01-12',
      likes: 29,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop'
    },
    {
      id: 5,
      title: '烹饪时光',
      description: '厨房中的温馨瞬间，盐与胡椒的简单美学',
      category: '生活摄影',
      date: '2024-01-10',
      likes: 33,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop'
    },
    {
      id: 6,
      title: '创意展示',
      description: '艺术创作的过程记录，WILDENFREE的视觉表达',
      category: '艺术摄影',
      date: '2024-01-08',
      likes: 47,
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop'
    },
    {
      id: 7,
      title: '活动公告',
      description: '社区活动的记录，人与人之间的连接',
      category: '纪实摄影',
      date: '2024-01-05',
      likes: 25,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
    },
    {
      id: 8,
      title: '足尖轻触',
      description: '日常生活中的细节之美，光脚与家具的温柔接触',
      category: '生活摄影',
      date: '2024-01-03',
      likes: 31,
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop'
    },
    {
      id: 9,
      title: '创作过程',
      description: '艺术创作中的专注状态，手与纸张的对话',
      category: '人像摄影',
      date: '2024-01-01',
      likes: 39,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=800&h=600&fit=crop'
    }
  ]

  const categories = ['全部', '人像摄影', '静物摄影', '抽象摄影', '生活摄影', '艺术摄影', '纪实摄影']
  const [selectedCategory, setSelectedCategory] = useState('全部')

  const filteredPhotos = selectedCategory === '全部' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory)

  const toggleLike = (photoId) => {
    setLikedPhotos(prev => {
      const newSet = new Set(prev)
      if (newSet.has(photoId)) {
        newSet.delete(photoId)
      } else {
        newSet.add(photoId)
      }
      return newSet
    })
  }

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

  return (
    <div className="page-container">
      <div className="photography-container">
        <motion.div 
          className="photography-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>摄影作品</h1>
          <p>用镜头记录生活的美好瞬间</p>
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
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* 作品网格 */}
        <motion.div 
          className="photography-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {filteredPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                className="photo-card"
                variants={itemVariants}
                layout
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <div className="photo-image">
                  <img src={photo.image} alt={photo.title} />
                  <div className="photo-overlay">
                    <div className="photo-actions">
                      <button 
                        className={`action-btn ${likedPhotos.has(photo.id) ? 'liked' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleLike(photo.id)
                        }}
                      >
                        <Heart size={20} />
                      </button>
                      <button className="action-btn">
                        <Share2 size={20} />
                      </button>
                      <button className="action-btn">
                        <Download size={20} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="photo-info">
                  <h3>{photo.title}</h3>
                  <p>{photo.description}</p>
                  <div className="photo-meta">
                    <span className="category">{photo.category}</span>
                    <span className="date">{photo.date}</span>
                    <span className="likes">
                      <Heart size={16} />
                      {photo.likes + (likedPhotos.has(photo.id) ? 1 : 0)}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 照片详情模态框 */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div 
              className="photo-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
            >
              <motion.div 
                className="modal-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="close-btn"
                  onClick={() => setSelectedPhoto(null)}
                >
                  <X size={24} />
                </button>
                
                <div className="modal-image">
                  <img src={selectedPhoto.image} alt={selectedPhoto.title} />
                </div>
                
                <div className="modal-info">
                  <h2>{selectedPhoto.title}</h2>
                  <p>{selectedPhoto.description}</p>
                  <div className="modal-meta">
                    <span className="category">{selectedPhoto.category}</span>
                    <span className="date">{selectedPhoto.date}</span>
                    <span className="likes">
                      <Heart size={16} />
                      {selectedPhoto.likes + (likedPhotos.has(selectedPhoto.id) ? 1 : 0)}
                    </span>
                  </div>
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
