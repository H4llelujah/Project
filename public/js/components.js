/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/comp.js":
/*!***************************!*\
  !*** ./public/js/comp.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_HeaderComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/HeaderComponent */ \"./public/js/components/HeaderComponent.js\");\n/* harmony import */ var _components_CartComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/CartComponent */ \"./public/js/components/CartComponent.js\");\n/* harmony import */ var _components_CategoriesComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/CategoriesComponent */ \"./public/js/components/CategoriesComponent.js\");\n/* harmony import */ var _components_ProductComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ProductComponent */ \"./public/js/components/ProductComponent.js\");\n/* harmony import */ var _components_FeaturesComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/FeaturesComponent */ \"./public/js/components/FeaturesComponent.js\");\n/* harmony import */ var _components_FeedbackComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/FeedbackComponent */ \"./public/js/components/FeedbackComponent.js\");\n/* harmony import */ var _components_FooterComp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/FooterComp */ \"./public/js/components/FooterComp.js\");\n/* harmony import */ var _components_FilterComp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/FilterComp */ \"./public/js/components/FilterComp.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://project_express/./public/js/comp.js?");

/***/ }),

/***/ "./public/js/components/CartComponent.js":
/*!***********************************************!*\
  !*** ./public/js/components/CartComponent.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.component('cart', {\n    data(){\n      return {\n          cartUrl: '/getBasket.json',\n          cartItems: [],\n          showCart: false,\n          amount: 0,\n          countGoods: 0\n      }\n    },\n    mounted(){\n        this.$parent.getJson(`/api/cart`)\n            .then(data => {\n                for (let item of data.contents){\n                    this.$data.cartItems.push(item);\n                }\n                this.$data.amount = data.amount;\n                this.$data.countGoods = data.countGoods;\n            });\n    },\n    methods: {\n        addProduct(item){\n            let find = this.cartItems.find(el => el.id_product === item.id_product);\n            if(find){\n                this.$parent.putJson(`/api/cart/${find.id_product}`, {quantity: 1})\n                    .then(data => {\n                        if(data.result === 1){\n                            find.quantity++\n                            this.$data.amount += find.price;\n                            this.$data.countGoods++;\n                        }\n                    })\n            } else {\n                const prod = Object.assign({quantity: 1}, item);\n                this.$parent.postJson(`/api/cart`, prod)\n                    .then(data => {\n                        if(data.result === 1){\n                            this.cartItems.push(prod)\n                            this.amount += prod.price;\n                            this.countGoods++;\n                        }\n                    })\n            }\n\n        },\n        remove(item) {\n            this.$parent.delJson(`/api/cart/${item.id_product}`)\n                .then(data => {\n                    if (data.result === 1) {\n                        if (item.quantity > 1) {\n                            item.quantity--;\n                            this.amount -= item.price;\n                        } else {\n                            this.cartItems.splice(this.cartItems.indexOf(item), 1);\n                            this.amount -= item.price;\n                        };\n                        this.countGoods--;\n                    }\n                })\n        },\n    },\n    template: `<div style=\"position: relative;\">\n<button class=\"cart-link\" type=\"button\" @click=\"showCart = !showCart\"><img src=\"img/menu-3.svg\" alt=\"menu\"></button>\n        <div class=\"cart-desk\" v-show=\"showCart\">\n            <cart-item v-for=\"item of cartItems\" :key=\"item.id_product\" :cart-item=\"item\" @remove=\"remove\">\n            </cart-item>\n            <div v-show=\"countGoods != 0\" class=\"amount\"> Total price: {{ amount }}$ </div>\n            <div v-show=\"countGoods == 0\"> Ваша корзина пуста! </div>\n        </div>\n        </div>\n    `\n}));\n\nVue.component('cart-item', {\n    props: ['cartItem'],\n    template: `\n    <div class=\"cart-item\">\n                    <div class=\"product-bio\">\n                        <img class=\"cart_img\" :src=\"cartItem.img\" alt=\"Some img\">\n                        <div class=\"product-desc\">\n                            <div class=\"product-title\">{{ cartItem.product_name }}</div>\n                            <div class=\"product-quantity\">Quantity: {{ cartItem.quantity }}</div>\n                            <div class=\"product-single-price\">$ {{ cartItem.price }} each</div>\n                        </div>\n                    </div>\n                    <div class=\"right-block\">\n                        <button class=\"del-btn\" @click=\"$emit('remove', cartItem)\">&times;</button>\n                    </div>\n                </div>\n    `\n})\n\n//# sourceURL=webpack://project_express/./public/js/components/CartComponent.js?");

/***/ }),

/***/ "./public/js/components/CategoriesComponent.js":
/*!*****************************************************!*\
  !*** ./public/js/components/CategoriesComponent.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.component('categories-comp',{\r\n    template:`\r\n        <div>\r\n            <section class=\"promo\">\r\n                <div class=\"wrapper promo-wrap\">\r\n                    <h1 class=\"promo-title\">\r\n                        THE BRAND <br> \r\n                        <span class=\"promo-title-small\">OF LUXERIOUS <span class=\"promo-title-pink\">FASHION</span></span>\r\n                    </h1>\r\n                </div>\r\n            </section>\r\n            <div class=\"categories\">\r\n                <div class=\"hidden\"><h2>Категории товаров</h2></div>\r\n                <div class=\"wrapper categories-wrap\">\r\n                    <div class=\"categories-item categories-item-women\">\r\n                        <p class=\"categories-sale\">30% OFF</p>\r\n                        <p class=\"categories-name\">FOR WOMEN</p>\r\n                    </div>\r\n                    <div class=\"categories-item categories-item-men\">\r\n                        <p class=\"categories-sale\">HOT DEAL</p>\r\n                        <p class=\"categories-name\">FOR MEN</p>\r\n                    </div>\r\n                    <div class=\"categories-item categories-item-kids\">\r\n                     <p class=\"categories-sale\">NEW ARRIVALS</p>\r\n                        <p class=\"categories-name\">FOR KIDS</p>\r\n                    </div>\r\n                    <div class=\"categories-item categories-item-acc\">\r\n                        <p class=\"categories-sale\">LUXIROUS & TRENDY</p>\r\n                        <p class=\"categories-name\">ACCESORIES</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    `\r\n}));\n\n//# sourceURL=webpack://project_express/./public/js/components/CategoriesComponent.js?");

/***/ }),

/***/ "./public/js/components/FeaturesComponent.js":
/*!***************************************************!*\
  !*** ./public/js/components/FeaturesComponent.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.component('features-comp',{\r\n    template: `\r\n        <section class=\"feature\">\r\n            <div class=\"hidden\">\r\n                <h2>Приемущества компании</h2>\r\n            </div>\r\n            <div class=\"wrapper feature-wrap\">\r\n                <div class=\"feature-add\">\r\n                    <img src=\"img/feature-car.svg\" alt=\"car\">\r\n                    <h3 class=\"feature-heading\">Free Delivery</h3>\r\n                    <p class=\"feature-text\">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>\r\n                </div>\r\n                <div class=\"feature-add\">\r\n                    <img src=\"img/feature-disc.svg\" alt=\"discount\">\r\n                    <h3 class=\"feature-heading\">Sales & discounts</h3>\r\n                    <p class=\"feature-text\">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>\r\n                </div>\r\n                <div class=\"feature-add\">\r\n                    <img src=\"img/feature-crown.svg\" alt=\"crown\">\r\n                    <h3 class=\"feature-heading\">Quality assurance</h3>\r\n                    <p class=\"feature-text\">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>\r\n                </div>\r\n            </div>\r\n        </section>\r\n        `\r\n}));\n\n//# sourceURL=webpack://project_express/./public/js/components/FeaturesComponent.js?");

/***/ }),

/***/ "./public/js/components/FeedbackComponent.js":
/*!***************************************************!*\
  !*** ./public/js/components/FeedbackComponent.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.component('feedback-comp',{\r\n    template:`\r\n        <section class=\"feedback\">\r\n            <div class=\"hidden\"><h2>Обратная связь</h2></div>\r\n            <div class=\"wrapper feedback-wrap\">\r\n                <div class=\"feedback-col-1\">\r\n                    <p class=\"feedback-text\">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, <span class=\"italic\">a pulvinar purus condimentum“</span></p>\r\n                </div>\r\n                <div class=\"feedback-col-2\">\r\n                    <p class=\"input-text\"><span class=\"subscribe\">SUBSCRIBE </span><br>FOR OUR NEWLETTER AND PROMOTION</p>\r\n                    <form class=\"form\" action=\"#\">\r\n                        <input class=\"useremail\" type=\"email\" placeholder=\"Enter Your Email\">\r\n                        <button class=\"subbutton\" type=\"submit\">Subscribe</button>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    `\r\n}));\n\n//# sourceURL=webpack://project_express/./public/js/components/FeedbackComponent.js?");

/***/ }),

/***/ "./public/js/components/FilterComp.js":
/*!********************************************!*\
  !*** ./public/js/components/FilterComp.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.component('filter-el', {\n    data(){\n      return {\n          userSearch: ''\n      }\n    },\n    template: `     <form action=\"#\" class=\"search-form\" @submit.prevent=\"$parent.$refs.products.filter(userSearch)\">\n                        <button type=\"submit\" class=\"search-button\">\n                            <img src=\"img/search-pic.svg\" alt=\"search-pic\">\n                        </button>\n                        <input type=\"text\" class=\"search-field\" v-model=\"userSearch\">\n                    </form>\n                    `\n}));\n\n//# sourceURL=webpack://project_express/./public/js/components/FilterComp.js?");

/***/ }),

/***/ "./public/js/components/FooterComp.js":
/*!********************************************!*\
  !*** ./public/js/components/FooterComp.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.component('footer-comp',{\r\n    template:`\r\n    <footer class=\"footer\">\r\n        <div class=\"wrapper footer-wrap\">\r\n            <div class=\"copyright\">\r\n                <p class=\"copy-text\">© 2022  Brand  All Rights Reserved.</p>\r\n         </div>\r\n            <div class=\"social-networks\">\r\n                <a href=\"#\" class=\"network-link\"><i class=\"fab fa-facebook-f\"></i></a>\r\n                <a href=\"#\" class=\"network-link\"><i class=\"fab fa-instagram\"></i></a>\r\n                <a href=\"#\" class=\"network-link\"><i class=\"fab fa-pinterest-p\"></i></a>\r\n                <a href=\"#\" class=\"network-link\"><i class=\"fab fa-twitter\"></i></a>\r\n            </div>\r\n        </div>\r\n    </footer>\r\n    `\r\n}));\n\n//# sourceURL=webpack://project_express/./public/js/components/FooterComp.js?");

/***/ }),

/***/ "./public/js/components/HeaderComponent.js":
/*!*************************************************!*\
  !*** ./public/js/components/HeaderComponent.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.component('header-comp',{\r\n    template:`\r\n   <header class=\"header\">\r\n            <div class=\"wrapper header-wrap\">\r\n                <div class=\"header-col-1\">\r\n                    <a href=\"#\" class=\"logo-link\">\r\n                        <img src=\"img/logo.svg\" alt=\"logo\">\r\n                    </a>\r\n                    <form action=\"#\" class=\"search-form\" @submit.prevent=\"$parent.$refs.products.filter(userSearch)\">\r\n                        <button type=\"submit\" class=\"search-button\">\r\n                            <img src=\"img/search-pic.svg\" alt=\"search-pic\">\r\n                        </button>\r\n                        <input type=\"text\" class=\"search-field\" v-model=\"userSearch\">\r\n                    </form>\r\n                </div>\r\n                <div class=\"header-col-2\">\r\n                    <button class=\"main-menu-button\">\r\n                        <img src=\"img/menu-1.png\" alt=\"menu\">\r\n                    </button>\r\n                    <a href=\"registration.html\" class=\"registry-link\">\r\n                        <img src=\"img/menu-2.svg\" alt=\"menu\">\r\n                    </a>\r\n                    <cart ref=\"cart\"></cart>\r\n                </div>\r\n            </div>\r\n        </header>\r\n    `\r\n}));\r\n\n\n//# sourceURL=webpack://project_express/./public/js/components/HeaderComponent.js?");

/***/ }),

/***/ "./public/js/components/ProductComponent.js":
/*!**************************************************!*\
  !*** ./public/js/components/ProductComponent.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.component('products', {\n   data(){\n       return {\n           catalogUrl: '/catalogData.json',\n           filtered: [],\n           products: [],\n           imgProduct: 'https://placehold.it/200x150'\n       }\n   },\n    mounted(){\n        this.$parent.getJson(`/api/products`)\n            .then(data => {\n                for (let item of data){\n                    this.$data.products.push(item);\n                    this.$data.filtered.push(item);\n                }\n            });\n    },\n    methods: {\n        filter(userSearch){\n            let regexp = new RegExp(userSearch, 'i');\n            this.filtered = this.products.filter(el => regexp.test(el.product_name));\n        }\n    },\n    template: `\n        <section class=\"products\">\n            <div class=\"wrapper products-wrap\">\n                <h2 class=\"product-heading\">Fetured Items</h2>\n                <p class=\"product-paragraph\">Shop for items based on what we featured in this week</p>\n                <ul class=\"product-list\">\n                    <product v-for=\"item of filtered\" \n                    :key=\"item.id_product\" \n                    :product=\"item\"\n                    @add-product=\"$parent.$refs.cart.addProduct\"></product>\n               </ul>\n                <div class=\"center\">\n                <a href=\"catalog.html\" class=\"product-link\">Browse All Product</a>\n                </div>\n            </div>\n        </section>\n    `    \n}));\nVue.component('product', {\n    props: ['product', 'img'],\n    template: `\n            <li class=\"product\">\n                <div class=\"product-overlay\">\n                    <button class=\"add-btn\" @click=\"$emit('add-product', product)\">\n                        <svg width=\"32\" height=\"29\" viewBox=\"0 0 32 29\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M26.2009 29C25.5532 28.9738 24.9415 28.6948 24.4972 28.2227C24.0529 27.7506 23.8114 27.1232 23.8245 26.475C23.8376 25.8269 24.1043 25.2097 24.5673 24.7559C25.0303 24.3022 25.6527 24.048 26.301 24.048C26.9493 24.048 27.5717 24.3022 28.0347 24.7559C28.4977 25.2097 28.7644 25.8269 28.7775 26.475C28.7906 27.1232 28.549 27.7506 28.1047 28.2227C27.6604 28.6948 27.0488 28.9738 26.401 29H26.2009ZM6.75293 26.32C6.75293 25.79 6.91011 25.2718 7.20459 24.8311C7.49907 24.3904 7.91764 24.0469 8.40735 23.844C8.89705 23.6412 9.43594 23.5881 9.95581 23.6915C10.4757 23.7949 10.9532 24.0502 11.328 24.425C11.7028 24.7998 11.9581 25.2773 12.0615 25.7972C12.1649 26.317 12.1118 26.8559 11.9089 27.3456C11.7061 27.8353 11.3626 28.2539 10.9219 28.5483C10.4812 28.8428 9.96304 29 9.43298 29C9.08087 29.0003 8.73212 28.9311 8.40674 28.7966C8.08136 28.662 7.78569 28.4646 7.53662 28.2158C7.28755 27.9669 7.09001 27.6713 6.9552 27.3461C6.82039 27.0208 6.75098 26.6721 6.75098 26.32H6.75293ZM10.553 20.686C10.2935 20.6868 10.0409 20.6024 9.83411 20.4457C9.62727 20.2891 9.47758 20.0689 9.40796 19.819L4.57495 2.36401H1.18201C0.868521 2.36401 0.567859 2.23947 0.346191 2.01781C0.124523 1.79614 0 1.49549 0 1.18201C0 0.868519 0.124523 0.567873 0.346191 0.346205C0.567859 0.124537 0.868521 5.81268e-06 1.18201 5.81268e-06H5.46301C5.7225 -0.00080736 5.97504 0.0837201 6.18176 0.240568C6.38848 0.397416 6.53784 0.617884 6.60693 0.868006L11.4399 18.323H24.6179L29.001 8.27501H14.401C14.2428 8.27961 14.0854 8.25242 13.9379 8.19507C13.7904 8.13771 13.6559 8.05134 13.5424 7.94108C13.4288 7.83082 13.3386 7.69891 13.277 7.55315C13.2154 7.40739 13.1836 7.25075 13.1836 7.0925C13.1836 6.93426 13.2154 6.77762 13.277 6.63186C13.3386 6.4861 13.4288 6.35419 13.5424 6.24393C13.6559 6.13367 13.7904 6.0473 13.9379 5.98994C14.0854 5.93259 14.2428 5.90541 14.401 5.91001H30.814C31.0097 5.90996 31.2022 5.95866 31.3744 6.05172C31.5465 6.14478 31.6928 6.27926 31.7999 6.44301C31.9078 6.60729 31.9734 6.79569 31.9908 6.99145C32.0083 7.18721 31.9771 7.38424 31.9 7.565L26.495 19.977C26.4026 20.1876 26.251 20.3668 26.0585 20.4927C25.866 20.6186 25.641 20.6858 25.411 20.686H10.553Z\"/>\n                        </svg>\n                        Add to Cart\n                    </button>\n                </div>\n                <img :src=\"product.img\" :alt=\"product.id_product\" class=\"product-img\">\n                <div class=\"product-text\">\n                    <h3 class=\"product-name\">{{product.product_name}}</h3>\n                    <p class=\"product-txt\">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>\n                    <p class=\"product-cost\">{{product.price}}$</p>\n                </div>\n            </li>\n    `\n})\n\n//# sourceURL=webpack://project_express/./public/js/components/ProductComponent.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/js/comp.js");
/******/ 	
/******/ })()
;