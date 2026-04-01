# GridSeed · Illustrator CEP Extension  
# GridSeed · Adobe Illustrator CEP 扩展插件

<div align="center">

**Design-support panel for layout grids, print bleed / safe zones, templates & placeholder copy — with bilingual UI.**  
**面向视觉传达设计的辅助面板：网格、出血与安全区、模板与占位文案，并支持中英双语界面。**

[![Repository](https://img.shields.io/badge/GitHub-Grid--Seed-24292f?logo=github)](https://github.com/sherryyu11902-del/Grid-Seed)
[![Illustrator](https://img.shields.io/badge/Host-Illustrator%20(CEP)-31A8FF?logo=adobeillustrator&logoColor=white)](https://www.adobe.com/products/illustrator.html)
[![YouTube Demo](https://img.shields.io/badge/YouTube-Video%20Demo-FF0000?logo=youtube&logoColor=white)](https://youtu.be/SJhbgNIRQWg?si=bapGSPzX-HwuL5NX)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-4285F4?logo=github)](https://sherryyu11902-del.github.io/Grid-Seed/gridseed-keynote-presentation.html)

**Bundle / 包名:** `com.gridseed.illustrator` · **Version / 版本:** `2.3.0`（`插件分支文件/CSXS/manifest.xml`）

</div>

---

## Repository layout · 仓库布局说明

| English | 中文 |
|---------|------|
| On GitHub **`main`**, the **CEP extension** (panel HTML, `js/`, `css/`, `jsx/`, `CSXS/`) lives under **`插件分支文件/`**. The **repo root** mainly holds `README.md`, the keynote HTML, `presentation-assets/` for GitHub Pages, and **`Gridseed preview/`** (browser-facing panel copy). | 在 GitHub **`main`** 分支上，**CEP 扩展**（面板 HTML、`js/`、`css/`、`jsx/`、`CSXS/`）位于 **`插件分支文件/`**。**仓库根目录** 主要有 `README.md`、演示稿 HTML、`presentation-assets/`（Pages），以及 **`Gridseed preview/`**（供浏览器访问的面板副本）。 |
| If you use a **full local folder** (e.g. from Google Drive) where `index.html` sits **next to** `js/` at the **same level**, install that folder as the extension; for browser preview, run `http.server` **from the directory that contains** `index.html` and open `http://127.0.0.1:PORT/index.html`. | 若使用 **网盘等完整工程**（`index.html` 与 `js/` **同级**），请将该目录安装为扩展；浏览器预览时在 **含 `index.html` 的目录** 运行 `python3 -m http.server`，再打开 `http://127.0.0.1:端口/index.html`。 |

---

## Quick links · 快速链接

| Resource · 资源 | URL |
|-----------------|-----|
| GitHub repository · 仓库 | [https://github.com/sherryyu11902-del/Grid-Seed](https://github.com/sherryyu11902-del/Grid-Seed) |
| Panel UI (GitHub Pages) · 插件面板（在线） | [https://sherryyu11902-del.github.io/Grid-Seed/Gridseed%20preview/index.html](https://sherryyu11902-del.github.io/Grid-Seed/Gridseed%20preview/index.html) |
| YouTube demo · 演示视频 | [https://youtu.be/SJhbgNIRQWg?si=bapGSPzX-HwuL5NX](https://youtu.be/SJhbgNIRQWg?si=bapGSPzX-HwuL5NX) |
| Keynote (GitHub Pages) · 在线演示稿 | [https://sherryyu11902-del.github.io/Grid-Seed/gridseed-keynote-presentation.html](https://sherryyu11902-del.github.io/Grid-Seed/gridseed-keynote-presentation.html) |
| Google Drive · 完整工程与大文件 | [Grid Seed folder · Grid Seed 资料夹](https://drive.google.com/drive/folders/1T_6NwHcBHyanICBKk7rAbWRlQ8Gqflaj?usp=drive_link) |

**Sharing · 分享链接：** Share **GitHub Pages `https://…` URLs** — not your machine’s `http://localhost`. **发放 GitHub Pages 的 `https://…` 链接**，不要发本机 `http://localhost`。If the page looks broken, the viewer may have opened `file://`, or is missing sibling `css/` / `js/`, or the local server was started from the wrong folder. **若对方页面异常**，常见原因是 `file://` 打开、缺少同级 `css/` / `js/`，或未在正确目录启动本地 HTTP。

---

## Project overview · 项目简介

| English | 中文 |
|---------|------|
| **GridSeed** is a **CEP** extension for **Adobe Illustrator**: templates, trim/bleed/safe guides, **Grid Composer**, placeholder **Words**, **Learn / About** — **English / 中文** UI. | **GridSeed** 是 **Adobe Illustrator** 的 **CEP** 扩展：模板、裁切/出血/安全区、**Grid Composer**、占位 **Words**、**Learn / About**，界面 **英文 / 中文**。 |
| **No API keys** for core features. | **Core features need no external API keys. · 核心功能不依赖外部 API Key。** |

---

## Scope · 仓库能呈现什么

| English | 中文 |
|---------|------|
| The full workflow requires **Illustrator** with the extension installed. Pages **demonstrate** the panel HTML or slides only. | **完整流程** 需在 **Illustrator** 中安装扩展。GitHub Pages **仅作展示**（面板 HTML 或演示稿）。 |
| For the **complete package** (large files), use **Google Drive** and the **YouTube** walkthrough. | **完整资源包**（大文件）请用 **Google Drive** 与 **YouTube** 说明。 |

---

## Google Drive · 网盘完整下载

**EN:** GitHub limits file size (roughly no pushes above ~100 MB; warnings around ~50 MB). Put videos, large PDFs, and full archives on Drive.  
**中文：** GitHub 对单文件体积有限制（约 100 MB 无法推送、约 50 MB 警告）。视频、大 PDF、完整压缩包等建议放在网盘。

👉 **[Google Drive — Grid Seed folder · Grid Seed 资料夹](https://drive.google.com/drive/folders/1T_6NwHcBHyanICBKk7rAbWRlQ8Gqflaj?usp=drive_link)**

---

## Video · 视频演示

👉 **[GridSeed — YouTube](https://youtu.be/SJhbgNIRQWg?si=bapGSPzX-HwuL5NX)**

---

## GitHub Pages · 在线访问

**EN:** Enable Pages under **Settings → Pages**. A log line like **“Deployment (dynamic)”** often means **GitHub Actions** published the site. For this **static** repo, set **Source: Deploy from a branch** → **main** → **`/(root)`**, unless you maintain a custom workflow under `.github/workflows/`.

**中文：** 在 **Settings → Pages** 启用。构建日志里的 **「部署（动态）」** 多表示 **GitHub Actions** 发布。本仓为 **静态** 页面时，请 **Source：Deploy from a branch** → **main** → **`/(root)`**，除非你在 `.github/workflows/` 里维护自定义 Pages 工作流。

**Common URLs · 常用地址**

| Page · 页面 | URL |
|-------------|-----|
| Panel · 插件面板（`Gridseed preview/index.html`） | [https://sherryyu11902-del.github.io/Grid-Seed/Gridseed%20preview/index.html](https://sherryyu11902-del.github.io/Grid-Seed/Gridseed%20preview/index.html) |
| Keynote deck · 演示稿 | [https://sherryyu11902-del.github.io/Grid-Seed/gridseed-keynote-presentation.html](https://sherryyu11902-del.github.io/Grid-Seed/gridseed-keynote-presentation.html) |

**EN:** *If you see 404: confirm `main` is pushed, Pages is on, and wait 1–3 minutes.*  
**中文：** *若 404：确认已推送 `main`、已开 Pages，等待 1–3 分钟。*

---

## Quick start · 快速开始

### Use in Illustrator · 在 Illustrator 中使用

| Step · 步骤 | English | 中文 |
|-------------|---------|------|
| Environment · 环境 | Illustrator **2022+** (ILST range in `插件分支文件/CSXS/manifest.xml`) | 需 **Illustrator 2022 及以上** |
| Install · 安装 | Copy or symlink the **extension folder** (with `CSXS` and panel files) into the system **CEP extensions directory** | 按 Adobe CEP 要求将扩展目录放入系统 **CEP 扩展目录** |
| Open · 打开 | **Window → Extensions → GridSeed** | **窗口 → 扩展 → GridSeed** |

### Browser preview (not a substitute for Illustrator) · 浏览器预览（不替代 Illustrator）

**EN:**

1. Clone: `git clone https://github.com/sherryyu11902-del/Grid-Seed.git`
2. From the **`Grid-Seed` repo root**, run: `python3 -m http.server 8765`
3. Open a URL that matches **where you started the server**:
   - **Root has `index.html`** (same layout as some full packages) → `http://127.0.0.1:8765/` or `http://127.0.0.1:8765/index.html`
   - **Panel only under `插件分支文件/`** (no root `index.html`) → `http://127.0.0.1:8765/%E6%8F%92%E4%BB%B6%E5%88%86%E6%94%AF%E6%96%87%E4%BB%B6/index.html`
   - **You `cd` into `插件分支文件` then start the server** → `http://127.0.0.1:8765/index.html`
4. Keynote (server must be **repo root**): `http://127.0.0.1:8765/gridseed-keynote-presentation.html` (needs `presentation-assets/` alongside)

**中文：**

1. **克隆** 仓库：`git clone https://github.com/sherryyu11902-del/Grid-Seed.git`
2. 进入 **`Grid-Seed` 根目录**，执行：`python3 -m http.server 8765`
3. 按 **启动 server 的目录** 打开对应地址：
   - **根目录有 `index.html`**（与部分完整工程一致）→ `http://127.0.0.1:8765/` 或 `http://127.0.0.1:8765/index.html`
   - **仅 `插件分支文件/` 有面板、根目录无 `index.html`** → `http://127.0.0.1:8765/%E6%8F%92%E4%BB%B6%E5%88%86%E6%94%AF%E6%96%87%E4%BB%B6/index.html`
   - **`cd` 进入 `插件分支文件` 后启动 server** → `http://127.0.0.1:8765/index.html`
4. 演示稿（须在**仓库根目录**启动 server）：`http://127.0.0.1:8765/gridseed-keynote-presentation.html`（需同级 `presentation-assets/`）

**EN:** Avoid relying on **`file://`** double‑click for preview (scripts/styles may be blocked). Buttons that send art to Illustrator **will fail** in a normal browser — expected.  
**中文：** 尽量避免用 **`file://` 双击** 作为主预览方式。面板内下发 Illustrator 的按钮在纯浏览器中会失败，属正常现象。

---

## Usage · 使用提示

| English | 中文 |
|---------|------|
| **Templates:** preset → **New document** / trim guides. | **模板：** 选预设 → **新建文档** / 裁切参考。 |
| **Grids:** **Grid Composer** → apply to artboard. | **网格：** 在 **Grid Composer** 中设置并应用到画板。 |
| **Words:** placeholder text → edit in document. | **Words：** 占位文案 → 在文档中再编辑。 |

**Host call example · 宿主调用示意** (relative path inside the extension folder: `js/gridseed-panel.js` · 扩展目录内相对路径 `js/gridseed-panel.js`):

```javascript
cs.evalScript('gridseed_dispatch("' + escapedPayload + '")', callback);
```

---

## Project structure · 项目结构（GitHub `main`）

**Extension bundle · 扩展本体（`插件分支文件/`）**

| Path · 路径 | English | 中文 |
|-------------|---------|------|
| `插件分支文件/CSXS/manifest.xml` | CEP manifest | CEP 清单 |
| `插件分支文件/index.html` | Panel page | 面板页面 |
| `插件分支文件/css/style.css` | Styles | 样式 |
| `插件分支文件/js/gridseed-panel.js` | Panel logic, `runDispatch` | 面板主逻辑、`runDispatch` |
| `插件分支文件/js/layout-preview.js` | Layout preview | 版式预览 |
| `插件分支文件/js/i18n.js` | Bilingual strings | 双语字符串 |
| `插件分支文件/js/data.js` | Templates, Words data | 模板与 Words 等数据 |
| `插件分支文件/js/CSInterface.js` | Adobe CEP library | Adobe CEP 库 |
| `插件分支文件/jsx/hostscript.jsx` | ExtendScript host | ExtendScript 宿主脚本 |

**Repo root (Pages-related) · 仓库根目录（Pages 相关）**

| Path · 路径 | English | 中文 |
|-------------|---------|------|
| `README.md` | This readme | 本说明 |
| `gridseed-keynote-presentation.html` | Keynote HTML entry | 演示稿入口 |
| `presentation-assets/` | Slide assets | 幻灯片等资源 |
| `Gridseed preview/` | Browser panel copy | 浏览器可访问的面板副本 |
| `排版网格预览.html` | Standalone preview page (if present) | 独立预览页（若存在） |

**EN:** No `package.json` at repo root — runtime is CEP + ExtendScript, not a Node build pipeline.  
**中文：** 根目录 **无** `package.json`：运行时为 CEP + ExtendScript，不依赖 Node 打包发布。

---

## Tech stack · 技术栈

**EN:** Illustrator **CEP** + **ExtendScript (JSX)**; panel **HTML / CSS / ES5-style JS**; bridge **`CSInterface.evalScript`**.  
**中文：** Illustrator **CEP** + **ExtendScript (JSX)**；面板 **HTML / CSS / ES5 风格 JS**；桥接 **`CSInterface.evalScript`**。

---

## Authors · 作者

| English name | 中文名 | Student ID · 学号 |
|--------------|--------|-------------------|
| Tina Lai | 赖紫傲 | MC569209 |
| Sheryn Wang | 王筱钰 | MC569019 |

---

## Contributing · 贡献

**EN:**

1. Keep **CEP compatibility** (avoid overly new JS syntax).
2. Keep template IDs in sync in **`插件分支文件/js/data.js`** and **`插件分支文件/jsx/hostscript.jsx`**.
3. Mirror copy in **`插件分支文件/js/i18n.js`**.

**中文：**

1. 保持 **CEP 兼容**（避免过新 JS 语法）。
2. 模板 ID 在 **`插件分支文件/js/data.js`** 与 **`插件分支文件/jsx/hostscript.jsx`** 中保持一致。
3. 文案同步 **`插件分支文件/js/i18n.js`**。

---

## License · 许可证

**EN:** Coursework — follow your school’s rules and Adobe’s terms; add an explicit license (e.g. MIT) if you open-source as a team.  
**中文：** 课程作业请遵守学校与 Adobe 相关规定；若对外开源，请团队协商后添加明确许可证（如 MIT）。

---

## Features · 特性摘要

**EN:** Template library, bleed & safe zones, **Grid Composer**; **Words** placeholder text; **bilingual** UI; keynote **`gridseed-keynote-presentation.html`** + **`presentation-assets/`**.  
**中文：** 模板库、出血与安全区、**Grid Composer**；**Words** 占位文案；**双语** 界面；**`gridseed-keynote-presentation.html`** + **`presentation-assets/`** 网页演示。

---

## Push README to GitHub · 将 README 推送到 GitHub

```bash
cd /path/to/Grid-Seed
git add README.md
git commit -m "docs: update README"
git push origin main
```

**EN:** To sync the whole repo: `git add -A`, then commit and push (watch `.gitignore` and large files).  
**中文：** 同步整仓：`git add -A` 后提交推送（留意 `.gitignore` 与大文件）。

---

<div align="center">

**Made with ❤️ for visual communication design workflows · 为视觉传达设计工作流而做**

</div>
