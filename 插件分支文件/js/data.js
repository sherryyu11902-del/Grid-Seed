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

  GRIDSEED.templates = [
    { id: "poster_a1_bleed", name: "Poster — A1 + bleed + safe margin", category: "poster_flyer", blurb: "CMYK · trim (orange) + safe area (magenta) on new file." },
    { id: "poster_a2_bleed", name: "Poster — A2 + bleed + safe margin", category: "poster_flyer", blurb: "Large format with guides." },
    { id: "poster_a3_bleed", name: "Poster — A3 + bleed + safe margin", category: "poster_flyer", blurb: "Event & academic posters." },
    { id: "poster_a4_bleed", name: "Poster — A4 + bleed + safe margin", category: "poster_flyer", blurb: "Compact print poster." },
    { id: "poster_us_tabloid_bleed", name: "Poster — US Tabloid + bleed", category: "poster_flyer", blurb: "11 × 17 in + safe margin guides." },
    { id: "flyer_dl_bleed", name: "Flyer — DL + bleed", category: "poster_flyer", blurb: "Rack cards & narrow handouts." },
    { id: "flyer_a5_bleed", name: "Flyer — A5 + bleed", category: "poster_flyer", blurb: "Half-A4 leaflets." },
    { id: "flyer_a6_bleed", name: "Flyer — A6 + bleed", category: "poster_flyer", blurb: "Compact promo cards." },
    { id: "social_ig_post_1080", name: "Instagram — Post 1080 × 1080", category: "social", blurb: "Square feed, RGB." },
    { id: "social_ig_story_1080", name: "Instagram — Story 1080 × 1920", category: "social", blurb: "Full-screen vertical." },
    { id: "social_tiktok_1080", name: "TikTok — Vertical 1080 × 1920", category: "social", blurb: "9:16 vertical video frame." },
    { id: "social_fb_post_1200", name: "Facebook — Post 1200 × 630", category: "social", blurb: "Link & feed preview image." },
    { id: "social_linkedin_banner", name: "LinkedIn — Banner 1584 × 396", category: "social", blurb: "Profile cover." },
    { id: "social_x_header", name: "X / Twitter — Header 1500 × 500", category: "social", blurb: "Wide profile header." },
    { id: "social_pinterest_pin", name: "Pinterest — Pin 1000 × 1500", category: "social", blurb: "2:3 tall pin." },
    { id: "social_youtube_thumb", name: "YouTube — Thumbnail 1280 × 720", category: "social", blurb: "16:9 video thumbnail." },
    { id: "brand_logo_exploration", name: "Logo exploration — 200 × 200 mm", category: "branding", blurb: "Marks, rules, variants." },
    { id: "brand_bizcard_us_bleed", name: "Business card — US + bleed", category: "branding", blurb: "3.5 × 2 in + trim & safe guides." },
    { id: "brand_bizcard_iso_bleed", name: "Business card — ISO + bleed", category: "branding", blurb: "85 × 55 mm + 3 mm bleed." },
    { id: "brand_letterhead_a4_bleed", name: "Letterhead — A4 + bleed + margins", category: "branding", blurb: "CMYK letter with safe type area." },
    { id: "brand_letterhead_us_bleed", name: "Letterhead — US Letter + bleed", category: "branding", blurb: "8.5 × 11 in correspondence." },
    { id: "editorial_mag_spread_a4_bleed", name: "Magazine spread — A4 landscape + bleed", category: "editorial", blurb: "Two-page CMYK spread." },
    { id: "editorial_mag_cover_a4_bleed", name: "Magazine cover — A4 + bleed", category: "editorial", blurb: "Single cover + spine room." },
    { id: "editorial_newspaper_broadsheet", name: "Newspaper — broadsheet starter", category: "editorial", blurb: "750 × 600 mm landscape CMYK." },
    { id: "packaging_dieline_a4", name: "Packaging — A4 flat dieline", category: "packaging", blurb: "Sleeve / box layout base." },
    { id: "packaging_box_flat_400", name: "Packaging — 400 × 300 mm flat", category: "packaging", blurb: "Wide flat structural layout." },
    { id: "presentation_16_9_hd", name: "Presentation — 16:9 HD (1920 × 1080)", category: "presentation", blurb: "Slides & screen decks, RGB." },
    { id: "presentation_16_9_4k", name: "Presentation — 16:9 4K (3840 × 2160)", category: "presentation", blurb: "Large-format screen." },
    { id: "presentation_4_3", name: "Presentation — 4:3 (1024 × 768)", category: "presentation", blurb: "Classic projector ratio." },
    { id: "presentation_a4_landscape", name: "Presentation — A4 landscape", category: "presentation", blurb: "297 × 210 mm screen/PDF." },
    { id: "ui_icon_sheet_1024", name: "Icon sheet — 1024 × 1024 px", category: "ui_icons", blurb: "App icons & glyphs, RGB." },
    { id: "ui_mobile_1080", name: "Mobile UI — 1080 × 1920 px", category: "ui_icons", blurb: "Full-screen mobile frame." },
  ];

  GRIDSEED.sizePresets = [
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
        playful: ["We finally organized our layers", "(Mostly.)", "Swipe for the chaos →"],
        luxury: ["Quiet craft", "Limited run — numbered", "Discover the collection"],
        minimal: ["Out now", "Issue 04", "Link in bio"],
      },
      branding: {
        professional: [
          "Northwind Studio",
          "Strategy · Identity · Systems",
          "hello@northwind.studio",
        ],
        playful: ["Hi, we’re Pixel & Pencil", "We draw logos and bad jokes", "Let’s chat!"],
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
