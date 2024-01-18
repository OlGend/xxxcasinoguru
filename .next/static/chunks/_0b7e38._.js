(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_0b7e38._.js", {

"[project]/components/AnotherBrands2/AnotherBrands2.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
// import fwb from "../../images/fwb.png";
function AnotherBrands2({ newUrl, ipDataCode, currentLanguage, source, selectedCountry }) {
    _s();
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]();
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](true);
    const [otherData, setOtherData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [visibleBrands, setVisibleBrands] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](8);
    const handleShowMore = ()=>{
        setVisibleBrands((prevVisibleBrands)=>prevVisibleBrands + 8);
    };
    const apiOld = "https://pickbonus.myawardwallet.com/api/brands/read.php";
    const apiNew = "https://pickbonus.myawardwallet.com/api/brands/read2.php";
    function shuffleArray(array) {
        const shuffledArray = array.slice();
        for(let i = shuffledArray.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [
                shuffledArray[j],
                shuffledArray[i]
            ];
        }
        return shuffledArray;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const geo = selectedCountry.toUpperCase();
        const fetchData = async ()=>{
            try {
                const url = source === "partner1039" ? apiNew : apiOld;
                const res = await fetch(url);
                if (res.ok) {
                    const responseData = await res.json();
                    // const dataArray = Object.values(responseData);
                    let filteredDataOther = [];
                    if (geo) {
                        filteredDataOther = responseData.brands.filter((rowData)=>rowData.GEO === geo && rowData["CurrentStatus"] === "Ongoing" && rowData["CasinoBrand"] !== "Mirax (FS)" && rowData["CasinoBrand"] !== "Katsubet (FS)" && rowData["CasinoBrand"] !== "7Bit (FS)" && rowData["FirstPriority"] === "1");
                    } else {
                        filteredDataOther = responseData.brands.filter((rowData)=>rowData.GEO === ipDataCode && rowData["CurrentStatus"] === "Ongoing" && rowData["CasinoBrand"] !== "Mirax (FS)" && rowData["CasinoBrand"] !== "Katsubet (FS)" && rowData["CasinoBrand"] !== "7Bit (FS)" && rowData["FirstPriority"] === "1");
                    }
                    // Перемешиваем данные перед отображением
                    setOtherData(shuffleArray(filteredDataOther));
                    setLoading(false);
                // Если нет брендов, вызывать setSelectedCountry
                // if (filteredDataOther.length === 0) {
                //   setSelectedCountry("all");
                // }
                } else {
                    console.error("Failed to fetch data:", res.status);
                }
            } catch (error) {
                console.error("An error occurred:", error);
                setLoading(false);
            }
        };
        if (ipDataCode && currentLanguage || geo && currentLanguage) {
            fetchData();
        }
    }, [
        ipDataCode,
        currentLanguage,
        selectedCountry,
        source
    ]);
    // ...
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        children: otherData.length > 0 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "another-brands",
            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "other-brands",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "banner",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "banner-text",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                        children: t("FORTUNE WHEEL BRANDS")
                                    }, void 0, false, {
                                        fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
                                        lineNumber: 115,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        children: t("Pick a brand below, make first deposit and win real cash!")
                                    }, void 0, false, {
                                        fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
                                        lineNumber: 116,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        id: "roulete",
                                        className: "btn btn-primary",
                                        href: `/fortunewheel/${newUrl}`,
                                        children: t("Spin the Roulette")
                                    }, void 0, false, {
                                        fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
                                        lineNumber: 121,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
                                lineNumber: 114,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
                            lineNumber: 113,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "all-brands",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                    className: "mindeps",
                                    children: t("To qualify for withdrawals, ensure your first deposit is at least $20 or the equivalent in other currencies.")
                                }, void 0, false, {
                                    fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
                                    lineNumber: 132,
                                    columnNumber: 17
                                }, this),
                                otherData.length > 0 ? otherData.slice(0, visibleBrands).map((rowData, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "one-brand",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                        id: "FW_Brands_Wheel_Page",
                                                        target: "_blank",
                                                        href: rowData["GoBig"] + newUrl,
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("img", {
                                                            src: rowData["LinkImg"],
                                                            alt: ""
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
                                                            lineNumber: 146,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
                                                        lineNumber: 141,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                        children: rowData["OurOfferContent"]
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
                                                        lineNumber: 148,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
                                                lineNumber: 140,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                id: "FW_Brands_Wheel_Page",
                                                className: "btn btn-primary",
                                                target: "_blank",
                                                href: rowData["GoBig"] + newUrl,
                                                children: t("getBonus")
                                            }, void 0, false, {
                                                fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
                                                lineNumber: 150,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
                                        lineNumber: 139,
                                        columnNumber: 21
                                    }, this)) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                    className: "ti",
                                    children: t("No brands available for your country")
                                }, void 0, false, {
                                    fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
                                    lineNumber: 161,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
                            lineNumber: 131,
                            columnNumber: 15
                        }, this),
                        visibleBrands < otherData.length && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                            id: "ShowMoreFW",
                            className: "btn btn-primary big-btn",
                            onClick: handleShowMore,
                            children: t("showMore")
                        }, void 0, false, {
                            fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
                            lineNumber: 168,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
                    lineNumber: 111,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
                lineNumber: 110,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
            lineNumber: 109,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_s(AnotherBrands2, "cZBvW56wXTTK4vbynDkWzuq/Hd4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = AnotherBrands2;
const __TURBOPACK__default__export__ = AnotherBrands2;
var _c;
__turbopack_refresh__.register(_c, "AnotherBrands2");

})()),
"[project]/app/fortunewheel/page.tsx [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/app/fortunewheel/page.tsx'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
}]);

//# sourceMappingURL=_0b7e38._.js.map