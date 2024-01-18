(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_wheel5_page_tsx_a5822e._.js", {

"[project]/app/wheel5/page.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

// fortunewheel/page.tsx
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
// import js from "../../public/offlineclient"
const GamePage = ()=>{
    _s();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        // JavaScript из вашего HTML-файла
        if (location.protocol.substr(0, 4) === 'file') {
            alert("Веб-экспорт не будет работать, пока вы его не загрузите. (При выполнении в протоколе file: браузеры блокируют многие функции из соображений безопасности.)");
        }
        // Дополнительные скрипты из вашего HTML-файла
        const supportCheckScript = document.createElement('script');
        supportCheckScript.src = 'scripts/supportcheck.js';
        document.body.appendChild(supportCheckScript);
        const offlineClientScript = document.createElement('script');
        offlineClientScript.src = '../../public/offlineclient.js';
        offlineClientScript.type = 'module';
        document.body.appendChild(offlineClientScript);
        const mainScript = document.createElement('script');
        mainScript.src = 'scripts/main.js';
        mainScript.type = 'module';
        document.body.appendChild(mainScript);
        const registerSwScript = document.createElement('script');
        registerSwScript.src = 'scripts/register-sw.js';
        registerSwScript.type = 'module';
        document.body.appendChild(registerSwScript);
        // При необходимости, вы можете очистить созданные скрипты при размонтировании компонента
        return ()=>{
            document.body.removeChild(supportCheckScript);
            document.body.removeChild(offlineClientScript);
            document.body.removeChild(mainScript);
            document.body.removeChild(registerSwScript);
        };
    }, []);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                children: "dsdsdsds"
            }, void 0, false, {
                fileName: "<[project]/app/wheel5/page.tsx>",
                lineNumber: 45,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("iframe", {
                id: "myIframe",
                src: "/index.html",
                width: "1200",
                height: "675"
            }, void 0, false, {
                fileName: "<[project]/app/wheel5/page.tsx>",
                lineNumber: 46,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("noscript", {
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    id: "notSupportedWrap",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                            id: "notSupportedTitle",
                            children: "Для просмотра контента требуется JavaScript"
                        }, void 0, false, {
                            fileName: "<[project]/app/wheel5/page.tsx>",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                            className: "notSupportedMessage",
                            children: "Похоже, JavaScript отключен. Пожалуйста, включите его для просмотра этого контента."
                        }, void 0, false, {
                            fileName: "<[project]/app/wheel5/page.tsx>",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/app/wheel5/page.tsx>",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/app/wheel5/page.tsx>",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/wheel5/page.tsx>",
        lineNumber: 44,
        columnNumber: 5
    }, this);
};
_s(GamePage, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = GamePage;
const __TURBOPACK__default__export__ = GamePage;
var _c;
__turbopack_refresh__.register(_c, "GamePage");

})()),
}]);

//# sourceMappingURL=app_wheel5_page_tsx_a5822e._.js.map