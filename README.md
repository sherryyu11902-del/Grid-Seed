<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title data-i18n="app_title">GridSeed</title>
    <!-- No external fonts: CEP panels often block or stall on Google Fonts. -->
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <div class="app-bg" aria-hidden="true"></div>
    <div class="lang-bar lang-bar--top" role="toolbar" data-i18n-aria-label="lang_bar_aria" aria-label="Language selection">
      <span class="lang-bar__label" data-i18n="langLabel">Language</span>
      <button type="button" class="btn ghost lang-btn" data-lang="en" aria-pressed="true">English</button>
      <button type="button" class="btn ghost lang-btn" data-lang="zh" aria-pressed="false">中文</button>
    </div>
    <header class="topbar">
      <div class="topbar-edge topbar-edge--tl" aria-hidden="true"></div>
      <div class="topbar-edge topbar-edge--tr" aria-hidden="true"></div>
      <div class="brand">
        <span class="brand-mark" aria-hidden="true">
          <span class="brand-mark__inner"></span>
        </span>
        <div>
          <h1 class="brand-title">GridSeed <span class="build-tag">v2.3.0</span></h1>
          <p class="brand-sub" data-i18n="brandSub">Templates · grids · words · learn · about</p>
        </div>
      </div>
    </header>

    <nav class="tabs" role="tablist">
      <button
        type="button"
        class="tab"
        data-tab="templates"
        role="tab"
        aria-selected="true"
        data-i18n="tab_templates"
      >
        Templates
      </button>
      <button
        type="button"
        class="tab"
        data-tab="grids"
        role="tab"
        aria-selected="false"
        data-i18n="tab_grids"
      >
        Grids
      </button>
      <button
        type="button"
        class="tab"
        data-tab="words"
        role="tab"
        aria-selected="false"
        data-i18n="tab_words"
      >
        Words
      </button>
      <button
        type="button"
        class="tab"
        data-tab="learn"
        role="tab"
        aria-selected="false"
        data-i18n="tab_learn"
      >
        Learn
      </button>
      <button
        type="button"
        class="tab"
        data-tab="about"
        role="tab"
        aria-selected="false"
        data-i18n="tab_about"
      >
        About
      </button>
    </nav>

    <main class="main main--scroll" role="main" data-i18n-aria-label="aria_main" aria-label="GridSeed">
      <section
        class="panel"
        data-panel="templates"
        id="panel-templates"
        aria-labelledby="templates-heading"
      >
        <h2 id="templates-heading" class="visually-hidden" data-i18n="templates_page_title">Templates</h2>
        <p class="novice-intro" data-i18n="panel_templates_intro">
          Pick a size and a grid, open a new document, then optionally preview a layout and send it to Illustrator — all in this tab.
        </p>
        <p class="hint panel-meta-hint" role="note" data-i18n="panel_templates_hint">
          v2.3.0 · Full details: About. Reload the panel after replacing files.
        </p>
        <div class="grid-composer" id="gridComposerRoot">
          <header class="gc-header">
            <h3 class="gc-title" data-i18n="gc_title">Grid Composer</h3>
            <div class="gc-menu-icons" aria-hidden="true">
              <span class="gc-dot"></span><span class="gc-dot"></span><span class="gc-dot"></span>
            </div>
          </header>

          <details class="gc-acc" id="gcPreviewWrap" open>
            <summary data-i18n="gc_summary_preview">Preview</summary>
            <div class="gc-body">
              <div class="gc-preview-box">
                <svg id="gcPreviewSvg" viewBox="0 0 320 220" preserveAspectRatio="xMidYMid meet" data-i18n-aria-label="gc_preview_svg_aria" aria-label="Grid preview"></svg>
              </div>
              <div class="gc-preview-actions">
                <button type="button" class="btn primary" id="gcPlaceBtn" data-i18n="gc_btn_place">Place on Artboard</button>
                <button type="button" class="btn ghost" id="gcRegenBtn" data-i18n="gc_btn_regen">Regenerate Grid</button>
                <button type="button" class="btn ghost" id="gcDownloadBtn" data-i18n="gc_btn_download_png">Download PNG</button>
              </div>
            </div>
          </details>

          <details class="gc-acc" open>
            <summary data-i18n="gc_summary_quick_templates">Quick Templates</summary>
            <div class="gc-body">
              <label class="field">
                <span data-i18n="gc_purpose_label">Purpose</span>
                <select id="gcPurposeSelect" data-i18n-aria-label="gc_aria_purpose" aria-label="Purpose"></select>
              </label>
              <div id="gcPresetList" class="gc-preset-list" role="listbox" data-i18n-aria-label="gc_aria_quick_templates" aria-label="Quick templates"></div>
            </div>
          </details>

          <details class="gc-acc" open>
            <summary data-i18n="gc_summary_starter_kit">Starter Kit</summary>
            <div class="gc-body">
              <div id="gcThemeStrip" class="gc-theme-strip" role="listbox" data-i18n-aria-label="gc_aria_starter_themes" aria-label="Starter Kit themes"></div>
            </div>
          </details>

          <details class="gc-acc" open>
            <summary data-i18n="gc_summary_canvas_size">Canvas Size</summary>
            <div class="gc-body">
              <label class="field">
                <span data-i18n="gc_paper_size_label">Paper size</span>
                <select id="gcPaperSize" data-i18n-aria-label="gc_aria_paper_size" aria-label="Paper size">
                  <option value="a4" data-i18n="gc_paper_opt_a4">A4 (210 x 297 mm)</option>
                  <option value="a3" data-i18n="gc_paper_opt_a3">A3 (297 x 420 mm)</option>
                  <option value="a2" data-i18n="gc_paper_opt_a2">A2 (420 x 594 mm)</option>
                  <option value="a1" data-i18n="gc_paper_opt_a1">A1 (594 x 841 mm)</option>
                  <option value="a0" data-i18n="gc_paper_opt_a0">A0 (841 x 1189 mm)</option>
                  <option value="b2" data-i18n="gc_paper_opt_b2">B2 (500 x 707 mm)</option>
                  <option value="b1" data-i18n="gc_paper_opt_b1">B1 (707 x 1000 mm)</option>
                  <option value="letter" data-i18n="gc_paper_opt_letter">US Letter (8.5 x 11 in)</option>
                  <option value="tabloid" data-i18n="gc_paper_opt_tabloid">US Tabloid (11 x 17 in)</option>
                  <option value="poster_24x36" data-i18n="gc_paper_opt_poster_24x36">Poster 24 x 36 in</option>
                  <option value="poster_18x24" data-i18n="gc_paper_opt_poster_18x24">Poster 18 x 24 in</option>
                  <option value="instagram" data-i18n="gc_paper_opt_instagram">Instagram Post (1080 x 1080)</option>
                  <option value="custom" data-i18n="gc_paper_opt_custom">Custom</option>
                </select>
              </label>
              <button type="button" id="gcOrientationToggle" class="gc-seg-btn" data-i18n="gc_orientation_landscape">Horizontal</button>
              <div class="gc-wh-row">
                <label class="field"><span data-i18n="gc_width">Width</span><input id="gcCustomW" type="number" min="200" value="1200" disabled /></label>
                <label class="field"><span data-i18n="gc_height">Height</span><input id="gcCustomH" type="number" min="200" value="1200" disabled /></label>
              </div>
              <div class="gc-wh-row">
                <label class="field">
                  <span data-i18n="gc_bleed_mm">Bleed (mm)</span>
                  <input id="gcBleedMm" type="number" min="0" step="0.125" value="3" data-i18n-aria-label="gc_aria_bleed" aria-label="Bleed in millimeters" />
                </label>
                <label class="field">
                  <span data-i18n="gc_safe_mm">Safe margin (mm)</span>
                  <input id="gcSafeMm" type="number" min="0" step="0.5" value="10" data-i18n-aria-label="gc_aria_safe" aria-label="Safe margin inside trim" />
                </label>
              </div>
              <p class="hint gc-bleed-hint" data-i18n="gc_bleed_hint">Bleed expands the artboard; orange guides mark trim, magenta marks the safe area. Screen and custom sizes default to 0 — change paper to reload typical print values.</p>
            </div>
          </details>

          <details class="gc-acc" open>
            <summary data-i18n="gc_summary_image_count">Number of Images</summary>
            <div class="gc-body">
              <label class="field">
                <span data-i18n="gc_amount_label">Amount</span>
                <select id="gcImageCount" data-i18n-aria-label="gc_aria_image_count" aria-label="Number of images"></select>
              </label>
              <div class="gc-tune-row">
                <label class="field">
                  <span data-i18n="gc_image_size_pct">Image size (%)</span>
                  <input id="gcImageScale" type="range" min="60" max="115" value="100" />
                </label>
                <label class="field">
                  <span data-i18n="gc_gap_pct">Gap (%)</span>
                  <input id="gcImageGap" type="range" min="0" max="30" value="0" />
                </label>
              </div>
            </div>
          </details>

          <button type="button" id="gcCreateBtn" class="gc-create-btn" disabled data-i18n="gc_create_grid">CREATE GRID</button>

        </div>
        <div class="starter-kit-block" role="region" data-i18n-aria-label="aria_starter_kit_region" aria-label="Starter kit">
          <h3 class="section-title section-title--sub" data-i18n="btn_create">Starter kit</h3>
          <p class="hint" data-i18n="starter_kit_hint">
            Choose a theme, preview it here (kit + grid guidelines), and then create a guided starter on the selected format. It will also apply the Layout &amp; Amount settings below.
          </p>
          <div class="starter-kit-preview" aria-live="polite">
            <svg
              id="starterKitPreviewSvg"
              viewBox="0 0 240 160"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              data-i18n-aria-label="aria_starter_preview_svg"
              aria-label="Starter kit preview"
            >
              <rect id="skBg" x="0" y="0" width="240" height="160" rx="12" fill="#fff" />
              <g id="skGuides" opacity="0.9">
                <rect x="20" y="18" width="200" height="124" fill="none" stroke="#00F0FF" stroke-width="2" stroke-dasharray="6 5" />
                <line x1="120" y1="18" x2="120" y2="142" stroke="#A78BFA" stroke-width="1.5" stroke-dasharray="5 5" />
                <line x1="20" y1="58" x2="220" y2="58" stroke="#A78BFA" stroke-width="1.5" stroke-dasharray="5 5" />
              </g>
              <path
                id="skWave"
                d="M20 110 C 50 92, 70 98, 100 90 C 130 82, 150 70, 180 78 C 210 86, 220 106, 220 106 L 220 142 L 20 142 Z"
                fill="#2A9D8F"
                opacity="0.95"
              />
              <circle id="skBlob1" cx="72" cy="122" r="28" fill="#45B7D1" opacity="0.9" />
              <circle id="skBlob2" cx="172" cy="120" r="22" fill="#A8D5BA" opacity="0.85" />
              <text
                id="skTitle"
                x="120"
                y="50"
                text-anchor="middle"
                font-family="Helvetica, Arial, sans-serif"
                font-size="22"
                font-weight="800"
                fill="#111"
              >
                STARTER
              </text>
              <text
                id="skSubtitle"
                x="120"
                y="72"
                text-anchor="middle"
                font-family="Helvetica, Arial, sans-serif"
                font-size="12"
                font-weight="700"
                fill="#333"
              >
                grid-guided
              </text>
            </svg>
          </div>
          <div class="template-create-actions template-create-actions--starter-top">
            <label class="field template-create-actions__field">
              <span data-i18n="starter_theme_label">Color theme</span>
              <select id="starterTheme" data-i18n-aria-label="aria_starter_theme_select" aria-label="Starter color theme"></select>
            </label>
            <button
              type="button"
              class="btn primary start-kit-button"
              id="btnStarterCreate"
              data-i18n="btn_create"
            >
              Starter kit
            </button>
          </div>
        </div>
        <div class="paper-format-block" role="region" data-i18n-aria-label="aria_region_size_grid" aria-label="Size and grid">
          <h3 class="section-title" data-i18n="paper_block_title">Size &amp; grid</h3>
          <label class="field paper-format-select">
            <span data-i18n="paper_format_label">Format</span>
            <select id="paperFormat" aria-label="Paper or screen format"></select>
          </label>
          <p class="hint paper-variant-hint" data-i18n="paper_variant_hint">
            Tap a chip — the preview updates. Scroll the chip list if needed.
          </p>
          <div class="template-preview" aria-live="polite">
            <div class="template-preview__frame">
              <svg
                id="templatePreviewSvg"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                data-i18n-aria-label="aria_template_preview_svg"
                aria-label="Schematic preview of the selected template"
              ></svg>
            </div>
            <p id="templatePreviewCaption" class="template-preview__caption"></p>
          </div>
          <div id="paperVariantList" class="variant-bar" role="group" data-i18n-aria-label="aria_variant_bar" aria-label="Grid and layout presets for this format"></div>
          <div class="paper-format-actions">
            <button type="button" class="btn primary" id="btnNewFromPaper" data-i18n="btn_new_doc">New document</button>
            <button type="button" class="btn ghost" id="btnPaperBleed" data-i18n="btn_trim_safe">Refresh trim &amp; safe guides</button>
          </div>
        </div>

        <div class="template-layout-plan layout-plan-ui" role="region" data-i18n-aria-label="aria_region_layout_preview" aria-label="Layout preview">
          <h3 class="section-title" data-i18n="tpl_lp_section_title">Layout preview</h3>
          <p class="hint" data-i18n="tpl_lp_section_hint">
            Optional: set how images and text share the page. The picture below updates as you change numbers.
          </p>
          <div class="layout-preview__plan" id="lpPlanBox" aria-live="polite">
            <p class="layout-preview__plan-kicker" data-i18n="lp_plan_h2">Summary</p>
            <ul id="lpPlanList">
              <li data-i18n="lp_plan_placeholder">Adjust values below to see stacking ratio, grid rows/columns, and dual-column hints.</li>
            </ul>
          </div>
          <fieldset>
            <legend data-i18n="lp_fieldset_layout">Layout &amp; amounts</legend>
            <label class="lp-span" data-i18n="lp_layout_label">Layout type</label>
            <select id="lpLayoutMode" data-i18n-aria-label="aria_lp_layout_mode" aria-label="Layout type">
              <option value="stacked" data-i18n="lp_opt_stacked">Stacked (image top · text bottom)</option>
              <option value="split" data-i18n="lp_opt_split">Side-by-side (image left · text right)</option>
            </select>
            <label class="lp-check">
              <input type="checkbox" id="lpEnablePlan" checked />
              <span data-i18n="lp_enable_plan">Enable content plan (canvas + sidebar details)</span>
            </label>
            <div class="lp-row3" style="margin-top: 8px">
              <label class="lp-field">
                <span class="lp-span" data-i18n="lp_img_count">Images</span>
                <input type="number" id="lpImgCount" min="0" max="12" value="2" aria-describedby="lp-fieldset-layout-hint" />
              </label>
              <label class="lp-field">
                <span class="lp-span" data-i18n="lp_body_blocks">Body blocks</span>
                <input type="number" id="lpBodyBlocks" min="0" max="24" value="4" aria-describedby="lp-fieldset-layout-hint" />
              </label>
              <label class="lp-field">
                <span class="lp-span" data-i18n="lp_sub_count">Subheads</span>
                <input type="number" id="lpSubCount" min="0" max="12" value="1" aria-describedby="lp-fieldset-layout-hint" />
              </label>
            </div>
            <p id="lp-fieldset-layout-hint" class="visually-hidden" data-i18n="lp_fieldset_layout_a11y">
              Controls how much space images and text use in the preview.
            </p>
          </fieldset>
          <fieldset>
            <legend data-i18n="lp_fieldset_slots">Per-image size / ratio</legend>
            <p class="hint lp-slots-hint" data-i18n="lp_slots_hint">
              Each image: pixel size or aspect ratio; grid rows/columns follow the image zone and count.
            </p>
            <div id="lpImageSlots"></div>
          </fieldset>
          <div class="layout-preview__canvas-wrap">
            <svg
              id="lpPreviewSvg"
              viewBox="0 0 210 297"
              preserveAspectRatio="xMidYMid meet"
              data-i18n-aria-label="lp_svg_aria"
              aria-label="Layout preview schematic"
            ></svg>
          </div>
          <p id="lpCanvasCaption" class="layout-preview__caption"></p>
          <h3 class="section-title section-title--sub" data-i18n="tpl_create_h2">Send to Illustrator</h3>
          <p class="hint template-create-hint" data-i18n="tpl_create_hint">
            Uses the size and chip you chose above. Layout plan = image &amp; text zones (guide layer). Starter kit = colors, shapes, and sample text.
          </p>
          <div class="template-create-actions">
            <button type="button" class="btn ghost" id="btnLayoutPlanCreate" data-i18n="btn_layoutplan_create">
              Layout plan
            </button>
          </div>
        </div>

      </section>

      <section class="panel" data-panel="grids" id="panel-grids" hidden>
        <div class="toolbar">
          <label class="check">
            <input type="checkbox" id="chkClearGuides" checked />
            <span data-i18n="chk_clear_guides">Clear guides &amp; GridSeed construction first</span>
          </label>
          <button type="button" class="btn ghost small" id="btnLockGuides" data-i18n="btn_lock_guides">Lock guides</button>
          <span class="toolbar-hint" data-i18n="grids_toolbar_hint">Runs Illustrator’s Lock Guide command (same as View → Guides → Lock Guides).</span>
        </div>
        <p class="lede" data-i18n="panel_grids_lede">
          Apply grids to the active artboard in Adobe Illustrator. Construction lines are paths on layer GridSeed Grid (cyan). Trim/safe guides use GridSeed Trim / Safe. Open Window → Layers if you don’t see them.
        </p>
        <div class="grid-context" id="gridContextBox">
          <div class="grid-context__head">
            <span class="section-title grid-context__title" data-i18n="grid_ctx_title">Active document</span>
            <button type="button" class="btn ghost small" id="btnRefreshGridContext" data-i18n="grid_ctx_refresh">Refresh</button>
          </div>
          <p id="gridContextInfo" class="grid-context__body" role="status" data-i18n="grid_ctx_empty">
            Open this tab with a document to load artboard info from Illustrator.
          </p>
        </div>
        <ul class="grid-help-list">
          <li data-i18n="grid_help_1"><strong>Guides vs paths:</strong> “Clear guides” removes GridSeed construction paths; Illustrator’s own guides are separate.</li>
          <li data-i18n="grid_help_2"><strong>Alignment:</strong> Grids respect the active artboard bounds; use Words after placing a grid for copy that matches the 12-column rhythm.</li>
        </ul>
        <div id="gridList" class="stack tight"></div>
      </section>

      <section class="panel" data-panel="words" id="panel-words" hidden>
        <p class="lede" data-i18n="panel_words_lede">
          Placeholder copy by category and tone. Pick how many lines (3–8), a type scale, and a font preset. On insert, frames use the same width as a 12-column margin on your artboard and vertical spacing snapped to a baseline step so type lines up with common GridSeed grids. Text lands on GridSeed Copy.
        </p>
        <div class="form-row">
          <label class="field">
            <span data-i18n="lbl_category">Category</span>
            <select id="copyCategory"></select>
          </label>
          <label class="field">
            <span data-i18n="lbl_tone">Tone</span>
            <select id="copyTone">
              <option value="professional" data-i18n="tone_professional">Professional</option>
              <option value="playful" data-i18n="tone_playful">Playful</option>
              <option value="luxury" data-i18n="tone_luxury">Luxury</option>
              <option value="minimal" data-i18n="tone_minimal">Minimal</option>
            </select>
          </label>
        </div>
        <div class="form-row">
          <label class="field">
            <span data-i18n="lbl_lines">Lines</span>
            <select id="copyLineCount" aria-label="Number of text blocks"></select>
          </label>
          <label class="field">
            <span data-i18n="lbl_type_scale">Type scale</span>
            <select id="copyTextSize"></select>
          </label>
          <label class="field">
            <span data-i18n="lbl_font">Font</span>
            <select id="copyFont"></select>
          </label>
        </div>
        <div class="words-actions words-actions--split">
          <button type="button" class="btn primary" id="btnInsertCopy" data-i18n="btn_insert">Insert into document</button>
          <button type="button" class="btn ghost" id="btnCopyWordsClipboard" data-i18n="btn_copy_clip">Copy to clipboard</button>
          <button type="button" class="btn ghost" id="btnRegenerate" data-i18n="btn_regen">Refresh preview</button>
        </div>
        <p class="hint words-hint" data-i18n="words_hint">
          Insert runs in Illustrator (needs an open document). Copy works inside the panel only — paste into a text frame or elsewhere.
        </p>
        <pre id="copyPreview" class="copy-preview" aria-live="polite"></pre>
      </section>

      <section class="panel" data-panel="learn" id="panel-learn" hidden>
        <p class="lede" data-i18n="panel_learn_lede">Short explanations you can read while you work — pair with Explain on the Grids tab.</p>
        <div id="tipList" class="stack"></div>
      </section>

      <section class="panel" data-panel="about" id="panel-about" hidden>
        <p class="lede" data-i18n="panel_about_lede">
          Read first: Capability boundaries below. This tab uses English section titles and summarizes the in-panel Layout preview tab (former standalone 排版网格预览.html), InDesign tooling, and GridSeed in Illustrator — without duplicating the same facts twice.
        </p>

        <div data-lang-panel="en">
        <article class="about-doc">
          <section class="about-section" aria-labelledby="about-h0">
            <h2 id="about-h0" class="about-section__title">0. Capability boundaries (read first)</h2>
            <p>
              In the <strong>browser</strong>, “images” are only <strong>SVG dashed frames</strong> and <strong>slot</strong> schematics; content planning splits a
              <strong>multi-image grid</strong> proportionally. Nothing in this system runs <strong>Place</strong> into InDesign or Illustrator, and nothing auto-builds linked text/image frames in Adobe.
            </p>
            <p>
              <strong>Type size in the browser:</strong> there is <strong>no</strong> per-title/body pt slider in the sidebar. Two layers: (1) <strong>TYPO</strong> — human-readable recommended ranges; (2)
              <strong>TYPO_PT</strong> — one fixed pt each for title / body / meta per template for zone drawing. Text actually painted on the canvas is further multiplied by about
              <strong>58% (<code>ZONE_PREVIEW_PT_SCALE</code>)</strong> so labels don’t cover the grid — <em>preview only</em>.
            </p>
            <p>
              The three font dropdowns plus <strong>“apply recommended fonts by scenario”</strong> only change <strong>font-family</strong> via <strong>FONT_MAP</strong>; they do <strong>not</strong> change
              <strong>TYPO_PT</strong>.
            </p>
            <p>
              <strong>Main columns</strong> in the browser can be overridden as integers <strong>1–24</strong>. Adobe panels write the <strong>layout result</strong> that matches the same meaning as “main columns”, but
              <strong>not</strong> the browser’s full set of <strong>seven display-layer checkboxes</strong> or the entire <strong>content planning</strong> block.
            </p>
            <p>
              <strong>Bleed</strong> on screen follows the template field <strong>bleedMm</strong> (often <code>3</code>, often <code>0</code> for text-heavy jobs). The bleed region is drawn only when the option is on
              <strong>and</strong> <code>bleedMm &gt; 0</code>. Copy that says “commonly 3&nbsp;mm” is a habit — <strong>the preset data wins</strong>.
            </p>
          </section>

          <section class="about-section" aria-labelledby="about-h1">
            <h2 id="about-h1" class="about-section__title">I. What is this project?</h2>
            <p>
              A <strong>layout-grid &amp; prepress helper</strong> family: one shared idea of trim size, bleed, margins, columns, gutters, module grids, and baselines — previewed in a
              <strong>browser</strong>, then applied as far as possible in <strong>InDesign</strong> and <strong>Illustrator</strong> via scripts or CEP.
            </p>
            <p class="about-note"><strong>Still manual in Adobe:</strong> full paragraph/character style libraries, placing images, TOC, interactive PDF — finish in the layout app.</p>
          </section>

          <section class="about-section" aria-labelledby="about-h2">
            <h2 id="about-h2" class="about-section__title">II. Repository map (roles)</h2>
            <ul class="about-list">
              <li><strong>Browser:</strong> same folder <code>index.html</code> → <strong>Templates</strong> (content layout block; legacy <em>排版网格预览.html</em> redirects here).</li>
              <li><strong>Spec:</strong> long-form doc — not executed by software.</li>
              <li><strong>InDesign:</strong> ExtendScript + CEP — ~7 templates in host, aligned with the <strong>first</strong> browser presets.</li>
              <li><strong>Illustrator:</strong> <strong>GridSeed</strong> (<code>com.gridseed.illustrator</code>) — artboards, paths, trim/safe, words (see section V).</li>
            </ul>
          </section>

          <section class="about-section" aria-labelledby="about-h3">
            <h2 id="about-h3" class="about-section__title">III. Browser file — 排版网格预览.html (what exists &amp; what it does)</h2>
            <p class="about-kicker">Below documents behaviour aligned with the <strong>Templates</strong> content-layout block (merged from the former standalone page). IDs use an <code>lp</code> prefix (e.g. <code>lpLayoutMode</code>).</p>

            <h3 class="about-subtitle">Templates</h3>
            <p>
              <strong><code>presetSelect</code></strong> is filled from <strong>PRESETS</strong> (~20 items), order matching both CEP panels’ optgroups. Changing template runs
              <strong><code>applyPresetDefaults()</code></strong> then <strong><code>render()</code></strong>, and refreshes module cols/rows, main columns, and gutter inputs to the template defaults.
            </p>

            <h3 class="about-subtitle">Fonts (preview only)</h3>
            <ul class="about-list">
              <li><strong><code>fontCnTitle</code>:</strong> values e.g. <code>shs-b</code>, <code>shr-m</code>.</li>
              <li><strong><code>fontCnBody</code>:</strong> <code>shr-r</code>, <code>shs-r</code>.</li>
              <li><strong><code>fontLatin</code>:</strong> <code>ss</code>, <code>mpr</code>, <code>sr</code>, <code>min</code>.</li>
            </ul>
            <p>Any change calls <strong><code>render()</code></strong>. Stacks live in <strong>FONT_MAP</strong> (Source Han / Adobe names first, then system fallback).</p>
            <p>
              <strong><code>fontSuggestBtn</code></strong> (“apply recommended fonts by scenario”) sets the three selects from group + some template ids, then <strong><code>render()</code></strong> — it does
              <strong>not</strong> change grid numbers or content-planning numbers.
            </p>

            <h3 class="about-subtitle">Display layer (visibility only — does not change preset data)</h3>
            <p>Each checkbox triggers <strong><code>render()</code></strong>:</p>
            <ul class="about-list">
              <li><strong><code>showBleed</code></strong> — bleed;</li>
              <li><strong><code>showMargins</code></strong> — type area margins;</li>
              <li><strong><code>showColumns</code></strong> — main column guides;</li>
              <li><strong><code>showModule</code></strong> — module grid;</li>
              <li><strong><code>showBaseline</code></strong> — baseline (skipped if computed spacing is 0);</li>
              <li><strong><code>showSafe</code></strong> — cover safe zone when the template defines it;</li>
              <li><strong><code>showZones</code></strong> — inner title/body/image blocks plus schematic type.</li>
            </ul>

            <h3 class="about-subtitle">Numbers inside the type area</h3>
            <ul class="about-list">
              <li><strong><code>moduleColsInput</code> / <code>moduleRowsInput</code>:</strong> 1–48, validated/clamped on input → <code>render()</code>.</li>
              <li><strong><code>columnsInput</code>:</strong> main columns 1–24.</li>
              <li><strong><code>gutterInput</code>:</strong> gutter mm, 0–30, step 0.5; bad values fall back to the template gutter.</li>
              <li><strong>Reset module / reset columns</strong> — restore module rows/cols or columns+gutter from the current template (modules default to 6×8 when the template omits them).</li>
            </ul>

            <h3 class="about-subtitle">Content planning (preview only)</h3>
            <p>
              When <strong><code>enableContentPlan</code></strong> is on, the script splits schematic zones and fills the blue advice box <strong><code>planAdviceSlot</code></strong>.
              <strong><code>planImages</code></strong> 0–12, <strong><code>planParas</code></strong> 0–24, <strong><code>planSubs</code></strong> 0–12 — <code>change</code>/<code>input</code> → <code>render()</code>.
              <strong><code>planImageSizeMode</code></strong> switches mm vs aspect mode and updates <strong><code>planImageSizeModeHint</code></strong> and row unit labels.
              <strong><code>planImageSizeRows</code></strong> builds <code>planImgW_0</code>… / <code>planImgH_0</code>… (step 0.1) and <code>planImgUnit_i</code>; delegated <code>input</code> on the container calls <code>render()</code>.
              <strong><code>planImageLayout</code>:</strong> auto, horizontal, vertical, or equal grid.
              <strong><code>planAdviceSlot</code></strong> is read-only: <strong><code>buildPlanAdviceHtml</code></strong> writes image/body height ratios, paragraph split hints, layout inference, grid row/column notes, approximate column width for images, and warnings (e.g. image count &gt; 0 when the template has no image zone).
            </p>

            <h3 class="about-subtitle">Read-only panels &amp; zoom</h3>
            <ul class="about-list">
              <li><strong><code>typographyPanel</code>:</strong> TYPO copy, TYPO_PT, current three font labels, and the ~58% preview note.</li>
              <li><strong><code>layoutPanel</code>:</strong> long LAYOUT copy for image/text placement.</li>
              <li><strong><code>metaPanel</code>:</strong> trim, bleed, margins, columns, modules, baseline, note, gridId, etc.</li>
              <li><strong><code>scaleRange</code></strong> 40%–120%: only CSS preview scale via <strong><code>applyScale()</code></strong> / <strong><code>scaleLabel</code></strong> — does not change mm.</li>
              <li>Structure: <strong><code>pageScaler</code></strong>, <strong><code>pageFrame</code></strong>, <strong><code>gridSvg</code></strong> as the canvas roots.</li>
            </ul>
          </section>

          <section class="about-section" aria-labelledby="about-h4">
            <h2 id="about-h4" class="about-section__title">IV. InDesign — script &amp; CEP (summary)</h2>
            <ul class="about-list">
              <li><strong>~7 templates</strong> in host match the <strong>first</strong> entries in the browser preset list; more templates exist only in the web preview until added to <code>typogridPRESETS</code>.</li>
              <li><strong>Script:</strong> dialog → page size, bleed, mm rulers, master margins &amp; columns, baseline grid (optional).</li>
              <li><strong>Module grid:</strong> not auto-drawn in script (user uses Layout → Create Guides in InDesign).</li>
              <li><strong>CEP:</strong> <code>typogridApplyPresetIndex</code>, <code>typogridApplyLayoutOverride</code>; InDesign 2026+ may change CEP visibility — follow your install notes.</li>
            </ul>
          </section>

          <section class="about-section" aria-labelledby="about-h5">
            <h2 id="about-h5" class="about-section__title">V. Illustrator — this extension (GridSeed)</h2>
            <p class="about-kicker">Does not replicate the browser’s seven display toggles or content-planning block — see <strong>§0</strong> and <strong>§III</strong>.</p>
            <ul class="about-list">
              <li><strong>Extension ID:</strong> <code>com.gridseed.illustrator</code> (not the same folder as <code>com.typogrid.il.panel</code> if you use both).</li>
              <li><strong>Artboard</strong> = finished size; <strong>bleed</strong> from each template’s spec; <strong>trim/safe</strong> as guides; <strong>grids</strong> as cyan paths on <strong>GridSeed Grid</strong>.</li>
              <li><strong>No Place, no auto image frames</strong> — same boundary as §0.</li>
              <li><strong>No InDesign-style page margin object:</strong> margins simulated with guides + layout levels; Words uses a rhythm step, not a full document baseline grid.</li>
              <li><strong>Re-running grids:</strong> optional clear of construction first to avoid stacked paths.</li>
            </ul>
          </section>

          <section class="about-section" aria-labelledby="about-h6">
            <h2 id="about-h6" class="about-section__title">VI. Units &amp; source of truth</h2>
            <p><strong>mm</strong> — trim, bleed, margins, gutters. <strong>pt</strong> — type &amp; baseline in app settings. <strong>≈ 1 pt = 0.3528 mm</strong>. Final print rules always follow your school or vendor.</p>
          </section>

          <section class="about-section" aria-labelledby="about-h7">
            <h2 id="about-h7" class="about-section__title">VII. Feature matrix (summary)</h2>
            <div class="about-table-wrap">
              <table class="about-table">
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    <th scope="col">Web preview</th>
                    <th scope="col">InDesign script / CEP</th>
                    <th scope="col">Illustrator (GridSeed)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Full 20+ templates</td>
                    <td>Yes</td>
                    <td>~7 in host</td>
                    <td>Many (paper + grid + layout)</td>
                  </tr>
                  <tr>
                    <td>Bleed / margins / columns / modules visible</td>
                    <td>Yes</td>
                    <td>Margins + columns in ID</td>
                    <td>Artboard + paths + guides</td>
                  </tr>
                  <tr>
                    <td>Publication baseline grid</td>
                    <td>Preview</td>
                    <td>Document grid</td>
                    <td>Words rhythm / not full ID grid</td>
                  </tr>
                  <tr>
                    <td>Spine / folds / safe (special)</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>Trim/safe where spec defines</td>
                  </tr>
                  <tr>
                    <td>Font &amp; zone storyboard</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>Words + template preview</td>
                  </tr>
                  <tr>
                    <td>Place images / auto frames</td>
                    <td>No (SVG only)</td>
                    <td>No</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>Content planning + planAdvice</td>
                    <td>Yes (preview)</td>
                    <td>No</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>Live sidebar</td>
                    <td>Yes</td>
                    <td>CEP</td>
                    <td>CEP (this panel)</td>
                  </tr>
                  <tr>
                    <td>No Adobe install</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>No</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section class="about-section" aria-labelledby="about-h8">
            <h2 id="about-h8" class="about-section__title">VIII. FAQ (concept)</h2>
            <dl class="about-faq">
              <dt>Are “images” in the browser real assets?</dt>
              <dd>No — dashed SVG slots and schematic zones only; no Place into Adobe.</dd>
              <dt>Why three type layers (TYPO / TYPO_PT / 58%)?</dt>
              <dd>Readable recommendations vs fixed zone pts vs non-overlapping preview labels — see §0.</dd>
              <dt>Why doesn’t InDesign auto-draw module grids?</dt>
              <dd>ExtendScript varies by version; users create guides from the module count in InDesign.</dd>
              <dt>Why clear or rebuild guides in Illustrator?</dt>
              <dd>Paths/guides carry the layout; repeating without clear stacks overlaps.</dd>
              <dt>Bleed says 3&nbsp;mm in prose but my template says 0?</dt>
              <dd><strong>bleedMm</strong> in the preset wins; “3&nbsp;mm common” is only a habit.</dd>
              <dt>Numbers differ between web and app?</dt>
              <dd>Trust the <strong>current</strong> PRESETS / host arrays in each build.</dd>
            </dl>
          </section>
        </article>
        </div>

        <div data-lang-panel="zh">
          <article class="about-doc about-doc--zh">
            <section class="about-section">
              <h2 class="about-section__title">0. 能力边界（务必先读）</h2>
              <p>
                在<strong>浏览器</strong>里，「图片」只是 <strong>SVG 虚线框</strong>与<strong>分区示意</strong>；多图时会按比例划分栅格。<strong>不会</strong>向 InDesign 或 Illustrator 执行 <strong>置入</strong>，也<strong>不会</strong>在 Adobe 中自动建链的图文框。
              </p>
              <p>
                <strong>预览中的字号：</strong>侧栏没有逐标题/正文的 pt 滑条。存在 TYPO（给人看的建议范围）、TYPO_PT（每模板固定的标题/正文/附注 pt，用于画区）等分层；画布上实际绘制的文字还会再乘以预览系数（如 <code>ZONE_PREVIEW_PT_SCALE</code>），<em>仅供预览</em>。
              </p>
              <p>
                三个字体下拉与「按场景推荐字体」只通过 <strong>FONT_MAP</strong> 改 <strong>font-family</strong>，<strong>不</strong>改变 <strong>TYPO_PT</strong>。
              </p>
              <p>
                <strong>主栏数</strong>在浏览器里可覆盖为整数；Adobe 侧写入的是与「主栏数」含义一致的结果，而不是浏览器里全部七项显示层开关或整块内容规划的完整状态。
              </p>
              <p>
                <strong>出血</strong>按各模板的 <strong>bleedMm</strong> 等字段；只有选项开启<strong>且</strong>出血大于 0 时才绘制出血区。「常见 3 mm」只是习惯说法，<strong>以预设数据为准</strong>。
              </p>
            </section>
            <section class="about-section">
              <h2 class="about-section__title">I. 项目是什么？</h2>
              <p>
                同一套版心、出血、边距、分栏、 gutters、模块网格与基线理念：在<strong>浏览器</strong>里预览，再尽量通过脚本或 CEP 在 <strong>InDesign</strong> 与 <strong>Illustrator</strong> 落地。
              </p>
              <p class="about-note"><strong>Adobe 里仍需人工：</strong>完整段落/字符样式库、置入图片、目录、交互 PDF 等，仍在排版软件中完成。</p>
            </section>
            <section class="about-section">
              <h2 class="about-section__title">II. 仓库角色（对照）</h2>
              <ul class="about-list">
                <li><strong>浏览器：</strong>同目录 <code>index.html</code> → <strong>模板</strong>（含内容布局；原独立页已合并于此）。</li>
                <li><strong>规范文档：</strong>长文说明，不由软件执行。</li>
                <li><strong>InDesign：</strong>ExtendScript + CEP，宿主内若干模板与浏览器前几项预设对齐思路。</li>
                <li><strong>Illustrator：</strong><strong>GridSeed</strong>（<code>com.gridseed.illustrator</code>）— 画板、路径、裁切/安全、文字等（详见下文）。</li>
              </ul>
            </section>
            <section class="about-section">
              <h2 class="about-section__title">III. 模板与内容规划（浏览器侧）</h2>
              <p>
                与当前「模板」标签中的内容布局块一致：版式模式、图片数量与槽位、双栏条件等会在示意图与摘要中体现；详细控件 ID 以 <code>lp</code> 前缀为主（如 <code>lpLayoutMode</code>）。切换为英文版「关于」可读与代码完全对齐的英文长文与表格。
              </p>
            </section>
            <section class="about-section">
              <h2 class="about-section__title">IV. Illustrator 扩展（本面板）</h2>
              <ul class="about-list">
                <li>在文档中创建/更新构造路径与参考线（如 <strong>GridSeed Grid</strong>、裁切/安全）。</li>
                <li><strong>不</strong>做置入真实图片、<strong>不</strong>自动创建链图文框（与 §0 一致）。</li>
                <li>重复应用网格前可选择先清除构造路径，避免路径堆叠。</li>
              </ul>
            </section>
            <section class="about-section">
              <h2 class="about-section__title">V. 单位与依据</h2>
              <p><strong>mm</strong> 用于裁切、出血、边距、栏距；<strong>pt</strong> 用于应用内字号与基线相关设置。印刷规则以学校或印厂要求为最终依据。</p>
            </section>
            <p class="about-note">
              需要与代码 ID、字段一一对照时，请用界面<strong>最上方</strong>「English」查看完整英文技术说明。
            </p>
          </article>
        </div>
      </section>

      <p id="statusLine" class="status" role="status"></p>
    </main>

    <script type="text/javascript" src="js/i18n.js"></script>
    <script type="text/javascript" src="js/CSInterface.js"></script>
    <script type="text/javascript" src="js/gridseed-panel.js"></script>
    <script type="text/javascript" src="js/layout-preview.js"></script>
    <script type="text/javascript">
      (function () {
        function showBrowserPreviewBanner(kind) {
          if (document.getElementById("gridseed-browser-preview-hint")) return;
          var wrap = document.createElement("div");
          wrap.id = "gridseed-browser-preview-hint";
          wrap.setAttribute("role", "alert");
          wrap.style.cssText =
            "position:relative;z-index:99999;box-sizing:border-box;width:100%;margin:0;padding:10px 12px;font:13px/1.45 system-ui,sans-serif;border-bottom:1px solid #b45309;background:#fffbeb;color:#78350f;";
          var text =
            kind === "broken"
              ? "<strong>脚本未完整加载。</strong>请确认 <code>css/</code>、<code>js/</code> 与 <code>index.html</code> 在同一文件夹，并在<strong>该文件夹（项目根）</strong>启动本地 HTTP（例如 <code>python3 -m http.server</code>）后访问 <code>/index.html</code>；或通过 GitHub Pages 打开。"
              : "<strong>浏览器预览提示：</strong>当前为 <code>file://</code> 打开，部分浏览器会拦截脚本/样式，界面和交互可能显示不完整。<strong>推荐：</strong>在项目根目录运行 <code>python3 -m http.server</code>，访问 <code>http://127.0.0.1:8765/index.html</code>。<strong>分享给别人请用 GitHub Pages 的 https 链接，不要发 localhost。</strong>";
          wrap.innerHTML =
            text +
            ' <button type="button" style="margin-left:8px;padding:2px 8px;cursor:pointer;border:1px solid #b45309;background:#fff;border-radius:4px;color:#78350f;">关闭</button>';
          wrap.querySelector("button").onclick = function () {
            wrap.remove();
          };
          document.body.insertBefore(wrap, document.body.firstChild);
        }
        window.addEventListener("load", function () {
          var inCEP = typeof window.__adobe_cep__ !== "undefined";
          var hasData = typeof window.GRIDSEED_DATA !== "undefined";
          if (!hasData) {
            showBrowserPreviewBanner("broken");
          } else if (!inCEP && typeof location.protocol === "string" && location.protocol === "file:") {
            showBrowserPreviewBanner("file");
          }
        });
      })();
    </script>
  </body>
</html>
