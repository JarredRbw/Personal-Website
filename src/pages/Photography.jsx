import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Heart, Share2, Download } from 'lucide-react'
import './Photography.css'

const Photography = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [likedPhotos, setLikedPhotos] = useState(new Set())

  // 摄影作品系列数据 - 根据实际文件夹结构组织
  const photoSeries = [
    {
      id: 1,
      title: '城市系列',
      description: '捕捉都市的静谧与繁华，光影交织下的城市脉搏',
      category: '城市',
      date: '2024-07',
      likes: 42,
      coverImage: '/images/Assets/City/370f61d956d8e9e5abc2e1dbb8824179.JPG',
      images: [
        '/images/Assets/City/370f61d956d8e9e5abc2e1dbb8824179.JPG',
        '/images/Assets/City/684416b7f4ccbccff372a9a495ea41fe.JPG'
      ]
    },
    {
      id: 2,
      title: '自然系列',
      description: '捕捉大自然的细腻纹理，记录时光在自然中的流转',
      category: '自然',
      date: '2024-07',
      likes: 38,
      coverImage: '/images/Assets/Nature/1-1.jpg',
      images: [
        '/images/Assets/Nature/1-1.jpg',
        '/images/Assets/Nature/2-1.jpg',
        '/images/Assets/Nature/4-1.jpg'
      ]
    },
    {
      id: 3,
      title: '徒步系列',
      description: '记录徒步路上的风景与故事，捕捉旅途中的美好瞬间',
      category: '徒步',
      date: '2024-07',
      likes: 33,
      coverImage: '/images/Assets/Hiking/_DSC8637.JPG',
      images: [
        '/images/Assets/Hiking/_DSC8637.JPG',
        '/images/Assets/Hiking/_DSC8777.JPG',
        '/images/Assets/Hiking/_DSC8874.JPG'
      ]
    },
    {
      id: 4,
      title: '博物馆系列',
      description: '记录博物馆中的艺术与历史，捕捉文化与时光的交汇',
      category: '人像',
      date: '2024-07',
      likes: 56,
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
      title: '古建筑系列',
      description: '记录古代建筑的韵味与历史，捕捉传统与现代的对话',
      category: '人像',
      date: '2024-07',
      likes: 31,
      coverImage: '/images/Assets/Human/Ancient Architecture/3-1.jpg',
      images: [
        '/images/Assets/Human/Ancient Architecture/3-1.jpg'
      ]
    }
  ]

  const categories = ['全部', '城市', '自然', '徒步', '人像']
  const [selectedCategory, setSelectedCategory] = useState('全部')

  const filteredSeries = selectedCategory === '全部' 
    ? photoSeries 
    : photoSeries.filter(series => series.category === selectedCategory)

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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Photography</h1>
          <p>Selected Works</p>
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

        {/* 作品网格 - 完全仿照 film-grab.com，只显示图片和标题 */}
        <motion.div 
          className="photography-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={selectedCategory}
        >
          {filteredSeries.map((series) => (
            <motion.div
              key={`${series.id}-${selectedCategory}`}
              className="photo-card"
              variants={itemVariants}
              layout
              initial="hidden"
              animate="visible"
              onClick={() => setSelectedPhoto(series)}
            >
              <div className="photo-image">
                <img src={series.coverImage} alt={series.title} />
              </div>
              <div className="photo-title">
                <h3>{series.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 系列详情模态框 - 参考 film-grab.com，展示系列所有图片 */}
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
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="close-btn"
                  onClick={() => setSelectedPhoto(null)}
                >
                  <X size={24} />
                </button>
                
                {/* 系列标题 - 仿照 film-grab.com，只显示标题 */}
                <div className="modal-header">
                  <h2>{selectedPhoto.title}</h2>
                </div>
                
                {/* 系列图片网格 - 展示所有图片 */}
                <div className="series-gallery">
                  {selectedPhoto.images.map((imageUrl, index) => (
                    <motion.div
                      key={index}
                      className="series-image-item"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <img src={imageUrl} alt={`${selectedPhoto.title} - ${index + 1}`} />
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
