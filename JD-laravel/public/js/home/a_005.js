(function(w,undefined){
    function sideSlip(arg){
        var c = $(this),
            options = $.extend({
                position : 1,
                hValue : 0,
                vValue : 0
            },arg),
            originTop;
        function init(){
            options.position = parseInt(options.position);
            width = c.width();
            height = c.height();
            if(1 == options.position){
                c.css({
                    left : options.hValue
                });
            }
            else{
                c.css({
                    right : options.hValue
                });
            }

            originTop = options.vValue;
            c.css({
                position : 'fixed',
                zIndex : 7,
                top : originTop + 'px',
                overflow : 'hidden'
            });

            if($.browser.msie&&$.browser.version.match(/6/)){
                c.css('position','absolute');
                ieFixHandle();
            }
            else{
                bottomScrollHandle();
            }
        }

        function ieFixHandle(){
            c.css('top',originTop + $(this).scrollTop() + 'px');

            $(window).resize(function(){
                originTop =options.vValue;
                if(show){
                    c.css('top',originTop + $(this).scrollTop() + 'px');
                }
                return;
            });
        }

        function bottomScrollHandle(){
            var top = options.vValue;
            $(window).scroll(function(){
                var vertical = ($('#service-2013').length?$('#service-2013').offset().top:$('body').height()) - height - top
                if($(this).scrollTop() >= vertical){
                    c.css({
                        top : vertical - $(this).scrollTop() + top + 'px'
                    });
                }
                else{
                    c.css({
                        top : top + 'px'
                    });
                }
            });
        }

        init();
    }

    if(/ipad/i.test(navigator.userAgent)){
        if(!/safari/i.test(navigator.userAgent) || /jdapp/i.test(navigator.userAgent)){
            return;
        }
    }
    var appId = $('#pageInstance_appId').val(),
		address = (function(){
			var ma = location.href.match(/\/\w+(?=\.html)/);
			if(ma){
				 return ma[0].split('/')[1]
			}else{
				//访问地址不是“活动装修”的浏览地址 20160413 by cdwanchuan@jd.com；
			}
        })();
		
	if(address){
		getData(address);
	}
	
	function getData(address){
		$.ajax({
			url : INTERFACE.actJshop.ad,
			data : {
				id : appId,
				type : 1,
				appUrl : address
			},
			dataType : 'jsonp',
			success : function(data){
				try{
					var n = data;
					if(typeof n.middle != 'undefined' && n.middle != ''){
						var c = $(n.middle).prependTo('.layoutcontainer');
					}

					if(typeof n.top != 'undefined' && n.top != ''){
						var a = $(n.top).insertAfter('[id^="shortcut"]');
					}

					if(typeof n.left != 'undefined' && n.left != ''){
						var g = $(n.left).appendTo('body'),
							p = eval('(' + g.attr('position') + ')');
						sideSlip.call(g,{position:1,hValue:p.side,vValue:p.top});

					}
					if(typeof n.right != 'undefined' && n.right != ''){
						var g = $(n.right).appendTo('body'),
							p = eval('(' + g.attr('position') + ')');
						sideSlip.call(g,{position:2,hValue:p.side,vValue:p.top});
					}

					if(typeof n.bottom != 'undefined' && n.bottom != ''){
						var h = $(n.bottom).appendTo('.d-layout-area:last');
					}

					// 双11导航替换频道为：京东商城、好东西、品牌街、预售、京选
					if(typeof n.double11 != 'undefined' && n.double11 != ''){
						// 获取频道标记
						var channelFlag = $('#JSHOP_CHANNEL_FLAG').val();
						switch(channelFlag){
							case 'jd':
								// 京东商城
								$('#nav-2014').empty().append(n.double11);
								break;
							case 'hao':
							case 'global':
								// 好东西、全球购
								$('#nav-2014').empty().append(n.double11).css('height', '100%');
								break;
							case 'yushou':
								// 新发现（老预售）
								$('#discover-nav').empty().append(n.double11).css('height', '100%');
								break;
							case 'pinpaijie':
								// 品牌街
								$('#nav').empty().append(n.double11).css('height', '100%');
								break;
							case 'xuan':
								// 京选
								$('.nav-2').empty().append(n.double11).css('height', '100%');
								break;
							case 'jdTuan':
								// 团购
								$('#nav-2015').empty().append(n.double11).css('height', '100%');
								break;
							case 'red':
								// 闪购
								$('.c-nav').empty().append(n.double11).css('height', '100%');
								break;
							case 'vip':
								// 会员
								$('#vip-header').after(n.double11).css('height', '100%');
								break;
							case 'vipplus':
								// 会员plus
								$('.pls-header').after(n.double11).css('height', '100%');
								break;
							default:
								break;
						}
					}
				}
				catch(e){}
			}
		});
	}
    
})(window);


