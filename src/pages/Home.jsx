import { motion } from 'framer-motion'
import { ArrowDown, Camera, BookOpen, User } from 'lucide-react'
import { Link } from 'react-router-dom'
import HeroCarousel from '../components/HeroCarousel'
import './Home.css'

const Home = () => {
  // 轮播图片配置
  const carouselImages = [
    {
      url: '/images/HeadPicture.jpeg',
      title: '个人头像'
    },
    {
      url: '/images/baita.jpg',
      title: '美好时光的见证'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const features = [
    {
      icon: <Camera size={48} />,
      title: '摄影作品',
      description: '展示我的摄影作品集，记录美好瞬间',
      link: '/photography'
    },
    {
      icon: <BookOpen size={48} />,
      title: '博客文章',
      description: '分享我的思考、经验和生活感悟',
      link: '/blog'
    },
    {
      icon: <User size={48} />,
      title: '关于我',
      description: '了解更多关于我的故事和经历',
      link: '/about'
    }
  ]

  return (
    <div className="page-container">
      {/* 英雄区域 */}
      <motion.section 
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* 图片轮播背景 */}
        <HeroCarousel images={carouselImages} />
        
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="hero-title" variants={itemVariants}>
            W E L C O M E TO MY W O R L D
          </motion.h1>
        </motion.div>
        
        <motion.div 
          className="hero-subtitle-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero-subtitle" variants={itemVariants}>
            Capturing life through the lens,
            <br />
            sharing insights through words
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.section>

      {/* 特色功能区域 */}
      <motion.section 
        className="features"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            探索我的创作
          </motion.h2>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <Link to={feature.link} className="feature-link">
                  了解更多 →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 最新作品预览 */}
      <motion.section 
        className="latest-work"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            最新作品
          </motion.h2>
          
          <div className="work-preview">
            <motion.div 
              className="preview-item"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="preview-image">
                <div className="placeholder-image">
                  <Camera size={64} />
                </div>
              </div>
              <div className="preview-content">
                <h3>城市夜景</h3>
                <p>捕捉城市夜晚的美丽与宁静</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="preview-item"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="preview-image">
                <div className="placeholder-image">
                  <BookOpen size={64} />
                </div>
              </div>
              <div className="preview-content">
                <h3>摄影心得</h3>
                <p>分享摄影技巧和创作感悟</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Home
