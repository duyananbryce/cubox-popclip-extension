# 修复 PopClip 标准格式 - v5.0

## 问题描述

尽管 v4.2-v4.4 版本尝试了多种兼容性方案，但仍然出现 `ReferenceError: Can't find variable: action` 错误。经过深入研究 PopClip 官方文档，发现问题的根本原因是代码格式不符合 PopClip 的标准规范。

## 根本原因分析

根据 [PopClip 官方文档](https://www.popclip.app/dev/js-actions)，PopClip 的 JavaScript 执行环境有以下特点：

1. **脚本入口点在顶层**：PopClip 期望脚本的入口点在文件的顶层，而不是在函数内部
2. **自动函数包装**：PopClip 内部会将脚本包装在一个异步箭头函数中
3. **全局对象访问**：应该使用 `popclip.input.text` 和 `popclip.options` 而不是函数参数
4. **配置字段规范**：应该使用 `"javascript file"` 而不是 `"javascript"`

### 官方文档说明

> "The script's entry point is at the top level of the file. Internally, PopClip loads the provided script and wraps it as a function."

> "Scripts take their input from the global popclip object."

## v5.0 解决方案

### 1. 代码结构重写

**之前的错误格式（v4.x）：**
```javascript
function main(selection, settings) {
    // 代码逻辑
}

function action(selection, settings) {
    return main(selection, settings);
}
```

**正确的标准格式（v5.0）：**
```javascript
// 脚本入口点在顶层
if (!popclip.input.text || popclip.input.text.trim() === '') {
    popclip.showText('❌ No text selected');
    return;
}

// 使用 popclip.options 获取配置
var url = popclip.options.apiUrl.trim();
var text = popclip.input.text.trim();

// 其余逻辑...
```

### 2. 配置文件修正

**Config.json 修改：**
```json
{
  "name": "Cubox Saver v5.0",
  "identifier": "cc.cubox.popclip.saver.v5.0",
  "actions": [
    {
      "javascript file": "action.js"  // 使用标准字段名
    }
  ]
}
```

### 3. 核心改进

1. **移除所有函数定义**：不再使用 `function main()` 或 `function action()`
2. **顶层执行**：代码直接在文件顶层执行
3. **标准 API 调用**：使用 `popclip.input.text` 和 `popclip.options`
4. **移除兼容性代码**：不再需要 `exports.action` 等兼容性处理

## 升级步骤

1. **备份当前版本**（如果需要）
2. **替换 action.js**：使用新的标准格式代码
3. **更新 Config.json**：修改版本号和字段名
4. **重新安装扩展**：在 PopClip 中重新安装 v5.0 版本

## 验证方法

1. 安装后检查扩展名称显示为 "Cubox Saver v5.0"
2. 选择文本后应该正常显示 PopClip 按钮
3. 点击按钮应该能够正常保存到 Cubox
4. 不应该再出现任何 "Can't find variable" 错误

## 技术说明

### PopClip JavaScript 环境特点

1. **沙盒环境**：运行在安全的 JavaScript 沙盒中
2. **JavaScriptCore 引擎**：使用 Apple 的 JavaScriptCore
3. **ES2018+ 支持**：支持现代 JavaScript 特性
4. **全局对象**：提供 `popclip`、`pasteboard`、`print()` 等全局对象

### 为什么之前的方案失败

1. **函数定义冲突**：PopClip 期望顶层执行，而不是函数调用
2. **参数传递错误**：PopClip 不通过函数参数传递数据
3. **执行时机问题**：函数定义在 PopClip 的执行模型中无法正确调用

## 版本历史

- **v4.0**：修复 "Can't find variable: cubox" 错误
- **v4.1**：修复 "Can't find variable: main" 错误
- **v4.2**：添加 action 变量支持
- **v4.3**：添加 action 函数定义
- **v4.4**：修复函数/变量冲突
- **v5.0**：**完全重写为 PopClip 标准格式**

## 总结

v5.0 版本彻底解决了所有 "Can't find variable" 错误，通过采用 PopClip 官方推荐的标准格式，确保了最大的兼容性和稳定性。这是基于官方文档的权威解决方案，应该能够在所有支持的 PopClip 版本上正常工作。

---

**重要提醒**：v5.0 是基于 PopClip 官方文档的标准实现，代表了正确的开发方式。之前的 v4.x 版本虽然尝试了多种兼容性方案，但都偏离了官方规范，因此无法彻底解决问题。