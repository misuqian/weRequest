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
        sessionManager_1.default.main(obj).then(function (res) {
            var promise = doRequest(obj);
            if (res && res.redoSessionTask) {
                taskManager_1.default.redoSessionTask();
            }
            return promise;
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
                    realData = config_1.default.successData(res.data, res);
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
                    obj.success(realData, {}, res);
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
                    realData = config_1.default.successData(res.data, res);
                }
                else {
                    realData = res.data;
                }
            }
            catch (e) {
                console.error("Function successData occur error: " + e);
            }
            if (typeof obj.success === "function") {
                obj.success(realData, {}, res);
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
                    return doLogin().then(function (res) {
                        return resolve(res);
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
            return doLogin().then(function (res) {
                return resolve(res);
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
                return resolve({
                    redoSessionTask: true,
                });
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
        return checkLogin().then(function (res) {
            return config_1.default.doNotCheckSession ? Promise.resolve(res) : checkSession();
        }, function (_a) {
            var title = _a.title, content = _a.content;
            errorHandler_1.default.doError(title, content, retry);
            return reject({ title: title, content: content });
        }).then(function (res) {
            return resolve(res);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZVJlcXVlc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VSZXF1ZXN0Ly4vc3JjL2FwaS9nZXRDb25maWcudHMiLCJ3ZWJwYWNrOi8vd2VSZXF1ZXN0Ly4vc3JjL2FwaS9nZXRTZXNzaW9uLnRzIiwid2VicGFjazovL3dlUmVxdWVzdC8uL3NyYy9hcGkvaW5pdC50cyIsIndlYnBhY2s6Ly93ZVJlcXVlc3QvLi9zcmMvYXBpL2xvZ2luLnRzIiwid2VicGFjazovL3dlUmVxdWVzdC8uL3NyYy9hcGkvcmVxdWVzdC50cyIsIndlYnBhY2s6Ly93ZVJlcXVlc3QvLi9zcmMvYXBpL3NldFNlc3Npb24udHMiLCJ3ZWJwYWNrOi8vd2VSZXF1ZXN0Ly4vc3JjL2FwaS91cGxvYWRGaWxlLnRzIiwid2VicGFjazovL3dlUmVxdWVzdC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly93ZVJlcXVlc3QvLi9zcmMvbW9kdWxlL2NhY2hlTWFuYWdlci50cyIsIndlYnBhY2s6Ly93ZVJlcXVlc3QvLi9zcmMvbW9kdWxlL2NhdGNoSGFuZGxlci50cyIsIndlYnBhY2s6Ly93ZVJlcXVlc3QvLi9zcmMvbW9kdWxlL2R1cmF0aW9uUmVwb3J0ZXIudHMiLCJ3ZWJwYWNrOi8vd2VSZXF1ZXN0Ly4vc3JjL21vZHVsZS9lcnJvckhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vd2VSZXF1ZXN0Ly4vc3JjL21vZHVsZS9tb2NrTWFuYWdlci50cyIsIndlYnBhY2s6Ly93ZVJlcXVlc3QvLi9zcmMvbW9kdWxlL3JlcXVlc3RIYW5kbGVyLnRzIiwid2VicGFjazovL3dlUmVxdWVzdC8uL3NyYy9tb2R1bGUvcmVzcG9uc2VIYW5kbGVyLnRzIiwid2VicGFjazovL3dlUmVxdWVzdC8uL3NyYy9tb2R1bGUvc2Vzc2lvbk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vd2VSZXF1ZXN0Ly4vc3JjL21vZHVsZS90YXNrTWFuYWdlci50cyIsIndlYnBhY2s6Ly93ZVJlcXVlc3QvLi9zcmMvc3RvcmUvY29uZmlnLnRzIiwid2VicGFjazovL3dlUmVxdWVzdC8uL3NyYy9zdG9yZS9zdGF0dXMudHMiLCJ3ZWJwYWNrOi8vd2VSZXF1ZXN0Ly4vc3JjL3V0aWwvanNvblN1cGVyc2V0LnRzIiwid2VicGFjazovL3dlUmVxdWVzdC8uL3NyYy91dGlsL2xvYWRpbmcudHMiLCJ3ZWJwYWNrOi8vd2VSZXF1ZXN0Ly4vc3JjL3V0aWwvdXJsLnRzIiwid2VicGFjazovL3dlUmVxdWVzdC8uL3NyYy92ZXJzaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGVBQWUsbUJBQU8sQ0FBQyw4Q0FBaUI7QUFDeEMsZUFBZSxtQkFBTyxDQUFDLDhDQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNYWTtB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O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNMYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2JhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hCYTtBQUNiO0FBQ0E7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSx5QkFBeUIsVUFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZDYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsY0FBYyxRQUFXO0FBQ3pCIiwiZmlsZSI6IndlUmVxdWVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29uZmlnXzEgPSByZXF1aXJlKFwiLi4vc3RvcmUvY29uZmlnXCIpO1xudmFyIHN0YXR1c18xID0gcmVxdWlyZShcIi4uL3N0b3JlL3N0YXR1c1wiKTtcbmV4cG9ydHMuZGVmYXVsdCA9IChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXJsUGVyZml4OiBjb25maWdfMS5kZWZhdWx0LnVybFBlcmZpeCxcbiAgICAgICAgc2Vzc2lvbkV4cGlyZVRpbWU6IGNvbmZpZ18xLmRlZmF1bHQuc2Vzc2lvbkV4cGlyZVRpbWUsXG4gICAgICAgIHNlc3Npb25FeHBpcmVLZXk6IGNvbmZpZ18xLmRlZmF1bHQuc2Vzc2lvbkV4cGlyZUtleSxcbiAgICAgICAgc2Vzc2lvbkV4cGlyZTogc3RhdHVzXzEuZGVmYXVsdC5zZXNzaW9uRXhwaXJlXG4gICAgfTtcbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgc3RhdHVzXzEgPSByZXF1aXJlKFwiLi4vc3RvcmUvc3RhdHVzXCIpO1xuZXhwb3J0cy5kZWZhdWx0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc3RhdHVzXzEuZGVmYXVsdC5zZXNzaW9uO1xufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb25maWdfMSA9IHJlcXVpcmUoXCIuLi9zdG9yZS9jb25maWdcIik7XG52YXIgc3RhdHVzXzEgPSByZXF1aXJlKFwiLi4vc3RvcmUvc3RhdHVzXCIpO1xuZXhwb3J0cy5kZWZhdWx0ID0gKGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICBPYmplY3QuYXNzaWduKGNvbmZpZ18xLmRlZmF1bHQsIHBhcmFtcyk7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIGRhdGEgPSB7fTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGNvbmZpZ18xLmRlZmF1bHQuc2Vzc2lvbk5hbWUpIHtcbiAgICAgICAgICAgIHZhciBzdG9yYWdlS2V5ID0gY29uZmlnXzEuZGVmYXVsdC5zZXNzaW9uTmFtZVtrZXldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gd3guZ2V0U3RvcmFnZVN5bmMoc3RvcmFnZUtleSkgfHwgJyc7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBkYXRhW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdGF0dXNfMS5kZWZhdWx0LnNlc3Npb24gPSBkYXRhO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCd3eC5nZXRTdG9yYWdlU3luYzpmYWlsLCBjYW4gbm90IGdldCBzZXNzaW9uLicpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBzdGF0dXNfMS5kZWZhdWx0LnNlc3Npb25FeHBpcmUgPSB3eC5nZXRTdG9yYWdlU3luYyhjb25maWdfMS5kZWZhdWx0LnNlc3Npb25FeHBpcmVLZXkgfHwgXCJzZXNzaW9uRXhwaXJlS2V5XCIpIHx8IEluZmluaXR5O1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCd3eC5nZXRTdG9yYWdlU3luYzpmYWlsLCBjYW4gbm90IGdldCBzZXNzaW9uRXhwaXJlLicpO1xuICAgIH1cbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgc2Vzc2lvbk1hbmFnZXJfMSA9IHJlcXVpcmUoXCIuLi9tb2R1bGUvc2Vzc2lvbk1hbmFnZXJcIik7XG5leHBvcnRzLmRlZmF1bHQgPSAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBzZXNzaW9uTWFuYWdlcl8xLmRlZmF1bHQubWFpbigpO1xufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZXF1ZXN0SGFuZGxlcl8xID0gcmVxdWlyZShcIi4uL21vZHVsZS9yZXF1ZXN0SGFuZGxlclwiKTtcbmV4cG9ydHMuZGVmYXVsdCA9IChmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHJlcXVlc3RIYW5kbGVyXzEuZGVmYXVsdC5yZXF1ZXN0KG9iaik7XG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHNlc3Npb25NYW5hZ2VyXzEgPSByZXF1aXJlKFwiLi4vbW9kdWxlL3Nlc3Npb25NYW5hZ2VyXCIpO1xuZXhwb3J0cy5kZWZhdWx0ID0gKGZ1bmN0aW9uIChzZXNzaW9uKSB7XG4gICAgc2Vzc2lvbk1hbmFnZXJfMS5kZWZhdWx0LnNldFNlc3Npb24oc2Vzc2lvbik7XG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlcXVlc3RIYW5kbGVyXzEgPSByZXF1aXJlKFwiLi4vbW9kdWxlL3JlcXVlc3RIYW5kbGVyXCIpO1xuZXhwb3J0cy5kZWZhdWx0ID0gKGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXJfMS5kZWZhdWx0LnVwbG9hZEZpbGUob2JqKTtcbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaW5pdF8xID0gcmVxdWlyZShcIi4vYXBpL2luaXRcIik7XG52YXIgcmVxdWVzdF8xID0gcmVxdWlyZShcIi4vYXBpL3JlcXVlc3RcIik7XG52YXIgdXBsb2FkRmlsZV8xID0gcmVxdWlyZShcIi4vYXBpL3VwbG9hZEZpbGVcIik7XG52YXIgc2V0U2Vzc2lvbl8xID0gcmVxdWlyZShcIi4vYXBpL3NldFNlc3Npb25cIik7XG52YXIgbG9naW5fMSA9IHJlcXVpcmUoXCIuL2FwaS9sb2dpblwiKTtcbnZhciBnZXRTZXNzaW9uXzEgPSByZXF1aXJlKFwiLi9hcGkvZ2V0U2Vzc2lvblwiKTtcbnZhciBnZXRDb25maWdfMSA9IHJlcXVpcmUoXCIuL2FwaS9nZXRDb25maWdcIik7XG52YXIgdmVyc2lvbl8xID0gcmVxdWlyZShcIi4vdmVyc2lvblwiKTtcbnZhciB3ZVJlcXVlc3RPYmplY3QgPSB7XG4gICAgaW5pdDogaW5pdF8xLmRlZmF1bHQsXG4gICAgcmVxdWVzdDogcmVxdWVzdF8xLmRlZmF1bHQsXG4gICAgdXBsb2FkRmlsZTogdXBsb2FkRmlsZV8xLmRlZmF1bHQsXG4gICAgc2V0U2Vzc2lvbjogc2V0U2Vzc2lvbl8xLmRlZmF1bHQsXG4gICAgbG9naW46IGxvZ2luXzEuZGVmYXVsdCxcbiAgICBnZXRTZXNzaW9uOiBnZXRTZXNzaW9uXzEuZGVmYXVsdCxcbiAgICBnZXRDb25maWc6IGdldENvbmZpZ18xLmRlZmF1bHQsXG4gICAgdmVyc2lvbjogdmVyc2lvbl8xLnZlcnNpb25cbn07XG5leHBvcnRzLmRlZmF1bHQgPSB3ZVJlcXVlc3RPYmplY3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGdldChvYmopIHtcbiAgICBpZiAoIW9iai5vcmlnaW5VcmwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3eC5nZXRTdG9yYWdlKHtcbiAgICAgICAga2V5OiBvYmoub3JpZ2luVXJsLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICBpZiAob2JqLmNhY2hlID09PSB0cnVlIHx8XG4gICAgICAgICAgICAgICAgKHR5cGVvZiBvYmouY2FjaGUgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY2FjaGUocmVzLmRhdGEpKSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqLnN1Y2Nlc3MgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBvYmouc3VjY2VzcyhyZXMuZGF0YSwgeyBpc0NhY2hlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqLmNvbXBsZXRlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBvYmouY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gc2V0KG9iaiwgcmVhbERhdGEpIHtcbiAgICBpZiAoIW9iai5vcmlnaW5VcmwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAob2JqLmNhY2hlID09PSB0cnVlIHx8XG4gICAgICAgICh0eXBlb2Ygb2JqLmNhY2hlID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNhY2hlKHJlYWxEYXRhKSkpIHtcbiAgICAgICAgd3guc2V0U3RvcmFnZSh7XG4gICAgICAgICAgICBrZXk6IG9iai5vcmlnaW5VcmwsXG4gICAgICAgICAgICBkYXRhOiByZWFsRGF0YVxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZ2V0OiBnZXQsXG4gICAgc2V0OiBzZXRcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY2F0Y2hIYW5kbGVyID0gdm9pZCAwO1xudmFyIGVycm9ySGFuZGxlcl8xID0gcmVxdWlyZShcIi4vZXJyb3JIYW5kbGVyXCIpO1xuZnVuY3Rpb24gY2F0Y2hIYW5kbGVyKGUsIG9iaiwgcmVqZWN0KSB7XG4gICAgdmFyIHR5cGUgPSBlLnR5cGUsIHJlcyA9IGUucmVzO1xuICAgIGlmIChvYmouY2F0Y2hFcnJvcikge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ2h0dHAtZXJyb3InKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihyZXMuc3RhdHVzQ29kZS50b1N0cmluZygpKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ3VwbG9hZC1lcnJvcicpIHtcbiAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKHJlcykpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09ICdsb2dpYy1lcnJvcicpIHtcbiAgICAgICAgICAgIHZhciBtc2cgPSBlcnJvckhhbmRsZXJfMS5kZWZhdWx0LmdldEVycm9yTXNnKHJlcyk7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihtc2cuY29udGVudCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGUudHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9ySGFuZGxlcl8xLmRlZmF1bHQubG9naWNFcnJvcihvYmosIGUucmVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLmNhdGNoSGFuZGxlciA9IGNhdGNoSGFuZGxlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbmZpZ18xID0gcmVxdWlyZShcIi4uL3N0b3JlL2NvbmZpZ1wiKTtcbnZhciByZXF1ZXN0XzEgPSByZXF1aXJlKFwiLi4vYXBpL3JlcXVlc3RcIik7XG5mdW5jdGlvbiBzdGFydChvYmopIHtcbiAgICBvYmouX3JlcG9ydFN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufVxuZnVuY3Rpb24gZW5kKG9iaikge1xuICAgIG9iai5fcmVwb3J0RW5kVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGlmIChvYmoucmVwb3J0ICYmIG9iai5fcmVwb3J0U3RhcnRUaW1lKSB7XG4gICAgICAgIHJlcG9ydChvYmoucmVwb3J0LCBvYmouX3JlcG9ydFN0YXJ0VGltZSwgb2JqLl9yZXBvcnRFbmRUaW1lKTtcbiAgICB9XG59XG5mdW5jdGlvbiByZXBvcnQobmFtZSwgc3RhcnRUaW1lLCBlbmRUaW1lKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWdfMS5kZWZhdWx0LnJlcG9ydENHSSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNvbmZpZ18xLmRlZmF1bHQucmVwb3J0Q0dJKG5hbWUsIHN0YXJ0VGltZSwgZW5kVGltZSwgcmVxdWVzdF8xLmRlZmF1bHQpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBzdGFydDogc3RhcnQsXG4gICAgZW5kOiBlbmQsXG4gICAgcmVwb3J0OiByZXBvcnRcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb25maWdfMSA9IHJlcXVpcmUoXCIuLi9zdG9yZS9jb25maWdcIik7XG52YXIgcmVxdWVzdF8xID0gcmVxdWlyZShcIi4uL2FwaS9yZXF1ZXN0XCIpO1xuZnVuY3Rpb24gc3lzdGVtRXJyb3Iob2JqLCByZXMpIHtcbiAgICBpZiAodHlwZW9mIG9iai5mYWlsID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgb2JqLmZhaWwocmVzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciByZXRyeSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KG9iaikudGhlbihvYmouX3Jlc29sdmUpLmNhdGNoKG9iai5fcmVqZWN0KTsgfTtcbiAgICAgICAgZG9FcnJvcihcIlwiLCByZXMuZXJyTXNnLCByZXRyeSk7XG4gICAgfVxufVxuZnVuY3Rpb24gbG9naWNFcnJvcihvYmosIHJlcykge1xuICAgIGlmICh0eXBlb2Ygb2JqLmZhaWwgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBvYmouZmFpbChyZXMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIF9hID0gZ2V0RXJyb3JNc2cocmVzKSwgdGl0bGUgPSBfYS50aXRsZSwgY29udGVudCA9IF9hLmNvbnRlbnQ7XG4gICAgICAgIHZhciByZXRyeSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KG9iaikudGhlbihvYmouX3Jlc29sdmUpLmNhdGNoKG9iai5fcmVqZWN0KTsgfTtcbiAgICAgICAgZG9FcnJvcih0aXRsZSwgY29udGVudCwgcmV0cnkpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGNvbmZpZ18xLmRlZmF1bHQuZXJyb3JDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNvbmZpZ18xLmRlZmF1bHQuZXJyb3JDYWxsYmFjayhvYmosIHJlcyk7XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IocmVzKTtcbn1cbmZ1bmN0aW9uIGdldEVycm9yTXNnKHJlcykge1xuICAgIHZhciB0aXRsZSA9IFwiXCI7XG4gICAgaWYgKHR5cGVvZiBjb25maWdfMS5kZWZhdWx0LmVycm9yVGl0bGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGl0bGUgPSBjb25maWdfMS5kZWZhdWx0LmVycm9yVGl0bGUocmVzLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGNvbmZpZ18xLmRlZmF1bHQuZXJyb3JUaXRsZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICB0aXRsZSA9IGNvbmZpZ18xLmRlZmF1bHQuZXJyb3JUaXRsZTtcbiAgICB9XG4gICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgIGlmICh0eXBlb2YgY29uZmlnXzEuZGVmYXVsdC5lcnJvckNvbnRlbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29udGVudCA9IGNvbmZpZ18xLmRlZmF1bHQuZXJyb3JDb250ZW50KHJlcy5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBjb25maWdfMS5kZWZhdWx0LmVycm9yQ29udGVudCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjb250ZW50ID0gY29uZmlnXzEuZGVmYXVsdC5lcnJvckNvbnRlbnQ7XG4gICAgfVxuICAgIHJldHVybiB7IHRpdGxlOiB0aXRsZSwgY29udGVudDogY29udGVudCB9O1xufVxuZnVuY3Rpb24gZG9FcnJvcih0aXRsZSwgY29udGVudCwgcmV0cnkpIHtcbiAgICB2YXIgc2hvd0Vycm9yUmV0cnlCdG4gPSBjb25maWdfMS5kZWZhdWx0LmVycm9yUmV0cnlCdG4gJiYgdHlwZW9mIHJldHJ5ID09PSBcImZ1bmN0aW9uXCI7XG4gICAgd3guc2hvd01vZGFsKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQgfHwgXCLnvZHnu5zmiJbmnI3liqHlvILluLjvvIzor7fnqI3lkI7ph43or5VcIixcbiAgICB9LCAhc2hvd0Vycm9yUmV0cnlCdG4gPyB7XG4gICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgfSA6IHtcbiAgICAgICAgc2hvd0NhbmNlbDogdHJ1ZSxcbiAgICAgICAgY29uZmlybVRleHQ6ICfph43or5UnLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0gJiYgdHlwZW9mIHJldHJ5ID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICAgICAgcmV0cnkoKTtcbiAgICAgICAgfVxuICAgIH0pKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBzeXN0ZW1FcnJvcjogc3lzdGVtRXJyb3IsXG4gICAgbG9naWNFcnJvcjogbG9naWNFcnJvcixcbiAgICBkb0Vycm9yOiBkb0Vycm9yLFxuICAgIGdldEVycm9yTXNnOiBnZXRFcnJvck1zZ1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbmZpZ18xID0gcmVxdWlyZShcIi4uL3N0b3JlL2NvbmZpZ1wiKTtcbnZhciBsb2FkaW5nXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9sb2FkaW5nXCIpO1xuZnVuY3Rpb24gZ2V0KG9iaikge1xuICAgIGlmICghKGNvbmZpZ18xLmRlZmF1bHQubW9ja0pzb25bb2JqLnVybF0gfHwgKG9iai5vcmlnaW5VcmwgJiYgY29uZmlnXzEuZGVmYXVsdC5tb2NrSnNvbltvYmoub3JpZ2luVXJsXSkpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ21vY2sg5rKh5pyJ5a+55bqU5o6l5Y+j55qE5pWw5o2uJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGRhdGEgPSBjb25maWdfMS5kZWZhdWx0Lm1vY2tKc29uW29iai51cmxdIHx8IChvYmoub3JpZ2luVXJsID8gY29uZmlnXzEuZGVmYXVsdC5tb2NrSnNvbltvYmoub3JpZ2luVXJsXSA6ICcnKTtcbiAgICBkYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgdmFyIHJlcyA9IHtcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgc3RhdHVzQ29kZTogMjAwXG4gICAgfTtcbiAgICBsb2FkaW5nXzEuZGVmYXVsdC5oaWRlKCk7XG4gICAgcmV0dXJuIHJlcztcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBnZXQ6IGdldFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBsb2FkaW5nXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9sb2FkaW5nXCIpO1xudmFyIGNvbmZpZ18xID0gcmVxdWlyZShcIi4uL3N0b3JlL2NvbmZpZ1wiKTtcbnZhciBzdGF0dXNfMSA9IHJlcXVpcmUoXCIuLi9zdG9yZS9zdGF0dXNcIik7XG52YXIgbW9ja01hbmFnZXJfMSA9IHJlcXVpcmUoXCIuL21vY2tNYW5hZ2VyXCIpO1xudmFyIGNhY2hlTWFuYWdlcl8xID0gcmVxdWlyZShcIi4vY2FjaGVNYW5hZ2VyXCIpO1xudmFyIHNlc3Npb25NYW5hZ2VyXzEgPSByZXF1aXJlKFwiLi9zZXNzaW9uTWFuYWdlclwiKTtcbnZhciByZXNwb25zZUhhbmRsZXJfMSA9IHJlcXVpcmUoXCIuL3Jlc3BvbnNlSGFuZGxlclwiKTtcbnZhciBkdXJhdGlvblJlcG9ydGVyXzEgPSByZXF1aXJlKFwiLi9kdXJhdGlvblJlcG9ydGVyXCIpO1xudmFyIHVybF8xID0gcmVxdWlyZShcIi4uL3V0aWwvdXJsXCIpO1xudmFyIGVycm9ySGFuZGxlcl8xID0gcmVxdWlyZShcIi4vZXJyb3JIYW5kbGVyXCIpO1xudmFyIGNhdGNoSGFuZGxlcl8xID0gcmVxdWlyZShcIi4vY2F0Y2hIYW5kbGVyXCIpO1xudmFyIHRhc2tNYW5hZ2VyXzEgPSByZXF1aXJlKFwiLi90YXNrTWFuYWdlclwiKTtcbnZhciByZXF1ZXN0VGFnID0gMDtcbmZ1bmN0aW9uIGZvcm1hdChvcmlnaW5VcmwpIHtcbiAgICBpZiAob3JpZ2luVXJsLnN0YXJ0c1dpdGgoJ2h0dHAnKSkge1xuICAgICAgICByZXR1cm4gb3JpZ2luVXJsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIHVybFBlcmZpeCA9IGNvbmZpZ18xLmRlZmF1bHQudXJsUGVyZml4O1xuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZ18xLmRlZmF1bHQudXJsUGVyZml4ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHVybFBlcmZpeCA9IGNvbmZpZ18xLmRlZmF1bHQudXJsUGVyZml4KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVybFBlcmZpeCArIG9yaWdpblVybDtcbiAgICB9XG59XG5mdW5jdGlvbiBwcmVEbyhvYmosIHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmICh0eXBlb2Ygb2JqLmJlZm9yZVNlbmQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBvYmouYmVmb3JlU2VuZCgpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9iai5yZUxvZ2luQ291bnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgb2JqLnJlTG9naW5Db3VudCA9IDA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBvYmoucmVMb2dpbkNvdW50Kys7XG4gICAgfVxuICAgIGlmIChvYmouc2hvd0xvYWRpbmcpIHtcbiAgICAgICAgbG9hZGluZ18xLmRlZmF1bHQuc2hvdyhvYmouc2hvd0xvYWRpbmcpO1xuICAgIH1cbiAgICBpZiAoIW9iai5vcmlnaW5VcmwpIHtcbiAgICAgICAgb2JqLm9yaWdpblVybCA9IG9iai51cmw7XG4gICAgICAgIG9iai51cmwgPSBmb3JtYXQob2JqLnVybCk7XG4gICAgfVxuICAgIG9iai5fcmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgb2JqLl9yZWplY3QgPSByZWplY3Q7XG4gICAgb2JqLnRhZyA9IHJlcXVlc3RUYWcrKztcbiAgICBpZiAodHlwZW9mIG9iai5ub3ROZWVkU2Vzc2lvbiA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBvYmoubm90TmVlZFNlc3Npb24gPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvYmouYWJvcnRlZCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBvYmouYWJvcnRlZCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gaW5pdGlhbGl6ZVJlcXVlc3RPYmoob2JqKSB7XG4gICAgaWYgKCFvYmouZGF0YSkge1xuICAgICAgICBvYmouZGF0YSA9IHt9O1xuICAgIH1cbiAgICBpZiAob2JqLmRhdGFMb2FkICYmIHR5cGVvZiBvYmouZGF0YUxvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb2JqLmRhdGEgPSBvYmouZGF0YUxvYWQob2JqLmRhdGEpO1xuICAgIH1cbiAgICBvYmouaGVhZGVyID0gb2JqLmhlYWRlciA/IG9iai5oZWFkZXIgOiB7fTtcbiAgICBpZiAodHlwZW9mIGNvbmZpZ18xLmRlZmF1bHQuc2V0SGVhZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBoZWFkZXIgPSBjb25maWdfMS5kZWZhdWx0LnNldEhlYWRlcigpO1xuICAgICAgICBpZiAodHlwZW9mIGhlYWRlciA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIG9iai5oZWFkZXIgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb2JqLmhlYWRlciksIGhlYWRlcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGNvbmZpZ18xLmRlZmF1bHQuc2V0SGVhZGVyID09PSAnb2JqZWN0Jykge1xuICAgICAgICBvYmouaGVhZGVyID0gX19hc3NpZ24oX19hc3NpZ24oe30sIG9iai5oZWFkZXIpLCBjb25maWdfMS5kZWZhdWx0LnNldEhlYWRlcik7XG4gICAgfVxuICAgIGlmIChvYmoub3JpZ2luVXJsICE9PSBjb25maWdfMS5kZWZhdWx0LmNvZGVUb1Nlc3Npb24udXJsICYmIHN0YXR1c18xLmRlZmF1bHQuc2Vzc2lvbikge1xuICAgICAgICBvYmouZGF0YSA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvYmouZGF0YSksIHN0YXR1c18xLmRlZmF1bHQuc2Vzc2lvbik7XG4gICAgfVxuICAgIHZhciBnZCA9IGdldEdsb2JhbERhdGEoKTtcbiAgICBvYmouZGF0YSA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBnZCksIG9iai5kYXRhKTtcbiAgICBvYmoubWV0aG9kID0gb2JqLm1ldGhvZCB8fCAnR0VUJztcbiAgICBvYmouZGF0YVR5cGUgPSBvYmouZGF0YVR5cGUgfHwgJ2pzb24nO1xuICAgIGlmICghY29uZmlnXzEuZGVmYXVsdC5kb05vdFVzZVF1ZXJ5U3RyaW5nICYmIG9iai5tZXRob2QgIT09IFwiR0VUXCIpIHtcbiAgICAgICAgaWYgKHN0YXR1c18xLmRlZmF1bHQuc2Vzc2lvbikge1xuICAgICAgICAgICAgb2JqLnVybCA9IHVybF8xLmRlZmF1bHQuc2V0UGFyYW1zKG9iai51cmwsIF9fYXNzaWduKHt9LCBzdGF0dXNfMS5kZWZhdWx0LnNlc3Npb24pKTtcbiAgICAgICAgfVxuICAgICAgICBvYmoudXJsID0gdXJsXzEuZGVmYXVsdC5zZXRQYXJhbXMob2JqLnVybCwgZ2QpO1xuICAgIH1cbiAgICBkdXJhdGlvblJlcG9ydGVyXzEuZGVmYXVsdC5zdGFydChvYmopO1xuICAgIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBpbml0aWFsaXplVXBsb2FkRmlsZU9iaihvYmopIHtcbiAgICBpZiAoIW9iai5mb3JtRGF0YSkge1xuICAgICAgICBvYmouZm9ybURhdGEgPSB7fTtcbiAgICB9XG4gICAgaWYgKG9iai5kYXRhTG9hZCAmJiB0eXBlb2Ygb2JqLmRhdGFMb2FkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9iai5mb3JtRGF0YSA9IG9iai5kYXRhTG9hZChvYmouZm9ybURhdGEpO1xuICAgIH1cbiAgICBvYmouaGVhZGVyID0gb2JqLmhlYWRlciA/IG9iai5oZWFkZXIgOiB7fTtcbiAgICBpZiAodHlwZW9mIGNvbmZpZ18xLmRlZmF1bHQuc2V0SGVhZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBoZWFkZXIgPSBjb25maWdfMS5kZWZhdWx0LnNldEhlYWRlcigpO1xuICAgICAgICBpZiAodHlwZW9mIGhlYWRlciA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIG9iai5oZWFkZXIgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb2JqLmhlYWRlciksIGhlYWRlcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGNvbmZpZ18xLmRlZmF1bHQuc2V0SGVhZGVyID09PSAnb2JqZWN0Jykge1xuICAgICAgICBvYmouaGVhZGVyID0gX19hc3NpZ24oX19hc3NpZ24oe30sIG9iai5oZWFkZXIpLCBjb25maWdfMS5kZWZhdWx0LnNldEhlYWRlcik7XG4gICAgfVxuICAgIGlmIChvYmoub3JpZ2luVXJsICE9PSBjb25maWdfMS5kZWZhdWx0LmNvZGVUb1Nlc3Npb24udXJsICYmIHN0YXR1c18xLmRlZmF1bHQuc2Vzc2lvbikge1xuICAgICAgICBvYmouZm9ybURhdGEgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb2JqLmZvcm1EYXRhKSwgc3RhdHVzXzEuZGVmYXVsdC5zZXNzaW9uKTtcbiAgICB9XG4gICAgdmFyIGdkID0gZ2V0R2xvYmFsRGF0YSgpO1xuICAgIG9iai5mb3JtRGF0YSA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBnZCksIG9iai5mb3JtRGF0YSk7XG4gICAgaWYgKCFjb25maWdfMS5kZWZhdWx0LmRvTm90VXNlUXVlcnlTdHJpbmcpIHtcbiAgICAgICAgaWYgKHN0YXR1c18xLmRlZmF1bHQuc2Vzc2lvbikge1xuICAgICAgICAgICAgb2JqLnVybCA9IHVybF8xLmRlZmF1bHQuc2V0UGFyYW1zKG9iai51cmwsIF9fYXNzaWduKHt9LCBzdGF0dXNfMS5kZWZhdWx0LnNlc3Npb24pKTtcbiAgICAgICAgfVxuICAgICAgICBvYmoudXJsID0gdXJsXzEuZGVmYXVsdC5zZXRQYXJhbXMob2JqLnVybCwgZ2QpO1xuICAgIH1cbiAgICBkdXJhdGlvblJlcG9ydGVyXzEuZGVmYXVsdC5zdGFydChvYmopO1xuICAgIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBnZXRHbG9iYWxEYXRhKCkge1xuICAgIHZhciBnZCA9IHt9O1xuICAgIGlmICh0eXBlb2YgY29uZmlnXzEuZGVmYXVsdC5nbG9iYWxEYXRhID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZ2QgPSBjb25maWdfMS5kZWZhdWx0Lmdsb2JhbERhdGEoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGNvbmZpZ18xLmRlZmF1bHQuZ2xvYmFsRGF0YSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBnZCA9IGNvbmZpZ18xLmRlZmF1bHQuZ2xvYmFsRGF0YTtcbiAgICB9XG4gICAgcmV0dXJuIGdkO1xufVxuZnVuY3Rpb24gZG9SZXF1ZXN0KG9iaikge1xuICAgIG9iaiA9IGluaXRpYWxpemVSZXF1ZXN0T2JqKG9iaik7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHJlcXVlc3RUYXNrID0gd3gucmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6IG9iai51cmwsXG4gICAgICAgICAgICBkYXRhOiBvYmouZGF0YSxcbiAgICAgICAgICAgIG1ldGhvZDogb2JqLm1ldGhvZCxcbiAgICAgICAgICAgIGhlYWRlcjogb2JqLmhlYWRlciB8fCB7fSxcbiAgICAgICAgICAgIGRhdGFUeXBlOiBvYmouZGF0YVR5cGUgfHwgJ2pzb24nLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHJlcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIGVycm9ySGFuZGxlcl8xLmRlZmF1bHQuc3lzdGVtRXJyb3Iob2JqLCByZXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QocmVzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqLmNvbXBsZXRlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChvYmouc2hvd0xvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZ18xLmRlZmF1bHQuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRhc2tNYW5hZ2VyXzEuZGVmYXVsdC5hZGRTZXNzaW9uVGFzayhyZXF1ZXN0VGFzaywgb2JqKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGRvVXBsb2FkRmlsZShvYmopIHtcbiAgICBvYmogPSBpbml0aWFsaXplVXBsb2FkRmlsZU9iaihvYmopO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHd4LnVwbG9hZEZpbGUoe1xuICAgICAgICAgICAgdXJsOiBvYmoudXJsLFxuICAgICAgICAgICAgZmlsZVBhdGg6IG9iai5maWxlUGF0aCB8fCAnJyxcbiAgICAgICAgICAgIG5hbWU6IG9iai5uYW1lIHx8ICcnLFxuICAgICAgICAgICAgZm9ybURhdGE6IG9iai5mb3JtRGF0YSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBlcnJvckhhbmRsZXJfMS5kZWZhdWx0LnN5c3RlbUVycm9yKG9iaiwgcmVzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9iai5jb21wbGV0ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iai5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAob2JqLnNob3dMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmdfMS5kZWZhdWx0LmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gcmVxdWVzdChvYmopIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBvYmogPSBwcmVEbyhvYmosIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIGlmIChjb25maWdfMS5kZWZhdWx0Lm1vY2tKc29uKSB7XG4gICAgICAgICAgICB2YXIgbW9ja1Jlc3BvbnNlID0gbW9ja01hbmFnZXJfMS5kZWZhdWx0LmdldChvYmopO1xuICAgICAgICAgICAgaWYgKG1vY2tSZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9IHJlc3BvbnNlSGFuZGxlcl8xLmRlZmF1bHQucmVzcG9uc2VGb3JSZXF1ZXN0KG1vY2tSZXNwb25zZSwgb2JqKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iai5jYWNoZSkge1xuICAgICAgICAgICAgY2FjaGVNYW5hZ2VyXzEuZGVmYXVsdC5nZXQob2JqKTtcbiAgICAgICAgfVxuICAgICAgICBzZXNzaW9uTWFuYWdlcl8xLmRlZmF1bHQubWFpbihvYmopLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgdmFyIHByb21pc2UgPSBkb1JlcXVlc3Qob2JqKTtcbiAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLnJlZG9TZXNzaW9uVGFzaykge1xuICAgICAgICAgICAgICAgIHRhc2tNYW5hZ2VyXzEuZGVmYXVsdC5yZWRvU2Vzc2lvblRhc2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IHJlc3BvbnNlSGFuZGxlcl8xLmRlZmF1bHQucmVzcG9uc2VGb3JSZXF1ZXN0KHJlcywgb2JqKTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNhdGNoSGFuZGxlcl8xLmNhdGNoSGFuZGxlcihlLCBvYmosIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gdXBsb2FkRmlsZShvYmopIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBvYmogPSBwcmVEbyhvYmosIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIGlmIChjb25maWdfMS5kZWZhdWx0Lm1vY2tKc29uKSB7XG4gICAgICAgICAgICB2YXIgbW9ja1Jlc3BvbnNlID0gbW9ja01hbmFnZXJfMS5kZWZhdWx0LmdldChvYmopO1xuICAgICAgICAgICAgaWYgKG1vY2tSZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9IHJlc3BvbnNlSGFuZGxlcl8xLmRlZmF1bHQucmVzcG9uc2VGb3JVcGxvYWRGaWxlKG1vY2tSZXNwb25zZSwgb2JqKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2Vzc2lvbk1hbmFnZXJfMS5kZWZhdWx0Lm1haW4ob2JqKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBkb1VwbG9hZEZpbGUob2JqKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSByZXNwb25zZUhhbmRsZXJfMS5kZWZhdWx0LnJlc3BvbnNlRm9yVXBsb2FkRmlsZShyZXMsIG9iaik7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGNhdGNoSGFuZGxlcl8xLmNhdGNoSGFuZGxlcihlLCBvYmosIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGZvcm1hdDogZm9ybWF0LFxuICAgIHJlcXVlc3Q6IHJlcXVlc3QsXG4gICAgdXBsb2FkRmlsZTogdXBsb2FkRmlsZVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbmZpZ18xID0gcmVxdWlyZShcIi4uL3N0b3JlL2NvbmZpZ1wiKTtcbnZhciByZXF1ZXN0SGFuZGxlcl8xID0gcmVxdWlyZShcIi4vcmVxdWVzdEhhbmRsZXJcIik7XG52YXIgZXJyb3JIYW5kbGVyXzEgPSByZXF1aXJlKFwiLi9lcnJvckhhbmRsZXJcIik7XG52YXIgY2FjaGVNYW5hZ2VyXzEgPSByZXF1aXJlKFwiLi9jYWNoZU1hbmFnZXJcIik7XG52YXIgZHVyYXRpb25SZXBvcnRlcl8xID0gcmVxdWlyZShcIi4vZHVyYXRpb25SZXBvcnRlclwiKTtcbnZhciBzZXNzaW9uTWFuYWdlcl8xID0gcmVxdWlyZShcIi4vc2Vzc2lvbk1hbmFnZXJcIik7XG52YXIganNvblN1cGVyc2V0XzEgPSByZXF1aXJlKFwiLi4vdXRpbC9qc29uU3VwZXJzZXRcIik7XG52YXIgdGFza01hbmFnZXJfMSA9IHJlcXVpcmUoXCIuL3Rhc2tNYW5hZ2VyXCIpO1xuZnVuY3Rpb24gcmVzcG9uc2VGb3JSZXF1ZXN0KHJlcywgb2JqKSB7XG4gICAgaWYgKHJlcy5zdGF0dXNDb2RlID09PSAyMDApIHtcbiAgICAgICAgZHVyYXRpb25SZXBvcnRlcl8xLmRlZmF1bHQuZW5kKG9iaik7XG4gICAgICAgIGlmIChvYmouYWJvcnRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvYmouZGF0YVR5cGUgPT09ICdqc29uJyAmJiB0eXBlb2YgcmVzLmRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXMuZGF0YSA9IGpzb25TdXBlcnNldF8xLmRlZmF1bHQocmVzLmRhdGEpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXMuZGF0YSA9IEpTT04ucGFyc2UocmVzLmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAob2JqLmNhdGNoRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JIYW5kbGVyXzEuZGVmYXVsdC5sb2dpY0Vycm9yKG9iaiwgcmVzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0YXNrTWFuYWdlcl8xLmRlZmF1bHQuZGVsU2Vzc2lvblRhc2sob2JqLnRhZyk7XG4gICAgICAgIGlmIChjb25maWdfMS5kZWZhdWx0LmxvZ2luVHJpZ2dlcihyZXMuZGF0YSkgJiYgb2JqLnJlTG9naW5Db3VudCAhPT0gdW5kZWZpbmVkICYmIG9iai5yZUxvZ2luQ291bnQgPCBjb25maWdfMS5kZWZhdWx0LnJlTG9naW5MaW1pdCkge1xuICAgICAgICAgICAgc2Vzc2lvbk1hbmFnZXJfMS5kZWZhdWx0LmRlbFNlc3Npb24oKTtcbiAgICAgICAgICAgIHRhc2tNYW5hZ2VyXzEuZGVmYXVsdC5hYm9ydFNlc3Npb25UYXNrKCk7XG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdEhhbmRsZXJfMS5kZWZhdWx0LnJlcXVlc3Qob2JqKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb25maWdfMS5kZWZhdWx0LnN1Y2Nlc3NUcmlnZ2VyKHJlcy5kYXRhKSkge1xuICAgICAgICAgICAgdmFyIHJlYWxEYXRhID0gXCJcIjtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25maWdfMS5kZWZhdWx0LnN1Y2Nlc3NEYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlYWxEYXRhID0gY29uZmlnXzEuZGVmYXVsdC5zdWNjZXNzRGF0YShyZXMuZGF0YSwgcmVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlYWxEYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRnVuY3Rpb24gc3VjY2Vzc0RhdGEgb2NjdXIgZXJyb3I6IFwiICsgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW9iai5ub0NhY2hlRmxhc2gpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9iai5zdWNjZXNzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqLnN1Y2Nlc3MocmVhbERhdGEsIHt9LCByZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlYWxEYXRhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhY2hlTWFuYWdlcl8xLmRlZmF1bHQuc2V0KG9iaiwgcmVhbERhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgeyB0eXBlOiAnbG9naWMtZXJyb3InLCByZXM6IHJlcyB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyB7IHR5cGU6ICdodHRwLWVycm9yJywgcmVzOiByZXMgfTtcbiAgICB9XG59XG5mdW5jdGlvbiByZXNwb25zZUZvclVwbG9hZEZpbGUocmVzLCBvYmopIHtcbiAgICBpZiAocmVzLnN0YXR1c0NvZGUgPT09IDIwMCkge1xuICAgICAgICBkdXJhdGlvblJlcG9ydGVyXzEuZGVmYXVsdC5lbmQob2JqKTtcbiAgICAgICAgaWYgKHR5cGVvZiByZXMuZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJlcy5kYXRhID0ganNvblN1cGVyc2V0XzEuZGVmYXVsdChyZXMuZGF0YSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlcy5kYXRhID0gSlNPTi5wYXJzZShyZXMuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGlmIChvYmouY2F0Y2hFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlcnJvckhhbmRsZXJfMS5kZWZhdWx0LmxvZ2ljRXJyb3Iob2JqLCByZXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWdfMS5kZWZhdWx0LmxvZ2luVHJpZ2dlcihyZXMuZGF0YSkgJiYgb2JqLnJlTG9naW5Db3VudCAhPT0gdW5kZWZpbmVkICYmIG9iai5yZUxvZ2luQ291bnQgPCBjb25maWdfMS5kZWZhdWx0LnJlTG9naW5MaW1pdCkge1xuICAgICAgICAgICAgc2Vzc2lvbk1hbmFnZXJfMS5kZWZhdWx0LmRlbFNlc3Npb24oKTtcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0SGFuZGxlcl8xLmRlZmF1bHQudXBsb2FkRmlsZShvYmopO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbmZpZ18xLmRlZmF1bHQuc3VjY2Vzc1RyaWdnZXIocmVzLmRhdGEpKSB7XG4gICAgICAgICAgICB2YXIgcmVhbERhdGEgPSBcIlwiO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbmZpZ18xLmRlZmF1bHQuc3VjY2Vzc0RhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVhbERhdGEgPSBjb25maWdfMS5kZWZhdWx0LnN1Y2Nlc3NEYXRhKHJlcy5kYXRhLCByZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVhbERhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGdW5jdGlvbiBzdWNjZXNzRGF0YSBvY2N1ciBlcnJvcjogXCIgKyBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqLnN1Y2Nlc3MgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIG9iai5zdWNjZXNzKHJlYWxEYXRhLCB7fSwgcmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWFsRGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IHsgdHlwZTogJ2xvZ2ljLWVycm9yJywgcmVzOiByZXMgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgeyB0eXBlOiAnaHR0cC1lcnJvcicsIHJlczogcmVzIH07XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIHJlc3BvbnNlRm9yUmVxdWVzdDogcmVzcG9uc2VGb3JSZXF1ZXN0LFxuICAgIHJlc3BvbnNlRm9yVXBsb2FkRmlsZTogcmVzcG9uc2VGb3JVcGxvYWRGaWxlXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgc3RhdHVzXzEgPSByZXF1aXJlKFwiLi4vc3RvcmUvc3RhdHVzXCIpO1xudmFyIGNvbmZpZ18xID0gcmVxdWlyZShcIi4uL3N0b3JlL2NvbmZpZ1wiKTtcbnZhciBlcnJvckhhbmRsZXJfMSA9IHJlcXVpcmUoXCIuL2Vycm9ySGFuZGxlclwiKTtcbnZhciBkdXJhdGlvblJlcG9ydGVyXzEgPSByZXF1aXJlKFwiLi9kdXJhdGlvblJlcG9ydGVyXCIpO1xudmFyIHJlcXVlc3RIYW5kbGVyXzEgPSByZXF1aXJlKFwiLi9yZXF1ZXN0SGFuZGxlclwiKTtcbnZhciBsb2FkaW5nXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9sb2FkaW5nXCIpO1xudmFyIHJlcXVlc3RfMSA9IHJlcXVpcmUoXCIuLi9hcGkvcmVxdWVzdFwiKTtcbnZhciBjaGVja1Nlc3Npb25Qcm9taXNlID0gbnVsbDtcbmZ1bmN0aW9uIGNoZWNrU2Vzc2lvbigpIHtcbiAgICBpZiAoIWNoZWNrU2Vzc2lvblByb21pc2UpIHtcbiAgICAgICAgY2hlY2tTZXNzaW9uUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid3guY2hlY2tTZXNzaW9uKClcIik7XG4gICAgICAgICAgICB2YXIgc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIHd4LmNoZWNrU2Vzc2lvbih7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBkZWxTZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkb0xvZ2luKCkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXMpO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVuZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvblJlcG9ydGVyXzEuZGVmYXVsdC5yZXBvcnQoJ3d4X2NoZWNrU2Vzc2lvbicsIHN0YXJ0LCBlbmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGNoZWNrU2Vzc2lvblByb21pc2U7XG59XG5mdW5jdGlvbiBpc1Nlc3Npb25FeHBpcmVPckVtcHR5KCkge1xuICAgIGlmICghc3RhdHVzXzEuZGVmYXVsdC5zZXNzaW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoY29uZmlnXzEuZGVmYXVsdC5zZXNzaW9uRXhwaXJlVGltZSAmJiBuZXcgRGF0ZSgpLmdldFRpbWUoKSA+IHN0YXR1c18xLmRlZmF1bHQuc2Vzc2lvbkV4cGlyZSkge1xuICAgICAgICBkZWxTZXNzaW9uKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoY29uZmlnXzEuZGVmYXVsdC5zZXNzaW9uTmFtZSkge1xuICAgICAgICB2YXIgc3RhdHVzRW1wdHkgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGNvbmZpZ18xLmRlZmF1bHQuc2Vzc2lvbk5hbWUpIHtcbiAgICAgICAgICAgIGlmICghc3RhdHVzXzEuZGVmYXVsdC5zZXNzaW9uW2tleV0pIHtcbiAgICAgICAgICAgICAgICBzdGF0dXNFbXB0eSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXR1c0VtcHR5KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gY29uZmlnXzEuZGVmYXVsdC5zZXNzaW9uTmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciBzdGdLZXkgPSBjb25maWdfMS5kZWZhdWx0LnNlc3Npb25OYW1lW2tleV07XG4gICAgICAgICAgICAgICAgdmFyIHN0YXR1c1ZhbHVlID0gd3guZ2V0U3RvcmFnZVN5bmMoc3RnS2V5KTtcbiAgICAgICAgICAgICAgICBpZiAoIXN0YXR1c1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzXzEuZGVmYXVsdC5zZXNzaW9uW2tleV0gPSBzdGF0dXNWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gY2hlY2tMb2dpbigpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBpZiAoaXNTZXNzaW9uRXhwaXJlT3JFbXB0eSgpKSB7XG4gICAgICAgICAgICBjb25maWdfMS5kZWZhdWx0LmRvTm90Q2hlY2tTZXNzaW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBkb0xvZ2luKCkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzKTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbnZhciBsb2dpblByb21pc2UgPSBudWxsO1xuZnVuY3Rpb24gZG9Mb2dpbigpIHtcbiAgICBpZiAoIWxvZ2luUHJvbWlzZSkge1xuICAgICAgICBsb2dpblByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBsb2dpbigpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGxvZ2luUHJvbWlzZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICByZWRvU2Vzc2lvblRhc2s6IHRydWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgbG9naW5Qcm9taXNlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBsb2FkaW5nXzEuZGVmYXVsdC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChyZXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbG9naW5Qcm9taXNlO1xufVxuZnVuY3Rpb24gbG9naW4oKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3d4LmxvZ2luJyk7XG4gICAgICAgIHZhciBzdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB3eC5sb2dpbih7XG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5jb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGUyU2Vzc2lvbihyZXMuY29kZSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdCh7IHRpdGxlOiBcIueZu+W9leWksei0pVwiLCBcImNvbnRlbnRcIjogXCLor7fnqI3lkI7ph43or5VbY29kZSDojrflj5blpLHotKVdXCIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVuZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uUmVwb3J0ZXJfMS5kZWZhdWx0LnJlcG9ydCgnd3hfbG9naW4nLCBzdGFydCwgZW5kKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdCh7IHRpdGxlOiBcIueZu+W9leWksei0pVwiLCBcImNvbnRlbnRcIjogcmVzLmVyck1zZyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBzZXRTZXNzaW9uKHNlc3Npb24pIHtcbiAgICBjb25maWdfMS5kZWZhdWx0LmRvTm90Q2hlY2tTZXNzaW9uID0gdHJ1ZTtcbiAgICBpZiAoY29uZmlnXzEuZGVmYXVsdC5zZXNzaW9uRXhwaXJlVGltZSAmJiBjb25maWdfMS5kZWZhdWx0LnNlc3Npb25FeHBpcmVLZXkpIHtcbiAgICAgICAgc3RhdHVzXzEuZGVmYXVsdC5zZXNzaW9uRXhwaXJlID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyBjb25maWdfMS5kZWZhdWx0LnNlc3Npb25FeHBpcmVUaW1lO1xuICAgICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAgICAgIGtleTogY29uZmlnXzEuZGVmYXVsdC5zZXNzaW9uRXhwaXJlS2V5LFxuICAgICAgICAgICAgZGF0YTogU3RyaW5nKHN0YXR1c18xLmRlZmF1bHQuc2Vzc2lvbkV4cGlyZSlcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHZhciBkYXRhID0ge307XG4gICAgZm9yICh2YXIga2V5IGluIHNlc3Npb24pIHtcbiAgICAgICAgd3guc2V0U3RvcmFnZSh7XG4gICAgICAgICAgICBrZXk6IGNvbmZpZ18xLmRlZmF1bHQuc2Vzc2lvbk5hbWVba2V5XSxcbiAgICAgICAgICAgIGRhdGE6IHNlc3Npb25ba2V5XSxcbiAgICAgICAgfSk7XG4gICAgICAgIGRhdGFba2V5XSA9IHNlc3Npb25ba2V5XTtcbiAgICB9XG4gICAgc3RhdHVzXzEuZGVmYXVsdC5zZXNzaW9uID0gT2JqZWN0LmFzc2lnbihzdGF0dXNfMS5kZWZhdWx0LnNlc3Npb24gfHwge30sIGRhdGEpO1xufVxuZnVuY3Rpb24gY29kZTJTZXNzaW9uKGNvZGUpIHtcbiAgICB2YXIgZGF0YTtcbiAgICBpZiAodHlwZW9mIGNvbmZpZ18xLmRlZmF1bHQuY29kZVRvU2Vzc2lvbi5kYXRhID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZGF0YSA9IGNvbmZpZ18xLmRlZmF1bHQuY29kZVRvU2Vzc2lvbi5kYXRhKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkYXRhID0gY29uZmlnXzEuZGVmYXVsdC5jb2RlVG9TZXNzaW9uLmRhdGEgfHwge307XG4gICAgfVxuICAgIGlmIChjb25maWdfMS5kZWZhdWx0LmNvZGVUb1Nlc3Npb24uY29kZU5hbWUpIHtcbiAgICAgICAgZGF0YVtjb25maWdfMS5kZWZhdWx0LmNvZGVUb1Nlc3Npb24uY29kZU5hbWVdID0gY29kZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRhdGEuY29kZSA9IGNvZGU7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBzdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHVybDogcmVxdWVzdEhhbmRsZXJfMS5kZWZhdWx0LmZvcm1hdChjb25maWdfMS5kZWZhdWx0LmNvZGVUb1Nlc3Npb24udXJsKSxcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICBtZXRob2Q6IGNvbmZpZ18xLmRlZmF1bHQuY29kZVRvU2Vzc2lvbi5tZXRob2QgfHwgJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXI6IHR5cGVvZiBjb25maWdfMS5kZWZhdWx0LnNldEhlYWRlciA9PT0gJ2Z1bmN0aW9uJyA/IGNvbmZpZ18xLmRlZmF1bHQuc2V0SGVhZGVyKCkgOiBjb25maWdfMS5kZWZhdWx0LnNldEhlYWRlcixcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLnN0YXR1c0NvZGUgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnXzEuZGVmYXVsdC5jb2RlVG9TZXNzaW9uLnJlcG9ydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVuZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb25SZXBvcnRlcl8xLmRlZmF1bHQucmVwb3J0KGNvbmZpZ18xLmRlZmF1bHQuY29kZVRvU2Vzc2lvbi5yZXBvcnQsIHN0YXJ0LCBlbmQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBzID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzID0gY29uZmlnXzEuZGVmYXVsdC5jb2RlVG9TZXNzaW9uLnN1Y2Nlc3MocmVzLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlc3Npb24ocyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnJvckhhbmRsZXJfMS5kZWZhdWx0LmdldEVycm9yTXNnKHJlcykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KHsgdGl0bGU6IFwi55m75b2V5aSx6LSlXCIsIFwiY29udGVudFwiOiBcIuivt+eojeWQjumHjeivlVwiIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KHsgdGl0bGU6IFwi55m75b2V5aSx6LSlXCIsIFwiY29udGVudFwiOiBcIuivt+eojeWQjumHjeivlVwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGRlbFNlc3Npb24oKSB7XG4gICAgc3RhdHVzXzEuZGVmYXVsdC5zZXNzaW9uID0gdW5kZWZpbmVkO1xuICAgIGZvciAodmFyIGtleSBpbiBjb25maWdfMS5kZWZhdWx0LnNlc3Npb25OYW1lKSB7XG4gICAgICAgIHd4LnJlbW92ZVN0b3JhZ2Uoe1xuICAgICAgICAgICAga2V5OiBjb25maWdfMS5kZWZhdWx0LnNlc3Npb25OYW1lW2tleV1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChjb25maWdfMS5kZWZhdWx0LnNlc3Npb25FeHBpcmVUaW1lICYmIGNvbmZpZ18xLmRlZmF1bHQuc2Vzc2lvbkV4cGlyZUtleSkge1xuICAgICAgICBzdGF0dXNfMS5kZWZhdWx0LnNlc3Npb25FeHBpcmUgPSBJbmZpbml0eTtcbiAgICAgICAgd3gucmVtb3ZlU3RvcmFnZSh7XG4gICAgICAgICAgICBrZXk6IGNvbmZpZ18xLmRlZmF1bHQuc2Vzc2lvbkV4cGlyZUtleVxuICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBtYWluKHJlbGF0ZWRSZXF1ZXN0T2JqKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHJldHJ5ID0gIXJlbGF0ZWRSZXF1ZXN0T2JqXG4gICAgICAgICAgICA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1haW4oKS50aGVuKHJlc29sdmUpLmNhdGNoKHJlamVjdCk7IH1cbiAgICAgICAgICAgIDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQocmVsYXRlZFJlcXVlc3RPYmopLnRoZW4ocmVsYXRlZFJlcXVlc3RPYmouX3Jlc29sdmUpLmNhdGNoKHJlbGF0ZWRSZXF1ZXN0T2JqLl9yZWplY3QpOyB9O1xuICAgICAgICByZXR1cm4gY2hlY2tMb2dpbigpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZ18xLmRlZmF1bHQuZG9Ob3RDaGVja1Nlc3Npb24gPyBQcm9taXNlLnJlc29sdmUocmVzKSA6IGNoZWNrU2Vzc2lvbigpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciB0aXRsZSA9IF9hLnRpdGxlLCBjb250ZW50ID0gX2EuY29udGVudDtcbiAgICAgICAgICAgIGVycm9ySGFuZGxlcl8xLmRlZmF1bHQuZG9FcnJvcih0aXRsZSwgY29udGVudCwgcmV0cnkpO1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdCh7IHRpdGxlOiB0aXRsZSwgY29udGVudDogY29udGVudCB9KTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXMpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciB0aXRsZSA9IF9hLnRpdGxlLCBjb250ZW50ID0gX2EuY29udGVudDtcbiAgICAgICAgICAgIGVycm9ySGFuZGxlcl8xLmRlZmF1bHQuZG9FcnJvcih0aXRsZSwgY29udGVudCwgcmV0cnkpO1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdCh7IHRpdGxlOiB0aXRsZSwgY29udGVudDogY29udGVudCB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgbWFpbjogbWFpbixcbiAgICBzZXRTZXNzaW9uOiBzZXRTZXNzaW9uLFxuICAgIGRlbFNlc3Npb246IGRlbFNlc3Npb25cbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZXF1ZXN0SGFuZGxlcl8xID0gcmVxdWlyZShcIi4vcmVxdWVzdEhhbmRsZXJcIik7XG52YXIgdGFza1F1ZXVlID0ge307XG52YXIgd2FpdFJlZG9UYXNrID0gW107XG5mdW5jdGlvbiBhZGRTZXNzaW9uVGFzayh0YXNrLCBvYmopIHtcbiAgICBpZiAoIW9iai5ub3ROZWVkU2Vzc2lvbikge1xuICAgICAgICB2YXIgaW5kZXggPSBvYmoudGFnICsgJyc7XG4gICAgICAgIHRhc2tRdWV1ZVtpbmRleF0gPSB7XG4gICAgICAgICAgICB0YXNrOiB0YXNrLFxuICAgICAgICAgICAgb2JqOiBvYmpcbiAgICAgICAgfTtcbiAgICB9XG59XG5mdW5jdGlvbiBhYm9ydFNlc3Npb25UYXNrKCkge1xuICAgIGZvciAodmFyIHRhZyBpbiB0YXNrUXVldWUpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB0YXNrUXVldWVbdGFnXTtcbiAgICAgICAgaWYgKGRhdGEudGFzayAmJiBkYXRhLm9iaikge1xuICAgICAgICAgICAgZGF0YS50YXNrLmFib3J0KCk7XG4gICAgICAgICAgICBkYXRhLm9iai5hYm9ydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGRlbFNlc3Npb25UYXNrKGRhdGEub2JqLnRhZyk7XG4gICAgICAgICAgICB3YWl0UmVkb1Rhc2sucHVzaChkYXRhLm9iaik7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiByZWRvU2Vzc2lvblRhc2soKSB7XG4gICAgaWYgKCF3YWl0UmVkb1Rhc2spXG4gICAgICAgIHJldHVybjtcbiAgICBpZiAod2FpdFJlZG9UYXNrLmxlbmd0aCA9PT0gMClcbiAgICAgICAgcmV0dXJuO1xuICAgIGZvciAodmFyIF9pID0gMCwgd2FpdFJlZG9UYXNrXzEgPSB3YWl0UmVkb1Rhc2s7IF9pIDwgd2FpdFJlZG9UYXNrXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0YXNrT2JqID0gd2FpdFJlZG9UYXNrXzFbX2ldO1xuICAgICAgICByZXF1ZXN0SGFuZGxlcl8xLmRlZmF1bHQucmVxdWVzdCh0YXNrT2JqKTtcbiAgICB9XG4gICAgd2FpdFJlZG9UYXNrID0gW107XG59XG5mdW5jdGlvbiBkZWxTZXNzaW9uVGFzayh0YWcpIHtcbiAgICB2YXIgaW5kZXggPSB0YWcgKyAnJztcbiAgICBpZiAodGFza1F1ZXVlW2luZGV4XSkge1xuICAgICAgICB0YXNrUXVldWVbaW5kZXhdID0gbnVsbDtcbiAgICAgICAgZGVsZXRlIHRhc2tRdWV1ZVtpbmRleF07XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGFkZFNlc3Npb25UYXNrOiBhZGRTZXNzaW9uVGFzayxcbiAgICBkZWxTZXNzaW9uVGFzazogZGVsU2Vzc2lvblRhc2ssXG4gICAgYWJvcnRTZXNzaW9uVGFzazogYWJvcnRTZXNzaW9uVGFzayxcbiAgICByZWRvU2Vzc2lvblRhc2s6IHJlZG9TZXNzaW9uVGFzayxcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBkZWZhdWx0Q29uZmlnID0ge1xuICAgIHNlc3Npb25OYW1lOiB7XG4gICAgICAgIHNlc3Npb246ICdzZXNzaW9uJyxcbiAgICB9LFxuICAgIGxvZ2luVHJpZ2dlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBjb2RlVG9TZXNzaW9uOiB7XG4gICAgICAgIHVybDogXCJcIixcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkgeyB9XG4gICAgfSxcbiAgICBzdWNjZXNzVHJpZ2dlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIHNldEhlYWRlcjoge30sXG4gICAgdXJsUGVyZml4OiBcIlwiLFxuICAgIGRvTm90Q2hlY2tTZXNzaW9uOiBmYWxzZSxcbiAgICBlcnJvclRpdGxlOiBcIuaTjeS9nOWksei0pVwiLFxuICAgIGVycm9yQ29udGVudDogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH0sXG4gICAgZXJyb3JSZXRyeUJ0bjogZmFsc2UsXG4gICAgcmVMb2dpbkxpbWl0OiAzLFxuICAgIGVycm9yQ2FsbGJhY2s6IG51bGwsXG4gICAgcmVwb3J0Q0dJOiBmYWxzZSxcbiAgICBtb2NrSnNvbjogZmFsc2UsXG4gICAgZ2xvYmFsRGF0YTogZmFsc2UsXG4gICAgc2Vzc2lvbkV4cGlyZUtleTogXCJzZXNzaW9uRXhwaXJlS2V5XCJcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBkZWZhdWx0Q29uZmlnO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgc2Vzc2lvbjogJycsXG4gICAgc2Vzc2lvbkV4cGlyZTogSW5maW5pdHlcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBMSU5FRkVFRCA9IC9cXHUwMDBBL2c7XG52YXIgQ0FSUklBR0VSRVRVUk4gPSAvXFx1MDAwRC9nO1xudmFyIExJTkVfU0VQQVJBVE9SID0gL1xcdTIwMjgvZztcbnZhciBQQVJBR1JBUEhfU0VQQVJBVE9SID0gL1xcdTIwMjkvZztcbmZ1bmN0aW9uIHJlcGxhY2UocmVzKSB7XG4gICAgcmVzID0gcmVzLnJlcGxhY2UoTElORUZFRUQsIFwiXCIpO1xuICAgIHJlcyA9IHJlcy5yZXBsYWNlKENBUlJJQUdFUkVUVVJOLCBcIlwiKTtcbiAgICByZXMgPSByZXMucmVwbGFjZShMSU5FX1NFUEFSQVRPUiwgXCJcIik7XG4gICAgcmVzID0gcmVzLnJlcGxhY2UoUEFSQUdSQVBIX1NFUEFSQVRPUiwgXCJcIik7XG4gICAgcmV0dXJuIHJlcztcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHJlcGxhY2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIHNob3codHh0KSB7XG4gICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgdGl0bGU6IHR5cGVvZiB0eHQgPT09ICdib29sZWFuJyA/ICfliqDovb3kuK0nIDogdHh0LFxuICAgICAgICBpY29uOiAnbG9hZGluZycsXG4gICAgICAgIG1hc2s6IHRydWUsXG4gICAgICAgIGR1cmF0aW9uOiA2MDAwMFxuICAgIH0pO1xufVxuZnVuY3Rpb24gaGlkZSgpIHtcbiAgICB3eC5oaWRlVG9hc3Qoe30pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIHNob3c6IHNob3csXG4gICAgaGlkZTogaGlkZVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIHNldFBhcmFtcyh1cmwsIHBhcmFtcykge1xuICAgIGlmICh1cmwgPT09IHZvaWQgMCkgeyB1cmwgPSBcIlwiOyB9XG4gICAgdmFyIHF1ZXJ5U3RyaW5nSW5kZXggPSB1cmwuaW5kZXhPZihcIj9cIik7XG4gICAgdmFyIGt2cCA9IHt9O1xuICAgIGlmIChxdWVyeVN0cmluZ0luZGV4ID49IDApIHtcbiAgICAgICAgdmFyIG9sZFF1ZXJ5U3RyaW5nXzEgPSB1cmwuc3Vic3RyKHF1ZXJ5U3RyaW5nSW5kZXggKyAxKS5zcGxpdChcIiZcIik7XG4gICAgICAgIG9sZFF1ZXJ5U3RyaW5nXzEuZm9yRWFjaChmdW5jdGlvbiAoeCwgaSkge1xuICAgICAgICAgICAgdmFyIGt2ID0gb2xkUXVlcnlTdHJpbmdfMVtpXS5zcGxpdChcIj1cIik7XG4gICAgICAgICAgICBrdnBba3ZbMF1dID0ga3ZbMV07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBrdnAgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwga3ZwKSwgcGFyYW1zKTtcbiAgICB2YXIgcXVlcnlTdHJpbmcgPSBPYmplY3Qua2V5cyhrdnApXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4ga2V5ICsgXCI9XCIgKyBlbmNvZGVVUkkoa3ZwW2tleV0pO1xuICAgIH0pXG4gICAgICAgIC5qb2luKFwiJlwiKTtcbiAgICBpZiAocXVlcnlTdHJpbmdJbmRleCA+PSAwKSB7XG4gICAgICAgIHJldHVybiB1cmwuc3Vic3RyaW5nKDAsIHF1ZXJ5U3RyaW5nSW5kZXggKyAxKSArIHF1ZXJ5U3RyaW5nO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVybCArIFwiP1wiICsgcXVlcnlTdHJpbmc7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIHNldFBhcmFtczogc2V0UGFyYW1zXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnZlcnNpb24gPSB2b2lkIDA7XG52YXIgdmVyc2lvbiA9IF9fVkVSU0lPTl9fO1xuZXhwb3J0cy52ZXJzaW9uID0gdmVyc2lvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=