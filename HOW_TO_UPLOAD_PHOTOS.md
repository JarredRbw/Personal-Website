# 📸 如何上传你的照片

本指南将教你如何将你自己的照片添加到个人网站中。

## 🎯 步骤一：准备你的照片

### 推荐的图片规格

- **格式**: JPG, PNG 或 WebP（WebP 推荐，文件更小）
- **宽度**: 1200-2000px
- **文件大小**: 每个文件 < 500KB
- **命名**: 使用英文或拼音，避免空格，例如 `portrait-01.jpg`

### 优化图片（可选但推荐）

使用在线工具压缩图片以加快加载速度：

1. **TinyPNG** - https://tinypng.com/
   - 拖拽上传图片
   - 自动压缩
   - 下载压缩后的文件

2. **Squoosh** - https://squoosh.app/
   - 更高级的压缩选项
   - 可以转换为 WebP 格式

## 🎯 步骤二：上传照片到项目

### 方法 A：使用 Finder（macOS）

1. 打开 Finder
2. 导航到项目文件夹：
   ```
   /Users/jarredren/PersonalWeb/public/images
   ```
3. 将你的照片拖拽到这个文件夹中

### 方法 B：使用 VS Code

1. 在 VS Code 左侧文件树中找到 `public/images` 文件夹
2. 右键点击文件夹 → "Reveal in Finder"
3. 将照片拖拽到打开的文件夹中

### 方法 C：使用终端

```bash
# 复制照片到项目（替换实际路径）
cp ~/Downloads/your-photo.jpg /Users/jarredren/PersonalWeb/public/images/

# 或者移动照片
mv ~/Downloads/your-photo.jpg /Users/jarredren/PersonalWeb/public/images/
```

## 🎯 步骤三：更新代码引用照片

上传照片后，需要更新代码中的图片引用。

### 编辑摄影作品页面

1. 打开文件：`src/pages/Photography.jsx`
2. 找到 `photos` 数组
3. 修改 `image` 字段，使用你的照片文件名：

```javascript
{
  id: 1,
  title: '我的摄影作品标题',
  description: '作品描述',
  category: '人像摄影',
  date: '2024-01-20',
  likes: 42,
  image: '/images/your-photo.jpg'  // 使用 /images/ 开头的路径
}
```

### 图片路径规则

- 使用 `/images/` 作为路径前缀
- `/images/` 指向 `public/images/` 文件夹
- 路径区分大小写

## 🎯 步骤四：测试和部署

### 本地测试

1. 保存文件
2. 开发服务器会自动重新加载
3. 在浏览器中查看效果
4. 如果图片不显示，检查：
   - 文件名是否正确
   - 文件是否在正确的位置（`public/images/`）
   - 文件路径是否使用 `/images/` 前缀

### 上传到 GitHub

```bash
cd /Users/jarredren/PersonalWeb

# 添加新文件
git add public/images/

# 提交更改
git commit -m "Add personal photos"

# 推送到 GitHub
git push
```

### Vercel 自动部署

- 推送代码后，Vercel 会自动重新部署
- 等待 1-2 分钟即可看到更新

## 📝 完整示例

假设你有一个名为 `my-portrait.jpg` 的照片：

### 1. 将照片放在文件夹中
```
public/images/my-portrait.jpg
```

### 2. 在 Photography.jsx 中使用
```javascript
{
  id: 1,
  title: '人像摄影作品',
  description: '这是我的人像摄影作品',
  category: '人像摄影',
  date: '2024-01-20',
  likes: 42,
  image: '/images/my-portrait.jpg'  // 引用你的照片
}
```

### 3. 提交到 Git
```bash
git add public/images/my-portrait.jpg
git add src/pages/Photography.jsx
git commit -m "Add portrait photo"
git push
```

## 🎨 更新博客文章封面图

博客文章的封面图也是同样的方法：

1. 将图片放到 `public/images/` 文件夹
2. 在 `src/pages/Blog.jsx` 中更新 `image` 字段
3. 使用 `/images/your-blog-image.jpg` 路径

## 🔧 常见问题

### Q: 图片上传后不显示？
**A:** 检查以下几点：
- 文件是否在 `public/images/` 文件夹中
- 路径是否使用 `/images/` 前缀（不是 `./images/`）
- 文件名是否正确（区分大小写）
- 刷新浏览器缓存（Cmd+Shift+R）

### Q: 图片太大加载慢？
**A:** 使用图片压缩工具（TinyPNG 或 Squoosh）压缩后再上传

### Q: 可以一次性上传多张照片吗？
**A:** 可以！在 Finder 中选择多张照片一起拖拽到文件夹即可

### Q: 照片路径区分大小写吗？
**A:** 是的，确保代码中的文件名与实际文件名完全一致

## 💡 提示

1. **组织照片**: 可以在 `images` 文件夹下创建子文件夹，如：
   - `images/portraits/` - 人像
   - `images/landscapes/` - 风景
   - `images/details/` - 细节

2. **批量处理**: 如果要添加多张照片，建议一次上传所有照片，然后统一更新代码

3. **备份**: 记得将原始照片备份到其他位置

4. **Git 注意事项**: 
   - 大文件（>100MB）不要提交到 Git
   - 如果照片超过 10MB，考虑使用外部存储服务

## 🚀 下一步

添加完照片后，记得：
1. 测试所有页面
2. 提交更改到 Git
3. 推送到 GitHub
4. 等待 Vercel 自动部署
5. 访问你的网站查看效果！

## 📞 需要帮助？

如果遇到问题，检查：
- 浏览器控制台的错误信息
- 文件路径是否正确
- Git 提交是否成功

祝你添加照片顺利！🎉
