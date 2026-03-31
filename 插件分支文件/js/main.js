(function () {
  var cs = new CSInterface();
  var data = window.GRIDSEED_DATA;

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
    var script = 'gridseed_dispatch("' + escEval(payload) + '")';
    cs.evalScript(script, function (res) {
      if (onDone) onDone(res);
      else if (res && String(res).indexOf("ERR") === 0) {
        console.warn("GridSeed host:", res);
      }
    });
  }

  function setStatus(msg) {
    var el = $("#statusLine");
    if (el) el.textContent = msg || "";
  }

  function renderTemplates() {
    var host = $("#templateList");
    if (!host || !data) return;
    host.innerHTML = "";
    var cats = {};
    data.categories.forEach(function (c) {
      cats[c.id] = c.label;
    });
    data.templates.forEach(function (t) {
      var card = document.createElement("article");
      card.className = "card";
      card.innerHTML =
        '<h3 class="card-title"></h3>' +
        '<p class="card-meta"></p>' +
        '<p class="card-blurb"></p>' +
        '<div class="card-actions">' +
        '<button type="button" class="btn primary js-new-doc">New document</button>' +
        '<button type="button" class="btn ghost js-bleed">Add trim guides</button>' +
        "</div>";
      card.querySelector(".card-title").textContent = t.name;
      card.querySelector(".card-meta").textContent = cats[t.category] || t.category;
      card.querySelector(".card-blurb").textContent = t.blurb;
      card.querySelector(".js-new-doc").addEventListener("click", function () {
        runDispatch("template|" + t.id, function (r) {
          setStatus(r === "OK" ? "Document created: " + t.name : String(r));
        });
      });
      card.querySelector(".js-bleed").addEventListener("click", function () {
        runDispatch("bleed_guides|" + t.id, function (r) {
          setStatus(r === "OK" || r === "SKIP" ? "Trim guides (if template has bleed)" : String(r));
        });
      });
      host.appendChild(card);
    });
  }

  function renderSizes() {
    var host = $("#sizeQuickList");
    if (!host || !data) return;
    host.innerHTML = "";
    data.sizePresets.forEach(function (p) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "chip";
      b.textContent = p.label;
      b.addEventListener("click", function () {
        runDispatch("template|" + p.id, function (r) {
          setStatus(r === "OK" ? "New document: " + p.label : String(r));
        });
      });
      host.appendChild(b);
    });
  }

  function renderGrids() {
    var host = $("#gridList");
    if (!host || !data) return;
    host.innerHTML = "";
    data.grids.forEach(function (g) {
      var row = document.createElement("div");
      row.className = "grid-row";
      row.innerHTML =
        '<div class="grid-row-main">' +
        '<span class="grid-name"></span>' +
        '<button type="button" class="btn small js-apply-grid">Apply</button>' +
        '<button type="button" class="btn small ghost js-explain">Explain</button>' +
        "</div>" +
        '<p class="grid-explain is-hidden"></p>';
      row.querySelector(".grid-name").textContent = g.name;
      var explainEl = row.querySelector(".grid-explain");
      explainEl.textContent = g.explain;
      row.querySelector(".js-explain").addEventListener("click", function () {
        explainEl.classList.toggle("is-hidden");
      });
      row.querySelector(".js-apply-grid").addEventListener("click", function () {
        var clear = $("#chkClearGuides").checked;
        runDispatch("grid|" + g.id + "|" + (clear ? "1" : "0"), function (r) {
          setStatus(r === "OK" ? "Grid applied: " + g.name : String(r));
        });
      });
      host.appendChild(row);
    });
  }

  function renderTips() {
    var host = $("#tipList");
    if (!host || !data) return;
    host.innerHTML = "";
    data.tips.forEach(function (tip) {
      var block = document.createElement("article");
      block.className = "tip";
      block.innerHTML =
        '<h3 class="tip-title"></h3><p class="tip-body"></p>';
      block.querySelector(".tip-title").textContent = tip.title;
      block.querySelector(".tip-body").textContent = tip.body;
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

  function refreshCopyPreview() {
    var lines = data.copyForCategoryTone(currentCategoryId(), currentTone());
    var out = $("#copyPreview");
    if (out) out.textContent = lines.join("\n\n");
  }

  function insertCopy() {
    var lines = data.copyForCategoryTone(currentCategoryId(), currentTone());
    var payload = "text|" + lines.join("<<<GRIDSEED>>>");
    runDispatch(payload, function (r) {
      setStatus(r === "OK" ? "Placeholder text inserted" : String(r));
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
      });
    });
  }

  function initCopyControls() {
    var cat = $("#copyCategory");
    var tone = $("#copyTone");
    var regen = $("#btnRegenerate");
    var insert = $("#btnInsertCopy");
    if (cat) cat.addEventListener("change", refreshCopyPreview);
    if (tone) tone.addEventListener("change", refreshCopyPreview);
    if (regen) regen.addEventListener("click", refreshCopyPreview);
    if (insert) insert.addEventListener("click", insertCopy);
    refreshCopyPreview();
  }

  function initLockGuides() {
    var btn = $("#btnLockGuides");
    if (!btn) return;
    btn.addEventListener("click", function () {
      runDispatch("lockguides|1", function () {
        setStatus("Lock guides command sent — if nothing changes, use View → Guides → Lock Guides in Illustrator.");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTabs();
    renderTemplates();
    renderSizes();
    renderGrids();
    renderTips();
    initCopyControls();
    initLockGuides();
    setStatus("Ready — open or create a document, then apply grids or copy.");
  });
})();
