/* user-discovery/1.0.1 common.js Date:2016-04-07 15:06:34 */
seajs.use(["jdf/1.0.0/unit/globalInit/2.0.0/globalInit.js","jdf/1.0.0/unit/hotwords/1.0.0/hotwords","jdf/1.0.0/ui/lazyload/1.0.0/lazyload","jdf/1.0.0/ui/fixable/1.0.0/fixable","jdf/1.0.0/ui/gotop/1.0.0/gotop","jdf/1.0.0/ui/ceilinglamp/1.0.0/ceilinglamp"],function(a,b){a(),b(),$("#container").lazyload();var c=$("#gotop");c&&(c.fixable({x:"right",y:"bottom",xValue:-c.outerWidth()-20,yValue:20,context:$("#footer-2014")}),c.gotop({autoHide:!1})),$(".head-presell-btn").hover(function(){$(this).addClass("hpb-hover")},function(){$(this).removeClass("hpb-hover")}),$(".slider-banner").each(function(){var a;1==$(".ui-switchable-panel-main>li",a).length&&$(".slider-tigger",a).hide()});var d=$(".header-bar-nav a:last");d&&d.css("margin-right","0");var e=$(".art-header-bar");e.length&&e.ceilinglamp({scrollDelay:0,threshold:0,currentClassName:"header-bar-fixed",zIndex:101,hasWrap:!0}),$(".plist1,.plist2").delegate("li","mouseenter mouseleave",function(a){"mouseenter"==a.type?$(this).addClass("li-hover"):$(this).removeClass("li-hover")}),$(".plist1,.plist2").delegate(".buy-url","mouseenter mouseleave",function(a){"mouseenter"==a.type?$(this).parent().find(".btn-buy").addClass("btn-buy-hover"):$(this).parent().find(".btn-buy").removeClass("btn-buy-hover")}),$("#what a").click(function(){$("body").dialog({hasCssLink:!1,title:null,width:558,height:353,type:"html",maskClose:!0,fixed:!0,source:'<div class="what-dialog"><a href="javascript:;" class="wd-close wd-close1"></a><a href="javascript:;" class="wd-close wd-close2"></a><div>',onReady:function(){$(".what-dialog .wd-close").click(function(){$.closeDialog()})}})}),$(".video-address").delegate(".li-1","click",function(){$(this).hasClass("close-light")?($(this).removeClass("close-light").find("a").html("<i></i>\u5173\u706f"),$("#container").removeClass("container-close"),$("#mask-top,#mask-bottom").hide()):($(this).addClass("close-light").find("a").html("<i></i>\u5f00\u706f"),$("#container").addClass("container-close"),$("#mask-top,#mask-bottom").show())})});
