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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = Object.setPrototypeOf ||\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\n// Method decorator\nfunction leDecorator(target, propertyKey, descriptor) {\n    var oldValue = descriptor.value;\n    descriptor.value = function () {\n        console.log(\"Calling \\\"\" + propertyKey + \"\\\" with\", arguments, target);\n        var value = oldValue.apply(null, [arguments[1], arguments[0]]);\n        return value + \"; This is awesome\";\n    };\n    return descriptor;\n}\n// Property decorator\nfunction realName(target, key) {\n    var _val = target[key];\n    var getter = function () {\n        return 'iidear(' + _val + ')';\n    };\n    var setter = function (newVal) {\n        _val = newVal;\n    };\n    Object.defineProperty(target, key, {\n        get: getter,\n        set: setter\n    });\n}\n// Class decorator\nfunction AwesomeMeetup(constructor) {\n    return /** @class */ (function (_super) {\n        __extends(class_1, _super);\n        function class_1() {\n            var _this = _super !== null && _super.apply(this, arguments) || this;\n            _this.speaker = 'xxdear';\n            _this.extra = 'xx!';\n            return _this;\n        }\n        return class_1;\n    }(constructor));\n}\n// Parameter decorator\nfunction logParameter(target, key, index) {\n    var metadataKey = \"myMetaData\";\n    if (Array.isArray(target[metadataKey])) {\n        target[metadataKey].push(index);\n    }\n    else {\n        target[metadataKey] = [index];\n    }\n}\nfunction logMethod(target, key, descriptor) {\n    var originalMethod = descriptor.value;\n    descriptor.value = function () {\n        var args = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            args[_i] = arguments[_i];\n        }\n        var metadataKey = \"myMetaData\";\n        var indices = target[metadataKey];\n        console.log('indices', indices);\n        for (var i = 0; i < args.length; i++) {\n            if (indices.indexOf(i) !== -1) {\n                console.log('Found a marked parameter at index' + i);\n                args[i] = 'abcdefg';\n            }\n        }\n        var result = originalMethod.apply(target, args);\n        return result;\n    };\n    return descriptor;\n}\nvar JSMeetup = /** @class */ (function () {\n    function JSMeetup() {\n        this.speaker = 'speaker';\n        this.myName = 'xx';\n    }\n    JSMeetup.prototype.greet = function () {\n        return 'Hi, I\\'m ' + this.myName;\n    };\n    JSMeetup.prototype.greetFromSpeaker = function () {\n        return 'Hi, I\\'m speaker ' + this.speaker;\n    };\n    JSMeetup.prototype.welcome = function (arg1, arg2) {\n        console.log(\"Arguments Received are \" + arg1 + \" \" + arg2);\n        return arg1 + \" \" + arg2;\n    };\n    JSMeetup.prototype.saySomething = function (something, somethingElse) {\n        return something + ' : ' + somethingElse;\n    };\n    __decorate([\n        realName\n    ], JSMeetup.prototype, \"myName\", void 0);\n    __decorate([\n        leDecorator\n    ], JSMeetup.prototype, \"welcome\", null);\n    __decorate([\n        logMethod,\n        __param(1, logParameter)\n    ], JSMeetup.prototype, \"saySomething\", null);\n    JSMeetup = __decorate([\n        AwesomeMeetup\n    ], JSMeetup);\n    return JSMeetup;\n}());\nvar meetup = new JSMeetup();\n// console.log(meetup.welcome('World', 'hello'))\n// console.log(meetup.greet())\n// meetup.myName = 'yy'\n// console.log(meetup.greet())\n// console.log(meetup.greetFromSpeaker())\n// console.log(meetup.extra)\nconsole.log(meetup.saySomething(\"something\", \"Something Else\"));\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93dGZzL2RlY29yYXRvci50cz83YzAxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbUJBQW1CO0FBQ25CLHFCQUFxQixNQUFXLEVBQUUsV0FBbUIsRUFBRSxVQUE4QjtJQUNuRixJQUFNLFFBQVEsR0FBRyxVQUFVLENBQUMsS0FBSztJQUVqQyxVQUFVLENBQUMsS0FBSyxHQUFHO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBWSxXQUFXLFlBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDO1FBQy9ELElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTlELE1BQU0sQ0FBQyxLQUFLLEdBQUcsbUJBQW1CO0lBQ3BDLENBQUM7SUFFRCxNQUFNLENBQUMsVUFBVTtBQUNuQixDQUFDO0FBR0QscUJBQXFCO0FBQ3JCLGtCQUFrQixNQUFXLEVBQUUsR0FBVztJQUV4QyxJQUFJLElBQUksR0FBUSxNQUFNLENBQUMsR0FBRyxDQUFDO0lBRTNCLElBQU0sTUFBTSxHQUFHO1FBQ2IsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLEdBQUcsR0FBRztJQUMvQixDQUFDO0lBRUQsSUFBTSxNQUFNLEdBQUcsVUFBUyxNQUFXO1FBQ2pDLElBQUksR0FBRyxNQUFNO0lBQ2YsQ0FBQztJQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtRQUNqQyxHQUFHLEVBQUUsTUFBTTtRQUNYLEdBQUcsRUFBRSxNQUFNO0tBQ1osQ0FBQztBQUNKLENBQUM7QUFHRCxrQkFBa0I7QUFDbEIsdUJBQStELFdBQWM7SUFDM0UsTUFBTTtRQUFlLDJCQUFXO1FBQXpCO1lBQUEscUVBR047WUFGQyxhQUFPLEdBQVcsUUFBUTtZQUMxQixXQUFLLEdBQUcsS0FB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b250ZW50IjpbIlxuLy8gTWV0aG9kIGRlY29yYXRvclxuZnVuY3Rpb24gbGVEZWNvcmF0b3IodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcik6IGFueSB7XG4gIGNvbnN0IG9sZFZhbHVlID0gZGVzY3JpcHRvci52YWx1ZVxuXG4gIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyhgQ2FsbGluZyBcIiR7cHJvcGVydHlLZXl9XCIgd2l0aGAsIGFyZ3VtZW50cywgdGFyZ2V0KVxuICAgIGxldCB2YWx1ZSA9IG9sZFZhbHVlLmFwcGx5KG51bGwsIFthcmd1bWVudHNbMV0sIGFyZ3VtZW50c1swXV0pXG5cbiAgICByZXR1cm4gdmFsdWUgKyBcIjsgVGhpcyBpcyBhd2Vzb21lXCJcbiAgfVxuXG4gIHJldHVybiBkZXNjcmlwdG9yXG59XG5cblxuLy8gUHJvcGVydHkgZGVjb3JhdG9yXG5mdW5jdGlvbiByZWFsTmFtZSh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcpOiBhbnkge1xuXG4gIGxldCBfdmFsOiBhbnkgPSB0YXJnZXRba2V5XVxuXG4gIGNvbnN0IGdldHRlciA9IGZ1bmN0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdpaWRlYXIoJyArIF92YWwgKyAnKSdcbiAgfVxuXG4gIGNvbnN0IHNldHRlciA9IGZ1bmN0aW9uKG5ld1ZhbDogYW55KSB7XG4gICAgX3ZhbCA9IG5ld1ZhbFxuICB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XG4gICAgZ2V0OiBnZXR0ZXIsXG4gICAgc2V0OiBzZXR0ZXJcbiAgfSlcbn1cblxuXG4vLyBDbGFzcyBkZWNvcmF0b3JcbmZ1bmN0aW9uIEF3ZXNvbWVNZWV0dXA8VCBleHRlbmRzIHsgbmV3ICguLi5hcmdzOiBhbnlbXSk6IHt9IH0+KGNvbnN0cnVjdG9yOiBUKSB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGNvbnN0cnVjdG9yIGltcGxlbWVudHMgZXh0cmEge1xuICAgIHNwZWFrZXI6IHN0cmluZyA9ICd4eGRlYXInXG4gICAgZXh0cmEgPSAneHghJ1xuICB9XG59XG5cblxuLy8gUGFyYW1ldGVyIGRlY29yYXRvclxuZnVuY3Rpb24gbG9nUGFyYW1ldGVyKHRhcmdldDogYW55LCBrZXk6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IGFueSB7XG4gIGxldCBtZXRhZGF0YUtleSA9IGBteU1ldGFEYXRhYFxuICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXRbbWV0YWRhdGFLZXldKSkge1xuICAgIHRhcmdldFttZXRhZGF0YUtleV0ucHVzaChpbmRleClcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXRbbWV0YWRhdGFLZXldID0gW2luZGV4XVxuICB9XG59XG5cbmZ1bmN0aW9uIGxvZ01ldGhvZCh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IGFueSk6IGFueSB7XG4gIGxldCBvcmlnaW5hbE1ldGhvZCA9IGRlc2NyaXB0b3IudmFsdWVcbiAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgbGV0IG1ldGFkYXRhS2V5ID0gYG15TWV0YURhdGFgXG4gICAgbGV0IGluZGljZXMgPSB0YXJnZXRbbWV0YWRhdGFLZXldXG4gICAgY29uc29sZS5sb2coJ2luZGljZXMnLCBpbmRpY2VzKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGluZGljZXMuaW5kZXhPZihpKSAhPT0gLTEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0ZvdW5kIGEgbWFya2VkIHBhcmFtZXRlciBhdCBpbmRleCcgKyBpKVxuICAgICAgICBhcmdzW2ldID0gJ2FiY2RlZmcnXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHJlc3VsdCA9IG9yaWdpbmFsTWV0aG9kLmFwcGx5KHRhcmdldCwgYXJncylcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICByZXR1cm4gZGVzY3JpcHRvclxufVxuXG5AQXdlc29tZU1lZXR1cFxuY2xhc3MgSlNNZWV0dXAge1xuXG4gIHB1YmxpYyBzcGVha2VyID0gJ3NwZWFrZXInXG4gIEByZWFsTmFtZVxuICBwdWJsaWMgbXlOYW1lID0gJ3h4J1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cbiAgZ3JlZXQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ0hpLCBJXFwnbSAnICsgdGhpcy5teU5hbWVcbiAgfVxuXG4gIGdyZWV0RnJvbVNwZWFrZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ0hpLCBJXFwnbSBzcGVha2VyICcgKyB0aGlzLnNwZWFrZXJcbiAgfVxuXG4gIEBsZURlY29yYXRvclxuICB3ZWxjb21lKGFyZzE6IHN0cmluZywgYXJnMjogc3RyaW5nKSB7XG4gICAgY29uc29sZS5sb2coYEFyZ3VtZW50cyBSZWNlaXZlZCBhcmUgJHthcmcxfSAke2FyZzJ9YClcbiAgICByZXR1cm4gYCR7YXJnMX0gJHthcmcyfWBcbiAgfVxuXG4gIEBsb2dNZXRob2RcbiAgcHVibGljIHNheVNvbWV0aGluZyhzb21ldGhpbmc6IHN0cmluZywgQGxvZ1BhcmFtZXRlciBzb21ldGhpbmdFbHNlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzb21ldGhpbmcgKyAnIDogJyArIHNvbWV0aGluZ0Vsc2VcbiAgfVxufVxuXG5pbnRlcmZhY2UgZXh0cmEge1xuICBleHRyYTogc3RyaW5nXG59XG5cbmNvbnN0IG1lZXR1cCA9IG5ldyBKU01lZXR1cCgpXG5cbi8vIGNvbnNvbGUubG9nKG1lZXR1cC53ZWxjb21lKCdXb3JsZCcsICdoZWxsbycpKVxuLy8gY29uc29sZS5sb2cobWVldHVwLmdyZWV0KCkpXG4vLyBtZWV0dXAubXlOYW1lID0gJ3l5J1xuLy8gY29uc29sZS5sb2cobWVldHVwLmdyZWV0KCkpXG4vLyBjb25zb2xlLmxvZyhtZWV0dXAuZ3JlZXRGcm9tU3BlYWtlcigpKVxuLy8gY29uc29sZS5sb2cobWVldHVwLmV4dHJhKVxuY29uc29sZS5sb2cobWVldHVwLnNheVNvbWV0aGluZyhcInNvbWV0aGluZ1wiLCBcIlNvbWV0aGluZyBFbHNlXCIpKVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93dGZzL2RlY29yYXRvci50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);