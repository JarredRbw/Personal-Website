import { motion } from 'framer-motion'
import { MapPin, Mail, Github, FileText } from 'lucide-react'
import { contact, skillGroups } from '../data/profile'
import { useLanguage } from '../i18n/language'
import './About.css'

const copy = {
  en: {
    heading: "Hi, I'm Jarred",
    subtitle: 'Always be the student of the world',
    bio: [
      "I'm Bowei (Jarred) Ren, a student at UC Irvine, originally from Beijing. I like building things end to end, whether that's a full-stack web app, a Raspberry Pi running computer vision, or a PC and the network it plugs into.",
      "I enjoy tracking down why something broke and explaining the fix in plain words. When I'm away from the keyboard, I'm usually out with a camera."
    ],
    resume: 'Download resume',
    skills: 'Skills',
    experience: 'Experience',
    concept: 'Philosophy'
  },
  zh: {
    heading: '你好，我是 Jarred',
    subtitle: '永远做世界的学生',
    bio: [
      '我叫 Bowei (Jarred) Ren，来自北京，目前在 UC Irvine 读书。我喜欢从头到尾把一件东西做出来：可能是一个全栈 Web 应用，一台跑计算机视觉的树莓派，也可能是一台电脑和它接入的网络。',
      '我喜欢找出东西坏掉的原因，再用通俗的话把解决办法讲清楚。不写代码的时候，我通常拿着相机在外面。'
    ],
    resume: '下载简历',
    skills: '技能',
    experience: '经历',
    concept: '理念'
  }
}

const experience = [
  {
    role: { en: 'Student', zh: '在读学生' },
    org: { en: 'University of California, Irvine', zh: '加州大学尔湾分校（UC Irvine）' },
    text: {
      en: 'Currently studying at UCI and looking for on-campus work in web development or IT support.',
      zh: '目前在 UCI 就读，正在寻找 Web 开发或 IT 支持方向的校内工作。'
    }
  },
  {
    role: { en: 'Full-Stack Developer', zh: '全栈开发' },
    org: { en: 'BJEA Campus Forum', zh: 'BJEA 校园论坛' },
    text: {
      en: 'Designed and built a PHP + MySQL forum for the school community, including custom routing, the user interface and moderation tools.',
      zh: '为学校社区设计并开发 PHP + MySQL 论坛，包括自定义路由、用户界面和审核工具。'
    }
  },
  {
    role: { en: 'Lighting & Sound Technician', zh: '灯光音响技术员' },
    org: { en: 'School Drama & Talent Shows', zh: '学校戏剧与才艺表演' },
    text: {
      en: 'Set up and tuned microphones and sound, and designed stage lighting for live performances.',
      zh: '为现场演出架设、调试麦克风和音响，并设计舞台灯光。'
    }
  }
]

const principles = [
  {
    title: { en: 'Awareness', zh: '觉察' },
    text: {
      en: 'Understanding the absurd is the first step toward freedom.',
      zh: '认识到荒诞，是走向自由的第一步。'
    }
  },
  {
    title: { en: 'Freedom', zh: '自由' },
    text: {
      en: 'Freedom is nothing but a chance to be better.',
      zh: '自由不过是让自己变得更好的机会。'
    }
  },
  {
    title: { en: 'Hope', zh: '希望' },
    text: {
      en: 'Rebellion is hope in action — not because success is guaranteed, but because dignity demands it.',
      zh: '反抗是行动中的希望——不是因为一定会成功，而是因为尊严要求如此。'
    }
  }
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: 'easeOut' }
}

const About = () => {
  const { lang } = useLanguage()
  const c = copy[lang]

  return (
    <div className="page-container">
      <div className="container about-page">
        {/* 个人介绍 */}
        <motion.section
          className="about-card about-intro"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="intro-avatar">
            <img src="/images/avatar.jpg" alt={lang === 'en' ? 'Jarred taking a photo' : 'Jarred 在拍照'} />
          </div>

          <div className="intro-text">
            <h1>{c.heading}</h1>
            <p className="intro-subtitle">{c.subtitle}</p>
            {c.bio.map((para) => (
              <p key={para} className="intro-description">{para}</p>
            ))}

            <div className="intro-contact">
              <span className="intro-contact-item">
                <MapPin size={18} />
                {contact.location[lang]}
              </span>
              <a className="intro-contact-item" href={`mailto:${contact.email}`}>
                <Mail size={18} />
                {contact.email}
              </a>
              <a className="intro-contact-item" href={contact.github} target="_blank" rel="noopener noreferrer">
                <Github size={18} />
                github.com/JarredRbw
              </a>
            </div>

            {contact.resumeUrl && (
              <a href={contact.resumeUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                <FileText size={16} />
                {c.resume}
              </a>
            )}
          </div>
        </motion.section>

        {/* 技能 */}
        <motion.section className="about-card" {...fadeUp}>
          <h2 className="section-title">{c.skills}</h2>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div key={group.title.en} className="skill-group">
                <h3>{group.title[lang]}</h3>
                <ul className="tag-list">
                  {group.items.map((item) => (
                    <li key={item} className="tag">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 经历 */}
        <motion.section className="about-card" {...fadeUp}>
          <h2 className="section-title">{c.experience}</h2>
          <ol className="experience-list">
            {experience.map((item) => (
              <li key={item.org.en} className="experience-item">
                <div className="experience-head">
                  <h3>{item.role[lang]}</h3>
                  <span>{item.org[lang]}</span>
                </div>
                <p>{item.text[lang]}</p>
              </li>
            ))}
          </ol>
        </motion.section>

        {/* 理念 */}
        <motion.section className="about-card" {...fadeUp}>
          <h2 className="section-title">{c.concept}</h2>
          <blockquote className="philosophy-quote">
            {lang === 'en' ? '“I rebel, therefore we exist.”' : '“我反抗，故我们存在。”'}
            <cite>— Albert Camus</cite>
          </blockquote>
          <div className="philosophy-points">
            {principles.map((point) => (
              <div key={point.title.en} className="point">
                <h4>{point.title[lang]}</h4>
                <p>{point.text[lang]}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default About
