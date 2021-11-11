(()=>{"use strict";function t(t,e,n,s,a,o=1,c){this.brand=t,this.series=e,this.material=n,this.type=s,this.amount=a,this.price=o,this.number=c}const e=function(){return new t};let n={.5:0,1.5:1,"2.0":2,"5.0":3,18.9:5},s={AquaAlex:4,Luzhanska:3,"Tsilyshi Krynyci":2,Morshynska:5},a={Glass:1,Plastic:0},o={Gasified:2,Lowgasified:1,Nongasified:0};const c=function(t){const e=document.querySelector(".price-field");t.price=s[t.brand],t.price+=n[t.amount],t.price+=a[t.material],t.price+=o[t.type],t.price*=t.number,e.textContent=t.price+"$",window.getComputedStyle(e).opacity,e.style.opacity=1};class r{constructor(t){this.brand=t.brand,this.type=t.type,this.bottle=t.bottle,this.price=t.price,this.amount=t.amount,this.volume=t.volume}}class i extends r{constructor(t){super(t),this.series=t.series}}class d extends r{constructor(t){super(t),this.series=t.series}}class l extends r{constructor(t){super(t),this.series=t.series}}class u extends r{constructor(t){super(t)}}class p{constructor(t){this.volume=t}setAmount(t){return this.amount=t,this}setBottle(t){return this.bottle=t,this}setPrice(t){return this.price=t,this}setType(t){return this.type=t,this}getWater(){throw new Error(`В ${this.constructor.name} no method getWater()`)}}class m extends p{constructor(t){super(t),this.brand="Aqua Alex"}setSeries(t){return this.series=t,this}getWater(){if(!this.volume)throw new Error(`${this.constructor.name} invalid volume!@`);return new i(this)}}class h extends p{constructor(t){super(t),this.brand="Luzhanska"}setSeries(t){return this.series=t,this}getWater(){if(!this.volume)throw new Error(`${this.constructor.name} invalid volume!@`);return new d(this)}}class v extends p{constructor(t){super(t),this.brand="Tsilyshi Krynyci"}setSeries(t){return this.series=t,this}getWater(){if(!this.volume)throw new Error(`${this.constructor.name} invalid volume!@`);return new l(this)}}class y extends p{constructor(t){super(t),this.brand="Morshinska"}getWater(){if(!this.volume)throw new Error(`${this.constructor.name} invalid volume!@`);return new u(this)}}const C=(()=>{let t=[];const e=e=>t[e],n=()=>t.length,s=()=>{localStorage.setItem("bottle",JSON.stringify(t))},a=()=>{t=JSON.parse(localStorage.getItem("bottle")||"[]"),console.log(t),0==n()?document.querySelector(".cart-conter").innerText="":document.querySelector(".cart-conter").innerText=C.getLength(),window.getComputedStyle(document.querySelector(".cart-conter")).opacity,document.querySelector(".cart-conter").style.opacity=1};return{getitem:e,setItem:e=>{t.push(e),s(),document.querySelector(".cart-conter").innerText=C.getLength(),window.getComputedStyle(document.querySelector(".cart-conter")).opacity,document.querySelector(".cart-conter").style.opacity=1},getLength:n,removeElement:e=>{t.splice(e,1),s(),0==n()?document.querySelector(".cart-conter").innerText="":document.querySelector(".cart-conter").innerText=C.getLength(),window.getComputedStyle(document.querySelector(".cart-conter")).opacity,document.querySelector(".cart-conter").style.opacity=1},totalSum:()=>{let t=0;for(let s=0;s<n();s++)t+=e(s).price;return t},saveLocal:s,getLocal:a,emptyCart:()=>{t=[],s(),a()}}})(),g=C,b=new class{constructor(){this.observers=[]}subscribe(t){this.observers.push(t)}unsubscribe(t){this.observers=this.observers.filter((e=>e!==t))}broadcast(t){this.observers.forEach((e=>e(t)))}};function L(t){for(const[e,n]of Object.entries(t))if(console.log(`${e}: ${n}`),null==n)return!1;return!0}let f;const E=function(){const t=e();document.querySelectorAll(".gas-button, .bottle-wrapper, .material-button"),function(t){const e=document.querySelectorAll(".gas-button, .bottle-wrapper, .material-button");e.forEach((e=>{e.addEventListener("click",(()=>{f=!1,t.amount=void 0,b.broadcast(e.textContent),L(t)?c(t):document.querySelector(".price-field").textContent=""}))})),document.querySelector("#input-amount").addEventListener("change",(()=>{t.number=document.querySelector("#input-amount").value,L(t)&&c(t)})),document.querySelector(".order-button").addEventListener("click",(()=>{if(L(t)){g.setItem(function(t){const e=t.brand;return console.log("2rfwef",e),"AquaAlex"==e?new m(t.amount).setAmount(t.number).setPrice(t.price).setSeries(t.series).setBottle(t.material).setType(t.type).getWater():"Luzhanska"==e?new h(t.amount).setAmount(t.number).setPrice(t.price).setSeries(t.series).setBottle(t.material).setType(t.type).getWater():"Tsilyshi Krynyci"==e?new v(t.amount).setAmount(t.number).setPrice(t.price).setSeries(t.series).setBottle(t.material).setType(t.type).getWater():"Morshynska"==e?new y(t.amount).setAmount(t.number).setPrice(t.price).setBottle(t.material).setType(t.type).getWater():void 0}(t)),e.forEach((t=>{t.classList.contains("active")&&t.classList.remove("active")})),document.querySelector(".price-field").textContent="",t.amount=void 0,t.material=void 0,t.type=void 0;for(let t=0;t<g.getLength();t++)console.log(g.getitem(t))}}))}(function(t){return document.querySelectorAll(".gas-button, .bottle-wrapper, .material-button").forEach((e=>{b.subscribe((()=>{if(e.classList.contains("active")){e.classList.contains("gas-button")&&(t.type=e.textContent),e.classList.contains("material-button")&&(t.material=e.textContent),e.classList.contains("bottle-wrapper")&&(t.amount=e.textContent,t.series=e.parentElement.previousSibling.textContent,console.log("active:",e),f=!0),console.log("gtfo",f),f||(t.amount=void 0),t.number=document.querySelector("#input-amount").value;const n=document.querySelectorAll(".button-nav");console.log(n),n.forEach((e=>{e.classList.contains("active")&&(t.brand=e.textContent)}))}}))})),t}(t)),console.log(b.observers)};function S(t,e){const n=document.createElement("div");n.classList.add("bottle-wrapper");const s=document.createElement("img");s.classList.add("constructor-img"),s.src=`https://www.shmv.com.ua/images/tara/${e}.png`;const a=document.createElement("h2");return a.classList.add("bottle-liter"),a.textContent=t,n.appendChild(s),n.appendChild(a),n}function w(t){t.forEach((t=>{t.addEventListener("click",(()=>{t.classList.contains("active")||function(t){document.querySelectorAll(`.${t.className}`).forEach((t=>{t!==this&&t.classList.remove("active")})),t.classList.add("active")}(t)}))}))}function x(t){t.forEach((t=>{t.addEventListener("click",(t=>{!function(t){const e=document.querySelectorAll(".bottle-wrapper"),n=document.querySelectorAll(".gas-button"),s=document.querySelectorAll(".material-button"),a=document.querySelector("#title1");let o,c,r=document.querySelector("#title2");null==r&&(r=""),n.forEach((t=>{t.classList.contains("active")&&(o=t.textContent)})),s.forEach((t=>{t.classList.contains("active")&&(c=t.textContent)})),e.forEach(((t,e)=>{"Luzanska 3"==a.textContent&&"Nongasified"==o?(t.style="filter: grayscale(100%); pointer-events: none;",t.classList.remove("active")):"Polyana Kvasova"==r.textContent&&"Nongasified"==o&&e>4||("Gasified"==o||"Lowgasified"==o)&&parseFloat(t.lastChild.textContent)>2||"Glass"==c&&parseFloat(t.lastChild.textContent)>.5?(t.style="filter: grayscale(100%); pointer-events: none",t.classList.remove("active")):t.style=""}))}(t.target)}))}))}const q=function(t,e){const n=document.querySelector("#main");n.textContent="",n.appendChild(function(t,e){const n=document.createElement("div");n.classList.add("constructor-page");const s=document.createElement("div");s.classList.add("picture-menu-wrapper");const a=document.createElement("div");a.classList.add("all-cards-wrapper");const o=document.createElement("div");o.classList.add("card1-wrapper");const c=document.createElement("div");c.classList.add("card"),c.setAttribute("id","card-1");const r=document.createElement("h2");if(r.textContent=t,r.setAttribute("id","title1"),c.appendChild(S("0.5","0-5")),c.appendChild(S("1.5","1-5")),c.appendChild(S("2.0","2-0")),"Vershina"!=t&&"Morshynska"!=t&&"Shayanska"!=t||(c.appendChild(S("5.0","5-0")),c.appendChild(S("18.9","18-9"))),o.appendChild(r),o.appendChild(c),a.appendChild(o),void 0!==e||"Drugivska"==e){const t=document.createElement("div");t.classList.add("card2-wrapper");const n=document.createElement("div");n.classList.add("card"),n.setAttribute("id","card-2");const s=document.createElement("img");s.classList.add("constructor-img"),s.src="/123.png";const o=document.createElement("h2");o.textContent=e,o.setAttribute("id","title2"),console.log(e),n.appendChild(S("0.5","0-5")),n.appendChild(S("1.5","1-5")),n.appendChild(S("2.0","2-0")),"Drugivska"==e&&(n.appendChild(S("5.0","5-0")),n.appendChild(S("18.9","18-9"))),t.appendChild(o),t.appendChild(n),a.appendChild(t)}return s.appendChild(a),n.appendChild(s),n.appendChild(function(){const t=document.createElement("div");t.classList.add("builder-wrapper");const e=document.createElement("h2");e.innerText="Available options",e.classList.add("builder-title");const n=document.createElement("div");n.classList.add("gas-wrapper");const s=document.createElement("div");s.classList.add("gas-button"),s.setAttribute("id","gasified"),s.innerText="Gasified";const a=document.createElement("div");a.classList.add("gas-button"),a.setAttribute("id","nonGasified"),a.innerText="Nongasified";const o=document.createElement("div");o.classList.add("gas-button"),o.setAttribute("id","LowGasified"),o.innerText="Lowgasified",n.appendChild(s),n.appendChild(a),n.appendChild(o);const c=document.createElement("div");c.classList.add("material-wrapper");const r=document.createElement("div");r.classList.add("material-button"),r.setAttribute("id","glass"),r.innerText="Glass";const i=document.createElement("div");i.classList.add("material-button"),i.setAttribute("id","plastic"),i.innerText="Plastic",c.appendChild(r),c.appendChild(i);const d=document.createElement("div");d.classList.add("vertical-wrapper");const l=document.createElement("div");l.classList.add("amount-wrapper");const u=document.createElement("input");u.type="number",u.setAttribute("id","input-amount"),l.appendChild(u),u.defaultValue=1,u.min=1,u.max=1e3,d.appendChild(c),d.appendChild(l);const p=document.createElement("div");p.classList.add("price-wrapper");const m=document.createElement("div");m.classList.add("price-field"),m.textContent="10$";const h=document.createElement("div");return h.classList.add("order-button"),h.textContent="Confirm",p.appendChild(m),p.appendChild(h),t.appendChild(e),t.appendChild(n),t.appendChild(d),t.appendChild(p),t}()),n}(t,e)),w(document.querySelectorAll(".bottle-wrapper"));const s=document.querySelectorAll(".gas-button");w(s);const a=document.querySelectorAll(".material-button");w(a),x(s),x(a),E(),window.getComputedStyle(document.querySelector(".all-cards-wrapper")).opacity,document.querySelector(".all-cards-wrapper").style.opacity=1},A=["Brand","Series","Type","Bottle","Volume","Amount","Price"];function k(){const t=document.querySelector(".cart-area");if(t.innerHTML="",0==g.getLength()){const e=document.createElement("h1");e.classList.add("nothing"),e.textContent="Your cart is empty",t.appendChild(e)}else t.appendChild(function(){const t=document.createElement("div");t.classList.add("table-wrapper");const e=document.createElement("table"),n=document.createElement("tbody");for(let t=0;t<g.getLength();t++){const e=document.createElement("tr");for(let n=0;n<7;n++){const s=document.createElement("td");s.appendChild(document.createTextNode(T(g.getitem(t))[n])),e.appendChild(s)}const s=document.createElement("td");s.appendChild(document.createTextNode("X")),s.classList.add("remove-button"),s.setAttribute("index",`${t}`),s.addEventListener("click",(()=>{g.removeElement(s.getAttribute("id")),k()})),e.appendChild(s),n.appendChild(e)}const s=document.createElement("thead");e.appendChild(s);for(let t=0;t<A.length;t++)s.appendChild(document.createElement("th")).appendChild(document.createTextNode(A[t]));return e.appendChild(n),t.appendChild(e),t}()),t.appendChild(function(){const t=document.createElement("div");t.classList.add("confirm-button"),t.textContent="Confirm",t.addEventListener("click",(()=>{g.emptyCart();const t=document.createElement("h1");t.textContent="Thank you for the order!",t.classList.add("final-message"),document.querySelector(".cart-area").innerHTML="",document.querySelector(".cart-area").appendChild(t),window.getComputedStyle(document.querySelector(".final-message")).opacity,document.querySelector(".final-message").style.opacity=1}));const e=document.createElement("span");e.classList.add("total-sum"),e.textContent="Your total: "+g.totalSum()+"$";const n=document.createElement("div");return n.classList.add("final-wrapper"),n.appendChild(e),n.appendChild(t),n}()),window.getComputedStyle(document.querySelector(".total-sum")).opacity,document.querySelector(".total-sum").style.opacity=1;window.getComputedStyle(t).opacity,t.style.opacity=1}function T(t){const e=[];return e.push(t.brand),e.push(t.series),e.push(t.type),e.push(t.bottle),e.push(t.volume),e.push(t.amount),e.push(t.price),e}const $=function(){const t=document.querySelector("#main");t.textContent="",console.log(t);const e=document.createElement("div");e.classList.add("cart-page"),t.appendChild(e);const n=document.createElement("div");n.classList.add("cart-wrapper");const s=document.createElement("div");s.classList.add("cart-area"),n.appendChild(s),e.appendChild(n),k(),window.getComputedStyle(n).opacity,n.style.opacity=1};function G(t){document.querySelectorAll(".button-nav, #cart-logo").forEach((t=>{t!==this&&t.classList.remove("active")})),t.classList.add("active")}console.log(e()),function(){const t=document.querySelector("#content");t.appendChild(function(){const t=document.createElement("div");t.classList.add("header");const e=document.createElement("img");e.setAttribute("id","main-logo"),e.src="https://images.squarespace-cdn.com/content/v1/5558b449e4b02de6a6eda24f/1431976056800-0N3XY7YL8W9RVTGT3CFC/Small+Logo.png";const n=document.createElement("h1");n.setAttribute("id","main-title"),n.textContent="Bradford";const s=document.createElement("div");s.setAttribute("id","logo-wrapper"),s.appendChild(e),s.appendChild(n);const a=document.createElement("img");a.setAttribute("id","cart-logo"),a.src="https://cdn-icons-png.flaticon.com/512/263/263142.png",a.addEventListener("click",(t=>{t.target.classList.contains("active")||($(),G(a))}));const o=document.createElement("div");o.classList.add("cart-conter");const c=document.createElement("div");return c.setAttribute("id","cart-wrapper"),c.appendChild(a),c.appendChild(o),t.appendChild(s),t.appendChild(function(){const t=document.createElement("nav");t.classList.add("topnav");const e=document.createElement("button");e.textContent="AquaAlex",e.classList.add("button-nav","visible"),e.addEventListener("click",(t=>{t.target.classList.contains("active")||(G(e),q("Vershina","Polyana Kvasova"))}));const n=document.createElement("button");n.textContent="Luzhanska",n.classList.add("button-nav","visible"),n.addEventListener("click",(t=>{t.target.classList.contains("active")||(G(n),q("Luzanska 3","Luzanska 7"))}));const s=document.createElement("button");s.textContent="Tsilyshi Krynyci",s.classList.add("button-nav","visible"),s.addEventListener("click",(t=>{t.target.classList.contains("active")||(G(s),q("Shayanska","Drugivska"))}));const a=document.createElement("button");return a.textContent="Morshynska",a.classList.add("button-nav","visible"),a.addEventListener("click",(t=>{t.target.classList.contains("active")||(G(a),q("Morshynska"))})),t.appendChild(e),t.appendChild(n),t.appendChild(s),t.appendChild(a),t}()),t.appendChild(c),t}()),t.appendChild(function(){const t=document.createElement("div");return t.setAttribute("id","main"),t}()),t.appendChild(function(){const t=document.createElement("div");t.classList.add("footer");const e=document.createElement("h2");e.classList.add("madeBy"),e.textContent="Made By Oleg Gavashi";const n=document.createElement("a");return n.classList.add("link"),n.href="https://github.com/ogavashi",n.textContent="GitHub",n.target="blank",t.appendChild(e),t.appendChild(n),t}()),G(document.querySelector(".button-nav")),q("Vershina","Polyana Kvasova"),g.getLocal()}()})();