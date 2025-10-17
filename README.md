# Cubox PopClip Extension

<div align="center">

![Cubox Logo](https://cubox.cc/favicon.ico)

**一键保存选中文本到 Cubox 的 PopClip 扩展**

[![Version](https://img.shields.io/badge/version-v5.4-blue.svg)](https://github.com/duyananbryce/cubox-popclip-extension/releases)
[![PopClip](https://img.shields.io/badge/PopClip-4155+-green.svg)](https://pilotmoon.com/popclip/)
[![License](https://img.shields.io/badge/license-MIT-orange.svg)](LICENSE)

[English](#english) | [中文](#中文)

</div>

## 中文

### 🎯 项目简介

Cubox PopClip Extension 是一个专为 macOS PopClip 应用设计的扩展插件，让您能够一键将选中的文本快速保存到 Cubox 收藏工具中。无论是网页文章、PDF 文档还是任何应用中的文本，只需选中即可轻松收藏。

### ✨ 功能特点

- 🚀 **一键保存**：选中文本后一键保存到 Cubox
- ⚙️ **灵活配置**：支持自定义 API URL、默认文件夹和标签
- 📝 **智能标题**：自动生成标题（取文本首行或前50个字符）
- ✅ **实时反馈**：保存成功/失败即时提示
- 🔒 **安全可靠**：使用官方 Cubox API，数据传输安全
- 🌐 **双域名支持**：同时支持 cubox.pro 和 cubox.cc
- 📱 **异步处理**：不阻塞界面操作，用户体验流畅

### 📋 系统要求

- **操作系统**：macOS
- **PopClip 版本**：4155 或更高
- **Cubox 账户**：需要高级版本获得 API 访问权限

### 功能演示

![演示](https://github.com/user-attachments/assets/8fa918bb-8e12-4317-8087-978bebca4527)



### 🚀 快速开始

#### 1. 下载安装

```bash
# 克隆仓库
git clone https://github.com/duyananbryce/cubox-popclip-extension.git

# 进入目录
cd cubox-popclip-extension

# 双击安装
open "Cubox Saver.popclipext"
```

或者直接下载 [最新版本](https://github.com/duyananbryce/cubox-popclip-extension/releases) 并双击 `Cubox Saver.popclipext` 文件安装。

#### 2. 获取 Cubox API URL

**支持的 Cubox 网站**：
- 新版本：[https://cubox.pro](https://cubox.pro) （推荐）
- 旧版本：[https://cubox.cc](https://cubox.cc)

**获取步骤**：
1. 访问对应的 Cubox 网页版并登录
2. 进入 **设置** > **扩展与自动化** > **API 扩展**
3. 点击 **启用 API** 按钮
4. 复制生成的完整 API 链接

**正确的 API URL 格式**：
```
✅ https://cubox.pro/c/api/save/YOUR_TOKEN
✅ https://cubox.cc/c/api/save_url?token=YOUR_TOKEN
✅ https://cubox.pro/c/api/save_url?token=YOUR_TOKEN
```

#### 3. 配置插件

1. 打开 PopClip 设置
2. 找到 "Cubox" 扩展
3. 配置以下选项：

| 配置项 | 说明 | 必需 |
|--------|------|------|
| **Cubox API URL** | 从 Cubox 获取的 API 链接 | ✅ 必需 |
| **Default Folder** | 默认保存文件夹（留空保存到收件箱） | ❌ 可选 |
| **Default Tag** | 默认标签（默认为 "PopClip"） | ❌ 可选 |

### 📖 使用方法

1. **选中文本**：在任意应用中选中您想要保存的文本
2. **点击保存**：在 PopClip 弹出的操作栏中点击 "Save to Cubox" 按钮
3. **查看结果**：插件会显示保存成功或失败的提示

### 🔄 版本历史

| 版本 | 发布日期 | 主要更新 |
|------|----------|----------|
| **v5.4** | 2025-08-29 | 🔧 添加网络权限配置，修复 XMLHttpRequest 权限错误 |
| **v5.3** | 2025-08-28 | 🚀 改为异步请求，提升用户体验和稳定性 |
| **v5.2** | 2025-08-27 | 🌐 支持新 API 格式 `/c/api/save/TOKEN` |
| **v5.1** | 2025-08-26 | 🔗 添加 cubox.pro 域名支持 |
| **v5.0** | 2025-08-25 | 📝 修复 PopClip 标准格式兼容性 |
| **v4.x** | 2025-07-15 | 🐛 多个 bug 修复和功能优化 |
| **v1.0** | 2025-06-20 | 🎉 首次发布 |

### 🔧 故障排除

#### 常见错误及解决方案

| 错误信息 | 原因 | 解决方案 |
|----------|------|----------|
| "Please set your Cubox API URL" | 未配置 API URL | 在插件设置中添加 Cubox API URL |
| "No text selected" | 未选中文本 | 请先选中一些文本再使用插件 |
| "Invalid API URL format" | API URL 格式错误 | 检查 URL 是否包含正确的域名和路径 |
| "Authentication failed" | API 认证失败 | 检查 API URL 中的 token 是否正确 |
| "Network error" | 网络连接问题 | 检查网络连接或稍后重试 |
| "Using XMLHttpRequest requires the 'network' entitlement" | 缺少网络权限 | 升级到 v5.4 或更高版本 |

#### 调试步骤

1. **验证 API URL**：
   ```bash
   curl -X POST "YOUR_API_URL" \
        -H "Content-Type: application/json" \
        -d '{"type":"memo","content":"测试文本","title":"测试"}'
   ```

2. **检查网络连接**：确保能正常访问 Cubox 网站

3. **重新安装插件**：删除旧版本后重新安装

### 🛠️ 技术架构

#### 核心文件结构

```
Cubox Saver.popclipext/
├── Config.json          # 插件配置和元数据
├── action.js           # 核心逻辑实现
├── icon.svg            # 插件图标
└── README.md           # 说明文档
```

#### 技术特性

- **异步网络请求**：使用 XMLHttpRequest 异步模式，不阻塞 UI
- **错误处理机制**：完善的错误捕获和用户友好的错误提示
- **API 兼容性**：支持新旧两种 API 格式
- **域名灵活性**：自动识别 cubox.pro 和 cubox.cc 域名
- **数据验证**：严格的输入验证和 URL 格式检查

### 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支：`git checkout -b feature/amazing-feature`
3. 提交更改：`git commit -m 'Add amazing feature'`
4. 推送分支：`git push origin feature/amazing-feature`
5. 提交 Pull Request

### 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

### 🙏 致谢

- [PopClip](https://pilotmoon.com/popclip/) - 优秀的 macOS 文本操作工具
- [Cubox](https://cubox.cc) - 强大的收藏和知识管理工具
- 所有贡献者和用户的反馈

---

## English

### 🎯 Project Overview

Cubox PopClip Extension is a powerful extension designed for macOS PopClip application, enabling you to save selected text to Cubox with just one click. Whether it's web articles, PDF documents, or text from any application, you can easily collect them.

### ✨ Features

- 🚀 **One-Click Save**: Save selected text to Cubox instantly
- ⚙️ **Flexible Configuration**: Customizable API URL, default folder, and tags
- 📝 **Smart Titles**: Auto-generate titles from first line or first 50 characters
- ✅ **Real-time Feedback**: Instant success/failure notifications
- 🔒 **Secure & Reliable**: Uses official Cubox API with secure data transmission
- 🌐 **Dual Domain Support**: Supports both cubox.pro and cubox.cc
- 📱 **Asynchronous Processing**: Non-blocking UI operations for smooth user experience

### 📋 Requirements

- **OS**: macOS
- **PopClip Version**: 4155 or higher
- **Cubox Account**: Premium version required for API access

### 🚀 Quick Start

#### 1. Installation

```bash
# Clone repository
git clone https://github.com/duyananbryce/cubox-popclip-extension.git

# Enter directory
cd cubox-popclip-extension

# Install by double-clicking
open "Cubox Saver.popclipext"
```

Or download the [latest release](https://github.com/duyananbryce/cubox-popclip-extension/releases) and double-click the `Cubox Saver.popclipext` file.

#### 2. Get Cubox API URL

**Supported Cubox Websites**:
- New version: [https://cubox.pro](https://cubox.pro) (Recommended)
- Legacy version: [https://cubox.cc](https://cubox.cc)

**Steps**:
1. Visit the corresponding Cubox website and log in
2. Go to **Settings** > **Extensions & Automation** > **API Extension**
3. Click **Enable API** button
4. Copy the generated complete API link

#### 3. Configure Extension

1. Open PopClip settings
2. Find "Cubox" extension
3. Configure the following options:

| Option | Description | Required |
|--------|-------------|----------|
| **Cubox API URL** | API link from Cubox | ✅ Required |
| **Default Folder** | Default save folder (empty for inbox) | ❌ Optional |
| **Default Tag** | Default tag (defaults to "PopClip") | ❌ Optional |

### 📖 Usage

1. **Select Text**: Select the text you want to save in any application
2. **Click Save**: Click "Save to Cubox" button in PopClip's action bar
3. **View Result**: The extension will show success or failure notification

### 🔄 Version History

| Version | Release Date | Key Updates |
|---------|--------------|-------------|
| **v5.4** | 2024-01 | 🔧 Added network entitlement, fixed XMLHttpRequest permission error |
| **v5.3** | 2024-01 | 🚀 Switched to asynchronous requests for better UX and stability |
| **v5.2** | 2024-01 | 🌐 Support for new API format `/c/api/save/TOKEN` |
| **v5.1** | 2024-01 | 🔗 Added cubox.pro domain support |
| **v5.0** | 2024-01 | 📝 Fixed PopClip standard format compatibility |
| **v4.x** | 2023-12 | 🐛 Multiple bug fixes and optimizations |
| **v1.0** | 2023-11 | 🎉 Initial release |

### 🔧 Troubleshooting

#### Common Errors and Solutions

| Error Message | Cause | Solution |
|---------------|-------|----------|
| "Please set your Cubox API URL" | API URL not configured | Add Cubox API URL in extension settings |
| "No text selected" | No text selected | Select some text before using the extension |
| "Invalid API URL format" | Incorrect API URL format | Check if URL contains correct domain and path |
| "Authentication failed" | API authentication failed | Verify the token in API URL is correct |
| "Network error" | Network connection issue | Check network connection or retry later |
| "Using XMLHttpRequest requires the 'network' entitlement" | Missing network permission | Upgrade to v5.4 or higher |

### 🤝 Contributing

Contributions are welcome! Please feel free to submit Issues and Pull Requests.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Submit a Pull Request

### 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### 🙏 Acknowledgments

- [PopClip](https://pilotmoon.com/popclip/) - Excellent macOS text manipulation tool
- [Cubox](https://cubox.cc) - Powerful collection and knowledge management tool
- All contributors and users for their feedback

---

<div align="center">

**如果这个项目对您有帮助，请给个 ⭐️ Star！**

**If this project helps you, please give it a ⭐️ Star!**

</div>
