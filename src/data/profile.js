// 个人信息与技能：文字字段均为 { en, zh }

export const contact = {
  email: 'jarredr1@uci.edu',
  github: 'https://github.com/JarredRbw',
  location: { en: 'Irvine, CA', zh: '加州尔湾' },
  // 把简历 PDF 放到 public/ 下并填入路径（例如 '/resume.pdf'），网站上就会显示下载按钮
  resumeUrl: null
}

export const skillGroups = [
  {
    title: { en: 'Languages', zh: '编程语言' },
    items: ['C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'PHP', 'SQL']
  },
  {
    title: { en: 'Web', zh: 'Web 开发' },
    items: ['React', 'Next.js', 'HTML / CSS', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'MySQL']
  },
  {
    title: { en: 'Systems & Hardware', zh: '系统与硬件' },
    items: ['Windows', 'macOS', 'Linux / Raspberry Pi', 'PC assembly', 'BIOS / UEFI', 'Drivers & peripherals']
  },
  {
    title: { en: 'Networking & AV', zh: '网络与音视频' },
    items: ['Router / AP setup', 'Ethernet cabling', 'Wi-Fi', 'Connectivity troubleshooting', 'Stage lighting', 'Live sound']
  }
]
