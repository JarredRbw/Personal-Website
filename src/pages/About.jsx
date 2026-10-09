import { motion } from 'framer-motion'
import { MapPin, Mail, Github, FileText } from 'lucide-react'
import { contact, skillGroups } from '../data/profile'
import { useLanguage } from '../i18n/language'
import { fadeUp, fadeUpOnLoad } from '../utils/motion'
import './About.css'

const copy = {
  en: {
    heading: "Hi, I'm Jarred",
    subtitle: 'Always be the student of the world',
    bio: [
      "I'm Jarred Ren (legal name Bowei Ren), a first-year Computer Engineering student at UC Irvine, originally from Beijing. I went to Beijing Etown Academy, where I built and ran the school's discussion forum and an alumni mini program, worked on the vision system for our robotics team, and founded its first student representative council.",
      "I learn by watching how systems behave and looking for the pattern underneath, whether that's a website, a robot, or a bike sliding through a corner. I enjoy tracking down why something broke and explaining the fix in plain words.",
      "Away from the keyboard, I'm usually out with a camera, riding mountain bike trails, or playing soccer."
    ],
    resume: 'Download resume',
    skills: 'Skills',
    experience: 'Experience',
    awards: 'Awards',
    life: 'Outside of code',
    lifeText: 'When I’m not at a keyboard or behind a camera, I’m usually skiing, riding downhill mountain bike trails, or playing soccer.',
    concept: 'Philosophy'
  },
  zh: {
    heading: '你好，我是 Jarred',
    subtitle: '永远做世界的学生',
    bio: [
      '我叫 Jarred Ren（法定姓名 Bowei Ren），来自北京，现在是 UC Irvine 计算机工程专业的一年级学生。高中就读于 Beijing Etown Academy（BJEA），在那里搭建并运营了学校论坛和校友小程序，负责机器人队的视觉系统，还创立了学校第一个学生代表委员会。',
      '我习惯先观察一个系统怎么运转，再找出背后的规律：无论是一个网站、一台机器人，还是山地车过弯时的侧滑。我喜欢找出东西坏掉的原因，再用通俗的话把解决办法讲清楚。',
      '不写代码的时候，我通常拿着相机在外面，或者在骑山地车、踢足球。'
    ],
    resume: '下载简历',
    skills: '技能',
    experience: '经历',
    awards: '奖项',
    life: '代码之外',
    lifeText: '不写代码、不拍照的时候，我通常在滑雪、骑山地车速降，或者踢足球。',
    concept: '理念'
  }
}

const experience = [
  {
    role: { en: 'B.S. Computer Engineering', zh: '计算机工程 本科' },
    org: { en: 'University of California, Irvine', zh: '加州大学尔湾分校' },
    period: '2026 – 2029',
    text: {
      en: 'First-year student at the Henry Samueli School of Engineering (expected graduation June 2029), looking for on-campus work in web development, IT support or photography.',
      zh: 'Henry Samueli 工程学院一年级（预计 2029 年 6 月毕业），正在寻找 Web 开发、IT 支持或摄影方向的校内工作。'
    }
  },
  {
    role: { en: 'Founder & Full-Stack Developer', zh: '创始人 & 全栈开发' },
    org: { en: 'BJEA Campus Forum', zh: 'BJEA 校园论坛' },
    period: '2023 – 2026',
    text: {
      en: "Built and maintained the school's internal forum with PHP, MySQL and custom routing, including the data model, UI pages, moderation tools and an anonymous feedback section.",
      zh: '用 PHP、MySQL 和自定义路由搭建并维护学校内部论坛，包括数据结构、页面、审核工具和匿名反馈版块。'
    }
  },
  {
    role: { en: 'Vision Engineer', zh: '视觉工程师' },
    org: { en: 'STEAM Robotics Team', zh: 'STEAM 机器人队' },
    period: '2024 – 2026',
    text: {
      en: 'Implemented YOLOv8 person detection on a Raspberry Pi and combined it with infrared sensors for a pathfinding robot. Sped up on-device inference and improved detection accuracy by 20%.',
      zh: '在树莓派上实现 YOLOv8 人体检测，并与红外传感器结合用于寻路机器人。优化了设备端推理速度，检测准确率提升 20%。'
    }
  },
  {
    role: { en: 'Developer', zh: '开发者' },
    org: { en: 'BJEA Alumni WeChat Mini Program', zh: 'BJEA 校友微信小程序' },
    period: '2024 – 2026',
    text: {
      en: 'Built a full-stack alumni networking mini program with JavaScript, Python and WeChat APIs, connecting 100+ graduates.',
      zh: '用 JavaScript、Python 和微信 API 开发全栈校友社交小程序，连接了 100 多位毕业生。'
    }
  },
  {
    role: { en: 'Founder & Chair', zh: '创始人 & 主席' },
    org: { en: 'Student Representative Council', zh: '学生代表委员会' },
    period: '2024 – 2026',
    text: {
      en: "Started the school's first student representative council. Led 8 members in collecting student concerns and presenting proposals, and set up weekly reporting between students and faculty.",
      zh: '发起成立学校第一个学生代表委员会，带领 8 名成员收集学生意见、提交提案，并建立了师生之间的每周沟通机制。'
    }
  },
  {
    role: { en: 'Chair of Activity Department', zh: '活动部部长' },
    org: { en: 'Student Union', zh: '学生会' },
    period: '2024 – 2025',
    text: {
      en: 'Led a team of 4 to plan schoolwide sports-season events: wrote proposals, scheduled venues, handled logistics and gathered student feedback.',
      zh: '带领 4 人团队策划全校体育季活动：撰写方案、协调场地、负责后勤并收集学生反馈。'
    }
  },
  {
    role: { en: 'Lighting & Sound Technician', zh: '灯光音响技术员' },
    org: { en: 'School Drama Festivals & Talent Shows', zh: '学校中英文戏剧节与才艺表演' },
    period: '2023 – 2025',
    text: {
      en: 'Ran lighting and sound for rehearsals and live shows: set up and tuned microphones, and designed the lighting effects.',
      zh: '负责排练和演出的灯光音响：架设并调试麦克风，设计并实现灯光效果。'
    }
  },
  {
    role: { en: 'Event Photographer', zh: '活动摄影师' },
    org: { en: 'BNDS Grassland Music Festival, Beijing National Day School', zh: 'BNDS 草地音乐节（Beijing National Day School）' },
    period: '2023',
    text: {
      en: 'Photographed live performances, the audience and the atmosphere of a large school music festival, framing and timing shots quickly as stage conditions changed.',
      zh: '拍摄大型校园音乐节的现场演出、观众互动和整体氛围，在不断变化的舞台条件下快速构图、把握时机。'
    },
    image: {
      src: '/images/behind-the-scenes.jpg',
      caption: { en: 'Behind the camera at the festival, 2023.', zh: '在音乐节现场拍摄，2023。' }
    }
  },
  {
    role: { en: 'Founder', zh: '创始人' },
    org: { en: '“Knowledge Is Power” Volunteer Club', zh: '“知识就是力量”公益社团' },
    period: '2023 – 2025',
    text: {
      en: 'Organized student volunteers to produce teaching slides and lesson materials for rural education programs run by Mifuxing Charity.',
      zh: '组织学生志愿者为Mifuxing Charity 的乡村教育项目制作课件和教学材料。'
    }
  }
]

const awards = [
  {
    name: { en: 'American Computer Science League — Final Round, Top 30%', zh: '美国计算机科学联赛（ACSL）总决赛前 30%' },
    year: '2024 – 25'
  },
  {
    name: { en: 'HiMCM (High School Mathematical Contest in Modeling) — Honorable Mention', zh: 'HiMCM 高中数学建模竞赛 荣誉奖' },
    year: '2024 – 25'
  },
  {
    name: { en: 'Australian Mathematics Competition — Distinction', zh: '澳大利亚数学竞赛（AMC）优秀奖' },
    year: '2023 – 24'
  },
  {
    name: { en: 'FangYuan Award — school’s highest academic honor (top 5%)', zh: '方圆奖：学校最高学术荣誉（年级前 5%）' },
    year: '2023 – 26'
  },
  {
    name: { en: 'Best Academic Award, Physics Department — magnet climbing experiment paper', zh: '物理组最佳学术奖：磁铁爬升实验论文' },
    year: '2024 – 25'
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

const lifePhotos = [
  { src: '/images/life/ski-thumb.jpg', full: '/images/life/ski.jpg', caption: { en: 'Skiing', zh: '滑雪' } },
  { src: '/images/life/mtb-thumb.jpg', full: '/images/life/mtb.jpg', caption: { en: 'Downhill mountain biking', zh: '山地车速降' } }
]

const About = () => {
  const { lang } = useLanguage()
  const c = copy[lang]

  return (
    <div className="page-container">
      <div className="container about-page">
        {/* 个人介绍 */}
        <motion.section
          className="about-card about-intro"
          {...fadeUpOnLoad}
        >
          <div className="intro-avatar">
            <img src="/images/avatar.jpg" alt={lang === 'en' ? 'Portrait of Jarred Ren' : 'Jarred Ren 的照片'} />
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
                  <span className="experience-period">{item.period}</span>
                </div>
                <p>{item.text[lang]}</p>
                {item.image && (
                  <figure className="experience-figure">
                    <img src={item.image.src} alt={item.image.caption[lang]} loading="lazy" />
                    <figcaption>{item.image.caption[lang]}</figcaption>
                  </figure>
                )}
              </li>
            ))}
          </ol>
        </motion.section>

        {/* 奖项 */}
        <motion.section className="about-card" {...fadeUp}>
          <h2 className="section-title">{c.awards}</h2>
          <ul className="awards-list">
            {awards.map((award) => (
              <li key={award.name.en}>
                <span>{award.name[lang]}</span>
                <span className="award-year">{award.year}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* 代码之外 */}
        <motion.section className="about-card" {...fadeUp}>
          <h2 className="section-title">{c.life}</h2>
          <p className="life-text">{c.lifeText}</p>
          <div className="life-photos">
            {lifePhotos.map((photo) => (
              <figure key={photo.src}>
                <a href={photo.full} target="_blank" rel="noopener noreferrer">
                  <img src={photo.src} alt={`Jarred — ${photo.caption.en}`} loading="lazy" />
                </a>
                <figcaption>{photo.caption[lang]}</figcaption>
              </figure>
            ))}
          </div>
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
