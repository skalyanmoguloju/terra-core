(window.webpackJsonp=window.webpackJsonp||[]).push([[647],{2410:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(n(0)),r=u(n(55)),i=u(n(890));function u(t){return t&&t.__esModule?t:{default:t}}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=y(t);if(e){var r=y(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?p(t):e}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(s,t);var e,n,u,c=f(s);function s(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(e=c.call(this,t)).state={actionButtonClickCount:0,showAlert:!1},e.actionFunc=e.actionFunc.bind(p(e)),e.popAlert=e.popAlert.bind(p(e)),e}return e=s,(n=[{key:"actionFunc",value:function(){this.setState((function(t){return{actionButtonClickCount:t.actionButtonClickCount+1}})),this.setState({showAlert:!1})}},{key:"popAlert",value:function(){this.setState((function(t){return{showAlert:!t.showAlert}}))}},{key:"render",value:function(){return this.alert=o.default.createElement(i.default,{id:"actionAlert",type:"warning",action:o.default.createElement(r.default,{text:"Action",onClick:this.actionFunc})},"This is a warning. It is configured with a custom Action button. Action button has been clicked"," ",o.default.createElement("span",{id:"actionButtonClickCount"},this.state.actionButtonClickCount)," ","times."),o.default.createElement("div",null,o.default.createElement("p",null," This Test has been added to test the functionality on JAWS and Voice Over "),o.default.createElement(r.default,{text:"Trigger Alert",onClick:this.popAlert}),this.state.showAlert&&this.alert)}}])&&a(e.prototype,n),u&&a(e,u),s}(o.default.Component);e.default=d}}]);
//# sourceMappingURL=647-ef35a2d2d09a51ab381b.js.map