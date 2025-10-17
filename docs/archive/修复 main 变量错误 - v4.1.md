# Cubox Saver v4.1 - 修复 "Can't find variable: main" 错误

## 🚨 问题描述

如果你在使用 Cubox Saver 插件时遇到以下错误：
```
[Cubox Saver v3] error: ReferenceError: Can't find variable: main
```

这是由于 PopClip 版本兼容性问题导致的 JavaScript 变量冲突。

## ✅ 解决方案

### v4.1 版本已修复此问题

本版本 (v4.1) 已经彻底解决了这个问题，采用了双重兼容性设计：

1. **新版本 PopClip**：使用 `exports.action` 函数
2. **旧版本 PopClip**：使用 `main` 函数
3. **自动检测**：代码会自动检测 PopClip 版本并使用相应的函数

### 安装步骤

#### 第一步：完全清理旧版本
1. 打开 PopClip 主界面
2. 删除所有名为 "Cubox Saver" 的插件（包括 v3, v4 等所有版本）
3. **重启 PopClip 应用**（重要！）
4. 等待 10 秒确保缓存清理完成

#### 第二步：安装 v4.1 版本
1. 双击 `Cubox Saver.popclipext` 文件
2. 确认安装对话框
3. 查看插件列表中应显示 "Cubox Saver v4.1"

#### 第三步：配置和测试
1. 点击插件设置图标 ⚙️
2. 输入你的 Cubox API URL
3. 设置默认文件夹和标签（可选）
4. 测试：选择任意文本，查看是否正常工作

## 🔧 技术细节

### 修复内容
- ✅ 添加了 `main` 函数定义
- ✅ 保留了 `exports.action` 兼容性
- ✅ 添加了自动版本检测
- ✅ 更新了插件标识符避免缓存冲突

### 代码结构
```javascript
// 定义主函数
function main(selection, settings) {
    // 插件逻辑
}

// 新版本兼容
exports.action = main;

// 旧版本兼容
if (typeof exports === 'undefined') {
    this.main = main;
}
```

## 🧪 验证修复

### 测试步骤
1. 打开任意文本编辑器
2. 输入测试文本："这是测试文本"
3. 选中文字
4. 查看 PopClip 是否显示 "Save to Cubox" 选项
5. 点击执行，应该显示 "📋 Saving to Cubox..." 然后显示结果

### 成功标志
- ✅ 不再出现 "Can't find variable: main" 错误
- ✅ 插件图标正常显示
- ✅ 能够成功保存文本到 Cubox

## 📞 如果仍有问题

如果安装 v4.1 后仍有问题，请尝试：

1. **完全重置 PopClip**：
   - 退出 PopClip
   - 删除 `~/Library/Application Support/PopClip/` 文件夹
   - 重新启动 PopClip
   - 重新安装插件

2. **检查 PopClip 版本**：
   - 确保使用 PopClip 2021.5 或更新版本
   - 旧版本可能不支持某些 JavaScript 特性

3. **检查系统权限**：
   - 系统偏好设置 → 安全性与隐私 → 隐私 → 辅助功能
   - 确保 PopClip 有权限

## 📝 版本历史

- **v4.1**：修复 "Can't find variable: main" 错误
- **v4.0**：修复 "Can't find variable: cubox" 错误
- **v3.x**：存在变量冲突问题（已废弃）

---

**注意**：如果你之前安装过多个版本的 Cubox Saver，强烈建议完全清理后重新安装 v4.1 版本。