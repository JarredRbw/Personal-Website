# 个人摄影作品集网站

一个现代化的个人摄影作品集网站，具有流畅的动画效果和优秀的用户体验。

## 🌐 在线预览

- **GitHub**: [https://github.com/JarredRbw/Personal-Website](https://github.com/JarredRbw/Personal-Website)
- **Vercel**: 部署后添加链接

## 📸 在线网站

访问我的个人摄影作品集：[查看链接](#)（Vercel 部署后更新）

## 功能特色

### 🎨 现代化设计
- 响应式布局，适配各种设备
- 流畅的页面切换动画
- 优雅的加载效果
- 现代化的UI设计

### 📸 摄影作品展示
- 网格布局展示摄影作品
- 分类筛选功能
- 照片详情模态框
- 点赞和分享功能
- 响应式图片加载

### 📝 博客系统
- 文章列表展示
- 搜索和筛选功能
- 标签分类系统
- 阅读统计和点赞
- 文章详情页面

### 👤 个人介绍
- 个人资料展示
- 技能水平展示
- 成就时间线
- 创作理念分享
- 社交媒体链接

## 技术栈

- **前端框架**: React 18
- **构建工具**: Vite
- **路由**: React Router DOM
- **动画**: Framer Motion
- **图标**: Lucide React
- **样式**: CSS3 + 现代CSS特性

## 性能优化

- 代码分割和懒加载
- 图片优化和懒加载
- 组件级别的性能优化
- 构建优化配置
- 现代浏览器兼容性

## 快速开始

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

## 项目结构

```
src/
├── components/          # 可复用组件
│   ├── Navbar.jsx      # 导航栏组件
│   └── Navbar.css      # 导航栏样式
├── pages/              # 页面组件
│   ├── Home.jsx        # 首页
│   ├── Home.css        # 首页样式
│   ├── Photography.jsx # 摄影作品页面
│   ├── Photography.css # 摄影作品样式
│   ├── Blog.jsx        # 博客页面
│   ├── Blog.css        # 博客样式
│   ├── About.jsx       # 关于页面
│   └── About.css       # 关于页面样式
├── App.jsx             # 主应用组件
├── App.css             # 全局样式
├── main.jsx            # 应用入口
└── index.css           # 基础样式
```

## 自定义配置

### 修改个人信息
在 `src/pages/About.jsx` 中修改个人信息：
- 姓名和简介
- 联系方式
- 社交媒体链接
- 技能水平
- 成就经历

### 添加摄影作品
在 `src/pages/Photography.jsx` 中的 `photos` 数组中添加新的作品：
```javascript
{
  id: 7,
  title: '作品标题',
  description: '作品描述',
  category: '分类',
  date: '2024-01-20',
  likes: 0,
  image: '图片URL'
}
```

### 添加博客文章
在 `src/pages/Blog.jsx` 中的 `blogPosts` 数组中添加新文章：
```javascript
{
  id: 7,
  title: '文章标题',
  excerpt: '文章摘要',
  content: '文章内容',
  author: '作者',
  date: '2024-01-20',
  readTime: '5 分钟',
  tags: ['标签1', '标签2'],
  image: '封面图片URL',
  likes: 0,
  views: 0
}
```

## 部署

### 构建生产版本
```bash
npm run build
```

构建完成后，`dist` 文件夹包含所有静态文件，可以部署到任何静态网站托管服务。

### 推荐部署平台
- Vercel
- Netlify
- GitHub Pages
- 阿里云OSS
- 腾讯云COS

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge
- 移动端浏览器

## 许可证

MIT License

## 联系方式

如有问题或建议，请通过以下方式联系：
- Email: jarred@example.com
- GitHub: @jarredren
- 个人网站: https://jarredren.com