!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequire1208;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,i.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequire1208=i);var r=i("5D2cV"),o=document.querySelector(".favorite-ingridient__list"),a="favoriteIngredient",l=function(e){var t=JSON.parse(localStorage.getItem(a));t=t.filter((function(t){return t.idIngredient!==e.target.dataset.id})),localStorage.setItem(a,JSON.stringify(t)),d(o)};function d(e){var t=JSON.parse(localStorage.getItem(a));if(localStorage.getItem(a)&&t.length>0){var n=t.map((function(e){var t=e.strIngredient,n=e.strType,i=e.strAlcohol,r=e.idIngredient,o=n||i;return'<li class="favorite-ingridient__item">\n      <h3 class="drink__ingridient">'.concat(t,'</h3>\n      <p class="drink__type">Alcohol: ').concat(o,'</p>\n      <ul class="button-list">\n        <li class="button__item">\n          <button class="button-more" type="submit" data-id="').concat(r,'">Learn more</button>\n        </li>\n        <li class="button__item">\n          <button class=\'button-remove\' type="button" data-id="').concat(r,'" data-action="ingredient">Remove</button>\n        </li>\n      </ul>\n    </li>')})).join("");e.innerHTML=n,document.querySelectorAll(".button-more").forEach((function(n){n.addEventListener("click",(function(n){var i=t.find((function(e){return e.idIngredient===n.target.dataset.id}));console.log(i),(0,r.renderModalIngridient)(i.strIngredient.toLowerCase().split(" ").join("+")),(0,r.openModalIngridient)((function(){d(e)}))}))})),document.querySelectorAll(".button-remove").forEach((function(e){e.addEventListener("click",l)}))}else{e.innerHTML='<li class="favorite-ingridient__box"><p class="favorite-ingridient__text">\n      You haven\'t added any <br />\n      favorite ingridients yet\n    </p></li>'}}d(o)}();
//# sourceMappingURL=favorite-ingridient.7b8c7d03.js.map