// 项目数据：group 为 'software' 或 'it'，文字字段均为 { en, zh }
// links 为空数组时不显示链接（私有仓库）

const GITHUB = 'https://github.com/JarredRbw'

export const projects = [
  {
    id: 'ai-email-assistant',
    group: 'software',
    featured: true,
    title: { en: 'AI Email Assistant', zh: 'AI 邮件助手' },
    summary: {
      en: 'A web app that connects to Gmail, sorts incoming mail with AI, and turns emails into tasks and calendar items.',
      zh: '连接 Gmail 的 Web 应用，用 AI 对邮件分类，并把邮件转化为待办任务和日程安排。'
    },
    highlights: {
      en: [
        'Gmail OAuth sign-in and mailbox access',
        'AI-based email classification',
        'Task management and scheduling built on PostgreSQL (Supabase)'
      ],
      zh: [
        'Gmail OAuth 登录与邮箱读取',
        '基于 AI 的邮件自动分类',
        '基于 PostgreSQL（Supabase）的任务管理与日程安排'
      ]
    },
    tech: ['Next.js', 'TypeScript', 'Gmail OAuth', 'Supabase', 'PostgreSQL'],
    links: []
  },
  {
    id: 'bjea-campus-forum',
    group: 'software',
    featured: true,
    title: { en: 'BJEA Campus Forum', zh: 'BJEA 校园论坛' },
    summary: {
      en: 'A full-stack discussion forum for my school community.',
      zh: '为学校社区搭建的全栈论坛。'
    },
    highlights: {
      en: [
        'Custom URL routing written in PHP',
        'MySQL database behind posts, replies and accounts',
        'Moderation tools for keeping discussions on track'
      ],
      zh: [
        '用 PHP 自己实现 URL 路由',
        '帖子、回复和账户数据存储在 MySQL 中',
        '用于管理讨论内容的审核工具'
      ]
    },
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    links: []
  },
  {
    id: 'chrome-web-time-tracker',
    group: 'software',
    featured: true,
    title: { en: 'Chrome Web Time Tracker', zh: 'Chrome 网页时间追踪插件' },
    summary: {
      en: 'A Chrome extension that records how long you spend on each site and shows daily stats in a popup.',
      zh: '记录每个网站浏览时长的 Chrome 插件，在弹窗中展示每日统计。'
    },
    highlights: {
      en: [
        'Manifest V3 with a background service worker',
        'Tabs API and content scripts to detect tab switches and page visibility',
        'All data kept locally with the Chrome Storage API'
      ],
      zh: [
        '基于 Manifest V3 与后台 Service Worker',
        '通过 Tabs API 和 Content Script 监听标签页切换与页面可见性',
        '数据仅通过 Chrome Storage API 保存在本地'
      ]
    },
    tech: ['JavaScript', 'Manifest V3', 'Chrome Tabs API', 'Chrome Storage API'],
    links: [{ label: 'GitHub', url: `${GITHUB}/chrome-web-time-tracker` }]
  },
  {
    id: 'personal-website',
    group: 'software',
    title: { en: 'This Website', zh: '个人网站' },
    summary: {
      en: 'The portfolio you are looking at: a single-page app with client-side routing, animations and an English / Chinese toggle.',
      zh: '就是你正在浏览的这个网站：带客户端路由、动画和中英文切换的单页应用。'
    },
    highlights: {
      en: [
        'React Router with SPA rewrites on Vercel',
        'Framer Motion page and scroll animations',
        'Lightweight i18n with React Context'
      ],
      zh: [
        'React Router 路由，Vercel 上配置 SPA 重写',
        'Framer Motion 页面与滚动动画',
        '用 React Context 实现轻量的多语言切换'
      ]
    },
    tech: ['React', 'Vite', 'React Router', 'Framer Motion'],
    links: [{ label: 'GitHub', url: `${GITHUB}/Personal-Website` }]
  },
  {
    id: 'yolo-web-detection',
    group: 'software',
    title: { en: 'YOLOv8 Person Detection Web App', zh: 'YOLOv8 人员检测 Web 应用' },
    summary: {
      en: 'A Flask web interface for running YOLOv8 person detection on uploaded images, videos and a live webcam.',
      zh: '基于 Flask 的 Web 界面，可对上传的图片、视频和实时摄像头画面做 YOLOv8 人员检测。'
    },
    highlights: {
      en: [
        'Drag-and-drop upload with adjustable confidence and model size',
        'Box-stabilizing logic to reduce flicker in live detection'
      ],
      zh: [
        '支持拖拽上传，可调置信度与模型大小',
        '实时检测中加入检测框稳定逻辑，减少闪烁'
      ]
    },
    tech: ['Python', 'Flask', 'YOLOv8', 'OpenCV'],
    links: [{ label: 'GitHub', url: `${GITHUB}/Yolo-v8-Detect--Include-Person-Only` }]
  },
  {
    id: 'raspberry-pi-yolo',
    group: 'it',
    featured: true,
    title: { en: 'Raspberry Pi 5 Person Detection', zh: '树莓派 5 人员检测系统' },
    summary: {
      en: 'Real-time person detection running on a Raspberry Pi 5, tuned for ARM64 Linux and limited hardware.',
      zh: '运行在树莓派 5 上的实时人员检测，针对 ARM64 Linux 和有限硬件资源做了优化。'
    },
    highlights: {
      en: [
        'About 12 FPS with YOLOv8n at 640×480 on a camera feed',
        'System monitor for CPU, memory, temperature and FPS',
        'One-step install script for Raspberry Pi OS'
      ],
      zh: [
        'YOLOv8n 在 640×480 摄像头画面上约 12 FPS',
        '监控 CPU、内存、温度和帧率的系统监控脚本',
        '面向 Raspberry Pi OS 的一键安装脚本'
      ]
    },
    tech: ['Raspberry Pi 5', 'Linux (ARM64)', 'Python', 'YOLOv8', 'OpenCV'],
    links: [{ label: 'GitHub', url: `${GITHUB}/Yolo-v8-RaspberryPi5-Person-Detection` }]
  },
  {
    id: 'pc-builds',
    group: 'it',
    title: { en: 'PC Builds & Upgrades', zh: '电脑组装与升级' },
    summary: {
      en: 'Hands-on desktop assembly, upgrades and troubleshooting.',
      zh: '动手组装、升级台式机并排查故障。'
    },
    highlights: {
      en: [
        'Installed CPUs, GPUs, storage, AIO coolers, power supplies and fans',
        'BIOS / UEFI configuration, drivers and peripherals',
        'Windows troubleshooting'
      ],
      zh: [
        '安装 CPU、显卡、硬盘、一体式水冷、电源和风扇',
        'BIOS / UEFI 设置、驱动与外设配置',
        'Windows 系统故障排查'
      ]
    },
    tech: ['Hardware', 'BIOS / UEFI', 'Windows'],
    links: []
  },
  {
    id: 'small-networks',
    group: 'it',
    title: { en: 'Small Network Setup', zh: '小型网络部署' },
    summary: {
      en: 'Planning and setting up small wired and wireless networks.',
      zh: '规划并搭建小型有线与无线网络。'
    },
    highlights: {
      en: [
        'Configured routers and wireless access points',
        'Ran Ethernet cabling and terminated endpoints',
        'Isolated and fixed connectivity problems step by step'
      ],
      zh: [
        '配置路由器与无线 AP',
        '布设网线并制作端接',
        '逐步定位并解决网络连接故障'
      ]
    },
    tech: ['LAN', 'Wi-Fi', 'Ethernet'],
    links: []
  },
  {
    id: 'stage-av',
    group: 'it',
    title: { en: 'Stage Lighting & Sound', zh: '舞台灯光与音响' },
    summary: {
      en: 'Lighting and sound technician for school drama productions and talent shows.',
      zh: '学校戏剧演出和才艺表演的灯光音响技术员。'
    },
    highlights: {
      en: [
        'Set up and tuned microphones and sound for live performances',
        'Designed and ran stage lighting'
      ],
      zh: [
        '为现场演出架设并调试麦克风和音响',
        '设计并操控舞台灯光'
      ]
    },
    tech: ['Audio', 'Lighting', 'Live events'],
    links: []
  }
]
