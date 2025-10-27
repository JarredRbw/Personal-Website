# 🚀 快速上手指南

## 1️⃣ 创建 GitHub 仓库

访问 [GitHub](https://github.com/new) 创建新仓库：
- 仓库名称：`PersonalWeb` 或你喜欢的名字
- 选择 Public 或 Private
- **不要**勾选 "Add a README file"
- 点击 "Create repository"

## 2️⃣ 推送代码到 GitHub

在终端运行以下命令（将 `YOUR_USERNAME` 替换为你的 GitHub 用户名）：

```bash
cd /Users/jarredren/PersonalWeb

# 添加远程仓库
git remote add origin https://github.com/YOUR_USERNAME/PersonalWeb.git

# 推送代码
git branch -M main
git push -u origin main
```

**注意**：如果使用 HTTPS 推送，系统会提示你输入用户名和密码。使用 GitHub Personal Access Token 作为密码。

### 如何创建 Personal Access Token

1. 访问 GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. 点击 "Generate new token (classic)"
3. 设置名称和过期时间
4. 勾选 `repo` 权限
5. 点击 "Generate token"
6. 复制生成的 token（只显示一次）

## 3️⃣ 在 Vercel 部署

### 通过网页部署（推荐）

1. 访问 [vercel.com](https://vercel.com)
2. 点击 "Sign Up"，使用 GitHub 账号登录
3. 登录后，点击 "Add New" → "Project"
4. 在 "Import Git Repository" 页面找到你的仓库
5. 点击 "Import" 按钮
6. 保持默认设置，直接点击 "Deploy"
7. 等待部署完成（约 1-2 分钟）

### 部署配置

Vercel 会自动检测到这是一个 Vite 项目，配置如下：
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## 4️⃣ 访问你的网站

部署成功后，Vercel 会显示你的网站 URL：
```
https://personalweb-xxxxx.vercel.app
```

点击 URL 即可访问你的网站！

## 5️⃣ 自定义内容

修改本地代码后，推送到 GitHub 会自动触发 Vercel 重新部署：

```bash
# 修改文件后
git add .
git commit -m "Update content"
git push
```

## 📝 更新照片

要使用你自己的照片：

1. **方法一：上传到项目**
   - 在项目根目录创建 `public/images/` 文件夹
   - 放入你的图片
   - 在 `src/pages/Photography.jsx` 中引用：`image: '/images/your-photo.jpg'`

2. **方法二：使用 CDN**
   - 上传图片到 [Cloudinary](https://cloudinary.com) 或 [Imgur](https://imgur.com)
   - 使用返回的 URL 替换图片链接

## 🎨 修改个人信息

1. 编辑 `src/pages/About.jsx` - 个人信息、联系方式
2. 编辑 `src/pages/Photography.jsx` - 摄影作品
3. 编辑 `src/pages/Blog.jsx` - 博客文章
4. 编辑 `src/components/Navbar.jsx` - 网站名称

修改后提交并推送即可生效。

## 🔧 常见问题

### Q: 部署后图片不显示？
A: 检查图片路径是否正确，或使用 CDN 服务。

### Q: 如何添加自定义域名？
A: 在 Vercel 项目页面 → Settings → Domains 添加你的域名。

### Q: 如何回退到之前的版本？
A: 在 Vercel 的 Deployments 页面找到之前的部署，点击 "Promote to Production"。

## 📞 需要帮助？

查看 [DEPLOYMENT.md](./DEPLOYMENT.md) 获取详细的部署指南。
