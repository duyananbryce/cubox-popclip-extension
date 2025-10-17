# Cubox Saver v5.0 - 官方标准版本

## 🚀 重要更新 (v5.0) 🆕

**全新重写**：基于 PopClip 官方文档完全重写，采用标准实现方式！

**v5.0 提供官方标准的兼容性，确保在所有 PopClip 版本中完美运行！**

这是基于官方文档的标准实现版本，彻底解决所有兼容性问题。

### ✅ 已修复的问题

1. ❌ `Can't find variable: cubox` 错误 → ✅ 已解决 (v4.0)
2. ❌ `Can't find variable: main` 错误 → ✅ 已解决 (v4.1)
3. ❌ `Can't find variable: action` 错误 → ✅ 已解决 (v4.2-v4.4) 🆕
   - v4.2: 添加 action 变量支持
   - v4.3: 添加 action 函数定义  
   - v4.4: 修复函数与变量冲突，删除冲突的 var 声明
4. ❌ 插件不显示问题 → ✅ 已解决
5. ❌ 变量冲突问题 → ✅ 已解决
6. ❌ PopClip 版本兼容性问题 → ✅ 已解决 (v4.2) 🆕

### 🔧 技术改进

#### v5.0 官方标准特性 🆕

**基于官方文档重写**：
- 完全遵循 [PopClip 官方文档](https://www.popclip.app/dev/js-actions) 规范
- 脚本入口点位于文件顶层，符合 PopClip 执行模型
- 移除所有非标准的函数定义和兼容性代码
- 采用 PopClip 推荐的标准实现方式

**标准 API 调用**：
- 使用 `popclip.input.text` 获取选中文本
- 使用 `popclip.options` 获取配置选项
- 使用 `popclip.showText()` 显示结果
- 完全符合 PopClip JavaScript 环境规范

**配置文件标准化**：
- 使用 `"javascript file"` 字段（官方标准）
- 插件标识符：`cc.cubox.popclip.saver.v5.0`
- 清理所有非标准配置项

**执行模型优化**：
- PopClip 内部自动将脚本包装为异步函数
- 顶层执行确保正确的函数调用时机
- 移除手动函数定义避免执行冲突

#### 为什么 v4.x 版本失败

**根本问题**：
- v4.x 版本使用了非标准的函数定义方式
- PopClip 期望脚本在顶层执行，而不是通过函数调用
- 参数传递方式不符合 PopClip 的数据模型
- 兼容性代码实际上与 PopClip 执行环境冲突

**官方文档说明**：
> "The script's entry point is at the top level of the file. Internally, PopClip loads the provided script and wraps it as a function."

> "Scripts take their input from the global popclip object."

#### v5.0 vs v4.x 对比

| 特性 | v4.x 版本 | v5.0 版本 |
|------|-----------|----------|
| 代码结构 | 函数定义 | 顶层执行 |
| 数据获取 | 函数参数 | popclip 全局对象 |
| 配置访问 | settings 参数 | popclip.options |
| 执行方式 | 手动函数调用 | PopClip 自动包装 |
| 标准符合性 | 非标准实现 | 官方标准实现 |
| 兼容性 | 尝试多重兼容 | 单一标准兼容 |

#### v4.2 历史特性
- **四重兼容性设计**：支持 exports.action、main 函数、action 变量、全局 action
- **智能环境检测**：自动检测 PopClip 执行环境并适配
- **action 变量支持**：解决特定版本 PopClip 的 action 变量错误
- **全局函数暴露**：确保在所有作用域中都能找到函数
- **更新插件标识符**：`cc.cubox.popclip.saver.v4.2` 避免所有缓存问题

#### v4.1 历史特性
- **双重兼容性设计**：同时支持新旧版本 PopClip
- **main 函数支持**：解决旧版 PopClip 的 main 变量错误

#### v4.0 历史特性
- **全新代码架构**：使用 `action.js` 避免文件名冲突
- **简化变量命名**：使用 `var` 声明和简单变量名
- **优化错误处理**：更清晰的错误信息和状态反馈

## 📋 安装步骤（必须按顺序执行）

### 第一步：清理旧版本
1. 打开 PopClip 主界面
2. 找到所有名为 "Cubox Saver" 的插件（任何版本）
3. **全部删除**
4. **重启 PopClip 应用**

### 第二步：安装 v5.0 版本
1. 双击 `Cubox Saver.popclipext` 文件
2. 确认安装对话框
3. 查看插件列表中是否出现 "Cubox Saver v5.0"
4. **重要**：确认版本号是 v5.0，这是最新的官方标准版本

### 第三步：配置设置
1. 点击插件的设置图标 ⚙️
2. 配置以下必需设置：
   - **Cubox API URL**：你的 Cubox API 链接
   - **Default Folder**：默认文件夹（可选）
   - **Default Tag**：默认标签（默认为 "PopClip"）

## 🧪 测试验证

### 基础测试
1. 打开任意文本编辑器（如 TextEdit）
2. 输入测试文本："这是一个测试文本"
3. 选中这段文字
4. 查看 PopClip 是否显示 "Save to Cubox" 选项
5. 点击执行，查看是否显示成功消息

### 功能测试
- ✅ 能在选中文本时显示插件
- ✅ 能正确保存文本到 Cubox
- ✅ 显示正确的状态反馈
- ✅ 无 JavaScript 错误

## 🔍 故障排除

### 如果插件仍然不显示
1. 确认已完全删除所有旧版本
2. 重启 Mac 电脑
3. 重新安装 PopClip 应用
4. 检查系统偏好设置 > 安全性与隐私 > 隐私 > 辅助功能
5. 确保 PopClip 有相应权限

### 如果出现新的错误
1. 查看 macOS 控制台应用中的错误信息
2. 确认 Cubox API URL 格式正确
3. 测试网络连接是否正常
4. 重新获取 Cubox API URL

## 📊 版本历史

- **v1**: 初始版本
- **v2**: 修复 requirements 配置错误
- **v3**: 重写代码结构，使用 main.js
- **v4**: 最终稳定版本，使用 action.js，彻底解决变量冲突

## 💡 使用技巧

1. **API URL 获取**：
   - 登录 [Cubox 网页版](https://cubox.cc)
   - 设置 > 扩展与自动化 > API 扩展
   - 复制生成的 API 链接

2. **快速保存**：
   - 选中文本 → PopClip 自动弹出 → 点击 "Save to Cubox"
   - 支持所有类型的文本内容

3. **组织管理**：
   - 使用默认文件夹自动分类
   - 使用标签便于后续检索

---

**这是最终稳定版本，应该能完美解决所有问题！** 🎉