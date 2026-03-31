<!DOCTYPE html>
<html lang="zh-Hans">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>GridSeed — README（图文并茂 / Bilingual）</title>
  <script>
  (function () {
    try {
      var b = document.createElement("base");
      b.href = new URL(".", location.href).href;
      var styleEl = document.querySelector("head > style");
      if (styleEl && styleEl.parentNode) {
        styleEl.parentNode.insertBefore(b, styleEl);
      } else if (document.head) {
        document.head.insertBefore(b, document.head.firstChild);
      }
    } catch (err) {}
  })();
  </script>
  <style>
    :root {
      --bg: #070b14;
      --surface: #0c1220;
      --text: #e6f4ff;
      --muted: #7a8fa3;
      --cyan: #00f0ff;
      --border: rgba(0, 240, 255, 0.15);
      --font: system-ui, -apple-system, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: var(--font);
      background: var(--bg);
      color: var(--text);
      line-height: 1.65;
      font-size: 16px;
    }
    .wrap { max-width: 900px; margin: 0 auto; padding: 32px 20px 80px; }
    h1 {
      font-size: 1.75rem;
      font-weight: 700;
      margin: 0 0 8px;
      letter-spacing: -0.02em;
    }
    .sub {
      color: var(--muted);
      font-size: 0.95rem;
      margin-bottom: 28px;
    }
    h2 {
      font-size: 1.15rem;
      color: var(--cyan);
      margin: 36px 0 16px;
      padding-bottom: 8px;
      border-bottom: 1px solid var(--border);
    }
    .bilingual {
      display: grid;
      gap: 12px;
      margin: 16px 0;
    }
    .bilingual .en { border-left: 3px solid rgba(0, 240, 255, 0.35); padding-left: 14px; }
    .bilingual .zh { border-left: 3px solid rgba(167, 139, 250, 0.45); padding-left: 14px; }
    .tag { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.06em; color: var(--muted); margin-bottom: 4px; }
    a { color: var(--cyan); text-decoration: underline; text-underline-offset: 3px; }
    a:hover { color: #7dd3fc; }
    code, .mono {
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
      font-size: 0.9em;
      background: rgba(0, 0, 0, 0.35);
      padding: 2px 6px;
      border-radius: 4px;
    }
    ul { padding-left: 1.2em; }
    .card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 20px;
      margin: 20px 0;
    }
    .shots {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 16px;
      margin: 20px 0;
    }
    figure {
      margin: 0;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 10px;
      overflow: hidden;
    }
    figure img {
      width: 100%;
      height: auto;
      display: block;
      vertical-align: middle;
    }
    figcaption {
      padding: 10px 12px;
      font-size: 13px;
      color: var(--muted);
    }
    .warn {
      background: rgba(120, 40, 40, 0.35);
      border: 1px solid rgba(248, 113, 113, 0.4);
      border-radius: 10px;
      padding: 16px 18px;
      margin: 20px 0;
    }
    table { width: 100%; border-collapse: collapse; font-size: 0.92rem; margin: 12px 0; }
    th, td { border: 1px solid var(--border); padding: 10px 12px; text-align: left; vertical-align: top; }
    th { background: rgba(0, 240, 255, 0.06); color: var(--cyan); }
    .footer { margin-top: 48px; text-align: center; color: var(--muted); font-size: 14px; }
  </style>
</head>
<body>
  <div class="wrap">
    <h1>GridSeed · Illustrator CEP</h1>
    <p class="sub">Bilingual README (HTML) · 与 <code>README.md</code> 配套 · 插图使用仓库内相对路径，需将截图放入 <code>docs/readme-assets/</code></p>

    <div class="card">
      <p class="tag">English</p>
      <p><strong>GridSeed</strong> is a CEP extension for Adobe Illustrator: templates, Grid Composer, bleed/safe guides, placeholder Words, bilingual UI.</p>
      <p class="tag" style="margin-top:14px">中文</p>
      <p><strong>GridSeed</strong> 是 Adobe Illustrator 的 CEP 插件：模板、网格编排、出血与安全区、占位文案、中英双语界面。</p>
      <p><strong>Bundle:</strong> <span class="mono">com.gridseed.illustrator</span> · <strong>v2.3.0</strong></p>
    </div>

    <h2>关键说明 · Why HTML / GitHub is not enough</h2>
    <div class="bilingual">
      <div class="en">
        <p class="tag">English</p>
        <p>This project is an <strong>Illustrator panel plugin</strong>. Any HTML preview (GitHub Pages / keynote) can show slides and UI mockups, but <strong>cannot replace the real in-app workflow</strong> inside Illustrator (CEP host, ExtendScript, artboard actions). Use the <strong>YouTube demo</strong>, the <strong>full folder from Google Drive</strong>, and install the extension locally for the complete experience.</p>
      </div>
      <div class="zh">
        <p class="tag">中文</p>
        <p>本项目是 <strong>Adobe Illustrator 的 CEP 插件</strong>。网页上的 HTML（GitHub Pages / 演示稿）只能展示叙事与界面示意，<strong>无法呈现宿主软件内的完整操作链路</strong>（面板与 JSX、画板实时交互等）。完整体验请结合 <strong>YouTube 演示视频</strong>、从 <strong>Google Drive 下载的完整工程文件夹</strong>，并在本机按安装流程置入 Illustrator。</p>
      </div>
    </div>

    <div class="warn">
      <p class="tag">GitHub file size · 仓库体积</p>
      <p><strong>EN:</strong> GitHub blocks pushes above <strong>100 MB per file</strong> and warns around <strong>50 MB</strong>. Course or team policies may set a lower cap (e.g. <strong>~25 MB</strong>). Large <strong>video (.MOV)</strong>, <strong>PDF</strong>, or full archives should <strong>not</strong> be stored only in the repo—use the Drive link below.</p>
      <p><strong>中文：</strong> GitHub 对<strong>单文件约 100 MB</strong> 为硬上限（约 <strong>50 MB</strong> 会告警）。若课程要求仓库更小（例如 <strong>约 25 MB</strong>），请将高清 <strong>视频、大体量 PDF、完整压缩包</strong> 放在网盘，而非单独依赖 Git 仓库。</p>
    </div>

    <h2>完整资源下载 · Full package (Google Drive)</h2>
    <div class="bilingual">
      <div class="en">
        <p class="tag">English</p>
        <p>Download the folder <strong>gridseed-illustrator-plugin copy 2_副本</strong> (and other assets) from Google Drive, then follow the CEP install steps for your OS and open <strong>Window → Extensions → GridSeed</strong> in Illustrator.</p>
        <p><a href="https://drive.google.com/drive/folders/1T_6NwHcBHyanICBKk7rAbWRlQ8Gqflaj?usp=drive_link" target="_blank" rel="noopener noreferrer">Open Google Drive folder →</a></p>
      </div>
      <div class="zh">
        <p class="tag">中文</p>
        <p>请从 Google Drive 下载文件夹 <strong>gridseed-illustrator-plugin copy 2_副本</strong>（内含完整插件与其它大文件），按 <strong>CEP 扩展安装说明</strong> 置入 Adobe Illustrator，并在菜单 <strong>Window → Extensions → GridSeed</strong> 打开面板。</p>
        <p><a href="https://drive.google.com/drive/folders/1T_6NwHcBHyanICBKk7rAbWRlQ8Gqflaj?usp=drive_link" target="_blank" rel="noopener noreferrer">打开 Google Drive 资料夹 →</a></p>
      </div>
    </div>

    <h2>图解 · Screenshots（相对路径，不依赖外链）</h2>
    <p class="sub">将 Drive 中的 <code>3.png</code>–<code>8.png</code> 重命名为 <code>screen-03.png</code> … <code>screen-08.png</code> 后放入 <code>docs/readme-assets/</code>。若文件缺失，浏览器会显示破图占位。</p>
    <div class="shots">
      <figure>
        <img src="docs/readme-assets/screen-03.png" alt="GridSeed screenshot 03" loading="lazy" />
        <figcaption>EN: Screenshot 03 · 中文：截图 03</figcaption>
      </figure>
      <figure>
        <img src="docs/readme-assets/screen-04.png" alt="GridSeed screenshot 04" loading="lazy" />
        <figcaption>EN: Screenshot 04 · 中文：截图 04</figcaption>
      </figure>
      <figure>
        <img src="docs/readme-assets/screen-05.png" alt="GridSeed screenshot 05" loading="lazy" />
        <figcaption>EN: Screenshot 05 · 中文：截图 05</figcaption>
      </figure>
      <figure>
        <img src="docs/readme-assets/screen-06.png" alt="GridSeed screenshot 06" loading="lazy" />
        <figcaption>EN: Screenshot 06 · 中文：截图 06</figcaption>
      </figure>
      <figure>
        <img src="docs/readme-assets/screen-07.png" alt="GridSeed screenshot 07" loading="lazy" />
        <figcaption>EN: Screenshot 07 · 中文：截图 07</figcaption>
      </figure>
      <figure>
        <img src="docs/readme-assets/screen-08.png" alt="GridSeed screenshot 08" loading="lazy" />
        <figcaption>EN: Screenshot 08 · 中文：截图 08</figcaption>
      </figure>
    </div>

    <h2>链接 · Quick links</h2>
    <table>
      <thead>
        <tr><th>资源</th><th>链接</th></tr>
      </thead>
      <tbody>
        <tr><td>GitHub 仓库</td><td><a href="https://github.com/sherryyu11902-del/Grid-Seed">github.com/sherryyu11902-del/Grid-Seed</a></td></tr>
        <tr><td>YouTube 演示</td><td><a href="https://youtu.be/SJhbgNIRQWg?si=bapGSPzX-HwuL5NX">youtu.be/SJhbgNIRQWg</a></td></tr>
        <tr><td>GitHub Pages（讲稿页）</td><td><a href="https://sherryyu11902-del.github.io/Grid-Seed/gridseed-keynote-presentation.html">gridseed-keynote-presentation.html</a></td></tr>
        <tr><td>Google Drive 完整包</td><td><a href="https://drive.google.com/drive/folders/1T_6NwHcBHyanICBKk7rAbWRlQ8Gqflaj?usp=drive_link">Drive 资料夹</a></td></tr>
      </tbody>
    </table>

    <h2>成员 · Authors</h2>
    <table>
      <thead>
        <tr><th>英文名</th><th>中文名</th><th>学号</th></tr>
      </thead>
      <tbody>
        <tr><td>Tina Lai</td><td>赖紫傲</td><td>MC569209</td></tr>
        <tr><td>Sheryn Wang</td><td>王筱钰</td><td>MC569019</td></tr>
      </tbody>
    </table>

    <p class="footer">详细条目以 <code>README.md</code> 为准 · For full sections see <code>README.md</code></p>
  </div>
</body>
</html>
