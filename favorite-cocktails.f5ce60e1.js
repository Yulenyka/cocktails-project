var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},i=t.parcelRequire1208;null==i&&((i=function(t){if(t in e)return e[t].exports;if(t in n){var i=n[t];delete n[t];var o={id:t,exports:{}};return e[t]=o,i.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){n[t]=e},t.parcelRequire1208=i);var o=i("1dkLo");o=i("1dkLo");const s=document.querySelector(".modal-cocktail"),r=document.querySelector(".backdrop"),l=document.querySelector(".modal-close");let c=new(0,o.default);function a(){r.classList.add("is-hidden"),l.removeEventListener("click",a),r.removeEventListener("click",d),window.removeEventListener("keydown",u)}function d(t){t.target===t.currentTarget&&a()}function u(t){"Escape"===t.code&&a()}function m(t){const e=Object.entries(t),n=[];e.map((t=>{t[0].includes("strIngredient")&&t[1]&&n.push(t[1])})),console.log(n);const i=n.map((t=>`<li class="ingredients__item">\n      <a href="" class="ingredients__link">\n        &#10038 ${t}\n      </a>\n    </li>`)).join(""),{strDrink:r,strDrinkThumb:l,idDrink:a,strInstructions:d}=t,u=`<div class="cocktails-info">\n              <h2 class="modal__title">${r}</h2>\n              <div class="instruction">\n              <h3 class="instractions__title">Instructions:</h3>\n              <p class="instractions__text">${d}</p>\n              </div>\n              <img class="photo" src="${l}" alt="#">\n              \n              <div class="ingredients">\n                  <h3 class="ingredients__title">Ingredients</h3>\n                  <p class="ingredients__subtitle">Per cocktail</p>\n                  <ul class="ingredients__list">\n                    ${i}  \n                  </ul>\n              </div>\n          </div>\n          <button class='btn-remove' type="button" data-id="${a}">Remove from favorite</button>\n                `;s.innerHTML=u,function(){const t=document.querySelector(".btn-remove");console.log(c.cards),t.addEventListener("click",(t=>{console.log(t.target.dataset.id),function(t=""){let e=JSON.parse(localStorage.getItem(o.FAVORITE_KEY))||[],n=e.find((e=>e.idDrink===t))||c.cards.find((e=>e.idDrink===t));console.log(n),n?e=e.filter((e=>e.idDrink!==t)):e.push(n);localStorage.setItem(o.FAVORITE_KEY,JSON.stringify(e))}(t.target.dataset.id)}))}()}const g=document.querySelector(".gallery");document.querySelector(".favorite-cocktails__title");function f(t){let e=JSON.parse(localStorage.getItem(o.FAVORITE_KEY))||[];if(localStorage.getItem(o.FAVORITE_KEY)&&e.length>0){const n=e.map((({strDrink:t,strDrinkThumb:e,idDrink:n,strIngredient:i})=>`<li class="cocktails__item">\n                <img class="cocktails__img" src="${e}" alt="${t} photo">\n                <h3 class="cocktails__name">${t}</h3>\n                <ul class="button-list">\n                    <li class="button__item">\n                        <button class="button-more" type="button" data-id="${n}">Learn more\n                        </button>\n                    </li>\n                  <li class="button__item">\n                    <button class='button-remove' type="button" data-id="${n}" data-action="favorite">Remove</button>\n                  </li>\n                </ul>\n              </li>\n              `)).join("");t.innerHTML=n;document.querySelectorAll(".button-more").forEach((t=>{t.addEventListener("click",(t=>{m(e.find((e=>e.idDrink===t.target.dataset.id))),r.classList.remove("is-hidden"),l.addEventListener("click",a),r.addEventListener("click",d),window.addEventListener("keydown",u)}))}));document.querySelectorAll(".button-remove").forEach((t=>{t.addEventListener("click",_)}))}else{const e='<li>\n    <p class="no__favorite-cocktails">\n      You haven\'t added any <br />\n      favorite cocktails yet\n    </p>\n    </li>';t.innerHTML=e}}const _=t=>{let e=JSON.parse(localStorage.getItem(o.FAVORITE_KEY));e=e.filter((e=>e.idDrink!==t.target.dataset.id)),console.log(e),localStorage.setItem(o.FAVORITE_KEY,JSON.stringify(e)),f(g)};f(g);
//# sourceMappingURL=favorite-cocktails.f5ce60e1.js.map