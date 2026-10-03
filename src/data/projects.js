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
      en: 'An independent full-stack app that connects to Gmail, sorts and prioritizes mail with AI, and turns emails into tasks and scheduled items.',
      zh: '独立开发的全栈应用：连接 Gmail，用 AI 对邮件分类和排优先级，并把邮件转化为任务和日程。'
    },
    highlights: {
      en: [
        'Gmail OAuth with incremental mailbox synchronization',
        'AI classification, priority scoring, task queues and scheduling, persisted in PostgreSQL (Supabase)',
        'Validated workflows on a 250-email dataset, with 29 passing application tests'
      ],
      zh: [
        'Gmail OAuth 登录，增量同步邮箱',
        'AI 分类、优先级评分、任务队列和日程安排，数据存储在 PostgreSQL（Supabase）',
        '在 250 封邮件的数据集上验证流程，29 个应用测试全部通过'
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
      en: 'Founded and built my high school’s internal discussion forum, and maintained it for three years (2023–2026).',
      zh: '创立并搭建了高中的校内论坛，持续维护三年（2023–2026）。'
    },
    highlights: {
      en: [
        'PHP + MySQL with custom URL routing',
        'Designed the data structures, UI pages and moderation tools, plus a few small AI utilities',
        'Anonymous feedback section; recurring concerns there led me to found the school’s student representative council'
      ],
      zh: [
        'PHP + MySQL，自定义 URL 路由',
        '设计数据结构、页面和审核工具，以及几个小型 AI 工具',
        '匿名反馈版块：其中反复出现的学生诉求促使我创立了学生代表委员会'
      ]
    },
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    links: []
  },
  {
    id: 'bjea-alumni-mini-program',
    group: 'software',
    featured: true,
    title: { en: 'BJEA Alumni WeChat Mini Program', zh: 'BJEA 校友微信小程序' },
    summary: {
      en: 'A full-stack alumni networking app inside WeChat that connects 100+ graduates.',
      zh: '运行在微信中的全栈校友社交应用，连接了 100 多位毕业生。'
    },
    highlights: {
      en: [
        'Designed 10+ UI pages with search and navigation',
        'Built backend prototypes in Python on top of WeChat APIs',
        'Centralizes alumni updates, events and mentorship opportunities'
      ],
      zh: [
        '设计 10 多个页面，包含搜索与导航逻辑',
        '基于微信 API 用 Python 搭建后端原型',
        '集中展示校友动态、活动信息和导师机会'
      ]
    },
    tech: ['JavaScript', 'Python', 'WeChat Mini Program', 'WeChat APIs'],
    links: []
  },
  {
    id: 'sign-language-recognition',
    group: 'software',
    title: { en: 'Chinese Sign Language Recognition', zh: '中国手语识别' },
    summary: {
      en: 'A CNN-BiLSTM model that recognizes Chinese sign language from video sequences, built with mentors in the PKU Yuanpei Young Scholars Program.',
      zh: '在北大元培青年学者项目中，与导师合作搭建的 CNN-BiLSTM 模型，从视频序列中识别中国手语。'
    },
    highlights: {
      en: [
        'Cleaned and labeled the sequence data',
        'Designed a spatial-temporal architecture and tuned hyperparameters',
        'Reached 90% test accuracy; wrote a research paper and passed the final defense'
      ],
      zh: [
        '清洗并标注序列数据',
        '设计时空结合的网络结构并调参',
        '测试准确率达到 90%，完成研究论文和结业答辩'
      ]
    },
    tech: ['Python', 'Deep Learning', 'CNN', 'BiLSTM'],
    links: []
  },
  {
    id: 'chrome-web-time-tracker',
    group: 'software',
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
