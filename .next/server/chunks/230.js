"use strict";
exports.id = 230;
exports.ids = [230];
exports.modules = {

/***/ 6388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Presentation)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/assets/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.b7048d75.png","height":369,"width":318,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA6ElEQVR42mMAge6kMJmtPXWJDEigfuZsNjDj1aePnN25qXcLLVSWL8sIjDmzpG/hsQU908GS+7dvSl+yYO7/msKC/5nuzv+npfj/3lcZbs1w++Z1+b07Nx9Ys3DG/y0bl/64evXi/zNnzjaCdR3au+Pcg1vX/p8+vOf35Ysn/z95ePfrtYtn6p8+fsDHcHjvjsXnDu39v3T6xF9zp074vXrhrP9H9u98+f/3T1mGHcvmqtflpG4NtzP9n+Vt878xwf//qQO7/r98+jAVbPTShQu4lk7rL14zb8b+FTMm3t80b9qGNdN6TAArjHwHuSun+gAAAABJRU5ErkJggg==","blurWidth":7,"blurHeight":8});
// EXTERNAL MODULE: ../../../../node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(7069);
;// CONCATENATED MODULE: ./app/components/presentation/style.jsx

const Container = styled_components_cjs/* styled */.zo.div`
  /* @import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@800&display=swap"); */
  min-height: 544px;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  line-height: 2em;
  background-image: url("/assets/Background.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
const Content = styled_components_cjs/* styled */.zo.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 47%;
  padding-right: 10px;
  gap: 20px;

  .icon {
    color: orange;
  }
`;
const TextPresentation = styled_components_cjs/* styled */.zo.div`
  font-size: 48px;
  line-height: 1em;
  font-family: "Baloo 2", cursive;
  font-weight: 900;
`;
const Paragrapho = styled_components_cjs/* styled */.zo.div`
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;
const List = styled_components_cjs/* styled */.zo.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  font-size: 1em;
  margin-top: 66px;
`;
const ListText = styled_components_cjs/* styled */.zo.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const TextImage = styled_components_cjs/* styled */.zo.div`
  display: flex;
  gap: 10px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;

// EXTERNAL MODULE: ./node_modules/react-icons/bs/index.esm.js
var index_esm = __webpack_require__(930);
;// CONCATENATED MODULE: ./app/components/presentation/page.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





function Presentation() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Content, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(TextPresentation, {
                        children: "Encontre o caf\xe9 perfeito para o momento perfeito"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Paragrapho, {
                        children: "Com o Plus Coffee voc\xea receve seu caf\xe9 onde estiver, a qualquer momento"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(List, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ListText, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TextImage, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* BsFillCartCheckFill */.xsh, {
                                                className: "icon"
                                            }),
                                            " Compra simples e segura"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TextImage, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* BsFillClockFill */.YZq, {
                                                className: "icon"
                                            }),
                                            "Entrega r\xe1pida e rastreada"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ListText, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TextImage, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* BsBoxSeam */.pGd, {
                                                className: "icon"
                                            }),
                                            "Embalagem mant\xe9m o caf\xe9 quentinho"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TextImage, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* BsFillCupHotFill */.ufi, {
                                                className: "icon"
                                            }),
                                            "O caf\xe9 chega fresquinho at\xe9 voc\xea"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: logo,
                alt: "logomarca"
            })
        ]
    });
}


/***/ }),

/***/ 6309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\carol\OneDrive\Área de Trabalho\React\cafeteriaPlus\app\components\presentation\page.jsx`)

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