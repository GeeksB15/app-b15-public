import{e as x,U as D,a as E,b as N,R as W,l as b}from"./MonacoEditor.f224289b.js";import"./index.fd6a1d5c.js";var j=globalThis&&globalThis.__awaiter||function(t,r,e,i){function a(n){return n instanceof e?n:new e(function(o){o(n)})}return new(e||(e=Promise))(function(n,o){function c(u){try{s(i.next(u))}catch(f){o(f)}}function l(u){try{s(i.throw(u))}catch(f){o(f)}}function s(u){u.done?n(u.value):a(u.value).then(c,l)}s((i=i.apply(t,r||[])).next())})},B=globalThis&&globalThis.__generator||function(t,r){var e={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},i,a,n,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(s){return function(u){return l([s,u])}}function l(s){if(i)throw new TypeError("Generator is already executing.");for(;e;)try{if(i=1,a&&(n=s[0]&2?a.return:s[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,s[1])).done)return n;switch(a=0,n&&(s=[s[0]&2,n.value]),s[0]){case 0:case 1:n=s;break;case 4:return e.label++,{value:s[1],done:!1};case 5:e.label++,a=s[1],s=[0];continue;case 7:s=e.ops.pop(),e.trys.pop();continue;default:if(n=e.trys,!(n=n.length>0&&n[n.length-1])&&(s[0]===6||s[0]===2)){e=0;continue}if(s[0]===3&&(!n||s[1]>n[0]&&s[1]<n[3])){e.label=s[1];break}if(s[0]===6&&e.label<n[1]){e.label=n[1],n=s;break}if(n&&e.label<n[2]){e.label=n[2],e.ops.push(s);break}n[2]&&e.ops.pop(),e.trys.pop();continue}s=r.call(t,e)}catch(u){s=[6,u],a=0}finally{i=n=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},U=function(){function t(r,e){var i=this;this._modeId=r,this._defaults=e,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange(function(){return i._stopWorker()}),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange(function(){return i._updateExtraLibs()})}return t.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},t.prototype.dispose=function(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()},t.prototype._updateExtraLibs=function(){return j(this,void 0,void 0,function(){var r,e;return B(this,function(i){switch(i.label){case 0:return this._worker?(r=++this._updateExtraLibsToken,[4,this._worker.getProxy()]):[2];case 1:return e=i.sent(),this._updateExtraLibsToken!==r?[2]:(e.updateExtraLibs(this._defaults.getExtraLibs()),[2])}})})},t.prototype._getClient=function(){var r=this;if(!this._client){this._worker=x.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath}});var e=this._worker.getProxy();this._defaults.getEagerModelSync()&&(e=e.then(function(i){return r._worker?r._worker.withSyncedResources(x.getModels().filter(function(a){return a.getModeId()===r._modeId}).map(function(a){return a.uri})):i})),this._client=e}return this._client},t.prototype.getLanguageServiceWorker=function(){for(var r=this,e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];var a;return this._getClient().then(function(n){a=n}).then(function(n){if(r._worker)return r._worker.withSyncedResources(e)}).then(function(n){return a})},t}(),d={};d["lib.d.ts"]=!0;d["lib.dom.d.ts"]=!0;d["lib.dom.iterable.d.ts"]=!0;d["lib.es2015.collection.d.ts"]=!0;d["lib.es2015.core.d.ts"]=!0;d["lib.es2015.d.ts"]=!0;d["lib.es2015.generator.d.ts"]=!0;d["lib.es2015.iterable.d.ts"]=!0;d["lib.es2015.promise.d.ts"]=!0;d["lib.es2015.proxy.d.ts"]=!0;d["lib.es2015.reflect.d.ts"]=!0;d["lib.es2015.symbol.d.ts"]=!0;d["lib.es2015.symbol.wellknown.d.ts"]=!0;d["lib.es2016.array.include.d.ts"]=!0;d["lib.es2016.d.ts"]=!0;d["lib.es2016.full.d.ts"]=!0;d["lib.es2017.d.ts"]=!0;d["lib.es2017.full.d.ts"]=!0;d["lib.es2017.intl.d.ts"]=!0;d["lib.es2017.object.d.ts"]=!0;d["lib.es2017.sharedmemory.d.ts"]=!0;d["lib.es2017.string.d.ts"]=!0;d["lib.es2017.typedarrays.d.ts"]=!0;d["lib.es2018.asyncgenerator.d.ts"]=!0;d["lib.es2018.asynciterable.d.ts"]=!0;d["lib.es2018.d.ts"]=!0;d["lib.es2018.full.d.ts"]=!0;d["lib.es2018.intl.d.ts"]=!0;d["lib.es2018.promise.d.ts"]=!0;d["lib.es2018.regexp.d.ts"]=!0;d["lib.es2019.array.d.ts"]=!0;d["lib.es2019.d.ts"]=!0;d["lib.es2019.full.d.ts"]=!0;d["lib.es2019.object.d.ts"]=!0;d["lib.es2019.string.d.ts"]=!0;d["lib.es2019.symbol.d.ts"]=!0;d["lib.es2020.bigint.d.ts"]=!0;d["lib.es2020.d.ts"]=!0;d["lib.es2020.full.d.ts"]=!0;d["lib.es2020.intl.d.ts"]=!0;d["lib.es2020.promise.d.ts"]=!0;d["lib.es2020.sharedmemory.d.ts"]=!0;d["lib.es2020.string.d.ts"]=!0;d["lib.es2020.symbol.wellknown.d.ts"]=!0;d["lib.es5.d.ts"]=!0;d["lib.es6.d.ts"]=!0;d["lib.esnext.d.ts"]=!0;d["lib.esnext.full.d.ts"]=!0;d["lib.esnext.intl.d.ts"]=!0;d["lib.esnext.promise.d.ts"]=!0;d["lib.esnext.string.d.ts"]=!0;d["lib.esnext.weakref.d.ts"]=!0;d["lib.scripthost.d.ts"]=!0;d["lib.webworker.d.ts"]=!0;d["lib.webworker.importscripts.d.ts"]=!0;d["lib.webworker.iterable.d.ts"]=!0;var C=globalThis&&globalThis.__extends||function(){var t=function(r,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,a){i.__proto__=a}||function(i,a){for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(i[n]=a[n])},t(r,e)};return function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");t(r,e);function i(){this.constructor=r}r.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),k=globalThis&&globalThis.__awaiter||function(t,r,e,i){function a(n){return n instanceof e?n:new e(function(o){o(n)})}return new(e||(e=Promise))(function(n,o){function c(u){try{s(i.next(u))}catch(f){o(f)}}function l(u){try{s(i.throw(u))}catch(f){o(f)}}function s(u){u.done?n(u.value):a(u.value).then(c,l)}s((i=i.apply(t,r||[])).next())})},_=globalThis&&globalThis.__generator||function(t,r){var e={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},i,a,n,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(s){return function(u){return l([s,u])}}function l(s){if(i)throw new TypeError("Generator is already executing.");for(;e;)try{if(i=1,a&&(n=s[0]&2?a.return:s[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,s[1])).done)return n;switch(a=0,n&&(s=[s[0]&2,n.value]),s[0]){case 0:case 1:n=s;break;case 4:return e.label++,{value:s[1],done:!1};case 5:e.label++,a=s[1],s=[0];continue;case 7:s=e.ops.pop(),e.trys.pop();continue;default:if(n=e.trys,!(n=n.length>0&&n[n.length-1])&&(s[0]===6||s[0]===2)){e=0;continue}if(s[0]===3&&(!n||s[1]>n[0]&&s[1]<n[3])){e.label=s[1];break}if(s[0]===6&&e.label<n[1]){e.label=n[1],n=s;break}if(n&&e.label<n[2]){e.label=n[2],e.ops.push(s);break}n[2]&&e.ops.pop(),e.trys.pop();continue}s=r.call(t,e)}catch(u){s=[6,u],a=0}finally{i=n=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},P;(function(t){t[t.None=0]="None",t[t.Block=1]="Block",t[t.Smart=2]="Smart"})(P||(P={}));function I(t,r,e){if(e===void 0&&(e=0),typeof t=="string")return t;if(t===void 0)return"";var i="";if(e){i+=r;for(var a=0;a<e;a++)i+="  "}if(i+=t.messageText,e++,t.next)for(var n=0,o=t.next;n<o.length;n++){var c=o[n];i+=I(c,r,e)}return i}function A(t){return t?t.map(function(r){return r.text}).join(""):""}var T=function(){function t(r){this._worker=r}return t.prototype._textSpanToRange=function(r,e){var i=r.getPositionAt(e.start),a=r.getPositionAt(e.start+e.length),n=i.lineNumber,o=i.column,c=a.lineNumber,l=a.column;return{startLineNumber:n,startColumn:o,endLineNumber:c,endColumn:l}},t}(),z=function(){function t(r){this._worker=r,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}return t.prototype.isLibFile=function(r){return r&&r.path.indexOf("/lib.")===0?!!d[r.path.slice(1)]:!1},t.prototype.getOrCreateModel=function(r){var e=x.getModel(r);return e||(this.isLibFile(r)&&this._hasFetchedLibFiles?x.createModel(this._libFiles[r.path.slice(1)],"typescript",r):null)},t.prototype._containsLibFile=function(r){for(var e=0,i=r;e<i.length;e++){var a=i[e];if(this.isLibFile(a))return!0}return!1},t.prototype.fetchLibFilesIfNecessary=function(r){return k(this,void 0,void 0,function(){return _(this,function(e){switch(e.label){case 0:return this._containsLibFile(r)?[4,this._fetchLibFiles()]:[2];case 1:return e.sent(),[2]}})})},t.prototype._fetchLibFiles=function(){var r=this;return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then(function(e){return e.getLibFiles()}).then(function(e){r._hasFetchedLibFiles=!0,r._libFiles=e})),this._fetchLibFilesPromise},t}(),L;(function(t){t[t.Warning=0]="Warning",t[t.Error=1]="Error",t[t.Suggestion=2]="Suggestion",t[t.Message=3]="Message"})(L||(L={}));var G=function(t){C(r,t);function r(e,i,a,n){var o=t.call(this,n)||this;o._libFiles=e,o._defaults=i,o._selector=a,o._disposables=[],o._listener=Object.create(null);var c=function(u){if(u.getModeId()===a){var f,p=u.onDidChangeContent(function(){clearTimeout(f),f=setTimeout(function(){return o._doValidate(u)},500)});o._listener[u.uri.toString()]={dispose:function(){p.dispose(),clearTimeout(f)}},o._doValidate(u)}},l=function(u){x.setModelMarkers(u,o._selector,[]);var f=u.uri.toString();o._listener[f]&&(o._listener[f].dispose(),delete o._listener[f])};o._disposables.push(x.onDidCreateModel(c)),o._disposables.push(x.onWillDisposeModel(l)),o._disposables.push(x.onDidChangeModelLanguage(function(u){l(u.model),c(u.model)})),o._disposables.push({dispose:function(){for(var u=0,f=x.getModels();u<f.length;u++){var p=f[u];l(p)}}});var s=function(){for(var u=0,f=x.getModels();u<f.length;u++){var p=f[u];l(p),c(p)}};return o._disposables.push(o._defaults.onDidChange(s)),o._disposables.push(o._defaults.onDidExtraLibsChange(s)),x.getModels().forEach(c),o}return r.prototype.dispose=function(){this._disposables.forEach(function(e){return e&&e.dispose()}),this._disposables=[]},r.prototype._doValidate=function(e){return k(this,void 0,void 0,function(){var i,a,n,o,c,l,s,u,f,p=this;return _(this,function(h){switch(h.label){case 0:return[4,this._worker(e.uri)];case 1:return i=h.sent(),e.isDisposed()?[2]:(a=[],n=this._defaults.getDiagnosticsOptions(),o=n.noSyntaxValidation,c=n.noSemanticValidation,l=n.noSuggestionDiagnostics,o||a.push(i.getSyntacticDiagnostics(e.uri.toString())),c||a.push(i.getSemanticDiagnostics(e.uri.toString())),l||a.push(i.getSuggestionDiagnostics(e.uri.toString())),[4,Promise.all(a)]);case 2:return s=h.sent(),!s||e.isDisposed()?[2]:(u=s.reduce(function(g,m){return m.concat(g)},[]).filter(function(g){return(p._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(g.code)===-1}),f=u.map(function(g){return g.relatedInformation||[]}).reduce(function(g,m){return m.concat(g)},[]).map(function(g){return g.file?D.parse(g.file.fileName):null}),[4,this._libFiles.fetchLibFilesIfNecessary(f)]);case 3:return h.sent(),e.isDisposed()?[2]:(x.setModelMarkers(e,this._selector,u.map(function(g){return p._convertDiagnostics(e,g)})),[2])}})})},r.prototype._convertDiagnostics=function(e,i){var a=i.start||0,n=i.length||1,o=e.getPositionAt(a),c=o.lineNumber,l=o.column,s=e.getPositionAt(a+n),u=s.lineNumber,f=s.column,p=[];return i.reportsUnnecessary&&p.push(E.Unnecessary),i.reportsDeprecated&&p.push(E.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(i.category),startLineNumber:c,startColumn:l,endLineNumber:u,endColumn:f,message:I(i.messageText,`
`),code:i.code.toString(),tags:p,relatedInformation:this._convertRelatedInformation(e,i.relatedInformation)}},r.prototype._convertRelatedInformation=function(e,i){var a=this;if(!!i){var n=[];return i.forEach(function(o){var c=e;if(o.file){var l=D.parse(o.file.fileName);c=a._libFiles.getOrCreateModel(l)}if(!!c){var s=o.start||0,u=o.length||1,f=c.getPositionAt(s),p=f.lineNumber,h=f.column,g=c.getPositionAt(s+u),m=g.lineNumber,y=g.column;n.push({resource:c.uri,startLineNumber:p,startColumn:h,endLineNumber:m,endColumn:y,message:I(o.messageText,`
`)})}}),n}},r.prototype._tsDiagnosticCategoryToMarkerSeverity=function(e){switch(e){case L.Error:return N.Error;case L.Message:return N.Info;case L.Warning:return N.Warning;case L.Suggestion:return N.Hint}return N.Info},r}(T),J=function(t){C(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return Object.defineProperty(r.prototype,"triggerCharacters",{get:function(){return["."]},enumerable:!1,configurable:!0}),r.prototype.provideCompletionItems=function(e,i,a,n){return k(this,void 0,void 0,function(){var o,c,l,s,u,f,p;return _(this,function(h){switch(h.label){case 0:return o=e.getWordUntilPosition(i),c=new W(i.lineNumber,o.startColumn,i.lineNumber,o.endColumn),l=e.uri,s=e.getOffsetAt(i),[4,this._worker(l)];case 1:return u=h.sent(),e.isDisposed()?[2]:[4,u.getCompletionsAtPosition(l.toString(),s)];case 2:return f=h.sent(),!f||e.isDisposed()?[2]:(p=f.entries.map(function(g){var m,y=c;if(g.replacementSpan){var w=e.getPositionAt(g.replacementSpan.start),F=e.getPositionAt(g.replacementSpan.start+g.replacementSpan.length);y=new W(w.lineNumber,w.column,F.lineNumber,F.column)}var K=[];return((m=g.kindModifiers)===null||m===void 0?void 0:m.indexOf("deprecated"))!==-1&&K.push(b.CompletionItemTag.Deprecated),{uri:l,position:i,offset:s,range:y,label:g.name,insertText:g.name,sortText:g.sortText,kind:r.convertKind(g.kind),tags:K}}),[2,{suggestions:p}])}})})},r.prototype.resolveCompletionItem=function(e,i){return k(this,void 0,void 0,function(){var a,n,o,c,l,s;return _(this,function(u){switch(u.label){case 0:return a=e,n=a.uri,o=a.position,c=a.offset,[4,this._worker(n)];case 1:return l=u.sent(),[4,l.getCompletionEntryDetails(n.toString(),c,a.label)];case 2:return s=u.sent(),s?[2,{uri:n,position:o,label:s.name,kind:r.convertKind(s.kind),detail:A(s.displayParts),documentation:{value:r.createDocumentationString(s)}}]:[2,a]}})})},r.convertKind=function(e){switch(e){case v.primitiveType:case v.keyword:return b.CompletionItemKind.Keyword;case v.variable:case v.localVariable:return b.CompletionItemKind.Variable;case v.memberVariable:case v.memberGetAccessor:case v.memberSetAccessor:return b.CompletionItemKind.Field;case v.function:case v.memberFunction:case v.constructSignature:case v.callSignature:case v.indexSignature:return b.CompletionItemKind.Function;case v.enum:return b.CompletionItemKind.Enum;case v.module:return b.CompletionItemKind.Module;case v.class:return b.CompletionItemKind.Class;case v.interface:return b.CompletionItemKind.Interface;case v.warning:return b.CompletionItemKind.File}return b.CompletionItemKind.Property},r.createDocumentationString=function(e){var i=A(e.documentation);if(e.tags)for(var a=0,n=e.tags;a<n.length;a++){var o=n[a];i+=`

`+H(o)}return i},r}(T);function H(t){var r="*@"+t.name+"*";if(t.name==="param"&&t.text){var e=t.text.split(" "),i=e[0],a=e.slice(1);r+="`"+i+"`",a.length>0&&(r+=" \u2014 "+a.join(" "))}else t.text&&(r+=" \u2014 "+t.text);return r}var Q=function(t){C(r,t);function r(){var e=t!==null&&t.apply(this,arguments)||this;return e.signatureHelpTriggerCharacters=["(",","],e}return r._toSignatureHelpTriggerReason=function(e){switch(e.triggerKind){case b.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case b.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case b.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}},r.prototype.provideSignatureHelp=function(e,i,a,n){return k(this,void 0,void 0,function(){var o,c,l,s,u;return _(this,function(f){switch(f.label){case 0:return o=e.uri,c=e.getOffsetAt(i),[4,this._worker(o)];case 1:return l=f.sent(),e.isDisposed()?[2]:[4,l.getSignatureHelpItems(o.toString(),c,{triggerReason:r._toSignatureHelpTriggerReason(n)})];case 2:return s=f.sent(),!s||e.isDisposed()?[2]:(u={activeSignature:s.selectedItemIndex,activeParameter:s.argumentIndex,signatures:[]},s.items.forEach(function(p){var h={label:"",parameters:[]};h.documentation={value:A(p.documentation)},h.label+=A(p.prefixDisplayParts),p.parameters.forEach(function(g,m,y){var w=A(g.displayParts),F={label:w,documentation:{value:A(g.documentation)}};h.label+=w,h.parameters.push(F),m<y.length-1&&(h.label+=A(p.separatorDisplayParts))}),h.label+=A(p.suffixDisplayParts),u.signatures.push(h)}),[2,{value:u,dispose:function(){}}])}})})},r}(T),$=function(t){C(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return r.prototype.provideHover=function(e,i,a){return k(this,void 0,void 0,function(){var n,o,c,l,s,u,f;return _(this,function(p){switch(p.label){case 0:return n=e.uri,o=e.getOffsetAt(i),[4,this._worker(n)];case 1:return c=p.sent(),e.isDisposed()?[2]:[4,c.getQuickInfoAtPosition(n.toString(),o)];case 2:return l=p.sent(),!l||e.isDisposed()?[2]:(s=A(l.documentation),u=l.tags?l.tags.map(function(h){return H(h)}).join(`  

`):"",f=A(l.displayParts),[2,{range:this._textSpanToRange(e,l.textSpan),contents:[{value:"```typescript\n"+f+"\n```\n"},{value:s+(u?`

`+u:"")}]}])}})})},r}(T),q=function(t){C(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return r.prototype.provideDocumentHighlights=function(e,i,a){return k(this,void 0,void 0,function(){var n,o,c,l,s=this;return _(this,function(u){switch(u.label){case 0:return n=e.uri,o=e.getOffsetAt(i),[4,this._worker(n)];case 1:return c=u.sent(),e.isDisposed()?[2]:[4,c.getOccurrencesAtPosition(n.toString(),o)];case 2:return l=u.sent(),!l||e.isDisposed()?[2]:[2,l.map(function(f){return{range:s._textSpanToRange(e,f.textSpan),kind:f.isWriteAccess?b.DocumentHighlightKind.Write:b.DocumentHighlightKind.Text}})]}})})},r}(T),X=function(t){C(r,t);function r(e,i){var a=t.call(this,i)||this;return a._libFiles=e,a}return r.prototype.provideDefinition=function(e,i,a){return k(this,void 0,void 0,function(){var n,o,c,l,s,u,f,p,h,g;return _(this,function(m){switch(m.label){case 0:return n=e.uri,o=e.getOffsetAt(i),[4,this._worker(n)];case 1:return c=m.sent(),e.isDisposed()?[2]:[4,c.getDefinitionAtPosition(n.toString(),o)];case 2:return l=m.sent(),!l||e.isDisposed()?[2]:[4,this._libFiles.fetchLibFilesIfNecessary(l.map(function(y){return D.parse(y.fileName)}))];case 3:if(m.sent(),e.isDisposed())return[2];for(s=[],u=0,f=l;u<f.length;u++)p=f[u],h=D.parse(p.fileName),g=this._libFiles.getOrCreateModel(h),g&&s.push({uri:h,range:this._textSpanToRange(g,p.textSpan)});return[2,s]}})})},r}(T),Y=function(t){C(r,t);function r(e,i){var a=t.call(this,i)||this;return a._libFiles=e,a}return r.prototype.provideReferences=function(e,i,a,n){return k(this,void 0,void 0,function(){var o,c,l,s,u,f,p,h,g,m;return _(this,function(y){switch(y.label){case 0:return o=e.uri,c=e.getOffsetAt(i),[4,this._worker(o)];case 1:return l=y.sent(),e.isDisposed()?[2]:[4,l.getReferencesAtPosition(o.toString(),c)];case 2:return s=y.sent(),!s||e.isDisposed()?[2]:[4,this._libFiles.fetchLibFilesIfNecessary(s.map(function(w){return D.parse(w.fileName)}))];case 3:if(y.sent(),e.isDisposed())return[2];for(u=[],f=0,p=s;f<p.length;f++)h=p[f],g=D.parse(h.fileName),m=this._libFiles.getOrCreateModel(g),m&&u.push({uri:g,range:this._textSpanToRange(m,h.textSpan)});return[2,u]}})})},r}(T),Z=function(t){C(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return r.prototype.provideDocumentSymbols=function(e,i){return k(this,void 0,void 0,function(){var a,n,o,c,l,s=this;return _(this,function(u){switch(u.label){case 0:return a=e.uri,[4,this._worker(a)];case 1:return n=u.sent(),e.isDisposed()?[2]:[4,n.getNavigationBarItems(a.toString())];case 2:return o=u.sent(),!o||e.isDisposed()?[2]:(c=function(f,p,h){var g={name:p.text,detail:"",kind:S[p.kind]||b.SymbolKind.Variable,range:s._textSpanToRange(e,p.spans[0]),selectionRange:s._textSpanToRange(e,p.spans[0]),tags:[],containerName:h};if(p.childItems&&p.childItems.length>0)for(var m=0,y=p.childItems;m<y.length;m++){var w=y[m];c(f,w,g.name)}f.push(g)},l=[],o.forEach(function(f){return c(l,f)}),[2,l])}})})},r}(T),v=function(){function t(){}return t.unknown="",t.keyword="keyword",t.script="script",t.module="module",t.class="class",t.interface="interface",t.type="type",t.enum="enum",t.variable="var",t.localVariable="local var",t.function="function",t.localFunction="local function",t.memberFunction="method",t.memberGetAccessor="getter",t.memberSetAccessor="setter",t.memberVariable="property",t.constructorImplementation="constructor",t.callSignature="call",t.indexSignature="index",t.constructSignature="construct",t.parameter="parameter",t.typeParameter="type parameter",t.primitiveType="primitive type",t.label="label",t.alias="alias",t.const="const",t.let="let",t.warning="warning",t}(),S=Object.create(null);S[v.module]=b.SymbolKind.Module;S[v.class]=b.SymbolKind.Class;S[v.enum]=b.SymbolKind.Enum;S[v.interface]=b.SymbolKind.Interface;S[v.memberFunction]=b.SymbolKind.Method;S[v.memberVariable]=b.SymbolKind.Property;S[v.memberGetAccessor]=b.SymbolKind.Property;S[v.memberSetAccessor]=b.SymbolKind.Property;S[v.variable]=b.SymbolKind.Variable;S[v.const]=b.SymbolKind.Variable;S[v.localVariable]=b.SymbolKind.Variable;S[v.variable]=b.SymbolKind.Variable;S[v.function]=b.SymbolKind.Function;S[v.localFunction]=b.SymbolKind.Function;var O=function(t){C(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return r._convertOptions=function(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:P.Smart,NewLineCharacter:`
`,InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}},r.prototype._convertTextChanges=function(e,i){return{text:i.newText,range:this._textSpanToRange(e,i.span)}},r}(T),ee=function(t){C(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return r.prototype.provideDocumentRangeFormattingEdits=function(e,i,a,n){return k(this,void 0,void 0,function(){var o,c,l,s,u,f=this;return _(this,function(p){switch(p.label){case 0:return o=e.uri,c=e.getOffsetAt({lineNumber:i.startLineNumber,column:i.startColumn}),l=e.getOffsetAt({lineNumber:i.endLineNumber,column:i.endColumn}),[4,this._worker(o)];case 1:return s=p.sent(),e.isDisposed()?[2]:[4,s.getFormattingEditsForRange(o.toString(),c,l,O._convertOptions(a))];case 2:return u=p.sent(),!u||e.isDisposed()?[2]:[2,u.map(function(h){return f._convertTextChanges(e,h)})]}})})},r}(O),te=function(t){C(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return Object.defineProperty(r.prototype,"autoFormatTriggerCharacters",{get:function(){return[";","}",`
`]},enumerable:!1,configurable:!0}),r.prototype.provideOnTypeFormattingEdits=function(e,i,a,n,o){return k(this,void 0,void 0,function(){var c,l,s,u,f=this;return _(this,function(p){switch(p.label){case 0:return c=e.uri,l=e.getOffsetAt(i),[4,this._worker(c)];case 1:return s=p.sent(),e.isDisposed()?[2]:[4,s.getFormattingEditsAfterKeystroke(c.toString(),l,a,O._convertOptions(n))];case 2:return u=p.sent(),!u||e.isDisposed()?[2]:[2,u.map(function(h){return f._convertTextChanges(e,h)})]}})})},r}(O),re=function(t){C(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return r.prototype.provideCodeActions=function(e,i,a,n){return k(this,void 0,void 0,function(){var o,c,l,s,u,f,p,h,g=this;return _(this,function(m){switch(m.label){case 0:return o=e.uri,c=e.getOffsetAt({lineNumber:i.startLineNumber,column:i.startColumn}),l=e.getOffsetAt({lineNumber:i.endLineNumber,column:i.endColumn}),s=O._convertOptions(e.getOptions()),u=a.markers.filter(function(y){return y.code}).map(function(y){return y.code}).map(Number),[4,this._worker(o)];case 1:return f=m.sent(),e.isDisposed()?[2]:[4,f.getCodeFixesAtPosition(o.toString(),c,l,u,s)];case 2:return p=m.sent(),!p||e.isDisposed()?[2,{actions:[],dispose:function(){}}]:(h=p.filter(function(y){return y.changes.filter(function(w){return w.isNewFile}).length===0}).map(function(y){return g._tsCodeFixActionToMonacoCodeAction(e,a,y)}),[2,{actions:h,dispose:function(){}}])}})})},r.prototype._tsCodeFixActionToMonacoCodeAction=function(e,i,a){for(var n=[],o=0,c=a.changes;o<c.length;o++)for(var l=c[o],s=0,u=l.textChanges;s<u.length;s++){var f=u[s];n.push({resource:e.uri,edit:{range:this._textSpanToRange(e,f.span),text:f.newText}})}var p={title:a.description,edit:{edits:n},diagnostics:i.markers,kind:"quickfix"};return p},r}(O),ne=function(t){C(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return r.prototype.provideRenameEdits=function(e,i,a,n){return k(this,void 0,void 0,function(){var o,c,l,s,u,f,p,h,g,m,y,w;return _(this,function(F){switch(F.label){case 0:return o=e.uri,c=o.toString(),l=e.getOffsetAt(i),[4,this._worker(o)];case 1:return s=F.sent(),e.isDisposed()?[2]:[4,s.getRenameInfo(c,l,{allowRenameOfImportPath:!1})];case 2:if(u=F.sent(),u.canRename===!1)return[2,{edits:[],rejectReason:u.localizedErrorMessage}];if(u.fileToRename!==void 0)throw new Error("Renaming files is not supported.");return[4,s.findRenameLocations(c,l,!1,!1,!1)];case 3:if(f=F.sent(),!f||e.isDisposed())return[2];for(p=[],h=0,g=f;h<g.length;h++)if(m=g[h],y=D.parse(m.fileName),w=x.getModel(y),w)p.push({resource:y,edit:{range:this._textSpanToRange(w,m.textSpan),text:a}});else throw new Error("Unknown URI "+y+".");return[2,{edits:p}]}})})},r}(T),R,M;function oe(t){M=V(t,"typescript")}function ae(t){R=V(t,"javascript")}function ue(){return new Promise(function(t,r){if(!R)return r("JavaScript not registered!");t(R)})}function ce(){return new Promise(function(t,r){if(!M)return r("TypeScript not registered!");t(M)})}function V(t,r){var e=new U(r,t),i=function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return e.getLanguageServiceWorker.apply(e,n)},a=new z(i);return b.registerCompletionItemProvider(r,new J(i)),b.registerSignatureHelpProvider(r,new Q(i)),b.registerHoverProvider(r,new $(i)),b.registerDocumentHighlightProvider(r,new q(i)),b.registerDefinitionProvider(r,new X(a,i)),b.registerReferenceProvider(r,new Y(a,i)),b.registerDocumentSymbolProvider(r,new Z(i)),b.registerDocumentRangeFormattingEditProvider(r,new ee(i)),b.registerOnTypeFormattingEditProvider(r,new te(i)),b.registerCodeActionProvider(r,new re(i)),b.registerRenameProvider(r,new ne(i)),new G(a,t,r,i),i}export{ue as getJavaScriptWorker,ce as getTypeScriptWorker,ae as setupJavaScript,oe as setupTypeScript};
