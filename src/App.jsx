import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { motion, MotionConfig } from 'framer-motion'
import LanguageProvider from './i18n/LanguageProvider'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Photography from './pages/Photography'
import About from './pages/About'
import './App.css'

// 切换路由时回到页面顶部
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

// 切换页面时整页淡入。只动透明度：加 transform 会让页面里 position: fixed 的看图层错位
const PageTransition = ({ children }) => {
  const { pathname } = useLocation()

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

function App() {
  return (
    <LanguageProvider>
      {/* 系统开启“减少动态效果”时，自动关掉位移类动画 */}
      <MotionConfig reducedMotion="user">
        <Router>
          <ScrollToTop />
          <div className="App">
            <Navbar />
            <main>
              <PageTransition>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/photography" element={<Photography />} />
                  <Route path="/about" element={<About />} />
                  {/* 博客暂时隐藏，内容准备好后恢复：<Route path="/blog" element={<Blog />} /> */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </PageTransition>
            </main>
            <Footer />
          </div>
        </Router>
      </MotionConfig>
    </LanguageProvider>
  )
}

export default App
