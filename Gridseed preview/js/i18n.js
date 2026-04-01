/**
 * GridSeed — bilingual UI (English / 中文)
 */
(function (root) {
  var STORAGE_KEY = "gridseed-lang";

  var STRINGS = {
    en: {
      app_title: "GridSeed",
      langLabel: "Language",
      tab_templates: "Templates",
      tab_sizes: "Sizes",
      tab_grids: "Grids",
      tab_words: "Words",
      tab_learn: "Learn",
      tab_layoutPreview: "Layout preview",
      tab_about: "About",
      brandSub: "Templates · grids · words · learn · about",
      panel_templates_hint:
        "v2.3.0 — Size, grid, layout preview, and send-to-Illustrator live on this tab. Full details: About. Reload after replacing extension files.",
      panel_templates_lede:
        "One-click documents: CMYK or RGB, ruler units, artboard size. Pick a paper size, then a grid or layout chip below (8 grid systems; Layout L1–L6 on every format — top/bottom bands, full field, left/right thirds). Each new file gets construction on GridSeed Grid. Presets with bleed get trim (orange) and safe (magenta) when defined.",
      templates_page_title: "Templates",
      panel_templates_intro:
        "Pick a size and a grid, open a new document, then optionally preview a layout and send it to Illustrator — all on this tab.",
      aria_main: "GridSeed",
      aria_quick_sizes: "Quick size shortcuts",
      aria_region_size_grid: "Size and grid",
      aria_region_layout_preview: "Layout preview",
      paper_block_title: "Size & grid",
      paper_format_label: "Format",
      paper_variant_hint: "Tap a chip — the preview updates. Scroll the chip list if needed.",
      btn_new_doc: "New document",
      btn_trim_safe: "Refresh trim & safe guides",
      more_templates: "Quick shortcuts",
      panel_sizes_lede: "Quick picks — same presets as Templates, faster taps.",
      panel_sizes_hint:
        "One tap opens a preset — same as choosing that size above. For print, add bleed in Illustrator’s New Document dialog.",
      chk_clear_guides: "Clear guides & GridSeed construction first",
      btn_lock_guides: "Lock guides",
      grids_toolbar_hint:
        "Runs Illustrator’s Lock Guide command (same as View → Guides → Lock Guides).",
      panel_grids_lede:
        "Apply grids to the active artboard in Adobe Illustrator. Construction lines are paths on layer GridSeed Grid (cyan). Trim/safe guides use GridSeed Trim / Safe. Open Window → Layers if you don’t see them.",
      grid_ctx_title: "Active document",
      grid_ctx_refresh: "Refresh",
      grid_ctx_empty:
        "Open this tab with a document to load artboard info from Illustrator.",
      grid_help_1:
        "Guides vs paths: “Clear guides” removes GridSeed construction paths; Illustrator’s own guides are separate.",
      grid_help_2:
        "Alignment: Grids respect the active artboard bounds; use Words after placing a grid for copy that matches the 12-column rhythm.",
      panel_words_lede:
        "Placeholder copy by category and tone. Pick how many lines (3–8), a type scale, and a font preset. On insert, frames use the same width as a 12-column margin on your artboard and vertical spacing snapped to a baseline step so type lines up with common GridSeed grids. Text lands on GridSeed Copy.",
      lbl_category: "Category",
      lbl_tone: "Tone",
      lbl_lines: "Lines",
      lbl_type_scale: "Type scale",
      lbl_font: "Font",
      btn_insert: "Insert into document",
      btn_copy_clip: "Copy to clipboard",
      btn_regen: "Refresh preview",
      words_hint:
        "Insert runs in Illustrator (needs an open document). Copy works inside the panel only — paste into a text frame or elsewhere.",
      tone_professional: "Professional",
      tone_playful: "Playful",
      tone_luxury: "Luxury",
      tone_minimal: "Minimal",
      panel_learn_lede:
        "Short explanations you can read while you work — pair with Explain on the Grids tab.",
      lp_lede:
        "Browser-only schematic: contentPlanWeights, computeImageGridCols, splitImageZone, dual-column rules. Open this same HTML in a normal browser to use without Illustrator. Does not Place assets.",
      lp_plan_h2: "Summary",
      lp_fieldset_layout_a11y:
        "Controls how much space images and text use in the preview.",
      lp_plan_placeholder:
        "Adjust values below to see stacking ratio, grid rows/columns, and dual-column hints.",
      lp_fieldset_layout: "Layout & amounts",
      lp_layout_label: "Layout type",
      lp_opt_stacked: "Stacked (image top · text bottom)",
      lp_opt_split: "Side-by-side (image left · text right)",
      lp_enable_plan: "Enable content plan (canvas + sidebar details)",
      lp_img_count: "Images",
      lp_body_blocks: "Body blocks",
      lp_sub_count: "Subheads",
      lp_fieldset_slots: "Per-image size / ratio",
      lp_slots_hint:
        "Each image: pixel size or aspect ratio; grid rows/columns follow the image zone and count.",
      lp_caption_placeholder: "",
      panel_about_lede:
        "Read first: Capability boundaries below. Summarizes the in-panel content layout (browser schematic + Illustrator zones), InDesign tooling, and GridSeed in Illustrator — without duplicating the same facts twice.",
      grid_apply: "Apply",
      grid_explain: "Explain",
      grid_row_click_hint:
        "Click this row or Apply to add the grid to the open document (needs Illustrator).",
      lines_suffix: " lines",
      status_trim_safe_ok:
        "Trim (orange) & safe (magenta) guides updated — check layers GridSeed Trim / Safe.",
      status_template_created:
        "Created: {name} — default grid on layer “GridSeed Grid”; trim/safe on “GridSeed Trim/Safe” when this preset includes them.",
      status_paper_new:
        "Created document — default grid on “GridSeed Grid”; Layout presets use modular zones. Trim/safe on “GridSeed Trim/Safe” when the preset includes them.",
      status_ready:
        "Ready — v2.3.0 · Templates · About: capability boundaries.",
      status_err_data: "Error: panel data missing. Reinstall the extension.",
      status_ui_err: "GridSeed UI error: ",
      status_new_doc_ok:
        "New: {label} — default grid on “GridSeed Grid”; color mode & units set; trim/safe if the preset includes them.",
      status_grid_err:
        " — Open the Layers panel and look for “GridSeed Grid” (cyan construction lines).",
      status_grid_ok:
        "Applied: {name} — cyan lines are on layer “GridSeed Grid” (open the Layers panel if you don’t see them).",
      status_grid_applying: "Applying grid: {name}…",
      status_insert_ok:
        "Type on “GridSeed Copy” — left-aligned to a 12-column margin; vertical rhythm snapped to baseline step; font matches preset if installed.",
      status_copied: "Copied to clipboard — paste into an Illustrator text frame or another app.",
      status_copy_fail:
        "Copy failed — select the preview text manually (⌘A / Ctrl+A) and copy.",
      status_lock_guides:
        "Lock guides command sent — if nothing changes, use View → Guides → Lock Guides in Illustrator.",
      ctx_no_doc:
        "No document open in Illustrator — create or open a file, then click Refresh.",
      ctx_artboard:
        "Artboard: {w} × {h} pt · {cm} · rulers {ru}. {grid}",
      ctx_has_grid: "Layer “GridSeed Grid” is present.",
      ctx_no_grid: "No “GridSeed Grid” layer yet — apply a grid preset below.",
      preview_select_chip: "Select a format and a grid or layout chip.",
      preview_caption_suffix: " · schematic preview (proportions + guides).",
      tag_grid: "Grid",
      tag_layout: "Layout",
      lp_bullet_stacked:
        "Stacked: image/text height ~ {pi}% / {pt}% (contentPlanWeights, clamped ~12%–78%).",
      lp_bullet_split: "Side-by-side layout: no vertical image/text height split.",
      lp_bullet_grid: "Image grid: ~{rows} rows × {cols} cols; cell gap ~{gap}% of zone.",
      lp_bullet_dual_on:
        "Dual column: active — no subheads, body blocks ≥ 6, text zone width/height > 1.08.",
      lp_bullet_dual_off:
        "Dual column needs: subheads = 0, body blocks ≥ 6, wide text zone; with subheads use a single column.",
      lp_bullet_counts: "Amounts: {img} images · {body} body blocks · {sub} subheads.",
      lp_zone_img: "Image",
      lp_zone_text: "Body",
      lp_fig: "Fig {n}",
      lp_cap:
        "A4 schematic · grid {rows}×{cols} · {dual}",
      lp_dual_yes: "dual column",
      lp_dual_no: "single column",
      lp_single_sub: "Single column (with subheads)",
      lp_single_body: "Single column body",
      lp_dual_flow: "Dual column flow (no subheads)",
      lp_slot_title: "Image {n}",
      lp_dim: "Pixel size",
      lp_ratio: "Aspect ratio",
      lp_w_px: "W px",
      lp_h_px: "H px",
      lp_w: "W",
      lp_h: "H",
      lp_ratio_hint: "e.g. 16 / 9, 4 / 3, 1 / 1",
      lp_svg_aria: "Layout preview schematic",
      aria_starter_kit_region: "Starter kit",
      aria_starter_preview_svg: "Starter kit preview",
      aria_starter_theme_select: "Starter color theme",
      aria_template_preview_svg: "Schematic preview of the selected template",
      aria_variant_bar: "Grid and layout presets for this format",
      aria_lp_layout_mode: "Layout type",
      gc_title: "Grid Composer",
      gc_summary_preview: "Preview",
      gc_btn_place: "Place on Artboard",
      gc_btn_regen: "Regenerate Grid",
      gc_btn_download_png: "Download PNG",
      gc_preview_svg_aria: "Grid composer preview",
      gc_summary_quick_templates: "Quick Templates",
      gc_purpose_label: "Purpose",
      gc_aria_purpose: "Filter presets by purpose",
      gc_aria_quick_templates: "Quick templates",
      gc_summary_starter_kit: "Starter Kit",
      gc_aria_starter_themes: "Starter kit themes",
      gc_summary_canvas_size: "Canvas Size",
      gc_paper_size_label: "Paper size",
      gc_aria_paper_size: "Paper size",
      gc_paper_opt_a4: "A4 (210 × 297 mm)",
      gc_paper_opt_a3: "A3 (297 × 420 mm)",
      gc_paper_opt_a2: "A2 (420 × 594 mm)",
      gc_paper_opt_a1: "A1 (594 × 841 mm)",
      gc_paper_opt_a0: "A0 (841 × 1189 mm)",
      gc_paper_opt_b2: "B2 (500 × 707 mm)",
      gc_paper_opt_b1: "B1 (707 × 1000 mm)",
      gc_paper_opt_letter: "US Letter (8.5 × 11 in)",
      gc_paper_opt_tabloid: "US Tabloid (11 × 17 in)",
      gc_paper_opt_poster_24x36: "Poster 24 × 36 in",
      gc_paper_opt_poster_18x24: "Poster 18 × 24 in",
      gc_paper_opt_instagram: "Instagram Post (1080 × 1080)",
      gc_paper_opt_custom: "Custom",
      gc_orientation_landscape: "Horizontal",
      gc_orientation_portrait: "Vertical",
      gc_width: "Width",
      gc_height: "Height",
      gc_bleed_mm: "Bleed (mm)",
      gc_safe_mm: "Safe margin (mm)",
      gc_aria_bleed: "Bleed in millimeters",
      gc_aria_safe: "Safe margin inside trim, millimeters",
      gc_bleed_hint:
        "Bleed expands the artboard; orange guides mark trim, magenta marks the safe area. Social / custom defaults are 0 mm — switching paper restores typical print values.",
      gc_summary_image_count: "Number of Images",
      gc_amount_label: "Amount",
      gc_aria_image_count: "Number of images",
      gc_image_size_pct: "Image size (%)",
      gc_gap_pct: "Gap (%)",
      gc_create_grid: "CREATE GRID",
      gc_purpose_all: "All purposes",
      gc_purpose_social: "Social media",
      gc_purpose_poster: "Poster / campaign",
      gc_purpose_editorial: "Editorial",
      gc_purpose_product: "Product showcase",
      gc_purpose_presentation: "Presentation slide",
      gc_comp_layout_12col_web: "12-column web",
      gc_comp_layout_6col_editorial: "6-column editorial",
      gc_comp_layout_rule_of_thirds: "Rule of thirds",
      gc_comp_layout_golden_ratio: "Golden ratio",
      gc_comp_layout_modular_8: "Modular scale (8)",
      gc_comp_layout_bento_3x3: "Bento 3×3",
      gc_comp_layout_masonry: "Masonry / Pinterest",
      gc_theme_short_cool_summer: "Polaroid",
      gc_theme_short_bold_navy: "Film Roll",
      gc_theme_short_minimal_mist: "Minimal",
      gc_theme_short_warm_plum: "Vintage",
      gc_theme_short_midnight_neo: "Neon",
      gc_theme_short_paper_collage: "Paper Collage",
      gc_theme_short_forest_emerald: "Modern Retro",
      gc_theme_short_sunset_orange: "Sunset",
      gc_theme_short_royal_violet: "Royal",
      gc_theme_short_acid_green: "Cyber",
      gc_theme_short_swiss_red: "Swiss",
      gc_theme_short_mono_wave: "Monochrome",
      gc_theme_short_desert_sand: "Desert",
      gc_preset_name_social_neon: "Neon Launch",
      gc_preset_name_social_polaroid: "Polaroid Story",
      gc_preset_name_poster_vintage: "Vintage Campaign",
      gc_preset_name_poster_swiss: "Swiss Bold",
      gc_preset_name_editorial_minimal: "Minimal Editorial",
      gc_preset_name_editorial_collage: "Paper Feature",
      gc_preset_name_product_modern: "Modern Product Grid",
      gc_preset_name_presentation_clean: "Clean Deck",
      gc_preset_meta: "{theme} · {layout} · {n} images",
      status_preset_applied: "Preset applied: {name}",
      layout_chip_l1: "L1 — Calm & focus",
      layout_chip_l2: "L2 — Top band",
      layout_chip_l3: "L3 — Full field",
      layout_chip_l4: "L4 — Bottom band",
      layout_chip_l5: "L5 — Left third",
      layout_chip_l6: "L6 — Right third",
      paper_a1_label: "A1 poster",
      paper_a1_note: "594 × 841 mm + bleed",
      paper_a2_label: "A2 poster",
      paper_a2_note: "420 × 594 mm + bleed",
      paper_a3_label: "A3 poster",
      paper_a3_note: "297 × 420 mm + bleed",
      paper_a4_label: "A4 poster",
      paper_a4_note: "210 × 297 mm + bleed",
      paper_a5_label: "A5 flyer",
      paper_a5_note: "148 × 210 mm + bleed",
      paper_dl_label: "DL flyer",
      paper_dl_note: "99 × 210 mm + bleed",
      paper_tabloid_label: "US Tabloid",
      paper_tabloid_note: "11 × 17 in + bleed",
      paper_letter_label: "US Letter",
      paper_letter_note: "8.5 × 11 in + bleed",
      paper_ig_square_label: "Instagram square",
      paper_ig_square_note: "1080 × 1080 px RGB",
      paper_ig_story_label: "Instagram / TikTok story",
      paper_ig_story_note: "1080 × 1920 px RGB",
      paper_fb_post_label: "Facebook link post",
      paper_fb_post_note: "1200 × 630 px RGB",
      paper_slide16_9_label: "Slide 16:9 HD",
      paper_slide16_9_note: "1920 × 1080 px RGB",
      paper_yt_720_label: "YouTube thumbnail",
      paper_yt_720_note: "1280 × 720 px RGB",
      paper_pin_label: "Pinterest pin",
      paper_pin_note: "1000 × 1500 px RGB",
      paper_x_banner_label: "X / Twitter header",
      paper_x_banner_note: "1500 × 500 px RGB",
      sizepreset_grid_a4_12col_web: "A4 · 12-column",
      sizepreset_grid_a4_bento_5x7: "A4 · 5×7 grid",
      sizepreset_grid_a3_12col_web: "A3 · 12-column",
      sizepreset_grid_ig_story_rule_of_thirds: "Story · thirds",
      sizepreset_grid_slide16_9_12col_web: "Slide HD · 12-col",
      sizepreset_layout_level1_a4_bleed: "Layout L1 A4",
      sizepreset_layout_level4_a4_bleed: "Layout L4 A4",
      sizepreset_layout_level1_slide16_9: "Layout L1 slide 16:9",
      sizepreset_layout_level1_ig_square_1080: "Layout L1 IG square",
      sizepreset_layout_level1_ig_story_1080: "Layout L1 story",
      sizepreset_poster_a3_bleed: "A3 poster",
      sizepreset_poster_a4_bleed: "A4 poster",
      sizepreset_flyer_dl_bleed: "DL flyer",
      sizepreset_social_ig_post_1080: "IG square",
      sizepreset_social_youtube_thumb: "YouTube thumb",
      sizepreset_presentation_16_9_hd: "Slide 16:9 HD",
      sizepreset_brand_bizcard_us_bleed: "US biz card",
      sizepreset_brand_letterhead_a4_bleed: "A4 letterhead",
      sizepreset_editorial_mag_spread_a4_bleed: "Mag spread",
      font_system_label: "System sans (Helvetica / Arial)",
      font_system_hint: "Safe default; closest match on your system.",
      font_neo_grotesk_label: "Neo-grotesque",
      font_neo_grotesk_hint: "Helvetica family — tight, neutral UI and poster type.",
      font_grotesk_label: "Grotesk — light",
      font_grotesk_hint: "Lighter grotesque for airy layouts.",
      font_humanist_label: "Humanist sans (Myriad-style)",
      font_humanist_hint: "Friendly, readable for long labels and decks.",
      font_transitional_label: "Transitional serif (Times / Minion)",
      font_transitional_hint: "Classic print and editorial.",
      font_editorial_label: "Editorial serif",
      font_editorial_hint: "Long-form and magazine tone.",
      font_modern_label: "Modern / Georgia",
      font_modern_hint: "Screen-friendly serif contrast.",
      font_display_label: "Display / poster",
      font_display_hint: "Condensed / impact for headlines.",
      font_mono_label: "Monospace",
      font_mono_hint: "Specs, code, UI labels.",
      font_slab_label: "Slab serif",
      font_slab_hint: "Rockwell / Clarendon — posters, headlines, friendly print.",
      font_geometric_label: "Geometric sans",
      font_geometric_hint: "Futura / Century Gothic — clean, modern, Bauhaus feel.",
      font_rounded_label: "Rounded UI",
      font_rounded_hint: "SF Rounded / Arial Rounded — softer apps and social cards.",
      font_literary_label: "Literary serif",
      font_literary_hint: "Palatino / Garamond — books, long essays, elegant body.",
      font_industrial_label: "Industrial / narrow",
      font_industrial_hint: "Condensed / DIN-style — headlines, wayfinding, dense UI.",
      sk_svg_title: "STARTER",
      sk_svg_subtitle: "grid-guided",
      copy_pad_0: "Supporting detail · written to the artboard rhythm.",
      copy_pad_1: "Another line · caption, meta, or subhead.",
      copy_pad_2: "Call to action · date, link, or venue.",
      copy_pad_3: "Footer · credits, terms, or contact.",
      gc_status_placed_ok: "Placed grouped vector grid on artboard.",
      gc_status_preview_generated: "Preview updated. Use Place on Artboard to create grouped vectors.",
      lang_bar_aria: "Language selection",
      starter_theme_label: "Color theme",
      btn_create: "Starter kit",
      starter_kit_hint:
        "Choose a theme, preview it here (kit + grid guidelines), and then create. It will apply the Layout & Amount values below.",
      status_starter_applying: "Creating starter kit ({theme})…",
      status_layout_applying: "Applying layout zones & image slots…",
      tpl_create_h2: "Send to Illustrator",
      tpl_create_hint:
        "Uses the size and chip you chose above. Layout plan = image & text zones on “GridSeed Layout Plan”. Starter kit = kit style + the same layout zones (based on your Layout & Amount values).",
      theme_cool_summer: "Cool summer — teal & mint",
      theme_bold_navy: "Bold navy — red accent",
      theme_warm_plum: "Warm plum — magenta & amber",
      theme_mono_wave: "Monochrome wave",
      theme_swiss_red: "Swiss grid — red & black",
      theme_forest_emerald: "Forest emerald — green & gold",
      theme_sunset_orange: "Sunset orange — coral & clay",
      theme_royal_violet: "Royal violet — purple & silver",
      theme_minimal_mist: "Minimal mist — cool neutrals",
      theme_desert_sand: "Desert sand — warm gold & terracotta",
      theme_midnight_neo: "Midnight neo — neon cyan & violet",
      theme_paper_collage: "Paper collage — soft blues & warm accents",
      theme_acid_green: "Acid green — electric greens & cyber blue",
      status_starter_ok:
        "Starter kit created — layers GridSeed Starter & GridSeed Copy; swatches prefixed “GS”; curved line uses type on a path. Grid construction brought to front.",
      tpl_lp_section_title: "Layout preview",
      tpl_lp_section_hint:
        "Optional: set how images and text share the page. The picture below updates as you change numbers.",
      btn_layoutplan_create: "Layout plan",
      status_layoutplan_ok:
        "Layout plan created — new document with your grid preset; image & text zones (and aspect frames) on “GridSeed Layout Plan”.",
      status_layoutplan_err: "Could not build layout plan — reload the panel or pick a format chip.",
    },
    zh: {
      app_title: "GridSeed 网格种子",
      langLabel: "语言",
      tab_templates: "模板",
      tab_sizes: "尺寸",
      tab_grids: "网格",
      tab_words: "文字",
      tab_learn: "学习",
      tab_layoutPreview: "排版预览",
      tab_about: "关于",
      brandSub: "模板 · 网格 · 文字 · 学习 · 关于",
      panel_templates_hint:
        "v2.3.0 — 尺寸、网格、布局预览与发送到 Illustrator 均在本页。完整说明见「关于」。替换扩展文件后请重载面板。",
      panel_templates_lede:
        "一键文档：CMYK 或 RGB、标尺单位、画板尺寸。先选纸张，再点下方网格或版式芯片（8 种网格；每种尺寸另有 L1–L6 版式：顶/底带、整版、左/右三分）。新建文件在 GridSeed Grid 层生成辅助线。带出血的预设会显示裁切线（橙）与安全区（洋红）。",
      templates_page_title: "模板",
      panel_templates_intro:
        "先选尺寸与网格，再新建文档；可选调整布局预览并发送到 Illustrator —— 都在本页完成。",
      aria_main: "GridSeed 网格种子",
      aria_quick_sizes: "快捷尺寸",
      aria_region_size_grid: "尺寸与网格",
      aria_region_layout_preview: "布局预览",
      paper_block_title: "尺寸与网格",
      paper_format_label: "规格",
      paper_variant_hint: "点击芯片可更新预览；列表过长时可滚动。",
      btn_new_doc: "新建文档",
      btn_trim_safe: "刷新裁切与安全参考线",
      more_templates: "快捷尺寸",
      panel_sizes_lede: "快捷尺寸 — 与模板页相同预设，一键选用。",
      panel_sizes_hint:
        "一键选用与上方「尺寸」相同的预设。印刷稿可在 Illustrator「新建文档」中另加出血。",
      chk_clear_guides: "先清除参考线与 GridSeed 构造层",
      btn_lock_guides: "锁定参考线",
      grids_toolbar_hint: "执行 Illustrator「锁定参考线」（同 视图 → 参考线 → 锁定参考线）。",
      panel_grids_lede:
        "在 Adobe Illustrator 的当前画板上应用网格。构造线为 GridSeed Grid 层上的路径（青色）。裁切/安全为 GridSeed Trim / Safe。若看不到请打开「窗口 → 图层」。",
      grid_ctx_title: "当前文档",
      grid_ctx_refresh: "刷新",
      grid_ctx_empty: "请先在 Illustrator 中打开文档，再在本标签查看画板信息。",
      grid_help_1:
        "参考线与路径：「清除参考线」会移除 GridSeed 构造路径；Illustrator 自带参考线另算。",
      grid_help_2:
        "对齐：网格贴合当前画板边界；铺好网格后可用「文字」插入与 12 栏边距节奏一致的占位文案。",
      panel_words_lede:
        "按类别与语气生成占位文案。选择行数（3–8）、字号档与字体预设。插入时文本框宽度对齐 12 栏边距，垂直间距按基线步进，便于对齐常见 GridSeed 网格。文字落在 GridSeed Copy 层。",
      lbl_category: "类别",
      lbl_tone: "语气",
      lbl_lines: "行数",
      lbl_type_scale: "字号档",
      lbl_font: "字体",
      btn_insert: "插入到文档",
      btn_copy_clip: "复制到剪贴板",
      btn_regen: "刷新预览",
      words_hint:
        "「插入」需在 Illustrator 中运行（需打开文档）。「复制」仅在面板内有效，可粘贴到文本框等位置。",
      tone_professional: "专业",
      tone_playful: "活泼",
      tone_luxury: "高端",
      tone_minimal: "极简",
      panel_learn_lede: "简短说明，可边做边看 — 与「网格」页的「说明」按钮配合使用。",
      lp_lede:
        "仅浏览器示意：contentPlanWeights、computeImageGridCols、splitImageZone、双栏规则。可在普通浏览器中单独打开本 HTML 使用，无需 Illustrator。不会置入真实图片。",
      lp_plan_h2: "摘要",
      lp_fieldset_layout_a11y: "控制预览中图片与正文所占的大致比例。",
      lp_plan_placeholder: "调整下方数值后，此处显示叠放比例、格网行列与双栏条件。",
      lp_fieldset_layout: "版式与内容量",
      lp_layout_label: "版式类型",
      lp_opt_stacked: "上下叠放（图在上 · 文在下）",
      lp_opt_split: "左右分栏（左图右文）",
      lp_enable_plan: "启用内容规划（画布规划层与侧栏详解）",
      lp_img_count: "图片数",
      lp_body_blocks: "正文块数",
      lp_sub_count: "副标题数",
      lp_fieldset_slots: "各图尺寸 / 比例",
      lp_slots_hint:
        "每张图可选「像素尺寸」或「长宽比」；格网行列由图区比例与图片数自动计算。",
      lp_caption_placeholder: "",
      panel_about_lede:
        "请先读能力边界。英文版含完整技术细节与术语；中文版以下为对照摘要。切换语言请用界面最上方的 English / 中文。",
      grid_apply: "应用",
      grid_explain: "说明",
      grid_row_click_hint:
        "点击整行或「应用」将网格加到当前打开的文档（需在 Illustrator 中）。",
      lines_suffix: " 行",
      status_trim_safe_ok:
        "已更新裁切（橙）与安全（洋红）参考线 — 请查看 GridSeed Trim / Safe 图层。",
      status_template_created:
        "已创建：{name} — 默认网格在「GridSeed Grid」层；若预设含出血则有裁切/安全线。",
      status_paper_new:
        "已新建文档 — 默认网格在「GridSeed Grid」；版式类预设含模块区；若预设含出血则有裁切/安全线。",
      status_ready: "就绪 — v2.3.0 · 模板 · 「关于」含能力边界说明。",
      status_err_data: "错误：面板数据缺失，请重新安装扩展。",
      status_ui_err: "GridSeed 界面错误：",
      status_new_doc_ok:
        "已新建：{label} — 默认网格在「GridSeed Grid」层；已设色彩模式与单位；若预设含出血则有裁切/安全线。",
      status_grid_err: " — 请打开图层面板查找「GridSeed Grid」（青色构造线）。",
      status_grid_ok:
        "已应用：{name} — 青色线在「GridSeed Grid」层（若看不见请打开图层面板）。",
      status_grid_applying: "正在应用网格：{name}…",
      status_insert_ok:
        "文字在「GridSeed Copy」层 — 左对齐 12 栏边距；垂直节奏按基线步进；字体按预设（若已安装）。",
      status_copied: "已复制到剪贴板 — 可粘贴到 Illustrator 文本框等。",
      status_copy_fail: "复制失败 — 请手动全选预览文字（⌘A / Ctrl+A）后复制。",
      status_lock_guides:
        "已发送锁定参考线命令 — 若无变化，请在 Illustrator 中使用 视图 → 参考线 → 锁定参考线。",
      ctx_no_doc: "Illustrator 中未打开文档 — 请新建或打开文件后点击刷新。",
      ctx_artboard: "画板：{w} × {h} pt · {cm} · 标尺 {ru}。{grid}",
      ctx_has_grid: "已存在「GridSeed Grid」图层。",
      ctx_no_grid: "尚无「GridSeed Grid」层 — 请在下方应用网格预设。",
      preview_select_chip: "请选择纸张规格与网格或版式芯片。",
      preview_caption_suffix: " · 比例与参考线示意。",
      tag_grid: "网格",
      tag_layout: "版式",
      lp_bullet_stacked:
        "上下叠放：图文高度约 {pi}% / {pt}%（contentPlanWeights，约 12%～78% 限制）。",
      lp_bullet_split: "左右分栏：不做竖向图文高度重分。",
      lp_bullet_grid: "多图格网：约 {rows} 行 × {cols} 列；格间留白约图区的 {gap}%。",
      lp_bullet_dual_on:
        "正文双栏：已满足 — 无副标题、正文块 ≥ 6、正文区宽/高 > 1.08。",
      lp_bullet_dual_off:
        "双栏条件：副标题 = 0、正文块 ≥ 6、正文区偏宽；有副标题则用单栏自上而下。",
      lp_bullet_counts: "当前量：图片 {img} · 正文块 {body} · 副标题 {sub}。",
      lp_zone_img: "图区",
      lp_zone_text: "正文区",
      lp_fig: "图 {n}",
      lp_cap: "A4 示意 · 格网 {rows}×{cols} · {dual}",
      lp_dual_yes: "双栏",
      lp_dual_no: "单栏",
      lp_single_sub: "单栏（含副标题）",
      lp_single_body: "单栏正文",
      lp_dual_flow: "双栏流动（无副标题）",
      lp_slot_title: "图片 {n}",
      lp_dim: "像素尺寸",
      lp_ratio: "长宽比",
      lp_w_px: "宽 px",
      lp_h_px: "高 px",
      lp_w: "宽",
      lp_h: "高",
      lp_ratio_hint: "例：16 / 9、4 / 3、1 / 1",
      lp_svg_aria: "排版预览示意画布",
      aria_starter_kit_region: "入门套件",
      aria_starter_preview_svg: "入门套件预览",
      aria_starter_theme_select: "入门套件配色主题",
      aria_template_preview_svg: "所选模板的示意图预览",
      aria_variant_bar: "当前规格下的网格与版式芯片",
      aria_lp_layout_mode: "版式类型",
      gc_title: "网格编排器",
      gc_summary_preview: "预览",
      gc_btn_place: "置入画板",
      gc_btn_regen: "重新生成网格",
      gc_btn_download_png: "下载 PNG",
      gc_preview_svg_aria: "网格编排预览",
      gc_summary_quick_templates: "快捷模板",
      gc_purpose_label: "用途",
      gc_aria_purpose: "按用途筛选预设",
      gc_aria_quick_templates: "快捷模板列表",
      gc_summary_starter_kit: "入门套件",
      gc_aria_starter_themes: "入门套件主题",
      gc_summary_canvas_size: "画板尺寸",
      gc_paper_size_label: "纸张 / 幅面",
      gc_aria_paper_size: "纸张或屏幕幅面",
      gc_paper_opt_a4: "A4（210 × 297 mm）",
      gc_paper_opt_a3: "A3（297 × 420 mm）",
      gc_paper_opt_a2: "A2（420 × 594 mm）",
      gc_paper_opt_a1: "A1（594 × 841 mm）",
      gc_paper_opt_a0: "A0（841 × 1189 mm）",
      gc_paper_opt_b2: "B2（500 × 707 mm）",
      gc_paper_opt_b1: "B1（707 × 1000 mm）",
      gc_paper_opt_letter: "US Letter（8.5 × 11 in）",
      gc_paper_opt_tabloid: "US Tabloid（11 × 17 in）",
      gc_paper_opt_poster_24x36: "海报 24 × 36 in",
      gc_paper_opt_poster_18x24: "海报 18 × 24 in",
      gc_paper_opt_instagram: "Instagram 帖子（1080 × 1080）",
      gc_paper_opt_custom: "自定义",
      gc_orientation_landscape: "横向",
      gc_orientation_portrait: "纵向",
      gc_width: "宽",
      gc_height: "高",
      gc_bleed_mm: "出血 (mm)",
      gc_safe_mm: "安全边距 (mm)",
      gc_aria_bleed: "出血宽度（毫米）",
      gc_aria_safe: "裁切线内安全区（毫米）",
      gc_bleed_hint:
        "出血会扩大画板；橙色为裁切线、洋红为安全区。社交图 / 自定义默认为 0 mm；切换纸张会按常见印刷规格填入建议值。",
      gc_summary_image_count: "图片数量",
      gc_amount_label: "数量",
      gc_aria_image_count: "图片数量",
      gc_image_size_pct: "图片缩放（%）",
      gc_gap_pct: "间距（%）",
      gc_create_grid: "生成网格",
      gc_purpose_all: "全部用途",
      gc_purpose_social: "社交媒体",
      gc_purpose_poster: "海报 / 活动",
      gc_purpose_editorial: "编辑出版",
      gc_purpose_product: "产品展示",
      gc_purpose_presentation: "演示幻灯片",
      gc_comp_layout_12col_web: "12 栏网页网格",
      gc_comp_layout_6col_editorial: "6 栏编辑网格",
      gc_comp_layout_rule_of_thirds: "三分法",
      gc_comp_layout_golden_ratio: "黄金比",
      gc_comp_layout_modular_8: "模数尺度（8）",
      gc_comp_layout_bento_3x3: "便当格 3×3",
      gc_comp_layout_masonry: "瀑布流 / Pinterest",
      gc_theme_short_cool_summer: "拍立得",
      gc_theme_short_bold_navy: "胶卷",
      gc_theme_short_minimal_mist: "极简",
      gc_theme_short_warm_plum: "复古",
      gc_theme_short_midnight_neo: "霓虹",
      gc_theme_short_paper_collage: "纸拼贴",
      gc_theme_short_forest_emerald: "现代复古",
      gc_theme_short_sunset_orange: "日落",
      gc_theme_short_royal_violet: "皇室紫",
      gc_theme_short_acid_green: "赛博",
      gc_theme_short_swiss_red: "瑞士",
      gc_theme_short_mono_wave: "单色",
      gc_theme_short_desert_sand: "沙漠",
      gc_preset_name_social_neon: "霓虹发布",
      gc_preset_name_social_polaroid: "拍立得故事",
      gc_preset_name_poster_vintage: "复古海报 campaign",
      gc_preset_name_poster_swiss: "瑞士风粗体",
      gc_preset_name_editorial_minimal: "极简编辑风",
      gc_preset_name_editorial_collage: "纸媒专题",
      gc_preset_name_product_modern: "现代产品栅格",
      gc_preset_name_presentation_clean: "干净演示稿",
      gc_preset_meta: "{theme} · {layout} · {n} 张图",
      status_preset_applied: "已应用预设：{name}",
      layout_chip_l1: "L1 — 稳定焦点",
      layout_chip_l2: "L2 — 顶带",
      layout_chip_l3: "L3 — 满版",
      layout_chip_l4: "L4 — 底带",
      layout_chip_l5: "L5 — 左三分之一",
      layout_chip_l6: "L6 — 右三分之一",
      paper_a1_label: "A1 海报",
      paper_a1_note: "594 × 841 mm + 出血",
      paper_a2_label: "A2 海报",
      paper_a2_note: "420 × 594 mm + 出血",
      paper_a3_label: "A3 海报",
      paper_a3_note: "297 × 420 mm + 出血",
      paper_a4_label: "A4 海报",
      paper_a4_note: "210 × 297 mm + 出血",
      paper_a5_label: "A5 传单",
      paper_a5_note: "148 × 210 mm + 出血",
      paper_dl_label: "DL 传单",
      paper_dl_note: "99 × 210 mm + 出血",
      paper_tabloid_label: "美标小报",
      paper_tabloid_note: "11 × 17 in + 出血",
      paper_letter_label: "美标信纸",
      paper_letter_note: "8.5 × 11 in + 出血",
      paper_ig_square_label: "Instagram 方图",
      paper_ig_square_note: "1080 × 1080 px RGB",
      paper_ig_story_label: "快拍 / 竖屏",
      paper_ig_story_note: "1080 × 1920 px RGB",
      paper_fb_post_label: "Facebook 链接图",
      paper_fb_post_note: "1200 × 630 px RGB",
      paper_slide16_9_label: "16:9 HD 幻灯片",
      paper_slide16_9_note: "1920 × 1080 px RGB",
      paper_yt_720_label: "YouTube 缩略图",
      paper_yt_720_note: "1280 × 720 px RGB",
      paper_pin_label: "Pinterest 竖图",
      paper_pin_note: "1000 × 1500 px RGB",
      paper_x_banner_label: "X / Twitter 头图",
      paper_x_banner_note: "1500 × 500 px RGB",
      sizepreset_grid_a4_12col_web: "A4 · 12 栏",
      sizepreset_grid_a4_bento_5x7: "A4 · 5×7 网格",
      sizepreset_grid_a3_12col_web: "A3 · 12 栏",
      sizepreset_grid_ig_story_rule_of_thirds: "快拍 · 三分法",
      sizepreset_grid_slide16_9_12col_web: "高清幻灯片 · 12 栏",
      sizepreset_layout_level1_a4_bleed: "版式 L1 A4",
      sizepreset_layout_level4_a4_bleed: "版式 L4 A4",
      sizepreset_layout_level1_slide16_9: "版式 L1 幻灯片 16:9",
      sizepreset_layout_level1_ig_square_1080: "版式 L1 IG 方图",
      sizepreset_layout_level1_ig_story_1080: "版式 L1 快拍",
      sizepreset_poster_a3_bleed: "A3 海报",
      sizepreset_poster_a4_bleed: "A4 海报",
      sizepreset_flyer_dl_bleed: "DL 传单",
      sizepreset_social_ig_post_1080: "IG 方图",
      sizepreset_social_youtube_thumb: "YouTube 缩略图",
      sizepreset_presentation_16_9_hd: "幻灯片 16:9 HD",
      sizepreset_brand_bizcard_us_bleed: "美标名片",
      sizepreset_brand_letterhead_a4_bleed: "A4 信头",
      sizepreset_editorial_mag_spread_a4_bleed: "杂志跨页",
      font_system_label: "系统无衬线（Helvetica / Arial）",
      font_system_hint: "稳妥默认，尽量匹配系统已安装字体。",
      font_neo_grotesk_label: "新 grotesque",
      font_neo_grotesk_hint: "Helvetica 系，紧凑中性，适合界面与海报标题。",
      font_grotesk_label: "Grotesk — 偏细",
      font_grotesk_hint: "偏轻量 grotesque，版面更通透。",
      font_humanist_label: "人文无衬线（Myriad 风）",
      font_humanist_hint: "友好、易读，适合长标签与演示稿。",
      font_transitional_label: "过渡衬线（Times / Minion）",
      font_transitional_hint: "经典印刷与编辑气质。",
      font_editorial_label: "编辑衬线",
      font_editorial_hint: "长文与杂志语感。",
      font_modern_label: "Modern / Georgia",
      font_modern_hint: "屏幕友好的衬线对比。",
      font_display_label: "展示 / 海报体",
      font_display_hint: "偏窄、冲击力强，适合主标题。",
      font_mono_label: "等宽体",
      font_mono_hint: "规格、代码、界面标注。",
      font_slab_label: "粗衬线",
      font_slab_hint: "Rockwell / Clarendon 风 — 海报、标题、亲和印刷。",
      font_geometric_label: "几何无衬线",
      font_geometric_hint: "Futura / Century Gothic 风 — 简洁现代。",
      font_rounded_label: "圆角 UI",
      font_rounded_hint: "SF Rounded 等 — 应用与社交图更柔和。",
      font_literary_label: "书籍衬线",
      font_literary_hint: "Palatino / Garamond 风 — 长篇与优雅正文。",
      font_industrial_label: "工业风窄体",
      font_industrial_hint: "DIN 风窄体 — 标题、导视、信息密集 UI。",
      sk_svg_title: "入门",
      sk_svg_subtitle: "网格引导",
      copy_pad_0: "辅助说明 · 与画板节奏一致。",
      copy_pad_1: "另一行 · 副标题或备注。",
      copy_pad_2: "行动号召 · 日期、链接或地点。",
      copy_pad_3: "页脚 · 署名、条款或联系方式。",
      gc_status_placed_ok: "已在画板上置入成组矢量网格。",
      gc_status_preview_generated: "预览已更新。可点「置入画板」生成成组矢量。",
      lang_bar_aria: "语言选择",
      starter_theme_label: "配色主题",
      btn_create: "入门包",
      starter_kit_hint:
        "选择配色主题，在这里预览（含套件与网格参考线），然后创建。它会按下方的「版式与内容量」数值生成完整分区。",
      status_starter_applying: "正在创建套件（{theme}）…",
      status_layout_applying: "正在应用布局分区与图片槽位…",
      tpl_create_h2: "发送到 Illustrator",
      tpl_create_hint:
        "使用上方已选的尺寸与芯片。「布局示意」在「GridSeed Layout Plan」层创建图/文分区。「入门包」则把套件风格 + 相同分区一起生成（按下方「版式与内容量」数值）。",
      theme_cool_summer: "清凉夏日 — 青绿与薄荷",
      theme_bold_navy: "深蓝撞色 — 红强调",
      theme_warm_plum: "暖紫红 — 洋红与琥珀",
      theme_mono_wave: "黑白波浪",
      theme_swiss_red: "瑞士网格 — 红与黑",
      theme_forest_emerald: "森林绿宝石 — 绿与金",
      theme_sunset_orange: "日落橙 — 珊瑚与黏土",
      theme_royal_violet: "皇家紫 — 紫与银",
      theme_minimal_mist: "极简雾感 — 冷中性色",
      theme_desert_sand: "沙漠沙金 — 温暖金与陶土",
      theme_midnight_neo: "午夜霓虹 — 电光青与紫",
      theme_paper_collage: "纸拼贴 — 柔蓝与暖色点缀",
      theme_acid_green: "酸绿风暴 — 电绿与赛博蓝",
      status_starter_ok:
        "已创建入门包 — 图层「GridSeed Starter」「GridSeed Copy」；色板以「GS」前缀；曲线为路径文字。构造网格已置于顶层。",
      tpl_lp_section_title: "布局预览",
      tpl_lp_section_hint:
        "可选：设置图文如何分区。下方示意图会随数值实时更新。",
      btn_layoutplan_create: "布局示意",
      status_layoutplan_ok:
        "已按当前参数创建布局 — 新文档含所选网格与预设；图/文区与比例框在「GridSeed Layout Plan」层。",
      status_layoutplan_err: "无法生成布局 — 请重载面板或先选择纸张与网格芯片。",
    },
  };

  var COPY_SAMPLES_ZH = {
    poster_flyer: {
      professional: [
        "年度设计研讨会",
        "主题演讲与工作坊 — 院系与业界",
        "4 月 12 日（周六）· A 栋大礼堂",
        "报名：design.edu/symposium",
      ],
      playful: [
        "先把烂画刷出来",
        "怪题目与披萨之夜",
        "周五 19:00 · 4B 工作室",
        "带朋友来 — 贴纸先到先得",
      ],
      luxury: [
        "工作室开放夜",
        "私人观展 — 春季系列",
        "周四 18:00 — 仅 RSVP",
        "咨询：atelier@example.com",
      ],
      minimal: ["展览", "新作", "11 月 12—26", "North 画廊"],
    },
    social: {
      professional: [
        "新案例：品牌焕新",
        "我们如何统一印刷与社交呈现",
        "阅读拆解 →",
      ],
      playful: ["我们终于整理了图层", "（差不多吧）", "左滑围观混乱 →"],
      luxury: ["安静手作", "限量编号", "探索系列"],
      minimal: ["现已上线", "第 04 期", "简介区链接"],
    },
    branding: {
      professional: ["Northwind 工作室", "策略 · 识别 · 系统", "hello@northwind.studio"],
      playful: ["你好，我们是像素与铅笔", "画标志，也讲冷笑话", "来聊聊！"],
      luxury: ["光舍 Maison Lumière", "巴黎 · 自 1924", "预约到访"],
      minimal: ["未命名标志", "字标探索", "v03"],
    },
    editorial: {
      professional: [
        "印刷的未来",
        "长文没有死 — 只是更挑剔。",
        "本期：装订、纸张与慢设计。",
      ],
      playful: [
        "杂志疗愈",
        "我们采访了十二个人聊订书机。",
        "附：年度最美摘句。",
      ],
      luxury: ["第十二卷", "油墨的重量", "M. Laurent  Essay"],
      minimal: ["随笔", "谈留白", "第 14—27 页"],
    },
    packaging: {
      professional: [
        "有机燕麦 — 500 g",
        "高纤维 · 无添加糖",
        "回收说明见包装底部",
      ],
      playful: ["脆脆小伙伴", "有主见的燕麦", "保质期：你的下一段旅程"],
      luxury: ["Maison Grain", "单一产地燕麦", "小批量"],
      minimal: ["燕麦", "500 g", "请保持干燥"],
    },
    presentation: {
      professional: [
        "三季度业绩",
        "收入 · 毛利 · 展望",
        "保密 — 内部使用",
      ],
      playful: ["尽量不催眠的幻灯片", "（我们尽力了）", "有问题？"],
      luxury: ["高管简报", "董事会材料", "受邀查阅"],
      minimal: ["议程", "01 — 04", "谢谢"],
    },
    ui_icons: {
      professional: [
        "图标集 — 24 px 网格",
        "描边 2 px · 圆角端点",
        "导出 SVG 与 PDF",
      ],
      playful: ["小画大情绪", "轻点 responsibly"],
      luxury: ["字形收藏", "为视网膜精调", "内测"],
      minimal: ["图标", "v1.2", "进行中"],
    },
  };

  var TIPS_ZH = [
    {
      title: "为何用 8 pt 基线？",
      body: "行距为 8 pt 的倍数时，行与界面元素共享同一垂直节奏，看起来是「刻意对齐」而非「差不多」。",
    },
    {
      title: "出血、裁切与安全区",
      body: "出血在裁切线外延展。裁切线（GridSeed 中为橙色）是成品尺寸。安全区（洋红）适合放 Logo 与正文，避免贴边太紧。",
    },
    {
      title: "视觉层级",
      body: "一个主标题、一行辅助、再细节。每个版面两三种字号通常足够。",
    },
    {
      title: "对齐优于居中",
      body: "块面贴齐明确的左栏或右栏；全盘居中容易显得呆板，除非对比很强。",
    },
    {
      title: "分栏与行长",
      body: "正文行长约 45–75 字符较舒适。栏更宽就需要更大字号或行距。",
    },
    {
      title: "黄金比的实际用法",
      body: "用 φ 划分图文区域面积，而不是堆很多小 φ 框 —— 一个清晰焦点胜过许多碎框。",
    },
    {
      title: "字号与画板",
      body: "「文字」使用 12 栏边距与 8 pt 步进的垂直节奏，便于对齐常见 GridSeed 网格。选 3–8 行与字体预设；Illustrator 使用每档中第一个已安装字体。",
    },
    {
      title: "版式 / Levels（5×7）",
      body: "红框为版心边距；青线为 5×7 模块；粉区为默认 2×4 主视觉块。色块为示意，不用于印刷。",
    },
    {
      title: "模板：文档与布局",
      body: "先选规格与芯片（网格或 L1–L6），调整内容布局与各图尺寸；「布局示意」发图/文区到 Illustrator，「入门包」加主题图形与文字。例：layout_level3_tabloid_bleed。",
    },
  ];

  var GRIDS_ZH = {
    "12col_web": {
      name: "12 栏网页网格",
      explain:
        "十二等分栏加栏距 — 网页与许多编辑排版的默认节奏。文字与图贴齐栏边会显得稳重。",
    },
    "6col_editorial": {
      name: "6 栏编辑网格",
      explain: "六栏加边距 — 适合杂志、图文混排，比 12 栏略松。",
    },
    "8pt_baseline": {
      name: "8 pt 基线",
      explain: "每 8 pt 一条水平线。行距设为 8 的倍数（如 16/24）可与网格对齐。",
    },
    modular_8: {
      name: "模数尺度",
      explain: "按固定模块尺寸递进 — 适合图标、卡片与统一间距系统。",
    },
    golden_ratio: {
      name: "黄金比",
      explain: "在 φ（≈1.618）处设关键线，交点可作焦点；适合不对称构图。",
    },
    rule_of_thirds: {
      name: "三分法",
      explain: "在 1/3 与 2/3 处各两条线。地平线、人脸或按钮可靠近交点。",
    },
    swiss_grid: {
      name: "瑞士 / 编辑风",
      explain: "与 12 栏加边距相同 — 瑞士海报与杂志页常用严格分栏与大量留白。",
    },
    bento_3x3: {
      name: "便当格 3×3",
      explain: "九宫格 — 适合仪表盘、轮播或卡片式界面，每格一块内容。",
    },
    bento_5x7: {
      name: "版式 / Levels 5×7",
      explain:
        "版心内 5 列 × 7 行 — 对应 Layout / Levels；粉区为默认 2×4 主块。按模块铺图文；色块为故事板示意。",
    },
    isometric_30: {
      name: "等轴测构造",
      explain:
        "约 30° 族的斜向构造线。真等轴测不是 Illustrator 默认参考线；GridSeed 在图层上画路径实现。",
    },
  };

  function getLang() {
    try {
      var s = localStorage.getItem(STORAGE_KEY);
      if (s === "zh" || s === "en") return s;
    } catch (e) {}
    return "en";
  }

  function setLang(lang) {
    if (lang !== "zh" && lang !== "en") lang = "en";
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e2) {}
    apply(lang);
    notify(lang);
  }

  function t(key, vars) {
    var lang = getLang();
    var s = (STRINGS[lang] && STRINGS[lang][key]) || (STRINGS.en && STRINGS.en[key]) || key;
    if (vars && typeof s === "string") {
      var k;
      for (k in vars) {
        if (Object.prototype.hasOwnProperty.call(vars, k)) {
          s = s.split("{" + k + "}").join(String(vars[k]));
        }
      }
    }
    return s;
  }

  function apply(lang) {
    if (lang !== "zh" && lang !== "en") lang = getLang();
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";

    var nodes = document.querySelectorAll("[data-i18n]");
    var i;
    for (i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      var k = node.getAttribute("data-i18n");
      if (!k) continue;
      var val = t(k);
      if (node.tagName === "TITLE") {
        document.title = val;
      } else {
        node.textContent = val;
      }
    }

    var htmlNodes = document.querySelectorAll("[data-i18n-html]");
    for (i = 0; i < htmlNodes.length; i++) {
      var hn = htmlNodes[i];
      var hk = hn.getAttribute("data-i18n-html");
      if (hk) hn.innerHTML = t(hk);
    }

    document.querySelectorAll("[data-lang-panel]").forEach(function (panel) {
      var want = panel.getAttribute("data-lang-panel");
      panel.hidden = want !== lang;
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    document.querySelectorAll(".lang-bar").forEach(function (lb) {
      lb.setAttribute("aria-label", t("lang_bar_aria"));
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
      var ak = el.getAttribute("data-i18n-aria-label");
      if (ak) el.setAttribute("aria-label", t(ak));
    });
  }

  function notify(lang) {
    try {
      root.dispatchEvent(
        new CustomEvent("gridseed-langchange", { detail: { lang: lang } })
      );
    } catch (e) {}
    if (typeof root.__gridseedLangRefresh === "function") {
      root.__gridseedLangRefresh();
    }
    /* layout schematic: gridseed-langchange rebuilds slots + render (layout-preview.js) */
  }

  var categoriesZh = {
    poster_flyer: "海报 / 传单",
    social: "社交媒体",
    branding: "品牌与文具",
    editorial: "编辑出版",
    packaging: "包装",
    presentation: "演示 / 屏幕",
    ui_icons: "界面 / 图标",
  };

  var textSizeZh = {
    compact: "紧凑 — 说明与界面",
    standard: "标准 — 平衡层级",
    large: "大号 — 强调",
    poster: "海报 — 大标题",
    display: "展示 — 封面主视觉",
  };

  function sampleCopyForLang(categoryId, tone) {
    if (getLang() !== "zh") return null;
    var pack = COPY_SAMPLES_ZH[categoryId] || COPY_SAMPLES_ZH.poster_flyer;
    var lines = pack[tone] || pack.professional;
    return lines ? lines.slice() : null;
  }

  root.GridSeedI18n = {
    getLang: getLang,
    setLang: setLang,
    t: t,
    apply: apply,
    tipsForLang: function (lang) {
      return lang === "zh" ? TIPS_ZH : null;
    },
    sampleCopyForLang: sampleCopyForLang,
    gridsZh: GRIDS_ZH,
    categoriesZh: categoriesZh,
    textSizeZh: textSizeZh,
  };

  function initOnce() {
    apply(getLang());
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-lang"));
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initOnce);
  } else {
    initOnce();
  }
})(typeof window !== "undefined" ? window : this);
