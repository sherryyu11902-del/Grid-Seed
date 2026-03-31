# GridSeed · Illustrator CEP Extension  
# GridSeed · Adobe Illustrator CEP 扩展插件

<div align="center">

**Design-support panel for layout grids, print bleed / safe zones, templates & placeholder copy — with bilingual UI.**  
**面向视觉传达设计的辅助面板：网格、出血与安全区、模板与占位文案，并支持中英双语界面。**

[![Repository](https://img.shields.io/badge/GitHub-Grid--Seed-24292f?logo=github)](https://github.com/sherryyu11902-del/Grid-Seed)
[![Illustrator](https://img.shields.io/badge/Host-Illustrator%20(CEP)-31A8FF?logo=adobeillustrator&logoColor=white)](https://www.adobe.com/products/illustrator.html)
[![YouTube Demo](https://img.shields.io/badge/YouTube-Video%20Demo-FF0000?logo=youtube&logoColor=white)](https://youtu.be/SJhbgNIRQWg?si=bapGSPzX-HwuL5NX)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-4285F4?logo=github)](https://sherryyu11902-del.github.io/Grid-Seed/gridseed-keynote-presentation.html)

**Bundle:** `com.gridseed.illustrator` · **Version:** `2.3.0`（见 `CSXS/manifest.xml`）

</div>

---

## 📖 Project overview · 项目简介

| **English** | **中文** |
|-------------|----------|
| **GridSeed** is a **CEP (Common Extensibility Platform)** extension for **Adobe Illustrator**. It helps designers spin up documents from layouts across posters, social, branding, editorial, packaging, presentation, and UI/icon presets — with **trim / bleed / safe-area guides**, a **Grid Composer** workflow, **placeholder “Words”** aligned to rhythm, and in-panel **Learn / About** references. | **GridSeed** 是面向 **Adobe Illustrator** 的 **CEP** 插件，帮助设计师从模板快速建立画板与指南，覆盖海报、社交媒体、品牌与文具、编辑、包装、演示屏与 UI 等场景，并提供 **裁切线与出血 / 安全区**、**网格编排（Grid Composer）**、与版式节奏匹配的 **占位文案（Words）** 以及 **Learn / About** 说明。 |
| **No API keys:** the panel does **not** require external API credentials. | **无需 API Key：** 本插件 **不依赖** 外部 API 或密钥即可使用核心功能。 |

**Repository（代码仓库）：** [github.com/sherryyu11902-del/Grid-Seed](https://github.com/sherryyu11902-del/Grid-Seed)

---

## ✨ Features · 特性

| **English** | **中文** |
|-------------|----------|
| 📐 **Template library** — Many preset sizes (print CMYK + screen RGB) with categories in `js/data.js`, wired to `jsx/hostscript.jsx`. | 📐 **模板库** — 多种印刷 / 屏显尺寸预设（数据于 `js/data.js`，与 `jsx/hostscript.jsx` 联动）。 |
| 🧭 **Grid Composer** — Paper/screen, bleed & safe margins, image slots, themes; preview and dispatch to Illustrator via `CSInterface` + ExtendScript. | 🧭 **网格编排** — 画幅、出血与安全区、图位、主题；通过 `CSInterface` 与 ExtendScript 下发到 Illustrator。 |
| 📝 **Words** — Placeholder copy generation tuned to layout rhythm (refine in-app). | 📝 **Words** — 与网格节奏协调的占位文案生成（可在面板内继续打磨）。 |
| 🌐 **Bilingual UI** — **English / 中文** toggle in the panel (`js/i18n.js`, `data-i18n`); keynote page also switches language. | 🌐 **双语界面** — 面板顶部 **English / 中文**（`js/i18n.js`）；演示网页同样可切换语言。 |
| 📊 **Web deck & GitHub Pages** — Full-screen slides + speaker notes in `gridseed-keynote-presentation.html` + `presentation-assets/`. | 📊 **网页演示与 GitHub Pages** — `gridseed-keynote-presentation.html` 与 `presentation-assets/` 提供全屏幻灯片与讲稿区。 |
| 🛠️ **Optional Python tooling** — `scripts/` can build bilingual PPTX assets (`python-pptx`, Pillow); see **Optional: Python venv for PPTX tooling** below. | 🛠️ **可选 Python 工具链** — `scripts/` 可用于生成双语 PPTX 相关资源（见下文 **可选：PPTX 构建环境**）。 |

---

## 🎬 Video demo (YouTube) · 视频演示（上传至 YouTube）

| **English** | **中文** |
|-------------|----------|
| Upload your screen recording to **YouTube** and link it here for reviewers. **Project demo:** | 请将屏幕录制 **上传至 YouTube**，并把链接放在 README 中供评阅。**本项目演示链接：** |
| 👉 [**GridSeed — project video on YouTube**](https://youtu.be/SJhbgNIRQWg?si=bapGSPzX-HwuL5NX) | 👉 [**GridSeed 项目演示视频（YouTube）**](https://youtu.be/SJhbgNIRQWg?si=bapGSPzX-HwuL5NX) |

---

## 🌐 GitHub Pages · 在线演示站

| **English** | **中文** |
|-------------|----------|
| After enabling **Settings → Pages** (source: branch **`main`**, folder **`/`**), open the keynote: | 在仓库 **Settings → Pages** 中启用站点（分支 **`main`**，目录 **`/`** 根目录）后，访问： |
| 👉 [https://sherryyu11902-del.github.io/Grid-Seed/gridseed-keynote-presentation.html](https://sherryyu11902-del.github.io/Grid-Seed/gridseed-keynote-presentation.html) | 👉 [https://sherryyu11902-del.github.io/Grid-Seed/gridseed-keynote-presentation.html](https://sherryyu11902-del.github.io/Grid-Seed/gridseed-keynote-presentation.html) |
| *If you see **404**, push all files to `main`, enable Pages, wait 1–3 minutes; GitHub may lowercase the repo segment in the URL.* | *若出现 **404**，请确认已推送到 `main`、已开启 Pages，并等待 1–3 分钟；URL 中的仓库名可能会被转为小写。* |

---

## 🚀 Quick start · 快速开始

### 1) Run the Illustrator extension · 在 Illustrator 中运行插件

| Step · 步骤 | **English** | **中文** |
|-------------|-------------|----------|
| **Requirements** | Adobe Illustrator **2022+** (manifest host: **ILST 22.0–99.9** in `CSXS/manifest.xml`). CEP/debug mode per Adobe docs if the panel does not load. | **Adobe Illustrator 2022 及以上**（`CSXS/manifest.xml` 中主机版本为 ILST 22.0–99.9）。若面板未出现，请按 Adobe 文档检查 CEP / 调试模式。 |
| **Install** | Copy or symlink this project folder into your OS-specific **CEP extensions** directory; restart Illustrator if needed. | 将本项目文件夹复制或符号链接到系统对应的 **CEP 扩展目录**；必要时重启 Illustrator。 |
| **Open** | **Window → Extensions → GridSeed** (menu label from `manifest.xml`). | 菜单 **Window（窗口）→ Extensions（扩展）→ GridSeed**（与 `manifest.xml` 一致）。 |

### 2) Preview the keynote locally · 本地预览演示网页

**English:** Serves static files so slide images and paths resolve correctly.

**中文：** 通过静态服务器打开，以保证幻灯片图片路径正确。

```bash
# Clone / 克隆
git clone https://github.com/sherryyu11902-del/Grid-Seed.git
cd Grid-Seed

# Local server / 本地服务（Python 3）
python3 -m http.server 8765
# Open / 浏览器打开：
# http://localhost:8765/gridseed-keynote-presentation.html
```

---

## 📘 Usage examples · 使用示例

| **English** | **中文** |
|-------------|----------|
| **Templates:** pick a preset → **New document** or add **trim guides** where bleed is defined. | **Templates：** 选择预设 → **新建文档**，或在有出血配置时使用 **裁切线 / 出血参考**。 |
| **Grids:** use **Grid Composer** to set dimensions, safe areas, slots, then apply to the artboard. | **Grids：** 在 **Grid Composer** 中设置尺寸、安全区、图位等，再应用到画板。 |
| **Words:** generate placeholder text, then edit manually for final copy. | **Words：** 生成占位文案后，再人工润色为终稿。 |
| **Bilingual:** use top bar **English / 中文** in the panel; keynote uses **中文 / English**. | **双语：** 面板顶栏切换 **English / 中文**；演示页顶栏为 **中文 / English**。 |

**Illustrator-side dispatch（宿主侧调用示意）** — UI builds payloads; `main.js` calls:

```javascript
// Simplified pattern / 简化示意 — real code in js/main.js
cs.evalScript('gridseed_dispatch("' + escapedPayload + '")', callback);
```

---

## 🗂️ Project structure · 项目结构

| Path · 路径 | **English** | **中文** |
|-------------|-------------|----------|
| `CSXS/manifest.xml` | CEP manifest: bundle id, host ILST, panel UI geometry, `index.html` + `jsx/hostscript.jsx`. | CEP 清单：扩展 ID、Illustrator 主机、面板尺寸、`index.html` 与 `jsx/hostscript.jsx`。 |
| `index.html` | Panel shell: tabs (Templates / Grids / Words / Learn / About), Grid Composer, `data-i18n` hooks. | 面板外壳：各标签页、Grid Composer、`data-i18n` 绑定。 |
| `css/style.css` | Panel styling (no external webfonts by design for CEP reliability). | 面板样式（为避免 CEP 限制未使用外联 Web 字体）。 |
| `js/main.js` | Host bridge, template/grid UI, `runDispatch` → ExtendScript. | 与宿主通信、界面逻辑、`runDispatch` 调用 ExtendScript。 |
| `js/gridseed-panel.js` | Panel-specific behaviours (composer, previews). | 面板行为（编排器、预览等）。 |
| `js/layout-preview.js` | Layout preview helpers. | 版式预览辅助逻辑。 |
| `js/data.js` | Categories, templates, presets, copy for **Words**. | 分类、模板、预设与 Words 数据。 |
| `js/i18n.js` | Bilingual strings & DOM application. | 中英文字符串与 DOM 更新。 |
| `js/CSInterface.js` | Adobe CEP CSInterface library. | Adobe CEP 官方 CSInterface。 |
| `jsx/hostscript.jsx` | ExtendScript: document creation, guides, gridseed_dispatch router. | ExtendScript：建档、参考线、`gridseed_dispatch` 路由。 |
| `gridseed-keynote-presentation.html` | Public-facing slide deck + notes (GitHub Pages). | 对外演示：全屏幻灯片与讲稿（可部署到 GitHub Pages）。 |

（续表）

| Path · 路径 | **English** | **中文** |
|-------------|-------------|----------|
| `presentation-assets/` | Slide bitmaps `slide-01.jpg` … `slide-22.jpg`, poster image, etc. | 幻灯片资源，如 `slide-01.jpg` … `slide-22.jpg` 等。 |
| `scripts/` | Optional: `build_gridseed_presentation.py`, `pptx_requirements.txt`, build caches. | 可选：演示稿构建脚本、PPTX 依赖与缓存目录。 |
| `排版网格预览.html` | Standalone layout preview page (Chinese filename). | 独立「排版网格预览」页面。 |
| `.gitignore` | Excludes large `.MOV`, venvs, logs, `.cursor/` (if present). | 忽略大体积 `.MOV`、虚拟环境、日志等。 |

> **Note · 说明** — There is **no root `package.json`**: runtime is the CEP stack (Chromium panel + ExtendScript), not Node/npm for the shipped extension.

---

## 🧰 Tech stack · 技术栈

| Layer · 层次 | **English** | **中文** |
|--------------|-------------|----------|
| Host · 宿主 | Adobe Illustrator **CEP** / **ExtendScript (JSX)** | Illustrator **CEP** / **ExtendScript (JSX)** |
| Panel UI · 面板 | HTML5, CSS3, ES5-style JavaScript (CEP-compatible) | HTML5、CSS3、兼容 CEP 的 JavaScript（偏 ES5 风格） |
| Bridge · 桥接 | `CSInterface.evalScript` | `CSInterface.evalScript` |
| Docs / decks · 文稿 | Static HTML; optional **Python 3** + `python-pptx`, Pillow (`scripts/pptx_requirements.txt`) | 静态 HTML；可选 **Python 3** + `python-pptx`、Pillow |
| Distribution · 分发 | Git + **GitHub**; **GitHub Pages** for keynote | Git + **GitHub**；演示站用 **GitHub Pages** |

### Optional: Python venv for PPTX tooling · 可选：PPTX 构建环境

**English:**

```bash
python3 -m venv .pptx_venv
.pptx_venv/bin/pip install -r scripts/pptx_requirements.txt
# Then run scripts as needed per scripts/*.py
```

**中文：**

```bash
python3 -m venv .pptx_venv
.pptx_venv/bin/pip install -r scripts/pptx_requirements.txt
# 再按需运行 scripts/ 下的脚本
```

---

## 🎤 Presentation workflow with Cursor · 演示与 Cursor 协作说明

| **English** | **中文** |
|-------------|----------|
| We used **Cursor** to accelerate the **presentation layer**: with a **markdown (or structured) design brief** explaining **concept, goals, UI/UX decisions, user flow, and visual hierarchy**, the AI assistant can help produce **slide outlines**, **speaker notes**, export-friendly **HTML**, and suggestions for **PDF / SVG / PNG** exports. | 我们使用 **Cursor** 辅助完成 **演示文稿相关产出**：若提供说明 **概念、目标、UI/UX 决策、用户路径与视觉层级** 的 **Markdown（或结构化）设计说明**，AI 可协助生成 **幻灯片大纲**、**讲稿**、便于导出的 **HTML**，以及 **PDF / SVG / PNG** 导出流程上的建议。 |
| Ask Cursor to scaffold a **GitHub Pages**-ready site (static `index` or `gridseed-keynote-presentation.html`) and to keep assets under `presentation-assets/`. | 可让 Cursor 帮助搭建适合 **GitHub Pages** 的静态站点（例如项目根目录下的演示 HTML），并将图片等资源放在 `presentation-assets/`。 |
| **Speaking tip:** keep one source of truth for your design rationale (short doc), then iterate slides and README in sync. | **发言建议：** 以一份简短 **设计过程文档** 为「单一事实来源」，再同步迭代幻灯片与 README，便于课堂展示与互评。 |

---

## 👥 Authors & roles · 作者与分工

| Name (English) · 英文名 | Name (中文) · 中文名 | Student ID · 学号 | Notes · 说明 |
|-------------------------|----------------------|-------------------|--------------|
| Tina Lai | 赖紫傲 | MC569209 | Course project contributor · 课程项目成员 |
| Sheryn Wang | 王筱钰 | MC569019 | Course project contributor · 课程项目成员 |

---

## 🤝 Contributing · 贡献指南

| **English** | **中文** |
|-------------|----------|
| 1. Fork the repo and create a feature branch. | 1. Fork 仓库并创建功能分支。 |
| 2. Keep CEP compatibility: avoid modern JS that breaks older Chromium in Illustrator. | 2. 保持 CEP 兼容：避免在 Illustrator 内置 Chromium 中不支持的过新 JS 语法。 |
| 3. Mirror template IDs between `js/data.js` and `jsx/hostscript.jsx`. | 3. 模板 ID 需在 `js/data.js` 与 `jsx/hostscript.jsx` 中保持一致。 |
| 4. Test **English / 中文** strings in `js/i18n.js`. | 4. 在 `js/i18n.js` 中同步校验 **英文/中文** 文案。 |
| 5. Open a Pull Request with a clear description and screenshots if UI changes. | 5. 提交 Pull Request，若涉及界面请附截图与简要说明。 |

---

## 📄 License · 许可证

| **English** | **中文** |
|-------------|----------|
| For **course submissions**, follow your instructor’s policy on redistribution, attribution, and reuse of Adobe sample / API terms. If you need an SPDX license for open release, add one explicitly (e.g. MIT) with team agreement. | **课程作业** 请遵守任课教师对转载、署名与 Adobe 相关条款的规定。若对公众开源，请由团队协商后增加明确的开源许可证（例如 MIT）。 |

---

## 🔗 Quick links · 快速链接

| Resource · 资源 | URL |
|-----------------|-----|
| GitHub repository · 仓库 | [https://github.com/sherryyu11902-del/Grid-Seed](https://github.com/sherryyu11902-del/Grid-Seed) |
| YouTube demo · 演示视频 | [https://youtu.be/SJhbgNIRQWg?si=bapGSPzX-HwuL5NX](https://youtu.be/SJhbgNIRQWg?si=bapGSPzX-HwuL5NX) |
| GitHub Pages (keynote) · 在线演示 | [https://sherryyu11902-del.github.io/Grid-Seed/gridseed-keynote-presentation.html](https://sherryyu11902-del.github.io/Grid-Seed/gridseed-keynote-presentation.html) |

---

<div align="center">

**Made with ❤️ for visual communication design workflows · 为视觉传达设计工作流而做**

</div>
