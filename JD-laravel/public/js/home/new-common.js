function strShortDateTime(str) {
    var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    if (r == null) return false;
    var d = new Date(r[1], r[3] - 1, r[4]);
    return (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4]);
}

function strLongDateTime(str) {
    var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
    var r = str.match(reg);
    if (r == null) return false; 
    var d = new Date(r[1], r[3] - 1, r[4], r[5], r[6], r[7]);
    return (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4] && d.getHours() == r[5] && d.getMinutes() == r[6] && d.getSeconds() == r[7]);
}


function isNumber(oNum) {
    if (!oNum) return false;
    var strP = /^\d+(\.\d+)?$/;
    if (!strP.test(oNum)) return false;
    try {
        if (parseFloat(oNum) != oNum) return false;
    }
    catch (ex) {
        return false;
    }
    return true;
}

function isDigit(s) { var patrn = /^-?\d+\.{0,}\d{0,}$/; if (!patrn.exec(s)) { return false } else { return true } }


function isNull(str) {
    var result = false;
    str = lrTrim(str);
    if (str.length == 0) {
        result = true;
    }
    return result;
}

function g(objId) {
    return document.getElementById(objId);
}
function lTrim(str) {
    if (str.charAt(0) == " ") {
        str = str.slice(1); 
        str = lTrim(str); 
    }
    return str;
}
function rTrim(str) {
    var iLength;
    iLength = str.length;
    if (str.charAt(iLength - 1) == " ") {
        str = str.slice(0, iLength - 1);
        str = rTrim(str);
    }
    return str;
}


function lrTrim(str) {
    return lTrim(rTrim(str));
}

var options = {
		url : "//yushou.jd.com/youshouinfo.action?sku=",
		priceUrl : "//p.3.cn/prices/mgets?skuIds=J_",
		container : "#container",
		floor : ".floor-goods",
		pUl : "ul",
		pItem : "li",
		itemId : "p-id",
		ysPrice : ".p-price",
		ysListContainer : ".ys-list-container",
		
		
		timeline : ".timeline-list",
		timeLineItem : "dd",
		dataType : "jsonp",
		presalePrice : "del",
		jtPrice : "dd",
		pTabs : ".p-tabs",
		djPrice : "dj",
		rs : "rs",
		presalePriceCls : ".del",
		jtPriceCls : ".dd",
		djPriceCls : ".dj",
		rsCls : ".rs",
		ysPrice : ".p-price",
		currentStepCls : "current",
		priceWrapCls : ".price-wrap",
		pTimeCls : ".p-time",
		pNameCls : ".p-name",
		timeCls : ".time",
		pImgCls : ".p-img",
		lh28Cls : ".lh28",
		unitCls : ".unit",
		unit2Cls : "unit2",
		presellNum : ".col-ora",
		buttonUrl : ".btn-con",
		buttonM : "btn-m", //等待
		buttonS : "btn-s", //立即
		buttonl : "btn-l", //结束
		buttonDDYD : "等待预定",
		buttonYDZ : "立即预定",
		buttonYDJS : "已结束",
		buttonDDYY : "等待预约",
		buttonYYZ : "立即预约",
		buttonDDQG : "等待抢购",
		buttonQGZ : "立即抢购",
		buttonQGJS : "已结束"
};

function timeLeft(left,target){
	if(left>0){
		var now = new Date((left*1000) + (new Date()).getTime()); 
		target.attr("data-time",now.getFullYear()+"/"+(now.getMonth()+1)+"/"+now.getDate()+" "+now.getHours()+":"+now.getMinutes()+":"+now.getSeconds());
		//target.html("<em>icon</em><span></span>");
		
		pTimeCountDown(target);
	}
}
function change_button(node) {
	$.ajax({
		url : options.url + node.attr(options.itemId),
		dataType : options.dataType,
		success : function(data){
			if(data&&data.type){
				if(data.type == 2){
					var ret = data.ret;
					if(ret.s === 0){
						node.find(".p-orders").hide();
						timeLeft(ret.d,node.find(".p-countdown"));
						node.find(".p-deposit").hide();
						node.find(".p-main").addClass("wait");
						node.find(".p-btnbox").find("span").html("等待预定");
						//node.find(options.buttonUrl).find("a").attr('class',options.buttonM).html(options.buttonDDYD);
					}else if(ret.s === 1){
						node.find(".p-orders").show();
						node.find(".p-orders").find("span").html(ret.cc+"人已预定");
						timeLeft(ret.d,node.find(".p-countdown"));
						node.find(".p-deposit").show();
						node.find(".p-deposit").find("strong").html("￥"+ret.pm);
						node.find(".p-main").removeClass("wait");
						node.find(".buy-url").attr('href',ret.url);
						node.find(".p-btnbox").find("span").html("立即预定");
					}else{
						node.find(".p-countdown").hide();
						node.find(".p-orders").hide();
						node.find(".p-deposit").hide();
						node.find(".p-main").addClass("wait");
						
						node.find(".buy-url").attr('href','javascript:void(0)');
						node.find(".p-btnbox").find("span").html("已经结束");
					}
				}else if(data.type == 1){//预约
					if(data.state === 1){
						node.find(".p-orders").hide();
						timeLeft(data.d,node.find(".p-countdown"));
						node.find(".p-main").addClass("wait");
						node.find(".p-btnbox").find("span").html("等待预约");
						//node.find(options.buttonUrl).find("a").attr('class',options.buttonM).html(options.buttonDDYY);
					}else if(data.state === 2){
						node.find(".p-orders").show();
						node.find(".p-orders").find("span").html(data.num+"人已预约");
						timeLeft(data.d,node.find(".p-countdown"));
						node.find(".p-main").removeClass("wait");
						node.find(".buy-url").attr('href',data.url);
						node.find(".p-btnbox").find("span").html("立即预约");
						//node.find(options.buttonUrl).find("a").attr('href',data.url).attr('class',options.buttonS).html(options.buttonYYZ);
					}else if(data.state === 3){
						node.find(".p-orders").hide();
						timeLeft(data.d,node.find(".p-countdown"));
						node.find(".p-main").addClass("wait");
						
						node.find(".buy-url").attr('href','javascript:void(0)');
						node.find(".p-btnbox").find("span").html("等待抢购");
						//node.find(options.buttonUrl).find("a").attr('class',options.buttonM).html(options.buttonDDQG);
					}else if(data.state === 4){
						node.find(".p-orders").hide();
						node.find(".p-countdown").hide();
						node.find(".p-main").removeClass("wait");
						node.find(".buy-url").attr('href',data.url);
						node.find(".p-btnbox").find("span").html("立即抢购");
						//node.find(options.buttonUrl).find("a").attr('href',data.url).attr('class',options.buttonS).html(options.buttonQGZ);
					}else{
						node.find(".p-orders").hide();
						node.find(".p-countdown").hide();
						node.find(".p-main").addClass("wait");
						
						node.find(".buy-url").attr('href','javascript:void(0)');
						node.find(".p-btnbox").find("span").html("已经结束");
						//node.find(options.buttonUrl).find("a").attr('class',options.buttonl).html(options.buttonQGJS);
					}
				}
			}
		}
	});
}

function pTimeCountDown(_this){
	seajs.use(['//misc.360buyimg.com/jdf/1.0.0/ui/countdown/1.0.0/countdown'],function(countdown){
		//创建组件
		_this.countdown({
			isTwoDigits:true,
			endTime:_this.attr('data-time'),
			onEnd:function() {
				//$('span',this.el).html("已开始");
				change_button(this.el.parent().parent());
			},
			onChange:function(leaveTime){
				_this.find("span").html("剩余 " + leaveTime.day + "天 " + leaveTime.hour + ":" + leaveTime.minute + ":" + leaveTime.second);
			}
		});
	});
};

function clocks(){
	seajs.use(['//misc.360buyimg.com/jdf/1.0.0/ui/countdown/1.0.0/countdown'],function(countdown){
		//创建组件
		$('.p-time[data-time]').each(function(j){
			var _this = $(this);
			_this.countdown({
				isTwoDigits:true,
				endTime:_this.attr('data-time'),
				onEnd:function() {
					$('span',this.el).html("已开始");
					//this.el.parent().siblings('.btn-con').html('<a class="btn-l" href="#none">已结束</a>')
					change_button(this.el.parent().parent());
				},
				onChange:function(leaveTime){
					$('span',this.el).html("倒计时 " + leaveTime.day + "天 " + leaveTime.hour + ":" + leaveTime.minute + ":" + leaveTime.second);
				}
			});
		});
	});
};