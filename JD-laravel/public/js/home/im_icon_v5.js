function jdim(){var obj=null;var defDomain="chat1.jd.com";function getParams(){var pams=null;if(obj.shopId){pams="shopId="+obj.shopId}else if(obj.venderId){pams="venderId="+obj.venderId}else if(obj.brandName){pams="brandName="+encodeURIComponent(encodeURIComponent(obj.brandName));if(obj.rank3){pams=pams+"&rank3="+obj.rank3}}else if(obj.pid){pams="pid="+obj.pid}else if(obj.virtualId){pams="virtualId="+obj.virtualId}
if(obj.from){pams=pams+"&from="+obj.from}
return pams}
function sendRequest(){var p=getParams();if(!p){return}
var d=defDomain;if(obj.domain){d=obj.domain}
var url="//"+d+"/api/checkChat?"+p+"&callback=?"+(obj.charset?"&returnCharset="+obj.charset:"");jQuery.getJSON(url,doResult)}
function doResult(json){if(!json||!json.code){return}
var code=json.code;var seller=json.seller;var style=getStyle(code);if(code==1){var onlineText="\u5728\u7ebf\u5ba2\u670d";$("."+style).each(function(){$(this).html("<b><a href='javascript:;'>"+onlineText+"</a></b>").attr("title",seller+' '+onlineText);$(this).click(function(){service(code,json)})})}else if(code==2){var onlineText="";var offlineText="\u5728\u7EBF\u5BA2\u670D\u4E0D\u5728\u7EBF\uFF0C\u8BF7\u7A0D\u5019\u54A8\u8BE2";$("."+style).each(function(){$(this).html("<b>"+onlineText+"</b>").attr("title",seller+' '+offlineText)})}else if(code==3){var leaveText="";var wizardText="\u5728\u7EBF\u5BA2\u670D\u4e0d\u5728\u7ebf\uff0c\u60a8\u53ef\u4ee5\u70b9\u51fb\u6b64\u5904\u7ed9\u5546\u5bb6\u7559\u8a00\uff0c\u5e76\u5728\u3010\u6211\u7684\u4eac\u4e1c->\u6d88\u606f\u7cbe\u7075\u3011\u4e2d\u67e5\u770b\u56de\u590d";$("."+style).each(function(){$(this).html("<b><a href='javascript:;'>"+leaveText+"</a></b>").attr("title",seller+' '+wizardText);$(this).click(function(){service(code,json)})})}}
function getStyle(code){if(code==1&&obj.onlineStyle){setStyle(obj.onlineStyle);return obj.onlineStyle}else if((obj.code==2||obj.code==3)&&obj.offlineStyle){setStyle(obj.offlineStyle);return obj.offlineStyle}
return getDefault(code)}
function setStyle(s){$("."+obj.iconStyle).each(function(index,e){this.className=s})}
function getDefault(code){var style=obj.iconStyle;var text="";if(code==1){text="."+style+"{height:28px;line-height:25px;width:91px;padding-left:30px;font-size:12px;color:white;display:inline-block;cursor:pointer; background:url(//static.360buyimg.com/im/img/im-new.gif) no-repeat 0 0;}";text+="."+style+" a {color:white;text-decoration:none;}"}else if(code==2){text="."+style+"{height:25px;line-height:25px;width:91px;display:inline-block;background:url(//static.360buyimg.com/im/img/im-new.png) no-repeat -101px -35px}";}else if(code==3){text="."+style+"{height:25px;line-height:25px;width:91px;display:inline-block;cursor:pointer;background:url(//static.360buyimg.com/im/img/im-new.png) no-repeat -101px -35px}";}
var css=document.createElement("style");css.type="text/css";css.media="screen";try{css.appendChild(document.createTextNode(text))}catch(e){css.styleSheet.cssText=text}
document.documentElement.firstChild.appendChild(css);return style}
function service(code,json){var d="chat.jd.com";var param="";if(json.chatDomain){d=json.chatDomain}
if(obj.shopId||(json.shopId&&json.shopId>0)){if(obj.shopId){param="shopId="+obj.shopId}else{param="shopId="+json.shopId}}else if(obj.brandName||(json.brandName&&json.brandName!='null'&&json.brandName!='')){if(obj.brandName){param="brandName="+encodeURIComponent(encodeURIComponent(obj.brandName));if(obj.rank3){param=param+"&classify="+obj.rank3}}else{param="brandName="+encodeURIComponent(encodeURIComponent(json.brandName));if(json.rank3){param=param+"&classify="+json.rank3}}}else if(obj.pid){param="pid="+obj.pid}else if(obj.virtualId){param="groupId="+obj.virtualId}
if(obj.from){param=param+"&"+obj.from}
var url="//"+d+"/index.action?"+param+"&code="+code;window.open(url,"京东咚咚在线客服")}
this.show=function(param){obj=param;if(obj==null){return}
sendRequest()}}
var JDIM=new jdim();