/*!
 * weRequest 1.2.15
 * https://github.com/IvinWu/weRequest
 */
module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/getConfig.ts":
/*!******************************!*\
  !*** ./src/api/getConfig.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ../store/config */ "./src/store/config.ts");
var status_1 = __webpack_require__(/*! ../store/status */ "./src/store/status.ts");
exports.default = (function () {
    return {
        urlPerfix: config_1.default.urlPerfix,
        sessionExpireTime: config_1.default.sessionExpireTime,
        sessionExpireKey: config_1.default.sessionExpireKey,
        sessionExpire: status_1.default.sessionExpire
    };
});


/***/ }),

/***/ "./src/api/getSession.ts":
/*!*******************************!*\
  !*** ./src/api/getSession.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var status_1 = __webpack_require__(/*! ../store/status */ "./src/store/status.ts");
exports.default = (function () {
    return status_1.default.session;
});


/***/ }),

/***/ "./src/api/init.ts":
/*!*************************!*\
  !*** ./src/api/init.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ../store/config */ "./src/store/config.ts");
var status_1 = __webpack_require__(/*! ../store/status */ "./src/store/status.ts");
exports.default = (function (params) {
    Object.assign(config_1.default, params);
    try {
        var data = {};
        for (var key in config_1.default.sessionName) {
            var storageKey = config_1.default.sessionName[key];
            var value = wx.getStorageSync(storageKey) || '';
            if (value) {
                data[key] = value;
            }
        }
        status_1.default.session = data;
    }
    catch (e) {
        console.error('wx.getStorageSync:fail, can not get session.');
    }
    try {
        status_1.default.sessionExpire = wx.getStorageSync(config_1.default.sessionExpireKey || "sessionExpireKey") || Infinity;
    }
    catch (e) {
        console.error('wx.getStorageSync:fail, can not get sessionExpire.');
    }
});


/***/ }),

/***/ "./src/api/login.ts":
/*!**************************!*\
  !*** ./src/api/login.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sessionManager_1 = __webpack_require__(/*! ../module/sessionManager */ "./src/module/sessionManager.ts");
exports.default = (function () {
    return sessionManager_1.default.main();
});


/***/ }),

/***/ "./src/api/request.ts":
/*!****************************!*\
  !*** ./src/api/request.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var requestHandler_1 = __webpack_require__(/*! ../module/requestHandler */ "./src/module/requestHandler.ts");
exports.default = (function (obj) {
    return requestHandler_1.default.request(obj);
});


/***/ }),

/***/ "./src/api/setSession.ts":
/*!*******************************!*\
  !*** ./src/api/setSession.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sessionManager_1 = __webpack_require__(/*! ../module/sessionManager */ "./src/module/sessionManager.ts");
exports.default = (function (session) {
    sessionManager_1.default.setSession(session);
});


/***/ }),

/***/ "./src/api/uploadFile.ts":
/*!*******************************!*\
  !*** ./src/api/uploadFile.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var requestHandler_1 = __webpack_require__(/*! ../module/requestHandler */ "./src/module/requestHandler.ts");
exports.default = (function (obj) {
    return requestHandler_1.default.uploadFile(obj);
});


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var init_1 = __webpack_require__(/*! ./api/init */ "./src/api/init.ts");
var request_1 = __webpack_require__(/*! ./api/request */ "./src/api/request.ts");
var uploadFile_1 = __webpack_require__(/*! ./api/uploadFile */ "./src/api/uploadFile.ts");
var setSession_1 = __webpack_require__(/*! ./api/setSession */ "./src/api/setSession.ts");
var login_1 = __webpack_require__(/*! ./api/login */ "./src/api/login.ts");
var getSession_1 = __webpack_require__(/*! ./api/getSession */ "./src/api/getSession.ts");
var getConfig_1 = __webpack_require__(/*! ./api/getConfig */ "./src/api/getConfig.ts");
var version_1 = __webpack_require__(/*! ./version */ "./src/version.ts");
var weRequestObject = {
    init: init_1.default,
    request: request_1.default,
    uploadFile: uploadFile_1.default,
    setSession: setSession_1.default,
    login: login_1.default,
    getSession: getSession_1.default,
    getConfig: getConfig_1.default,
    version: version_1.version
};
exports.default = weRequestObject;


/***/ }),

/***/ "./src/module/cacheManager.ts":
/*!************************************!*\
  !*** ./src/module/cacheManager.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function get(obj) {
    if (!obj.originUrl) {
        return;
    }
    wx.getStorage({
        key: obj.originUrl,
        success: function (res) {
            if (obj.cache === true ||
                (typeof obj.cache === "function" && obj.cache(res.data))) {
                if (typeof obj.success === "function") {
                    obj.success(res.data, { isCache: true });
                }
            }
            if (typeof obj.complete === "function") {
                obj.complete();
            }
        }
    });
}
function set(obj, realData) {
    if (!obj.originUrl) {
        return;
    }
    if (obj.cache === true ||
        (typeof obj.cache === "function" && obj.cache(realData))) {
        wx.setStorage({
            key: obj.originUrl,
            data: realData
        });
    }
}
exports.default = {
    get: get,
    set: set
};


/***/ }),

/***/ "./src/module/catchHandler.ts":
/*!************************************!*\
  !*** ./src/module/catchHandler.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.catchHandler = void 0;
var errorHandler_1 = __webpack_require__(/*! ./errorHandler */ "./src/module/errorHandler.ts");
function catchHandler(e, obj, reject) {
    var type = e.type, res = e.res;
    if (obj.catchError) {
        if (type === 'http-error') {
            return reject(new Error(res.statusCode.toString()));
        }
        else if (type === 'upload-error') {
            return reject(new Error(res));
        }
        else if (type === 'logic-error') {
            var msg = errorHandler_1.default.getErrorMsg(res);
            return reject(new Error(msg.content));
        }
        else {
            return reject(e);
        }
    }
    else {
        if (e.type) {
            return errorHandler_1.default.logicError(obj, e.res);
        }
        else {
            return reject(e);
        }
    }
}
exports.catchHandler = catchHandler;


/***/ }),

/***/ "./src/module/durationReporter.ts":
/*!****************************************!*\
  !*** ./src/module/durationReporter.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ../store/config */ "./src/store/config.ts");
var request_1 = __webpack_require__(/*! ../api/request */ "./src/api/request.ts");
function start(obj) {
    obj._reportStartTime = new Date().getTime();
}
function end(obj) {
    obj._reportEndTime = new Date().getTime();
    if (obj.report && obj._reportStartTime) {
        report(obj.report, obj._reportStartTime, obj._reportEndTime);
    }
}
function report(name, startTime, endTime) {
    if (typeof config_1.default.reportCGI === "function") {
        config_1.default.reportCGI(name, startTime, endTime, request_1.default);
    }
}
exports.default = {
    start: start,
    end: end,
    report: report
};


/***/ }),

/***/ "./src/module/errorHandler.ts":
/*!************************************!*\
  !*** ./src/module/errorHandler.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ../store/config */ "./src/store/config.ts");
var request_1 = __webpack_require__(/*! ../api/request */ "./src/api/request.ts");
function systemError(obj, res) {
    if (typeof obj.fail === "function") {
        obj.fail(res);
    }
    else {
        var retry = function () { return request_1.default(obj).then(obj._resolve).catch(obj._reject); };
        doError("", res.errMsg, retry);
    }
}
function logicError(obj, res) {
    if (typeof obj.fail === "function") {
        obj.fail(res);
    }
    else {
        var _a = getErrorMsg(res), title = _a.title, content = _a.content;
        var retry = function () { return request_1.default(obj).then(obj._resolve).catch(obj._reject); };
        doError(title, content, retry);
    }
    if (typeof config_1.default.errorCallback === "function") {
        config_1.default.errorCallback(obj, res);
    }
    console.error(res);
}
function getErrorMsg(res) {
    var title = "";
    if (typeof config_1.default.errorTitle === "function") {
        try {
            title = config_1.default.errorTitle(res.data);
        }
        catch (e) {
        }
    }
    else if (typeof config_1.default.errorTitle === "string") {
        title = config_1.default.errorTitle;
    }
    var content = "";
    if (typeof config_1.default.errorContent === "function") {
        try {
            content = config_1.default.errorContent(res.data);
        }
        catch (e) {
        }
    }
    else if (typeof config_1.default.errorContent === "string") {
        content = config_1.default.errorContent;
    }
    return { title: title, content: content };
}
function doError(title, content, retry) {
    var showErrorRetryBtn = config_1.default.errorRetryBtn && typeof retry === "function";
    wx.showModal(Object.assign({
        title: title,
        content: content || "网络或服务异常，请稍后重试",
    }, !showErrorRetryBtn ? {
        showCancel: false
    } : {
        showCancel: true,
        confirmText: '重试',
        success: function (res) {
            if (res.confirm && typeof retry === "function")
                retry();
        }
    }));
}
exports.default = {
    systemError: systemError,
    logicError: logicError,
    doError: doError,
    getErrorMsg: getErrorMsg
};


/***/ }),

/***/ "./src/module/mockManager.ts":
/*!***********************************!*\
  !*** ./src/module/mockManager.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ../store/config */ "./src/store/config.ts");
var loading_1 = __webpack_require__(/*! ../util/loading */ "./src/util/loading.ts");
function get(obj) {
    if (!(config_1.default.mockJson[obj.url] || (obj.originUrl && config_1.default.mockJson[obj.originUrl]))) {
        console.error('mock 没有对应接口的数据');
        return false;
    }
    var data = config_1.default.mockJson[obj.url] || (obj.originUrl ? config_1.default.mockJson[obj.originUrl] : '');
    data = JSON.parse(JSON.stringify(data));
    var res = {
        data: data,
        statusCode: 200
    };
    loading_1.default.hide();
    return res;
}
exports.default = {
    get: get
};


/***/ }),

/***/ "./src/module/requestHandler.ts":
/*!**************************************!*\
  !*** ./src/module/requestHandler.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var loading_1 = __webpack_require__(/*! ../util/loading */ "./src/util/loading.ts");
var config_1 = __webpack_require__(/*! ../store/config */ "./src/store/config.ts");
var status_1 = __webpack_require__(/*! ../store/status */ "./src/store/status.ts");
var mockManager_1 = __webpack_require__(/*! ./mockManager */ "./src/module/mockManager.ts");
var cacheManager_1 = __webpack_require__(/*! ./cacheManager */ "./src/module/cacheManager.ts");
var sessionManager_1 = __webpack_require__(/*! ./sessionManager */ "./src/module/sessionManager.ts");
var responseHandler_1 = __webpack_require__(/*! ./responseHandler */ "./src/module/responseHandler.ts");
var durationReporter_1 = __webpack_require__(/*! ./durationReporter */ "./src/module/durationReporter.ts");
var url_1 = __webpack_require__(/*! ../util/url */ "./src/util/url.ts");
var errorHandler_1 = __webpack_require__(/*! ./errorHandler */ "./src/module/errorHandler.ts");
var catchHandler_1 = __webpack_require__(/*! ./catchHandler */ "./src/module/catchHandler.ts");
var taskManager_1 = __webpack_require__(/*! ./taskManager */ "./src/module/taskManager.ts");
var requestTag = 0;
function format(originUrl) {
    if (originUrl.startsWith('http')) {
        return originUrl;
    }
    else {
        var urlPerfix = config_1.default.urlPerfix;
        if (typeof config_1.default.urlPerfix === "function") {
            urlPerfix = config_1.default.urlPerfix();
        }
        return urlPerfix + originUrl;
    }
}
function preDo(obj, resolve, reject) {
    if (typeof obj.beforeSend === "function") {
        obj.beforeSend();
    }
    if (typeof obj.reLoginCount === "undefined") {
        obj.reLoginCount = 0;
    }
    else {
        obj.reLoginCount++;
    }
    if (obj.showLoading) {
        loading_1.default.show(obj.showLoading);
    }
    if (!obj.originUrl) {
        obj.originUrl = obj.url;
        obj.url = format(obj.url);
    }
    obj._resolve = resolve;
    obj._reject = reject;
    obj.tag = requestTag++;
    if (typeof obj.notNeedSession === "undefined") {
        obj.notNeedSession = false;
    }
    if (typeof obj.aborted === "undefined") {
        obj.aborted = false;
    }
    return obj;
}
function initializeRequestObj(obj) {
    if (!obj.data) {
        obj.data = {};
    }
    if (obj.dataLoad && typeof obj.dataLoad === 'function') {
        obj.data = obj.dataLoad(obj.data);
    }
    obj.header = obj.header ? obj.header : {};
    if (typeof config_1.default.setHeader === 'function') {
        var header = config_1.default.setHeader();
        if (typeof header === 'object') {
            obj.header = __assign(__assign({}, obj.header), header);
        }
    }
    else if (typeof config_1.default.setHeader === 'object') {
        obj.header = __assign(__assign({}, obj.header), config_1.default.setHeader);
    }
    if (obj.originUrl !== config_1.default.codeToSession.url && status_1.default.session) {
        obj.data = __assign(__assign({}, obj.data), status_1.default.session);
    }
    var gd = getGlobalData();
    obj.data = __assign(__assign({}, gd), obj.data);
    obj.method = obj.method || 'GET';
    obj.dataType = obj.dataType || 'json';
    if (!config_1.default.doNotUseQueryString && obj.method !== "GET") {
        if (status_1.default.session) {
            obj.url = url_1.default.setParams(obj.url, __assign({}, status_1.default.session));
        }
        obj.url = url_1.default.setParams(obj.url, gd);
    }
    durationReporter_1.default.start(obj);
    return obj;
}
function initializeUploadFileObj(obj) {
    if (!obj.formData) {
        obj.formData = {};
    }
    if (obj.dataLoad && typeof obj.dataLoad === 'function') {
        obj.formData = obj.dataLoad(obj.formData);
    }
    obj.header = obj.header ? obj.header : {};
    if (typeof config_1.default.setHeader === 'function') {
        var header = config_1.default.setHeader();
        if (typeof header === 'object') {
            obj.header = __assign(__assign({}, obj.header), header);
        }
    }
    else if (typeof config_1.default.setHeader === 'object') {
        obj.header = __assign(__assign({}, obj.header), config_1.default.setHeader);
    }
    if (obj.originUrl !== config_1.default.codeToSession.url && status_1.default.session) {
        obj.formData = __assign(__assign({}, obj.formData), status_1.default.session);
    }
    var gd = getGlobalData();
    obj.formData = __assign(__assign({}, gd), obj.formData);
    if (!config_1.default.doNotUseQueryString) {
        if (status_1.default.session) {
            obj.url = url_1.default.setParams(obj.url, __assign({}, status_1.default.session));
        }
        obj.url = url_1.default.setParams(obj.url, gd);
    }
    durationReporter_1.default.start(obj);
    return obj;
}
function getGlobalData() {
    var gd = {};
    if (typeof config_1.default.globalData === "function") {
        gd = config_1.default.globalData();
    }
    else if (typeof config_1.default.globalData === "object") {
        gd = config_1.default.globalData;
    }
    return gd;
}
function doRequest(obj) {
    obj = initializeRequestObj(obj);
    return new Promise(function (resolve, reject) {
        var requestTask = wx.request({
            url: obj.url,
            data: obj.data,
            method: obj.method,
            header: obj.header || {},
            dataType: obj.dataType || 'json',
            success: function (res) {
                return resolve(res);
            },
            fail: function (res) {
                errorHandler_1.default.systemError(obj, res);
                return reject(res);
            },
            complete: function () {
                if (typeof obj.complete === "function") {
                    obj.complete();
                }
                if (obj.showLoading) {
                    loading_1.default.hide();
                }
            }
        });
        taskManager_1.default.addSessionTask(requestTask, obj);
    });
}
function doUploadFile(obj) {
    obj = initializeUploadFileObj(obj);
    return new Promise(function (resolve, reject) {
        wx.uploadFile({
            url: obj.url,
            filePath: obj.filePath || '',
            name: obj.name || '',
            formData: obj.formData,
            success: function (res) {
                return resolve(res);
            },
            fail: function (res) {
                errorHandler_1.default.systemError(obj, res);
                return reject(res);
            },
            complete: function () {
                if (typeof obj.complete === "function") {
                    obj.complete();
                }
                if (obj.showLoading) {
                    loading_1.default.hide();
                }
            }
        });
    });
}
function request(obj) {
    return new Promise(function (resolve, reject) {
        obj = preDo(obj, resolve, reject);
        if (config_1.default.mockJson) {
            var mockResponse = mockManager_1.default.get(obj);
            if (mockResponse) {
                var response = responseHandler_1.default.responseForRequest(mockResponse, obj);
                return resolve(response);
            }
        }
        if (obj.cache) {
            cacheManager_1.default.get(obj);
        }
        sessionManager_1.default.main(obj).then(function () {
            return doRequest(obj);
        }).then(function (res) {
            var response = responseHandler_1.default.responseForRequest(res, obj);
            if (response != null) {
                return resolve(response);
            }
        }).catch(function (e) {
            return catchHandler_1.catchHandler(e, obj, reject);
        });
    });
}
function uploadFile(obj) {
    return new Promise(function (resolve, reject) {
        obj = preDo(obj, resolve, reject);
        if (config_1.default.mockJson) {
            var mockResponse = mockManager_1.default.get(obj);
            if (mockResponse) {
                var response = responseHandler_1.default.responseForUploadFile(mockResponse, obj);
                return resolve(response);
            }
        }
        sessionManager_1.default.main(obj).then(function () {
            return doUploadFile(obj);
        }).then(function (res) {
            var response = responseHandler_1.default.responseForUploadFile(res, obj);
            if (response != null) {
                return resolve(response);
            }
        }).catch(function (e) {
            catchHandler_1.catchHandler(e, obj, reject);
        });
    });
}
exports.default = {
    format: format,
    request: request,
    uploadFile: uploadFile
};


/***/ }),

/***/ "./src/module/responseHandler.ts":
/*!***************************************!*\
  !*** ./src/module/responseHandler.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ../store/config */ "./src/store/config.ts");
var requestHandler_1 = __webpack_require__(/*! ./requestHandler */ "./src/module/requestHandler.ts");
var errorHandler_1 = __webpack_require__(/*! ./errorHandler */ "./src/module/errorHandler.ts");
var cacheManager_1 = __webpack_require__(/*! ./cacheManager */ "./src/module/cacheManager.ts");
var durationReporter_1 = __webpack_require__(/*! ./durationReporter */ "./src/module/durationReporter.ts");
var sessionManager_1 = __webpack_require__(/*! ./sessionManager */ "./src/module/sessionManager.ts");
var jsonSuperset_1 = __webpack_require__(/*! ../util/jsonSuperset */ "./src/util/jsonSuperset.ts");
var taskManager_1 = __webpack_require__(/*! ./taskManager */ "./src/module/taskManager.ts");
function responseForRequest(res, obj) {
    if (res.statusCode === 200) {
        durationReporter_1.default.end(obj);
        if (obj.aborted) {
            return;
        }
        if (obj.dataType === 'json' && typeof res.data === 'string') {
            res.data = jsonSuperset_1.default(res.data);
            try {
                res.data = JSON.parse(res.data);
            }
            catch (e) {
                if (obj.catchError) {
                    throw new Error(e);
                }
                else {
                    errorHandler_1.default.logicError(obj, res);
                    return;
                }
            }
        }
        taskManager_1.default.delSessionTask(obj.tag);
        if (config_1.default.loginTrigger(res.data) && obj.reLoginCount !== undefined && obj.reLoginCount < config_1.default.reLoginLimit) {
            sessionManager_1.default.delSession();
            taskManager_1.default.abortSessionTask();
            return requestHandler_1.default.request(obj);
        }
        else if (config_1.default.successTrigger(res.data)) {
            var realData = "";
            try {
                if (typeof config_1.default.successData === 'function') {
                    realData = config_1.default.successData(res.data);
                }
                else {
                    realData = res.data;
                }
            }
            catch (e) {
                console.error("Function successData occur error: " + e);
            }
            if (!obj.noCacheFlash) {
                if (typeof obj.success === "function") {
                    obj.success(realData);
                }
                else {
                    return realData;
                }
            }
            cacheManager_1.default.set(obj, realData);
        }
        else {
            throw { type: 'logic-error', res: res };
        }
    }
    else {
        throw { type: 'http-error', res: res };
    }
}
function responseForUploadFile(res, obj) {
    if (res.statusCode === 200) {
        durationReporter_1.default.end(obj);
        if (typeof res.data === 'string') {
            res.data = jsonSuperset_1.default(res.data);
            try {
                res.data = JSON.parse(res.data);
            }
            catch (e) {
                if (obj.catchError) {
                    throw new Error(e);
                }
                else {
                    errorHandler_1.default.logicError(obj, res);
                    return;
                }
            }
        }
        if (config_1.default.loginTrigger(res.data) && obj.reLoginCount !== undefined && obj.reLoginCount < config_1.default.reLoginLimit) {
            sessionManager_1.default.delSession();
            return requestHandler_1.default.uploadFile(obj);
        }
        else if (config_1.default.successTrigger(res.data)) {
            var realData = "";
            try {
                if (typeof config_1.default.successData === 'function') {
                    realData = config_1.default.successData(res.data);
                }
                else {
                    realData = res.data;
                }
            }
            catch (e) {
                console.error("Function successData occur error: " + e);
            }
            if (typeof obj.success === "function") {
                obj.success(realData);
            }
            else {
                return realData;
            }
        }
        else {
            throw { type: 'logic-error', res: res };
        }
    }
    else {
        throw { type: 'http-error', res: res };
    }
}
exports.default = {
    responseForRequest: responseForRequest,
    responseForUploadFile: responseForUploadFile
};


/***/ }),

/***/ "./src/module/sessionManager.ts":
/*!**************************************!*\
  !*** ./src/module/sessionManager.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var status_1 = __webpack_require__(/*! ../store/status */ "./src/store/status.ts");
var config_1 = __webpack_require__(/*! ../store/config */ "./src/store/config.ts");
var errorHandler_1 = __webpack_require__(/*! ./errorHandler */ "./src/module/errorHandler.ts");
var durationReporter_1 = __webpack_require__(/*! ./durationReporter */ "./src/module/durationReporter.ts");
var requestHandler_1 = __webpack_require__(/*! ./requestHandler */ "./src/module/requestHandler.ts");
var loading_1 = __webpack_require__(/*! ../util/loading */ "./src/util/loading.ts");
var request_1 = __webpack_require__(/*! ../api/request */ "./src/api/request.ts");
var taskManager_1 = __webpack_require__(/*! ./taskManager */ "./src/module/taskManager.ts");
var checkSessionPromise = null;
function checkSession() {
    if (!checkSessionPromise) {
        checkSessionPromise = new Promise(function (resolve, reject) {
            console.log("wx.checkSession()");
            var start = new Date().getTime();
            wx.checkSession({
                success: function () {
                    return resolve();
                },
                fail: function () {
                    delSession();
                    return doLogin().then(function () {
                        return resolve();
                    }, function (res) {
                        return reject(res);
                    });
                },
                complete: function () {
                    var end = new Date().getTime();
                    durationReporter_1.default.report('wx_checkSession', start, end);
                }
            });
        });
    }
    return checkSessionPromise;
}
function isSessionExpireOrEmpty() {
    if (!status_1.default.session) {
        return true;
    }
    if (config_1.default.sessionExpireTime && new Date().getTime() > status_1.default.sessionExpire) {
        delSession();
        return true;
    }
    if (config_1.default.sessionName) {
        var statusEmpty = false;
        for (var key in config_1.default.sessionName) {
            if (!status_1.default.session[key]) {
                statusEmpty = true;
                break;
            }
        }
        if (statusEmpty) {
            for (var key in config_1.default.sessionName) {
                var stgKey = config_1.default.sessionName[key];
                var statusValue = wx.getStorageSync(stgKey);
                if (!statusValue) {
                    return true;
                }
                else {
                    status_1.default.session[key] = statusValue;
                }
            }
        }
    }
    return false;
}
function checkLogin() {
    return new Promise(function (resolve, reject) {
        if (isSessionExpireOrEmpty()) {
            config_1.default.doNotCheckSession = true;
            return doLogin().then(function () {
                return resolve();
            }, function (res) {
                return reject(res);
            });
        }
        else {
            return resolve();
        }
    });
}
var loginPromise = null;
function doLogin() {
    if (!loginPromise) {
        loginPromise = new Promise(function (resolve, reject) {
            login().then(function () {
                loginPromise = null;
                taskManager_1.default.redoSessionTask();
                return resolve();
            }).catch(function (res) {
                loginPromise = null;
                loading_1.default.hide();
                return reject(res);
            });
        });
    }
    return loginPromise;
}
function login() {
    return new Promise(function (resolve, reject) {
        console.log('wx.login');
        var start = new Date().getTime();
        wx.login({
            success: function (res) {
                if (res.code) {
                    code2Session(res.code).then(function () {
                        return resolve();
                    }).catch(function (res) {
                        return reject(res);
                    });
                }
                else {
                    return reject({ title: "登录失败", "content": "请稍后重试[code 获取失败]" });
                }
            },
            complete: function () {
                var end = new Date().getTime();
                durationReporter_1.default.report('wx_login', start, end);
            },
            fail: function (res) {
                return reject({ title: "登录失败", "content": res.errMsg });
            }
        });
    });
}
function setSession(session) {
    config_1.default.doNotCheckSession = true;
    if (config_1.default.sessionExpireTime && config_1.default.sessionExpireKey) {
        status_1.default.sessionExpire = new Date().getTime() + config_1.default.sessionExpireTime;
        wx.setStorage({
            key: config_1.default.sessionExpireKey,
            data: String(status_1.default.sessionExpire)
        });
    }
    var data = {};
    for (var key in session) {
        wx.setStorage({
            key: config_1.default.sessionName[key],
            data: session[key],
        });
        data[key] = session[key];
    }
    status_1.default.session = Object.assign(status_1.default.session || {}, data);
}
function code2Session(code) {
    var data;
    if (typeof config_1.default.codeToSession.data === "function") {
        data = config_1.default.codeToSession.data();
    }
    else {
        data = config_1.default.codeToSession.data || {};
    }
    if (config_1.default.codeToSession.codeName) {
        data[config_1.default.codeToSession.codeName] = code;
    }
    else {
        data.code = code;
    }
    return new Promise(function (resolve, reject) {
        var start = new Date().getTime();
        wx.request({
            url: requestHandler_1.default.format(config_1.default.codeToSession.url),
            data: data,
            method: config_1.default.codeToSession.method || 'GET',
            header: typeof config_1.default.setHeader === 'function' ? config_1.default.setHeader() : config_1.default.setHeader,
            success: function (res) {
                if (res.statusCode === 200) {
                    if (config_1.default.codeToSession.report) {
                        var end = new Date().getTime();
                        durationReporter_1.default.report(config_1.default.codeToSession.report, start, end);
                    }
                    var s = [];
                    try {
                        s = config_1.default.codeToSession.success(res.data);
                    }
                    catch (e) {
                    }
                    if (s) {
                        setSession(s);
                        return resolve();
                    }
                    else {
                        return reject(errorHandler_1.default.getErrorMsg(res));
                    }
                }
                else {
                    return reject({ title: "登录失败", "content": "请稍后重试" });
                }
            },
            complete: function () {
            },
            fail: function () {
                return reject({ title: "登录失败", "content": "请稍后重试" });
            }
        });
    });
}
function delSession() {
    status_1.default.session = undefined;
    for (var key in config_1.default.sessionName) {
        wx.removeStorage({
            key: config_1.default.sessionName[key]
        });
    }
    if (config_1.default.sessionExpireTime && config_1.default.sessionExpireKey) {
        status_1.default.sessionExpire = Infinity;
        wx.removeStorage({
            key: config_1.default.sessionExpireKey
        });
    }
}
function main(relatedRequestObj) {
    return new Promise(function (resolve, reject) {
        var retry = !relatedRequestObj
            ? function () { return main().then(resolve).catch(reject); }
            : function () { return request_1.default(relatedRequestObj).then(relatedRequestObj._resolve).catch(relatedRequestObj._reject); };
        return checkLogin().then(function () {
            return config_1.default.doNotCheckSession ? Promise.resolve() : checkSession();
        }, function (_a) {
            var title = _a.title, content = _a.content;
            errorHandler_1.default.doError(title, content, retry);
            return reject({ title: title, content: content });
        }).then(function () {
            return resolve();
        }, function (_a) {
            var title = _a.title, content = _a.content;
            errorHandler_1.default.doError(title, content, retry);
            return reject({ title: title, content: content });
        });
    });
}
exports.default = {
    main: main,
    setSession: setSession,
    delSession: delSession
};


/***/ }),

/***/ "./src/module/taskManager.ts":
/*!***********************************!*\
  !*** ./src/module/taskManager.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var requestHandler_1 = __webpack_require__(/*! ./requestHandler */ "./src/module/requestHandler.ts");
var taskQueue = {};
var waitRedoTask = [];
function addSessionTask(task, obj) {
    if (!obj.notNeedSession) {
        var index = obj.tag + '';
        taskQueue[index] = {
            task: task,
            obj: obj
        };
    }
}
function abortSessionTask() {
    for (var tag in taskQueue) {
        var data = taskQueue[tag];
        if (data.task && data.obj) {
            data.task.abort();
            data.obj.aborted = true;
            delSessionTask(data.obj.tag);
            waitRedoTask.push(data.obj);
        }
    }
}
function redoSessionTask() {
    if (!waitRedoTask)
        return;
    if (waitRedoTask.length === 0)
        return;
    for (var _i = 0, waitRedoTask_1 = waitRedoTask; _i < waitRedoTask_1.length; _i++) {
        var taskObj = waitRedoTask_1[_i];
        requestHandler_1.default.request(taskObj);
    }
    waitRedoTask = [];
}
function delSessionTask(tag) {
    var index = tag + '';
    if (taskQueue[index]) {
        taskQueue[index] = null;
        delete taskQueue[index];
    }
}
exports.default = {
    addSessionTask: addSessionTask,
    delSessionTask: delSessionTask,
    abortSessionTask: abortSessionTask,
    redoSessionTask: redoSessionTask,
};


/***/ }),

/***/ "./src/store/config.ts":
/*!*****************************!*\
  !*** ./src/store/config.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var defaultConfig = {
    sessionName: {
        session: 'session',
    },
    loginTrigger: function () {
        return false;
    },
    codeToSession: {
        url: "",
        success: function () { }
    },
    successTrigger: function () {
        return true;
    },
    setHeader: {},
    urlPerfix: "",
    doNotCheckSession: false,
    errorTitle: "操作失败",
    errorContent: function (res) {
        return res;
    },
    errorRetryBtn: false,
    reLoginLimit: 3,
    errorCallback: null,
    reportCGI: false,
    mockJson: false,
    globalData: false,
    sessionExpireKey: "sessionExpireKey"
};
exports.default = defaultConfig;


/***/ }),

/***/ "./src/store/status.ts":
/*!*****************************!*\
  !*** ./src/store/status.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    session: '',
    sessionExpire: Infinity
};


/***/ }),

/***/ "./src/util/jsonSuperset.ts":
/*!**********************************!*\
  !*** ./src/util/jsonSuperset.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LINEFEED = /\u000A/g;
var CARRIAGERETURN = /\u000D/g;
var LINE_SEPARATOR = /\u2028/g;
var PARAGRAPH_SEPARATOR = /\u2029/g;
function replace(res) {
    res = res.replace(LINEFEED, "");
    res = res.replace(CARRIAGERETURN, "");
    res = res.replace(LINE_SEPARATOR, "");
    res = res.replace(PARAGRAPH_SEPARATOR, "");
    return res;
}
exports.default = replace;


/***/ }),

/***/ "./src/util/loading.ts":
/*!*****************************!*\
  !*** ./src/util/loading.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function show(txt) {
    wx.showToast({
        title: typeof txt === 'boolean' ? '加载中' : txt,
        icon: 'loading',
        mask: true,
        duration: 60000
    });
}
function hide() {
    wx.hideToast({});
}
exports.default = {
    show: show,
    hide: hide
};


/***/ }),

/***/ "./src/util/url.ts":
/*!*************************!*\
  !*** ./src/util/url.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
function setParams(url, params) {
    if (url === void 0) { url = ""; }
    var queryStringIndex = url.indexOf("?");
    var kvp = {};
    if (queryStringIndex >= 0) {
        var oldQueryString_1 = url.substr(queryStringIndex + 1).split("&");
        oldQueryString_1.forEach(function (x, i) {
            var kv = oldQueryString_1[i].split("=");
            kvp[kv[0]] = kv[1];
        });
    }
    kvp = __assign(__assign({}, kvp), params);
    var queryString = Object.keys(kvp)
        .map(function (key) {
        return key + "=" + encodeURI(kvp[key]);
    })
        .join("&");
    if (queryStringIndex >= 0) {
        return url.substring(0, queryStringIndex + 1) + queryString;
    }
    else {
        return url + "?" + queryString;
    }
}
exports.default = {
    setParams: setParams
};


/***/ }),

/***/ "./src/version.ts":
/*!************************!*\
  !*** ./src/version.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.version = void 0;
var version = "1.2.15";
exports.version = version;


/***/ })

/******/ })["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZVJlcXVlc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VSZXF1ZXN0Ly4vc3JjL2FwaS9nZXRDb25maWcudHMiLCJ3ZWJwYWNrOi8vd2VSZXF1ZXN0Ly4vc3JjL2FwaS9nZXRTZXNzaW9uLnRzIiwid2VicGFjazovL3dlUmVxdWVzdC8uL3NyYy9hcGkvaW5pdC50cyIsIndlYnBhY2s6Ly93ZVJlcXVlc3QvLi9zcmMvYXBpL2xvZ2luLnRzIiwid2VicGFjazovL3dlUmVxdWVzdC8uL3NyYy9hcGkvcmVxdWVzdC50cyIsIndlYnBhY2s6Ly93ZVJlcXVlc3QvLi9zcmMvYXBpL3NldFNlc3Npb24udHMiLCJ3ZWJwYWNrOi8vd2VSZXF1ZXN0Ly4vc3JjL2FwaS91cGxvYWRGaWxlLnRzIiwid2VicGFjazovL3dlUmVxdWVzdC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly93ZVJlcXVlc3QvLi9zcmMvbW9kdWxlL2NhY2hlTWFuYWdlci50cyIsIndlYnBhY2s6Ly93ZVJlcXVlc3QvLi9zcmMvbW9kdWxlL2NhdGNoSGFuZGxlci50cyIsIndlYnBhY2s6Ly93ZVJlcXVlc3QvLi9zcmMvbW9kdWxlL2R1cmF0aW9uUmVwb3J0ZXIudHMiLCJ3ZWJwYWNrOi8vd2VSZXF1ZXN0Ly4vc3JjL21vZHVsZS9lcnJvckhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vd2VSZXF1ZXN0Ly4vc3JjL21vZHVsZS9tb2NrTWFuYWdlci50cyIsIndlYnBhY2s6Ly93ZVJlcXVlc3QvLi9zcmMvbW9kdWxlL3JlcXVlc3RIYW5kbGVyLnRzIiwid2VicGFjazovL3dlUmVxdWVzdC8uL3NyYy9tb2R1bGUvcmVzcG9uc2VIYW5kbGVyLnRzIiwid2VicGFjazovL3dlUmVxdWVzdC8uL3NyYy9tb2R1bGUvc2Vzc2lvbk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vd2VSZXF1ZXN0Ly4vc3JjL21vZHVsZS90YXNrTWFuYWdlci50cyIsIndlYnBhY2s6Ly93ZVJlcXVlc3QvLi9zcmMvc3RvcmUvY29uZmlnLnRzIiwid2VicGFjazovL3dlUmVxdWVzdC8uL3NyYy9zdG9yZS9zdGF0dXMudHMiLCJ3ZWJwYWNrOi8vd2VSZXF1ZXN0Ly4vc3JjL3V0aWwvanNvblN1cGVyc2V0LnRzIiwid2VicGFjazovL3dlUmVxdWVzdC8uL3NyYy91dGlsL2xvYWRpbmcudHMiLCJ3ZWJwYWNrOi8vd2VSZXF1ZXN0Ly4vc3JjL3V0aWwvdXJsLnRzIiwid2VicGFjazovL3dlUmVxdWVzdC8uL3NyYy92ZXJzaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGVBQWUsbUJBQU8sQ0FBQyw4Q0FBaUI7QUFDeEMsZUFBZSxtQkFBTyxDQUFDLDhDQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNYWTtB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Q0xhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDYmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaEJhO0FBQ2I7QUFDQTtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLHlCQUF5QixVQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkNhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSxjQUFjLFFBQVc7QUFDekIiLCJmaWxlIjoid2VSZXF1ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb25maWdfMSA9IHJlcXVpcmUoXCIuLi9zdG9yZS9jb25maWdcIik7XG52YXIgc3RhdHVzXzEgPSByZXF1aXJlKFwiLi4vc3RvcmUvc3RhdHVzXCIpO1xuZXhwb3J0cy5kZWZhdWx0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB1cmxQZXJmaXg6IGNvbmZpZ18xLmRlZmF1bHQudXJsUGVyZml4LFxuICAgICAgICBzZXNzaW9uRXhwaXJlVGltZTogY29uZmlnXzEuZGVmYXVsdC5zZXNzaW9uRXhwaXJlVGltZSxcbiAgICAgICAgc2Vzc2lvbkV4cGlyZUtleTogY29uZmlnXzEuZGVmYXVsdC5zZXNzaW9uRXhwaXJlS2V5LFxuICAgICAgICBzZXNzaW9uRXhwaXJlOiBzdGF0dXNfMS5kZWZhdWx0LnNlc3Npb25FeHBpcmVcbiAgICB9O1xufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBzdGF0dXNfMSA9IHJlcXVpcmUoXCIuLi9zdG9yZS9zdGF0dXNcIik7XG5leHBvcnRzLmRlZmF1bHQgPSAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBzdGF0dXNfMS5kZWZhdWx0LnNlc3Npb247XG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbmZpZ18xID0gcmVxdWlyZShcIi4uL3N0b3JlL2NvbmZpZ1wiKTtcbnZhciBzdGF0dXNfMSA9IHJlcXVpcmUoXCIuLi9zdG9yZS9zdGF0dXNcIik7XG5leHBvcnRzLmRlZmF1bHQgPSAoZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIE9iamVjdC5hc3NpZ24oY29uZmlnXzEuZGVmYXVsdCwgcGFyYW1zKTtcbiAgICB0cnkge1xuICAgICAgICB2YXIgZGF0YSA9IHt9O1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gY29uZmlnXzEuZGVmYXVsdC5zZXNzaW9uTmFtZSkge1xuICAgICAgICAgICAgdmFyIHN0b3JhZ2VLZXkgPSBjb25maWdfMS5kZWZhdWx0LnNlc3Npb25OYW1lW2tleV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB3eC5nZXRTdG9yYWdlU3luYyhzdG9yYWdlS2V5KSB8fCAnJztcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGRhdGFba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN0YXR1c18xLmRlZmF1bHQuc2Vzc2lvbiA9IGRhdGE7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3d4LmdldFN0b3JhZ2VTeW5jOmZhaWwsIGNhbiBub3QgZ2V0IHNlc3Npb24uJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIHN0YXR1c18xLmRlZmF1bHQuc2Vzc2lvbkV4cGlyZSA9IHd4LmdldFN0b3JhZ2VTeW5jKGNvbmZpZ18xLmRlZmF1bHQuc2Vzc2lvbkV4cGlyZUtleSB8fCBcInNlc3Npb25FeHBpcmVLZXlcIikgfHwgSW5maW5pdHk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3d4LmdldFN0b3JhZ2VTeW5jOmZhaWwsIGNhbiBub3QgZ2V0IHNlc3Npb25FeHBpcmUuJyk7XG4gICAgfVxufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBzZXNzaW9uTWFuYWdlcl8xID0gcmVxdWlyZShcIi4uL21vZHVsZS9zZXNzaW9uTWFuYWdlclwiKTtcbmV4cG9ydHMuZGVmYXVsdCA9IChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHNlc3Npb25NYW5hZ2VyXzEuZGVmYXVsdC5tYWluKCk7XG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlcXVlc3RIYW5kbGVyXzEgPSByZXF1aXJlKFwiLi4vbW9kdWxlL3JlcXVlc3RIYW5kbGVyXCIpO1xuZXhwb3J0cy5kZWZhdWx0ID0gKGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXJfMS5kZWZhdWx0LnJlcXVlc3Qob2JqKTtcbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgc2Vzc2lvbk1hbmFnZXJfMSA9IHJlcXVpcmUoXCIuLi9tb2R1bGUvc2Vzc2lvbk1hbmFnZXJcIik7XG5leHBvcnRzLmRlZmF1bHQgPSAoZnVuY3Rpb24gKHNlc3Npb24pIHtcbiAgICBzZXNzaW9uTWFuYWdlcl8xLmRlZmF1bHQuc2V0U2Vzc2lvbihzZXNzaW9uKTtcbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVxdWVzdEhhbmRsZXJfMSA9IHJlcXVpcmUoXCIuLi9tb2R1bGUvcmVxdWVzdEhhbmRsZXJcIik7XG5leHBvcnRzLmRlZmF1bHQgPSAoZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcl8xLmRlZmF1bHQudXBsb2FkRmlsZShvYmopO1xufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBpbml0XzEgPSByZXF1aXJlKFwiLi9hcGkvaW5pdFwiKTtcbnZhciByZXF1ZXN0XzEgPSByZXF1aXJlKFwiLi9hcGkvcmVxdWVzdFwiKTtcbnZhciB1cGxvYWRGaWxlXzEgPSByZXF1aXJlKFwiLi9hcGkvdXBsb2FkRmlsZVwiKTtcbnZhciBzZXRTZXNzaW9uXzEgPSByZXF1aXJlKFwiLi9hcGkvc2V0U2Vzc2lvblwiKTtcbnZhciBsb2dpbl8xID0gcmVxdWlyZShcIi4vYXBpL2xvZ2luXCIpO1xudmFyIGdldFNlc3Npb25fMSA9IHJlcXVpcmUoXCIuL2FwaS9nZXRTZXNzaW9uXCIpO1xudmFyIGdldENvbmZpZ18xID0gcmVxdWlyZShcIi4vYXBpL2dldENvbmZpZ1wiKTtcbnZhciB2ZXJzaW9uXzEgPSByZXF1aXJlKFwiLi92ZXJzaW9uXCIpO1xudmFyIHdlUmVxdWVzdE9iamVjdCA9IHtcbiAgICBpbml0OiBpbml0XzEuZGVmYXVsdCxcbiAgICByZXF1ZXN0OiByZXF1ZXN0XzEuZGVmYXVsdCxcbiAgICB1cGxvYWRGaWxlOiB1cGxvYWRGaWxlXzEuZGVmYXVsdCxcbiAgICBzZXRTZXNzaW9uOiBzZXRTZXNzaW9uXzEuZGVmYXVsdCxcbiAgICBsb2dpbjogbG9naW5fMS5kZWZhdWx0LFxuICAgIGdldFNlc3Npb246IGdldFNlc3Npb25fMS5kZWZhdWx0LFxuICAgIGdldENvbmZpZzogZ2V0Q29uZmlnXzEuZGVmYXVsdCxcbiAgICB2ZXJzaW9uOiB2ZXJzaW9uXzEudmVyc2lvblxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IHdlUmVxdWVzdE9iamVjdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZ2V0KG9iaikge1xuICAgIGlmICghb2JqLm9yaWdpblVybCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHd4LmdldFN0b3JhZ2Uoe1xuICAgICAgICBrZXk6IG9iai5vcmlnaW5VcmwsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgIGlmIChvYmouY2FjaGUgPT09IHRydWUgfHxcbiAgICAgICAgICAgICAgICAodHlwZW9mIG9iai5jYWNoZSA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jYWNoZShyZXMuZGF0YSkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmouc3VjY2VzcyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iai5zdWNjZXNzKHJlcy5kYXRhLCB7IGlzQ2FjaGU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmouY29tcGxldGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIG9iai5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBzZXQob2JqLCByZWFsRGF0YSkge1xuICAgIGlmICghb2JqLm9yaWdpblVybCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChvYmouY2FjaGUgPT09IHRydWUgfHxcbiAgICAgICAgKHR5cGVvZiBvYmouY2FjaGUgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY2FjaGUocmVhbERhdGEpKSkge1xuICAgICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAgICAgIGtleTogb2JqLm9yaWdpblVybCxcbiAgICAgICAgICAgIGRhdGE6IHJlYWxEYXRhXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBnZXQ6IGdldCxcbiAgICBzZXQ6IHNldFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jYXRjaEhhbmRsZXIgPSB2b2lkIDA7XG52YXIgZXJyb3JIYW5kbGVyXzEgPSByZXF1aXJlKFwiLi9lcnJvckhhbmRsZXJcIik7XG5mdW5jdGlvbiBjYXRjaEhhbmRsZXIoZSwgb2JqLCByZWplY3QpIHtcbiAgICB2YXIgdHlwZSA9IGUudHlwZSwgcmVzID0gZS5yZXM7XG4gICAgaWYgKG9iai5jYXRjaEVycm9yKSB7XG4gICAgICAgIGlmICh0eXBlID09PSAnaHR0cC1lcnJvcicpIHtcbiAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKHJlcy5zdGF0dXNDb2RlLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSAndXBsb2FkLWVycm9yJykge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IocmVzKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ2xvZ2ljLWVycm9yJykge1xuICAgICAgICAgICAgdmFyIG1zZyA9IGVycm9ySGFuZGxlcl8xLmRlZmF1bHQuZ2V0RXJyb3JNc2cocmVzKTtcbiAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKG1zZy5jb250ZW50KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoZS50eXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3JIYW5kbGVyXzEuZGVmYXVsdC5sb2dpY0Vycm9yKG9iaiwgZS5yZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuY2F0Y2hIYW5kbGVyID0gY2F0Y2hIYW5kbGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29uZmlnXzEgPSByZXF1aXJlKFwiLi4vc3RvcmUvY29uZmlnXCIpO1xudmFyIHJlcXVlc3RfMSA9IHJlcXVpcmUoXCIuLi9hcGkvcmVxdWVzdFwiKTtcbmZ1bmN0aW9uIHN0YXJ0KG9iaikge1xuICAgIG9iai5fcmVwb3J0U3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59XG5mdW5jdGlvbiBlbmQob2JqKSB7XG4gICAgb2JqLl9yZXBvcnRFbmRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgaWYgKG9iai5yZXBvcnQgJiYgb2JqLl9yZXBvcnRTdGFydFRpbWUpIHtcbiAgICAgICAgcmVwb3J0KG9iai5yZXBvcnQsIG9iai5fcmVwb3J0U3RhcnRUaW1lLCBvYmouX3JlcG9ydEVuZFRpbWUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHJlcG9ydChuYW1lLCBzdGFydFRpbWUsIGVuZFRpbWUpIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZ18xLmRlZmF1bHQucmVwb3J0Q0dJID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY29uZmlnXzEuZGVmYXVsdC5yZXBvcnRDR0kobmFtZSwgc3RhcnRUaW1lLCBlbmRUaW1lLCByZXF1ZXN0XzEuZGVmYXVsdCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIHN0YXJ0OiBzdGFydCxcbiAgICBlbmQ6IGVuZCxcbiAgICByZXBvcnQ6IHJlcG9ydFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbmZpZ18xID0gcmVxdWlyZShcIi4uL3N0b3JlL2NvbmZpZ1wiKTtcbnZhciByZXF1ZXN0XzEgPSByZXF1aXJlKFwiLi4vYXBpL3JlcXVlc3RcIik7XG5mdW5jdGlvbiBzeXN0ZW1FcnJvcihvYmosIHJlcykge1xuICAgIGlmICh0eXBlb2Ygb2JqLmZhaWwgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBvYmouZmFpbChyZXMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIHJldHJ5ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQob2JqKS50aGVuKG9iai5fcmVzb2x2ZSkuY2F0Y2gob2JqLl9yZWplY3QpOyB9O1xuICAgICAgICBkb0Vycm9yKFwiXCIsIHJlcy5lcnJNc2csIHJldHJ5KTtcbiAgICB9XG59XG5mdW5jdGlvbiBsb2dpY0Vycm9yKG9iaiwgcmVzKSB7XG4gICAgaWYgKHR5cGVvZiBvYmouZmFpbCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIG9iai5mYWlsKHJlcyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgX2EgPSBnZXRFcnJvck1zZyhyZXMpLCB0aXRsZSA9IF9hLnRpdGxlLCBjb250ZW50ID0gX2EuY29udGVudDtcbiAgICAgICAgdmFyIHJldHJ5ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQob2JqKS50aGVuKG9iai5fcmVzb2x2ZSkuY2F0Y2gob2JqLl9yZWplY3QpOyB9O1xuICAgICAgICBkb0Vycm9yKHRpdGxlLCBjb250ZW50LCByZXRyeSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgY29uZmlnXzEuZGVmYXVsdC5lcnJvckNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY29uZmlnXzEuZGVmYXVsdC5lcnJvckNhbGxiYWNrKG9iaiwgcmVzKTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcihyZXMpO1xufVxuZnVuY3Rpb24gZ2V0RXJyb3JNc2cocmVzKSB7XG4gICAgdmFyIHRpdGxlID0gXCJcIjtcbiAgICBpZiAodHlwZW9mIGNvbmZpZ18xLmRlZmF1bHQuZXJyb3JUaXRsZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aXRsZSA9IGNvbmZpZ18xLmRlZmF1bHQuZXJyb3JUaXRsZShyZXMuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgY29uZmlnXzEuZGVmYXVsdC5lcnJvclRpdGxlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHRpdGxlID0gY29uZmlnXzEuZGVmYXVsdC5lcnJvclRpdGxlO1xuICAgIH1cbiAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgaWYgKHR5cGVvZiBjb25maWdfMS5kZWZhdWx0LmVycm9yQ29udGVudCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb250ZW50ID0gY29uZmlnXzEuZGVmYXVsdC5lcnJvckNvbnRlbnQocmVzLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGNvbmZpZ18xLmRlZmF1bHQuZXJyb3JDb250ZW50ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNvbnRlbnQgPSBjb25maWdfMS5kZWZhdWx0LmVycm9yQ29udGVudDtcbiAgICB9XG4gICAgcmV0dXJuIHsgdGl0bGU6IHRpdGxlLCBjb250ZW50OiBjb250ZW50IH07XG59XG5mdW5jdGlvbiBkb0Vycm9yKHRpdGxlLCBjb250ZW50LCByZXRyeSkge1xuICAgIHZhciBzaG93RXJyb3JSZXRyeUJ0biA9IGNvbmZpZ18xLmRlZmF1bHQuZXJyb3JSZXRyeUJ0biAmJiB0eXBlb2YgcmV0cnkgPT09IFwiZnVuY3Rpb25cIjtcbiAgICB3eC5zaG93TW9kYWwoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgY29udGVudDogY29udGVudCB8fCBcIue9kee7nOaIluacjeWKoeW8guW4uO+8jOivt+eojeWQjumHjeivlVwiLFxuICAgIH0sICFzaG93RXJyb3JSZXRyeUJ0biA/IHtcbiAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICB9IDoge1xuICAgICAgICBzaG93Q2FuY2VsOiB0cnVlLFxuICAgICAgICBjb25maXJtVGV4dDogJ+mHjeivlScsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSAmJiB0eXBlb2YgcmV0cnkgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICByZXRyeSgpO1xuICAgICAgICB9XG4gICAgfSkpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIHN5c3RlbUVycm9yOiBzeXN0ZW1FcnJvcixcbiAgICBsb2dpY0Vycm9yOiBsb2dpY0Vycm9yLFxuICAgIGRvRXJyb3I6IGRvRXJyb3IsXG4gICAgZ2V0RXJyb3JNc2c6IGdldEVycm9yTXNnXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29uZmlnXzEgPSByZXF1aXJlKFwiLi4vc3RvcmUvY29uZmlnXCIpO1xudmFyIGxvYWRpbmdfMSA9IHJlcXVpcmUoXCIuLi91dGlsL2xvYWRpbmdcIik7XG5mdW5jdGlvbiBnZXQob2JqKSB7XG4gICAgaWYgKCEoY29uZmlnXzEuZGVmYXVsdC5tb2NrSnNvbltvYmoudXJsXSB8fCAob2JqLm9yaWdpblVybCAmJiBjb25maWdfMS5kZWZhdWx0Lm1vY2tKc29uW29iai5vcmlnaW5VcmxdKSkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignbW9jayDmsqHmnInlr7nlupTmjqXlj6PnmoTmlbDmja4nKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZGF0YSA9IGNvbmZpZ18xLmRlZmF1bHQubW9ja0pzb25bb2JqLnVybF0gfHwgKG9iai5vcmlnaW5VcmwgPyBjb25maWdfMS5kZWZhdWx0Lm1vY2tKc29uW29iai5vcmlnaW5VcmxdIDogJycpO1xuICAgIGRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICB2YXIgcmVzID0ge1xuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBzdGF0dXNDb2RlOiAyMDBcbiAgICB9O1xuICAgIGxvYWRpbmdfMS5kZWZhdWx0LmhpZGUoKTtcbiAgICByZXR1cm4gcmVzO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGdldDogZ2V0XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGxvYWRpbmdfMSA9IHJlcXVpcmUoXCIuLi91dGlsL2xvYWRpbmdcIik7XG52YXIgY29uZmlnXzEgPSByZXF1aXJlKFwiLi4vc3RvcmUvY29uZmlnXCIpO1xudmFyIHN0YXR1c18xID0gcmVxdWlyZShcIi4uL3N0b3JlL3N0YXR1c1wiKTtcbnZhciBtb2NrTWFuYWdlcl8xID0gcmVxdWlyZShcIi4vbW9ja01hbmFnZXJcIik7XG52YXIgY2FjaGVNYW5hZ2VyXzEgPSByZXF1aXJlKFwiLi9jYWNoZU1hbmFnZXJcIik7XG52YXIgc2Vzc2lvbk1hbmFnZXJfMSA9IHJlcXVpcmUoXCIuL3Nlc3Npb25NYW5hZ2VyXCIpO1xudmFyIHJlc3BvbnNlSGFuZGxlcl8xID0gcmVxdWlyZShcIi4vcmVzcG9uc2VIYW5kbGVyXCIpO1xudmFyIGR1cmF0aW9uUmVwb3J0ZXJfMSA9IHJlcXVpcmUoXCIuL2R1cmF0aW9uUmVwb3J0ZXJcIik7XG52YXIgdXJsXzEgPSByZXF1aXJlKFwiLi4vdXRpbC91cmxcIik7XG52YXIgZXJyb3JIYW5kbGVyXzEgPSByZXF1aXJlKFwiLi9lcnJvckhhbmRsZXJcIik7XG52YXIgY2F0Y2hIYW5kbGVyXzEgPSByZXF1aXJlKFwiLi9jYXRjaEhhbmRsZXJcIik7XG52YXIgdGFza01hbmFnZXJfMSA9IHJlcXVpcmUoXCIuL3Rhc2tNYW5hZ2VyXCIpO1xudmFyIHJlcXVlc3RUYWcgPSAwO1xuZnVuY3Rpb24gZm9ybWF0KG9yaWdpblVybCkge1xuICAgIGlmIChvcmlnaW5Vcmwuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgICAgIHJldHVybiBvcmlnaW5Vcmw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgdXJsUGVyZml4ID0gY29uZmlnXzEuZGVmYXVsdC51cmxQZXJmaXg7XG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnXzEuZGVmYXVsdC51cmxQZXJmaXggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdXJsUGVyZml4ID0gY29uZmlnXzEuZGVmYXVsdC51cmxQZXJmaXgoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXJsUGVyZml4ICsgb3JpZ2luVXJsO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHByZURvKG9iaiwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKHR5cGVvZiBvYmouYmVmb3JlU2VuZCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIG9iai5iZWZvcmVTZW5kKCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb2JqLnJlTG9naW5Db3VudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBvYmoucmVMb2dpbkNvdW50ID0gMDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG9iai5yZUxvZ2luQ291bnQrKztcbiAgICB9XG4gICAgaWYgKG9iai5zaG93TG9hZGluZykge1xuICAgICAgICBsb2FkaW5nXzEuZGVmYXVsdC5zaG93KG9iai5zaG93TG9hZGluZyk7XG4gICAgfVxuICAgIGlmICghb2JqLm9yaWdpblVybCkge1xuICAgICAgICBvYmoub3JpZ2luVXJsID0gb2JqLnVybDtcbiAgICAgICAgb2JqLnVybCA9IGZvcm1hdChvYmoudXJsKTtcbiAgICB9XG4gICAgb2JqLl9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICBvYmouX3JlamVjdCA9IHJlamVjdDtcbiAgICBvYmoudGFnID0gcmVxdWVzdFRhZysrO1xuICAgIGlmICh0eXBlb2Ygb2JqLm5vdE5lZWRTZXNzaW9uID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIG9iai5ub3ROZWVkU2Vzc2lvbiA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9iai5hYm9ydGVkID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIG9iai5hYm9ydGVkID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBpbml0aWFsaXplUmVxdWVzdE9iaihvYmopIHtcbiAgICBpZiAoIW9iai5kYXRhKSB7XG4gICAgICAgIG9iai5kYXRhID0ge307XG4gICAgfVxuICAgIGlmIChvYmouZGF0YUxvYWQgJiYgdHlwZW9mIG9iai5kYXRhTG9hZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvYmouZGF0YSA9IG9iai5kYXRhTG9hZChvYmouZGF0YSk7XG4gICAgfVxuICAgIG9iai5oZWFkZXIgPSBvYmouaGVhZGVyID8gb2JqLmhlYWRlciA6IHt9O1xuICAgIGlmICh0eXBlb2YgY29uZmlnXzEuZGVmYXVsdC5zZXRIZWFkZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIGhlYWRlciA9IGNvbmZpZ18xLmRlZmF1bHQuc2V0SGVhZGVyKCk7XG4gICAgICAgIGlmICh0eXBlb2YgaGVhZGVyID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgb2JqLmhlYWRlciA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvYmouaGVhZGVyKSwgaGVhZGVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgY29uZmlnXzEuZGVmYXVsdC5zZXRIZWFkZXIgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG9iai5oZWFkZXIgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb2JqLmhlYWRlciksIGNvbmZpZ18xLmRlZmF1bHQuc2V0SGVhZGVyKTtcbiAgICB9XG4gICAgaWYgKG9iai5vcmlnaW5VcmwgIT09IGNvbmZpZ18xLmRlZmF1bHQuY29kZVRvU2Vzc2lvbi51cmwgJiYgc3RhdHVzXzEuZGVmYXVsdC5zZXNzaW9uKSB7XG4gICAgICAgIG9iai5kYXRhID0gX19hc3NpZ24oX19hc3NpZ24oe30sIG9iai5kYXRhKSwgc3RhdHVzXzEuZGVmYXVsdC5zZXNzaW9uKTtcbiAgICB9XG4gICAgdmFyIGdkID0gZ2V0R2xvYmFsRGF0YSgpO1xuICAgIG9iai5kYXRhID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGdkKSwgb2JqLmRhdGEpO1xuICAgIG9iai5tZXRob2QgPSBvYmoubWV0aG9kIHx8ICdHRVQnO1xuICAgIG9iai5kYXRhVHlwZSA9IG9iai5kYXRhVHlwZSB8fCAnanNvbic7XG4gICAgaWYgKCFjb25maWdfMS5kZWZhdWx0LmRvTm90VXNlUXVlcnlTdHJpbmcgJiYgb2JqLm1ldGhvZCAhPT0gXCJHRVRcIikge1xuICAgICAgICBpZiAoc3RhdHVzXzEuZGVmYXVsdC5zZXNzaW9uKSB7XG4gICAgICAgICAgICBvYmoudXJsID0gdXJsXzEuZGVmYXVsdC5zZXRQYXJhbXMob2JqLnVybCwgX19hc3NpZ24oe30sIHN0YXR1c18xLmRlZmF1bHQuc2Vzc2lvbikpO1xuICAgICAgICB9XG4gICAgICAgIG9iai51cmwgPSB1cmxfMS5kZWZhdWx0LnNldFBhcmFtcyhvYmoudXJsLCBnZCk7XG4gICAgfVxuICAgIGR1cmF0aW9uUmVwb3J0ZXJfMS5kZWZhdWx0LnN0YXJ0KG9iaik7XG4gICAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIGluaXRpYWxpemVVcGxvYWRGaWxlT2JqKG9iaikge1xuICAgIGlmICghb2JqLmZvcm1EYXRhKSB7XG4gICAgICAgIG9iai5mb3JtRGF0YSA9IHt9O1xuICAgIH1cbiAgICBpZiAob2JqLmRhdGFMb2FkICYmIHR5cGVvZiBvYmouZGF0YUxvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb2JqLmZvcm1EYXRhID0gb2JqLmRhdGFMb2FkKG9iai5mb3JtRGF0YSk7XG4gICAgfVxuICAgIG9iai5oZWFkZXIgPSBvYmouaGVhZGVyID8gb2JqLmhlYWRlciA6IHt9O1xuICAgIGlmICh0eXBlb2YgY29uZmlnXzEuZGVmYXVsdC5zZXRIZWFkZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIGhlYWRlciA9IGNvbmZpZ18xLmRlZmF1bHQuc2V0SGVhZGVyKCk7XG4gICAgICAgIGlmICh0eXBlb2YgaGVhZGVyID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgb2JqLmhlYWRlciA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvYmouaGVhZGVyKSwgaGVhZGVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgY29uZmlnXzEuZGVmYXVsdC5zZXRIZWFkZXIgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG9iai5oZWFkZXIgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb2JqLmhlYWRlciksIGNvbmZpZ18xLmRlZmF1bHQuc2V0SGVhZGVyKTtcbiAgICB9XG4gICAgaWYgKG9iai5vcmlnaW5VcmwgIT09IGNvbmZpZ18xLmRlZmF1bHQuY29kZVRvU2Vzc2lvbi51cmwgJiYgc3RhdHVzXzEuZGVmYXVsdC5zZXNzaW9uKSB7XG4gICAgICAgIG9iai5mb3JtRGF0YSA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvYmouZm9ybURhdGEpLCBzdGF0dXNfMS5kZWZhdWx0LnNlc3Npb24pO1xuICAgIH1cbiAgICB2YXIgZ2QgPSBnZXRHbG9iYWxEYXRhKCk7XG4gICAgb2JqLmZvcm1EYXRhID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGdkKSwgb2JqLmZvcm1EYXRhKTtcbiAgICBpZiAoIWNvbmZpZ18xLmRlZmF1bHQuZG9Ob3RVc2VRdWVyeVN0cmluZykge1xuICAgICAgICBpZiAoc3RhdHVzXzEuZGVmYXVsdC5zZXNzaW9uKSB7XG4gICAgICAgICAgICBvYmoudXJsID0gdXJsXzEuZGVmYXVsdC5zZXRQYXJhbXMob2JqLnVybCwgX19hc3NpZ24oe30sIHN0YXR1c18xLmRlZmF1bHQuc2Vzc2lvbikpO1xuICAgICAgICB9XG4gICAgICAgIG9iai51cmwgPSB1cmxfMS5kZWZhdWx0LnNldFBhcmFtcyhvYmoudXJsLCBnZCk7XG4gICAgfVxuICAgIGR1cmF0aW9uUmVwb3J0ZXJfMS5kZWZhdWx0LnN0YXJ0KG9iaik7XG4gICAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIGdldEdsb2JhbERhdGEoKSB7XG4gICAgdmFyIGdkID0ge307XG4gICAgaWYgKHR5cGVvZiBjb25maWdfMS5kZWZhdWx0Lmdsb2JhbERhdGEgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBnZCA9IGNvbmZpZ18xLmRlZmF1bHQuZ2xvYmFsRGF0YSgpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgY29uZmlnXzEuZGVmYXVsdC5nbG9iYWxEYXRhID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGdkID0gY29uZmlnXzEuZGVmYXVsdC5nbG9iYWxEYXRhO1xuICAgIH1cbiAgICByZXR1cm4gZ2Q7XG59XG5mdW5jdGlvbiBkb1JlcXVlc3Qob2JqKSB7XG4gICAgb2JqID0gaW5pdGlhbGl6ZVJlcXVlc3RPYmoob2JqKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgcmVxdWVzdFRhc2sgPSB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHVybDogb2JqLnVybCxcbiAgICAgICAgICAgIGRhdGE6IG9iai5kYXRhLFxuICAgICAgICAgICAgbWV0aG9kOiBvYmoubWV0aG9kLFxuICAgICAgICAgICAgaGVhZGVyOiBvYmouaGVhZGVyIHx8IHt9LFxuICAgICAgICAgICAgZGF0YVR5cGU6IG9iai5kYXRhVHlwZSB8fCAnanNvbicsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JIYW5kbGVyXzEuZGVmYXVsdC5zeXN0ZW1FcnJvcihvYmosIHJlcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChyZXMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmouY29tcGxldGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBvYmouY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG9iai5zaG93TG9hZGluZykge1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nXzEuZGVmYXVsdC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGFza01hbmFnZXJfMS5kZWZhdWx0LmFkZFNlc3Npb25UYXNrKHJlcXVlc3RUYXNrLCBvYmopO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZG9VcGxvYWRGaWxlKG9iaikge1xuICAgIG9iaiA9IGluaXRpYWxpemVVcGxvYWRGaWxlT2JqKG9iaik7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgd3gudXBsb2FkRmlsZSh7XG4gICAgICAgICAgICB1cmw6IG9iai51cmwsXG4gICAgICAgICAgICBmaWxlUGF0aDogb2JqLmZpbGVQYXRoIHx8ICcnLFxuICAgICAgICAgICAgbmFtZTogb2JqLm5hbWUgfHwgJycsXG4gICAgICAgICAgICBmb3JtRGF0YTogb2JqLmZvcm1EYXRhLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHJlcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIGVycm9ySGFuZGxlcl8xLmRlZmF1bHQuc3lzdGVtRXJyb3Iob2JqLCByZXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QocmVzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqLmNvbXBsZXRlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChvYmouc2hvd0xvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZ18xLmRlZmF1bHQuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiByZXF1ZXN0KG9iaikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIG9iaiA9IHByZURvKG9iaiwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgaWYgKGNvbmZpZ18xLmRlZmF1bHQubW9ja0pzb24pIHtcbiAgICAgICAgICAgIHZhciBtb2NrUmVzcG9uc2UgPSBtb2NrTWFuYWdlcl8xLmRlZmF1bHQuZ2V0KG9iaik7XG4gICAgICAgICAgICBpZiAobW9ja1Jlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gcmVzcG9uc2VIYW5kbGVyXzEuZGVmYXVsdC5yZXNwb25zZUZvclJlcXVlc3QobW9ja1Jlc3BvbnNlLCBvYmopO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAob2JqLmNhY2hlKSB7XG4gICAgICAgICAgICBjYWNoZU1hbmFnZXJfMS5kZWZhdWx0LmdldChvYmopO1xuICAgICAgICB9XG4gICAgICAgIHNlc3Npb25NYW5hZ2VyXzEuZGVmYXVsdC5tYWluKG9iaikudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9SZXF1ZXN0KG9iaik7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gcmVzcG9uc2VIYW5kbGVyXzEuZGVmYXVsdC5yZXNwb25zZUZvclJlcXVlc3QocmVzLCBvYmopO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gY2F0Y2hIYW5kbGVyXzEuY2F0Y2hIYW5kbGVyKGUsIG9iaiwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiB1cGxvYWRGaWxlKG9iaikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIG9iaiA9IHByZURvKG9iaiwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgaWYgKGNvbmZpZ18xLmRlZmF1bHQubW9ja0pzb24pIHtcbiAgICAgICAgICAgIHZhciBtb2NrUmVzcG9uc2UgPSBtb2NrTWFuYWdlcl8xLmRlZmF1bHQuZ2V0KG9iaik7XG4gICAgICAgICAgICBpZiAobW9ja1Jlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gcmVzcG9uc2VIYW5kbGVyXzEuZGVmYXVsdC5yZXNwb25zZUZvclVwbG9hZEZpbGUobW9ja1Jlc3BvbnNlLCBvYmopO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZXNzaW9uTWFuYWdlcl8xLmRlZmF1bHQubWFpbihvYmopLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGRvVXBsb2FkRmlsZShvYmopO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IHJlc3BvbnNlSGFuZGxlcl8xLmRlZmF1bHQucmVzcG9uc2VGb3JVcGxvYWRGaWxlKHJlcywgb2JqKTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgY2F0Y2hIYW5kbGVyXzEuY2F0Y2hIYW5kbGVyKGUsIG9iaiwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZm9ybWF0OiBmb3JtYXQsXG4gICAgcmVxdWVzdDogcmVxdWVzdCxcbiAgICB1cGxvYWRGaWxlOiB1cGxvYWRGaWxlXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29uZmlnXzEgPSByZXF1aXJlKFwiLi4vc3RvcmUvY29uZmlnXCIpO1xudmFyIHJlcXVlc3RIYW5kbGVyXzEgPSByZXF1aXJlKFwiLi9yZXF1ZXN0SGFuZGxlclwiKTtcbnZhciBlcnJvckhhbmRsZXJfMSA9IHJlcXVpcmUoXCIuL2Vycm9ySGFuZGxlclwiKTtcbnZhciBjYWNoZU1hbmFnZXJfMSA9IHJlcXVpcmUoXCIuL2NhY2hlTWFuYWdlclwiKTtcbnZhciBkdXJhdGlvblJlcG9ydGVyXzEgPSByZXF1aXJlKFwiLi9kdXJhdGlvblJlcG9ydGVyXCIpO1xudmFyIHNlc3Npb25NYW5hZ2VyXzEgPSByZXF1aXJlKFwiLi9zZXNzaW9uTWFuYWdlclwiKTtcbnZhciBqc29uU3VwZXJzZXRfMSA9IHJlcXVpcmUoXCIuLi91dGlsL2pzb25TdXBlcnNldFwiKTtcbnZhciB0YXNrTWFuYWdlcl8xID0gcmVxdWlyZShcIi4vdGFza01hbmFnZXJcIik7XG5mdW5jdGlvbiByZXNwb25zZUZvclJlcXVlc3QocmVzLCBvYmopIHtcbiAgICBpZiAocmVzLnN0YXR1c0NvZGUgPT09IDIwMCkge1xuICAgICAgICBkdXJhdGlvblJlcG9ydGVyXzEuZGVmYXVsdC5lbmQob2JqKTtcbiAgICAgICAgaWYgKG9iai5hYm9ydGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iai5kYXRhVHlwZSA9PT0gJ2pzb24nICYmIHR5cGVvZiByZXMuZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJlcy5kYXRhID0ganNvblN1cGVyc2V0XzEuZGVmYXVsdChyZXMuZGF0YSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlcy5kYXRhID0gSlNPTi5wYXJzZShyZXMuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGlmIChvYmouY2F0Y2hFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlcnJvckhhbmRsZXJfMS5kZWZhdWx0LmxvZ2ljRXJyb3Iob2JqLCByZXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRhc2tNYW5hZ2VyXzEuZGVmYXVsdC5kZWxTZXNzaW9uVGFzayhvYmoudGFnKTtcbiAgICAgICAgaWYgKGNvbmZpZ18xLmRlZmF1bHQubG9naW5UcmlnZ2VyKHJlcy5kYXRhKSAmJiBvYmoucmVMb2dpbkNvdW50ICE9PSB1bmRlZmluZWQgJiYgb2JqLnJlTG9naW5Db3VudCA8IGNvbmZpZ18xLmRlZmF1bHQucmVMb2dpbkxpbWl0KSB7XG4gICAgICAgICAgICBzZXNzaW9uTWFuYWdlcl8xLmRlZmF1bHQuZGVsU2Vzc2lvbigpO1xuICAgICAgICAgICAgdGFza01hbmFnZXJfMS5kZWZhdWx0LmFib3J0U2Vzc2lvblRhc2soKTtcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcl8xLmRlZmF1bHQucmVxdWVzdChvYmopO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbmZpZ18xLmRlZmF1bHQuc3VjY2Vzc1RyaWdnZXIocmVzLmRhdGEpKSB7XG4gICAgICAgICAgICB2YXIgcmVhbERhdGEgPSBcIlwiO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbmZpZ18xLmRlZmF1bHQuc3VjY2Vzc0RhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVhbERhdGEgPSBjb25maWdfMS5kZWZhdWx0LnN1Y2Nlc3NEYXRhKHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlYWxEYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRnVuY3Rpb24gc3VjY2Vzc0RhdGEgb2NjdXIgZXJyb3I6IFwiICsgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW9iai5ub0NhY2hlRmxhc2gpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9iai5zdWNjZXNzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqLnN1Y2Nlc3MocmVhbERhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlYWxEYXRhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhY2hlTWFuYWdlcl8xLmRlZmF1bHQuc2V0KG9iaiwgcmVhbERhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgeyB0eXBlOiAnbG9naWMtZXJyb3InLCByZXM6IHJlcyB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyB7IHR5cGU6ICdodHRwLWVycm9yJywgcmVzOiByZXMgfTtcbiAgICB9XG59XG5mdW5jdGlvbiByZXNwb25zZUZvclVwbG9hZEZpbGUocmVzLCBvYmopIHtcbiAgICBpZiAocmVzLnN0YXR1c0NvZGUgPT09IDIwMCkge1xuICAgICAgICBkdXJhdGlvblJlcG9ydGVyXzEuZGVmYXVsdC5lbmQob2JqKTtcbiAgICAgICAgaWYgKHR5cGVvZiByZXMuZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJlcy5kYXRhID0ganNvblN1cGVyc2V0XzEuZGVmYXVsdChyZXMuZGF0YSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlcy5kYXRhID0gSlNPTi5wYXJzZShyZXMuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGlmIChvYmouY2F0Y2hFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlcnJvckhhbmRsZXJfMS5kZWZhdWx0LmxvZ2ljRXJyb3Iob2JqLCByZXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWdfMS5kZWZhdWx0LmxvZ2luVHJpZ2dlcihyZXMuZGF0YSkgJiYgb2JqLnJlTG9naW5Db3VudCAhPT0gdW5kZWZpbmVkICYmIG9iai5yZUxvZ2luQ291bnQgPCBjb25maWdfMS5kZWZhdWx0LnJlTG9naW5MaW1pdCkge1xuICAgICAgICAgICAgc2Vzc2lvbk1hbmFnZXJfMS5kZWZhdWx0LmRlbFNlc3Npb24oKTtcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcl8xLmRlZmF1bHQudXBsb2FkRmlsZShvYmopO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbmZpZ18xLmRlZmF1bHQuc3VjY2Vzc1RyaWdnZXIocmVzLmRhdGEpKSB7XG4gICAgICAgICAgICB2YXIgcmVhbERhdGEgPSBcIlwiO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbmZpZ18xLmRlZmF1bHQuc3VjY2Vzc0RhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVhbERhdGEgPSBjb25maWdfMS5kZWZhdWx0LnN1Y2Nlc3NEYXRhKHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlYWxEYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRnVuY3Rpb24gc3VjY2Vzc0RhdGEgb2NjdXIgZXJyb3I6IFwiICsgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9iai5zdWNjZXNzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBvYmouc3VjY2VzcyhyZWFsRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVhbERhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyB7IHR5cGU6ICdsb2dpYy1lcnJvcicsIHJlczogcmVzIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IHsgdHlwZTogJ2h0dHAtZXJyb3InLCByZXM6IHJlcyB9O1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICByZXNwb25zZUZvclJlcXVlc3Q6IHJlc3BvbnNlRm9yUmVxdWVzdCxcbiAgICByZXNwb25zZUZvclVwbG9hZEZpbGU6IHJlc3BvbnNlRm9yVXBsb2FkRmlsZVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHN0YXR1c18xID0gcmVxdWlyZShcIi4uL3N0b3JlL3N0YXR1c1wiKTtcbnZhciBjb25maWdfMSA9IHJlcXVpcmUoXCIuLi9zdG9yZS9jb25maWdcIik7XG52YXIgZXJyb3JIYW5kbGVyXzEgPSByZXF1aXJlKFwiLi9lcnJvckhhbmRsZXJcIik7XG52YXIgZHVyYXRpb25SZXBvcnRlcl8xID0gcmVxdWlyZShcIi4vZHVyYXRpb25SZXBvcnRlclwiKTtcbnZhciByZXF1ZXN0SGFuZGxlcl8xID0gcmVxdWlyZShcIi4vcmVxdWVzdEhhbmRsZXJcIik7XG52YXIgbG9hZGluZ18xID0gcmVxdWlyZShcIi4uL3V0aWwvbG9hZGluZ1wiKTtcbnZhciByZXF1ZXN0XzEgPSByZXF1aXJlKFwiLi4vYXBpL3JlcXVlc3RcIik7XG52YXIgdGFza01hbmFnZXJfMSA9IHJlcXVpcmUoXCIuL3Rhc2tNYW5hZ2VyXCIpO1xudmFyIGNoZWNrU2Vzc2lvblByb21pc2UgPSBudWxsO1xuZnVuY3Rpb24gY2hlY2tTZXNzaW9uKCkge1xuICAgIGlmICghY2hlY2tTZXNzaW9uUHJvbWlzZSkge1xuICAgICAgICBjaGVja1Nlc3Npb25Qcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3eC5jaGVja1Nlc3Npb24oKVwiKTtcbiAgICAgICAgICAgIHZhciBzdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgd3guY2hlY2tTZXNzaW9uKHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbFNlc3Npb24oKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRvTG9naW4oKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZW5kID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uUmVwb3J0ZXJfMS5kZWZhdWx0LnJlcG9ydCgnd3hfY2hlY2tTZXNzaW9uJywgc3RhcnQsIGVuZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY2hlY2tTZXNzaW9uUHJvbWlzZTtcbn1cbmZ1bmN0aW9uIGlzU2Vzc2lvbkV4cGlyZU9yRW1wdHkoKSB7XG4gICAgaWYgKCFzdGF0dXNfMS5kZWZhdWx0LnNlc3Npb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChjb25maWdfMS5kZWZhdWx0LnNlc3Npb25FeHBpcmVUaW1lICYmIG5ldyBEYXRlKCkuZ2V0VGltZSgpID4gc3RhdHVzXzEuZGVmYXVsdC5zZXNzaW9uRXhwaXJlKSB7XG4gICAgICAgIGRlbFNlc3Npb24oKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChjb25maWdfMS5kZWZhdWx0LnNlc3Npb25OYW1lKSB7XG4gICAgICAgIHZhciBzdGF0dXNFbXB0eSA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gY29uZmlnXzEuZGVmYXVsdC5zZXNzaW9uTmFtZSkge1xuICAgICAgICAgICAgaWYgKCFzdGF0dXNfMS5kZWZhdWx0LnNlc3Npb25ba2V5XSkge1xuICAgICAgICAgICAgICAgIHN0YXR1c0VtcHR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdHVzRW1wdHkpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBjb25maWdfMS5kZWZhdWx0LnNlc3Npb25OYW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0Z0tleSA9IGNvbmZpZ18xLmRlZmF1bHQuc2Vzc2lvbk5hbWVba2V5XTtcbiAgICAgICAgICAgICAgICB2YXIgc3RhdHVzVmFsdWUgPSB3eC5nZXRTdG9yYWdlU3luYyhzdGdLZXkpO1xuICAgICAgICAgICAgICAgIGlmICghc3RhdHVzVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXNfMS5kZWZhdWx0LnNlc3Npb25ba2V5XSA9IHN0YXR1c1ZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBjaGVja0xvZ2luKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGlmIChpc1Nlc3Npb25FeHBpcmVPckVtcHR5KCkpIHtcbiAgICAgICAgICAgIGNvbmZpZ18xLmRlZmF1bHQuZG9Ob3RDaGVja1Nlc3Npb24gPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRvTG9naW4oKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QocmVzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxudmFyIGxvZ2luUHJvbWlzZSA9IG51bGw7XG5mdW5jdGlvbiBkb0xvZ2luKCkge1xuICAgIGlmICghbG9naW5Qcm9taXNlKSB7XG4gICAgICAgIGxvZ2luUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGxvZ2luKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbG9naW5Qcm9taXNlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0YXNrTWFuYWdlcl8xLmRlZmF1bHQucmVkb1Nlc3Npb25UYXNrKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBsb2dpblByb21pc2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGxvYWRpbmdfMS5kZWZhdWx0LmhpZGUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsb2dpblByb21pc2U7XG59XG5mdW5jdGlvbiBsb2dpbigpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBjb25zb2xlLmxvZygnd3gubG9naW4nKTtcbiAgICAgICAgdmFyIHN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHd4LmxvZ2luKHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLmNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTJTZXNzaW9uKHJlcy5jb2RlKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KHsgdGl0bGU6IFwi55m75b2V5aSx6LSlXCIsIFwiY29udGVudFwiOiBcIuivt+eojeWQjumHjeivlVtjb2RlIOiOt+WPluWksei0pV1cIiB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZW5kID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgZHVyYXRpb25SZXBvcnRlcl8xLmRlZmF1bHQucmVwb3J0KCd3eF9sb2dpbicsIHN0YXJ0LCBlbmQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KHsgdGl0bGU6IFwi55m75b2V5aSx6LSlXCIsIFwiY29udGVudFwiOiByZXMuZXJyTXNnIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHNldFNlc3Npb24oc2Vzc2lvbikge1xuICAgIGNvbmZpZ18xLmRlZmF1bHQuZG9Ob3RDaGVja1Nlc3Npb24gPSB0cnVlO1xuICAgIGlmIChjb25maWdfMS5kZWZhdWx0LnNlc3Npb25FeHBpcmVUaW1lICYmIGNvbmZpZ18xLmRlZmF1bHQuc2Vzc2lvbkV4cGlyZUtleSkge1xuICAgICAgICBzdGF0dXNfMS5kZWZhdWx0LnNlc3Npb25FeHBpcmUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIGNvbmZpZ18xLmRlZmF1bHQuc2Vzc2lvbkV4cGlyZVRpbWU7XG4gICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICAgICAga2V5OiBjb25maWdfMS5kZWZhdWx0LnNlc3Npb25FeHBpcmVLZXksXG4gICAgICAgICAgICBkYXRhOiBTdHJpbmcoc3RhdHVzXzEuZGVmYXVsdC5zZXNzaW9uRXhwaXJlKVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgdmFyIGRhdGEgPSB7fTtcbiAgICBmb3IgKHZhciBrZXkgaW4gc2Vzc2lvbikge1xuICAgICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAgICAgIGtleTogY29uZmlnXzEuZGVmYXVsdC5zZXNzaW9uTmFtZVtrZXldLFxuICAgICAgICAgICAgZGF0YTogc2Vzc2lvbltrZXldLFxuICAgICAgICB9KTtcbiAgICAgICAgZGF0YVtrZXldID0gc2Vzc2lvbltrZXldO1xuICAgIH1cbiAgICBzdGF0dXNfMS5kZWZhdWx0LnNlc3Npb24gPSBPYmplY3QuYXNzaWduKHN0YXR1c18xLmRlZmF1bHQuc2Vzc2lvbiB8fCB7fSwgZGF0YSk7XG59XG5mdW5jdGlvbiBjb2RlMlNlc3Npb24oY29kZSkge1xuICAgIHZhciBkYXRhO1xuICAgIGlmICh0eXBlb2YgY29uZmlnXzEuZGVmYXVsdC5jb2RlVG9TZXNzaW9uLmRhdGEgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBkYXRhID0gY29uZmlnXzEuZGVmYXVsdC5jb2RlVG9TZXNzaW9uLmRhdGEoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRhdGEgPSBjb25maWdfMS5kZWZhdWx0LmNvZGVUb1Nlc3Npb24uZGF0YSB8fCB7fTtcbiAgICB9XG4gICAgaWYgKGNvbmZpZ18xLmRlZmF1bHQuY29kZVRvU2Vzc2lvbi5jb2RlTmFtZSkge1xuICAgICAgICBkYXRhW2NvbmZpZ18xLmRlZmF1bHQuY29kZVRvU2Vzc2lvbi5jb2RlTmFtZV0gPSBjb2RlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZGF0YS5jb2RlID0gY29kZTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiByZXF1ZXN0SGFuZGxlcl8xLmRlZmF1bHQuZm9ybWF0KGNvbmZpZ18xLmRlZmF1bHQuY29kZVRvU2Vzc2lvbi51cmwpLFxuICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgIG1ldGhvZDogY29uZmlnXzEuZGVmYXVsdC5jb2RlVG9TZXNzaW9uLm1ldGhvZCB8fCAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcjogdHlwZW9mIGNvbmZpZ18xLmRlZmF1bHQuc2V0SGVhZGVyID09PSAnZnVuY3Rpb24nID8gY29uZmlnXzEuZGVmYXVsdC5zZXRIZWFkZXIoKSA6IGNvbmZpZ18xLmRlZmF1bHQuc2V0SGVhZGVyLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzQ29kZSA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25maWdfMS5kZWZhdWx0LmNvZGVUb1Nlc3Npb24ucmVwb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW5kID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvblJlcG9ydGVyXzEuZGVmYXVsdC5yZXBvcnQoY29uZmlnXzEuZGVmYXVsdC5jb2RlVG9TZXNzaW9uLnJlcG9ydCwgc3RhcnQsIGVuZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBjb25maWdfMS5kZWZhdWx0LmNvZGVUb1Nlc3Npb24uc3VjY2VzcyhyZXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAocykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2Vzc2lvbihzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycm9ySGFuZGxlcl8xLmRlZmF1bHQuZ2V0RXJyb3JNc2cocmVzKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoeyB0aXRsZTogXCLnmbvlvZXlpLHotKVcIiwgXCJjb250ZW50XCI6IFwi6K+356iN5ZCO6YeN6K+VXCIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoeyB0aXRsZTogXCLnmbvlvZXlpLHotKVcIiwgXCJjb250ZW50XCI6IFwi6K+356iN5ZCO6YeN6K+VXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZGVsU2Vzc2lvbigpIHtcbiAgICBzdGF0dXNfMS5kZWZhdWx0LnNlc3Npb24gPSB1bmRlZmluZWQ7XG4gICAgZm9yICh2YXIga2V5IGluIGNvbmZpZ18xLmRlZmF1bHQuc2Vzc2lvbk5hbWUpIHtcbiAgICAgICAgd3gucmVtb3ZlU3RvcmFnZSh7XG4gICAgICAgICAgICBrZXk6IGNvbmZpZ18xLmRlZmF1bHQuc2Vzc2lvbk5hbWVba2V5XVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGNvbmZpZ18xLmRlZmF1bHQuc2Vzc2lvbkV4cGlyZVRpbWUgJiYgY29uZmlnXzEuZGVmYXVsdC5zZXNzaW9uRXhwaXJlS2V5KSB7XG4gICAgICAgIHN0YXR1c18xLmRlZmF1bHQuc2Vzc2lvbkV4cGlyZSA9IEluZmluaXR5O1xuICAgICAgICB3eC5yZW1vdmVTdG9yYWdlKHtcbiAgICAgICAgICAgIGtleTogY29uZmlnXzEuZGVmYXVsdC5zZXNzaW9uRXhwaXJlS2V5XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG1haW4ocmVsYXRlZFJlcXVlc3RPYmopIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgcmV0cnkgPSAhcmVsYXRlZFJlcXVlc3RPYmpcbiAgICAgICAgICAgID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gbWFpbigpLnRoZW4ocmVzb2x2ZSkuY2F0Y2gocmVqZWN0KTsgfVxuICAgICAgICAgICAgOiBmdW5jdGlvbiAoKSB7IHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdChyZWxhdGVkUmVxdWVzdE9iaikudGhlbihyZWxhdGVkUmVxdWVzdE9iai5fcmVzb2x2ZSkuY2F0Y2gocmVsYXRlZFJlcXVlc3RPYmouX3JlamVjdCk7IH07XG4gICAgICAgIHJldHVybiBjaGVja0xvZ2luKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uZmlnXzEuZGVmYXVsdC5kb05vdENoZWNrU2Vzc2lvbiA/IFByb21pc2UucmVzb2x2ZSgpIDogY2hlY2tTZXNzaW9uKCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIHRpdGxlID0gX2EudGl0bGUsIGNvbnRlbnQgPSBfYS5jb250ZW50O1xuICAgICAgICAgICAgZXJyb3JIYW5kbGVyXzEuZGVmYXVsdC5kb0Vycm9yKHRpdGxlLCBjb250ZW50LCByZXRyeSk7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KHsgdGl0bGU6IHRpdGxlLCBjb250ZW50OiBjb250ZW50IH0pO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIHRpdGxlID0gX2EudGl0bGUsIGNvbnRlbnQgPSBfYS5jb250ZW50O1xuICAgICAgICAgICAgZXJyb3JIYW5kbGVyXzEuZGVmYXVsdC5kb0Vycm9yKHRpdGxlLCBjb250ZW50LCByZXRyeSk7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KHsgdGl0bGU6IHRpdGxlLCBjb250ZW50OiBjb250ZW50IH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBtYWluOiBtYWluLFxuICAgIHNldFNlc3Npb246IHNldFNlc3Npb24sXG4gICAgZGVsU2Vzc2lvbjogZGVsU2Vzc2lvblxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlcXVlc3RIYW5kbGVyXzEgPSByZXF1aXJlKFwiLi9yZXF1ZXN0SGFuZGxlclwiKTtcbnZhciB0YXNrUXVldWUgPSB7fTtcbnZhciB3YWl0UmVkb1Rhc2sgPSBbXTtcbmZ1bmN0aW9uIGFkZFNlc3Npb25UYXNrKHRhc2ssIG9iaikge1xuICAgIGlmICghb2JqLm5vdE5lZWRTZXNzaW9uKSB7XG4gICAgICAgIHZhciBpbmRleCA9IG9iai50YWcgKyAnJztcbiAgICAgICAgdGFza1F1ZXVlW2luZGV4XSA9IHtcbiAgICAgICAgICAgIHRhc2s6IHRhc2ssXG4gICAgICAgICAgICBvYmo6IG9ialxuICAgICAgICB9O1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFib3J0U2Vzc2lvblRhc2soKSB7XG4gICAgZm9yICh2YXIgdGFnIGluIHRhc2tRdWV1ZSkge1xuICAgICAgICB2YXIgZGF0YSA9IHRhc2tRdWV1ZVt0YWddO1xuICAgICAgICBpZiAoZGF0YS50YXNrICYmIGRhdGEub2JqKSB7XG4gICAgICAgICAgICBkYXRhLnRhc2suYWJvcnQoKTtcbiAgICAgICAgICAgIGRhdGEub2JqLmFib3J0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgZGVsU2Vzc2lvblRhc2soZGF0YS5vYmoudGFnKTtcbiAgICAgICAgICAgIHdhaXRSZWRvVGFzay5wdXNoKGRhdGEub2JqKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHJlZG9TZXNzaW9uVGFzaygpIHtcbiAgICBpZiAoIXdhaXRSZWRvVGFzaylcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmICh3YWl0UmVkb1Rhc2subGVuZ3RoID09PSAwKVxuICAgICAgICByZXR1cm47XG4gICAgZm9yICh2YXIgX2kgPSAwLCB3YWl0UmVkb1Rhc2tfMSA9IHdhaXRSZWRvVGFzazsgX2kgPCB3YWl0UmVkb1Rhc2tfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRhc2tPYmogPSB3YWl0UmVkb1Rhc2tfMVtfaV07XG4gICAgICAgIHJlcXVlc3RIYW5kbGVyXzEuZGVmYXVsdC5yZXF1ZXN0KHRhc2tPYmopO1xuICAgIH1cbiAgICB3YWl0UmVkb1Rhc2sgPSBbXTtcbn1cbmZ1bmN0aW9uIGRlbFNlc3Npb25UYXNrKHRhZykge1xuICAgIHZhciBpbmRleCA9IHRhZyArICcnO1xuICAgIGlmICh0YXNrUXVldWVbaW5kZXhdKSB7XG4gICAgICAgIHRhc2tRdWV1ZVtpbmRleF0gPSBudWxsO1xuICAgICAgICBkZWxldGUgdGFza1F1ZXVlW2luZGV4XTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgYWRkU2Vzc2lvblRhc2s6IGFkZFNlc3Npb25UYXNrLFxuICAgIGRlbFNlc3Npb25UYXNrOiBkZWxTZXNzaW9uVGFzayxcbiAgICBhYm9ydFNlc3Npb25UYXNrOiBhYm9ydFNlc3Npb25UYXNrLFxuICAgIHJlZG9TZXNzaW9uVGFzazogcmVkb1Nlc3Npb25UYXNrLFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGRlZmF1bHRDb25maWcgPSB7XG4gICAgc2Vzc2lvbk5hbWU6IHtcbiAgICAgICAgc2Vzc2lvbjogJ3Nlc3Npb24nLFxuICAgIH0sXG4gICAgbG9naW5UcmlnZ2VyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGNvZGVUb1Nlc3Npb246IHtcbiAgICAgICAgdXJsOiBcIlwiLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7IH1cbiAgICB9LFxuICAgIHN1Y2Nlc3NUcmlnZ2VyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgc2V0SGVhZGVyOiB7fSxcbiAgICB1cmxQZXJmaXg6IFwiXCIsXG4gICAgZG9Ob3RDaGVja1Nlc3Npb246IGZhbHNlLFxuICAgIGVycm9yVGl0bGU6IFwi5pON5L2c5aSx6LSlXCIsXG4gICAgZXJyb3JDb250ZW50OiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfSxcbiAgICBlcnJvclJldHJ5QnRuOiBmYWxzZSxcbiAgICByZUxvZ2luTGltaXQ6IDMsXG4gICAgZXJyb3JDYWxsYmFjazogbnVsbCxcbiAgICByZXBvcnRDR0k6IGZhbHNlLFxuICAgIG1vY2tKc29uOiBmYWxzZSxcbiAgICBnbG9iYWxEYXRhOiBmYWxzZSxcbiAgICBzZXNzaW9uRXhwaXJlS2V5OiBcInNlc3Npb25FeHBpcmVLZXlcIlxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGRlZmF1bHRDb25maWc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBzZXNzaW9uOiAnJyxcbiAgICBzZXNzaW9uRXhwaXJlOiBJbmZpbml0eVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIExJTkVGRUVEID0gL1xcdTAwMEEvZztcbnZhciBDQVJSSUFHRVJFVFVSTiA9IC9cXHUwMDBEL2c7XG52YXIgTElORV9TRVBBUkFUT1IgPSAvXFx1MjAyOC9nO1xudmFyIFBBUkFHUkFQSF9TRVBBUkFUT1IgPSAvXFx1MjAyOS9nO1xuZnVuY3Rpb24gcmVwbGFjZShyZXMpIHtcbiAgICByZXMgPSByZXMucmVwbGFjZShMSU5FRkVFRCwgXCJcIik7XG4gICAgcmVzID0gcmVzLnJlcGxhY2UoQ0FSUklBR0VSRVRVUk4sIFwiXCIpO1xuICAgIHJlcyA9IHJlcy5yZXBsYWNlKExJTkVfU0VQQVJBVE9SLCBcIlwiKTtcbiAgICByZXMgPSByZXMucmVwbGFjZShQQVJBR1JBUEhfU0VQQVJBVE9SLCBcIlwiKTtcbiAgICByZXR1cm4gcmVzO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gcmVwbGFjZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gc2hvdyh0eHQpIHtcbiAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICB0aXRsZTogdHlwZW9mIHR4dCA9PT0gJ2Jvb2xlYW4nID8gJ+WKoOi9veS4rScgOiB0eHQsXG4gICAgICAgIGljb246ICdsb2FkaW5nJyxcbiAgICAgICAgbWFzazogdHJ1ZSxcbiAgICAgICAgZHVyYXRpb246IDYwMDAwXG4gICAgfSk7XG59XG5mdW5jdGlvbiBoaWRlKCkge1xuICAgIHd4LmhpZGVUb2FzdCh7fSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgc2hvdzogc2hvdyxcbiAgICBoaWRlOiBoaWRlXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gc2V0UGFyYW1zKHVybCwgcGFyYW1zKSB7XG4gICAgaWYgKHVybCA9PT0gdm9pZCAwKSB7IHVybCA9IFwiXCI7IH1cbiAgICB2YXIgcXVlcnlTdHJpbmdJbmRleCA9IHVybC5pbmRleE9mKFwiP1wiKTtcbiAgICB2YXIga3ZwID0ge307XG4gICAgaWYgKHF1ZXJ5U3RyaW5nSW5kZXggPj0gMCkge1xuICAgICAgICB2YXIgb2xkUXVlcnlTdHJpbmdfMSA9IHVybC5zdWJzdHIocXVlcnlTdHJpbmdJbmRleCArIDEpLnNwbGl0KFwiJlwiKTtcbiAgICAgICAgb2xkUXVlcnlTdHJpbmdfMS5mb3JFYWNoKGZ1bmN0aW9uICh4LCBpKSB7XG4gICAgICAgICAgICB2YXIga3YgPSBvbGRRdWVyeVN0cmluZ18xW2ldLnNwbGl0KFwiPVwiKTtcbiAgICAgICAgICAgIGt2cFtrdlswXV0gPSBrdlsxXTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGt2cCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBrdnApLCBwYXJhbXMpO1xuICAgIHZhciBxdWVyeVN0cmluZyA9IE9iamVjdC5rZXlzKGt2cClcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiBrZXkgKyBcIj1cIiArIGVuY29kZVVSSShrdnBba2V5XSk7XG4gICAgfSlcbiAgICAgICAgLmpvaW4oXCImXCIpO1xuICAgIGlmIChxdWVyeVN0cmluZ0luZGV4ID49IDApIHtcbiAgICAgICAgcmV0dXJuIHVybC5zdWJzdHJpbmcoMCwgcXVlcnlTdHJpbmdJbmRleCArIDEpICsgcXVlcnlTdHJpbmc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdXJsICsgXCI/XCIgKyBxdWVyeVN0cmluZztcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgc2V0UGFyYW1zOiBzZXRQYXJhbXNcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudmVyc2lvbiA9IHZvaWQgMDtcbnZhciB2ZXJzaW9uID0gX19WRVJTSU9OX187XG5leHBvcnRzLnZlcnNpb24gPSB2ZXJzaW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==