!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire1208;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire1208=o);var i=o("5d35N"),r=document.querySelector(".favorite-ingridient__list"),l=(document.querySelector(".favorite-ingridient__title"),new(0,i.default),"favoriteIngridient"),a=function(e){var t=JSON.parse(localStorage.getItem(l));t=t.filter((function(t){return t.idIngredient!==e.target.dataset.id})),localStorage.setItem(l,JSON.stringify(t)),c(r)};function c(e){var t=JSON.parse(localStorage.getItem(l));if(t.length>0){var n=t.map((function(e){var t=e.strIngredient,n=e.strType,o=e.strAlcohol,i=e.idIngredient,r=n||o;return'<li class="favorite-ingridient__item">\n      <h3 class="drink__ingridient">'.concat(t,'</h3>\n      <p class="drink__type">Alcohol: ').concat(r,'</p>\n      <ul class="button-list">\n        <li class="button__item">\n          <button class="button-more" type="submit">Learn more</button>\n        </li>\n        <li class="button__item">\n          <button class=\'button-remove\' type="button" data-id="').concat(i,'" data-action="favorite">Remove</button>\n        </li>\n      </ul>\n    </li>')})).join("");e.innerHTML=n,document.querySelectorAll(".button-remove").forEach((function(e){console.log(e),e.addEventListener("click",a)}))}else{e.innerHTML='<li><p class="no__favorite-cocktails">\n      You haven\'t added any <br />\n      favorite ingridients yet\n    </p></li>'}}c(r),c(r);var d=document.querySelector(".button-more");modal=document.querySelector(".modal"),d.addEventListener("click",(function(){modal.style.display="block"}))}();
//# sourceMappingURL=favorite-ingridient.b1a4156a.js.map
