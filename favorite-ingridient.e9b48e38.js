!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},o=t.parcelRequire1208;null==o&&((o=function(t){if(t in e)return e[t].exports;if(t in n){var o=n[t];delete n[t];var a={id:t,exports:{}};return e[t]=a,o.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){n[t]=e},t.parcelRequire1208=o);var a=o("lF0Zg"),r=o("6khcg"),i=document.querySelector(".gallery");document.querySelector(".favorite-cocktails__title"),document.querySelector(".message-cocktails");function l(t){var e=JSON.parse(localStorage.getItem(a.FAVORITE_KEY))||[];if(localStorage.getItem(a.FAVORITE_KEY)&&e.length>0){var n=e.map((function(t){var e=t.strDrink,n=t.strDrinkThumb,o=t.idDrink;return'<li class="cocktails__item">\n                <img class="cocktails__img" src="'.concat(n,'" alt="').concat(e,' photo">\n                <h3 class="cocktails__name">').concat(e,'</h3>\n                <ul class="button-list">\n                    <li class="button__item">\n                        <button class="button-more" type="button" data-id="').concat(o,'">Learn more\n                        </button>\n                    </li>\n                  <li class="button__item">\n                    <button class=\'button-remove\' type="button" data-id="').concat(o,'" data-action="favorite">Remove</button>\n                  </li>\n                </ul>\n              </li>\n              ')})).join("");t.innerHTML=n,document.querySelectorAll(".button-more").forEach((function(t){t.addEventListener("click",(function(t){var n=e.find((function(e){return e.idDrink===t.target.dataset.id}));(0,r.renderModalCocktail)(n),(0,r.openModalCocktail)()}))})),document.querySelectorAll(".button-remove").forEach((function(t){t.addEventListener("click",c)}))}else{t.innerHTML='<li>\n    <p class="no__favorite-cocktails">\n      You haven\'t added any <br />\n      favorite cocktails yet\n    </p>\n    </li>'}}var c=function(t){var e=JSON.parse(localStorage.getItem(a.FAVORITE_KEY));e=e.filter((function(e){return e.idDrink!==t.target.dataset.id})),console.log(e),localStorage.setItem(a.FAVORITE_KEY,JSON.stringify(e)),l(i)};l(i)}();
//# sourceMappingURL=favorite-ingridient.e9b48e38.js.map