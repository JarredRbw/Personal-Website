// 这是一个示例文件，展示如何引用本地图片
// 实际代码在 Photography.jsx 中

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Heart, Share2, Download } from 'lucide-react'
import './Photography.css'

const Photography = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [likedPhotos, setLikedPhotos] = useState(new Set())

  // 摄影作品数据 - 使用本地图片的示例
  const photos = [
    {
      id: 1,
      title: '专注的创作',
      description: '捕捉创作过程中的专注瞬间，柔和的侧影展现内心的宁静',
      category: '人像摄影',
      date: '2024-01-20',
      likes: 42,
      // ⬇️ 将照片放在 public/images/ 文件夹中，然后这样引用：
      image: '/images/my-photo-1.jpg'  // 替换为你的实际文件名
    },
    {
      id: 2,
      title: '纸间时光',
      description: '记录手与纸张的亲密接触，黑白影调赋予日常以诗意',
      category: '静物摄影',
      date: '2024-01-18',
      likes: 38,
      // ⬇️ 第二个示例
      image: '/images/my-photo-2.jpg'  // 替换为你的实际文件名
    },
    // ... 其他照片
  ]

  // 📌 重要说明：
  // 1. 图片路径以 /images/ 开头
  // 2. /images/ 指向 public/images/ 文件夹
  // 3. 文件名区分大小写
  // 4. 支持的格式：JPG, PNG, WebP
  
  return (
    // ... 其余代码保持不变
  )
}

export default Photography

