!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["main.js"]=t():e["main.js"]=t()}(window,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){var i=n(3);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(5)(i,r);i.locals&&(e.exports=i.locals)},function(e,t,i){var r;(function(){var i=!1,o=function(e){return e instanceof o?e:this instanceof o?void(this.EXIFwrapped=e):new o(e)};e.exports&&(t=e.exports=o),t.EXIF=o;var s=o.Tags={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"},a=o.TiffTags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"},c=o.GPSTags={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},h=o.IFD1Tags={256:"ImageWidth",257:"ImageHeight",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",273:"StripOffsets",274:"Orientation",277:"SamplesPerPixel",278:"RowsPerStrip",279:"StripByteCounts",282:"XResolution",283:"YResolution",284:"PlanarConfiguration",296:"ResolutionUnit",513:"JpegIFOffset",514:"JpegIFByteCount",529:"YCbCrCoefficients",530:"YCbCrSubSampling",531:"YCbCrPositioning",532:"ReferenceBlackWhite"},l=o.StringValues={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}};function u(e){return!!e.exifdata}function d(e,t){function n(n){var r=f(n);e.exifdata=r||{};var s=function(e){var t=new DataView(e);i&&console.log("Got file of length "+e.byteLength);if(255!=t.getUint8(0)||216!=t.getUint8(1))return i&&console.log("Not a valid JPEG"),!1;var n=2,r=e.byteLength,o=function(e,t){return 56===e.getUint8(t)&&66===e.getUint8(t+1)&&73===e.getUint8(t+2)&&77===e.getUint8(t+3)&&4===e.getUint8(t+4)&&4===e.getUint8(t+5)};for(;n<r;){if(o(t,n)){var s=t.getUint8(n+7);s%2!=0&&(s+=1),0===s&&(s=4);var a=n+8+s,c=t.getUint16(n+6+s);return p(e,a,c)}n++}}(n);if(e.iptcdata=s||{},o.isXmpEnabled){var a=function(e){if(!("DOMParser"in self))return;var t=new DataView(e);i&&console.log("Got file of length "+e.byteLength);if(255!=t.getUint8(0)||216!=t.getUint8(1))return i&&console.log("Not a valid JPEG"),!1;var n=2,r=e.byteLength,o=new DOMParser;for(;n<r-4;){if("http"==S(t,n,4)){var s=n-1,a=t.getUint16(n-2)-1,c=S(t,s,a),h=c.indexOf("xmpmeta>")+8,l=(c=c.substring(c.indexOf("<x:xmpmeta"),h)).indexOf("x:xmpmeta")+10;c=c.slice(0,l)+'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tiff="http://ns.adobe.com/tiff/1.0/" xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" xmlns:exif="http://ns.adobe.com/exif/1.0/" xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" '+c.slice(l);var u=o.parseFromString(c,"text/xml");return x(u)}n++}}(n);e.xmpdata=a||{}}t&&t.call(e)}if(e.src)if(/^data\:/i.test(e.src))n(function(e,t){t=t||e.match(/^data\:([^\;]+)\;base64,/im)[1]||"",e=e.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var n=atob(e),i=n.length,r=new ArrayBuffer(i),o=new Uint8Array(r),s=0;s<i;s++)o[s]=n.charCodeAt(s);return r}(e.src));else if(/^blob\:/i.test(e.src)){(s=new FileReader).onload=function(e){n(e.target.result)},function(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="blob",n.onload=function(e){200!=this.status&&0!==this.status||t(this.response)},n.send()}(e.src,function(e){s.readAsArrayBuffer(e)})}else{var r=new XMLHttpRequest;r.onload=function(){if(200!=this.status&&0!==this.status)throw"Could not load image";n(r.response),r=null},r.open("GET",e.src,!0),r.responseType="arraybuffer",r.send(null)}else if(self.FileReader&&(e instanceof self.Blob||e instanceof self.File)){var s;(s=new FileReader).onload=function(e){i&&console.log("Got file of length "+e.target.result.byteLength),n(e.target.result)},s.readAsArrayBuffer(e)}}function f(e){var t=new DataView(e);if(i&&console.log("Got file of length "+e.byteLength),255!=t.getUint8(0)||216!=t.getUint8(1))return i&&console.log("Not a valid JPEG"),!1;for(var n,r=2,o=e.byteLength;r<o;){if(255!=t.getUint8(r))return i&&console.log("Not a valid marker at offset "+r+", found: "+t.getUint8(r)),!1;if(n=t.getUint8(r+1),i&&console.log(n),225==n)return i&&console.log("Found 0xFFE1 marker"),y(t,r+4,t.getUint16(r+2));r+=2+t.getUint16(r+2)}}var g={120:"caption",110:"credit",25:"keywords",55:"dateCreated",80:"byline",85:"bylineTitle",122:"captionWriter",105:"headline",116:"copyright",15:"category"};function p(e,t,n){for(var i,r,o,s,a=new DataView(e),c={},h=t;h<t+n;)28===a.getUint8(h)&&2===a.getUint8(h+1)&&(s=a.getUint8(h+2))in g&&((o=a.getInt16(h+3))+5,r=g[s],i=S(a,h+5,o),c.hasOwnProperty(r)?c[r]instanceof Array?c[r].push(i):c[r]=[c[r],i]:c[r]=i),h++;return c}function m(e,t,n,r,o){var s,a,c,h=e.getUint16(n,!o),l={};for(c=0;c<h;c++)s=n+12*c+2,!(a=r[e.getUint16(s,!o)])&&i&&console.log("Unknown tag: "+e.getUint16(s,!o)),l[a]=v(e,s,t,n,o);return l}function v(e,t,n,i,r){var o,s,a,c,h,l,u=e.getUint16(t+2,!r),d=e.getUint32(t+4,!r),f=e.getUint32(t+8,!r)+n;switch(u){case 1:case 7:if(1==d)return e.getUint8(t+8,!r);for(o=d>4?f:t+8,s=[],c=0;c<d;c++)s[c]=e.getUint8(o+c);return s;case 2:return S(e,o=d>4?f:t+8,d-1);case 3:if(1==d)return e.getUint16(t+8,!r);for(o=d>2?f:t+8,s=[],c=0;c<d;c++)s[c]=e.getUint16(o+2*c,!r);return s;case 4:if(1==d)return e.getUint32(t+8,!r);for(s=[],c=0;c<d;c++)s[c]=e.getUint32(f+4*c,!r);return s;case 5:if(1==d)return h=e.getUint32(f,!r),l=e.getUint32(f+4,!r),(a=new Number(h/l)).numerator=h,a.denominator=l,a;for(s=[],c=0;c<d;c++)h=e.getUint32(f+8*c,!r),l=e.getUint32(f+4+8*c,!r),s[c]=new Number(h/l),s[c].numerator=h,s[c].denominator=l;return s;case 9:if(1==d)return e.getInt32(t+8,!r);for(s=[],c=0;c<d;c++)s[c]=e.getInt32(f+4*c,!r);return s;case 10:if(1==d)return e.getInt32(f,!r)/e.getInt32(f+4,!r);for(s=[],c=0;c<d;c++)s[c]=e.getInt32(f+8*c,!r)/e.getInt32(f+4+8*c,!r);return s}}function S(e,t,i){var r="";for(n=t;n<t+i;n++)r+=String.fromCharCode(e.getUint8(n));return r}function y(e,t){if("Exif"!=S(e,t,4))return i&&console.log("Not valid EXIF data! "+S(e,t,4)),!1;var n,r,o,u,d,f=t+6;if(18761==e.getUint16(f))n=!1;else{if(19789!=e.getUint16(f))return i&&console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"),!1;n=!0}if(42!=e.getUint16(f+2,!n))return i&&console.log("Not valid TIFF data! (no 0x002A)"),!1;var g=e.getUint32(f+4,!n);if(g<8)return i&&console.log("Not valid TIFF data! (First offset less than 8)",e.getUint32(f+4,!n)),!1;if((r=m(e,f,f+g,a,n)).ExifIFDPointer)for(o in u=m(e,f,f+r.ExifIFDPointer,s,n)){switch(o){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":u[o]=l[o][u[o]];break;case"ExifVersion":case"FlashpixVersion":u[o]=String.fromCharCode(u[o][0],u[o][1],u[o][2],u[o][3]);break;case"ComponentsConfiguration":u[o]=l.Components[u[o][0]]+l.Components[u[o][1]]+l.Components[u[o][2]]+l.Components[u[o][3]]}r[o]=u[o]}if(r.GPSInfoIFDPointer)for(o in d=m(e,f,f+r.GPSInfoIFDPointer,c,n)){switch(o){case"GPSVersionID":d[o]=d[o][0]+"."+d[o][1]+"."+d[o][2]+"."+d[o][3]}r[o]=d[o]}return r.thumbnail=function(e,t,n,i){var r=function(e,t,n){var i=e.getUint16(t,!n);return e.getUint32(t+2+12*i,!n)}(e,t+n,i);if(!r)return{};if(r>e.byteLength)return{};var o=m(e,t,t+r,h,i);if(o.Compression)switch(o.Compression){case 6:if(o.JpegIFOffset&&o.JpegIFByteCount){var s=t+o.JpegIFOffset,a=o.JpegIFByteCount;o.blob=new Blob([new Uint8Array(e.buffer,s,a)],{type:"image/jpeg"})}break;case 1:console.log("Thumbnail image format is TIFF, which is not implemented.");break;default:console.log("Unknown thumbnail image format '%s'",o.Compression)}else 2==o.PhotometricInterpretation&&console.log("Thumbnail image format is RGB, which is not implemented.");return o}(e,f,g,n),r}function b(e){var t={};if(1==e.nodeType){if(e.attributes.length>0){t["@attributes"]={};for(var n=0;n<e.attributes.length;n++){var i=e.attributes.item(n);t["@attributes"][i.nodeName]=i.nodeValue}}}else if(3==e.nodeType)return e.nodeValue;if(e.hasChildNodes())for(var r=0;r<e.childNodes.length;r++){var o=e.childNodes.item(r),s=o.nodeName;if(null==t[s])t[s]=b(o);else{if(null==t[s].push){var a=t[s];t[s]=[],t[s].push(a)}t[s].push(b(o))}}return t}function x(e){try{var t={};if(e.children.length>0)for(var n=0;n<e.children.length;n++){var i=e.children.item(n),r=i.attributes;for(var o in r){var s=r[o],a=s.nodeName,c=s.nodeValue;void 0!==a&&(t[a]=c)}var h=i.nodeName;if(void 0===t[h])t[h]=b(i);else{if(void 0===t[h].push){var l=t[h];t[h]=[],t[h].push(l)}t[h].push(b(i))}}else t=e.textContent;return t}catch(e){console.log(e.message)}}o.enableXmp=function(){o.isXmpEnabled=!0},o.disableXmp=function(){o.isXmpEnabled=!1},o.getData=function(e,t){return!((self.Image&&e instanceof self.Image||self.HTMLImageElement&&e instanceof self.HTMLImageElement)&&!e.complete)&&(u(e)?t&&t.call(e):d(e,t),!0)},o.getTag=function(e,t){if(u(e))return e.exifdata[t]},o.getIptcTag=function(e,t){if(u(e))return e.iptcdata[t]},o.getAllTags=function(e){if(!u(e))return{};var t,n=e.exifdata,i={};for(t in n)n.hasOwnProperty(t)&&(i[t]=n[t]);return i},o.getAllIptcTags=function(e){if(!u(e))return{};var t,n=e.iptcdata,i={};for(t in n)n.hasOwnProperty(t)&&(i[t]=n[t]);return i},o.pretty=function(e){if(!u(e))return"";var t,n=e.exifdata,i="";for(t in n)n.hasOwnProperty(t)&&("object"==typeof n[t]?n[t]instanceof Number?i+=t+" : "+n[t]+" ["+n[t].numerator+"/"+n[t].denominator+"]\r\n":i+=t+" : ["+n[t].length+" values]\r\n":i+=t+" : "+n[t]+"\r\n");return i},o.readFromBinaryFile=function(e){return f(e)},void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}).call(this)},function(e,t,n){"use strict";var i=n(0);n.n(i).a},function(e,t,n){(e.exports=n(4)(!1)).push([e.i,"\n.vquick-cropper[data-v-6a6416c6] {\n  height: 100%;\n  background: rgba(0, 0, 0, 0.9);\n  overflow: hidden;\n}\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=(s=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"});return[n].concat(o).concat([r]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){var i,r,o={},s=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=i.apply(this,arguments)),r}),a=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var i=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}t[e]=i}return t[e]}}(),c=null,h=0,l=[],u=n(6);function d(e,t){for(var n=0;n<e.length;n++){var i=e[n],r=o[i.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](i.parts[s]);for(;s<i.parts.length;s++)r.parts.push(S(i.parts[s],t))}else{var a=[];for(s=0;s<i.parts.length;s++)a.push(S(i.parts[s],t));o[i.id]={id:i.id,refs:1,parts:a}}}}function f(e,t){for(var n=[],i={},r=0;r<e.length;r++){var o=e[r],s=t.base?o[0]+t.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};i[s]?i[s].parts.push(a):n.push(i[s]={id:s,parts:[a]})}return n}function g(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=l[l.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),l.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(e.insertAt.before,n);n.insertBefore(t,r)}}function p(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function m(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var i=function(){0;return n.nc}();i&&(e.attrs.nonce=i)}return v(t,e.attrs),g(e,t),t}function v(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function S(e,t){var n,i,r,o;if(t.transform&&e.css){if(!(o=t.transform(e.css)))return function(){};e.css=o}if(t.singleton){var s=h++;n=c||(c=m(t)),i=x.bind(null,n,s,!1),r=x.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(t,e.attrs),g(e,t),t}(t),i=function(e,t,n){var i=n.css,r=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||o)&&(i=u(i));r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([i],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,t),r=function(){p(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(t),i=function(e,t){var n=t.css,i=t.media;i&&e.setAttribute("media",i);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){p(n)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=f(e,t);return d(n,t),function(e){for(var i=[],r=0;r<n.length;r++){var s=n[r];(a=o[s.id]).refs--,i.push(a)}e&&d(f(e,t),t);for(r=0;r<i.length;r++){var a;if(0===(a=i[r]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete o[a.id]}}}};var y,b=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function x(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=b(t,r);else{var o=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,i=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(e,t,n){"use strict";n.r(t);var i=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"vquick-cropper"},[t("canvas",{ref:"canvas"})])};i._withStripped=!0;var r=n(1),o=n.n(r),s={props:{imgSrc:{},imgType:{default:"png"}},data:()=>({imgSrcs:"",ctx:{},img:{},width:0,height:0,imgWidth:0,imgHeight:0,startScreen:void 0,endScreen:{x:0,y:0},posImg:{x:0,y:0},imageData:{},base64:"",data:[],isMove:!0,scaleStart:{x1:0,y1:0,x2:0,y2:0},scaleMove:{x1:0,y1:0,x2:0,y2:0},widthRate:1,endImgWidth:0,endImgHeight:0}),components:{},computed:{},watch:{},mounted(){},methods:{confirm(){const e=.8*this.width,t=(this.height,.1*this.width),n=(this.height-e)/2;this.drawHeader(this.ctx,this.img,-this.posImg.x+t,-this.posImg.y+n)},imgDirection(){this.$nextTick(()=>{const e=new Image;e.src=this.imgSrc;let t=1;e.onload=(()=>{if(o.a.getData(e,()=>{this.orientation=o.a.getTag(e,"Orientation")}),6!=this.orientation)return this.imgSrcs=this.imgSrc,void this.initCanvas();const n=this.$el.getBoundingClientRect().width,i=(this.$el.getBoundingClientRect().height,document.createElement("canvas")),r=i.getContext("2d"),s=e.height,a=e.width;s/n>1&&(t=s/n);const c=s/t,h=a/t;i.width=c,i.height=h,r.translate(.5*c,.5*h),r.rotate(90*Math.PI/180),r.translate(-.5*h,-.5*c),r.drawImage(e,0,0,h,c);const l=i.toDataURL();this.imgSrcs=l,this.initCanvas()})})},initCanvas(){this.$nextTick(()=>{const e=this.$refs.canvas;e.width=this.$el.getBoundingClientRect().width,e.height=this.$el.getBoundingClientRect().height;const t=e.getContext("2d"),n=new Image;n.src=this.imgSrcs,this.ctx=t,this.img=n,this.width=e.width,this.height=e.height;let i=1;n.onload=(()=>{i=n.width/(.8*e.width);const r=.8*this.width,o=(this.height,.1*this.width),s=(this.height-r)/2;this.imgWidth=n.width/i,this.imgHeight=n.height/i,this.posImg={x:o,y:s},this.drawImg(t,n,o,s,this.imgWidth,this.imgHeight),this.drawRect()})})},drawImg(e,t,n,i,r,o){this.drawClear(e),e.drawImage(t,n,i,r,o),this.drawRect()},drawHeader(e,t,n,i,r,o){this.isMove=!1;const s=.8*this.width,a=(this.height,.1*this.width),c=(this.height-s)/2;this.drawClear(),e.drawImage(t,(-this.posImg.x+a)*(this.img.width/this.imgWidth),(-this.posImg.y+c)*(this.img.width/this.imgWidth),s*(this.img.width/this.imgWidth),s*(this.img.width/this.imgWidth),a,c,s,s),this.imageData=e.getImageData(a,c,s,s),this.makeHeader(s),this.drawRect()},drawRect(){const e=.8*this.width,t=(this.height,.1*this.width),n=(this.height-e)/2;this.ctx.fillStyle="rgba(0,0,0,.3)",this.ctx.fillRect(0,0,this.width,n),this.ctx.fillRect(0,n,t,e),this.ctx.fillRect(t+e,n,t,e),this.ctx.fillRect(0,n+e,this.width,this.height),this.ctx.strokeStyle="#fff",this.ctx.lineWidth=".5",this.ctx.strokeRect(t,n,e,e)},drawClear(e=this.ctx){e.clearRect(0,0,this.width,this.height)},makeHeader(e){const t=document.createElement("canvas"),n=t.getContext("2d");t.width=e,t.height=e,n.putImageData(this.imageData,0,0);const i=t.toDataURL("image/"+this.imgType);this.data=this.convertBase64UrlToBlob(i),this.base64=i,this.$emit("finish",this.base64,this.data)},getBase64Url(){return this.base64},getData(){return this.data},convertBase64UrlToBlob(e){for(var t=window.atob(e.split(",")[1]),n=new ArrayBuffer(t.length),i=new Uint8Array(n),r=0;r<t.length;r++)i[r]=t.charCodeAt(r);return new Blob([n],{type:"image/png"})},init(){this.imgDirection(),this.bindTouchEvents(),this.isMove=!0},bindTouchEvents(){this.$refs.canvas.addEventListener("touchstart",this.handleTouchStart),this.$refs.canvas.addEventListener("touchmove",this.handleTouchMove),this.$refs.canvas.addEventListener("touchend",this.handleTouchEnd)},handleTouchStart(e){if(this.isMove){if(1==e.touches.length){let t=e.touches[0].screenX,n=e.touches[0].screenY;this.startScreen={x:t,y:n}}if(2==e.touches.length){let t=e.touches[0].screenX<=e.touches[1].screenX?e.touches[0].screenX:e.touches[1].screenX,n=e.touches[0].screenX<=e.touches[1].screenX?e.touches[0].screenY:e.touches[1].screenY;this.startScreen={x:t,y:n},this.scaleStart={x1:e.touches[0].screenX,y1:e.touches[0].screenY,x2:e.touches[1].screenX,y2:e.touches[1].screenY}}this.widthRate=1,this.endImgWidth=this.imgWidth,this.endImgHeight=this.imgHeight}},handleTouchMove(e){if(e.preventDefault(),this.isMove){if(1==e.touches.length){let t=e.touches[0].screenX,n=e.touches[0].screenY,i=t-this.startScreen.x+this.posImg.x,r=n-this.startScreen.y+this.posImg.y;this.drawImg(this.ctx,this.img,i,r,this.imgWidth,this.imgHeight),this.endImgWidth=this.imgWidth,this.endImgHeight=this.imgHeight,this.endScreen={x:i,y:r}}if(2==e.touches.length){let t=e.touches[0].screenX<=e.touches[1].screenX?e.touches[0].screenX:e.touches[1].screenX,n=e.touches[0].screenX<=e.touches[1].screenX?e.touches[0].screenY:e.touches[1].screenY,i=t-this.startScreen.x+this.posImg.x,r=n-this.startScreen.y+this.posImg.y;this.scaleMove={x1:e.touches[0].screenX,y1:e.touches[0].screenY,x2:e.touches[1].screenX,y2:e.touches[1].screenY};let o=((Math.abs(this.scaleStart.x2-this.scaleStart.x1)-Math.abs(this.scaleMove.x2-this.scaleMove.x1))/Math.abs(this.scaleStart.x2-this.scaleStart.x1)).toFixed(2);this.widthRate=o;const s=this.imgWidth-this.imgWidth*this.widthRate,a=this.imgHeight-this.imgHeight*this.widthRate;this.drawImg(this.ctx,this.img,i,r,s,a),this.endImgWidth=s,this.endImgHeight=a,this.endScreen={x:i,y:r}}}},handleTouchEnd(e){this.isMove&&(this.posImg=this.endScreen,this.imgWidth=this.endImgWidth,this.imgHeight=this.endImgHeight,this.scaleStart=this.scaleMove)}}};n(2);var a=function(e,t,n,i,r,o,s,a){var c,h="function"==typeof e?e.options:e;if(t&&(h.render=t,h.staticRenderFns=n,h._compiled=!0),i&&(h.functional=!0),o&&(h._scopeId="data-v-"+o),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},h._ssrRegister=c):r&&(c=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(h.functional){h._injectStyles=c;var l=h.render;h.render=function(e,t){return c.call(t),l(e,t)}}else{var u=h.beforeCreate;h.beforeCreate=u?[].concat(u,c):[c]}return{exports:e,options:h}}(s,i,[],!1,null,"6a6416c6",null);a.options.__file="src/VueQuickCropper.vue";var c=a.exports;t.default={install(e){e.component("quick-cropper",c)}}}])});