import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import './Blog.css'

const Blog = () => {
  const location = useLocation()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTag, setSelectedTag] = useState('全部')
  const [sortBy, setSortBy] = useState('最新')

  // 当跳转到博客页面时，滚动到顶部
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    if (location.hash) {
      window.history.replaceState(null, '', location.pathname)
    }
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 50)
    return () => clearTimeout(timer)
  }, [location.pathname])

  // 模拟博客文章数据
  const blogPosts = [
    {
      id: 1,
      title: '摄影技巧：如何捕捉完美的城市夜景',
      excerpt: '城市夜景摄影是一门艺术，需要掌握正确的技巧和时机。在这篇文章中，我将分享一些实用的拍摄技巧...',
      content: '城市夜景摄影是一门艺术，需要掌握正确的技巧和时机。在这篇文章中，我将分享一些实用的拍摄技巧，包括相机设置、构图原则、后期处理等方面。通过合理的曝光控制和创意构图，我们可以捕捉到令人惊叹的城市夜景作品。',
      author: 'Jarred Ren',
      date: '2024-01-20',
      readTime: '5 分钟',
      tags: ['摄影技巧', '夜景摄影', '教程'],
      image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&h=400&fit=crop',
      likes: 42,
      views: 1280
    },
    {
      id: 2,
      title: '我的摄影器材推荐清单',
      excerpt: '经过多年的摄影实践，我总结出了一套适合自己的器材配置。从相机到镜头，从三脚架到滤镜...',
      content: '经过多年的摄影实践，我总结出了一套适合自己的器材配置。从相机到镜头，从三脚架到滤镜，每个器材的选择都经过深思熟虑。在这篇文章中，我将详细介绍我的器材清单，以及选择这些器材的原因。',
      author: 'Jarred Ren',
      date: '2024-01-18',
      readTime: '8 分钟',
      tags: ['器材推荐', '摄影装备', '经验分享'],
      image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=800&h=400&fit=crop',
      likes: 38,
      views: 956
    },
    {
      id: 3,
      title: '旅行摄影：记录路上的美好时光',
      excerpt: '旅行摄影不仅仅是记录风景，更是记录心情和故事。每一次旅行都是一次心灵的洗礼...',
      content: '旅行摄影不仅仅是记录风景，更是记录心情和故事。每一次旅行都是一次心灵的洗礼，每一张照片都承载着独特的回忆。在这篇文章中，我将分享我的旅行摄影心得，包括如何选择拍摄地点、如何与当地人交流、如何捕捉当地文化特色等。',
      author: 'Jarred Ren',
      date: '2024-01-15',
      readTime: '6 分钟',
      tags: ['旅行摄影', '人文摄影', '故事'],
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=400&fit=crop',
      likes: 56,
      views: 1420
    },
    {
      id: 4,
      title: '后期处理：让照片更有表现力',
      excerpt: '好的后期处理能够提升照片的表现力，但过度处理也会适得其反。掌握平衡是关键...',
      content: '好的后期处理能够提升照片的表现力，但过度处理也会适得其反。掌握平衡是关键。在这篇文章中，我将分享我的后期处理流程，包括RAW文件处理、色彩调整、细节增强等技巧。',
      author: 'Jarred Ren',
      date: '2024-01-12',
      readTime: '7 分钟',
      tags: ['后期处理', 'Photoshop', 'Lightroom'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      likes: 33,
      views: 789
    },
    {
      id: 5,
      title: '人像摄影的构图技巧',
      excerpt: '人像摄影是摄影中最具挑战性的题材之一。如何通过构图来突出人物的特点和情感...',
      content: '人像摄影是摄影中最具挑战性的题材之一。如何通过构图来突出人物的特点和情感，是每个摄影师都需要掌握的技能。在这篇文章中，我将分享人像摄影的构图技巧，包括角度选择、景深控制、光线运用等。',
      author: 'Jarred Ren',
      date: '2024-01-10',
      readTime: '9 分钟',
      tags: ['人像摄影', '构图技巧', '光线'],
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=800&h=400&fit=crop',
      likes: 47,
      views: 1156
    },
    {
      id: 6,
      title: '摄影师的成长之路',
      excerpt: '从初学者到专业摄影师，这是一个充满挑战和收获的过程。分享我的成长经历和感悟...',
      content: '从初学者到专业摄影师，这是一个充满挑战和收获的过程。在这篇文章中，我将分享我的成长经历和感悟，包括学习摄影的各个阶段、遇到的困难和解决方法、以及如何保持对摄影的热情。',
      author: 'Jarred Ren',
      date: '2024-01-08',
      readTime: '10 分钟',
      tags: ['成长经历', '摄影心得', '感悟'],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
      likes: 29,
      views: 634
    }
  ]

  const allTags = ['全部', '摄影技巧', '夜景摄影', '教程', '器材推荐', '摄影装备', '经验分享', '旅行摄影', '人文摄影', '故事', '后期处理', 'Photoshop', 'Lightroom', '人像摄影', '构图技巧', '光线', '成长经历', '摄影心得', '感悟']

  // 过滤和排序文章
  const filteredPosts = blogPosts
    .filter(post => {
      const matchesSearch = searchTerm === '' || 
                          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesTag = selectedTag === '全部' || post.tags.includes(selectedTag)
      return matchesSearch && matchesTag
    })
    .sort((a, b) => {
      if (sortBy === '最新') {
        return new Date(b.date) - new Date(a.date)
      } else if (sortBy === '最热') {
        return b.likes - a.likes
      } else if (sortBy === '最多阅读') {
        return b.views - a.views
      }
      return 0
    })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="page-container">
      <div className="blog-container">
        {/* 简洁的标题 */}
        <motion.div 
          className="blog-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Blog</h1>
        </motion.div>

        {/* 文章列表 - 简洁的单栏布局 */}
        <motion.div 
          className="blog-posts"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                className="blog-post"
                variants={itemVariants}
                layout
              >
                <div className="post-header">
                  <span className="post-date">{post.date}</span>
                  <h2 className="post-title">
                    <a href="#" className="post-link">{post.title}</a>
                  </h2>
                </div>
                
                <p className="post-excerpt">{post.excerpt}</p>
                
                <div className="post-footer">
                  <div className="post-tags">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                  <span className="read-time">{post.readTime}</span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

export default Blog
