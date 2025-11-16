import { motion } from 'framer-motion'
import { Camera, MapPin, Mail, Github, Instagram, Twitter } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import './About.css'

const About = () => {
  const location = useLocation()
  const [timelineKey, setTimelineKey] = useState(0)
  const timelineRef = useRef(null)

  // 当跳转到About页面时，滚动到顶部（about-intro部分）并重置timeline动画
  useEffect(() => {
    // 立即滚动到顶部（考虑导航栏高度）
    window.scrollTo({ top: 0, behavior: 'instant' })
    
    // 如果URL中有锚点，清除它并重新滚动
    if (location.hash) {
      // 清除hash
      window.history.replaceState(null, '', location.pathname)
    }
    
    // 重置timeline key，强制重新渲染timeline动画
    setTimelineKey(prev => prev + 1)
    
    // 延迟一下确保页面已渲染，然后平滑滚动到顶部
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      
      // 强制触发视口检测，确保whileInView重新工作
      // 通过微小的滚动来触发IntersectionObserver
      setTimeout(() => {
        const currentScroll = window.pageYOffset
        window.scrollTo({ top: currentScroll + 1, behavior: 'auto' })
        setTimeout(() => {
          window.scrollTo({ top: currentScroll, behavior: 'auto' })
        }, 10)
      }, 200)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [location.pathname])
  const achievements = [
    {
      year: '4',
      title: '我是占位符',
      description: '我是占位符'
    },
    {
      year: '3',
      title: '我是占位符',
      description: '我是占位符'
    },
    {
      year: '2',
      title: '我是占位符',
      description: '我是占位符'
    },
    {
      year: '1',
      title: '我是占位符',
      description: '千里之行，始于足下'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  return (
    <div className="page-container">
      <div className="about-container">
        {/* 个人介绍 */}
        <motion.section 
          className="about-intro"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="intro-wrapper">
            <motion.div 
              className="intro-avatar"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src="/images/PSP.png" alt="Jarred Ren - 用镜头记录生活的摄影师" />
            </motion.div>
            
            <motion.div 
              className="intro-text"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 variants={itemVariants}>I'm Jarred</motion.h1>
              <motion.p variants={itemVariants} className="intro-subtitle">Always be the student of the world
              </motion.p>
              <motion.p variants={itemVariants} className="intro-description">
              I was born in Beijing in 2008. I made this website myself to showcase the photos I once took and my stupid opinions on life. I also hope you won't laugh at me. If you have anything to say to me, you can contact me through the email address below or the platform links. Thank you for coming!
              </motion.p>
              
              <motion.div variants={itemVariants} className="intro-contact">
                <div className="intro-contact-item">
                  <MapPin size={20} />
                  <span>Beijing · China</span>
                </div>
                <div className="intro-contact-item">
                  <Mail size={20} />
                  <span>jarred@gmail.com</span>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="intro-social">
                <a href="#" className="intro-social-link">
                  <Github size={24} />
                </a>
                <a href="#" className="intro-social-link">
                  <Instagram size={24} />
                </a>
                <a href="#" className="intro-social-link">
                  <Twitter size={24} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* 成就时间线 */}
        <motion.section 
          className="achievements-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Timeline
          </motion.h2>
          
          <div className="timeline" key={`timeline-${timelineKey}`} ref={timelineRef}>
            {achievements.map((achievement, index) => (
              <motion.div
                key={`${achievement.year}-${index}-${timelineKey}`}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <motion.div 
                  className="timeline-marker"
                  initial={{ opacity: 0, scale: 0, x: "-50%" }}
                  whileInView={{ opacity: 1, scale: 1, x: "-50%" }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1 + 0.2,
                    ease: "easeOut"
                  }}
                >
                  <Camera size={20} />
                </motion.div>
                <div className="timeline-content">
                  <div className="timeline-year">{achievement.year}</div>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 个人理念 */}
        <motion.section 
          className="philosophy-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            CONCEPT
          </motion.h2>
          
          <motion.div 
            className="philosophy-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <blockquote>
              "I rebel, therefore we exist."
            </blockquote>
            <div className="philosophy-points">
              <div className="point">
                <h4>Awareness</h4>
                <p>Understanding the absurd is the first step toward freedom.</p>
              </div>
              <div className="point">
                <h4>Freedom</h4>
                <p>Freedom is nothing but a chance to be better.</p>
              </div>
              <div className="point">
                <h4>Hope</h4>
                <p>Rebellion is hope in action — not because success is guaranteed, but because dignity demands it.</p>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  )
}

export default About

