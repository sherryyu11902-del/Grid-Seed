/**
 * Content layout schematic — bound to Templates tab (#lp* elements)
 */
(function () {
  var NS = "http://www.w3.org/2000/svg";
  var LABEL_SCALE = 0.58;

  function LP(key, vars) {
    if (window.GridSeedI18n && typeof window.GridSeedI18n.t === "function") {
      return window.GridSeedI18n.t(key, vars);
    }
    return key;
  }

  function onLangChange() {
    if (!el("lpPreviewSvg")) return;
    var n = Math.max(0, parseInt(el("lpImgCount").value, 10) || 0);
    buildImageSlots(n);
    render();
  }

  function contentPlanWeights(imgCount, bodyBlocks, subCount) {
    var ic = Math.max(0, imgCount | 0);
    var bb = Math.max(0, bodyBlocks | 0);
    var sc = Math.max(0, subCount | 0);
    var wImg = ic * 1.2;
    var wBody = bb * 1.0;
    var wSub = sc * 0.35;
    var total = wImg + wBody + wSub;
    if (total <= 0) {
      return { img: 0.5, text: 0.5, rawImg: 0.5 };
    }
    var imgR = wImg / total;
    var textR = (wBody + wSub) / total;
    imgR = Math.max(0.12, Math.min(0.78, imgR));
    textR = Math.max(0.12, Math.min(0.78, textR));
    var sum = imgR + textR;
    return {
      img: imgR / sum,
      text: textR / sum,
      rawImg: wImg / total,
    };
  }

  function computeImageGridCols(zoneW, zoneH, imgCount) {
    var n = Math.max(1, imgCount | 0);
    if (n <= 1) return { cols: 1, rows: 1 };
    var ar = zoneW / Math.max(zoneH, 1e-6);
    var cols = Math.round(Math.sqrt(n * ar));
    cols = Math.max(1, Math.min(n, cols));
    var rows = Math.ceil(n / cols);
    return { cols: cols, rows: rows };
  }

  function splitImageZone(rect, cols, rows, imgCount, gapFrac) {
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

  function shouldDualColumnText(subCount, bodyBlocks, textZoneW, textZoneH) {
    if ((subCount | 0) !== 0) return false;
    if ((bodyBlocks | 0) < 6) return false;
    var ar = textZoneW / Math.max(textZoneH, 1e-6);
    return ar > 1.08;
  }

  function el(id) {
    return document.getElementById(id);
  }

  function clearSvg(svg) {
    while (svg.firstChild) svg.removeChild(svg.firstChild);
  }

  function rectNode(x, y, w, h, attrs) {
    var r = document.createElementNS(NS, "rect");
    r.setAttribute("x", x);
    r.setAttribute("y", y);
    r.setAttribute("width", w);
    r.setAttribute("height", h);
    if (attrs) {
      var k;
      for (k in attrs) {
        if (Object.prototype.hasOwnProperty.call(attrs, k)) r.setAttribute(k, attrs[k]);
      }
    }
    return r;
  }

  function lineNode(x1, y1, x2, y2, stroke, sw, op) {
    var ln = document.createElementNS(NS, "line");
    ln.setAttribute("x1", x1);
    ln.setAttribute("y1", y1);
    ln.setAttribute("x2", x2);
    ln.setAttribute("y2", y2);
    ln.setAttribute("stroke", stroke);
    ln.setAttribute("stroke-width", sw || 0.35);
    if (op != null) ln.setAttribute("opacity", op);
    return ln;
  }

  function textNode(x, y, s, size, fill) {
    var t = document.createElementNS(NS, "text");
    t.setAttribute("x", x);
    t.setAttribute("y", y);
    t.setAttribute("font-size", size * LABEL_SCALE);
    t.setAttribute("fill", fill || "#8899aa");
    t.setAttribute("font-family", "system-ui, -apple-system, sans-serif");
    t.textContent = s;
    return t;
  }

  function aspectFromSlot(slot) {
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

  function buildImageSlots(n) {
    var host = el("lpImageSlots");
    if (!host) return;
    var prev = [];
    var i;
    var oldCards = host.querySelectorAll(".lp-slot-card");
    for (i = 0; i < oldCards.length; i++) {
      var idx = parseInt(oldCards[i].dataset.index, 10);
      var modeBtn = oldCards[i].querySelector(".lp-mode-toggle button.active");
      var mode = modeBtn && modeBtn.dataset.mode === "dim" ? "dim" : "ratio";
      prev[idx] = {
        mode: mode,
        pxW: oldCards[i].querySelector(".inp-pxw") && oldCards[i].querySelector(".inp-pxw").value,
        pxH: oldCards[i].querySelector(".inp-pxh") && oldCards[i].querySelector(".inp-pxh").value,
        ratioW: oldCards[i].querySelector(".inp-rw") && oldCards[i].querySelector(".inp-rw").value,
        ratioH: oldCards[i].querySelector(".inp-rh") && oldCards[i].querySelector(".inp-rh").value,
      };
    }
    host.innerHTML = "";
    for (i = 0; i < n; i++) {
      var p = prev[i] || {};
      var card = document.createElement("div");
      card.className = "lp-slot-card";
      card.dataset.index = String(i);
      var mode = p.mode || "ratio";
      card.innerHTML =
        "<h3>" +
        LP("lp_slot_title", { n: i + 1 }) +
        "</h3>" +
        '<div class="lp-mode-toggle">' +
        '<button type="button" class="' +
        (mode === "dim" ? "active" : "") +
        '" data-mode="dim" data-idx="' +
        i +
        '">' +
        LP("lp_dim") +
        "</button>" +
        '<button type="button" class="' +
        (mode === "ratio" ? "active" : "") +
        '" data-mode="ratio" data-idx="' +
        i +
        '">' +
        LP("lp_ratio") +
        "</button>" +
        "</div>" +
        '<div class="dim-fields ' +
        (mode === "dim" ? "" : "hidden") +
        '" data-idx="' +
        i +
        '">' +
        '<div class="lp-row2">' +
        '<div><label class="lp-span">' +
        LP("lp_w_px") +
        '</label><input class="inp-pxw" type="number" min="1" value="' +
        (p.pxW || 1200) +
        '" /></div>' +
        '<div><label class="lp-span">' +
        LP("lp_h_px") +
        '</label><input class="inp-pxh" type="number" min="1" value="' +
        (p.pxH || 800) +
        '" /></div>' +
        "</div></div>" +
        '<div class="ratio-fields ' +
        (mode === "ratio" ? "" : "hidden") +
        '" data-idx="' +
        i +
        '">' +
        '<div class="lp-row2">' +
        '<div><label class="lp-span">' +
        LP("lp_w") +
        '</label><input class="inp-rw" type="number" min="1" value="' +
        (p.ratioW || 16) +
        '" /></div>' +
        '<div><label class="lp-span">' +
        LP("lp_h") +
        '</label><input class="inp-rh" type="number" min="1" value="' +
        (p.ratioH || 9) +
        '" /></div>' +
        "</div>" +
        '<p class="lp-ratio-hint">' +
        LP("lp_ratio_hint") +
        "</p>" +
        "</div>";
      host.appendChild(card);
    }
    host.querySelectorAll(".lp-mode-toggle button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var idx = parseInt(btn.dataset.idx, 10);
        var card = host.querySelector('.lp-slot-card[data-index="' + idx + '"]');
        if (!card) return;
        card.querySelectorAll(".lp-mode-toggle button").forEach(function (b) {
          b.classList.toggle("active", b === btn);
        });
        var dim = card.querySelector(".dim-fields");
        var rat = card.querySelector(".ratio-fields");
        if (btn.dataset.mode === "dim") {
          dim.classList.remove("hidden");
          rat.classList.add("hidden");
        } else {
          dim.classList.add("hidden");
          rat.classList.remove("hidden");
        }
        render();
      });
    });
    host.querySelectorAll("input").forEach(function (inp) {
      inp.addEventListener("input", render);
      inp.addEventListener("change", render);
    });
  }

  function readSlots(n) {
    var out = [];
    var host = el("lpImageSlots");
    if (!host) return out;
    var cards = host.querySelectorAll(".lp-slot-card");
    var i;
    for (i = 0; i < n && i < cards.length; i++) {
      var dim = !cards[i].querySelector(".dim-fields").classList.contains("hidden");
      out.push({
        mode: dim ? "dim" : "ratio",
        pxW: cards[i].querySelector(".inp-pxw") && cards[i].querySelector(".inp-pxw").value,
        pxH: cards[i].querySelector(".inp-pxh") && cards[i].querySelector(".inp-pxh").value,
        ratioW: cards[i].querySelector(".inp-rw") && cards[i].querySelector(".inp-rw").value,
        ratioH: cards[i].querySelector(".inp-rh") && cards[i].querySelector(".inp-rh").value,
      });
    }
    return out;
  }

  function updatePlanBox(weights, gridInfo, dual, stacked, layoutMode, imgCount, bodyBlocks, subCount) {
    var ul = el("lpPlanList");
    if (!ul) return;
    ul.innerHTML = "";
    var li;

    if (layoutMode === "stacked" && stacked) {
      var pi = Math.round(weights.img * 100);
      var pt = Math.round(weights.text * 100);
      li = document.createElement("li");
      li.textContent = LP("lp_bullet_stacked", { pi: pi, pt: pt });
      ul.appendChild(li);
    } else if (layoutMode === "split") {
      li = document.createElement("li");
      li.textContent = LP("lp_bullet_split");
      ul.appendChild(li);
    }

    if (imgCount > 0) {
      li = document.createElement("li");
      li.textContent = LP("lp_bullet_grid", {
        rows: gridInfo.rows,
        cols: gridInfo.cols,
        gap: Math.round((gridInfo.gapFrac || 0.04) * 100),
      });
      ul.appendChild(li);
    }

    li = document.createElement("li");
    li.textContent = dual ? LP("lp_bullet_dual_on") : LP("lp_bullet_dual_off");
    ul.appendChild(li);

    li = document.createElement("li");
    li.textContent = LP("lp_bullet_counts", {
      img: imgCount,
      body: bodyBlocks,
      sub: subCount,
    });
    ul.appendChild(li);
  }

  function render() {
    var svg = el("lpPreviewSvg");
    var cap = el("lpCanvasCaption");
    var lm = el("lpLayoutMode");
    if (!svg || !lm) return;
    svg.setAttribute("aria-label", LP("lp_svg_aria"));

    var layoutMode = lm.value;
    var planOn = el("lpEnablePlan").checked;
    var imgCount = Math.max(0, parseInt(el("lpImgCount").value, 10) || 0);
    var bodyBlocks = Math.max(0, parseInt(el("lpBodyBlocks").value, 10) || 0);
    var subCount = Math.max(0, parseInt(el("lpSubCount").value, 10) || 0);

    var slots = readSlots(imgCount);
    while (slots.length < imgCount) slots.push({ mode: "ratio", ratioW: 16, ratioH: 9 });

    var W = 210;
    var H = 297;
    var margin = 18;
    var innerX = margin;
    var innerY = margin;
    var innerW = W - 2 * margin;
    var innerH = H - 2 * margin;

    clearSvg(svg);

    svg.appendChild(
      rectNode(0, 0, W, H, {
        fill: "#0a0c10",
        stroke: "rgba(255,255,255,0.08)",
        "stroke-width": 0.3,
      })
    );
    svg.appendChild(
      rectNode(innerX, innerY, innerW, innerH, {
        fill: "none",
        stroke: "rgba(0,200,255,0.35)",
        "stroke-width": 0.5,
      })
    );

    var weights = contentPlanWeights(imgCount, bodyBlocks, subCount);
    var stacked = layoutMode === "stacked";
    var imgZoneH;
    var textY0;
    var textH;
    var gapV = innerH * 0.012;
    var gapH = innerW * 0.015;
    var splitX = innerX + innerW * 0.42;

    if (layoutMode === "stacked") {
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

    if (planOn) {
      svg.appendChild(
        rectNode(imgRect.x, imgRect.y, imgRect.w, imgRect.h, {
          fill: "rgba(124, 92, 255, 0.12)",
          stroke: "rgba(124, 92, 255, 0.55)",
          "stroke-width": 0.4,
          "stroke-dasharray": "3 2",
        })
      );
      svg.appendChild(
        rectNode(textRect.x, textRect.y, textRect.w, textRect.h, {
          fill: "rgba(61, 214, 165, 0.1)",
          stroke: "rgba(61, 214, 165, 0.5)",
          "stroke-width": 0.4,
          "stroke-dasharray": "3 2",
        })
      );
      svg.appendChild(textNode(imgRect.x + 1.2, imgRect.y + 4, LP("lp_zone_img"), 3.2, "#b8a8ff"));
      svg.appendChild(textNode(textRect.x + 1.2, textRect.y + 4, LP("lp_zone_text"), 3.2, "#7dffc8"));
    }

    var gridInfo = { cols: 1, rows: 1, gapFrac: 0.04 };
    if (imgCount > 0 && planOn) {
      var g = computeImageGridCols(imgRect.w, imgRect.h, imgCount);
      gridInfo.cols = g.cols;
      gridInfo.rows = g.rows;
      gridInfo.gapFrac = 0.04;
      var split = splitImageZone(imgRect, g.cols, g.rows, imgCount, gridInfo.gapFrac);
      var j;
      for (j = 0; j < split.cells.length; j++) {
        var c = split.cells[j];
        svg.appendChild(
          rectNode(c.x, c.y, c.w, c.h, {
            fill: "none",
            stroke: "rgba(200, 180, 255, 0.45)",
            "stroke-width": 0.25,
          })
        );
        var asp = aspectFromSlot(slots[j] || slots[0]);
        var cw = c.w * 0.86;
        var ch = cw / asp;
        if (ch > c.h * 0.86) {
          ch = c.h * 0.86;
          cw = ch * asp;
        }
        var cx = c.x + (c.w - cw) / 2;
        var cy = c.y + (c.h - ch) / 2;
        svg.appendChild(
          rectNode(cx, cy, cw, ch, {
            fill: "rgba(255,255,255,0.04)",
            stroke: "rgba(255, 200, 120, 0.7)",
            "stroke-width": 0.35,
          })
        );
        svg.appendChild(textNode(cx + 0.8, cy + 3.2, LP("lp_fig", { n: j + 1 }), 2.6, "#ffcc88"));
      }
    }

    var dual = shouldDualColumnText(subCount, bodyBlocks, textRect.w, textRect.h);
    if (planOn && (bodyBlocks > 0 || subCount > 0)) {
      var lines = Math.min(14, Math.max(2, bodyBlocks + Math.max(0, subCount) * 2));
      if (dual) {
        var mid = textRect.x + textRect.w / 2;
        svg.appendChild(lineNode(mid, textRect.y + 6, mid, textRect.y + textRect.h - 4, "rgba(61,214,165,0.45)", 0.3, 0.8));
        var t;
        for (t = 0; t < lines; t++) {
          var yy = textRect.y + 10 + t * ((textRect.h - 14) / lines);
          var wv = (textRect.w / 2 - 3) * 0.92;
          svg.appendChild(
            rectNode(textRect.x + 2, yy, wv, 1.8, {
              fill: "rgba(61,214,165,0.18)",
              opacity: 0.85,
            })
          );
          svg.appendChild(
            rectNode(mid + 1, yy, wv, 1.8, {
              fill: "rgba(61,214,165,0.12)",
              opacity: 0.75,
            })
          );
        }
        svg.appendChild(
          textNode(textRect.x + 2, textRect.y + 6, LP("lp_dual_flow"), 2.4, "#6dffc8")
        );
      } else {
        var t2;
        for (t2 = 0; t2 < lines; t2++) {
          var yy2 = textRect.y + 10 + t2 * ((textRect.h - 14) / lines);
          svg.appendChild(
            rectNode(textRect.x + 2, yy2, textRect.w - 4, 1.8, {
              fill: "rgba(61,214,165,0.15)",
              opacity: 0.8,
            })
          );
        }
        if (subCount > 0) {
          svg.appendChild(
            textNode(textRect.x + 2, textRect.y + 6, LP("lp_single_sub"), 2.4, "#6dffc8")
          );
        } else if (bodyBlocks > 0) {
          svg.appendChild(textNode(textRect.x + 2, textRect.y + 6, LP("lp_single_body"), 2.4, "#6dffc8"));
        }
      }
    }

    updatePlanBox(weights, gridInfo, dual, stacked, layoutMode, imgCount, bodyBlocks, subCount);

    if (cap) {
      cap.textContent = LP("lp_cap", {
        rows: gridInfo.rows,
        cols: gridInfo.cols,
        dual: dual ? LP("lp_dual_yes") : LP("lp_dual_no"),
      });
    }
  }

  function onImgCountChange() {
    var n = Math.max(0, parseInt(el("lpImgCount").value, 10) || 0);
    buildImageSlots(n);
    render();
  }

  function boot() {
    if (!el("lpPreviewSvg")) return;
    el("lpLayoutMode").addEventListener("change", render);
    el("lpEnablePlan").addEventListener("change", render);
    el("lpImgCount").addEventListener("input", onImgCountChange);
    el("lpImgCount").addEventListener("change", onImgCountChange);
    el("lpBodyBlocks").addEventListener("input", render);
    el("lpBodyBlocks").addEventListener("change", render);
    el("lpSubCount").addEventListener("input", render);
    el("lpSubCount").addEventListener("change", render);
    buildImageSlots(parseInt(el("lpImgCount").value, 10) || 0);
    render();
  }

  window.layoutPreviewRefresh = render;

  /**
   * Build host payload after "layoutplan|" for gridseed_dispatch (template + layout + slots).
   * @param {string} templateId — e.g. selected paper variant id
   * @returns {string} rest string without command prefix
   */
  /**
   * Build host payload after "layoutplan|" for gridseed_dispatch (template + layout + slots).
   * @param {string} templateId — e.g. selected paper variant id
   * @param {boolean=} forcePlanOn — when true, forces content plan layer creation regardless of UI checkbox
   * @returns {string} rest string without command prefix
   */
  window.gridseedBuildLayoutPlanPayload = function (templateId, forcePlanOn) {
    if (!templateId) {
      return "";
    }
    var lm = el("lpLayoutMode");
    var planOn =
      typeof forcePlanOn === "boolean"
        ? forcePlanOn
          ? "1"
          : "0"
        : el("lpEnablePlan").checked
          ? "1"
          : "0";
    var imgCount = Math.max(0, parseInt(el("lpImgCount").value, 10) || 0);
    var bodyBlocks = Math.max(0, parseInt(el("lpBodyBlocks").value, 10) || 0);
    var subCount = Math.max(0, parseInt(el("lpSubCount").value, 10) || 0);
    var slots = readSlots(imgCount);
    var parts = [templateId, lm ? lm.value : "stacked", planOn, String(imgCount), String(bodyBlocks), String(subCount)];
    var i;
    for (i = 0; i < slots.length; i++) {
      var s = slots[i];
      if (s.mode === "dim") {
        parts.push("dim", String(s.pxW), String(s.pxH));
      } else {
        parts.push("ratio", String(s.ratioW), String(s.ratioH));
      }
    }
    var rest = parts.join("|");

    return rest;
  };

  window.addEventListener("gridseed-langchange", onLangChange);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
