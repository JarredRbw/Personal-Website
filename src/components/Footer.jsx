import { Mail, Github } from 'lucide-react'
import { contact } from '../data/profile'
import { useLanguage } from '../i18n/language'
import './Footer.css'

const Footer = () => {
  const { lang } = useLanguage()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="footer-note">
          {lang === 'en'
            ? 'Open to on-campus positions at UC Irvine.'
            : '正在寻找 UC Irvine 校内工作机会。'}
        </p>
        <div className="footer-links">
          <a href={`mailto:${contact.email}`}>
            <Mail size={16} />
            {contact.email}
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer">
            <Github size={16} />
            GitHub
          </a>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Jarred Ren</p>
      </div>
    </footer>
  )
}

export default Footer
