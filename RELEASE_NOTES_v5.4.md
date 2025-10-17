# v5.4 - Network Entitlement Fix

## 🔧 修复与改进

- **网络权限修复**: 添加 network entitlement 配置，解决 XMLHttpRequest 权限错误
- **异步请求**: 使用异步 XMLHttpRequest，提升用户体验和稳定性
- **API 兼容性**: 支持新旧 API 格式和双域名（cubox.pro 和 cubox.cc）
- **错误处理**: 完善错误处理和用户反馈机制

## 📦 安装方法

1. 下载 Cubox Saver.popclipext 文件
2. 双击安装到 PopClip
3. 在 PopClip 设置中配置你的 Cubox API URL

## ⚠️ 重要提醒

请从 [Cubox 网页版](https://cubox.cc) > 设置 > 扩展与自动化 > API 扩展 获取你的专属 API URL。

## 技术细节

- PopClip 版本要求: 4155+
- 新增网络权限配置
- 支持异步 API 调用
- 改进的错误处理机制