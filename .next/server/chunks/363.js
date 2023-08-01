"use strict";
exports.id = 363;
exports.ids = [363];
exports.modules = {

/***/ 8100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Menu)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ../../../node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(6728);
;// CONCATENATED MODULE: ./app/components/listmenu/styled.jsx
/* __next_internal_client_entry_do_not_use__ Container,Card,CardMedia,Title,Subtitle,Description,Price,Button auto */ 
const Container = styled_components_cjs/* default */.ZP.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
`;
const Card = styled_components_cjs/* default */.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
const CardMedia = styled_components_cjs/* default */.ZP.div`
  display: flex;
  box-shadow: 2px 2px 10px grey;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 2rem;
  width: 256px;
  height: 310px;
  flex-shrink: 0;
  border-radius: 6px 36px;
  background: #fff;

  img {
    width: 120px;
    height: 120px;
    margin-top: -5em;
  }
`;
const Title = styled_components_cjs/* default */.ZP.div`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background: #f1e9c9;
  color: #c47f17;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
`;
const Subtitle = styled_components_cjs/* default */.ZP.div`
  color: #403937;
  text-align: center;
  font-family: "Baloo 2", cursive;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  width: 216px;
`;
const Description = styled_components_cjs/* default */.ZP.div`
  color: var(--base-label, #8d8686);
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  width: 216px;
`;
const Price = styled_components_cjs/* default */.ZP.div`
  width: 10em;
  font-family: Roboto;
  font-size: 14px;
  color: #574f4d;
  font-family: Baloo 2;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
  gap: 5px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 5px grey;
  border-radius: 6px 36px;
  margin-top: 1em;

  p {
    font-size: 10px;
    box-shadow: 2px 2px 10px grey;
    padding: 0 10px;
    background: #f1e9c9;
    border-radius: 5px;
    margin-right: 1em;
  }
`;
const Button = styled_components_cjs/* default */.ZP.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: transparent;
  color: orange;
  border: none;
  border-radius: 5px;
  background-color: #80808019;

  font-size: 1em;
  cursor: pointer;
  transition: all 0.8s;

  &:hover {
    background-color: grey;
    color: white;
  }
`;

;// CONCATENATED MODULE: ./public/json/list.json
const list_namespaceObject = JSON.parse('[{"imagem":"/assets/menu/tradicional.png","subtitle":"Tradicional","title":"Expresso Tradicional","description":"O tradicional café feito com água quente e grãos moídos","price":9.9},{"imagem":"/assets/menu/americano.png","subtitle":"Tradicional","title":"Expresso Americano","description":"Expresso diluído, menos intenso que o tradicional","price":9.99},{"imagem":"/assets/menu/cremoso.png","subtitle":"Tradicional","title":"Expresso Cremoso","description":"Café expresso tradicional com espuma cremosa","price":9.99},{"imagem":"/assets/menu/gelado.png","subtitle":"Tradicional, Gelado","title":"Expresso Gelado","description":"Bebida preparada com café expresso e cubos de gelo","price":9.99},{"imagem":"/assets/menu/cafeleite.png","subtitle":"Tradicional, Com Leite","title":"Café com Leite","description":"Meio a meio de expresso tradicional com leite vaporizado","price":9.9},{"imagem":"/assets/menu/latte.png","subtitle":"Tradicional, Com Leite","title":"Latte","description":"Uma dose de café expresso com o dobro de leite e espuma cremosa","price":9.99},{"imagem":"/assets/menu/capuccino.png","subtitle":"Tradicional, Com Leite","title":"Capuccino","description":"Bebida com canela feita de doses iguais de café, leite e espuma","price":9.99},{"imagem":"/assets/menu/macciato.png","subtitle":"Tradicional, Com Leite","title":"Macchiato","description":"Café expresso misturado com um pouco de leite quente e espuma","price":9.99},{"imagem":"/assets/menu/mocaccino.png","subtitle":"Tradicional, Com Leite","title":"Mocaccino","description":"Café expresso com calda de chocolate, pouco leite e espuma","price":9.99},{"imagem":"/assets/menu/chocolatequente.png","subtitle":"Especial, Com Leite","title":"Chocolate Quente","description":"Bebida feita com chocolate dissolvido no leite quente e café","price":9.99},{"imagem":"/assets/menu/cubano.png","subtitle":"Especial, Alcoolico, Gelado","title":"Cubano","description":"Drink gelado de café expresso com rum, creme de leite e hortelã","price":9.99},{"imagem":"/assets/menu/havaiano.png","subtitle":"Especial","title":"Havaiano","description":"Bebida adocicada preparada com café e leite de coco","price":9.99},{"imagem":"/assets/menu/arabe.png","subtitle":"Especial","title":"Àrabe","description":"Bebida preparada com grãos de café árabe e especiarias","price":9.99},{"imagem":"/assets/menu/irlandes.png","subtitle":"Especial, Alcoolico","title":"Irlândes","description":"Bebida a base de café, uísque irlandês, açúcar e chantilly","price":9.99}]');
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./app/components/listmenu/page.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





function Menu() {
    {
        list_namespaceObject.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: item.price
            }));
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(Container, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Card, {
            children: list_namespaceObject.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardMedia, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: item.imagem,
                            alt: "Imagem Card",
                            width: 286,
                            height: 200
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                            children: item.subtitle
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Subtitle, {
                            children: item.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Description, {
                            children: item.description
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Price, {
                            children: [
                                "R$",
                                item.price,
                                /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                                    children: " + "
                                }),
                                " 1 ",
                                /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                                    children: " - "
                                })
                            ]
                        })
                    ]
                }, Math.random()))
        }, Math.random())
    });
}


/***/ }),

/***/ 4330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\carol\OneDrive\Área de Trabalho\cafeteriaPlus\app\components\listmenu\page.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;