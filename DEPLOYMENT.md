# 部署指南

本指南将帮助你将个人网站部署到 Vercel。

## 前置要求

1. GitHub 账号
2. Vercel 账号（可以使用 GitHub 账号登录）

## 步骤 1: 创建 GitHub 仓库

1. 访问 [GitHub](https://github.com)
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 填写仓库信息：
   - **Repository name**: `PersonalWeb`（或其他你喜欢的名称）
   - **Description**: "个人摄影作品集网站"
   - **Visibility**: 选择 Public 或 Private
4. **不要**勾选 "Add a README file"
5. 点击 "Create repository"

## 步骤 2: 将本地代码推送到 GitHub

在终端中运行以下命令：

```bash
# 设置远程仓库（将 YOUR_USERNAME 替换为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/PersonalWeb.git

# 重命名主分支为 main（如果还没有）
git branch -M main

# 推送代码到 GitHub
git push -u origin main
凳子映@github.com
```

如果遇到认证问题，请使用 Personal Access Token 或 GitHub CLI。

## 步骤 3: 在 Vercel 部署

### 方法一：通过 GitHub 自动导入

1. 访问 [Vercel](https://vercel.com)
2. 点击 "Sign Up" 或 "Login"，使用 GitHub 账号登录
3. 登录后，点击 "Add New" → "Project"
4. 在 "Import Git Repository" 页面，找到你刚创建的 GitHub 仓库
5. 点击 "Import" 按钮
6. 在项目配置页面：
   - **Framework Preset**: Vite（应该自动检测）
   - **Root Directory**: `./`（保持不变）
   - **Build Command**: `npm run build`（自动填充）
   - **Output Directory**: `dist`（自动填充）
   - **Install Command**: `npm install`（自动填充）
7. 点击 "Deploy" 按钮
8. 等待部署完成（通常需要 1-2 分钟）

### 方法二：使用 Vercel CLI

```bash
# 安装 Vercel CLI
npm install -g vercel

# 在项目目录中运行
vercel

# 按照提示完成部署
```

## 步骤 4: 查看你的网站

部署成功后，Vercel 会提供一个 URL，例如：
```
https://personalweb-xxxxx.vercel.app
```

## 步骤 5: 自定义域名（可选）

1. 在 Vercel 项目页面，点击 "Settings" → "Domains"
2. 添加你的自定义域名
3. 根据提示配置 DNS 记录

## 持续部署

由于你通过 GitHub 导入，Vercel 会自动设置持续部署：
- 每次你推送到 GitHub 的 main 分支，Vercel 会自动重新部署网站
- 你可以在 Vercel 面板查看部署历史和状态

## 故障排除

### 构建失败

如果构建失败，检查：
1. `package.json` 中的依赖是否正确
2. 构建命令是否正确
3. 查看 Vercel 的构建日志获取详细错误信息

### 图片不显示

当前网站使用的是 Unsplash 的示例图片。要使用你的实际图片：
1. 将图片上传到项目的 `public/images/` 目录
2. 在代码中引用 `./images/your-image.jpg`
3. 或者使用 CDN 服务（如 Cloudinary、Imgur 等）

## 性能优化建议

1. **图片优化**：
   - 使用 WebP 格式
   - 压缩图片大小
   - 使用懒加载

2. **代码分割**：
   - 已配置在 `vite.config.js` 中
   - 自动代码分割和懒加载

3. **缓存策略**：
   - Vercel 自动配置了优化的缓存策略

## 更新网站内容

1. 在本地修改代码
2. 提交并推送到 GitHub：
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
3. Vercel 会自动重新部署

## 支持

如有问题，请参考：
- [Vercel 文档](https://vercel.com/docs)
- [Vite 文档](https://vitejs.dev/)
- [React 文档](https://react.dev/)
