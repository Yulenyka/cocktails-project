var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},o={},n=t.parcelRequire1208;null==n&&((n=function(t){if(t in e)return e[t].exports;if(t in o){var n=o[t];delete o[t];var l={id:t,exports:{}};return e[t]=l,n.call(l.exports,l,l.exports),l.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},t.parcelRequire1208=n);var l=n("1dkLo"),i=n("2Xd5d");const a=document.querySelector(".favorite-cocktails__list");document.querySelector(".favorite-cocktails__title"),document.querySelector(".message-cocktails");function r(t){let e=JSON.parse(localStorage.getItem(l.FAVORITE_KEY))||[];if(localStorage.getItem(l.FAVORITE_KEY)&&e.length>0){const o=e.map((({strDrink:t,strDrinkThumb:e,idDrink:o})=>`<li class="cocktails__item">\n                <img class="cocktails__img" src="${e}" alt="${t} photo">\n                <h3 class="cocktails__name">${t}</h3>\n                <ul class="button-list">\n                    <li class="button__item">\n                        <button class="button-more" type="button" data-id="${o}">Learn more\n                        </button>\n                    </li>\n                  <li class="button__item">\n                    <button class='button-remove' type="button" data-id="${o}" data-action="favorite">Remove</button>\n                  </li>\n                </ul>\n              </li>\n              `)).join("");t.innerHTML=o;document.querySelectorAll(".button-more").forEach((t=>{t.addEventListener("click",(t=>{let o=e.find((e=>e.idDrink===t.target.dataset.id));(0,i.renderModalCocktail)(o),(0,i.openModalCocktail)()}))}));document.querySelectorAll(".button-remove").forEach((t=>{t.addEventListener("click",c)}))}else{const e='<li>\n    <p class="no__favorite-cocktails">\n      You haven\'t added any <br />\n      favorite cocktails yet\n    </p>\n    </li>';t.innerHTML=e}}const c=t=>{let e=JSON.parse(localStorage.getItem(l.FAVORITE_KEY));e=e.filter((e=>e.idDrink!==t.target.dataset.id)),console.log(e),localStorage.setItem(l.FAVORITE_KEY,JSON.stringify(e)),r(a)};r(a);
//# sourceMappingURL=favorite-ingridient.4ba76b00.js.map
