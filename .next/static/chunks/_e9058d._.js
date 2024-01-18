(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_e9058d._.js", {

"[project]/components/DoubleBrands2/DoubleBrands2.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
;
;
;
// import fwb from "../../images/fwb.png";
function DoubleBrands({ newUrl, ipDataCode, currentLanguage, source, selectedCountry }) {
    _s();
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]();
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](true);
    const [otherData, setOtherData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [visibleBrands, setVisibleBrands] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](4);
    const handleShowMore2 = ()=>{
        setVisibleBrands((prevVisibleBrands)=>prevVisibleBrands + 4);
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
                        filteredDataOther = responseData.brands.filter((rowData)=>rowData.GEO === geo && rowData["CurrentStatus"] === "Ongoing" && rowData["CasinoBrand"] !== "Mirax (FS)" && rowData["CasinoBrand"] !== "Katsubet (FS)" && rowData["CasinoBrand"] !== "7Bit (FS)" && rowData["QuickSignUp"] === "1");
                    } else {
                        filteredDataOther = responseData.brands.filter((rowData)=>rowData.GEO === ipDataCode && rowData["CurrentStatus"] === "Ongoing" && rowData["CasinoBrand"] !== "Mirax (FS)" && rowData["CasinoBrand"] !== "Katsubet (FS)" && rowData["CasinoBrand"] !== "7Bit (FS)" && rowData["QuickSignUp"] === "1");
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
        className: "flexbasis",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "banner-slot2",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "banner-text",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                        children: t("Quick Sign-Up: Top Choices")
                    }, void 0, false, {
                        fileName: "<[project]/components/DoubleBrands2/DoubleBrands2.jsx>",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/DoubleBrands2/DoubleBrands2.jsx>",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/DoubleBrands2/DoubleBrands2.jsx>",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "all-brands",
                children: otherData.length > 0 ? otherData.slice(0, visibleBrands).map((rowData, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "one-brand",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                        id: "topChoices",
                                        target: "_blank",
                                        href: rowData["GoBig"] + newUrl,
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("img", {
                                            src: rowData["LinkImg"],
                                            alt: ""
                                        }, void 0, false, {
                                            fileName: "<[project]/components/DoubleBrands2/DoubleBrands2.jsx>",
                                            lineNumber: 121,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/components/DoubleBrands2/DoubleBrands2.jsx>",
                                        lineNumber: 116,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        children: rowData["OurOfferContent"]
                                    }, void 0, false, {
                                        fileName: "<[project]/components/DoubleBrands2/DoubleBrands2.jsx>",
                                        lineNumber: 123,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/components/DoubleBrands2/DoubleBrands2.jsx>",
                                lineNumber: 115,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                id: "topChoices",
                                className: "btn btn-primary",
                                target: "_blank",
                                href: rowData["GoBig"] + newUrl,
                                children: t("getBonus")
                            }, void 0, false, {
                                fileName: "<[project]/components/DoubleBrands2/DoubleBrands2.jsx>",
                                lineNumber: 125,
                                columnNumber: 15
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "<[project]/components/DoubleBrands2/DoubleBrands2.jsx>",
                        lineNumber: 114,
                        columnNumber: 13
                    }, this)) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                    className: "ti",
                    children: "No brands available for your country"
                }, void 0, false, {
                    fileName: "<[project]/components/DoubleBrands2/DoubleBrands2.jsx>",
                    lineNumber: 136,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/DoubleBrands2/DoubleBrands2.jsx>",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            visibleBrands < otherData.length && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                id: "topChoicesShowMore",
                className: "btn btn-primary big-btn",
                onClick: handleShowMore2,
                children: t("showMore")
            }, void 0, false, {
                fileName: "<[project]/components/DoubleBrands2/DoubleBrands2.jsx>",
                lineNumber: 140,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/components/DoubleBrands2/DoubleBrands2.jsx>",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_s(DoubleBrands, "0JLaCSIK5RpoW9jgrgGBKpfdCyQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = DoubleBrands;
const __TURBOPACK__default__export__ = DoubleBrands;
var _c;
__turbopack_refresh__.register(_c, "DoubleBrands");

})()),
"[project]/components/DoubleBrands/DoubleBrands.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
;
;
;
function DoubleBrands({ newUrl, ipDataCode, currentLanguage, source, selectedCountry }) {
    _s();
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]();
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](true);
    const [otherData, setOtherData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [visibleBrands, setVisibleBrands] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](4);
    const handleShowMore2 = ()=>{
        setVisibleBrands((prevVisibleBrands)=>prevVisibleBrands + 4);
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
                        filteredDataOther = responseData.brands.filter((rowData)=>rowData.GEO === geo && rowData["CurrentStatus"] === "Ongoing" && rowData["CasinoBrand"] !== "Mirax (FS)" && rowData["CasinoBrand"] !== "Katsubet (FS)" && rowData["CasinoBrand"] !== "7Bit (FS)" && rowData.Hottest === "1");
                    } else {
                        filteredDataOther = responseData.brands.filter((rowData)=>rowData.GEO === ipDataCode && rowData["Current Status"] === "Ongoing" && rowData["CasinoBrand"] !== "Mirax (FS)" && rowData["CasinoBrand"] !== "Katsubet (FS)" && rowData["CasinoBrand"] !== "7Bit (FS)" && rowData.Hottest === "1");
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
        className: "flexbasis",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "banner-slot1",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "banner-text",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                        children: t("Hottest Bonus Deals")
                    }, void 0, false, {
                        fileName: "<[project]/components/DoubleBrands/DoubleBrands.jsx>",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/DoubleBrands/DoubleBrands.jsx>",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/DoubleBrands/DoubleBrands.jsx>",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "all-brands",
                children: otherData.length > 0 ? otherData.slice(0, visibleBrands).map((rowData, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "one-brand",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                        id: "hottestBonus",
                                        target: "_blank",
                                        href: rowData["GoBig"] + newUrl,
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("img", {
                                            src: rowData["LinkImg"],
                                            alt: ""
                                        }, void 0, false, {
                                            fileName: "<[project]/components/DoubleBrands/DoubleBrands.jsx>",
                                            lineNumber: 119,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/components/DoubleBrands/DoubleBrands.jsx>",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        children: rowData["OurOfferContent"]
                                    }, void 0, false, {
                                        fileName: "<[project]/components/DoubleBrands/DoubleBrands.jsx>",
                                        lineNumber: 121,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/components/DoubleBrands/DoubleBrands.jsx>",
                                lineNumber: 113,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                id: "hottestBonus",
                                className: "btn btn-primary",
                                target: "_blank",
                                href: rowData["GoBig"] + newUrl,
                                children: t("getBonus")
                            }, void 0, false, {
                                fileName: "<[project]/components/DoubleBrands/DoubleBrands.jsx>",
                                lineNumber: 123,
                                columnNumber: 15
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "<[project]/components/DoubleBrands/DoubleBrands.jsx>",
                        lineNumber: 112,
                        columnNumber: 13
                    }, this)) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                    className: "ti",
                    children: t("No brands available for your country")
                }, void 0, false, {
                    fileName: "<[project]/components/DoubleBrands/DoubleBrands.jsx>",
                    lineNumber: 134,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/DoubleBrands/DoubleBrands.jsx>",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            visibleBrands < otherData.length && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                id: "hottestBonusShowMore",
                className: "btn btn-primary big-btn",
                onClick: handleShowMore2,
                children: t("showMore")
            }, void 0, false, {
                fileName: "<[project]/components/DoubleBrands/DoubleBrands.jsx>",
                lineNumber: 138,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/components/DoubleBrands/DoubleBrands.jsx>",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
_s(DoubleBrands, "0JLaCSIK5RpoW9jgrgGBKpfdCyQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = DoubleBrands;
const __TURBOPACK__default__export__ = DoubleBrands;
var _c;
__turbopack_refresh__.register(_c, "DoubleBrands");

})()),
"[project]/public/all_tr.png [app-client] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/all_tr.520151fa.png");
})()),
"[project]/public/all_tr.png.mjs/(IMAGE)/[project]/public/all_tr.png [app-client] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_tr$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/all_tr.png [app-client] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_tr$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 241,
    height: 304,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAx0lEQVR42hWOvWrCYBhGcy21oaWlfm0ptFPBCmJBdDH+BUQEBcVBBEcXdxEdsgiCCOIkOHhHZlDzJqISx+PncKYD53kMaSo8O4JnadIRJPWMlN4wpPGBVKNI4RWxFJJ5J6jFMU6jBtfNlPOwQ7h0uK5mXIY9LQZ1wvWEcDHWOIRzh3O/q1OVKH75C9/+xrd+kOQnEtMbXs5EivdugqCcQP4U+7ipRdbEr/5ybOcIWkX2+RgH+wXDTT/g/j/iphTbpGJn62eVJ27NIX2Nt6O7YwAAAABJRU5ErkJggg==",
    blurWidth: 6,
    blurHeight: 8
};

})()),
"[project]/public/all_sk.png [app-client] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/all_sk.5d225a0d.png");
})()),
"[project]/public/all_sk.png.mjs/(IMAGE)/[project]/public/all_sk.png [app-client] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_sk$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/all_sk.png [app-client] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_sk$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 241,
    height: 304,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAA00lEQVR42gHIADf/AO5tM//wgFP/8X9a//B2Vf/xdFf/7l4x/wDtZy7/9aiL//i9q//5wbP/96qc/+9oR/8A7Wcw//awl//4vKv/+Lmr//agkv/vXUX/AO1hLP/0mn3/9aON//Wcif/ziXn/7k06/wDsWib/7mc+/+9pSP/vYUb/7lE9/+w9Kf8A7FUk/+1VK//vZkf/719H/+w+Kv/qQyT/AOxSI//sTyf/7VM0/+xMNP/oPyj/61ko/wDlTiL/5Uci/+RAIv/jPSL/6Vou/+1gJ/8pEn+uoVOVoQAAAABJRU5ErkJggg==",
    blurWidth: 6,
    blurHeight: 8
};

})()),
"[project]/public/all_se.png [app-client] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/all_se.07edd3b5.png");
})()),
"[project]/public/all_se.png.mjs/(IMAGE)/[project]/public/all_se.png [app-client] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_se$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/all_se.png [app-client] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_se$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 241,
    height: 304,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAA00lEQVR42gHIADf/AO1sMf/yj2f/9JyA//SVfP/ziXH/7l0w/wDtZiz/9Jt5//e6p//4va7/84p3/+9iP/8A7WUu//e3oP/3uKb/+Lmq//afkf/vWkH/AO1eKf/1oYX/9qiU//Wfjf/ziHf/7kw5/wDsWif/8HRP//F9Yv/zhHD/8WpY/+w+Kv8A7Fcl/+1bM//vZ0n/72BI/+1GM//qRCX/AOxTJP/tVC3/7lw+/+1TPf/pRi//61op/wDlTiL/5Uci/+RBI//jPiP/6Vou/+1gJ//bt4FhTFjeTwAAAABJRU5ErkJggg==",
    blurWidth: 6,
    blurHeight: 8
};

})()),
"[project]/public/all_pt.png [app-client] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/all_pt.bfcfca71.png");
})()),
"[project]/public/all_pt.png.mjs/(IMAGE)/[project]/public/all_pt.png [app-client] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_pt$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/all_pt.png [app-client] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_pt$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 241,
    height: 304,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAy0lEQVR42g3OP0sCcRzH8XsswV0UdFzKERFCw8EZRS1hpRmBEkkPIBwFRXHTxcVBF3Fw00Wfjjj45/s7wb/b2+/wmV584G3Jn4f8XCPfMeTdw7z5SMbFkoLHrlfjMOpwGHbZdxtEhVAhf6VQ5zjuc5wM2DZLRJ+BQs5l0yqya1fYtspsqv+YlwTWKu0g2Tgme4dJ3SLJGKvEhULKxnzdEP0+sM4/KfgsAlvh1UY+4kS5UF9J5o8+y8wl1uz5jFmoCxym9w7ztKvp55wA+IZ+V4VmeAkAAAAASUVORK5CYII=",
    blurWidth: 6,
    blurHeight: 8
};

})()),
"[project]/public/all_no.png [app-client] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/all_no.74a9768a.png");
})()),
"[project]/public/all_no.png.mjs/(IMAGE)/[project]/public/all_no.png [app-client] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_no$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/all_no.png [app-client] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_no$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 241,
    height: 304,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAyElEQVR42hXJTYsBYQDA8fksdqet3ZaazXWZKJvarS1F3lIaLyXl5OTi4uBIKRclicRNSvJlcPDyzIMy5vY3zj9FlDRkxY8sB5CGD5kNYCY9KKLg4TZqYi9H2Ksp1qCNLIYcMNxY0xb3eR97MebWaSCTwSdo2OuJAwPusx7WsIv89zmQ+uBSi3Ot57lUM5xzEU7+T5RTVMVMeZGFMGfjF/Hj5RBUHYioiJiGmdYRUZ19+Itj4h1l9+diF3Kx1V/YfL+yj7sRmTceXmWBQczDfiMAAAAASUVORK5CYII=",
    blurWidth: 6,
    blurHeight: 8
};

})()),
"[project]/public/all_nl.png [app-client] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/all_nl.ba0c6322.png");
})()),
"[project]/public/all_nl.png.mjs/(IMAGE)/[project]/public/all_nl.png [app-client] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_nl$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/all_nl.png [app-client] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_nl$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 241,
    height: 304,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAyUlEQVR42g3OPW9BUQCA4ftbqqcfSSOXpAPSVHS47SJtmn65JTeIRPwDoxhIDMQuDCQ2CZPBn8GAe85Z7sX2OvOzPJas2chKDOnFkb826ucR6UaxZNUmnLQ4LYac5iOOox666hgoPRCO25yXU86rGUG/gXYzBopRgmHTYJdw0CFo11HZFJafu0Hm46h8EvWdQDox/Kc7A18R/HeB9tLovzR+UrDPRAx8ClQhgS6/ov4d9h8pDrl7rG32iu3bNZsXwfpZsHNN37vlAvurfjmpF0IIAAAAAElFTkSuQmCC",
    blurWidth: 6,
    blurHeight: 8
};

})()),
"[project]/public/all_it.png [app-client] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/all_it.5802843a.png");
})()),
"[project]/public/all_it.png.mjs/(IMAGE)/[project]/public/all_it.png [app-client] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_it$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/all_it.png [app-client] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_it$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 241,
    height: 304,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAxklEQVR42g3Ou2rCcBiG8VyLKNIONWRuLVpN6NJCCxa0R9p6AAfBa9DFRUFdXB2MDq6C4M2og4d/vikh2+M3/15eHss0HaT9gLRcpJZH/l2C9wyWqWcIZz3itU+8WRJNR0jDU6jZRIuBwpx45ROOu8hHUeHPJvT7RP5YBxPCYYfg+RbrXE4TVLNI3UN+9P/ljnP2SqGUwlQ04LeAfBYxrsOxkFJ4VSjZBF85zFuOw6PDqXKNtX9KsPcS7PJJtvdJDuUbzHeaC+ctf9tBAWxxAAAAAElFTkSuQmCC",
    blurWidth: 6,
    blurHeight: 8
};

})()),
"[project]/public/all_hu.png [app-client] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/all_hu.03905b7c.png");
})()),
"[project]/public/all_hu.png.mjs/(IMAGE)/[project]/public/all_hu.png [app-client] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_hu$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/all_hu.png [app-client] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_hu$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 241,
    height: 304,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAxklEQVR42g3JzUoCURiA4XMtM6UNlEGRBBUKpYakBFbStGgohJKkRUFQtHYhuFJw71pvSgV/zjcfjjDb11k8q8dI8xD75GLvE1UXudlD/ANM2MqiX0W0VUBfc2hwib4VMfpbJh73iUcDNt0f4mGP9fdzEp85ok6TqP1B9N8g+ntH/WuMfdxFHjykfozcHiF5D3ueTqKeIgxO0UYJfSkTVs5YXqWSqO0gtX3k7gRbyTIvZFj5HmZWdZiVHKZ5h8mFy8LPIEGaLd8QeoOXY489AAAAAElFTkSuQmCC",
    blurWidth: 6,
    blurHeight: 8
};

})()),
"[project]/public/all_gr.png [app-client] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/all_gr.3234c783.png");
})()),
"[project]/public/all_gr.png.mjs/(IMAGE)/[project]/public/all_gr.png [app-client] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_gr$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/all_gr.png [app-client] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_gr$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 241,
    height: 304,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAzUlEQVR42g3OuWpCQQCF4XmWEGMWyIIg3kBIDGIiAVMkyE1ccMNCRHtbC5cXECvRwlJES/EBfA8tXGYGRb1a/U7xV4cPjpCFJ2TOlPIg7UeU7UXFHhCqZLHv1Tj0mzijLvtWFZ0PIWTymm09y2k65jgZsCnaqMiLEXkfu3YFZ9jBGXTZNcro33cjYjeozDM6/YaO+1Fhi/XrHWIduUQlvOjcJzoVQn35WAZcZvhxIf88RgTNmyCLb4tV9BYxD18w/zAFrpj53Sz+75FJN2cPVH61K5Na8QAAAABJRU5ErkJggg==",
    blurWidth: 6,
    blurHeight: 8
};

})()),
"[project]/public/all_fr.png [app-client] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/all_fr.68ffb70d.png");
})()),
"[project]/public/all_fr.png.mjs/(IMAGE)/[project]/public/all_fr.png [app-client] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_fr$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/all_fr.png [app-client] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_fr$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 241,
    height: 304,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAyUlEQVR42g3Jv0sCYRyA8fdvObIfQkZ4iVRCw0Fk0ZBQ3CEVQlBDg04OLjqL6OjgoNzi6KD+QSr4497vIXqc2+M7PMvzUfKfRv5ukJKNdq8RL4sUr1BSyRFPeqYB8dgnHvlsqy5K/6SIhi3iqc9hOmTfqRMWHQNfSfbdGtGgSdRvs2uUkecsKnBPkU/bdId83KKf0gT35wbeE2ZmCH/zhKW8gQxrJ2GgcIJ+S6ILNsGLzdK5ZONdoBavFotHi/mDxSxnsfJS6O8zjlxjfo5SL/UZAAAAAElFTkSuQmCC",
    blurWidth: 6,
    blurHeight: 8
};

})()),
"[project]/public/all_fi.png [app-client] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/all_fi.d3435ea6.png");
})()),
"[project]/public/all_fi.png.mjs/(IMAGE)/[project]/public/all_fi.png [app-client] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_fi$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/all_fi.png [app-client] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_fi$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 241,
    height: 304,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAzUlEQVR42g3OPUtCYRyG8fNZFDMoD5XhlJC9YDk4FEXHkMSgEEcXJydBnBQXFxdfcFGcxEH8Nir49n+eQY+6XT7zj5v7siR7jfoPotK3iHOD+goh3zaWZK5wu2UOoyaHYZt9q4bORA2kL3A7JY6THsdxn12lgE5EDCT9bOt59oMGbrPKtphDxUJYG8eHJM3HTxjlhJHXIJu7cwMfXuQzgP59QqdekEiA1YPXwJuB90v0X8yUxVk826wds5jHPcyjHmaPPqb3ZywTNpLycwIBvH45nGsgPAAAAABJRU5ErkJggg==",
    blurWidth: 6,
    blurHeight: 8
};

})()),
"[project]/public/all_dk.png [app-client] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/all_dk.b35624d4.png");
})()),
"[project]/public/all_dk.png.mjs/(IMAGE)/[project]/public/all_dk.png [app-client] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_dk$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/all_dk.png [app-client] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_dk$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 241,
    height: 304,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAA00lEQVR42gHIADf/AO51Pf/yi2L/8YVh//F6Wv/yfmT/72Y7/wDucTv/97qj//i+rf/5xbf/+Ler//F4Wf8A73NB//e6pf/3taP/+Lep//eqnP/waVP/APB5TP/6z8H/97Gf//evof/4tqz/8GNS/wDuaTn/85R4//SRev/zhXD/835v/+5MOv8A7FYk/+1XLv/vYkL/71xD/+1ALP/qQyT/AOxSI//tWDL/72NH/+1bRv/pSjP/61ko/wDlTiL/5Uci/+VEJ//kQSf/6Vou/+1gJ/9nVoTpMvfY0wAAAABJRU5ErkJggg==",
    blurWidth: 6,
    blurHeight: 8
};

})()),
"[project]/public/all_de.png [app-client] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/all_de.9defc9e4.png");
})()),
"[project]/public/all_de.png.mjs/(IMAGE)/[project]/public/all_de.png [app-client] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_de$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/all_de.png [app-client] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_de$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 241,
    height: 304,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAyklEQVR42g2Oy0pCURiF97PIkYhAHBQ0iUKltCKiIMEKVETUmeJEfBFnjryAl4EiKCris6gDL/vs40T37PMfrMn6YK1PucV7TOUVU4phcmG8wjtu8hbllh44TxvYeQe7HGInPY7VPwFFAaM6dtHHzvqcmjW87CfKlCPYaVvKLnbc4Txo4aW/UPr/RrafMHn5yEjiYXQogDrE/XImAjkRSMXQ0Tt2Eb+Abwf9E8Rk39C/z2xfguwT16jNh49N1Mc65LB6dNgmAujkFRdK74KkgE6XYgAAAABJRU5ErkJggg==",
    blurWidth: 6,
    blurHeight: 8
};

})()),
"[project]/public/all_cz.png [app-client] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/all_cz.f3c75f81.png");
})()),
"[project]/public/all_cz.png.mjs/(IMAGE)/[project]/public/all_cz.png [app-client] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_cz$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/all_cz.png [app-client] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_cz$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 241,
    height: 304,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAA00lEQVR42gHIADf/AO1qL//vcD//8HZO//BuS//vY0T/7Vot/wDtZi3/8pBs//i8qf/4vK3/9JWD/+9kQv8A7nA8//e4of/4vaz/+Lut//eqnP/wZ1D/AO5oNv/0noL/9aGK//WikP/1m47/71tK/wDtXiv/8HBL//BzVf/xclr/8GhW/+1EMP8A7FYl/+1aMv/uXj7/7lc+/+1BLv/qQyT/AOxTJf/uXjn/8GpP/+5hTf/pTDX/61op/wDlTiL/5Ugj/+VGKf/kQyn/6Vou/+1gJ/8fqoDEbJtWvQAAAABJRU5ErkJggg==",
    blurWidth: 6,
    blurHeight: 8
};

})()),
"[project]/public/all_bg.png [app-client] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/all_bg.1044246c.png");
})()),
"[project]/public/all_bg.png.mjs/(IMAGE)/[project]/public/all_bg.png [app-client] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_bg$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/all_bg.png [app-client] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_bg$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 241,
    height: 304,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAyklEQVR42g3OPWvCQACA4fstVTDYL/rhVnQQrLSSIVDbaBs7FApdCrbg4OIkDo7ipIggjiL6l3RQ7y65wWR8veGdnuUV6ucaWU8hX2xuClVxULVLhG4+YLoBpvNB1PQwrQbRr4uI2hXi9YhkNeE46hHPhpi/ABH+lzjO+yTLMcliQjwdYL5fEbKeQb3foP0c2suhyrfIfNZCNY2qXqCDPOFbAVk4Z19MW/DsiX9H+FVGN57YPd9z8B3E1j1j+2grOWyKWXa1K9RnhhM59n1rbOFJqgAAAABJRU5ErkJggg==",
    blurWidth: 6,
    blurHeight: 8
};

})()),
"[project]/public/all_be.png [app-client] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/all_be.75f68181.png");
})()),
"[project]/public/all_be.png.mjs/(IMAGE)/[project]/public/all_be.png [app-client] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_be$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/all_be.png [app-client] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_be$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 241,
    height: 304,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAyElEQVR42g3JP0sCYRzA8Xsvh3IcIafUcElQEhxESUH/D0sLIukdNEaDgoPiLjoouAk6Ofhq1OG83/Msd+r29Zk/lvx4yFceqRaQZw/1dIKEOSype6SjBrtZn910wHbQQdcDA59HpMMm+/mY/WJC0v1DhyUDHzmS/r/BNmmvRdL8RZWLWPFrFqkUUJVT1KOPBHniM8fAg018m0HXLtAv58R+hqhkG7jPot589Pc16v2K6K7IJnSxVmWb9Y3DKnBZXrpE1WOk5nAAALZ+d0rdbsgAAAAASUVORK5CYII=",
    blurWidth: 6,
    blurHeight: 8
};

})()),
"[project]/public/all_all.png [app-client] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/all_all.877c24a8.png");
})()),
"[project]/public/all_all.png.mjs/(IMAGE)/[project]/public/all_all.png [app-client] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_all$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/all_all.png [app-client] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_all$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 241,
    height: 304,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAA00lEQVR42gHIADf/AO1sMf/ubDn/7mg7/+5fOP/uXTz/7lsu/wDtaC//9aeK//e5pf/4uan/9qOU/+9pR/8A7WQs//Wojf/4uqj/+L2w//WWhv/vXkb/AO1kMP/3uKT/+cS2//i6rf/3qp//7lA9/wDtXCn/8HZS//F3Wv/xcFj/8F9M/+w/K/8A7FUk/+1ZMP/vY0T/71tD/+1BLv/qQyT/AOxSI//uXzr/8GpP/+5jTv/pUDr/61ko/wDlTiL/5Uci/+VIK//kRCv/6Vou/+1gJ/8o+IEV/eiKJwAAAABJRU5ErkJggg==",
    blurWidth: 6,
    blurHeight: 8
};

})()),
"[project]/public/all_es.png [app-client] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/all_es.eb42a227.png");
})()),
"[project]/public/all_es.png.mjs/(IMAGE)/[project]/public/all_es.png [app-client] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_es$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/all_es.png [app-client] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_es$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 241,
    height: 304,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAxUlEQVR42g3MO2oCURhA4buWiCZIHsjEFKmEiMYQTGFiYCbGR+GrcANi4RKsfBSCjQiila5ILNS5d9TiWh7/4qsOHKWbT/heCP9HZEPozzu0+4DSzRim/oIpxzGuyMUJqm+oY/eby3rMZTXBzofY6YBzpyGh/YVd9rGLEXY2wI57nFr/sipEMUVZFF4xeZFx8BP3KD8fRv85BLV3gnIGnXbYJ8MSchJ+YwSVFMZLsft45uBFUdvsDdu0SEbYJCLs3Ed06ZYrwA186ot7PYQAAAAASUVORK5CYII=",
    blurWidth: 6,
    blurHeight: 8
};

})()),
"[project]/public/all_pl.png [app-client] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/all_pl.af7467fc.png");
})()),
"[project]/public/all_pl.png.mjs/(IMAGE)/[project]/public/all_pl.png [app-client] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_pl$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/all_pl.png [app-client] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_pl$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 241,
    height: 304,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAv0lEQVR42g3Lu2oCURhF4fMscUxGRO2SJoQQc4OYScALnBFERUEFn0AExVtrYyHq22mhnt9RmamXp/iavdhKOhlMOYYpWl4MybmIn0JJM4nx45iC9XuPfLsEtRfUZaIJV33CzYhoNSNcjLkOuqhz78+OQ6L1hGg5JZwPubQ1yug4Ukog+RTyY70mMM+uDSUH0RmCepag8om8pTlkHRvyDqfyI0Erx6nxz9574qjtY+fdsfuyPly270n2fhqpPnADnMl6uhf9P/cAAAAASUVORK5CYII=",
    blurWidth: 6,
    blurHeight: 8
};

})()),
"[project]/public/all_en.png [app-client] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/all_en.8e30d645.png");
})()),
"[project]/public/all_en.png.mjs/(IMAGE)/[project]/public/all_en.png [app-client] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_en$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/all_en.png [app-client] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_en$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 241,
    height: 304,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAyklEQVR42hXNu2oCQQBA0f2XFeKCkrAkEFJE8nINUcirMkFREQQRxL+wsBALsRQsFLSxUBBFP0Z87jjbuE53HevD5Rpu9gpZfkKWXpD5CIf0I+LrBkNkLI69GmrSRU0H+O06ImFfIITfb6BmfdR8yLFVRUTDGnI2p1EbtRiixj38ThPxHNKQtPDKcbzKL17xG/kXRTwEMdyfACJp67GDTL0hXq/Z35oaPgMc/u/xCglk5oNd7I5NTBfbuMnGMVk7FstIkNW7hZsNcwbTjYAZcttJSwAAAABJRU5ErkJggg==",
    blurWidth: 6,
    blurHeight: 8
};

})()),
"[project]/components/Loader/Loader.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const Loader = ()=>{
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "loader",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("figure", {
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "dot white"
                }, void 0, false, {
                    fileName: "<[project]/components/Loader/Loader.jsx>",
                    lineNumber: 7,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "dot"
                }, void 0, false, {
                    fileName: "<[project]/components/Loader/Loader.jsx>",
                    lineNumber: 8,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "dot"
                }, void 0, false, {
                    fileName: "<[project]/components/Loader/Loader.jsx>",
                    lineNumber: 9,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "dot"
                }, void 0, false, {
                    fileName: "<[project]/components/Loader/Loader.jsx>",
                    lineNumber: 10,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "dot"
                }, void 0, false, {
                    fileName: "<[project]/components/Loader/Loader.jsx>",
                    lineNumber: 11,
                    columnNumber: 15
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/components/Loader/Loader.jsx>",
            lineNumber: 6,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/Loader/Loader.jsx>",
        lineNumber: 5,
        columnNumber: 9
    }, this);
};
_c = Loader;
const __TURBOPACK__default__export__ = Loader;
var _c;
__turbopack_refresh__.register(_c, "Loader");

})()),
"[project]/components/TopBrandsOfYear/TopBrandsOfYear.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-slick/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2f$Loader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Loader/Loader.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_en$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_en$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_en.png.mjs/(IMAGE)/[project]/public/all_en.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_pl$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_pl$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_pl.png.mjs/(IMAGE)/[project]/public/all_pl.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_es$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_es$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_es.png.mjs/(IMAGE)/[project]/public/all_es.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_all$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_all$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_all.png.mjs/(IMAGE)/[project]/public/all_all.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_be$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_be$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_be.png.mjs/(IMAGE)/[project]/public/all_be.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_bg$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_bg$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_bg.png.mjs/(IMAGE)/[project]/public/all_bg.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_cz$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_cz$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_cz.png.mjs/(IMAGE)/[project]/public/all_cz.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_de$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_de$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_de.png.mjs/(IMAGE)/[project]/public/all_de.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_dk$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_dk$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_dk.png.mjs/(IMAGE)/[project]/public/all_dk.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_fi$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_fi$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_fi.png.mjs/(IMAGE)/[project]/public/all_fi.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_fr$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_fr$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_fr.png.mjs/(IMAGE)/[project]/public/all_fr.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_gr$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_gr$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_gr.png.mjs/(IMAGE)/[project]/public/all_gr.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_hu$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_hu$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_hu.png.mjs/(IMAGE)/[project]/public/all_hu.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_it$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_it$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_it.png.mjs/(IMAGE)/[project]/public/all_it.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_nl$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_nl$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_nl.png.mjs/(IMAGE)/[project]/public/all_nl.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_no$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_no$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_no.png.mjs/(IMAGE)/[project]/public/all_no.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_pt$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_pt$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_pt.png.mjs/(IMAGE)/[project]/public/all_pt.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_se$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_se$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_se.png.mjs/(IMAGE)/[project]/public/all_se.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_sk$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_sk$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_sk.png.mjs/(IMAGE)/[project]/public/all_sk.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_tr$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_tr$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_tr.png.mjs/(IMAGE)/[project]/public/all_tr.png [app-client] (static) (structured image object, ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function TopBrandsOfYear({ newUrl, ipDataCode, currentLanguage, source, selectedCountry, setSelectedCountry }) {
    _s();
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]();
    const [data, setData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [topData, setTopData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [isLoading, setIsLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    //   const urlParams = new URLSearchParams(window.location.search);
    //   const brandValue = urlParams.get("brand");
    const apiOld = "https://pickbonus.myawardwallet.com/api/brands/read.php";
    const apiNew = "https://pickbonus.myawardwallet.com/api/brands/read2.php";
    function shuffleArray(array) {
        const shuffledArray = array.slice(); // Создаем копию массива
        for(let i = shuffledArray.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [
                shuffledArray[j],
                shuffledArray[i]
            ];
        }
        return shuffledArray;
    }
    console.log("============", source);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const geo = selectedCountry.toUpperCase();
        console.log("GEO", geo);
        const fetchData = async ()=>{
            setIsLoading(true);
            try {
                const url = source === "partner1039" ? apiNew : apiOld;
                const res = await fetch(url);
                if (res.ok) {
                    const responseData = await res.json();
                    // const dataArray = Object.values(responseData);
                    let filteredData = [];
                    if (geo) {
                        filteredData = responseData.brands.filter((rowData)=>rowData.GEO === geo && rowData["CurrentStatus"] === "Ongoing" && rowData["CasinoBrand"] !== "Mirax (FS)" && rowData["CasinoBrand"] !== "Katsubet (FS)" && rowData["CasinoBrand"] !== "7Bit (FS)" && rowData.Trendsetting === "1");
                    } else {
                        filteredData = responseData.brands.filter((rowData)=>rowData.GEO === ipDataCode && rowData["CurrentStatus"] === "Ongoing" && rowData["CasinoBrand"] !== "Mirax (FS)" && rowData["CasinoBrand"] !== "Katsubet (FS)" && rowData["CasinoBrand"] !== "7Bit (FS)" && rowData.Trendsetting === "1");
                    }
                    // Фильтрация объектов в массиве data
                    const filteredDataWithTopData = filteredData.filter((dataItem)=>{
                        // Проверка, есть ли объект с таким же CasinoBrand в topData
                        const existsInTopData = topData.some((topDataItem)=>topDataItem["CasinoBrand"] === dataItem["CasinoBrand"]);
                        // Возвращаем true только для объектов, которые не совпадают
                        return !existsInTopData;
                    });
                    // Перемешиваем данные перед отображением
                    setData(shuffleArray(filteredDataWithTopData));
                    setTopData([
                        ...topData
                    ]);
                    setIsLoading(false);
                } else {
                    console.error("Failed to fetch data:", res.status);
                }
            } catch (error) {
                console.error("An error occurred:", error);
            }
        };
        if (geo && currentLanguage || !geo && ipDataCode && currentLanguage) {
            fetchData();
        }
    }, [
        ipDataCode,
        currentLanguage,
        selectedCountry,
        source
    ]);
    console.log("SELECTED COUNTRY", selectedCountry);
    const combinedData = [
        ...topData,
        ...data
    ];
    const allImages = {
        en: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_en$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_en$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        pl: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_pl$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_pl$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        es: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_es$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_es$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        all: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_all$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_all$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        be: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_be$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_be$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        bg: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_bg$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_bg$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        cz: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_cz$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_cz$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        de: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_de$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_de$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        dk: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_dk$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_dk$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        fi: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_fi$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_fi$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        fr: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_fr$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_fr$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        gr: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_gr$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_gr$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        hu: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_hu$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_hu$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        it: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_it$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_it$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        nl: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_nl$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_nl$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        no: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_no$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_no$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        pt: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_pt$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_pt$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        se: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_se$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_se$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        sk: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_sk$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_sk$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        tr: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_tr$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_tr$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    };
    const allImageSrc = allImages[currentLanguage] || allImages.en;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "bg2 bgns",
        children: data.length > 0 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "container api-content",
            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "brand",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                        children: t("Trendsetting Brands of 2024")
                    }, void 0, false, {
                        fileName: "<[project]/components/TopBrandsOfYear/TopBrandsOfYear.jsx>",
                        lineNumber: 180,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "desctop",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "banner-slider1",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                    children: t("Trendsetting Brands of 2024")
                                }, void 0, false, {
                                    fileName: "<[project]/components/TopBrandsOfYear/TopBrandsOfYear.jsx>",
                                    lineNumber: 184,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/components/TopBrandsOfYear/TopBrandsOfYear.jsx>",
                                lineNumber: 183,
                                columnNumber: 15
                            }, this),
                            data.length > 3 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                ...settings,
                                children: data ? data.map((rowData, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: `flex`,
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "imgDiv",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                        id: "brandsOfYear",
                                                        target: "_blank",
                                                        href: rowData["GoBig"] + newUrl,
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("img", {
                                                            src: rowData["LinkImg"],
                                                            alt: ""
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/TopBrandsOfYear/TopBrandsOfYear.jsx>",
                                                            lineNumber: 199,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/TopBrandsOfYear/TopBrandsOfYear.jsx>",
                                                        lineNumber: 193,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                        className: "bonus",
                                                        children: rowData["OurOfferContent"]
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/TopBrandsOfYear/TopBrandsOfYear.jsx>",
                                                        lineNumber: 201,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/components/TopBrandsOfYear/TopBrandsOfYear.jsx>",
                                                lineNumber: 192,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                    id: "brandsOfYear",
                                                    className: "btn btn-primary big-btn",
                                                    target: "_blank",
                                                    href: rowData["GoBig"] + newUrl,
                                                    children: t("proceed")
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/TopBrandsOfYear/TopBrandsOfYear.jsx>",
                                                    lineNumber: 206,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/components/TopBrandsOfYear/TopBrandsOfYear.jsx>",
                                                lineNumber: 205,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "<[project]/components/TopBrandsOfYear/TopBrandsOfYear.jsx>",
                                        lineNumber: 191,
                                        columnNumber: 23
                                    }, this)) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                    children: t("No brands available for your country")
                                }, void 0, false, {
                                    fileName: "<[project]/components/TopBrandsOfYear/TopBrandsOfYear.jsx>",
                                    lineNumber: 219,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/components/TopBrandsOfYear/TopBrandsOfYear.jsx>",
                                lineNumber: 188,
                                columnNumber: 17
                            }, this),
                            data.length < 4 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "nosliders2",
                                children: data.map((rowData, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: `flex`,
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "imgDiv",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                        id: "brandsOfYear",
                                                        target: "_blank",
                                                        href: rowData["GoBig"] + newUrl,
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("img", {
                                                            src: rowData["LinkImg"],
                                                            alt: ""
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/TopBrandsOfYear/TopBrandsOfYear.jsx>",
                                                            lineNumber: 234,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/TopBrandsOfYear/TopBrandsOfYear.jsx>",
                                                        lineNumber: 228,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                        className: "bonus",
                                                        children: rowData["OurOfferContent"]
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/TopBrandsOfYear/TopBrandsOfYear.jsx>",
                                                        lineNumber: 236,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/components/TopBrandsOfYear/TopBrandsOfYear.jsx>",
                                                lineNumber: 227,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                    id: "brandsOfYear",
                                                    className: "btn btn-primary big-btn",
                                                    target: "_blank",
                                                    href: rowData["GoBig"] + newUrl,
                                                    children: t("proceed")
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/TopBrandsOfYear/TopBrandsOfYear.jsx>",
                                                    lineNumber: 239,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/components/TopBrandsOfYear/TopBrandsOfYear.jsx>",
                                                lineNumber: 238,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "<[project]/components/TopBrandsOfYear/TopBrandsOfYear.jsx>",
                                        lineNumber: 226,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "<[project]/components/TopBrandsOfYear/TopBrandsOfYear.jsx>",
                                lineNumber: 224,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/components/TopBrandsOfYear/TopBrandsOfYear.jsx>",
                        lineNumber: 182,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "mobile",
                        children: combinedData ? combinedData.map((rowData, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "imgDiv",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                id: "brandsOfYear",
                                                target: "_blank",
                                                href: rowData["GoBig"] + newUrl,
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("img", {
                                                    src: rowData["LinkImg"],
                                                    alt: ""
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/TopBrandsOfYear/TopBrandsOfYear.jsx>",
                                                    lineNumber: 265,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/components/TopBrandsOfYear/TopBrandsOfYear.jsx>",
                                                lineNumber: 259,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                className: "bonus",
                                                children: rowData["OurOfferContent"]
                                            }, void 0, false, {
                                                fileName: "<[project]/components/TopBrandsOfYear/TopBrandsOfYear.jsx>",
                                                lineNumber: 267,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/TopBrandsOfYear/TopBrandsOfYear.jsx>",
                                        lineNumber: 258,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                            id: "brandsOfYear",
                                            className: "btn btn-primary big-btn",
                                            target: "_blank",
                                            href: rowData["GoBig"] + newUrl,
                                            children: t("proceed")
                                        }, void 0, false, {
                                            fileName: "<[project]/components/TopBrandsOfYear/TopBrandsOfYear.jsx>",
                                            lineNumber: 270,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/components/TopBrandsOfYear/TopBrandsOfYear.jsx>",
                                        lineNumber: 269,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "<[project]/components/TopBrandsOfYear/TopBrandsOfYear.jsx>",
                                lineNumber: 257,
                                columnNumber: 19
                            }, this)) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                            children: t("No brands available for your country")
                        }, void 0, false, {
                            fileName: "<[project]/components/TopBrandsOfYear/TopBrandsOfYear.jsx>",
                            lineNumber: 282,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/components/TopBrandsOfYear/TopBrandsOfYear.jsx>",
                        lineNumber: 254,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/components/TopBrandsOfYear/TopBrandsOfYear.jsx>",
                lineNumber: 179,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "<[project]/components/TopBrandsOfYear/TopBrandsOfYear.jsx>",
            lineNumber: 178,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/TopBrandsOfYear/TopBrandsOfYear.jsx>",
        lineNumber: 176,
        columnNumber: 5
    }, this);
}
_s(TopBrandsOfYear, "rNQgZ737szCXZwEZCsB1a5VyN7k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = TopBrandsOfYear;
const __TURBOPACK__default__export__ = TopBrandsOfYear;
var _c;
__turbopack_refresh__.register(_c, "TopBrandsOfYear");

})()),
"[project]/components/AnotherBrands/AnotherBrands.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
;
;
;
// import fwb from "../../images/fwb.png";
function AnotherBrands({ newUrl, ipDataCode, currentLanguage, source, selectedCountry }) {
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
                        filteredDataOther = responseData.brands.filter((rowData)=>rowData.GEO === ipDataCode && rowData["Current Status"] === "Ongoing" && rowData["CasinoBrand"] !== "Mirax (FS)" && rowData["CasinoBrand"] !== "Katsubet (FS)" && rowData["CasinoBrand"] !== "7Bit (FS)" && rowData["FirstPriority"] === "1");
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
                                        fileName: "<[project]/components/AnotherBrands/AnotherBrands.jsx>",
                                        lineNumber: 114,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        children: t("Pick a brand below, make first deposit and win real cash!")
                                    }, void 0, false, {
                                        fileName: "<[project]/components/AnotherBrands/AnotherBrands.jsx>",
                                        lineNumber: 115,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        id: "roulete",
                                        className: "btn btn-primary",
                                        href: `/fortunewheel/${newUrl}`,
                                        children: t("Spin the Roulette")
                                    }, void 0, false, {
                                        fileName: "<[project]/components/AnotherBrands/AnotherBrands.jsx>",
                                        lineNumber: 120,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/components/AnotherBrands/AnotherBrands.jsx>",
                                lineNumber: 113,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/AnotherBrands/AnotherBrands.jsx>",
                            lineNumber: 112,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "all-brands",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                    className: "mindeps",
                                    children: t("To qualify for withdrawals, ensure your first deposit is at least $20 or the equivalent in other currencies.")
                                }, void 0, false, {
                                    fileName: "<[project]/components/AnotherBrands/AnotherBrands.jsx>",
                                    lineNumber: 131,
                                    columnNumber: 17
                                }, this),
                                otherData.length > 0 ? otherData.slice(0, visibleBrands).map((rowData, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "one-brand",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                        id: "FW_Brands_Main",
                                                        target: "_blank",
                                                        href: rowData["GoBig"] + newUrl,
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("img", {
                                                            src: rowData["LinkImg"],
                                                            alt: ""
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/AnotherBrands/AnotherBrands.jsx>",
                                                            lineNumber: 145,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/AnotherBrands/AnotherBrands.jsx>",
                                                        lineNumber: 140,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                        children: rowData["OurOfferContent"]
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/AnotherBrands/AnotherBrands.jsx>",
                                                        lineNumber: 147,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/components/AnotherBrands/AnotherBrands.jsx>",
                                                lineNumber: 139,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                id: "FW_Brands_Main",
                                                className: "btn btn-primary",
                                                target: "_blank",
                                                href: rowData["GoBig"] + newUrl,
                                                children: t("getBonus")
                                            }, void 0, false, {
                                                fileName: "<[project]/components/AnotherBrands/AnotherBrands.jsx>",
                                                lineNumber: 149,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "<[project]/components/AnotherBrands/AnotherBrands.jsx>",
                                        lineNumber: 138,
                                        columnNumber: 21
                                    }, this)) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                    className: "ti",
                                    children: t("No brands available for your country")
                                }, void 0, false, {
                                    fileName: "<[project]/components/AnotherBrands/AnotherBrands.jsx>",
                                    lineNumber: 160,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/AnotherBrands/AnotherBrands.jsx>",
                            lineNumber: 130,
                            columnNumber: 15
                        }, this),
                        visibleBrands < otherData.length && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                            id: "ShowMoreFW",
                            className: "btn btn-primary big-btn",
                            onClick: handleShowMore,
                            children: t("showMore")
                        }, void 0, false, {
                            fileName: "<[project]/components/AnotherBrands/AnotherBrands.jsx>",
                            lineNumber: 167,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/AnotherBrands/AnotherBrands.jsx>",
                    lineNumber: 110,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/AnotherBrands/AnotherBrands.jsx>",
                lineNumber: 109,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "<[project]/components/AnotherBrands/AnotherBrands.jsx>",
            lineNumber: 108,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/AnotherBrands/AnotherBrands.jsx>",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_s(AnotherBrands, "cZBvW56wXTTK4vbynDkWzuq/Hd4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = AnotherBrands;
const __TURBOPACK__default__export__ = AnotherBrands;
var _c;
__turbopack_refresh__.register(_c, "AnotherBrands");

})()),
"[project]/components/NewBrands/NewBrands.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-slick/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2f$Loader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Loader/Loader.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_en$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_en$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_en.png.mjs/(IMAGE)/[project]/public/all_en.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_pl$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_pl$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_pl.png.mjs/(IMAGE)/[project]/public/all_pl.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_es$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_es$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_es.png.mjs/(IMAGE)/[project]/public/all_es.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_all$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_all$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_all.png.mjs/(IMAGE)/[project]/public/all_all.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_be$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_be$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_be.png.mjs/(IMAGE)/[project]/public/all_be.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_bg$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_bg$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_bg.png.mjs/(IMAGE)/[project]/public/all_bg.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_cz$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_cz$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_cz.png.mjs/(IMAGE)/[project]/public/all_cz.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_de$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_de$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_de.png.mjs/(IMAGE)/[project]/public/all_de.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_dk$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_dk$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_dk.png.mjs/(IMAGE)/[project]/public/all_dk.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_fi$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_fi$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_fi.png.mjs/(IMAGE)/[project]/public/all_fi.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_fr$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_fr$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_fr.png.mjs/(IMAGE)/[project]/public/all_fr.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_gr$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_gr$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_gr.png.mjs/(IMAGE)/[project]/public/all_gr.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_hu$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_hu$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_hu.png.mjs/(IMAGE)/[project]/public/all_hu.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_it$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_it$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_it.png.mjs/(IMAGE)/[project]/public/all_it.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_nl$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_nl$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_nl.png.mjs/(IMAGE)/[project]/public/all_nl.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_no$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_no$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_no.png.mjs/(IMAGE)/[project]/public/all_no.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_pt$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_pt$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_pt.png.mjs/(IMAGE)/[project]/public/all_pt.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_se$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_se$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_se.png.mjs/(IMAGE)/[project]/public/all_se.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_sk$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_sk$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_sk.png.mjs/(IMAGE)/[project]/public/all_sk.png [app-client] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_tr$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_tr$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/all_tr.png.mjs/(IMAGE)/[project]/public/all_tr.png [app-client] (static) (structured image object, ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function NewBrands({ newUrl, ipDataCode, currentLanguage, source, selectedCountry, setSelectedCountry }) {
    _s();
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]();
    const [data, setData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [topData, setTopData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [isLoading, setIsLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    //   const urlParams = new URLSearchParams(window.location.search);
    //   const brandValue = urlParams.get("brand");
    const apiOld = "https://pickbonus.myawardwallet.com/api/brands/read.php";
    const apiNew = "https://pickbonus.myawardwallet.com/api/brands/read2.php";
    function shuffleArray(array) {
        const shuffledArray = array.slice(); // Создаем копию массива
        for(let i = shuffledArray.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [
                shuffledArray[j],
                shuffledArray[i]
            ];
        }
        return shuffledArray;
    }
    console.log("============", source);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const geo = selectedCountry.toUpperCase();
        console.log("GEO", geo);
        const fetchData = async ()=>{
            setIsLoading(true);
            try {
                const url = source === "partner1039" ? apiNew : apiOld;
                const res = await fetch(url);
                if (res.ok) {
                    const responseData = await res.json();
                    // const dataArray = Object.values(responseData);
                    let filteredData = [];
                    if (geo) {
                        filteredData = responseData.brands.filter((rowData)=>rowData.GEO === geo && rowData["CurrentStatus"] === "Ongoing" && rowData["Casino brand"] !== "Mirax (FS)" && rowData["Casino brand"] !== "Katsubet (FS)" && rowData["Casino brand"] !== "7Bit (FS)" && rowData.Segment2 === "Sandbox");
                    } else {
                        filteredData = responseData.brands.filter((rowData)=>rowData.GEO === ipDataCode && rowData["CurrentStatus"] === "Ongoing" && rowData["Casino brand"] !== "Mirax (FS)" && rowData["Casino brand"] !== "Katsubet (FS)" && rowData["Casino brand"] !== "7Bit (FS)" && rowData.Segment2 === "Sandbox");
                    }
                    // Фильтрация объектов в массиве data
                    const filteredDataWithTopData = filteredData.filter((dataItem)=>{
                        // Проверка, есть ли объект с таким же Casino brand в topData
                        const existsInTopData = topData.some((topDataItem)=>topDataItem["Casino brand"] === dataItem["Casino brand"]);
                        // Возвращаем true только для объектов, которые не совпадают
                        return !existsInTopData;
                    });
                    // Перемешиваем данные перед отображением
                    setData(shuffleArray(filteredDataWithTopData));
                    setTopData([
                        ...topData
                    ]);
                    setIsLoading(false);
                } else {
                    console.error("Failed to fetch data:", res.status);
                }
            } catch (error) {
                console.error("An error occurred:", error);
            }
        };
        if (geo && currentLanguage || !geo && ipDataCode && currentLanguage) {
            fetchData();
        }
    }, [
        ipDataCode,
        currentLanguage,
        selectedCountry,
        source
    ]);
    const combinedData = [
        ...topData,
        ...data
    ];
    const allImages = {
        en: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_en$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_en$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        pl: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_pl$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_pl$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        es: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_es$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_es$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        all: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_all$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_all$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        be: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_be$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_be$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        bg: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_bg$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_bg$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        cz: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_cz$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_cz$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        de: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_de$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_de$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        dk: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_dk$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_dk$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        fi: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_fi$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_fi$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        fr: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_fr$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_fr$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        gr: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_gr$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_gr$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        hu: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_hu$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_hu$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        it: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_it$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_it$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        nl: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_nl$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_nl$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        no: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_no$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_no$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        pt: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_pt$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_pt$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        se: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_se$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_se$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        sk: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_sk$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_sk$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        tr: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$all_tr$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$all_tr$2e$png__$5b$app$2d$client$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    };
    const allImageSrc = allImages[currentLanguage] || allImages.en;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "bg2 bgns",
        children: data.length > 0 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "container api-content",
            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "brand",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                        children: t("newbrands")
                    }, void 0, false, {
                        fileName: "<[project]/components/NewBrands/NewBrands.jsx>",
                        lineNumber: 177,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "desctop",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "banner-slider2",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("img", {
                                    src: allImageSrc.src,
                                    alt: `all_${currentLanguage}`
                                }, void 0, false, {
                                    fileName: "<[project]/components/NewBrands/NewBrands.jsx>",
                                    lineNumber: 181,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/components/NewBrands/NewBrands.jsx>",
                                lineNumber: 180,
                                columnNumber: 15
                            }, this),
                            data.length > 2 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                ...settings,
                                children: data ? data.map((rowData, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: `flex`,
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "imgDiv",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                        id: "Top_New_Releases",
                                                        target: "_blank",
                                                        href: rowData["GoBig"] + newUrl,
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("img", {
                                                            src: rowData["LinkImg"],
                                                            alt: ""
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/NewBrands/NewBrands.jsx>",
                                                            lineNumber: 194,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/NewBrands/NewBrands.jsx>",
                                                        lineNumber: 189,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                        className: "bonus",
                                                        children: rowData["OurOfferContent"]
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/NewBrands/NewBrands.jsx>",
                                                        lineNumber: 196,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/components/NewBrands/NewBrands.jsx>",
                                                lineNumber: 188,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                    id: "Top_New_Releases",
                                                    className: "btn btn-primary big-btn",
                                                    target: "_blank",
                                                    href: rowData["GoBig"] + newUrl,
                                                    children: t("proceed")
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/NewBrands/NewBrands.jsx>",
                                                    lineNumber: 199,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/components/NewBrands/NewBrands.jsx>",
                                                lineNumber: 198,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "<[project]/components/NewBrands/NewBrands.jsx>",
                                        lineNumber: 187,
                                        columnNumber: 23
                                    }, this)) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                    children: "No matching data found."
                                }, void 0, false, {
                                    fileName: "<[project]/components/NewBrands/NewBrands.jsx>",
                                    lineNumber: 211,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/components/NewBrands/NewBrands.jsx>",
                                lineNumber: 184,
                                columnNumber: 17
                            }, this),
                            data.length <= 2 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "nosliders2",
                                children: data.map((rowData, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: `flex`,
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "imgDiv",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                        id: "Top_New_Releases",
                                                        target: "_blank",
                                                        href: rowData["GoBig"] + newUrl,
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("img", {
                                                            src: rowData["LinkImg"],
                                                            alt: ""
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/NewBrands/NewBrands.jsx>",
                                                            lineNumber: 225,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/NewBrands/NewBrands.jsx>",
                                                        lineNumber: 220,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                        className: "bonus",
                                                        children: rowData["OurOfferContent"]
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/NewBrands/NewBrands.jsx>",
                                                        lineNumber: 227,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/components/NewBrands/NewBrands.jsx>",
                                                lineNumber: 219,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                    id: "Top_New_Releases",
                                                    className: "btn btn-primary big-btn",
                                                    target: "_blank",
                                                    href: rowData["GoBig"] + newUrl,
                                                    children: t("proceed")
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/NewBrands/NewBrands.jsx>",
                                                    lineNumber: 230,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/components/NewBrands/NewBrands.jsx>",
                                                lineNumber: 229,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "<[project]/components/NewBrands/NewBrands.jsx>",
                                        lineNumber: 218,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "<[project]/components/NewBrands/NewBrands.jsx>",
                                lineNumber: 216,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/components/NewBrands/NewBrands.jsx>",
                        lineNumber: 179,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "mobile",
                        children: combinedData ? combinedData.map((rowData, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "imgDiv",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                id: "Top_New_Releases",
                                                target: "_blank",
                                                href: rowData["GoBig"] + newUrl,
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("img", {
                                                    src: rowData["LinkImg"],
                                                    alt: ""
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/NewBrands/NewBrands.jsx>",
                                                    lineNumber: 254,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/components/NewBrands/NewBrands.jsx>",
                                                lineNumber: 249,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                className: "bonus",
                                                children: rowData["OurOfferContent"]
                                            }, void 0, false, {
                                                fileName: "<[project]/components/NewBrands/NewBrands.jsx>",
                                                lineNumber: 256,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/NewBrands/NewBrands.jsx>",
                                        lineNumber: 248,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                            id: "Top_New_Releases",
                                            className: "btn btn-primary big-btn",
                                            target: "_blank",
                                            href: rowData["GoBig"] + newUrl,
                                            children: t("proceed")
                                        }, void 0, false, {
                                            fileName: "<[project]/components/NewBrands/NewBrands.jsx>",
                                            lineNumber: 259,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/components/NewBrands/NewBrands.jsx>",
                                        lineNumber: 258,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "<[project]/components/NewBrands/NewBrands.jsx>",
                                lineNumber: 247,
                                columnNumber: 19
                            }, this)) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                            children: "No matching data found."
                        }, void 0, false, {
                            fileName: "<[project]/components/NewBrands/NewBrands.jsx>",
                            lineNumber: 271,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/components/NewBrands/NewBrands.jsx>",
                        lineNumber: 244,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/components/NewBrands/NewBrands.jsx>",
                lineNumber: 176,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "<[project]/components/NewBrands/NewBrands.jsx>",
            lineNumber: 175,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/NewBrands/NewBrands.jsx>",
        lineNumber: 173,
        columnNumber: 5
    }, this);
}
_s(NewBrands, "rNQgZ737szCXZwEZCsB1a5VyN7k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = NewBrands;
const __TURBOPACK__default__export__ = NewBrands;
var _c;
__turbopack_refresh__.register(_c, "NewBrands");

})()),
"[project]/components/topBrands/topBrands.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-slick/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2f$Loader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Loader/Loader.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
function TopBrands({ newUrl, ipDataCode, currentLanguage, source, selectedCountry, setSelectedCountry }) {
    _s();
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]();
    const [data, setData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [topData, setTopData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [isLoading, setIsLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        centerPadding: "20px",
        centerMode: true
    };
    const urlParams = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]();
    const brandValue = urlParams.get("brand");
    const apiOld = "https://pickbonus.myawardwallet.com/api/brands/read.php";
    const apiNew = "https://pickbonus.myawardwallet.com/api/brands/read2.php";
    function shuffleArray(array) {
        const shuffledArray = array.slice(); // Создаем копию массива
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
            setIsLoading(true);
            try {
                const url = source === "partner1039" ? apiNew : apiOld;
                console.log("URL", url);
                const res = await fetch(url);
                if (res.ok) {
                    const responseData = await res.json();
                    let filteredData = [];
                    if (geo) {
                        filteredData = responseData.brands.filter((rowData)=>rowData.GEO === geo && rowData["CurrentStatus"] === "Ongoing" && rowData["CasinoBrand"] !== "Mirax (FS)" && rowData["CasinoBrand"] !== "Katsubet (FS)" && rowData["CasinoBrand"] !== "7Bit (FS)" && rowData.Segment2 === "Premium");
                    } else {
                        filteredData = responseData.brands.filter((rowData)=>rowData.GEO === ipDataCode && rowData["CurrentStatus"] === "Ongoing" && rowData["CasinoBrand"] !== "Mirax (FS)" && rowData["CasinoBrand"] !== "Katsubet (FS)" && rowData["CasinoBrand"] !== "7Bit (FS)" && rowData.Segment2 === "Premium");
                    }
                    console.log("filtered", filteredData);
                    const topData = responseData.brands.filter((rowData)=>rowData.Tech === brandValue).map((item)=>({
                            ...item,
                            clas: "topbrand"
                        }));
                    // Фильтрация объектов в массиве data
                    const filteredDataWithTopData = filteredData.filter((dataItem)=>{
                        // Проверка, есть ли объект с таким же Casino brand в topData
                        const existsInTopData = topData.some((topDataItem)=>topDataItem["CasinoBrand"] === dataItem["CasinoBrand"]);
                        // Возвращаем true только для объектов, которые не совпадают
                        return !existsInTopData;
                    });
                    // Перемешиваем данные перед отображением
                    setData(shuffleArray(filteredDataWithTopData));
                    setTopData([
                        ...topData
                    ]);
                    setIsLoading(false);
                    // Если нет брендов, вызывать setSelectedCountry
                    if (filteredDataWithTopData.length === 0) {
                        setSelectedCountry("all");
                        console.log(filteredDataWithTopData);
                    }
                } else {
                    console.error("Failed to fetch data:", res.status);
                }
            } catch (error) {
                console.error("An error occurred:", error);
            }
        };
        console.log("@@@@@@@@@@@@@@", geo, currentLanguage);
        console.log("@@@@@@@@@@@@@@", ipDataCode, currentLanguage);
        if (geo && currentLanguage || !geo && ipDataCode && currentLanguage) {
            fetchData();
        }
    }, [
        ipDataCode,
        brandValue,
        currentLanguage,
        selectedCountry,
        source
    ]);
    const combinedData = [
        ...topData,
        ...data
    ];
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "bg1",
        children: [
            isLoading && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2f$Loader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "<[project]/components/topBrands/topBrands.jsx>",
                lineNumber: 138,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "container api-content",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "brand",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                            children: t("greeting")
                        }, void 0, false, {
                            fileName: "<[project]/components/topBrands/topBrands.jsx>",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "desctop",
                            children: [
                                data.length > 2 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    ...settings,
                                    children: [
                                        topData ? topData.map((rowData, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: `flex ${rowData.clas}`,
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "imgDiv",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                                id: "top_brand",
                                                                target: "_blank",
                                                                href: rowData["GoBig"] + newUrl,
                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("img", {
                                                                    src: rowData["LinkImg"],
                                                                    alt: ""
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/components/topBrands/topBrands.jsx>",
                                                                    lineNumber: 155,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/topBrands/topBrands.jsx>",
                                                                lineNumber: 149,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                className: "bonus",
                                                                children: rowData["OurOfferContent"]
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/topBrands/topBrands.jsx>",
                                                                lineNumber: 157,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/components/topBrands/topBrands.jsx>",
                                                        lineNumber: 148,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                            id: "top_brand",
                                                            className: "btn btn-primary big-btn",
                                                            target: "_blank",
                                                            href: rowData["GoBig"] + newUrl,
                                                            children: t("proceed")
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/topBrands/topBrands.jsx>",
                                                            lineNumber: 160,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/topBrands/topBrands.jsx>",
                                                        lineNumber: 159,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "<[project]/components/topBrands/topBrands.jsx>",
                                                lineNumber: 147,
                                                columnNumber: 21
                                            }, this)) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                            children: "No matching data found."
                                        }, void 0, false, {
                                            fileName: "<[project]/components/topBrands/topBrands.jsx>",
                                            lineNumber: 173,
                                            columnNumber: 19
                                        }, this),
                                        data ? data.map((rowData, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: `flex ${rowData.clas}`,
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "imgDiv",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                                id: "top_brand",
                                                                target: "_blank",
                                                                href: rowData["GoBig"] + newUrl,
                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("img", {
                                                                    src: rowData["LinkImg"],
                                                                    alt: ""
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/components/topBrands/topBrands.jsx>",
                                                                    lineNumber: 185,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/topBrands/topBrands.jsx>",
                                                                lineNumber: 179,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                className: "bonus",
                                                                children: rowData["OurOfferContent"]
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/topBrands/topBrands.jsx>",
                                                                lineNumber: 187,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/components/topBrands/topBrands.jsx>",
                                                        lineNumber: 178,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                            id: "top_brand",
                                                            className: "btn btn-primary big-btn",
                                                            target: "_blank",
                                                            href: rowData["GoBig"] + newUrl,
                                                            children: t("proceed")
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/topBrands/topBrands.jsx>",
                                                            lineNumber: 190,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/topBrands/topBrands.jsx>",
                                                        lineNumber: 189,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "<[project]/components/topBrands/topBrands.jsx>",
                                                lineNumber: 177,
                                                columnNumber: 21
                                            }, this)) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                            children: "No matching data found."
                                        }, void 0, false, {
                                            fileName: "<[project]/components/topBrands/topBrands.jsx>",
                                            lineNumber: 203,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/topBrands/topBrands.jsx>",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "nosliders",
                                    children: data.length <= 2 && combinedData.map((rowData, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: `flex noslider ${rowData.clas}`,
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "imgDiv",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                            id: "top_brand",
                                                            target: "_blank",
                                                            href: rowData["GoBig"] + newUrl,
                                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("img", {
                                                                src: rowData["LinkImg"],
                                                                alt: ""
                                                            }, void 0, false, {
                                                                fileName: "<[project]/components/topBrands/topBrands.jsx>",
                                                                lineNumber: 218,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/topBrands/topBrands.jsx>",
                                                            lineNumber: 212,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            className: "bonus",
                                                            children: rowData["OurOfferContent"]
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/topBrands/topBrands.jsx>",
                                                            lineNumber: 220,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/components/topBrands/topBrands.jsx>",
                                                    lineNumber: 211,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                        id: "top_brand",
                                                        className: "btn btn-primary big-btn",
                                                        target: "_blank",
                                                        href: rowData["GoBig"] + newUrl,
                                                        children: t("proceed")
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/topBrands/topBrands.jsx>",
                                                        lineNumber: 223,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/topBrands/topBrands.jsx>",
                                                    lineNumber: 222,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "<[project]/components/topBrands/topBrands.jsx>",
                                            lineNumber: 210,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "<[project]/components/topBrands/topBrands.jsx>",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/topBrands/topBrands.jsx>",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "mobile",
                            children: combinedData ? combinedData.map((rowData, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "flex",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "imgDiv",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                    id: "top_brand",
                                                    target: "_blank",
                                                    href: rowData["GoBig"] + newUrl,
                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("img", {
                                                        src: rowData["LinkImg"],
                                                        alt: ""
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/topBrands/topBrands.jsx>",
                                                        lineNumber: 248,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/topBrands/topBrands.jsx>",
                                                    lineNumber: 242,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "bonus",
                                                    children: rowData["OurOfferContent"]
                                                }, void 0, false, {
                                                    fileName: "<[project]/components/topBrands/topBrands.jsx>",
                                                    lineNumber: 250,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/components/topBrands/topBrands.jsx>",
                                            lineNumber: 241,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                id: "top_brand",
                                                className: "btn btn-primary big-btn",
                                                target: "_blank",
                                                href: rowData["GoBig"] + newUrl,
                                                children: t("proceed")
                                            }, void 0, false, {
                                                fileName: "<[project]/components/topBrands/topBrands.jsx>",
                                                lineNumber: 253,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/components/topBrands/topBrands.jsx>",
                                            lineNumber: 252,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "<[project]/components/topBrands/topBrands.jsx>",
                                    lineNumber: 240,
                                    columnNumber: 17
                                }, this)) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                children: "No matching data found."
                            }, void 0, false, {
                                fileName: "<[project]/components/topBrands/topBrands.jsx>",
                                lineNumber: 265,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/topBrands/topBrands.jsx>",
                            lineNumber: 237,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/topBrands/topBrands.jsx>",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/topBrands/topBrands.jsx>",
                lineNumber: 139,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/components/topBrands/topBrands.jsx>",
        lineNumber: 137,
        columnNumber: 5
    }, this);
}
_s(TopBrands, "BSnvh6fge4GkfYYO6dE0PYz/BCg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = TopBrands;
const __TURBOPACK__default__export__ = TopBrands;
var _c;
__turbopack_refresh__.register(_c, "TopBrands");

})()),
"[project]/components/otherBrands/otherBrands.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2f$Loader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Loader/Loader.jsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
function OtherBrands({ newUrl, ipDataCode, currentLanguage, source, selectedCountry, setSelectedCountry }) {
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
                        filteredDataOther = responseData.brands.filter((rowData)=>rowData.GEO === geo && rowData["CurrentStatus"] === "Ongoing" && rowData["CasinoBrand"] !== "Mirax (FS)" && rowData["CasinoBrand"] !== "Katsubet (FS)" && rowData["CasinoBrand"] !== "7Bit (FS)" && rowData.Segment2 !== "Premium" && rowData.Segment2 !== "Sandbox");
                    } else {
                        filteredDataOther = responseData.brands.filter((rowData)=>rowData.GEO === ipDataCode && rowData["CurrentStatus"] === "Ongoing" && rowData["CasinoBrand"] !== "Mirax (FS)" && rowData["CasinoBrand"] !== "Katsubet (FS)" && rowData["CasinoBrand"] !== "7Bit (FS)" && rowData.Segment2 !== "Premium" && rowData.Segment2 !== "Sandbox");
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
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                    className: "text-center",
                    children: t("consider")
                }, void 0, false, {
                    fileName: "<[project]/components/otherBrands/otherBrands.jsx>",
                    lineNumber: 114,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "other-brands",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "all-brands",
                                children: otherData.length > 0 ? otherData.slice(0, visibleBrands).map((rowData, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "one-brand",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                        id: "usual_suggestions",
                                                        target: "_blank",
                                                        href: rowData["GoBig"] + newUrl,
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("img", {
                                                            src: rowData["LinkImg"],
                                                            alt: ""
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/otherBrands/otherBrands.jsx>",
                                                            lineNumber: 131,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/otherBrands/otherBrands.jsx>",
                                                        lineNumber: 125,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                        children: rowData["OurOfferContent"]
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/otherBrands/otherBrands.jsx>",
                                                        lineNumber: 133,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/components/otherBrands/otherBrands.jsx>",
                                                lineNumber: 123,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                id: "usual_suggestions",
                                                className: "btn btn-primary",
                                                target: "_blank",
                                                href: rowData["GoBig"] + newUrl,
                                                children: t("getBonus")
                                            }, void 0, false, {
                                                fileName: "<[project]/components/otherBrands/otherBrands.jsx>",
                                                lineNumber: 135,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "<[project]/components/otherBrands/otherBrands.jsx>",
                                        lineNumber: 121,
                                        columnNumber: 21
                                    }, this)) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                    className: "ti",
                                    children: "No brands available for your country"
                                }, void 0, false, {
                                    fileName: "<[project]/components/otherBrands/otherBrands.jsx>",
                                    lineNumber: 147,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/components/otherBrands/otherBrands.jsx>",
                                lineNumber: 118,
                                columnNumber: 15
                            }, this),
                            visibleBrands < otherData.length && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                className: "btn btn-primary big-btn",
                                onClick: handleShowMore,
                                children: t("showMore")
                            }, void 0, false, {
                                fileName: "<[project]/components/otherBrands/otherBrands.jsx>",
                                lineNumber: 152,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/components/otherBrands/otherBrands.jsx>",
                        lineNumber: 116,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/otherBrands/otherBrands.jsx>",
                    lineNumber: 115,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/components/otherBrands/otherBrands.jsx>",
            lineNumber: 113,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/otherBrands/otherBrands.jsx>",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_s(OtherBrands, "cZBvW56wXTTK4vbynDkWzuq/Hd4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = OtherBrands;
const __TURBOPACK__default__export__ = OtherBrands;
var _c;
__turbopack_refresh__.register(_c, "OtherBrands");

})()),
"[project]/app/page.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Home
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$otherBrands$2f$otherBrands$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/otherBrands/otherBrands.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$topBrands$2f$topBrands$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/topBrands/topBrands.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NewBrands$2f$NewBrands$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/NewBrands/NewBrands.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AnotherBrands$2f$AnotherBrands$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/AnotherBrands/AnotherBrands.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopBrandsOfYear$2f$TopBrandsOfYear$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/TopBrandsOfYear/TopBrandsOfYear.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DoubleBrands$2f$DoubleBrands$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/DoubleBrands/DoubleBrands.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DoubleBrands2$2f$DoubleBrands2$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/DoubleBrands2/DoubleBrands2.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const [ipData, setIpData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [ipDataCode, setIpDataCode] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [newUrl, setNewUrl] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const [source, setSource] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const [selectedCountry, setSelectedCountry] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const { t, i18n } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]();
    const countryOptions = [
        {
            code: "au",
            name: "Australia",
            flag: "🇦🇺"
        },
        {
            code: "at",
            name: "Austria",
            flag: "🇦🇹"
        },
        {
            code: "be",
            name: "Belgium",
            flag: "🇧🇪"
        },
        {
            code: "bg",
            name: "Bulgaria",
            flag: "🇧🇬"
        },
        {
            code: "ca",
            name: "Canada",
            flag: "🇨🇦"
        },
        {
            code: "cz",
            name: "Czech",
            flag: "🇨🇿"
        },
        {
            code: "dk",
            name: "Denmark",
            flag: "🇩🇰"
        },
        {
            code: "fi",
            name: "Finland",
            flag: "🇫🇮"
        },
        {
            code: "fr",
            name: "France",
            flag: "🇫🇷"
        },
        {
            code: "de",
            name: "Germany",
            flag: "🇩🇪"
        },
        {
            code: "gr",
            name: "Greece",
            flag: "🇬🇷"
        },
        {
            code: "hu",
            name: "Hungary",
            flag: "🇭🇺"
        },
        {
            code: "ie",
            name: "Ireland",
            flag: "🇮🇪"
        },
        {
            code: "it",
            name: "Italy",
            flag: "🇮🇹"
        },
        {
            code: "nl",
            name: "Netherlands",
            flag: "🇳🇱"
        },
        {
            code: "nz",
            name: "New Zealand",
            flag: "🇳🇿"
        },
        {
            code: "no",
            name: "Norway",
            flag: "🇳🇴"
        },
        {
            code: "pl",
            name: "Poland",
            flag: "🇵🇱"
        },
        {
            code: "pt",
            name: "Portugal",
            flag: "🇵🇹"
        },
        {
            code: "sk",
            name: "Slovakia",
            flag: "🇸🇰"
        },
        {
            code: "es",
            name: "Spain",
            flag: "🇪🇸"
        },
        {
            code: "se",
            name: "Sweden",
            flag: "🇸🇪"
        },
        {
            code: "ch",
            name: "Switzerland",
            flag: "🇨🇭"
        },
        {
            code: "tr",
            name: "Turkey",
            flag: "🇹🇷"
        },
        {
            code: "gb",
            name: "United Kingdom",
            flag: "🇬🇧"
        },
        {
            code: "all",
            name: "World",
            flag: "🌍"
        }
    ];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        // Запрос к API с использованием fetch
        fetch("https://ipapi.co/json/?key=YD0x5VtXrPJkOcFQMjEyQgqjfM6jUcwS4J54b3DI8ztyrFpHzW").then((response)=>response.json()).then((data)=>{
            setIpData(data.country_name);
            setIpDataCode(data.country);
            setSelectedCountry(data.country.toLowerCase());
        }).catch((error)=>{
            console.error("Ошибка при запросе к API:", error);
        });
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const url = window.location.href;
        const urlObj = new URL(url);
        const searchParams = new URLSearchParams(urlObj.search);
        searchParams.delete("brand");
        const currentSource = searchParams.get("keyword");
        if (currentSource !== null && currentSource.includes("partner1039")) {
            // Если в строке есть "partner1039" или "partner1041", вырезаем и добавляем в setSource
            const partnerIndex = currentSource.indexOf("partner");
            const partnerText = currentSource.substring(partnerIndex, partnerIndex + 11); // 11 - длина "partner1039" или "partner1041"
            setSource(partnerText);
            // Используем "partner1039" или "partner1041" в newUrl
            searchParams.set("source", partnerText);
        } else {
            // Если "partner1039" или "partner1041" отсутствует, добавляем 0 в setSource
            setSource("0");
            // Используем "0" в newUrl
            searchParams.set("source", "0");
        }
        // Удаляем "source" из searchParams
        // searchParams.delete("source");
        // Добавить source в новый URL только если он существует
        const newUrl = "?" + (searchParams.toString() ? searchParams.toString() + "&" : "") + "creative_id=MAW";
        setNewUrl(newUrl);
    }, []);
    // Добавьте обработчик изменения selectedCountry
    const handleCountryChange = (country)=>{
        setSelectedCountry(country);
        // Сохранить в localStorage
        localStorage.setItem("selectedCountry", country);
    };
    console.log("~~~~~~~~~~~~~~~~~~SELECTEDCOUNTRY~~~~~~~~~~~~~~~~~~~~~", selectedCountry);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$topBrands$2f$topBrands$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                newUrl: newUrl,
                ipDataCode: ipDataCode,
                currentLanguage: i18n.language,
                source: source,
                selectedCountry: selectedCountry,
                setSelectedCountry: setSelectedCountry
            }, void 0, false, {
                fileName: "<[project]/app/page.tsx>",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "select-brand container",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                        children: t("select")
                    }, void 0, false, {
                        fileName: "<[project]/app/page.tsx>",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("select", {
                        id: "countrySelect",
                        value: selectedCountry,
                        // onChange={(e) => setSelectedCountry(e.target.value)}
                        onChange: (e)=>handleCountryChange(e.target.value),
                        children: countryOptions.map((country, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("option", {
                                value: country.code,
                                selected: country.code === ipDataCode,
                                children: [
                                    country.flag,
                                    " ",
                                    country.name
                                ]
                            }, index, true, {
                                fileName: "<[project]/app/page.tsx>",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "<[project]/app/page.tsx>",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/page.tsx>",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NewBrands$2f$NewBrands$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                newUrl: newUrl,
                ipDataCode: ipDataCode,
                currentLanguage: i18n.language,
                source: source,
                selectedCountry: selectedCountry,
                setSelectedCountry: setSelectedCountry
            }, void 0, false, {
                fileName: "<[project]/app/page.tsx>",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AnotherBrands$2f$AnotherBrands$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                newUrl: newUrl,
                ipDataCode: ipDataCode,
                currentLanguage: i18n.language,
                source: source,
                selectedCountry: selectedCountry
            }, void 0, false, {
                fileName: "<[project]/app/page.tsx>",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopBrandsOfYear$2f$TopBrandsOfYear$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                newUrl: newUrl,
                ipDataCode: ipDataCode,
                currentLanguage: i18n.language,
                source: source,
                selectedCountry: selectedCountry,
                setSelectedCountry: setSelectedCountry
            }, void 0, false, {
                fileName: "<[project]/app/page.tsx>",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "doublebrands",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "another-brands",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "other-brands",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DoubleBrands$2f$DoubleBrands$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    newUrl: newUrl,
                                    ipDataCode: ipDataCode,
                                    currentLanguage: i18n.language,
                                    source: source,
                                    selectedCountry: selectedCountry
                                }, void 0, false, {
                                    fileName: "<[project]/app/page.tsx>",
                                    lineNumber: 181,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DoubleBrands2$2f$DoubleBrands2$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    newUrl: newUrl,
                                    ipDataCode: ipDataCode,
                                    currentLanguage: i18n.language,
                                    source: source,
                                    selectedCountry: selectedCountry
                                }, void 0, false, {
                                    fileName: "<[project]/app/page.tsx>",
                                    lineNumber: 188,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/app/page.tsx>",
                            lineNumber: 180,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/app/page.tsx>",
                        lineNumber: 179,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/app/page.tsx>",
                    lineNumber: 178,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/app/page.tsx>",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$otherBrands$2f$otherBrands$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                newUrl: newUrl,
                ipDataCode: ipDataCode,
                currentLanguage: i18n.language,
                source: source,
                selectedCountry: selectedCountry,
                setSelectedCountry: setSelectedCountry
            }, void 0, false, {
                fileName: "<[project]/app/page.tsx>",
                lineNumber: 199,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/page.tsx>",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_s(Home, "uF37BJP2+DUc1Oq82wVsFEOP148=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = Home;
var _c;
__turbopack_refresh__.register(_c, "Home");

})()),
}]);

//# sourceMappingURL=_e9058d._.js.map