!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},e={},i=t.parcelRequire1208;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in e){var i=e[t];delete e[t];var o={id:t,exports:{}};return n[t]=o,i.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,n){e[t]=n},t.parcelRequire1208=i);var o=i("lF0Zg"),r=(o=i("lF0Zg"),document.querySelector(".modal-cocktail")),c=document.querySelector(".backdrop"),a=document.querySelector(".modal-close"),l=new(0,o.default);function s(){c.classList.add("is-hidden"),a.removeEventListener("click",s),c.removeEventListener("click",d),window.removeEventListener("keydown",u)}function d(t){t.target===t.currentTarget&&s()}function u(t){"Escape"===t.code&&s()}function f(t){var n=Object.entries(t),e=[];n.map((function(t){t[0].includes("strIngredient")&&t[1]&&e.push(t[1])})),console.log(e);var i,c=e.map((function(t){return'<li class="ingredients__item">\n      <a href="" class="ingredients__link">\n        '.concat(t,"\n      </a>\n    </li>")})).join(""),a=(t.strDrink,t.strDrinkThumb),s=t.idDrink,d=t.strInstructions,u='<div class="cocktails-info">\n              <img class="cocktails-info" src="'.concat(a,'" alt="#" width="320" height="320">\n              <h2 class="cocktails-info__title">Negroni</h2>\n              <div class="ingredients">\n                  <h3 class="ingredients__title">Ingredients</h3>\n                  <p class="ingredients__text">Per cocktail</p>\n                  <ul class="ingredients__list">\n                    ').concat(c,'  \n                  </ul>\n              </div>\n          </div>\n          <div class="instruction">\n              <h3 class="instruction__title">Instructions:</h3>\n              <p class="instruction__text">').concat(d,'</p>\n          </div>\n          <button class=\'button-remove\' type="button" data-id="').concat(s,'"></button>\n                ');r.innerHTML=u,i=document.querySelector(".button-remove"),console.log(l.cards),i.addEventListener("click",(function(t){console.log(t.target.dataset.id),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=JSON.parse(localStorage.getItem(o.FAVORITE_KEY))||[],e=n.find((function(n){return n.idDrink===t}))||l.cards.find((function(n){return n.idDrink===t}));console.log(e),e?n=n.filter((function(n){return n.idDrink!==t})):n.push(e),localStorage.setItem(o.FAVORITE_KEY,JSON.stringify(n))}(t.target.dataset.id)}))}var g=document.querySelector(".gallery");document.querySelector(".favorite-cocktails__title");function v(t){var n=JSON.parse(localStorage.getItem(o.FAVORITE_KEY))||[];if(localStorage.getItem(o.FAVORITE_KEY)&&n.length>0){var e=n.map((function(t){var n=t.strDrink,e=t.strDrinkThumb,i=t.idDrink;t.strIngredient;return'<li class="cocktails__item">\n                <img class="cocktails__img" src="'.concat(e,'" alt="').concat(n,' photo">\n                <h3 class="cocktails__name">').concat(n,'</h3>\n                <ul class="button-list">\n                    <li class="button__item">\n                        <button class="button-more" type="button" data-id="').concat(i,'">Learn more\n                        </button>\n                    </li>\n                  <li class="button__item">\n                    <button class=\'button-remove\' type="button" data-id="').concat(i,'" data-action="favorite">Remove</button>\n                  </li>\n                </ul>\n              </li>\n              ')})).join("");t.innerHTML=e,document.querySelectorAll(".button-more").forEach((function(t){t.addEventListener("click",(function(t){f(n.find((function(n){return n.idDrink===t.target.dataset.id}))),c.classList.remove("is-hidden"),a.addEventListener("click",s),c.addEventListener("click",d),window.addEventListener("keydown",u)}))})),document.querySelectorAll(".button-remove").forEach((function(t){t.addEventListener("click",m)}))}else{t.innerHTML='<li>\n    <p class="no__favorite-cocktails">\n      You haven\'t added any <br />\n      favorite cocktails yet\n    </p>\n    </li>'}}var m=function(t){var n=JSON.parse(localStorage.getItem(o.FAVORITE_KEY));n=n.filter((function(n){return n.idDrink!==t.target.dataset.id})),console.log(n),localStorage.setItem(o.FAVORITE_KEY,JSON.stringify(n)),v(g)};v(g)}();
//# sourceMappingURL=favorite-cocktails.e979934d.js.map
