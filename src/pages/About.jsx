import { motion } from 'framer-motion'
import { Camera, MapPin, Mail, Github, Instagram, Twitter } from 'lucide-react'
import './About.css'

const About = () => {
  const skills = [
    { name: '摄影技巧', level: 90 },
    { name: '后期处理', level: 85 },
    { name: '构图设计', level: 88 },
    { name: '色彩搭配', level: 82 },
    { name: '光线运用', level: 87 },
    { name: '创意表达', level: 90 }
  ]

  const achievements = [
    {
      year: '2023',
      title: '国际摄影大赛金奖',
      description: '在年度国际摄影大赛中获得金奖，作品《城市之光》获得评委一致好评'
    },
    {
      year: '2022',
      title: '个人摄影展',
      description: '在本地艺术中心举办个人摄影展《时光印记》，展出作品50余幅'
    },
    {
      year: '2021',
      title: '摄影教程作者',
      description: '开始撰写摄影教程和心得分享，帮助更多摄影爱好者提升技能'
    },
    {
      year: '2020',
      title: '专业摄影师认证',
      description: '获得专业摄影师认证，正式开启职业摄影师生涯'
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
          className="about-hero"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-content">
            <motion.div 
              className="profile-image"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" alt="Jarred Ren" />
            </motion.div>
            
            <motion.div 
              className="hero-text"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 variants={itemVariants}>你好，我是 Jarred Ren</motion.h1>
              <motion.p variants={itemVariants} className="subtitle">
                摄影师 · 视觉创作者 · 生活记录者
              </motion.p>
              <motion.p variants={itemVariants} className="description">
                我是一名热爱摄影的创作者，专注于捕捉生活中的美好瞬间。
                通过镜头，我记录城市的变化、自然的美丽、人文的温暖。
                每一张照片都是一个故事，每一次按下快门都是对生活的热爱。
              </motion.p>
              
              <motion.div variants={itemVariants} className="contact-info">
                <div className="info-item">
                  <MapPin size={20} />
                  <span>中国 · 上海</span>
                </div>
                <div className="info-item">
                  <Mail size={20} />
                  <span>jarred@example.com</span>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="social-links">
                <a href="#" className="social-link">
                  <Github size={24} />
                </a>
                <a href="#" className="social-link">
                  <Instagram size={24} />
                </a>
                <a href="#" className="social-link">
                  <Twitter size={24} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* 技能展示 */}
        <motion.section 
          className="skills-section"
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
            专业技能
          </motion.h2>
          
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div 
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 成就时间线 */}
        <motion.section 
          className="achievements-section"
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
            重要成就
          </motion.h2>
          
          <div className="timeline">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="timeline-marker">
                  <Camera size={20} />
                </div>
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
            创作理念
          </motion.h2>
          
          <motion.div 
            className="philosophy-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <blockquote>
              "摄影不仅仅是记录，更是表达。每一张照片都应该有它的故事，
              每一个瞬间都值得被珍惜。我追求的不是完美的技术，
              而是真实的情感和深刻的表达。"
            </blockquote>
            
            <div className="philosophy-points">
              <div className="point">
                <h4>真实记录</h4>
                <p>用镜头记录生活的真实，捕捉最自然的情感表达</p>
              </div>
              <div className="point">
                <h4>情感表达</h4>
                <p>通过构图和光线传达内心的感受和思考</p>
              </div>
              <div className="point">
                <h4>持续学习</h4>
                <p>不断探索新的拍摄技巧和表达方式</p>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  )
}

export default About
