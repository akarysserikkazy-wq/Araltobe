var POLY = [[170,230],[178,200],[200,170],[215,140],[245,118],[268,95],[300,82],[330,70],[360,58],[395,50],
[425,56],[450,48],[485,62],[515,80],[545,92],[575,105],[610,112],[640,130],[660,160],[690,185],[712,215],
[720,250],[708,285],[690,305],[698,335],[680,365],[650,388],[615,392],[580,402],[545,395],[510,402],
[470,392],[440,398],[410,385],[385,395],[350,378],[320,360],[290,350],[262,335],[240,312],[215,300],[195,275],[172,262]];

var LAKE = [[428,262],[450,236],[486,228],[510,242],[548,243],[558,268],[532,287],[498,279],[470,293],[442,284]];

var POINTS = [
  { 
    x: 392, y: 372, color: "#c84113", icon: "🔭", 
    img: "img/1.jpg", 
    title: "Келу нүктесі", en: "Welcome Point",
    sub: "🏝️ Басталу нүктесі · кеме айлағы",
    desc: "Аралға келген қонақтар осы жерден саяхатын бастайды. Мұнда арал туралы қысқаша таныстыру, маршрут картасы және қауіпсіздік нұсқаулығы бар.",
    items: ["Аралтөбе туралы жалпы ақпарат", "Маршруттың сызбасы", "Қауіпсіздік ережелері"],
    qrs: [ { title: "Аралтөбе туралы", url: "https://storage4.me-qr.com/mp3/cf595210-0cea-45d0-9479-9be29009e2c9.mp3?time=1792677297" } ] 
  },
  { 
    x: 290, y: 185, color: "#f77f00", icon: "🌿", 
    img: "img/kakzhua.jpg", 
    title: "Өсімдіктер әлемі", en: "Plant Discovery",
    sub: "🌸 Өсімдіктер аймағы",
    desc: "Аралдың өсімдіктер әлемімен танысыңыз. Мұнда Қақжуа мен Көкпекті сияқты жергілікті шөптер және қамыс өседі. Табиғатты қорғаңыз, өсімдіктерді жұлмаңыз.",
    items: ["Қақжуа", "Қамыс алқаптары", "Көкпекті", "Табиғатты қорғау ережелері"],
    qrs: [ 
      { title: "Көкпекті", url: "https://qr1.me-qr.com/ru/music/mjjvbkxh", img: "img/kokpekti.jpg" },
      { title: "Қамыс", url: "https://qr1.me-qr.com/ru/music/n0umotyn", img: "img/kamys.jpg" },
      { title: "Қақжуа", url: "https://storage4.me-qr.com/mp3/cc9dfa54-60d4-4ede-a2b6-36056c76ba8d.mp3?time=1791875629", img: "img/kakzhua.jpg" } 
    ]
  },
  { x: 400, y: 80, color: "#3fa23a", icon: "🐦", 
    img: "img/sukuzgyn.jpg", 
    title: "Жануарларды бақылау", en: "Animal Watching",
    sub: "🦢🐟 Бақылау нүктесі",
    desc: "Алакөл – көшіп-қонатын құстардың маңызды аялдамасы әрі бағалы балық түрлері мекендейтін табиғи орын. Мұнда Бұйра және қызғылт бірқазан, Реликті шағала және Үлкен сұқұзғыны мекендейді. Сондай-ақ көл суында сазан сияқты балықтар кеңінен таралған. Құстарды дүрбімен алыстан бақылаңыз, ұя мен балапандарға жақындамаңыз.",
    items: ["Бұйра және қызғылт бірқазан", "Үлкен суқұзғыны", "Реликті шағала", "Сазан", "Жануарларды мазаламау ережесі"],
    qrs: [ 
      { title: "Бұйра және қызғылт бірқазан", url: "https://qr1.me-qr.com/ru/music/a3pc0j2r", img: "img/birkazan.jpg" },
      { title: "Үлкен суқұzғыны", url: "https://storage4.me-qr.com/mp3/391fb97f-55c3-4636-b4df-dea16779a566.mp3?time=1792672912", img: "img/sukuzgyn.jpg" },
      { title: "Реликті шағала", url: "https://qr1.me-qr.com/ru/music/9qmcwhfj", img: "img/shagala.jpg" },
      { title: "Сазан", url: "https://qr1.me-qr.com/ru/music/bighwb15", img: "img/sazan.jpg" } 
    ]
  },
  { 
    x: 625, y: 175, color: "#1a5fb4", icon: "⛺", 
    title: "Экологиялық аймақ", en: "Eco Zone",
    sub: "⛺ Киіз үй / демалыс аймағы",
    desc: "Демалыс және киіз үй аймағы. Мұнда барлық қоқыс өзіңізбен бірге алынып кетеді, ашық от жағуға тыйым салынады.",
    items: ["Қорғалатын аумақ туралы", "Экоережелер мен жауапкершілік", "Қоқыс қалдырмау"],
    qrs: [ { title: "Экологиялық аймақ ережелері", url: "https://qr1.me-qr.com/ru/music/5djvqt0r" } ]
  },
  { 
    x: 628, y: 348, color: "#7b2fa8", icon: "📷", 
    title: "Сәнді көрініс нүктесі", en: "View Point",
    sub: "🌅 Фото аймағы",
    desc: "Маршруттың соңғы нүктесі: көл мен таулардың панорамасы. Күн батарда мұнда ең әдемі фотолар алынады.",
    items: ["Аралдың панорамалық көрінісі", "Фотосессия аймағы", "Маршруттың қорытындысы"],
    qrs: [ { title: "Панорама", url: "https://qr1.me-qr.com/ru/music/axsm7of1", img: "img/korinis.jpg" } ] 
  }
];

var RULES = ["Қоқыс қалдырмаңыз!", "От жағуға болмайды!", "Жабайы табиғатты мазаламаңыз!",
             "Рұқсат етілмеген аумаққа кірмеңіз!", "Табиғатты сақтайық, болашақ ұрпаққа аманат етейік!"];

var NS = "http://www.w3.org/2000/svg";
var $ = function (id) { return document.getElementById(id); };
var svg = $("map"), view = $("view"), wrap = $("wrap"), sheet = $("sheet"), nav = $("nav");
var CX = 445, CY = 230;

var BOUNDS = { x: 150, y: 25, w: 612, h: 455 };

function scaled(poly, k, cx, cy) { return poly.map(function (p) { return [cx + (p[0] - cx) * k, cy + (p[1] - cy) * k]; }); }
function str(a) { return a.map(function (p) { return p[0].toFixed(1) + "," + p[1].toFixed(1); }).join(" "); }
function inside(pt, poly) {
  var c = false;
  for (var i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    var a = poly[i], b = poly[j];
    if ((a[1] > pt[1]) != (b[1] > pt[1]) && pt[0] < (b[0] - a[0]) * (pt[1] - a[1]) / (b[1] - a[1]) + a[0]) c = !c;
  }
  return c;
}

function roughen(poly, amp, seed) {
  function rnd() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
  var out = [];
  for (var i = 0; i < poly.length; i++) {
    var a = poly[i], b = poly[(i + 1) % poly.length];
    out.push(a);
    var dx = b[0] - a[0], dy = b[1] - a[1], len = Math.hypot(dx, dy) || 1, o = (rnd() - .5) * 2 * amp;
    out.push([(a[0] + b[0]) / 2 - dy / len * o, (a[1] + b[1]) / 2 + dx / len * o]);
  }
  return out;
}

var COAST = roughen(POLY, 5, 21);
var GRASS = scaled(COAST, .94, CX, CY);
$("sand").setAttribute("points", str(COAST));
$("grass").setAttribute("points", str(GRASS));
$("gclip").setAttribute("points", str(GRASS));
[[46, .16], [34, .2], [22, .26], [11, .34]].forEach(function (w) {
  var p = document.createElementNS(NS, "polygon");
  p.setAttribute("points", str(COAST)); p.setAttribute("fill", "#8fdcf0"); p.setAttribute("stroke", "#8fdcf0");
  p.setAttribute("stroke-width", w[0]); p.setAttribute("stroke-linejoin", "round"); p.setAttribute("opacity", w[1]);
  $("shallow").appendChild(p);
});

var LCX = 495, LCY = 262;
$("lakeSand").setAttribute("points", str(scaled(LAKE, 1.16, LCX, LCY)));
$("lake").setAttribute("points", str(LAKE));
$("lakeIn").setAttribute("points", str(scaled(LAKE, .62, LCX, LCY)));

(function () {
  var g = $("trees"), safe = scaled(COAST, .9, CX, CY), lakeZone = scaled(LAKE, 1.3, LCX, LCY), seed = 11;
  function rnd() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
  var centers = [[300,130],[460,110],[350,290],[540,230],[600,260],[260,260],[520,350],[430,180],[610,130],[470,350]];
  var n = 0, tries = 0;
  while (n < 340 && tries < 8000) {
    tries++;
    var c = centers[Math.floor(rnd() * centers.length)];
    var x = c[0] + (rnd() - .5) * 120, y = c[1] + (rnd() - .5) * 90;
    if (!inside([x, y], safe)) continue;
    if (inside([x, y], lakeZone)) continue;
    if (POINTS.some(function (p) { return Math.hypot(p.x - x, p.y - y - 14) < 26; })) continue;
    var r = 3 + rnd() * 4.5;
    var s = document.createElementNS(NS, "circle");
    s.setAttribute("cx", x + 1.5); s.setAttribute("cy", y + 1.5); s.setAttribute("r", r);
    s.setAttribute("fill", "#1c4f22"); s.setAttribute("opacity", ".35"); g.appendChild(s);
    var t = document.createElementNS(NS, "circle");
    t.setAttribute("cx", x); t.setAttribute("cy", y); t.setAttribute("r", r);
    t.setAttribute("fill", ["#2f7d32", "#3a8f3a", "#2a6e30"][Math.floor(rnd() * 3)]); g.appendChild(t);
    var h = document.createElementNS(NS, "circle");
    h.setAttribute("cx", x - r * .3); h.setAttribute("cy", y - r * .3); h.setAttribute("r", r * .45);
    h.setAttribute("fill", "#6bb858"); h.setAttribute("opacity", ".55"); g.appendChild(h);
    n++;
  }
})();

(function () {
  var a = POINTS.map(function (p) { return [p.x, p.y]; }), n = a.length, d = "M" + a[0][0] + "," + a[0][1];
  for (var i = 0; i < n; i++) {
    var p0 = a[(i - 1 + n) % n], p1 = a[i], p2 = a[(i + 1) % n], p3 = a[(i + 2) % n];
    d += "C" + (p1[0] + (p2[0] - p0[0]) / 6) + "," + (p1[1] + (p2[1] - p0[1]) / 6) + " " +
         (p2[0] - (p3[0] - p1[0]) / 6) + "," + (p2[1] - (p3[1] - p1[1]) / 6) + " " + p2[0] + "," + p2[1];
  }
  $("r1").setAttribute("d", d); $("r2").setAttribute("d", d);
})();

var pinEls = [];
POINTS.forEach(function (p, i) {
  var g = document.createElementNS(NS, "g");
  g.setAttribute("class", "pin"); g.setAttribute("data-i", i);
  g.innerHTML =
    '<rect x="-26" y="-60" width="52" height="64" fill="transparent"/>' +
    '<g class="body">' +
      '<rect x="-19" y="-49" width="40" height="44" rx="9" fill="#000" opacity=".28"/>' +
      '<polygon points="-7,-9 7,-9 0,0" fill="' + p.color + '" stroke="#fff" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<rect x="-20" y="-52" width="40" height="44" rx="9" fill="' + p.color + '" stroke="#fff" stroke-width="2.5"/>' +
      '<polygon points="-6,-10 6,-10 0,-3" fill="' + p.color + '"/>' +
      '<text class="num" x="0" y="-38">' + (i + 1) + '</text>' +
      '<rect x="-15" y="-33" width="30" height="21" rx="6" fill="#fff" opacity=".95"/>' +
      '<text class="ico" x="0" y="-17">' + p.icon + '</text>' +
    '</g>';
  $("pins").appendChild(g);
  pinEls.push({ g: g, p: p });
});

var cw = 800, ch = 500, scale = 1, tx = 0, ty = 0, fitS = 1, touched = false;

function measure() {
  var r = wrap.getBoundingClientRect();
  cw = Math.max(1, r.width); ch = Math.max(1, r.height);
  svg.setAttribute("viewBox", "0 0 " + cw + " " + ch);
  var pad = Math.min(cw, ch) * 0.03 + 6;
  fitS = Math.min((cw - 2 * pad) / BOUNDS.w, (ch - 2 * pad) / BOUNDS.h);
}
function apply() {
  view.setAttribute("transform", "translate(" + tx + "," + ty + ") scale(" + scale + ")");
  var px = cw < 500 ? 44 : 50, k = px / (52 * scale);
  pinEls.forEach(function (o) {
    o.g.setAttribute("transform", "translate(" + o.p.x + "," + o.p.y + ") scale(" + k.toFixed(4) + ")");
  });
}
function fit() {
  scale = fitS;
  tx = cw / 2 - (BOUNDS.x + BOUNDS.w / 2) * scale;
  ty = ch / 2 - (BOUNDS.y + BOUNDS.h / 2) * scale;
  apply();
}
function zoomAt(f, cx, cy) {
  var n = Math.min(fitS * 10, Math.max(fitS * .7, scale * f)); f = n / scale;
  tx = cx - (cx - tx) * f; ty = cy - (cy - ty) * f; scale = n; apply();
}
function toSvg(e) {
  var r = svg.getBoundingClientRect();
  return { x: e.clientX - r.left, y: e.clientY - r.top };
}


var pointers = {}, moved = 0, downPin = -1, tapLimit = 10;
svg.addEventListener("pointerdown", function (e) {
  pointers[e.pointerId] = toSvg(e); moved = 0; touched = true;
  tapLimit = e.pointerType === "mouse" ? 5 : 12;
  var el = e.target.closest ? e.target.closest(".pin") : null;
  downPin = el ? +el.getAttribute("data-i") : -1;
  try { svg.setPointerCapture(e.pointerId); } catch (err) {}
});
svg.addEventListener("pointermove", function (e) {
  var old = pointers[e.pointerId]; if (!old) return;
  var now = toSvg(e), ids = Object.keys(pointers);
  if (ids.length === 1) {
    var dx = now.x - old.x, dy = now.y - old.y;
    moved += Math.abs(dx) + Math.abs(dy);
    if (moved > tapLimit) { tx += dx; ty += dy; apply(); }
  } else if (ids.length >= 2) {
    var o = pointers[ids.find(function (i) { return +i !== e.pointerId; })];
    var d0 = Math.hypot(old.x - o.x, old.y - o.y), d1 = Math.hypot(now.x - o.x, now.y - o.y);
    var m0 = { x: (old.x + o.x) / 2, y: (old.y + o.y) / 2 }, m1 = { x: (now.x + o.x) / 2, y: (now.y + o.y) / 2 };
    moved = 999;
    if (d0 > 0) zoomAt(d1 / d0, m0.x, m0.y);
    tx += m1.x - m0.x; ty += m1.y - m0.y; apply();
  }
  pointers[e.pointerId] = now;
});
function release(e) {
  delete pointers[e.pointerId];
  var pin = downPin; downPin = -1;
  if (e.type === "pointerup" && moved <= tapLimit && pin >= 0) showPoint(pin);
}
svg.addEventListener("pointerup", release);
svg.addEventListener("pointercancel", release);
svg.addEventListener("wheel", function (e) {
  e.preventDefault(); touched = true; var p = toSvg(e); zoomAt(e.deltaY < 0 ? 1.15 : .87, p.x, p.y);
}, { passive: false });

$("zin").onclick = function () { touched = true; zoomAt(1.4, cw / 2, ch / 2); };
$("zout").onclick = function () { touched = true; zoomAt(.71, cw / 2, ch / 2); };
$("zreset").onclick = function () { touched = false; measure(); fit(); sheet.style.display = "none"; };

function onResize() { measure(); if (!touched) fit(); else apply(); }
window.addEventListener("resize", onResize);
window.addEventListener("orientationchange", function () { setTimeout(onResize, 250); });
if (window.ResizeObserver) new ResizeObserver(onResize).observe(wrap);

function renderQr(list, p) {
  var box = $("sQr"); box.innerHTML = "";
  if (!list || !list.length) { box.style.display = "none"; return; }
  box.style.display = "block";
  var h = document.createElement("h3"); h.textContent = "QR-код арқылы ақпарат алыңыз"; box.appendChild(h);
  var row = document.createElement("div"); row.className = "qrrow"; box.appendChild(row);
  
  list.forEach(function (q) {
    var item = document.createElement("div"); item.className = "qritem";
    
    // Егер сурет бар болса, QR-дың үстіне шығару
    if (q.img) {
      var thumbImg = document.createElement("img");
      thumbImg.src = q.img;
      thumbImg.className = "qr-thumb";
      thumbImg.title = "Үлкейту үшін басыңыз";
      thumbImg.onclick = function() {
        showImageModal(q.img);
      };
      item.appendChild(thumbImg);
    }

    var qb = document.createElement("div"); qb.className = "qrbox"; item.appendChild(qb);
    var content = q.url || (p.title + ": " + p.desc);
    if (window.QRCode) {
      try { new QRCode(qb, { text: content, width: 110, height: 110, correctLevel: QRCode.CorrectLevel.L }); }
      catch (err) { qb.textContent = "QR шықпады"; qb.style.fontSize = "11px"; }
    } else { qb.textContent = "QR үшін интернет керек"; qb.style.fontSize = "11px"; }
    
    if (q.url) {
      var a = document.createElement("a"); a.href = q.url; a.target = "_blank"; a.textContent = q.title; item.appendChild(a);
    } else {
      var s = document.createElement("span"); s.className = "cap"; s.textContent = q.title; item.appendChild(s);
    }
    row.appendChild(item);
  });
}

// Суретті үлкейту/кішірейту функциялары
function showImageModal(src) {
  var modal = $("imgModal");
  var zoomImg = $("modalZoomImg");
  zoomImg.src = src;
  modal.style.display = "flex";
}
function closeImageModal() {
  $("imgModal").style.display = "none";
}

function fill(num, color, title, sub, desc, listTitle, items, qrs, p) {
  $("sHead").style.background = color; $("sNum").textContent = num; $("sTitle").textContent = title;
  $("sSub").textContent = sub; $("sDesc").textContent = desc; $("sDesc").style.display = desc ? "block" : "none";
  $("sListTitle").textContent = listTitle;
  $("sList").innerHTML = items.map(function (t) { return "<li>" + t + "</li>"; }).join("");
  renderQr(qrs, p);
  
  var im = $("sImg");
  if (p && p.img) {
    im.onerror = function () { sheet.classList.remove("hasPhoto"); sheet.style.display = "block"; };
    im.src = p.img; sheet.classList.add("hasPhoto");
  } else { sheet.classList.remove("hasPhoto"); }
  sheet.style.setProperty("--c", color);
  sheet.scrollTop = 0; $("sBody").scrollTop = 0;
  sheet.style.display = sheet.classList.contains("hasPhoto") ? "grid" : "block";
}

function showPoint(i) {
  var p = POINTS[i];
  fill(i + 1, p.color, p.title + " (" + p.en + ")", p.sub, p.desc, "Не көресіз", p.items, p.qrs, p);
  touched = true; measure();
  var wide = cw > 600;
  var free = wide ? ch : ch - sheet.offsetHeight - 16;
  var cy = Math.max(70, free / 2);
  var cx = wide ? (cw + 480) / 2 : cw / 2;
  scale = Math.max(fitS * 2.4, 1.4);
  tx = cx - p.x * scale;
  ty = cy + 22 - p.y * scale;
  apply();
}

// Жоғарыдағы бұрынғы $("close").onclick деген жолдың орнына мынаны қойыңыз:
var closeBtn = $("close");
if (closeBtn) {
  closeBtn.onclick = function () {
    sheet.style.display = "none";
    sheet.classList.remove("hasPhoto");
  };
}

// Модальді терезенің сыртын басқан кезде жабу
window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

POINTS.forEach(function (p, i) {
  var b = document.createElement("button");
  b.textContent = (i + 1) + ". " + p.title; b.onclick = function () { showPoint(i); }; nav.appendChild(b);
});
var rb = document.createElement("button");
rb.textContent = "Табиғатты қорғау ережелері";
rb.onclick = function () { fill("!", "#2f8f3a", "Табиғатты қорғау ережелері", "🍃 Алакөл – табиғаттың асыл бағы!", "", "Ережелер", RULES, null, null); };
nav.appendChild(rb);

measure(); fit();
window.addEventListener("load", function () { if (!touched) { measure(); fit(); } });
