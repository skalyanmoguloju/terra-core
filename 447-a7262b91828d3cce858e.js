(window.webpackJsonp=window.webpackJsonp||[]).push([[447],{1213:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=g(n(0)),a=g(n(3)),o=g(n(5)),i=g(n(8)),l=n(9),s=g(n(880)),u=g(n(139)),c=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==b(e)&&"function"!=typeof e)return{default:e};var t=m();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(21)),p=g(n(972)),d=n(987),f=g(n(988));function m(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return m=function(){return e},e}function g(e){return e&&e.__esModule?e:{default:e}}function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x(e);if(t){var a=x(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return P(this,n)}}function P(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=o.default.bind(p.default),C={onPageChange:a.default.func.isRequired,selectedPage:a.default.number.isRequired,totalCount:a.default.number.isRequired,itemCountPerPage:a.default.number.isRequired,intl:l.intlShape.isRequired},w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(i,e);var t,n,a,o=y(i);function i(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);var n=(t=o.call(this,e)).props,r=n.selectedPage,a=n.totalCount;return t.state={selectedPage:r&&a?r:void 0,showReducedPaginator:!1},t.handlePageChange=t.handlePageChange.bind(O(t)),t.defaultProgressivePaginator=t.defaultProgressivePaginator.bind(O(t)),t.reducedProgressivePaginator=t.reducedProgressivePaginator.bind(O(t)),t.setPaginator=t.setPaginator.bind(O(t)),t}return t=i,(n=[{key:"setPaginator",value:function(e){var t="tiny"===e;this.state.showReducedPaginator!==t&&this.setState({showReducedPaginator:t})}},{key:"handlePageChange",value:function(e){var t=this;return function(n){n.nativeEvent.keyCode!==c.KEY_RETURN&&n.nativeEvent.keyCode!==c.KEY_SPACE||n.preventDefault(),t.props.onPageChange(e),t.setState({selectedPage:e})}}},{key:"defaultProgressivePaginator",value:function(){var e=this.context,t=this.props.intl,n=(0,d.calculatePages)(this.props.totalCount,this.props.itemCountPerPage),a=this.state.selectedPage,o=1===a?1:a-1,i=a===n?n:a+1;return r.default.createElement("div",{className:j("paginator","progressive",e.className),role:"navigation","aria-label":"pagination"},r.default.createElement("div",null,t.formatMessage({id:"Terra.paginator.pageCount"},{pageNumber:a,pageNumberTotal:n})),r.default.createElement("div",null,r.default.createElement(f.default,{ariaDisabled:1===a,ariaLabel:t.formatMessage({id:"Terra.paginator.first"}),className:j(["nav-link",1===a?"is-disabled":null]),disabled:1===a,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},t.formatMessage({id:"Terra.paginator.first"})),r.default.createElement(f.default,{ariaDisabled:1===a,ariaLabel:t.formatMessage({id:"Terra.paginator.previous"}),className:j(["nav-link","previous",1===a?"is-disabled":null]),disabled:1===a,onClick:this.handlePageChange(o),onKeyDown:this.handlePageChange(o)},r.default.createElement("span",{className:j("icon")}),t.formatMessage({id:"Terra.paginator.previous"})),r.default.createElement(f.default,{ariaDisabled:a===n,ariaLabel:t.formatMessage({id:"Terra.paginator.next"}),className:j(["nav-link","next",a===n?"is-disabled":null]),disabled:a===n,onClick:this.handlePageChange(i),onKeyDown:this.handlePageChange(i)},t.formatMessage({id:"Terra.paginator.next"}),r.default.createElement("span",{className:j("icon")})),r.default.createElement(f.default,{ariaDisabled:a===n,ariaLabel:t.formatMessage({id:"Terra.paginator.last"}),className:j(["nav-link",a===n?"is-disabled":null]),disabled:a===n,onClick:this.handlePageChange(n),onKeyDown:this.handlePageChange(n)},t.formatMessage({id:"Terra.paginator.last"}))))}},{key:"reducedProgressivePaginator",value:function(){var e=this.context,t=this.props.intl,n=(0,d.calculatePages)(this.props.totalCount,this.props.itemCountPerPage),a=this.state.selectedPage,o=1===a?1:a-1,i=a===n?n:a+1;return r.default.createElement("div",{className:j("paginator",e.className),role:"navigation","aria-label":"pagination"},r.default.createElement("div",null,r.default.createElement(f.default,{ariaDisabled:1===a,ariaLabel:t.formatMessage({id:"Terra.paginator.first"}),className:j(["nav-link",1===a?"is-disabled":null]),disabled:1===a,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},t.formatMessage({id:"Terra.paginator.first"})),r.default.createElement(f.default,{ariaDisabled:1===a,ariaLabel:t.formatMessage({id:"Terra.paginator.previous"}),className:j(["nav-link","previous","icon-only",1===a?"is-disabled":null]),disabled:1===a,onClick:this.handlePageChange(o),onKeyDown:this.handlePageChange(o)},r.default.createElement(u.default,{text:t.formatMessage({id:"Terra.paginator.previous"})}),r.default.createElement("span",{className:j("icon")}))),r.default.createElement("div",null,t.formatMessage({id:"Terra.paginator.pageCount"},{pageNumber:a,pageNumberTotal:n})),r.default.createElement("div",null,r.default.createElement(f.default,{ariaDisabled:a===n,ariaLabel:t.formatMessage({id:"Terra.paginator.next"}),className:j(["nav-link","next","icon-only",a===n?"is-disabled":null]),disabled:a===n,onClick:this.handlePageChange(i),onKeyDown:this.handlePageChange(i)},r.default.createElement(u.default,{text:t.formatMessage({id:"Terra.paginator.next"})}),r.default.createElement("span",{className:j("icon")})),r.default.createElement(f.default,{ariaDisabled:a===n,ariaLabel:t.formatMessage({id:"Terra.paginator.last"}),className:j(["nav-link",a===n?"is-disabled":null]),disabled:a===n,onClick:this.handlePageChange(n),onKeyDown:this.handlePageChange(n)},t.formatMessage({id:"Terra.paginator.last"}))))}},{key:"render",value:function(){return r.default.createElement(s.default,{onChange:this.setPaginator},this.state.showReducedPaginator?this.reducedProgressivePaginator():this.defaultProgressivePaginator())}}])&&h(t.prototype,n),a&&h(t,a),i}(r.default.Component);w.propTypes=C,w.contextType=i.default;var M=(0,l.injectIntl)(w);t.default=M},2166:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(0)),a=s(n(939)),o=s(n(1213)),i=s(n(5)),l=s(n(1211));function s(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var a=g(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=i.default.bind(l.default),h=function(){return function(e,t){for(var n=[],a=0;a<t;a+=1)n.push(r.default.createElement("p",{key:Math.floor(Math.random()*Math.floor(1e5))},e));return n}("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. Aliquam eget maximus dui, ut rhoncus augue.",10)},v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(s,e);var t,n,i,l=d(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=l.call(this,e)).state={content:h(),currentPage:1},t.changePages=t.changePages.bind(m(t)),t}return t=s,(n=[{key:"changePages",value:function(e){this.setState({currentPage:e})}},{key:"render",value:function(){return r.default.createElement("div",{className:b("paginator-wrapper")},r.default.createElement(a.default,{header:r.default.createElement("h1",null,"Page",this.state.currentPage),footer:r.default.createElement(o.default,{onPageChange:this.changePages,selectedPage:1,totalCount:450,itemCountPerPage:10})},this.state.content))}}])&&c(t.prototype,n),i&&c(t,i),s}(r.default.Component);t.default=v},2931:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var r=n(0),a=n.n(r),o=n(282),i=n(986),l=n(2166),s=n.n(l);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p={};function d(e){var t=e.components,n=c(e,["components"]);return Object(o.mdx)("wrapper",u({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",u({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Dialog from 'terra-dialog';\nimport ProgressivePaginator from 'terra-paginator/lib/ProgressivePaginator';\nimport classNames from 'classnames/bind';\nimport styles from './PaginatorExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\nconst totalCount = 450;\n\nconst fillArray = (value, len) => {\n  const arr = [];\n  for (let i = 0; i < len; i += 1) {\n    arr.push(<p key={Math.floor(Math.random() * Math.floor(100000))}>{value}</p>);\n  }\n  return arr;\n};\n\nconst buildPage = () => {\n  let fullContent = [];\n  const content = ('Lorem ipsum dolor sit amet, consectetur adipiscing elit. '\n    + 'Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. '\n    + 'Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. '\n    + 'Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. '\n    + 'Aliquam eget maximus dui, ut rhoncus augue.');\n\n  fullContent = fillArray(content, 10);\n\n  return (\n    fullContent\n  );\n};\n\nclass ProgressivePaginatorExample extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      content: buildPage(),\n      currentPage: 1,\n    };\n\n    this.changePages = this.changePages.bind(this);\n  }\n\n  changePages(index) {\n    this.setState({ currentPage: index });\n  }\n\n  render() {\n    return (\n      <div className={cx('paginator-wrapper')}>\n        <Dialog\n          header={(\n            <h1>\n              Page\n              {this.state.currentPage}\n            </h1>\n)}\n          footer={<ProgressivePaginator onPageChange={this.changePages} selectedPage={1} totalCount={totalCount} itemCountPerPage={10} />}\n        >\n          {this.state.content}\n        </Dialog>\n      </div>\n    );\n  }\n}\n\nexport default ProgressivePaginatorExample;\n\n")))}d.isMDXComponent=!0;var f=n(857),m=n.n(f),g=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(m.a,{title:t||"Progressive Paginator Example",description:n,example:a.a.createElement(s.a,null),exampleSrc:a.a.createElement(d,null),isExpanded:r})},b=n(860),h=n.n(b);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var P=function(){return Object(o.mdx)(h.a,{rows:[{name:"onPageChange",type:function(){var e={};function t(t){var n=t.components,r=y(t,["components"]);return Object(o.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=y(t,["components"]);return Object(o.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Function to be executed when a navigation element is selected."))}return t.isMDXComponent=!0,t({})}},{name:"selectedPage",type:function(){var e={};function t(t){var n=t.components,r=y(t,["components"]);return Object(o.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=y(t,["components"]);return Object(o.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The active/selected page."))}return t.isMDXComponent=!0,t({})}},{name:"totalCount",type:function(){var e={};function t(t){var n=t.components,r=y(t,["components"]);return Object(o.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=y(t,["components"]);return Object(o.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Total number of all items being paginated."))}return t.isMDXComponent=!0,t({})}},{name:"itemCountPerPage",type:function(){var e={};function t(t){var n=t.components,r=y(t,["components"]);return Object(o.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=y(t,["components"]);return Object(o.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Total number of items per page."))}return t.isMDXComponent=!0,t({})}}]})};function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var j={};function C(e){var t=e.components,n=x(e,["components"]);return Object(o.mdx)("wrapper",O({},j,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(i.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-progressive-paginator"},"Terra Progressive Paginator"),Object(o.mdx)("p",null,"Paginator to be used for ordered data where the size of the data is known. Provides first, last, previous, next, and paged functionality."),Object(o.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Install with ",Object(o.mdx)("a",O({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"npm install terra-paginator"))))),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",O({parentName:"pre"},{className:"language-jsx"}),"import ProgressivePaginator from 'terra-paginator/lib/ProgressivePaginator';\n")),Object(o.mdx)("h2",{id:"component-features"},"Component Features"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",O({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",O({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",O({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support"))),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(g,{mdxType:"ProgressivePaginatorExample"}),Object(o.mdx)("h2",{id:"progressive-paginator-props"},"Progressive Paginator Props"),Object(o.mdx)(P,{mdxType:"ProgressivePaginatorPropsTable"}))}C.isMDXComponent=!0}}]);
//# sourceMappingURL=447-a7262b91828d3cce858e.js.map