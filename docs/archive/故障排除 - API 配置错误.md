# Cubox Saver - API 配置错误故障排除

## 🚨 常见错误类型

### 1. "Invalid Cubox API URL" 错误
**已在 v5.1 修复** - 现在支持 `cubox.pro` 和 `cubox.cc` 两个域名

### 2. "Network error" 错误
从截图显示的错误信息来看，这是网络连接问题。

### 3. "API 链接是你身份的唯一凭证" 提示
这表明 API URL 配置可能不正确。

## 🔧 解决方案

### 步骤 1：获取正确的 API URL

1. **访问 Cubox 官网**：
   - 新版本：https://cubox.pro
   - 旧版本：https://cubox.cc

2. **登录并获取 API**：
   ```
   登录 → 设置 → 扩展与自动化 → API 扩展
   ```

3. **复制正确的 API URL**：
   - 格式通常为：`https://cubox.pro/c/api/save_url?token=YOUR_TOKEN`
   - 或：`https://cubox.cc/c/api/save_url?token=YOUR_TOKEN`

### 步骤 2：验证 API URL 格式

正确的 API URL 应该包含：
- ✅ 域名：`cubox.pro` 或 `cubox.cc`
- ✅ 路径：`/c/api/save_url`
- ✅ 参数：`?token=YOUR_UNIQUE_TOKEN`

**错误示例**：
```
❌ https://cubox.cc/c/api/v1/...  (路径错误)
❌ https://cubox.pro/api/...      (路径不完整)
❌ https://cubox.cc/save         (完全错误)
```

**正确示例**：
```
✅ https://cubox.pro/c/api/save_url?token=abc123...
✅ https://cubox.cc/c/api/save_url?token=xyz789...
```

### 步骤 3：网络连接检查

1. **测试网络连接**：
   ```bash
   # 在终端中测试
   curl -I https://cubox.pro
   curl -I https://cubox.cc
   ```

2. **检查防火墙设置**：
   - 确保 macOS 防火墙允许 PopClip 访问网络
   - 检查企业网络是否阻止了 Cubox 域名

3. **VPN 或代理问题**：
   - 如果使用 VPN，尝试断开后测试
   - 检查代理设置是否影响连接

### 步骤 4：重新配置插件

1. **清除旧配置**：
   - 在 PopClip 中删除 Cubox Saver 插件
   - 重新安装 v5.1 版本

2. **重新配置 API**：
   - 粘贴正确的完整 API URL
   - 设置默认文件夹（可选）
   - 设置默认标签（可选）

## 🧪 测试步骤

### 1. 基础连接测试
```bash
# 测试 Cubox 服务器连接
curl -v "https://cubox.pro/c/api/save_url?token=YOUR_TOKEN" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"type":"memo","content":"test"}'
```

### 2. PopClip 插件测试
1. 选择一小段文本（如 "test"）
2. 点击 PopClip 中的 "Save to Cubox"
3. 观察返回的错误信息

## 📋 错误代码对照表

| 错误信息 | 原因 | 解决方案 |
|----------|------|----------|
| Invalid Cubox API URL | URL 格式错误 | 检查域名和路径 |
| Network error | 网络连接失败 | 检查网络和防火墙 |
| Authentication failed | Token 无效 | 重新获取 API URL |
| Save failed (4xx) | 请求格式错误 | 检查 API 参数 |
| Save failed (5xx) | 服务器错误 | 稍后重试或联系 Cubox |

## 🔍 调试信息收集

如果问题仍然存在，请收集以下信息：

1. **PopClip 版本**：在 PopClip 偏好设置中查看
2. **macOS 版本**：系统信息
3. **网络环境**：是否使用 VPN、代理、企业网络
4. **API URL**：（隐藏 token 部分）格式是否正确
5. **错误截图**：完整的错误信息

## 💡 预防措施

1. **定期检查 API**：Cubox 可能会更新 API 格式
2. **备份配置**：记录工作的 API URL 配置
3. **版本更新**：及时更新到最新版本的插件
4. **网络稳定**：确保网络连接稳定

---

**如果按照以上步骤仍无法解决问题，请提供详细的错误信息和网络环境描述以获得进一步帮助。**