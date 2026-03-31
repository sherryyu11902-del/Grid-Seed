/**
 * GridSeed — panel data (template ids must exist in jsx/hostscript.jsx)
 */
(function (root) {
  var GRIDSEED = {};

  GRIDSEED.categories = [
    { id: "poster_flyer", label: "Poster / Flyer" },
    { id: "social", label: "Social Media" },
    { id: "branding", label: "Branding & stationery" },
    { id: "editorial", label: "Editorial" },
    { id: "packaging", label: "Packaging" },
    { id: "presentation", label: "Presentation / screen" },
    { id: "ui_icons", label: "UI / Icons" },
  ];

  (function buildPaperFormats() {
    var grids = [
      "12col_web",
      "6col_editorial",
      "rule_of_thirds",
      "golden_ratio",
      "bento_3x3",
      "8pt_baseline",
      "modular_8",
      "bento_5x7",
    ];
    var gridLabels = {
      "12col_web": "12-column web",
      "6col_editorial": "6-column editorial",
      rule_of_thirds: "Rule of thirds",
      golden_ratio: "Golden ratio",
      bento_3x3: "Bento 3×3",
      "8pt_baseline": "8 pt baseline",
      modular_8: "Modular scale",
      bento_5x7: "5×7 modular",
    };
    var layoutSuffixBySlug = {
      a1: "a1_bleed",
      a2: "a2_bleed",
      a3: "a3_bleed",
      a4: "a4_bleed",
      a5: "a5_bleed",
      dl: "dl_bleed",
      tabloid: "tabloid_bleed",
      letter: "letter_bleed",
      ig_square: "ig_square_1080",
      ig_story: "ig_story_1080",
      fb_post: "fb_post_1200",
      slide16_9: "slide16_9",
      yt_720: "yt_720",
      pin: "pin_1000_1500",
      x_banner: "x_banner_1500",
    };
    var layoutLabels = [
      "L1 — Calm & focus",
      "L2 — Top band",
      "L3 — Full field",
      "L4 — Bottom band",
      "L5 — Left third",
      "L6 — Right third",
    ];
    var papers = [
      { slug: "a1", label: "A1 poster", note: "594 × 841 mm + bleed" },
      { slug: "a2", label: "A2 poster", note: "420 × 594 mm + bleed" },
      { slug: "a3", label: "A3 poster", note: "297 × 420 mm + bleed" },
      { slug: "a4", label: "A4 poster", note: "210 × 297 mm + bleed" },
      { slug: "a5", label: "A5 flyer", note: "148 × 210 mm + bleed" },
      { slug: "dl", label: "DL flyer", note: "99 × 210 mm + bleed" },
      { slug: "tabloid", label: "US Tabloid", note: "11 × 17 in + bleed" },
      { slug: "letter", label: "US Letter", note: "8.5 × 11 in + bleed" },
      { slug: "ig_square", label: "Instagram square", note: "1080 × 1080 px RGB" },
      { slug: "ig_story", label: "Instagram / TikTok story", note: "1080 × 1920 px RGB" },
      { slug: "fb_post", label: "Facebook link post", note: "1200 × 630 px RGB" },
      { slug: "slide16_9", label: "Slide 16:9 HD", note: "1920 × 1080 px RGB" },
      { slug: "yt_720", label: "YouTube thumbnail", note: "1280 × 720 px RGB" },
      { slug: "pin", label: "Pinterest pin", note: "1000 × 1500 px RGB" },
      { slug: "x_banner", label: "X / Twitter header", note: "1500 × 500 px RGB" },
    ];
    var out = [];
    var pi;
    var gi;
    for (pi = 0; pi < papers.length; pi++) {
      var p = papers[pi];
      var variants = [];
      for (gi = 0; gi < grids.length; gi++) {
        variants.push({
          id: "grid_" + p.slug + "_" + grids[gi],
          label: gridLabels[grids[gi]],
          tag: "Grid",
        });
      }
      var layoutSuffix = layoutSuffixBySlug[p.slug];
      if (layoutSuffix) {
        var li;
        for (li = 0; li < layoutLabels.length; li++) {
          variants.push({
            id: "layout_level" + (li + 1) + "_" + layoutSuffix,
            label: layoutLabels[li],
            tag: "Layout",
          });
        }
      }
      out.push({
        slug: p.slug,
        label: p.label,
        note: p.note,
        variants: variants,
      });
    }
    GRIDSEED.paperFormats = out;
  })();

  GRIDSEED.sizePresets = [
    { id: "grid_a4_12col_web", label: "A4 · 12-column" },
    { id: "grid_a4_bento_5x7", label: "A4 · 5×7 grid" },
    { id: "grid_a3_12col_web", label: "A3 · 12-column" },
    { id: "grid_ig_story_rule_of_thirds", label: "Story · thirds" },
    { id: "grid_slide16_9_12col_web", label: "Slide HD · 12-col" },
    { id: "layout_level1_a4_bleed", label: "Layout L1 A4" },
    { id: "layout_level4_a4_bleed", label: "Layout L4 A4" },
    { id: "layout_level1_slide16_9", label: "Layout L1 slide 16:9" },
    { id: "layout_level1_ig_square_1080", label: "Layout L1 IG square" },
    { id: "layout_level1_ig_story_1080", label: "Layout L1 story" },
    { id: "poster_a3_bleed", label: "A3 poster" },
    { id: "poster_a4_bleed", label: "A4 poster" },
    { id: "flyer_dl_bleed", label: "DL flyer" },
    { id: "social_ig_post_1080", label: "IG square" },
    { id: "social_youtube_thumb", label: "YouTube thumb" },
    { id: "presentation_16_9_hd", label: "Slide 16:9 HD" },
    { id: "brand_bizcard_us_bleed", label: "US biz card" },
    { id: "brand_letterhead_a4_bleed", label: "A4 letterhead" },
    { id: "editorial_mag_spread_a4_bleed", label: "Mag spread" },
  ];

  GRIDSEED.grids = [
    {
      id: "12col_web",
      name: "12-column web",
      explain:
        "Twelve equal columns with gutters — the default rhythm for web and many editorial layouts. Align type and images to column edges for a calm grid.",
    },
    {
      id: "6col_editorial",
      name: "6-column editorial",
      explain:
        "Six columns with margins — strong for magazines and dense text + image pairs without feeling as tight as 12 columns.",
    },
    {
      id: "8pt_baseline",
      name: "8 pt baseline",
      explain:
        "Horizontal lines every 8 pt. Set leading to multiples of 8 (e.g. 16/24) so baselines lock to the grid.",
    },
    {
      id: "modular_8",
      name: "Modular scale",
      explain:
        "Square modules stepping by one module size — good for icons, cards, and spacing that stays in one system.",
    },
    {
      id: "golden_ratio",
      name: "Golden ratio",
      explain:
        "Key lines at φ (≈1.618). Use intersections for focal points; pairs well with asymmetrical layouts.",
    },
    {
      id: "rule_of_thirds",
      name: "Rule of thirds",
      explain:
        "Two vertical and two horizontal lines at 1/3 and 2/3. Place horizons, faces, or CTAs near the intersections.",
    },
    {
      id: "swiss_grid",
      name: "Swiss / editorial",
      explain:
        "Same as 12-column with margins — Swiss-style posters and magazine pages rely on strict columns and lots of negative space.",
    },
    {
      id: "bento_3x3",
      name: "Bento 3×3",
      explain:
        "Nine cells for dashboards, carousels, or card UIs — each cell is a clear content slot.",
    },
    {
      id: "bento_5x7",
      name: "Layout / Levels 5×7",
      explain:
        "Five columns by seven rows inside the margins — matches the Layout / Levels reference: place imagery and type on the modular rhythm; the pink zone marks the default 2×4 hero block.",
    },
    {
      id: "isometric_30",
      name: "Isometric construction",
      explain:
        "Diagonal construction paths at 30° family. True isometrics aren’t Illustrator guides; GridSeed draws paths on a layer.",
    },
  ];

  GRIDSEED.tips = [
    {
      title: "Why an 8 pt baseline?",
      body:
        "When leading is a multiple of 8 pt, lines and UI elements share one vertical rhythm and look intentional instead of ‘almost’ aligned.",
    },
    {
      title: "Bleed vs trim vs safe",
      body:
        "Bleed extends past trim for cutting. Trim (orange in GridSeed) is the final size. Safe (magenta) is where to keep logos and text so nothing feels cramped at the edge.",
    },
    {
      title: "Visual hierarchy",
      body:
        "One dominant headline, one supporting line, then detail. Two or three type sizes per layout is usually enough.",
    },
    {
      title: "Alignment over centering",
      body:
        "Align blocks to a strong left or right column; all-center layouts often feel static unless contrast is very high.",
    },
    {
      title: "Columns and line length",
      body:
        "For body copy, aim for roughly 45–75 characters per line. Wider columns need larger type or more line spacing.",
    },
    {
      title: "Golden ratio in practice",
      body:
        "Use φ to split space between image and text zones, not as a decoration — one clear focal area beats many small φ boxes.",
    },
    {
      title: "Type that fits the format",
      body:
        "Words use a 12-column margin and snapped vertical rhythm (scaled 8 pt step) so blocks line up with typical GridSeed grids. Pick 3–8 lines and a font preset; Illustrator uses the first installed font in each stack.",
    },
    {
      title: "Layout / Levels (5×7)",
      body:
        "Red frame = live margin; cyan = 5×7 modules; pink = 2×4 focus. L1 calm; L2 grey top band; L3 full field; L4 bottom band; L5–L6 left/right thirds. Zone tints are story guides — not for print.",
    },
    {
      title: "Templates: document & layout",
      body:
        "Pick a format and chip (Grid or Layout L1–L6), adjust content layout / image slots, then use Layout plan (zones in Illustrator) or Starter kit (themed art + type). Example ids: layout_level3_tabloid_bleed, layout_level2_fb_post_1200.",
    },
  ];

  GRIDSEED.textSizePresets = [
    { id: "compact", label: "Compact — captions & UI" },
    { id: "standard", label: "Standard — balanced hierarchy" },
    { id: "large", label: "Large — emphasis" },
    { id: "poster", label: "Poster — big headline" },
    { id: "display", label: "Display — hero / cover" },
  ];

  GRIDSEED.fontPresets = [
    {
      id: "system",
      label: "System sans (Helvetica / Arial)",
      hint: "Safe default; closest match on your system.",
    },
    {
      id: "neo_grotesk",
      label: "Neo-grotesque",
      hint: "Helvetica family — tight, neutral UI and poster type.",
    },
    {
      id: "grotesk",
      label: "Grotesk — light",
      hint: "Lighter grotesque for airy layouts.",
    },
    {
      id: "humanist",
      label: "Humanist sans (Myriad-style)",
      hint: "Friendly, readable for long labels and decks.",
    },
    {
      id: "transitional",
      label: "Transitional serif (Times / Minion)",
      hint: "Classic print and editorial.",
    },
    {
      id: "editorial",
      label: "Editorial serif",
      hint: "Long-form and magazine tone.",
    },
    {
      id: "modern",
      label: "Modern / Georgia",
      hint: "Screen-friendly serif contrast.",
    },
    {
      id: "display",
      label: "Display / poster",
      hint: "Condensed / impact for headlines.",
    },
    {
      id: "mono",
      label: "Monospace",
      hint: "Specs, code, UI labels.",
    },
    {
      id: "slab",
      label: "Slab serif",
      hint: "Rockwell / Clarendon — posters, headlines, friendly print.",
    },
    {
      id: "geometric",
      label: "Geometric sans",
      hint: "Futura / Century Gothic — clean, modern, Bauhaus feel.",
    },
    {
      id: "rounded",
      label: "Rounded UI",
      hint: "SF Rounded / Arial Rounded — softer apps and social cards.",
    },
    {
      id: "literary",
      label: "Literary serif",
      hint: "Palatino / Garamond — books, long essays, elegant body.",
    },
    {
      id: "industrial",
      label: "Industrial / narrow",
      hint: "Condensed / DIN-style — headlines, wayfinding, dense UI.",
    },
  ];

  function copyForCategoryTone(categoryId, tone) {
    var lib = {
      poster_flyer: {
        professional: [
          "Annual Design Symposium",
          "Keynote & workshops — faculty + industry",
          "Saturday, 12 April · Main Hall, Building A",
          "Register at design.edu/symposium",
        ],
        playful: [
          "Make Bad Art Fast",
          "A night of weird prompts & pizza",
          "Fri 7 PM · Studio 4B",
          "Bring friends — stickers while they last",
        ],
        luxury: [
          "Atelier Open Evening",
          "Private viewing — Spring collection",
          "Thursday, 18:00 — RSVP only",
          "Enquiries: atelier@example.com",
        ],
        minimal: ["Exhibition", "New works", "12—26 Nov", "Gallery North"],
      },
      social: {
        professional: [
          "New case study: brand refresh",
          "How we unified print & social",
          "Read the breakdown →",
        ],
        playful: [
          "We finally organized our layers",
          "(Mostly.)",
          "Swipe for the chaos →",
          "Still reading? You’re our kind of people.",
        ],
        luxury: ["Quiet craft", "Limited run — numbered", "Discover the collection", "Private link — invite only"],
        minimal: ["Out now", "Issue 04", "Link in bio", "—"],
      },
      branding: {
        professional: [
          "Northwind Studio",
          "Strategy · Identity · Systems",
          "hello@northwind.studio",
        ],
        playful: [
          "Hi, we’re Pixel & Pencil",
          "We draw logos and bad jokes",
          "Let’s chat!",
          "Drop a line — we answer fast.",
        ],
        luxury: ["Maison Lumière", "Paris · Since 1924", "By appointment"],
        minimal: ["Untitled Mark", "Wordmark exploration", "v03"],
      },
      editorial: {
        professional: [
          "The Future of Print",
          "Long-form isn’t dead — it’s selective.",
          "In this issue: binding, paper, and slow design.",
        ],
        playful: [
          "Magazine therapy",
          "We interviewed twelve people about staplers.",
          "Plus: the best pull quotes of the year.",
        ],
        luxury: ["Volume XII", "The weight of ink", "Essay by M. Laurent"],
        minimal: ["Essay", "On margins", "pp. 14—27"],
      },
      packaging: {
        professional: [
          "Organic Oats — 500 g",
          "High fibre · No added sugar",
          "Recycling info on base",
        ],
        playful: ["Crunchy Friends", "Oats with opinions", "Best before: your next adventure"],
        luxury: ["Maison Grain", "Single-origin oats", "Limited batch"],
        minimal: ["Oats", "500 g", "Store dry"],
      },
      presentation: {
        professional: [
          "Q3 Results",
          "Revenue · Margin · Outlook",
          "Confidential — internal use only",
        ],
        playful: ["Slides that don’t put you to sleep", "(We tried)", "Questions?"],
        luxury: ["Executive briefing", "Board materials", "By invitation"],
        minimal: ["Agenda", "01 — 04", "Thank you"],
      },
      ui_icons: {
        professional: [
          "Icon set — 24 px grid",
          "Stroke 2 px · Rounded caps",
          "Export SVG & PDF",
        ],
        playful: ["Tiny drawings", "Big feelings", "Tap responsibly"],
        luxury: ["Glyph collection", "Refined for retina", "Private beta"],
        minimal: ["Icons", "v1.2", "WIP"],
      },
    };
    var pack = lib[categoryId] || lib.poster_flyer;
    return pack[tone] || pack.professional;
  }

  GRIDSEED.copyForCategoryTone = copyForCategoryTone;

  root.GRIDSEED_DATA = GRIDSEED;
})(typeof window !== "undefined" ? window : this);
(function () {
  var cs = null;
  try {
    cs = new CSInterface();
  } catch (e1) {
    cs = null;
  }

  function gridseedAppendDebugLog(obj) {
    try {
      if (!window.cep || !window.cep.fs || !cs) return;
      // Keep this logger simple: some CEP/ExtendScript engines are strict.
      // We only record high-signal fields (NDJSON), not arbitrary `data`.
      var hypothesisId = obj.hypothesisId || "H_PANEL";
      var location = obj.location || "gridseed-panel.js";
      var message = obj.message || "dispatch";
      var result = obj && obj.data && obj.data.result !== undefined ? obj.data.result : "";
      var payload = obj && obj.data && obj.data.payload ? String(obj.data.payload) : "";
      var safe = function (s) {
        return String(s)
          .replace(/\\/g, "\\\\")
          .replace(/"/g, '\\"')
          .replace(/\r/g, "\\r")
          .replace(/\n/g, "\\n");
      };
      var line =
        '{"sessionId":"5d122b","timestamp":' +
        Date.now() +
        ',"runId":"gridseed-panel","hypothesisId":"' +
        safe(hypothesisId) +
        '","location":"' +
        safe(location) +
        '","message":"' +
        safe(message) +
        '","payload":"' +
        safe(payload) +
        '","result":"' +
        safe(result) +
        '"}\n';
      var enc =
        window.cep.encoding && window.cep.encoding.UTF8
          ? window.cep.encoding.UTF8
          : "UTF8";
      // Prefer fixed paths inside this repo so we can read them.
      var paths = [
        "/Users/tinalai/Desktop/cursor webpage building/gridseed-illustrator-plugin/debug-5d122b.log",
        "/Users/tinalai/Desktop/cursor webpage building/.cursor/debug-5d122b.log",
      ];
      try {
        var ext = cs.getSystemPath("extension");
        if (ext) paths.push(ext + "/debug-5d122b.log");
      } catch (eP) {}
      var pi;
      for (pi = 0; pi < paths.length; pi++) {
        try {
          var p = paths[pi];
          var prev = "";
          var st = window.cep.fs.stat(p);
          if (st && st.err === 0) {
            var rd = window.cep.fs.readFile(p, enc);
            if (rd && rd.err === 0 && rd.data) prev = rd.data;
          }
          // Best-effort append: read/concat then write.
          window.cep.fs.writeFile(p, prev + line, enc);
        } catch (eW) {}
      }
    } catch (e0) {}
  }

  function T(key, vars) {
    if (window.GridSeedI18n && typeof window.GridSeedI18n.t === "function") {
      return window.GridSeedI18n.t(key, vars);
    }
    return key;
  }

  function categoryLabel(c) {
    var I = window.GridSeedI18n;
    if (I && I.getLang() === "zh" && I.categoriesZh && I.categoriesZh[c.id]) {
      return I.categoriesZh[c.id];
    }
    return c.label;
  }

  function gridLabel(g) {
    var I = window.GridSeedI18n;
    if (I && I.getLang() === "zh" && I.gridsZh && I.gridsZh[g.id]) {
      return I.gridsZh[g.id].name;
    }
    return g.name;
  }

  function gridExplain(g) {
    var I = window.GridSeedI18n;
    if (I && I.getLang() === "zh" && I.gridsZh && I.gridsZh[g.id]) {
      return I.gridsZh[g.id].explain;
    }
    return g.explain;
  }

  function textSizeLabel(p) {
    var I = window.GridSeedI18n;
    if (I && I.getLang() === "zh" && I.textSizeZh && I.textSizeZh[p.id]) {
      return I.textSizeZh[p.id];
    }
    return p.label;
  }

  function paperLine(pf) {
    if (!pf) return "";
    var kL = "paper_" + pf.slug + "_label";
    var kN = "paper_" + pf.slug + "_note";
    var lab = T(kL);
    var note = T(kN);
    if (lab !== kL && note !== kN) {
      return lab + " — " + note;
    }
    return pf.label + " — " + pf.note;
  }

  function variantLabelI18n(v) {
    if (!v || !data) return v && v.label ? v.label : "";
    var gid = gridIdFromGridVariantId(v.id);
    if (gid && data.grids) {
      var gi;
      for (gi = 0; gi < data.grids.length; gi++) {
        if (data.grids[gi].id === gid) {
          return gridLabel(data.grids[gi]);
        }
      }
    }
    var lv = layoutLevelFromVariantId(v.id);
    if (lv >= 1 && lv <= 6) {
      return T("layout_chip_l" + lv);
    }
    return v.label;
  }

  function sizePresetLabel(p) {
    if (!p) return "";
    var k = "sizepreset_" + p.id;
    var s = T(k);
    return s !== k ? s : p.label;
  }

  function fontPresetLabel(p) {
    if (!p) return "";
    var k = "font_" + p.id + "_label";
    var s = T(k);
    return s !== k ? s : p.label;
  }

  function fontPresetHint(p) {
    if (!p) return "";
    var k = "font_" + p.id + "_hint";
    var s = T(k);
    return s !== k ? s : p.hint || "";
  }

  function themeLabelForUi(themeId) {
    var k = "theme_" + themeId;
    var s = T(k);
    if (s !== k) return s;
    var sk = "gc_theme_short_" + themeId;
    var s2 = T(sk);
    return s2 !== sk ? s2 : themeId;
  }

  function composerThemeShort(themeId) {
    var sk = "gc_theme_short_" + themeId;
    var s2 = T(sk);
    return s2 !== sk ? s2 : themeId.replace(/_/g, " ");
  }

  function composerLayoutLabel(layoutId) {
    var k = "gc_comp_layout_" + layoutId;
    var s = T(k);
    return s !== k ? s : layoutId.replace(/_/g, " ");
  }

  function presetDisplayName(p) {
    if (!p) return "";
    var k = "gc_preset_name_" + p.id;
    var s = T(k);
    return s !== k ? s : p.name;
  }

  var data = window.GRIDSEED_DATA;
  var selectedPaperVariantId = null;

  function $(sel) {
    return document.querySelector(sel);
  }

  function $all(sel) {
    return Array.prototype.slice.call(document.querySelectorAll(sel));
  }

  function escEval(s) {
    return String(s)
      .replace(/\\/g, "\\\\")
      .replace(/"/g, '\\"')
      .replace(/\r/g, "\\r")
      .replace(/\n/g, "\\n");
  }

  function runDispatch(payload, onDone) {
    var inner = escEval(payload);
    var script =
      "(function(){ try { return String(gridseed_dispatch(\"" + inner + "\")); } catch (e) { return \"ERR:\" + String(e); } })();";
    if (!cs || !cs.evalScript) {
      if (onDone) {
        onDone("ERR:CEP — Open this panel inside Illustrator (not a normal browser).");
      }
      return;
    }
    cs.evalScript(script, function (res) {
      var out = res;
      if (out === undefined || out === null || out === "" || out === "undefined") {
        out =
          "ERR:empty — Host script did not return. Open a document, then try again. If it persists, reinstall jsx/hostscript.jsx.";
      } else {
        out = String(out).replace(/^\s+|\s+$/g, "");
      }
      if (
        payload.indexOf("grid|") === 0 ||
        payload.indexOf("text|") === 0
      ) {
        gridseedAppendDebugLog({
          hypothesisId: "H_PANEL_DISPATCH",
          location: "gridseed-panel.js:runDispatch",
          data: { payload: payload, result: out },
        });
      }
      if (onDone) onDone(out);
      else if (out && String(out).indexOf("ERR") === 0) {
        console.warn("GridSeed host:", out);
      }
    });
  }

  function setStatus(msg) {
    var el = $("#statusLine");
    if (el) el.textContent = msg || "";
  }

  function fillCopyCategories() {
    var sel = $("#copyCategory");
    if (!sel || !data || !data.categories) return;
    var prev = sel.value;
    sel.innerHTML = "";
    data.categories.forEach(function (c) {
      var opt = document.createElement("option");
      opt.value = c.id;
      opt.textContent = categoryLabel(c);
      sel.appendChild(opt);
    });
    if (prev) sel.value = prev;
  }

  function fillCopyLineCount() {
    var sel = $("#copyLineCount");
    if (!sel) return;
    var prev = sel.value;
    sel.innerHTML = "";
    var n;
    for (n = 3; n <= 8; n++) {
      var opt = document.createElement("option");
      opt.value = String(n);
      opt.textContent = n + T("lines_suffix");
      sel.appendChild(opt);
    }
    sel.value = prev && prev !== "" ? prev : "4";
  }

  function fillTypePresets() {
    var sz = $("#copyTextSize");
    var fn = $("#copyFont");
    if (!data || !data.textSizePresets || !data.fontPresets) return;
    var szVal = sz && sz.value ? sz.value : "standard";
    var fnVal = fn && fn.value ? fn.value : "system";
    if (sz) {
      sz.innerHTML = "";
      data.textSizePresets.forEach(function (p) {
        var opt = document.createElement("option");
        opt.value = p.id;
        opt.textContent = textSizeLabel(p);
        sz.appendChild(opt);
      });
      sz.value = szVal;
    }
    if (fn) {
      fn.innerHTML = "";
      data.fontPresets.forEach(function (p) {
        var opt = document.createElement("option");
        opt.value = p.id;
        opt.textContent = fontPresetLabel(p);
        opt.title = fontPresetHint(p);
        fn.appendChild(opt);
      });
      fn.value = fnVal;
    }
  }

  function currentTextSize() {
    var sel = $("#copyTextSize");
    return sel && sel.value ? sel.value : "standard";
  }

  function currentFontId() {
    var sel = $("#copyFont");
    return sel && sel.value ? sel.value : "system";
  }

  function currentPaperFormatIndex() {
    var sel = $("#paperFormat");
    if (!sel || sel.value === "") return 0;
    var n = parseInt(sel.value, 10);
    return isNaN(n) ? 0 : n;
  }

  var PREVIEW_SVG_NS = "http://www.w3.org/2000/svg";

  function previewSvgClear(svg) {
    while (svg.firstChild) {
      svg.removeChild(svg.firstChild);
    }
  }

  function previewSvgRect(svg, attrs) {
    var r = document.createElementNS(PREVIEW_SVG_NS, "rect");
    var k;
    for (k in attrs) {
      if (Object.prototype.hasOwnProperty.call(attrs, k)) {
        r.setAttribute(k, attrs[k]);
      }
    }
    svg.appendChild(r);
  }

  function previewSvgLine(svg, x1, y1, x2, y2, stroke, sw, opacity) {
    var ln = document.createElementNS(PREVIEW_SVG_NS, "line");
    ln.setAttribute("x1", x1);
    ln.setAttribute("y1", y1);
    ln.setAttribute("x2", x2);
    ln.setAttribute("y2", y2);
    ln.setAttribute("stroke", stroke);
    ln.setAttribute("stroke-width", sw != null ? sw : 0.35);
    if (opacity != null) {
      ln.setAttribute("opacity", opacity);
    }
    svg.appendChild(ln);
  }

  function previewAspectForSlug(slug) {
    var map = {
      a1: 594 / 841,
      a2: 420 / 594,
      a3: 297 / 420,
      a4: 210 / 297,
      a5: 148 / 210,
      dl: 99 / 210,
      tabloid: 11 / 17,
      letter: 8.5 / 11,
      ig_square: 1,
      ig_story: 1080 / 1920,
      fb_post: 1200 / 630,
      slide16_9: 1920 / 1080,
      yt_720: 1280 / 720,
      pin: 1000 / 1500,
      x_banner: 1500 / 500,
    };
    return map[slug] != null ? map[slug] : 1;
  }

  function previewPageRect(slug) {
    var ar = previewAspectForSlug(slug);
    var pad = 6;
    var mw = 100 - 2 * pad;
    var mh = 100 - 2 * pad;
    var pw;
    var ph;
    var px;
    var py;
    if (ar >= 1) {
      pw = mw;
      ph = mw / ar;
    } else {
      ph = mh;
      pw = mh * ar;
    }
    px = pad + (mw - pw) / 2;
    py = pad + (mh - ph) / 2;
    return { px: px, py: py, pw: pw, ph: ph };
  }

  function gridIdFromGridVariantId(templateId) {
    var i;
    if (!data || !data.paperFormats) {
      return null;
    }
    for (i = 0; i < data.paperFormats.length; i++) {
      var slug = data.paperFormats[i].slug;
      var prefix = "grid_" + slug + "_";
      if (String(templateId).indexOf(prefix) === 0) {
        return String(templateId).slice(prefix.length);
      }
    }
    return null;
  }

  function layoutLevelFromVariantId(templateId) {
    var m = String(templateId).match(/^layout_level(\d+)_/);
    return m ? parseInt(m[1], 10) : 0;
  }

  function previewDrawGrid(svg, page, gridId) {
    var px = page.px;
    var py = page.py;
    var pw = page.pw;
    var ph = page.ph;
    var cyan = "#00c8d4";
    var frame = "rgba(122, 143, 163, 0.45)";
    var i;
    var j;
    previewSvgRect(svg, {
      x: px,
      y: py,
      width: pw,
      height: ph,
      fill: "rgba(12, 18, 32, 0.92)",
      stroke: frame,
      "stroke-width": 0.5,
    });
    if (gridId === "12col_web") {
      for (i = 0; i <= 12; i++) {
        var x12 = px + (pw * i) / 12;
        previewSvgLine(svg, x12, py, x12, py + ph, cyan, 0.22, 0.55);
      }
    } else if (gridId === "6col_editorial") {
      for (i = 0; i <= 6; i++) {
        var x6 = px + (pw * i) / 6;
        previewSvgLine(svg, x6, py, x6, py + ph, cyan, 0.28, 0.62);
      }
    } else if (gridId === "rule_of_thirds") {
      previewSvgLine(svg, px + pw / 3, py, px + pw / 3, py + ph, cyan, 0.32, 0.68);
      previewSvgLine(svg, px + (2 * pw) / 3, py, px + (2 * pw) / 3, py + ph, cyan, 0.32, 0.68);
      previewSvgLine(svg, px, py + ph / 3, px + pw, py + ph / 3, cyan, 0.32, 0.68);
      previewSvgLine(svg, px, py + (2 * ph) / 3, px + pw, py + (2 * ph) / 3, cyan, 0.32, 0.68);
    } else if (gridId === "golden_ratio") {
      previewSvgLine(svg, px + pw * 0.382, py, px + pw * 0.382, py + ph, cyan, 0.32, 0.68);
      previewSvgLine(svg, px + pw * 0.618, py, px + pw * 0.618, py + ph, cyan, 0.32, 0.68);
      previewSvgLine(svg, px, py + ph * 0.382, px + pw, py + ph * 0.382, cyan, 0.32, 0.68);
      previewSvgLine(svg, px, py + ph * 0.618, px + pw, py + ph * 0.618, cyan, 0.32, 0.68);
    } else if (gridId === "bento_3x3") {
      for (i = 0; i <= 3; i++) {
        previewSvgLine(svg, px + (pw * i) / 3, py, px + (pw * i) / 3, py + ph, cyan, 0.3, 0.62);
      }
      for (j = 0; j <= 3; j++) {
        previewSvgLine(svg, px, py + (ph * j) / 3, px + pw, py + (ph * j) / 3, cyan, 0.3, 0.62);
      }
    } else if (gridId === "8pt_baseline") {
      for (j = 0; j <= 16; j++) {
        previewSvgLine(svg, px, py + (ph * j) / 16, px + pw, py + (ph * j) / 16, cyan, 0.14, 0.48);
      }
    } else if (gridId === "modular_8") {
      for (i = 0; i <= 8; i++) {
        previewSvgLine(svg, px + (pw * i) / 8, py, px + (pw * i) / 8, py + ph, cyan, 0.18, 0.52);
      }
      for (j = 0; j <= 8; j++) {
        previewSvgLine(svg, px, py + (ph * j) / 8, px + pw, py + (ph * j) / 8, cyan, 0.18, 0.52);
      }
    } else if (gridId === "bento_5x7") {
      for (i = 0; i <= 5; i++) {
        previewSvgLine(svg, px + (pw * i) / 5, py, px + (pw * i) / 5, py + ph, cyan, 0.26, 0.62);
      }
      for (j = 0; j <= 7; j++) {
        previewSvgLine(svg, px, py + (ph * j) / 7, px + pw, py + (ph * j) / 7, cyan, 0.26, 0.62);
      }
    } else {
      for (i = 0; i <= 3; i++) {
        previewSvgLine(svg, px + (pw * i) / 3, py, px + (pw * i) / 3, py + ph, cyan, 0.22, 0.55);
      }
    }
  }

  function previewDrawLayout(svg, page, level) {
    var px = page.px;
    var py = page.py;
    var pw = page.pw;
    var ph = page.ph;
    var m = Math.min(pw, ph) * 0.08;
    var il = px + m;
    var it = py + m;
    var iw = pw - 2 * m;
    var ih = ph - 2 * m;
    var ir = il + iw;
    var ib = it + ih;
    var midY = it + ih / 2;
    var xRThird = il + (2 * iw) / 3;
    var grey = "rgba(72, 72, 78, 0.65)";
    var red = "#dc2846";
    var cyan = "#00c8d4";
    var i;
    var j;

    previewSvgRect(svg, {
      x: px,
      y: py,
      width: pw,
      height: ph,
      fill: "rgba(12, 18, 32, 0.92)",
      stroke: "rgba(122, 143, 163, 0.45)",
      "stroke-width": 0.5,
    });

    if (level === 2) {
      previewSvgRect(svg, {
        x: il,
        y: it,
        width: iw,
        height: ih / 2,
        fill: grey,
      });
    } else if (level === 3) {
      previewSvgRect(svg, {
        x: il,
        y: it,
        width: iw,
        height: ih,
        fill: grey,
      });
    } else if (level === 4) {
      previewSvgRect(svg, {
        x: il,
        y: midY,
        width: iw,
        height: ih / 2,
        fill: grey,
      });
    } else if (level === 5) {
      previewSvgRect(svg, {
        x: il,
        y: it,
        width: iw / 3,
        height: ih,
        fill: grey,
      });
    } else if (level === 6) {
      previewSvgRect(svg, {
        x: xRThird,
        y: it,
        width: iw / 3,
        height: ih,
        fill: grey,
      });
    }

    previewSvgRect(svg, {
      x: il,
      y: it,
      width: iw,
      height: ih,
      fill: "none",
      stroke: red,
      "stroke-width": 0.55,
    });

    for (i = 0; i <= 5; i++) {
      var vx = il + (iw * i) / 5;
      previewSvgLine(svg, vx, it, vx, ib, cyan, 0.2, 0.52);
    }
    for (j = 0; j <= 7; j++) {
      var hy = it + (ih * j) / 7;
      previewSvgLine(svg, il, hy, ir, hy, cyan, 0.2, 0.52);
    }

    previewSvgRect(svg, {
      x: il + iw / 5,
      y: it + ih / 7,
      width: (2 * iw) / 5,
      height: (4 * ih) / 7,
      fill: "rgba(255, 160, 200, 0.42)",
      stroke: "rgba(200, 70, 120, 0.85)",
      "stroke-width": 0.28,
    });
  }

  function renderTemplatePreview() {
    var svg = $("#templatePreviewSvg");
    var cap = $("#templatePreviewCaption");
    if (!svg || !data || !data.paperFormats) {
      return;
    }
    var idx = currentPaperFormatIndex();
    var pf = data.paperFormats[idx];
    if (!pf) {
      return;
    }
    var tid = selectedPaperVariantId;
    previewSvgClear(svg);
    if (!tid) {
      if (cap) {
        cap.textContent = T("preview_select_chip");
      }
      return;
    }
    var page = previewPageRect(pf.slug);
    var variantLabel = "";
    var vi;
    for (vi = 0; vi < pf.variants.length; vi++) {
      if (pf.variants[vi].id === tid) {
        variantLabel = variantLabelI18n(pf.variants[vi]);
        break;
      }
    }
    var gid = gridIdFromGridVariantId(tid);
    if (gid) {
      previewDrawGrid(svg, page, gid);
    } else if (String(tid).indexOf("layout_level") === 0) {
      var lv = layoutLevelFromVariantId(tid);
      previewDrawLayout(svg, page, lv > 0 ? lv : 1);
    } else {
      previewSvgRect(svg, {
        x: page.px,
        y: page.py,
        width: page.pw,
        height: page.ph,
        fill: "rgba(12, 18, 32, 0.92)",
        stroke: "rgba(122, 143, 163, 0.45)",
        "stroke-width": 0.5,
      });
    }
    if (cap) {
      cap.textContent =
        pf.label +
        " — " +
        (variantLabel || tid) +
        T("preview_caption_suffix");
    }
  }

  function renderPaperVariants() {
    var host = $("#paperVariantList");
    if (!host || !data || !data.paperFormats) return;
    var idx = currentPaperFormatIndex();
    var pf = data.paperFormats[idx];
    if (!pf || !pf.variants) return;
    host.innerHTML = "";
    pf.variants.forEach(function (v) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "variant-chip";
      b.setAttribute("aria-pressed", "false");
      b.setAttribute("data-template-id", v.id);
      var tag = document.createElement("span");
      tag.className = "variant-chip__tag";
      tag.textContent = v.tag === "Grid" ? T("tag_grid") : T("tag_layout");
      var lab = document.createElement("span");
      lab.className = "variant-chip__label";
      lab.textContent = variantLabelI18n(v);
      b.appendChild(tag);
      b.appendChild(lab);
      b.addEventListener("click", function () {
        $all("#paperVariantList .variant-chip").forEach(function (x) {
          x.classList.remove("is-selected");
          x.setAttribute("aria-pressed", "false");
        });
        b.classList.add("is-selected");
        b.setAttribute("aria-pressed", "true");
        selectedPaperVariantId = v.id;
        renderTemplatePreview();
      });
      host.appendChild(b);
    });
    var first = host.querySelector(".variant-chip");
    if (first) {
      first.click();
    } else {
      selectedPaperVariantId = null;
      renderTemplatePreview();
    }
  }

  function fillPaperFormatSelect() {
    var sel = $("#paperFormat");
    if (!sel || !data || !data.paperFormats) return;
    var cur = sel.value;
    sel.innerHTML = "";
    data.paperFormats.forEach(function (pf, i) {
      var opt = document.createElement("option");
      opt.value = String(i);
      opt.textContent = paperLine(pf);
      sel.appendChild(opt);
    });
    if (cur !== "" && cur != null) sel.value = cur;
    if (!sel.dataset.bound) {
      sel.dataset.bound = "1";
      sel.addEventListener("change", renderPaperVariants);
    }
    renderPaperVariants();
  }

  function initPaperFormatBlock() {
    var btnNew = $("#btnNewFromPaper");
    var btnBleed = $("#btnPaperBleed");
    if (btnNew && !btnNew.dataset.bound) {
      btnNew.dataset.bound = "1";
      btnNew.addEventListener("click", function () {
        if (!selectedPaperVariantId) return;
        runDispatch("template|" + selectedPaperVariantId, function (r) {
          setStatus(r === "OK" ? T("status_paper_new") : String(r));
        });
      });
    }
    if (btnBleed && !btnBleed.dataset.bound) {
      btnBleed.dataset.bound = "1";
      btnBleed.addEventListener("click", function () {
        if (!selectedPaperVariantId) return;
        runDispatch("bleed_guides|" + selectedPaperVariantId, function (r) {
          setStatus(r === "OK" ? T("status_trim_safe_ok") : String(r));
        });
      });
    }
  }

  function fillStarterThemes() {
    var sel = $("#starterTheme");
    if (!sel) return;
    var prev = sel.value;
    var themes = [
      { id: "cool_summer", key: "theme_cool_summer" },
      { id: "bold_navy", key: "theme_bold_navy" },
      { id: "warm_plum", key: "theme_warm_plum" },
      { id: "mono_wave", key: "theme_mono_wave" },
      { id: "swiss_red", key: "theme_swiss_red" },
      { id: "forest_emerald", key: "theme_forest_emerald" },
      { id: "sunset_orange", key: "theme_sunset_orange" },
      { id: "royal_violet", key: "theme_royal_violet" },
      { id: "minimal_mist", key: "theme_minimal_mist" },
      { id: "desert_sand", key: "theme_desert_sand" },
      { id: "midnight_neo", key: "theme_midnight_neo" },
      { id: "paper_collage", key: "theme_paper_collage" },
      { id: "acid_green", key: "theme_acid_green" },
    ];
    sel.innerHTML = "";
    themes.forEach(function (t) {
      var opt = document.createElement("option");
      opt.value = t.id;
      opt.textContent = T(t.key);
      sel.appendChild(opt);
    });
    var ok = false;
    var ti;
    for (ti = 0; ti < themes.length; ti++) {
      if (themes[ti].id === prev) {
        ok = true;
        break;
      }
    }
    sel.value = ok ? prev : "cool_summer";
  }

  function initStarterKitBlock() {
    fillStarterThemes();
    // #region starter kit preview
    function renderStarterKitPreview(themeId) {
      var svg = $("#starterKitPreviewSvg");
      if (!svg) return;
      var wave = document.getElementById("skWave");
      var blob1 = document.getElementById("skBlob1");
      var blob2 = document.getElementById("skBlob2");
      var bg = document.getElementById("skBg");
      var guidesStroke = document.querySelector("#skGuides rect");
      var guidesLine1 = document.querySelector("#skGuides line");
      var guidesLine2 = document.querySelectorAll("#skGuides line")[1];
      var guidesStrokeColor = "#A78BFA";

      var t = themeId || "cool_summer";
      var p = {
        wave: "#2A9D8F",
        blob1: "#45B7D1",
        blob2: "#A8D5BA",
        bg: "#FFFFFF",
        titleFill: "#111111",
        subtitleFill: "#333333",
        guides: "#A78BFA",
      };

      if (t === "bold_navy") {
        p.bg = "#1A365E";
        p.wave = "#E63946";
        p.blob1 = "#FFFFFF";
        p.blob2 = "#F1B8BD";
        p.titleFill = "#FFFFFF";
        p.subtitleFill = "#E9E9EF";
        p.guides = "#A78BFA";
      } else if (t === "warm_plum") {
        p.bg = "#4A1A42";
        p.wave = "#C91E4A";
        p.blob1 = "#F28C8C";
        p.blob2 = "#F5D35C";
        p.titleFill = "#FFFFFF";
        p.subtitleFill = "#F2F2F6";
        p.guides = "#A78BFA";
      } else if (t === "mono_wave") {
        p.bg = "#FFFFFF";
        p.wave = "#111111";
        p.blob1 = "#CFCFD8";
        p.blob2 = "#98C7FF";
        p.titleFill = "#111111";
        p.subtitleFill = "#333333";
        p.guides = "#A78BFA";
      } else if (t === "swiss_red") {
        p.bg = "#F3F3F0";
        p.wave = "#DC2B3F";
        p.blob1 = "#F2F2F2";
        p.blob2 = "#A78BFA";
        p.titleFill = "#111111";
        p.subtitleFill = "#333333";
        p.guides = "#A78BFA";
      } else if (t === "forest_emerald") {
        p.bg = "#F5FAF7";
        p.wave = "#1AC678";
        p.blob1 = "#A9EBCF";
        p.blob2 = "#2D9B5F";
        p.titleFill = "#111111";
        p.subtitleFill = "#2D2D2D";
        p.guides = "#A78BFA";
      } else if (t === "sunset_orange") {
        p.bg = "#FFF6EC";
        p.wave = "#FF7E18";
        p.blob1 = "#FFB758";
        p.blob2 = "#EC5C34";
        p.titleFill = "#111111";
        p.subtitleFill = "#333333";
        p.guides = "#A78BFA";
      } else if (t === "royal_violet") {
        p.bg = "#371256";
        p.wave = "#BC74FF";
        p.blob1 = "#EBD8FF";
        p.blob2 = "#6ADFFF";
        p.titleFill = "#FFFFFF";
        p.subtitleFill = "#EDEBFA";
        p.guides = "#A78BFA";
      } else if (t === "minimal_mist") {
        p.bg = "#F8F8FC";
        p.wave = "#1CD2FF";
        p.blob1 = "#3BDBFF";
        p.blob2 = "#7B59FF";
        p.titleFill = "#111111";
        p.subtitleFill = "#333333";
        p.guides = "#A78BFA";
      } else if (t === "desert_sand") {
        p.bg = "#F7E9D3";
        p.wave = "#F4A261";
        p.blob1 = "#D4A017";
        p.blob2 = "#F9C74F";
        p.titleFill = "#111111";
        p.subtitleFill = "#3A2A12";
        p.guides = "#A78BFA";
      } else if (t === "midnight_neo") {
        p.bg = "#070A1A";
        p.wave = "#00F0FF";
        p.blob1 = "#7BFFB5";
        p.blob2 = "#BC74FF";
        p.titleFill = "#FFFFFF";
        p.subtitleFill = "#CFE7FF";
        p.guides = "#A78BFA";
      } else if (t === "paper_collage") {
        p.bg = "#FAFAF7";
        p.wave = "#6C8AE4";
        p.blob1 = "#F29D4B";
        p.blob2 = "#8BD3C7";
        p.titleFill = "#111111";
        p.subtitleFill = "#2A2A2A";
        p.guides = "#A78BFA";
      } else if (t === "acid_green") {
        p.bg = "#F0FFF4";
        p.wave = "#39FF14";
        p.blob1 = "#A6FF7A";
        p.blob2 = "#00B3FF";
        p.titleFill = "#0B1B0B";
        p.subtitleFill = "#1F1F1F";
        p.guides = "#A78BFA";
      }

      if (bg) bg.setAttribute("fill", p.bg);
      if (wave) wave.setAttribute("fill", p.wave);
      if (blob1) blob1.setAttribute("fill", p.blob1);
      if (blob2) blob2.setAttribute("fill", p.blob2);
      if (guidesStroke) guidesStroke.setAttribute("stroke", p.guides);
      if (guidesLine1) guidesLine1.setAttribute("stroke", p.guides);
      if (guidesLine2) guidesLine2.setAttribute("stroke", p.guides);
      var title = document.getElementById("skTitle");
      var subtitle = document.getElementById("skSubtitle");
      if (title) {
        title.textContent = T("sk_svg_title");
        title.setAttribute("fill", p.titleFill);
      }
      if (subtitle) {
        subtitle.textContent = T("sk_svg_subtitle");
        subtitle.setAttribute("fill", p.subtitleFill);
      }
    }
    // #endregion

    // Initial render and change wiring
    try {
      var curTheme = $("#starterTheme") && $("#starterTheme").value
        ? $("#starterTheme").value
        : "cool_summer";
      renderStarterKitPreview(curTheme);
    } catch (ePrev) {}

    var themeSel = $("#starterTheme");
    if (themeSel && !themeSel.dataset.boundPreview) {
      themeSel.dataset.boundPreview = "1";
      themeSel.addEventListener("change", function () {
        renderStarterKitPreview(themeSel.value || "cool_summer");
      });
    }

    var btn = $("#btnStarterCreate");
    if (btn && !btn.dataset.bound) {
      btn.dataset.bound = "1";
      btn.addEventListener("click", function () {
        if (!selectedPaperVariantId) {
          setStatus(T("preview_select_chip"));
          return;
        }
        var themeSel = $("#starterTheme");
        var theme = themeSel && themeSel.value ? themeSel.value : "cool_summer";
        var lg = window.GridSeedI18n && window.GridSeedI18n.getLang ? window.GridSeedI18n.getLang() : "en";

        setStatus(T("status_starter_applying", { theme: themeLabelForUi(theme) }));
        runDispatch(
          "starterkit|" + selectedPaperVariantId + "|" + theme + "|" + lg,
          function (r1) {
            var s1 = String(r1);

            if (s1 !== "OK") {
              setStatus(s1 === "OK" ? T("status_starter_ok") : s1);
              return;
            }
            // #region combined create: Starter kit + Layout & Amount
            if (typeof window.gridseedBuildLayoutPlanPayload === "function") {
              var rest = window.gridseedBuildLayoutPlanPayload(selectedPaperVariantId, true);
              if (rest) {

                setStatus(T("status_layout_applying"));
                runDispatch("layoutplan|" + rest, function (r2) {
                  var s2 = String(r2);

                  if (s2 === "OK") setStatus(T("status_starter_ok"));
                  else setStatus(s2);
                });
              } else {
                setStatus(T("status_layoutplan_err"));
              }
            } else {
              setStatus(T("status_starter_ok"));
            }
            // #endregion
          }
        );
      });
    }
  }

  function initGridComposer() {
    var root = $("#gridComposerRoot");
    if (!root || root.dataset.bound) return;
    root.dataset.bound = "1";

    var state = {
      themeId: "",
      sizeId: "a4",
      orientation: "landscape",
      customW: 1200,
      customH: 1200,
      layoutId: "12col_web",
      imgCount: 4,
      imgScale: 100,
      imgGap: 0,
      seed: 1,
      bleedMm: 3,
      safeMm: 10,
    };

    function defaultBleedMmForSize(sizeId) {
      if (sizeId === "instagram" || sizeId === "custom") return 0;
      if (PAPER_IN[sizeId]) return 3.175;
      return 3;
    }
    function defaultSafeMmForSize(sizeId) {
      if (sizeId === "instagram" || sizeId === "custom") return 0;
      if (sizeId === "a0" || sizeId === "a1") return 15;
      if (sizeId === "a2") return 12;
      if (sizeId === "a3" || sizeId === "a4" || sizeId === "b2") return 10;
      if (sizeId === "a5" || sizeId === "b1") return 8;
      if (PAPER_IN[sizeId]) return 12.7;
      return 10;
    }
    function syncBleedInputsFromState() {
      var bm = $("#gcBleedMm");
      var sm = $("#gcSafeMm");
      if (bm) bm.value = String(state.bleedMm);
      if (sm) sm.value = String(state.safeMm);
    }
    function applyBleedDefaultsForPaper() {
      state.bleedMm = defaultBleedMmForSize(state.sizeId);
      state.safeMm = defaultSafeMmForSize(state.sizeId);
      syncBleedInputsFromState();
    }

    var THEMES = [
      { id: "cool_summer", label: "Polaroid" },
      { id: "bold_navy", label: "Film Roll" },
      { id: "minimal_mist", label: "Minimal" },
      { id: "warm_plum", label: "Vintage" },
      { id: "midnight_neo", label: "Neon" },
      { id: "paper_collage", label: "Paper Collage" },
      { id: "forest_emerald", label: "Modern Retro" },
      { id: "sunset_orange", label: "Sunset" },
      { id: "royal_violet", label: "Royal" },
      { id: "acid_green", label: "Cyber" },
      { id: "swiss_red", label: "Swiss" },
      { id: "mono_wave", label: "Monochrome" },
      { id: "desert_sand", label: "Desert" },
    ];
    var LAYOUTS = [
      { id: "12col_web", label: "12-column web", cap: 12 },
      { id: "6col_editorial", label: "6-column editorial", cap: 6 },
      { id: "rule_of_thirds", label: "Rule of thirds", cap: 9 },
      { id: "golden_ratio", label: "Golden ratio", cap: 4 },
      { id: "modular_8", label: "Modular scale (8)", cap: 8 },
      { id: "bento_3x3", label: "Bento 3x3", cap: 9 },
      { id: "masonry", label: "Masonry / Pinterest", cap: 16 },
    ];
    var SIZE_TO_TEMPLATE = {
      instagram: "grid_ig_square_rule_of_thirds",
    };
    var PAPER_MM = {
      a0: [841, 1189],
      a1: [594, 841],
      a2: [420, 594],
      a3: [297, 420],
      a4: [210, 297],
      a5: [148, 210],
      b1: [707, 1000],
      b2: [500, 707],
    };
    var PAPER_IN = {
      letter: [8.5, 11],
      tabloid: [11, 17],
      poster_24x36: [24, 36],
      poster_18x24: [18, 24],
    };
    var COUNT_CHOICES = [4, 6, 8, 9, 12, 16];
    var PURPOSES = [
      { id: "all", label: "All purposes" },
      { id: "social", label: "Social media" },
      { id: "poster", label: "Poster / campaign" },
      { id: "editorial", label: "Editorial" },
      { id: "product", label: "Product showcase" },
      { id: "presentation", label: "Presentation slide" },
    ];
    var PRESETS = [
      { id: "social_neon", purpose: "social", name: "Neon Launch", themeId: "midnight_neo", sizeId: "instagram", layoutId: "bento_3x3", imgCount: 9, imgScale: 98, imgGap: 4 },
      { id: "social_polaroid", purpose: "social", name: "Polaroid Story", themeId: "cool_summer", sizeId: "instagram", layoutId: "rule_of_thirds", imgCount: 6, imgScale: 94, imgGap: 8 },
      { id: "poster_vintage", purpose: "poster", name: "Vintage Campaign", themeId: "warm_plum", sizeId: "a2", layoutId: "modular_8", imgCount: 8, imgScale: 102, imgGap: 3 },
      { id: "poster_swiss", purpose: "poster", name: "Swiss Bold", themeId: "swiss_red", sizeId: "a3", layoutId: "12col_web", imgCount: 12, imgScale: 100, imgGap: 2 },
      { id: "editorial_minimal", purpose: "editorial", name: "Minimal Editorial", themeId: "minimal_mist", sizeId: "a4", layoutId: "6col_editorial", imgCount: 6, imgScale: 92, imgGap: 10 },
      { id: "editorial_collage", purpose: "editorial", name: "Paper Feature", themeId: "paper_collage", sizeId: "tabloid", layoutId: "masonry", imgCount: 9, imgScale: 96, imgGap: 5 },
      { id: "product_modern", purpose: "product", name: "Modern Product Grid", themeId: "forest_emerald", sizeId: "instagram", layoutId: "golden_ratio", imgCount: 4, imgScale: 108, imgGap: 0 },
      { id: "presentation_clean", purpose: "presentation", name: "Clean Deck", themeId: "mono_wave", sizeId: "letter", layoutId: "6col_editorial", imgCount: 6, imgScale: 97, imgGap: 5 },
    ];

    function themeStyle(themeId) {
      var map = {
        cool_summer: { bg: "#fff", fg: "#2A9D8F", ac: "#A8D5BA" },
        bold_navy: { bg: "#1A365D", fg: "#E63946", ac: "#fff" },
        warm_plum: { bg: "#4A1942", fg: "#C9184A", ac: "#FFB703" },
        mono_wave: { bg: "#ffffff", fg: "#111111", ac: "#dddddd" },
        swiss_red: { bg: "#f7f7f7", fg: "#d90429", ac: "#1f1f1f" },
        forest_emerald: { bg: "#F3FAF2", fg: "#0F6B34", ac: "#C5A357" },
        sunset_orange: { bg: "#FFF4EC", fg: "#E76F51", ac: "#D9A679" },
        royal_violet: { bg: "#F4F0FF", fg: "#6D28D9", ac: "#BFC7D5" },
        minimal_mist: { bg: "#F4F6F8", fg: "#667085", ac: "#CBD5E1" },
        desert_sand: { bg: "#FFF7E8", fg: "#C7863A", ac: "#C96F4A" },
        midnight_neo: { bg: "#0A1026", fg: "#00E5FF", ac: "#8B5CF6" },
        paper_collage: { bg: "#EEF4FF", fg: "#4A6FA5", ac: "#E29A5A" },
        acid_green: { bg: "#F0FFF4", fg: "#39FF14", ac: "#00B3FF" },
      };
      return map[themeId] || map.cool_summer;
    }

    function makeThemeThumb(themeId) {
      var c = themeStyle(themeId);
      var motif = "";
      if (themeId === "bold_navy" || themeId === "swiss_red") {
        motif =
          '<rect x="8" y="10" width="64" height="10" fill="' +
          c.fg +
          '" opacity="0.9"/><rect x="8" y="24" width="30" height="20" fill="' +
          c.ac +
          '" opacity="0.75"/>';
      } else if (themeId === "paper_collage" || themeId === "minimal_mist") {
        motif =
          '<rect x="12" y="10" width="24" height="16" rx="2" fill="' +
          c.ac +
          '" opacity="0.75"/><rect x="40" y="12" width="30" height="20" rx="2" fill="' +
          c.fg +
          '" opacity="0.55"/><rect x="16" y="30" width="20" height="16" rx="2" fill="' +
          c.fg +
          '" opacity="0.42"/>';
      } else if (themeId === "midnight_neo" || themeId === "acid_green") {
        motif =
          '<circle cx="26" cy="24" r="10" fill="' +
          c.ac +
          '" opacity="0.8"/><rect x="38" y="14" width="30" height="18" rx="4" fill="' +
          c.fg +
          '" opacity="0.75"/>';
      } else {
        motif =
          '<path d="M8 34 C 20 26, 30 30, 42 24 C 55 18, 66 24, 72 28 L 72 38 L 8 38 Z" fill="' +
          c.fg +
          '" opacity="0.85"/>';
      }
      return (
        '<svg viewBox="0 0 80 80" width="80" height="80" xmlns="http://www.w3.org/2000/svg">' +
        '<rect x="0" y="0" width="80" height="80" rx="8" fill="' + c.bg + '"/>' +
        '<rect x="8" y="8" width="64" height="64" fill="none" stroke="#6aa6ff" stroke-width="1.5" stroke-dasharray="4 3"/>' +
        motif +
        '<rect x="10" y="43" width="60" height="26" rx="4" fill="' + c.fg + '" opacity="0.68"/>' +
        '<circle cx="24" cy="54" r="8" fill="' + c.ac + '" opacity="0.8"/>' +
        '<circle cx="58" cy="57" r="6" fill="' + c.ac + '" opacity="0.72"/>' +
        "</svg>"
      );
    }

    function renderThemes() {
      var host = $("#gcThemeStrip");
      if (!host) return;
      host.innerHTML = "";
      THEMES.forEach(function (th) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "gc-theme-card" + (state.themeId === th.id ? " is-selected" : "");
        btn.setAttribute("role", "option");
        btn.setAttribute("aria-selected", state.themeId === th.id ? "true" : "false");
        btn.innerHTML =
          '<div class="gc-theme-thumb">' +
          makeThemeThumb(th.id) +
          '</div><div class="gc-theme-name">' +
          composerThemeShort(th.id) +
          "</div>";
        btn.addEventListener("click", function () {
          state.themeId = th.id;
          renderThemes();
          updateCreateState();
        });
        host.appendChild(btn);
      });
    }

    function ensureCountAllowed() {
      var i;
      var cap = 16;
      for (i = 0; i < LAYOUTS.length; i++) {
        if (LAYOUTS[i].id === state.layoutId) {
          cap = LAYOUTS[i].cap;
          break;
        }
      }
      if (state.imgCount > cap) state.imgCount = cap;
      var valid = false;
      for (i = 0; i < COUNT_CHOICES.length; i++) {
        if (COUNT_CHOICES[i] === state.imgCount && state.imgCount <= cap) {
          valid = true;
          break;
        }
      }
      if (!valid) {
        for (i = COUNT_CHOICES.length - 1; i >= 0; i--) {
          if (COUNT_CHOICES[i] <= cap) {
            state.imgCount = COUNT_CHOICES[i];
            break;
          }
        }
      }
    }

    function getComposerLayoutCells(layoutId) {
      if (layoutId === "masonry") {
        return [
          [0.0, 0.0, 0.29, 0.28],
          [0.33, 0.0, 0.30, 0.42],
          [0.66, 0.0, 0.34, 0.22],
          [0.0, 0.33, 0.27, 0.24],
          [0.66, 0.27, 0.34, 0.37],
          [0.30, 0.48, 0.32, 0.20],
          [0.0, 0.62, 0.24, 0.31],
          [0.30, 0.71, 0.32, 0.20],
          [0.66, 0.69, 0.34, 0.22],
        ];
      }
      var rows = 2;
      var cols = 2;
      if (layoutId === "12col_web") {
        rows = 1;
        cols = 12;
      } else if (layoutId === "6col_editorial") {
        rows = 1;
        cols = 6;
      } else if (layoutId === "rule_of_thirds") {
        rows = 3;
        cols = 3;
      } else if (layoutId === "golden_ratio") {
        return [
          [0.0, 0.0, 0.62, 0.62],
          [0.64, 0.0, 0.36, 0.38],
          [0.64, 0.40, 0.36, 0.22],
          [0.0, 0.64, 1.0, 0.36],
        ];
      } else if (layoutId === "modular_8") {
        rows = 2;
        cols = 4;
      } else if (layoutId === "bento_3x3") {
        rows = 3;
        cols = 3;
      }
      var cells = [];
      var gap = 0.02;
      var cw = (1 - gap * (cols - 1)) / cols;
      var ch = (1 - gap * (rows - 1)) / rows;
      var r;
      var c;
      for (r = 0; r < rows; r++) {
        for (c = 0; c < cols; c++) {
          cells.push([c * (cw + gap), r * (ch + gap), cw, ch]);
        }
      }
      return cells;
    }

    function layoutIconHtml(layoutId) {
      var slots = 8;
      var i;
      var html = '<span class="gc-layout-icon">';
      var active = getComposerLayoutCells(layoutId).length;
      for (i = 0; i < slots; i++) {
        var op = "0.25";
        if (i < Math.min(active, slots)) op = i % 3 === 0 ? "0.95" : "0.66";
        html += '<i style="opacity:' + op + '"></i>';
      }
      html += "</span>";
      return html;
    }

    function renderLayouts() {
      var host = $("#gcLayoutGrid");
      if (!host) return;
      host.innerHTML = "";
      LAYOUTS.forEach(function (ly) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "gc-layout-btn" + (state.layoutId === ly.id ? " is-selected" : "");
        b.innerHTML = layoutIconHtml(ly.id) + composerLayoutLabel(ly.id);
        b.addEventListener("click", function () {
          state.layoutId = ly.id;
          renderLayouts();
          syncAmountOptions();
          updateCreateState();
        });
        host.appendChild(b);
      });
    }

    function syncAmountOptions() {
      var sel = $("#gcImageCount");
      if (!sel) return;
      var cap = 16;
      var i;
      for (i = 0; i < LAYOUTS.length; i++) {
        if (LAYOUTS[i].id === state.layoutId) {
          cap = LAYOUTS[i].cap;
          break;
        }
      }
      sel.innerHTML = "";
      COUNT_CHOICES.forEach(function (n) {
        if (n <= cap) {
          var o = document.createElement("option");
          o.value = String(n);
          o.textContent = String(n);
          sel.appendChild(o);
        }
      });
      ensureCountAllowed();
      sel.value = String(state.imgCount);
      if (!sel.value && sel.options[0]) sel.value = sel.options[0].value;
      state.imgCount = parseInt(sel.value, 10) || state.imgCount || 4;
    }

    function reflectStateControls() {
      var w = $("#gcCustomW");
      var h = $("#gcCustomH");
      var cnt = $("#gcImageCount");
      var sc = $("#gcImageScale");
      var gp = $("#gcImageGap");
      if (w) w.value = String(state.customW);
      if (h) h.value = String(state.customH);
      if (cnt) cnt.value = String(state.imgCount);
      if (sc) sc.value = String(state.imgScale);
      if (gp) gp.value = String(state.imgGap);
      syncBleedInputsFromState();
      setSizeUI();
      renderThemes();
      renderLayouts();
      syncAmountOptions();
      updateCreateState();
    }

    function applyPreset(p) {
      state.themeId = p.themeId;
      state.sizeId = p.sizeId;
      state.layoutId = p.layoutId;
      state.imgCount = p.imgCount;
      state.imgScale = p.imgScale;
      state.imgGap = p.imgGap;
      state.bleedMm = p.bleedMm != null ? p.bleedMm : defaultBleedMmForSize(p.sizeId);
      state.safeMm = p.safeMm != null ? p.safeMm : defaultSafeMmForSize(p.sizeId);
      reflectStateControls();
      drawPreview();
      setStatus(T("status_preset_applied", { name: presetDisplayName(p) }));
    }

    function fillGcPurposeOptions() {
      var ps = $("#gcPurposeSelect");
      if (!ps) return;
      var cur = ps.value || "all";
      ps.innerHTML = "";
      PURPOSES.forEach(function (p) {
        var o = document.createElement("option");
        o.value = p.id;
        o.textContent = T("gc_purpose_" + p.id);
        ps.appendChild(o);
      });
      ps.value = PURPOSES.some(function (x) {
        return x.id === cur;
      })
        ? cur
        : "all";
    }

    function renderPurposeAndPresets() {
      var ps = $("#gcPurposeSelect");
      var list = $("#gcPresetList");
      if (!ps || !list) return;
      fillGcPurposeOptions();
      var purpose = ps.value || "all";
      list.innerHTML = "";
      PRESETS.forEach(function (p) {
        if (purpose !== "all" && p.purpose !== purpose) return;
        var b = document.createElement("button");
        b.type = "button";
        b.className = "gc-preset-card";
        b.innerHTML =
          "<strong>" +
          presetDisplayName(p) +
          "</strong><span>" +
          T("gc_preset_meta", {
            theme: composerThemeShort(p.themeId),
            layout: composerLayoutLabel(p.layoutId),
            n: p.imgCount,
          }) +
          "</span>";
        b.addEventListener("click", function () {
          applyPreset(p);
        });
        list.appendChild(b);
      });
      if (!ps.dataset.changeBound) {
        ps.dataset.changeBound = "1";
        ps.addEventListener("change", renderPurposeAndPresets);
      }
    }

    function setSizeUI() {
      var sel = $("#gcPaperSize");
      if (sel) sel.value = state.sizeId;
      var oBtn = $("#gcOrientationToggle");
      if (oBtn) {
        oBtn.textContent =
          state.orientation === "landscape" ? T("gc_orientation_landscape") : T("gc_orientation_portrait");
      }
      var isCustom = state.sizeId === "custom";
      var w = $("#gcCustomW");
      var h = $("#gcCustomH");
      if (w) w.disabled = !isCustom;
      if (h) h.disabled = !isCustom;
    }

    function currentThemeId() {
      return state.themeId || "cool_summer";
    }

    /** Effective canvas size in px (matches getTemplateId / Illustrator artboard). */
    function getComposerCanvasPx() {
      if (state.sizeId === "custom") {
        var cw = Math.max(200, parseInt($("#gcCustomW").value, 10) || 1200);
        var ch = Math.max(200, parseInt($("#gcCustomH").value, 10) || 1200);
        state.customW = cw;
        state.customH = ch;
        return { w: cw, h: ch };
      }
      if (SIZE_TO_TEMPLATE[state.sizeId]) {
        if (state.sizeId === "instagram") return { w: 1080, h: 1080 };
        return { w: 1080, h: 1080 };
      }
      var dims;
      if (PAPER_MM[state.sizeId]) {
        dims = PAPER_MM[state.sizeId].slice();
      } else if (PAPER_IN[state.sizeId]) {
        dims = [Math.round(PAPER_IN[state.sizeId][0] * 72), Math.round(PAPER_IN[state.sizeId][1] * 72)];
      }
      if (dims) {
        var w2 = dims[0];
        var h2 = dims[1];
        if (PAPER_MM[state.sizeId]) {
          w2 = Math.round(dims[0] * 2.83464566929134);
          h2 = Math.round(dims[1] * 2.83464566929134);
        }
        if (state.orientation === "landscape" && h2 > w2) {
          var t = w2;
          w2 = h2;
          h2 = t;
        }
        if (state.orientation === "portrait" && w2 > h2) {
          var t2 = w2;
          w2 = h2;
          h2 = t2;
        }
        return { w: w2, h: h2 };
      }
      return { w: 1200, h: 1600 };
    }

    function drawPreview() {
      var wrap = $("#gcPreviewWrap");
      var svg = $("#gcPreviewSvg");
      if (!svg || !wrap) return;
      wrap.hidden = false;
      var t = themeStyle(currentThemeId());
      var w = 320;
      var h = 220;
      var m = 12;
      var innerW = w - 2 * m;
      var innerH = h - 2 * m;
      var out = [];
      out.push('<rect x="0" y="0" width="' + w + '" height="' + h + '" rx="10" fill="' + t.bg + '"/>');
      out.push('<rect x="' + m + '" y="' + m + '" width="' + innerW + '" height="' + innerH + '" fill="none" stroke="#58b3ff" stroke-width="1.6" stroke-dasharray="5 4"/>');
      if (state.themeId === "bold_navy" || state.themeId === "swiss_red") {
        out.push('<rect x="' + m + '" y="' + m + '" width="' + innerW + '" height="' + (innerH * 0.12) + '" fill="' + t.fg + '" opacity="0.86"/>');
        out.push('<rect x="' + m + '" y="' + (m + innerH * 0.16) + '" width="' + (innerW * 0.38) + '" height="' + (innerH * 0.24) + '" fill="' + t.ac + '" opacity="0.44"/>');
      } else if (state.themeId === "paper_collage" || state.themeId === "minimal_mist") {
        out.push('<rect x="' + (m + innerW * 0.04) + '" y="' + (m + innerH * 0.05) + '" width="' + (innerW * 0.3) + '" height="' + (innerH * 0.18) + '" fill="' + t.ac + '" opacity="0.55"/>');
        out.push('<rect x="' + (m + innerW * 0.4) + '" y="' + (m + innerH * 0.08) + '" width="' + (innerW * 0.28) + '" height="' + (innerH * 0.22) + '" fill="' + t.fg + '" opacity="0.4"/>');
        out.push('<rect x="' + (m + innerW * 0.71) + '" y="' + (m + innerH * 0.05) + '" width="' + (innerW * 0.24) + '" height="' + (innerH * 0.16) + '" fill="' + t.ac + '" opacity="0.48"/>');
      } else if (state.themeId === "midnight_neo" || state.themeId === "acid_green") {
        out.push('<circle cx="' + (m + innerW * 0.18) + '" cy="' + (m + innerH * 0.16) + '" r="' + (innerW * 0.09) + '" fill="' + t.ac + '" opacity="0.72"/>');
        out.push('<rect x="' + (m + innerW * 0.3) + '" y="' + (m + innerH * 0.08) + '" width="' + (innerW * 0.32) + '" height="' + (innerH * 0.18) + '" rx="10" fill="' + t.fg + '" opacity="0.66"/>');
      } else {
        out.push('<path d="M' + m + " " + (m + innerH * 0.35) + " C " + (m + innerW * 0.2) + " " + (m + innerH * 0.28) + ", " + (m + innerW * 0.35) + " " + (m + innerH * 0.32) + ", " + (m + innerW * 0.52) + " " + (m + innerH * 0.24) + " C " + (m + innerW * 0.72) + " " + (m + innerH * 0.16) + ", " + (m + innerW * 0.9) + " " + (m + innerH * 0.24) + ", " + (m + innerW) + " " + (m + innerH * 0.28) + ' L ' + (m + innerW) + " " + (m + innerH * 0.42) + " L " + m + " " + (m + innerH * 0.42) + ' Z" fill="' + t.fg + '" opacity="0.72"/>');
      }
      out.push('<rect x="' + m + '" y="' + (h * 0.58) + '" width="' + innerW + '" height="' + (h * 0.32) + '" fill="' + t.fg + '" opacity="0.62"/>');
      var n = Math.max(1, state.imgCount);
      var cells = getComposerLayoutCells(state.layoutId);
      function tunedCell(cell) {
        var x = m + innerW * cell[0];
        var y = m + innerH * cell[1];
        var w0 = innerW * cell[2];
        var h0 = innerH * cell[3];
        var scale = Math.max(0.6, Math.min(1.15, state.imgScale / 100));
        var gapMul = Math.max(0, Math.min(0.3, state.imgGap / 100));
        var w = w0 * scale * (1 - gapMul);
        var h = h0 * scale * (1 - gapMul);
        return {
          x: x + (w0 - w) / 2,
          y: y + (h0 - h) / 2,
          w: w,
          h: h,
        };
      }
      var i;
      for (i = 0; i < Math.min(n, cells.length); i++) {
        var c = cells[i];
        var tc = tunedCell(c);
        out.push(
          '<rect x="' +
            tc.x +
            '" y="' +
            tc.y +
            '" width="' +
            tc.w +
            '" height="' +
            tc.h +
            '" fill="rgba(255,255,255,0.12)" stroke="' +
            t.ac +
            '" stroke-width="1.1"/>'
        );
      }
      svg.innerHTML = out.join("");
    }

    function updateCreateState() {
      var btn = $("#gcCreateBtn");
      if (!btn) return;
      btn.disabled = !state.themeId;
    }

    function getTemplateId() {
      if (state.sizeId === "custom") {
        var d = getComposerCanvasPx();
        return "custom_px_" + d.w + "_" + d.h;
      }
      if (SIZE_TO_TEMPLATE[state.sizeId]) return SIZE_TO_TEMPLATE[state.sizeId];
      var d2 = getComposerCanvasPx();
      return "custom_px_" + d2.w + "_" + d2.h;
    }

    function placeOnArtboard() {
      var lg = window.GridSeedI18n && window.GridSeedI18n.getLang ? window.GridSeedI18n.getLang() : "en";
      var templateId = getTemplateId();
      var payload =
        "composegrid|" +
        templateId +
        "|" +
        currentThemeId() +
        "|" +
        lg +
        "|" +
        state.layoutId +
        "|" +
        String(state.imgCount) +
        "|" +
        String(state.imgScale) +
        "|" +
        String(state.imgGap) +
        "|" +
        String(state.bleedMm) +
        "|" +
        String(state.safeMm);
      runDispatch(payload, function (r) {
        setStatus(r === "OK" ? T("gc_status_placed_ok") : String(r));
      });
    }

    function downloadPreviewPng() {
      var svg = $("#gcPreviewSvg");
      if (!svg) return;
      var xml = new XMLSerializer().serializeToString(svg);
      var blob = new Blob([xml], { type: "image/svg+xml;charset=utf-8" });
      var url = URL.createObjectURL(blob);
      var img = new Image();
      img.onload = function () {
        var c = document.createElement("canvas");
        c.width = 1280;
        c.height = 880;
        var ctx = c.getContext("2d");
        ctx.fillStyle = "#0b1220";
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.drawImage(img, 0, 0, c.width, c.height);
        URL.revokeObjectURL(url);
        var a = document.createElement("a");
        a.download = "gridseed-preview.png";
        a.href = c.toDataURL("image/png");
        a.click();
      };
      img.src = url;
    }

    renderThemes();
    renderLayouts();
    syncAmountOptions();
    setSizeUI();
    updateCreateState();
    renderPurposeAndPresets();

    var paperSel = $("#gcPaperSize");
    if (paperSel) {
      paperSel.addEventListener("change", function () {
        state.sizeId = paperSel.value || "a4";
        setSizeUI();
        applyBleedDefaultsForPaper();
        if (!$("#gcPreviewWrap").hidden) drawPreview();
      });
    }
    var oriBtn = $("#gcOrientationToggle");
    if (oriBtn) {
      oriBtn.addEventListener("click", function () {
        state.orientation = state.orientation === "landscape" ? "portrait" : "landscape";
        setSizeUI();
        if (!$("#gcPreviewWrap").hidden) drawPreview();
      });
    }
    var countSel = $("#gcImageCount");
    if (countSel) {
      countSel.addEventListener("change", function () {
        state.imgCount = parseInt(countSel.value, 10) || 4;
        if (!$("#gcPreviewWrap").hidden) drawPreview();
      });
    }
    var scaleSel = $("#gcImageScale");
    if (scaleSel) {
      scaleSel.addEventListener("input", function () {
        state.imgScale = parseInt(scaleSel.value, 10) || 100;
        if (!$("#gcPreviewWrap").hidden) drawPreview();
      });
    }
    var gapSel = $("#gcImageGap");
    if (gapSel) {
      gapSel.addEventListener("input", function () {
        state.imgGap = parseInt(gapSel.value, 10) || 0;
        if (!$("#gcPreviewWrap").hidden) drawPreview();
      });
    }
    var cw = $("#gcCustomW");
    var ch = $("#gcCustomH");
    if (cw) {
      cw.addEventListener("input", function () {
        state.customW = parseInt(cw.value, 10) || 1200;
        if (!$("#gcPreviewWrap").hidden) drawPreview();
      });
    }
    if (ch) {
      ch.addEventListener("input", function () {
        state.customH = parseInt(ch.value, 10) || 1200;
        if (!$("#gcPreviewWrap").hidden) drawPreview();
      });
    }
    var bleedIn = $("#gcBleedMm");
    if (bleedIn) {
      bleedIn.addEventListener("input", function () {
        var v = parseFloat(bleedIn.value);
        state.bleedMm = isNaN(v) || v < 0 ? 0 : v;
      });
    }
    var safeIn = $("#gcSafeMm");
    if (safeIn) {
      safeIn.addEventListener("input", function () {
        var v2 = parseFloat(safeIn.value);
        state.safeMm = isNaN(v2) || v2 < 0 ? 0 : v2;
      });
    }

    var btnCreate = $("#gcCreateBtn");
    if (btnCreate) {
      btnCreate.addEventListener("click", function () {
        state.seed += 1;
        drawPreview();
        setStatus(T("gc_status_preview_generated"));
      });
    }
    var btnPlace = $("#gcPlaceBtn");
    if (btnPlace) btnPlace.addEventListener("click", placeOnArtboard);
    var btnReg = $("#gcRegenBtn");
    if (btnReg) {
      btnReg.addEventListener("click", function () {
        state.seed += 1;
        drawPreview();
        placeOnArtboard();
      });
    }
    var btnDl = $("#gcDownloadBtn");
    if (btnDl) btnDl.addEventListener("click", downloadPreviewPng);

    drawPreview();

    window.__gridseedComposerLangRefresh = function () {
      var r = $("#gridComposerRoot");
      if (!r || !r.dataset.bound) return;
      fillGcPurposeOptions();
      renderPurposeAndPresets();
      renderThemes();
      renderLayouts();
      syncAmountOptions();
      setSizeUI();
      drawPreview();
    };
  }

  function initLayoutPlanCreate() {
    var btn = $("#btnLayoutPlanCreate");
    if (!btn || btn.dataset.bound) {
      return;
    }
    btn.dataset.bound = "1";
    btn.addEventListener("click", function () {
      if (!selectedPaperVariantId) {
        setStatus(T("preview_select_chip"));
        return;
      }
      if (typeof window.gridseedBuildLayoutPlanPayload !== "function") {
        setStatus(T("status_layoutplan_err"));
        return;
      }
      var rest = window.gridseedBuildLayoutPlanPayload(selectedPaperVariantId);
      if (!rest) {
        setStatus(T("status_layoutplan_err"));
        return;
      }
      runDispatch("layoutplan|" + rest, function (r) {
        setStatus(r === "OK" ? T("status_layoutplan_ok") : String(r));
      });
    });
  }

  function renderSizes() {
    var host = $("#sizeQuickList");
    if (!host || !data || !data.sizePresets) return;
    host.innerHTML = "";
    data.sizePresets.forEach(function (p) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "chip";
      b.textContent = sizePresetLabel(p);
      b.addEventListener("click", function () {
        runDispatch("template|" + p.id, function (r) {
          setStatus(r === "OK" ? T("status_new_doc_ok", { label: sizePresetLabel(p) }) : String(r));
        });
      });
      host.appendChild(b);
    });
  }

  function applyGridPreset(g, onDone) {
    var clear = $("#chkClearGuides").checked;
    var payload = "grid|" + g.id + "|" + (clear ? "1" : "0");
    runDispatch(payload, function (r) {
      var s = String(r);
      if (onDone) onDone(s);
    });
  }

  function renderGrids() {
    var host = $("#gridList");
    if (!host || !data || !data.grids) return;
    host.innerHTML = "";
    data.grids.forEach(function (g) {
      var row = document.createElement("div");
      row.className = "grid-row";
      row.setAttribute("title", T("grid_row_click_hint"));
      row.innerHTML =
        '<div class="grid-row-main">' +
        '<span class="grid-name"></span>' +
        '<button type="button" class="btn small js-apply-grid"></button>' +
        '<button type="button" class="btn small ghost js-explain"></button>' +
        "</div>" +
        '<p class="grid-explain is-hidden"></p>';
      row.querySelector(".grid-name").textContent = gridLabel(g);
      row.querySelector(".js-apply-grid").textContent = T("grid_apply");
      row.querySelector(".js-explain").textContent = T("grid_explain");
      var explainEl = row.querySelector(".grid-explain");
      explainEl.textContent = gridExplain(g);
      explainEl.addEventListener("click", function (ev) {
        ev.stopPropagation();
      });
      row.querySelector(".js-explain").addEventListener("click", function (ev) {
        ev.stopPropagation();
        explainEl.classList.toggle("is-hidden");
      });
      function finishGridApply(s) {
        if (s.indexOf("ERR:no_document") === 0) {
          setStatus(T("ctx_no_doc"));
        } else if (s.indexOf("ERR") === 0) {
          setStatus(s + T("status_grid_err"));
        } else {
          setStatus(T("status_grid_ok", { name: gridLabel(g) }));
          refreshGridContext();
        }
      }
      row.querySelector(".js-apply-grid").addEventListener("click", function (ev) {
        ev.stopPropagation();
        setStatus(
          T("status_grid_applying", { name: gridLabel(g) })
        );
        applyGridPreset(g, finishGridApply);
      });
      row.addEventListener("click", function () {
        setStatus(T("status_grid_applying", { name: gridLabel(g) }));
        applyGridPreset(g, finishGridApply);
      });
      host.appendChild(row);
    });
  }

  function renderTips() {
    var host = $("#tipList");
    if (!host || !data || !data.tips) return;
    host.innerHTML = "";
    var lang = window.GridSeedI18n && window.GridSeedI18n.getLang ? window.GridSeedI18n.getLang() : "en";
    var tipsZh = window.GridSeedI18n && window.GridSeedI18n.tipsForLang ? window.GridSeedI18n.tipsForLang("zh") : null;
    data.tips.forEach(function (tip, idx) {
      var block = document.createElement("article");
      block.className = "tip";
      block.innerHTML =
        '<h3 class="tip-title"></h3><p class="tip-body"></p>';
      var tzh = tipsZh && tipsZh[idx];
      block.querySelector(".tip-title").textContent = lang === "zh" && tzh ? tzh.title : tip.title;
      block.querySelector(".tip-body").textContent = lang === "zh" && tzh ? tzh.body : tip.body;
      host.appendChild(block);
    });
  }

  function currentCategoryId() {
    var sel = $("#copyCategory");
    return sel ? sel.value : "poster_flyer";
  }

  function currentTone() {
    var sel = $("#copyTone");
    return sel ? sel.value : "professional";
  }

  function currentCopyLineCount() {
    var sel = $("#copyLineCount");
    if (!sel || !sel.value) return 4;
    var n = parseInt(sel.value, 10);
    if (isNaN(n)) return 4;
    return Math.max(3, Math.min(8, n));
  }

  function padCopyLines(lines, targetCount) {
    var out = lines ? lines.slice() : [];
    var j = 0;
    while (out.length < targetCount && j < 40) {
      out.push(T("copy_pad_" + (j % 4)));
      j++;
    }
    return out.slice(0, targetCount);
  }

  function copyLinesForInsert() {
    if (!data || !data.copyForCategoryTone) return [];
    var cat = currentCategoryId();
    var tone = currentTone();
    var I = window.GridSeedI18n;
    var zh = I && typeof I.sampleCopyForLang === "function" ? I.sampleCopyForLang(cat, tone) : null;
    var raw = zh && zh.length ? zh : data.copyForCategoryTone(cat, tone);
    return padCopyLines(raw, currentCopyLineCount());
  }

  function refreshCopyPreview() {
    if (!data || !data.copyForCategoryTone) return;
    var lines = copyLinesForInsert();
    var out = $("#copyPreview");
    if (out) out.textContent = lines.join("\n\n");
  }

  function insertCopy() {
    if (!data || !data.copyForCategoryTone) return;
    var lines = copyLinesForInsert();
    var body = lines.join("<<<GRIDSEED>>>");
    var payload = "text|" + currentTextSize() + "|" + currentFontId() + "|" + body;
    runDispatch(payload, function (r) {
      setStatus(r === "OK" ? T("status_insert_ok") : String(r));
    });
  }

  function copyPreviewToClipboard() {
    var pre = $("#copyPreview");
    if (!pre) return;
    var text = pre.textContent || "";
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "absolute";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      setStatus(T("status_copied"));
    } catch (e1) {
      setStatus(T("status_copy_fail"), false);
    }
    try {
      document.body.removeChild(ta);
    } catch (e2) {}
  }

  function refreshGridContext() {
    var el = $("#gridContextInfo");
    if (!el) return;
    runDispatch("context|1", function (r) {
      var s = String(r);
      if (s.indexOf("OK:no_document") === 0) {
        el.textContent = T("ctx_no_doc");
        return;
      }
      if (s.indexOf("OK|") === 0) {
        var parts = s.split("|");
        var w = parseFloat(parts[1]);
        var h = parseFloat(parts[2]);
        var cm = parts[3] || "";
        var ru = parts[4] || "";
        var hasGrid = parts[5] === "1";
        var wR = Math.round(w);
        var hR = Math.round(h);
        el.textContent = T("ctx_artboard", {
          w: wR,
          h: hR,
          cm: cm,
          ru: ru,
          grid: hasGrid ? T("ctx_has_grid") : T("ctx_no_grid"),
        });
        return;
      }
      el.textContent = s;
    });
  }

  function initTabs() {
    $all(".tab").forEach(function (tab) {
      tab.addEventListener("click", function () {
        var name = tab.getAttribute("data-tab");
        $all(".tab").forEach(function (t) {
          t.setAttribute("aria-selected", t === tab ? "true" : "false");
        });
        $all(".panel").forEach(function (p) {
          p.hidden = p.getAttribute("data-panel") !== name;
        });
        if (name === "grids") {
          refreshGridContext();
        }
      });
    });
  }

  function initCopyControls() {
    var cat = $("#copyCategory");
    var tone = $("#copyTone");
    var sz = $("#copyTextSize");
    var fn = $("#copyFont");
    var lc = $("#copyLineCount");
    var regen = $("#btnRegenerate");
    var insert = $("#btnInsertCopy");
    var clip = $("#btnCopyWordsClipboard");
    if (cat) cat.addEventListener("change", refreshCopyPreview);
    if (tone) tone.addEventListener("change", refreshCopyPreview);
    if (sz) sz.addEventListener("change", refreshCopyPreview);
    if (fn) fn.addEventListener("change", refreshCopyPreview);
    if (lc) lc.addEventListener("change", refreshCopyPreview);
    if (regen) regen.addEventListener("click", refreshCopyPreview);
    if (insert) insert.addEventListener("click", insertCopy);
    if (clip) clip.addEventListener("click", copyPreviewToClipboard);
    refreshCopyPreview();
  }

  function initGridContextControls() {
    var btn = $("#btnRefreshGridContext");
    if (btn && !btn.dataset.bound) {
      btn.dataset.bound = "1";
      btn.addEventListener("click", refreshGridContext);
    }
  }

  function initLockGuides() {
    var btn = $("#btnLockGuides");
    if (!btn) return;
    btn.addEventListener("click", function () {
      runDispatch("lockguides|1", function () {
        setStatus(T("status_lock_guides"));
      });
    });
  }

  function boot() {
    try {
      data = window.GRIDSEED_DATA;
      if (!data) {
        setStatus(T("status_err_data"));
        return;
      }
      fillCopyCategories();
      fillCopyLineCount();
      fillTypePresets();
      fillPaperFormatSelect();
      renderSizes();
      renderGrids();
      renderTips();
      if (!window.__gridseedListeners) {
        window.__gridseedListeners = true;
        initTabs();
        initCopyControls();
        initLockGuides();
        initGridComposer();
        initPaperFormatBlock();
        initStarterKitBlock();
        initLayoutPlanCreate();
        initGridContextControls();
      }
      setStatus(T("status_ready"));
      // No tab switching when everything is on one page; refresh grids context now.
      refreshGridContext();
    } catch (err) {
      setStatus(T("status_ui_err") + (err && err.message ? err.message : String(err)));
    }
  }

  window.__gridseedLangRefresh = function () {
    try {
      if (!data) return;
      fillCopyCategories();
      fillCopyLineCount();
      fillTypePresets();
      fillPaperFormatSelect();
      renderSizes();
      renderGrids();
      renderTips();
      renderPaperVariants();
      renderTemplatePreview();
      fillStarterThemes();
      if (typeof window.layoutPreviewRefresh === "function") {
        window.layoutPreviewRefresh();
      }
      refreshCopyPreview();
      refreshGridContext();
      if (typeof window.__gridseedComposerLangRefresh === "function") {
        window.__gridseedComposerLangRefresh();
      }
    } catch (eR) {}
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
  window.addEventListener("load", function () {
    var list = document.getElementById("sizeQuickList");
    if (list && list.children.length === 0) {
      boot();
    }
  });
  setTimeout(function () {
    var list = document.getElementById("sizeQuickList");
    if (list && list.children.length === 0) {
      boot();
    }
  }, 500);
})();
