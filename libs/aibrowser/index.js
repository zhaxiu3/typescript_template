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

/***/ "./src/ExtendedBridge.ts":
/*!*******************************!*\
  !*** ./src/ExtendedBridge.ts ***!
  \*******************************/
/*! exports provided: ExtendedBridge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtendedBridge", function() { return ExtendedBridge; });
/* harmony import */ var _services_CameraService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/CameraService */ "./src/services/CameraService.ts");
/* harmony import */ var _services_ServiceManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/ServiceManager */ "./src/services/ServiceManager.ts");
/* harmony import */ var _services_AIService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/AIService */ "./src/services/AIService.ts");
/* harmony import */ var _services_AnswerToolService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/AnswerToolService */ "./src/services/AnswerToolService.ts");
/* harmony import */ var _services_LocalFileService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/LocalFileService */ "./src/services/LocalFileService.ts");
/* harmony import */ var _services_PlayerService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/PlayerService */ "./src/services/PlayerService.ts");
/* harmony import */ var _defs_LocalFileOpenMode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./defs/LocalFileOpenMode */ "./src/defs/LocalFileOpenMode.ts");
/* harmony import */ var _helper_log_Log__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helper/log/Log */ "./src/helper/log/Log.ts");
/* harmony import */ var _services_SystemService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/SystemService */ "./src/services/SystemService.ts");
/* harmony import */ var _helper_BufferedQuery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helper/BufferedQuery */ "./src/helper/BufferedQuery.ts");
/* harmony import */ var _helper_math_Vector2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./helper/math/Vector2 */ "./src/helper/math/Vector2.ts");
/* harmony import */ var _helper_math_Vector3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helper/math/Vector3 */ "./src/helper/math/Vector3.ts");
/* harmony import */ var _frame_NativeBridge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./frame/NativeBridge */ "./src/frame/NativeBridge.ts");
/* harmony import */ var _defs_PLAYER_STATUS__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./defs/PLAYER_STATUS */ "./src/defs/PLAYER_STATUS.ts");
/* harmony import */ var _services_PXVideoProcessorService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/PXVideoProcessorService */ "./src/services/PXVideoProcessorService.ts");
/* harmony import */ var _services_VideoCaptureService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/VideoCaptureService */ "./src/services/VideoCaptureService.ts");
/* harmony import */ var _defs_Cameradefs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./defs/Cameradefs */ "./src/defs/Cameradefs.ts");
/* harmony import */ var _helper_StudentGalleryBinding__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./helper/StudentGalleryBinding */ "./src/helper/StudentGalleryBinding.ts");
/* harmony import */ var _defs_AIdefs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./defs/AIdefs */ "./src/defs/AIdefs.ts");
/* harmony import */ var _helper_RegExpHelper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./helper/RegExpHelper */ "./src/helper/RegExpHelper.ts");
/* harmony import */ var _defs_AnswerTooldefs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./defs/AnswerTooldefs */ "./src/defs/AnswerTooldefs.ts");
/* harmony import */ var _defs_ANSWER_STATUS__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./defs/ANSWER_STATUS */ "./src/defs/ANSWER_STATUS.ts");
/* harmony import */ var _helper_message_CLIENT_MESSAGE__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./helper/message/CLIENT_MESSAGE */ "./src/helper/message/CLIENT_MESSAGE.ts");
/* harmony import */ var _defs_LocalFiledefs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./defs/LocalFiledefs */ "./src/defs/LocalFiledefs.ts");
/* harmony import */ var _defs_SERVICE_OPEN_STATUS__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./defs/SERVICE_OPEN_STATUS */ "./src/defs/SERVICE_OPEN_STATUS.ts");
/* harmony import */ var _defs_Basedefs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./defs/Basedefs */ "./src/defs/Basedefs.ts");
/* harmony import */ var _helper_AnswerToolBinding__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./helper/AnswerToolBinding */ "./src/helper/AnswerToolBinding.ts");
/* harmony import */ var _helper_file_Path__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./helper/file/Path */ "./src/helper/file/Path.ts");
/* harmony import */ var _defs_VideoCapturedefs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./defs/VideoCapturedefs */ "./src/defs/VideoCapturedefs.ts");
/* harmony import */ var _defs_Systemdefs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./defs/Systemdefs */ "./src/defs/Systemdefs.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






























var ExtendedBridge = /** @class */ (function (_super) {
    __extends(ExtendedBridge, _super);
    function ExtendedBridge(aibrowser) {
        var _this = _super.call(this, aibrowser) || this;
        /**
         * 成对调用的服务
         */
        _this.pairCallerRequestIds = {};
        _this.galleryBinding = new _helper_StudentGalleryBinding__WEBPACK_IMPORTED_MODULE_17__["StudentGalleryBinding"]();
        _this.answerToolBinding = new _helper_AnswerToolBinding__WEBPACK_IMPORTED_MODULE_26__["AnswerToolBindings"]();
        //////////// 指令相关////////////
        // >>>>>>>>>>>>>>>>>>>> PlayerService >>>>>>>>>>>>>>>>>>>>
        _this.currentVideoKey = "";
        _this.concentrationStarted = false;
        _this.timerId = null;
        /////////////////////// AnswerToolService ///////////////////
        /////////////////////// LocalFileService ///////////////////
        _this.settingBuffer = null;
        _this.fileFilter = {
            video: "*.mp4 *.mtv *.rmvb",
            image: "*.bmp *.png *.jpg *.jpeg",
            audio: "*.mp3 *.acc",
            json: "*.json",
        };
        _this.isRecordingScreen = false;
        _this.answerToolStatus = _defs_ANSWER_STATUS__WEBPACK_IMPORTED_MODULE_21__["ANSWER_STATUS"].NO_DEVICE;
        return _this;
    }
    ExtendedBridge.prototype.start = function (servicelist) {
        var _this = this;
        return _super.prototype.start.call(this, servicelist).then(function (e) {
            _this.attachMessageObserver(function (_a) {
                var message = _a.message;
                if (message.cmd === _helper_message_CLIENT_MESSAGE__WEBPACK_IMPORTED_MODULE_22__["CLIENT_MESSAGE"].CURRENT_COURSE_END) {
                    _this.currentVideoKey = "";
                }
            });
            return Promise.resolve(e);
        }).catch(function (reason) {
            return Promise.reject();
        });
    };
    /**
     * 调用c++添加视频
     * @param key 要播放课件相对应的key
     * @param file 文件名称，不带扩展名
     * @param preload 是否预加载视频
     */
    ExtendedBridge.prototype.addCourseFile = function (key, file, preload) {
        var service = this.getService(_services_PlayerService__WEBPACK_IMPORTED_MODULE_5__["PlayerService"]);
        return service.px_cmd_player_add({ key: key, filePath: file, flag: preload });
    };
    /**
     * 播放视频 注意:这个接口是将新的key往播放队列里添加,
     * 如果有正在播放的视频，则现有key不会立即播放，而是在前面的视频播放结束后才播放
     * @param key 视频对应的key
     * @param interval 时间更新的间隔
     * @param pausetime 设置视频播放到一个时间点后暂停, 单位ms(可选)
     * @description 若不间隔帧数为0123456789 interval为2 则更新的帧数为0 3 6 9
     * 产生的消息:
     * CLIENT_MESSAGE.TIME_UPDATE // 视频时间更新
     * {
     *   cmd: CLIENT_MESSAGE.TIME_UPDATE,
     *   videoTime: string,
     *   key: string,
     *   pause: boolean,
     * }
     *
     * CLIENT_MESSAGE.CURRENT_COURSE_END // 视频播放到结尾
     * {
     *    cmd: CLIENT_MESSAGE.CURRENT_COURSE_END,
     *    videoTime: eventInfo.currentTime,
     *    key: eventInfo.key,
     *    pause: false,
     * }
     */
    ExtendedBridge.prototype.startCourse = function (key, interval, pausetime) {
        var service = this.getService(_services_PlayerService__WEBPACK_IMPORTED_MODULE_5__["PlayerService"]);
        var param = { key: key };
        if (interval) {
            param.interval = interval;
        }
        if (pausetime) {
            param.pause = pausetime;
        }
        this.currentVideoKey = key;
        return service.px_cmd_player_play({ key: key });
    };
    /**
     * 视频播放控制
     * @param restart false停止当前播放， true开启当前播放
     */
    ExtendedBridge.prototype.pauseCourse = function (restart) {
        var service = this.getService(_services_PlayerService__WEBPACK_IMPORTED_MODULE_5__["PlayerService"]);
        if (restart === true) {
            return service.px_cmd_player_resume();
        }
        else {
            return service.px_cmd_player_pause();
        }
    };
    /**
     * 结束当前视频的播放
     */
    ExtendedBridge.prototype.stopCourse = function () {
        var _this = this;
        if (this.currentVideoKey === "") {
            return Promise.resolve();
        }
        var service = this.getService(_services_PlayerService__WEBPACK_IMPORTED_MODULE_5__["PlayerService"]);
        return service.px_cmd_player_stop({ key: this.currentVideoKey }).then(function (e) {
            _this.currentVideoKey = "";
            return Promise.resolve(e);
        }).catch(function (reason) {
            if (reason.result.rsp_error === _defs_Basedefs__WEBPACK_IMPORTED_MODULE_25__["CommonError"].PX_ERR_INVALID_DATA) {
                return Promise.resolve(reason);
            }
        });
    };
    /**
     * 当前视频往前播一帧并暂停
     */
    ExtendedBridge.prototype.preFrame = function () {
        var service = this.getService(_services_PlayerService__WEBPACK_IMPORTED_MODULE_5__["PlayerService"]);
        return service.px_cmd_player_pre_frame();
    };
    /**
     * 当前视频往后播一帧并暂停
     */
    ExtendedBridge.prototype.nextFrame = function () {
        var service = this.getService(_services_PlayerService__WEBPACK_IMPORTED_MODULE_5__["PlayerService"]);
        return service.px_cmd_player_next_frame();
    };
    /**
     * 从一个新的时间点开始播放视频
     * @param key 视频的key值
     * @param startTime 新的时间点(ms)
     */
    ExtendedBridge.prototype.gotoAndPlay = function (key, startTime) {
        var service = this.getService(_services_PlayerService__WEBPACK_IMPORTED_MODULE_5__["PlayerService"]);
        return service.px_cmd_player_play({ key: key, startTime: startTime });
    };
    /**
     * 将正在播放的视频设置到seekTime开始播放
     * @param seekTime 新的时间点(ms)
     */
    ExtendedBridge.prototype.seek = function (seekTime) {
        var service = this.getService(_services_PlayerService__WEBPACK_IMPORTED_MODULE_5__["PlayerService"]);
        return service.px_cmd_player_seek({ seek: seekTime });
    };
    /**
     * 从视频的 startTime开始播放到endTime暂停
     * @param key 视频的key值
     * @param startTime 开始播放的时间点(ms)
     * @param pauseTime 暂停的时间点(ms)
     * @description
     *   注意:若pauseTime小于当前视频进度，则不会暂停
     */
    ExtendedBridge.prototype.playFromTo = function (key, startTime, pauseTime) {
        var service = this.getService(_services_PlayerService__WEBPACK_IMPORTED_MODULE_5__["PlayerService"]);
        return service.px_cmd_player_play({ key: key, startTime: startTime, pause: pauseTime });
    };
    /**
     * 设置视频时间更新的间隔次数
     * @param interval 间隔数，默认为 0 表示每一帧都更新时间
     */
    ExtendedBridge.prototype.setVideoUpdateInterval = function (interval) {
        var service = this.getService(_services_PlayerService__WEBPACK_IMPORTED_MODULE_5__["PlayerService"]);
        return service.px_cmd_player_update_interval({ interval: interval });
    };
    // <<<<<<<<<<<<<<<<<<<< PlayerService <<<<<<<<<<<<<<<<<<<<
    /////////////////////// AIService ///////////////////
    /**
     * 根据配置加载ai模型
     * @param config 要加载的ai模型
     *
     * 数学:{"faceMtcnn":1,"faceid":1,"ssd":1,"bodypose":1,"cmu":1,"cmuPose":1,"faceAttr":1,"handup":0,"emotion":1}
     * 英语:{"faceMtcnn":1,"faceid":1,"ssd":1,"bodypose":1,"cmu":0,"cmuPose":0,"faceAttr":0,"handup":1,"emotion":1}
     */
    ExtendedBridge.prototype.loadAIModel = function (config) {
        var aiService = this.getService(_services_AIService__WEBPACK_IMPORTED_MODULE_2__["AIService"]);
        var param = config;
        var option = aiService.makeExecuteOption(null, null, null, 0);
        return aiService.px_cmd_ai_run_ai_services(param, option);
    };
    /**
     * 注意: 调用该方法前需要先运行关注度检测
     */
    ExtendedBridge.prototype.changePose = function (args, poseHandler, playerAreaHandler) {
        var _this = this;
        // if (this.onceCallerRequestIds.changePoseRequestId !== undefined) {
        //     throw new Error("还未调用stopPose");
        // }
        var aiService = this.getService(_services_AIService__WEBPACK_IMPORTED_MODULE_2__["AIService"]);
        var options = aiService.makeExecuteOption(null, null, function (uuid) {
            _this.pairCallerRequestIds.changePoseRequestId = uuid;
        }, 2000);
        options.addListener(_defs_AIdefs__WEBPACK_IMPORTED_MODULE_18__["AIMessage"].PX_MSG_AI_FUNCTIONGAME_RESULT, {
            handler: function (msg, eventInfo, type, requestId) {
                poseHandler(eventInfo);
            },
        });
        options.addListener(_defs_AIdefs__WEBPACK_IMPORTED_MODULE_18__["AIMessage"].PX_MSG_AI_FUNCTIONGAME_SHOWREGION, {
            handler: function (msg, eventInfo, type, requestId) {
                playerAreaHandler(eventInfo);
            },
        });
        return aiService.px_cmd_ai_start_functiongame(args, options);
    };
    ExtendedBridge.prototype.stopPoseDetect = function () {
        // if (this.onceCallerRequestIds.changePoseRequestId === undefined) {
        //     throw new Error("还未调用 changePose方法");
        // }
        var aiService = this.getService(_services_AIService__WEBPACK_IMPORTED_MODULE_2__["AIService"]);
        aiService.clearListeners(this.pairCallerRequestIds.changePoseRequestId + "_" + _defs_AIdefs__WEBPACK_IMPORTED_MODULE_18__["AIMessage"].PX_MSG_AI_FUNCTIONGAME_RESULT);
        aiService.clearListeners(this.pairCallerRequestIds.changePoseRequestId + "_" + _defs_AIdefs__WEBPACK_IMPORTED_MODULE_18__["AIMessage"].PX_MSG_AI_FUNCTIONGAME_SHOWREGION);
        delete this.pairCallerRequestIds.changePoseRequestId;
        return aiService.px_cmd_ai_stop_functiongame();
    };
    /**
     * 判断AI服务是否启动
     */
    ExtendedBridge.prototype.checkoutMachineState = function () {
        var aiService = this.getService(_services_AIService__WEBPACK_IMPORTED_MODULE_2__["AIService"]);
        if (aiService.openStatus === _defs_SERVICE_OPEN_STATUS__WEBPACK_IMPORTED_MODULE_24__["SERVICE_OPEN_STATUS"].OPENED) {
            return Promise.resolve();
        }
        else {
            return Promise.reject();
        }
    };
    /**
     * 获取学生头像信息
     * @returns headInfo[]  返回一组头像信息列表
     * headInfo: {
     *  id:      识别id
     *  headimg: 识别到的学生头像
     *  x:       学生头像的x坐标
     *  y:       学生头像的y坐标
     *  width:   学生头像的宽
     *  height:  学生头像的高
     * }
     */
    ExtendedBridge.prototype.checkoutStudentHead = function (stuID) {
        if (stuID === void 0) { stuID = ""; }
        var aiService = this.getService(_services_AIService__WEBPACK_IMPORTED_MODULE_2__["AIService"]);
        var param = {};
        if (stuID === "" || stuID === undefined || stuID === null) {
        }
        else {
            param.stuID = stuID;
        }
        if (aiService.openStatus === _defs_SERVICE_OPEN_STATUS__WEBPACK_IMPORTED_MODULE_24__["SERVICE_OPEN_STATUS"].OPENED) {
            return new Promise(function (resolve, reject) {
                var options = aiService.makeExecuteOption();
                options.addOnceListener(_defs_AIdefs__WEBPACK_IMPORTED_MODULE_18__["AIMessage"].PX_MSG_AI_GALLERY, {
                    handler: function (msg, eventInfo, type, requestId) {
                        resolve(eventInfo);
                    },
                });
                aiService.px_cmd_ai_fetch_gallery(param, options).catch(function (e) {
                    reject(e);
                });
            });
        }
        else {
            return Promise.reject("AIService未打开");
        }
    };
    /**
     * 将之前识别的头像传给AIService
     * @param galleries 之前保存的头像
     */
    ExtendedBridge.prototype.sendGalleriesToAI = function (galleries) {
        var service = this.getService(_services_AIService__WEBPACK_IMPORTED_MODULE_2__["AIService"]);
        return service.px_cmd_ai_external_gallery(galleries);
    };
    // 修改头像
    ExtendedBridge.prototype.modifyStudentAvator = function (args) {
        var service = this.getService(_services_AIService__WEBPACK_IMPORTED_MODULE_2__["AIService"]);
        return service.px_cmd_ai_update_gallery(args);
    };
    // 修改姓名
    ExtendedBridge.prototype.modifyStudentName = function (args) {
        var service = this.getService(_services_AIService__WEBPACK_IMPORTED_MODULE_2__["AIService"]);
        return service.px_cmd_ai_update_stuid(args);
    };
    /**
     * 绑定头像
     * @param args 头像绑定数据
     */
    ExtendedBridge.prototype.bindGallerys = function (args) {
        var aiService = this.getService(_services_AIService__WEBPACK_IMPORTED_MODULE_2__["AIService"]);
        return aiService.px_cmd_ai_regist_gallery(args);
    };
    /**
     * 获取单个学生头像
     * 注意: 调用该方法前需要先运行关注度检测
     * @param args 获取单个头像学生信息
     */
    ExtendedBridge.prototype.fetchOneStuGallery = function (stuID) {
        return this.checkoutStudentHead(stuID);
    };
    /**
     * 删除学生头像
     * @param args 要删除头像的学生信息
     */
    ExtendedBridge.prototype.deleteStuGallery = function (args) {
        var aiService = this.getService(_services_AIService__WEBPACK_IMPORTED_MODULE_2__["AIService"]);
        return aiService.px_cmd_ai_delete_gallery(args);
    };
    ExtendedBridge.prototype.startConcerntration = function () {
        var _this = this;
        if (this.concentrationStarted) {
            return Promise.resolve();
        }
        this.concentrationStarted = true;
        var service = this.getService(_services_AIService__WEBPACK_IMPORTED_MODULE_2__["AIService"]);
        var options = service.makeExecuteOption(null, null, function (uuid) {
            _this.pairCallerRequestIds.concerntrationRequestId = uuid;
        });
        options.addListener(_defs_AIdefs__WEBPACK_IMPORTED_MODULE_18__["AIMessage"].PX_MSG_AI_CONCERNTRATION, {
            handler: function (msg, eventInfo, type, requestId) {
                _this.emitServiceMessage({
                    cmd: "concerntration",
                    data: eventInfo,
                });
            },
        });
        return service.px_cmd_ai_start_concerntration(null, options);
    };
    ExtendedBridge.prototype.stopConcerntration = function () {
        if (this.concentrationStarted === false) {
            return Promise.resolve();
        }
        this.concentrationStarted = false;
        var service = this.getService(_services_AIService__WEBPACK_IMPORTED_MODULE_2__["AIService"]);
        service.clearListeners(this.pairCallerRequestIds.concerntrationRequestId + "_" + _defs_AIdefs__WEBPACK_IMPORTED_MODULE_18__["AIMessage"].PX_MSG_AI_CONCERNTRATION);
        return service.px_cmd_ai_stop_concerntration();
    };
    /**
     * 开启或关闭举手检测
     * @param state 1:开启 0:关闭
     * @param onHandupResult 举手信息回调
     */
    ExtendedBridge.prototype.startAcceptData = function (state, onHandupResult) {
        var _this = this;
        var aiservice = this.getService(_services_AIService__WEBPACK_IMPORTED_MODULE_2__["AIService"]);
        if (state === 1) {
            return new Promise(function (resolve) {
                var option = aiservice.makeExecuteOption(null, null, function (uuid) { _this.pairCallerRequestIds.handupRequestId = uuid; });
                option.addListener(_defs_AIdefs__WEBPACK_IMPORTED_MODULE_18__["AIMessage"].PX_MSG_AI_HANDUP, {
                    handler: function (msg, eventInfo, type, requestId) {
                        onHandupResult(eventInfo);
                    },
                });
                return aiservice.px_cmd_ai_start_handup({ handupType: 0 }, option).then(function (e) {
                    resolve(e);
                });
            });
        }
        else {
            aiservice.clearListeners(this.pairCallerRequestIds.handupRequestId + "_" + _defs_AIdefs__WEBPACK_IMPORTED_MODULE_18__["AIMessage"].PX_MSG_AI_HANDUP);
            return aiservice.px_cmd_ai_stop_handup({ handupType: 0 }).then(function (e) {
                delete _this.pairCallerRequestIds.handupRequestId;
                return Promise.resolve();
            }).catch(function (reason) {
                return Promise.reject({ code: -1, reason: reason });
            });
        }
    };
    /**
     * 获取学生属性信息
     * @description
     * 成功时返回的Promise参数:
     * [
     *   {
     *     stuID: string;
     *     gender: number;
     *     row: number;
     *     clothColor: string;
     *     glass: boolean;
     *     mouth: boolean;
     *   }
     * ]
     *
     * 失败时返回的Promise参数:
     * {
     *   code: -1,
     *   reason: any
     * }
     */
    ExtendedBridge.prototype.getStudentAttributes = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var service = _this.getService(_services_AIService__WEBPACK_IMPORTED_MODULE_2__["AIService"]);
            var options = service.makeExecuteOption();
            options.addOnceListener(_defs_AIdefs__WEBPACK_IMPORTED_MODULE_18__["AIMessage"].PX_MSG_AI_ATTRIBUTE_RESULT, {
                handler: function (msg, eventInfo, type, requestId) {
                    resolve(eventInfo.studentsAttribute);
                },
            });
            return service.px_cmd_ai_start_attribute({}, options).catch(function (reason) {
                return Promise.reject({ code: -1, reason: reason });
            });
        });
    };
    /**
     *
     * 注意: 调用该方法前需要先运行关注度检测
     */
    ExtendedBridge.prototype.startTracking = function (stuID, onTracking) {
        var _this = this;
        var service = this.getService(_services_AIService__WEBPACK_IMPORTED_MODULE_2__["AIService"]);
        var exeOption = service.makeExecuteOption();
        exeOption.requestIdCallback = function (uuid) { _this.pairCallerRequestIds.trackingRequestId = uuid; console.warn("开始追踪", _this.pairCallerRequestIds.trackingRequestId); };
        exeOption.addListener(_defs_AIdefs__WEBPACK_IMPORTED_MODULE_18__["AIMessage"].PX_MSG_AI_TRACKING, {
            handler: function (msg, eventInfo, type, requestId) {
                onTracking(eventInfo);
            },
        });
        return service.px_cmd_ai_start_tracking({ stuID: stuID }, exeOption);
    };
    ExtendedBridge.prototype.stopTracking = function (stuID) {
        var aiService = this.getService(_services_AIService__WEBPACK_IMPORTED_MODULE_2__["AIService"]);
        aiService.clearListeners(this.pairCallerRequestIds.trackingRequestId + "_" + _defs_AIdefs__WEBPACK_IMPORTED_MODULE_18__["AIMessage"].PX_MSG_AI_TRACKING);
        console.warn("停止追踪", this.pairCallerRequestIds.trackingRequestId);
        delete this.pairCallerRequestIds.trackingRequestId;
        return aiService.px_cmd_ai_stop_tracking({ stuID: stuID });
    };
    /////////////////////// AIService ///////////////////
    /////////////////////// CameraService ///////////////////
    /**
     * 发送消息
     * CLIENT_MESSAGE.CAMERA_CHANGE 相机插拔状态
     * {
     *    cmd: CLIENT_MESSAGE.CAMERA_CHANGE,
     *    devices, //当前可用的相机列表
     * }
     */
    ExtendedBridge.prototype.showCamera = function () {
        var _this = this;
        var cameraService = this.getService(_services_CameraService__WEBPACK_IMPORTED_MODULE_0__["CameraService"]);
        var cameralist = null;
        // 链式调用
        _helper_log_Log__WEBPACK_IMPORTED_MODULE_7__["Log"].log("开始获取相机列表", Date.now());
        return Promise.resolve().then(function () {
            return cameraService.px_inf_camera_list();
        }).then(function (list) {
            _helper_log_Log__WEBPACK_IMPORTED_MODULE_7__["Log"].log("取到相机列表", list);
            cameralist = list;
        }).then(function () {
            _helper_log_Log__WEBPACK_IMPORTED_MODULE_7__["Log"].log("设置相机", cameralist[0]);
            return cameraService.px_cmd_camera_set_camera(cameralist[0]);
        }).then(function () {
            _helper_log_Log__WEBPACK_IMPORTED_MODULE_7__["Log"].log("显示");
            return cameraService.px_cmd_camera_preview(false);
        }).then(function () {
            _helper_log_Log__WEBPACK_IMPORTED_MODULE_7__["Log"].log("设置分辨率");
            var param = { width: _this.designWidth, height: _this.designHeight };
            return cameraService.px_cmd_camera_change_video_setting(param);
        }).catch(function (e) {
            _helper_log_Log__WEBPACK_IMPORTED_MODULE_7__["Log"].warn(e);
            e.bubble = false;
            return Promise.reject(e);
        });
    };
    ExtendedBridge.prototype.setCamera = function (name) {
        var service = this.getService(_services_CameraService__WEBPACK_IMPORTED_MODULE_0__["CameraService"]);
        return service.px_cmd_camera_set_camera(name);
    };
    /**
     *
     * 开启摄像头截图
     *
     * @param x
     * @param y
     * @param width
     * @param height
     */
    ExtendedBridge.prototype.startCameraCapture = function (x, y, width, height, callback) {
        var _this = this;
        if (x < 0) {
            x = 0;
        }
        if (y < 0) {
            y = 0;
        }
        if (x + width > this.designWidth) {
            x = this.designWidth - width;
        }
        if (y + height > this.designHeight) {
            y = this.designHeight - height;
        }
        var service = this.getService(_services_CameraService__WEBPACK_IMPORTED_MODULE_0__["CameraService"]);
        if (this.pairCallerRequestIds.cameraCaptureRequestId !== undefined) {
            return Promise.resolve();
        }
        var options = service.makeExecuteOption(null, null, function (uuid) {
            _this.pairCallerRequestIds.cameraCaptureRequestId = uuid;
        });
        options.addListener(_defs_Cameradefs__WEBPACK_IMPORTED_MODULE_16__["CameraMessage"].PX_MSG_CAMERA_PRESENT, {
            handler: function (msg, eventInfo, type, requestId) {
                callback(eventInfo);
                _this.emitServiceMessage({
                    cmd: "studentImage",
                    imghead: eventInfo,
                });
            },
        });
        return service.px_cmd_camera_capture({ stop_flag: false, x: x, y: y, width: width, height: height }, options).then(function () {
            return Promise.resolve();
        });
    };
    ExtendedBridge.prototype.stopCameraCapture = function () {
        var _this = this;
        var service = this.getService(_services_CameraService__WEBPACK_IMPORTED_MODULE_0__["CameraService"]);
        if (this.pairCallerRequestIds.cameraCaptureRequestId === undefined) {
            return Promise.resolve();
        }
        service.clearListeners(this.pairCallerRequestIds.cameraCaptureRequestId + "_" + _defs_Cameradefs__WEBPACK_IMPORTED_MODULE_16__["CameraMessage"].PX_MSG_CAMERA_PRESENT);
        return service.px_cmd_camera_capture({ stop_flag: true, x: 0, y: 0, width: 0, height: 0 }).then(function () {
            delete _this.pairCallerRequestIds.cameraCaptureRequestId;
            return Promise.resolve();
        });
    };
    /**
     * createAnswer  创建要使用的答题器
     * @param answerType 学科，字符串类型，"SS"(双师数学)/"PX"(英语、语文)。
     * @param evaluate	0（双师数学，不评测），9（英语在线），3（语文在线）
     *
     * 产生的消息
     * CLIENT_MESSAGE.ANSWER_TOOL_USB_CHANGE // 答题器插拔电源/USB
     * {
     *    cmd: CLIENT_MESSAGE.ANSWER_TOOL_USB_CHANGE,
     *    status, // 0:插入 1:拔出
     * }
     *
     * CLIENT_MESSAGE.ANSWER_TOOL_INIT
     * {
     *    cmd: CLIENT_MESSAGE.ANSWER_TOOL_INIT,
     *    init: string, // "false"/"true"
     *    reason: string, // 初始化失败原因，"Socket"（内部原因，需要等待下一次结果）,"NoDevice"（没有设备）,"NoPower"（电源未插）,"NoIp"（ip没有配置）
     *    answertype: number, // 初始化成功，采用答题器类型（1 科盟 2 中科 -1 初始化失败）
     * }
     */
    ExtendedBridge.prototype.createAnswer = function (answerType, evaluate) {
        var _this = this;
        this.answerType = answerType;
        this.evaluate = evaluate;
        return new Promise(function (resolve, reject) {
            var service = _this.getService(_services_AnswerToolService__WEBPACK_IMPORTED_MODULE_3__["AnswerToolService"]);
            var option = service.makeExecuteOption();
            service.addListener(_defs_AnswerTooldefs__WEBPACK_IMPORTED_MODULE_20__["AnswerToolMessage"].PX_MSG_ANSWER_BIND, {
                handler: function (msg, eventInfo, type, requestID) {
                    if (eventInfo.user_id === "-1") {
                        return;
                    }
                    console.warn("绑定成功", eventInfo);
                    _this.answerToolBinding.addBindedInfo(eventInfo);
                },
                context: _this,
            });
            var callback = function (msg) {
                if (msg.message.cmd === _helper_message_CLIENT_MESSAGE__WEBPACK_IMPORTED_MODULE_22__["CLIENT_MESSAGE"].ANSWER_TOOL_USB_CHANGE) { // USB状态变化处理
                    console.log(msg, "答题器············");
                    if (msg.message.status === 1) { // USB拔出
                        _this.answerToolStatus = _defs_ANSWER_STATUS__WEBPACK_IMPORTED_MODULE_21__["ANSWER_STATUS"].USB_OFF; // 设置状态
                    }
                    else if (msg.message.status === 0) { // USB插入
                        _this.detachMessageObserver(callback);
                        _this.attachMessageObserver(callback);
                        _this.initAnswerTool(_this.answerType, _this.evaluate, option).catch(function (reason) {
                            reject(reason);
                        }); // 开始答题器
                    }
                }
            };
            var listener = {
                handler: function (msg, eventInfo, type, requestId) {
                    if (eventInfo.init === "false") {
                        _this.answerToolStatus = eventInfo.reason;
                    }
                    else {
                        _this.answerToolStatus = _defs_ANSWER_STATUS__WEBPACK_IMPORTED_MODULE_21__["ANSWER_STATUS"].READY;
                        _this.detachMessageObserver(callback);
                        _this.loadStudentsInfor([], 0); // 重发
                        resolve();
                    }
                    console.log(eventInfo);
                },
            };
            option.addListener(_defs_AnswerTooldefs__WEBPACK_IMPORTED_MODULE_20__["AnswerToolMessage"].PX_MSG_ANSWER_INIT, listener);
            _this.detachMessageObserver(callback);
            _this.attachMessageObserver(callback);
            _this.initAnswerTool(_this.answerType, _this.evaluate, option);
        });
    };
    /**
     *
     * @param answerType
     * @param evaluate
     */
    ExtendedBridge.prototype.initAnswerTool = function (answerType, evaluate, option) {
        var service = this.getService(_services_AnswerToolService__WEBPACK_IMPORTED_MODULE_3__["AnswerToolService"]);
        return service.px_cmd_answer_init({
            command: "init",
            preferred_device_type: answerType,
            eval_type: evaluate,
        }, option);
    };
    /**
     * loadStudentList  答题器加载学生名单
     * @param studentsInfo 数组，每个对象为学生信息，必须包含stuId，name，score属性
     * @param addType	设置学生方式，0多个学生同时设置，1设置单个学生
     *
     * 产生消息:
     *
     * CLIENT_MESSAGE.ANSWER_TOOL_BIND_STATE // 答题器绑定消息
     * {
     *   cmd: CLIENT_MESSAGE.ANSWER_TOOL_BIND_STATE,
     *   deviceId: eventInfo.device_id,
     *   studentId: eventInfo.user_id,
     *   action: 1, // 0:放回答题器基座 1:绑定学生
     * }
     */
    ExtendedBridge.prototype.loadStudentsInfor = function (studentsInfo, addType) {
        console.warn("添加绑定信息", studentsInfo);
        this.answerToolBinding.pushNewRequest(studentsInfo);
        if (this.answerToolBinding.bufferredRequest.length === 0) {
            return Promise.resolve("没有学生信息");
        }
        // todo: 打印日志
        var service = this.getService(_services_AnswerToolService__WEBPACK_IMPORTED_MODULE_3__["AnswerToolService"]);
        return service.px_cmd_answer_add_user({ users: this.answerToolBinding.bufferredRequest });
    };
    /**
     * 开启答题器
     * @param type 答题类型，5表示按ABCD选项 4表示按中间圆钮  1表示对错题 4表示抢红包 5表示单选题 8点赞 9抢积分
     */
    ExtendedBridge.prototype.startAnswerDevice = function (type, answerCallback) {
        var _this = this;
        if (this.pairCallerRequestIds.answerRequestId !== undefined) {
            throw new Error("还未调用 stopAnswerDevice方法!");
        }
        var atype = "abcd_click_once"; // 只会收到abcd答案一次
        switch (type) {
            case 1:
                atype = "tf_click"; // 只会收到答题器对错按钮消息（在不停止答题时会多次收到） TODO
                break;
            case 4:
                atype = "g_click_once"; // 只会收到答题器中间圆按钮消息（在不停止答题时只会收到一次）
                break;
            case 5:
                atype = "abcd_click"; // 只会收到答题器ABCD按钮消息（在不停止答题时会多次收到）
                break;
            case 8:
                atype = "g_click"; // 只会收到答题器中间圆按钮消息（在不停止答题时会多次收到）TODO
                break;
            case 9:
                atype = "g_click_once"; // 只会收到答题器中间圆按钮消息（在不停止答题时只会收到一次) TODO
                break;
            default:
                break;
        }
        var service = this.getService(_services_AnswerToolService__WEBPACK_IMPORTED_MODULE_3__["AnswerToolService"]);
        var keydownCallback = {
            handler: function (msg, eventInfo, msgType, requestId) {
                answerCallback(eventInfo.user_id, eventInfo.key);
                if (type === 1) { // 对错题
                    _this.emitServiceMessage({ cmd: "stuTrueFalse", stuid: eventInfo.user_id, answer: eventInfo.key });
                }
                if (type === 4 || type === 8 || type === 9) {
                    _this.emitServiceMessage({ cmd: "onGClicked", stuid: eventInfo.user_id, answer: eventInfo.key });
                }
                if (type === 5) {
                    _this.emitServiceMessage({ cmd: "stuChangeChoice", stuid: eventInfo.user_id, answer: eventInfo.key });
                }
            },
        };
        var options = service.makeExecuteOption(null, null, function (uuid) { _this.pairCallerRequestIds.answerRequestId = uuid; });
        options.addListener(_defs_AnswerTooldefs__WEBPACK_IMPORTED_MODULE_20__["AnswerToolMessage"].PX_MSG_ANSWER_KEYPRESS, keydownCallback);
        return service.px_cmd_answer_start_que({
            user_id: "0",
            type: atype,
        }, options);
    };
    /**
     * 关闭答题器
     * @param type 答题类型， 4按中间圆按钮，5 ABCD按钮，11（评测题），12（语音广播）, 13 分组评测， 14指定学生收音
     */
    ExtendedBridge.prototype.stopAnswerDevice = function (type, userid) {
        var service = this.getService(_services_AnswerToolService__WEBPACK_IMPORTED_MODULE_3__["AnswerToolService"]);
        if (type === 1 || type === 4 || type === 5 || type === 8 || type === 9) {
            if (this.pairCallerRequestIds.answerRequestId === undefined) {
                console.warn("还未调用 startAnswerDevice方法!");
            }
            else {
                service.clearListeners(this.pairCallerRequestIds.answerRequestId);
                delete this.pairCallerRequestIds.answerRequestId;
            }
        }
        if (type === 11 || type === 12 || type === 13) {
            if (this.pairCallerRequestIds.answerVoiceRequestId === undefined) {
                console.warn("还未调用startAnswerDeviceVoice方法!");
            }
            else {
                service.clearListeners(this.pairCallerRequestIds.answerRequestId);
                delete this.pairCallerRequestIds.answerVoiceRequestId;
            }
        }
        return service.px_cmd_answer_stop_que({ user_id: userid });
    };
    /**
     * 开启答题器-语音
     * @param type 答题类型，11：评测题 12指定学生收音 13:分组评测
     * @param solution 评测题需提供该字段
     * @param content  评测题需提供该字段，其他为空；评测音频文本，采用数组的方式输入
     * @param stuid 语音广播需提供该字段，其他为空，学生id
     * @param stuCount 评测题需提供该字段，其他填空；学生出勤人数
     */
    ExtendedBridge.prototype.startAnswerDeviceVoice = function (type, evalCallback, content, stuid) {
        var _this = this;
        if (this.pairCallerRequestIds.answerVoiceRequestId !== undefined) {
            console.warn("还未调用 stopAnswerDevice方法!");
        }
        var atype = "audio";
        var stems = [];
        var multiRelation = {};
        // let multi_relation: { [prop: string]: number[] } = {};
        switch (type) {
            case 11:
                atype = "audio";
                stems = content;
                if (!stuid) {
                    stuid = "0";
                }
                break;
            case 12:
                atype = "not_out";
                if (stuid === "0") {
                    throw new Error("广播 学生id不可以为 0");
                }
                break;
            case 13:
                atype = "multiaudio";
                content.forEach(function (item) {
                    multiRelation[item.word] = item.ids;
                });
                stems = multiRelation;
                if (!stuid) {
                    stuid = "0";
                }
                break;
        }
        var evalListener = {
            handler: function (msg, eventInfo, msgType, requestId) {
                evalCallback(eventInfo);
                if (type === 11 || type === 13) {
                    _this.emitServiceMessage({
                        cmd: "voiceEvalResultTotal",
                        stuid: eventInfo.user_id,
                        stuId: eventInfo.user_id,
                        score: eventInfo.eval_infor.overAll,
                        allover: eventInfo.eval_infor.overAll,
                        word: eventInfo.eval_infor.wordScore,
                    });
                }
            },
        };
        var service = this.getService(_services_AnswerToolService__WEBPACK_IMPORTED_MODULE_3__["AnswerToolService"]);
        var options = service.makeExecuteOption(null, null, function (uuid) {
            _this.pairCallerRequestIds.answerVoiceRequestId = uuid;
        });
        options.addListener(_defs_AnswerTooldefs__WEBPACK_IMPORTED_MODULE_20__["AnswerToolMessage"].PX_MSG_ANSWER_EVALINFOR, evalListener);
        return service.px_cmd_answer_start_que({
            user_id: stuid,
            type: atype,
            stems: stems,
            multi_relation: multiRelation,
        }, options);
    };
    /**
     * 自定义答题器积分显示文案
     * @param stuIds 学生id数组
     * @param msgInfor2 答题器第二行显示文案
     * @param msgInfor3 答题器第三行显示文案
     */
    ExtendedBridge.prototype.setAnswerDeviceInfor = function (stuId, msgInfor2, msgInfor3) {
        if (stuId === void 0) { stuId = "0"; }
        if (msgInfor2 === void 0) { msgInfor2 = ""; }
        if (msgInfor3 === void 0) { msgInfor3 = ""; }
        // this.log("答题器显示", msgInfor2, msgInfor3);
        var service = this.getService(_services_AnswerToolService__WEBPACK_IMPORTED_MODULE_3__["AnswerToolService"]);
        var stuID = stuId;
        return new Promise(function (resolve, reject) {
            service.px_cmd_answer_set_txt({
                user_id: stuID,
                row2: msgInfor2,
                row3: msgInfor3,
            }).then(function (res) {
                resolve(res);
            }).catch(function (e) {
                reject(e);
            });
        });
    };
    /**
     * 清空答题器显示文案
     * @param type 1: 表示清空第一行，2： 表示清空第二行，4： 表示清空第三行, 1|2|4: 清除所有行
     * @param cb 回调函数
     */
    ExtendedBridge.prototype.clearAnswerInfor = function (type, stuid) {
        if (stuid === void 0) { stuid = "0"; }
        var service = this.getService(_services_AnswerToolService__WEBPACK_IMPORTED_MODULE_3__["AnswerToolService"]);
        var param = { user_id: stuid };
        if ((type & 1) === 1) {
            param.row1 = " ";
        }
        if ((type & 2) === 2) {
            param.row2 = " ";
        }
        if ((type & 4) === 4) {
            param.row3 = " ";
        }
        return service.px_cmd_answer_set_txt(param);
    };
    /**
     * @param stuIds 数组
     * @param type 0 => 灯；1 => 震动
     * @param isAll 0 => 全部；1 => 部分
     */
    ExtendedBridge.prototype.answerSayHi = function (stuId, type) {
        var service = this.getService(_services_AnswerToolService__WEBPACK_IMPORTED_MODULE_3__["AnswerToolService"]);
        var atype = "motor";
        if (type === 0) {
            atype = "led";
        }
        var param = {
            user_id: stuId,
            type: atype,
        };
        return service.px_cmd_answer_sayhi(param);
    };
    /**
     * 解绑答题器
     * @param type 0 解绑单个， 1 解绑所有
     * @param studentId 学生id
     */
    ExtendedBridge.prototype.unBindStudent = function (type, studentId) {
        var _this = this;
        var service = this.getService(_services_AnswerToolService__WEBPACK_IMPORTED_MODULE_3__["AnswerToolService"]);
        var param = {
            user_id: "0",
        };
        if (type === 0) {
            param.user_id = studentId;
            return service.px_cmd_answer_remove(param);
        }
        else {
            var arrs_1 = [];
            var ids_1 = [];
            this.answerToolBinding.bindedStudents.forEach(function (bind) {
                ids_1.push(bind.user_id);
            });
            ids_1.forEach(function (id) {
                arrs_1.push(service.px_cmd_answer_remove({ user_id: id }).then(function () {
                    _this.answerToolBinding.removeBindInfo(id);
                }));
            });
            return Promise.all(arrs_1);
        }
    };
    /**
     * 设置答题器音频存储路径
     * @param path 音频路径
     */
    ExtendedBridge.prototype.setAnswerAudioPath = function (path) {
        var service = this.getService(_services_AnswerToolService__WEBPACK_IMPORTED_MODULE_3__["AnswerToolService"]);
        var param = { path: path };
        return this.createDir(path).then(function () {
            return service.px_cmd_answer_set_audio_path(param);
        });
    };
    /**
     * 获取web_config.ini的配置
     * @param key 要获取的key
     * @param group 要获取key的group
     * @param cb 获取后的回调
     */
    ExtendedBridge.prototype.getSettings = function (key, group) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.settingBuffer === null) {
                _this.settingBuffer = new _helper_BufferedQuery__WEBPACK_IMPORTED_MODULE_9__["BufferedQuery"](function () {
                    return _this.readXml("./web_config.ini").then(function (data) {
                        var settings = _helper_RegExpHelper__WEBPACK_IMPORTED_MODULE_19__["RegExpHelper"].parseINIString(data);
                        return Promise.resolve(settings);
                    });
                });
            }
            _this.settingBuffer.doQuery(function () {
                var settings = _this.settingBuffer.getTarget();
                if (settings[group] && settings[group][key]) {
                    resolve(settings[group][key]);
                }
                else {
                    reject(new Error("setting[" + group + "][" + key + "]\u4E0D\u5B58\u5728"));
                }
            });
        });
    };
    /**
     * 获取页面路径
     */
    ExtendedBridge.prototype.getWebPath = function () {
        var location = window.location;
        if (location.protocol !== "file:") {
            return Promise.reject(new Error("路径不是file协议"));
        }
        else {
            var pathname = location.pathname;
            return Promise.resolve(_helper_RegExpHelper__WEBPACK_IMPORTED_MODULE_19__["RegExpHelper"].getFullPathDir(pathname));
        }
    };
    /**
     * 解压ZIP文件
     * @param zipFilePath ZIP文件本地地址
     * @param destPath 解压后的存储地址
     */
    ExtendedBridge.prototype.unZip = function (zipFilePath, destPath) {
        var service = this.getService(_services_LocalFileService__WEBPACK_IMPORTED_MODULE_4__["LocalFileService"]);
        var options = service.makeExecuteOption(null, null, null, 0);
        return this.createDir(destPath).then(function () {
            return service.px_cmd_localfile_unzip({
                zip_path: zipFilePath,
                dst_path: destPath,
                type: 2,
            }, options);
        });
    };
    /**
     * 新建目录
     * @param dirPath 目录路径
     */
    ExtendedBridge.prototype.createDir = function (dirPath) {
        var service = this.getService(_services_LocalFileService__WEBPACK_IMPORTED_MODULE_4__["LocalFileService"]);
        return service.px_cmd_localfile_mkdir(dirPath);
    };
    /**
     * 获取指定目录信息
     * @param dirPath dirPath
     * @param calcSize 是否获取当前目录的大小
     * @param recursive 是否遍历子目录
     * @returns Promise参数 { entryList: string[], totalSize: number}
     */
    ExtendedBridge.prototype.getDirInfo = function (dirPath, calcSize, recursive) {
        if (calcSize === void 0) { calcSize = false; }
        if (recursive === void 0) { recursive = false; }
        var service = this.getService(_services_LocalFileService__WEBPACK_IMPORTED_MODULE_4__["LocalFileService"]);
        return service.px_inf_localfile_filelist({
            dir: dirPath,
            dir_size: calcSize,
            sub_files: recursive,
        }).then(function (res) {
            return Promise.resolve({
                entryList: res.files,
                totalSize: res.dir_size,
            });
        }).catch(function (reason) {
            if (reason.result.rsp_error === _defs_LocalFiledefs__WEBPACK_IMPORTED_MODULE_23__["LocalFileError"].PX_ERR_LOCALFILE_DIR_NOT_FOUND) {
                reason.bubble = false;
                return Promise.resolve({
                    count: 0,
                    entryList: [],
                    exists: false,
                    totalSize: 0,
                });
            }
            else {
                return Promise.reject(reason);
            }
        });
    };
    /**
     * 拷贝目录
     * @param dirPath dirPath
     */
    ExtendedBridge.prototype.copyDir = function (srcDir, destDir) {
        var service = this.getService(_services_LocalFileService__WEBPACK_IMPORTED_MODULE_4__["LocalFileService"]);
        return this.createDir(destDir).then(function () {
            return service.px_cmd_localfile_cpdir({
                src: srcDir,
                dst: destDir,
                cover: true,
            });
        });
    };
    /**
     * 创建xml文件
     * @param type 0 覆盖 1追加
     * @param fileName 文件名称,需带后缀
     * @param content 文件内容
     * @param path 文件路径
     * @param cb 回调函数
     */
    ExtendedBridge.prototype.createXml = function (type, fileName, content, path) {
        console.log("createXml", type, fileName, content, path);
        var mode = _defs_LocalFileOpenMode__WEBPACK_IMPORTED_MODULE_6__["LocalFileOpenMode"].PX_LOCALFILE_OPEN_FILE_MODE_APPEND;
        if (type === 0) {
            mode = _defs_LocalFileOpenMode__WEBPACK_IMPORTED_MODULE_6__["LocalFileOpenMode"].PX_LOCALFILE_OPEN_FILE_MODE_WRITE_ONLY;
        }
        var absolutePath = path + "/" + fileName;
        var file2 = null;
        return this.fileManager.open(absolutePath, mode).then(function (file) {
            file2 = file;
        }).then(function () {
            return file2.write(content);
        }).then(function () {
            return file2.close();
        });
    };
    ExtendedBridge.prototype.readXml = function (filePath) {
        console.log("readXml", filePath);
        var mode = _defs_LocalFileOpenMode__WEBPACK_IMPORTED_MODULE_6__["LocalFileOpenMode"].PX_LOCALFILE_OPEN_FILE_MODE_READ_ONLY;
        var text = "";
        var file = null;
        return this.fileManager.open(filePath, mode).then(function (file2) {
            file = file2;
        }).then(function () {
            return file.read();
        }).then(function (content) {
            text = content;
            console.log(filePath, "读取内容: ", text);
        }).then(function () {
            file.close();
            return Promise.resolve(text);
        }).catch(function (err) {
            return Promise.reject(err);
        });
    };
    /**
     * 将json对象保存成文件
     * @param filePath
     * @param jsonData
     * @param cb 回调 返回参数 {suss: boolean, reason?: any} 若成功则suss为true 失败则suss为false, reason
     */
    ExtendedBridge.prototype.saveJsonData = function (filePath, jsonData) {
        var _this = this;
        return new Promise(function (resolve) {
            var str = JSON.stringify(jsonData, null, 2);
            var mode = _defs_LocalFileOpenMode__WEBPACK_IMPORTED_MODULE_6__["LocalFileOpenMode"].PX_LOCALFILE_OPEN_FILE_MODE_WRITE_ONLY;
            var absolutePath = filePath;
            var file2 = null;
            _this.fileManager.open(absolutePath, mode).then(function (file) {
                file2 = file;
            }).catch(function (file) {
                if (file.error.result.rsp_error === _defs_LocalFiledefs__WEBPACK_IMPORTED_MODULE_23__["LocalFileError"].PX_ERR_LOCALFILE_OPENED) {
                    return Promise.resolve();
                }
            }).then(function () {
                return file2.write(str);
            }).then(function () {
                return file2.close();
            }).then(function () {
                resolve({ suss: true });
            }).catch(function (reason) {
                resolve({ suss: false, reason: reason });
            });
        });
    };
    /**
     * 删除文件
     * @param filepath 文件路径
     */
    ExtendedBridge.prototype.deleteFile = function (filepath) {
        var service = this.getService(_services_LocalFileService__WEBPACK_IMPORTED_MODULE_4__["LocalFileService"]);
        return service.px_cmd_localfile_delfile(filepath);
    };
    /**
     * 删除目录
     * @param directory 文件路径
     */
    ExtendedBridge.prototype.deleteDirectory = function (directory) {
        var service = this.getService(_services_LocalFileService__WEBPACK_IMPORTED_MODULE_4__["LocalFileService"]);
        return service.px_cmd_localfile_rmdir(directory);
    };
    /**
     * 重命名文件列表
     * @param files 文件列表[{dst: '', src: ''}, ...]
     * @return 重命结果 [{dst: '', src: '', result: true|false}, ...]
     */
    ExtendedBridge.prototype.renameFiles = function (files) {
        var service = this.getService(_services_LocalFileService__WEBPACK_IMPORTED_MODULE_4__["LocalFileService"]);
        var result = [];
        var arrPromise = [];
        files.forEach(function (file) {
            arrPromise.push(service.px_cmd_localfile_rename({ file_name: file.src, new_name: file.dst }).then(function () {
                result.push({ dst: file.dst, src: file.src, result: true });
                return Promise.resolve();
            }).catch(function () {
                result.push({ dst: file.dst, src: file.src, result: false });
                return Promise.resolve();
            }));
        });
        return Promise.all(arrPromise).then(function () {
            return Promise.resolve({ list: result });
        });
    };
    /**
     *
     * @param filemap
     */
    ExtendedBridge.prototype.checkFile = function (filemap) {
        var service = this.getService(_services_LocalFileService__WEBPACK_IMPORTED_MODULE_4__["LocalFileService"]);
        var promiseArray = [];
        var result = {};
        var _loop_1 = function (key) {
            if (true) {
                promiseArray.push(service.px_inf_localfile_fileinfo(filemap[key]).then(function () {
                    result[key] = true;
                }).catch(function (reason) {
                    result[key] = false;
                    return Promise.resolve(key);
                }));
            }
        };
        for (var key in filemap) {
            _loop_1(key);
        }
        return Promise.all(promiseArray).then(function () {
            return Promise.resolve(result);
        });
    };
    /**
     * 获取当前程序运行所在目录
     */
    ExtendedBridge.prototype.getAppPath = function () {
        var service = this.getService(_services_LocalFileService__WEBPACK_IMPORTED_MODULE_4__["LocalFileService"]);
        return service.px_inf_localfile_currentpath().then(function (path) {
            return Promise.resolve(path);
        });
    };
    /**
     * 判断文件是否存在
     * @param path 文件路径
     */
    ExtendedBridge.prototype.fileExist = function (path) {
        var service = this.getService(_services_LocalFileService__WEBPACK_IMPORTED_MODULE_4__["LocalFileService"]);
        var options = service.makeExecuteOption();
        options.onError = function (e) {
            e.bubble = false;
        };
        return service.px_inf_localfile_fileinfo(path, options).then(function (data) {
            return Promise.resolve(true);
        }).catch(function (reason) {
            return Promise.resolve(false);
        });
    };
    /**
     * 初始化OSS配置
     */
    ExtendedBridge.prototype.initOSS = function () {
        throw this.notImplemented();
    };
    /**
     * 上传Base64 支持jpg png gif
     * @param base64Content "data:image/jpeg;base64,/9j/4AAQSkZJRgAB..."
     * @param dstName 上传到oss的文件名 "1.jpg"
     */
    ExtendedBridge.prototype.uploadBase64Png = function (base64Content, dstName) {
        var service = this.getService(_services_LocalFileService__WEBPACK_IMPORTED_MODULE_4__["LocalFileService"]);
        return new Promise(function (resolve, reject) {
            var options = service.makeExecuteOption();
            service.px_cmd_localfile_uploadossbase64({
                content: base64Content,
                dst_name: dstName,
            }, options).then(function (res) {
                resolve({ code: 1, name: dstName, url: res.result.rsp_data });
            }).catch(function (reason) {
                reject(reason);
            });
        });
    };
    /**
     * 下载文件
     * @param url url地址
     * @param savePath 保存的地址
     * @param progressCallback 下载进度回调
     * {
     *     url,
     *     save_path: savePath,
     *     md5,
     *     progress: eventInfo.bytes_received / eventInfo.bytes_total, // todo 除零问题
     *     downloadRequestId,
     * }
     * @param cover 是否覆盖
     * @param md5 md校验 不设置就不进行校验
     * @param speed KB/s 设置0或者不设置表示不限速
     * @param isContinue 是否断点续传 默认否
     */
    ExtendedBridge.prototype.downloadFile = function (url, savePath, progressCallback, cover, md5, speed, isContinue) {
        if (cover === void 0) { cover = true; }
        var downloadRequestId = "";
        var service = this.getService(_services_LocalFileService__WEBPACK_IMPORTED_MODULE_4__["LocalFileService"]);
        var options = service.makeExecuteOption(null, null, function (uuid) { downloadRequestId = uuid; }, 0);
        options.addListener(_defs_LocalFiledefs__WEBPACK_IMPORTED_MODULE_23__["LocalFileMessage"].PX_MSG_LOCALFILE_DOWNLOAD_PROGRESS, {
            handler: function (msg, eventInfo, type, requestId) {
                console.log(eventInfo);
                progressCallback({
                    url: url,
                    save_path: savePath,
                    md5: md5,
                    progress: eventInfo.bytes_received / eventInfo.bytes_total,
                    downloadRequestId: downloadRequestId,
                });
            },
        });
        return service.px_cmd_localfile_download({
            url: url,
            save_path: savePath,
            cover: cover,
            md5: md5,
            speed: speed,
            isContinue: isContinue,
        }, options).catch(function (reason) {
            var result = reason.result;
            return Promise.reject(result);
        });
    };
    /**
     * 取消下载任务
     * @param downloadRequestId
     */
    ExtendedBridge.prototype.cancelDownload = function (downloadRequestId) {
        var service = this.getService(_services_LocalFileService__WEBPACK_IMPORTED_MODULE_4__["LocalFileService"]);
        return service.px_cmd_localfile_cancel_download({ cancel_id: downloadRequestId });
    };
    /**
     * 检查目标路径targetPath中是否存在与fileList中同名的文件
     * @param fileList 文件列表
     * @param targetPath 目标路径
     * @param callback 回调 返回 同名文件列表 (res: {exist: string[]}) => void
     */
    ExtendedBridge.prototype.searchExistFiles = function (fileList, targetPath) {
        var _this = this;
        return new Promise(function (resolve) {
            var exist = [];
            var filenameList = [];
            fileList.forEach(function (file) {
                filenameList.push(_helper_file_Path__WEBPACK_IMPORTED_MODULE_27__["Path"].getFileName(file));
            });
            var promiseArray = [];
            filenameList.forEach(function (filename) {
                promiseArray.push(new Promise(function (resolve2) {
                    var filePath = targetPath + "/" + filename;
                    _this.fileExist(filePath).then(function (fileExist) {
                        if (fileExist) {
                            exist.push(filename);
                        }
                        resolve2();
                    });
                }));
            });
            Promise.all(promiseArray).then(function () {
                resolve({ exist: exist });
            });
        });
    };
    /**
     * 导入文件
     * @param from 源文件
     * @param to 目标文件
     * @param type 0 取消 1 覆盖 2 跳过
     * @param callback 返回 {path: string, code?: any, reason?: any}
     */
    ExtendedBridge.prototype.importFileEx = function (from, to, type) {
        var _this = this;
        return new Promise(function (resolve) {
            var service = _this.getService(_services_LocalFileService__WEBPACK_IMPORTED_MODULE_4__["LocalFileService"]);
            if (type === 0) {
                resolve({ code: -2, path: from });
                return;
            }
            if (from === to) {
                console.error("\u5BFC\u5165\u65F6\u6E90\u8DEF\u5F84\u4E0E\u76EE\u6807\u8DEF\u5F84\u76F8\u540C:" + from);
                resolve({ path: from, reason: "\u5BFC\u5165\u65F6\u6E90\u8DEF\u5F84\u4E0E\u76EE\u6807\u8DEF\u5F84\u76F8\u540C:" + from });
                return;
            }
            service.px_cmd_localfile_cpfile({ src: from, dst: to, cover: type === 1 ? true : false }).then(function () {
                resolve({ path: to });
            }).catch(function (reason) {
                resolve({ path: from, code: -1, reason: reason });
            });
        });
    };
    /**
     * 导入文件
     * @param from 源文件列表
     * @param targetPath 目标目录 绝对路径
     * @param type 0 取消 1 覆盖 2 跳过
     * @param callback 回调参数
     *                   {
     *                     successList: string[], //导入成功的文件列表
     *                     failList: string[] //导入失败的文件列表
     *                   }
     *
     */
    ExtendedBridge.prototype.importFileMulti = function (from, targetPath, type) {
        var _this = this;
        return new Promise(function (resolve) {
            while (targetPath.endsWith("/") || targetPath.endsWith("\\")) {
                targetPath = targetPath.substr(0, targetPath.length - 1);
            }
            console.log("导入文件", from, targetPath);
            var targetFiles = [];
            from.forEach(function (file) {
                targetFiles.push(targetPath + "/" + _helper_file_Path__WEBPACK_IMPORTED_MODULE_27__["Path"].getFileName(file));
            });
            var promiseArray = [];
            var results = [];
            var failures = [];
            var length = targetFiles.length;
            for (var i = 0; i < length; ++i) {
                promiseArray.push(_this.importFileEx(from[i], targetFiles[i], type).then(function (e) {
                    if (e.code < 0) {
                        failures.push(e.path);
                    }
                    else {
                        results.push(e.path);
                    }
                }));
            }
            Promise.all(promiseArray).then(function () {
                resolve({ successList: results, failList: failures });
            });
        });
    };
    ExtendedBridge.prototype.resetAllServices = function () {
        var _this = this;
        return this.stop().then(function () {
            return _this.start();
        });
    };
    /**
     * 选择文件以准备拷贝到targetPath中
     * @param targetPath 目标路径 绝对路径
     * @param type 文件类型
     * @param multiSelect 是否多选
     * @param callback 成功回调参数
     *           {
     *             exist: string[], //重名文件列表
     *             notexist: string[] //不重名文件列表
     *           }
     *        失败回调参数
     *           {
     *             code: number,
     *             reason: string
     *           }
     */
    ExtendedBridge.prototype.selectFilesForImport = function (targetPath, type, multiSelect) {
        var _this = this;
        return new Promise(function (resolve) {
            while (targetPath.endsWith("/") || targetPath.endsWith("\\")) {
                targetPath = targetPath.substr(0, targetPath.length - 1);
            }
            _this.createDir(targetPath).then(function () {
                return _this.openFileDialog(type, multiSelect).then(function (args) {
                    var filelist = args.pathList;
                    if (filelist.length <= 0) {
                        console.log("未选中文件");
                        var output = {
                            exist: [],
                            notexist: [],
                        };
                        resolve(output);
                        return;
                    }
                    var srcPath = filelist[0].substr(0, filelist[0].lastIndexOf("/"));
                    console.log("源目录", srcPath);
                    console.log("选中文件", filelist);
                    _this.searchExistFiles(filelist, targetPath).then(function (existFiles) {
                        var existFullPaths = [];
                        var output = {
                            exist: null,
                            notexist: null,
                        };
                        existFiles.exist.forEach(function (existFileName) {
                            existFullPaths.push(srcPath + "/" + existFileName);
                        });
                        var notDuplicatedFiles = _this.exclude(filelist, existFullPaths);
                        console.log("不重复的文件", notDuplicatedFiles);
                        output.exist = existFiles.exist;
                        output.notexist = notDuplicatedFiles;
                        resolve(output);
                    });
                });
            }).catch(function (reason) {
                resolve({ code: -1, reason: reason });
            });
        });
    };
    /**
     * 返回 from-to的数组
     * @param from
     * @param to 是from数组的子集
     */
    ExtendedBridge.prototype.exclude = function (from, to) {
        var notDuplicatedItems = [];
        from.forEach(function (item) {
            if (to.indexOf(item) < 0) {
                notDuplicatedItems.push(item);
            }
        });
        return notDuplicatedItems;
    };
    /**
     * 打开选择文件对话框
     * @param filter
     * @param multiSelect 是否多选
     * @param callback 回调 返回选中文件列表 (res: {pathList: string[]}) => void
     */
    ExtendedBridge.prototype.openFileDialog = function (filter, multiSelect) {
        var _this = this;
        return new Promise(function (resolve) {
            var filters = _this.fileFilter[filter];
            var service = _this.getService(_services_LocalFileService__WEBPACK_IMPORTED_MODULE_4__["LocalFileService"]);
            service.px_cmd_localfile_open_filedlg({
                filter: filters,
                multiSelect: multiSelect,
            }).then(function (e) {
                var res = { pathList: e.result.rsp_data.file_name };
                resolve(res);
            });
        });
    };
    /**
     * 打开本地文件夹，获取目录
     * @param type 0 任意路径 1 桌面 2 历史路径
     * @param path
     * @param callback
     */
    ExtendedBridge.prototype.openFileDir = function (type, path) {
        var _this = this;
        return new Promise(function (resolve) {
            var service = _this.getService(_services_LocalFileService__WEBPACK_IMPORTED_MODULE_4__["LocalFileService"]);
            service.px_cmd_localfile_open_dir().then(function (e) {
                var res = { path: e.result.rsp_data };
                resolve(res);
            });
        });
    };
    /**
     * 拷贝文件
     * @param targetPath
     * @param filePath
     * @param callback
     */
    ExtendedBridge.prototype.copyFile = function (targetPath, filePath) {
        var _this = this;
        return new Promise(function (resolve) {
            var service = _this.getService(_services_LocalFileService__WEBPACK_IMPORTED_MODULE_4__["LocalFileService"]);
            service.px_cmd_localfile_cpfile({ src: filePath, dst: targetPath, cover: true }).then(function (e) {
                resolve(e);
            }).catch(function (error) {
                resolve(error);
            });
        });
    };
    /**
     * 重命名目录
     * @param srcPath
     * @param destPath
     * @param callback
     */
    ExtendedBridge.prototype.renameDir = function (srcPath, destPath) {
        var _this = this;
        return new Promise(function (resolve) {
            var service = _this.getService(_services_LocalFileService__WEBPACK_IMPORTED_MODULE_4__["LocalFileService"]);
            service.px_cmd_localfile_rename_dir({ old_name: srcPath, new_name: destPath, cover: true }).then(function (e) {
                resolve(e);
            });
        });
    };
    ExtendedBridge.prototype.uploadContentToOSS = function (content, callback) {
        throw this.notImplemented();
    };
    /**
     * 上传文件到oss
     * @param filePaths 文件路径
     * @param progressCallback 上传进度回调
     *     {
     *          status: "uploading",
     *          progress: number, //单个文件的进度
     *          filePath: string, //当前上传的文件
     *          upLoadRequestId: string, //上传任务的uuid
     *     }
     */
    ExtendedBridge.prototype.uploadFileToOSS = function (filePaths, progressCallback) {
        var upLoadRequestId = "";
        var urls = [];
        var files = [];
        var service = this.getService(_services_LocalFileService__WEBPACK_IMPORTED_MODULE_4__["LocalFileService"]);
        var options = service.makeExecuteOption(null, null, function (requestId) { upLoadRequestId = requestId; }, 0);
        var fileFinishListener = {
            handler: function (msg, eventInfo, type, requestId) {
                urls.push(eventInfo.url);
                files.push(eventInfo.file_name);
            },
        };
        var progressListener = {
            handler: function (msg, eventInfo, type, requestId) {
                progressCallback({
                    status: "uploading",
                    progress: eventInfo.transfered / eventInfo.total,
                    filePath: eventInfo.current_file,
                    upLoadRequestId: upLoadRequestId,
                });
            },
        };
        options.addListener(_defs_LocalFiledefs__WEBPACK_IMPORTED_MODULE_23__["LocalFileMessage"].PX_MSG_LOCALFILE_OSS, fileFinishListener);
        options.addListener(_defs_LocalFiledefs__WEBPACK_IMPORTED_MODULE_23__["LocalFileMessage"].PX_MSG_LOCALFILE_OSS_PROGRESS, progressListener);
        return service.px_cmd_localfile_uploadoss({ file_paths: filePaths }, options).then(function (res) {
            var code = 0;
            if (res.result.failed_files) {
                code = -1;
            }
            return Promise.resolve({
                code: code,
                filePath: files,
                url: urls,
                status: "finish",
                progress: 1,
                failedFiles: res.result.failed_files ? res.result.failed_files : [],
            });
        }).catch(function (reason) {
            var result = reason.result;
            return Promise.reject(result);
        });
    };
    /**
     * 上传目录到oss
     * @param dirPath 目录路径
     * @param callback 回调
     */
    ExtendedBridge.prototype.uploadDirToOSS = function (dirPath, callback) {
        var _this = this;
        console.warn(dirPath);
        return this.getDirInfo(dirPath, false, true).then(function (data) {
            var list = data.entryList;
            console.warn(list);
            return _this.uploadFileToOSS(list, callback);
        });
    };
    /**
     *
     * 取消还未执行的OSS上传操作
     * @param uploadRequestId 正在进行的上传任务id
     * @description 调用该方法时，已经开始上传的文件不会停止上传，但还没开始上传的文件不会上传
     */
    ExtendedBridge.prototype.cancelUploadOSS = function (uploadRequestId) {
        var _this = this;
        return new Promise(function (resolve) {
            var service = _this.getService(_services_LocalFileService__WEBPACK_IMPORTED_MODULE_4__["LocalFileService"]);
            service.px_cmd_localfile_cancel_uploadoss({ cancel_id: uploadRequestId }).then(function (e) {
                resolve(e);
            }).catch(function (reason) {
                resolve(reason);
            });
        });
    };
    /**
     * 上传课件组
     * @param path 课件组目录
     * @param callback 回调
     */
    ExtendedBridge.prototype.uploadCoursewareGroup = function (path, callback) {
        return this.uploadDirToOSS(path, callback);
    };
    /**
     * 取消课件组上传
     * @param uploadRequestId
     */
    ExtendedBridge.prototype.cancelUpLoadCoursewareGroup = function (uploadRequestId) {
        return this.cancelUploadOSS(uploadRequestId);
    };
    /**
     * 删除目录
     * @param dir 要删除的目录
     */
    ExtendedBridge.prototype.rmDir = function (dir) {
        var _this = this;
        return new Promise(function (resolve) {
            var service = _this.getService(_services_LocalFileService__WEBPACK_IMPORTED_MODULE_4__["LocalFileService"]);
            service.px_cmd_localfile_rmdir(dir).then(function (e) {
                resolve(e);
            }).catch(function (reason) {
                resolve(reason);
            });
        });
    };
    /////////////////////// LocalFileService ///////////////////
    /////////////////////// PxVideoProcessor ///////////////////
    /**
     * 读取视频信息
     * @param filePath 文件路径
     * @param scale 缩略图缩放倍数
     * @param type 0:获取应用执行路径 1:获取传入绝对路径
     * @param callback 回调 成功返回:
     *                 {
     *                   cmd: "readVideoInfo",
     *                   fileName: string,
     *                   fileSize: number,
     *                   createTime: string,
     *                   duration: number,
     *                   thumbnailImg: string,
     *                   h: number,
     *                   w: number
     *                 }
     *                     失败返回:
     *                 {
     *                 code: number
     *                 }
     */
    ExtendedBridge.prototype.readVideoInfo = function (filePath, scale, type) {
        var _this = this;
        if (scale === void 0) { scale = 8; }
        return new Promise(function (resolve) {
            var service = _this.getService(_services_PXVideoProcessorService__WEBPACK_IMPORTED_MODULE_14__["PXVideoProcessorService"]);
            var res = {};
            _this.getAppPath().then(function (appPath) {
                if (!appPath.endsWith("/") && !appPath.endsWith("\\")) {
                    appPath += "/";
                }
                if (type === 0) {
                    filePath = appPath + filePath;
                }
                service.px_cmd_videoprocessor_video_infor({ path: filePath, resize: scale }).then(function (e) {
                    var data = e.result.rsp_data.data;
                    res.cmd = "readVideoInfo";
                    res.fileName = filePath;
                    res.fileSize = data.file_size;
                    res.createTime = data.create_time;
                    res.duration = data.duration;
                    res.thumbnailImg = data.thumbnail;
                    res.h = data.height;
                    res.w = data.width;
                    resolve(res);
                }).catch(function (reason) {
                    if (reason && reason.result) {
                        resolve({ code: reason.result.rsp_error });
                    }
                    else {
                        resolve({ code: -1, reason: reason });
                    }
                });
            });
        });
    };
    /**
     * 视频平滑
     * @param slices preVideo 第一个视频的地址  nextVideo 第二个视频的地址 flag 0:将生成的帧插入到第一个视频的后面; 1:将生成的帧插入到第二个视频的前面
     * @param type 0：获取应用执行路径；1：获取传入绝对路径
     * @param cb 回调
     */
    ExtendedBridge.prototype.sliceSmoothing = function (slices, type) {
        var _this = this;
        return new Promise(function (resolve) {
            var details = [];
            _this.getVideoPath().then(function (path) {
                slices.forEach(function (slice) {
                    var prev = slice.preVideo;
                    var next = slice.nextVideo;
                    var add2prev = slice.flag === 0 ? true : false;
                    if (type === 0) {
                        prev = path + "/" + prev;
                        next = path + "/" + next;
                    }
                    details.push({
                        previous: prev,
                        behind: next,
                        add2previous: add2prev,
                    });
                });
                var service = _this.getService(_services_PXVideoProcessorService__WEBPACK_IMPORTED_MODULE_14__["PXVideoProcessorService"]);
                service.px_cmd_videoprocessor_smooth({
                    video_detail: details,
                }).then(function (e) {
                    resolve(e);
                });
            });
        });
    };
    /**
     *
     * @param callback 回调 返回程序所在目录
     */
    ExtendedBridge.prototype.getVideoPath = function () {
        var service = this.getService(_services_LocalFileService__WEBPACK_IMPORTED_MODULE_4__["LocalFileService"]);
        return service.px_inf_localfile_currentpath();
    };
    /**
     * 视频多点裁剪
     * @param inputVideoPath 待切割视频的绝对路径
     * @param splitPoints 切割处的时间点数组，以秒为单位
     * @param outputPaths 切割后输出的视频、音频的绝对路径对象数组 Array<{ video: string, audio?: string, extract?: boolean }>
     * @param callback 回调
     * @description extract为true时，表示分离音轨，此时需要提供audio的路径
     * @example bridge.cutVideoByPoints("d:/temp/6.mp4", [2], [{video: "d:/work/6_0.mp4", audio: "d:/work/6_0.mp3", extract: true},{video: "d:/work/6_1.mp4", audio: "d:/work/6_1.mp3"}], (res) =>{ console.log(res);});
     */
    ExtendedBridge.prototype.cutVideoByPoints = function (inputVideoPath, splitPoints, outputPaths) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var service = _this.getService(_services_PXVideoProcessorService__WEBPACK_IMPORTED_MODULE_14__["PXVideoProcessorService"]);
            var cutFileInfos = [];
            outputPaths.forEach(function (inf) {
                var cutFileInf = { video_path: inf.video };
                if (inf.extract) {
                    cutFileInf.detach = inf.extract;
                    if (cutFileInf.detach) {
                        if (inf.audio) {
                            cutFileInf.audio_path = inf.audio;
                        }
                    }
                }
                cutFileInfos.push(cutFileInf);
            });
            service.px_cmd_videoprocessor_cutadvance({
                src_path: inputVideoPath,
                time_point: splitPoints,
                cut_file_info: cutFileInfos,
            }).then(function (e) {
                resolve({
                    code: 1,
                    data: e.result.rsp_data,
                });
            }).catch(function (reason) {
                reject({
                    code: -1,
                    reason: reason,
                });
            });
        });
    };
    /**
     * 剪开视频
     * @param {String} inputVideoPath - 待切割视频的绝对路径
     * @param {String} outputVideoPath1 - 切割后第一个视频的绝对路径
     * @param {String} outputVideoPath2 - 切割后第二个视频的绝对路径
     * @param {Number} splitPoint - 切割时间点，以秒为单位
     * @param {boolean} cover - 是否覆盖存在的文件
     * @param {Function} cb - 回调
     */
    ExtendedBridge.prototype.cutVideo = function (inputVideoPath, outputVideoPath1, outputVideoPath2, splitPoint, cover) {
        var _this = this;
        return new Promise(function (resolve) {
            var service = _this.getService(_services_PXVideoProcessorService__WEBPACK_IMPORTED_MODULE_14__["PXVideoProcessorService"]);
            service.px_cmd_videoprocessor_cut({
                file_path: inputVideoPath,
                out_path_a: outputVideoPath1,
                out_path_b: outputVideoPath2,
                time_point: splitPoint,
                cover: cover,
            }).then(function (e) {
                resolve({
                    code: 1,
                });
            }).catch(function (reason) {
                resolve({
                    code: -1,
                    reason: reason,
                });
            });
        });
    };
    /**
     * 添加帧
     * @param videoPath 视频路径
     * @param callback 回调 成功 {code:0}  失败: {code: -1, reason: any}
     */
    ExtendedBridge.prototype.addFrame = function (videoPath) {
        var _this = this;
        return new Promise(function (resolve) {
            var service = _this.getService(_services_PXVideoProcessorService__WEBPACK_IMPORTED_MODULE_14__["PXVideoProcessorService"]);
            service.px_cmd_videoprocessor_addframe({
                src_path: videoPath,
                dst_path: videoPath,
            }).then(function (e) {
                resolve({
                    code: 1,
                });
            }).catch(function (reason) {
                resolve({
                    code: -1,
                    reason: reason,
                });
            });
        });
    };
    /////////////////////// PxVideoProcessor ///////////////////
    /////////////////////// VideoCapture ///////////////////
    /**
     * 获取采集设备列表
     * @returns Promise<{ audios: string[], cameras: string[] }> | Promise<any>
     * @description
     *     若成功,则返回 Promise<{ audios: string[], cameras: string[] }>
     *     若失败,则返回 Promise<{ code: -1, reason }>
     */
    ExtendedBridge.prototype.getCaptureDeviceList = function () {
        var service = this.getService(_services_VideoCaptureService__WEBPACK_IMPORTED_MODULE_15__["VideoCaptureService"]);
        return service.px_inf_videocapture_device().then(function (data) {
            return Promise.resolve(data);
        }).catch(function (reason) {
            return Promise.reject({ code: -1, reason: reason });
        });
    };
    /**
     * 开始采集相机视频
     * @param videoPath 指定录制保存的视频文件路径
     * @description
     *   在进行视频采集之前需要先调用 startCaptureDevice 来启动采集设备
     */
    ExtendedBridge.prototype.startCameraRecord = function (videoPath) {
        var _this = this;
        var service = this.getService(_services_VideoCaptureService__WEBPACK_IMPORTED_MODULE_15__["VideoCaptureService"]);
        var dirPath = _helper_file_Path__WEBPACK_IMPORTED_MODULE_27__["Path"].getDirPath(videoPath);
        if (this.isRecordingScreen === true) {
            return Promise.reject({ code: -2, reason: "已经开始录制了,请勿重复调用!" });
        }
        return this.createDir(dirPath).then(function () {
            return service.px_cmd_videocapture_startrecord(videoPath);
        }).then(function (e) {
            _this.isRecordingScreen = true;
            return Promise.resolve(e);
        }).catch(function (reason) {
            return Promise.reject({ code: -1, reason: reason });
        });
    };
    /**
     * 停止相机采集
     */
    ExtendedBridge.prototype.stopCameraRecord = function (filename) {
        var _this = this;
        var service = this.getService(_services_VideoCaptureService__WEBPACK_IMPORTED_MODULE_15__["VideoCaptureService"]);
        if (this.isRecordingScreen === false) {
            return Promise.reject({ code: -3, reason: "还未开始录制!" });
        }
        return service.px_cmd_videocapture_stoprecord(filename).then(function (e) {
            _this.isRecordingScreen = false;
            return Promise.resolve(e);
        });
    };
    /**
     * 启动采集设备
     * @param videoInput 视频输入设备
     * @param audioInput 音频输入设备
     * @description
     *   在进行视频采集之前需要先调用 startCaptureDevice 来启动采集设备
     */
    ExtendedBridge.prototype.startCaptureDevice = function (videoInput, audioInput) {
        var service = this.getService(_services_VideoCaptureService__WEBPACK_IMPORTED_MODULE_15__["VideoCaptureService"]);
        return service.px_cmd_videocapture_startcapture({
            video_device_name: videoInput,
            audio_device_name: audioInput,
        }).catch(function (e) {
            if (e.result.rsp_error === _defs_VideoCapturedefs__WEBPACK_IMPORTED_MODULE_28__["VideoCaptureError"].PX_ERR_VIDEOCAPTURE_DEVICERUNING) {
                return Promise.resolve(e);
            }
            return Promise.reject(e);
        });
    };
    /**
     * 停止采集设备
     */
    ExtendedBridge.prototype.stopCaptureDevice = function () {
        var service = this.getService(_services_VideoCaptureService__WEBPACK_IMPORTED_MODULE_15__["VideoCaptureService"]);
        return service.px_cmd_videocapture_stopcapture();
    };
    /**
     * 开始截屏
     */
    ExtendedBridge.prototype.startScreenCapture = function () {
        throw this.notImplemented();
    };
    /**
     * 停止截屏并返回结果
     */
    ExtendedBridge.prototype.stopScreenCapture = function () {
        throw this.notImplemented();
    };
    /////////////////////// VideoCapture ///////////////////
    /**
     * 设置全屏窗口
     * @param full true 全屏 false 非全屏
     */
    ExtendedBridge.prototype.setFullScreen = function (full) {
        if (full === void 0) { full = true; }
        var serviceManager = this.getService(_services_ServiceManager__WEBPACK_IMPORTED_MODULE_1__["ServiceManager"]);
        var param = 1;
        if (full === true) {
            param = 1;
        }
        else if (full === false) {
            param = 2;
        }
        return serviceManager.px_cmd_servicemanager_show_full_screen(param);
    };
    /**
     * 最大化窗口
     */
    ExtendedBridge.prototype.maximizeWindow = function () {
        var serviceManager = this.getService(_services_ServiceManager__WEBPACK_IMPORTED_MODULE_1__["ServiceManager"]);
        return serviceManager.px_cmd_servicemanager_show_full_screen(2);
    };
    /**
     * 最小化窗口
     */
    ExtendedBridge.prototype.minimizeWindow = function () {
        var serviceManager = this.getService(_services_ServiceManager__WEBPACK_IMPORTED_MODULE_1__["ServiceManager"]);
        return serviceManager.px_cmd_servicemanager_show_full_screen(3);
    };
    /**
     * 获取当前显示层列表
     */
    ExtendedBridge.prototype.getLayers = function () {
        var serviceManager = this.getService(_services_ServiceManager__WEBPACK_IMPORTED_MODULE_1__["ServiceManager"]);
        return serviceManager.px_inf_servicemanager_layers_list().then(function (layers) {
            return Promise.resolve(layers);
        });
    };
    /**
     * 将名称为name的显示层移至顶层 MainPage永远是最靠前的一层
     * @param name
     */
    ExtendedBridge.prototype.bringLayertoTop = function (name) {
        console.warn("\u5C06" + name + "\u7684\u663E\u793A\u5C42\u79FB\u81F3\u9876\u5C42");
        return this.setLayerIndex(name, 0);
    };
    /**
     * 将名称为name的显示层移至底层 MainPage永远是最靠前的一层
     * @param name
     */
    ExtendedBridge.prototype.takeLayerToBack = function (name) {
        var _this = this;
        console.warn("\u5C06" + name + "\u7684\u663E\u793A\u5C42\u79FB\u81F3\u5E95\u5C42");
        return this.getLayers().then(function (list) {
            return _this.setLayerIndex(name, list.length);
        });
    };
    /**
     * 设置名称为name的显示层的层数
     * @param name
     * @param index 0为最顶层,1在0之后,以此类推
     */
    ExtendedBridge.prototype.setLayerIndex = function (name, index) {
        console.warn("设置layerIndex");
        var serviceManager = this.getService(_services_ServiceManager__WEBPACK_IMPORTED_MODULE_1__["ServiceManager"]);
        return this.getLayers().then(function (list) {
            var oldIndex = list.indexOf(name);
            if (oldIndex >= 0) {
                list.splice(oldIndex, 1); // 删除原有的name
                list.splice(index, 0, name); // 插入到指定位置
                return serviceManager.px_cmd_servicemanager_reorder_layers(list);
            }
        });
    };
    /**
     * 关闭显示层
     * @param name
     */
    ExtendedBridge.prototype.closeLayer = function (name) {
        var _this = this;
        return this.getLayers().then(function (layers) {
            if (layers.indexOf(name) >= 0) {
                return _this.updateLayerRect(0, 0, _this.designWidth, _this.designHeight, _this.clientWidth + 1, 0, 1, 1, name);
            }
        });
    };
    /**
     * 显示摄像头层
     */
    ExtendedBridge.prototype.showStudentScreen = function () {
        var _this = this;
        console.warn("显示摄像头");
        return this.setLayerIndex("Camera", 1).then(function () {
            return _this.updateStudentImage(0, 0, _this.designWidth, _this.designHeight, 0, 0, _this.clientWidth, _this.clientHeight);
        });
    };
    /**
     * 将摄像头层后移
     */
    ExtendedBridge.prototype.closeStudentScreen = function () {
        var _this = this;
        return this.takeLayerToBack("Camera").then(function () {
            return _this.updateStudentImage(0, 0, _this.designWidth, _this.designHeight, _this.clientWidth + 1, 0, _this.clientWidth, _this.clientHeight);
        });
    };
    /**
     * 设置窗体是否可见
     * @param widgetID 窗体ID
     * @param isVisible 是否可见， 默认true
     */
    ExtendedBridge.prototype.setVisibleScreen = function (widgetID, isVisible) {
        if (isVisible === void 0) { isVisible = true; }
        throw new Error("setVisibleScreen 未实现");
    };
    /**
     * 设置player状态
     * @param widgetID 窗体ID
     * @param status 播放或暂停
     */
    ExtendedBridge.prototype.setPlayerStatus = function (widgetID, status) {
        if (status === void 0) { status = _defs_PLAYER_STATUS__WEBPACK_IMPORTED_MODULE_13__["PLAYER_STATUS"].STOP; }
        throw new Error("setPlayerStatus 未实现");
    };
    /**
     * 下课，隐藏 视频显示窗口 ，否则不显示登录页面
     */
    ExtendedBridge.prototype.setVideoScreenVisible = function () {
        throw new Error("setVideoScreenVisible 未实现");
    };
    // >>>>>>>>>>>>>>>>>>>> SystemService >>>>>>>>>>>>>>>>>>>>
    /**
     * 获取注册表中的值
     * @param key
     */
    ExtendedBridge.prototype.getRegistry = function (key, cb) {
        var res = {};
        res[key] = "asdfasdf-asdfa-asdfasdf-asd";
        cb(res);
    };
    /**
     * 获取系统的uuid
     */
    ExtendedBridge.prototype.getUUID = function () {
        var service = this.getService(_services_SystemService__WEBPACK_IMPORTED_MODULE_8__["SystemService"]);
        return service.px_inf_sys_os().then(function (data) {
            return Promise.resolve(data.uuid);
        });
    };
    /**
     * 获取音频设备列表
     * @returns Promise<{microphone: boolean}>
     */
    ExtendedBridge.prototype.checkMicroPhone = function () {
        var _this = this;
        var service = this.getService(_services_SystemService__WEBPACK_IMPORTED_MODULE_8__["SystemService"]);
        return service.px_inf_sys_audiodevice().then(function (res) {
            _this.audioDeviceManager.setInputList(res.audio_input);
            return Promise.resolve({ microphone: res.audio_input });
        });
    };
    /**
     * 答题器设备
     */
    ExtendedBridge.prototype.getAnwserConnectStatus = function () {
        var _this = this;
        return new Promise(function (resolve) {
            resolve(Object(_defs_ANSWER_STATUS__WEBPACK_IMPORTED_MODULE_21__["getAnswerStatusCode"])(_this.answerToolStatus));
        });
    };
    /**
     * 获取视频设备列表
     * @returns Promise<{ devices: Array<{ id: string, name: string }> }>
     */
    ExtendedBridge.prototype.checkCamera = function () {
        var service = this.getService(_services_CameraService__WEBPACK_IMPORTED_MODULE_0__["CameraService"]);
        return service.px_inf_camera_list().then(function (data) {
            var devices = { devices: [] };
            var index = 0;
            data.forEach(function (cam) {
                devices.devices.push({ id: "" + index++, name: cam });
            });
            return Promise.resolve(devices);
        });
    };
    /**
     * 获取扬声器
     * @returns Promise<{speaker: boolean}>
     */
    ExtendedBridge.prototype.checkSpeaker = function () {
        var _this = this;
        var service = this.getService(_services_SystemService__WEBPACK_IMPORTED_MODULE_8__["SystemService"]);
        return service.px_inf_sys_audiodevice().then(function (res) {
            _this.audioDeviceManager.setOutputList(res.audio_output);
            return Promise.resolve({ speaker: res.audio_output });
        });
    };
    /**
     * 获取内存信息
     * @returns Promise<{TotalVirtual: number, TotalPhys: number}>
     */
    ExtendedBridge.prototype.getMemoryStatus = function () {
        var service = this.getService(_services_SystemService__WEBPACK_IMPORTED_MODULE_8__["SystemService"]);
        return service.px_inf_sys_memory().then(function (res) {
            return Promise.resolve({ TotalVirtual: res.totalPageFile, TotalPhys: res.totalPhys });
        });
    };
    /**
     * 调节扬声器的音量
     * @param volume 音量大小 //0.0-1.0, 浮点型的音量0.0是静音1.0是最大.
     */
    ExtendedBridge.prototype.setSysSpeakerVolume = function (volume) {
        throw this.notImplemented();
    };
    /**
     * 调节收音音量
     * @param volume 音量大小 //0.0-1.0, 浮点型的音量0.0是静音1.0是最大.
     */
    ExtendedBridge.prototype.setMicVolume = function (volume) {
        var service = this.getService(_services_SystemService__WEBPACK_IMPORTED_MODULE_8__["SystemService"]);
        // 保证 volume的大小在0-1之间
        volume = Math.max(0, volume);
        volume = Math.min(1, volume);
        return service.px_cmd_sys_change_volume(volume);
    };
    /**
     * 设置audio
     * @param id 窗口widget id
     * @param deviceId 音频设备id
     */
    ExtendedBridge.prototype.setAudioDevice = function (id, deviceId) {
        throw this.notImplemented();
    };
    /**
     * 设置video
     * @param id 窗口widget id
     * @param deviceId 视频设备名称
     */
    ExtendedBridge.prototype.setVideoDevice = function (id, deviceId) {
        throw new Error("未实现");
    };
    /**
     * 设置video
     * @param id 窗口widget id
     * @param deviceName 视频设备name
     */
    ExtendedBridge.prototype.setVideoDeviceName = function (id, deviceName) {
        throw new Error("未实现");
    };
    /**
     * 重新打开麦克风设备，在有麦克风插拔之后需要处理
     */
    ExtendedBridge.prototype.reopenMicrophone = function () {
        var service = this.getService(_services_SystemService__WEBPACK_IMPORTED_MODULE_8__["SystemService"]);
        return service.px_cmd_sys_reopen_audioinput();
    };
    /**
     * 开始接收麦克风音量
     * 产生消息
     * {
     *     cmd: CLIENT_MESSAGE.VOLUME_EVENT, // 音量大小
     *     volume: number,
     * }
     */
    ExtendedBridge.prototype.startReceiveVolume = function () {
        var service = this.getService(_services_SystemService__WEBPACK_IMPORTED_MODULE_8__["SystemService"]);
        var options = service.makeExecuteOption();
        options.addListener(_defs_Systemdefs__WEBPACK_IMPORTED_MODULE_29__["SystemMessage"].PX_MSG_SYS_AUDIOLEVEL, {
            handler: function (msg, eventInfo, type, requestId) {
                console.log(eventInfo);
            },
        });
        return service.px_cmd_sys_receive_current_volume(null, options);
    };
    /**
     * 停止接收接收音量大小
     */
    ExtendedBridge.prototype.stopReceiveVolume = function () {
        var service = this.getService(_services_SystemService__WEBPACK_IMPORTED_MODULE_8__["SystemService"]);
        return service.px_cmd_sys_stop_recevive_current_volume();
    };
    /**
     * 增加ping的监听host, 默认初始值为断网状态，如果有网络会发送连接上的消息
     * @param host
     * 示例: addHostPing("www.baidu.com")
     */
    ExtendedBridge.prototype.addHostPing = function (host) {
        var service = this.getService(_services_SystemService__WEBPACK_IMPORTED_MODULE_8__["SystemService"]);
        return service.px_cmd_sys_ping_add_host(host);
    };
    /**
     * 删除ping的监听host
     * @param host
     * 示例 removeHostPing("www.baidu.com")
     */
    ExtendedBridge.prototype.removeHostPing = function (host) {
        var service = this.getService(_services_SystemService__WEBPACK_IMPORTED_MODULE_8__["SystemService"]);
        return service.px_cmd_sys_ping_remove_host(host);
    };
    /**
     * 设置ping的间隔
     * 每个host会占用2s的时间进行ping操作,该操作是对于所有的host是串行的, host的数量会影响ping的间隔.
     * 也就是如果有10个host需要ping, 间隔为1s的话对于每个host的ping间隔实际上是20s.
     * 因为ping需要占用网络资源, 理论上不会有太多host和太多的ping操作，故没有做成并行ping。
     * @param seconds 间隔时间 单位s
     */
    ExtendedBridge.prototype.setPingInterval = function (seconds) {
        var service = this.getService(_services_SystemService__WEBPACK_IMPORTED_MODULE_8__["SystemService"]);
        return service.px_cmd_sys_ping_set_interval(seconds);
    };
    // <<<<<<<<<<<<<<<<<<<<< SystemService <<<<<<<<<<<<<<<<<<<<<
    /**
     * 关闭程序
     */
    ExtendedBridge.prototype.closeApplication = function () {
        var service = this.getService(_services_ServiceManager__WEBPACK_IMPORTED_MODULE_1__["ServiceManager"]);
        service.px_cmd_servicemanager_close_window();
    };
    /**
     * 部署工具
     * @param cmd 命令
     * save_result: 保存数据
     * sound_init: 开始检测收放音
     * sound_uninit: 停止检测收放音
     * cpu_type: CPU =========================
     * screen_info: 显示设备
     * logicdisk_info: 磁盘信息=================
     * videocard_type: 显卡====================
     * os_name: 操作系统========================
     * mem_info: 内存==========================
     * camera_info: 摄像头=====================
     * getSystemVolume: 放音设置值
     * getMicrophoneVolume: 收音设置值
     * answerer_connect: 答题器连接情况==========
     *
     * @param param 参数
     */
    ExtendedBridge.prototype.deployTool = function (cmd, param) {
        throw new Error("未实现");
    };
    ExtendedBridge.prototype.getCPUType = function () {
        var service = this.getService(_services_SystemService__WEBPACK_IMPORTED_MODULE_8__["SystemService"]);
        return service.px_inf_sys_cpu().then(function (res) {
            return Promise.resolve(res);
        });
    };
    ExtendedBridge.prototype.getGPUType = function () {
        var service = this.getService(_services_SystemService__WEBPACK_IMPORTED_MODULE_8__["SystemService"]);
        return service.px_inf_sys_gpu().then(function (res) {
            return Promise.resolve(res);
        });
    };
    ExtendedBridge.prototype.getOSName = function () {
        var service = this.getService(_services_SystemService__WEBPACK_IMPORTED_MODULE_8__["SystemService"]);
        return service.px_inf_sys_os().then(function (res) {
            return Promise.resolve(res);
        });
    };
    ExtendedBridge.prototype.getDiskInfo = function () {
        var service = this.getService(_services_SystemService__WEBPACK_IMPORTED_MODULE_8__["SystemService"]);
        return service.px_inf_sys_disk().then(function (res) {
            return Promise.resolve(res);
        });
    };
    ExtendedBridge.prototype.getAudioDeviceInfo = function () {
        var service = this.getService(_services_SystemService__WEBPACK_IMPORTED_MODULE_8__["SystemService"]);
        return service.px_inf_sys_audiodevice().then(function (res) {
            return Promise.resolve(res);
        });
    };
    ExtendedBridge.prototype.startAnswerToolService = function () {
        var answerToolService = this.getService(_services_AnswerToolService__WEBPACK_IMPORTED_MODULE_3__["AnswerToolService"]);
        var param = {
            "command": "init",
            "preferred-device-type": "PX",
            "eval-type": 9,
        };
        return new Promise(function (resolve) {
            var options = answerToolService.makeExecuteOption();
            options.addOnceListener(_defs_AnswerTooldefs__WEBPACK_IMPORTED_MODULE_20__["AnswerToolMessage"].PX_MSG_ANSWER_INIT, { handler: resolve });
            answerToolService.px_cmd_answer_init(param, options);
        });
    };
    /**
     * 更新学生头像
     * @param u
     * @param v
     * @param uvWidth
     * @param uvHeight
     * @param x
     * @param y
     * @param width
     * @param height
     */
    ExtendedBridge.prototype.updateStudentImage = function (u, v, uvWidth, uvHeight, x, y, width, height) {
        if (u < 0) {
            u = 0;
        }
        if (v < 0) {
            v = 0;
        }
        if (u + uvWidth > this.designWidth) {
            u = this.designWidth - uvWidth;
        }
        if (v + uvHeight > this.designHeight) {
            v = this.designHeight - uvHeight;
        }
        return this.updateLayerRect(u, v, uvWidth, uvHeight, x, y, width, height, "Camera");
    };
    /**
     * 更新视频位置
     * @param x
     * @param y
     * @param width
     * @param height
     */
    ExtendedBridge.prototype.updateVideoRect = function (x, y, width, height) {
        if (typeof height !== "number") {
            height = width * this.clientHeight / this.clientWidth;
        }
        return this.updateLayerRect(0, 0, this.designWidth, this.designHeight, x, y, width, height, "Player");
    };
    /**
     * 更新采集视频位置
     * @param x
     * @param y
     * @param width
     * @param height
     */
    ExtendedBridge.prototype.updateVideoCaptureRect = function (x, y, width, height) {
        if (typeof height !== "number") {
            height = width * this.designHeight / this.designWidth;
        }
        return this.updateLayerRect(0, 0, this.designWidth, this.designHeight, x, y, width, height, "videocapture");
    };
    /**
     * 更新Layer的Rect
     * @param u 纹理横坐标
     * @param v 纹理纵坐标
     * @param uvWidth 纹理宽
     * @param uvHeight 纹理高
     * @param x 显示横坐标
     * @param y 显示纵坐标
     * @param width 显示宽
     * @param height 显示高
     * @param layer layer名称 Camera Player MainPage videocapture...
     */
    ExtendedBridge.prototype.updateLayerRect = function (u, v, uvWidth, uvHeight, x, y, width, height, layer) {
        var verticesData = this.makeVerticesDataFromScreenRect(u, v, uvWidth, uvHeight, x, y, width, height, layer);
        return this.updateVertices(verticesData);
    };
    /**
     * 更新顶点属性数据
     * @param vertices
     */
    ExtendedBridge.prototype.updateVertices = function (vertices) {
        var serviceManager = this.getService(_services_ServiceManager__WEBPACK_IMPORTED_MODULE_1__["ServiceManager"]);
        if (serviceManager.openStatus !== _defs_SERVICE_OPEN_STATUS__WEBPACK_IMPORTED_MODULE_24__["SERVICE_OPEN_STATUS"].OPENED) {
            return;
        }
        _helper_log_Log__WEBPACK_IMPORTED_MODULE_7__["Log"].log(vertices);
        return serviceManager.px_cmd_servicemanager_change_show(vertices);
    };
    /**
     *
     * @param u 纹理横坐标 范围[0-1920]
     * @param v 纹理纵坐标 范围[0-1080]
     * @param uvWidth 纹理宽
     * @param uvHeight 纹理高
     * @param x 顶点横坐标 范围[0-1920]
     * @param y 顶点纵坐标 范围[0-1080]
     * @param width 顶点宽
     * @param height 顶点高
     */
    ExtendedBridge.prototype.makeVerticesDataFromScreenRect = function (u, v, uvWidth, uvHeight, x, y, width, height, layer) {
        var screenWidth = this.clientWidth;
        var screenHeight = this.clientHeight;
        function mapToNormal(data) {
            return data * 2 - 1;
        }
        // 以左上角为原点计算纹理坐标
        var texLeft = u / this.designWidth;
        var texRight = (u + uvWidth) / this.designWidth;
        var texBottom = (v + uvHeight) / this.designHeight;
        var texTop = v / this.designHeight;
        // 以左下角为原点计算顶点位置
        var posLeft = x / screenWidth;
        var posRight = (x + width) / screenWidth;
        var posBottom = 1 - (y + height) / screenHeight;
        var posTop = 1 - y / screenHeight;
        var uvs = [
            {
                x: texLeft,
                y: texBottom,
            },
            {
                x: texRight,
                y: texBottom,
            },
            {
                x: texRight,
                y: texTop,
            },
            {
                x: texLeft,
                y: texTop,
            },
        ];
        var positions = [
            {
                x: mapToNormal(posLeft),
                y: mapToNormal(posBottom),
                z: 0,
            },
            {
                x: mapToNormal(posRight),
                y: mapToNormal(posBottom),
                z: 0,
            },
            {
                x: mapToNormal(posRight),
                y: mapToNormal(posTop),
                z: 0,
            },
            {
                x: mapToNormal(posLeft),
                y: mapToNormal(posTop),
                z: 0,
            },
        ];
        var vertices = {
            vertices: {
                // 以左下角为原点
                uvs: _helper_math_Vector2__WEBPACK_IMPORTED_MODULE_10__["Vector2"].toArray(uvs),
                positions: _helper_math_Vector3__WEBPACK_IMPORTED_MODULE_11__["Vector3"].toArray(positions),
                indices: [0, 2, 1, 0, 3, 2],
            },
            name: layer,
        };
        return vertices;
    };
    Object.defineProperty(ExtendedBridge.prototype, "clientWidth", {
        /**
         * 获取浏览器视图的宽
         */
        get: function () {
            return window.innerWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtendedBridge.prototype, "clientHeight", {
        /**
         * 获取浏览器视图的高
         */
        get: function () {
            return window.innerHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtendedBridge.prototype, "designWidth", {
        get: function () {
            return 1920;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtendedBridge.prototype, "designHeight", {
        get: function () {
            return 1080;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 更新MVP矩阵数据,只在3D渲染中使用
     * @param vpMatrix
     */
    ExtendedBridge.prototype.updateVPMatrix = function (vpMatrix) {
        var serviceManager = this.getService(_services_ServiceManager__WEBPACK_IMPORTED_MODULE_1__["ServiceManager"]);
        if (serviceManager.openStatus !== _defs_SERVICE_OPEN_STATUS__WEBPACK_IMPORTED_MODULE_24__["SERVICE_OPEN_STATUS"].OPENED) {
            return;
        }
        vpMatrix.name = "Camera";
        return serviceManager.px_cmd_servicemanager_mvp_matrix(vpMatrix);
    };
    ExtendedBridge.prototype.bindAnswerTool = function (args) {
        _helper_log_Log__WEBPACK_IMPORTED_MODULE_7__["Log"].warn("绑定答题器" + JSON.stringify(args));
        var answerToolService = this.getService(_services_AnswerToolService__WEBPACK_IMPORTED_MODULE_3__["AnswerToolService"]);
        return answerToolService.px_cmd_answer_add_user(args);
    };
    ExtendedBridge.prototype.startQuestion = function (args) {
        var answerToolService = this.getService(_services_AnswerToolService__WEBPACK_IMPORTED_MODULE_3__["AnswerToolService"]);
        return answerToolService.px_cmd_answer_start_que(args);
    };
    ExtendedBridge.prototype.stopQuestion = function (args) {
        var answerToolService = this.getService(_services_AnswerToolService__WEBPACK_IMPORTED_MODULE_3__["AnswerToolService"]);
        return answerToolService.px_cmd_answer_stop_que(args);
    };
    ExtendedBridge.prototype.notImplemented = function () {
        throw new Error("未实现");
    };
    return ExtendedBridge;
}(_frame_NativeBridge__WEBPACK_IMPORTED_MODULE_12__["NativeBridge"]));



/***/ }),

/***/ "./src/MessageConsumer.ts":
/*!********************************!*\
  !*** ./src/MessageConsumer.ts ***!
  \********************************/
/*! exports provided: MessageConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageConsumer", function() { return MessageConsumer; });
var MessageConsumer = /** @class */ (function () {
    function MessageConsumer() {
        this.messageMap = new Map();
    }
    MessageConsumer.prototype.execute = function (msg) {
        if (msg === "") {
            console.error("msg非法");
            return;
        }
        // console.warn(msg);
        var msgJsonObject = JSON.parse(msg);
        var cmd = msgJsonObject.cmd;
        var data = msgJsonObject.data;
        var callbacks = this.messageMap.get(cmd);
        if (callbacks === undefined) {
            console.warn("未注册指令 " + cmd);
            return;
        }
        for (var _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++) {
            var callback = callbacks_1[_i];
            callback(data);
        }
    };
    /**
     * 注册消息回调
     * @param cmd 消息名称
     * @param callback 回调
     */
    MessageConsumer.prototype.registerCallback = function (cmd, callback, context) {
        if (!this.messageMap.has(cmd)) {
            this.messageMap.set(cmd, []);
        }
        this.messageMap.get(cmd).push(callback.bind(context));
    };
    /**
     * 注销消息回调
     * @param cmd 消息名称
     * @param callback 回调
     */
    MessageConsumer.prototype.unregisterCallback = function (cmd, callback) {
        if (!this.messageMap.has(cmd)) {
            return;
        }
        var callbackList = this.messageMap.get(cmd);
        var index = callbackList.indexOf(callback);
        if (index >= 0) {
            callbackList.splice(index, 1);
        }
    };
    return MessageConsumer;
}());



/***/ }),

/***/ "./src/Mocker.ts":
/*!***********************!*\
  !*** ./src/Mocker.ts ***!
  \***********************/
/*! exports provided: Mocker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mocker", function() { return Mocker; });
/* harmony import */ var _services_AnswerToolService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/AnswerToolService */ "./src/services/AnswerToolService.ts");
/* harmony import */ var _services_UnityService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/UnityService */ "./src/services/UnityService.ts");


var Mocker = /** @class */ (function () {
    function Mocker(aibrowser, bridge) {
        this.ids = [
            "100",
            "101",
            "102",
            "103",
            "104",
            "105",
            "106",
            "107",
            "108",
            "109",
        ];
        this.names = [
            "赵小0",
            "赵小1",
            "赵小2",
            "赵小3",
            "赵小4",
            "赵小5",
            "赵小6",
            "赵小7",
            "赵小8",
            "赵小9",
        ];
        this.galleryResult = {
            galleries: [
                {
                    faceImg: "data:image/jpg;base64,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",
                    gid: "",
                    height: 111,
                    showImg: "data:image/jpg;base64,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",
                    stuID: "",
                    width: 87,
                    x: 588,
                    y: 602,
                },
                {
                    faceImg: "data:image/jpg;base64,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",
                    gid: "",
                    height: 88,
                    showImg: "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAZABkAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCACAAIADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDOxQRinYxTSKsgRhSEZGKk25pDtTljilcDLvJ47e+EiTRo7/62J+N/uD607+0kdiqQkkdCWGDVPVWs9QdYtgkZDnNVGtGRDsKxj0FS1cu5oy6jOAFjWAPnnOWqm41G53CSeRUPG0fKP0rEmEqMWy3HRias2WtzqQj/ADZ4yajlKuaFvpywzxOAdwbNJJEx1S4HqFP6VO2riMrvhwp/iBp1tJHcajI8bZDRg8dqNkK9xgtvWp0gAHSpynNKOlTcpEIhAOcVTjTOrX3vtJ/KtHqRiqSrjVLv3CnNO+gdTQ0axj1DXrO2mGYWbdIOnyjk1DOPMuJ2s1WKJ5G2DqEXPQVseESo8Rkv90W8h6dOKybPCmZiRtVzjJ6jmtKRlVNkqKTYSOKlIAzTSAuM9MZqxEUrLGhZuAK5zU7+S5OxCUTuRVnUr0TS+VGTtHWs2YDIHapKQyFhBHlAM0n2oljuprnC4qs4yaQy06pOhB796oGwaJi6nIB709XIbANacMRuE2460m7DSZXkAktAqMC3pWOk91p935sbFSOCM8EVtXOkTRAsjfUVlTowB3DNK6ZXKdTpeoxapCGHyyj76VfaMDiuDtLp7C7S4iPQ/MM9RXRS38uq7Gh3QxY+6rZJ+pqWgRpsYoiA0qgk9M1mXl0bK8lYReYXAwM9KYumEPvLDdnOSdxNT6si288V265gkQAsR91vemoiuS6Dqd0NQuXdQoNrKBtPT5anitDPEmZNgEeMDv71Z0CxSfUikbhzLBIqgdD8tc88rr8quQBwQDWsNDOep2+Oay9YvPs8AjU/O/b0FajsqKSewritQuzc6gzc4HAB9KLgkLGecnrUc0yhuvNMll8uP3NVA245PWpKLJbNROacOlCR72oASCLe4FbNsuxhgdKitYVjGT1q+hUemaym7mkSaVt0dc/fwhgcCugypHNZl6i8lamJZyTgq5Bre8NvGxMMg47VkX0e2TNSaTOYroDOM1sZM70W0YAIFZeuLeR2fm2xDqD80RXIb8K1reTzYEbjkZpZRuXaKSEYnhC7uofE+nTzWLQxB9hbOFw3HSn+KLL7B4gvokQ+UshcEdADz/WtZVKPG+RlXUjPTg1R8XX6y65qBO7kqgUAkt+VaIllzWLoQ2pAPzN2rjA2ZC9butzmRm7KBxXOu2F4qSugk8pJHPenwAs2e1VH5dR3NXoVCIOaAJsccAmgTMs6QpCxdu/QCtbTrLfH5jLktwoqaXSGW7B3bWKEg+lZuXQuMSpJZN5e4ycj0qFFeN8qxOKsTrdxqUWRW47iq8YlRkD5LsewpFE329XUYYfnVWd53YbD8tVL21SKJHHJaT7w9zV1XKfKUOB0xRYDLv45fJLOOnes6Fysit6HmtnV23ac7BSCCOtZEmDMpAxlBkYq0ZyO/wBHl32wHXHIrQYZ68VheHZcwhD1ArePPWgkYFXBBrD1V5IdYdgTmVVbP4VuED8qo63bGfTIb2L/AFluTE4/2Ccg/qauIpGd4gg+ySeWzqzFiBjpgVzkhrV1S4e6n3sc4PFZMpyxpFiKoyGPanRSl7hEPemE4jNLYgPqUC+p4pPYaPSNGtR5KMR0XgVeu7dZCjDgrnBp1hF5VuoI7Ypt1IFB5rlUtTZIyLqKFCSRg+oqLT7U6hOqQRsf4Wc9B+NRXTvK5ReTTvtmoWWnrDbjy9pyzAdaq4NdjS8VaFZR6WkULqJoxnj1rl4sui7htOOatz6oZ2XepLd2NJGiyZIGOelO4MqXtvHJZSB/u4yTXKmQPNuAwoPFdTrsotdKl5wWG0e9cfGcKM9cVrDYzmdhpbmFY5B9DXTIwbn1rlNGlW4swn8anBrobdzsXnpxTMS2cZzUUgbyZEX7rKQR6ipVbjpTXztIUA5pjOHnfJqg7ZJNW7nCggHms7cc0xkjnKYqNJGt7iGYdUcEU49KQ/dxQCPYra5S4sYpojlXUGobhNylj0ri/Cuv/ZlNjcOfKP3CexrtARLH1+UjtXJJcrN4O6MMXAhudqQPKe+0cCkvr6TYR5Wwd881qtCluTsGO+azLyQP8pXrVJlIxFdGbgg1oQgAfWovJjHKLzVLV9UTTrQqvM7jCgdvena+gpMxPEd99r1EW6H93D1+tZo5qIEklmOWPJNSKcV0JWRhJnQeHSPPdNxyRla6m1bemT1rjtFk8u4Vv9oCu2ihAOR0pElpB8mT0pcjGBTgoEfH5Uo6+5oEeaFmkHPWoliO/wDGtV4EdVnjXoMECqxQBsgdetMZSkG1sUw1PMMOOOTTGjwuaBjrckSA12OlahOqKC2VHY1xUZIdT7101hOqgZNZ1EVF2Op+1rKnIwe9UbhBI2d4/OqF5qMVvatIc8DisOzea4L3Ehbaeik1nCFzRysXtW1aDTozHEwluDwFHauQkkluJjPM5Zz69qGbzJ5WOCS5H0pDW6iomcpXDFOHAyelNGTUgPyFexpkl2ykK4I/vDmvQbU7oEb1HrXm8DtHIuBlT1r0HS5N9qncEAikI0lGaUnjmhVA6HJFGCTTEcdEn2dWSTjHBFU5VLSHaMj2q/fMJ7qQRnnfzTI/9HRkkxnNNlGSyF5QMYxTbkAIEUfMatzuhcsoqG2XdOZWGQOBSAryW7RCPj71W4be5wGTirMqK2xmA68CujsrdPJQsozVctxXOTe0urhl89sqp/1YrQ2lLR26bVPFb13YK0gmjAB24Yetc7rkv2aykToXO0Ci1h3ucqg4J/vEmloAwAKdSYCDrTwOaTFPUc0hEiD0613mgMWsoiRj92Aa4+xtfOmQH7oOTXc6dGsMbBeFPOKGBoKMnAPFLkDjNNUc5FL14oA//9k=",
                    stuID: "",
                    width: 73,
                    x: 1431,
                    y: 513,
                },
            ],
            image: "data:image/jpg;base64,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",
        };
        this.aibrowser = aibrowser;
        this.bridge = bridge;
    }
    Mocker.prototype.sendClassInfo = function () {
        var students = [];
        for (var i = 0; i < 10; ++i) {
            students.push({
                id: this.ids[i],
                name: this.names[i],
                gid: "",
            });
        }
        var unityService = this.bridge.getService(_services_UnityService__WEBPACK_IMPORTED_MODULE_1__["UnityService"]);
        unityService.transferToUnity("class_info", { students: students });
    };
    Mocker.prototype.getStudentsInfo = function () {
        var students = [];
        for (var i = 0; i < 10; ++i) {
            students.push({
                stuID: this.ids[i],
                stuName: this.names[i],
                gender: 0,
                MRID: -1,
            });
        }
        return students;
    };
    Mocker.prototype.bindAnswerTool = function () {
        var binds = [];
        for (var i = 0; i < 10; ++i) {
            binds.push({
                id: this.ids[i],
                row1: this.names[i],
                row2: this.names[i],
                row3: this.names[i],
            });
        }
        var data = {
            users: binds,
        };
        console.log(JSON.stringify(data));
        var answerToolService = this.bridge.getService(_services_AnswerToolService__WEBPACK_IMPORTED_MODULE_0__["AnswerToolService"]);
        answerToolService.px_cmd_answer_add_user(data);
    };
    return Mocker;
}());



/***/ }),

/***/ "./src/defs/AIdefs.ts":
/*!****************************!*\
  !*** ./src/defs/AIdefs.ts ***!
  \****************************/
/*! exports provided: AIError, AIExecuteCommand, AIInfoCommand, AIMessage, AIOther */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AIError", function() { return AIError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AIExecuteCommand", function() { return AIExecuteCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AIInfoCommand", function() { return AIInfoCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AIMessage", function() { return AIMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AIOther", function() { return AIOther; });
var PX_SERVICE_CLASS_AI = (1);
var AI_SERVICE_OFFSET = (PX_SERVICE_CLASS_AI * 1000);
var AIError;
(function (AIError) {
    AIError[AIError["PX_ERR_AI_"] = -(AI_SERVICE_OFFSET + 0)] = "PX_ERR_AI_";
    AIError[AIError["PX_ERR_AI_READER_ERROR"] = -(AI_SERVICE_OFFSET + 1)] = "PX_ERR_AI_READER_ERROR";
    AIError[AIError["PX_ERR_AI_STRATEGY_ERROR"] = -(AI_SERVICE_OFFSET + 2)] = "PX_ERR_AI_STRATEGY_ERROR";
    AIError[AIError["PX_ERR_AI_STUDENT_NOT_FOUND_ERROR"] = -(AI_SERVICE_OFFSET + 3)] = "PX_ERR_AI_STUDENT_NOT_FOUND_ERROR";
})(AIError || (AIError = {}));
var AIExecuteCommand;
(function (AIExecuteCommand) {
    AIExecuteCommand[AIExecuteCommand["PX_CMD_AI_RUN_AI_SERVICES"] = (AI_SERVICE_OFFSET + 1)] = "PX_CMD_AI_RUN_AI_SERVICES";
    AIExecuteCommand[AIExecuteCommand["PX_CMD_AI_RUN_AI_SERVICES_RESET"] = (AI_SERVICE_OFFSET + 2)] = "PX_CMD_AI_RUN_AI_SERVICES_RESET";
    AIExecuteCommand[AIExecuteCommand["PX_CMD_AI_CONFIG_DATA"] = (AI_SERVICE_OFFSET + 3)] = "PX_CMD_AI_CONFIG_DATA";
    AIExecuteCommand[AIExecuteCommand["PX_CMD_AI_SET_CLASS_STATE"] = (AI_SERVICE_OFFSET + 10)] = "PX_CMD_AI_SET_CLASS_STATE";
    AIExecuteCommand[AIExecuteCommand["PX_CMD_AI_SET_CLASS_INFO"] = (AI_SERVICE_OFFSET + 11)] = "PX_CMD_AI_SET_CLASS_INFO";
    AIExecuteCommand[AIExecuteCommand["PX_CMD_AI_EXTERNAL_GALLERY"] = (AI_SERVICE_OFFSET + 20)] = "PX_CMD_AI_EXTERNAL_GALLERY";
    AIExecuteCommand[AIExecuteCommand["PX_CMD_AI_FETCH_GALLERY"] = (AI_SERVICE_OFFSET + 21)] = "PX_CMD_AI_FETCH_GALLERY";
    AIExecuteCommand[AIExecuteCommand["PX_CMD_AI_REGIST_GALLERY"] = (AI_SERVICE_OFFSET + 22)] = "PX_CMD_AI_REGIST_GALLERY";
    AIExecuteCommand[AIExecuteCommand["PX_CMD_AI_UPDATE_GALLERY"] = (AI_SERVICE_OFFSET + 23)] = "PX_CMD_AI_UPDATE_GALLERY";
    AIExecuteCommand[AIExecuteCommand["PX_CMD_AI_UPDATE_STUID"] = (AI_SERVICE_OFFSET + 24)] = "PX_CMD_AI_UPDATE_STUID";
    AIExecuteCommand[AIExecuteCommand["PX_CMD_AI_DELETE_GALLERY"] = (AI_SERVICE_OFFSET + 25)] = "PX_CMD_AI_DELETE_GALLERY";
    AIExecuteCommand[AIExecuteCommand["PX_CMD_AI_DELETE_ALL_GALLERIES"] = (AI_SERVICE_OFFSET + 26)] = "PX_CMD_AI_DELETE_ALL_GALLERIES";
    AIExecuteCommand[AIExecuteCommand["PX_CMD_AI_START_HANDUP"] = (AI_SERVICE_OFFSET + 30)] = "PX_CMD_AI_START_HANDUP";
    AIExecuteCommand[AIExecuteCommand["PX_CMD_AI_STOP_HANDUP"] = (AI_SERVICE_OFFSET + 31)] = "PX_CMD_AI_STOP_HANDUP";
    AIExecuteCommand[AIExecuteCommand["PX_CMD_AI_START_CONCERNTRATION"] = (AI_SERVICE_OFFSET + 32)] = "PX_CMD_AI_START_CONCERNTRATION";
    AIExecuteCommand[AIExecuteCommand["PX_CMD_AI_STOP_CONCERNTRATION"] = (AI_SERVICE_OFFSET + 33)] = "PX_CMD_AI_STOP_CONCERNTRATION";
    AIExecuteCommand[AIExecuteCommand["PX_CMD_AI_START_TRACKING"] = (AI_SERVICE_OFFSET + 34)] = "PX_CMD_AI_START_TRACKING";
    AIExecuteCommand[AIExecuteCommand["PX_CMD_AI_STOP_TRACKING"] = (AI_SERVICE_OFFSET + 35)] = "PX_CMD_AI_STOP_TRACKING";
    AIExecuteCommand[AIExecuteCommand["PX_CMD_AI_START_FUNCTIONGAME"] = (AI_SERVICE_OFFSET + 36)] = "PX_CMD_AI_START_FUNCTIONGAME";
    AIExecuteCommand[AIExecuteCommand["PX_CMD_AI_STOP_FUNCTIONGAME"] = (AI_SERVICE_OFFSET + 37)] = "PX_CMD_AI_STOP_FUNCTIONGAME";
    AIExecuteCommand[AIExecuteCommand["PX_CMD_AI_START_ATTRIBUTE"] = (AI_SERVICE_OFFSET + 38)] = "PX_CMD_AI_START_ATTRIBUTE";
})(AIExecuteCommand || (AIExecuteCommand = {}));
var AIInfoCommand;
(function (AIInfoCommand) {
    AIInfoCommand[AIInfoCommand["PX_INF_AI_STATUS"] = (AI_SERVICE_OFFSET + 1)] = "PX_INF_AI_STATUS";
})(AIInfoCommand || (AIInfoCommand = {}));
var AIMessage;
(function (AIMessage) {
    AIMessage[AIMessage["PX_MSG_AI_LOADMODEL_FINISH"] = (AI_SERVICE_OFFSET + 1)] = "PX_MSG_AI_LOADMODEL_FINISH";
    AIMessage[AIMessage["PX_MSG_AI_GALLERY"] = (AI_SERVICE_OFFSET + 11)] = "PX_MSG_AI_GALLERY";
    AIMessage[AIMessage["PX_MSG_AI_CONCERNTRATION"] = (AI_SERVICE_OFFSET + 12)] = "PX_MSG_AI_CONCERNTRATION";
    AIMessage[AIMessage["PX_MSG_AI_HANDUP"] = (AI_SERVICE_OFFSET + 13)] = "PX_MSG_AI_HANDUP";
    AIMessage[AIMessage["PX_MSG_AI_TRACKING"] = (AI_SERVICE_OFFSET + 14)] = "PX_MSG_AI_TRACKING";
    AIMessage[AIMessage["PX_MSG_AI_FUNCTIONGAME_SHOWREGION"] = (AI_SERVICE_OFFSET + 15)] = "PX_MSG_AI_FUNCTIONGAME_SHOWREGION";
    AIMessage[AIMessage["PX_MSG_AI_FUNCTIONGAME_RESULT"] = (AI_SERVICE_OFFSET + 16)] = "PX_MSG_AI_FUNCTIONGAME_RESULT";
    AIMessage[AIMessage["PX_MSG_AI_ATTRIBUTE_RESULT"] = (AI_SERVICE_OFFSET + 17)] = "PX_MSG_AI_ATTRIBUTE_RESULT";
    AIMessage[AIMessage["PX_MSG_AI_REG_FACE_RESULT"] = (AI_SERVICE_OFFSET + 18)] = "PX_MSG_AI_REG_FACE_RESULT";
})(AIMessage || (AIMessage = {}));
var AIOther;
(function (AIOther) {
})(AIOther || (AIOther = {}));


/***/ }),

/***/ "./src/defs/ANSWER_STATUS.ts":
/*!***********************************!*\
  !*** ./src/defs/ANSWER_STATUS.ts ***!
  \***********************************/
/*! exports provided: ANSWER_STATUS, getAnswerStatusCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANSWER_STATUS", function() { return ANSWER_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnswerStatusCode", function() { return getAnswerStatusCode; });
/**
 * 答题器的状态
 */
var ANSWER_STATUS;
(function (ANSWER_STATUS) {
    // 内部原因，需要等待下一次结果
    ANSWER_STATUS["SOCKET"] = "Socket";
    // 没有设备
    ANSWER_STATUS["NO_DEVICE"] = "NoDevice";
    // 电源未插
    ANSWER_STATUS["NO_POWER"] = "NoPower";
    // IP没有配置
    ANSWER_STATUS["NO_IP"] = "NoIP";
    // USB断开
    ANSWER_STATUS["USB_OFF"] = "USBOff";
    // 正常可用
    ANSWER_STATUS["READY"] = "ready";
})(ANSWER_STATUS || (ANSWER_STATUS = {}));
function getAnswerStatusCode(status) {
    switch (status) {
        case ANSWER_STATUS.READY:
            return 0;
        case ANSWER_STATUS.USB_OFF:
            return -1;
        case ANSWER_STATUS.NO_DEVICE:
            return -1;
        case ANSWER_STATUS.NO_POWER:
            return -1;
        case ANSWER_STATUS.SOCKET:
            return -3;
        case ANSWER_STATUS.NO_IP:
            return -2;
    }
}


/***/ }),

/***/ "./src/defs/AnswerTooldefs.ts":
/*!************************************!*\
  !*** ./src/defs/AnswerTooldefs.ts ***!
  \************************************/
/*! exports provided: AnswerToolError, AnswerToolExecuteCommand, AnswerToolInfoCommand, AnswerToolMessage, AnswerToolOther */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerToolError", function() { return AnswerToolError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerToolExecuteCommand", function() { return AnswerToolExecuteCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerToolInfoCommand", function() { return AnswerToolInfoCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerToolMessage", function() { return AnswerToolMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerToolOther", function() { return AnswerToolOther; });
var PX_SERVICE_CLASS_ANSWERSERVICE = (4);
var ANSWERSERVICE_SERVICE_OFFSET = (PX_SERVICE_CLASS_ANSWERSERVICE * 1000);
var AnswerToolError;
(function (AnswerToolError) {
    AnswerToolError[AnswerToolError["PX_ERR_ANSWER_SETDISPALY"] = -(ANSWERSERVICE_SERVICE_OFFSET + 1)] = "PX_ERR_ANSWER_SETDISPALY";
    AnswerToolError[AnswerToolError["PX_ERR_ANSWER_INITSOCKET"] = -(ANSWERSERVICE_SERVICE_OFFSET + 2)] = "PX_ERR_ANSWER_INITSOCKET";
    AnswerToolError[AnswerToolError["PX_ERR_ANSWER_STARTANSWER"] = -(ANSWERSERVICE_SERVICE_OFFSET + 3)] = "PX_ERR_ANSWER_STARTANSWER";
    AnswerToolError[AnswerToolError["PX_ERR_ANSWER_STOPANSWER"] = -(ANSWERSERVICE_SERVICE_OFFSET + 4)] = "PX_ERR_ANSWER_STOPANSWER";
    AnswerToolError[AnswerToolError["PX_ERR_ANSWER_NOT_FIND_DEVICE"] = -(ANSWERSERVICE_SERVICE_OFFSET + 5)] = "PX_ERR_ANSWER_NOT_FIND_DEVICE";
    AnswerToolError[AnswerToolError["PX_ERR_ANSWER_NOT_SET_VALUATE_INFOR"] = -(ANSWERSERVICE_SERVICE_OFFSET + 6)] = "PX_ERR_ANSWER_NOT_SET_VALUATE_INFOR";
    AnswerToolError[AnswerToolError["PX_ERR_AMSWER_INVALID_OPERATION"] = -(ANSWERSERVICE_SERVICE_OFFSET + 7)] = "PX_ERR_AMSWER_INVALID_OPERATION";
    AnswerToolError[AnswerToolError["PX_ERR_ANSWER_AUDIO_PATH_NOT_EXIST"] = -(ANSWERSERVICE_SERVICE_OFFSET + 8)] = "PX_ERR_ANSWER_AUDIO_PATH_NOT_EXIST";
})(AnswerToolError || (AnswerToolError = {}));
var AnswerToolExecuteCommand;
(function (AnswerToolExecuteCommand) {
    AnswerToolExecuteCommand[AnswerToolExecuteCommand["PX_CMD_ANSWER_INIT"] = (ANSWERSERVICE_SERVICE_OFFSET + 1)] = "PX_CMD_ANSWER_INIT";
    AnswerToolExecuteCommand[AnswerToolExecuteCommand["PX_CMD_ANSWER_START_QUE"] = (ANSWERSERVICE_SERVICE_OFFSET + 2)] = "PX_CMD_ANSWER_START_QUE";
    AnswerToolExecuteCommand[AnswerToolExecuteCommand["PX_CMD_ANSWER_STOP_QUE"] = (ANSWERSERVICE_SERVICE_OFFSET + 3)] = "PX_CMD_ANSWER_STOP_QUE";
    AnswerToolExecuteCommand[AnswerToolExecuteCommand["PX_CMD_ANSWER_ADD_USER"] = (ANSWERSERVICE_SERVICE_OFFSET + 4)] = "PX_CMD_ANSWER_ADD_USER";
    AnswerToolExecuteCommand[AnswerToolExecuteCommand["PX_CMD_ANSWER_SET_TXT"] = (ANSWERSERVICE_SERVICE_OFFSET + 5)] = "PX_CMD_ANSWER_SET_TXT";
    AnswerToolExecuteCommand[AnswerToolExecuteCommand["PX_CMD_ANSWER_STOP_EVAL"] = (ANSWERSERVICE_SERVICE_OFFSET + 6)] = "PX_CMD_ANSWER_STOP_EVAL";
    AnswerToolExecuteCommand[AnswerToolExecuteCommand["PX_CMD_ANSWER_SART_EVAL"] = (ANSWERSERVICE_SERVICE_OFFSET + 7)] = "PX_CMD_ANSWER_SART_EVAL";
    AnswerToolExecuteCommand[AnswerToolExecuteCommand["PX_CMD_ANSWER_REMOVE"] = (ANSWERSERVICE_SERVICE_OFFSET + 8)] = "PX_CMD_ANSWER_REMOVE";
    AnswerToolExecuteCommand[AnswerToolExecuteCommand["PX_CMD_ANSWER_SAYHI"] = (ANSWERSERVICE_SERVICE_OFFSET + 9)] = "PX_CMD_ANSWER_SAYHI";
    AnswerToolExecuteCommand[AnswerToolExecuteCommand["PX_CMD_ANSWER_SET_AUDIO_PATH"] = (ANSWERSERVICE_SERVICE_OFFSET + 10)] = "PX_CMD_ANSWER_SET_AUDIO_PATH";
    AnswerToolExecuteCommand[AnswerToolExecuteCommand["PX_CMD_ANSWER_QUIT"] = (ANSWERSERVICE_SERVICE_OFFSET + 11)] = "PX_CMD_ANSWER_QUIT";
})(AnswerToolExecuteCommand || (AnswerToolExecuteCommand = {}));
var AnswerToolInfoCommand;
(function (AnswerToolInfoCommand) {
    AnswerToolInfoCommand[AnswerToolInfoCommand["PX_INF_ANSWER_STATUS"] = (ANSWERSERVICE_SERVICE_OFFSET + 1)] = "PX_INF_ANSWER_STATUS";
    AnswerToolInfoCommand[AnswerToolInfoCommand["PX_INF_ANSWER_CAPABILITIES"] = (ANSWERSERVICE_SERVICE_OFFSET + 2)] = "PX_INF_ANSWER_CAPABILITIES";
    AnswerToolInfoCommand[AnswerToolInfoCommand["PX_INF_ANSWER_BINDLIST"] = (ANSWERSERVICE_SERVICE_OFFSET + 3)] = "PX_INF_ANSWER_BINDLIST";
})(AnswerToolInfoCommand || (AnswerToolInfoCommand = {}));
var AnswerToolMessage;
(function (AnswerToolMessage) {
    AnswerToolMessage[AnswerToolMessage["PX_MSG_ANSWER_INIT"] = (ANSWERSERVICE_SERVICE_OFFSET + 1)] = "PX_MSG_ANSWER_INIT";
    AnswerToolMessage[AnswerToolMessage["PX_MSG_ANSWER_BIND"] = (ANSWERSERVICE_SERVICE_OFFSET + 2)] = "PX_MSG_ANSWER_BIND";
    AnswerToolMessage[AnswerToolMessage["PX_MSG_ANSWER_INSERT"] = (ANSWERSERVICE_SERVICE_OFFSET + 3)] = "PX_MSG_ANSWER_INSERT";
    AnswerToolMessage[AnswerToolMessage["PX_MSG_ANSWER_KEYPRESS"] = (ANSWERSERVICE_SERVICE_OFFSET + 4)] = "PX_MSG_ANSWER_KEYPRESS";
    AnswerToolMessage[AnswerToolMessage["PX_MSG_ANSWER_EVALINFOR"] = (ANSWERSERVICE_SERVICE_OFFSET + 5)] = "PX_MSG_ANSWER_EVALINFOR";
    AnswerToolMessage[AnswerToolMessage["PX_MSG_ANSWER_VOICEFILE"] = (ANSWERSERVICE_SERVICE_OFFSET + 6)] = "PX_MSG_ANSWER_VOICEFILE";
    AnswerToolMessage[AnswerToolMessage["PX_MSG_ANSWER_USB"] = (ANSWERSERVICE_SERVICE_OFFSET + 7)] = "PX_MSG_ANSWER_USB";
})(AnswerToolMessage || (AnswerToolMessage = {}));
var AnswerToolOther;
(function (AnswerToolOther) {
})(AnswerToolOther || (AnswerToolOther = {}));


/***/ }),

/***/ "./src/defs/Basedefs.ts":
/*!******************************!*\
  !*** ./src/defs/Basedefs.ts ***!
  \******************************/
/*! exports provided: CommonError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonError", function() { return CommonError; });
var CommonError;
(function (CommonError) {
    CommonError[CommonError["PX_ERR_HARDWARE_ERROR"] = -1] = "PX_ERR_HARDWARE_ERROR";
    CommonError[CommonError["PX_ERR_INTERNAL_ERROR"] = -2] = "PX_ERR_INTERNAL_ERROR";
    CommonError[CommonError["PX_ERR_UNSUPP_VERSION"] = -3] = "PX_ERR_UNSUPP_VERSION";
    CommonError[CommonError["PX_ERR_NO_SERVICE"] = -4] = "PX_ERR_NO_SERVICE";
    CommonError[CommonError["PX_ERR_CONNECTED"] = -5] = "PX_ERR_CONNECTED";
    CommonError[CommonError["PX_ERR_UNKNOWN"] = -6] = "PX_ERR_UNKNOWN";
    CommonError[CommonError["PX_ERR_INVALID_CATEGORY"] = -7] = "PX_ERR_INVALID_CATEGORY";
    CommonError[CommonError["PX_ERR_INVALID_COMMAND"] = -8] = "PX_ERR_INVALID_COMMAND";
    CommonError[CommonError["PX_ERR_DEV_NOT_READY"] = -9] = "PX_ERR_DEV_NOT_READY";
    CommonError[CommonError["PX_ERR_UNSUPP_COMMAND"] = -10] = "PX_ERR_UNSUPP_COMMAND";
    CommonError[CommonError["PX_ERR_CONNECTION_LOST"] = -11] = "PX_ERR_CONNECTION_LOST";
    CommonError[CommonError["PX_ERR_INVALID_DATA"] = -12] = "PX_ERR_INVALID_DATA";
    CommonError[CommonError["PX_ERR_SOFTWARE_ERROR"] = -13] = "PX_ERR_SOFTWARE_ERROR";
    CommonError[CommonError["PX_ERR_USER_ERROR"] = -15] = "PX_ERR_USER_ERROR";
    CommonError[CommonError["PX_ERR_OUT_OF_MEMORY"] = -16] = "PX_ERR_OUT_OF_MEMORY";
    CommonError[CommonError["PX_ERR_TIMEOUT"] = -17] = "PX_ERR_TIMEOUT";
    CommonError[CommonError["PX_ERR_CANCELED"] = -18] = "PX_ERR_CANCELED";
    CommonError[CommonError["PX_ERR_UNCONNECTED"] = -19] = "PX_ERR_UNCONNECTED";
})(CommonError || (CommonError = {}));


/***/ }),

/***/ "./src/defs/Cameradefs.ts":
/*!********************************!*\
  !*** ./src/defs/Cameradefs.ts ***!
  \********************************/
/*! exports provided: CameraError, CameraExecuteCommand, CameraInfoCommand, CameraMessage, CameraOther */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraError", function() { return CameraError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraExecuteCommand", function() { return CameraExecuteCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraInfoCommand", function() { return CameraInfoCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraMessage", function() { return CameraMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraOther", function() { return CameraOther; });
var PX_SERVICE_CLASS_CAMERA = (3);
var CAMERA_SERVICE_OFFSET = (PX_SERVICE_CLASS_CAMERA * 1000);
var CameraError;
(function (CameraError) {
    CameraError[CameraError["PX_ERR_CAMERA_CAMERA_NOT_READY"] = -(CAMERA_SERVICE_OFFSET + 1)] = "PX_ERR_CAMERA_CAMERA_NOT_READY";
})(CameraError || (CameraError = {}));
var CameraExecuteCommand;
(function (CameraExecuteCommand) {
    CameraExecuteCommand[CameraExecuteCommand["PX_CMD_CAMERA_PREVIEW"] = (CAMERA_SERVICE_OFFSET + 1)] = "PX_CMD_CAMERA_PREVIEW";
    CameraExecuteCommand[CameraExecuteCommand["PX_CMD_CAMERA_MOVEWINDOW"] = (CAMERA_SERVICE_OFFSET + 2)] = "PX_CMD_CAMERA_MOVEWINDOW";
    CameraExecuteCommand[CameraExecuteCommand["PX_CMD_CAMERA_RAISE"] = (CAMERA_SERVICE_OFFSET + 3)] = "PX_CMD_CAMERA_RAISE";
    CameraExecuteCommand[CameraExecuteCommand["PX_CMD_CAMERA_SET_CAMERA"] = (CAMERA_SERVICE_OFFSET + 4)] = "PX_CMD_CAMERA_SET_CAMERA";
    CameraExecuteCommand[CameraExecuteCommand["PX_CMD_CAMERA_RESET"] = (CAMERA_SERVICE_OFFSET + 5)] = "PX_CMD_CAMERA_RESET";
    CameraExecuteCommand[CameraExecuteCommand["PX_CMD_CAMERA_CHANGE_VIDEO_SETTING"] = (CAMERA_SERVICE_OFFSET + 6)] = "PX_CMD_CAMERA_CHANGE_VIDEO_SETTING";
    CameraExecuteCommand[CameraExecuteCommand["PX_CMD_CAMERA_CAPTURE"] = (CAMERA_SERVICE_OFFSET + 7)] = "PX_CMD_CAMERA_CAPTURE";
})(CameraExecuteCommand || (CameraExecuteCommand = {}));
var CameraInfoCommand;
(function (CameraInfoCommand) {
    CameraInfoCommand[CameraInfoCommand["PX_INF_CAMERA_STATUS"] = (CAMERA_SERVICE_OFFSET + 1)] = "PX_INF_CAMERA_STATUS";
    CameraInfoCommand[CameraInfoCommand["PX_INF_CAMERA_CAPABILITIES"] = (CAMERA_SERVICE_OFFSET + 2)] = "PX_INF_CAMERA_CAPABILITIES";
    CameraInfoCommand[CameraInfoCommand["PX_INF_CAMERA_LIST"] = (CAMERA_SERVICE_OFFSET + 3)] = "PX_INF_CAMERA_LIST";
    CameraInfoCommand[CameraInfoCommand["PX_INF_CAMERA_SUPPORTED_VIDEO_SETTINGS"] = (CAMERA_SERVICE_OFFSET + 4)] = "PX_INF_CAMERA_SUPPORTED_VIDEO_SETTINGS";
})(CameraInfoCommand || (CameraInfoCommand = {}));
var CameraMessage;
(function (CameraMessage) {
    CameraMessage[CameraMessage["PX_MSG_CAMERA_STATUSCHANGED"] = (CAMERA_SERVICE_OFFSET + 1)] = "PX_MSG_CAMERA_STATUSCHANGED";
    CameraMessage[CameraMessage["PX_MSG_CAMERA_PRESENT"] = (CAMERA_SERVICE_OFFSET + 2)] = "PX_MSG_CAMERA_PRESENT";
})(CameraMessage || (CameraMessage = {}));
var CameraOther;
(function (CameraOther) {
    CameraOther[CameraOther["PX_CAMERA_DEVONLINE"] = (CAMERA_SERVICE_OFFSET + 1)] = "PX_CAMERA_DEVONLINE";
    CameraOther[CameraOther["PX_CAMERA_DEVOFFLINE"] = (CAMERA_SERVICE_OFFSET + 2)] = "PX_CAMERA_DEVOFFLINE";
    CameraOther[CameraOther["PX_CAMERA_DEVPOWEROFF"] = (CAMERA_SERVICE_OFFSET + 3)] = "PX_CAMERA_DEVPOWEROFF";
    CameraOther[CameraOther["PX_CAMERA_DEVNODEVICE"] = (CAMERA_SERVICE_OFFSET + 4)] = "PX_CAMERA_DEVNODEVICE";
    CameraOther[CameraOther["PX_CAMERA_DEVHWERROR"] = (CAMERA_SERVICE_OFFSET + 5)] = "PX_CAMERA_DEVHWERROR";
    CameraOther[CameraOther["PX_CAMERA_DEVUSERERROR"] = (CAMERA_SERVICE_OFFSET + 6)] = "PX_CAMERA_DEVUSERERROR";
})(CameraOther || (CameraOther = {}));


/***/ }),

/***/ "./src/defs/LocalFileOpenMode.ts":
/*!***************************************!*\
  !*** ./src/defs/LocalFileOpenMode.ts ***!
  \***************************************/
/*! exports provided: LocalFileOpenMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalFileOpenMode", function() { return LocalFileOpenMode; });
var LocalFileOpenMode;
(function (LocalFileOpenMode) {
    LocalFileOpenMode[LocalFileOpenMode["PX_LOCALFILE_OPEN_FILE_MODE_NOT_OPEN"] = 0] = "PX_LOCALFILE_OPEN_FILE_MODE_NOT_OPEN";
    LocalFileOpenMode[LocalFileOpenMode["PX_LOCALFILE_OPEN_FILE_MODE_READ_ONLY"] = 1] = "PX_LOCALFILE_OPEN_FILE_MODE_READ_ONLY";
    LocalFileOpenMode[LocalFileOpenMode["PX_LOCALFILE_OPEN_FILE_MODE_WRITE_ONLY"] = 2] = "PX_LOCALFILE_OPEN_FILE_MODE_WRITE_ONLY";
    LocalFileOpenMode[LocalFileOpenMode["PX_LOCALFILE_OPEN_FILE_MODE_READ_WRITE"] = 3] = "PX_LOCALFILE_OPEN_FILE_MODE_READ_WRITE";
    LocalFileOpenMode[LocalFileOpenMode["PX_LOCALFILE_OPEN_FILE_MODE_APPEND"] = 4] = "PX_LOCALFILE_OPEN_FILE_MODE_APPEND";
    LocalFileOpenMode[LocalFileOpenMode["PX_LOCALFILE_OPEN_FILE_MODE_TRUNCATE"] = 8] = "PX_LOCALFILE_OPEN_FILE_MODE_TRUNCATE";
    LocalFileOpenMode[LocalFileOpenMode["PX_LOCALFILE_OPEN_FILE_MODE_TEXT"] = 16] = "PX_LOCALFILE_OPEN_FILE_MODE_TEXT";
    LocalFileOpenMode[LocalFileOpenMode["PX_LOCALFILE_OPEN_FILE_MODE_UNBUFFERED"] = 32] = "PX_LOCALFILE_OPEN_FILE_MODE_UNBUFFERED";
})(LocalFileOpenMode || (LocalFileOpenMode = {}));


/***/ }),

/***/ "./src/defs/LocalFiledefs.ts":
/*!***********************************!*\
  !*** ./src/defs/LocalFiledefs.ts ***!
  \***********************************/
/*! exports provided: LocalFileError, LocalFileExecuteCommand, LocalFileInfoCommand, LocalFileMessage, LocalFileOther */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalFileError", function() { return LocalFileError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalFileExecuteCommand", function() { return LocalFileExecuteCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalFileInfoCommand", function() { return LocalFileInfoCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalFileMessage", function() { return LocalFileMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalFileOther", function() { return LocalFileOther; });
var PX_SERVICE_CLASS_LOCALFILE = (5);
var LOCALFILE_SERVICE_OFFSET = (PX_SERVICE_CLASS_LOCALFILE * 1000);
var LocalFileError;
(function (LocalFileError) {
    LocalFileError[LocalFileError["PX_ERR_LOCALFILE_OPENED"] = -(LOCALFILE_SERVICE_OFFSET + 1)] = "PX_ERR_LOCALFILE_OPENED";
    LocalFileError[LocalFileError["PX_ERR_LOCALFILE_FILE_NOT_FOUND"] = -(LOCALFILE_SERVICE_OFFSET + 2)] = "PX_ERR_LOCALFILE_FILE_NOT_FOUND";
    LocalFileError[LocalFileError["PX_ERR_LOCALFILE_NOT_OPENED"] = -(LOCALFILE_SERVICE_OFFSET + 3)] = "PX_ERR_LOCALFILE_NOT_OPENED";
    LocalFileError[LocalFileError["PX_ERR_LOCALFILE_DIR_NOT_FOUND"] = -(LOCALFILE_SERVICE_OFFSET + 4)] = "PX_ERR_LOCALFILE_DIR_NOT_FOUND";
    LocalFileError[LocalFileError["PX_ERR_LOCALFILE_OSS_NOT_INIT"] = -(LOCALFILE_SERVICE_OFFSET + 5)] = "PX_ERR_LOCALFILE_OSS_NOT_INIT";
    LocalFileError[LocalFileError["PX_ERR_LOCALFILE_FILE_EXISTS"] = -(LOCALFILE_SERVICE_OFFSET + 6)] = "PX_ERR_LOCALFILE_FILE_EXISTS";
    LocalFileError[LocalFileError["PX_ERR_LOCALFILE_DIR_EXIST"] = -(LOCALFILE_SERVICE_OFFSET + 7)] = "PX_ERR_LOCALFILE_DIR_EXIST";
})(LocalFileError || (LocalFileError = {}));
var LocalFileExecuteCommand;
(function (LocalFileExecuteCommand) {
    LocalFileExecuteCommand[LocalFileExecuteCommand["PX_CMD_LOCALFILE_OPEN"] = (LOCALFILE_SERVICE_OFFSET + 1)] = "PX_CMD_LOCALFILE_OPEN";
    LocalFileExecuteCommand[LocalFileExecuteCommand["PX_CMD_LOCALFILE_READ"] = (LOCALFILE_SERVICE_OFFSET + 2)] = "PX_CMD_LOCALFILE_READ";
    LocalFileExecuteCommand[LocalFileExecuteCommand["PX_CMD_LOCALFILE_WRITE"] = (LOCALFILE_SERVICE_OFFSET + 3)] = "PX_CMD_LOCALFILE_WRITE";
    LocalFileExecuteCommand[LocalFileExecuteCommand["PX_CMD_LOCALFILE_CLOSE"] = (LOCALFILE_SERVICE_OFFSET + 4)] = "PX_CMD_LOCALFILE_CLOSE";
    LocalFileExecuteCommand[LocalFileExecuteCommand["PX_CMD_LOCALFILE_MKDIR"] = (LOCALFILE_SERVICE_OFFSET + 5)] = "PX_CMD_LOCALFILE_MKDIR";
    LocalFileExecuteCommand[LocalFileExecuteCommand["PX_CMD_LOCALFILE_RMDIR"] = (LOCALFILE_SERVICE_OFFSET + 6)] = "PX_CMD_LOCALFILE_RMDIR";
    LocalFileExecuteCommand[LocalFileExecuteCommand["PX_CMD_LOCALFILE_DELFILE"] = (LOCALFILE_SERVICE_OFFSET + 7)] = "PX_CMD_LOCALFILE_DELFILE";
    LocalFileExecuteCommand[LocalFileExecuteCommand["PX_CMD_LOCALFILE_CPFILE"] = (LOCALFILE_SERVICE_OFFSET + 8)] = "PX_CMD_LOCALFILE_CPFILE";
    LocalFileExecuteCommand[LocalFileExecuteCommand["PX_CMD_LOCALFILE_CPDIR"] = (LOCALFILE_SERVICE_OFFSET + 9)] = "PX_CMD_LOCALFILE_CPDIR";
    LocalFileExecuteCommand[LocalFileExecuteCommand["PX_CMD_LOCALFILE_OPEN_FILEDLG"] = (LOCALFILE_SERVICE_OFFSET + 10)] = "PX_CMD_LOCALFILE_OPEN_FILEDLG";
    LocalFileExecuteCommand[LocalFileExecuteCommand["PX_CMD_LOCALFILE_DOWNLOAD"] = (LOCALFILE_SERVICE_OFFSET + 11)] = "PX_CMD_LOCALFILE_DOWNLOAD";
    LocalFileExecuteCommand[LocalFileExecuteCommand["PX_CMD_LOCALFILE_ZIP"] = (LOCALFILE_SERVICE_OFFSET + 12)] = "PX_CMD_LOCALFILE_ZIP";
    LocalFileExecuteCommand[LocalFileExecuteCommand["PX_CMD_LOCALFILE_UNZIP"] = (LOCALFILE_SERVICE_OFFSET + 13)] = "PX_CMD_LOCALFILE_UNZIP";
    LocalFileExecuteCommand[LocalFileExecuteCommand["PX_CMD_LOCALFILE_RENAME"] = (LOCALFILE_SERVICE_OFFSET + 14)] = "PX_CMD_LOCALFILE_RENAME";
    LocalFileExecuteCommand[LocalFileExecuteCommand["PX_CMD_LOCALFILE_OPEN_DIR"] = (LOCALFILE_SERVICE_OFFSET + 15)] = "PX_CMD_LOCALFILE_OPEN_DIR";
    LocalFileExecuteCommand[LocalFileExecuteCommand["PX_CMD_LOCALFILE_UPLOADOSS"] = (LOCALFILE_SERVICE_OFFSET + 16)] = "PX_CMD_LOCALFILE_UPLOADOSS";
    LocalFileExecuteCommand[LocalFileExecuteCommand["PX_CMD_LOCALFILE_UPLOADOSSBASE64"] = (LOCALFILE_SERVICE_OFFSET + 17)] = "PX_CMD_LOCALFILE_UPLOADOSSBASE64";
    LocalFileExecuteCommand[LocalFileExecuteCommand["PX_CMD_LOCALFILE_CANCEL_UPLOADOSS"] = (LOCALFILE_SERVICE_OFFSET + 18)] = "PX_CMD_LOCALFILE_CANCEL_UPLOADOSS";
    LocalFileExecuteCommand[LocalFileExecuteCommand["PX_CMD_LOCALFILE_RENAME_DIR"] = (LOCALFILE_SERVICE_OFFSET + 19)] = "PX_CMD_LOCALFILE_RENAME_DIR";
    LocalFileExecuteCommand[LocalFileExecuteCommand["PX_CMD_LOCALFILE_CANCEL_DOWNLOAD"] = (LOCALFILE_SERVICE_OFFSET + 20)] = "PX_CMD_LOCALFILE_CANCEL_DOWNLOAD";
    LocalFileExecuteCommand[LocalFileExecuteCommand["PX_CMD_LOCALFILE_INIT_OSS"] = (LOCALFILE_SERVICE_OFFSET + 21)] = "PX_CMD_LOCALFILE_INIT_OSS";
})(LocalFileExecuteCommand || (LocalFileExecuteCommand = {}));
var LocalFileInfoCommand;
(function (LocalFileInfoCommand) {
    LocalFileInfoCommand[LocalFileInfoCommand["PX_INF_LOCALFILE_STATUS"] = (LOCALFILE_SERVICE_OFFSET + 1)] = "PX_INF_LOCALFILE_STATUS";
    LocalFileInfoCommand[LocalFileInfoCommand["PX_INF_LOCALFILE_CAPABILITIES"] = (LOCALFILE_SERVICE_OFFSET + 2)] = "PX_INF_LOCALFILE_CAPABILITIES";
    LocalFileInfoCommand[LocalFileInfoCommand["PX_INF_LOCALFILE_FILELIST"] = (LOCALFILE_SERVICE_OFFSET + 3)] = "PX_INF_LOCALFILE_FILELIST";
    LocalFileInfoCommand[LocalFileInfoCommand["PX_INF_LOCALFILE_CURRENTPATH"] = (LOCALFILE_SERVICE_OFFSET + 4)] = "PX_INF_LOCALFILE_CURRENTPATH";
    LocalFileInfoCommand[LocalFileInfoCommand["PX_INF_LOCALFILE_FILEINFO"] = (LOCALFILE_SERVICE_OFFSET + 5)] = "PX_INF_LOCALFILE_FILEINFO";
})(LocalFileInfoCommand || (LocalFileInfoCommand = {}));
var LocalFileMessage;
(function (LocalFileMessage) {
    LocalFileMessage[LocalFileMessage["PX_MSG_LOCALFILE_OSS"] = (LOCALFILE_SERVICE_OFFSET + 1)] = "PX_MSG_LOCALFILE_OSS";
    LocalFileMessage[LocalFileMessage["PX_MSG_LOCALFILE_OSS_PROGRESS"] = (LOCALFILE_SERVICE_OFFSET + 2)] = "PX_MSG_LOCALFILE_OSS_PROGRESS";
    LocalFileMessage[LocalFileMessage["PX_MSG_LOCALFILE_DOWNLOAD_PROGRESS"] = (LOCALFILE_SERVICE_OFFSET + 3)] = "PX_MSG_LOCALFILE_DOWNLOAD_PROGRESS";
})(LocalFileMessage || (LocalFileMessage = {}));
var LocalFileOther;
(function (LocalFileOther) {
})(LocalFileOther || (LocalFileOther = {}));


/***/ }),

/***/ "./src/defs/PLAYER_STATUS.ts":
/*!***********************************!*\
  !*** ./src/defs/PLAYER_STATUS.ts ***!
  \***********************************/
/*! exports provided: PLAYER_STATUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_STATUS", function() { return PLAYER_STATUS; });
var PLAYER_STATUS;
(function (PLAYER_STATUS) {
    PLAYER_STATUS["START"] = "start";
    PLAYER_STATUS["STOP"] = "stop";
})(PLAYER_STATUS || (PLAYER_STATUS = {}));


/***/ }),

/***/ "./src/defs/Playerdefs.ts":
/*!********************************!*\
  !*** ./src/defs/Playerdefs.ts ***!
  \********************************/
/*! exports provided: PlayerError, PlayerExecuteCommand, PlayerInfoCommand, PlayerMessage, PlayerOther */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerError", function() { return PlayerError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerExecuteCommand", function() { return PlayerExecuteCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerInfoCommand", function() { return PlayerInfoCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerMessage", function() { return PlayerMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerOther", function() { return PlayerOther; });
var PX_SERVICE_CLASS_PLAYER = (2);
var PLAYER_SERVICE_OFFSET = (PX_SERVICE_CLASS_PLAYER * 1000);
var PlayerError;
(function (PlayerError) {
    PlayerError[PlayerError["PX_ERR_PLAYER_NOT_OPEN"] = -(PLAYER_SERVICE_OFFSET + 1)] = "PX_ERR_PLAYER_NOT_OPEN";
    PlayerError[PlayerError["PX_ERR_PLAYER_NOIMPLEMENT"] = -(PLAYER_SERVICE_OFFSET + 2)] = "PX_ERR_PLAYER_NOIMPLEMENT";
    PlayerError[PlayerError["PX_ERR_PLAYER_OPEN_DUPLICATE"] = -(PLAYER_SERVICE_OFFSET + 3)] = "PX_ERR_PLAYER_OPEN_DUPLICATE";
    PlayerError[PlayerError["PX_ERR_PLAYER_ADD_DUPLICATE"] = -(PLAYER_SERVICE_OFFSET + 4)] = "PX_ERR_PLAYER_ADD_DUPLICATE";
    PlayerError[PlayerError["PX_ERR_PLAYER_INVALID_OPERATION"] = -(PLAYER_SERVICE_OFFSET + 5)] = "PX_ERR_PLAYER_INVALID_OPERATION";
})(PlayerError || (PlayerError = {}));
var PlayerExecuteCommand;
(function (PlayerExecuteCommand) {
    PlayerExecuteCommand[PlayerExecuteCommand["PX_CMD_PLAYER_ADD"] = (PLAYER_SERVICE_OFFSET + 1)] = "PX_CMD_PLAYER_ADD";
    PlayerExecuteCommand[PlayerExecuteCommand["PX_CMD_PLAYER_PLAY"] = (PLAYER_SERVICE_OFFSET + 2)] = "PX_CMD_PLAYER_PLAY";
    PlayerExecuteCommand[PlayerExecuteCommand["PX_CMD_PLAYER_PAUSE"] = (PLAYER_SERVICE_OFFSET + 3)] = "PX_CMD_PLAYER_PAUSE";
    PlayerExecuteCommand[PlayerExecuteCommand["PX_CMD_PLAYER_RESUME"] = (PLAYER_SERVICE_OFFSET + 4)] = "PX_CMD_PLAYER_RESUME";
    PlayerExecuteCommand[PlayerExecuteCommand["PX_CMD_PLAYER_STOP"] = (PLAYER_SERVICE_OFFSET + 5)] = "PX_CMD_PLAYER_STOP";
    PlayerExecuteCommand[PlayerExecuteCommand["PX_CMD_PLAYER_PRE_FRAME"] = (PLAYER_SERVICE_OFFSET + 6)] = "PX_CMD_PLAYER_PRE_FRAME";
    PlayerExecuteCommand[PlayerExecuteCommand["PX_CMD_PLAYER_NEXT_FRAME"] = (PLAYER_SERVICE_OFFSET + 7)] = "PX_CMD_PLAYER_NEXT_FRAME";
    PlayerExecuteCommand[PlayerExecuteCommand["PX_CMD_PLAYER_SEEK"] = (PLAYER_SERVICE_OFFSET + 8)] = "PX_CMD_PLAYER_SEEK";
    PlayerExecuteCommand[PlayerExecuteCommand["PX_CMD_PLAYER_UPDATE_INTERVAL"] = (PLAYER_SERVICE_OFFSET + 9)] = "PX_CMD_PLAYER_UPDATE_INTERVAL";
})(PlayerExecuteCommand || (PlayerExecuteCommand = {}));
var PlayerInfoCommand;
(function (PlayerInfoCommand) {
    PlayerInfoCommand[PlayerInfoCommand["PX_INF_PLAYER_STATUS"] = (PLAYER_SERVICE_OFFSET + 1)] = "PX_INF_PLAYER_STATUS";
})(PlayerInfoCommand || (PlayerInfoCommand = {}));
var PlayerMessage;
(function (PlayerMessage) {
    PlayerMessage[PlayerMessage["PX_MSG_PLAYER_START"] = (PLAYER_SERVICE_OFFSET + 1)] = "PX_MSG_PLAYER_START";
    PlayerMessage[PlayerMessage["PX_MSG_PLAYER_STOP"] = (PLAYER_SERVICE_OFFSET + 2)] = "PX_MSG_PLAYER_STOP";
    PlayerMessage[PlayerMessage["PX_MSG_PLAYER_TIMEUPDATE"] = (PLAYER_SERVICE_OFFSET + 3)] = "PX_MSG_PLAYER_TIMEUPDATE";
    PlayerMessage[PlayerMessage["PX_MSG_PLAYER_INTERRUPT"] = (PLAYER_SERVICE_OFFSET + 4)] = "PX_MSG_PLAYER_INTERRUPT";
})(PlayerMessage || (PlayerMessage = {}));
var PlayerOther;
(function (PlayerOther) {
})(PlayerOther || (PlayerOther = {}));


/***/ }),

/***/ "./src/defs/SERVICE_OPEN_STATUS.ts":
/*!*****************************************!*\
  !*** ./src/defs/SERVICE_OPEN_STATUS.ts ***!
  \*****************************************/
/*! exports provided: SERVICE_OPEN_STATUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICE_OPEN_STATUS", function() { return SERVICE_OPEN_STATUS; });
/**
 * 服务开启状态
 */
var SERVICE_OPEN_STATUS;
(function (SERVICE_OPEN_STATUS) {
    SERVICE_OPEN_STATUS["CLOSED"] = "closed";
    SERVICE_OPEN_STATUS["CLOSING"] = "closing";
    SERVICE_OPEN_STATUS["CLOSE_ERROR"] = "close_error";
    SERVICE_OPEN_STATUS["OPENED"] = "opened";
    SERVICE_OPEN_STATUS["OPENNING"] = "openning";
    SERVICE_OPEN_STATUS["OPEN_ERROR"] = "open_error";
})(SERVICE_OPEN_STATUS || (SERVICE_OPEN_STATUS = {}));


/***/ }),

/***/ "./src/defs/ServiceManagerdefs.ts":
/*!****************************************!*\
  !*** ./src/defs/ServiceManagerdefs.ts ***!
  \****************************************/
/*! exports provided: ServiceManagerError, ServiceManagerExecuteCommand, ServiceManagerInfoCommand, ServiceManagerMessage, ServiceManagerOther */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceManagerError", function() { return ServiceManagerError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceManagerExecuteCommand", function() { return ServiceManagerExecuteCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceManagerInfoCommand", function() { return ServiceManagerInfoCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceManagerMessage", function() { return ServiceManagerMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceManagerOther", function() { return ServiceManagerOther; });
var PX_SERVICE_CLASS_SERVICEMANAGER = (20);
var SERVICEMANAGER_SERVICE_OFFSET = (PX_SERVICE_CLASS_SERVICEMANAGER * 1000);
var ServiceManagerError;
(function (ServiceManagerError) {
    ServiceManagerError[ServiceManagerError["PX_ERR_SERVICEMANAGER_NO_LAYER"] = -(SERVICEMANAGER_SERVICE_OFFSET + 1)] = "PX_ERR_SERVICEMANAGER_NO_LAYER";
})(ServiceManagerError || (ServiceManagerError = {}));
var ServiceManagerExecuteCommand;
(function (ServiceManagerExecuteCommand) {
    ServiceManagerExecuteCommand[ServiceManagerExecuteCommand["PX_CMD_SERVICEMANAGER_REORDER_LAYERS"] = (SERVICEMANAGER_SERVICE_OFFSET + 1)] = "PX_CMD_SERVICEMANAGER_REORDER_LAYERS";
    ServiceManagerExecuteCommand[ServiceManagerExecuteCommand["PX_CMD_SERVICEMANAGER_MOVE_LAYERS"] = (SERVICEMANAGER_SERVICE_OFFSET + 2)] = "PX_CMD_SERVICEMANAGER_MOVE_LAYERS";
    ServiceManagerExecuteCommand[ServiceManagerExecuteCommand["PX_CMD_SERVICEMANAGER_SHOW_FULL_SCREEN"] = (SERVICEMANAGER_SERVICE_OFFSET + 3)] = "PX_CMD_SERVICEMANAGER_SHOW_FULL_SCREEN";
    ServiceManagerExecuteCommand[ServiceManagerExecuteCommand["PX_CMD_SERVICEMANAGER_CHANGE_SHOW"] = (SERVICEMANAGER_SERVICE_OFFSET + 4)] = "PX_CMD_SERVICEMANAGER_CHANGE_SHOW";
    ServiceManagerExecuteCommand[ServiceManagerExecuteCommand["PX_CMD_SERVICEMANAGER_MVP_MATRIX"] = (SERVICEMANAGER_SERVICE_OFFSET + 5)] = "PX_CMD_SERVICEMANAGER_MVP_MATRIX";
    ServiceManagerExecuteCommand[ServiceManagerExecuteCommand["PX_CMD_SERVICEMANAGER_CLOSE_WINDOW"] = (SERVICEMANAGER_SERVICE_OFFSET + 6)] = "PX_CMD_SERVICEMANAGER_CLOSE_WINDOW";
})(ServiceManagerExecuteCommand || (ServiceManagerExecuteCommand = {}));
var ServiceManagerInfoCommand;
(function (ServiceManagerInfoCommand) {
    ServiceManagerInfoCommand[ServiceManagerInfoCommand["PX_INF_SERVICEMANAGER_STATUS"] = (SERVICEMANAGER_SERVICE_OFFSET + 1)] = "PX_INF_SERVICEMANAGER_STATUS";
    ServiceManagerInfoCommand[ServiceManagerInfoCommand["PX_INF_SERVICEMANAGER_CAPABILITIES"] = (SERVICEMANAGER_SERVICE_OFFSET + 2)] = "PX_INF_SERVICEMANAGER_CAPABILITIES";
    ServiceManagerInfoCommand[ServiceManagerInfoCommand["PX_INF_SERVICEMANAGER_SERVICE_LIST"] = (SERVICEMANAGER_SERVICE_OFFSET + 3)] = "PX_INF_SERVICEMANAGER_SERVICE_LIST";
    ServiceManagerInfoCommand[ServiceManagerInfoCommand["PX_INF_SERVICEMANAGER_LAYERS_LIST"] = (SERVICEMANAGER_SERVICE_OFFSET + 4)] = "PX_INF_SERVICEMANAGER_LAYERS_LIST";
    ServiceManagerInfoCommand[ServiceManagerInfoCommand["PX_INF_SERVICEMANAGER_VERSION"] = (SERVICEMANAGER_SERVICE_OFFSET + 5)] = "PX_INF_SERVICEMANAGER_VERSION";
})(ServiceManagerInfoCommand || (ServiceManagerInfoCommand = {}));
var ServiceManagerMessage;
(function (ServiceManagerMessage) {
})(ServiceManagerMessage || (ServiceManagerMessage = {}));
var ServiceManagerOther;
(function (ServiceManagerOther) {
})(ServiceManagerOther || (ServiceManagerOther = {}));


/***/ }),

/***/ "./src/defs/Systemdefs.ts":
/*!********************************!*\
  !*** ./src/defs/Systemdefs.ts ***!
  \********************************/
/*! exports provided: SystemError, SystemExecuteCommand, SystemInfoCommand, SystemMessage, SystemOther */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemError", function() { return SystemError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemExecuteCommand", function() { return SystemExecuteCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemInfoCommand", function() { return SystemInfoCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemMessage", function() { return SystemMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemOther", function() { return SystemOther; });
var PX_SERVICE_CLASS_SYS = (6);
var SYS_SERVICE_OFFSET = (PX_SERVICE_CLASS_SYS * 1000);
var SystemError;
(function (SystemError) {
})(SystemError || (SystemError = {}));
var SystemExecuteCommand;
(function (SystemExecuteCommand) {
    SystemExecuteCommand[SystemExecuteCommand["PX_CMD_SYS_OPEN_AUDIOINPUT"] = (SYS_SERVICE_OFFSET + 1)] = "PX_CMD_SYS_OPEN_AUDIOINPUT";
    SystemExecuteCommand[SystemExecuteCommand["PX_CMD_SYS_REOPEN_AUDIOINPUT"] = (SYS_SERVICE_OFFSET + 2)] = "PX_CMD_SYS_REOPEN_AUDIOINPUT";
    SystemExecuteCommand[SystemExecuteCommand["PX_CMD_SYS_RECEIVE_CURRENT_VOLUME"] = (SYS_SERVICE_OFFSET + 3)] = "PX_CMD_SYS_RECEIVE_CURRENT_VOLUME";
    SystemExecuteCommand[SystemExecuteCommand["PX_CMD_SYS_STOP_RECEVIVE_CURRENT_VOLUME"] = (SYS_SERVICE_OFFSET + 4)] = "PX_CMD_SYS_STOP_RECEVIVE_CURRENT_VOLUME";
    SystemExecuteCommand[SystemExecuteCommand["PX_CMD_SYS_CHANGE_VOLUME"] = (SYS_SERVICE_OFFSET + 5)] = "PX_CMD_SYS_CHANGE_VOLUME";
    SystemExecuteCommand[SystemExecuteCommand["PX_CMD_SYS_PING_ADD_HOST"] = (SYS_SERVICE_OFFSET + 6)] = "PX_CMD_SYS_PING_ADD_HOST";
    SystemExecuteCommand[SystemExecuteCommand["PX_CMD_SYS_PING_REMOVE_HOST"] = (SYS_SERVICE_OFFSET + 7)] = "PX_CMD_SYS_PING_REMOVE_HOST";
    SystemExecuteCommand[SystemExecuteCommand["PX_CMD_SYS_PING_SET_INTERVAL"] = (SYS_SERVICE_OFFSET + 8)] = "PX_CMD_SYS_PING_SET_INTERVAL";
})(SystemExecuteCommand || (SystemExecuteCommand = {}));
var SystemInfoCommand;
(function (SystemInfoCommand) {
    SystemInfoCommand[SystemInfoCommand["PX_INF_SYS_STATUS"] = (SYS_SERVICE_OFFSET + 1)] = "PX_INF_SYS_STATUS";
    SystemInfoCommand[SystemInfoCommand["PX_INF_SYS_CAPABILITIES"] = (SYS_SERVICE_OFFSET + 2)] = "PX_INF_SYS_CAPABILITIES";
    SystemInfoCommand[SystemInfoCommand["PX_INF_SYS_CPU"] = (SYS_SERVICE_OFFSET + 3)] = "PX_INF_SYS_CPU";
    SystemInfoCommand[SystemInfoCommand["PX_INF_SYS_OS"] = (SYS_SERVICE_OFFSET + 4)] = "PX_INF_SYS_OS";
    SystemInfoCommand[SystemInfoCommand["PX_INF_SYS_MEMORY"] = (SYS_SERVICE_OFFSET + 5)] = "PX_INF_SYS_MEMORY";
    SystemInfoCommand[SystemInfoCommand["PX_INF_SYS_GPU"] = (SYS_SERVICE_OFFSET + 6)] = "PX_INF_SYS_GPU";
    SystemInfoCommand[SystemInfoCommand["PX_INF_SYS_DISK"] = (SYS_SERVICE_OFFSET + 7)] = "PX_INF_SYS_DISK";
    SystemInfoCommand[SystemInfoCommand["PX_INF_SYS_AUDIODEVICE"] = (SYS_SERVICE_OFFSET + 8)] = "PX_INF_SYS_AUDIODEVICE";
})(SystemInfoCommand || (SystemInfoCommand = {}));
var SystemMessage;
(function (SystemMessage) {
    SystemMessage[SystemMessage["PX_MSG_SYS_AUDIOLEVEL"] = (SYS_SERVICE_OFFSET + 1)] = "PX_MSG_SYS_AUDIOLEVEL";
    SystemMessage[SystemMessage["PX_MSG_SYS_AUDIOCHANGED"] = (SYS_SERVICE_OFFSET + 2)] = "PX_MSG_SYS_AUDIOCHANGED";
    SystemMessage[SystemMessage["PX_MSG_SYS_HOST_STATUS_CHANGED"] = (SYS_SERVICE_OFFSET + 3)] = "PX_MSG_SYS_HOST_STATUS_CHANGED";
})(SystemMessage || (SystemMessage = {}));
var SystemOther;
(function (SystemOther) {
})(SystemOther || (SystemOther = {}));


/***/ }),

/***/ "./src/defs/VideoCapturedefs.ts":
/*!**************************************!*\
  !*** ./src/defs/VideoCapturedefs.ts ***!
  \**************************************/
/*! exports provided: VideoCaptureError, VideoCaptureExecuteCommand, VideoCaptureInfoCommand, VideoCaptureMessage, VideoCaptureOther */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCaptureError", function() { return VideoCaptureError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCaptureExecuteCommand", function() { return VideoCaptureExecuteCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCaptureInfoCommand", function() { return VideoCaptureInfoCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCaptureMessage", function() { return VideoCaptureMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCaptureOther", function() { return VideoCaptureOther; });
var PX_SERVICE_CLASS_VIDEOCAPTURE = (8);
var VIDEOCAPTURE_SERVICE_OFFSET = (PX_SERVICE_CLASS_VIDEOCAPTURE * 1000);
var VideoCaptureError;
(function (VideoCaptureError) {
    VideoCaptureError[VideoCaptureError["PX_ERR_VIDEOCAPTURE_VIDEOCAPTURE"] = -(VIDEOCAPTURE_SERVICE_OFFSET + 1)] = "PX_ERR_VIDEOCAPTURE_VIDEOCAPTURE";
    VideoCaptureError[VideoCaptureError["PX_ERR_VIDEOCAPTURE_AUDIOCAPTURE"] = -(VIDEOCAPTURE_SERVICE_OFFSET + 2)] = "PX_ERR_VIDEOCAPTURE_AUDIOCAPTURE";
    VideoCaptureError[VideoCaptureError["PX_ERR_VIDEOCAPTURE_DEVICERUNING"] = -(VIDEOCAPTURE_SERVICE_OFFSET + 3)] = "PX_ERR_VIDEOCAPTURE_DEVICERUNING";
    VideoCaptureError[VideoCaptureError["PX_ERR_VIDEOCAPTURE_NOT_RECORD"] = -(VIDEOCAPTURE_SERVICE_OFFSET + 4)] = "PX_ERR_VIDEOCAPTURE_NOT_RECORD";
})(VideoCaptureError || (VideoCaptureError = {}));
var VideoCaptureExecuteCommand;
(function (VideoCaptureExecuteCommand) {
    VideoCaptureExecuteCommand[VideoCaptureExecuteCommand["PX_CMD_VIDEOCAPTURE_STARTCAPTURE"] = (VIDEOCAPTURE_SERVICE_OFFSET + 1)] = "PX_CMD_VIDEOCAPTURE_STARTCAPTURE";
    VideoCaptureExecuteCommand[VideoCaptureExecuteCommand["PX_CMD_VIDEOCAPTURE_STOPCAPTURE"] = (VIDEOCAPTURE_SERVICE_OFFSET + 2)] = "PX_CMD_VIDEOCAPTURE_STOPCAPTURE";
    VideoCaptureExecuteCommand[VideoCaptureExecuteCommand["PX_CMD_VIDEOCAPTURE_STARTRECORD"] = (VIDEOCAPTURE_SERVICE_OFFSET + 3)] = "PX_CMD_VIDEOCAPTURE_STARTRECORD";
    VideoCaptureExecuteCommand[VideoCaptureExecuteCommand["PX_CMD_VIDEOCAPTURE_STOPRECORD"] = (VIDEOCAPTURE_SERVICE_OFFSET + 4)] = "PX_CMD_VIDEOCAPTURE_STOPRECORD";
})(VideoCaptureExecuteCommand || (VideoCaptureExecuteCommand = {}));
var VideoCaptureInfoCommand;
(function (VideoCaptureInfoCommand) {
    VideoCaptureInfoCommand[VideoCaptureInfoCommand["PX_INF_VIDEOCAPTURE_STATUS"] = (VIDEOCAPTURE_SERVICE_OFFSET + 1)] = "PX_INF_VIDEOCAPTURE_STATUS";
    VideoCaptureInfoCommand[VideoCaptureInfoCommand["PX_INF_VIDEOCAPTURE_CAPABILITIES"] = (VIDEOCAPTURE_SERVICE_OFFSET + 2)] = "PX_INF_VIDEOCAPTURE_CAPABILITIES";
    VideoCaptureInfoCommand[VideoCaptureInfoCommand["PX_INF_VIDEOCAPTURE_DEVICE"] = (VIDEOCAPTURE_SERVICE_OFFSET + 3)] = "PX_INF_VIDEOCAPTURE_DEVICE";
})(VideoCaptureInfoCommand || (VideoCaptureInfoCommand = {}));
var VideoCaptureMessage;
(function (VideoCaptureMessage) {
})(VideoCaptureMessage || (VideoCaptureMessage = {}));
var VideoCaptureOther;
(function (VideoCaptureOther) {
})(VideoCaptureOther || (VideoCaptureOther = {}));


/***/ }),

/***/ "./src/defs/VideoProcessordefs.ts":
/*!****************************************!*\
  !*** ./src/defs/VideoProcessordefs.ts ***!
  \****************************************/
/*! exports provided: VideoProcessorError, VideoProcessorExecuteCommand, VideoProcessorInfoCommand, VideoProcessorMessage, VideoProcessorOther */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoProcessorError", function() { return VideoProcessorError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoProcessorExecuteCommand", function() { return VideoProcessorExecuteCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoProcessorInfoCommand", function() { return VideoProcessorInfoCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoProcessorMessage", function() { return VideoProcessorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoProcessorOther", function() { return VideoProcessorOther; });
var PX_SERVICE_CLASS_VIDEOPROCESS = (7);
var VIDEOPROCESS_SERVICE_OFFSET = (PX_SERVICE_CLASS_VIDEOPROCESS * 1000);
var VideoProcessorError;
(function (VideoProcessorError) {
    VideoProcessorError[VideoProcessorError["PX_ERR_VIDEOPROCESSOR_PARAMS"] = -(VIDEOPROCESS_SERVICE_OFFSET + 1)] = "PX_ERR_VIDEOPROCESSOR_PARAMS";
    VideoProcessorError[VideoProcessorError["PX_ERR_VIDEOPROCESSOR_FILE_NOT_EXIST"] = -(VIDEOPROCESS_SERVICE_OFFSET + 2)] = "PX_ERR_VIDEOPROCESSOR_FILE_NOT_EXIST";
    VideoProcessorError[VideoProcessorError["PX_ERR_VIDEOPROCESSOR_VEDIO_OPEN"] = -(VIDEOPROCESS_SERVICE_OFFSET + 3)] = "PX_ERR_VIDEOPROCESSOR_VEDIO_OPEN";
    VideoProcessorError[VideoProcessorError["PX_ERR_VIDEOPROCESSOR_MODEL_FILE_NOT_EXIST"] = -(VIDEOPROCESS_SERVICE_OFFSET + 4)] = "PX_ERR_VIDEOPROCESSOR_MODEL_FILE_NOT_EXIST";
    VideoProcessorError[VideoProcessorError["PX_ERR_VIDEOPROCESSOR_RESOLUTION"] = -(VIDEOPROCESS_SERVICE_OFFSET + 5)] = "PX_ERR_VIDEOPROCESSOR_RESOLUTION";
    VideoProcessorError[VideoProcessorError["PX_ERR_VIDEOPROCESSOR_SMOOTH"] = -(VIDEOPROCESS_SERVICE_OFFSET + 6)] = "PX_ERR_VIDEOPROCESSOR_SMOOTH";
    VideoProcessorError[VideoProcessorError["PX_ERR_VIDEOPROCESSOR_FILE_EXIST"] = -(VIDEOPROCESS_SERVICE_OFFSET + 7)] = "PX_ERR_VIDEOPROCESSOR_FILE_EXIST";
})(VideoProcessorError || (VideoProcessorError = {}));
var VideoProcessorExecuteCommand;
(function (VideoProcessorExecuteCommand) {
    VideoProcessorExecuteCommand[VideoProcessorExecuteCommand["PX_CMD_VIDEOPROCESSOR_VIDEO_INFOR"] = (VIDEOPROCESS_SERVICE_OFFSET + 1)] = "PX_CMD_VIDEOPROCESSOR_VIDEO_INFOR";
    VideoProcessorExecuteCommand[VideoProcessorExecuteCommand["PX_CMD_VIDEOPROCESSOR_VIDEO_SEQUENCE"] = (VIDEOPROCESS_SERVICE_OFFSET + 2)] = "PX_CMD_VIDEOPROCESSOR_VIDEO_SEQUENCE";
    VideoProcessorExecuteCommand[VideoProcessorExecuteCommand["PX_CMD_VIDEOPROCESSOR_SMOOTH"] = (VIDEOPROCESS_SERVICE_OFFSET + 3)] = "PX_CMD_VIDEOPROCESSOR_SMOOTH";
    VideoProcessorExecuteCommand[VideoProcessorExecuteCommand["PX_CMD_VIDEOPROCESSOR_CUT"] = (VIDEOPROCESS_SERVICE_OFFSET + 4)] = "PX_CMD_VIDEOPROCESSOR_CUT";
    VideoProcessorExecuteCommand[VideoProcessorExecuteCommand["PX_CMD_VIDEOPROCESSOR_CUTADVANCE"] = (VIDEOPROCESS_SERVICE_OFFSET + 5)] = "PX_CMD_VIDEOPROCESSOR_CUTADVANCE";
    VideoProcessorExecuteCommand[VideoProcessorExecuteCommand["PX_CMD_VIDEOPROCESSOR_ADDFRAME"] = (VIDEOPROCESS_SERVICE_OFFSET + 6)] = "PX_CMD_VIDEOPROCESSOR_ADDFRAME";
})(VideoProcessorExecuteCommand || (VideoProcessorExecuteCommand = {}));
var VideoProcessorInfoCommand;
(function (VideoProcessorInfoCommand) {
    VideoProcessorInfoCommand[VideoProcessorInfoCommand["PX_INF_VIDEOPROCESSOR_STATUS"] = (VIDEOPROCESS_SERVICE_OFFSET + 1)] = "PX_INF_VIDEOPROCESSOR_STATUS";
    VideoProcessorInfoCommand[VideoProcessorInfoCommand["PX_INF_VIDEOPROCESSOR_CAPABILITIES"] = (VIDEOPROCESS_SERVICE_OFFSET + 2)] = "PX_INF_VIDEOPROCESSOR_CAPABILITIES";
})(VideoProcessorInfoCommand || (VideoProcessorInfoCommand = {}));
var VideoProcessorMessage;
(function (VideoProcessorMessage) {
    VideoProcessorMessage[VideoProcessorMessage["PX_MSG_VIDEOPROCESSOR_ERROR"] = (VIDEOPROCESS_SERVICE_OFFSET + 1)] = "PX_MSG_VIDEOPROCESSOR_ERROR";
    VideoProcessorMessage[VideoProcessorMessage["PX_MSG_VIDEOPROCESSOR_SMOOTH_FINISH"] = (VIDEOPROCESS_SERVICE_OFFSET + 2)] = "PX_MSG_VIDEOPROCESSOR_SMOOTH_FINISH";
    VideoProcessorMessage[VideoProcessorMessage["PX_MSG_VIDEOPROCESSOR_RESIDUE_TIME"] = (VIDEOPROCESS_SERVICE_OFFSET + 3)] = "PX_MSG_VIDEOPROCESSOR_RESIDUE_TIME";
})(VideoProcessorMessage || (VideoProcessorMessage = {}));
var VideoProcessorOther;
(function (VideoProcessorOther) {
})(VideoProcessorOther || (VideoProcessorOther = {}));


/***/ }),

/***/ "./src/frame/AIBrowser.ts":
/*!********************************!*\
  !*** ./src/frame/AIBrowser.ts ***!
  \********************************/
/*! exports provided: AIBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AIBrowser", function() { return AIBrowser; });
var AIBrowser = /** @class */ (function () {
    function AIBrowser() {
        this.commandCallbackMap = new Map();
        this.messageCallbackMap = new Map();
    }
    AIBrowser.prototype.init = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (window.qt !== undefined) {
                if (window.webChannel === undefined) {
                    window.webChannel = new QWebChannel(window.qt.webChannelTransport, function (channel) {
                        _this.jsbridge = channel.objects.jsbridge;
                        _this.onMessageCallback = _this.onMessage.bind(_this);
                        _this.onFinishCommandCallback = _this.onFinishCommand.bind(_this);
                        _this.jsbridge.onPXMessage_JS.connect(_this.onMessageCallback);
                        _this.jsbridge.onPXFinishCommand_JS.connect(_this.onFinishCommandCallback);
                        resolve();
                    });
                }
                else {
                    _this.jsbridge.onPXMessage_JS.connect(_this.onMessageCallback);
                    _this.jsbridge.onPXFinishCommand_JS.connect(_this.onFinishCommandCallback);
                    resolve();
                }
            }
            else {
                console.error("qt对象获取失败");
                reject(new Error("qt对象获取失败"));
            }
        });
    };
    AIBrowser.prototype.release = function () {
        this.jsbridge.onPXMessage_JS.disconnect(this.onMessageCallback);
        this.jsbridge.onPXFinishCommand_JS.disconnect(this.onFinishCommandCallback);
    };
    /**
     * 打开服务
     * @param servicename
     * @param callback
     */
    AIBrowser.prototype.openService = function (servicename, timeout, success, fail) {
        var _this = this;
        if (this.jsbridge) {
            this.jsbridge.open_JS(servicename, timeout, function (uuid) {
                console.log("[" + servicename + "] \"open\" [" + uuid + "]");
                _this.commandCallbackMap.set(uuid, function (auuid, result) {
                    if (result.rsp_error < 0 && result.rsp_error !== -5) {
                        fail({ servicename: servicename, uuid: uuid, result: result });
                    }
                    else {
                        success({ servicename: servicename, uuid: uuid, result: result });
                    }
                });
            });
        }
    };
    /**
     * 查询服务
     * @param servicename
     * @param category
     * @param params
     * @param callback
     */
    AIBrowser.prototype.getServiceInfo = function (servicename, category, params, opt, success, fail) {
        var _this = this;
        if (params === undefined || params === null) { // 不可以传 undefined或null 否则会崩溃
            params = {};
        }
        if (this.jsbridge) {
            this.jsbridge.info_JS(servicename, category, params, opt.timeout, function (uuid) {
                console.log("[" + servicename + "] \"info\" [" + category + "] [" + uuid + "]", params, opt);
                _this.commandCallbackMap.set(uuid, function (auuid, result) {
                    _this.doCommandFinish(servicename, category, params, auuid, result, opt, success, fail);
                });
            });
        }
    };
    /**
     * 执行服务
     * @param servicename
     * @param command
     * @param params
     * @param callback
     */
    AIBrowser.prototype.executeService = function (servicename, command, params, requestIdCallback, opt, success, fail) {
        var _this = this;
        if (params === undefined || params === null) { // 不可以传 undefined或null 否则会崩溃
            params = {};
        }
        if (this.jsbridge) {
            this.jsbridge.execute_JS(servicename, command, params, opt.timeout, function (uuid) {
                console.log(Date.now(), "[" + servicename + "] \"execute\" [" + command + "] [" + uuid + "]", params, opt);
                if (typeof opt.requestIdCallback === "function") {
                    opt.requestIdCallback(uuid);
                }
                if (typeof requestIdCallback === "function") {
                    requestIdCallback(uuid);
                }
                _this.commandCallbackMap.set(uuid, function (auuid, result) {
                    _this.doCommandFinish(servicename, command, params, auuid, result, opt, success, fail);
                });
            });
        }
    };
    /**
     * 关闭服务
     * @param servicename
     * @param callback
     */
    AIBrowser.prototype.closeService = function (servicename, timeout, success, fail) {
        var _this = this;
        if (this.jsbridge) {
            this.jsbridge.close_JS(servicename, timeout, function (uuid) {
                console.log("[" + servicename + "] \"close\" [" + uuid + "]");
                _this.commandCallbackMap.set(uuid, function (auuid, result) {
                    if (result.rsp_error < 0) {
                        fail({ servicename: servicename, uuid: auuid, result: result });
                    }
                    else {
                        success({ servicename: servicename, uuid: auuid, result: result });
                    }
                });
            });
        }
    };
    AIBrowser.prototype.onError = function (e) {
        console.warn(Date.now(), "aibrowser\u5904\u7406\u9519\u8BEF " + e.servicename + " " + e.cmd + " param: " + JSON.stringify(e.param) + " " + e.uuid + " " + JSON.stringify(e.result));
        e.bubble = false;
    };
    AIBrowser.prototype.addListener = function (token, listener) {
        if (!this.messageCallbackMap.has(token)) {
            this.messageCallbackMap.set(token, []);
        }
        this.messageCallbackMap.get(token).push(listener);
    };
    AIBrowser.prototype.addOnceListener = function (token, listener) {
        var _this = this;
        var magic = {
            handler: function (msg, eventInfo, type, requestID) {
                listener.handler.call(listener.context, msg, eventInfo, type, requestID);
                _this.removeListener(token, magic);
            },
            context: listener.context,
        };
        this.addListener(token, magic);
    };
    AIBrowser.prototype.clearListeners = function (token) {
        this.messageCallbackMap.delete(token);
    };
    AIBrowser.prototype.removeListener = function (token, listener) {
        if (this.messageCallbackMap.has(token)) {
            var listeners = this.messageCallbackMap.get(token);
            var index = listeners.indexOf(listener);
            if (index >= 0) {
                listeners.splice(index, 1);
            }
        }
    };
    AIBrowser.prototype.emit = function (token, msg, eventInfo, type, requestID) {
        var listeners = this.messageCallbackMap.get(token);
        if (listeners === undefined) {
            return;
        }
        listeners.forEach(function (listener) {
            listener.handler.call(listener.context, msg, eventInfo, type, requestID);
        });
    };
    AIBrowser.prototype.onMessage = function (msg, eventInfo, type, requestID) {
        // console.log(Date.now(), "message: ", msg, type, eventInfo, "requestId: ", requestID);
        if (type === "service" || type === "") { // 触发service消息
            this.emit(msg, msg, eventInfo, type, requestID);
            return;
        }
        if (type === "execute") {
            // 触发execute消息
            var token = requestID + "_" + msg;
            this.emit(token, msg, eventInfo, type, requestID);
        }
    };
    AIBrowser.prototype.onFinishCommand = function (uuid, result) {
        console.log(Date.now(), "finishCommand", uuid, result);
        this.commandCallbackMap.get(uuid)(uuid, result);
        this.commandCallbackMap.delete(uuid);
    };
    /**
     *
     * @param servicename 服务名称
     * @param command 命令码
     * @param auuid uuid
     * @param result 返回结果
     * @param opt 可选项
     * @param fail 失败回调
     * @param success 成功回调
     */
    AIBrowser.prototype.doCommandFinish = function (servicename, command, params, auuid, result, opt, success, fail) {
        var callbackRsp = { servicename: servicename, cmd: command, infocmd: command, param: params, uuid: auuid, result: result, bubble: true };
        if (result.rsp_error < 0) {
            fail(callbackRsp);
        }
        else {
            success(callbackRsp);
        }
    };
    return AIBrowser;
}());



/***/ }),

/***/ "./src/frame/BaseService.ts":
/*!**********************************!*\
  !*** ./src/frame/BaseService.ts ***!
  \**********************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var _helper_queue_BaseCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/queue/BaseCommand */ "./src/helper/queue/BaseCommand.ts");
/* harmony import */ var _ExecuteOption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExecuteOption */ "./src/frame/ExecuteOption.ts");
/* harmony import */ var _defs_SERVICE_OPEN_STATUS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defs/SERVICE_OPEN_STATUS */ "./src/defs/SERVICE_OPEN_STATUS.ts");
/* harmony import */ var _defs_Basedefs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../defs/Basedefs */ "./src/defs/Basedefs.ts");




/**
 * Service的通用功能
 */
var BaseService = /** @class */ (function () {
    function BaseService(aibrowser, bridge) {
        // public static commandQueue: PromiseCommandQueue = new PromiseCommandQueue();
        this.openstatus = _defs_SERVICE_OPEN_STATUS__WEBPACK_IMPORTED_MODULE_2__["SERVICE_OPEN_STATUS"].CLOSED;
        /**
         * 设置超时 单位ms
         */
        this.timeout = 10000;
        this.isOpen = false;
        this.aibrowser = aibrowser;
        this.bridge = bridge;
        this.isOpen = false;
    }
    Object.defineProperty(BaseService.prototype, "openStatus", {
        get: function () {
            return this.openstatus;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 开启服务
     */
    BaseService.prototype.open = function (timeout) {
        var _this = this;
        if (typeof timeout !== "number") {
            timeout = this.timeout;
        }
        console.log("开启服务", this.serviceName, Date.now());
        return new Promise(function (onOpenSuccess, onOpenFailure) {
            _this.openstatus = _defs_SERVICE_OPEN_STATUS__WEBPACK_IMPORTED_MODULE_2__["SERVICE_OPEN_STATUS"].OPENNING;
            _this.aibrowser.openService(_this.serviceName, timeout, function (e) {
                _this.isOpen = true;
                _this.openstatus = _defs_SERVICE_OPEN_STATUS__WEBPACK_IMPORTED_MODULE_2__["SERVICE_OPEN_STATUS"].OPENED;
                onOpenSuccess(e);
            }, function (e) {
                _this.openstatus = _defs_SERVICE_OPEN_STATUS__WEBPACK_IMPORTED_MODULE_2__["SERVICE_OPEN_STATUS"].OPEN_ERROR;
                onOpenFailure(e);
                _this.aibrowser.onError(e);
            });
        });
    };
    /**
     * 关闭服务
     */
    BaseService.prototype.close = function (timeout) {
        var _this = this;
        if (typeof timeout !== "number") {
            timeout = this.timeout;
        }
        return new Promise(function (onCloseSuccess, onCloseFailure) {
            _this.openstatus = _defs_SERVICE_OPEN_STATUS__WEBPACK_IMPORTED_MODULE_2__["SERVICE_OPEN_STATUS"].CLOSING;
            _this.aibrowser.closeService(_this.serviceName, timeout, function (e) {
                _this.isOpen = false;
                _this.openstatus = _defs_SERVICE_OPEN_STATUS__WEBPACK_IMPORTED_MODULE_2__["SERVICE_OPEN_STATUS"].CLOSED;
                onCloseSuccess(e);
            }, function (e) {
                _this.openstatus = _defs_SERVICE_OPEN_STATUS__WEBPACK_IMPORTED_MODULE_2__["SERVICE_OPEN_STATUS"].CLOSE_ERROR;
                onCloseFailure(e);
                _this.aibrowser.onError(e);
            });
        });
    };
    /**
     * 执行服务
     * @param command
     * @param params
     * @param opt
     */
    BaseService.prototype.execute = function (command, params, opt) {
        var _this = this;
        if (typeof opt.timeout !== "number") {
            opt.timeout = this.timeout;
        }
        return new Promise(function (resolve, reject) {
            _this.aibrowser.executeService(_this.serviceName, command, params, function (uuid) {
                _this.bindMessageCallbacks(opt, uuid);
            }, opt, resolve, reject);
        });
    };
    BaseService.prototype.getInfo = function (command, params, opt) {
        var _this = this;
        if (typeof opt.timeout !== "number") {
            opt.timeout = this.timeout;
        }
        return new Promise(function (resolve, reject) {
            _this.aibrowser.getServiceInfo(_this.serviceName, command, params, opt, resolve, reject);
        });
    };
    /**
     * 处理execute错误信息
     * @param responce
     */
    BaseService.prototype.onError = function (responce) {
        console.warn(Date.now(), "service处理cmd错误", responce);
        return true;
    };
    /**
     * 处理info错误信息
     * @param responce
     */
    BaseService.prototype.onInfoError = function (responce) {
        console.warn(Date.now(), "service处理info错误", responce);
        return true;
    };
    /**
     * 添加消息回调
     * @param msg
     * @param listener
     */
    BaseService.prototype.addListener = function (msg, listener) {
        this.aibrowser.addListener(msg, listener);
    };
    /**
     * 添加一次消息回调,回调执行后自动销毁
     * @param msg
     * @param listener
     */
    BaseService.prototype.addOnceListener = function (msg, listener) {
        this.aibrowser.addOnceListener(msg, listener);
    };
    /**
     * 销毁特定消息回调
     * @param msg
     * @param listener
     */
    BaseService.prototype.removeListener = function (msg, listener) {
        this.aibrowser.removeListener(msg, listener);
    };
    /**
     * 销毁msg下的所有回调
     * @param msg
     */
    BaseService.prototype.clearListeners = function (msg) {
        this.aibrowser.clearListeners(msg);
    };
    /**
     * 创建executeOption
     * @param onceMsgbinds 单次消息回调
     * @param msgbinds 多次消息回调
     * @param requestIdCallback 收到requestId的回调
     * @param timeout 超时设置 单位ms 0ms表示没有超时(若不返回则一直等待)
     */
    BaseService.prototype.makeExecuteOption = function (onceMsgbinds, msgbinds, requestIdCallback, timeout) {
        var option = new _ExecuteOption__WEBPACK_IMPORTED_MODULE_1__["ExecuteOption"]();
        if (onceMsgbinds) {
            option.onceMsgBinds = this.obj2Map(onceMsgbinds);
        }
        if (msgbinds) {
            option.msgBinds = this.obj2Map(msgbinds);
        }
        option.requestIdCallback = requestIdCallback;
        option.timeout = timeout;
        return option;
    };
    BaseService.prototype.obj2Map = function (obj) {
        var map = new Map();
        for (var key in obj) {
            if (obj[key]) {
                map.set(parseInt(key, 10), obj[key]);
            }
        }
        return map;
    };
    BaseService.prototype.makeCommand = function (type, cmd, param, option) {
        var opt = option || new _ExecuteOption__WEBPACK_IMPORTED_MODULE_1__["ExecuteOption"]();
        return new _helper_queue_BaseCommand__WEBPACK_IMPORTED_MODULE_0__["BaseCommand"](this, type, cmd, param, opt);
    };
    BaseService.prototype.makeExecutePromise = function (cmd, param, option) {
        var opt = option || new _ExecuteOption__WEBPACK_IMPORTED_MODULE_1__["ExecuteOption"]();
        if (this.openStatus === _defs_SERVICE_OPEN_STATUS__WEBPACK_IMPORTED_MODULE_2__["SERVICE_OPEN_STATUS"].OPENED) {
            return this.doMakeExecutePromise(cmd, param, opt);
        }
        else {
            return this.makeNotOpenResponce(cmd, param, opt);
        }
        // return new Promise((resolve, reject) => {
        //     const command = this.makeCommand(0, cmd, param, option);
        //     command.succeed = (e) => { resolve(e); };
        //     command.fail = (reason) => { reject(reason); };
        //     BaseService.commandQueue.enqueue(command);
        // });
    };
    BaseService.prototype.makeNotOpenResponce = function (cmd, param, option) {
        var notOpenResponce = {
            servicename: this.serviceName,
            uuid: "service not opened",
            cmd: cmd,
            param: param,
            result: {
                rsp_error: _defs_Basedefs__WEBPACK_IMPORTED_MODULE_3__["CommonError"].PX_ERR_CONNECTION_LOST,
            },
            option: option,
        };
        return Promise.reject(notOpenResponce);
    };
    BaseService.prototype.makeInfoPromise = function (cmd, param, option) {
        // return new Promise((resolve, reject) => {
        //     const command = this.makeCommand(1, cmd, param, option);
        //     command.succeed = (e) => { resolve(e); };
        //     command.fail = (reason) => { reject(reason); };
        //     BaseService.commandQueue.enqueue(command);
        // });
        var opt = option || new _ExecuteOption__WEBPACK_IMPORTED_MODULE_1__["ExecuteOption"]();
        if (this.openStatus === _defs_SERVICE_OPEN_STATUS__WEBPACK_IMPORTED_MODULE_2__["SERVICE_OPEN_STATUS"].OPENED) {
            return this.doMakeInfoPromise(cmd, param, opt);
        }
        else {
            return this.makeNotOpenResponce(cmd, param, opt);
        }
    };
    BaseService.prototype.doMakeExecutePromise = function (cmd, param, option) {
        var _this = this;
        // return new Promise((resolve, reject) => {
        return this.execute(cmd, param, option).then(function (e) {
            return Promise.resolve(e);
        }).catch(function (e) {
            delete e.infocmd;
            if (typeof option.onError === "function") {
                option.onError(e); // app处理
            }
            if (e.bubble === true) {
                _this.onError(e);
            }
            if (e.bubble === true) {
                _this.aibrowser.onError(e); // aibrowser处理
            }
            return Promise.reject(e);
        });
    };
    BaseService.prototype.doMakeInfoPromise = function (cmd, param, option) {
        var _this = this;
        // return new Promise((resolve, reject) => {
        return this.getInfo(cmd, param, option).then(function (a) {
            if (a && a.result && a.result.rsp_data) {
                if (a.result.rsp_data.data) {
                    console.log("info returns:", a, a.result.rsp_data);
                    return Promise.resolve(a.result.rsp_data.data);
                }
                else {
                    console.log("info returns:", a, a.result.rsp_data);
                    return Promise.resolve(a.result.rsp_data);
                }
            }
            else {
                throw new Error("Info接口返回数据错误 " + cmd);
            }
        }).catch(function (e) {
            delete e.cmd;
            if (typeof option.onError === "function") {
                option.onError(e); // app处理
            }
            if (e.bubble === true) {
                _this.onInfoError(e);
            }
            if (e.bubble === true) {
                _this.aibrowser.onError(e); // aibrowser处理
            }
            return Promise.reject(e);
        });
        // });
    };
    BaseService.prototype.setDefaultTimeout = function (timeout) {
        this.timeout = timeout;
    };
    BaseService.prototype.bindMessageCallbacks = function (opt, uuid) {
        var _this = this;
        if (opt.msgBinds) {
            opt.msgBinds.forEach(function (value, key) {
                var token = uuid + "_" + key; ///
                _this.addListener(token, value);
            });
        }
        if (opt.onceMsgBinds) {
            opt.onceMsgBinds.forEach(function (value, key) {
                var token = uuid + "_" + key; ///
                _this.addOnceListener(token, value);
            });
        }
    };
    BaseService.prototype.unbindMessageCallbacks = function (opt, uuid) {
        var _this = this;
        if (opt.msgBinds) {
            opt.msgBinds.forEach(function (listener, key) {
                var token = uuid + "_" + key; ///
                _this.removeListener(token, listener);
            });
        }
    };
    return BaseService;
}());



/***/ }),

/***/ "./src/frame/ExecuteOption.ts":
/*!************************************!*\
  !*** ./src/frame/ExecuteOption.ts ***!
  \************************************/
/*! exports provided: ExecuteOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecuteOption", function() { return ExecuteOption; });
var ExecuteOption = /** @class */ (function () {
    function ExecuteOption() {
        this.msgBinds = new Map();
        this.onceMsgBinds = new Map();
    }
    ExecuteOption.prototype.addListener = function (msg, listener) {
        this.msgBinds.set(msg, listener);
    };
    ExecuteOption.prototype.addOnceListener = function (msg, listener) {
        this.onceMsgBinds.set(msg, listener);
    };
    return ExecuteOption;
}());



/***/ }),

/***/ "./src/frame/NativeBridge.ts":
/*!***********************************!*\
  !*** ./src/frame/NativeBridge.ts ***!
  \***********************************/
/*! exports provided: NativeBridge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeBridge", function() { return NativeBridge; });
/* harmony import */ var _helper_device_AudioDeviceManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/device/AudioDeviceManager */ "./src/helper/device/AudioDeviceManager.ts");
/* harmony import */ var _helper_file_FileManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/file/FileManager */ "./src/helper/file/FileManager.ts");
/* harmony import */ var _helper_log_Log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/log/Log */ "./src/helper/log/Log.ts");
/* harmony import */ var _helper_message_Messager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/message/Messager */ "./src/helper/message/Messager.ts");
/* harmony import */ var _services_LocalFileService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/LocalFileService */ "./src/services/LocalFileService.ts");
/* harmony import */ var _ServiceLocator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ServiceLocator */ "./src/frame/ServiceLocator.ts");
/* harmony import */ var _meta_CodeInterpretor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../meta/CodeInterpretor */ "./src/meta/CodeInterpretor.ts");







var NativeBridge = /** @class */ (function () {
    function NativeBridge(aibrowser) {
        ///////// 服务启动完成的回调
        this.serviceReadyCallbacks = [];
        this.aibrowser = aibrowser;
        this.serviceLocator = new _ServiceLocator__WEBPACK_IMPORTED_MODULE_5__["ServiceLocator"](this.aibrowser, this);
        this.codeInterpreter = new _meta_CodeInterpretor__WEBPACK_IMPORTED_MODULE_6__["CodeInterpreter"]();
        this.catchUnhandledError();
    }
    NativeBridge.prototype.catchUnhandledError = function () {
        window.onerror = function (event, source, lineno, colno, error) {
            var errInfo = "uncaught error: " + event + " \n  url: " + source + ":" + lineno + ":" + colno;
            console.error(errInfo);
        };
        window.onunhandledrejection = function (ev) {
            if (ev && ev.reason) {
                var errorInfo = "uncaught Promise error: " + ev.reason.message + "\n stack:" + ev.reason.stack;
                console.error(errorInfo);
            }
            else {
                console.error("uncaught Promise error: " + JSON.stringify(ev));
            }
        };
    };
    NativeBridge.prototype.init = function () {
        return this.aibrowser.init();
    };
    NativeBridge.prototype.release = function () {
        var _this = this;
        var promiseArray = [];
        this.serviceLocator.runningServices.forEach(function (service, key, map) {
            promiseArray.push(service.close().then(function (e) { _helper_log_Log__WEBPACK_IMPORTED_MODULE_2__["Log"].log(key, "服务关闭"); }).catch(function (e) { _helper_log_Log__WEBPACK_IMPORTED_MODULE_2__["Log"].warn(service.serviceName, "服务关闭失败", e); }));
        });
        this.fileManager.release();
        this.clearServiceReadyCallbacks();
        return Promise.all(promiseArray).then(function () {
            _helper_log_Log__WEBPACK_IMPORTED_MODULE_2__["Log"].log("释放完成");
            _this.serviceLocator.runningServices.clear();
            _this.aibrowser.release();
        }).catch(function (reason) {
            console.error(reason);
        });
    };
    /**
     * 启动servicelist中包含的服务
     * @param servicelist 要启动的服务列表
     */
    NativeBridge.prototype.start = function (servicelist) {
        var _this = this;
        servicelist = servicelist || this.serviceLocator.getAllServiceNames();
        var promiseArray = [];
        servicelist.forEach(function (servicename, index, array) {
            var service = _this.getServiceByName(servicename);
            var meta = _this.serviceLocator.getMetaInfo(servicename);
            if (meta.waitForOpen) {
                promiseArray.push(_this.openService(service, servicename));
            }
            else {
                _this.openService(service, servicename);
            }
        });
        return new Promise(function (resolve, reject) {
            Promise.all(promiseArray).then(function (a) {
                _helper_log_Log__WEBPACK_IMPORTED_MODULE_2__["Log"].log("初始化完成");
                _this.fileManager = new _helper_file_FileManager__WEBPACK_IMPORTED_MODULE_1__["PXFileManager"](_this.getService(_services_LocalFileService__WEBPACK_IMPORTED_MODULE_4__["LocalFileService"]));
                _this.audioDeviceManager = new _helper_device_AudioDeviceManager__WEBPACK_IMPORTED_MODULE_0__["AudioDeviceManager"]();
                _this.messager = new _helper_message_Messager__WEBPACK_IMPORTED_MODULE_3__["Messager"](_this);
                resolve();
            }).catch(function (a) {
                _helper_log_Log__WEBPACK_IMPORTED_MODULE_2__["Log"].warn("初始化失败", a);
                reject(a);
            });
        });
    };
    /**
     * 停止servicelist中包含的服务
     * @param servicelist 要启动的服务列表
     */
    NativeBridge.prototype.stop = function (servicelist) {
        var _this = this;
        servicelist = servicelist || this.serviceLocator.getAllServiceNames();
        var promiseArray = [];
        servicelist.forEach(function (servicename, index, array) {
            var service = _this.getServiceByName(servicename);
            promiseArray.push(_this.stopService(service, servicename));
        });
        return new Promise(function (resolve, reject) {
            Promise.all(promiseArray).then(function (a) {
                _helper_log_Log__WEBPACK_IMPORTED_MODULE_2__["Log"].log("关闭完成");
                resolve();
            }).catch(function (a) {
                _helper_log_Log__WEBPACK_IMPORTED_MODULE_2__["Log"].warn("关闭失败", a);
                reject(a);
            });
        });
    };
    NativeBridge.prototype.openService = function (service, servicename) {
        var _this = this;
        return service.open().then(function (responce) {
            _helper_log_Log__WEBPACK_IMPORTED_MODULE_2__["Log"].log(servicename, "打开成功", responce, Date.now());
            _this.emitServiceReadyEvents(servicename);
        }).catch(function (responce) {
            // todo: 失败处理
            _helper_log_Log__WEBPACK_IMPORTED_MODULE_2__["Log"].log(servicename, "打开失败", responce);
        });
    };
    ///////// 服务停止完成的回调
    NativeBridge.prototype.stopService = function (service, servicename) {
        var _this = this;
        return service.close().then(function (responce) {
            _helper_log_Log__WEBPACK_IMPORTED_MODULE_2__["Log"].log(servicename, "关闭成功", responce, Date.now());
            _this.emitServiceReadyEvents(servicename);
        }).catch(function (responce) {
            // todo: 失败处理
            _helper_log_Log__WEBPACK_IMPORTED_MODULE_2__["Log"].log(servicename, "关闭失败", responce);
        });
    };
    /**
     * 注册服务Ready的回调
     * @param callback (servicename: string) => void
     */
    NativeBridge.prototype.addServiceReadyCallback = function (callback) {
        this.serviceReadyCallbacks.push(callback);
    };
    /**
     * 销毁服务Ready的回调
     * @param callback (servicename: string) => void
     */
    NativeBridge.prototype.removeServiceReadyCallback = function (callback) {
        var index = this.serviceReadyCallbacks.indexOf(callback);
        if (index >= 0) {
            this.serviceReadyCallbacks.splice(index, 1);
        }
    };
    /**
     * 清空服务Ready的回调
     */
    NativeBridge.prototype.clearServiceReadyCallbacks = function () {
        this.serviceReadyCallbacks.length = 0;
    };
    /**
     * 触发服务启动成功的回调
     * @param servicename 服务名称
     */
    NativeBridge.prototype.emitServiceReadyEvents = function (servicename) {
        this.serviceReadyCallbacks.forEach(function (cb) {
            cb(servicename);
        });
    };
    /////////
    // public get commandQueue(): PromiseCommandQueue {
    //     return BaseService.commandQueue;
    // }
    NativeBridge.prototype.getService = function (classType) {
        return this.serviceLocator.getServiceByClass(classType);
    };
    NativeBridge.prototype.getServiceByName = function (name) {
        return this.serviceLocator.getServiceByName(name);
    };
    NativeBridge.prototype.getServiceByPrefix = function (prefix) {
        return this.serviceLocator.getServiceByPrefix(prefix);
    };
    /**
     * 添加服务消息回调
     * @param msg 服务消息的消息数
     * @param listener 回调
     */
    NativeBridge.prototype.addServiceMessageCallback = function (msg, listener) {
        var prefix = Math.floor(msg / 1000);
        this.getServiceByPrefix(prefix).addListener(msg, listener);
    };
    /**
     * 删除服务消息回调
     * @param msg 服务消息的消息数
     * @param listener 回调
     */
    NativeBridge.prototype.removeServiceMessageCallback = function (msg, listener) {
        var prefix = Math.floor(msg / 1000);
        this.getServiceByPrefix(prefix).removeListener(msg, listener);
    };
    NativeBridge.prototype.attachMessageObserver = function (callback, context) {
        if (context === void 0) { context = null; }
        this.messager.attachMessageObserver(callback, context);
    };
    NativeBridge.prototype.detachMessageObserver = function (callback, context) {
        if (context === void 0) { context = null; }
        this.messager.detachMessageObserver(callback, context);
    };
    NativeBridge.prototype.sendMessage = function (msg) {
        this.messager.emitServiceMessage(msg);
    };
    /**
     * 触发服务消息回调 服务消息是服务主动推送的消息
     * @param message 消息
     */
    NativeBridge.prototype.emitServiceMessage = function (message) {
        this.messager.emitServiceMessage(message);
    };
    NativeBridge.prototype.collectObjectProperties = function (obj) {
        var detail = {};
        var errProps = this.getAllProperties(obj);
        console.log(errProps);
        errProps.forEach(function (prop) {
            if (typeof obj[prop] === "function" || prop.startsWith("_")) {
                return;
            }
            detail[prop] = obj[prop];
        });
        return detail;
    };
    NativeBridge.prototype.getAllProperties = function (obj) {
        var allProps = [];
        var curr = obj;
        while (curr) {
            var props = Object.getOwnPropertyNames(curr);
            props.forEach(function (prop) {
                if (allProps.indexOf(prop) === -1) {
                    allProps.push(prop);
                }
            });
            curr = Object.getPrototypeOf(curr);
        }
        return allProps;
    };
    return NativeBridge;
}());



/***/ }),

/***/ "./src/frame/ServiceLocator.ts":
/*!*************************************!*\
  !*** ./src/frame/ServiceLocator.ts ***!
  \*************************************/
/*! exports provided: ServiceLocator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceLocator", function() { return ServiceLocator; });
/* harmony import */ var _services_CameraService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/CameraService */ "./src/services/CameraService.ts");
/* harmony import */ var _services_AIService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/AIService */ "./src/services/AIService.ts");
/* harmony import */ var _services_ServiceManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ServiceManager */ "./src/services/ServiceManager.ts");
/* harmony import */ var _services_AnswerToolService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/AnswerToolService */ "./src/services/AnswerToolService.ts");
/* harmony import */ var _services_LocalFileService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/LocalFileService */ "./src/services/LocalFileService.ts");
/* harmony import */ var _services_PlayerService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/PlayerService */ "./src/services/PlayerService.ts");
/* harmony import */ var _services_UnityService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/UnityService */ "./src/services/UnityService.ts");
/* harmony import */ var _services_SystemService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/SystemService */ "./src/services/SystemService.ts");
/* harmony import */ var _services_PXVideoProcessorService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/PXVideoProcessorService */ "./src/services/PXVideoProcessorService.ts");
/* harmony import */ var _services_VideoCaptureService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/VideoCaptureService */ "./src/services/VideoCaptureService.ts");










var ServiceLocator = /** @class */ (function () {
    function ServiceLocator(aibrowser, bridge) {
        var _this = this;
        this.serviceMetaList = [
            {
                name: "Camera",
                prefix: 3,
                class: _services_CameraService__WEBPACK_IMPORTED_MODULE_0__["CameraService"],
                waitForOpen: true,
                timeout: 10000,
            },
            {
                name: "AIService",
                prefix: 1,
                class: _services_AIService__WEBPACK_IMPORTED_MODULE_1__["AIService"],
                waitForOpen: false,
                timeout: 50000,
            },
            {
                name: "ServiceManager",
                prefix: 20,
                class: _services_ServiceManager__WEBPACK_IMPORTED_MODULE_2__["ServiceManager"],
                waitForOpen: true,
                timeout: 10000,
            },
            {
                name: "PxAnswerService",
                prefix: 4,
                class: _services_AnswerToolService__WEBPACK_IMPORTED_MODULE_3__["AnswerToolService"],
                waitForOpen: false,
                timeout: 20000,
            },
            {
                name: "LocalFileService",
                prefix: 5,
                class: _services_LocalFileService__WEBPACK_IMPORTED_MODULE_4__["LocalFileService"],
                waitForOpen: true,
                timeout: 10000,
            },
            {
                name: "PlayerService",
                prefix: 2,
                class: _services_PlayerService__WEBPACK_IMPORTED_MODULE_5__["PlayerService"],
                waitForOpen: true,
                timeout: 10000,
            },
            {
                name: "Unity",
                prefix: 30,
                class: _services_UnityService__WEBPACK_IMPORTED_MODULE_6__["UnityService"],
                waitForOpen: true,
                timeout: 10000,
            },
            {
                name: "Sys",
                prefix: 6,
                class: _services_SystemService__WEBPACK_IMPORTED_MODULE_7__["SystemService"],
                waitForOpen: true,
                timeout: 10000,
            },
            {
                name: "PxVideoProcessor",
                prefix: 7,
                class: _services_PXVideoProcessorService__WEBPACK_IMPORTED_MODULE_8__["PXVideoProcessorService"],
                waitForOpen: false,
                timeout: 20000,
            },
            {
                name: "videocapture",
                prefix: 8,
                class: _services_VideoCaptureService__WEBPACK_IMPORTED_MODULE_9__["VideoCaptureService"],
                waitForOpen: false,
                timeout: 20000,
            },
        ];
        this.namedMap = new Map();
        this.prefix2NameMap = new Map();
        this.class2NameMap = new Map();
        this.runningServices = new Map();
        this.aibrowser = aibrowser;
        this.bridge = bridge;
        this.serviceMetaList.forEach(function (meta) {
            _this.namedMap.set(meta.name, meta);
            _this.prefix2NameMap.set(meta.prefix, meta.name);
            _this.class2NameMap.set(meta.class, meta.name);
        });
    }
    ServiceLocator.prototype.getServiceByName = function (name) {
        var service = this.runningServices.get(name);
        if (service === undefined) {
            var meta = this.namedMap.get(name);
            if (meta === undefined) {
                throw new Error(name + " \u670D\u52A1 \u4E0D\u5B58\u5728!");
            }
            service = new meta.class(this.aibrowser, this.bridge);
            service.setDefaultTimeout(meta.timeout);
            this.runningServices.set(name, service);
        }
        return service;
    };
    ServiceLocator.prototype.getServiceByPrefix = function (prefix) {
        var name = this.prefix2NameMap.get(prefix);
        if (name === undefined) {
            throw new Error("\u524D\u7F00\u4E3A" + prefix + " \u7684\u670D\u52A1\u4E0D\u5B58\u5728!");
        }
        return this.getServiceByName(name);
    };
    ServiceLocator.prototype.getServiceByClass = function (classType) {
        var name = this.class2NameMap.get(classType);
        if (name === undefined) {
            throw new Error(classType + " \u4E0D\u5B58\u5728!");
        }
        return this.getServiceByName(name);
    };
    ServiceLocator.prototype.getAllServiceNames = function () {
        var list = [];
        this.serviceMetaList.forEach(function (meta) {
            list.push(meta.name);
        });
        return list;
    };
    /**
     * 获取名称为name的服务的meta信息
     * @param name
     */
    ServiceLocator.prototype.getMetaInfo = function (name) {
        var ret = null;
        this.serviceMetaList.forEach(function (meta) {
            if (meta.name === name) {
                ret = meta;
            }
        });
        return ret;
    };
    return ServiceLocator;
}());



/***/ }),

/***/ "./src/helper/AnswerToolBinding.ts":
/*!*****************************************!*\
  !*** ./src/helper/AnswerToolBinding.ts ***!
  \*****************************************/
/*! exports provided: AnswerToolBindings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerToolBindings", function() { return AnswerToolBindings; });
var AnswerToolBindings = /** @class */ (function () {
    function AnswerToolBindings() {
        /**
         * 缓存下来的绑定信息 返回绑定成功消息后，会根据学生id将缓存元素删除
         */
        this.bufferredStudentInfo = new Map();
        /**
         * 返回绑定成功消息后，将学生信息保存在list中
         */
        this.bindedStudentInfoList = new Map();
    }
    Object.defineProperty(AnswerToolBindings.prototype, "bufferredRequest", {
        /**
         * 缓存的绑定请求 请求已发出但还未返回成功消息
         */
        get: function () {
            return Array.from(this.bufferredStudentInfo.values());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnswerToolBindings.prototype, "bindedStudents", {
        /**
         * 绑定的学生信息
         */
        get: function () {
            return Array.from(this.bindedStudentInfoList.values());
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 添加新的绑定请求
     * @param studentsInfo
     */
    AnswerToolBindings.prototype.pushNewRequest = function (studentsInfo) {
        var _this = this;
        studentsInfo.forEach(function (stdInfo) {
            if (_this.bufferredStudentInfo.has(stdInfo.id)) {
                _this.bufferredStudentInfo.delete(stdInfo.id);
            }
            _this.bufferredStudentInfo.set(stdInfo.id, stdInfo);
        });
    };
    /**
     * 添加新的绑定成功信息
     * @param bindInfo
     */
    AnswerToolBindings.prototype.addBindedInfo = function (bindInfo) {
        if (this.bindedStudentInfoList.has(bindInfo.user_id)) {
            throw new Error("重复绑定相同的学生id" + JSON.stringify(bindInfo) + JSON.stringify(this.bindedStudentInfoList.get(bindInfo.user_id)));
        }
        this.bindedStudentInfoList.set(bindInfo.user_id, bindInfo);
        this.bufferredStudentInfo.delete(bindInfo.user_id);
    };
    /**
     * 删除绑定信息
     * @param stuId
     */
    AnswerToolBindings.prototype.removeBindInfo = function (stuId) {
        this.bindedStudentInfoList.delete(stuId);
    };
    return AnswerToolBindings;
}());



/***/ }),

/***/ "./src/helper/BufferedQuery.ts":
/*!*************************************!*\
  !*** ./src/helper/BufferedQuery.ts ***!
  \*************************************/
/*! exports provided: BufferedQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferedQuery", function() { return BufferedQuery; });
/**
 * 有些对象不一定会立即返回，BufferedQuery负责
 * 将请求的命令缓存起来，当对象准备好后再调用命令
 */
var BufferedQuery = /** @class */ (function () {
    function BufferedQuery(retrieve) {
        this.state = QueryState.NotStart;
        this.buffer = [];
        this.retrieve = retrieve;
    }
    BufferedQuery.prototype.getTarget = function () {
        return this.target;
    };
    BufferedQuery.prototype.doQuery = function (cb) {
        var _this = this;
        if (this.state === QueryState.IsReady) {
            cb();
        }
        else {
            this.buffer.push(cb);
        }
        if (this.state === QueryState.NotStart) {
            this.state = QueryState.IsRetrieving;
            this.retrieve().then(function (target) {
                _this.target = target;
                _this.state = QueryState.IsReady;
                _this.buffer.forEach(function (cb2) {
                    cb2();
                });
                _this.buffer.length = 0;
            });
        }
    };
    return BufferedQuery;
}());

/**
 * 被请求对象的状态
 */
var QueryState;
(function (QueryState) {
    QueryState[QueryState["IsReady"] = 0] = "IsReady";
    QueryState[QueryState["IsRetrieving"] = 1] = "IsRetrieving";
    QueryState[QueryState["NotStart"] = 2] = "NotStart";
})(QueryState || (QueryState = {}));


/***/ }),

/***/ "./src/helper/Flow.ts":
/*!****************************!*\
  !*** ./src/helper/Flow.ts ***!
  \****************************/
/*! exports provided: Flow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flow", function() { return Flow; });
var Flow = /** @class */ (function () {
    function Flow() {
    }
    Flow.flow = function (promiseArray) {
        var head = Promise.resolve();
        var _loop_1 = function (i) {
            head = head.then(function (e) {
                return promiseArray[i](e);
            });
        };
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < promiseArray.length; ++i) {
            _loop_1(i);
        }
        return head;
    };
    Flow.flowWithoutBreak = function (promiseArray) {
        var head = Promise.resolve();
        var _loop_2 = function (i) {
            head = head.then(function (e) {
                // return promiseArray[i](e);
                return new Promise(function (resolve) {
                    promiseArray[i]().then(function (e) {
                        resolve(e);
                    }).catch(function (reason) {
                        resolve(reason);
                    });
                });
            });
        };
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < promiseArray.length; ++i) {
            _loop_2(i);
        }
        return head;
    };
    Flow.waitForSeconds = function (seconds) {
        return new Promise(function (resolve) {
            setTimeout(function () { resolve(); }, seconds * 1000);
        });
    };
    return Flow;
}());



/***/ }),

/***/ "./src/helper/RegExpHelper.ts":
/*!************************************!*\
  !*** ./src/helper/RegExpHelper.ts ***!
  \************************************/
/*! exports provided: RegExpHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegExpHelper", function() { return RegExpHelper; });
var RegExpHelper = /** @class */ (function () {
    function RegExpHelper() {
    }
    /**
     * 解析ini文件
     * @param data
     */
    RegExpHelper.parseINIString = function (data) {
        var regex = {
            section: /^\s*\s*([^]*)\s*\]\s*$/,
            param: /^\s*([\w\.\-\_]+)\s*=\s*(.*?)\s*$/,
            comment: /\s*;.*$/,
        };
        var value = {};
        var lines = data.split(/\r\n|\r|\n/);
        var section = null;
        lines.forEach(function (line) {
            if (regex.comment.test(line)) {
                var match = line.match(regex.comment);
                if (match.index === 0) {
                    return;
                }
                else {
                    line = line.substr(0, match.index);
                }
            }
            if (regex.param.test(line)) {
                var match = line.match(regex.param);
                if (section) {
                    value[section][match[1]] = match[2];
                }
                else {
                    value[match[1]] = match[2];
                }
            }
            else if (regex.section.test(line)) {
                var match = line.match(regex.section);
                section = match[1].substr(1);
                value[section] = {};
            }
        });
        return value;
    };
    /**
     * 判断data是否是文件路径
     * @param data
     */
    RegExpHelper.isFullFilePath = function (data) {
        var filePathRegx = /^(file:\/)?\b[a-zA-Z]:(\/\w+)+.\w+/;
        return filePathRegx.test(data);
    };
    /**
     * 从data中获取全路径目录
     * @param data 格式为/D:/XXX/XXX/.../XXX.ext
     */
    RegExpHelper.getFullPathDir = function (data) {
        var dirRegx = /\b[a-zA-Z]:(\/\w+)+\//;
        return data.match(dirRegx)[0];
    };
    return RegExpHelper;
}());



/***/ }),

/***/ "./src/helper/StudentGalleryBinding.ts":
/*!*********************************************!*\
  !*** ./src/helper/StudentGalleryBinding.ts ***!
  \*********************************************/
/*! exports provided: StudentGalleryBinding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentGalleryBinding", function() { return StudentGalleryBinding; });
var StudentGalleryBinding = /** @class */ (function () {
    function StudentGalleryBinding() {
        this.bindings = [];
    }
    /**
     * 根据gid获取绑定关系
     * @param gid
     */
    StudentGalleryBinding.prototype.getBindingByGid = function (gid) {
        for (var i = 0; i < this.bindings.length; ++i) {
            if (this.bindings[i].gid === gid) {
                return this.bindings[i];
            }
        }
    };
    /**
     * 根据stuid获取绑定关系
     * @param stuid
     */
    StudentGalleryBinding.prototype.getBindingByStuId = function (stuid) {
        for (var i = 0; i < this.bindings.length; ++i) {
            if (this.bindings[i].stuId === stuid) {
                return this.bindings[i];
            }
        }
    };
    /**
     * 删除gid对应的绑定关系
     * @param gid
     */
    StudentGalleryBinding.prototype.removeBindingByGid = function (gid) {
        for (var i = this.bindings.length - 1; i >= 0; --i) {
            if (this.bindings[i].gid === gid) {
                this.bindings.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    /**
     * 删除stuId对应的绑定关系
     * @param stuid
     */
    StudentGalleryBinding.prototype.removeBindingByStuId = function (stuid) {
        for (var i = this.bindings.length - 1; i >= 0; --i) {
            if (this.bindings[i].stuId === stuid) {
                this.bindings.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    /**
     * 添加binding 该方法会先删除之前stuid或gid重复的binding
     * @param binding 新的绑定关系
     */
    StudentGalleryBinding.prototype.addBinding = function (binding) {
        this.removeBindingByGid(binding.gid);
        this.removeBindingByStuId(binding.stuId);
        this.bindings.push(binding);
    };
    /**
     * 根据stuid获取gid
     * 若不存在则返回null
     * @param stuId
     */
    StudentGalleryBinding.prototype.getGid = function (stuId) {
        var binding = this.getBindingByStuId(stuId);
        if (binding !== null) {
            return binding.gid;
        }
        return null;
    };
    return StudentGalleryBinding;
}());



/***/ }),

/***/ "./src/helper/device/AudioDeviceManager.ts":
/*!*************************************************!*\
  !*** ./src/helper/device/AudioDeviceManager.ts ***!
  \*************************************************/
/*! exports provided: AudioDeviceManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioDeviceManager", function() { return AudioDeviceManager; });
/**
 * 管理音频设备
 */
var AudioDeviceManager = /** @class */ (function () {
    function AudioDeviceManager() {
        /**
         * 扬声器列表
         */
        this.inputList = [];
        /**
         * 麦克风列表
         */
        this.outputList = [];
    }
    AudioDeviceManager.prototype.updateDevice = function (deviceInfo) {
        var changinfo = { input: false, output: false };
        if (deviceInfo.audio_input) {
            var inputChange = this.checkStringArrayChange(this.inputList, deviceInfo.audio_input_list);
            if (inputChange.add.length > 0 || inputChange.remove.length > 0) {
                console.error("audio input 有改动", inputChange);
                changinfo.input = true;
            }
            this.inputList = deviceInfo.audio_input_list;
        }
        else {
            if (this.inputList.length > 0) {
                console.error("audio input 移除", "" + this.inputList);
                changinfo.input = true;
                this.inputList.length = 0;
            }
        }
        if (deviceInfo.audio_output) {
            var outputChange = this.checkStringArrayChange(this.outputList, deviceInfo.audio_output_list);
            if (outputChange.add.length > 0 || outputChange.remove.length > 0) {
                console.error("audio output 有改动", outputChange);
                changinfo.output = true;
            }
            this.outputList = deviceInfo.audio_output_list;
        }
        else {
            if (this.outputList.length > 0) {
                console.error("audio output 移除", "" + this.outputList);
                changinfo.output = true;
                this.outputList.length = 0;
            }
        }
        return changinfo;
    };
    /**
     * 更新输出设备列表
     * @param outputList 音频输出设备列表
     */
    AudioDeviceManager.prototype.setOutputList = function (outputList) {
        this.outputList = outputList;
    };
    /**
     * 更新输入设备列表
     * @param inputList 音频输入设备列表
     */
    AudioDeviceManager.prototype.setInputList = function (inputList) {
        this.inputList = inputList;
    };
    /**
     * 检测两个string数组的区别
     * @param oldArray 原始数组
     * @param newArray 新数组
     */
    AudioDeviceManager.prototype.checkStringArrayChange = function (oldArray, newArray) {
        var changeInfo = { add: [], remove: [] };
        oldArray.forEach(function (old) {
            if (newArray.indexOf(old) < 0) {
                changeInfo.remove.push(old);
            }
        });
        newArray.forEach(function (newone) {
            if (oldArray.indexOf(newone) < 0) {
                changeInfo.add.push(newone);
            }
        });
        // todo: 检测两个string数组的区别
        return changeInfo;
    };
    return AudioDeviceManager;
}());



/***/ }),

/***/ "./src/helper/file/FileManager.ts":
/*!****************************************!*\
  !*** ./src/helper/file/FileManager.ts ***!
  \****************************************/
/*! exports provided: PXFileManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PXFileManager", function() { return PXFileManager; });
/* harmony import */ var _PXFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PXFile */ "./src/helper/file/PXFile.ts");

var PXFileManager = /** @class */ (function () {
    function PXFileManager(localFileService) {
        this.localFileService = localFileService;
        this.files = new Map();
    }
    /**
     * 打开文件
     * @param path
     */
    PXFileManager.prototype.open = function (path, mode) {
        // todo: 将path转化为绝对路径
        var file = null;
        if (!this.files.has(path)) { // 不存在则创建
            file = new _PXFile__WEBPACK_IMPORTED_MODULE_0__["PXFile"](path, mode, this);
            this.files.set(path, file);
        }
        else {
            file = this.files.get(path);
        }
        // console.log("打开文件");
        return file.open(mode).then(function (e) {
            return Promise.resolve(file);
        });
    };
    /**
     * 关闭所有文件
     */
    PXFileManager.prototype.release = function () {
        this.files.forEach(function (afile) {
            afile.close();
        });
    };
    return PXFileManager;
}());



/***/ }),

/***/ "./src/helper/file/PXFile.ts":
/*!***********************************!*\
  !*** ./src/helper/file/PXFile.ts ***!
  \***********************************/
/*! exports provided: PXFile, PXFileStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PXFile", function() { return PXFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PXFileStatus", function() { return PXFileStatus; });
/* harmony import */ var _defs_LocalFileOpenMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../defs/LocalFileOpenMode */ "./src/defs/LocalFileOpenMode.ts");

/**
 * 代表一个文件对象
 * todo: 状态机来处理各种行为
 */
var PXFile = /** @class */ (function () {
    function PXFile(filePath, mode, manager) {
        this.filePath = filePath;
        this.mode = mode;
        this.manager = manager;
        this.service = null;
        this.status = PXFileStatus.Closed;
        this.error = null;
        this.openCallback = [];
        this.service = this.manager.localFileService;
    }
    /**
     * 打开文件
     * @param mode 文件打开模式
     */
    PXFile.prototype.open = function (mode) {
        var _this = this;
        if (this.status === PXFileStatus.Opened) {
            return this.close().then(function () {
                return _this.doOpen(mode);
            }).then(function () {
                return Promise.resolve(_this);
            }).catch(function () {
                return Promise.reject(_this);
            });
        }
        if (this.status === PXFileStatus.Closed) {
            return this.doOpen(mode).then(function () {
                return Promise.resolve(_this);
            }).catch(function () {
                return Promise.reject(_this);
            });
        }
        if (this.status === PXFileStatus.Opening) {
            return new Promise(function (resolve) {
                _this.addOnOpened(function () {
                    resolve(_this);
                });
            });
        }
    };
    /**
     * 关闭文件
     */
    PXFile.prototype.close = function () {
        if (this.status === PXFileStatus.Opened || this.status === PXFileStatus.Opening) {
            return this.doClose();
        }
        return Promise.resolve();
    };
    /**
     * 读文件
     */
    PXFile.prototype.read = function () {
        var _this = this;
        if (this.CanRead) {
            return this.doRead();
        }
        else {
            return this.open(_defs_LocalFileOpenMode__WEBPACK_IMPORTED_MODULE_0__["LocalFileOpenMode"].PX_LOCALFILE_OPEN_FILE_MODE_READ_ONLY).then(function () {
                return _this.doRead();
            }).catch(function (reason) {
                return Promise.reject(reason);
            });
        }
    };
    /**
     * 写文件
     * @param content
     */
    PXFile.prototype.write = function (content) {
        var _this = this;
        if (this.CanWrite) {
            return this.doWrite(content);
        }
        else {
            return this.open(this.mode).then(function () {
                return _this.doWrite(content);
            });
        }
    };
    Object.defineProperty(PXFile.prototype, "Status", {
        /**
         * 文件状态
         */
        get: function () {
            return this.status;
        },
        set: function (value) {
            this.status = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PXFile.prototype, "Mode", {
        /**
         * 文件打开的模式
         */
        get: function () {
            return this.mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PXFile.prototype, "Path", {
        /**
         * 文件路径
         */
        get: function () {
            return this.filePath;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PXFile.prototype, "CanRead", {
        /**
         * 文件可读
         */
        get: function () {
            return (this.mode === _defs_LocalFileOpenMode__WEBPACK_IMPORTED_MODULE_0__["LocalFileOpenMode"].PX_LOCALFILE_OPEN_FILE_MODE_READ_ONLY
                || this.mode === _defs_LocalFileOpenMode__WEBPACK_IMPORTED_MODULE_0__["LocalFileOpenMode"].PX_LOCALFILE_OPEN_FILE_MODE_READ_WRITE)
                && this.status === PXFileStatus.Opened;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PXFile.prototype, "CanWrite", {
        /**
         * 文件可写
         */
        get: function () {
            return (this.mode === _defs_LocalFileOpenMode__WEBPACK_IMPORTED_MODULE_0__["LocalFileOpenMode"].PX_LOCALFILE_OPEN_FILE_MODE_READ_WRITE
                || this.mode === _defs_LocalFileOpenMode__WEBPACK_IMPORTED_MODULE_0__["LocalFileOpenMode"].PX_LOCALFILE_OPEN_FILE_MODE_WRITE_ONLY)
                && this.status === PXFileStatus.Opened;
        },
        enumerable: true,
        configurable: true
    });
    PXFile.prototype.doOpen = function (mode) {
        var _this = this;
        this.status = PXFileStatus.Opening;
        this.mode = mode;
        // console.warn("打开文件", this);
        return this.service.px_cmd_localfile_open({ path: this.filePath, mode: mode }).then(function () {
            _this.status = PXFileStatus.Opened;
            _this.emitOpenEvent();
            return Promise.resolve(_this);
        }).catch(function (reason) {
            _this.status = PXFileStatus.Closed;
            _this.error = reason;
            return Promise.reject({ reason: reason, file: _this });
        });
    };
    PXFile.prototype.doClose = function () {
        var _this = this;
        this.status = PXFileStatus.Closed;
        // console.warn("关闭文件", this);
        return this.service.px_cmd_localfile_close({ path: this.filePath }).then(function () {
            return Promise.resolve();
        }).catch(function (reason) {
            _this.error = reason;
        });
    };
    PXFile.prototype.doRead = function () {
        var _this = this;
        return this.service.px_cmd_localfile_read({ path: this.filePath }).then(function (e) {
            return Promise.resolve(e.result.rsp_data);
        }).catch(function (reason) {
            _this.error = reason;
        });
    };
    PXFile.prototype.doWrite = function (content) {
        var _this = this;
        console.log("写入文件", content);
        return this.service.px_cmd_localfile_write({ path: this.filePath, content: content }).catch(function (reason) {
            _this.error = reason;
        });
    };
    /**
     * 添加文件打开时的回调
     * @param cb 回调
     */
    PXFile.prototype.addOnOpened = function (cb) {
        this.openCallback.push(cb);
    };
    /**
     * 触发打开文件事件
     */
    PXFile.prototype.emitOpenEvent = function () {
        this.openCallback.forEach(function (cb) {
            cb();
        });
        this.openCallback.length = 0;
    };
    return PXFile;
}());

var PXFileStatus;
(function (PXFileStatus) {
    PXFileStatus[PXFileStatus["Closed"] = 0] = "Closed";
    PXFileStatus[PXFileStatus["Opening"] = 1] = "Opening";
    PXFileStatus[PXFileStatus["Opened"] = 2] = "Opened";
})(PXFileStatus || (PXFileStatus = {}));


/***/ }),

/***/ "./src/helper/file/Path.ts":
/*!*********************************!*\
  !*** ./src/helper/file/Path.ts ***!
  \*********************************/
/*! exports provided: Path */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return Path; });
var Path = /** @class */ (function () {
    function Path() {
    }
    /**
     * 给定文件路径 返回文件名
     * @param filePath
     */
    Path.getFileName = function (filePath, withoutExt) {
        if (withoutExt === void 0) { withoutExt = false; }
        filePath = filePath.replace("\\", "/");
        filePath = filePath.replace("//", "/");
        var index = filePath.lastIndexOf("/");
        if (index < 0) {
            index = 0;
        }
        else {
            index += 1;
        }
        var fileName = filePath.substr(index);
        if (withoutExt) {
            // 去掉扩展后缀
            fileName = fileName.substr(0, fileName.indexOf("."));
        }
        return fileName;
    };
    /**
     * 给定文件路径 返回文件所在目录
     * @param filePath
     */
    Path.getDirPath = function (filePath) {
        filePath = filePath.replace("\\", "/");
        filePath = filePath.replace("//", "/");
        var index = filePath.lastIndexOf("/");
        if (index < 0) {
            index = 0;
        }
        else {
            index += 1;
        }
        var dirPath = filePath.substr(0, index);
        return dirPath;
    };
    return Path;
}());



/***/ }),

/***/ "./src/helper/log/Log.ts":
/*!*******************************!*\
  !*** ./src/helper/log/Log.ts ***!
  \*******************************/
/*! exports provided: Log */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return Log; });
var Log = /** @class */ (function () {
    function Log() {
    }
    Log.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log.apply(console, args);
        this.setLabel.apply(this, args);
    };
    Log.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.warn.apply(console, args);
        this.setLabel.apply(this, args);
    };
    Log.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.error.apply(console, args);
        this.setLabel.apply(this, args);
    };
    Log.setLabel = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.hasLabel === false) {
            return false;
        }
        if (this.consoleLabel === null) {
            this.consoleLabel = document.getElementById("consoleLabel");
        }
        if (this.consoleLabel === null || this.consoleLabel === undefined) {
            this.hasLabel = false;
            return false;
        }
        try {
            this.consoleLabel.innerText += "\n" + JSON.stringify(args);
        }
        catch (reason) {
            // console.log(args);
        }
        return true;
    };
    Log.consoleLabel = null;
    Log.hasLabel = true;
    return Log;
}());



/***/ }),

/***/ "./src/helper/math/Vector2.ts":
/*!************************************!*\
  !*** ./src/helper/math/Vector2.ts ***!
  \************************************/
/*! exports provided: Vector2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector2", function() { return Vector2; });
var Vector2 = /** @class */ (function () {
    function Vector2(x, y) {
        this.x = x;
        this.y = y;
    }
    Vector2.toArray = function (vectors) {
        var arr = [];
        vectors.forEach(function (vec) {
            arr.push(vec.x);
            arr.push(vec.y);
        });
        return arr;
    };
    Vector2.fromArray = function (arr) {
        var vectors = [];
        var p = 0;
        var count = arr.length / 2;
        for (var i = 0; i < count; ++i) {
            vectors.push(new Vector2(arr[p++], arr[p++]));
        }
        return vectors;
    };
    return Vector2;
}());



/***/ }),

/***/ "./src/helper/math/Vector3.ts":
/*!************************************!*\
  !*** ./src/helper/math/Vector3.ts ***!
  \************************************/
/*! exports provided: Vector3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector3", function() { return Vector3; });
var Vector3 = /** @class */ (function () {
    function Vector3(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Vector3.toArray = function (vectors) {
        var arr = [];
        vectors.forEach(function (vec) {
            arr.push(vec.x);
            arr.push(vec.y);
            arr.push(vec.z);
        });
        return arr;
    };
    Vector3.fromArray = function (arr) {
        var vectors = [];
        var p = 0;
        var count = arr.length / 3;
        for (var i = 0; i < count; ++i) {
            vectors.push(new Vector3(arr[p++], arr[p++], arr[p++]));
        }
        return vectors;
    };
    return Vector3;
}());



/***/ }),

/***/ "./src/helper/message/CLIENT_MESSAGE.ts":
/*!**********************************************!*\
  !*** ./src/helper/message/CLIENT_MESSAGE.ts ***!
  \**********************************************/
/*! exports provided: CLIENT_MESSAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIENT_MESSAGE", function() { return CLIENT_MESSAGE; });
var CLIENT_MESSAGE;
(function (CLIENT_MESSAGE) {
    // 视频结束
    CLIENT_MESSAGE["CURRENT_COURSE_END"] = "currentCourseEnd";
    // 视频中断
    CLIENT_MESSAGE["CURRENT_COURSE_INTERRUPT"] = "currentCourseInterrupt";
    // 更新时间轴
    CLIENT_MESSAGE["TIME_UPDATE"] = "timeUpdate";
    // 网络状态变更
    CLIENT_MESSAGE["NET_STATE_CHANAGED"] = "netStateChanged";
    // 主动点击下课
    CLIENT_MESSAGE["ACTIVE_END_LESSON"] = "client_lesson_off";
    // 音量
    CLIENT_MESSAGE["VOLUME_EVENT"] = "volume";
    // 举手信息
    CLIENT_MESSAGE["HAND_EVENT"] = "handup";
    // 学生头像追踪
    CLIENT_MESSAGE["STUDENT_IMAGE"] = "studentImage";
    // 每个学生按答题器的信息返回 学生Id  学生选择答案
    CLIENT_MESSAGE["CHOSE_MACHINE_STUDENT"] = "stuChangeChoice";
    // 按G键
    CLIENT_MESSAGE["GRAB_RED_PACKET"] = "onGClicked";
    // 语音评测-汇总
    CLIENT_MESSAGE["VIOCE_EVAL_RESULT_TOTAL"] = "voiceEvalResultTotal";
    // 衣服和桌位
    CLIENT_MESSAGE["COLORANDROW"] = "color_and_row";
    // 答题器绑定消息
    CLIENT_MESSAGE["ANSWER_TOOL_BIND_STATE"] = "bindStates";
    // 答题器USB插拔消息
    CLIENT_MESSAGE["ANSWER_TOOL_USB_CHANGE"] = "answerUsb";
    // 答题器初始化消息
    CLIENT_MESSAGE["ANSWER_TOOL_INIT"] = "answerInit";
    // 摄像头插拔消息
    CLIENT_MESSAGE["CAMERA_CHANGE"] = "CameraChanged";
    // 麦克风插拔消息
    CLIENT_MESSAGE["MICROPHONE_CHANGE"] = "MicroPhoneChanged";
    // 扬声器插拔消息
    CLIENT_MESSAGE["SPEAKER_CHANGE"] = "SpeakerChanged";
    // 与host的连接有变化
    /**
     * {
     *  "host": "www.baidu.com",
     *  "status": true //true表示连通，false表示断开
     * }
     */
    CLIENT_MESSAGE["HOST_CONNECTION_CHANGE"] = "HostConnectionChanged";
})(CLIENT_MESSAGE || (CLIENT_MESSAGE = {}));


/***/ }),

/***/ "./src/helper/message/Messager.ts":
/*!****************************************!*\
  !*** ./src/helper/message/Messager.ts ***!
  \****************************************/
/*! exports provided: Messager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Messager", function() { return Messager; });
/* harmony import */ var _defs_Playerdefs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../defs/Playerdefs */ "./src/defs/Playerdefs.ts");
/* harmony import */ var _defs_AnswerTooldefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../defs/AnswerTooldefs */ "./src/defs/AnswerTooldefs.ts");
/* harmony import */ var _defs_Cameradefs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../defs/Cameradefs */ "./src/defs/Cameradefs.ts");
/* harmony import */ var _defs_Systemdefs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../defs/Systemdefs */ "./src/defs/Systemdefs.ts");
/* harmony import */ var _CLIENT_MESSAGE__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CLIENT_MESSAGE */ "./src/helper/message/CLIENT_MESSAGE.ts");





/**
 * 发送消息
 */
var Messager = /** @class */ (function () {
    function Messager(bridge) {
        this.bridge = bridge;
        this.callbacks = [];
        this.inited = false;
    }
    /**
     * 添加消息回调
     * 回调的参数为 {message: {cmd: string, [key: string]:any}}
     * @param callback
     * @param context
     */
    Messager.prototype.attachMessageObserver = function (callback, context) {
        var _this = this;
        if (context === void 0) { context = null; }
        // todo: 向bridge注册回调的过程与该方法分离出来，显式调用一次
        if (this.inited === false) { // 第一次时注册aibrowser的消息 之前用回调列表长度来判断，如果将所有的回调detach了，会导致aibrowser的messageCallback注册两次这一回调
            this.inited = true;
            this.bridge.addServiceMessageCallback(_defs_Playerdefs__WEBPACK_IMPORTED_MODULE_0__["PlayerMessage"].PX_MSG_PLAYER_TIMEUPDATE, {
                handler: function (msg, eventInfo, type, requestid) {
                    var message = {
                        cmd: _CLIENT_MESSAGE__WEBPACK_IMPORTED_MODULE_4__["CLIENT_MESSAGE"].TIME_UPDATE,
                        videoTime: eventInfo.currentTime,
                        key: eventInfo.key,
                        pause: false,
                    };
                    _this.emitServiceMessage(message);
                },
            });
            this.bridge.addServiceMessageCallback(_defs_Playerdefs__WEBPACK_IMPORTED_MODULE_0__["PlayerMessage"].PX_MSG_PLAYER_STOP, {
                handler: function (msg, eventInfo, type, requestId) {
                    var message = {
                        cmd: _CLIENT_MESSAGE__WEBPACK_IMPORTED_MODULE_4__["CLIENT_MESSAGE"].CURRENT_COURSE_END,
                        videoTime: eventInfo.currentTime,
                        key: eventInfo.key,
                        pause: false,
                    };
                    _this.emitServiceMessage(message);
                },
                context: this,
            });
            this.bridge.addServiceMessageCallback(_defs_Playerdefs__WEBPACK_IMPORTED_MODULE_0__["PlayerMessage"].PX_MSG_PLAYER_INTERRUPT, {
                handler: function (msg, eventInfo, type, requestId) {
                    var message = {
                        cmd: _CLIENT_MESSAGE__WEBPACK_IMPORTED_MODULE_4__["CLIENT_MESSAGE"].CURRENT_COURSE_INTERRUPT,
                        key: eventInfo.key,
                    };
                    _this.emitServiceMessage(message);
                },
                context: this,
            });
            this.bridge.addServiceMessageCallback(_defs_AnswerTooldefs__WEBPACK_IMPORTED_MODULE_1__["AnswerToolMessage"].PX_MSG_ANSWER_BIND, {
                handler: function (msg, eventInfo, type, requestId) {
                    var message = {
                        cmd: _CLIENT_MESSAGE__WEBPACK_IMPORTED_MODULE_4__["CLIENT_MESSAGE"].ANSWER_TOOL_BIND_STATE,
                        deviceId: eventInfo.device_id,
                        studentId: eventInfo.user_id,
                        action: 1,
                    };
                    _this.emitServiceMessage(message);
                },
                context: this,
            });
            this.bridge.addServiceMessageCallback(_defs_AnswerTooldefs__WEBPACK_IMPORTED_MODULE_1__["AnswerToolMessage"].PX_MSG_ANSWER_INSERT, {
                handler: function (msg, eventInfo, type, requestId) {
                    var message = {
                        cmd: _CLIENT_MESSAGE__WEBPACK_IMPORTED_MODULE_4__["CLIENT_MESSAGE"].ANSWER_TOOL_BIND_STATE,
                        deviceId: eventInfo.device_id,
                        studentId: 0,
                        action: 0,
                    };
                    _this.emitServiceMessage(message);
                },
                context: this,
            });
            this.bridge.addServiceMessageCallback(_defs_AnswerTooldefs__WEBPACK_IMPORTED_MODULE_1__["AnswerToolMessage"].PX_MSG_ANSWER_USB, {
                handler: function (msg, eventInfo, type, requestId) {
                    var status = 0; // 0:插入电源 1:电源拔出
                    if (eventInfo === "insert") {
                        status = 0;
                    }
                    else if (eventInfo === "pull") {
                        status = 1;
                    }
                    else {
                        throw new Error("答题器USB插拔消息格式不对: \n" + JSON.stringify(eventInfo));
                    }
                    var message = {
                        cmd: _CLIENT_MESSAGE__WEBPACK_IMPORTED_MODULE_4__["CLIENT_MESSAGE"].ANSWER_TOOL_USB_CHANGE,
                        status: status,
                    };
                    _this.emitServiceMessage(message);
                },
                context: this,
            });
            this.bridge.addServiceMessageCallback(_defs_AnswerTooldefs__WEBPACK_IMPORTED_MODULE_1__["AnswerToolMessage"].PX_MSG_ANSWER_INIT, {
                handler: function (msg, eventInfo, type, requestId) {
                    var message = {
                        cmd: _CLIENT_MESSAGE__WEBPACK_IMPORTED_MODULE_4__["CLIENT_MESSAGE"].ANSWER_TOOL_INIT,
                        init: eventInfo.init,
                        reason: eventInfo.reason,
                        answertype: eventInfo.answertype,
                    };
                    _this.emitServiceMessage(message);
                },
                context: this,
            });
            this.bridge.addServiceMessageCallback(_defs_Cameradefs__WEBPACK_IMPORTED_MODULE_2__["CameraMessage"].PX_MSG_CAMERA_STATUSCHANGED, {
                handler: function (msg, eventInfo, type, requestId) {
                    // todo: 通知cameraChange消息
                    _this.bridge.checkCamera().then(function (res) {
                        var devices = [];
                        res.devices.forEach(function (dev) {
                            devices.push(dev);
                        });
                        var message = {
                            cmd: _CLIENT_MESSAGE__WEBPACK_IMPORTED_MODULE_4__["CLIENT_MESSAGE"].CAMERA_CHANGE,
                            devices: devices,
                        };
                        _this.emitServiceMessage(message);
                    });
                },
                context: this,
            });
            this.bridge.addServiceMessageCallback(_defs_Systemdefs__WEBPACK_IMPORTED_MODULE_3__["SystemMessage"].PX_MSG_SYS_AUDIOCHANGED, {
                handler: function (msg, eventInfo, type, requesId) {
                    var change = _this.bridge.audioDeviceManager.updateDevice(eventInfo);
                    if (change.input) {
                        _this.emitServiceMessage({ cmd: _CLIENT_MESSAGE__WEBPACK_IMPORTED_MODULE_4__["CLIENT_MESSAGE"].MICROPHONE_CHANGE });
                    }
                    if (change.output) {
                        _this.emitServiceMessage({ cmd: _CLIENT_MESSAGE__WEBPACK_IMPORTED_MODULE_4__["CLIENT_MESSAGE"].SPEAKER_CHANGE });
                    }
                },
                context: this,
            });
            this.bridge.addServiceMessageCallback(_defs_Systemdefs__WEBPACK_IMPORTED_MODULE_3__["SystemMessage"].PX_MSG_SYS_AUDIOLEVEL, {
                handler: function (msg, eventInfo, type, requestId) {
                    _this.emitServiceMessage({
                        cmd: _CLIENT_MESSAGE__WEBPACK_IMPORTED_MODULE_4__["CLIENT_MESSAGE"].VOLUME_EVENT,
                        volume: eventInfo.level,
                    });
                },
                context: this,
            });
            this.bridge.addServiceMessageCallback(_defs_Systemdefs__WEBPACK_IMPORTED_MODULE_3__["SystemMessage"].PX_MSG_SYS_HOST_STATUS_CHANGED, {
                handler: function (msg, eventInfo, type, requestId) {
                    _this.emitServiceMessage({
                        cmd: _CLIENT_MESSAGE__WEBPACK_IMPORTED_MODULE_4__["CLIENT_MESSAGE"].HOST_CONNECTION_CHANGE,
                        data: eventInfo,
                    });
                },
            });
        }
        this.callbacks.push({ callback: callback, context: context });
    };
    /**
     * 注销消息回调
     * @param callback
     * @param context
     */
    Messager.prototype.detachMessageObserver = function (callback, context) {
        if (context === void 0) { context = null; }
        for (var i = this.callbacks.length - 1; i >= 0; --i) {
            var item = this.callbacks[i];
            if (item.callback === callback) {
                if (context === item.context) {
                    this.callbacks.splice(i, 1);
                }
            }
        }
    };
    Messager.prototype.sendMessage = function (msg) {
        this.emitServiceMessage(msg);
    };
    /**
     * 触发服务消息回调 服务消息是服务主动推送的消息
     * @param message 消息
     */
    Messager.prototype.emitServiceMessage = function (message) {
        for (var i = 0, len = this.callbacks.length; i < len; ++i) {
            var item = this.callbacks[i];
            item.callback.call(item.context, { message: message });
        }
    };
    return Messager;
}());



/***/ }),

/***/ "./src/helper/queue/BaseCommand.ts":
/*!*****************************************!*\
  !*** ./src/helper/queue/BaseCommand.ts ***!
  \*****************************************/
/*! exports provided: BaseCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseCommand", function() { return BaseCommand; });
var BaseCommand = /** @class */ (function () {
    function BaseCommand(service, type, command, params, options, succeed, fail) {
        this.service = service;
        this.type = type;
        this.command = command;
        this.params = params;
        this.options = options;
        this.succeed = succeed;
        this.fail = fail;
    }
    BaseCommand.prototype.isValidCommand = function () {
        return this.type === 0 || this.type === 1;
    };
    BaseCommand.prototype.makePromise = function () {
        var promise = null;
        if (this.type === 0) {
            promise = this.service.doMakeExecutePromise(this.command, this.params, this.options);
        }
        else if (this.type === 1) {
            promise = this.service.doMakeInfoPromise(this.command, this.params, this.options);
        }
        return promise;
    };
    return BaseCommand;
}());



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MessageConsumer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessageConsumer */ "./src/MessageConsumer.ts");
/* harmony import */ var _unity_WindowMessageTransfer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unity/WindowMessageTransfer */ "./src/unity/WindowMessageTransfer.ts");
/* harmony import */ var _frame_AIBrowser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frame/AIBrowser */ "./src/frame/AIBrowser.ts");
/* harmony import */ var _Mocker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Mocker */ "./src/Mocker.ts");
/* harmony import */ var _frame_NativeBridge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./frame/NativeBridge */ "./src/frame/NativeBridge.ts");
/* harmony import */ var _ExtendedBridge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ExtendedBridge */ "./src/ExtendedBridge.ts");






window.createNativeBridge = function (callback, serviceList) {
    if (window.bridge !== undefined && window.bridge instanceof _frame_NativeBridge__WEBPACK_IMPORTED_MODULE_4__["NativeBridge"]) { // 保证只初始化一次
        callback(window.bridge);
        return;
    }
    window.messageConsumer = new _MessageConsumer__WEBPACK_IMPORTED_MODULE_0__["MessageConsumer"]();
    window.messager = new _unity_WindowMessageTransfer__WEBPACK_IMPORTED_MODULE_1__["WindowMessageTransfer"](false);
    window.gameInstance = null;
    var aibrowser = new _frame_AIBrowser__WEBPACK_IMPORTED_MODULE_2__["AIBrowser"]();
    window.bridge = new _ExtendedBridge__WEBPACK_IMPORTED_MODULE_5__["ExtendedBridge"](aibrowser);
    window.mocker = new _Mocker__WEBPACK_IMPORTED_MODULE_3__["Mocker"](aibrowser, window.bridge);
    window.bridge.init().then(function () {
        return window.bridge.start(serviceList);
    }).then(function () {
        if (typeof callback === "function") {
            callback(window.bridge);
        }
    }).catch(function (reason) {
        console.error(reason);
    });
};


/***/ }),

/***/ "./src/meta/CodeInterpretor.ts":
/*!*************************************!*\
  !*** ./src/meta/CodeInterpretor.ts ***!
  \*************************************/
/*! exports provided: CodeInterpreter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeInterpreter", function() { return CodeInterpreter; });
/* harmony import */ var _ServiceMetaData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServiceMetaData */ "./src/meta/ServiceMetaData.ts");

var CodeInterpreter = /** @class */ (function () {
    function CodeInterpreter() {
        var _this = this;
        this.exeMap = new Map();
        this.infoMap = new Map();
        this.msgMap = new Map();
        this.errorMap = new Map();
        _ServiceMetaData__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(function (serviceDef) {
            for (var item in serviceDef.messageCodeType) {
                if (isNaN(Number(item))) {
                    _this.msgMap.set(serviceDef.messageCodeType[item], item);
                }
            }
            for (var item in serviceDef.executeCommandType) {
                if (isNaN(Number(item))) {
                    _this.exeMap.set(serviceDef.executeCommandType[item], item);
                }
            }
            for (var item in serviceDef.infoCommandType) {
                if (isNaN(Number(item))) {
                    _this.infoMap.set(serviceDef.infoCommandType[item], item);
                }
            }
            for (var item in serviceDef.errorCodeType) {
                if (isNaN(Number(item))) {
                    _this.errorMap.set(serviceDef.errorCodeType[item], item);
                }
            }
        });
    }
    CodeInterpreter.prototype.getExeName = function (code) {
        return this.exeMap.get(code);
    };
    CodeInterpreter.prototype.getInfoName = function (code) {
        return this.infoMap.get(code);
    };
    CodeInterpreter.prototype.getMsgName = function (code) {
        return this.msgMap.get(code);
    };
    CodeInterpreter.prototype.getErrorName = function (code) {
        return this.errorMap.get(code);
    };
    return CodeInterpreter;
}());



/***/ }),

/***/ "./src/meta/ServiceMetaData.ts":
/*!*************************************!*\
  !*** ./src/meta/ServiceMetaData.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defs_AIdefs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defs/AIdefs */ "./src/defs/AIdefs.ts");
/* harmony import */ var _defs_AnswerTooldefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defs/AnswerTooldefs */ "./src/defs/AnswerTooldefs.ts");
/* harmony import */ var _defs_Cameradefs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defs/Cameradefs */ "./src/defs/Cameradefs.ts");
/* harmony import */ var _defs_ServiceManagerdefs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../defs/ServiceManagerdefs */ "./src/defs/ServiceManagerdefs.ts");
/* harmony import */ var _defs_Playerdefs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../defs/Playerdefs */ "./src/defs/Playerdefs.ts");
/* harmony import */ var _defs_LocalFiledefs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../defs/LocalFiledefs */ "./src/defs/LocalFiledefs.ts");
/* harmony import */ var _defs_Systemdefs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../defs/Systemdefs */ "./src/defs/Systemdefs.ts");
/* harmony import */ var _defs_VideoProcessordefs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../defs/VideoProcessordefs */ "./src/defs/VideoProcessordefs.ts");
/* harmony import */ var _defs_VideoCapturedefs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../defs/VideoCapturedefs */ "./src/defs/VideoCapturedefs.ts");









var serviceDefs = new Map();
serviceDefs.set("AIService", {
    logicalName: "AIService",
    aliasName: "AIService",
    shortName: "AI",
    defFileName: "Services/aiservice/AIServiceDef.h",
    targetDefName: "AIdefs.ts",
    errorCodeType: _defs_AIdefs__WEBPACK_IMPORTED_MODULE_0__["AIError"],
    executeCommandType: _defs_AIdefs__WEBPACK_IMPORTED_MODULE_0__["AIExecuteCommand"],
    infoCommandType: _defs_AIdefs__WEBPACK_IMPORTED_MODULE_0__["AIInfoCommand"],
    messageCodeType: _defs_AIdefs__WEBPACK_IMPORTED_MODULE_0__["AIMessage"],
    waitForOpen: false,
    timeout: 50000,
});
serviceDefs.set("PxAnswerService", {
    logicalName: "PxAnswerService",
    aliasName: "AnswerToolService",
    shortName: "AnswerTool",
    defFileName: "Services/pxanswerservice/answerservicedef.h",
    targetDefName: "AnswerTooldefs.ts",
    errorCodeType: _defs_AnswerTooldefs__WEBPACK_IMPORTED_MODULE_1__["AnswerToolError"],
    executeCommandType: _defs_AnswerTooldefs__WEBPACK_IMPORTED_MODULE_1__["AnswerToolExecuteCommand"],
    infoCommandType: _defs_AnswerTooldefs__WEBPACK_IMPORTED_MODULE_1__["AnswerToolInfoCommand"],
    messageCodeType: _defs_AnswerTooldefs__WEBPACK_IMPORTED_MODULE_1__["AnswerToolMessage"],
    waitForOpen: false,
    timeout: 20000,
});
serviceDefs.set("Camera", {
    logicalName: "Camera",
    aliasName: "CameraService",
    shortName: "Camera",
    defFileName: "Services/cameraservice/cameradef.h",
    targetDefName: "Cameradefs.ts",
    errorCodeType: _defs_Cameradefs__WEBPACK_IMPORTED_MODULE_2__["CameraError"],
    executeCommandType: _defs_Cameradefs__WEBPACK_IMPORTED_MODULE_2__["CameraExecuteCommand"],
    infoCommandType: _defs_Cameradefs__WEBPACK_IMPORTED_MODULE_2__["CameraInfoCommand"],
    messageCodeType: _defs_Cameradefs__WEBPACK_IMPORTED_MODULE_2__["CameraMessage"],
    waitForOpen: true,
    timeout: 10000,
});
serviceDefs.set("ServiceManager", {
    logicalName: "ServiceManager",
    aliasName: "ServiceManager",
    shortName: "ServiceManager",
    defFileName: "Runtime/services/servicemanager/servicemanagerdef.h",
    targetDefName: "ServiceManagerdefs.ts",
    errorCodeType: _defs_ServiceManagerdefs__WEBPACK_IMPORTED_MODULE_3__["ServiceManagerError"],
    executeCommandType: _defs_ServiceManagerdefs__WEBPACK_IMPORTED_MODULE_3__["ServiceManagerExecuteCommand"],
    infoCommandType: _defs_ServiceManagerdefs__WEBPACK_IMPORTED_MODULE_3__["ServiceManagerInfoCommand"],
    messageCodeType: _defs_ServiceManagerdefs__WEBPACK_IMPORTED_MODULE_3__["ServiceManagerMessage"],
    waitForOpen: true,
    timeout: 10000,
});
serviceDefs.set("Player", {
    logicalName: "Player",
    aliasName: "PlayerService",
    shortName: "Player",
    defFileName: "Services/playerservice/playerdef.h",
    targetDefName: "Playerdefs.ts",
    errorCodeType: _defs_Playerdefs__WEBPACK_IMPORTED_MODULE_4__["PlayerError"],
    executeCommandType: _defs_Playerdefs__WEBPACK_IMPORTED_MODULE_4__["PlayerExecuteCommand"],
    infoCommandType: _defs_Playerdefs__WEBPACK_IMPORTED_MODULE_4__["PlayerInfoCommand"],
    messageCodeType: _defs_Playerdefs__WEBPACK_IMPORTED_MODULE_4__["PlayerMessage"],
    waitForOpen: true,
    timeout: 10000,
});
serviceDefs.set("LocalFile", {
    logicalName: "LocalFile",
    aliasName: "LocalFileService",
    shortName: "LocalFile",
    defFileName: "Services/localfileservice/localfiledef.h",
    targetDefName: "LocalFiledefs.ts",
    errorCodeType: _defs_LocalFiledefs__WEBPACK_IMPORTED_MODULE_5__["LocalFileError"],
    executeCommandType: _defs_LocalFiledefs__WEBPACK_IMPORTED_MODULE_5__["LocalFileExecuteCommand"],
    infoCommandType: _defs_LocalFiledefs__WEBPACK_IMPORTED_MODULE_5__["LocalFileInfoCommand"],
    messageCodeType: _defs_LocalFiledefs__WEBPACK_IMPORTED_MODULE_5__["LocalFileMessage"],
    waitForOpen: true,
    timeout: 10000,
});
serviceDefs.set("System", {
    logicalName: "Sys",
    aliasName: "SystemService",
    shortName: "System",
    defFileName: "Services/sysservice/sysdef.h",
    targetDefName: "Systemdefs.ts",
    errorCodeType: _defs_Systemdefs__WEBPACK_IMPORTED_MODULE_6__["SystemError"],
    executeCommandType: _defs_Systemdefs__WEBPACK_IMPORTED_MODULE_6__["SystemExecuteCommand"],
    infoCommandType: _defs_Systemdefs__WEBPACK_IMPORTED_MODULE_6__["SystemInfoCommand"],
    messageCodeType: _defs_Systemdefs__WEBPACK_IMPORTED_MODULE_6__["SystemMessage"],
    waitForOpen: true,
    timeout: 10000,
});
serviceDefs.set("PxVideoProcessor", {
    logicalName: "PxVideoProcessor",
    aliasName: "PXVideoProcessorService",
    shortName: "VideoProcessor",
    defFileName: "Services/pxvideoprocessor/videoprocessdef.h",
    targetDefName: "VideoProcessordefs.ts",
    errorCodeType: _defs_VideoProcessordefs__WEBPACK_IMPORTED_MODULE_7__["VideoProcessorError"],
    executeCommandType: _defs_VideoProcessordefs__WEBPACK_IMPORTED_MODULE_7__["VideoProcessorExecuteCommand"],
    infoCommandType: _defs_VideoProcessordefs__WEBPACK_IMPORTED_MODULE_7__["VideoProcessorInfoCommand"],
    messageCodeType: _defs_VideoProcessordefs__WEBPACK_IMPORTED_MODULE_7__["VideoProcessorMessage"],
    waitForOpen: false,
    timeout: 20000,
});
serviceDefs.set("videocapture", {
    logicalName: "videocapture",
    aliasName: "VideoCaptureService",
    shortName: "VideoCapture",
    defFileName: "Services/videocapture/videocapturedef.h",
    targetDefName: "VideoCapturedefs.ts",
    errorCodeType: _defs_VideoCapturedefs__WEBPACK_IMPORTED_MODULE_8__["VideoCaptureError"],
    executeCommandType: _defs_VideoCapturedefs__WEBPACK_IMPORTED_MODULE_8__["VideoCaptureExecuteCommand"],
    infoCommandType: _defs_VideoCapturedefs__WEBPACK_IMPORTED_MODULE_8__["VideoCaptureInfoCommand"],
    messageCodeType: _defs_VideoCapturedefs__WEBPACK_IMPORTED_MODULE_8__["VideoCaptureMessage"],
    waitForOpen: false,
    timeout: 20000,
});
/* harmony default export */ __webpack_exports__["default"] = (serviceDefs);


/***/ }),

/***/ "./src/services/AIService.ts":
/*!***********************************!*\
  !*** ./src/services/AIService.ts ***!
  \***********************************/
/*! exports provided: AIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AIService", function() { return AIService; });
/* harmony import */ var _frame_BaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../frame/BaseService */ "./src/frame/BaseService.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var AIService = /** @class */ (function (_super) {
    __extends(AIService, _super);
    function AIService(aibrowser, bridge) {
        var _this = _super.call(this, aibrowser, bridge) || this;
        _this.serviceName = "AIService";
        return _this;
    }
    AIService.prototype.px_inf_ai_status = function (param, option) {
        var cmd = 1001;
        return this.makeInfoPromise(cmd, param, option);
    };
    AIService.prototype.px_cmd_ai_run_ai_services = function (param, option) {
        var cmd = 1001;
        return this.makeExecutePromise(cmd, param, option);
    };
    AIService.prototype.px_cmd_ai_run_ai_services_reset = function (param, option) {
        var cmd = 1002;
        return this.makeExecutePromise(cmd, param, option);
    };
    AIService.prototype.px_cmd_ai_config_data = function (param, option) {
        var cmd = 1003;
        return this.makeExecutePromise(cmd, param, option);
    };
    AIService.prototype.px_cmd_ai_set_class_state = function (param, option) {
        var cmd = 1010;
        return this.makeExecutePromise(cmd, param, option);
    };
    AIService.prototype.px_cmd_ai_set_class_info = function (param, option) {
        var cmd = 1011;
        return this.makeExecutePromise(cmd, param, option);
    };
    AIService.prototype.px_cmd_ai_external_gallery = function (param, option) {
        var cmd = 1020;
        return this.makeExecutePromise(cmd, param, option);
    };
    AIService.prototype.px_cmd_ai_fetch_gallery = function (param, option) {
        var cmd = 1021;
        return this.makeExecutePromise(cmd, param, option);
    };
    AIService.prototype.px_cmd_ai_regist_gallery = function (param, option) {
        var cmd = 1022;
        return this.makeExecutePromise(cmd, param, option);
    };
    AIService.prototype.px_cmd_ai_update_gallery = function (param, option) {
        var cmd = 1023;
        return this.makeExecutePromise(cmd, param, option);
    };
    AIService.prototype.px_cmd_ai_update_stuid = function (param, option) {
        var cmd = 1024;
        return this.makeExecutePromise(cmd, param, option);
    };
    AIService.prototype.px_cmd_ai_delete_gallery = function (param, option) {
        var cmd = 1025;
        return this.makeExecutePromise(cmd, param, option);
    };
    AIService.prototype.px_cmd_ai_delete_all_galleries = function (param, option) {
        var cmd = 1026;
        return this.makeExecutePromise(cmd, param, option);
    };
    AIService.prototype.px_cmd_ai_start_handup = function (param, option) {
        var cmd = 1030;
        return this.makeExecutePromise(cmd, param, option);
    };
    AIService.prototype.px_cmd_ai_stop_handup = function (param, option) {
        var cmd = 1031;
        return this.makeExecutePromise(cmd, param, option);
    };
    AIService.prototype.px_cmd_ai_start_concerntration = function (param, option) {
        var cmd = 1032;
        return this.makeExecutePromise(cmd, param, option);
    };
    AIService.prototype.px_cmd_ai_stop_concerntration = function (param, option) {
        var cmd = 1033;
        return this.makeExecutePromise(cmd, param, option);
    };
    AIService.prototype.px_cmd_ai_start_tracking = function (param, option) {
        var cmd = 1034;
        return this.makeExecutePromise(cmd, param, option);
    };
    AIService.prototype.px_cmd_ai_stop_tracking = function (param, option) {
        var cmd = 1035;
        return this.makeExecutePromise(cmd, param, option);
    };
    AIService.prototype.px_cmd_ai_start_functiongame = function (param, option) {
        var cmd = 1036;
        return this.makeExecutePromise(cmd, param, option);
    };
    AIService.prototype.px_cmd_ai_stop_functiongame = function (param, option) {
        var cmd = 1037;
        return this.makeExecutePromise(cmd, param, option);
    };
    AIService.prototype.px_cmd_ai_start_attribute = function (param, option) {
        var cmd = 1038;
        return this.makeExecutePromise(cmd, param, option);
    };
    return AIService;
}(_frame_BaseService__WEBPACK_IMPORTED_MODULE_0__["BaseService"]));



/***/ }),

/***/ "./src/services/AnswerToolService.ts":
/*!*******************************************!*\
  !*** ./src/services/AnswerToolService.ts ***!
  \*******************************************/
/*! exports provided: AnswerToolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerToolService", function() { return AnswerToolService; });
/* harmony import */ var _frame_BaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../frame/BaseService */ "./src/frame/BaseService.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var AnswerToolService = /** @class */ (function (_super) {
    __extends(AnswerToolService, _super);
    function AnswerToolService(aibrowser, bridge) {
        var _this = _super.call(this, aibrowser, bridge) || this;
        _this.serviceName = "PxAnswerService";
        return _this;
    }
    AnswerToolService.prototype.px_inf_answer_status = function (param, option) {
        var cmd = 4001;
        return this.makeInfoPromise(cmd, param, option);
    };
    AnswerToolService.prototype.px_inf_answer_capabilities = function (param, option) {
        var cmd = 4002;
        return this.makeInfoPromise(cmd, param, option);
    };
    AnswerToolService.prototype.px_inf_answer_bindlist = function (param, option) {
        var cmd = 4003;
        return this.makeInfoPromise(cmd, param, option);
    };
    AnswerToolService.prototype.px_cmd_answer_init = function (param, option) {
        var cmd = 4001;
        return this.makeExecutePromise(cmd, param, option);
    };
    AnswerToolService.prototype.px_cmd_answer_start_que = function (param, option) {
        var cmd = 4002;
        return this.makeExecutePromise(cmd, param, option);
    };
    AnswerToolService.prototype.px_cmd_answer_stop_que = function (param, option) {
        var cmd = 4003;
        return this.makeExecutePromise(cmd, param, option);
    };
    AnswerToolService.prototype.px_cmd_answer_add_user = function (param, option) {
        var cmd = 4004;
        return this.makeExecutePromise(cmd, param, option);
    };
    AnswerToolService.prototype.px_cmd_answer_set_txt = function (param, option) {
        var cmd = 4005;
        return this.makeExecutePromise(cmd, param, option);
    };
    AnswerToolService.prototype.px_cmd_answer_stop_eval = function (param, option) {
        var cmd = 4006;
        return this.makeExecutePromise(cmd, param, option);
    };
    AnswerToolService.prototype.px_cmd_answer_sart_eval = function (param, option) {
        var cmd = 4007;
        return this.makeExecutePromise(cmd, param, option);
    };
    AnswerToolService.prototype.px_cmd_answer_remove = function (param, option) {
        var cmd = 4008;
        return this.makeExecutePromise(cmd, param, option);
    };
    AnswerToolService.prototype.px_cmd_answer_sayhi = function (param, option) {
        var cmd = 4009;
        return this.makeExecutePromise(cmd, param, option);
    };
    AnswerToolService.prototype.px_cmd_answer_set_audio_path = function (param, option) {
        var cmd = 4010;
        return this.makeExecutePromise(cmd, param, option);
    };
    AnswerToolService.prototype.px_cmd_answer_quit = function (param, option) {
        var cmd = 4011;
        return this.makeExecutePromise(cmd, param, option);
    };
    return AnswerToolService;
}(_frame_BaseService__WEBPACK_IMPORTED_MODULE_0__["BaseService"]));



/***/ }),

/***/ "./src/services/CameraService.ts":
/*!***************************************!*\
  !*** ./src/services/CameraService.ts ***!
  \***************************************/
/*! exports provided: CameraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraService", function() { return CameraService; });
/* harmony import */ var _frame_BaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../frame/BaseService */ "./src/frame/BaseService.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CameraService = /** @class */ (function (_super) {
    __extends(CameraService, _super);
    function CameraService(aibrowser, bridge) {
        var _this = _super.call(this, aibrowser, bridge) || this;
        _this.serviceName = "Camera";
        return _this;
    }
    CameraService.prototype.px_inf_camera_status = function (param, option) {
        var cmd = 3001;
        return this.makeInfoPromise(cmd, param, option);
    };
    CameraService.prototype.px_inf_camera_capabilities = function (param, option) {
        var cmd = 3002;
        return this.makeInfoPromise(cmd, param, option);
    };
    CameraService.prototype.px_inf_camera_list = function (param, option) {
        var cmd = 3003;
        return this.makeInfoPromise(cmd, param, option);
    };
    CameraService.prototype.px_inf_camera_supported_video_settings = function (param, option) {
        var cmd = 3004;
        return this.makeInfoPromise(cmd, param, option);
    };
    CameraService.prototype.px_cmd_camera_preview = function (param, option) {
        var cmd = 3001;
        return this.makeExecutePromise(cmd, param, option);
    };
    CameraService.prototype.px_cmd_camera_movewindow = function (param, option) {
        var cmd = 3002;
        return this.makeExecutePromise(cmd, param, option);
    };
    CameraService.prototype.px_cmd_camera_raise = function (param, option) {
        var cmd = 3003;
        return this.makeExecutePromise(cmd, param, option);
    };
    CameraService.prototype.px_cmd_camera_set_camera = function (param, option) {
        var cmd = 3004;
        return this.makeExecutePromise(cmd, param, option);
    };
    CameraService.prototype.px_cmd_camera_reset = function (param, option) {
        var cmd = 3005;
        return this.makeExecutePromise(cmd, param, option);
    };
    CameraService.prototype.px_cmd_camera_change_video_setting = function (param, option) {
        var cmd = 3006;
        return this.makeExecutePromise(cmd, param, option);
    };
    CameraService.prototype.px_cmd_camera_capture = function (param, option) {
        var cmd = 3007;
        return this.makeExecutePromise(cmd, param, option);
    };
    return CameraService;
}(_frame_BaseService__WEBPACK_IMPORTED_MODULE_0__["BaseService"]));



/***/ }),

/***/ "./src/services/LocalFileService.ts":
/*!******************************************!*\
  !*** ./src/services/LocalFileService.ts ***!
  \******************************************/
/*! exports provided: LocalFileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalFileService", function() { return LocalFileService; });
/* harmony import */ var _frame_BaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../frame/BaseService */ "./src/frame/BaseService.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var LocalFileService = /** @class */ (function (_super) {
    __extends(LocalFileService, _super);
    function LocalFileService(aibrowser, bridge) {
        var _this = _super.call(this, aibrowser, bridge) || this;
        _this.serviceName = "LocalFile";
        return _this;
    }
    LocalFileService.prototype.px_inf_localfile_status = function (param, option) {
        var cmd = 5001;
        return this.makeInfoPromise(cmd, param, option);
    };
    LocalFileService.prototype.px_inf_localfile_capabilities = function (param, option) {
        var cmd = 5002;
        return this.makeInfoPromise(cmd, param, option);
    };
    LocalFileService.prototype.px_inf_localfile_filelist = function (param, option) {
        var cmd = 5003;
        return this.makeInfoPromise(cmd, param, option);
    };
    LocalFileService.prototype.px_inf_localfile_currentpath = function (param, option) {
        var cmd = 5004;
        return this.makeInfoPromise(cmd, param, option);
    };
    LocalFileService.prototype.px_inf_localfile_fileinfo = function (param, option) {
        var cmd = 5005;
        return this.makeInfoPromise(cmd, param, option);
    };
    LocalFileService.prototype.px_cmd_localfile_open = function (param, option) {
        var cmd = 5001;
        return this.makeExecutePromise(cmd, param, option);
    };
    LocalFileService.prototype.px_cmd_localfile_read = function (param, option) {
        var cmd = 5002;
        return this.makeExecutePromise(cmd, param, option);
    };
    LocalFileService.prototype.px_cmd_localfile_write = function (param, option) {
        var cmd = 5003;
        return this.makeExecutePromise(cmd, param, option);
    };
    LocalFileService.prototype.px_cmd_localfile_close = function (param, option) {
        var cmd = 5004;
        return this.makeExecutePromise(cmd, param, option);
    };
    LocalFileService.prototype.px_cmd_localfile_mkdir = function (param, option) {
        var cmd = 5005;
        return this.makeExecutePromise(cmd, param, option);
    };
    LocalFileService.prototype.px_cmd_localfile_rmdir = function (param, option) {
        var cmd = 5006;
        return this.makeExecutePromise(cmd, param, option);
    };
    LocalFileService.prototype.px_cmd_localfile_delfile = function (param, option) {
        var cmd = 5007;
        return this.makeExecutePromise(cmd, param, option);
    };
    LocalFileService.prototype.px_cmd_localfile_cpfile = function (param, option) {
        var cmd = 5008;
        return this.makeExecutePromise(cmd, param, option);
    };
    LocalFileService.prototype.px_cmd_localfile_cpdir = function (param, option) {
        var cmd = 5009;
        return this.makeExecutePromise(cmd, param, option);
    };
    LocalFileService.prototype.px_cmd_localfile_open_filedlg = function (param, option) {
        var cmd = 5010;
        return this.makeExecutePromise(cmd, param, option);
    };
    LocalFileService.prototype.px_cmd_localfile_download = function (param, option) {
        var cmd = 5011;
        return this.makeExecutePromise(cmd, param, option);
    };
    LocalFileService.prototype.px_cmd_localfile_zip = function (param, option) {
        var cmd = 5012;
        return this.makeExecutePromise(cmd, param, option);
    };
    LocalFileService.prototype.px_cmd_localfile_unzip = function (param, option) {
        var cmd = 5013;
        return this.makeExecutePromise(cmd, param, option);
    };
    LocalFileService.prototype.px_cmd_localfile_rename = function (param, option) {
        var cmd = 5014;
        return this.makeExecutePromise(cmd, param, option);
    };
    LocalFileService.prototype.px_cmd_localfile_open_dir = function (param, option) {
        var cmd = 5015;
        return this.makeExecutePromise(cmd, param, option);
    };
    LocalFileService.prototype.px_cmd_localfile_uploadoss = function (param, option) {
        var cmd = 5016;
        return this.makeExecutePromise(cmd, param, option);
    };
    LocalFileService.prototype.px_cmd_localfile_uploadossbase64 = function (param, option) {
        var cmd = 5017;
        return this.makeExecutePromise(cmd, param, option);
    };
    LocalFileService.prototype.px_cmd_localfile_cancel_uploadoss = function (param, option) {
        var cmd = 5018;
        return this.makeExecutePromise(cmd, param, option);
    };
    LocalFileService.prototype.px_cmd_localfile_rename_dir = function (param, option) {
        var cmd = 5019;
        return this.makeExecutePromise(cmd, param, option);
    };
    LocalFileService.prototype.px_cmd_localfile_cancel_download = function (param, option) {
        var cmd = 5020;
        return this.makeExecutePromise(cmd, param, option);
    };
    LocalFileService.prototype.px_cmd_localfile_init_oss = function (param, option) {
        var cmd = 5021;
        return this.makeExecutePromise(cmd, param, option);
    };
    return LocalFileService;
}(_frame_BaseService__WEBPACK_IMPORTED_MODULE_0__["BaseService"]));



/***/ }),

/***/ "./src/services/PXVideoProcessorService.ts":
/*!*************************************************!*\
  !*** ./src/services/PXVideoProcessorService.ts ***!
  \*************************************************/
/*! exports provided: PXVideoProcessorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PXVideoProcessorService", function() { return PXVideoProcessorService; });
/* harmony import */ var _frame_BaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../frame/BaseService */ "./src/frame/BaseService.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PXVideoProcessorService = /** @class */ (function (_super) {
    __extends(PXVideoProcessorService, _super);
    function PXVideoProcessorService(aibrowser, bridge) {
        var _this = _super.call(this, aibrowser, bridge) || this;
        _this.serviceName = "PxVideoProcessor";
        return _this;
    }
    PXVideoProcessorService.prototype.px_inf_videoprocessor_status = function (param, option) {
        var cmd = 7001;
        return this.makeInfoPromise(cmd, param, option);
    };
    PXVideoProcessorService.prototype.px_inf_videoprocessor_capabilities = function (param, option) {
        var cmd = 7002;
        return this.makeInfoPromise(cmd, param, option);
    };
    PXVideoProcessorService.prototype.px_cmd_videoprocessor_video_infor = function (param, option) {
        var cmd = 7001;
        return this.makeExecutePromise(cmd, param, option);
    };
    PXVideoProcessorService.prototype.px_cmd_videoprocessor_video_sequence = function (param, option) {
        var cmd = 7002;
        return this.makeExecutePromise(cmd, param, option);
    };
    PXVideoProcessorService.prototype.px_cmd_videoprocessor_smooth = function (param, option) {
        var cmd = 7003;
        return this.makeExecutePromise(cmd, param, option);
    };
    PXVideoProcessorService.prototype.px_cmd_videoprocessor_cut = function (param, option) {
        var cmd = 7004;
        return this.makeExecutePromise(cmd, param, option);
    };
    PXVideoProcessorService.prototype.px_cmd_videoprocessor_cutadvance = function (param, option) {
        var cmd = 7005;
        return this.makeExecutePromise(cmd, param, option);
    };
    PXVideoProcessorService.prototype.px_cmd_videoprocessor_addframe = function (param, option) {
        var cmd = 7006;
        return this.makeExecutePromise(cmd, param, option);
    };
    return PXVideoProcessorService;
}(_frame_BaseService__WEBPACK_IMPORTED_MODULE_0__["BaseService"]));



/***/ }),

/***/ "./src/services/PlayerService.ts":
/*!***************************************!*\
  !*** ./src/services/PlayerService.ts ***!
  \***************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var _frame_BaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../frame/BaseService */ "./src/frame/BaseService.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PlayerService = /** @class */ (function (_super) {
    __extends(PlayerService, _super);
    function PlayerService(aibrowser, bridge) {
        var _this = _super.call(this, aibrowser, bridge) || this;
        _this.serviceName = "Player";
        return _this;
    }
    PlayerService.prototype.px_inf_player_status = function (param, option) {
        var cmd = 2001;
        return this.makeInfoPromise(cmd, param, option);
    };
    PlayerService.prototype.px_cmd_player_add = function (param, option) {
        var cmd = 2001;
        return this.makeExecutePromise(cmd, param, option);
    };
    PlayerService.prototype.px_cmd_player_play = function (param, option) {
        var cmd = 2002;
        return this.makeExecutePromise(cmd, param, option);
    };
    PlayerService.prototype.px_cmd_player_pause = function (param, option) {
        var cmd = 2003;
        return this.makeExecutePromise(cmd, param, option);
    };
    PlayerService.prototype.px_cmd_player_resume = function (param, option) {
        var cmd = 2004;
        return this.makeExecutePromise(cmd, param, option);
    };
    PlayerService.prototype.px_cmd_player_stop = function (param, option) {
        var cmd = 2005;
        return this.makeExecutePromise(cmd, param, option);
    };
    PlayerService.prototype.px_cmd_player_pre_frame = function (param, option) {
        var cmd = 2006;
        return this.makeExecutePromise(cmd, param, option);
    };
    PlayerService.prototype.px_cmd_player_next_frame = function (param, option) {
        var cmd = 2007;
        return this.makeExecutePromise(cmd, param, option);
    };
    PlayerService.prototype.px_cmd_player_seek = function (param, option) {
        var cmd = 2008;
        return this.makeExecutePromise(cmd, param, option);
    };
    PlayerService.prototype.px_cmd_player_update_interval = function (param, option) {
        var cmd = 2009;
        return this.makeExecutePromise(cmd, param, option);
    };
    return PlayerService;
}(_frame_BaseService__WEBPACK_IMPORTED_MODULE_0__["BaseService"]));



/***/ }),

/***/ "./src/services/ServiceManager.ts":
/*!****************************************!*\
  !*** ./src/services/ServiceManager.ts ***!
  \****************************************/
/*! exports provided: ServiceManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceManager", function() { return ServiceManager; });
/* harmony import */ var _frame_BaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../frame/BaseService */ "./src/frame/BaseService.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ServiceManager = /** @class */ (function (_super) {
    __extends(ServiceManager, _super);
    function ServiceManager(aibrowser, bridge) {
        var _this = _super.call(this, aibrowser, bridge) || this;
        _this.serviceName = "ServiceManager";
        return _this;
    }
    ServiceManager.prototype.px_inf_servicemanager_status = function (param, option) {
        var cmd = 20001;
        return this.makeInfoPromise(cmd, param, option);
    };
    ServiceManager.prototype.px_inf_servicemanager_capabilities = function (param, option) {
        var cmd = 20002;
        return this.makeInfoPromise(cmd, param, option);
    };
    ServiceManager.prototype.px_inf_servicemanager_service_list = function (param, option) {
        var cmd = 20003;
        return this.makeInfoPromise(cmd, param, option);
    };
    ServiceManager.prototype.px_inf_servicemanager_layers_list = function (param, option) {
        var cmd = 20004;
        return this.makeInfoPromise(cmd, param, option);
    };
    ServiceManager.prototype.px_inf_servicemanager_version = function (param, option) {
        var cmd = 20005;
        return this.makeInfoPromise(cmd, param, option);
    };
    ServiceManager.prototype.px_cmd_servicemanager_reorder_layers = function (param, option) {
        var cmd = 20001;
        return this.makeExecutePromise(cmd, param, option);
    };
    ServiceManager.prototype.px_cmd_servicemanager_move_layers = function (param, option) {
        var cmd = 20002;
        return this.makeExecutePromise(cmd, param, option);
    };
    ServiceManager.prototype.px_cmd_servicemanager_show_full_screen = function (param, option) {
        var cmd = 20003;
        return this.makeExecutePromise(cmd, param, option);
    };
    ServiceManager.prototype.px_cmd_servicemanager_change_show = function (param, option) {
        var cmd = 20004;
        return this.makeExecutePromise(cmd, param, option);
    };
    ServiceManager.prototype.px_cmd_servicemanager_mvp_matrix = function (param, option) {
        var cmd = 20005;
        return this.makeExecutePromise(cmd, param, option);
    };
    ServiceManager.prototype.px_cmd_servicemanager_close_window = function (param, option) {
        var cmd = 20006;
        return this.makeExecutePromise(cmd, param, option);
    };
    return ServiceManager;
}(_frame_BaseService__WEBPACK_IMPORTED_MODULE_0__["BaseService"]));



/***/ }),

/***/ "./src/services/SystemService.ts":
/*!***************************************!*\
  !*** ./src/services/SystemService.ts ***!
  \***************************************/
/*! exports provided: SystemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemService", function() { return SystemService; });
/* harmony import */ var _frame_BaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../frame/BaseService */ "./src/frame/BaseService.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SystemService = /** @class */ (function (_super) {
    __extends(SystemService, _super);
    function SystemService(aibrowser, bridge) {
        var _this = _super.call(this, aibrowser, bridge) || this;
        _this.serviceName = "Sys";
        return _this;
    }
    SystemService.prototype.px_inf_sys_status = function (param, option) {
        var cmd = 6001;
        return this.makeInfoPromise(cmd, param, option);
    };
    SystemService.prototype.px_inf_sys_capabilities = function (param, option) {
        var cmd = 6002;
        return this.makeInfoPromise(cmd, param, option);
    };
    SystemService.prototype.px_inf_sys_cpu = function (param, option) {
        var cmd = 6003;
        return this.makeInfoPromise(cmd, param, option);
    };
    SystemService.prototype.px_inf_sys_os = function (param, option) {
        var cmd = 6004;
        return this.makeInfoPromise(cmd, param, option);
    };
    SystemService.prototype.px_inf_sys_memory = function (param, option) {
        var cmd = 6005;
        return this.makeInfoPromise(cmd, param, option);
    };
    SystemService.prototype.px_inf_sys_gpu = function (param, option) {
        var cmd = 6006;
        return this.makeInfoPromise(cmd, param, option);
    };
    SystemService.prototype.px_inf_sys_disk = function (param, option) {
        var cmd = 6007;
        return this.makeInfoPromise(cmd, param, option);
    };
    SystemService.prototype.px_inf_sys_audiodevice = function (param, option) {
        var cmd = 6008;
        return this.makeInfoPromise(cmd, param, option);
    };
    SystemService.prototype.px_cmd_sys_open_audioinput = function (param, option) {
        var cmd = 6001;
        return this.makeExecutePromise(cmd, param, option);
    };
    SystemService.prototype.px_cmd_sys_reopen_audioinput = function (param, option) {
        var cmd = 6002;
        return this.makeExecutePromise(cmd, param, option);
    };
    SystemService.prototype.px_cmd_sys_receive_current_volume = function (param, option) {
        var cmd = 6003;
        return this.makeExecutePromise(cmd, param, option);
    };
    SystemService.prototype.px_cmd_sys_stop_recevive_current_volume = function (param, option) {
        var cmd = 6004;
        return this.makeExecutePromise(cmd, param, option);
    };
    SystemService.prototype.px_cmd_sys_change_volume = function (param, option) {
        var cmd = 6005;
        return this.makeExecutePromise(cmd, param, option);
    };
    SystemService.prototype.px_cmd_sys_ping_add_host = function (param, option) {
        var cmd = 6006;
        return this.makeExecutePromise(cmd, param, option);
    };
    SystemService.prototype.px_cmd_sys_ping_remove_host = function (param, option) {
        var cmd = 6007;
        return this.makeExecutePromise(cmd, param, option);
    };
    SystemService.prototype.px_cmd_sys_ping_set_interval = function (param, option) {
        var cmd = 6008;
        return this.makeExecutePromise(cmd, param, option);
    };
    return SystemService;
}(_frame_BaseService__WEBPACK_IMPORTED_MODULE_0__["BaseService"]));



/***/ }),

/***/ "./src/services/UnityService.ts":
/*!**************************************!*\
  !*** ./src/services/UnityService.ts ***!
  \**************************************/
/*! exports provided: UnityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnityService", function() { return UnityService; });
/* harmony import */ var _frame_BaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../frame/BaseService */ "./src/frame/BaseService.ts");
/* harmony import */ var _helper_log_Log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/log/Log */ "./src/helper/log/Log.ts");
/* harmony import */ var _helper_Flow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/Flow */ "./src/helper/Flow.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 * 游戏侧发过来的消息
 */
var UnityMessages;
(function (UnityMessages) {
    UnityMessages["UPDATE_VERTICES"] = "update_vertices";
    UnityMessages["UPDATE_VP"] = "update_vp";
    UnityMessages["CHANGE_POSE"] = "change_pose";
    UnityMessages["START_SECTION"] = "start_section";
    UnityMessages["PLAYER_SELECTED"] = "player_selected";
    UnityMessages["PLAYER_RECOGNITION_STATE"] = "player_recognition_state";
    UnityMessages["START_QUESTION"] = "start_question";
    UnityMessages["STOP_QUESTION"] = "stop_question";
    UnityMessages["QUERY_TOTAL_POINTS"] = "query_total_points";
    UnityMessages["GAME_LOADED"] = "game_loaded";
    UnityMessages["GAME_ENDED"] = "game_ended";
})(UnityMessages || (UnityMessages = {}));
/**
 * 发送给Unity的消息
 */
var ToUnityMessages;
(function (ToUnityMessages) {
    ToUnityMessages["CHANGE_PLAYER"] = "change_player";
    ToUnityMessages["GO_NEXT"] = "go_next";
    ToUnityMessages["QUIT_GAME"] = "quit_game";
    ToUnityMessages["HEAD_GALLERY"] = "head_gallery";
    ToUnityMessages["PLAYER_AREA"] = "player_area";
    ToUnityMessages["CLASS_INFO"] = "class_info";
    ToUnityMessages["KEY_DOWN"] = "key_down";
    ToUnityMessages["TOTAL_POINTS"] = "total_points";
    ToUnityMessages["BONES"] = "bones";
})(ToUnityMessages || (ToUnityMessages = {}));
var UnityService = /** @class */ (function (_super) {
    __extends(UnityService, _super);
    function UnityService(aibrowser, bridge) {
        var _this = _super.call(this, aibrowser, bridge) || this;
        _this.poseName = "";
        _this.lastPoseName = "";
        _this.unityMessageCallbackMap = [];
        _this.serviceName = "UnityService";
        _this.registerUnityMessages();
        return _this;
    }
    Object.defineProperty(UnityService.prototype, "exBridge", {
        get: function () {
            return this.bridge;
        },
        enumerable: true,
        configurable: true
    });
    UnityService.prototype.open = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.isOpen = true;
            resolve({ servicename: "unity", uuid: "", result: null });
        });
    };
    UnityService.prototype.close = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.isOpen = false;
            resolve({ servicename: "unity", uuid: "", result: null });
        });
    };
    /**
     * 注册来自Unity的消息
     * 这些消息一般是互动组件定义好的消息
     */
    UnityService.prototype.registerUnityMessages = function () {
        var _this = this;
        this.unityMessageCallbackMap = [
            {
                msg: "update_vertices",
                callback: function (args) {
                    args.name = "Camera";
                    _this.exBridge.updateVertices(args);
                },
            },
            {
                msg: "update_vp",
                callback: function (args) {
                    _this.exBridge.updateVPMatrix(args);
                },
            },
            {
                msg: "stop_pose",
                callback: function () {
                    _this.exBridge.stopPoseDetect();
                },
            },
            {
                msg: "change_pose",
                callback: function (ids) {
                    _helper_log_Log__WEBPACK_IMPORTED_MODULE_1__["Log"].log("开启骨骼点检测", ids);
                    // 开始检测
                    _helper_log_Log__WEBPACK_IMPORTED_MODULE_1__["Log"].log("开始检测pose");
                    var idList = [];
                    ids.forEach(function (id) {
                        idList.push({
                            stuID: id,
                        });
                    });
                    var param = { stuList: idList };
                    _this.exBridge.getServiceByName("AIService").px_cmd_ai_stop_concerntration();
                    _this.exBridge.changePose(param, function (eventInfo) {
                        // console.log(eventInfo.functionGameResult);
                        eventInfo.functionGameResult.forEach(function (bones) {
                            bones.id = bones.stuID;
                            _this.transferToUnity("bones", bones);
                        });
                    }, function (eventInfo) {
                        _helper_Flow__WEBPACK_IMPORTED_MODULE_2__["Flow"].waitForSeconds(3).then(function () {
                            eventInfo.functionGameShowRegion.forEach(function (region) {
                                _this.transferToUnity("player_area", {
                                    id: region.stuID,
                                    left: region.x,
                                    top: region.y,
                                    width: region.width,
                                    height: region.height,
                                });
                            });
                        });
                    });
                },
            },
            {
                msg: "bind_answerTool",
                callback: function (args) {
                    console.warn("绑定答题器", args);
                    _this.exBridge.loadStudentsInfor(args, 0);
                },
            },
            {
                msg: "start_question",
                callback: function (args) {
                    console.warn("开启答题器~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n\n\n");
                    _this.exBridge.startAnswerDevice(8, function (id, key) {
                        _helper_log_Log__WEBPACK_IMPORTED_MODULE_1__["Log"].log("按键", id, key);
                        _this.transferToUnity("key_down", { id: id, keycode: key });
                    });
                },
            },
            {
                msg: "stop_question",
                callback: function (args) {
                    console.warn("停止答题器~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n\n\n");
                    _this.exBridge.stopAnswerDevice(8, "0");
                },
            },
            {
                msg: "query_total_points",
                callback: function (args) {
                },
            },
            {
                msg: "game_loaded",
                callback: function (args) {
                    console.log("%c游戏加载完毕", "background:#00f0f0", args);
                    var galleries = [];
                    var students = [];
                    window.courseGlobalScheduler.store.classInfo.internalStuMap.forEach(function (stuInfo) {
                        var stu = stuInfo.student;
                        var avatar = stuInfo.avator;
                        students.push({
                            id: stu.stuID,
                            name: stu.stuName,
                            gid: stu.MRID === undefined ? "" : "" + stu.MRID,
                        });
                        if (avatar !== null && avatar !== undefined) {
                            galleries.push({
                                gid: avatar.id,
                                stuID: stu.stuID,
                                showImage: avatar.headimg,
                                x: avatar.x,
                                y: avatar.y,
                                width: avatar.width,
                                height: avatar.height,
                            });
                        }
                    });
                    _this.transferToUnity("class_info", { students: students });
                    _this.transferToUnity("head_gallery", { headers: galleries });
                    // window.mocker.sendClassInfo(); // 发送学生信息 没有gid信息
                    // const stuList: any[] = [];
                    // for (let i = 0; i < 2; ++i) {
                    //     stuList.push({
                    //         id: window.mocker.ids[i],
                    //         row1: window.mocker.ids[i],
                    //         row3: window.mocker.names[i],
                    //     });
                    // }
                    var stuList = [];
                    students.forEach(function (stu) {
                        stuList.push({
                            id: stu.id,
                            row1: stu.id,
                            row3: stu.name,
                        });
                    });
                    // this.exBridge.createAnswer("PX", 9).then((e) => {
                    //     return this.exBridge.loadStudentsInfor(stuList, 0);
                    // });
                    _this.exBridge.setFullScreen(true);
                    _this.transferToUnity("hide_background", "");
                    _helper_Flow__WEBPACK_IMPORTED_MODULE_2__["Flow"].waitForSeconds(1).then(function () {
                        return _this.exBridge.getServiceByName("AIService").px_cmd_ai_start_concerntration();
                    });
                    // this.exBridge.checkoutStudentHead().then((result) => {
                    //     let i = 0;
                    //     const bindInfo: IHeaderBindData[] = [];
                    //     const showBindInfo: IHeaderShowBindData[] = [];
                    //     result.galleries.forEach((gallery) => {
                    //         bindInfo.push({
                    //             stuID: window.mocker.ids[i], // 绑定
                    //             faceImg: gallery.faceImg,
                    //             gid: gallery.gid,
                    //         });
                    //         showBindInfo.push(
                    //             {
                    //                 gid: gallery.gid,
                    //                 stuID: window.mocker.ids[i], // 绑定
                    //                 showImage: gallery.showImg,
                    //                 x: gallery.x,
                    //                 y: gallery.y,
                    //                 width: gallery.width,
                    //                 height: gallery.height,
                    //             },
                    //         );
                    //         i++;
                    //     });
                    //     this.transferToUnity("head_gallery", { headers: showBindInfo }); // 发送头像绑定信息
                    //     return this.exBridge.bindGallerys({ galleries: bindInfo }); // 通知AIService绑定头像
                    // }).then(() => {
                    //     return Flow.waitForSeconds(1).then(() => {
                    //         return (this.exBridge.getServiceByName("AIService") as AIService).px_cmd_ai_start_concerntration();
                    //     });
                    // });
                },
            },
            {
                msg: "game_ended",
                callback: function (args) {
                    _this.exBridge.release();
                },
            },
        ];
        this.unityMessageCallbackMap.forEach(function (msgHandler) {
            _this.registerMessageCallback(msgHandler.msg, msgHandler.callback);
        });
    };
    UnityService.prototype.registerMessageCallback = function (cmd, callback) {
        window.messageConsumer.registerCallback(cmd, callback, this);
    };
    UnityService.prototype.poseDetectOn = function () {
        return this.lastPoseName !== "";
    };
    /**
     * 向Unity发送消息
     * @param cmd
     * @param eventInfo
     */
    UnityService.prototype.transferToUnity = function (cmd, eventInfo) {
        var message = {
            cmd: cmd,
            data: eventInfo,
        };
        window.messager.talkToUnity(JSON.stringify(message));
    };
    return UnityService;
}(_frame_BaseService__WEBPACK_IMPORTED_MODULE_0__["BaseService"]));



/***/ }),

/***/ "./src/services/VideoCaptureService.ts":
/*!*********************************************!*\
  !*** ./src/services/VideoCaptureService.ts ***!
  \*********************************************/
/*! exports provided: VideoCaptureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCaptureService", function() { return VideoCaptureService; });
/* harmony import */ var _frame_BaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../frame/BaseService */ "./src/frame/BaseService.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var VideoCaptureService = /** @class */ (function (_super) {
    __extends(VideoCaptureService, _super);
    function VideoCaptureService(aibrowser, bridge) {
        var _this = _super.call(this, aibrowser, bridge) || this;
        _this.serviceName = "videocapture";
        return _this;
    }
    VideoCaptureService.prototype.px_inf_videocapture_status = function (param, option) {
        var cmd = 8001;
        return this.makeInfoPromise(cmd, param, option);
    };
    VideoCaptureService.prototype.px_inf_videocapture_capabilities = function (param, option) {
        var cmd = 8002;
        return this.makeInfoPromise(cmd, param, option);
    };
    VideoCaptureService.prototype.px_inf_videocapture_device = function (param, option) {
        var cmd = 8003;
        return this.makeInfoPromise(cmd, param, option);
    };
    VideoCaptureService.prototype.px_cmd_videocapture_startcapture = function (param, option) {
        var cmd = 8001;
        return this.makeExecutePromise(cmd, param, option);
    };
    VideoCaptureService.prototype.px_cmd_videocapture_stopcapture = function (param, option) {
        var cmd = 8002;
        return this.makeExecutePromise(cmd, param, option);
    };
    VideoCaptureService.prototype.px_cmd_videocapture_startrecord = function (param, option) {
        var cmd = 8003;
        return this.makeExecutePromise(cmd, param, option);
    };
    VideoCaptureService.prototype.px_cmd_videocapture_stoprecord = function (param, option) {
        var cmd = 8004;
        return this.makeExecutePromise(cmd, param, option);
    };
    return VideoCaptureService;
}(_frame_BaseService__WEBPACK_IMPORTED_MODULE_0__["BaseService"]));



/***/ }),

/***/ "./src/unity/WindowMessageTransfer.ts":
/*!********************************************!*\
  !*** ./src/unity/WindowMessageTransfer.ts ***!
  \********************************************/
/*! exports provided: WindowMessageTransfer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowMessageTransfer", function() { return WindowMessageTransfer; });
var WindowMessageTransfer = /** @class */ (function () {
    function WindowMessageTransfer(hasFrame) {
        this.hasFrame = false;
        this.unityFrame = document.getElementById("unityframe");
        this.hasFrame = (this.unityFrame !== null);
        window.addEventListener("message", this.receiveMessage, false);
    }
    WindowMessageTransfer.prototype.talkToUnity = function (msg) {
        if (this.hasFrame) {
            // 将消息转发给Unity的iFrame
            this.unityFrame.contentWindow.postMessage(msg, "*");
        }
        else {
            window.gameInstance.SendMessage("JSBridge", "onMessage", msg);
        }
    };
    WindowMessageTransfer.prototype.receiveMessage = function (evt) {
        window.messageConsumer.execute(evt.data);
    };
    return WindowMessageTransfer;
}());



/***/ })

/******/ });
//# sourceMappingURL=index.js.map