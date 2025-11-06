import { useState, useEffect } from 'react'
import { Save, Eye, Type } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Admin.css'

const Admin = () => {
  // 默认内容
  const defaultContent = {
    mainTitle: 'WELCOME TO MY WORLD',
    subtitle: 'Capturing life through the lens,\nsharing insights through words',
    carouselImages: [
      {
        url: '/images/HeadPicture.jpeg',
        title: '个人头像'
      },
      {
        url: '/images/baita.jpg',
        title: '美好时光的见证'
      }
    ]
  }

  // 从本地存储加载内容
  const [content, setContent] = useState(defaultContent)

  useEffect(() => {
    const savedContent = localStorage.getItem('websiteContent')
    if (savedContent) {
      try {
        const parsedContent = JSON.parse(savedContent)
        // 兼容新旧数据结构
        if (parsedContent.home) {
          setContent(parsedContent.home)
        } else {
          setContent(parsedContent)
        }
      } catch (error) {
        console.error('Error parsing saved content:', error)
        setContent(defaultContent)
      }
    }
  }, [])

  // 保存内容到本地存储
  const saveContent = () => {
    localStorage.setItem('websiteContent', JSON.stringify(content))
    alert('内容已保存！刷新首页查看效果。')
  }

  // 更新内容
  const updateContent = (field, value) => {
    setContent(prev => ({
      ...prev,
      [field]: value
    }))
  }

  // 更新轮播图片
  const updateCarouselImage = (index, field, value) => {
    setContent(prev => ({
      ...prev,
      carouselImages: prev.carouselImages.map((img, i) => 
        i === index ? { ...img, [field]: value } : img
      )
    }))
  }

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>网站内容管理</h1>
        <div className="admin-actions">
          <Link to="/" className="preview-btn">
            <Eye size={20} />
            预览网站
          </Link>
          <button onClick={saveContent} className="save-btn">
            <Save size={20} />
            保存更改
          </button>
        </div>
      </div>

      <div className="admin-layout">
        <div className="admin-main">
          <div className="settings-panel">
            <div className="panel-header">
              <Type size={24} />
              <h2>首页设置</h2>
            </div>
            
            <div className="form-group">
              <label>主标题</label>
              <input
                type="text"
                value={content.mainTitle}
                onChange={(e) => updateContent('mainTitle', e.target.value)}
                className="title-input"
              />
            </div>
            
            <div className="form-group">
              <label>副标题</label>
              <textarea
                value={content.subtitle}
                onChange={(e) => updateContent('subtitle', e.target.value)}
                className="subtitle-textarea"
                rows={3}
              />
              <small>使用 \n 来换行</small>
            </div>
            
            <div className="form-group">
              <label>轮播图片</label>
              <div className="images-grid">
                {content.carouselImages.map((image, index) => (
                  <div key={index} className="image-item">
                    <div className="image-preview">
                      <img src={image.url} alt={image.title} />
                    </div>
                    <div className="image-form">
                      <div className="form-group">
                        <label>图片路径</label>
                        <input
                          type="text"
                          value={image.url}
                          onChange={(e) => updateCarouselImage(index, 'url', e.target.value)}
                          placeholder="/images/your-image.jpg"
                        />
                      </div>
                      <div className="form-group">
                        <label>图片标题</label>
                        <input
                          type="text"
                          value={image.title}
                          onChange={(e) => updateCarouselImage(index, 'title', e.target.value)}
                          placeholder="图片描述"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin