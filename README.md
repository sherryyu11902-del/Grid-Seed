# GridSeed · Illustrator CEP Extension  
# GridSeed · Adobe Illustrator CEP 扩展插件

<div align="center">

**Design-support panel for layout grids, print bleed / safe zones, templates & placeholder copy — with bilingual UI.**  
**面向视觉传达设计的辅助面板：网格、出血与安全区、模板与占位文案，并支持中英双语界面。**

[![Repository](https://img.shields.io/badge/GitHub-Grid--Seed-24292f?logo=github)](https://github.com/sherryyu11902-del/Grid-Seed)
[![Illustrator](https://img.shields.io/badge/Host-Illustrator%20(CEP)-31A8FF?logo=adobeillustrator&logoColor=white)](https://www.adobe.com/products/illustrator.html)
[![YouTube Demo](https://img.shields.io/badge/YouTube-Video%20Demo-FF0000?logo=youtube&logoColor=white)](https://youtu.be/SJhbgNIRQWg?si=bapGSPzX-HwuL5NX)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-4285F4?logo=github)](https://sherryyu11902-del.github.io/Grid-Seed/gridseed-keynote-presentation.html)

**Bundle:** `com.gridseed.illustrator` · **Version:** `2.3.0`（见 `插件分支文件/CSXS/manifest.xml`）

</div>

---

## 仓库布局说明 · Repository layout

| **English** | **中文** |
|-------------|----------|
| On GitHub **`main`**, the **CEP extension** (panel HTML, `js/`, `css/`, `jsx/`, `CSXS/`) is under **`插件分支文件/`**. The **repo root** mainly has `README.md`, the keynote HTML, and `presentation-assets/` for GitHub Pages. | 在 GitHub 的 **`main`** 分支上，**Illustrator 扩展（面板、`js/`、`css/`、`jsx/`、`CSXS/`）** 位于 **`插件分支文件/`**。**仓库根目录** 主要是 `README.md`、演示稿 HTML 与 `presentation-assets/`（供 Pages 使用）。 |
| If you use a **local full project folder** (e.g. from Google Drive) where `index.html` sits **next to** `js/` at the **same level**, install that folder as the extension; for browser preview, run `http.server` **from the folder that contains** `index.html` and open `http://127.0.0.1:PORT/index.html`. | 若你使用 **网盘完整工程**（例如 `index.html` 与 `js/` **同级** 在平铺目录中），请将该目录安装为扩展；浏览器预览时请在 **放置 `index.html` 的目录** 启动 `python3 -m http.server`，再打开 `http://127.0.0.1:端口/index.html`。 |

---

## 🔗 Quick links · 快速链接

| Resource · 资源 | URL |
|-----------------|-----|
| GitHub repository · 仓库 | [https://github.com/sherryyu11902-del/Grid-Seed](https://github.com/sherryyu11902-del/Grid-Seed) |
| **Panel UI (GitHub Pages)** · **插件面板（在线）** | [`Gridseed preview/index.html`（Pages）](https://sherryyu11902-del.github.io/Grid-Seed/Gridseed%20preview/index.html)（仓库目录 `Gridseed preview/`；文件夹名中的空格为 `%20`） |
| YouTube demo · 演示视频 | [https://youtu.be/SJhbgNIRQWg?si=bapGSPzX-HwuL5NX](https://youtu.be/SJhbgNIRQWg?si=bapGSPzX-HwuL5NX) |
| Keynote (GitHub Pages) · 在线演示稿 | [https://sherryyu11902-del.github.io/Grid-Seed/gridseed-keynote-presentation.html](https://sherryyu11902-del.github.io/Grid-Seed/gridseed-keynote-presentation.html) |
| Google Drive · 完整工程与大文件 | [Grid Seed 资料夹](https://drive.google.com/drive/folders/1T_6NwHcBHyanICBKk7rAbWRlQ8Gqflaj?usp=drive_link) |

**分享链接注意 · Sharing:** 发给他人的应是 **GitHub Pages 的 `https://…` 地址**；不要用你本机的 `http://localhost`（别人打不开）。若对方页面「不完整」，多半是用了 `file://` 打开、缺少同级的 `css/` / `js/`，或未从正确路径使用本地 HTTP。

---

## 📖 Project overview · 项目简介

| **English** | **中文** |
|-------------|----------|
| **GridSeed** is a **CEP** extension for **Adobe Illustrator**: templates, trim/bleed/safe guides, **Grid Composer**, placeholder **Words**, **Learn / About** — **English / 中文** UI. | **GridSeed** 是 **Adobe Illustrator** 的 **CEP** 扩展：模板、裁切/出血/安全区、**Grid Composer**、占位 **Words**、**Learn / About**，界面支持 **英文 / 中文**。 |
| **No API keys** for core features. | **核心功能不依赖** 外部 API Key。 |

---

## 📌 Scope · 仓库能呈现什么

| **English** | **中文** |
|-------------|----------|
| Full workflow needs **Illustrator** with the extension installed. Pages only **demonstrate** the panel HTML or slides. | **完整流程** 需在 **Illustrator** 中安装扩展。GitHub Pages 仅用于 **展示** 面板界面或演示稿。 |
| For the **complete package** (large files), use **Google Drive** + **YouTube** walkthrough. | **完整资源包**（含大文件）请用 **Google Drive**，并参考 **YouTube** 说明。 |

---

## 📦 Google Drive · 网盘完整下载

GitHub 对单文件体积有限制（约 100 MB 无法推送、约 50 MB 警告）。视频、大 PDF、完整压缩包等建议放在网盘。

👉 **[Google Drive — Grid Seed 资料夹](https://drive.google.com/drive/folders/1T_6NwHcBHyanICBKk7rAbWRlQ8Gqflaj?usp=drive_link)**

---

## 🎬 Video · 视频演示

👉 [GridSeed — YouTube](https://youtu.be/SJhbgNIRQWg?si=bapGSPzX-HwuL5NX)

---

## 🌐 GitHub Pages · 在线访问

在仓库 **Settings → Pages** 启用。构建日志里的 **「部署（动态）」** 通常表示由 **GitHub Actions** 触发的发布；本仓库为静态页面时，请使用 **Source：Deploy from a branch** → **main** → **`/(root)`**，除非你已在 `.github/workflows/` 中维护自定义 Pages 工作流。

启用后常用地址：

| Page · 页面 | URL |
|-------------|-----|
| 插件面板（`Gridseed preview/index.html`） | [https://sherryyu11902-del.github.io/Grid-Seed/Gridseed%20preview/index.html](https://sherryyu11902-del.github.io/Grid-Seed/Gridseed%20preview/index.html) |
| 演示稿 keynote | [https://sherryyu11902-del.github.io/Grid-Seed/gridseed-keynote-presentation.html](https://sherryyu11902-del.github.io/Grid-Seed/gridseed-keynote-presentation.html) |

*若 404：确认已推送到 `main`、已开 Pages，等待 1–3 分钟。*

---

## 🚀 Quick start · 快速开始

### 在 Illustrator 中使用

| Step | English | 中文 |
|------|---------|------|
| 环境 | Illustrator **2022+**（见 `插件分支文件/CSXS/manifest.xml` 中 ILST 版本范围） | 需 **Illustrator 2022 及以上** |
| 安装 | 将 **含 `CSXS` 与面板文件的扩展目录** 复制或链接到系统 **CEP 扩展目录** | 按 Adobe CEP 要求放入扩展目录 |
| 打开 | **Window → Extensions → GridSeed** | **窗口 → 扩展 → GridSeed** |

### 在浏览器中预览（不替代 Illustrator）

1. **克隆** 仓库：`git clone https://github.com/sherryyu11902-del/Grid-Seed.git`  
2. 进入 **`Grid-Seed` 根目录**，执行：`python3 -m http.server 8765`  
3. 在浏览器打开（与「你在哪一层启动 server」一致）：
   - **根目录有 `index.html`（与在线 Pages 一致）** → 面板：  
     `http://127.0.0.1:8765/index.html` 或 `http://127.0.0.1:8765/`  
   - **仅在 `插件分支文件/` 下放有面板、根目录无 `index.html` 时** → 面板：  
     `http://127.0.0.1:8765/%E6%8F%92%E4%BB%B6%E5%88%86%E6%94%AF%E6%96%87%E4%BB%B6/index.html`  
   - **若你 `cd` 进了 `插件分支文件` 再启动 server** → 面板：`http://127.0.0.1:8765/index.html`
4. 演示稿（需在仓库根目录启动 server）：  
   `http://127.0.0.1:8765/gridseed-keynote-presentation.html`（需同级 `presentation-assets/`）

不要用 **`file://` 双击** `index.html` 作为主要预览方式（易被浏览器限制脚本/样式）。面板内下发 Illustrator 的按钮在纯浏览器中会失败，属正常现象。

---

## 📘 Usage · 使用提示

| English | 中文 |
|---------|------|
| **Templates:** preset → **New document** / trim guides. | **模板：** 选预设 → **新建文档** / 裁切参考。 |
| **Grids:** **Grid Composer** → apply to artboard. | **网格：** 在 **Grid Composer** 中设置并应用到画板。 |
| **Words:** placeholder text → edit in document. | **Words：** 占位文案 → 在文档中再编辑。 |

**宿主调用示意（扩展目录内相对路径为 `js/gridseed-panel.js`）：**

```javascript
cs.evalScript('gridseed_dispatch("' + escapedPayload + '")', callback);
```

---

## 🗂️ Project structure · 项目结构（GitHub `main`）

**扩展本体（文件夹 `插件分支文件/`）**

| Path | 说明 |
|------|------|
| `插件分支文件/CSXS/manifest.xml` | CEP 清单 |
| `插件分支文件/index.html` | 面板页面 |
| `插件分支文件/css/style.css` | 样式 |
| `插件分支文件/js/gridseed-panel.js` | 面板主逻辑、`runDispatch` |
| `插件分支文件/js/layout-preview.js` | 版式预览 |
| `插件分支文件/js/i18n.js` | 双语字符串 |
| `插件分支文件/js/data.js` | 模板 / Words 等数据 |
| `插件分支文件/js/CSInterface.js` | Adobe CEP 库 |
| `插件分支文件/jsx/hostscript.jsx` | ExtendScript 宿主脚本 |

**仓库根目录（与 Pages 相关）**

| Path | 说明 |
|------|------|
| `README.md` | 本说明 |
| `gridseed-keynote-presentation.html` | 演示稿入口 |
| `presentation-assets/` | 幻灯片等资源 |
| `排版网格预览.html` | 若存在：独立预览页（中文文件名） |

根目录 **无** `package.json`：运行时为 CEP + ExtendScript，不依赖 Node 打包发布。

---

## 🧰 Tech stack · 技术栈

Illustrator **CEP** + **ExtendScript (JSX)**；面板为 **HTML / CSS / ES5 风格 JS**；桥接 **`CSInterface.evalScript`**。

---

## 👥 Authors · 作者

| English name | 中文名 | Student ID |
|--------------|--------|------------|
| Tina Lai | 赖紫傲 | MC569209 |
| Sheryn Wang | 王筱钰 | MC569019 |

---

## 🤝 Contributing · 贡献

1. 保持 CEP 兼容（避免过新 JS 语法）。  
2. 模板 ID 在 **`插件分支文件/js/data.js`** 与 **`插件分支文件/jsx/hostscript.jsx`** 中保持一致。  
3. 文案同步 **`插件分支文件/js/i18n.js`**。

---

## 📄 License · 许可证

课程作业请遵守学校与 Adobe 相关规定；若对外开源，请团队协商后添加明确许可证（如 MIT）。

---

## ✨ Features · 特性摘要

- 模板库、出血与安全区、**Grid Composer**  
- **Words** 占位文案  
- **双语** 界面；演示稿可切换语言  
- **`gridseed-keynote-presentation.html`** + **`presentation-assets/`** 网页演示  

---

## 📤 将 README 推送到 GitHub

```bash
cd /path/to/Grid-Seed
git add README.md
git commit -m "docs: update README"
git push origin main
```

同步整仓：`git add -A` 后提交推送（留意 `.gitignore` 与大文件）。

---

<div align="center">

**Made with ❤️ for visual communication design workflows · 为视觉传达设计工作流而做**

</div>
