!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},o=t.parcelRequire1208;null==o&&((o=function(t){if(t in e)return e[t].exports;if(t in n){var o=n[t];delete n[t];var i={id:t,exports:{}};return e[t]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){n[t]=e},t.parcelRequire1208=o);var i=o("5d35N"),r=document.querySelector(".favorite-ingridient__list"),l=new(0,i.default),a="favoriteIngridient";l.getCocktailIngrId(25).then((function(t){localStorage.setItem(a,JSON.stringify(t)),console.log(t)}));var c=function(t){var e=JSON.parse(localStorage.getItem(a));e=e.filter((function(e){return e.idIngredient!==t.target.dataset.id})),localStorage.setItem(a,JSON.stringify(e)),s(r)};function s(t){var e=JSON.parse(localStorage.getItem(a));if(localStorage.getItem(a)&&e.length>0){var n=e.map((function(t){var e=t.strIngredient,n=t.strType,o=t.strAlcohol,i=t.idIngredient,r=n||o;return'<li class="favorite-ingridient__item">\n      <h3 class="drink__ingridient">'.concat(e,'</h3>\n      <p class="drink__type">Alcohol: ').concat(r,'</p>\n      <ul class="button-list">\n        <li class="button__item">\n          <button class="button-more" type="submit">Learn more</button>\n        </li>\n        <li class="button__item">\n          <button class=\'button-remove\' type="button" data-id="').concat(i,'" data-action="favorite">Remove</button>\n        </li>\n      </ul>\n    </li>')})).join("");t.innerHTML=n,document.querySelectorAll(".button-remove").forEach((function(t){console.log(t),t.addEventListener("click",c)}))}else{t.innerHTML='<li><p class="no__favorite-cocktails">\n      You haven\'t added any <br />\n      favorite ingridients yet\n    </p></li>'}}s(r),s(r)}();
//# sourceMappingURL=favorite-ingridient.023f39f8.js.map
