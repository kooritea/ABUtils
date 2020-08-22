(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ABUtils"] = factory();
	else
		root["ABUtils"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ sync recursive":
/*!**************!*\
  !*** . sync ***!
  \**************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./ sync recursive\";\n\n//# sourceURL=webpack://ABUtils/._sync?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {\n    if ( true && typeof module.exports === \"object\") {\n        var v = factory(__webpack_require__(\"./ sync recursive\"), exports);\n        if (v !== undefined) module.exports = v;\n    }\n    else if (true) {\n        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n    }\n})(function (require, exports) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    exports.concat = exports.bufferToArrayBuffer = exports.sliceToZero = exports.toArrayBuffer = exports.toString = exports.utf16beToUTF16le = exports.writeHex = exports.writeInt = exports.readInt = void 0;\n    var getView = function (buffer, view) {\n        if (buffer.byteLength % view !== 0) {\n            throw new Error(\"param view error: buffer.byteLength % view !== 0\");\n        }\n        switch (view) {\n            case 1:\n                return new Uint8Array(buffer);\n            case 2:\n                return new Uint16Array(buffer.slice(0, buffer.byteLength - (buffer.byteLength % 2)));\n            case 4:\n                return new Uint32Array(buffer);\n            default:\n                throw new Error(\"param view error\");\n        }\n    };\n    /**\n     * 读取10进制正整数\n     * @param buffer\n     * @param start 从0开始,单位为view，比如view为4的时候，start为1表示从第5个字节(第33个二进制位)开始读取长度len*view个字节\n     * @param len 所读整数占的长度，占位越长可能的值越大.\n     * @param view 将多少字节视为一个单位，分别对应Uint8Array|Uint16Array|Uint32Array\n     */\n    exports.readInt = function (buffer, start, len, view) {\n        if (view === void 0) { view = 1; }\n        var bufferView = getView(buffer, view);\n        var result = 0;\n        for (var i = len - 1; i >= 0; i--) {\n            result += Math.pow(Math.pow(2, 8 * view), len - i - 1) * bufferView[start + i];\n        }\n        return result;\n    };\n    /**\n     * 写入无符号10进制正整数\n     * 会直接修改传入的arraybuffer\n     * 请注意，如果写入长度大于一，将以大端在左的方式写入\n     * @param buffer ArrayBuffer或bufferView，传入bufferView时view参数无效\n     * @param start 从0开始,单位为view，比如view为4的时候，start为1表示从第5个字节(第33个二进制位)开始读取长度len*view个字节\n     * @param len 该整数所占长度\n     * @param value 10进制正整数 最大可写入的整数为2^(8*view*len)-1\n     * @param view 将多少字节视为一个单位，默认为Uint8Array，分别对应Uint8Array|Uint16Array|Uint32Array\n     * @return ArrayBuffer 返回传入的arraybuffer引用\n     */\n    exports.writeInt = function (buffer, start, len, value, view) {\n        if (view === void 0) { view = 1; }\n        var bufferView;\n        if (buffer instanceof ArrayBuffer) {\n            bufferView = getView(buffer, view);\n        }\n        else {\n            bufferView = buffer;\n        }\n        if (value > (Math.pow(2, len * 8 * view) - 1)) {\n            throw new Error(\"Cannot write Int greater than 2^\" + len * 8 + \"-1: \" + value);\n        }\n        if (bufferView.length < start + len) {\n            throw new Error(\"Cannot write an Int of length \" + len + \" at position \" + start + \",because the input bufferView length is \" + bufferView.length);\n        }\n        var i = 0;\n        while (i < len) {\n            bufferView[start + i] = value / Math.pow(Math.pow(2, 8 * view), len - i - 1);\n            i++;\n        }\n        return buffer;\n    };\n    exports.writeHex = function (target, start, values) {\n        var view = new Uint8Array(target);\n        for (var i = start; i < target.byteLength; i++) {\n            view[i] = values[i - start];\n        }\n        return target;\n    };\n    exports.utf16beToUTF16le = function (utf16be) {\n        var utf16le = new Uint8Array(utf16be.length);\n        for (var i = 0; i < utf16be.length + 2; i = i + 2) {\n            utf16le[i] = utf16be[i + 1];\n            utf16le[i + 1] = utf16be[i];\n        }\n        return utf16le;\n    };\n    /**\n     * 此方法会清除位于前面的字符顺序标记(只有utf16或传入Uint16Array才可能会有)\n     * @param arrayBuffer ArrayBuffer或者view\n     * @param encode 传入view时该项无效，ascii使用Uint8Array utf16使用Uint16Array\n     * @param cleanZero 是否清除非结尾的0,结尾的0会被删除\n     */\n    exports.toString = function (arrayBuffer, encode, cleanZero) {\n        if (encode === void 0) { encode = 'ascii'; }\n        if (cleanZero === void 0) { cleanZero = false; }\n        var dataString = \"\";\n        var bufferView;\n        if (arrayBuffer instanceof ArrayBuffer) {\n            if (encode === 'ascii') {\n                bufferView = getView(arrayBuffer, 1);\n            }\n            else if (encode === 'utf16le') {\n                bufferView = getView(arrayBuffer, 2);\n                if (exports.readInt(arrayBuffer, 0, 2, 1) === 65534) { // ff fe\n                    bufferView = bufferView.slice(1);\n                }\n                // utf16 要去除前两个判断高地位顺序的字节\n            }\n            else if (encode === 'utf16be') {\n                bufferView = exports.utf16beToUTF16le(getView(arrayBuffer, 1));\n                bufferView = getView(bufferView.buffer, 2);\n                if (exports.readInt(arrayBuffer, 0, 2, 1) === 65279) {\n                    bufferView = bufferView.slice(1);\n                }\n            }\n            else {\n                throw new Error(\"unsupport encode: \" + encode);\n            }\n        }\n        else {\n            bufferView = arrayBuffer;\n            if (bufferView instanceof Uint16Array && (bufferView[0] === 0xFFFE || bufferView[0] === 0xFEFF)) {\n                bufferView = bufferView.slice(1);\n            }\n        }\n        for (var i = 0; i < bufferView.length; i++) {\n            if (bufferView[i] === 0 && cleanZero && i < bufferView.length - 2) {\n                continue;\n            }\n            if (i >= bufferView.length - 2 && bufferView[i] === 0) {\n                continue;\n            }\n            dataString += String.fromCharCode(bufferView[i]);\n        }\n        // console.log(dataString)\n        return dataString;\n    };\n    /**\n     * 字符串转arrayBuffer\n     * utf16编码时会添加字节顺序标记\n     * js默认使用小端在前(utf16le)\n     * @param str\n     * @param encode\n     * @param addBOM default false 添加fffe或feff的字节顺序控制符(只用utf16le/utf16be编码有效) 当str不为空字符串才有效\n     * @param addEnd default false 添加0或00的结束控制字符\n     * @param fixLen 固定输出的字节长度，长度不足时补0，超出时报错\n     */\n    exports.toArrayBuffer = function (str, encode, addBOM, addEnd, fixLen) {\n        if (addBOM === void 0) { addBOM = false; }\n        if (addEnd === void 0) { addEnd = false; }\n        var bufferView;\n        if (encode === 'ascii') {\n            bufferView = new Uint8Array(str.length + (addEnd ? 1 : 0));\n            for (var i = 0; i < str.length; i++) {\n                exports.writeInt(bufferView, i, 1, str.charCodeAt(i));\n            }\n        }\n        else if (encode === 'utf16le') {\n            // 小端在前\n            bufferView = new Uint8Array(str.length * 2 + (addBOM ? 2 : 0) + (addEnd ? 2 : 0));\n            if (addBOM && str.length > 0) {\n                bufferView[0] = 0xFE;\n                bufferView[1] = 0xFF;\n            }\n            // 因为writeInt写入是大端在前，之后统一反转\n            for (var i = 0; i < str.length; i++) {\n                exports.writeInt(bufferView, i * 2 + 2, 2, str.charCodeAt(i));\n            }\n            bufferView = exports.utf16beToUTF16le(bufferView);\n        }\n        else if (encode === 'utf16be') {\n            // 大端在前\n            bufferView = new Uint8Array(str.length * 2 + (addBOM ? 2 : 0) + (addEnd ? 2 : 0));\n            if (addBOM && str.length > 0) {\n                bufferView[0] = 0xFE;\n                bufferView[1] = 0xFF;\n            }\n            // 因为之后需要le转换\n            for (var i = 0; i < str.length; i++) {\n                exports.writeInt(bufferView, i * 2 + 2, 2, str.charCodeAt(i));\n            }\n        }\n        else {\n            throw new Error(\"unsupport encode: \" + encode);\n        }\n        if (typeof fixLen === 'number') {\n            if (bufferView.buffer.byteLength <= fixLen) {\n                return exports.concat(bufferView.buffer, new ArrayBuffer(fixLen - bufferView.buffer.byteLength));\n            }\n            else {\n                throw new Error(\"String Buffer length is greater than fixLen\");\n            }\n        }\n        else {\n            return bufferView.buffer;\n        }\n    };\n    /**\n     * 从指定地方开始截取到0x00或0x0000为止\n     * 不会清除字节顺序标记\n     * 返回的arraybuffer不包括最后的0x00 或0x0000\n     * @param arrayBuffer\n     * @param start\n     * @param encode\n     */\n    exports.sliceToZero = function (arrayBuffer, start, encode) {\n        var bufferView;\n        if (encode === 'ascii') {\n            bufferView = getView(arrayBuffer, 1);\n        }\n        else if (encode === 'utf16') {\n            bufferView = getView(arrayBuffer, 2);\n        }\n        else {\n            throw new Error('unsupport encode: ' + encode);\n        }\n        for (var i = start; i < bufferView.length; i++) {\n            if (bufferView[i] === 0) {\n                return bufferView.slice(start, i).buffer;\n            }\n        }\n        return bufferView.slice(start).buffer;\n    };\n    /**\n     *\n     * @param buffer NODEJS Buffer\n     */\n    exports.bufferToArrayBuffer = function (buffer) {\n        var arrayBuffer = new ArrayBuffer(buffer.length);\n        var bufferView = new Uint8Array(arrayBuffer);\n        for (var i = 0; i < buffer.length; ++i) {\n            bufferView[i] = buffer[i];\n        }\n        return arrayBuffer;\n    };\n    exports.concat = function () {\n        var args = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            args[_i] = arguments[_i];\n        }\n        var length = 0;\n        for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {\n            var arr = args_1[_a];\n            length += arr.byteLength;\n        }\n        var result = new ArrayBuffer(length);\n        var resultView = new Uint8Array(result);\n        var offset = 0;\n        for (var _b = 0, args_2 = args; _b < args_2.length; _b++) {\n            var item = args_2[_b];\n            if (item instanceof ArrayBuffer) {\n                var view = new Uint8Array(item);\n                for (var i = 0; i < view.length; i++) {\n                    resultView[i + offset] = view[i];\n                }\n                offset += view.length;\n            }\n        }\n        return result;\n    };\n});\n\n\n//# sourceURL=webpack://ABUtils/./index.ts?");

/***/ })

/******/ });
});