# Cubox Saver PopClip Extension

一个用于将选中文本快速保存到 Cubox 的 PopClip 插件。

## 功能特点

- 🚀 一键保存选中的文本到 Cubox
- ⚙️ 可配置的 API URL、默认文件夹和标签
- 📝 自动生成标题（取文本首行或前50个字符）
- ✅ 实时反馈操作结果
- 🔒 安全的 API 调用

## 安装方法

1. 双击 `Cubox Saver.popclipext` 文件
2. PopClip 会自动安装插件

## 配置

安装后，需要在 PopClip 的插件设置中配置以下选项：

### 必需配置
- **Cubox API URL**: 你的 Cubox API 链接
  - 获取方式：登录 [Cubox 网页版](https://cubox.cc) > 设置 > 扩展与自动化 > API 扩展
  - 格式类似：`https://cubox.cc/c/api/v1/...`

### 可选配置
- **Default Folder**: 默认保存文件夹（留空则保存到收件箱）
- **Default Tag**: 默认标签（默认为 "PopClip"）

## 使用方法

1. 在任意应用中选中你想要保存的文本
2. 在 PopClip 弹出的操作栏中点击 "Save to Cubox" 按钮
3. 插件会自动将文本保存到 Cubox 并显示操作结果

## 注意事项

- ⚠️ **请妥善保管你的 API 链接**，这是你身份的唯一凭证
- 📊 Cubox 高级用户每日可进行 500 次 API 调用
- 🔄 保存成功后，Cubox 会自动处理文章解析和快照存档

## 故障排除

- **"Please set your Cubox API URL"**: 需要在插件设置中配置 API URL
- **"No text selected"**: 请先选中一些文本
- **"Failed to save to Cubox"**: 检查 API URL 是否正确，或网络连接
- **"Network error"**: 检查网络连接

## 技术信息

- 支持的 PopClip 版本：4155+
- 使用 Cubox Open API
- 保存类型：memo（备忘录）

## 更新日志

### v1.0.0
- 首次发布
- 支持文本保存到 Cubox
- 支持自定义文件夹和标签