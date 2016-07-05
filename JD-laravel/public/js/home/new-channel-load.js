$(document).ready(function() {
	init_yushou();
	init_price();
});

function init_yushou() {
	
	var items = $(options.container).find(".m-floor").find(options.pUl);
	len = items.length;
	if(!len) return;
	items.each(function(index,n){
		var nodes = $(n);
		var it = nodes.find(options.pItem);
		le = it.length;
		if(le > 0) {
			it.each(function(index_, m){
				var node = $(m);
				if(node.find(".p-price").attr("presaleType") == 0) {
					try {
						node.find(".p-countdown").hide();
						node.find(".p-orders").hide();
						node.find(".p-deposit").hide();
						
						var link = "//item.jd.com/" + node.find("div").attr(options.itemId) + ".html";
						node.find(".buy-url").attr('href', link);
						node.find(".p-btnbox").find("span").html("立即购买");
						
						var firstTime = node.find(".p-tags").attr("first-time");
						if(firstTime.length > 9) {
							var chats = firstTime.split("-");
			                var now = new Date();
			                var year = now.getFullYear();
			                var month = now.getMonth() + 1;
			                var day = now.getDate();
			                if(year == chats[0] && month == chats[1] && day == chats[2]) {
			                	node.find(".p-tags").find(".item").show();
								node.find(".p-tags").find("span").html("今日首发");
			                }
						}
					} catch (e) {
						
					}
				} else {
					$.ajax({
						url : options.url + node.find("div").attr(options.itemId),
						dataType : options.dataType,
						success : function(data){
							if(data.error){
								//node.remove();
								//怎么处理
								node.find(".p-countdown").hide();
								node.find(".p-orders").hide();
								node.find(".p-deposit").hide();
								node.find(".p-main").addClass("wait");
								node.find(".p-btnbox").find("span").html("已经结束");
							}else if(data&&data.type){
								if(data.type == 2){
									var ret = data.ret;
									//node.find(options.ysPrice).find("strong").text(ret.cp);
									if(ret.t === 1){
										//node.find(options.unitCls).attr("class",options.unit2Cls);
										node.find(options.ysPrice).find("strong").html("￥"+ret.cp);
									}else if(ret.sa){
										node.find(".p-price").hide();
										node.find(".p-price-stage").show();
										//var nodes = node.find("em");
										//nodes.each(function(index_,n){
										//	$(n).find("em").html("￥"+ret.sa[index_].m);
										//});
										
										var c0 = ret.sa[0].c;
										var c1 = ret.sa[1].c;
										var c2= ret.sa[2].c;
										
										node.find(".p-price-stage").addClass("z-price-stage"+ret.cs);
										node.find(".price1").html("￥"+ret.sa[0].m+"<div class='f-count'>满"+c0+"人</div>");
										node.find(".price2").html("￥"+ret.sa[1].m+"<div class='f-count'>满"+c1+"人</div>");
										node.find(".price3").html("￥"+ret.sa[2].m+"<div class='f-count'>满"+c2+"人</div>");
										
										var cs = ret.cs; //当前阶梯
										var cc = ret.cc; //当前人数
										if(cs == 1) {
											if(cc >= c0) {
												node.find(".p-price-stage").find(".s-banner").find(".ps1").addClass("st-ico st1");
												var v = parseInt(cc*1.0/c1*54);
												var s = "width:"+v+"px";
												node.find(".p-price-stage").find(".s-banner").find(".ps2").addClass("st-line stl1").attr("style", s);
											}
										} else if (cs ==2) {
											if(cc >= c1) {
												node.find(".p-price-stage").find(".s-banner").find(".ps1").addClass("st-ico st1");
												node.find(".p-price-stage").find(".s-banner").find(".ps2").addClass("st-line stl1");
												node.find(".p-price-stage").find(".s-banner").find(".ps3").addClass("st-ico st2");
												var v = parseInt( (cc-c1)*1.0/(c2-c1)*54 );
												var s = "width:"+v+"px";
												node.find(".p-price-stage").find(".s-banner").find(".ps4").addClass("st-line stl2").attr("style", s);
											}
										} else if (cs == 3) {
											node.find(".p-price-stage").find(".s-banner").find(".ps1").addClass("st-ico st1");
											node.find(".p-price-stage").find(".s-banner").find(".ps2").addClass("st-line stl1");
											node.find(".p-price-stage").find(".s-banner").find(".ps3").addClass("st-ico st2");
											node.find(".p-price-stage").find(".s-banner").find(".ps4").addClass("st-line stl2");
											node.find(".p-price-stage").find(".s-banner").find(".ps5").addClass("st-ico st3");
										}
										
										
										//if(ret.s == 1){
										//	node.find(options.jtPrice).eq(ret.cs - 1).attr('class',options.currentStepCls);
										//	node.find(options.jtPrice).eq(ret.cs - 1).find("strong").html(node.find(options.jtPrice).eq(ret.cs - 1).find(options.presalePrice).html());
										//}
									}
									//node.find(options.djPriceCls).html(ret.pm);
									//if(!!ret.s)
									node.find(".p-orders").find("span").html(ret.cc+"人已预定");
									
									node.find(".p-deposit").find("strong").html("￥"+ret.pm);
									if(ret.s === 0){
										node.find(".p-orders").hide();
										timeLeft(ret.d,node.find(".p-countdown"));
										node.find(".p-deposit").hide();
										node.find(".p-main").addClass("wait");
										node.find(".p-btnbox").find("span").html("等待预定");
									}else if(ret.s === 1){
										timeLeft(ret.d,node.find(".p-countdown"));
										var link = "//item.jd.com/" + node.find("div").attr(options.itemId) + ".html";
										node.find(".buy-url").attr('href', link);
										// node.find(".buy-url").attr('href',ret.url);
										node.find(".p-btnbox").find("span").html("立即预定");
									}else{
										//node.remove();
										node.find(".p-orders").hide();
										node.find(".p-countdown").hide();
										node.find(".p-deposit").hide();
										node.find(".p-main").addClass("wait");
										node.find(".p-btnbox").find("span").html("已经结束");
									}
								}else if(data.type == 1){//预约
									//$(n).find(options.unitCls).attr("class",options.unit2Cls);
									node.find(".p-orders").find("span").html(data.num+"人已预约");
									
									node.find(".p-tags").find(".item").show();
									if(data.category == 1){//资格
										node.find(".p-tags").find("span").html("预约获抢购资格");
									}else if(data.category == 3){//享优惠
										node.find(".p-tags").find("span").html("预约享优惠");
									}else{
										node.find(".p-tags").find(".item").hide();
									}
									node.find(".p-deposit").hide();
									if(data.state === 1){
										node.find(".p-orders").hide();
										timeLeft(data.d,node.find(".p-countdown"));
										node.find(".p-main").addClass("wait");
										node.find(".p-btnbox").find("span").html("等待预约");
										//node.find(options.buttonUrl).find("a").attr('class',options.buttonM).html(options.buttonDDYY);
										node.find(".p-orders").remove();
									}else if(data.state === 2){
										timeLeft(data.d,node.find(".p-countdown"));
										var link = "//item.jd.com/" + node.find("div").attr(options.itemId) + ".html";
										node.find(".buy-url").attr('href', link);
										//node.find(".buy-url").attr('href',data.url);
										node.find(".p-btnbox").find("span").html("立即预约");
										//node.find(options.buttonUrl).find("a").attr('href',data.url).attr('class',options.buttonS).html(options.buttonYYZ);
										//node.find(options.pImgCls).find("a").attr('href',data.url);
										//node.find(options.pNameCls).find("a").attr('href',data.url);
									}else if(data.state === 3){
										node.find(".p-orders").hide();
										timeLeft(data.d,node.find(".p-countdown"));
										node.find(".p-main").addClass("wait");
										node.find(".p-btnbox").find("span").html("等待抢购");
										//node.find(options.buttonUrl).find("a").attr('class',options.buttonM).html(options.buttonDDQG);
									}else if(data.state === 4){
										node.find(".p-orders").hide();
										node.find(".p-countdown").hide();
										var link = "//item.jd.com/" + node.find("div").attr(options.itemId) + ".html";
										node.find(".buy-url").attr('href', link);
										//node.find(".buy-url").attr('href',data.url);
										node.find(".p-btnbox").find("span").html("立即抢购");
										//node.find(options.buttonUrl).find("a").attr('href',data.url).attr('class',options.buttonS).html(options.buttonQGZ);
										//node.find(options.pImgCls).find("a").attr('href',data.url);
										//node.find(options.pNameCls).find("a").attr('href',data.url);
									}else{
										//node.remove();
										node.find(".p-countdown").hide();
										node.find(".p-orders").hide();
										node.find(".p-deposit").hide();
										node.find(".p-main").addClass("wait");
										node.find(".p-btnbox").find("span").html("已经结束");
									}
									//node.find(options.priceWrapCls).find(options.presalePrice).remove();
								}
							}
						}
					});
				}
			});
		}
		
		
	});

}

function init_price(){
	var items = $(options.container).find(".m-floor").find(options.pUl);
	len = items.length;
	if(!len) return;
	var skus = "";
	var inx = 0;
	items.each(function(index,n){
		var nodes = $(n);
		var it = nodes.find(options.pItem);
		le = it.length;
		if(le > 0) {
			it.each(function(index_, m){
				var node = $(m);
				if(0 == index && 0 == index_){
					skus = node.find("div").attr(options.itemId);
				}else{
					skus += ",J_"+ node.find("div").attr(options.itemId);
				}
			});
		}
	});
	
	$.ajax({
		url : options.priceUrl + skus,
		dataType : options.dataType,
		success : function(data){
			if(data && data.length>0){
				$.each(data, function (n, value) {  
					var node1 = $("div["+options.itemId+"='"+(value.id).split("_")[1]+"']").find(".p-price");
					if(value.p > -1){
						//node1.parent().remove();
						var pt = node1.attr("presaleType");
						if(1 == pt || 0 == pt){
							node1.find("strong").html("￥"+value.p);
						}
						//else if(2 == node1.attr("presaleType")){
						//	node1.find(options.presalePrice).html("￥"+value.p);
						//}
					} else {
						node1.find("strong").html("￥暂无定价");
					}
		        }); 
			}
		}
	});
}
