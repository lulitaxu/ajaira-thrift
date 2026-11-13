/* Ajaira Thrift — app.js (extracted from the single-file build, order preserved) */

/* theme lock cleanup (was a pre-paint inline script; theme is now set on <html>) */
try{localStorage.removeItem("ajaira-theme")}catch(e){}

window.__ajairaBooted = true;
const PRODUCTS = [
 {slug:"adidas-puffer-navy",name:"Adidas Puffer Jacket — Navy",sku:"AJ-001",price:1199,was:0,cat:"Jackets",stock:1,sizes:["XL"],desc:"Chest 44in · Length 25in · Sleeve 24in. Pre-owned vintage, one piece only.",img:"/images/real-01.jpg?v=1126"},
 {slug:"vintage-zip-olive",name:"Vintage Zip Jacket — Olive",sku:"AJ-002",price:700,was:0,cat:"Jackets",stock:1,sizes:["XXL"],desc:"Chest 46in · Length 28in · Sleeve 24in. Pre-owned vintage, one piece only.",img:"/images/real-02.jpg?v=1126"},
 {slug:"vintage-jacket-black",name:"Vintage Jacket — Black",sku:"AJ-003",price:999,was:0,cat:"Jackets",stock:1,sizes:["XXL"],desc:"Chest 46in · Length 26in · Sleeve 23in. Pre-owned vintage, one piece only.",img:"/images/real-03.jpg?v=1126"},
 {slug:"utility-jacket-midnight",name:"Utility Jacket — Midnight",sku:"AJ-004",price:799,was:0,cat:"Jackets",stock:1,sizes:["XL"],desc:"Chest 44in · Length 28in · Sleeve 25in. Pre-owned vintage, one piece only.",img:"/images/real-04.jpg?v=1126"},
 {slug:"vintage-puffer-black",name:"Vintage Puffer Jacket — Black",sku:"AJ-005",price:499,was:0,cat:"Jackets",stock:1,sizes:["S"],desc:"Chest 38in · Length 28in · Sleeve 23in. Pre-owned vintage, one piece only.",img:"/images/real-05.jpg?v=1126"},
 {slug:"puffer-vest-chestnut",name:"Puffer Vest — Chestnut",sku:"AJ-006",price:599,was:0,cat:"Jackets",stock:1,sizes:["XL"],desc:"Chest 44in · Length 27in. Pre-owned vintage, one piece only.",img:"/images/real-06.jpg?v=1126"},
 {slug:"nike-track-royal",name:"Nike Track Jacket — Royal",sku:"AJ-007",price:599,was:0,cat:"Track",stock:1,sizes:["M"],desc:"Chest 40in · Length 28in · Sleeve 25in. Pre-owned vintage, one piece only.",img:"/images/real-07.jpg?v=1126"},
 {slug:"suzuki-racing-red",name:"Suzuki Racing Jacket — Red",sku:"AJ-008",price:799,was:0,cat:"Jackets",stock:1,sizes:["XXL"],desc:"Chest 46in · Length 27in · Sleeve 23in. Pre-owned vintage, one piece only.",img:"/images/real-08.jpg?v=1126"},
 {slug:"coach-jacket-cream",name:"Vintage Coach Jacket — Cream",sku:"AJ-009",price:700,was:0,cat:"Jackets",stock:1,sizes:["M"],desc:"Chest 40in · Length 26in · Sleeve 23in. Pre-owned vintage, one piece only.",img:"/images/real-09.jpg?v=1126"},
 {slug:"marble-hoodie-jacket",name:"Marble Hoodie Jacket",sku:"AJ-010",price:999,was:0,cat:"Jackets",stock:1,sizes:["L"],desc:"Chest 42in · Length 27in · Sleeve 25in. Pre-owned vintage, one piece only.",img:"/images/real-10.jpg?v=1126"},
 {slug:"leather-jacket-tan",name:"Genuine Leather Jacket — Tan",sku:"AJ-011",price:1999,was:0,cat:"Leather",stock:1,sizes:["XXL"],desc:"Chest 48in · Length 25in · Sleeve 24in. Genuine leather, pre-owned vintage.",img:"/images/real-11.jpg?v=1126"},
 {slug:"leather-bomber-black",name:"Leather Bomber — Black Quilted",sku:"AJ-012",price:2999,was:0,cat:"Leather",stock:0,sizes:["L"],desc:"Chest 42in · Length 25in · Sleeve 24in. Genuine leather, pre-owned vintage.",img:"/images/real-12.jpg?v=1126"},
 {slug:"ua-track-jacket-fit",name:"Track Jacket — Customer Fit",sku:"AJ-013",price:899,was:0,cat:"Track",stock:1,sizes:["L"],desc:"As worn by a customer. One piece only, DM on WhatsApp to book.",img:"/images/real-13.jpg?v=1126"},
 {slug:"old-money-shirt-fit",name:"Old Money Shirt — Customer Fit",sku:"AJ-014",price:750,was:0,cat:"Shirts",stock:1,sizes:["M"],desc:"As worn by a customer. One piece only, DM on WhatsApp to book.",img:"/images/real-14.jpg?v=1126"}
];
const CATS = ["All","Jackets","Leather","Track","Shirts"];
/* Thrift spec sheet: measurements in inches and an honest condition note, like a real listing */
const SPECS = {
  "dhaka-cotton-panjabi":{meas:"Chest 41in · Length 28in · Sleeve 24in",cond:"9/10 · No visible flaws"},
  "premium-polo-shirt":{meas:"Chest 40in · Length 27in",cond:"9/10 · Collar holds its shape"},
  "slim-fit-jeans":{meas:"Waist 32in · Inseam 30in",cond:"8.5/10 · Light fade at the knees, honest wear"},
  "running-sneakers":{meas:"UK 9 · Sole grip strong",cond:"8/10 · Light creasing on the toe box"},
  "leather-loafers":{meas:"UK 9 · Suede brushed clean",cond:"9/10 · Soles barely worn"},
  "last-pair-limited-sneakers":{meas:"UK 8.5 · With box",cond:"10/10 · Deadstock, never worn"},
  "canvas-tote-bag":{meas:"32 × 26 × 12 cm · Strap drop 22cm",cond:"9/10 · Corners clean, lining fresh"},
  "minimal-leather-wallet":{meas:"11 × 9 cm · 6 card slots",cond:"9.5/10 · Leather unmarked"},
  "aviator-sunglasses":{meas:"Lens 58mm · Bridge 14mm",cond:"9/10 · No scratches on the lens"},
  "wireless-earbuds-pro":{meas:"Case + both buds · USB-C",cond:"9/10 · Battery holds a full charge, fully tested"},
  "analog-steel-watch":{meas:"Case 42mm · Strap fits 14–20cm wrist",cond:"9.5/10 · Screen unmarked"},
  "cotton-hoodie":{meas:"Chest 44in · Length 27in · Lined hood",cond:"9/10 · Cuffs firm, no pilling"},
  "formal-oxford-shirt":{meas:"Chest 40in · Length 29in",cond:"9/10 · All buttons original"},
  "leather-biker-jacket":{meas:"Chest 42in · Length 25in · Heavy YKK zips",cond:"8.5/10 · Leather broken in beautifully, no tears"}
};
const fmt = n => "৳" + n.toLocaleString("en-IN");
let activeCat = "All", query = "";
const cart = new Map();
let DELIVERY = 60;

const tickerMsgs = ["New drop every week","One piece only, no restock","Dhaka delivery in 24–48h · ৳60","First to confirm gets it","bKash · Nagad · Rocket · Cash on delivery","Missed it? It's gone"];
document.getElementById("tickerTrack").innerHTML = (tickerMsgs.concat(tickerMsgs)).map(m=>`<span>${m} <b>★</b></span>`).join("");

/* Image safety net: if a photo fails once (flaky webview), retry it once fresh */
document.addEventListener("error", e=>{
  const t = e.target;
  if(t && t.tagName === "IMG" && !t.dataset.retried){
    t.dataset.retried = "1";
    t.src = t.src.split("?")[0] + "?r=1";
  }
}, true);

/* Color theme switcher */
const THEME_NAMES = {pink:"Studio Pink", chrome:"Black + Silver", cobalt:"Cobalt", mono:"Mono Ink"};
document.documentElement.dataset.theme="chrome";
document.addEventListener("visibilitychange", ()=>document.body.classList.toggle("paused", document.hidden));

const chipsEl = document.getElementById("chips");
chipsEl.innerHTML = CATS.map(c=>`<button class="chip${c==="All"?" on":""}" data-cat="${c}">${c}</button>`).join("") +
 `<span class="search"><input id="searchBox" type="search" placeholder="Search pieces or SKU" aria-label="Search products"></span>`;
chipsEl.addEventListener("click", e=>{
  const b = e.target.closest("[data-cat]"); if(!b) return;
  activeCat = b.dataset.cat;
  chipsEl.querySelectorAll(".chip").forEach(x=>x.classList.toggle("on", x.dataset.cat===activeCat));
  render();
});
document.getElementById("searchBox").addEventListener("input", e=>{ query = e.target.value.trim().toLowerCase(); render(); });

function statusOf(p){
  if(p.stock===0) return {cls:"booked", label:"Booked"};
  if(p.stock===1) return {cls:"last", label:"Last one"};
  return {cls:"", label:"Available"};
}
function render(){
  const list = PRODUCTS.filter(p =>
    (activeCat==="All" || p.cat===activeCat) &&
    (!query || p.name.toLowerCase().includes(query) || p.sku.toLowerCase().includes(query)));
  document.getElementById("countLine").textContent = list.length + (list.length===1 ? " piece" : " pieces") + " · " + activeCat;
  const grid = document.getElementById("grid");
  if(!list.length){ grid.innerHTML = `<div class="empty">Nothing on this rack right now. Check back after the next drop.</div>`; return; }
  grid.innerHTML = list.map((p,idx)=>{
    const st = statusOf(p);
    const off = p.was ? Math.round((1 - p.price/p.was)*100) : 0;
    return `<article class="card" data-slug="${p.slug}">
      <div class="ph">
        <span class="badge ${st.cls}"><span class="dot"></span>${st.label}</span>
        ${off ? `<span class="off-tag">-${off}%</span>` : ``}
        <img src="${p.img}" alt="${p.name}" loading="${idx<4?'eager':'lazy'}" decoding="async">
      </div>
      <div class="body">
        <h3>${p.name}</h3>
        <p class="spec">${p.sku} · ${p.cat} · Size ${p.sizes.join("/")}</p>
        <div class="row">
          <span class="price">${p.was ? `<s>${fmt(p.was)}</s>` : ``}${fmt(p.price)}</span>
          <button class="add-btn" data-add="${p.slug}" ${p.stock===0 ? "disabled" : ""}>${p.stock===0 ? "Booked" : "Add +"}</button>
        </div>
      </div>
    </article>`;
  }).join("");
}
document.getElementById("grid").addEventListener("click", e=>{
  const add = e.target.closest("[data-add]");
  if(add){ e.stopPropagation(); addToCart(add.dataset.add, add); return; }
  const card = e.target.closest(".card");
  if(card) openModal(card.dataset.slug);
});

function burst(el){
  if(!el) return;
  const r = el.getBoundingClientRect();
  const s = document.createElement("span");
  s.className = "burst"; s.textContent = "★ +1";
  s.style.left = (r.left + r.width/2) + "px";
  s.style.top = r.top + "px";
  document.body.appendChild(s);
  setTimeout(()=>s.remove(), 600);
}
function addToCart(slug, srcEl){
  const p = PRODUCTS.find(x=>x.slug===slug);
  /* Stock invariant enforced in the logic, not just the UI: a booked
     one-piece item can never enter the bag, whatever path calls this. */
  if(!p || p.stock===0){ toast("That one's already booked"); return; }
  const cur = cart.get(slug) || {p, qty:0, size:p.sizes[0]};
  cur.qty = Math.min(cur.qty + 1, Math.max(p.stock,1));
  cart.set(slug, cur);
  burst(srcEl || document.querySelector(`[data-add="${slug}"]`));
  syncBag(); toast(`In the bag: ${p.name}`);
  const bb = document.getElementById("bagBtn");
  bb.classList.remove("pop"); void bb.offsetWidth; bb.classList.add("pop");
}
function syncBag(){
  let count = 0, sub = 0;
  cart.forEach(({p,qty})=>{ count += qty; sub += p.price*qty; });
  document.getElementById("bagBtn").textContent = `Bag (${count})`;
  document.getElementById("subTotal").textContent = fmt(sub);
  document.getElementById("grandTotal").textContent = fmt(count ? sub + DELIVERY : 0);
  const box = document.getElementById("cartItems");
  if(!count){ box.innerHTML = `<div class="cart-empty">Bag's empty.<br>The good stuff doesn't wait around.</div>`; return; }
  box.innerHTML = [...cart.values()].map(({p,qty,size})=>`
    <div class="cart-item">
      <img src="${p.img}" alt="${p.name}" loading="lazy" decoding="async">
      <div>
        <h5>${p.name}</h5>
        <p class="mono">${p.sku} · Size ${size}</p>
        <div class="qty">
          <button data-dec="${p.slug}" aria-label="Decrease">−</button>
          <span class="mono">${qty}</span>
          <button data-inc="${p.slug}" aria-label="Increase">+</button>
        </div>
      </div>
      <div class="ci-right">
        <span class="p">${fmt(p.price*qty)}</span><br>
        <button class="rm" data-rm="${p.slug}">Remove</button>
      </div>
    </div>`).join("");
}
document.getElementById("cartItems").addEventListener("click", e=>{
  const inc = e.target.closest("[data-inc]"), dec = e.target.closest("[data-dec]"), rm = e.target.closest("[data-rm]");
  if(inc){ const it = cart.get(inc.dataset.inc); it.qty = Math.min(it.qty+1, Math.max(it.p.stock,1)); }
  if(dec){ const it = cart.get(dec.dataset.dec); it.qty--; if(it.qty<=0) cart.delete(dec.dataset.dec); }
  if(rm){ cart.delete(rm.dataset.rm); }
  if(inc||dec||rm) syncBag();
});

const drawer = document.getElementById("drawer"), scrim = document.getElementById("scrim");
function openDrawer(){ drawer.classList.add("open"); scrim.classList.add("open"); }
function closeDrawer(){ drawer.classList.remove("open"); scrim.classList.remove("open"); }
document.getElementById("bagBtn").addEventListener("click", openDrawer);
document.getElementById("drawerClose").addEventListener("click", closeDrawer);
scrim.addEventListener("click", ()=>{ closeDrawer(); closeModal(); });
const bagFoot = document.querySelector(".drawer-foot");
const coView = document.getElementById("checkoutView"), doneView = document.getElementById("doneView");
function showView(v){
  document.getElementById("cartItems").style.display = v==="bag" ? "" : "none";
  bagFoot.style.display = v==="bag" ? "" : "none";
  coView.hidden = v!=="form"; doneView.hidden = v!=="done";
  drawer.scrollTop = 0;
}
function coTotals(){
  let sub = 0; cart.forEach(({p,qty})=>{ sub += p.price*qty; });
  document.getElementById("coSub").textContent = fmt(sub);
  document.getElementById("coDel").textContent = fmt(DELIVERY);
  document.getElementById("coTotal").textContent = fmt(sub + DELIVERY);
  return sub;
}
document.querySelectorAll(".zone").forEach(z=>z.addEventListener("click", ()=>{
  document.querySelectorAll(".zone").forEach(x=>x.classList.toggle("on", x===z));
  DELIVERY = +z.dataset.zone; syncBag(); coTotals();
}));
document.getElementById("checkoutBtn").addEventListener("click", ()=>{
  if(!cart.size){ toast("Your bag is empty"); return; }
  coTotals(); showView("form");
});
document.getElementById("coBack").addEventListener("click", ()=>showView("bag"));
function markBad(input, err, bad){ input.classList.toggle("bad", bad); document.getElementById(err).hidden = !bad; return !bad; }
document.getElementById("confirmBtn").addEventListener("click", ()=>{
  const name = document.getElementById("coName"), phone = document.getElementById("coPhone"), addr = document.getElementById("coAddr");
  let ok = true;
  ok = markBad(name, "errName", name.value.trim().length < 3) && ok;
  ok = markBad(phone, "errPhone", !/^01[3-9]\d{8}$/.test(phone.value.trim())) && ok;
  ok = markBad(addr, "errAddr", addr.value.trim().length < 10) && ok;
  if(!ok) return;
  const btn = document.getElementById("confirmBtn");
  btn.disabled = true; btn.textContent = "Booking...";
  const ref = "AJ-" + Math.floor(1000 + Math.random()*9000);
  const lines = [...cart.values()].map(({p,qty,size})=>`${p.name} · Size ${size} · x${qty} · ${fmt(p.price*qty)}`);
  const sub = coTotals();
  const msg = ["Order " + ref + " · Ajaira Thrift", ...lines,
    "Subtotal: " + fmt(sub), "Delivery: " + fmt(DELIVERY), "Total: " + fmt(sub + DELIVERY),
    "Name: " + name.value.trim(), "Phone: " + phone.value.trim(), "Address: " + addr.value.trim()].join("\n");
  document.getElementById("doneWa").href = "https://wa.me/8801992420839?text=" + encodeURIComponent(msg);
  document.getElementById("doneTitle").textContent = "Booked under " + name.value.trim().split(" ")[0];
  document.getElementById("doneRef").textContent = "Order " + ref + " · Total " + fmt(sub + DELIVERY) + " · Pay on delivery";
  cart.clear(); syncBag();
  btn.disabled = false; btn.textContent = "Confirm order";
  showView("done");
});
document.getElementById("doneContinue").addEventListener("click", ()=>{ showView("bag"); closeDrawer(); });

const modalWrap = document.getElementById("modalWrap"), modal = document.getElementById("modal");
let modalSize = null;
function openModal(slug){
  const p = PRODUCTS.find(x=>x.slug===slug); if(!p) return;
  modalSize = p.sizes[0];
  const st = statusOf(p);
  const off = p.was ? Math.round((1 - p.price/p.was)*100) : 0;
  modal.innerHTML = `
    <button class="x-btn" id="modalClose" aria-label="Close">✕</button>
    <div class="mph"><img src="${p.img}" alt="${p.name}" loading="lazy" decoding="async"></div>
    <div class="minfo">
      <span class="badge ${st.cls}" style="position:static"><span class="dot"></span>${st.label}</span>
      <h3>${p.name}</h3>
      <p class="spec">${p.sku} · ${p.cat}${off ? ` · Save ${off}%` : ``}</p>
      <p class="price" style="font-size:24px;margin-top:12px">${p.was ? `<s>${fmt(p.was)}</s>` : ``}${fmt(p.price)}</p>
      <p class="desc">${p.desc}</p>
      <div class="spec-rows">
        <div class="spec-row"><span class="k">Size</span><span class="v">${p.sizes.join(" / ")}</span></div>
        <div class="spec-row"><span class="k">Measurements</span><span class="v">${(SPECS[p.slug]||{}).meas || "Ask us on WhatsApp"}</span></div>
        <div class="spec-row"><span class="k">Condition</span><span class="v">${(SPECS[p.slug]||{}).cond || "Checked by hand, no flaws noted"}</span></div>
      </div>
      <p class="spec" style="margin-top:18px">Select size</p>
      <div class="sizes">${p.sizes.map((s,i)=>`<button class="size-pill${i===0?" on":""}" data-size="${s}">${s}</button>`).join("")}</div>
      <div class="mrow">
        <button class="btn-solid" id="modalAdd" ${p.stock===0 ? "disabled style='opacity:.45;cursor:not-allowed'" : ""}>Add to bag</button>
        <a class="wa-btn" href="https://wa.me/8801992420839" target="_blank" rel="noopener">Order on WhatsApp</a>
      </div>
      <p class="confirm-line">First to confirm gets it. Once it's booked, it's off the rack for everyone else.</p>
    </div>`;
  modalWrap.classList.add("open");
  modal.querySelector("#modalClose").addEventListener("click", closeModal);
  modal.querySelectorAll(".size-pill").forEach(b=>b.addEventListener("click", ()=>{
    modal.querySelectorAll(".size-pill").forEach(x=>x.classList.remove("on"));
    b.classList.add("on"); modalSize = b.dataset.size;
  }));
  const add = modal.querySelector("#modalAdd");
  if(add) add.addEventListener("click", ()=>{
    const cur = cart.get(slug) || {p, qty:0, size:modalSize};
    cur.size = modalSize; cur.qty = Math.min(cur.qty+1, Math.max(p.stock,1));
    cart.set(slug, cur); burst(add); syncBag(); closeModal(); openDrawer();
  });
}
function closeModal(){ modalWrap.classList.remove("open"); }
modalWrap.addEventListener("click", e=>{ if(e.target===modalWrap) closeModal(); });
document.addEventListener("keydown", e=>{ if(e.key==="Escape"){ closeModal(); closeDrawer(); } });

let toastTimer;
function toast(msg){
  const t = document.getElementById("toast");
  t.textContent = msg; t.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(()=>t.classList.remove("show"), 2400);
}
/* Interactive background: glow follows finger/cursor, hero pieces drift on scroll */
(function(){
  const root = document.documentElement;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let gx = innerWidth/2, gy = innerHeight*0.3, tx = gx, ty = gy, raf = null;
  function loop(){
    gx += (tx-gx)*0.16; gy += (ty-gy)*0.16;
    root.style.setProperty("--mx", gx+"px");
    root.style.setProperty("--my", gy+"px");
    if(Math.abs(tx-gx) > .5 || Math.abs(ty-gy) > .5) raf = requestAnimationFrame(loop);
    else raf = null;
  }
  window.addEventListener("pointermove", e=>{
    tx = e.clientX; ty = e.clientY;
    if(!raf) raf = requestAnimationFrame(loop);
  }, {passive:true});
  if(!reduce){
    let ticking = false;
    window.addEventListener("scroll", ()=>{
      if(ticking) return; ticking = true;
      requestAnimationFrame(()=>{
        const sy = Math.min(window.scrollY, 900);
        root.style.setProperty("--py", (sy*-0.035)+"px");
        root.style.setProperty("--py2", (sy*0.055)+"px");
        root.style.setProperty("--py3", (sy*-0.065)+"px");
        ticking = false;
      });
    }, {passive:true});
  }
})();

render(); syncBag();

(function(){var sp=document.getElementById("splash");if(!sp)return;
if(document.documentElement.classList.contains("no-splash")){sp.remove();return;}
document.documentElement.classList.add("gated");
setTimeout(function(){if(!window.__ajairaBooted){var sp=document.getElementById("splash");if(sp)sp.remove();document.documentElement.classList.remove("gated");}},6000);
var v=document.querySelector(".splash-video");
if(v){var kick=function(){var p=v.play();if(p&&p.catch)p.catch(function(){})};
v.addEventListener("playing",function(){v.classList.add("on")});
v.addEventListener("canplay",kick);kick();
document.addEventListener("touchstart",kick,{once:true});}
document.getElementById("splashEnter").addEventListener("click",function(){
  document.body.classList.add("entered");
try{sessionStorage.setItem("ajaira-entered","1")}catch(e){}
sp.classList.add("gone");document.documentElement.classList.remove("gated");
setTimeout(function(){sp.remove()},820);});})();

(function(){function split(el){if(!el)return;el.innerHTML=el.textContent.trim().split("").map(function(c,i){return '<span class="gl" style="--i:'+i+'">'+(c===" "?"&nbsp;":c)+'</span>'}).join("");}split(document.getElementById("splashEnter"));split(document.querySelector(".hero h1 .pink"));})();
