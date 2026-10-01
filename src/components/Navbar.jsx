import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../i18n/language'
import './Navbar.css'

const navItems = [
  { path: '/', label: { en: 'Home', zh: '首页' } },
  { path: '/projects', label: { en: 'Projects', zh: '项目' } },
  { path: '/photography', label: { en: 'Photography', zh: '摄影' } },
  { path: '/about', label: { en: 'About', zh: '关于我' } }
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { lang, setLang } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLang = () => setLang(lang === 'en' ? 'zh' : 'en')

  const langButton = (
    <button
      type="button"
      className="lang-toggle"
      onClick={toggleLang}
      aria-label={lang === 'en' ? '切换到中文' : 'Switch to English'}
    >
      {lang === 'en' ? '中文' : 'EN'}
    </button>
  )

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="nav-container">
        <Link to="/" className="logo">
          Jarred Ren
        </Link>

        <div className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={location.pathname === item.path ? 'active' : ''}
            >
              {item.label[lang]}
            </Link>
          ))}
          {langButton}
        </div>

        <div className="nav-mobile-actions">
          {langButton}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <motion.div
        className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={location.pathname === item.path ? 'active' : ''}
            onClick={() => setIsMobileMenuOpen(false)}
            tabIndex={isMobileMenuOpen ? 0 : -1}
          >
            {item.label[lang]}
          </Link>
        ))}
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
