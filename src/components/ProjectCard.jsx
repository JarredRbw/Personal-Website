import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useLanguage } from '../i18n/language'
import { stagger, hoverLift } from '../utils/motion'
import './ProjectCard.css'

const ProjectCard = ({ project, index = 0, compact = false }) => {
  const { lang } = useLanguage()

  return (
    <motion.article
      className="project-card"
      {...stagger(index)}
      {...hoverLift}
    >
      <h3>{project.title[lang]}</h3>
      <p className="project-summary">{project.summary[lang]}</p>

      {!compact && (
        <ul className="project-highlights">
          {project.highlights[lang].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      <ul className="tag-list project-tech">
        {project.tech.map((t) => (
          <li key={t} className="tag">{t}</li>
        ))}
      </ul>

      {!compact && project.links.length > 0 && (
        <div className="project-links">
          {project.links.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}
              <ExternalLink size={14} />
            </a>
          ))}
        </div>
      )}
    </motion.article>
  )
}

export default ProjectCard
