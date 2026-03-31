/**
 * GridSeed — Illustrator host script (ExtendScript)
 * Creates documents, artboards, guides, and text frames.
 */

#target illustrator

var GRIDSEED_MM_TO_PT = 2.83464566929134;
var GRIDSEED_IN_TO_PT = 72;

var GRIDSEED_DEBUG_LOG_PATH =
  "/Users/tinalai/Desktop/cursor webpage building/.cursor/debug-5d122b.log";
var GRIDSEED_DEBUG_RUN_ID = "text_balance_verify_1";

function gridseed_debugNDJSON(line) {
  try {
    var f = new File(GRIDSEED_DEBUG_LOG_PATH);
    f.open("a");
    f.writeln(line);
    f.close();
  } catch (e) {}
}

function gridseed_debugEscape(s) {
  return String(s)
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\r/g, "\\r")
    .replace(/\n/g, "\\n");
}

function gridseed_debugWriteFlat(hypothesisId, location, message, extra) {
  // Write one NDJSON object line (no JSON.stringify; keep ExtendScript-safe).
  try {
    var ts = new Date().getTime();
    var line = "{";
    line += '"sessionId":"5d122b",';
    line += '"runId":"' + gridseed_debugEscape(GRIDSEED_DEBUG_RUN_ID) + '",';
    line += '"hypothesisId":"' + gridseed_debugEscape(hypothesisId) + '",';
    line += '"location":"' + gridseed_debugEscape(location) + '",';
    line += '"message":"' + gridseed_debugEscape(message) + '",';
    line += '"timestamp":' + ts;
    if (extra) {
      var k;
      for (k in extra) {
        try {
          if (!extra.hasOwnProperty(k)) continue;
        } catch (eHas) {}
        var v = extra[k];
        if (v === undefined || v === null) continue;
        if (typeof v === "number") {
          line += ',"' + gridseed_debugEscape(k) + '":' + v;
        } else {
          line +=
            ',"' +
            gridseed_debugEscape(k) +
            '":"' +
            gridseed_debugEscape(v) +
            '"';
        }
      }
    }
    line += "}";
    gridseed_debugNDJSON(line);
  } catch (e2) {}
}

function gridseed_mmToPt(mm) {
  return mm * GRIDSEED_MM_TO_PT;
}

function gridseed_inToPt(inches) {
  return inches * GRIDSEED_IN_TO_PT;
}

function gridseed_artboardRectFromSizePt(widthPt, heightPt) {
  return [0, heightPt, widthPt, 0];
}

function gridseed_applyDocPrefs(doc, colorSpace, units) {
  if (colorSpace === "RGB") {
    doc.documentColorSpace = DocumentColorSpace.RGB;
  } else {
    doc.documentColorSpace = DocumentColorSpace.CMYK;
  }
  if (units === "MM") {
    doc.rulerUnits = RulerUnits.Millimeters;
  } else if (units === "IN") {
    doc.rulerUnits = RulerUnits.Inches;
  } else if (units === "Pixels") {
    try {
      doc.rulerUnits = RulerUnits.Pixels;
    } catch (e) {
      doc.rulerUnits = RulerUnits.Points;
    }
  } else {
    doc.rulerUnits = RulerUnits.Points;
  }
}

function gridseed_setActiveArtboardRect(doc, rect) {
  var ab = doc.artboards[doc.artboards.getActiveArtboardIndex()];
  ab.artboardRect = rect;
}

function gridseed_artboardBounds(doc) {
  var r = doc.artboards[doc.artboards.getActiveArtboardIndex()].artboardRect;
  return {
    left: r[0],
    top: r[1],
    right: r[2],
    bottom: r[3],
  };
}

function gridseed_getOrCreateLayer(doc, name) {
  var i;
  for (i = 0; i < doc.layers.length; i++) {
    if (doc.layers[i].name === name) {
      return doc.layers[i];
    }
  }
  var layer = doc.layers.add();
  layer.name = name;
  return layer;
}

function gridseed_removeLayerByName(doc, name) {
  var j;
  for (j = doc.layers.length - 1; j >= 0; j--) {
    if (doc.layers[j].name === name) {
      try {
        doc.layers[j].remove();
      } catch (e) {}
    }
  }
}

function gridseed_getGridFallbackLayer(doc) {
  return gridseed_getOrCreateLayer(doc, "GridSeed Grid");
}

function gridseed_addColoredLine(doc, layerName, vertical, coordPt, rr, gg, bb) {
  var b = gridseed_artboardBounds(doc);
  try {
    var layer = gridseed_getOrCreateLayer(doc, layerName);
    var p = layer.pathItems.add();
    if (vertical) {
      p.setEntirePath([
        [coordPt, b.top],
        [coordPt, b.bottom],
      ]);
    } else {
      p.setEntirePath([
        [b.left, coordPt],
        [b.right, coordPt],
      ]);
    }
    p.stroked = true;
    p.strokeWidth = 0.75;
    p.filled = false;
    var rgb = new RGBColor();
    rgb.red = rr;
    rgb.green = gg;
    rgb.blue = bb;
    p.strokeColor = rgb;
  } catch (e) {}
}

/**
 * Trim (orange) = final cut line inside bleed. Safe (magenta) = live area inside trim.
 */
function gridseed_drawTrimAndSafeGuides(doc, spec) {
  gridseed_removeLayerByName(doc, "GridSeed Trim");
  gridseed_removeLayerByName(doc, "GridSeed Safe");
  var b = gridseed_artboardBounds(doc);
  var left = b.left;
  var top = b.top;
  var right = b.right;
  var bottom = b.bottom;
  var bleed = spec.bleedPt || 0;
  var m = spec.marginMm ? gridseed_mmToPt(spec.marginMm) : 0;
  if (bleed > 0) {
    gridseed_addColoredLine(doc, "GridSeed Trim", true, left + bleed, 255, 120, 0);
    gridseed_addColoredLine(doc, "GridSeed Trim", true, right - bleed, 255, 120, 0);
    gridseed_addColoredLine(doc, "GridSeed Trim", false, top - bleed, 255, 120, 0);
    gridseed_addColoredLine(doc, "GridSeed Trim", false, bottom + bleed, 255, 120, 0);
  }
  if (m > 0) {
    var ins = bleed + m;
    gridseed_addColoredLine(doc, "GridSeed Safe", true, left + ins, 220, 100, 255);
    gridseed_addColoredLine(doc, "GridSeed Safe", true, right - ins, 220, 100, 255);
    gridseed_addColoredLine(doc, "GridSeed Safe", false, top - ins, 220, 100, 255);
    gridseed_addColoredLine(doc, "GridSeed Safe", false, bottom + ins, 220, 100, 255);
  }
}

function gridseed_strokeGridLine(pathItem) {
  try {
    var rgb = new RGBColor();
    rgb.red = 0;
    rgb.green = 210;
    rgb.blue = 255;
    pathItem.strokeColor = rgb;
  } catch (e) {}
}

/**
 * Draws layout lines as paths on "GridSeed Grid".
 * Native doc.guides + Orientation is unreliable on many Illustrator builds; paths always show.
 */
function gridseed_addGuide(doc, vertical, coordPt) {
  var b = gridseed_artboardBounds(doc);
  try {
    var layer = gridseed_getGridFallbackLayer(doc);
    var p = layer.pathItems.add();
    if (vertical) {
      p.setEntirePath([
        [coordPt, b.top],
        [coordPt, b.bottom],
      ]);
    } else {
      p.setEntirePath([
        [b.left, coordPt],
        [b.right, coordPt],
      ]);
    }
    p.stroked = true;
    p.strokeWidth = 1.25;
    p.filled = false;
    gridseed_strokeGridLine(p);
  } catch (e) {}
}

function gridseed_clearGuides(doc) {
  if (!doc) {
    return;
  }
  try {
    var guides = doc.guides;
    if (!guides) {
      return;
    }
    var n = guides.length;
    var i;
    for (i = n - 1; i >= 0; i--) {
      try {
        guides[i].remove();
      } catch (e) {}
    }
  } catch (eAll) {}
}

function gridseed_clearGridSeedConstructionLayers(doc) {
  var names = [
    "GridSeed Isometric",
    "GridSeed Grid",
    "GridSeed Layout Margin",
    "GridSeed Focus Zone",
    "GridSeed Zones",
  ];
  var j;
  for (j = doc.layers.length - 1; j >= 0; j--) {
    var k;
    for (k = 0; k < names.length; k++) {
      if (doc.layers[j].name === names[k]) {
        try {
          doc.layers[j].remove();
        } catch (e) {}
      }
    }
  }
}

function gridseed_safeMarginPt(doc, marginPt) {
  var b = gridseed_artboardBounds(doc);
  var w = b.right - b.left;
  var h = b.top - b.bottom;
  var minDim = Math.min(w, h);
  var m = Math.min(marginPt, minDim * 0.12);
  return Math.max(2, m);
}

function gridseed_safeGutterPt(doc, gutterPt) {
  var b = gridseed_artboardBounds(doc);
  var w = b.right - b.left;
  var g = Math.min(gutterPt, w * 0.04);
  return Math.max(1, g);
}

/** Copy a base spec and pin which grid applies on “New document” (cyan construction). */
function gridseed_specWithGrid(base, gridId) {
  return {
    wPt: base.wPt,
    hPt: base.hPt,
    bleedPt: base.bleedPt,
    color: base.color,
    units: base.units,
    marginMm: base.marginMm,
    defaultGrid: gridId,
  };
}

/**
 * Template specs: wPt, hPt, bleedPt, color, units, marginMm (optional safe area inside trim)
 * Optional defaultGrid: host applies this grid id instead of the heuristic in gridseed_defaultGridIdForTemplate.
 */
function gridseed_getTemplateSpec(id) {
  var specs = {};
  var T = function (wMm, hMm, bleedMm, color, units, marginMm) {
    return {
      wPt: gridseed_mmToPt(wMm),
      hPt: gridseed_mmToPt(hMm),
      bleedPt: bleedMm ? gridseed_mmToPt(bleedMm) : 0,
      color: color,
      units: units || "MM",
      marginMm: marginMm || 0,
    };
  };
  var Tin = function (wIn, hIn, bleedIn, color, units, marginMm) {
    return {
      wPt: gridseed_inToPt(wIn),
      hPt: gridseed_inToPt(hIn),
      bleedPt: bleedIn ? gridseed_inToPt(bleedIn) : 0,
      color: color,
      units: units || "IN",
      marginMm: marginMm || 0,
    };
  };
  var Px = function (w, h, marginMm) {
    return {
      wPt: w,
      hPt: h,
      bleedPt: 0,
      color: "RGB",
      units: "Pixels",
      marginMm: marginMm || 0,
    };
  };

  // Poster / Flyer
  specs["poster_a1_bleed"] = T(594, 841, 3, "CMYK", "MM", 15);
  specs["poster_a2_bleed"] = T(420, 594, 3, "CMYK", "MM", 12);
  specs["poster_a3_bleed"] = T(297, 420, 3, "CMYK", "MM", 10);
  specs["poster_a4_bleed"] = T(210, 297, 3, "CMYK", "MM", 10);
  specs["poster_us_tabloid_bleed"] = Tin(11, 17, 0.125, "CMYK", "IN", 12.7);
  specs["flyer_dl_bleed"] = T(99, 210, 3, "CMYK", "MM", 8);
  specs["flyer_a5_bleed"] = T(148, 210, 3, "CMYK", "MM", 8);
  specs["flyer_a6_bleed"] = T(105, 148, 3, "CMYK", "MM", 6);

  // Social (RGB)
  specs["social_ig_post_1080"] = Px(1080, 1080, 0);
  specs["social_ig_story_1080"] = Px(1080, 1920, 0);
  specs["social_linkedin_banner"] = Px(1584, 396, 0);
  specs["social_x_header"] = Px(1500, 500, 0);
  specs["social_fb_post_1200"] = Px(1200, 630, 0);
  specs["social_pinterest_pin"] = Px(1000, 1500, 0);
  specs["social_youtube_thumb"] = Px(1280, 720, 0);
  specs["social_tiktok_1080"] = Px(1080, 1920, 0);

  // Branding
  specs["brand_logo_exploration"] = T(200, 200, 0, "RGB", "MM", 0);
  specs["brand_bizcard_us_bleed"] = Tin(3.5, 2, 0.125, "CMYK", "IN", 3.2);
  specs["brand_bizcard_iso_bleed"] = T(85, 55, 3, "CMYK", "MM", 3);
  specs["brand_letterhead_a4_bleed"] = T(210, 297, 3, "CMYK", "MM", 20);
  specs["brand_letterhead_us_bleed"] = Tin(8.5, 11, 0.125, "CMYK", "IN", 12.7);

  // Editorial
  specs["editorial_mag_spread_a4_bleed"] = T(420, 297, 3, "CMYK", "MM", 12);
  specs["editorial_mag_cover_a4_bleed"] = T(220, 297, 3, "CMYK", "MM", 12);
  specs["editorial_newspaper_broadsheet"] = T(750, 600, 0, "CMYK", "MM", 15);

  // Packaging
  specs["packaging_dieline_a4"] = T(210, 297, 0, "CMYK", "MM", 10);
  specs["packaging_box_flat_400"] = T(400, 300, 0, "CMYK", "MM", 8);

  // Presentation / screen
  specs["presentation_16_9_hd"] = Px(1920, 1080, 0);
  specs["presentation_16_9_4k"] = Px(3840, 2160, 0);
  specs["presentation_4_3"] = Px(1024, 768, 0);
  specs["presentation_a4_landscape"] = T(297, 210, 0, "RGB", "MM", 12);

  // UI / icons
  specs["ui_icon_sheet_1024"] = Px(1024, 1024, 0);
  specs["ui_mobile_1080"] = Px(1080, 1920, 0);

  // Layout / Levels — same artboard specs as paper-grid list; L1–L6 per format
  (function gridseed_registerLayoutLevelTemplates() {
    var layouts = [
      { layoutSlug: "a1_bleed", fn: function () { return T(594, 841, 3, "CMYK", "MM", 15); } },
      { layoutSlug: "a2_bleed", fn: function () { return T(420, 594, 3, "CMYK", "MM", 12); } },
      { layoutSlug: "a3_bleed", fn: function () { return T(297, 420, 3, "CMYK", "MM", 10); } },
      { layoutSlug: "a4_bleed", fn: function () { return T(210, 297, 3, "CMYK", "MM", 10); } },
      { layoutSlug: "a5_bleed", fn: function () { return T(148, 210, 3, "CMYK", "MM", 8); } },
      { layoutSlug: "dl_bleed", fn: function () { return T(99, 210, 3, "CMYK", "MM", 8); } },
      { layoutSlug: "tabloid_bleed", fn: function () { return Tin(11, 17, 0.125, "CMYK", "IN", 12.7); } },
      { layoutSlug: "letter_bleed", fn: function () { return Tin(8.5, 11, 0.125, "CMYK", "IN", 12.7); } },
      { layoutSlug: "ig_square_1080", fn: function () { return Px(1080, 1080, 0); } },
      { layoutSlug: "ig_story_1080", fn: function () { return Px(1080, 1920, 0); } },
      { layoutSlug: "fb_post_1200", fn: function () { return Px(1200, 630, 0); } },
      { layoutSlug: "slide16_9", fn: function () { return Px(1920, 1080, 0); } },
      { layoutSlug: "yt_720", fn: function () { return Px(1280, 720, 0); } },
      { layoutSlug: "pin_1000_1500", fn: function () { return Px(1000, 1500, 0); } },
      { layoutSlug: "x_banner_1500", fn: function () { return Px(1500, 500, 0); } },
    ];
    var li;
    var lv;
    for (li = 0; li < layouts.length; li++) {
      for (lv = 1; lv <= 6; lv++) {
        specs["layout_level" + lv + "_" + layouts[li].layoutSlug] = layouts[li].fn();
      }
    }
  })();

  (function gridseed_registerPaperGridTemplates() {
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
    var papers = [
      { slug: "a1", fn: function () { return T(594, 841, 3, "CMYK", "MM", 15); } },
      { slug: "a2", fn: function () { return T(420, 594, 3, "CMYK", "MM", 12); } },
      { slug: "a3", fn: function () { return T(297, 420, 3, "CMYK", "MM", 10); } },
      { slug: "a4", fn: function () { return T(210, 297, 3, "CMYK", "MM", 10); } },
      { slug: "a5", fn: function () { return T(148, 210, 3, "CMYK", "MM", 8); } },
      { slug: "dl", fn: function () { return T(99, 210, 3, "CMYK", "MM", 8); } },
      { slug: "tabloid", fn: function () { return Tin(11, 17, 0.125, "CMYK", "IN", 12.7); } },
      { slug: "letter", fn: function () { return Tin(8.5, 11, 0.125, "CMYK", "IN", 12.7); } },
      { slug: "ig_square", fn: function () { return Px(1080, 1080, 0); } },
      { slug: "ig_story", fn: function () { return Px(1080, 1920, 0); } },
      { slug: "fb_post", fn: function () { return Px(1200, 630, 0); } },
      { slug: "slide16_9", fn: function () { return Px(1920, 1080, 0); } },
      { slug: "yt_720", fn: function () { return Px(1280, 720, 0); } },
      { slug: "pin", fn: function () { return Px(1000, 1500, 0); } },
      { slug: "x_banner", fn: function () { return Px(1500, 500, 0); } },
    ];
    var pi;
    var gi;
    for (pi = 0; pi < papers.length; pi++) {
      for (gi = 0; gi < grids.length; gi++) {
        specs["grid_" + papers[pi].slug + "_" + grids[gi]] = gridseed_specWithGrid(
          papers[pi].fn(),
          grids[gi]
        );
      }
    }
  })();

  return specs[id] || null;
}

function gridseed_isLayoutLevelsTemplate(templateId) {
  return String(templateId).indexOf("layout_level") === 0;
}

function gridseed_layoutLevelFromTemplateId(templateId) {
  var s = String(templateId);
  if (s.indexOf("layout_level6") === 0) {
    return 6;
  }
  if (s.indexOf("layout_level5") === 0) {
    return 5;
  }
  if (s.indexOf("layout_level4") === 0) {
    return 4;
  }
  if (s.indexOf("layout_level3") === 0) {
    return 3;
  }
  if (s.indexOf("layout_level2") === 0) {
    return 2;
  }
  return 1;
}

function gridseed_layoutInsetPtFromSpec(spec) {
  var bleed = spec.bleedPt || 0;
  var m = spec.marginMm ? gridseed_mmToPt(spec.marginMm) : 0;
  return bleed + m;
}

function gridseed_addStrokedRect(doc, layerName, left, top, right, bottom, rr, gg, bb, sw) {
  var layer = gridseed_getOrCreateLayer(doc, layerName);
  var w = right - left;
  var h = top - bottom;
  var p = layer.pathItems.rectangle(top, left, w, h);
  p.filled = false;
  p.stroked = true;
  p.strokeWidth = sw;
  var rgb = new RGBColor();
  rgb.red = rr;
  rgb.green = gg;
  rgb.blue = bb;
  p.strokeColor = rgb;
  try {
    layer.printable = false;
  } catch (e0) {}
  return p;
}

function gridseed_addFilledRect(doc, layerName, left, top, right, bottom, rr, gg, bb, opacityPct) {
  var layer = gridseed_getOrCreateLayer(doc, layerName);
  var w = right - left;
  var h = top - bottom;
  var p = layer.pathItems.rectangle(top, left, w, h);
  p.filled = true;
  p.stroked = false;
  var rgb = new RGBColor();
  rgb.red = rr;
  rgb.green = gg;
  rgb.blue = bb;
  p.fillColor = rgb;
  try {
    p.opacity = opacityPct;
  } catch (e1) {}
  try {
    layer.printable = false;
  } catch (e2) {}
  return p;
}

function gridseed_addFocusZoneRect(doc, left, top, right, bottom) {
  var layer = gridseed_getOrCreateLayer(doc, "GridSeed Focus Zone");
  var w = right - left;
  var h = top - bottom;
  var p = layer.pathItems.rectangle(top, left, w, h);
  p.filled = true;
  p.stroked = true;
  p.strokeWidth = 1;
  var fillRgb = new RGBColor();
  fillRgb.red = 255;
  fillRgb.green = 160;
  fillRgb.blue = 200;
  p.fillColor = fillRgb;
  var strokeRgb = new RGBColor();
  strokeRgb.red = 220;
  strokeRgb.green = 60;
  strokeRgb.blue = 120;
  p.strokeColor = strokeRgb;
  try {
    p.opacity = 28;
  } catch (e3) {}
  try {
    layer.printable = false;
  } catch (e4) {}
  return p;
}

/**
 * “Layout / Levels” — red margin frame, 5×7 modular grid, pink 2×4 focus; L2–L6 add grey story zones (top, full, bottom, left third, right third).
 */
function gridseed_applyLayoutLevels(doc, spec, templateId) {
  try {
    doc.activate();
  } catch (eA) {}
  var level = gridseed_layoutLevelFromTemplateId(templateId);
  gridseed_removeLayerByName(doc, "GridSeed Layout Margin");
  gridseed_removeLayerByName(doc, "GridSeed Focus Zone");
  gridseed_removeLayerByName(doc, "GridSeed Zones");
  gridseed_removeLayerByName(doc, "GridSeed Grid");

  var b = gridseed_artboardBounds(doc);
  var left = b.left;
  var top = b.top;
  var right = b.right;
  var bottom = b.bottom;
  var aw = right - left;
  var ah = top - bottom;
  var minSide0 = Math.min(aw, ah);
  var marginPt = gridseed_layoutInsetPtFromSpec(spec);
  if (spec.units === "Pixels") {
    var pxIn = Math.max(48, minSide0 * 0.065);
    if (marginPt < pxIn) {
      marginPt = pxIn;
    }
  }
  var innerL = left + marginPt;
  var innerR = right - marginPt;
  var innerT = top - marginPt;
  var innerB = bottom + marginPt;
  var innerW = innerR - innerL;
  var innerH = innerT - innerB;
  if (innerW <= 0 || innerH <= 0) {
    return "ERR:layout_margin_too_large";
  }

  if (level === 2) {
    var midY2 = innerT - innerH / 2;
    gridseed_addFilledRect(doc, "GridSeed Zones", innerL, innerT, innerR, midY2, 55, 55, 58, 22);
  } else if (level === 3) {
    gridseed_addFilledRect(doc, "GridSeed Zones", innerL, innerT, innerR, innerB, 45, 45, 48, 28);
  } else if (level === 4) {
    var midY4 = innerT - innerH / 2;
    gridseed_addFilledRect(doc, "GridSeed Zones", innerL, midY4, innerR, innerB, 55, 55, 58, 22);
  } else if (level === 5) {
    var xSplitL = innerL + innerW / 3;
    gridseed_addFilledRect(doc, "GridSeed Zones", innerL, innerT, xSplitL, innerB, 52, 52, 56, 22);
  } else if (level === 6) {
    var xSplitR = innerL + (2 * innerW) / 3;
    gridseed_addFilledRect(doc, "GridSeed Zones", xSplitR, innerT, innerR, innerB, 52, 52, 56, 22);
  }

  gridseed_addStrokedRect(doc, "GridSeed Layout Margin", innerL, innerT, innerR, innerB, 220, 30, 40, 1.5);

  var gutter = gridseed_safeGutterPt(doc, 10);
  var cols = 5;
  var rows = 7;
  var cw = (innerW - (cols - 1) * gutter) / cols;
  var rh = (innerH - (rows - 1) * gutter) / rows;
  if (isNaN(cw) || cw <= 0 || isNaN(rh) || rh <= 0) {
    return "ERR:layout_grid_fit";
  }

  var docRef = app.activeDocument;
  if (!docRef) {
    return "ERR:no_document";
  }
  try {
    docRef.activate();
  } catch (eB) {}
  gridseed_gridBento(cols, rows, gutter, marginPt);

  var startCol = 1;
  var startRow = 1;
  var spanCols = 2;
  var spanRows = 4;
  var fl = innerL + startCol * (cw + gutter);
  var fr = fl + spanCols * cw + (spanCols - 1) * gutter;
  var ft = innerT - startRow * (rh + gutter);
  var fb = ft - (spanRows * rh + (spanRows - 1) * gutter);
  gridseed_addFocusZoneRect(doc, fl, ft, fr, fb);

  try {
    app.redraw();
  } catch (eR) {}
  return "OK";
}

/**
 * Default layout grid for new template documents (cyan paths on "GridSeed Grid").
 */
function gridseed_defaultGridIdForTemplate(templateId) {
  if (gridseed_isLayoutLevelsTemplate(templateId)) {
    return "bento_5x7";
  }
  var spec = gridseed_getTemplateSpec(templateId);
  if (!spec) {
    return "rule_of_thirds";
  }
  var w = spec.wPt;
  var h = spec.hPt;
  var minSide = Math.min(w, h);
  var u = spec.units || "Points";
  if (u === "Pixels") {
    if (minSide < 900) {
      return "rule_of_thirds";
    }
    if (minSide < 1600) {
      return "6col_editorial";
    }
    return "12col_web";
  }
  if (minSide < 220) {
    return "rule_of_thirds";
  }
  if (minSide < 420) {
    return "6col_editorial";
  }
  return "12col_web";
}

function gridseed_applyTemplate(templateId) {
  var spec = gridseed_getTemplateSpec(templateId);
  if (!spec) {
    return "ERR:unknown_template";
  }
  var colorSpace =
    spec.color === "RGB" ? DocumentColorSpace.RGB : DocumentColorSpace.CMYK;
  var doc = app.documents.add(colorSpace);
  try {
    doc.activate();
  } catch (eAct) {}
  gridseed_applyDocPrefs(doc, spec.color, spec.units);
  var rect = gridseed_artboardRectFromSizePt(spec.wPt, spec.hPt);
  gridseed_setActiveArtboardRect(doc, rect);
  gridseed_drawTrimAndSafeGuides(doc, spec);
  if (gridseed_isLayoutLevelsTemplate(templateId)) {
    try {
      gridseed_applyLayoutLevels(doc, spec, templateId);
    } catch (eLayout) {}
  } else {
    var gid = spec.defaultGrid ? spec.defaultGrid : gridseed_defaultGridIdForTemplate(templateId);
    try {
      gridseed_applyGrid(gid, false);
    } catch (eGrid) {}
  }
  try {
    app.redraw();
  } catch (e) {}
  return "OK";
}

function gridseed_addBleedMarginGuides(templateId) {
  var doc = app.activeDocument;
  if (!doc) {
    return "ERR:no_document";
  }
  var spec = gridseed_getTemplateSpec(templateId);
  if (!spec) {
    return "ERR:unknown_template";
  }
  gridseed_drawTrimAndSafeGuides(doc, spec);
  try {
    app.redraw();
  } catch (e) {}
  return "OK";
}

function gridseed_grid12Column(gutterPt, marginPt) {
  var doc = app.activeDocument;
  var r = doc.artboards[doc.artboards.getActiveArtboardIndex()].artboardRect;
  var left = r[0];
  var top = r[1];
  var right = r[2];
  var bottom = r[3];
  var innerL = left + marginPt;
  var innerR = right - marginPt;
  var innerT = top - marginPt;
  var innerB = bottom + marginPt;
  var innerW = innerR - innerL;
  var innerH = innerT - innerB;
  if (innerW <= 0 || innerH <= 0) {
    return "ERR:margin_too_large_for_artboard";
  }
  var colW = (innerW - 11 * gutterPt) / 12;
  if (isNaN(colW) || colW <= 0) {
    return "ERR:gutter_too_large_for_columns";
  }
  var x;
  var i;
  for (i = 0; i <= 12; i++) {
    x = innerL + i * (colW + gutterPt);
    gridseed_addGuide(doc, true, x);
  }
  gridseed_addGuide(doc, false, innerT);
  gridseed_addGuide(doc, false, innerB);
  return "OK";
}

function gridseed_grid8ptBaseline(stepPt, marginPt) {
  var doc = app.activeDocument;
  var r = doc.artboards[doc.artboards.getActiveArtboardIndex()].artboardRect;
  var left = r[0];
  var top = r[1];
  var right = r[2];
  var bottom = r[3];
  var y = top - marginPt;
  while (y > bottom + marginPt) {
    gridseed_addGuide(doc, false, y);
    y -= stepPt;
  }
  gridseed_addGuide(doc, true, left + marginPt);
  gridseed_addGuide(doc, true, right - marginPt);
  return "OK";
}

function gridseed_gridModular(modulePt, marginPt) {
  var doc = app.activeDocument;
  var r = doc.artboards[doc.artboards.getActiveArtboardIndex()].artboardRect;
  var left = r[0];
  var top = r[1];
  var right = r[2];
  var bottom = r[3];
  var x = left + marginPt;
  while (x < right - marginPt) {
    gridseed_addGuide(doc, true, x);
    x += modulePt;
  }
  var y = top - marginPt;
  while (y > bottom + marginPt) {
    gridseed_addGuide(doc, false, y);
    y -= modulePt;
  }
  return "OK";
}

function gridseed_gridGolden() {
  var doc = app.activeDocument;
  var r = doc.artboards[doc.artboards.getActiveArtboardIndex()].artboardRect;
  var left = r[0];
  var top = r[1];
  var right = r[2];
  var bottom = r[3];
  var w = right - left;
  var h = top - bottom;
  var phi = 1.61803398875;
  var x1 = left + w / phi;
  var y1 = top - h / phi;
  gridseed_addGuide(doc, true, x1);
  gridseed_addGuide(doc, false, y1);
  gridseed_addGuide(doc, true, left + w / 2);
  gridseed_addGuide(doc, false, top - h / 2);
  return "OK";
}

function gridseed_gridRuleOfThirds() {
  var doc = app.activeDocument;
  var r = doc.artboards[doc.artboards.getActiveArtboardIndex()].artboardRect;
  var left = r[0];
  var top = r[1];
  var right = r[2];
  var bottom = r[3];
  var w = right - left;
  var h = top - bottom;
  gridseed_addGuide(doc, true, left + w / 3);
  gridseed_addGuide(doc, true, left + (2 * w) / 3);
  gridseed_addGuide(doc, false, top - h / 3);
  gridseed_addGuide(doc, false, top - (2 * h) / 3);
  return "OK";
}

function gridseed_grid6Column(gutterPt, marginPt) {
  var doc = app.activeDocument;
  var r = doc.artboards[doc.artboards.getActiveArtboardIndex()].artboardRect;
  var left = r[0];
  var top = r[1];
  var right = r[2];
  var bottom = r[3];
  var innerL = left + marginPt;
  var innerR = right - marginPt;
  var innerT = top - marginPt;
  var innerB = bottom + marginPt;
  var innerW = innerR - innerL;
  var innerH = innerT - innerB;
  if (innerW <= 0 || innerH <= 0) {
    return "ERR:margin_too_large_for_artboard";
  }
  var colW = (innerW - 5 * gutterPt) / 6;
  if (isNaN(colW) || colW <= 0) {
    return "ERR:gutter_too_large_for_columns";
  }
  var i;
  var x;
  for (i = 0; i <= 6; i++) {
    x = innerL + i * (colW + gutterPt);
    gridseed_addGuide(doc, true, x);
  }
  gridseed_addGuide(doc, false, innerT);
  gridseed_addGuide(doc, false, innerB);
  return "OK";
}

function gridseed_gridSwiss(marginPt) {
  return gridseed_grid12Column(12, marginPt);
}

function gridseed_gridBento(cols, rows, gutterPt, marginPt) {
  var doc = app.activeDocument;
  var r = doc.artboards[doc.artboards.getActiveArtboardIndex()].artboardRect;
  var left = r[0];
  var top = r[1];
  var right = r[2];
  var bottom = r[3];
  var innerL = left + marginPt;
  var innerR = right - marginPt;
  var innerT = top - marginPt;
  var innerB = bottom + marginPt;
  var innerW = innerR - innerL;
  var innerH = innerT - innerB;
  var cw = (innerW - (cols - 1) * gutterPt) / cols;
  var rh = (innerH - (rows - 1) * gutterPt) / rows;
  var i;
  var j;
  var x;
  var y;
  for (i = 0; i <= cols; i++) {
    x = innerL + i * (cw + gutterPt);
    gridseed_addGuide(doc, true, x);
  }
  for (j = 0; j <= rows; j++) {
    y = innerT - j * (rh + gutterPt);
    gridseed_addGuide(doc, false, y);
  }
  return "OK";
}

function gridseed_constructionLayer(doc, name) {
  var layer = doc.layers.add();
  layer.name = name;
  return layer;
}

function gridseed_addLine(layer, x1, y1, x2, y2) {
  var p = layer.pathItems.add();
  p.setEntirePath([
    [x1, y1],
    [x2, y2],
  ]);
  p.stroked = true;
  p.strokeWidth = 0.25;
  p.filled = false;
  gridseed_strokeGridLine(p);
}

function gridseed_gridIsometric(angleDeg) {
  var doc = app.activeDocument;
  var r = doc.artboards[doc.artboards.getActiveArtboardIndex()].artboardRect;
  var left = r[0];
  var top = r[1];
  var right = r[2];
  var bottom = r[3];
  var layer = gridseed_constructionLayer(doc, "GridSeed Isometric");
  var rad = (angleDeg * Math.PI) / 180;
  var rad2 = rad + Math.PI / 3;
  var rad3 = rad - Math.PI / 3;
  var cx = (left + right) / 2;
  var cy = (top + bottom) / 2;
  var span = Math.max(right - left, top - bottom) * 1.2;
  var i;
  var t;
  var x1;
  var y1;
  var x2;
  var y2;
  for (i = -6; i <= 6; i++) {
    t = i * (span / 8);
    x1 = cx + t * Math.cos(rad) - span * Math.sin(rad);
    y1 = cy + t * Math.sin(rad) + span * Math.cos(rad);
    x2 = cx + t * Math.cos(rad) + span * Math.sin(rad);
    y2 = cy + t * Math.sin(rad) - span * Math.cos(rad);
    gridseed_addLine(layer, x1, y1, x2, y2);
    x1 = cx + t * Math.cos(rad2) - span * Math.sin(rad2);
    y1 = cy + t * Math.sin(rad2) + span * Math.cos(rad2);
    x2 = cx + t * Math.cos(rad2) + span * Math.sin(rad2);
    y2 = cy + t * Math.sin(rad2) - span * Math.cos(rad2);
    gridseed_addLine(layer, x1, y1, x2, y2);
    x1 = cx + t * Math.cos(rad3) - span * Math.sin(rad3);
    y1 = cy + t * Math.sin(rad3) + span * Math.cos(rad3);
    x2 = cx + t * Math.cos(rad3) + span * Math.sin(rad3);
    y2 = cy + t * Math.sin(rad3) - span * Math.cos(rad3);
    gridseed_addLine(layer, x1, y1, x2, y2);
  }
  try {
    layer.printable = false;
  } catch (e4) {}
  return "OK";
}

function gridseed_applyGrid(gridId, clearFirst, fixedGridMarginPt) {
  var doc = app.activeDocument;
  if (!doc) {
    return "ERR:no_document";
  }
  try {
    doc.activate();
  } catch (eAct) {}
  if (clearFirst) {
    gridseed_clearGuides(doc);
    gridseed_clearGridSeedConstructionLayers(doc);
  }
  var margin;
  if (typeof fixedGridMarginPt === "number" && !isNaN(fixedGridMarginPt)) {
    var bM = gridseed_artboardBounds(doc);
    var wM = bM.right - bM.left;
    var hM = bM.top - bM.bottom;
    var minDimM = Math.min(wM, hM);
    margin = Math.max(2, Math.min(fixedGridMarginPt, minDimM * 0.48));
  } else {
    margin = gridseed_safeMarginPt(doc, 36);
  }
  var gutter = gridseed_safeGutterPt(doc, 12);
  var eightPt = 8;
  var b = gridseed_artboardBounds(doc);
  var minDim = Math.min(b.right - b.left, b.top - b.bottom);
  var module = Math.min(48, Math.max(8, minDim / 14));
  var res;
  if (gridId === "12col_web") {
    res = gridseed_grid12Column(gutter, margin);
  } else if (gridId === "8pt_baseline") {
    res = gridseed_grid8ptBaseline(eightPt, margin);
  } else if (gridId === "modular_8") {
    res = gridseed_gridModular(module, margin);
  } else if (gridId === "golden_ratio") {
    res = gridseed_gridGolden();
  } else if (gridId === "rule_of_thirds") {
    res = gridseed_gridRuleOfThirds();
  } else if (gridId === "6col_editorial") {
    res = gridseed_grid6Column(gutter, margin);
  } else if (gridId === "swiss_grid") {
    res = gridseed_gridSwiss(margin);
  } else if (gridId === "bento_3x3") {
    res = gridseed_gridBento(3, 3, gutter, margin);
  } else if (gridId === "bento_5x7") {
    res = gridseed_gridBento(5, 7, gutter, margin);
  } else if (gridId === "isometric_30") {
    res = gridseed_gridIsometric(30);
  } else {
    return "ERR:unknown_grid";
  }
  try {
    app.redraw();
  } catch (r) {}
  return res;
}

function gridseed_lockGuides() {
  try {
    app.executeMenuCommand("lockGuide");
  } catch (e) {}
  return "OK";
}

/**
 * Panel context for Grids tab: active artboard size, color mode, ruler units, GridSeed Grid layer presence.
 * Returns: OK|widthPt|heightPt|CMYK_or_RGB|rulerUnitsString|hasGridLayer0or1
 */
function gridseed_documentContext() {
  try {
    if (app.documents.length === 0) {
      return "OK:no_document";
    }
    var doc = app.activeDocument;
    var b = gridseed_artboardBounds(doc);
    var w = b.right - b.left;
    var h = b.top - b.bottom;
    var cm = "RGB";
    try {
      if (doc.documentColorSpace === DocumentColorSpace.CMYK) {
        cm = "CMYK";
      }
    } catch (e1) {}
    var ruStr = "Points";
    try {
      ruStr = String(doc.rulerUnits);
    } catch (e2) {}
    var hasGrid = "0";
    var li;
    for (li = 0; li < doc.layers.length; li++) {
      try {
        if (doc.layers[li].name === "GridSeed Grid") {
          hasGrid = "1";
          break;
        }
      } catch (e3) {}
    }
    return "OK|" + w + "|" + h + "|" + cm + "|" + ruStr + "|" + hasGrid;
  } catch (err) {
    return "ERR:" + (err && err.message ? err.message : String(err));
  }
}

function gridseed_makeRectPath(doc, left, top, width, height) {
  try {
    return doc.pathItems.rectangle(top, left, width, height);
  } catch (e1) {
    var p = doc.pathItems.add();
    var bottom = top - height;
    var right = left + width;
    p.setEntirePath([
      [left, top],
      [right, top],
      [right, bottom],
      [left, bottom],
    ]);
    p.closed = true;
    return p;
  }
}

/**
 * Scales type to artboard: ~560 pt min side = “reference” A4-ish short edge.
 * Softer than linear (exponent) so posters don’t explode and cards stay readable.
 */
function gridseed_typographyScale(minSidePt) {
  // A4/Letter short edge is roughly ~600pt.
  // We intentionally scale sublinearly so:
  // - A4/Letter stays ~10–12pt body (profile-dependent)
  // - Huge formats (A0+) lift into the ~14–20pt+ range without exploding.
  var ref = 600;
  var ratio = minSidePt / ref;
  // Clamp ratio so extremely small canvases remain legible,
  // and extremely large canvases stay controlled.
  if (ratio < 0.55) ratio = 0.55;
  if (ratio > 4.5) ratio = 4.5;
  var scale = Math.pow(ratio, 0.4);
  if (scale < 0.75) scale = 0.75;
  if (scale > 1.9) scale = 1.9;
  return scale;
}

/**
 * Reference length (pt) for gridseed_typographyScale from full artboard size.
 * Square / near-square: geometric mean. Strongly elongated: blends long edge so banners stay balanced.
 */
function gridseed_typographicRefPt(aw, ah) {
  var minS = Math.min(aw, ah);
  var maxS = Math.max(aw, ah);
  var geom = Math.sqrt(Math.max(aw * ah, 1));
  var r = maxS / Math.max(minS, 1e-6);
  if (r <= 1.18) {
    return geom;
  }
  var wideBoost = Math.min(maxS * 0.36, geom * 0.85);
  return Math.max(minS, wideBoost);
}

/** Path / point on path: reduce type size if Illustrator reports overflow. */
function gridseed_shrinkPathTextIfOverflow(ptf, minPt, stepPt) {
  if (!ptf || minPt <= 0) {
    return;
  }
  var step = stepPt > 0 ? stepPt : 0.75;
  try {
    var ca = ptf.textRange.characterAttributes;
    var guard;
    for (guard = 0; guard < 36; guard++) {
      var ov = false;
      try {
        ov = ptf.overflowed;
      } catch (e1) {
        break;
      }
      if (!ov) {
        break;
      }
      if (ca.size <= minPt + 1e-6) {
        break;
      }
      ca.size = Math.max(minPt, ca.size - step);
      try {
        ca.leading = ca.size * 1.18;
      } catch (e2) {}
    }
  } catch (e0) {}
}

/** Keeps area type from overflowing its frame by stepping down size (Illustrator ExtendScript). */
function gridseed_shrinkAreaTextIfOverflow(tf, minPt, stepPt, leadingFactor) {
  if (!tf || minPt <= 0) {
    return;
  }
  var lf = leadingFactor > 0 ? leadingFactor : 1.08;
  var step = stepPt > 0 ? stepPt : 0.85;
  try {
    if (tf.kind !== TextType.AREATEXT) {
      return;
    }
    var ca = tf.textRange.characterAttributes;
    var guard;
    for (guard = 0; guard < 56; guard++) {
      var ov = false;
      try {
        ov = tf.overflowed;
      } catch (eOv) {
        break;
      }
      if (!ov) {
        break;
      }
      var s = ca.size;
      if (s <= minPt + 1e-6) {
        break;
      }
      var ns = Math.max(minPt, s - step);
      ca.size = ns;
      try {
        ca.leading = ns * lf;
      } catch (eL) {}
    }
  } catch (e0) {}
}

/** Caps point sizes from column width so typical lines fit (~0.52 em avg glyph). */
function gridseed_capTypeSizesToColumn(tw, headPt, subPt, bodyPt, curvePt) {
  if (tw <= 4) {
    return { headPt: headPt, subPt: subPt, bodyPt: bodyPt, curvePt: curvePt };
  }
  var h = Math.min(headPt, tw / 7.8);
  var su = Math.min(subPt, tw / 9.8);
  var bo = Math.min(bodyPt, tw / 12.5);
  var cu = Math.min(curvePt, tw / 17.5);
  h = Math.max(13, h);
  su = Math.max(10, su);
  bo = Math.max(7, bo);
  cu = Math.max(8, cu);
  return { headPt: h, subPt: su, bodyPt: bo, curvePt: cu };
}

function gridseed_textSizeProfile(sizeKey) {
  var k = sizeKey || "standard";
  var headM = 1;
  var bodyM = 1;
  var gapM = 1;
  var boxH = 0.068;
  if (k === "compact") {
    headM = 0.72;
    bodyM = 0.76;
    gapM = 0.8;
    boxH = 0.054;
  } else if (k === "large") {
    headM = 1.2;
    bodyM = 1.1;
    gapM = 1.08;
    boxH = 0.076;
  } else if (k === "poster") {
    headM = 1.45;
    bodyM = 1.08;
    gapM = 1.14;
    boxH = 0.086;
  } else if (k === "display") {
    headM = 1.9;
    bodyM = 1.06;
    gapM = 1.22;
    boxH = 0.096;
  }
  return { headM: headM, bodyM: bodyM, gapM: gapM, boxH: boxH };
}

function gridseed_findTextFont(names) {
  var i;
  for (i = 0; i < names.length; i++) {
    try {
      var tf = app.textFonts.getByName(names[i]);
      if (tf) {
        return tf;
      }
    } catch (e0) {}
  }
  return null;
}

function gridseed_fontStacks() {
  return {
    system: {
      head: [
        "Helvetica-Bold",
        "HelveticaBold",
        "Arial-BoldMT",
        "Arial-BoldMT",
        "HelveticaNeue-Bold",
        "Helvetica",
      ],
      body: ["Helvetica", "HelveticaNeue", "ArialMT", "Arial", "HelveticaNeue-Light"],
    },
    neo_grotesk: {
      head: [
        "HelveticaNeue-Bold",
        "Helvetica-Bold",
        "Arial-BoldMT",
        "HelveticaNeue-Medium",
        "Helvetica",
      ],
      body: ["HelveticaNeue", "Helvetica", "ArialMT", "HelveticaNeue-Light"],
    },
    grotesk: {
      head: ["Helvetica-Light", "HelveticaNeue-Light", "ArialMT", "Helvetica"],
      body: ["Helvetica", "HelveticaNeue", "ArialMT", "HelveticaNeue-Light"],
    },
    humanist: {
      head: [
        "MyriadPro-Semibold",
        "MyriadPro-Bold",
        "MyriadPro-Regular",
        "SegoeUI-Semibold",
        "Arial-BoldMT",
      ],
      body: ["MyriadPro-Regular", "MyriadPro-Light", "SegoeUI", "ArialMT", "Helvetica"],
    },
    transitional: {
      head: ["Times-Bold", "Times-Roman", "TimesNewRomanPS-BoldMT", "MinionPro-Semibold"],
      body: ["Times-Roman", "TimesNewRomanPSMT", "MinionPro-Regular", "Georgia"],
    },
    editorial: {
      head: ["MinionPro-Semibold", "MinionPro-Medium", "MinionPro-Regular", "Times-Roman"],
      body: ["MinionPro-Regular", "MinionPro-Medium", "Times-Roman", "Georgia"],
    },
    modern: {
      head: ["Georgia-Bold", "Georgia", "Times-Bold", "Times-Roman"],
      body: ["Georgia", "Times-Roman", "TimesNewRomanPSMT"],
    },
    display: {
      head: [
        "Impact",
        "HelveticaNeue-CondensedBlack",
        "Arial-BoldMT",
        "Helvetica-Bold",
        "HelveticaNeue-Bold",
      ],
      body: ["HelveticaNeue-Medium", "Helvetica", "ArialMT", "Arial-BoldMT"],
    },
    mono: {
      head: ["Courier-Bold", "Courier", "CourierNewPS-BoldMT", "CourierNewPSMT"],
      body: ["Courier", "CourierNewPSMT", "Menlo-Regular"],
    },
    slab: {
      head: [
        "Rockwell-Bold",
        "Rockwell-ExtraBold",
        "Rockwell",
        "Clarendon-Bold",
        "ClarendonBT-Bold",
        "Arial-BoldMT",
      ],
      body: ["Rockwell", "Rockwell-Light", "Clarendon-Roman", "Georgia", "Times-Roman"],
    },
    geometric: {
      head: [
        "Futura-Medium",
        "Futura-Bold",
        "Futura-CondensedExtraBold",
        "CenturyGothic-Bold",
        "AvantGardeGothicITC-Bold",
        "Helvetica-Bold",
      ],
      body: ["Futura-Medium", "Futura-Book", "CenturyGothic", "AvantGardeGothicITC-Book", "Helvetica"],
    },
    rounded: {
      head: [
        "SFProRounded-Bold",
        "SFProRounded-Semibold",
        "ArialRoundedMTBold",
        "HelveticaRounded-Bold",
        "Arial-BoldMT",
      ],
      body: [
        "SFProRounded-Regular",
        "ArialRoundedMTBold",
        "HelveticaRounded-Bold",
        "Helvetica",
        "ArialMT",
      ],
    },
    literary: {
      head: [
        "Palatino-Bold",
        "Palatino-Roman",
        "BookAntiqua-Bold",
        "Garamond-Bold",
        "Times-Bold",
      ],
      body: ["Palatino-Roman", "BookAntiqua", "Garamond", "Times-Roman", "Georgia"],
    },
    industrial: {
      head: [
        "HelveticaNeue-CondensedBold",
        "HelveticaNeue-CondensedBlack",
        "ArialNarrow-Bold",
        "DINAlternate-Bold",
        "Impact",
        "Helvetica-Bold",
      ],
      body: [
        "HelveticaNeue-CondensedMedium",
        "ArialNarrow",
        "HelveticaNeue",
        "Helvetica",
        "ArialMT",
      ],
    },
  };
}

function gridseed_fontForRole(fontKey, headline) {
  var stacks = gridseed_fontStacks();
  var key = fontKey || "system";
  var stack = stacks[key] || stacks.system;
  var names = headline ? stack.head : stack.body;
  return gridseed_findTextFont(names);
}

function gridseed_applyTypeStyle(tf, fontKey, isHeadline, sizePt, gapLeading) {
  var ca = tf.textRange.characterAttributes;
  ca.size = sizePt;
  try {
    ca.autoLeading = false;
  } catch (e1) {}
  try {
    ca.leading = gapLeading;
  } catch (e2) {}
  var tfnt = gridseed_fontForRole(fontKey, isHeadline);
  if (tfnt) {
    try {
      ca.textFont = tfnt;
    } catch (e3) {}
  }
  try {
    var pi;
    for (pi = 0; pi < tf.paragraphs.length; pi++) {
      tf.paragraphs[pi].paragraphAttributes.justification = Justification.LEFT;
    }
  } catch (e4) {}
}

/**
 * Margins & vertical rhythm aligned to a 12-column width and 8 pt–scaled baseline step.
 * Caps padding by the short edge so ultra-wide or tall canvases keep visually balanced insets
 * (avoids tiny top/bottom margins on banners or tiny side margins on phone layouts).
 */
function gridseed_copyLayoutMetrics(w, h, minSide, scale) {
  var cap = minSide * 0.11;
  var marginX = Math.min(w / 12, cap);
  if (h > w * 1.66) {
    marginX = Math.max(marginX, minSide * 0.065);
  }
  marginX = Math.min(marginX, w * 0.42);
  var contentW = w - 2 * marginX;
  var topMargin = Math.min(h / 12, cap);
  if (w > h * 1.66) {
    topMargin = Math.max(topMargin, minSide * 0.065);
  }
  topMargin = Math.min(topMargin, h * 0.42);
  var rhythm = Math.max(4, Math.round(8 * scale * 10) / 10);
  var topSnap = Math.ceil(topMargin / rhythm) * rhythm;
  return { marginX: marginX, contentW: contentW, topSnap: topSnap, rhythm: rhythm };
}

function gridseed_parseTextPayload(rest) {
  var sizes = {};
  sizes.compact = true;
  sizes.standard = true;
  sizes.large = true;
  sizes.poster = true;
  sizes.display = true;
  var fonts = {};
  fonts.system = true;
  fonts.neo_grotesk = true;
  fonts.grotesk = true;
  fonts.humanist = true;
  fonts.transitional = true;
  fonts.editorial = true;
  fonts.modern = true;
  fonts.display = true;
  fonts.mono = true;
  fonts.slab = true;
  fonts.geometric = true;
  fonts.rounded = true;
  fonts.literary = true;
  fonts.industrial = true;
  var parts = rest.split("|");
  if (parts.length === 1) {
    return { sizeKey: "standard", fontKey: "system", body: rest };
  }
  var p0 = parts[0];
  if (!sizes[p0]) {
    return { sizeKey: "standard", fontKey: "system", body: rest };
  }
  if (parts.length === 2) {
    return { sizeKey: p0, fontKey: "system", body: parts[1] };
  }
  var p1 = parts[1];
  if (fonts[p1]) {
    return { sizeKey: p0, fontKey: p1, body: parts.slice(2).join("|") };
  }
  return { sizeKey: p0, fontKey: "system", body: parts.slice(1).join("|") };
}

function gridseed_insertTextBlocks(jsonStr, sizeKey, fontKey) {
  var doc = app.activeDocument;
  if (!doc) {
    return "ERR:no_document";
  }
  var sk = sizeKey || "standard";
  var fk = fontKey || "system";
  var layer = gridseed_getOrCreateLayer(doc, "GridSeed Copy");
  try {
    doc.activeLayer = layer;
  } catch (eL) {}
  var r = doc.artboards[doc.artboards.getActiveArtboardIndex()].artboardRect;
  var left = r[0];
  var top = r[1];
  var right = r[2];
  var bottom = r[3];
  var w = right - left;
  var h = top - bottom;
  var minSide = Math.min(w, h);
  var typRef2 = gridseed_typographicRefPt(w, h);
  var scale = gridseed_typographyScale(typRef2);
  var prof = gridseed_textSizeProfile(sk);
  var headBase = 22 * scale;
  var bodyBase = 11 * scale;
  var headPt = Math.round(10 * Math.max(8, Math.min(96, headBase * prof.headM))) / 10;
  var bodyPt = Math.round(10 * Math.max(7, Math.min(44, bodyBase * prof.bodyM))) / 10;
  var gap = Math.round(10 * Math.max(7, 14 * scale * prof.gapM)) / 10;
  var parts = jsonStr.split("<<<GRIDSEED>>>");
  var gm = gridseed_copyLayoutMetrics(w, h, minSide, scale);
  var i;
  var y = top - gm.topSnap;
  var tw = gm.contentW;
  headPt = Math.min(headPt, tw / 8.2);
  bodyPt = Math.min(bodyPt, tw / 12.8);
  headPt = Math.max(9, headPt);
  bodyPt = Math.max(7, bodyPt);
  var headBoxH = Math.max(minSide * 0.068, Math.min(h * 0.11, 120 * scale));
  var bodyBaseH = Math.max(minSide * 0.048, h * prof.boxH);
  var debugPlaced = 0;
  var debugI0Y = 0;
  var debugI0BoxH = 0;
  var debugI1CharsPerLine = 0;
  var debugI1EstLines = 0;
  var debugI1BoxH = 0;
  var debugI1Y = 0;
  // #region agent log
  gridseed_debugWriteFlat(
    "H_TEXT_SCALE",
    "hostscript.jsx:gridseed_insertTextBlocks:metrics",
    "metrics",
    {
      w: w,
      h: h,
      minSide: minSide,
      typRef: typRef2,
      scale: scale,
      sizeKey: sk,
      fontKey: fk,
      headPt: headPt,
      bodyPt: bodyPt,
      gap: gap,
      marginX: gm.marginX,
      contentW: tw,
      topSnap: gm.topSnap,
      rhythm: gm.rhythm
    }
  );
  // #endregion
  var rectPath;
  var advance;
  for (i = 0; i < parts.length && i < 10; i++) {
    var text = parts[i];
    if (!text || text.length === 0) {
      continue;
    }
    var sz = i === 0 ? headPt : bodyPt;
    var lead = sz * (i === 0 ? 1.12 : 1.38);
    var boxH;
    if (i === 0) {
      boxH = headBoxH;
      debugI0Y = y;
      debugI0BoxH = boxH;
    } else {
      // Estimate lines from frame width and the chosen font size.
      // Average character width is ~0.55em, which works well for both Latin and CJK in practice.
      var charsPerLine = Math.max(12, Math.floor(tw / (sz * 0.55)));
      var estLines = Math.max(1, Math.ceil(text.length / charsPerLine));
      boxH = Math.max(bodyBaseH, estLines * lead * 1.15);
      boxH = Math.min(boxH, h * 0.42);
      if (i === 1) {
        debugI1CharsPerLine = charsPerLine;
        debugI1EstLines = estLines;
        debugI1BoxH = boxH;
        debugI1Y = y;
      }
    }
    // Prevent overflow: if the next box would push past the bottom rhythm,
    // stop adding more blocks (or clamp only the headline to fit).
    var bottomFloorY = bottom + gm.rhythm;
    if (y <= bottomFloorY + 0.1) {
      break;
    }
    if (y - boxH < bottomFloorY) {
      if (i === 0) {
        boxH = Math.max(gm.rhythm, y - bottomFloorY);
      } else {
        break;
      }
    }
    if (boxH < gm.rhythm * 0.75) {
      break;
    }
    rectPath = gridseed_makeRectPath(doc, left + gm.marginX, y, tw, boxH);
    try {
      var tf = doc.textFrames.areaText(rectPath);
      tf.contents = text;
      gridseed_applyTypeStyle(tf, fk, i === 0, sz, lead);
      gridseed_shrinkAreaTextIfOverflow(tf, i === 0 ? 10 : 7, i === 0 ? 1.0 : 0.75, i === 0 ? 1.12 : 1.36);
    } catch (e2) {
      try {
        rectPath.remove();
      } catch (e3) {}
    }
    debugPlaced++;
    advance = gm.rhythm * Math.ceil((boxH + gap) / gm.rhythm);
    if (advance < gm.rhythm * 2) {
      advance = gm.rhythm * 2;
    }
    y -= advance;
  }
  try {
    app.redraw();
  } catch (eR) {}
  // #region agent log
  gridseed_debugWriteFlat(
    "H_TEXT_BALANCE_PLACED",
    "hostscript.jsx:gridseed_insertTextBlocks:placed",
    "placed",
    {
      blocksPlaced: debugPlaced,
      i0Y: debugI0Y,
      i0BoxH: debugI0BoxH,
      i1CharsPerLine: debugI1CharsPerLine,
      i1EstLines: debugI1EstLines,
      i1BoxH: debugI1BoxH,
      i1Y: debugI1Y
    }
  );
  // #endregion
  return "OK";
}

function gridseed_rgb255(r, g, b) {
  var c = new RGBColor();
  c.red = r;
  c.green = g;
  c.blue = b;
  return c;
}

function gridseed_addBackgroundRect(doc, layer, left, top, right, bottom, r, g, b) {
  var w = right - left;
  var h = top - bottom;
  var p = layer.pathItems.rectangle(top, left, w, h);
  p.filled = true;
  p.stroked = false;
  p.fillColor = gridseed_rgb255(r, g, b);
  return p;
}

function gridseed_getLayerByName(doc, name) {
  var i;
  for (i = 0; i < doc.layers.length; i++) {
    if (doc.layers[i].name === name) {
      return doc.layers[i];
    }
  }
  return null;
}

function gridseed_bringConstructionToFront(doc) {
  var names = [
    "GridSeed Safe",
    "GridSeed Trim",
    "GridSeed Zones",
    "GridSeed Focus Zone",
    "GridSeed Layout Margin",
    "GridSeed Grid",
  ];
  var i;
  for (i = names.length - 1; i >= 0; i--) {
    var L = gridseed_getLayerByName(doc, names[i]);
    if (L) {
      try {
        L.zOrder(ZOrder.BRINGTOFRONT);
      } catch (e0) {}
    }
  }
}

function gridseed_findCjkFont(headline) {
  var names = headline
    ? [
        "SourceHanSansSC-Bold",
        "SourceHanSansTC-Bold",
        "PingFangSC-Semibold",
        "HiraginoSans-W6",
        "STHeitiSC-Medium",
        "MicrosoftYaHei-Bold",
        "ArialUnicodeMS",
      ]
    : [
        "SourceHanSansSC-Regular",
        "SourceHanSansTC-Regular",
        "PingFangSC-Regular",
        "HiraginoSans-W3",
        "STHeitiSC-Light",
        "MicrosoftYaHei",
        "ArialUnicodeMS",
      ];
  return gridseed_findTextFont(names);
}

function gridseed_addNamedSwatch(doc, label, r, g, b) {
  try {
    var rgb = gridseed_rgb255(r, g, b);
    var sw = doc.swatches.add();
    sw.name = "GS " + label;
    sw.color = rgb;
  } catch (e) {}
}

function gridseed_wavePoints(left, right, bottom, yMid, amp, cycles, phase, steps) {
  var pts = [];
  var w = right - left;
  var i;
  for (i = 0; i <= steps; i++) {
    var t = i / steps;
    var x = left + t * w;
    var y = yMid + amp * Math.sin(t * Math.PI * 2 * cycles + phase);
    pts.push([x, y]);
  }
  return pts;
}

function gridseed_closedWaveRegion(layer, left, top, right, bottom, yMid, amp, cycles, phase, fillRgb) {
  var steps = 56;
  var wave = gridseed_wavePoints(left, right, bottom, yMid, amp, cycles, phase, steps);
  var pts = [];
  pts.push([left, bottom]);
  pts.push([right, bottom]);
  pts.push(wave[steps]);
  var i;
  for (i = steps - 1; i >= 0; i--) {
    pts.push(wave[i]);
  }
  pts.push([left, bottom]);
  var p = layer.pathItems.add();
  p.setEntirePath(pts);
  p.closed = true;
  p.filled = true;
  p.stroked = false;
  p.fillColor = fillRgb;
  return p;
}

function gridseed_addEllipseBlob(layer, cx, cy, rx, ry, angleDeg, fillRgb, opacityPct) {
  var top = cy + ry;
  var left = cx - rx;
  var ov = layer.pathItems.ellipse(top, left, rx * 2, ry * 2);
  ov.filled = true;
  ov.stroked = false;
  ov.fillColor = fillRgb;
  try {
    ov.opacity = opacityPct;
  } catch (e1) {}
  if (angleDeg && Math.abs(angleDeg) > 0.1) {
    try {
      ov.rotate(angleDeg, true, true, true, true, Transformation.CENTER);
    } catch (e2) {}
  }
  return ov;
}

function gridseed_addAreaText(doc, layer, left, top, width, height, contents, fontKey, headline, sizePt, lead, justifyLeft, lang) {
  var rectPath = gridseed_makeRectPath(doc, left, top, width, height);
  try {
    rectPath.move(layer, ElementPlacement.PLACEATEND);
  } catch (e0) {}
  var tf;
  try {
    tf = doc.textFrames.areaText(rectPath);
    tf.contents = contents;
  } catch (e1) {
    try {
      rectPath.remove();
    } catch (e2) {}
    return null;
  }
  gridseed_applyTypeStyle(tf, fontKey || "geometric", headline, sizePt, lead);
  if (!justifyLeft) {
    try {
      var pi;
      for (pi = 0; pi < tf.paragraphs.length; pi++) {
        tf.paragraphs[pi].paragraphAttributes.justification = Justification.CENTER;
      }
    } catch (e3) {}
  }
  if (lang === "zh") {
    try {
      var cjk = gridseed_findCjkFont(headline);
      if (cjk) {
        tf.textRange.characterAttributes.textFont = cjk;
      }
    } catch (e4) {}
  }
  return tf;
}

function gridseed_tryPathText(doc, layer, wavePts, contents, sizePt, fontKey, lang) {
  if (!wavePts || wavePts.length < 4) {
    return null;
  }
  var pathOpen = layer.pathItems.add();
  pathOpen.setEntirePath(wavePts);
  pathOpen.stroked = false;
  pathOpen.filled = false;
  pathOpen.closed = false;
  var tf = null;
  try {
    tf = doc.textFrames.pathText(pathOpen);
    tf.contents = contents;
    var ca = tf.textRange.characterAttributes;
    ca.size = sizePt;
    try {
      ca.autoLeading = false;
    } catch (e1) {}
    try {
      ca.leading = sizePt * 1.2;
    } catch (e2) {}
    var fnt = gridseed_fontForRole(fontKey || "geometric", true);
    if (fnt) {
      try {
        ca.textFont = fnt;
      } catch (e3) {}
    }
    if (lang === "zh") {
      var cjkP = gridseed_findCjkFont(true);
      if (cjkP) {
        try {
          ca.textFont = cjkP;
        } catch (e3b) {}
      }
    }
  } catch (e4) {
    try {
      pathOpen.remove();
    } catch (e5) {}
    return null;
  }
  return tf;
}

function gridseed_starterStrings(themeId, lang) {
  var zh = lang === "zh";
  var T = function (en, z) {
    return zh ? z : en;
  };
  if (themeId === "bold_navy") {
    return {
      line1: T("THE WORLD OF", "运动世界"),
      line2: T("SPORTS", "精彩瞬间"),
      line3: T("Bold contrast · high energy", "高对比 · 强动感"),
      curve: T("MAKE IT RAW", "全力以赴"),
      body: T("Date · Venue · Tickets\nBrand story line for your event.", "日期 · 地点 · 购票\n在此替换活动说明与品牌文案。"),
    };
  }
  if (themeId === "warm_plum") {
    return {
      line1: T("Summer", "盛夏"),
      line2: T("Nights", "之夜"),
      line3: T("Music · Food · Culture", "音乐 · 美食 · 文化"),
      curve: T("LIVE ON STAGE", "现场见"),
      body: T("Replace body copy. Keep hierarchy: headline, sub, detail.", "请替换正文。保持层级：标题、副标、细节。"),
    };
  }
  if (themeId === "mono_wave") {
    return {
      line1: T("POSTER", "海报"),
      line2: T("TEMPLATE", "模板"),
      line3: T("07.27 — 07.29", "07.27 — 07.29"),
      curve: T("SUMMER SPORTS", "夏季运动"),
      body: T("Column one · Column two · Column three\nSwap text with the Type tool (T).", "分栏排版示例\n使用文字工具 (T) 双击替换内容。"),
    };
  }
  if (themeId === "swiss_red") {
    return {
      line1: T("Brand", "品牌"),
      line2: T("Headline", "主标题"),
      line3: T("Supporting line — one clear idea", "辅助说明 — 一个核心信息"),
      curve: T("SWISS GRID SYSTEM", "瑞士网格系统"),
      body: T("Margins align to the cyan module grid.\nUse character styles for weights.", "边距与青色模块网格对齐。\n用字符样式管理字重。"),
    };
  }
  if (themeId === "forest_emerald") {
    return {
      line1: T("FOREST", "森林"),
      line2: T("EMERALD", "翡翠绿"),
      line3: T("Green contrast · calm rhythm", "绿色对比 · 舒缓节奏"),
      curve: T("GROW THE SYSTEM", "让系统生长"),
      body: T(
        "Replace body copy.\nKeep: headline, sub, details — all aligned to the grid.",
        "替换正文。\n保持：标题、副标题、细节，并与网格对齐。"
      ),
    };
  }
  if (themeId === "sunset_orange") {
    return {
      line1: T("SUNSET", "日落"),
      line2: T("ORANGE", "橙日"),
      line3: T("Warm energy · bold rhythm", "暖色能量 · 强节奏"),
      curve: T("BRAND STORY", "品牌叙事"),
      body: T(
        "Event details and venue copy go here.\nUse the same grid baseline for consistent spacing.",
        "活动详情与场地文案放这里。\n沿用同一基线节奏，间距更统一。"
      ),
    };
  }
  if (themeId === "royal_violet") {
    return {
      line1: T("ROYAL", "皇家"),
      line2: T("VIOLET", "皇家紫"),
      line3: T("Silver tone · precise grid", "银色调 · 精准网格"),
      curve: T("DESIGN LIKE A SYSTEM", "以系统设计"),
      body: T(
        "Minimal copy with strong hierarchy.\nReplace text and keep spacing.",
        "用更精简的文案保持层级。\n替换文字并保留节奏。"
      ),
    };
  }
  if (themeId === "minimal_mist") {
    return {
      line1: T("MINIMAL", "极简"),
      line2: T("MIST", "雾感"),
      line3: T("Soft neutrals · crisp type", "柔和中性色 · 清晰字型"),
      curve: T("CLEAN LAYOUT", "干净排版"),
      body: T("Use short lines.\nLet whitespace do the work.", "使用短句。\n让留白发挥作用。"),
    };
  }
  if (themeId === "desert_sand") {
    return {
      line1: T("DESERT", "沙漠"),
      line2: T("SAND", "沙金"),
      line3: T("Warm contrast · sun rhythm", "暖色对比 · 阳光节奏"),
      curve: T("GOLDEN GRID", "金色网格"),
      body: T("Event details and location.\nKeep everything aligned to the cyan modules.", "活动详情与地点。\n所有内容对齐青色模块。"),
    };
  }
  if (themeId === "midnight_neo") {
    return {
      line1: T("MIDNIGHT", "午夜"),
      line2: T("NEON", "霓虹"),
      line3: T("Neon energy · crisp hierarchy", "霓虹能量 · 清晰层级"),
      curve: T("SYSTEM SIGNAL", "系统信号"),
      body: T("Short copy with strong hierarchy.\nNeon shapes sit behind the grid.", "用简短文案做层级。\n霓虹形状在网格后面。"),
    };
  }
  if (themeId === "paper_collage") {
    return {
      line1: T("PAPER", "纸面"),
      line2: T("COLLAGE", "拼贴"),
      line3: T("Soft cutouts · calm layout", "柔裁切块 · 舒缓排版"),
      curve: T("MAKE IT LAYERS", "让层次可见"),
      body: T("Use blocks as zones.\nReplace text and keep spacing.", "用色块做分区。\n替换文字并保留间距。"),
    };
  }
  if (themeId === "acid_green") {
    return {
      line1: T("ACID", "酸绿"),
      line2: T("GREEN", "电绿"),
      line3: T("Electric accents · fast rhythm", "电光点缀 · 快节奏"),
      curve: T("HYPER GRID", "超网格"),
      body: T("Cyber-like typography preview.\nKeep headline, sub, and details aligned.", "赛博字型预览。\n保持标题、副标题与细节对齐。"),
    };
  }
  return {
    line1: T("Summer", "夏日"),
    line2: T("Festival", "庆典"),
    line3: T("2024", "2024"),
    curve: T("LIVE MUSIC · ART · FOOD", "音乐现场 · 艺术 · 美食"),
    body: T("Event details and venue copy go here.\nDouble-click any text with the Type tool to edit.", "活动详情与场地说明可写在此处。\n用文字工具双击即可编辑。"),
  };
}

function gridseed_applyStarterKit(doc, themeId, lang) {
  var b = gridseed_artboardBounds(doc);
  var left = b.left;
  var top = b.top;
  var right = b.right;
  var bottom = b.bottom;
  var aw = right - left;
  var ah = top - bottom;
  var minSide = Math.min(aw, ah);
  var typRef = gridseed_typographicRefPt(aw, ah);
  var scale = gridseed_typographyScale(typRef);
  var inset = gridseed_safeMarginPt(doc, Math.max(24, aw * 0.06));
  var innerL = left + inset;
  var innerR = right - inset;
  var innerT = top - inset;
  var innerB = bottom + inset;

  var starter = doc.layers.add();
  starter.name = "GridSeed Starter";
  try {
    starter.zOrder(ZOrder.sendToBack);
  } catch (eZ) {}

  var copyLayer = gridseed_getOrCreateLayer(doc, "GridSeed Copy");
  try {
    doc.activeLayer = copyLayer;
  } catch (eAct) {}

  var th = themeId || "cool_summer";
  var validTh =
    " cool_summer bold_navy warm_plum mono_wave swiss_red forest_emerald sunset_orange royal_violet minimal_mist desert_sand midnight_neo paper_collage acid_green ";
  if (validTh.indexOf(" " + th + " ") < 0) {
    th = "cool_summer";
  }
  lang = lang === "zh" ? "zh" : "en";
  var str = gridseed_starterStrings(th, lang);

  // Title needs to feel legible on both small & large canvases.
  var headPt = Math.round(10 * Math.max(16, Math.min(160, 38 * scale))) / 10;
  var subPt = Math.round(10 * Math.max(12, Math.min(88, 24 * scale))) / 10;
  var bodyPt = Math.round(10 * Math.max(9, Math.min(44, 13 * scale))) / 10;
  var curvePt = Math.round(10 * Math.max(11, Math.min(60, 18 * scale))) / 10;
  var gap = Math.max(7, 12 * scale);

  var tw0 = innerR - innerL;
  var cappedPt = gridseed_capTypeSizesToColumn(tw0, headPt, subPt, bodyPt, curvePt);
  headPt = cappedPt.headPt;
  subPt = cappedPt.subPt;
  bodyPt = cappedPt.bodyPt;
  curvePt = cappedPt.curvePt;

  var aspect = aw / Math.max(ah, 1e-6);
  var bandLow = 0.2;
  var yGapMul = 1.75;
  if (aspect > 1.35) {
    bandLow = 0.14;
    yGapMul = 1.38;
  } else if (aspect < 0.82) {
    bandLow = 0.27;
    yGapMul = 2.05;
  }
  var y = innerT - gap * yGapMul;
  var textBandBottom = innerB + ah * bandLow;
  var availableTextH = Math.max(ah * 0.3, y - textBandBottom);
  var boxHeadH = Math.max(headPt * 1.28, Math.min(availableTextH * 0.24, ah * 0.14));
  var boxSubH = Math.max(subPt * 1.35, Math.min(availableTextH * 0.14, ah * 0.09));
  var boxBodyH = Math.max(bodyPt * 4.2, Math.min(availableTextH * 0.38, ah * 0.24));
  var tw = tw0;

  // #region agent log
  gridseed_debugWriteFlat(
    "H_TEXT_STARTER_SCALE",
    "hostscript.jsx:gridseed_applyStarterKit:scale",
    "starter_scale_metrics",
    {
      themeId: th,
      artW: aw,
      artH: ah,
      minSide: minSide,
      typRef: typRef,
      scale: scale,
      headPt: headPt,
      subPt: subPt,
      bodyPt: bodyPt,
      curvePt: curvePt,
      gap: gap,
      inset: inset,
      textW: tw
    }
  );
  // #endregion

  if (th === "cool_summer") {
    gridseed_addBackgroundRect(doc, starter, left, top, right, bottom, 255, 255, 255);
    var yWave = innerB + (innerT - innerB) * 0.42;
    gridseed_closedWaveRegion(
      starter,
      left,
      top,
      right,
      bottom,
      yWave,
      (innerT - innerB) * 0.045,
      1.25,
      0,
      gridseed_rgb255(42, 157, 143)
    );
    gridseed_addEllipseBlob(starter, left + aw * 0.25, innerB + ah * 0.22, aw * 0.35, ah * 0.14, -18, gridseed_rgb255(168, 213, 186), 92);
    gridseed_addEllipseBlob(starter, left + aw * 0.62, innerB + ah * 0.12, aw * 0.28, ah * 0.11, 22, gridseed_rgb255(69, 183, 209), 88);
    gridseed_addNamedSwatch(doc, "Teal", 42, 157, 143);
    gridseed_addNamedSwatch(doc, "Mint", 168, 213, 186);
    gridseed_addNamedSwatch(doc, "Sky", 69, 183, 209);
  } else if (th === "bold_navy") {
    gridseed_addBackgroundRect(doc, starter, left, top, right, bottom, 26, 54, 93);
    var yW2 = innerB + (innerT - innerB) * 0.38;
    gridseed_closedWaveRegion(
      starter,
      left,
      top,
      right,
      bottom,
      yW2,
      (innerT - innerB) * 0.05,
      1,
      0.4,
      gridseed_rgb255(230, 57, 70)
    );
    gridseed_addEllipseBlob(starter, left + aw * 0.7, innerB + ah * 0.2, aw * 0.22, ah * 0.12, 12, gridseed_rgb255(255, 255, 255), 12);
    gridseed_addNamedSwatch(doc, "Navy", 26, 54, 93);
    gridseed_addNamedSwatch(doc, "Accent red", 230, 57, 70);
  } else if (th === "warm_plum") {
    gridseed_addBackgroundRect(doc, starter, left, top, right, bottom, 74, 25, 66);
    gridseed_addEllipseBlob(starter, left + aw * 0.35, innerB + ah * 0.18, aw * 0.4, ah * 0.16, -8, gridseed_rgb255(201, 24, 74), 85);
    gridseed_addEllipseBlob(starter, left + aw * 0.55, innerB + ah * 0.1, aw * 0.35, ah * 0.12, 15, gridseed_rgb255(255, 183, 3), 78);
    gridseed_addNamedSwatch(doc, "Plum", 74, 25, 66);
    gridseed_addNamedSwatch(doc, "Magenta", 201, 24, 74);
    gridseed_addNamedSwatch(doc, "Amber", 255, 183, 3);
  } else if (th === "mono_wave") {
    gridseed_addBackgroundRect(doc, starter, left, top, right, bottom, 255, 255, 255);
    var ySplit = innerB + (innerT - innerB) * 0.48;
    var dark = gridseed_rgb255(20, 20, 20);
    gridseed_closedWaveRegion(starter, left, top, right, bottom, ySplit, (innerT - innerB) * 0.04, 1, 0, dark);
    gridseed_addNamedSwatch(doc, "Ink", 20, 20, 20);
    gridseed_addNamedSwatch(doc, "Paper", 255, 255, 255);
  } else if (th === "swiss_red") {
    gridseed_addBackgroundRect(doc, starter, left, top, right, bottom, 252, 252, 250);
    gridseed_addStrokedRect(doc, "GridSeed Starter", innerL, innerT, innerR, innerB, 220, 30, 40, 1.25);
    gridseed_addNamedSwatch(doc, "Swiss red", 220, 30, 40);
  } else if (th === "forest_emerald") {
    gridseed_addBackgroundRect(doc, starter, left, top, right, bottom, 245, 250, 247);
    gridseed_addStrokedRect(doc, "GridSeed Starter", innerL, innerT, innerR, innerB, 18, 170, 105, 1.2);
    var yF = innerB + (innerT - innerB) * 0.46;
    gridseed_closedWaveRegion(
      starter,
      left,
      top,
      right,
      bottom,
      yF,
      (innerT - innerB) * 0.035,
      1.15,
      0.2,
      gridseed_rgb255(26, 198, 120)
    );
    gridseed_addEllipseBlob(starter, left + aw * 0.23, innerB + ah * 0.2, aw * 0.26, ah * 0.12, -10, gridseed_rgb255(210, 240, 220), 80);
    gridseed_addEllipseBlob(starter, left + aw * 0.68, innerB + ah * 0.08, aw * 0.22, ah * 0.1, 16, gridseed_rgb255(45, 155, 105), 65);
    gridseed_addNamedSwatch(doc, "Emerald", 18, 170, 105);
    gridseed_addNamedSwatch(doc, "Moss light", 210, 240, 220);
  } else if (th === "sunset_orange") {
    gridseed_addBackgroundRect(doc, starter, left, top, right, bottom, 255, 246, 236);
    var yS = innerB + (innerT - innerB) * 0.52;
    gridseed_closedWaveRegion(
      starter,
      left,
      top,
      right,
      bottom,
      yS,
      (innerT - innerB) * 0.03,
      1,
      0.1,
      gridseed_rgb255(255, 126, 24)
    );
    gridseed_addStrokedRect(doc, "GridSeed Starter", innerL, innerT, innerR, innerB, 210, 93, 28, 1.15);
    gridseed_addEllipseBlob(starter, left + aw * 0.55, innerB + ah * 0.18, aw * 0.28, ah * 0.12, 8, gridseed_rgb255(255, 183, 88), 80);
    gridseed_addEllipseBlob(starter, left + aw * 0.22, innerB + ah * 0.28, aw * 0.22, ah * 0.1, -14, gridseed_rgb255(236, 92, 52), 70);
    gridseed_addNamedSwatch(doc, "Coral", 236, 92, 52);
    gridseed_addNamedSwatch(doc, "Clay", 210, 93, 28);
  } else if (th === "royal_violet") {
    gridseed_addBackgroundRect(doc, starter, left, top, right, bottom, 55, 18, 86);
    var yR = innerB + (innerT - innerB) * 0.44;
    gridseed_closedWaveRegion(
      starter,
      left,
      top,
      right,
      bottom,
      yR,
      (innerT - innerB) * 0.045,
      1.1,
      0.25,
      gridseed_rgb255(188, 116, 255)
    );
    gridseed_addStrokedRect(doc, "GridSeed Starter", innerL, innerT, innerR, innerB, 235, 210, 255, 1.25);
    gridseed_addEllipseBlob(starter, left + aw * 0.72, innerB + ah * 0.2, aw * 0.22, ah * 0.11, 20, gridseed_rgb255(235, 210, 255), 55);
    gridseed_addEllipseBlob(starter, left + aw * 0.25, innerB + ah * 0.08, aw * 0.28, ah * 0.12, -18, gridseed_rgb255(105, 220, 255), 60);
    gridseed_addNamedSwatch(doc, "Violet", 188, 116, 255);
    gridseed_addNamedSwatch(doc, "Silver", 235, 210, 255);
  } else if (th === "minimal_mist") {
    gridseed_addBackgroundRect(doc, starter, left, top, right, bottom, 248, 248, 252);
    gridseed_addStrokedRect(doc, "GridSeed Starter", innerL, innerT, innerR, innerB, 28, 210, 255, 1.05);
    gridseed_addStrokedRect(doc, "GridSeed Starter", innerL + aw * 0.04, innerT - ah * 0.04, innerR - aw * 0.04, innerB + ah * 0.04, 135, 75, 255, 0.9);
    gridseed_addEllipseBlob(starter, left + aw * 0.62, innerB + ah * 0.2, aw * 0.12, ah * 0.06, 0, gridseed_rgb255(28, 210, 255), 65);
    gridseed_addNamedSwatch(doc, "Mist cyan", 28, 210, 255);
    gridseed_addNamedSwatch(doc, "Mist violet", 135, 75, 255);
  } else if (th === "desert_sand") {
    gridseed_addBackgroundRect(doc, starter, left, top, right, bottom, 247, 233, 211);
    gridseed_addStrokedRect(doc, "GridSeed Starter", innerL, innerT, innerR, innerB, 212, 160, 23, 1.2);
    var yD = innerB + (innerT - innerB) * 0.43;
    gridseed_closedWaveRegion(
      starter,
      left,
      top,
      right,
      bottom,
      yD,
      (innerT - innerB) * 0.04,
      1.0,
      0.2,
      gridseed_rgb255(244, 162, 97)
    );
    gridseed_addEllipseBlob(starter, left + aw * 0.72, innerB + ah * 0.18, aw * 0.16, ah * 0.08, 12, gridseed_rgb255(249, 199, 79), 75);
    gridseed_addEllipseBlob(starter, left + aw * 0.25, innerB + ah * 0.28, aw * 0.22, ah * 0.11, -10, gridseed_rgb255(212, 160, 23), 85);
    gridseed_addNamedSwatch(doc, "Desert gold", 212, 160, 23);
    gridseed_addNamedSwatch(doc, "Terracotta", 244, 162, 97);
  } else if (th === "midnight_neo") {
    gridseed_addBackgroundRect(doc, starter, left, top, right, bottom, 7, 10, 26);
    var neon = gridseed_rgb255(0, 240, 255);
    gridseed_addStrokedRect(doc, "GridSeed Starter", innerL, innerT, innerR, innerB, 0, 240, 255, 1.35);
    var yM = innerB + (innerT - innerB) * 0.48;
    gridseed_closedWaveRegion(starter, left, top, right, bottom, yM, (innerT - innerB) * 0.03, 1.1, 0.1, neon);
    gridseed_addEllipseBlob(starter, left + aw * 0.25, innerB + ah * 0.2, aw * 0.18, ah * 0.08, -16, gridseed_rgb255(123, 255, 181), 55);
    gridseed_addEllipseBlob(starter, left + aw * 0.68, innerB + ah * 0.14, aw * 0.2, ah * 0.09, 10, gridseed_rgb255(188, 116, 255), 65);
    gridseed_addNamedSwatch(doc, "Neon cyan", 0, 240, 255);
    gridseed_addNamedSwatch(doc, "Neon violet", 188, 116, 255);
  } else if (th === "paper_collage") {
    gridseed_addBackgroundRect(doc, starter, left, top, right, bottom, 250, 250, 247);
    var a1 = gridseed_rgb255(108, 138, 228);
    var b1 = gridseed_rgb255(242, 157, 75);
    var c1 = gridseed_rgb255(139, 211, 199);
    // Collage strips (use strokes for stability across Illustrator builds).
    gridseed_addStrokedRect(
      doc,
      "GridSeed Starter",
      innerL + aw * 0.06,
      innerT - ah * 0.12,
      innerL + aw * 0.56,
      innerT - ah * 0.32,
      108,
      138,
      228,
      1.8
    );
    gridseed_addStrokedRect(
      doc,
      "GridSeed Starter",
      innerL + aw * 0.08,
      innerT - ah * 0.08,
      innerL + aw * 0.52,
      innerT - ah * 0.25,
      242,
      157,
      75,
      1.3
    );
    gridseed_addStrokedRect(
      doc,
      "GridSeed Starter",
      innerL + aw * 0.53,
      innerT - ah * 0.05,
      innerR - aw * 0.06,
      innerT - ah * 0.22,
      139,
      211,
      199,
      1.6
    );
    var yP = innerB + (innerT - innerB) * 0.42;
    gridseed_closedWaveRegion(starter, left, top, right, bottom, yP, (innerT - innerB) * 0.02, 0.9, 0.1, a1);
    gridseed_addEllipseBlob(starter, left + aw * 0.32, innerB + ah * 0.72, aw * 0.12, ah * 0.06, 0, b1, 60);
    gridseed_addEllipseBlob(starter, left + aw * 0.72, innerB + ah * 0.62, aw * 0.16, ah * 0.07, 8, c1, 55);
    gridseed_addNamedSwatch(doc, "Collage blue", 108, 138, 228);
    gridseed_addNamedSwatch(doc, "Collage coral", 242, 157, 75);
  } else if (th === "acid_green") {
    gridseed_addBackgroundRect(doc, starter, left, top, right, bottom, 240, 255, 244);
    gridseed_addStrokedRect(doc, "GridSeed Starter", innerL, innerT, innerR, innerB, 57, 255, 20, 1.25);
    var yA = innerB + (innerT - innerB) * 0.46;
    gridseed_closedWaveRegion(starter, left, top, right, bottom, yA, (innerT - innerB) * 0.035, 1.2, 0.1, gridseed_rgb255(57, 255, 20));
    gridseed_addEllipseBlob(starter, left + aw * 0.72, innerB + ah * 0.18, aw * 0.18, ah * 0.09, 14, gridseed_rgb255(0, 179, 255), 70);
    gridseed_addEllipseBlob(starter, left + aw * 0.25, innerB + ah * 0.28, aw * 0.22, ah * 0.11, -12, gridseed_rgb255(166, 255, 122), 85);
    gridseed_addNamedSwatch(doc, "Acid green", 57, 255, 20);
    gridseed_addNamedSwatch(doc, "Cyber blue", 0, 179, 255);
  }

  var headColor = gridseed_rgb255(20, 20, 20);
  if (
    th === "bold_navy" ||
    th === "warm_plum" ||
    th === "royal_violet" ||
    th === "midnight_neo"
  ) {
    headColor = gridseed_rgb255(255, 255, 255);
  }
  if (th === "swiss_red") {
    headColor = gridseed_rgb255(200, 30, 40);
  }

  var tf1 = gridseed_addAreaText(
    doc,
    copyLayer,
    innerL,
    y,
    tw,
    boxHeadH,
    str.line1,
    "geometric",
    true,
    headPt,
    headPt * 1.05,
    true,
    lang
  );
  if (tf1) {
    try {
      tf1.textRange.characterAttributes.fillColor = headColor;
    } catch (eC1) {}
    gridseed_shrinkAreaTextIfOverflow(tf1, 12.5, 1.0, 1.06);
  }
  y -= boxHeadH + gap * 0.5;

  var tf2 = gridseed_addAreaText(
    doc,
    copyLayer,
    innerL,
    y,
    tw,
    boxSubH,
    str.line2,
    "geometric",
    true,
    subPt,
    subPt * 1.08,
    true,
    lang
  );
  if (tf2) {
    try {
      tf2.textRange.characterAttributes.fillColor = headColor;
    } catch (eC2) {}
    gridseed_shrinkAreaTextIfOverflow(tf2, 10.5, 0.95, 1.08);
  }
  y -= boxSubH + gap * 0.5;

  var tf3 = gridseed_addAreaText(
    doc,
    copyLayer,
    innerL,
    y,
    tw,
    boxSubH * 0.9,
    str.line3,
    "neo_grotesk",
    true,
    subPt * 0.85,
    subPt * 0.95,
    true,
    lang
  );
  if (tf3) {
    try {
      var subCol =
        th === "bold_navy" ||
        th === "warm_plum" ||
        th === "royal_violet" ||
        th === "midnight_neo"
          ? gridseed_rgb255(230, 230, 235)
          : gridseed_rgb255(80, 80, 85);
      if (th === "swiss_red") {
        subCol = gridseed_rgb255(60, 60, 60);
      }
      if (th === "forest_emerald") {
        subCol = gridseed_rgb255(18, 170, 105);
      }
      if (th === "sunset_orange") {
        subCol = gridseed_rgb255(210, 93, 28);
      }
      tf3.textRange.characterAttributes.fillColor = subCol;
    } catch (eC3) {}
    gridseed_shrinkAreaTextIfOverflow(tf3, 9.5, 0.85, 0.98);
  }
  y -= boxSubH + gap * 1.5;
  var remainingTextH = Math.max(bodyPt * 4.2, y - textBandBottom);
  boxBodyH = Math.min(boxBodyH, remainingTextH * 0.66);
  var bodyTf = gridseed_addAreaText(doc, copyLayer, innerL, y, tw, boxBodyH, str.body, "humanist", false, bodyPt, bodyPt * 1.45, true, lang);
  if (bodyTf && th === "mono_wave") {
    try {
      bodyTf.textRange.characterAttributes.fillColor = gridseed_rgb255(230, 230, 232);
    } catch (eM) {}
  }
  if (bodyTf) {
    gridseed_shrinkAreaTextIfOverflow(bodyTf, 7.5, 0.8, 1.42);
  }

  var yCurve = Math.max(textBandBottom + bodyPt * 1.2, y - boxBodyH - gap * 1.1);
  var ampC = (innerT - innerB) * 0.028;
  var wavePts = gridseed_wavePoints(innerL, innerR, bottom, yCurve, ampC, 1.1, 0.2, 48);
  var curveCol =
    th === "bold_navy" ||
    th === "warm_plum" ||
    th === "royal_violet" ||
    th === "midnight_neo"
      ? gridseed_rgb255(255, 255, 255)
      : gridseed_rgb255(30, 30, 35);
  if (th === "swiss_red") {
    curveCol = gridseed_rgb255(200, 30, 40);
  }
  if (th === "forest_emerald") {
    curveCol = gridseed_rgb255(18, 170, 105);
  }
  if (th === "sunset_orange") {
    curveCol = gridseed_rgb255(236, 92, 52);
  }
  var ptf = gridseed_tryPathText(doc, copyLayer, wavePts, str.curve, curvePt, "geometric", lang);
  if (ptf) {
    try {
      ptf.textRange.characterAttributes.fillColor = curveCol;
    } catch (eP) {}
    gridseed_shrinkPathTextIfOverflow(ptf, Math.max(8, curvePt * 0.48), 0.75);
  }

  try {
    starter.printable = true;
  } catch (ePr) {}
  try {
    copyLayer.printable = true;
  } catch (ePc) {}

  // #region agent log
  gridseed_debugWriteFlat(
    "H_TEXT_STARTER_PLACED",
    "hostscript.jsx:gridseed_applyStarterKit:placed",
    "starter_text_layout",
    {
      yStart: innerT - gap * 2,
      boxHeadH: boxHeadH,
      boxSubH: boxSubH,
      boxBodyH: boxBodyH,
      yAfterText: y,
      bodyLead: bodyPt * 1.45,
      yCurve: yCurve,
      themeId: th
    }
  );
  // #endregion

  gridseed_bringConstructionToFront(doc);
  try {
    app.redraw();
  } catch (eR) {}
  return "OK";
}

function gridseed_applyStarterKitFull(templateId, themeId, lang) {
  var r = gridseed_applyTemplate(templateId);
  if (r.indexOf("ERR") === 0) {
    return r;
  }
  var doc = app.activeDocument;
  if (!doc) {
    return "ERR:no_document";
  }
  return gridseed_applyStarterKit(doc, themeId, lang);
}

function gridseed_createCustomPxTemplate(pxW, pxH) {
  return gridseed_createComposeDocument(pxW, pxH, 0, 0, "rule_of_thirds");
}

/**
 * RGB pixel doc: trim size pxW x pxH, optional bleed (pt) expands artboard; draws trim/safe guides; applies grid inset.
 */
function gridseed_createComposeDocument(pxW, pxH, bleedPt, safeMm, gridId) {
  var w = Math.max(200, parseInt(pxW, 10) || 1200);
  var h = Math.max(200, parseInt(pxH, 10) || 1200);
  var doc = app.documents.add(DocumentColorSpace.RGB);
  try {
    doc.activate();
  } catch (eAct) {}
  gridseed_applyDocPrefs(doc, "RGB", "Pixels");
  var trimRect = gridseed_artboardRectFromSizePt(w, h);
  var bPt = bleedPt || 0;
  var sMm = safeMm || 0;
  if (bPt > 0) {
    gridseed_setActiveArtboardRect(doc, [
      trimRect[0] - bPt,
      trimRect[1] + bPt,
      trimRect[2] + bPt,
      trimRect[3] - bPt,
    ]);
    gridseed_drawTrimAndSafeGuides(doc, { bleedPt: bPt, marginMm: sMm });
  } else {
    gridseed_setActiveArtboardRect(doc, trimRect);
    if (sMm > 0) {
      gridseed_drawTrimAndSafeGuides(doc, { bleedPt: 0, marginMm: sMm });
    }
  }
  var gid = gridId || "rule_of_thirds";
  var inset = bPt + (sMm > 0 ? gridseed_mmToPt(sMm) : 0);
  try {
    gridseed_applyGrid(gid, false, inset > 0 ? inset : undefined);
  } catch (eG) {}
  return "OK";
}

/** After applyTemplate: expand artboard by bleed, refresh trim/safe guides, rebuild grid inset from panel. */
function gridseed_composeApplyBleedFromPanel(templateId, bleedPt, safeMm) {
  var doc = app.activeDocument;
  if (!doc) {
    return "ERR:no_document";
  }
  var bPt = bleedPt || 0;
  var sMm = safeMm || 0;
  if (bPt <= 0 && sMm <= 0) {
    return "OK";
  }
  var spec = gridseed_getTemplateSpec(templateId);
  var gid = spec && spec.defaultGrid ? spec.defaultGrid : gridseed_defaultGridIdForTemplate(templateId);
  var b = gridseed_artboardBounds(doc);
  if (bPt > 0) {
    gridseed_setActiveArtboardRect(doc, [b.left - bPt, b.top + bPt, b.right + bPt, b.bottom - bPt]);
  }
  gridseed_drawTrimAndSafeGuides(doc, { bleedPt: bPt, marginMm: sMm });
  gridseed_clearGridSeedConstructionLayers(doc);
  var safePt = sMm > 0 ? gridseed_mmToPt(sMm) : 0;
  var inset = bPt + safePt;
  try {
    gridseed_applyGrid(gid, false, inset > 0 ? inset : undefined);
  } catch (eG) {}
  return "OK";
}

function gridseed_composeLayoutRects(doc, layoutId, imgCount, imgScalePct, gapPct, layoutInsetPt) {
  gridseed_removeLayerByName(doc, "GridSeed Layout Plan");
  var layer = doc.layers.add();
  layer.name = "GridSeed Layout Plan";
  var b = gridseed_artboardBounds(doc);
  var inset = parseFloat(layoutInsetPt) || 0;
  if (inset < 0) {
    inset = 0;
  }
  var left = b.left + inset;
  var top = b.top - inset;
  var right = b.right - inset;
  var bottom = b.bottom + inset;
  var aw = right - left;
  var ah = top - bottom;
  if (aw <= 4 || ah <= 4) {
    return "ERR:compose_layout_inset_too_large";
  }
  var margin = Math.max(16, Math.min(aw, ah) * 0.05);
  var x0 = left + margin;
  var y0 = top - margin;
  var iw = aw - 2 * margin;
  var ih = ah - 2 * margin;
  var layoutMinDim = Math.min(iw, ih);
  var n = Math.max(1, imgCount | 0);
  var scale = Math.max(0.6, Math.min(1.2, (parseFloat(imgScalePct) || 100) / 100));
  var gapMul = Math.max(0, Math.min(0.3, (parseFloat(gapPct) || 0) / 100));
  var stroke = gridseed_rgb255(255, 200, 120);
  function addSlotLabel(x, yTop, w, h, idx) {
    try {
      var slotShort = Math.min(w, h);
      var padX = Math.max(4, Math.min(20, w * 0.06, layoutMinDim * 0.022));
      var padY = Math.max(4, Math.min(22, h * 0.09, layoutMinDim * 0.024));
      var tf = layer.textFrames.pointText([x + padX, yTop - padY]);
      tf.contents = "Photo " + idx;
      var sz = Math.round(10 * Math.max(7, Math.min(42, slotShort * 0.14, layoutMinDim * 0.048))) / 10;
      tf.textRange.characterAttributes.size = sz;
      tf.textRange.characterAttributes.fillColor = gridseed_rgb255(255, 200, 120);
    } catch (eTxt) {}
  }
  if (layoutId === "masonry") {
    var m = [
      [0.0, 0.0, 0.29, 0.28],
      [0.33, 0.0, 0.30, 0.42],
      [0.66, 0.0, 0.34, 0.22],
      [0.0, 0.33, 0.27, 0.24],
      [0.66, 0.27, 0.34, 0.37],
      [0.3, 0.48, 0.32, 0.2],
      [0.0, 0.62, 0.24, 0.31],
      [0.3, 0.71, 0.32, 0.2],
      [0.66, 0.69, 0.34, 0.22],
    ];
    var mi;
    for (mi = 0; mi < Math.min(n, m.length); mi++) {
      var mx = x0 + iw * m[mi][0];
      var myTop = y0 - ih * m[mi][1];
      var mw = iw * m[mi][2];
      var mh = ih * m[mi][3];
      var tw = mw * scale * (1 - gapMul);
      var th = mh * scale * (1 - gapMul);
      var tx = mx + (mw - tw) / 2;
      var ty = myTop - (mh - th) / 2;
      var rM = layer.pathItems.rectangle(ty, tx, tw, th);
      rM.stroked = true;
      rM.filled = false;
      rM.strokeWidth = 1.2;
      rM.strokeColor = stroke;
      addSlotLabel(tx, ty, tw, th, mi + 1);
    }
    return "OK";
  }
  var rows = 2;
  var cols = 2;
  if (layoutId === "12col_web") {
    rows = 1;
    cols = 12;
  } else if (layoutId === "6col_editorial") {
    rows = 1;
    cols = 6;
  } else if (layoutId === "rule_of_thirds" || layoutId === "bento_3x3") {
    rows = 3;
    cols = 3;
  } else if (layoutId === "golden_ratio") {
    var gr = [
      [0.0, 0.0, 0.62, 0.62],
      [0.64, 0.0, 0.36, 0.38],
      [0.64, 0.40, 0.36, 0.22],
      [0.0, 0.64, 1.0, 0.36],
    ];
    var gi;
    for (gi = 0; gi < Math.min(n, gr.length); gi++) {
      var gx = x0 + iw * gr[gi][0];
      var gyTop = y0 - ih * gr[gi][1];
      var gw = iw * gr[gi][2];
      var gh = ih * gr[gi][3];
      var gtw = gw * scale * (1 - gapMul);
      var gth = gh * scale * (1 - gapMul);
      var gtx = gx + (gw - gtw) / 2;
      var gty = gyTop - (gh - gth) / 2;
      var gRect = layer.pathItems.rectangle(gty, gtx, gtw, gth);
      gRect.stroked = true;
      gRect.filled = false;
      gRect.strokeWidth = 1.2;
      gRect.strokeColor = stroke;
      addSlotLabel(gtx, gty, gtw, gth, gi + 1);
    }
    return "OK";
  } else if (layoutId === "modular_8") {
    rows = 2;
    cols = 4;
  } else if (layoutId === "3x2") {
    rows = 3;
    cols = 2;
  } else if (layoutId === "3x3") {
    rows = 3;
    cols = 3;
  } else if (layoutId === "4x2") {
    rows = 4;
    cols = 2;
  } else if (layoutId === "2x4") {
    rows = 2;
    cols = 4;
  } else if (layoutId === "4x3") {
    rows = 4;
    cols = 3;
  }
  var gapW = iw * 0.02;
  var gapH = ih * 0.02;
  var cw = (iw - gapW * (cols - 1)) / cols;
  var ch = (ih - gapH * (rows - 1)) / rows;
  var i;
  for (i = 0; i < n; i++) {
    var c = i % cols;
    var r = Math.floor(i / cols);
    if (r >= rows) {
      break;
    }
    var x = x0 + c * (cw + gapW);
    var yTop = y0 - r * (ch + gapH);
    var tw2 = cw * scale * (1 - gapMul);
    var th2 = ch * scale * (1 - gapMul);
    var tx2 = x + (cw - tw2) / 2;
    var ty2 = yTop - (ch - th2) / 2;
    var rect = layer.pathItems.rectangle(ty2, tx2, tw2, th2);
    rect.stroked = true;
    rect.filled = false;
    rect.strokeWidth = 1.2;
    rect.strokeColor = stroke;
    addSlotLabel(tx2, ty2, tw2, th2, i + 1);
  }
  return "OK";
}

function gridseed_groupLayersResult(doc, layerNames) {
  var outLayer = gridseed_getOrCreateLayer(doc, "GridSeed Output");
  var grp = outLayer.groupItems.add();
  grp.name = "GridSeed Composed";
  var i;
  for (i = 0; i < layerNames.length; i++) {
    var lyr = gridseed_getLayerByName(doc, layerNames[i]);
    if (!lyr) continue;
    var j;
    for (j = lyr.pageItems.length - 1; j >= 0; j--) {
      try {
        lyr.pageItems[j].move(grp, ElementPlacement.PLACEATBEGINNING);
      } catch (eM) {}
    }
  }
}

function gridseed_composeGrid(templateId, themeId, lang, layoutId, imgCount, imgScalePct, gapPct, bleedMm, safeMm) {
  var bleedMmNum = parseFloat(bleedMm);
  if (isNaN(bleedMmNum) || bleedMmNum < 0) {
    bleedMmNum = 0;
  }
  var safeMmNum = parseFloat(safeMm);
  if (isNaN(safeMmNum) || safeMmNum < 0) {
    safeMmNum = 0;
  }
  var bleedPt = gridseed_mmToPt(bleedMmNum);
  var safePt = gridseed_mmToPt(safeMmNum);
  var layoutInset = bleedPt + safePt;
  var r;
  if (String(templateId).indexOf("custom_px_") === 0) {
    var p = String(templateId).split("_");
    r = gridseed_createComposeDocument(
      p[2],
      p[3],
      bleedPt,
      safeMmNum,
      gridseed_defaultGridIdForTemplate(templateId)
    );
  } else {
    r = gridseed_applyTemplate(templateId);
    if (r.indexOf("ERR") !== 0) {
      r = gridseed_composeApplyBleedFromPanel(templateId, bleedPt, safeMmNum);
    }
  }
  if (r.indexOf("ERR") === 0) {
    return r;
  }
  var doc = app.activeDocument;
  if (!doc) return "ERR:no_document";
  var s = gridseed_applyStarterKit(doc, themeId, lang);
  if (s.indexOf("ERR") === 0) {
    return s;
  }
  var l = gridseed_composeLayoutRects(doc, layoutId, imgCount, imgScalePct, gapPct, layoutInset);
  if (l.indexOf("ERR") === 0) {
    return l;
  }
  gridseed_groupLayersResult(doc, ["GridSeed Starter", "GridSeed Layout Plan", "GridSeed Grid"]);
  try {
    app.redraw();
  } catch (eR) {}
  return "OK";
}

function gridseed_lp_contentPlanWeights(imgCount, bodyBlocks, subCount) {
  var ic = Math.max(0, imgCount | 0);
  var bb = Math.max(0, bodyBlocks | 0);
  var sc = Math.max(0, subCount | 0);
  var wImg = ic * 1.2;
  var wBody = bb * 1.0;
  var wSub = sc * 0.35;
  var total = wImg + wBody + wSub;
  if (total <= 0) {
    return { img: 0.5, text: 0.5 };
  }
  var imgR = wImg / total;
  var textR = (wBody + wSub) / total;
  imgR = Math.max(0.12, Math.min(0.78, imgR));
  textR = Math.max(0.12, Math.min(0.78, textR));
  var sum = imgR + textR;
  return { img: imgR / sum, text: textR / sum };
}

function gridseed_lp_computeImageGridCols(zoneW, zoneH, imgCount) {
  var n = Math.max(1, imgCount | 0);
  if (n <= 1) {
    return { cols: 1, rows: 1 };
  }
  var ar = zoneW / Math.max(zoneH, 1e-6);
  var cols = Math.round(Math.sqrt(n * ar));
  cols = Math.max(1, Math.min(n, cols));
  var rows = Math.ceil(n / cols);
  return { cols: cols, rows: rows };
}

function gridseed_lp_splitImageZone(rect, cols, rows, imgCount, gapFrac) {
  var g = gapFrac == null ? 0.04 : gapFrac;
  var gw = rect.w * g;
  var gh = rect.h * g;
  var cw = (rect.w - gw * (cols - 1)) / cols;
  var ch = (rect.h - gh * (rows - 1)) / rows;
  var cells = [];
  var i;
  for (i = 0; i < imgCount; i++) {
    var col = i % cols;
    var row = Math.floor(i / cols);
    cells.push({
      x: rect.x + col * (cw + gw),
      y: rect.y + row * (ch + gh),
      w: cw,
      h: ch,
    });
  }
  return { cellW: cw, cellH: ch, gapW: gw, gapH: gh, cells: cells };
}

function gridseed_lp_aspectFromSlot(slot) {
  if (!slot) {
    return 16 / 9;
  }
  if (slot.mode === "dim") {
    var pw = parseFloat(slot.pxW) || 1200;
    var ph = parseFloat(slot.pxH) || 800;
    return pw / Math.max(ph, 1e-6);
  }
  var rw = parseFloat(slot.ratioW) || 16;
  var rh = parseFloat(slot.ratioH) || 9;
  return rw / Math.max(rh, 1e-6);
}

function gridseed_lp_shouldDualColumn(subCount, bodyBlocks, textZoneW, textZoneH) {
  if ((subCount | 0) !== 0) {
    return false;
  }
  if ((bodyBlocks | 0) < 6) {
    return false;
  }
  var ar = textZoneW / Math.max(textZoneH, 1e-6);
  return ar > 1.08;
}

function gridseed_lp_strokeSvgRect(layer, left, top, aw, ah, svgX, svgY, svgW, svgH, rr, gg, bb, sw) {
  var L = left + (svgX / 210) * aw;
  var R = left + ((svgX + svgW) / 210) * aw;
  var T = top - (svgY / 297) * ah;
  var B = top - ((svgY + svgH) / 297) * ah;
  var w = R - L;
  var h = T - B;
  var p = layer.pathItems.rectangle(T, L, w, h);
  p.filled = false;
  p.stroked = true;
  p.strokeWidth = sw;
  p.strokeColor = gridseed_rgb255(rr, gg, bb);
}

function gridseed_lp_lineSvg(layer, left, top, aw, ah, x1, y1, x2, y2, rr, gg, bb, sw) {
  var X1 = left + (x1 / 210) * aw;
  var X2 = left + (x2 / 210) * aw;
  var Y1 = top - (y1 / 297) * ah;
  var Y2 = top - (y2 / 297) * ah;
  var ln = layer.pathItems.add();
  ln.setEntirePath([
    [X1, Y1],
    [X2, Y2],
  ]);
  ln.stroked = true;
  ln.filled = false;
  ln.strokeWidth = sw;
  ln.strokeColor = gridseed_rgb255(rr, gg, bb);
}

function gridseed_parseLayoutPlanPayload(rest) {
  var p = rest.split("|");
  var i = 0;
  var templateId = p[i++];
  if (!templateId) {
    return null;
  }
  var layoutMode = p[i++] || "stacked";
  var planOn = p[i++] === "1";
  var imgCount = parseInt(p[i++], 10) || 0;
  var bodyBlocks = parseInt(p[i++], 10) || 0;
  var subCount = parseInt(p[i++], 10) || 0;
  var slots = [];
  var s;
  for (s = 0; s < imgCount; s++) {
    var mode = p[i++];
    if (mode === "dim") {
      slots.push({ mode: "dim", pxW: p[i++], pxH: p[i++] });
    } else {
      slots.push({ mode: "ratio", ratioW: p[i++], ratioH: p[i++] });
    }
  }
  while (slots.length < imgCount) {
    slots.push({ mode: "ratio", ratioW: 16, ratioH: 9 });
  }
  return {
    templateId: templateId,
    layoutMode: layoutMode,
    planOn: planOn,
    imgCount: imgCount,
    bodyBlocks: bodyBlocks,
    subCount: subCount,
    slots: slots,
  };
}

function gridseed_applyLayoutPlan(doc, parsed) {
  try {
    doc.activate();
  } catch (eA) {}
  gridseed_removeLayerByName(doc, "GridSeed Layout Plan");
  if (!parsed.planOn) {
    try {
      app.redraw();
    } catch (eR) {}
    return "OK";
  }
  var layer = doc.layers.add();
  layer.name = "GridSeed Layout Plan";
  try {
    layer.printable = false;
  } catch (eP) {}

  var b = gridseed_artboardBounds(doc);
  var left = b.left;
  var top = b.top;
  var right = b.right;
  var bottom = b.bottom;
  var aw = right - left;
  var ah = top - bottom;

  var margin = 18;
  var innerX = margin;
  var innerY = margin;
  var innerW = 210 - 2 * margin;
  var innerH = 297 - 2 * margin;
  var gapV = innerH * 0.012;
  var gapH = innerW * 0.015;
  var splitX = innerX + innerW * 0.42;

  var weights = gridseed_lp_contentPlanWeights(parsed.imgCount, parsed.bodyBlocks, parsed.subCount);
  var stacked = parsed.layoutMode === "stacked";
  var imgZoneH;
  var textY0;
  var textH;
  if (stacked) {
    imgZoneH = innerH * weights.img;
    textY0 = innerY + imgZoneH + gapV;
    textH = innerH - imgZoneH - gapV;
  } else {
    imgZoneH = innerH;
    textY0 = innerY;
    textH = innerH;
  }

  var imgRect = stacked
    ? { x: innerX, y: innerY, w: innerW, h: imgZoneH }
    : { x: innerX, y: innerY, w: splitX - innerX - gapH, h: innerH };
  var textRect = stacked
    ? { x: innerX, y: textY0, w: innerW, h: textH }
    : { x: splitX + gapH, y: innerY, w: innerX + innerW - splitX - gapH, h: innerH };

  gridseed_lp_strokeSvgRect(layer, left, top, aw, ah, imgRect.x, imgRect.y, imgRect.w, imgRect.h, 140, 110, 255, 0.9);
  gridseed_lp_strokeSvgRect(layer, left, top, aw, ah, textRect.x, textRect.y, textRect.w, textRect.h, 61, 214, 165, 0.85);

  var gridInfo = { cols: 1, rows: 1, gapFrac: 0.04 };
  var j;
  if (parsed.imgCount > 0) {
    var g = gridseed_lp_computeImageGridCols(imgRect.w, imgRect.h, parsed.imgCount);
    gridInfo.cols = g.cols;
    gridInfo.rows = g.rows;
    var split = gridseed_lp_splitImageZone(imgRect, g.cols, g.rows, parsed.imgCount, gridInfo.gapFrac);
    for (j = 0; j < split.cells.length; j++) {
      var c = split.cells[j];
      gridseed_lp_strokeSvgRect(layer, left, top, aw, ah, c.x, c.y, c.w, c.h, 200, 180, 255, 0.35);
      var slot = parsed.slots[j] || parsed.slots[0];
      var asp = gridseed_lp_aspectFromSlot(slot);
      var cw = c.w * 0.86;
      var ch = cw / asp;
      if (ch > c.h * 0.86) {
        ch = c.h * 0.86;
        cw = ch * asp;
      }
      var cx = c.x + (c.w - cw) / 2;
      var cy = c.y + (c.h - ch) / 2;
      gridseed_lp_strokeSvgRect(layer, left, top, aw, ah, cx, cy, cw, ch, 255, 200, 120, 0.45);
    }
  }

  var dual = gridseed_lp_shouldDualColumn(parsed.subCount, parsed.bodyBlocks, textRect.w, textRect.h);
  if (dual) {
    var mid = textRect.x + textRect.w / 2;
    gridseed_lp_lineSvg(
      layer,
      left,
      top,
      aw,
      ah,
      mid,
      textRect.y + 4,
      mid,
      textRect.y + textRect.h - 2,
      61,
      214,
      165,
      0.35
    );
  }

  var gL = gridseed_getLayerByName(doc, "GridSeed Grid");
  if (gL) {
    try {
      layer.move(gL, ElementPlacement.PLACEBEFORE);
    } catch (eM) {}
  }
  gridseed_bringConstructionToFront(doc);
  try {
    app.redraw();
  } catch (eR2) {}
  return "OK";
}

function gridseed_applyLayoutPlanFull(rest) {
  var parsed = gridseed_parseLayoutPlanPayload(rest);
  if (!parsed) {
    return "ERR:bad_payload";
  }
  var r = gridseed_applyTemplate(parsed.templateId);
  if (r.indexOf("ERR") === 0) {
    return r;
  }
  var doc = app.activeDocument;
  if (!doc) {
    return "ERR:no_document";
  }
  return gridseed_applyLayoutPlan(doc, parsed);
}

function gridseed_dispatch(payload) {
  try {
    var s = String(payload);
    var sep = s.indexOf("|");
    if (sep < 0) {
      return "ERR:bad_payload";
    }
    var cmd = s.substring(0, sep);
    var rest = s.substring(sep + 1);
    if (cmd === "template") {
      return gridseed_applyTemplate(rest);
    }
    if (cmd === "bleed_guides") {
      return gridseed_addBleedMarginGuides(rest);
    }
    if (cmd === "grid") {
      var gp = rest.split("|");
      var clear = gp[1] === "1";
      return gridseed_applyGrid(gp[0], clear);
    }
    if (cmd === "lockguides") {
      return gridseed_lockGuides();
    }
    if (cmd === "context") {
      return gridseed_documentContext();
    }
    if (cmd === "text") {
      var parsed = gridseed_parseTextPayload(rest);
      return gridseed_insertTextBlocks(parsed.body, parsed.sizeKey, parsed.fontKey);
    }
    if (cmd === "starterkit") {
      var sk = rest.split("|");
      if (sk.length < 2) {
        return "ERR:bad_payload";
      }
      var skTid = sk[0];
      var skTheme = sk[1];
      var skLang = sk.length > 2 ? sk[2] : "en";
      return gridseed_applyStarterKitFull(skTid, skTheme, skLang);
    }
    if (cmd === "layoutplan") {
      return gridseed_applyLayoutPlanFull(rest);
    }
    if (cmd === "composegrid") {
      var cg = rest.split("|");
      if (cg.length < 5) {
        return "ERR:bad_payload";
      }
      var bleedArg = cg.length > 7 ? cg[7] : "0";
      var safeArg = cg.length > 8 ? cg[8] : "0";
      return gridseed_composeGrid(
        cg[0],
        cg[1],
        cg[2],
        cg[3],
        parseInt(cg[4], 10) || 4,
        parseInt(cg[5], 10) || 100,
        parseInt(cg[6], 10) || 0,
        bleedArg,
        safeArg
      );
    }
    return "ERR:unknown_cmd";
  } catch (err) {
    return "ERR:" + (err && err.message ? err.message : String(err));
  }
}
