/**
 * 图片懒加载
 */
(function(){
    if(jQuery.fn.lazyLoad) return;
    jQuery.fn.lazyLoad = function(config){
        var conf = jQuery.extend({
                defClass:"J_imgLazyload",
                defScreen:2,
                container:"body",
                orginalSrc:"original"
            },config||{}),
            lazyImg = (function(){
                if(conf.container.constructor == String)
                    return jQuery(conf.container + " ." + conf.defClass);
                else if(conf.container.constructor == Array){
                    var comArr = new Array();
                    for(var i = 0,len = conf.container.length;i<len;i++){
                        if(jQuery(conf.container[i] + " ." + conf.defClass).length > 0){
                            comArr.concat(jQuery(conf.container[i]));
                        }
                    }
                    return comArr;
                }else{
                    return {};
                }
            })();
        function load(){
            var top = jQuery(window).scrollTop()+document.documentElement.clientHeight*conf.defScreen;
            for(var i = 0, len = lazyImg.length;i<len;i++){
                var img = jQuery(lazyImg[i]);
                if(!img.hasClass(conf.defClass) || !img.parents('[instanceid]').length || img.is(':hidden')) continue;
                if(img.offset().top<top){
                    img.removeClass(conf.defClass);
                    img.attr("src",img.attr(conf.orginalSrc));
                    img.removeAttr(conf.orginalSrc);
                }
            }
        }
        jQuery(window).scroll(load).resize(load);
        load();
    };

    jQuery(function(){
        jQuery('body').lazyLoad();
    });
})();

/**
 *价格组件
 */
jshop.component = jshop.component || {};
/**
 * [SkuIdPriceGetting 渲染价格老方法]
 */
function SkuIdPriceGetting(){
    var _nodeArr = [],prefixUrl,suffixUrl,winH,BatchesCount= 0,temStr='',channelName=$('#JSHOP_CHANNEL_FLAG').val();

    var init = function(){
        prefixUrl = INTERFACE.price.jd + '?skuids=';
        suffixUrl = '&type=2&callback=callBackPriceService' +  (!!readCookie('ipLoc-djd')?'&area=' + readCookie('ipLoc-djd').replace(/\-/g,'_') : '');

        if(channelName == 'ept'){
                prefixUrl = INTERFACE.price.eptprice + '/';
                suffixUrl = '-USD-1.html';
            }

        else if(channelName == 'newEpt'){
                prefixUrl = INTERFACE.price.getPriceRange;
                suffixUrl = '';
            }

        else if(channelName == 'vsp'){
            //prefixUrl = INTERFACE.price.vsp + '?callback=callBackPriceService&skuids=';
            prefixUrl = INTERFACE.price.vsp + '?callback=callBackPriceService&jshop=jshop&skuids=';
            suffixUrl = '';
        }

        var temp = $('span[jshop="price"]');
        $.each(temp,function(index,n){
            _nodeArr.push($(n));
        });
       // _nodeArr = jshop.component.arrayUnique(temp);
        $(window).scroll(check);

    };

    var check = function(){
        winH = $(window).scrollTop()+document.documentElement.clientHeight*2;
        if(_nodeArr.length == 0) return;
        var temArr = [];
         for(var i = 0, len = _nodeArr.length; i < len; i++){
            var model = _nodeArr[i].parents('[instanceid]'),
                baseH = model.offset().top;
            if((model.attr('module-name') == 'qualityWeekly' && baseH < winH) || (_nodeArr[i].offset().top >= baseH && _nodeArr[i].offset().top < winH)){

                var _price = $(_nodeArr[i]).attr('jdprice')||$(_nodeArr[i]).attr('jsprice')||$(_nodeArr[i]).attr('jskuprice');
                if(channelName == 'ept'){
                    getPrice(_price);
                }

                else{
                    if(_price){
                        temStr+= ((channelName == 'vsp' || channelName == 'newEpt')? _price : ('J_'+_price))+',';
                        BatchesCount ++;
                        if(BatchesCount == 20){
                            pushPriceBatches(temStr,channelName == 'newEpt');
                        }
                    }
                }

            }
            else
                temArr.push(_nodeArr[i]);
        }
        pushPriceBatches(temStr,channelName === 'newEpt');

        _nodeArr = temArr;
        delete temArr;
        if(!_nodeArr.length)
            $(window).unbind('scroll,resize',check);
    };

    window.callBackPriceService = function(data){
        var skuid=0;
        for(var i=0;i<data.length;i++){
            skuid = channelName == 'vsp' ? data[i].id :data[i].id.substr(2);
            data[i].id = skuid;
            getNumPriceService(data[i]);
        }
    };


    /**
     * 批次发送
     * @param str
     */
    var  pushPriceBatches = function(str,eptFlag){
        var skuIdArr= str.substr(str,str.length-1);
        if(skuIdArr){
            !!eptFlag ? getPrice(skuIdArr) : getskuIdArr(skuIdArr);
        }
        BatchesCount = 0;
        temStr = '';
    };

    var getskuIdArr = function(obj){
        // 创建script标签，设置其属性
        var script = document.createElement('script');
        script.setAttribute('src', prefixUrl + obj + suffixUrl);
        // 把script标签加入head，此时调用开始
        document.getElementsByTagName('head')[0].appendChild(script);
    };
    var getPrice = function(spu){
        if($('#JSHOP_CHANNEL_FLAG').val() == 'newEpt'){
            var para = {
                currency : 'USD',
                pidList : spu.split(',')
            };
            $.ajax({
                url : INTERFACE.price.getPriceRange,
                dataType : 'jsonp',
                data : {
                    json : JSON.stringify(para)
                },
                success : function(data){
                    if(data){
                        $.each(data.priceList,function(i,n){
                            if(!n.hprice) return;
                            var hprice = n.hprice,
                                lprice = price =  n.lprice;
                            if(lprice < 0 || hprice < 0) return;
                            if(price != hprice) price += '-' + hprice;

                            $("span[jsprice=" + n.pid + "],span[jdprice=" + n.pid + "]").each(function(){
                                    $(this).html(price);
                            });
                        });
                    }
                }
            });
        }
        else{
            var skuId = $(obj).attr('jdprice') || $(obj).attr('jsprice') || $(obj).attr('jskuprice'),
            script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = prefixUrl + skuId + suffixUrl;
            (document.getElementsByTagName('head')[0] || document.documentElement).appendChild(script);
        }

    };
    this.localPriceRefresh = function(container){
       // var localNodes = [],
           // tArr = $(container).find('span[jshop="price"]');
       // localNodes = jshop.component.arrayUnique(tArr);
        var localNodes = $(container).find('span[jshop="price"]');
        BatchesCount=0;
        for(var i = 0,len = localNodes.length; i< len; i++){
            var _price = $(localNodes[i]).attr('jdprice')||$(localNodes[i]).attr('jsprice')||$(localNodes[i]).attr('jskuprice');
                if(channelName == 'ept'){
                    getPrice(_price);
                }
                else{
                    if(_price){
                        temStr+= ((channelName == 'vsp' || channelName == 'newEpt')? _price : ('J_'+_price))+',';
                        BatchesCount ++;
                        if(BatchesCount == 20){
                            pushPriceBatches(temStr,channelName === 'newEpt');
                        }
                    }
                }
        }
        pushPriceBatches(temStr,channelName === 'newEpt');
    };
    init();
    check();
};

/**
 * 新EPT获取商品折扣及促销广告词
 * @author Luxingyuan
 */
function getNewEptPromInfo(){
    var _jTarget = $(".jNum[saprice]"),
        _currency = _jTarget.eq(0).attr("currency"),
        _arrSaprice = [],
        _param = "";
    $(".jNum[saprice]").each(function(index, dom){
        _arrSaprice.push(dom.getAttribute("saprice"));
    });
    _param = '{"currency":"' + _currency + '","pidList":' + '[' + _arrSaprice.join(",") + ']}';
    if(_arrSaprice.length > 0){
        $.ajax({
            url : INTERFACE.getBatchPrdPromo,
            dataType : 'jsonp',
            type : 'POST',
            data : {
                json : _param
            },
            success : function(data){
                if(data && data.prdList){
                    var _arr = data.prdList;
                    for(var i = 0, len = _arr.length; i < len; i++){
                        //有促销
                        if(_arr[i].promoTag == 1){
                            var promObj = _arr[i].promoInfo;
                            //拼接促销广告词
                            var promAd = handlePromInfo(promObj);

                            var _id = _arr[i].pid;
                            //折扣
                            if(promObj.promoType == 1){
                                var _tempDom = _jTarget.filter("[saprice='" + _id + "']");
                                if(_tempDom.attr("type") === "discount"){
                                    _tempDom.text(Number(promObj.discount.toFixed(2)));
                                    _tempDom.closest(".jNumWrap").show();
                                    _tempDom.removeClass("jNum");
                                }
                            }else if(promObj.promoType == 2){   //折扣率
                                var _tempDom = _jTarget.filter("[saprice='" + _id + "']");
                                if(_tempDom.attr("type") === "rate"){
                                    _tempDom.text(~~promObj.discountRate);
                                    _tempDom.closest(".jNumWrap").show();
                                    _tempDom.removeClass("jNum");
                                }
                            }
                        }

                    }
                }
            },
            error: function(arg){
                var kkk = 0;
            }
        });
    }
};

/**
 * 促销广告词拼接
 * 规则：cname + " Category purchase " + quotaStr + " deals " + discontStr
 * {cname：分类名称
 *  quotaStr：最低购买金额
 *  discontStr：折扣或折扣率（促销类型为1时是折扣；为2时是折扣率）
 * }
 */
function handlePromInfo(promObj){
    var _cname = promObj.cname;
    var _quotaStr = promObj.quota;
    var _discontStr = "";
    if(promObj.promoType == 1){
        _discontStr = promObj.discount;
    }
    if(promObj.promoType == 2){
        _discontStr = promObj.discountRate;
    }
    if(_cname == "" || _quotaStr == "" || _discontStr == ""){
        return "";
    }
    return _cname + " Category purchase " + _quotaStr + " deals " + _discontStr;
}

/**
 * 根据skuid全局获取京东价及促销价格并渲染（新方法，只针对新EPT频道）
 * @return {[type]} [description]
 */
function newEptGetPromoPrice() {
    var _nodeArr = [],
        prefixUrl,
        suffixUrl,
        winH,
        BatchesCount = 0,
        params = [],
        channelName = $('#JSHOP_CHANNEL_FLAG').val();

    var init = function() {
        if(channelName !== 'newEpt') {
            return;
        } else {
            var temp = $('span[jshop="price"]');
            $.each(temp,function(index,n){
                _nodeArr.push($(n));
            });
            $(window).scroll(check);
        }
    };

    var check = function() {
        winH = $(window).scrollTop() + document.documentElement.clientHeight * 2;
        if (_nodeArr.length == 0) {
            return;
        } else {
            var temArr = [];
            for(var i = 0, len = _nodeArr.length; i < len; i++){
                var model = _nodeArr[i].parents('[instanceid]'),
                    baseH = model.offset().top;
                (function(i){
                    if(_nodeArr[i].offset().top >= baseH && _nodeArr[i].offset().top < winH){
                        var skuId = $(_nodeArr[i]).attr('promojdprice') || $(_nodeArr[i]).attr('promojsprice');
                        if(skuId) {
                            var paramObj = {
                                sid: skuId,
                                curList: ["USD","CNY","HKD","GBP","EUR","AUD"]
                            };
                            params.push(paramObj);
                            BatchesCount++;
                            if(BatchesCount === 20) {
                                getPrice(params);
                            }
                        }
                    } else {
                        temArr.push(_nodeArr[i]);
                    }
                })(i);
            }
            getPrice(params);
            _nodeArr = temArr;
            delete temArr;
            if(!_nodeArr.length)
                $(window).unbind('scroll,resize',check);
            }
    };

    var getPrice = function(param) {
        param = uniqueSkuArr(param);
        if(param.length !== 0) {
            $.ajax({
                url: INTERFACE.price.getEptPromoInfo,
                dataType: 'jsonp',
                data: {
                    json: JSON.stringify(param)
                },
                success: function(data) {
                    if(data) {
                        for (var i = 0; i < data.length; i++) {
                            var obj = data[i];
                            if(obj.priceList) {
                                // 渲染价格
                                for (var j = 0; j < obj.priceList.length; j++) {
                                    $('span[promojdprice=' + obj.sid + ']').each(function(){
                                        var $this = $(this);
                                        if($this.attr('currency') === obj.priceList[j].currency) {
                                            if(obj && obj.isExistPromotion) {
                                                // 存在促销价及促销信息
                                                $this.html(obj.priceList[j].discountPrice);
                                            } else {
                                                $this.html(obj.priceList[j].jdPrice);
                                            }
                                        }
                                    });
                                    $("span[promojsprice=" + obj.sid + "]").each(function(){
                                        var $this = $(this);
                                        if($this.attr('currency') === obj.priceList[j].currency) {
                                            $this.html(obj.priceList[j].jdPrice);
                                        }
                                    });
                                };
                            }
                        };
                    }
                }
            });
        }
        BatchesCount = 0;
        params = [];
    }

    /**
     * 对含sku属性的数组进行去重
     * @param  {[type]} arr [description]
     * @return {[type]}     [description]
     */
    function uniqueSkuArr(array){
        var r = [];
        for(var i = 0, l = array.length; i < l; i++) {
            for(var j = i + 1; j < l; j++)
            if (array[i].sid === array[j].sid) j = ++i;
            r.push(array[i]);
        }
      return r;
    }

    this.localPriceRefresh = function(container){
        var localNodes = $(container).find('span[jshop="price"]');
            BatchesCount = 0
            params = [];
        for(var i = 0,len = localNodes.length; i< len; i++){
            var skuId = $(localNodes[i]).attr('promojdprice') || $(localNodes[i]).attr('promojsprice');
            if(skuId) {
                var paramObj = {
                    sid: skuId,
                    curList: ["USD","CNY","HKD","GBP","EUR","AUD"]
                };
                params.push(paramObj);
                BatchesCount++;
                if(BatchesCount === 20) {
                    getPrice(params);
                }
            }
        }
        getPrice(params);
    };

    init();
    check();
}

var skuIdPriceObj,
    skuPromoPriceObj;
jQuery(function(){
    skuIdPriceObj = new SkuIdPriceGetting();
    getNewEptPromInfo();
    skuPromoPriceObj = new newEptGetPromoPrice();
});

/**
 * JShop 公共组件，基于jQuery
 *
 * @author HeChangrong
 */
function getNumPriceService(data) {
    if (!data)
        return;
    var noPriceTag="暂无定价";
    if(data.price){
        jshop.component.setVSPPrice(data,noPriceTag);
    }
    else{
        jshop.component.setJdPrice(data,noPriceTag);
        jshop.component.setSalePrice(data,noPriceTag);
        jshop.component.setSkuPrice(data,noPriceTag);
        jshop.component.setSavePrice(data);
        jshop.component.getSaveSalePrice(data);
        jshop.component.getDiscountSalePrice(data);
        jshop.component.getDiscountSkuPrice(data);
    }
};

/**
 *获取EPT的价格
 */
function getEptPriceService(data){
    if(!data){
        return;
    }
    var noPriceTag="No Price";
    jshop.component.setJdPrice(data,noPriceTag);
    jshop.component.setSalePrice(data,noPriceTag);
    jshop.component.setSkuPrice(data,noPriceTag);
    jshop.component.setSavePrice(data);
    jshop.component.setDiscountPrice(data);
};

/***
 * JSHOP商品价格组件
 */

jshop.component.getScript=function(href, callback){
    var dataScripts = new Array();
    var head = document.getElementsByTagName("head")[0]
        || document.documentElement;
    var dataScripts = $('script', head);
    if (dataScripts.length > 0) {
        dataScripts.each(function(index, value) {
            if (value.src == href) {
                $(value).remove();
            }
            return true;
        });
    }
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = href;
    head.appendChild(script);
};

/**
 * SKUID数组去重
 */
jshop.component.arrayUnique=function(arr) {
    var temp1 = {};
    var temp2 = [];
    var temp3 = {};
    for ( var i = 0, len = arr.length; i < len; i++) {
        var obj = arr.eq(i),
            value = obj.attr('jdprice') || obj.attr('jsprice') || obj.attr('jskuprice');
        if(typeof value != 'undefined'&&value !=''){
            if (temp1[value]==undefined) {
                temp1[value] = obj.offset().top;
                temp2.push(obj);
                temp3[value] = temp2.length -1 ;
            }else if (temp1[value]>obj.offset().top){
                temp1[value] = obj.offset().top;
                temp2[temp3[value]]=obj;
            }
        }
    }
    return temp2;
};

/**
 * 获取价格组件
 */
jshop.component.getPrice = function(container){
    if(!container) return;
    skuIdPriceObj.localPriceRefresh(container);
    skuPromoPriceObj.localPriceRefresh(container);
    //触发专享价获取的check
    jshop.component.appPrice.check();
};

jshop.component.setVSPPrice = function(data,noPriceTag){
    if (!data)
        return;

    if(data.price){
        var price = data.price>=0 ? data.price
            : "<span class='jdNumNo'>"+noPriceTag+"</span>";
    }
    var obj = jQuery("span[jdprice=" + data.id + "]");
    $.each(obj, function(index, value) {
        $(value).html(price);
    });
};

/***
 * 设置商品价格接口
 */
jshop.component.setPrice=function(prefixUrl,suffixUrl,container){
    var skus = container ? container.find("span[jshop='price']")
        : jQuery("span[jshop='price']");
    var arr1 = jshop.component.arrayUnique(skus);
    for ( var i = 0, len = arr1.length; i < len; i++) {
        var src = prefixUrl + arr1[i]+ suffixUrl;
        jshop.component.getScript(src, function() {
        });
    }
};

/** 设置商品京东价 */
jshop.component.setJdPrice = function(data,noPriceTag) {
    if (!data)
        return;

    if(data.p){
        var price = data.p>=0 ? data.p
            : "<span class='jdNumNo'>"+noPriceTag+"</span>";
    }else if(data.skuId){
        var price = data.jdPrice ? data.jdPrice.amount
            : "<span class='jdNumNo'>"+noPriceTag+"</span>";
    }
    var obj = jQuery("span[jdprice=" + (data.id || data.skuId) + "]");
    $.each(obj, function(index, value) {
        $(value).html(price);
    });
};

/** 设置商品原价 */
jshop.component.setSalePrice = function(data,noPriceTag) {
    if (!data)
        return;
    if(data.m){
        var price = data.m>=0 ? data.m
            : "<span class='jsNumNo'>"+noPriceTag+"</span>";
    }else if(data.skuId){
        var price = data.salesPrice ? data.salesPrice.amount
            : "<span class='jsNumNo'>"+noPriceTag+"</span>";
    }
    var obj = jQuery("span[jsprice=" + (data.id || data.skuId) + "]");
    $.each(obj, function(index, value) {
        $(value).html(price);
    });
};

/** 设置商品京东原价 */
jshop.component.setSkuPrice = function(data,noPriceTag) {
    if (!data)
        return;
    /*var price = data.skuPrice ? data.skuPrice.amount
     : "<span class='jdNumNo'>"+noPriceTag+"</span>";*/
    if(data.m){
        var price = data.m>=0 ? data.m
            : "<span class='jsNumNo'>"+noPriceTag+"</span>";
    }else if(data.skuId){
        var price = data.skuPrice ? data.skuPrice.amount
            : "<span class='jsNumNo'>"+noPriceTag+"</span>";
    }
    var obj = jQuery("span[jskuprice=" + (data.id || data.skuId) + "]");
    $.each(obj, function(index, value) {
        $(value).html(price);
    });
};

/**获取折扣率*/
jshop.component.setDiscountPrice=function(data){
    /**获取价格百分比*/
    function getPricePercent(divisor,dividend){
        if(divisor==0||dividend==0){
            return "";
        }
        var rs = ((divisor-dividend)/divisor)*100;
        var percent= Math.round(rs);
        return percent;
    }
    if (!data)
        return;
    if(data.m){
        var jdprice = data.p>=0 ? data.p:0;
        var skuPrice = data.m>=0 ? data.m:0;
    }else if(data.skuId){
        var jdprice = data.jdPrice ? data.jdPrice.amount:0;
        var skuPrice = data.skuPrice ? data.skuPrice.amount:0;
    }
    var obj = jQuery("span[diprice=" + (data.id || data.skuId) + "]");
    $.each(obj, function(index, value) {
        $(value).html(getPricePercent(skuPrice,jdprice));
    });
};

/**获取节约的金额 skuPrice-jdPrice*/
jshop.component.setSavePrice=function(data){
    /**获取价格百分比*/
    function getPriceSave(minu,sub){
        if(sub==0||minu==0){
            return "";
        }
        var rs = minu-sub;
        if(rs<0||rs==0){
            rs = "0";
        }
        rs=rs.toString().match(/\d+(\.\d{1,2})?/)[0];
        return rs;
    }
    if (!data)
        return;
    if(data.m){
        var jdprice = data.p>=0 ? data.p:0;
        var skuPrice = data.m>=0 ? data.m:0;
    }else if(data.skuId){
        var jdprice = data.jdPrice ? data.jdPrice.amount:0;
        var skuPrice = data.skuPrice ? data.skuPrice.amount:0;
    }

    var obj = jQuery("span[saprice=" + (data.id || data.skuId) + "]");
    $.each(obj, function(index, value) {
        $(value).html(getPriceSave(skuPrice,jdprice));
    });
};

/**获取节约的金额 salePrice-jdPrice*/
jshop.component.getSaveSalePrice=function(data){
    /**获取价格百分比*/
    function getPriceSave(minu,sub){
        if(sub==0||minu==0){
            return "";
        }
        var rs = minu-sub;
        if(rs<0||rs==0){
            rs = "0";
        }
        rs=rs.toString().match(/\d+(\.\d{1,2})?/)[0];
        return rs;
    }
    if (!data)
        return;
    if(data.m){
        var jdprice = data.p>=0 ? data.p:0;
        var salesPrice = data.m>=0 ? data.m:0;
    }else if(data.skuId){
        var jdprice = data.jdPrice ? data.jdPrice.amount:0;
        var salesPrice = data.salesPrice ? data.salesPrice.amount:0;
    }

    var obj = jQuery("span[ssprice=" + (data.id || data.skuId) + "]");
    $.each(obj, function(index, value) {
        $(value).html(getPriceSave(salesPrice,jdprice));
    });
};

/**获取折扣率 jdPrice/salePrice */
jshop.component.getDiscountSalePrice=function(data){
    /**获取价格百分比*/
    function getPricePercent(divisor,dividend){
        if(divisor==0||dividend==0){
            return "";
        }
        var rs = (dividend/divisor)*10;
        var discount = new Number(rs);
        return discount.toFixed(1);
    }
    if (!data)
        return;
    if(data.m){
        var jdprice = data.p>=0 ? data.p:0;
        var salesPrice = data.m>=0 ? data.m:0;
    }else if(data.skuId){
        var jdprice = data.jdPrice ? data.jdPrice.amount:0;
        var salesPrice = data.salesPrice ? data.salesPrice.amount:0;
    }

    var obj = jQuery("span[dsaleprice=" + (data.id || data.skuId) + "]");
    $.each(obj, function(index, value) {
        $(value).html(getPricePercent(salesPrice,jdprice));
    });
};

/**获取折扣率  jdPrice/skuPrice */
jshop.component.getDiscountSkuPrice=function(data){
    /**获取价格百分比*/
    function getPricePercent(divisor,dividend){
        if(divisor==0||dividend==0){
            return "";
        }
        var rs = (dividend/divisor)*10;
        var discount = new Number(rs);
        return discount.toFixed(1);
    }
    if (!data)
        return;
    if(data.m){
        var jdprice = data.p>=0 ? data.p:0;
        var skuPrice = data.m>=0 ? data.m:0;
    }else if(data.skuId){
        var jdprice = data.jdPrice ? data.jdPrice.amount:0;
        var skuPrice = data.skuPrice ? data.skuPrice.amount:0;
    }

    var obj = jQuery("span[dskuprice=" + (data.id || data.skuId) + "]");
    $.each(obj, function(index, value) {
        $(value).html(getPricePercent(skuPrice,jdprice));
    });
};

/**
 * PV、UV统计埋点
 */
jQuery(function(){
    try{
        var appIdVal =jQuery("#pageInstance_appId").val();
        var pageIdVal =jQuery("#pageInstance_id").val();
        if(appIdVal && pageIdVal){
            log(1,8,appIdVal,pageIdVal);
        }
    }catch (e){

    }
});
/**
 * 销售转换埋点
 */
jQuery(function(){
    var numberReg = /^\d+$/;
    /*包含所有的商品地址信息
     */
    var arr = ['360buy.com/product/',
        'book.360buy.com/',
        'mvd.360buy.com/',
        'e.360buy.com/',
        'minitiao.com/product/',
        'ehaoyao.com/product/',
        '360top.com/product/',
        'en.360buy.com/product/',
        'jd.com/product/',
        'book.jd.com/',
        'mvd.jd.com/',
        'e.jd.com/',
        'item.jd.com/'];
    jQuery.each(arr, function(key, val) {
        jdProductStr = val;
        var productA = jQuery("[href*='" + jdProductStr + "']");
        jQuery.each(productA, function(i,n){
            var tempHref = n.href;
            var sku = tempHref.substring(tempHref.lastIndexOf("/") + 1,tempHref.lastIndexOf("."));
            if(numberReg.test(sku)){
                jQuery(n).bind("click",function(){
                    try{
                        var appIdVal =jQuery("#pageInstance_appId").val();
                        if(appIdVal){
                            reClickCube(appIdVal,sku);
                        }
                    }catch (e){

                    }
                });
            }
        });
    });

    /*包含所有商品加入购物车地址信息*/
    var cartArr = ['360buy.com/purchase/InitCart.aspx',
        '360buy.com/InitCart.aspx',
        '360buy.com/cart/addSkuToCart.action',
        'jd.com/purchase/InitCart.aspx',
        'jd.com/InitCart.aspx',
        'jd.com/cart/addSkuToCart.action'];
    jQuery.each(cartArr, function(key, val){
        var jdAddCarStr = val;
        var addCarA = jQuery("[href*='" + jdAddCarStr + "']");
        jQuery.each(addCarA, function(i,n){
            var tempHref = n.href;
            var sku = tempHref.substring(tempHref.indexOf("pid="));
            if(sku.indexOf("&") > -1){
                var skuamps = sku.split("&");
                if(skuamps.length > 0){
                    sku = skuamps[0].substring(skuamps[0].indexOf("pid=") + 4);
                }
            } else {
                sku = sku.substring(sku.indexOf("pid=") + 4);
            }
            if(numberReg.test(sku)){
                var oldFunc = jQuery(n).attr("onclick");
                jQuery(n).unbind("click").removeAttr("onclick");
                jQuery(n).bind("click",function(){
                    try{
                        var appIdVal =jQuery("#pageInstance_appId").val();
                        if(appIdVal){
                            reClickCube(appIdVal,sku);
                        }
                    }catch (e){
                    }
                }).bind("click",oldFunc || function(){});
            }
        });
    });
});

/** 页面背景图片锁定功能*/
$(function(){
    function _background_fixed_handle(){
        var _is_fixed = $('.layoutcontainer').attr('isfixed'),
            _TOP = $('.layoutcontainer').offset().top,
            _decorate_flag = typeof gConfig != 'undefined';
        var _is_fixed = parseInt(_is_fixed);
        if(_is_fixed){
            $(window).scroll(function(){
                var __top = $(this).scrollTop();

                if(__top >= _TOP){
                    $('.layoutcontainer').css('background-attachment','fixed');
                }
                else{
                    $('.layoutcontainer').css('background-attachment','scroll');
                }
            });
        }
    };
    _background_fixed_handle();
    if(typeof NotifyPop != 'undefined'){
        NotifyPop.init($(".notice-store"));
    }
});

if(typeof jdModelCallCenter != 'undefined'){
    jdModelCallCenter.init =  function() {
        var a = this;
        $.ajax({
            url: ("https:" == document.location.protocol ? "https://": "http://") + "passport." + pageConfig.FN_getDomain() + "/new/helloService.ashx?m=ls&sso=0",
            dataType: "jsonp",
            scriptCharset : 'gbk',
            success: function(b) {
                a.tbClose();
                b && b.info && $("#loginbar").html(b.info);
                    a.settings.fn();
                }
            });
    };
};

$.fn.extend({
    tab : function(setting){
        var sets = $.extend({
            focus : 'd-current',
            handle : function(){},
            item : 'li',
            event : 'click'
        },setting || {}), that = $(this), terms = that.find(sets.item);

        if(!terms.length) return;
        terms.each(function(index,n){
            $(n).bind(sets.event,function(){
                terms.removeClass(sets.focus);
                $(this).addClass(sets.focus);
                sets.handle.call(n,index);
            });
        });
        terms.eq(0).trigger(sets.event);
    }
});


/**
 * 点击保存的Input框中
 * @return
 */
function newTagOnfocus(){
    var newTag = $('#newTag').val();
    newTag = newTag.trim();
    if(  newTag == $('#newTag').attr('placeholder') ){
         $('#newTag').val('');
    }
};

/**
 * safari浏览器在输入为中文的情况下不能正确处理maxlength=10的情况
 * 手动处理
 * @param e
 * @return
 */
function checkLength(e){
    if(e.value.length > 10){
        e.value=e.value.substring(0,10);
    }
};

function chooseTag(obj){
    var isCheck=jQuery(obj).attr("isCheck");
    if( 'undefined' == typeof isCheck || isCheck=='false' ){
        jQuery(obj).attr("isCheck","true").addClass("current");
    }else{
        jQuery(obj).attr("isCheck","false").removeClass("current");
    }
};

/**
 * [专享价价格设置组件]
 */
(function() {

    var CONFIG = {
            prefixUrl: INTERFACE.price.jdMobileBatch + '?skuids=',
            suffixUrl: '&origin=2',
            noAppPriceTag: '<span class="jAppNumNo">暂无价格</span>'
        },
        tool = {
            getScrollTop: function(){
                return document.documentElement.scrollTop||document.body.scrollTop;
            },
            getClientHeight: function(){
                return document.documentElement.clientHeight || document.body.clientHeight;
            }
        },
        screenHeight = tool.getClientHeight();

    /**
     * 初始化
     */
    function init() {
        setTimeout(function(){
            check();
        }, 100);
        $(window).bind("scroll", check);
    }

    /**
     * 请求价格并替换价格标签内容，每次至多请求20个sku
     * @param arrSku    skuId组成的数组
     */
    function loadPrice(arrSku) {
        if (arrSku && arrSku.length) {
            for (var i = 0; i < arrSku.length; i+=20) {
                jsonpPrice(arrSku.slice(i, i+20));
            }
        }
    }

    /**
     * 使用jsonp方式请求价格
     * @param arr
     */
    function jsonpPrice(arr) {
        $.ajax({
            url: CONFIG.prefixUrl + arr.join(",") + CONFIG.suffixUrl,
            dataType: "jsonp",
            success: function(data) {
                if (data && data.constructor === Array) {
                    for (var i = 0; i < data.length; i++) {
                        var price = data[i],
                            id = price.id,
                            appPrice = ( parseFloat(price.p) === -1 || price.p === undefined ) ? CONFIG.noAppPriceTag : price.p;
                        $(".jAppNum[jappprice='" + id + "']").html(appPrice).addClass('j_price_zx');
                    }
                }
            }
        });
    }

    /**
     * 检测并请求价格
     * @private
     */
    function check() {
        var arrSkuId = [],
            resultArr = [];
        $(".jAppNum[jshop='price']").each(function(){
            var jItem = $(this),
                top = jItem.offset().top;
            if((jItem.height() !== 0 || top !== 0) && top <= tool.getScrollTop() + screenHeight * 2){
                //根据加载标示来加载
                arrSkuId.push(jItem.attr("jappprice"));
                jItem.removeAttr("jshop");
            }
        });

        // 去除数组重复skuId
        for(var i = 0, l = arrSkuId.length; i < l; i++) {
            for(var j = i + 1; j < l; j++){
                if (arrSkuId[i] === arrSkuId[j]){
                    j = ++i;
                }
            }
            resultArr.push(arrSkuId[i]);
        }

        resultArr.length && loadPrice(resultArr);
    }

    //暴露对外接口
    jshop.component.appPrice = {};
    jshop.component.appPrice.check = check;

    init();

})(jQuery);