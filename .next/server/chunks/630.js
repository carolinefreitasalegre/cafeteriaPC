"use strict";
exports.id = 630;
exports.ids = [630];
exports.modules = {

/***/ 9630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/assets/car.png
/* harmony default export */ const car = ({"src":"/_next/static/media/car.d09fe111.png","height":63,"width":95,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAmUlEQVR42mMAgQwfT8by5AjmObOnMoP4Z28esLty/8zqc3cPz2JAB/c/XAq9+ujM/zP39v0/fndTMwMfAwNHjIOFhxsDg21IoILTyq2z/89Z0vN/8bqupytWTNBkOL5rM8ehLeuKdq5aenz/lnX3V8ybujDUQ9ROn4FBnoGBgZ3h7sWTgtdOHJx269yJ8/cund3y//8/aWQrAfJ4RD/wLhdkAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});
// EXTERNAL MODULE: ../../../node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(6728);
;// CONCATENATED MODULE: ./app/components/header/styled.jsx
/* __next_internal_client_entry_do_not_use__ Container auto */ 
const Container = styled_components_cjs/* styled */.zo.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  color: orange;

  a {
    text-decoration: none;
    color: orange;
  }
  .addCar {
    color: orange;
    text-shadow: 1px 1px red;
    font-weight: 900;
  }
`;

// EXTERNAL MODULE: ./node_modules/react-icons/bs/index.esm.js
var index_esm = __webpack_require__(930);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./app/components/header/page.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






function Header() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: car,
                    alt: "Logomarca"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: "car",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* BsFillCartFill */.lcg, {
                        size: 25,
                        style: {
                            cursor: "pointer"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "addCar",
                        children: "5"
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;