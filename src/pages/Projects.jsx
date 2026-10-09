import { motion } from 'framer-motion'
import { Code2, Wrench } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { useLanguage } from '../i18n/language'
import { fadeUpOnLoad } from '../utils/motion'
import './Projects.css'

const groups = [
  {
    id: 'software',
    icon: <Code2 size={22} />,
    title: { en: 'Software, Web & AI', zh: '软件、Web 与 AI' },
    intro: {
      en: 'Full-stack web apps, a browser extension and machine learning projects.',
      zh: '全栈 Web 应用、浏览器插件和机器学习项目。'
    }
  },
  {
    id: 'it',
    icon: <Wrench size={22} />,
    title: { en: 'Hardware, Systems & IT', zh: '硬件、系统与 IT' },
    intro: {
      en: 'Hands-on work with computers, Linux devices, networks and AV equipment.',
      zh: '电脑、Linux 设备、网络和音视频设备的动手实践。'
    }
  }
]

const Projects = () => {
  const { lang } = useLanguage()

  return (
    <div className="page-container">
      <div className="container">
        <motion.header
          className="page-header"
          {...fadeUpOnLoad}
        >
          <h1>{lang === 'en' ? 'Projects' : '项目'}</h1>
          <p>
            {lang === 'en'
              ? 'Things I have built and set up, from web apps to hardware and networks.'
              : '我做过的东西，从 Web 应用到硬件和网络。'}
          </p>
        </motion.header>

        {groups.map((group) => (
          <section key={group.id} className="project-group" id={group.id}>
            <div className="project-group-header">
              <span className="project-group-icon">{group.icon}</span>
              <div>
                <h2>{group.title[lang]}</h2>
                <p>{group.intro[lang]}</p>
              </div>
            </div>
            <div className="projects-grid">
              {projects
                .filter((p) => p.group === group.id)
                .map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} />
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default Projects
