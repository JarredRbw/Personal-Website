// 个人信息与技能：文字字段均为 { en, zh }

export const contact = {
  email: 'jarredr1@uci.edu',
  github: 'https://github.com/JarredRbw',
  location: { en: 'Irvine, CA', zh: '加州尔湾' },
  // 网站上的简历是去掉电话号码的版本，原件留在本地投递用
  resumeUrl: '/resume.pdf',
  photographyResumeUrl: '/resume-photography.pdf'
}

export const skillGroups = [
  {
    title: { en: 'Languages', zh: '编程语言' },
    items: ['C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'PHP', 'SQL']
  },
  {
    title: { en: 'Web', zh: 'Web 开发' },
    items: ['React', 'Next.js', 'HTML / CSS', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'MySQL', 'OAuth', 'Git', 'Vercel', 'WeChat Mini Programs']
  },
  {
    title: { en: 'AI & Computer Vision', zh: 'AI 与计算机视觉' },
    items: ['YOLOv8', 'OpenCV', 'CNN / LSTM models', 'Raspberry Pi inference']
  },
  {
    title: { en: 'Systems & Hardware', zh: '系统与硬件' },
    items: ['Windows', 'macOS', 'Linux / Raspberry Pi', 'PC assembly', 'BIOS / UEFI', 'Drivers & peripherals']
  },
  {
    title: { en: 'Networking', zh: '网络' },
    items: ['Router / AP setup', 'Ethernet cabling', 'Wi-Fi', 'Connectivity troubleshooting', 'Fault isolation']
  },
  {
    title: { en: 'Photography & AV', zh: '摄影与音视频' },
    items: ['Live-event photography', 'Photo selection & curation', 'Stage lighting', 'Microphone & audio setup']
  },
  {
    title: { en: 'Spoken Languages', zh: '语言' },
    items: ['Mandarin Chinese (native)', 'English']
  }
]
