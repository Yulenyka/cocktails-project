!function(){var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},e={},i=n.parcelRequire1208;null==i&&((i=function(n){if(n in t)return t[n].exports;if(n in e){var i=e[n];delete e[n];var o={id:n,exports:{}};return t[n]=o,i.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(n,t){e[n]=t},n.parcelRequire1208=i);var o=i("5d35N"),r=document.querySelector(".favorite-ingridient__list");(new(0,o.default)).getCocktailIngrId(83).then((function(n){localStorage.setItem("fav",JSON.stringify(n)),console.log(n)})),function(n){if(localStorage.getItem("fav")){var t=JSON.parse(localStorage.getItem("fav"));console.log(t);var e=t.map((function(n){var t=n.strIngredient,e=n.strType;return'<li class="favorite-ingridient__item">\n      <h3 class="drink__ingridient">'.concat(t,'</h3>\n      <p class="drink__type">').concat(e,'</p>\n      <ul class="button-list">\n        <li class="button__item">\n          <button class="button-more" type="submit">Learn more</button>\n        </li>\n        <li class="button__item">\n          <button class="button-add" type="submit">Add to</button>\n        </li>\n      </ul>\n    </li>')})).join("");n.innerHTML=e}else{var i=favoriteIngridients.map((function(n){n.strIngredient,n.strType;return'<p class="no__favorite-cocktails">\n      You haven\'t added any <br />\n      favorite ingridients yet\n    </p>\n              '})).join("");n.innerHTML=i}}(r)}();
//# sourceMappingURL=favorite-ingridient.d6835c77.js.map