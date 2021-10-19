/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/*!\n * css-vars-ponyfill\n * v2.4.7\n * https://jhildenbiddle.github.io/css-vars-ponyfill/\n * (c) 2018-2021 John Hildenbiddle <http://hildenbiddle.com>\n * MIT license\n */\nfunction _extends() {\n    _extends = Object.assign || function(target) {\n        for (var i = 1; i < arguments.length; i++) {\n            var source = arguments[i];\n            for (var key in source) {\n                if (Object.prototype.hasOwnProperty.call(source, key)) {\n                    target[key] = source[key];\n                }\n            }\n        }\n        return target;\n    };\n    return _extends.apply(this, arguments);\n}\n\n/*!\n * get-css-data\n * v2.0.2\n * https://github.com/jhildenbiddle/get-css-data\n * (c) 2018-2021 John Hildenbiddle <http://hildenbiddle.com>\n * MIT license\n */ function getUrls(urls) {\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    var settings = {\n        mimeType: options.mimeType || null,\n        onBeforeSend: options.onBeforeSend || Function.prototype,\n        onSuccess: options.onSuccess || Function.prototype,\n        onError: options.onError || Function.prototype,\n        onComplete: options.onComplete || Function.prototype\n    };\n    var urlArray = Array.isArray(urls) ? urls : [ urls ];\n    var urlQueue = Array.apply(null, Array(urlArray.length)).map((function(x) {\n        return null;\n    }));\n    function isValidCss(text) {\n        var isString = typeof text === \"string\";\n        var isHTML = isString && text.trim().charAt(0) === \"<\";\n        return isString && !isHTML;\n    }\n    function onError(xhr, urlIndex) {\n        settings.onError(xhr, urlArray[urlIndex], urlIndex);\n    }\n    function onSuccess(responseText, urlIndex) {\n        var returnVal = settings.onSuccess(responseText, urlArray[urlIndex], urlIndex);\n        responseText = returnVal === false ? \"\" : returnVal || responseText;\n        urlQueue[urlIndex] = responseText;\n        if (urlQueue.indexOf(null) === -1) {\n            settings.onComplete(urlQueue);\n        }\n    }\n    var parser = document.createElement(\"a\");\n    urlArray.forEach((function(url, i) {\n        parser.setAttribute(\"href\", url);\n        parser.href = String(parser.href);\n        var isIElte9 = Boolean(document.all && !window.atob);\n        var isIElte9CORS = isIElte9 && parser.host.split(\":\")[0] !== location.host.split(\":\")[0];\n        if (isIElte9CORS) {\n            var isSameProtocol = parser.protocol === location.protocol;\n            if (isSameProtocol) {\n                var xdr = new XDomainRequest;\n                xdr.open(\"GET\", url);\n                xdr.timeout = 0;\n                xdr.onprogress = Function.prototype;\n                xdr.ontimeout = Function.prototype;\n                xdr.onload = function() {\n                    var text = xdr.responseText;\n                    if (isValidCss(text)) {\n                        onSuccess(text, i);\n                    } else {\n                        onError(xdr, i);\n                    }\n                };\n                xdr.onerror = function(err) {\n                    onError(xdr, i);\n                };\n                setTimeout((function() {\n                    xdr.send();\n                }), 0);\n            } else {\n                console.warn(\"Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol (\".concat(url, \")\"));\n                onError(null, i);\n            }\n        } else {\n            var xhr = new XMLHttpRequest;\n            xhr.open(\"GET\", url);\n            if (settings.mimeType && xhr.overrideMimeType) {\n                xhr.overrideMimeType(settings.mimeType);\n            }\n            settings.onBeforeSend(xhr, url, i);\n            xhr.onreadystatechange = function() {\n                if (xhr.readyState === 4) {\n                    var text = xhr.responseText;\n                    if (xhr.status < 400 && isValidCss(text)) {\n                        onSuccess(text, i);\n                    } else if (xhr.status === 0 && isValidCss(text)) {\n                        onSuccess(text, i);\n                    } else {\n                        onError(xhr, i);\n                    }\n                }\n            };\n            xhr.send();\n        }\n    }));\n}\n\n/**\n * Gets CSS data from <style> and <link> nodes (including @imports), then\n * returns data in order processed by DOM. Allows specifying nodes to\n * include/exclude and filtering CSS data using RegEx.\n *\n * @preserve\n * @param {object}   [options] The options object\n * @param {object}   [options.rootElement=document] Root element to traverse for\n *                   <link> and <style> nodes.\n * @param {string}   [options.include] CSS selector matching <link> and <style>\n *                   nodes to include\n * @param {string}   [options.exclude] CSS selector matching <link> and <style>\n *                   nodes to exclude\n * @param {object}   [options.filter] Regular expression used to filter node CSS\n *                   data. Each block of CSS data is tested against the filter,\n *                   and only matching data is included.\n * @param {boolean}  [options.skipDisabled=true] Determines if disabled\n *                   stylesheets will be skipped while collecting CSS data.\n * @param {boolean}  [options.useCSSOM=false] Determines if CSS data will be\n *                   collected from a stylesheet's runtime values instead of its\n *                   text content. This is required to get accurate CSS data\n *                   when a stylesheet has been modified using the deleteRule()\n *                   or insertRule() methods because these modifications will\n *                   not be reflected in the stylesheet's text content.\n * @param {function} [options.onBeforeSend] Callback before XHR is sent. Passes\n *                   1) the XHR object, 2) source node reference, and 3) the\n *                   source URL as arguments.\n * @param {function} [options.onSuccess] Callback on each CSS node read. Passes\n *                   1) CSS text, 2) source node reference, and 3) the source\n *                   URL as arguments.\n * @param {function} [options.onError] Callback on each error. Passes 1) the XHR\n *                   object for inspection, 2) soure node reference, and 3) the\n *                   source URL that failed (either a <link> href or an @import)\n *                   as arguments\n * @param {function} [options.onComplete] Callback after all nodes have been\n *                   processed. Passes 1) concatenated CSS text, 2) an array of\n *                   CSS text in DOM order, and 3) an array of nodes in DOM\n *                   order as arguments.\n *\n * @example\n *\n *   getCssData({\n *     rootElement : document,\n *     include     : 'style,link[rel=\"stylesheet\"]',\n *     exclude     : '[href=\"skip.css\"]',\n *     filter      : /red/,\n *     skipDisabled: true,\n *     useCSSOM    : false,\n *     onBeforeSend(xhr, node, url) {\n *       // ...\n *     }\n *     onSuccess(cssText, node, url) {\n *       // ...\n *     }\n *     onError(xhr, node, url) {\n *       // ...\n *     },\n *     onComplete(cssText, cssArray, nodeArray) {\n *       // ...\n *     }\n *   });\n */ function getCssData(options) {\n    var regex = {\n        cssComments: /\\/\\*[\\s\\S]+?\\*\\//g,\n        cssImports: /(?:@import\\s*)(?:url\\(\\s*)?(?:['\"])([^'\"]*)(?:['\"])(?:\\s*\\))?(?:[^;]*;)/g\n    };\n    var settings = {\n        rootElement: options.rootElement || document,\n        include: options.include || 'style,link[rel=\"stylesheet\"]',\n        exclude: options.exclude || null,\n        filter: options.filter || null,\n        skipDisabled: options.skipDisabled !== false,\n        useCSSOM: options.useCSSOM || false,\n        onBeforeSend: options.onBeforeSend || Function.prototype,\n        onSuccess: options.onSuccess || Function.prototype,\n        onError: options.onError || Function.prototype,\n        onComplete: options.onComplete || Function.prototype\n    };\n    var sourceNodes = Array.apply(null, settings.rootElement.querySelectorAll(settings.include)).filter((function(node) {\n        return !matchesSelector(node, settings.exclude);\n    }));\n    var cssArray = Array.apply(null, Array(sourceNodes.length)).map((function(x) {\n        return null;\n    }));\n    function handleComplete() {\n        var isComplete = cssArray.indexOf(null) === -1;\n        if (isComplete) {\n            cssArray.reduce((function(skipIndices, value, i) {\n                if (value === \"\") {\n                    skipIndices.push(i);\n                }\n                return skipIndices;\n            }), []).reverse().forEach((function(skipIndex) {\n                return [ sourceNodes, cssArray ].forEach((function(arr) {\n                    return arr.splice(skipIndex, 1);\n                }));\n            }));\n            var cssText = cssArray.join(\"\");\n            settings.onComplete(cssText, cssArray, sourceNodes);\n        }\n    }\n    function handleSuccess(cssText, cssIndex, node, sourceUrl) {\n        var returnVal = settings.onSuccess(cssText, node, sourceUrl);\n        cssText = returnVal !== undefined && Boolean(returnVal) === false ? \"\" : returnVal || cssText;\n        resolveImports(cssText, node, sourceUrl, (function(resolvedCssText, errorData) {\n            if (cssArray[cssIndex] === null) {\n                errorData.forEach((function(data) {\n                    return settings.onError(data.xhr, node, data.url);\n                }));\n                if (!settings.filter || settings.filter.test(resolvedCssText)) {\n                    cssArray[cssIndex] = resolvedCssText;\n                } else {\n                    cssArray[cssIndex] = \"\";\n                }\n                handleComplete();\n            }\n        }));\n    }\n    function parseImportData(cssText, baseUrl) {\n        var ignoreRules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n        var importData = {};\n        importData.rules = (cssText.replace(regex.cssComments, \"\").match(regex.cssImports) || []).filter((function(rule) {\n            return ignoreRules.indexOf(rule) === -1;\n        }));\n        importData.urls = importData.rules.map((function(rule) {\n            return rule.replace(regex.cssImports, \"$1\");\n        }));\n        importData.absoluteUrls = importData.urls.map((function(url) {\n            return getFullUrl$1(url, baseUrl);\n        }));\n        importData.absoluteRules = importData.rules.map((function(rule, i) {\n            var oldUrl = importData.urls[i];\n            var newUrl = getFullUrl$1(importData.absoluteUrls[i], baseUrl);\n            return rule.replace(oldUrl, newUrl);\n        }));\n        return importData;\n    }\n    function resolveImports(cssText, node, baseUrl, callbackFn) {\n        var __errorData = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];\n        var __errorRules = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];\n        var importData = parseImportData(cssText, baseUrl, __errorRules);\n        if (importData.rules.length) {\n            getUrls(importData.absoluteUrls, {\n                onBeforeSend: function onBeforeSend(xhr, url, urlIndex) {\n                    settings.onBeforeSend(xhr, node, url);\n                },\n                onSuccess: function onSuccess(cssText, url, urlIndex) {\n                    var returnVal = settings.onSuccess(cssText, node, url);\n                    cssText = returnVal === false ? \"\" : returnVal || cssText;\n                    var responseImportData = parseImportData(cssText, url, __errorRules);\n                    responseImportData.rules.forEach((function(rule, i) {\n                        cssText = cssText.replace(rule, responseImportData.absoluteRules[i]);\n                    }));\n                    return cssText;\n                },\n                onError: function onError(xhr, url, urlIndex) {\n                    __errorData.push({\n                        xhr: xhr,\n                        url: url\n                    });\n                    __errorRules.push(importData.rules[urlIndex]);\n                    resolveImports(cssText, node, baseUrl, callbackFn, __errorData, __errorRules);\n                },\n                onComplete: function onComplete(responseArray) {\n                    responseArray.forEach((function(importText, i) {\n                        cssText = cssText.replace(importData.rules[i], importText);\n                    }));\n                    resolveImports(cssText, node, baseUrl, callbackFn, __errorData, __errorRules);\n                }\n            });\n        } else {\n            callbackFn(cssText, __errorData);\n        }\n    }\n    if (sourceNodes.length) {\n        sourceNodes.forEach((function(node, i) {\n            var linkHref = node.getAttribute(\"href\");\n            var linkRel = node.getAttribute(\"rel\");\n            var isLink = node.nodeName.toLowerCase() === \"link\" && linkHref && linkRel && linkRel.toLowerCase().indexOf(\"stylesheet\") !== -1;\n            var isSkip = settings.skipDisabled === false ? false : node.disabled;\n            var isStyle = node.nodeName.toLowerCase() === \"style\";\n            if (isLink && !isSkip) {\n                getUrls(linkHref, {\n                    mimeType: \"text/css\",\n                    onBeforeSend: function onBeforeSend(xhr, url, urlIndex) {\n                        settings.onBeforeSend(xhr, node, url);\n                    },\n                    onSuccess: function onSuccess(cssText, url, urlIndex) {\n                        var sourceUrl = getFullUrl$1(linkHref);\n                        handleSuccess(cssText, i, node, sourceUrl);\n                    },\n                    onError: function onError(xhr, url, urlIndex) {\n                        cssArray[i] = \"\";\n                        settings.onError(xhr, node, url);\n                        handleComplete();\n                    }\n                });\n            } else if (isStyle && !isSkip) {\n                var cssText = node.textContent;\n                if (settings.useCSSOM) {\n                    cssText = Array.apply(null, node.sheet.cssRules).map((function(rule) {\n                        return rule.cssText;\n                    })).join(\"\");\n                }\n                handleSuccess(cssText, i, node, location.href);\n            } else {\n                cssArray[i] = \"\";\n                handleComplete();\n            }\n        }));\n    } else {\n        settings.onComplete(\"\", []);\n    }\n}\n\nfunction getFullUrl$1(url, base) {\n    var d = document.implementation.createHTMLDocument(\"\");\n    var b = d.createElement(\"base\");\n    var a = d.createElement(\"a\");\n    d.head.appendChild(b);\n    d.body.appendChild(a);\n    b.href = base || document.baseURI || (document.querySelector(\"base\") || {}).href || location.href;\n    a.href = url;\n    return a.href;\n}\n\nfunction matchesSelector(elm, selector) {\n    var matches = elm.matches || elm.matchesSelector || elm.webkitMatchesSelector || elm.mozMatchesSelector || elm.msMatchesSelector || elm.oMatchesSelector;\n    return matches.call(elm, selector);\n}\n\nvar balancedMatch = balanced;\n\nfunction balanced(a, b, str) {\n    if (a instanceof RegExp) a = maybeMatch(a, str);\n    if (b instanceof RegExp) b = maybeMatch(b, str);\n    var r = range(a, b, str);\n    return r && {\n        start: r[0],\n        end: r[1],\n        pre: str.slice(0, r[0]),\n        body: str.slice(r[0] + a.length, r[1]),\n        post: str.slice(r[1] + b.length)\n    };\n}\n\nfunction maybeMatch(reg, str) {\n    var m = str.match(reg);\n    return m ? m[0] : null;\n}\n\nbalanced.range = range;\n\nfunction range(a, b, str) {\n    var begs, beg, left, right, result;\n    var ai = str.indexOf(a);\n    var bi = str.indexOf(b, ai + 1);\n    var i = ai;\n    if (ai >= 0 && bi > 0) {\n        if (a === b) {\n            return [ ai, bi ];\n        }\n        begs = [];\n        left = str.length;\n        while (i >= 0 && !result) {\n            if (i == ai) {\n                begs.push(i);\n                ai = str.indexOf(a, i + 1);\n            } else if (begs.length == 1) {\n                result = [ begs.pop(), bi ];\n            } else {\n                beg = begs.pop();\n                if (beg < left) {\n                    left = beg;\n                    right = bi;\n                }\n                bi = str.indexOf(b, i + 1);\n            }\n            i = ai < bi && ai >= 0 ? ai : bi;\n        }\n        if (begs.length) {\n            result = [ left, right ];\n        }\n    }\n    return result;\n}\n\nfunction parseCss(css) {\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    var defaults = {\n        preserveStatic: true,\n        removeComments: false\n    };\n    var settings = _extends({}, defaults, options);\n    var errors = [];\n    function error(msg) {\n        throw new Error(\"CSS parse error: \".concat(msg));\n    }\n    function match(re) {\n        var m = re.exec(css);\n        if (m) {\n            css = css.slice(m[0].length);\n            return m;\n        }\n    }\n    function open() {\n        return match(/^{\\s*/);\n    }\n    function close() {\n        return match(/^}/);\n    }\n    function whitespace() {\n        match(/^\\s*/);\n    }\n    function comment() {\n        whitespace();\n        if (css[0] !== \"/\" || css[1] !== \"*\") {\n            return;\n        }\n        var i = 2;\n        while (css[i] && (css[i] !== \"*\" || css[i + 1] !== \"/\")) {\n            i++;\n        }\n        if (!css[i]) {\n            return error(\"end of comment is missing\");\n        }\n        var str = css.slice(2, i);\n        css = css.slice(i + 2);\n        return {\n            type: \"comment\",\n            comment: str\n        };\n    }\n    function comments() {\n        var cmnts = [];\n        var c;\n        while (c = comment()) {\n            cmnts.push(c);\n        }\n        return settings.removeComments ? [] : cmnts;\n    }\n    function selector() {\n        whitespace();\n        while (css[0] === \"}\") {\n            error(\"extra closing bracket\");\n        }\n        var m = match(/^((\"(?:\\\\\"|[^\"])*\"|'(?:\\\\'|[^'])*'|[^{])+)/);\n        if (m) {\n            var _selector = m[0].trim();\n            var selectorItems;\n            var hasComment = /\\/\\*/.test(_selector);\n            if (hasComment) {\n                _selector = _selector.replace(/\\/\\*([^*]|[\\r\\n]|(\\*+([^*/]|[\\r\\n])))*\\*\\/+/g, \"\");\n            }\n            var hasCommaInQuotes = /[\"']\\w*,\\w*[\"']/.test(_selector);\n            if (hasCommaInQuotes) {\n                _selector = _selector.replace(/\"(?:\\\\\"|[^\"])*\"|'(?:\\\\'|[^'])*'/g, (function(m) {\n                    return m.replace(/,/g, \"‌\");\n                }));\n            }\n            var hasMultipleSelectors = /,/.test(_selector);\n            if (hasMultipleSelectors) {\n                selectorItems = _selector.split(/\\s*(?![^(]*\\)),\\s*/);\n            } else {\n                selectorItems = [ _selector ];\n            }\n            if (hasCommaInQuotes) {\n                selectorItems = selectorItems.map((function(s) {\n                    return s.replace(/\\u200C/g, \",\");\n                }));\n            }\n            return selectorItems;\n        }\n    }\n    function declaration() {\n        if (css[0] === \"@\") {\n            return at_rule();\n        }\n        match(/^([;\\s]*)+/);\n        var comment_regexp = /\\/\\*[^*]*\\*+([^/*][^*]*\\*+)*\\//g;\n        var prop = match(/^(\\*?[-#/*\\\\\\w.]+(\\[[0-9a-z_-]+\\])?)\\s*/);\n        if (!prop) {\n            return;\n        }\n        prop = prop[0].trim();\n        if (!match(/^:\\s*/)) {\n            return error(\"property missing ':'\");\n        }\n        var val = match(/^((?:\\/\\*.*?\\*\\/|'(?:\\\\'|.)*?'|\"(?:\\\\\"|.)*?\"|\\((\\s*'(?:\\\\'|.)*?'|\"(?:\\\\\"|.)*?\"|[^)]*?)\\s*\\)|[^};])+)/);\n        var ret = {\n            type: \"declaration\",\n            property: prop.replace(comment_regexp, \"\"),\n            value: val ? val[0].replace(comment_regexp, \"\").trim() : \"\"\n        };\n        match(/^[;\\s]*/);\n        return ret;\n    }\n    function declarations() {\n        if (!open()) {\n            return error(\"missing '{'\");\n        }\n        var d;\n        var decls = comments();\n        while (d = declaration()) {\n            decls.push(d);\n            decls = decls.concat(comments());\n        }\n        if (!close()) {\n            return error(\"missing '}'\");\n        }\n        return decls;\n    }\n    function keyframe() {\n        whitespace();\n        var vals = [];\n        var m;\n        while (m = match(/^((\\d+\\.\\d+|\\.\\d+|\\d+)%?|[a-z]+)\\s*/)) {\n            vals.push(m[1]);\n            match(/^,\\s*/);\n        }\n        if (vals.length) {\n            return {\n                type: \"keyframe\",\n                values: vals,\n                declarations: declarations()\n            };\n        }\n    }\n    function at_keyframes() {\n        var m = match(/^@([-\\w]+)?keyframes\\s*/);\n        if (!m) {\n            return;\n        }\n        var vendor = m[1];\n        m = match(/^([-\\w]+)\\s*/);\n        if (!m) {\n            return error(\"@keyframes missing name\");\n        }\n        var name = m[1];\n        if (!open()) {\n            return error(\"@keyframes missing '{'\");\n        }\n        var frame;\n        var frames = comments();\n        while (frame = keyframe()) {\n            frames.push(frame);\n            frames = frames.concat(comments());\n        }\n        if (!close()) {\n            return error(\"@keyframes missing '}'\");\n        }\n        return {\n            type: \"keyframes\",\n            name: name,\n            vendor: vendor,\n            keyframes: frames\n        };\n    }\n    function at_page() {\n        var m = match(/^@page */);\n        if (m) {\n            var sel = selector() || [];\n            return {\n                type: \"page\",\n                selectors: sel,\n                declarations: declarations()\n            };\n        }\n    }\n    function at_page_margin_box() {\n        var m = match(/@(top|bottom|left|right)-(left|center|right|top|middle|bottom)-?(corner)?\\s*/);\n        if (m) {\n            var name = \"\".concat(m[1], \"-\").concat(m[2]) + (m[3] ? \"-\".concat(m[3]) : \"\");\n            return {\n                type: \"page-margin-box\",\n                name: name,\n                declarations: declarations()\n            };\n        }\n    }\n    function at_fontface() {\n        var m = match(/^@font-face\\s*/);\n        if (m) {\n            return {\n                type: \"font-face\",\n                declarations: declarations()\n            };\n        }\n    }\n    function at_supports() {\n        var m = match(/^@supports *([^{]+)/);\n        if (m) {\n            return {\n                type: \"supports\",\n                supports: m[1].trim(),\n                rules: rules()\n            };\n        }\n    }\n    function at_host() {\n        var m = match(/^@host\\s*/);\n        if (m) {\n            return {\n                type: \"host\",\n                rules: rules()\n            };\n        }\n    }\n    function at_media() {\n        var m = match(/^@media([^{]+)*/);\n        if (m) {\n            return {\n                type: \"media\",\n                media: (m[1] || \"\").trim(),\n                rules: rules()\n            };\n        }\n    }\n    function at_custom_m() {\n        var m = match(/^@custom-media\\s+(--[^\\s]+)\\s*([^{;]+);/);\n        if (m) {\n            return {\n                type: \"custom-media\",\n                name: m[1].trim(),\n                media: m[2].trim()\n            };\n        }\n    }\n    function at_document() {\n        var m = match(/^@([-\\w]+)?document *([^{]+)/);\n        if (m) {\n            return {\n                type: \"document\",\n                document: m[2].trim(),\n                vendor: m[1] ? m[1].trim() : null,\n                rules: rules()\n            };\n        }\n    }\n    function at_x() {\n        var m = match(/^@(import|charset|namespace)\\s*([^;]+);/);\n        if (m) {\n            return {\n                type: m[1],\n                name: m[2].trim()\n            };\n        }\n    }\n    function at_rule() {\n        whitespace();\n        if (css[0] === \"@\") {\n            var ret = at_x() || at_fontface() || at_media() || at_keyframes() || at_supports() || at_document() || at_custom_m() || at_host() || at_page() || at_page_margin_box();\n            if (ret && !settings.preserveStatic) {\n                var hasVarFunc = false;\n                if (ret.declarations) {\n                    hasVarFunc = ret.declarations.some((function(decl) {\n                        return /var\\(/.test(decl.value);\n                    }));\n                } else {\n                    var arr = ret.keyframes || ret.rules || [];\n                    hasVarFunc = arr.some((function(obj) {\n                        return (obj.declarations || []).some((function(decl) {\n                            return /var\\(/.test(decl.value);\n                        }));\n                    }));\n                }\n                return hasVarFunc ? ret : {};\n            }\n            return ret;\n        }\n    }\n    function rule() {\n        if (!settings.preserveStatic) {\n            var balancedMatch$1 = balancedMatch(\"{\", \"}\", css);\n            if (balancedMatch$1) {\n                var hasVarDecl = /:(?:root|host)(?![.:#(])/.test(balancedMatch$1.pre) && /--\\S*\\s*:/.test(balancedMatch$1.body);\n                var hasVarFunc = /var\\(/.test(balancedMatch$1.body);\n                if (!hasVarDecl && !hasVarFunc) {\n                    css = css.slice(balancedMatch$1.end + 1);\n                    return {};\n                }\n            }\n        }\n        var sel = selector() || [];\n        var decls = settings.preserveStatic ? declarations() : declarations().filter((function(decl) {\n            var hasVarDecl = sel.some((function(s) {\n                return /:(?:root|host)(?![.:#(])/.test(s);\n            })) && /^--\\S/.test(decl.property);\n            var hasVarFunc = /var\\(/.test(decl.value);\n            return hasVarDecl || hasVarFunc;\n        }));\n        if (!sel.length) {\n            error(\"selector missing\");\n        }\n        return {\n            type: \"rule\",\n            selectors: sel,\n            declarations: decls\n        };\n    }\n    function rules(core) {\n        if (!core && !open()) {\n            return error(\"missing '{'\");\n        }\n        var node;\n        var rules = comments();\n        while (css.length && (core || css[0] !== \"}\") && (node = at_rule() || rule())) {\n            if (node.type) {\n                rules.push(node);\n            }\n            rules = rules.concat(comments());\n        }\n        if (!core && !close()) {\n            return error(\"missing '}'\");\n        }\n        return rules;\n    }\n    return {\n        type: \"stylesheet\",\n        stylesheet: {\n            rules: rules(true),\n            errors: errors\n        }\n    };\n}\n\nfunction parseVars(cssData) {\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    var defaults = {\n        parseHost: false,\n        store: {},\n        onWarning: function onWarning() {}\n    };\n    var settings = _extends({}, defaults, options);\n    var reVarDeclSelectors = new RegExp(\":\".concat(settings.parseHost ? \"host\" : \"root\", \"$\"));\n    if (typeof cssData === \"string\") {\n        cssData = parseCss(cssData, settings);\n    }\n    cssData.stylesheet.rules.forEach((function(rule) {\n        if (rule.type !== \"rule\" || !rule.selectors.some((function(s) {\n            return reVarDeclSelectors.test(s);\n        }))) {\n            return;\n        }\n        rule.declarations.forEach((function(decl, i) {\n            var prop = decl.property;\n            var value = decl.value;\n            if (prop && prop.indexOf(\"--\") === 0) {\n                settings.store[prop] = value;\n            }\n        }));\n    }));\n    return settings.store;\n}\n\nfunction stringifyCss(tree) {\n    var delim = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"\";\n    var cb = arguments.length > 2 ? arguments[2] : undefined;\n    var renderMethods = {\n        charset: function charset(node) {\n            return \"@charset \" + node.name + \";\";\n        },\n        comment: function comment(node) {\n            return node.comment.indexOf(\"__CSSVARSPONYFILL\") === 0 ? \"/*\" + node.comment + \"*/\" : \"\";\n        },\n        \"custom-media\": function customMedia(node) {\n            return \"@custom-media \" + node.name + \" \" + node.media + \";\";\n        },\n        declaration: function declaration(node) {\n            return node.property + \":\" + node.value + \";\";\n        },\n        document: function document(node) {\n            return \"@\" + (node.vendor || \"\") + \"document \" + node.document + \"{\" + visit(node.rules) + \"}\";\n        },\n        \"font-face\": function fontFace(node) {\n            return \"@font-face\" + \"{\" + visit(node.declarations) + \"}\";\n        },\n        host: function host(node) {\n            return \"@host\" + \"{\" + visit(node.rules) + \"}\";\n        },\n        import: function _import(node) {\n            return \"@import \" + node.name + \";\";\n        },\n        keyframe: function keyframe(node) {\n            return node.values.join(\",\") + \"{\" + visit(node.declarations) + \"}\";\n        },\n        keyframes: function keyframes(node) {\n            return \"@\" + (node.vendor || \"\") + \"keyframes \" + node.name + \"{\" + visit(node.keyframes) + \"}\";\n        },\n        media: function media(node) {\n            return \"@media \" + node.media + \"{\" + visit(node.rules) + \"}\";\n        },\n        namespace: function namespace(node) {\n            return \"@namespace \" + node.name + \";\";\n        },\n        page: function page(node) {\n            return \"@page \" + (node.selectors.length ? node.selectors.join(\", \") : \"\") + \"{\" + visit(node.declarations) + \"}\";\n        },\n        \"page-margin-box\": function pageMarginBox(node) {\n            return \"@\" + node.name + \"{\" + visit(node.declarations) + \"}\";\n        },\n        rule: function rule(node) {\n            var decls = node.declarations;\n            if (decls.length) {\n                return node.selectors.join(\",\") + \"{\" + visit(decls) + \"}\";\n            }\n        },\n        supports: function supports(node) {\n            return \"@supports \" + node.supports + \"{\" + visit(node.rules) + \"}\";\n        }\n    };\n    function visit(nodes) {\n        var buf = \"\";\n        for (var i = 0; i < nodes.length; i++) {\n            var n = nodes[i];\n            if (cb) {\n                cb(n);\n            }\n            var txt = renderMethods[n.type](n);\n            if (txt) {\n                buf += txt;\n                if (txt.length && n.selectors) {\n                    buf += delim;\n                }\n            }\n        }\n        return buf;\n    }\n    return visit(tree.stylesheet.rules);\n}\n\nfunction walkCss(node, fn) {\n    node.rules.forEach((function(rule) {\n        if (rule.rules) {\n            walkCss(rule, fn);\n            return;\n        }\n        if (rule.keyframes) {\n            rule.keyframes.forEach((function(keyframe) {\n                if (keyframe.type === \"keyframe\") {\n                    fn(keyframe.declarations, rule);\n                }\n            }));\n            return;\n        }\n        if (!rule.declarations) {\n            return;\n        }\n        fn(rule.declarations, node);\n    }));\n}\n\nvar VAR_PROP_IDENTIFIER = \"--\";\n\nvar VAR_FUNC_IDENTIFIER = \"var\";\n\nfunction transformCss(cssData) {\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    var defaults = {\n        preserveStatic: true,\n        preserveVars: false,\n        variables: {},\n        onWarning: function onWarning() {}\n    };\n    var settings = _extends({}, defaults, options);\n    if (typeof cssData === \"string\") {\n        cssData = parseCss(cssData, settings);\n    }\n    walkCss(cssData.stylesheet, (function(declarations, node) {\n        for (var i = 0; i < declarations.length; i++) {\n            var decl = declarations[i];\n            var type = decl.type;\n            var prop = decl.property;\n            var value = decl.value;\n            if (type !== \"declaration\") {\n                continue;\n            }\n            if (!settings.preserveVars && prop && prop.indexOf(VAR_PROP_IDENTIFIER) === 0) {\n                declarations.splice(i, 1);\n                i--;\n                continue;\n            }\n            if (value.indexOf(VAR_FUNC_IDENTIFIER + \"(\") !== -1) {\n                var resolvedValue = resolveValue(value, settings);\n                if (resolvedValue !== decl.value) {\n                    resolvedValue = fixNestedCalc(resolvedValue);\n                    if (!settings.preserveVars) {\n                        decl.value = resolvedValue;\n                    } else {\n                        declarations.splice(i, 0, {\n                            type: type,\n                            property: prop,\n                            value: resolvedValue\n                        });\n                        i++;\n                    }\n                }\n            }\n        }\n    }));\n    return stringifyCss(cssData);\n}\n\nfunction fixNestedCalc(value) {\n    var reCalcVal = /calc\\(([^)]+)\\)/g;\n    (value.match(reCalcVal) || []).forEach((function(match) {\n        var newVal = \"calc\".concat(match.split(\"calc\").join(\"\"));\n        value = value.replace(match, newVal);\n    }));\n    return value;\n}\n\nfunction resolveValue(value) {\n    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    var __recursiveFallback = arguments.length > 2 ? arguments[2] : undefined;\n    if (value.indexOf(\"var(\") === -1) {\n        return value;\n    }\n    var valueData = balancedMatch(\"(\", \")\", value);\n    function resolveFunc(value) {\n        var name = value.split(\",\")[0].replace(/[\\s\\n\\t]/g, \"\");\n        var fallback = (value.match(/(?:\\s*,\\s*){1}(.*)?/) || [])[1];\n        var match = Object.prototype.hasOwnProperty.call(settings.variables, name) ? String(settings.variables[name]) : undefined;\n        var replacement = match || (fallback ? String(fallback) : undefined);\n        var unresolvedFallback = __recursiveFallback || value;\n        if (!match) {\n            settings.onWarning('variable \"'.concat(name, '\" is undefined'));\n        }\n        if (replacement && replacement !== \"undefined\" && replacement.length > 0) {\n            return resolveValue(replacement, settings, unresolvedFallback);\n        } else {\n            return \"var(\".concat(unresolvedFallback, \")\");\n        }\n    }\n    if (!valueData) {\n        if (value.indexOf(\"var(\") !== -1) {\n            settings.onWarning('missing closing \")\" in the value \"'.concat(value, '\"'));\n        }\n        return value;\n    } else if (valueData.pre.slice(-3) === \"var\") {\n        var isEmptyVarFunc = valueData.body.trim().length === 0;\n        if (isEmptyVarFunc) {\n            settings.onWarning(\"var() must contain a non-whitespace string\");\n            return value;\n        } else {\n            return valueData.pre.slice(0, -3) + resolveFunc(valueData.body) + resolveValue(valueData.post, settings);\n        }\n    } else {\n        return valueData.pre + \"(\".concat(resolveValue(valueData.body, settings), \")\") + resolveValue(valueData.post, settings);\n    }\n}\n\nvar isBrowser = typeof window !== \"undefined\";\n\nvar isNativeSupport = isBrowser && window.CSS && window.CSS.supports && window.CSS.supports(\"(--a: 0)\");\n\nvar counters = {\n    group: 0,\n    job: 0\n};\n\nvar defaults = {\n    rootElement: isBrowser ? document : null,\n    shadowDOM: false,\n    include: \"style,link[rel=stylesheet]\",\n    exclude: \"\",\n    variables: {},\n    onlyLegacy: true,\n    preserveStatic: true,\n    preserveVars: false,\n    silent: false,\n    updateDOM: true,\n    updateURLs: true,\n    watch: null,\n    onBeforeSend: function onBeforeSend() {},\n    onError: function onError() {},\n    onWarning: function onWarning() {},\n    onSuccess: function onSuccess() {},\n    onComplete: function onComplete() {},\n    onFinally: function onFinally() {}\n};\n\nvar regex = {\n    cssComments: /\\/\\*[\\s\\S]+?\\*\\//g,\n    cssKeyframes: /@(?:-\\w*-)?keyframes/,\n    cssMediaQueries: /@media[^{]+\\{([\\s\\S]+?})\\s*}/g,\n    cssUrls: /url\\((?!['\"]?(?:data|http|\\/\\/):)['\"]?([^'\")]*)['\"]?\\)/g,\n    cssVarDeclRules: /(?::(?:root|host)(?![.:#(])[\\s,]*[^{]*{\\s*[^}]*})/g,\n    cssVarDecls: /(?:[\\s;]*)(-{2}\\w[\\w-]*)(?:\\s*:\\s*)([^;]*);/g,\n    cssVarFunc: /var\\(\\s*--[\\w-]/,\n    cssVars: /(?:(?::(?:root|host)(?![.:#(])[\\s,]*[^{]*{\\s*[^;]*;*\\s*)|(?:var\\(\\s*))(--[^:)]+)(?:\\s*[:)])/\n};\n\nvar variableStore = {\n    dom: {},\n    job: {},\n    user: {}\n};\n\nvar cssVarsIsRunning = false;\n\nvar cssVarsObserver = null;\n\nvar cssVarsSrcNodeCount = 0;\n\nvar debounceTimer = null;\n\nvar isShadowDOMReady = false;\n\n/**\n * Fetches, parses, and transforms CSS custom properties from specified\n * <style> and <link> elements into static values, then appends a new <style>\n * element with static values to the DOM to provide CSS custom property\n * compatibility for legacy browsers. Also provides a single interface for\n * live updates of runtime values in both modern and legacy browsers.\n *\n * @preserve\n * @param {object}   [options] Options object\n * @param {object}   [options.rootElement=document] Root element to traverse for\n *                   <link> and <style> nodes\n * @param {boolean}  [options.shadowDOM=false] Determines if shadow DOM <link>\n *                   and <style> nodes will be processed.\n * @param {string}   [options.include=\"style,link[rel=stylesheet]\"] CSS selector\n *                   matching <link re=\"stylesheet\"> and <style> nodes to\n *                   process\n * @param {string}   [options.exclude] CSS selector matching <link\n *                   rel=\"stylehseet\"> and <style> nodes to exclude from those\n *                   matches by options.include\n * @param {object}   [options.variables] A map of custom property name/value\n *                   pairs. Property names can omit or include the leading\n *                   double-hyphen (—), and values specified will override\n *                   previous values\n * @param {boolean}  [options.onlyLegacy=true] Determines if the ponyfill will\n *                   only generate legacy-compatible CSS in browsers that lack\n *                   native support (i.e., legacy browsers)\n * @param {boolean}  [options.preserveStatic=true] Determines if CSS\n *                   declarations that do not reference a custom property will\n *                   be preserved in the transformed CSS\n * @param {boolean}  [options.preserveVars=false] Determines if CSS custom\n *                   property declarations will be preserved in the transformed\n *                   CSS\n * @param {boolean}  [options.silent=false] Determines if warning and error\n *                   messages will be displayed on the console\n * @param {boolean}  [options.updateDOM=true] Determines if the ponyfill will\n *                   update the DOM after processing CSS custom properties\n * @param {boolean}  [options.updateURLs=true] Determines if relative url()\n *                   paths will be converted to absolute urls in external CSS\n * @param {boolean}  [options.watch=false] Determines if a MutationObserver will\n *                   be created that will execute the ponyfill when a <link> or\n *                   <style> DOM mutation is observed\n * @param {function} [options.onBeforeSend] Callback before XHR is sent. Passes\n *                   1) the XHR object, 2) source node reference, and 3) the\n *                   source URL as arguments\n * @param {function} [options.onError] Callback after a CSS parsing error has\n *                   occurred or an XHR request has failed. Passes 1) an error\n *                   message, and 2) source node reference, 3) xhr, and 4 url as\n *                   arguments.\n * @param {function} [options.onWarning] Callback after each CSS parsing warning\n *                   has occurred. Passes 1) a warning message as an argument.\n * @param {function} [options.onSuccess] Callback after CSS data has been\n *                   collected from each node and before CSS custom properties\n *                   have been transformed. Allows modifying the CSS data before\n *                   it is transformed by returning any string value (or false\n *                   to skip). Passes 1) CSS text, 2) source node reference, and\n *                   3) the source URL as arguments.\n * @param {function} [options.onComplete] Callback after all CSS has been\n *                   processed, legacy-compatible CSS has been generated, and\n *                   (optionally) the DOM has been updated. Passes 1) a CSS\n *                   string with CSS variable values resolved, 2) an array of\n *                   output <style> node references that have been appended to\n *                   the DOM, 3) an object containing all custom properies names\n *                   and values, and 4) the ponyfill execution time in\n *                   milliseconds.\n * @param {function} [options.onFinally] Callback in modern and legacy browsers\n *                   after the ponyfill has finished all tasks. Passes 1) a\n *                   boolean indicating if the last ponyfill call resulted in a\n *                   style change, 2) a boolean indicating if the current\n *                   browser provides native support for CSS custom properties,\n *                   and 3) the ponyfill execution time in milliseconds.\n * @example\n *\n *   cssVars({\n *     rootElement   : document,\n *     shadowDOM     : false,\n *     include       : 'style,link[rel=\"stylesheet\"]',\n *     exclude       : '',\n *     variables     : {},\n *     onlyLegacy    : true,\n *     preserveStatic: true,\n *     preserveVars  : false,\n *     silent        : false,\n *     updateDOM     : true,\n *     updateURLs    : true,\n *     watch         : false,\n *     onBeforeSend(xhr, node, url) {},\n *     onError(message, node, xhr, url) {},\n *     onWarning(message) {},\n *     onSuccess(cssText, node, url) {},\n *     onComplete(cssText, styleNode, cssVariables, benchmark) {},\n *     onFinally(hasChanged, hasNativeSupport, benchmark)\n *   });\n */ function cssVars() {\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    var msgPrefix = \"cssVars(): \";\n    var settings = _extends({}, defaults, options);\n    function handleError(message, sourceNode, xhr, url) {\n        if (!settings.silent && window.console) {\n            console.error(\"\".concat(msgPrefix).concat(message, \"\\n\"), sourceNode);\n        }\n        settings.onError(message, sourceNode, xhr, url);\n    }\n    function handleWarning(message) {\n        if (!settings.silent && window.console) {\n            console.warn(\"\".concat(msgPrefix).concat(message));\n        }\n        settings.onWarning(message);\n    }\n    function handleFinally(hasChanged) {\n        settings.onFinally(Boolean(hasChanged), isNativeSupport, getTimeStamp() - settings.__benchmark);\n    }\n    if (!isBrowser) {\n        return;\n    }\n    if (settings.watch) {\n        settings.watch = defaults.watch;\n        addMutationObserver(settings);\n        cssVars(settings);\n        return;\n    } else if (settings.watch === false && cssVarsObserver) {\n        cssVarsObserver.disconnect();\n        cssVarsObserver = null;\n    }\n    if (!settings.__benchmark) {\n        if (cssVarsIsRunning === settings.rootElement) {\n            cssVarsDebounced(options);\n            return;\n        }\n        var srcNodes = [].slice.call(settings.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars=\"out\"])'));\n        settings.__benchmark = getTimeStamp();\n        settings.exclude = [ cssVarsObserver ? '[data-cssvars]:not([data-cssvars=\"\"])' : '[data-cssvars=\"out\"]', \"link[disabled]:not([data-cssvars])\", settings.exclude ].filter((function(selector) {\n            return selector;\n        })).join(\",\");\n        settings.variables = fixVarNames(settings.variables);\n        srcNodes.forEach((function(srcNode) {\n            var hasStyleCache = srcNode.nodeName.toLowerCase() === \"style\" && srcNode.__cssVars.text;\n            var hasStyleChanged = hasStyleCache && srcNode.textContent !== srcNode.__cssVars.text;\n            if (hasStyleCache && hasStyleChanged) {\n                srcNode.sheet && (srcNode.sheet.disabled = false);\n                srcNode.setAttribute(\"data-cssvars\", \"\");\n            }\n        }));\n        if (!cssVarsObserver) {\n            var outNodes = [].slice.call(settings.rootElement.querySelectorAll('[data-cssvars=\"out\"]'));\n            outNodes.forEach((function(outNode) {\n                var dataGroup = outNode.getAttribute(\"data-cssvars-group\");\n                var srcNode = dataGroup ? settings.rootElement.querySelector('[data-cssvars=\"src\"][data-cssvars-group=\"'.concat(dataGroup, '\"]')) : null;\n                if (!srcNode) {\n                    outNode.parentNode.removeChild(outNode);\n                }\n            }));\n            if (cssVarsSrcNodeCount && srcNodes.length < cssVarsSrcNodeCount) {\n                cssVarsSrcNodeCount = srcNodes.length;\n                variableStore.dom = {};\n            }\n        }\n    }\n    if (document.readyState !== \"loading\") {\n        if (isNativeSupport && settings.onlyLegacy) {\n            var hasVarChange = false;\n            if (settings.updateDOM) {\n                var targetElm = settings.rootElement.host || (settings.rootElement === document ? document.documentElement : settings.rootElement);\n                Object.keys(settings.variables).forEach((function(key) {\n                    var varValue = settings.variables[key];\n                    hasVarChange = hasVarChange || varValue !== getComputedStyle(targetElm).getPropertyValue(key);\n                    targetElm.style.setProperty(key, varValue);\n                }));\n            }\n            handleFinally(hasVarChange);\n        } else if (!isShadowDOMReady && (settings.shadowDOM || settings.rootElement.shadowRoot || settings.rootElement.host)) {\n            getCssData({\n                rootElement: defaults.rootElement,\n                include: defaults.include,\n                exclude: settings.exclude,\n                skipDisabled: false,\n                onSuccess: function onSuccess(cssText, node, url) {\n                    var isUserDisabled = (node.sheet || {}).disabled && !node.__cssVars;\n                    if (isUserDisabled) {\n                        return false;\n                    }\n                    cssText = cssText.replace(regex.cssComments, \"\").replace(regex.cssMediaQueries, \"\");\n                    cssText = (cssText.match(regex.cssVarDeclRules) || []).join(\"\");\n                    return cssText || false;\n                },\n                onComplete: function onComplete(cssText, cssArray, nodeArray) {\n                    parseVars(cssText, {\n                        store: variableStore.dom,\n                        onWarning: handleWarning\n                    });\n                    isShadowDOMReady = true;\n                    cssVars(settings);\n                }\n            });\n        } else {\n            cssVarsIsRunning = settings.rootElement;\n            getCssData({\n                rootElement: settings.rootElement,\n                include: settings.include,\n                exclude: settings.exclude,\n                skipDisabled: false,\n                onBeforeSend: settings.onBeforeSend,\n                onError: function onError(xhr, node, url) {\n                    var responseUrl = xhr.responseURL || getFullUrl(url, location.href);\n                    var statusText = xhr.statusText ? \"(\".concat(xhr.statusText, \")\") : \"Unspecified Error\" + (xhr.status === 0 ? \" (possibly CORS related)\" : \"\");\n                    var errorMsg = \"CSS XHR Error: \".concat(responseUrl, \" \").concat(xhr.status, \" \").concat(statusText);\n                    handleError(errorMsg, node, xhr, responseUrl);\n                },\n                onSuccess: function onSuccess(cssText, node, url) {\n                    var isUserDisabled = (node.sheet || {}).disabled && !node.__cssVars;\n                    if (isUserDisabled) {\n                        return false;\n                    }\n                    var isLink = node.nodeName.toLowerCase() === \"link\";\n                    var isStyleImport = node.nodeName.toLowerCase() === \"style\" && cssText !== node.textContent;\n                    var returnVal = settings.onSuccess(cssText, node, url);\n                    cssText = returnVal !== undefined && Boolean(returnVal) === false ? \"\" : returnVal || cssText;\n                    if (settings.updateURLs && (isLink || isStyleImport)) {\n                        cssText = fixRelativeCssUrls(cssText, url);\n                    }\n                    return cssText;\n                },\n                onComplete: function onComplete(cssText, cssArray) {\n                    var nodeArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n                    var currentVars = _extends({}, variableStore.dom, variableStore.user);\n                    var hasVarChange = false;\n                    variableStore.job = {};\n                    nodeArray.forEach((function(node, i) {\n                        var nodeCSS = cssArray[i];\n                        node.__cssVars = node.__cssVars || {};\n                        node.__cssVars.text = nodeCSS;\n                        if (regex.cssVars.test(nodeCSS)) {\n                            try {\n                                var cssTree = parseCss(nodeCSS, {\n                                    preserveStatic: settings.preserveStatic,\n                                    removeComments: true\n                                });\n                                parseVars(cssTree, {\n                                    parseHost: Boolean(settings.rootElement.host),\n                                    store: variableStore.dom,\n                                    onWarning: handleWarning\n                                });\n                                node.__cssVars.tree = cssTree;\n                            } catch (err) {\n                                handleError(err.message, node);\n                            }\n                        }\n                    }));\n                    _extends(variableStore.job, variableStore.dom);\n                    if (settings.updateDOM) {\n                        _extends(variableStore.user, settings.variables);\n                        _extends(variableStore.job, variableStore.user);\n                    } else {\n                        _extends(variableStore.job, variableStore.user, settings.variables);\n                        _extends(currentVars, settings.variables);\n                    }\n                    hasVarChange = counters.job > 0 && Boolean(Object.keys(variableStore.job).length > Object.keys(currentVars).length || Boolean(Object.keys(currentVars).length && Object.keys(variableStore.job).some((function(key) {\n                        return variableStore.job[key] !== currentVars[key];\n                    }))));\n                    if (hasVarChange) {\n                        resetCssNodes(settings.rootElement);\n                        cssVars(settings);\n                    } else {\n                        var outCssArray = [];\n                        var outNodeArray = [];\n                        var hasKeyframesWithVars = false;\n                        if (settings.updateDOM) {\n                            counters.job++;\n                        }\n                        nodeArray.forEach((function(node, i) {\n                            var isSkip = !node.__cssVars.tree;\n                            if (node.__cssVars.tree) {\n                                try {\n                                    transformCss(node.__cssVars.tree, _extends({}, settings, {\n                                        variables: variableStore.job,\n                                        onWarning: handleWarning\n                                    }));\n                                    var outCss = stringifyCss(node.__cssVars.tree);\n                                    if (settings.updateDOM) {\n                                        var nodeCSS = cssArray[i];\n                                        var hasCSSVarFunc = regex.cssVarFunc.test(nodeCSS);\n                                        if (!node.getAttribute(\"data-cssvars\")) {\n                                            node.setAttribute(\"data-cssvars\", \"src\");\n                                        }\n                                        if (outCss.length && hasCSSVarFunc) {\n                                            var dataGroup = node.getAttribute(\"data-cssvars-group\") || ++counters.group;\n                                            var outCssNoSpaces = outCss.replace(/\\s/g, \"\");\n                                            var outNode = settings.rootElement.querySelector('[data-cssvars=\"out\"][data-cssvars-group=\"'.concat(dataGroup, '\"]')) || document.createElement(\"style\");\n                                            hasKeyframesWithVars = hasKeyframesWithVars || regex.cssKeyframes.test(outCss);\n                                            if (settings.preserveStatic) {\n                                                node.sheet && (node.sheet.disabled = true);\n                                            }\n                                            if (!outNode.hasAttribute(\"data-cssvars\")) {\n                                                outNode.setAttribute(\"data-cssvars\", \"out\");\n                                            }\n                                            if (outCssNoSpaces === node.textContent.replace(/\\s/g, \"\")) {\n                                                isSkip = true;\n                                                if (outNode && outNode.parentNode) {\n                                                    node.removeAttribute(\"data-cssvars-group\");\n                                                    outNode.parentNode.removeChild(outNode);\n                                                }\n                                            } else if (outCssNoSpaces !== outNode.textContent.replace(/\\s/g, \"\")) {\n                                                [ node, outNode ].forEach((function(n) {\n                                                    n.setAttribute(\"data-cssvars-job\", counters.job);\n                                                    n.setAttribute(\"data-cssvars-group\", dataGroup);\n                                                }));\n                                                outNode.textContent = outCss;\n                                                outCssArray.push(outCss);\n                                                outNodeArray.push(outNode);\n                                                if (!outNode.parentNode) {\n                                                    node.parentNode.insertBefore(outNode, node.nextSibling);\n                                                }\n                                            }\n                                        }\n                                    } else {\n                                        if (node.textContent.replace(/\\s/g, \"\") !== outCss) {\n                                            outCssArray.push(outCss);\n                                        }\n                                    }\n                                } catch (err) {\n                                    handleError(err.message, node);\n                                }\n                            }\n                            if (isSkip) {\n                                node.setAttribute(\"data-cssvars\", \"skip\");\n                            }\n                            if (!node.hasAttribute(\"data-cssvars-job\")) {\n                                node.setAttribute(\"data-cssvars-job\", counters.job);\n                            }\n                        }));\n                        cssVarsSrcNodeCount = settings.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars=\"out\"])').length;\n                        if (settings.shadowDOM) {\n                            var elms = [].concat(settings.rootElement).concat([].slice.call(settings.rootElement.querySelectorAll(\"*\")));\n                            for (var i = 0, elm; elm = elms[i]; ++i) {\n                                if (elm.shadowRoot && elm.shadowRoot.querySelector(\"style\")) {\n                                    var shadowSettings = _extends({}, settings, {\n                                        rootElement: elm.shadowRoot\n                                    });\n                                    cssVars(shadowSettings);\n                                }\n                            }\n                        }\n                        if (settings.updateDOM && hasKeyframesWithVars) {\n                            fixKeyframes(settings.rootElement);\n                        }\n                        cssVarsIsRunning = false;\n                        settings.onComplete(outCssArray.join(\"\"), outNodeArray, JSON.parse(JSON.stringify(variableStore.job)), getTimeStamp() - settings.__benchmark);\n                        handleFinally(outNodeArray.length);\n                    }\n                }\n            });\n        }\n    } else {\n        document.addEventListener(\"DOMContentLoaded\", (function init(evt) {\n            cssVars(options);\n            document.removeEventListener(\"DOMContentLoaded\", init);\n        }));\n    }\n}\n\ncssVars.reset = function() {\n    counters.job = 0;\n    counters.group = 0;\n    cssVarsIsRunning = false;\n    if (cssVarsObserver) {\n        cssVarsObserver.disconnect();\n        cssVarsObserver = null;\n    }\n    cssVarsSrcNodeCount = 0;\n    debounceTimer = null;\n    isShadowDOMReady = false;\n    for (var prop in variableStore) {\n        variableStore[prop] = {};\n    }\n};\n\nfunction addMutationObserver(settings) {\n    function isDisabled(node) {\n        var isDisabledAttr = isLink(node) && node.hasAttribute(\"disabled\");\n        var isDisabledSheet = (node.sheet || {}).disabled;\n        return isDisabledAttr || isDisabledSheet;\n    }\n    function isLink(node) {\n        var isStylesheet = node.nodeName.toLowerCase() === \"link\" && (node.getAttribute(\"rel\") || \"\").indexOf(\"stylesheet\") !== -1;\n        return isStylesheet;\n    }\n    function isStyle(node) {\n        return node.nodeName.toLowerCase() === \"style\";\n    }\n    function isValidAttributeMutation(mutation) {\n        var isValid = false;\n        if (mutation.type === \"attributes\" && isLink(mutation.target) && !isDisabled(mutation.target)) {\n            var isEnabledMutation = mutation.attributeName === \"disabled\";\n            var isHrefMutation = mutation.attributeName === \"href\";\n            var isSkipNode = mutation.target.getAttribute(\"data-cssvars\") === \"skip\";\n            var isSrcNode = mutation.target.getAttribute(\"data-cssvars\") === \"src\";\n            if (isEnabledMutation) {\n                isValid = !isSkipNode && !isSrcNode;\n            } else if (isHrefMutation) {\n                if (isSkipNode) {\n                    mutation.target.setAttribute(\"data-cssvars\", \"\");\n                } else if (isSrcNode) {\n                    resetCssNodes(settings.rootElement, true);\n                }\n                isValid = true;\n            }\n        }\n        return isValid;\n    }\n    function isValidStyleTextMutation(mutation) {\n        var isValid = false;\n        if (mutation.type === \"childList\") {\n            var isStyleElm = isStyle(mutation.target);\n            var isOutNode = mutation.target.getAttribute(\"data-cssvars\") === \"out\";\n            isValid = isStyleElm && !isOutNode;\n        }\n        return isValid;\n    }\n    function isValidAddMutation(mutation) {\n        var isValid = false;\n        if (mutation.type === \"childList\") {\n            isValid = [].slice.call(mutation.addedNodes).some((function(node) {\n                var isElm = node.nodeType === 1;\n                var hasAttr = isElm && node.hasAttribute(\"data-cssvars\");\n                var isStyleWithVars = isStyle(node) && regex.cssVars.test(node.textContent);\n                var isValid = !hasAttr && (isLink(node) || isStyleWithVars);\n                return isValid && !isDisabled(node);\n            }));\n        }\n        return isValid;\n    }\n    function isValidRemoveMutation(mutation) {\n        var isValid = false;\n        if (mutation.type === \"childList\") {\n            isValid = [].slice.call(mutation.removedNodes).some((function(node) {\n                var isElm = node.nodeType === 1;\n                var isOutNode = isElm && node.getAttribute(\"data-cssvars\") === \"out\";\n                var isSrcNode = isElm && node.getAttribute(\"data-cssvars\") === \"src\";\n                var isValid = isSrcNode;\n                if (isSrcNode || isOutNode) {\n                    var dataGroup = node.getAttribute(\"data-cssvars-group\");\n                    var orphanNode = settings.rootElement.querySelector('[data-cssvars-group=\"'.concat(dataGroup, '\"]'));\n                    if (isSrcNode) {\n                        resetCssNodes(settings.rootElement, true);\n                    }\n                    if (orphanNode) {\n                        orphanNode.parentNode.removeChild(orphanNode);\n                    }\n                }\n                return isValid;\n            }));\n        }\n        return isValid;\n    }\n    if (!window.MutationObserver) {\n        return;\n    }\n    if (cssVarsObserver) {\n        cssVarsObserver.disconnect();\n        cssVarsObserver = null;\n    }\n    cssVarsObserver = new MutationObserver((function(mutations) {\n        var hasValidMutation = mutations.some((function(mutation) {\n            return isValidAttributeMutation(mutation) || isValidStyleTextMutation(mutation) || isValidAddMutation(mutation) || isValidRemoveMutation(mutation);\n        }));\n        if (hasValidMutation) {\n            cssVars(settings);\n        }\n    }));\n    cssVarsObserver.observe(document.documentElement, {\n        attributes: true,\n        attributeFilter: [ \"disabled\", \"href\" ],\n        childList: true,\n        subtree: true\n    });\n}\n\nfunction cssVarsDebounced(settings) {\n    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;\n    clearTimeout(debounceTimer);\n    debounceTimer = setTimeout((function() {\n        settings.__benchmark = null;\n        cssVars(settings);\n    }), delay);\n}\n\nfunction fixKeyframes(rootElement) {\n    var animationNameProp = [ \"animation-name\", \"-moz-animation-name\", \"-webkit-animation-name\" ].filter((function(prop) {\n        return getComputedStyle(document.body)[prop];\n    }))[0];\n    if (animationNameProp) {\n        var allNodes = rootElement.getElementsByTagName(\"*\");\n        var keyframeNodes = [];\n        var nameMarker = \"__CSSVARSPONYFILL-KEYFRAMES__\";\n        for (var i = 0, len = allNodes.length; i < len; i++) {\n            var node = allNodes[i];\n            var animationName = getComputedStyle(node)[animationNameProp];\n            if (animationName !== \"none\") {\n                node.style[animationNameProp] += nameMarker;\n                keyframeNodes.push(node);\n            }\n        }\n        void document.body.offsetHeight;\n        for (var _i = 0, _len = keyframeNodes.length; _i < _len; _i++) {\n            var nodeStyle = keyframeNodes[_i].style;\n            nodeStyle[animationNameProp] = nodeStyle[animationNameProp].replace(nameMarker, \"\");\n        }\n    }\n}\n\nfunction fixRelativeCssUrls(cssText, baseUrl) {\n    var cssUrls = cssText.replace(regex.cssComments, \"\").match(regex.cssUrls) || [];\n    cssUrls.forEach((function(cssUrl) {\n        var oldUrl = cssUrl.replace(regex.cssUrls, \"$1\");\n        var newUrl = getFullUrl(oldUrl, baseUrl);\n        cssText = cssText.replace(cssUrl, cssUrl.replace(oldUrl, newUrl));\n    }));\n    return cssText;\n}\n\nfunction fixVarNames() {\n    var varObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    var reLeadingHyphens = /^-{2}/;\n    return Object.keys(varObj).reduce((function(obj, value) {\n        var key = reLeadingHyphens.test(value) ? value : \"--\".concat(value.replace(/^-+/, \"\"));\n        obj[key] = varObj[value];\n        return obj;\n    }), {});\n}\n\nfunction getFullUrl(url) {\n    var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : location.href;\n    var d = document.implementation.createHTMLDocument(\"\");\n    var b = d.createElement(\"base\");\n    var a = d.createElement(\"a\");\n    d.head.appendChild(b);\n    d.body.appendChild(a);\n    b.href = base;\n    a.href = url;\n    return a.href;\n}\n\nfunction getTimeStamp() {\n    return isBrowser && (window.performance || {}).now ? window.performance.now() : (new Date).getTime();\n}\n\nfunction resetCssNodes(rootElement) {\n    var resetDOMVariableStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n    var resetNodes = [].slice.call(rootElement.querySelectorAll('[data-cssvars=\"skip\"],[data-cssvars=\"src\"]'));\n    resetNodes.forEach((function(node) {\n        return node.setAttribute(\"data-cssvars\", \"\");\n    }));\n    if (resetDOMVariableStore) {\n        variableStore.dom = {};\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (cssVars);\n//# sourceMappingURL=css-vars-ponyfill.esm.js.map\n\n\n//# sourceURL=webpack://fds/./node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js?");

/***/ }),

/***/ "./src/components/form/Checkbox/checkbox.html.twig":
/*!*********************************************************!*\
  !*** ./src/components/form/Checkbox/checkbox.html.twig ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/form/Checkbox/checkbox.html.twig\");\n\n//# sourceURL=webpack://fds/./src/components/form/Checkbox/checkbox.html.twig?");

/***/ }),

/***/ "./src/components/form/ErrorBox/errorBox.html.twig":
/*!*********************************************************!*\
  !*** ./src/components/form/ErrorBox/errorBox.html.twig ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/form/ErrorBox/errorBox.html.twig\");\n\n//# sourceURL=webpack://fds/./src/components/form/ErrorBox/errorBox.html.twig?");

/***/ }),

/***/ "./src/components/form/Radio/radio.html.twig":
/*!***************************************************!*\
  !*** ./src/components/form/Radio/radio.html.twig ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/form/Radio/radio.html.twig\");\n\n//# sourceURL=webpack://fds/./src/components/form/Radio/radio.html.twig?");

/***/ }),

/***/ "./src/components/form/TitleAndText/titleAndText.html.twig":
/*!*****************************************************************!*\
  !*** ./src/components/form/TitleAndText/titleAndText.html.twig ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/form/TitleAndText/titleAndText.html.twig\");\n\n//# sourceURL=webpack://fds/./src/components/form/TitleAndText/titleAndText.html.twig?");

/***/ }),

/***/ "./src/components/general/Breadcrumb/breadcrumb.html.twig":
/*!****************************************************************!*\
  !*** ./src/components/general/Breadcrumb/breadcrumb.html.twig ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/general/Breadcrumb/breadcrumb.html.twig\");\n\n//# sourceURL=webpack://fds/./src/components/general/Breadcrumb/breadcrumb.html.twig?");

/***/ }),

/***/ "./src/components/general/Button/button.html.twig":
/*!********************************************************!*\
  !*** ./src/components/general/Button/button.html.twig ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/general/Button/button.html.twig\");\n\n//# sourceURL=webpack://fds/./src/components/general/Button/button.html.twig?");

/***/ }),

/***/ "./src/components/general/Tabs/tabs.html.twig":
/*!****************************************************!*\
  !*** ./src/components/general/Tabs/tabs.html.twig ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/general/Tabs/tabs.html.twig\");\n\n//# sourceURL=webpack://fds/./src/components/general/Tabs/tabs.html.twig?");

/***/ }),

/***/ "./src/components/landing/LandingLinks/landingLinks.html.twig":
/*!********************************************************************!*\
  !*** ./src/components/landing/LandingLinks/landingLinks.html.twig ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/landing/LandingLinks/landingLinks.html.twig\");\n\n//# sourceURL=webpack://fds/./src/components/landing/LandingLinks/landingLinks.html.twig?");

/***/ }),

/***/ "./src/components/search/FiltersSelected/filtersSelected.html.twig":
/*!*************************************************************************!*\
  !*** ./src/components/search/FiltersSelected/filtersSelected.html.twig ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/search/FiltersSelected/filtersSelected.html.twig\");\n\n//# sourceURL=webpack://fds/./src/components/search/FiltersSelected/filtersSelected.html.twig?");

/***/ }),

/***/ "./src/components/search/ListingItem/listingItem.html.twig":
/*!*****************************************************************!*\
  !*** ./src/components/search/ListingItem/listingItem.html.twig ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/search/ListingItem/listingItem.html.twig\");\n\n//# sourceURL=webpack://fds/./src/components/search/ListingItem/listingItem.html.twig?");

/***/ }),

/***/ "./src/components/search/Pagination/pagination.html.twig":
/*!***************************************************************!*\
  !*** ./src/components/search/Pagination/pagination.html.twig ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/search/Pagination/pagination.html.twig\");\n\n//# sourceURL=webpack://fds/./src/components/search/Pagination/pagination.html.twig?");

/***/ }),

/***/ "./src/components/search/SearchBar/searchBar.html.twig":
/*!*************************************************************!*\
  !*** ./src/components/search/SearchBar/searchBar.html.twig ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/search/SearchBar/searchBar.html.twig\");\n\n//# sourceURL=webpack://fds/./src/components/search/SearchBar/searchBar.html.twig?");

/***/ }),

/***/ "./src/components/search/SearchBarHeader/searchBarHeader.html.twig":
/*!*************************************************************************!*\
  !*** ./src/components/search/SearchBarHeader/searchBarHeader.html.twig ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/search/SearchBarHeader/searchBarHeader.html.twig\");\n\n//# sourceURL=webpack://fds/./src/components/search/SearchBarHeader/searchBarHeader.html.twig?");

/***/ }),

/***/ "./src/components/search/SearchNoResults/searchNoResults.html.twig":
/*!*************************************************************************!*\
  !*** ./src/components/search/SearchNoResults/searchNoResults.html.twig ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/search/SearchNoResults/searchNoResults.html.twig\");\n\n//# sourceURL=webpack://fds/./src/components/search/SearchNoResults/searchNoResults.html.twig?");

/***/ }),

/***/ "./src/components/search/Showing/showing.html.twig":
/*!*********************************************************!*\
  !*** ./src/components/search/Showing/showing.html.twig ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/search/Showing/showing.html.twig\");\n\n//# sourceURL=webpack://fds/./src/components/search/Showing/showing.html.twig?");

/***/ }),

/***/ "./src/components/search/SortBy/sortBy.html.twig":
/*!*******************************************************!*\
  !*** ./src/components/search/SortBy/sortBy.html.twig ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"components/search/SortBy/sortBy.html.twig\");\n\n//# sourceURL=webpack://fds/./src/components/search/SortBy/sortBy.html.twig?");

/***/ }),

/***/ "./src/layout/formLayout/formLayout.html.twig":
/*!****************************************************!*\
  !*** ./src/layout/formLayout/formLayout.html.twig ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"layout/formLayout/formLayout.html.twig\");\n\n//# sourceURL=webpack://fds/./src/layout/formLayout/formLayout.html.twig?");

/***/ }),

/***/ "./src/layout/fullWidth/fullWidth.html.twig":
/*!**************************************************!*\
  !*** ./src/layout/fullWidth/fullWidth.html.twig ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"layout/fullWidth/fullWidth.html.twig\");\n\n//# sourceURL=webpack://fds/./src/layout/fullWidth/fullWidth.html.twig?");

/***/ }),

/***/ "./src/layout/twoColumn/twoColumn.html.twig":
/*!**************************************************!*\
  !*** ./src/layout/twoColumn/twoColumn.html.twig ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"layout/twoColumn/twoColumn.html.twig\");\n\n//# sourceURL=webpack://fds/./src/layout/twoColumn/twoColumn.html.twig?");

/***/ }),

/***/ "./src/base.scss":
/*!***********************!*\
  !*** ./src/base.scss ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fds/./src/base.scss?");

/***/ }),

/***/ "./src/components/form/Checkbox/checkbox.scss":
/*!****************************************************!*\
  !*** ./src/components/form/Checkbox/checkbox.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fds/./src/components/form/Checkbox/checkbox.scss?");

/***/ }),

/***/ "./src/components/form/ErrorBox/errorBox.scss":
/*!****************************************************!*\
  !*** ./src/components/form/ErrorBox/errorBox.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fds/./src/components/form/ErrorBox/errorBox.scss?");

/***/ }),

/***/ "./src/components/form/Radio/radio.scss":
/*!**********************************************!*\
  !*** ./src/components/form/Radio/radio.scss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fds/./src/components/form/Radio/radio.scss?");

/***/ }),

/***/ "./src/components/form/TitleAndText/titleAndText.scss":
/*!************************************************************!*\
  !*** ./src/components/form/TitleAndText/titleAndText.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fds/./src/components/form/TitleAndText/titleAndText.scss?");

/***/ }),

/***/ "./src/components/general/Breadcrumb/breadcrumb.scss":
/*!***********************************************************!*\
  !*** ./src/components/general/Breadcrumb/breadcrumb.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fds/./src/components/general/Breadcrumb/breadcrumb.scss?");

/***/ }),

/***/ "./src/components/general/Button/button.scss":
/*!***************************************************!*\
  !*** ./src/components/general/Button/button.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fds/./src/components/general/Button/button.scss?");

/***/ }),

/***/ "./src/components/general/Tabs/tabs.scss":
/*!***********************************************!*\
  !*** ./src/components/general/Tabs/tabs.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fds/./src/components/general/Tabs/tabs.scss?");

/***/ }),

/***/ "./src/components/landing/LandingLinks/landingLinks.scss":
/*!***************************************************************!*\
  !*** ./src/components/landing/LandingLinks/landingLinks.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fds/./src/components/landing/LandingLinks/landingLinks.scss?");

/***/ }),

/***/ "./src/components/search/FiltersSelected/filtersSelected.scss":
/*!********************************************************************!*\
  !*** ./src/components/search/FiltersSelected/filtersSelected.scss ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fds/./src/components/search/FiltersSelected/filtersSelected.scss?");

/***/ }),

/***/ "./src/components/search/ListingItem/listingItem.scss":
/*!************************************************************!*\
  !*** ./src/components/search/ListingItem/listingItem.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fds/./src/components/search/ListingItem/listingItem.scss?");

/***/ }),

/***/ "./src/components/search/Pagination/pagination.scss":
/*!**********************************************************!*\
  !*** ./src/components/search/Pagination/pagination.scss ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fds/./src/components/search/Pagination/pagination.scss?");

/***/ }),

/***/ "./src/components/search/SearchBar/searchBar.scss":
/*!********************************************************!*\
  !*** ./src/components/search/SearchBar/searchBar.scss ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fds/./src/components/search/SearchBar/searchBar.scss?");

/***/ }),

/***/ "./src/components/search/SearchBarHeader/searchBarHeader.scss":
/*!********************************************************************!*\
  !*** ./src/components/search/SearchBarHeader/searchBarHeader.scss ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fds/./src/components/search/SearchBarHeader/searchBarHeader.scss?");

/***/ }),

/***/ "./src/components/search/SearchNoResults/searchNoResults.scss":
/*!********************************************************************!*\
  !*** ./src/components/search/SearchNoResults/searchNoResults.scss ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fds/./src/components/search/SearchNoResults/searchNoResults.scss?");

/***/ }),

/***/ "./src/components/search/Showing/showing.scss":
/*!****************************************************!*\
  !*** ./src/components/search/Showing/showing.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fds/./src/components/search/Showing/showing.scss?");

/***/ }),

/***/ "./src/components/search/SortBy/sortBy.scss":
/*!**************************************************!*\
  !*** ./src/components/search/SortBy/sortBy.scss ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fds/./src/components/search/SortBy/sortBy.scss?");

/***/ }),

/***/ "./src/layout/formLayout/formLayout.scss":
/*!***********************************************!*\
  !*** ./src/layout/formLayout/formLayout.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fds/./src/layout/formLayout/formLayout.scss?");

/***/ }),

/***/ "./src/layout/fullWidth/fullWidth.scss":
/*!*********************************************!*\
  !*** ./src/layout/fullWidth/fullWidth.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fds/./src/layout/fullWidth/fullWidth.scss?");

/***/ }),

/***/ "./src/layout/twoColumn/twoColumn.scss":
/*!*********************************************!*\
  !*** ./src/layout/twoColumn/twoColumn.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fds/./src/layout/twoColumn/twoColumn.scss?");

/***/ }),

/***/ "./src/components/form/Checkbox/checkbox.js":
/*!**************************************************!*\
  !*** ./src/components/form/Checkbox/checkbox.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _checkbox_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox.html.twig */ \"./src/components/form/Checkbox/checkbox.html.twig\");\n/* harmony import */ var _checkbox_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox.scss */ \"./src/components/form/Checkbox/checkbox.scss\");\n\n\n\n\n//# sourceURL=webpack://fds/./src/components/form/Checkbox/checkbox.js?");

/***/ }),

/***/ "./src/components/form/ErrorBox/ErrorBox.js":
/*!**************************************************!*\
  !*** ./src/components/form/ErrorBox/ErrorBox.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _errorBox_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errorBox.scss */ \"./src/components/form/ErrorBox/errorBox.scss\");\n/* harmony import */ var _errorBox_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errorBox.html.twig */ \"./src/components/form/ErrorBox/errorBox.html.twig\");\n\n\n\n\n//# sourceURL=webpack://fds/./src/components/form/ErrorBox/ErrorBox.js?");

/***/ }),

/***/ "./src/components/form/Radio/radio.js":
/*!********************************************!*\
  !*** ./src/components/form/Radio/radio.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _radio_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio.html.twig */ \"./src/components/form/Radio/radio.html.twig\");\n/* harmony import */ var _radio_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./radio.scss */ \"./src/components/form/Radio/radio.scss\");\n\n\n\n//# sourceURL=webpack://fds/./src/components/form/Radio/radio.js?");

/***/ }),

/***/ "./src/components/form/TitleAndText/titleAndText.js":
/*!**********************************************************!*\
  !*** ./src/components/form/TitleAndText/titleAndText.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _titleAndText_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./titleAndText.scss */ \"./src/components/form/TitleAndText/titleAndText.scss\");\n/* harmony import */ var _titleAndText_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./titleAndText.html.twig */ \"./src/components/form/TitleAndText/titleAndText.html.twig\");\n\n\n\n\n//# sourceURL=webpack://fds/./src/components/form/TitleAndText/titleAndText.js?");

/***/ }),

/***/ "./src/components/general/Breadcrumb/breadcrumb.js":
/*!*********************************************************!*\
  !*** ./src/components/general/Breadcrumb/breadcrumb.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _breadcrumb_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breadcrumb.scss */ \"./src/components/general/Breadcrumb/breadcrumb.scss\");\n/* harmony import */ var _breadcrumb_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breadcrumb.html.twig */ \"./src/components/general/Breadcrumb/breadcrumb.html.twig\");\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  // Toggles the expanded class to expand the breadcrumb or not\n  function toggleBreadcrumb(breadcrumb, mobileOverlay) {\n    if (breadcrumb.classList.contains('expanded')) {\n      breadcrumb.classList.remove('expanded');\n    } else {\n      breadcrumb.classList.add('expanded');\n    }\n    if (mobileOverlay.ariaExpanded === 'true') {\n      mobileOverlay.setAttribute('aria-expanded', 'false');\n    } else {\n      mobileOverlay.setAttribute('aria-expanded', 'true');\n    }\n  }\n\n  // Toggles the overflowed class to handle the overflow on the breadcrumb \n  // depending on screensizes\n  function overflow(breadcrumb, breadcrumbItems, breadcrumbLength) {\n    if (!breadcrumb.classList.contains('expanded')) {\n      if (breadcrumbLength > breadcrumbItems.clientWidth) {\n        breadcrumbItems.classList.add('overflowed');\n      } else {\n        breadcrumbItems.classList.remove('overflowed');\n      }\n    }\n  }\n\n  window.addEventListener('DOMContentLoaded', function () {\n    const mobileOverlay = document.querySelector('.breadcrumb__mobile-overlay');\n    const breadcrumb = document.querySelector('.breadcrumb');\n    const breadcrumbItems = document.querySelector('.breadcrumb__items');\n    if (!mobileOverlay && !breadcrumbItems) return;\n\n     // Calculates the length of the breadcrumb (+ some extra spacing for the separators)\n     let breadcrumbLength = 0;\n     const breadcrumbItemList = document.querySelectorAll('.breadcrumb__item');\n     breadcrumbItemList.forEach((item) => {\n       breadcrumbLength += item.clientWidth + 10;\n     });\n\n    // Handles the expanded toggle with both click & keyboard (enter)\n    mobileOverlay.addEventListener('click', (e) => {\n      e.preventDefault();\n      e.stopPropagation();\n      toggleBreadcrumb(breadcrumb, mobileOverlay);\n    });\n    mobileOverlay.addEventListener('keyUp', (e) => {\n      const keyCode = (e.keyCode ? e.keyCode : e.which);\n      if (keyCode === 13) {\n        toggleBreadcrumb(breadcrumb, mobileOverlay);\n      }\n    });\n\n    //-- Overflow state\n    // Upon resize, check if the breadcrumb length is bigger than the visible part of the breadcrumb\n    window.addEventListener('resize', () => {\n      overflow(breadcrumb, breadcrumbItems, breadcrumbLength);\n    });\n    // Triggers it once upon first load\n    overflow(breadcrumb, breadcrumbItems, breadcrumbLength);\n  });\n\n  \n}\n\n\n\n//# sourceURL=webpack://fds/./src/components/general/Breadcrumb/breadcrumb.js?");

/***/ }),

/***/ "./src/components/general/Button/Button.js":
/*!*************************************************!*\
  !*** ./src/components/general/Button/Button.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.scss */ \"./src/components/general/Button/button.scss\");\n/* harmony import */ var _button_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.html.twig */ \"./src/components/general/Button/button.html.twig\");\n\n\n\n\n//# sourceURL=webpack://fds/./src/components/general/Button/Button.js?");

/***/ }),

/***/ "./src/components/general/Tabs/Tabs.js":
/*!*********************************************!*\
  !*** ./src/components/general/Tabs/Tabs.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tabs_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.scss */ \"./src/components/general/Tabs/tabs.scss\");\n/* harmony import */ var _tabs_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.html.twig */ \"./src/components/general/Tabs/tabs.html.twig\");\n\n\n\n\n//# sourceURL=webpack://fds/./src/components/general/Tabs/Tabs.js?");

/***/ }),

/***/ "./src/components/landing/LandingLinks/LandingLinks.js":
/*!*************************************************************!*\
  !*** ./src/components/landing/LandingLinks/LandingLinks.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _landingLinks_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landingLinks.scss */ \"./src/components/landing/LandingLinks/landingLinks.scss\");\n/* harmony import */ var _landingLinks_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landingLinks.html.twig */ \"./src/components/landing/LandingLinks/landingLinks.html.twig\");\n\n\n\n\n//# sourceURL=webpack://fds/./src/components/landing/LandingLinks/LandingLinks.js?");

/***/ }),

/***/ "./src/components/search/FiltersSelected/filtersSelected.js":
/*!******************************************************************!*\
  !*** ./src/components/search/FiltersSelected/filtersSelected.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _filtersSelected_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filtersSelected.scss */ \"./src/components/search/FiltersSelected/filtersSelected.scss\");\n/* harmony import */ var _filtersSelected_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filtersSelected.html.twig */ \"./src/components/search/FiltersSelected/filtersSelected.html.twig\");\n\n\n\n//# sourceURL=webpack://fds/./src/components/search/FiltersSelected/filtersSelected.js?");

/***/ }),

/***/ "./src/components/search/ListingItem/ListingItem.js":
/*!**********************************************************!*\
  !*** ./src/components/search/ListingItem/ListingItem.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _listingItem_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listingItem.scss */ \"./src/components/search/ListingItem/listingItem.scss\");\n/* harmony import */ var _listingItem_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listingItem.html.twig */ \"./src/components/search/ListingItem/listingItem.html.twig\");\n\n\n\n//# sourceURL=webpack://fds/./src/components/search/ListingItem/ListingItem.js?");

/***/ }),

/***/ "./src/components/search/Pagination/pagination.js":
/*!********************************************************!*\
  !*** ./src/components/search/Pagination/pagination.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pagination_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination.html.twig */ \"./src/components/search/Pagination/pagination.html.twig\");\n/* harmony import */ var _pagination_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination.scss */ \"./src/components/search/Pagination/pagination.scss\");\n\n\n\n//# sourceURL=webpack://fds/./src/components/search/Pagination/pagination.js?");

/***/ }),

/***/ "./src/components/search/SearchBar/searchBar.js":
/*!******************************************************!*\
  !*** ./src/components/search/SearchBar/searchBar.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _searchBar_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchBar.html.twig */ \"./src/components/search/SearchBar/searchBar.html.twig\");\n/* harmony import */ var _searchBar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchBar.scss */ \"./src/components/search/SearchBar/searchBar.scss\");\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  window.addEventListener('DOMContentLoaded', function () {\n    const el = document.querySelector('.search-bar');\n    if(!el) {\n      return;\n    }\n\n    const input = el.querySelector('.search-bar__box');\n    input.addEventListener('input', () => {\n      if (input.value !== '') {\n        input.classList.add('search-bar__box--has-content');\n      } else {\n        input.classList.remove('search-bar__box--has-content');\n      }\n    });\n  });\n}\n\n\n//# sourceURL=webpack://fds/./src/components/search/SearchBar/searchBar.js?");

/***/ }),

/***/ "./src/components/search/SearchBarHeader/searchBarHeader.js":
/*!******************************************************************!*\
  !*** ./src/components/search/SearchBarHeader/searchBarHeader.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _searchBarHeader_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchBarHeader.html.twig */ \"./src/components/search/SearchBarHeader/searchBarHeader.html.twig\");\n/* harmony import */ var _searchBarHeader_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchBarHeader.scss */ \"./src/components/search/SearchBarHeader/searchBarHeader.scss\");\n\n\n\n//# sourceURL=webpack://fds/./src/components/search/SearchBarHeader/searchBarHeader.js?");

/***/ }),

/***/ "./src/components/search/SearchNoResults/searchNoResults.js":
/*!******************************************************************!*\
  !*** ./src/components/search/SearchNoResults/searchNoResults.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _searchNoResults_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchNoResults.html.twig */ \"./src/components/search/SearchNoResults/searchNoResults.html.twig\");\n/* harmony import */ var _searchNoResults_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchNoResults.scss */ \"./src/components/search/SearchNoResults/searchNoResults.scss\");\n\n\n\n//# sourceURL=webpack://fds/./src/components/search/SearchNoResults/searchNoResults.js?");

/***/ }),

/***/ "./src/components/search/Showing/showing.js":
/*!**************************************************!*\
  !*** ./src/components/search/Showing/showing.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _showing_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showing.html.twig */ \"./src/components/search/Showing/showing.html.twig\");\n/* harmony import */ var _showing_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showing.scss */ \"./src/components/search/Showing/showing.scss\");\n\n\n\n//# sourceURL=webpack://fds/./src/components/search/Showing/showing.js?");

/***/ }),

/***/ "./src/components/search/SortBy/sortBy.js":
/*!************************************************!*\
  !*** ./src/components/search/SortBy/sortBy.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sortBy_html_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sortBy.html.twig */ \"./src/components/search/SortBy/sortBy.html.twig\");\n/* harmony import */ var _sortBy_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sortBy.scss */ \"./src/components/search/SortBy/sortBy.scss\");\n\n\n\n//# sourceURL=webpack://fds/./src/components/search/SortBy/sortBy.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.scss */ \"./src/base.scss\");\n/* harmony import */ var css_vars_ponyfill__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! css-vars-ponyfill */ \"./node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js\");\n/* harmony import */ var _components_general_Breadcrumb_breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/general/Breadcrumb/breadcrumb */ \"./src/components/general/Breadcrumb/breadcrumb.js\");\n/* harmony import */ var _components_general_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/general/Button/Button */ \"./src/components/general/Button/Button.js\");\n/* harmony import */ var _components_general_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/general/Tabs/Tabs */ \"./src/components/general/Tabs/Tabs.js\");\n/* harmony import */ var _components_search_FiltersSelected_filtersSelected__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/search/FiltersSelected/filtersSelected */ \"./src/components/search/FiltersSelected/filtersSelected.js\");\n/* harmony import */ var _components_search_ListingItem_ListingItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/search/ListingItem/ListingItem */ \"./src/components/search/ListingItem/ListingItem.js\");\n/* harmony import */ var _components_search_Pagination_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/search/Pagination/pagination */ \"./src/components/search/Pagination/pagination.js\");\n/* harmony import */ var _components_search_SearchBarHeader_searchBarHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/search/SearchBarHeader/searchBarHeader */ \"./src/components/search/SearchBarHeader/searchBarHeader.js\");\n/* harmony import */ var _components_search_SearchNoResults_searchNoResults__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/search/SearchNoResults/searchNoResults */ \"./src/components/search/SearchNoResults/searchNoResults.js\");\n/* harmony import */ var _components_search_Showing_showing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/search/Showing/showing */ \"./src/components/search/Showing/showing.js\");\n/* harmony import */ var _components_search_SortBy_sortBy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/search/SortBy/sortBy */ \"./src/components/search/SortBy/sortBy.js\");\n/* harmony import */ var _components_form_ErrorBox_ErrorBox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/form/ErrorBox/ErrorBox */ \"./src/components/form/ErrorBox/ErrorBox.js\");\n/* harmony import */ var _components_form_TitleAndText_titleAndText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/form/TitleAndText/titleAndText */ \"./src/components/form/TitleAndText/titleAndText.js\");\n/* harmony import */ var _components_form_Checkbox_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/form/Checkbox/checkbox */ \"./src/components/form/Checkbox/checkbox.js\");\n/* harmony import */ var _components_form_Radio_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/form/Radio/radio */ \"./src/components/form/Radio/radio.js\");\n/* harmony import */ var _components_landing_LandingLinks_LandingLinks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/landing/LandingLinks/LandingLinks */ \"./src/components/landing/LandingLinks/LandingLinks.js\");\n/* harmony import */ var _layout_twoColumn_twoColumn__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layout/twoColumn/twoColumn */ \"./src/layout/twoColumn/twoColumn.js\");\n/* harmony import */ var _layout_formLayout_formLayout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./layout/formLayout/formLayout */ \"./src/layout/formLayout/formLayout.js\");\n/* harmony import */ var _layout_fullWidth_fullWidth__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./layout/fullWidth/fullWidth */ \"./src/layout/fullWidth/fullWidth.js\");\n/* harmony import */ var _components_search_SearchBar_searchBar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/search/SearchBar/searchBar */ \"./src/components/search/SearchBar/searchBar.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// Fixes css vars on legacy browsers (i.e. IE11)\n(0,css_vars_ponyfill__WEBPACK_IMPORTED_MODULE_20__.default)();\n(0,_components_search_SearchBar_searchBar__WEBPACK_IMPORTED_MODULE_19__.default)();\n(0,_components_general_Breadcrumb_breadcrumb__WEBPACK_IMPORTED_MODULE_1__.default)();\n\n\n//# sourceURL=webpack://fds/./src/index.js?");

/***/ }),

/***/ "./src/layout/formLayout/formLayout.js":
/*!*********************************************!*\
  !*** ./src/layout/formLayout/formLayout.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _formLayout_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formLayout.scss */ \"./src/layout/formLayout/formLayout.scss\");\n/* harmony import */ var _formLayout_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formLayout.html.twig */ \"./src/layout/formLayout/formLayout.html.twig\");\n\n\n\n\n//# sourceURL=webpack://fds/./src/layout/formLayout/formLayout.js?");

/***/ }),

/***/ "./src/layout/fullWidth/fullWidth.js":
/*!*******************************************!*\
  !*** ./src/layout/fullWidth/fullWidth.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fullWidth_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fullWidth.scss */ \"./src/layout/fullWidth/fullWidth.scss\");\n/* harmony import */ var _fullWidth_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fullWidth.html.twig */ \"./src/layout/fullWidth/fullWidth.html.twig\");\n\n\n\n\n//# sourceURL=webpack://fds/./src/layout/fullWidth/fullWidth.js?");

/***/ }),

/***/ "./src/layout/twoColumn/twoColumn.js":
/*!*******************************************!*\
  !*** ./src/layout/twoColumn/twoColumn.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _twoColumn_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./twoColumn.scss */ \"./src/layout/twoColumn/twoColumn.scss\");\n/* harmony import */ var _twoColumn_html_twig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./twoColumn.html.twig */ \"./src/layout/twoColumn/twoColumn.html.twig\");\n\n\n\n\n//# sourceURL=webpack://fds/./src/layout/twoColumn/twoColumn.js?");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;