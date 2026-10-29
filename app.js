const grid=document.getElementById("productGrid");
const search=document.getElementById("search");
const resultCount=document.getElementById("resultCount");
let activeCategory="All";
document.getElementById("year").textContent=new Date().getFullYear();
function escapeHtml(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function render(){
 const q=search.value.trim().toLowerCase();
 const items=PRODUCTS.filter(p=>(activeCategory==="All"||p.category===activeCategory)&&[p.name,p.category,p.description,p.store].join(" ").toLowerCase().includes(q));
 resultCount.textContent=`${items.length} ${items.length===1?"find":"finds"} to explore`;
 grid.innerHTML=items.length?items.map(p=>`<article class="product-card">
  <div class="product-image">${p.image?`<img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.name)}" loading="lazy">`:`<div class="image-placeholder">${escapeHtml(p.category==="Fashion"?"✳":p.category==="Beauty"?"✧":p.category==="Jewellery"?"◇":p.category==="Electronics"?"⌁":"⌂")}</div>`}<span class="product-tag">${escapeHtml(p.tag||"CURATED FIND")}</span></div>
  <div class="product-info"><div class="product-meta">${escapeHtml(p.category)} · ${escapeHtml(p.store||"Selected store")}</div><h3 class="product-title">${escapeHtml(p.name)}</h3><p class="product-desc">${escapeHtml(p.description||"Discover this find.")}</p><div class="product-bottom"><div class="price">${escapeHtml(p.price||"Check price")}${p.oldPrice?`<span class="old-price">${escapeHtml(p.oldPrice)}</span>`:""}</div><a class="buy-link" href="${escapeHtml(p.affiliateUrl||"#")}" ${p.affiliateUrl&&p.affiliateUrl!=="#"?'target="_blank" rel="sponsored nofollow noopener"': 'aria-label="Add your affiliate URL in products.js"'}>${p.affiliateUrl&&p.affiliateUrl!=="#"?"Shop now":"Add link"} ↗</a></div></div></article>`).join(""):`<div class="no-results"><h3>No finds here just yet</h3><p>Try another search or category.</p></div>`;
}
function setCategory(cat){activeCategory=cat;document.querySelectorAll("[data-category]").forEach(b=>b.classList.toggle("active",b.classList.contains("cat")&&b.dataset.category===cat));document.querySelectorAll(".chip").forEach(b=>b.classList.toggle("selected",b.dataset.category===cat));render();}
document.querySelectorAll(".cat,.chip").forEach(b=>b.addEventListener("click",()=>setCategory(b.dataset.category)));
search.addEventListener("input",render);render();