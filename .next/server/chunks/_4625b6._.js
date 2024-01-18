module.exports = {

"[project]/components/AnotherBrands2/AnotherBrands2.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
// import fwb from "../../images/fwb.png";
function AnotherBrands2({ newUrl, ipDataCode, currentLanguage, source, selectedCountry }) {
    const { t } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"]();
    console.log("111111111", selectedCountry);
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](true);
    const [otherData, setOtherData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]([]);
    const [visibleBrands, setVisibleBrands] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](8);
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
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
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
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        children: otherData.length > 0 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "another-brands",
            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "other-brands",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "banner",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "banner-text",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                        children: t("FORTUNE WHEEL BRANDS")
                                    }, void 0, false, {
                                        fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
                                        lineNumber: 117,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        children: t("Pick a brand below, make first deposit and win real cash!")
                                    }, void 0, false, {
                                        fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
                                        lineNumber: 118,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        id: "roulete",
                                        className: "btn btn-primary",
                                        href: `/fortunewheel/${newUrl}`,
                                        children: t("Spin the Roulette")
                                    }, void 0, false, {
                                        fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
                                        lineNumber: 123,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
                                lineNumber: 116,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
                            lineNumber: 115,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "all-brands",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                    className: "mindeps",
                                    children: t("To qualify for withdrawals, ensure your first deposit is at least $20 or the equivalent in other currencies.")
                                }, void 0, false, {
                                    fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
                                    lineNumber: 134,
                                    columnNumber: 17
                                }, this),
                                otherData.length > 0 ? otherData.slice(0, visibleBrands).map((rowData, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "one-brand",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                        id: "FW_Brands_Wheel_Page",
                                                        target: "_blank",
                                                        href: rowData["GoBig"] + newUrl,
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("img", {
                                                            src: rowData["LinkImg"],
                                                            alt: ""
                                                        }, void 0, false, {
                                                            fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
                                                            lineNumber: 148,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
                                                        lineNumber: 143,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                        children: rowData["OurOfferContent"]
                                                    }, void 0, false, {
                                                        fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
                                                        lineNumber: 150,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
                                                lineNumber: 142,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                id: "FW_Brands_Wheel_Page",
                                                className: "btn btn-primary",
                                                target: "_blank",
                                                href: rowData["GoBig"] + newUrl,
                                                children: t("getBonus")
                                            }, void 0, false, {
                                                fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
                                                lineNumber: 152,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
                                        lineNumber: 141,
                                        columnNumber: 21
                                    }, this)) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                    className: "ti",
                                    children: t("No brands available for your country")
                                }, void 0, false, {
                                    fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
                                    lineNumber: 163,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
                            lineNumber: 133,
                            columnNumber: 15
                        }, this),
                        visibleBrands < otherData.length && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                            id: "ShowMoreFW",
                            className: "btn btn-primary big-btn",
                            onClick: handleShowMore,
                            children: t("showMore")
                        }, void 0, false, {
                            fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
                            lineNumber: 170,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
                    lineNumber: 113,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
                lineNumber: 112,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
            lineNumber: 111,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/AnotherBrands2/AnotherBrands2.jsx>",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = AnotherBrands2;

})()),
"[project]/app/fortunewheel/page.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AnotherBrands2$2f$AnotherBrands2$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/AnotherBrands2/AnotherBrands2.jsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
const Wheel = ()=>{
    // const { t } = useTranslation();
    const { t, i18n } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"]();
    // const [iframeWidth, setIframeWidth] = useState(1200);
    // const [iframeHeight, setIframeHeight] = useState(675);
    const [iframeWidth, setIframeWidth] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](1200);
    const [iframeHeight, setIframeHeight] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](1200);
    const updateIframeSize = ()=>{
        const screenWidth = window.innerWidth;
        // Определите свои собственные условия для изменения размеров iframe
        if (screenWidth <= 767) {
            setIframeWidth("100%");
            setIframeHeight("100%");
        } else {
            setIframeWidth(1200);
            setIframeHeight(675);
        }
    };
    // if (typeof document !== "undefined") {
    //   const iframe = document.getElementById("myIframe");
    // }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const urlParams = new URLSearchParams(window.location.href.split("?")[1]);
        const keyword = urlParams.get("keyword");
        console.log("---------", keyword);
        // При монтировании компонента и при изменении размера окна вызывается updateIframeSize
        updateIframeSize();
        window.addEventListener("resize", updateIframeSize);
        return ()=>{
            // Очистка слушателя событий при размонтировании компонента
            window.removeEventListener("resize", updateIframeSize);
        };
    }, []);
    const [ipData, setIpData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [ipDataCode, setIpDataCode] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [newUrl, setNewUrl] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]("");
    const [source, setSource] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]("");
    // const [selectedCountry, setSelectedCountry] = useState(
    //   localStorage.getItem("selectedCountry") || ""
    // );
    // const [selectedCountry, setSelectedCountry] = useState();
    const [selectedCountry, setSelectedCountry] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]();
    // ...
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        // Запрос к API с использованием fetch
        fetch("https://ipapi.co/json/?key=YD0x5VtXrPJkOcFQMjEyQgqjfM6jUcwS4J54b3DI8ztyrFpHzW").then((response)=>response.json()).then((data)=>{
            setIpData(data.country_name);
            setIpDataCode(data.country);
            // const countryFromLocalStorage = localStorage.getItem("selectedCountry");
            console.log("selected 1", selectedCountry);
            console.log("55555555555555555555555", data.country);
            setSelectedCountry(data.country);
            // Выполняйте действия, которые должны произойти после установки selectedCountry
            console.log("selected 2", data.country);
        // Например, вы можете вызвать функцию handleCountryChange здесь, если это необходимо
        // handleCountryChange(data.country);
        }).catch((error)=>{
            console.error("Ошибка при запросе к API:", error);
        });
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
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
    const handleCountryChange = (country)=>{
        setSelectedCountry(country);
    // localStorage.setItem("selectedCountry", country);
    };
    const videos = {
        en: "https://www.youtube.com/embed/GEeEG393PjU?si=uq_PvG10Hx2LBjFV",
        nl: "https://www.youtube.com/embed/suqKh159URk?si=ug0ylBG-ZaPvStHN",
        fi: "https://www.youtube.com/embed/B2dFhVLYI7k?si=w1r2fXk1Dx6cd3qc",
        fr: "https://www.youtube.com/embed/zkCssK44CIU?si=IRNde63jcC9bgXqE",
        de: "https://www.youtube.com/embed/wwyVVF8vgVw?si=JLj38j7s5gRGahxu",
        at: "https://www.youtube.com/embed/wwyVVF8vgVw?si=JLj38j7s5gRGahxu",
        ch: "https://www.youtube.com/embed/wwyVVF8vgVw?si=JLj38j7s5gRGahxu",
        be: "https://www.youtube.com/embed/zkCssK44CIU?si=IRNde63jcC9bgXqE",
        it: "https://www.youtube.com/embed/mH0egvutPl4?si=PPj9JwZ2s4FMmSPL",
        no: "https://www.youtube.com/embed/hEH7tZXiWzE?si=zQ_5hz_0e1Za7qVX",
        se: "https://www.youtube.com/embed/KHaWEYScldc?si=pzI5Mz4onJI1ymDn"
    };
    const selectedVideo = videos[i18n.language] || videos.en;
    // Обработчик события клика на кнопку
    const iframeRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    // Обработчик события клика на кнопку
    const handleScrollClick = ()=>{
        // Проверяем, что iframeRef.current не является null
        if (iframeRef.current) {
            // Используйте метод scrollIntoView для выполнения плавного скролла
            iframeRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };
    console.log("selectedCountry", selectedCountry);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "game",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "container container-game",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                        className: "to-instruction",
                        onClick: handleScrollClick,
                        children: t("How does it work?")
                    }, void 0, false, {
                        fileName: "<[project]/app/fortunewheel/page.tsx>",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "back-to-home",
                        href: `/${newUrl}`,
                        children: t("Main Page")
                    }, void 0, false, {
                        fileName: "<[project]/app/fortunewheel/page.tsx>",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("iframe", {
                        id: "myIframe",
                        src: "https://pickbonus.myawardwallet.com/wheel5/",
                        width: iframeWidth,
                        height: iframeHeight
                    }, void 0, false, {
                        fileName: "<[project]/app/fortunewheel/page.tsx>",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/fortunewheel/page.tsx>",
                lineNumber: 224,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "select-brand container",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                        children: t("select")
                    }, void 0, false, {
                        fileName: "<[project]/app/fortunewheel/page.tsx>",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("select", {
                        id: "countrySelect",
                        value: selectedCountry,
                        // onChange={(e) => setSelectedCountry(e.target.value)}
                        onChange: (e)=>handleCountryChange(e.target.value),
                        children: countryOptions.map((country, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("option", {
                                value: country.code,
                                selected: country.code === ipDataCode,
                                children: [
                                    country.flag,
                                    " ",
                                    country.name
                                ]
                            }, index, true, {
                                fileName: "<[project]/app/fortunewheel/page.tsx>",
                                lineNumber: 247,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "<[project]/app/fortunewheel/page.tsx>",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/fortunewheel/page.tsx>",
                lineNumber: 238,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AnotherBrands2$2f$AnotherBrands2$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                newUrl: newUrl,
                ipDataCode: ipDataCode,
                currentLanguage: i18n.language,
                source: source,
                selectedCountry: selectedCountry,
                selectedCountry: selectedCountry || 'default-value'
            }, void 0, false, {
                fileName: "<[project]/app/fortunewheel/page.tsx>",
                lineNumber: 257,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "yt",
                ref: iframeRef,
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("iframe", {
                    id: "myIframe22",
                    width: iframeWidth,
                    height: iframeHeight,
                    src: selectedVideo,
                    title: "YouTube video player",
                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                    allowFullScreen: true
                }, void 0, false, {
                    fileName: "<[project]/app/fortunewheel/page.tsx>",
                    lineNumber: 266,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/app/fortunewheel/page.tsx>",
                lineNumber: 265,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/fortunewheel/page.tsx>",
        lineNumber: 223,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Wheel;

})()),

};

//# sourceMappingURL=_4625b6._.js.map