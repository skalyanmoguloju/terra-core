(window.webpackJsonp=window.webpackJsonp||[]).push([[731],{2763:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=c(n(0)),r=c(n(55)),u=c(n(286));function c(t){return t&&t.__esModule?t:{default:t}}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=h(t);if(e){var r=h(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?p(t):e}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(s,t);var e,n,c,i=l(s);function s(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(e=i.call(this,t)).onChange=e.onChange.bind(p(e)),e.handleButtonClick=e.handleButtonClick.bind(p(e)),e.state={searchText:""},e}return e=s,(n=[{key:"onChange",value:function(t,e){this.setState({searchText:e})}},{key:"handleButtonClick",value:function(){this.searchInput&&this.searchInput.focus()}},{key:"render",value:function(){var t=this;return o.default.createElement(o.default.Fragment,null,o.default.createElement(r.default,{text:"Focus Me",onClick:this.handleButtonClick,id:"search-field-focus-button"}),o.default.createElement(u.default,{onChange:this.onChange,value:this.state.searchText,inputRefCallback:function(e){t.searchInput=e}}))}}])&&a(e.prototype,n),c&&a(e,c),s}(o.default.Component);e.default=y}}]);
//# sourceMappingURL=731-f74c0f9e2edfba138808.js.map