# 🎉 代码已成功上传到 GitHub！

你的代码已经成功推送到：[https://github.com/JarredRbw/Personal-Website](https://github.com/JarredRbw/Personal-Website)

## 现在部署到 Vercel

### 方法一：通过 Vercel 网页（最简单）⭐ 推荐

1. **访问 Vercel**
   - 打开 [https://vercel.com](https://vercel.com)
   - 点击右上角的 "Sign Up" 或 "Login"

2. **使用 GitHub 登录**
   - 选择 "Continue with GitHub"
   - 授权 Vercel 访问你的 GitHub 账号

3. **导入项目**
   - 登录后点击 "Add New Project"
   - 在仓库列表中找到并选择 `Personal-Website` 或 `JarredRbw/Personal-Website`
   - 点击 "Import" 按钮

4. **配置项目**
   - **Framework Preset**: Vite（Vercel 会自动检测）
   - **Root Directory**: `./`（保持不变）
   - **Build Command**: `npm run build`（自动填充）
   - **Output Directory**: `dist`（自动填充）
   - **Install Command**: `npm install`（自动填充）
   
   ⚠️ **重要**：保持默认设置即可，不需要修改任何配置！

5. **开始部署**
   - 点击 "Deploy" 按钮
   - 等待 1-2 分钟完成构建和部署

6. **完成！**
   - 部署成功后，你会看到一个 URL，例如：`https://personal-website-xxxxx.vercel.app`
   - 点击即可访问你的网站！

### 方法二：通过 Vercel CLI

如果你想通过命令行部署：

```bash
# 安装 Vercel CLI
npm install -g vercel

# 在项目目录中运行
cd /Users/jarredren/PersonalWeb
vercel

# 按照提示完成部署
```

## 后续更新网站

更新很简单，只需要：

1. 在本地修改文件
2. 提交并推送：
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
3. Vercel 会自动检测到更新并重新部署！

## 自定义域名（可选）

1. 在 Vercel 项目页面点击 "Settings"
2. 选择 "Domains"
3. 输入你的域名（例如：`jarredren.com`）
4. 按照提示配置 DNS 记录

## 故障排除

### 如果部署失败

1. 检查 Vercel 的构建日志
2. 确保所有依赖都正确安装在 `package.json` 中
3. 验证 `vite.config.js` 配置正确

### 如果图片不显示

当前使用的是 Unsplash 示例图片。要使用你自己的图片：

1. 创建 `public/images/` 目录
2. 放入你的图片文件
3. 在代码中使用路径：`/images/your-image.jpg`

### 如果样式有问题

确保 `index.css` 和其他 CSS 文件都被正确导入。

## 网站预览

部署完成后，你的网站将包括：

- 🏠 **首页** - 欢迎页面和功能概览
- 📸 **摄影作品** - 网格展示你的摄影作品，支持分类筛选
- 📝 **博客** - 文章列表，支持搜索和筛选
- 👤 **关于我** - 个人介绍、技能和成就展示

## 需要帮助？

- Vercel 文档：https://vercel.com/docs
- Vite 文档：https://vitejs.dev/
- React 文档：https://react.dev/

---

**部署完成后，记得更新 `README.md` 添加你的网站链接！**
