var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequire1208;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,i.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequire1208=i);var o=i("bwowl");const l=document.querySelector(".favorite-ingridient__list"),r=document.querySelector(".favorite-ingridient__title");(new(0,o.default)).getCocktailIngrId(25).then((e=>{localStorage.setItem("fav",JSON.stringify(e)),console.log(e)})),function(e){let t=JSON.parse(localStorage.getItem("fav"));if(t.length>0){const n=t.map((({strIngredient:e,strType:t,strAlcohol:n})=>`<li class="favorite-ingridient__item">\n      <h3 class="drink__ingridient">${e}</h3>\n      <p class="drink__type">Alcohol: ${t||n}</p>\n      <ul class="button-list">\n        <li class="button__item">\n          <button class="button-more" type="submit">Learn more</button>\n        </li>\n        <li class="button__item">\n          <button class="button-add" type="submit">Add to</button>\n        </li>\n      </ul>\n    </li>`)).join("");e.innerHTML=n}else{const e='<p class="no__favorite-cocktails">\n      You haven\'t added any <br />\n      favorite ingridients yet\n    </p>';r.insertAdjacentHTML("afterend",e)}}(l);
//# sourceMappingURL=favorite-ingridient.d8a76ca0.js.map
