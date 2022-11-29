(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mantine/core"
var core_ = __webpack_require__(247);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(764);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "@mantine/hooks"
var hooks_ = __webpack_require__(32);
;// CONCATENATED MODULE: ./components/Header/style.ts

const HEADER_HEIGHT = 60;
const useStyles = (0,core_.createStyles)((theme)=>({
        root: {
            position: "relative",
            zIndex: 1,
            background: "#141414",
            borderBottom: `1px solid #1a1a1a`
        },
        dropdown: {
            position: "absolute",
            top: HEADER_HEIGHT,
            left: 0,
            right: 0,
            zIndex: 0,
            border: 0,
            overflow: "hidden",
            background: "#141414",
            [theme.fn.largerThan("sm")]: {
                display: "none"
            }
        },
        header: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%"
        },
        links: {
            [theme.fn.smallerThan("sm")]: {
                display: "none"
            }
        },
        burger: {
            [theme.fn.largerThan("sm")]: {
                display: "none"
            },
            color: "#6200E4"
        },
        link: {
            display: "block",
            lineHeight: 1,
            padding: "8px 12px",
            borderRadius: theme.radius.sm,
            textDecoration: "none",
            color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
            fontSize: theme.fontSizes.sm,
            fontWeight: 500,
            "&:hover": {
                backgroundColor: "#6200E4",
                color: "#FFF"
            },
            [theme.fn.smallerThan("sm")]: {
                borderRadius: 0,
                padding: theme.spacing.md
            }
        },
        linkActive: {
            "&, &:hover": {
                backgroundColor: "#6200E4",
                color: "#FFF"
            }
        }
    }));

;// CONCATENATED MODULE: ./components/Header/index.tsx






function Navigation({ links  }) {
    const [opened, { toggle , close  }] = (0,hooks_.useDisclosure)(false);
    const [active, setActive] = (0,external_react_.useState)(links[0].link);
    const { classes , cx  } = useStyles();
    const items = links.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
            href: link.link,
            className: cx(classes.link, {
                [classes.linkActive]: active === link.link
            }),
            onClick: (event)=>{
                event.preventDefault();
                setActive(link.link);
                close();
            },
            children: link.label
        }, link.label));
    return /*#__PURE__*/ jsx_runtime_.jsx(core_.Header, {
        height: 60,
        mb: 20,
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Container, {
            size: "xl",
            className: classes.header,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/images/logo.svg",
                            alt: "logo",
                            width: 40,
                            height: 40
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            style: {
                                color: "#FFF"
                            },
                            children: "Gabriel Barbosa"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Group, {
                    spacing: 5,
                    className: classes.links,
                    children: items
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Burger, {
                    opened: opened,
                    onClick: toggle,
                    className: classes.burger,
                    size: "md",
                    color: "#FFFFFF"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Transition, {
                    transition: "pop-top-right",
                    duration: 200,
                    mounted: opened,
                    children: (styles)=>/*#__PURE__*/ jsx_runtime_.jsx(core_.Paper, {
                            className: classes.dropdown,
                            withBorder: true,
                            style: styles,
                            children: items
                        })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: external "@tabler/icons"
const icons_namespaceObject = require("@tabler/icons");
;// CONCATENATED MODULE: ./components/footer/style.ts

const style_useStyles = (0,core_.createStyles)((theme)=>({
        footer: {
            position: "relative",
            width: "100%",
            borderTop: `1px solid #1a1a1a`,
            background: "#141414"
        },
        inner: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: `${theme.spacing.md}px ${theme.spacing.md}px`,
            [theme.fn.smallerThan("sm")]: {
                flexDirection: "column"
            }
        },
        links: {
            [theme.fn.smallerThan("sm")]: {
                marginTop: theme.spacing.lg,
                marginBottom: theme.spacing.sm
            }
        }
    }));

;// CONCATENATED MODULE: ./components/footer/index.tsx





function Footer({ links  }) {
    const { classes  } = style_useStyles();
    const items = links.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx(core_.Anchor, {
            color: "dimmed",
            href: link.link,
            sx: {
                lineHeight: 1
            },
            onClick: (event)=>event.preventDefault(),
            size: "sm",
            children: link.label
        }, link.label));
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.footer,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Container, {
            size: "xl",
            className: classes.inner,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/images/logo.svg",
                            alt: "logo",
                            width: 40,
                            height: 40
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            style: {
                                color: "#FFF"
                            },
                            children: "Gabriel Barbosa"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Group, {
                    className: classes.links,
                    children: items
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Group, {
                    spacing: "xs",
                    position: "right",
                    noWrap: true,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.ActionIcon, {
                            size: "lg",
                            radius: "xl",
                            variant: "transparent",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(icons_namespaceObject.IconBrandTwitter, {
                                size: 18,
                                stroke: 1.5,
                                color: "#FFFFFF"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.ActionIcon, {
                            size: "lg",
                            radius: "xl",
                            variant: "transparent",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(icons_namespaceObject.IconBrandYoutube, {
                                size: 18,
                                stroke: 1.5,
                                color: "#FFFFFF"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.ActionIcon, {
                            size: "lg",
                            radius: "xl",
                            variant: "transparent",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(icons_namespaceObject.IconBrandInstagram, {
                                size: 18,
                                stroke: 1.5,
                                color: "#FFFFFF"
                            })
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./pages/_app.tsx





function MyApp({ Component , pageProps  }) {
    const links = [
        {
            link: "home",
            label: "Home"
        },
        {
            link: "about",
            label: "About"
        },
        {
            link: "projects",
            label: "Projects"
        },
        {
            link: "contact",
            label: "Contact"
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.MantineProvider, {
        withGlobalStyles: true,
        withNormalizeCSS: true,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {
                links: links
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {
                links: links
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 764:
/***/ (() => {



/***/ }),

/***/ 247:
/***/ ((module) => {

"use strict";
module.exports = require("@mantine/core");

/***/ }),

/***/ 32:
/***/ ((module) => {

"use strict";
module.exports = require("@mantine/hooks");

/***/ }),

/***/ 957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(754)));
module.exports = __webpack_exports__;

})();