(self.webpackChunkpcf_project=self.webpackChunkpcf_project||[]).push([[765],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/Configure.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{RightArrow:()=>RightArrow,default:()=>Configure}),__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");let github_namespaceObject=__webpack_require__.p+"static/media/github.0366d3df.svg",pcf_unticked_namespaceObject=__webpack_require__.p+"static/media/pcf_unticked.5f6dc942.png",pcf_ticked_namespaceObject=__webpack_require__.p+"static/media/pcf_ticked.ed0a5894.png",pcf_with_img_namespaceObject=__webpack_require__.p+"static/media/pcf_with_img.1add29d6.png";__webpack_require__("./node_modules/path-browserify/index.js"),__webpack_require__("./node_modules/assert/build/assert.js");let RightArrow=()=>{let _components=Object.assign({svg:"svg",path:"path"},(0,lib.ah)());return(0,jsx_runtime.jsx)(_components.svg,{viewBox:"0 0 14 14",width:"8px",height:"14px",style:{marginLeft:"4px",display:"inline-block",shapeRendering:"inherit",verticalAlign:"middle",fill:"currentColor","path fill":"currentColor"},children:(0,jsx_runtime.jsx)(_components.path,{d:"m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z"})})};function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Start here"}),"\n",(0,jsx_runtime.jsxs)("div",{className:"sb-container",children:[(0,jsx_runtime.jsxs)("div",{className:"sb-section-title",children:[(0,jsx_runtime.jsx)(_components.h1,{id:"user-sign-off-pcf",children:"User Sign Off PCF"}),(0,jsx_runtime.jsxs)(_components.p,{children:["This is a Powerapps Component Framework control that I have written using React and Fluent UI V9. The purpose of this component is to allow a user to select a switch or checkbox, and have their user appear next to the checkbox when selected. To try it out, just click on the ",(0,jsx_runtime.jsx)(_components.code,{children:"Components"})," dropdown to the left, and then select the component you'd like to use."]})]}),(0,jsx_runtime.jsxs)("div",{className:"sb-section",children:[(0,jsx_runtime.jsxs)("div",{className:"sb-section-item",children:[(0,jsx_runtime.jsx)("img",{src:pcf_unticked_namespaceObject,alt:"A wall of logos representing different styling technologies"}),(0,jsx_runtime.jsx)("h4",{className:"sb-section-item-heading",children:"Unselected state"}),(0,jsx_runtime.jsx)("p",{className:"sb-section-item-paragraph",children:"When the control is not selected it appears as a regular switch component (or checkbox)."})]}),(0,jsx_runtime.jsxs)("div",{className:"sb-section-item",children:[(0,jsx_runtime.jsx)("img",{src:pcf_ticked_namespaceObject,alt:"An abstraction representing the composition of data for a component"}),(0,jsx_runtime.jsx)("h4",{className:"sb-section-item-heading",children:"Selected state"}),(0,jsx_runtime.jsxs)("p",{className:"sb-section-item-paragraph",children:["After being selected, the user who triggered the selections details are displayed, alongside a timestamp of the time of selection. Clicking on the users name will navigate to the Users record within the ",(0,jsx_runtime.jsx)(_components.code,{children:"systemusers"})," entity. "]})]}),(0,jsx_runtime.jsxs)("div",{className:"sb-section-item",children:[(0,jsx_runtime.jsx)("img",{src:pcf_with_img_namespaceObject,alt:"A representation of typography and image assets"}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h4",{className:"sb-section-item-heading",children:"Users entity image"}),(0,jsx_runtime.jsx)("p",{className:"sb-section-item-paragraph",children:"If the user who has selected the component has an entity image attached to their record, it will be displayed alongside their name."})]})]})]})]}),"\n",(0,jsx_runtime.jsx)("div",{className:"sb-container",children:(0,jsx_runtime.jsxs)("div",{className:"sb-section-title",children:[(0,jsx_runtime.jsx)(_components.h1,{id:"props",children:"Props"}),(0,jsx_runtime.jsxs)("table",{children:[(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:"Name"}),(0,jsx_runtime.jsx)("td",{children:"Type"}),(0,jsx_runtime.jsx)("td",{children:"Description"})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:"textFieldSLOT"}),(0,jsx_runtime.jsx)("td",{children:"string"}),(0,jsx_runtime.jsx)("td",{children:"Input field, single line of text"})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:"dateFormat"}),(0,jsx_runtime.jsx)("td",{children:"string"}),(0,jsx_runtime.jsx)("td",{children:"Display date timestamp in UK or US format, using 'UK' or 'US'"})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:"showTime"}),(0,jsx_runtime.jsx)("td",{children:"boolean"}),(0,jsx_runtime.jsx)("td",{children:"Choose to display time or not."})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:"switchOrCheckbox"}),(0,jsx_runtime.jsx)("td",{children:"string"}),(0,jsx_runtime.jsx)("td",{children:"Use a Switch or Checkbox Component, using 'Switch' or 'Checkbox'"})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:"theme"}),(0,jsx_runtime.jsx)("td",{children:"string"}),(0,jsx_runtime.jsxs)("td",{children:[(0,jsx_runtime.jsx)(_components.p,{children:"Shoutout to David Rivard for this, check out his article below:"}),(0,jsx_runtime.jsx)("a",{href:"https://itmustbecode.com/develop-pcf-controls-with-fluentui-react-v9/",target:"_blank",children:(0,jsx_runtime.jsx)("div",{style:{color:"blue"},children:(0,jsx_runtime.jsx)(_components.p,{children:"Develop PCF Controls with FluentUI React v9"})})})]})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:"context"}),(0,jsx_runtime.jsx)("td",{children:"ComponentFramework.Context<IInputs>"}),(0,jsx_runtime.jsx)("td",{children:"Powerapps Component Framework context"})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:"onSwitchChange"}),(0,jsx_runtime.jsx)("td",{children:"(input: string OR null) =>"}),(0,jsx_runtime.jsx)("td",{children:"Callback function to control"})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:"disabled"}),(0,jsx_runtime.jsx)("td",{children:"boolean"}),(0,jsx_runtime.jsx)("td",{children:"Whether the control should be disabled or not."})]})]})]})}),"\n",(0,jsx_runtime.jsx)("div",{className:"sb-container",children:(0,jsx_runtime.jsx)("div",{className:"sb-section-title",children:(0,jsx_runtime.jsx)(_components.h1,{id:"where-to-find",children:"Where to find"})})}),"\n",(0,jsx_runtime.jsx)("div",{className:"sb-section sb-socials",children:(0,jsx_runtime.jsxs)("div",{className:"sb-section-item",children:[(0,jsx_runtime.jsx)("img",{src:github_namespaceObject,alt:"Github logo",className:"sb-explore-image"}),(0,jsx_runtime.jsx)(_components.p,{children:"Grab the latest release from my GitHub repository."}),(0,jsx_runtime.jsxs)("a",{href:"https://github.com/keavenymalachy/SignOffPCF/releases/latest",target:"_blank",children:["Github",(0,jsx_runtime.jsx)(RightArrow,{})]})]})}),"\n",(0,jsx_runtime.jsx)("style",{children:`
  .sb-container {
    margin-bottom: 48px;
  }

  .sb-section {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  img {
    object-fit: cover;
  }

  .sb-section-title {
    margin-bottom: 32px;
  }

  .sb-section a:not(h1 a, h2 a, h3 a) {
    font-size: 14px;
  }

  .sb-section-item, .sb-grid-item {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .sb-section-item-heading {
    padding-top: 20px !important;
    padding-bottom: 5px !important;
    margin: 0 !important;
  }
  .sb-section-item-paragraph {
    margin: 0;
    padding-bottom: 10px;
  }

  .sb-chevron {
    margin-left: 5px;
  }

  .sb-features-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px 20px;
  }

  .sb-socials {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .sb-socials p {
    margin-bottom: 10px;
  }

  .sb-explore-image {
    max-height: 32px;
    align-self: flex-start;
  }

  .sb-addon {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    background-color: #EEF3F8;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    background: #EEF3F8;
    height: 180px;
    margin-bottom: 48px;
    overflow: hidden;
  }

  .sb-addon-text {
    padding-left: 48px;
    max-width: 240px;
  }

  .sb-addon-text h4 {
    padding-top: 0px;
  }

  .sb-addon-img {
    position: absolute;
    left: 345px;
    top: 0;
    height: 100%;
    width: 200%;
    overflow: hidden;
  }

  .sb-addon-img img {
    width: 650px;
    transform: rotate(-15deg);
    margin-left: 40px;
    margin-top: -72px;
    box-shadow: 0 0 1px rgba(255, 255, 255, 0);
    backface-visibility: hidden;
  }

  @media screen and (max-width: 800px) {
    .sb-addon-img {
      left: 300px;
    }
  }

  @media screen and (max-width: 600px) {
    .sb-section {
      flex-direction: column;
    }

    .sb-features-grid {
      grid-template-columns: repeat(1, 1fr);
    }

    .sb-socials {
      grid-template-columns: repeat(2, 1fr);
    }

    .sb-addon {
      height: 280px;
      align-items: flex-start;
      padding-top: 32px;
      overflow: hidden;
    }

    .sb-addon-text {
      padding-left: 24px;
    }

    .sb-addon-img {
      right: 0;
      left: 0;
      top: 130px;
      bottom: 0;
      overflow: hidden;
      height: auto;
      width: 124%;
    }

    .sb-addon-img img {
      width: 1200px;
      transform: rotate(-12deg);
      margin-left: 0;
      margin-top: 48px;
      margin-bottom: -40px;
      margin-left: -24px;
    }
  }
  `})]})}let Configure=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/path-browserify/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var process=__webpack_require__("./node_modules/process/browser.js");function assertPath(path){if("string"!=typeof path)throw TypeError("Path must be a string. Received "+JSON.stringify(path))}function normalizeStringPosix(path,allowAboveRoot){for(var code,res="",lastSegmentLength=0,lastSlash=-1,dots=0,i=0;i<=path.length;++i){if(i<path.length)code=path.charCodeAt(i);else if(47===code)break;else code=47;if(47===code){if(lastSlash===i-1||1===dots);else if(lastSlash!==i-1&&2===dots){if(res.length<2||2!==lastSegmentLength||46!==res.charCodeAt(res.length-1)||46!==res.charCodeAt(res.length-2)){if(res.length>2){var lastSlashIndex=res.lastIndexOf("/");if(lastSlashIndex!==res.length-1){-1===lastSlashIndex?(res="",lastSegmentLength=0):lastSegmentLength=(res=res.slice(0,lastSlashIndex)).length-1-res.lastIndexOf("/"),lastSlash=i,dots=0;continue}}else if(2===res.length||1===res.length){res="",lastSegmentLength=0,lastSlash=i,dots=0;continue}}allowAboveRoot&&(res.length>0?res+="/..":res="..",lastSegmentLength=2)}else res.length>0?res+="/"+path.slice(lastSlash+1,i):res=path.slice(lastSlash+1,i),lastSegmentLength=i-lastSlash-1;lastSlash=i,dots=0}else 46===code&&-1!==dots?++dots:dots=-1}return res}function _format(sep,pathObject){var dir=pathObject.dir||pathObject.root,base=pathObject.base||(pathObject.name||"")+(pathObject.ext||"");return dir?dir===pathObject.root?dir+base:dir+sep+base:base}var posix={resolve:function resolve(){for(var cwd,path,resolvedPath="",resolvedAbsolute=!1,i=arguments.length-1;i>=-1&&!resolvedAbsolute;i--)i>=0?path=arguments[i]:(void 0===cwd&&(cwd=process.cwd()),path=cwd),assertPath(path),0!==path.length&&(resolvedPath=path+"/"+resolvedPath,resolvedAbsolute=47===path.charCodeAt(0));return(resolvedPath=normalizeStringPosix(resolvedPath,!resolvedAbsolute),resolvedAbsolute)?resolvedPath.length>0?"/"+resolvedPath:"/":resolvedPath.length>0?resolvedPath:"."},normalize:function normalize(path){if(assertPath(path),0===path.length)return".";var isAbsolute=47===path.charCodeAt(0),trailingSeparator=47===path.charCodeAt(path.length-1);return(0!==(path=normalizeStringPosix(path,!isAbsolute)).length||isAbsolute||(path="."),path.length>0&&trailingSeparator&&(path+="/"),isAbsolute)?"/"+path:path},isAbsolute:function isAbsolute(path){return assertPath(path),path.length>0&&47===path.charCodeAt(0)},join:function join(){if(0==arguments.length)return".";for(var joined,i=0;i<arguments.length;++i){var arg=arguments[i];assertPath(arg),arg.length>0&&(void 0===joined?joined=arg:joined+="/"+arg)}return void 0===joined?".":posix.normalize(joined)},relative:function relative(from,to){if(assertPath(from),assertPath(to),from===to||(from=posix.resolve(from))===(to=posix.resolve(to)))return"";for(var fromStart=1;fromStart<from.length&&47===from.charCodeAt(fromStart);++fromStart);for(var fromEnd=from.length,fromLen=fromEnd-fromStart,toStart=1;toStart<to.length&&47===to.charCodeAt(toStart);++toStart);for(var toLen=to.length-toStart,length=fromLen<toLen?fromLen:toLen,lastCommonSep=-1,i=0;i<=length;++i){if(i===length){if(toLen>length){if(47===to.charCodeAt(toStart+i))return to.slice(toStart+i+1);if(0===i)return to.slice(toStart+i)}else fromLen>length&&(47===from.charCodeAt(fromStart+i)?lastCommonSep=i:0===i&&(lastCommonSep=0));break}var fromCode=from.charCodeAt(fromStart+i);if(fromCode!==to.charCodeAt(toStart+i))break;47===fromCode&&(lastCommonSep=i)}var out="";for(i=fromStart+lastCommonSep+1;i<=fromEnd;++i)(i===fromEnd||47===from.charCodeAt(i))&&(0===out.length?out+="..":out+="/..");return out.length>0?out+to.slice(toStart+lastCommonSep):(toStart+=lastCommonSep,47===to.charCodeAt(toStart)&&++toStart,to.slice(toStart))},_makeLong:function _makeLong(path){return path},dirname:function dirname(path){if(assertPath(path),0===path.length)return".";for(var code=path.charCodeAt(0),hasRoot=47===code,end=-1,matchedSlash=!0,i=path.length-1;i>=1;--i)if(47===(code=path.charCodeAt(i))){if(!matchedSlash){end=i;break}}else matchedSlash=!1;return -1===end?hasRoot?"/":".":hasRoot&&1===end?"//":path.slice(0,end)},basename:function basename(path,ext){if(void 0!==ext&&"string"!=typeof ext)throw TypeError('"ext" argument must be a string');assertPath(path);var i,start=0,end=-1,matchedSlash=!0;if(void 0!==ext&&ext.length>0&&ext.length<=path.length){if(ext.length===path.length&&ext===path)return"";var extIdx=ext.length-1,firstNonSlashEnd=-1;for(i=path.length-1;i>=0;--i){var code=path.charCodeAt(i);if(47===code){if(!matchedSlash){start=i+1;break}}else -1===firstNonSlashEnd&&(matchedSlash=!1,firstNonSlashEnd=i+1),extIdx>=0&&(code===ext.charCodeAt(extIdx)?-1==--extIdx&&(end=i):(extIdx=-1,end=firstNonSlashEnd))}return start===end?end=firstNonSlashEnd:-1===end&&(end=path.length),path.slice(start,end)}for(i=path.length-1;i>=0;--i)if(47===path.charCodeAt(i)){if(!matchedSlash){start=i+1;break}}else -1===end&&(matchedSlash=!1,end=i+1);return -1===end?"":path.slice(start,end)},extname:function extname(path){assertPath(path);for(var startDot=-1,startPart=0,end=-1,matchedSlash=!0,preDotState=0,i=path.length-1;i>=0;--i){var code=path.charCodeAt(i);if(47===code){if(!matchedSlash){startPart=i+1;break}continue}-1===end&&(matchedSlash=!1,end=i+1),46===code?-1===startDot?startDot=i:1!==preDotState&&(preDotState=1):-1!==startDot&&(preDotState=-1)}return -1===startDot||-1===end||0===preDotState||1===preDotState&&startDot===end-1&&startDot===startPart+1?"":path.slice(startDot,end)},format:function format(pathObject){if(null===pathObject||"object"!=typeof pathObject)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof pathObject);return _format("/",pathObject)},parse:function parse(path){assertPath(path);var start,ret={root:"",dir:"",base:"",ext:"",name:""};if(0===path.length)return ret;var code=path.charCodeAt(0),isAbsolute=47===code;isAbsolute?(ret.root="/",start=1):start=0;for(var startDot=-1,startPart=0,end=-1,matchedSlash=!0,i=path.length-1,preDotState=0;i>=start;--i){if(47===(code=path.charCodeAt(i))){if(!matchedSlash){startPart=i+1;break}continue}-1===end&&(matchedSlash=!1,end=i+1),46===code?-1===startDot?startDot=i:1!==preDotState&&(preDotState=1):-1!==startDot&&(preDotState=-1)}return -1===startDot||-1===end||0===preDotState||1===preDotState&&startDot===end-1&&startDot===startPart+1?-1!==end&&(0===startPart&&isAbsolute?ret.base=ret.name=path.slice(1,end):ret.base=ret.name=path.slice(startPart,end)):(0===startPart&&isAbsolute?(ret.name=path.slice(1,startDot),ret.base=path.slice(1,end)):(ret.name=path.slice(startPart,startDot),ret.base=path.slice(startPart,end)),ret.ext=path.slice(startDot,end)),startPart>0?ret.dir=path.slice(0,startPart-1):isAbsolute&&(ret.dir="/"),ret},sep:"/",delimiter:":",win32:null,posix:null};posix.posix=posix,module.exports=posix},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=Configure-mdx.56620e39.iframe.bundle.js.map