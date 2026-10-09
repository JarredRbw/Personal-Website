import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown, Code2, Wrench, Camera, Mail, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { contact } from '../data/profile'
import { useLanguage } from '../i18n/language'
import { ease, fadeUp, stagger, hoverLift, heroContainer, heroItem } from '../utils/motion'
import './Home.css'

const copy = {
  en: {
    eyebrow: 'Web development · IT support · Photography',
    tagline: 'Computer Engineering student at UC Irvine.',
    viewProjects: 'View projects',
    contact: 'Contact me',
    resume: 'Resume',
    whatIDo: 'What I do',
    featured: 'Featured projects',
    allProjects: 'All projects',
    photography: 'Outside of code',
    photographyText: 'I also shoot photos: street scenes, landscapes, architecture and live events.',
    seePhotos: 'See photography'
  },
  zh: {
    eyebrow: 'Web 开发 · IT 支持 · 摄影',
    tagline: 'UC Irvine 计算机工程专业学生。',
    viewProjects: '查看项目',
    contact: '联系我',
    resume: '简历',
    whatIDo: '我能做什么',
    featured: '精选项目',
    allProjects: '全部项目',
    photography: '代码之外',
    photographyText: '我也喜欢摄影：街拍、风光、建筑和现场活动。',
    seePhotos: '查看摄影作品'
  }
}

const tracks = [
  {
    id: 'software',
    icon: <Code2 size={28} />,
    title: { en: 'Web & Software Development', zh: 'Web 与软件开发' },
    text: {
      en: 'Full-stack web apps with React / Next.js on the front end and SQL databases behind them, plus browser extensions and Python tools.',
      zh: '用 React / Next.js 做前端、SQL 数据库做后端的全栈 Web 应用，以及浏览器插件和 Python 工具。'
    },
    tags: ['JavaScript / TypeScript', 'React', 'Next.js', 'PHP', 'SQL']
  },
  {
    id: 'it',
    icon: <Wrench size={28} />,
    title: { en: 'IT & Technical Support', zh: 'IT 与技术支持' },
    text: {
      en: 'Building and upgrading PCs, setting up small wired and wireless networks, and troubleshooting Windows, macOS and Linux machines.',
      zh: '组装和升级电脑、搭建小型有线和无线网络，排查 Windows、macOS 和 Linux 设备的问题。'
    },
    tags: ['PC hardware', 'Windows / macOS / Linux', 'LAN / Wi-Fi', 'Troubleshooting']
  },
  {
    id: 'photo',
    icon: <Camera size={28} />,
    title: { en: 'Photography & Live Events', zh: '摄影与现场活动' },
    text: {
      en: 'Event photography at a school music festival, plus street, nature and museum work. I also ran lighting and sound for school drama festivals and talent shows.',
      zh: '拍摄过学校音乐节等现场活动，也拍城市、自然和博物馆题材；还负责过学校戏剧节和才艺表演的灯光音响。'
    },
    tags: ['Event photography', 'Photo curation', 'Stage lighting', 'Live sound']
  }
]

const previewPhotos = [
  '/photos/street/thumbs/street-03.jpg',
  '/photos/landscape/thumbs/landscape-01.jpg',
  '/photos/events/thumbs/events-02.jpg'
]

const Home = () => {
  const { lang } = useLanguage()
  const c = copy[lang]
  const featured = projects.filter((p) => p.featured)

  return (
    <div className="home">
      {/* 首屏 */}
      <section className="hero">
        {/* 背景照片缓慢缩回原大小 */}
        <motion.img
          className="hero-bg"
          src="/images/HeadPicture.jpeg"
          alt=""
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease }}
        />
        <div className="hero-overlay" />

        <motion.div
          className="hero-content"
          variants={heroContainer}
          initial="hidden"
          animate="show"
        >
          <motion.p className="hero-eyebrow" variants={heroItem}>{c.eyebrow}</motion.p>
          <motion.h1 className="hero-title" variants={heroItem}>Jarred Ren</motion.h1>
          <motion.p className="hero-tagline" variants={heroItem}>{c.tagline}</motion.p>
          <motion.div className="hero-actions" variants={heroItem}>
            <Link to="/projects" className="btn btn-light">
              {c.viewProjects}
              <ArrowRight size={16} />
            </Link>
            <a href={`mailto:${contact.email}`} className="btn btn-ghost-light">
              <Mail size={16} />
              {c.contact}
            </a>
            {contact.resumeUrl && (
              <a href={contact.resumeUrl} className="btn btn-ghost-light" target="_blank" rel="noopener noreferrer">
                <FileText size={16} />
                {c.resume}
              </a>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-hidden="true"
        >
          <ArrowDown size={24} />
        </motion.div>
      </section>

      {/* 两个方向 */}
      <section className="home-section">
        <div className="container">
          <motion.h2 className="section-title" {...fadeUp}>{c.whatIDo}</motion.h2>
          <div className="tracks-grid">
            {tracks.map((track, i) => (
              <motion.div key={track.id} className="track-card" {...stagger(i)} {...hoverLift}>
                <div className="track-icon">{track.icon}</div>
                <h3>{track.title[lang]}</h3>
                <p>{track.text[lang]}</p>
                <ul className="tag-list">
                  {track.tags.map((tag) => (
                    <li key={tag} className="tag">{tag}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 精选项目 */}
      <section className="home-section home-section-alt">
        <div className="container">
          <motion.h2 className="section-title" {...fadeUp}>{c.featured}</motion.h2>
          <div className="featured-grid">
            {featured.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} compact />
            ))}
          </div>
          <div className="section-more">
            <Link to="/projects" className="btn btn-secondary">
              {c.allProjects}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 摄影 */}
      <section className="home-section">
        <div className="container">
          <motion.h2 className="section-title" {...fadeUp}>{c.photography}</motion.h2>
          <p className="photo-teaser-text">{c.photographyText}</p>
          <Link to="/photography" className="photo-teaser" aria-label={c.seePhotos}>
            {previewPhotos.map((src, i) => (
              <motion.div key={src} className="photo-teaser-item" {...stagger(i)}>
                <img src={src} alt="" loading="lazy" />
              </motion.div>
            ))}
          </Link>
          <div className="section-more">
            <Link to="/photography" className="btn btn-secondary">
              {c.seePhotos}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
