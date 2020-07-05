(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{1026:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),o=n.n(r),a=n(858),l=n.n(a),u=function(e){var t=e.url;return o.a.createElement(l.a,{src:"https://github.com/cerner/terra-core/tree/master/packages/terra-form-input",name:"terra-form-input",version:"3.6.0",url:t})}},1938:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(971));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(){return r.default.createElement(o.default,{inputId:"profile-name",label:"Profile Name",help:"Note: This can not be changed in the future",type:"text",placeholder:"Profile Name",inputAttrs:{name:"profile"}})};t.default=l},1939:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(971));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(){return r.default.createElement(o.default,{inputId:"requiredField",label:"Required Input Field",help:"Note: This is help text",type:"text",required:!0,inputAttrs:{name:"requiredField"}})};t.default=l},1940:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(971));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(){return r.default.createElement(o.default,{inputId:"incompleteField",label:"Incomplete Input Field",help:"Note: This is help text",type:"text",required:!0,isIncomplete:!0,inputAttrs:{name:"requiredField"}})};t.default=l},1941:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(971));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(){return r.default.createElement(o.default,{inputId:"numeric-input",label:"Numeric Value",type:"number",placeholder:"Enter Digits",inputAttrs:{name:"numeric"}})};t.default=l},2897:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return U}));var r=n(0),o=n.n(r),a=n(282),l=n(1026),u=n(1938),p=n.n(u);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d={};function m(e){var t=e.components,n=c(e,["components"]);return Object(a.mdx)("wrapper",i({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",i({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport InputField from \'terra-form-input/lib/InputField\';\n\nconst DefaultInputField = () => (\n  <InputField\n    inputId="profile-name"\n    label="Profile Name"\n    help="Note: This can not be changed in the future"\n    type="text"\n    placeholder="Profile Name"\n    inputAttrs={{\n      name: \'profile\',\n    }}\n  />\n);\n\nexport default DefaultInputField;\n\n')))}m.isMDXComponent=!0;var s=n(857),f=n.n(s),b=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(f.a,{title:t||"Input Field",description:n,example:o.a.createElement(p.a,null),exampleSrc:o.a.createElement(m,null),isExpanded:r})},x=n(1939),_=n.n(x);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var h={};function O(e){var t=e.components,n=v(e,["components"]);return Object(a.mdx)("wrapper",y({},h,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",y({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport InputField from \'terra-form-input/lib/InputField\';\n\nconst RequiredInputField = () => (\n  <InputField\n    inputId="requiredField"\n    label="Required Input Field"\n    help="Note: This is help text"\n    type="text"\n    required\n    inputAttrs={{\n      name: \'requiredField\',\n    }}\n  />\n);\n\nexport default RequiredInputField;\n\n')))}O.isMDXComponent=!0;var j=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(f.a,{title:t||"Required Input Field",description:n,example:o.a.createElement(_.a,null),exampleSrc:o.a.createElement(O,null),isExpanded:r})},g=n(1940),T=n.n(g);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var D={};function E(e){var t=e.components,n=M(e,["components"]);return Object(a.mdx)("wrapper",w({},D,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",w({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport InputField from \'terra-form-input/lib/InputField\';\n\nconst RequiredInputField = () => (\n  <InputField\n    inputId="incompleteField"\n    label="Incomplete Input Field"\n    help="Note: This is help text"\n    type="text"\n    required\n    isIncomplete\n    inputAttrs={{\n      name: \'requiredField\',\n    }}\n  />\n);\n\nexport default RequiredInputField;\n\n')))}E.isMDXComponent=!0;var X=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(f.a,{title:t||"Incomplete Input Field",description:n,example:o.a.createElement(T.a,null),exampleSrc:o.a.createElement(E,null),isExpanded:r})},I=n(1941),N=n.n(I);function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var q={};function L(e){var t=e.components,n=C(e,["components"]);return Object(a.mdx)("wrapper",P({},q,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",P({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport InputField from \'terra-form-input/lib/InputField\';\n\nconst NumberInputField = () => (\n  <InputField\n    inputId="numeric-input"\n    label="Numeric Value"\n    type="number"\n    placeholder="Enter Digits"\n    inputAttrs={{\n      name: \'numeric\',\n    }}\n  />\n);\n\nexport default NumberInputField;\n\n')))}L.isMDXComponent=!0;var F=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(f.a,{title:t||"Number Input Field",description:n,example:o.a.createElement(N.a,null),exampleSrc:o.a.createElement(L,null),isExpanded:r})},k=n(860),S=n.n(k);function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var A=function(){return Object(a.mdx)(S.a,{rows:[{name:"inputId",type:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Id of the input. Populates both the input and the htmlFor prop of the wrapper Field."))}return t.isMDXComponent=!0,t({})}},{name:"label",type:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The label of the form control children."))}return t.isMDXComponent=!0,t({})}},{name:"defaultValue",type:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"union"),Object(a.mdx)("pre",null,Object(a.mdx)("code",V({parentName:"pre"},{className:"language-json"}),'[\n {\n  "name": "string"\n },\n {\n  "name": "number"\n }\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The defaultValue of the input field. Use this to create an uncontrolled input."))}return t.isMDXComponent=!0,t({})}},{name:"disabled",type:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether the input is disabled."))}return t.isMDXComponent=!0,t({})}},{name:"error",type:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"null",description:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Error message for when the input is invalid."))}return t.isMDXComponent=!0,t({})}},{name:"errorIcon",type:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"<IconError />",description:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Error Icon to display when the input is invalid."))}return t.isMDXComponent=!0,t({})}},{name:"help",type:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"null",description:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Help element to display with the input."))}return t.isMDXComponent=!0,t({})}},{name:"hideRequired",type:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether or not to hide the required indicator on the label."))}return t.isMDXComponent=!0,t({})}},{name:"inputAttrs",type:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"{}",description:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Attributes to attach to the input object"))}return t.isMDXComponent=!0,t({})}},{name:"isIncomplete",type:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether the field and input displays as Incomplete. Use when no value has been provided. ",Object(a.mdx)("em",{parentName:"p"},"(usage note: ",Object(a.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))}return t.isMDXComponent=!0,t({})}},{name:"isInline",type:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether or not the field is an inline field."))}return t.isMDXComponent=!0,t({})}},{name:"isInvalid",type:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether the field and input displays as Invalid. Use when value does not meet validation pattern."))}return t.isMDXComponent=!0,t({})}},{name:"isLabelHidden",type:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether or not the label is visible. Use this props to hide a label while still creating it on the DOM for accessibility."))}return t.isMDXComponent=!0,t({})}},{name:"labelAttrs",type:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"{}",description:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Attributes to attach to the label."))}return t.isMDXComponent=!0,t({})}},{name:"maxWidth",type:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Set the max-width of a field using ",Object(a.mdx)("inlineCode",{parentName:"p"},"length")," or ",Object(a.mdx)("inlineCode",{parentName:"p"},"%"),".  Best practice recommendation to never exceed\na rendered value of 1020px. ",Object(a.mdx)("em",{parentName:"p"},"(Note: Providing custom inline styles will take precedence.)")))}return t.isMDXComponent=!0,t({})}},{name:"onChange",type:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Function to trigger when user changes the input value. Provide a function to create a controlled input."))}return t.isMDXComponent=!0,t({})}},{name:"placeholder",type:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Placeholder text."))}return t.isMDXComponent=!0,t({})}},{name:"refCallback",type:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Ref callback to pass into the ref attribute of the html input element."))}return t.isMDXComponent=!0,t({})}},{name:"required",type:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether or not the field is required."))}return t.isMDXComponent=!0,t({})}},{name:"showOptional",type:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether or not to append the 'optional' label to a non-required field label."))}return t.isMDXComponent=!0,t({})}},{name:"type",type:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Specifies the type of input element to display."))}return t.isMDXComponent=!0,t({})}},{name:"value",type:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"union"),Object(a.mdx)("pre",null,Object(a.mdx)("code",V({parentName:"pre"},{className:"language-json"}),'[\n {\n  "name": "string"\n },\n {\n  "name": "number"\n }\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=R(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The value of the input field. Use this to create a controlled input."))}return t.isMDXComponent=!0,t({})}}]})};function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var H={};function U(e){var t=e.components,n=W(e,["components"]);return Object(a.mdx)("wrapper",B({},H,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(l.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"terra-form-input-field"},"Terra Form Input Field"),Object(a.mdx)("p",null,Object(a.mdx)("a",B({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/master/packages/terra-form-input"}),"terra-form-input")," component that is wrapped inside a\n",Object(a.mdx)("a",B({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/master/packages/terra-form-field"}),"terra-form-field")," component."),Object(a.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Install with ",Object(a.mdx)("a",B({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(a.mdx)("ul",{parentName:"li"},Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"npm install terra-form-input"))))),Object(a.mdx)("h2",{id:"usage"},"Usage"),Object(a.mdx)("pre",null,Object(a.mdx)("code",B({parentName:"pre"},{className:"language-jsx"}),"import InputField from 'terra-form-input/lib/InputField';\n")),Object(a.mdx)("h2",{id:"component-features"},"Component Features"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",B({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",B({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",B({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",B({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#ltr--rtl-support"}),"LTR/RTL Support"))),Object(a.mdx)("h2",{id:"examples"},"Examples"),Object(a.mdx)(b,{mdxType:"InputFieldExample"}),Object(a.mdx)(j,{mdxType:"RequiredInputFieldExample"}),Object(a.mdx)(X,{description:"Applies theme-specific styling for incomplete. ***Note: Only use incomplete if given specific guidance, reserved for specific applications when no value has been provided. Not for general use.***",mdxType:"IncompleteInputFieldExample"}),Object(a.mdx)(F,{mdxType:"NumberInputFieldExample"}),Object(a.mdx)("h2",{id:"form-input-field-props"},"Form Input Field Props"),Object(a.mdx)(A,{mdxType:"FormInputFieldPropsTable"}))}U.isMDXComponent=!0},857:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),o=u(n(3)),a=u(n(5)),l=u(n(861));function u(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var x=a.default.bind(l.default),_={example:o.default.element,exampleSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(n,e);var t=m(n);function n(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(r=t.call(this,e)).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},r.handleBgToggle=r.handleBgToggle.bind(f(r)),r.handleCodeToggle=r.handleCodeToggle.bind(f(r)),r}return c(n,null,[{key:"renderHeader",value:function(e){return e?r.default.createElement("div",{className:x("header")},r.default.createElement("h2",{className:x("title")},e)):null}},{key:"renderDescription",value:function(e){return e?r.default.createElement("div",{className:x("description")},e):null}}]),c(n,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.example,o=e.exampleSrc,a=e.title,l=e.description,u=this.state,p=u.isExpanded,i=u.isBackgroundTransparent;return r.default.createElement("div",{className:x("template")},n.renderHeader(a),r.default.createElement("div",{className:x("content",{"dynamic-content":i})},n.renderDescription(l),t),o&&r.default.createElement("div",{className:x("footer")},r.default.createElement("div",{className:x("button-container")},r.default.createElement("button",{type:"button",className:x("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),r.default.createElement("button",{type:"button",className:x("code-toggle"),onClick:this.handleCodeToggle},r.default.createElement("span",{className:x("chevron-left")}),r.default.createElement("span",null,"Code"),r.default.createElement("span",{className:x("chevron-right")}))),p&&r.default.createElement("div",{className:x("code")},o)))}}]),n}(r.default.Component);y.propTypes=_,y.defaultProps={isExpanded:!1};var v=y;t.default=v},858:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),o=u(n(3)),a=u(n(5)),l=u(n(859));function u(e){return e&&e.__esModule?e:{default:e}}var p=a.default.bind(l.default),i={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},c=function(e){var t=e.src,n=e.name,o=e.url,a=e.version,l=r.default.createElement("a",{className:p("badge"),href:o||"https://www.npmjs.org/package/".concat(n,"/v/").concat(a)},r.default.createElement("span",{className:p("badge-name")},o?"package":"npm"),r.default.createElement("span",{className:p("badge-version")},"v".concat(a))),u=t?r.default.createElement("a",{className:p("badge"),href:t},r.default.createElement("span",{className:p("badge-name")},"github"),r.default.createElement("span",{className:p("badge-version")},"source")):void 0;return r.default.createElement("div",{className:p("badge-container")},l,u)};c.propTypes=i;var d=c;t.default=d},859:function(e,t,n){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}},860:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),o=u(n(3)),a=u(n(5)),l=u(n(862));function u(e){return e&&e.__esModule?e:{default:e}}var p=a.default.bind(l.default),i={rows:o.default.arrayOf(o.default.shape({name:o.default.string,type:o.default.func,required:o.default.bool,defaultValue:o.default.string,description:o.default.func}))},c=function(e){var t=e.rows;return r.default.createElement("table",{className:p("table")},r.default.createElement("thead",null,r.default.createElement("tr",{className:p("tr")},r.default.createElement("th",{className:p("th")},"Prop Name"),r.default.createElement("th",{className:p("th")},"Type"),r.default.createElement("th",{className:p("th")},"Is Required"),r.default.createElement("th",{className:p("th")},"Default Value"),r.default.createElement("th",{className:p("th")},"Description"))),r.default.createElement("tbody",null,t.map((function(e){return r.default.createElement("tr",{className:p(["tr","props-tr"]),key:e.name},r.default.createElement("td",{className:p(["td","strong","props-td"])},e.name),r.default.createElement("td",{className:p(["td","props-td"])},e.type()),r.default.createElement("td",{className:p(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),r.default.createElement("td",{className:p(["td","props-td"])},e.defaultValue),r.default.createElement("td",{className:p(["td","props-td"])},e.description()))}))))};c.propTypes=i;var d=c;t.default=d},861:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},862:function(e,t,n){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},971:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(n(0)),o=p(n(3)),a=p(n(283)),l=p(n(294)),u=p(n(285));function p(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d={inputId:o.default.string.isRequired,label:o.default.string.isRequired,defaultValue:o.default.oneOfType([o.default.string,o.default.number]),disabled:o.default.bool,error:o.default.node,errorIcon:o.default.element,help:o.default.node,hideRequired:o.default.bool,inputAttrs:o.default.object,isIncomplete:o.default.bool,isInline:o.default.bool,isInvalid:o.default.bool,isLabelHidden:o.default.bool,labelAttrs:o.default.object,maxWidth:o.default.string,onChange:o.default.func,placeholder:o.default.string,refCallback:o.default.func,required:o.default.bool,showOptional:o.default.bool,type:o.default.string,value:o.default.oneOfType([o.default.string,o.default.number])},m={defaultValue:void 0,disabled:!1,error:null,errorIcon:r.default.createElement(l.default,null),help:null,hideRequired:!1,inputAttrs:{},isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,labelAttrs:{},onChange:void 0,placeholder:void 0,maxWidth:void 0,refCallback:void 0,required:!1,showOptional:!1,type:void 0,value:void 0},s=function(e){var t,n=e.defaultValue,o=e.disabled,l=e.error,p=e.errorIcon,d=e.help,m=e.hideRequired,s=e.inputAttrs,f=e.inputId,b=e.isIncomplete,x=e.isInline,_=e.isInvalid,y=e.isLabelHidden,v=e.label,h=e.labelAttrs,O=e.maxWidth,j=e.onChange,g=e.placeholder,T=e.refCallback,w=e.required,M=e.showOptional,D=e.type,E=e.value,X=c(e,["defaultValue","disabled","error","errorIcon","help","hideRequired","inputAttrs","inputId","isIncomplete","isInline","isInvalid","isLabelHidden","label","labelAttrs","maxWidth","onChange","placeholder","refCallback","required","showOptional","type","value"]);d&&l&&_?t="".concat(f,"-error ").concat(f,"-help"):(d&&(t="".concat(f,"-help")),l&&_&&(t="".concat(f,"-error")));var I=D||s.type;return r.default.createElement(a.default,i({label:v,labelAttrs:h,error:l,errorIcon:p,help:d,hideRequired:m,required:w,showOptional:M,isInvalid:_,isInline:x,isLabelHidden:y,htmlFor:f,maxWidth:O},X),r.default.createElement(u.default,i({},s,{disabled:s.disabled||o,id:f,isIncomplete:b,type:I,onChange:j,placeholder:g||s.placeholder,value:E,defaultValue:n,refCallback:T,"aria-describedby":t})))};s.propTypes=d,s.defaultProps=m;var f=s;t.default=f}}]);
//# sourceMappingURL=109-dee0b826d4fee5e9efe1.js.map