import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown, Code2, Wrench, Mail, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { contact } from '../data/profile'
import { useLanguage } from '../i18n/language'
import './Home.css'

const copy = {
  en: {
    eyebrow: 'UC Irvine · Irvine, CA',
    tagline: 'I build web apps and keep computers, networks and AV gear running.',
    viewProjects: 'View projects',
    contact: 'Contact me',
    resume: 'Resume',
    whatIDo: 'What I do',
    featured: 'Featured projects',
    allProjects: 'All projects',
    photography: 'Outside of code',
    photographyText: 'I also shoot photos: city streets, museums, hikes and old architecture.',
    seePhotos: 'See photography'
  },
  zh: {
    eyebrow: 'UC Irvine · 加州尔湾',
    tagline: '我开发 Web 应用，也负责让电脑、网络和音视频设备正常运转。',
    viewProjects: '查看项目',
    contact: '联系我',
    resume: '简历',
    whatIDo: '我能做什么',
    featured: '精选项目',
    allProjects: '全部项目',
    photography: '代码之外',
    photographyText: '我也喜欢摄影：城市街头、博物馆、徒步和古建筑。',
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
      en: 'Building and upgrading PCs, setting up small networks, working on Windows, macOS and Linux, and running sound and lighting for live events.',
      zh: '组装和升级电脑、搭建小型网络，熟悉 Windows、macOS 和 Linux，也做过现场演出的灯光音响。'
    },
    tags: ['PC hardware', 'Windows / macOS / Linux', 'LAN / Wi-Fi', 'AV']
  }
]

const previewPhotos = [
  '/images/Assets/City/684416b7f4ccbccff372a9a495ea41fe.JPG',
  '/images/Assets/Human/Museum/_DSC9794.JPG',
  '/images/Assets/Hiking/_DSC8637.JPG'
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: 'easeOut' }
}

const Home = () => {
  const { lang } = useLanguage()
  const c = copy[lang]
  const featured = projects.filter((p) => p.featured)

  return (
    <div className="home">
      {/* 首屏 */}
      <section className="hero">
        <img className="hero-bg" src="/images/HeadPicture.jpeg" alt="" />
        <div className="hero-overlay" />

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="hero-eyebrow">{c.eyebrow}</p>
          <h1 className="hero-title">Bowei (Jarred) Ren</h1>
          <p className="hero-tagline">{c.tagline}</p>
          <div className="hero-actions">
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
          </div>
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
            {tracks.map((track) => (
              <motion.div key={track.id} className="track-card" {...fadeUp}>
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
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} compact />
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
            {previewPhotos.map((src) => (
              <div key={src} className="photo-teaser-item">
                <img src={src} alt="" loading="lazy" />
              </div>
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
