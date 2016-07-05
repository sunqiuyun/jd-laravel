Array.prototype.each = function(fun){
    if(typeof fun != "function")
        throw new Error("argumets should be a function object!");
    for(var i = 0,len = this.length;i<len;i++){
         fun.call(this,i,this[i]);
    }
};
Array.prototype.isIn = function(name){
    for(var i = 0 ,len = this.length; i < len; i++){
        if(this[i] == name)
            return true;
    }
    return false;
};
Array.prototype.isEmpty = function(){
    return this.length==0?true:false;
};

Array.prototype.index = function(item){
    for(var i = 0, len = this.length; i < len; i++){
        if(this[i] == item)
            return i;
    }
    return -1;
};

Array.prototype.del= function(ele){
      var index = this.index(ele);
    if(index != -1){
          this.splice(index,1);
    }
    return this;
};

Array.prototype.aUnique = function(arr){
    if(arr.constructor != Array)
        throw new Error('aUnique:argument error');
    var _result = [];
    for(var i = 0, len = arr.length; i < len; i++){
        if(!this.isIn(arr[i]))
            _result.push(arr[i]);
    }
    return _result;
};
String.prototype.subDelete = function(startIndex,endIndex){
    if(!startIndex)
        throw new Error("subDelete is no-use!");
    if(!endIndex) return this.slice(startIndex);
    var str = this;
    return this.slice(0,startIndex).concat(this.slice(endIndex));
};
String.prototype.ltrim = function(){
    return this.replace(/(^s*)/g, "");
};
String.prototype.rtrim = function(){
    return this.replace(/(s*$)/g, "");
};
String.prototype.trim = function(){
    return this.rtrim(this.ltrim());
};

/**全局替换字符**/
String.prototype.replaceAll=function(oldStr,newStr){
    return this.replace(new RegExp(oldStr,"gm"),newStr);
};

Array.prototype.stringFormat = function(){
    for(var i =  0,len = this.length;i<len;i++){
        if(typeof this[i] == 'string'){
            this[i] = '"' + this[i] + '"';
        }else if(this[i] instanceof Array){
            this[i] = this[i].stringFormat();
        }else if(typeof this[i] == 'function'){
            this[i] = this[i];
        }
        else{
            this[i] = _jsonFormat(this[i]);
        }
    }
    return "["+this.join(",")+"]";

    function _jsonFormat(json){
        var substr = '{';
        for(var a in json){
            if(json.hasOwnProperty(a)){
                var pro = json[a];
                if(typeof pro == 'string'){
                    substr += a + ':"' + pro + '",';
                }
                else if(pro instanceof Array){
                    substr += a + ':' + pro.stringFormat() + ',';
                }
                else if(typeof pro == 'function'){
                    substr += a + ':' + pro + ',';
                }
                else{
                    substr += a + ':' + _jsonFormat(pro) + ',';
                }
            }
        }
        return substr.replace(/,$/,'') + '}';
    }
 };

/* 给数组原型绑定each方法，用在banner增加和移除css */
Array.prototype.jBannerEach = function(fun){
    if(typeof fun != "function")
        throw new Error("Array:each argument error!");
    for(var i = 0,len = this.length;i<len;i++){
        fun.call(this,i,this[i]);
    }
};

String.prototype.getQuery = function(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"),
        r = this.substr(this.indexOf("\?")+1).match(reg);
    if (r!=null) return unescape(r[2]); return null;
};



/* fe */
if(typeof(console)!='undefined'){console.log('\u4eac\u4e1c\u0028\u006a\u0064\u002e\u0063\u006f\u006d\u0029\u2014\u6210\u90fd\u7814\u7a76\u9662\uff0c\u524d\u7aef\u5f00\u53d1\u5de5\u7a0b\u5e08\u5c97\u4f4d\u7b49\u4f60\u6765\uff0c\u5730\u70b9\uff1a\u6210\u90fd\u897f\u90e8\u667a\u8c37\u0044\u533a\uff0c\u7b80\u5386\u53ef\u90ae\u4ef6\u81f3\u0063\u0064\u0077\u0061\u006e\u0063\u0068\u0075\u0061\u006e\u0023\u006a\u0064\u002e\u0063\u006f\u006d\u0020\u0028\u8bf7\u5c06\u0023\u66ff\u6362\u4e3a\u0040\uff0c\u6807\u9898\u683c\u5f0f\uff1a\u59d3\u540d\u002d\u524d\u7aef\u5f00\u53d1\u5de5\u7a0b\u5e08\u002d\u6765\u81ea\u4eac\u4e1c\u6d3b\u52a8\u5e73\u53f0\u0073\u0061\u006c\u0065\u002e\u006a\u0064\u002e\u0063\u006f\u006d\u0029');}

/** 获取全局参数中配置的静态资源路径 20151202 cdwanchuan@jd.com */
var RESOURCEPATH = jQuery('#resourcePath').val();

/** 二级域名列表 20151202 cdwanchuan@jd.com */
var SLD = {
    followSoa : '//follow-soa.jd.com', //关注
    p : '//p.3.cn', //京东价
    pm : '//pm.3.cn',//手机价
    jprice : '//jprice.jd.com',//ept
    ipi360buy : '//ipi.en.jd.com',//newEpt
    ipromojd: '//ipromo.jd.com', //newEpt获取促销信息
    vsp : '//vsp.jd.com',//大客户
    ipr360buy : '//ipr.360buy.jd.com',//新EPT获取商品折扣及促销广告词
    ad : '//ad.3.cn', //商品促销标签
    cart : '//cart.jd.com', //购物车
    creadE : '//cread.e.jd.com', //电子书
    activity : '//activity.jd.com',  //投票
    soaYushou : '//soa.yushou.jd.com', //预售老接口
    yushou : '//yushou.jd.com', //预售新接口
    diviner : '//diviner.jd.com', //商品智能推荐接口 //商品浏览历史记录
    rankM : '//rank.m.jd.com', //调用二级分类类目的地址及商品列表地址（热门排行榜） 20151202星期三还未支持https
    lsActivity : '//ls-activity.jd.com', //中奖信息
    lActivity : '//l-activity.jd.com',//抽奖及次数、收集用户收货信息
    paimai : '//paimai.jd.com', //拍卖
    mpaimai : '//mpaimai.jd.com', //m拍卖
    group : '//group.jd.com', //圈子
    passport : '//passport.jd.com', // 登录
    chat1 : '//chat1.jd.com', //店铺客服
    jimi : '//jimi.jd.com', //JIMI
    gate : '//gate.jd.com', //添加到购物车地址
    item : '//item.jd.com', //商品详情页
    clever : '//clever.jd.com',     //分群商品推荐模块使用的选品接口
    actJshop : '//act-jshop.jd.com' //JSHOP提供的act接口,
};

/** 浏览器协议 20151202 cdwanchuan@jd.com */
var getHttp = function(){
    return 'https:' == document.location.protocol ? 'https://' : 'http://';
}
/** 匹配url地址中是否含有http:、https:、//*/
var urlReg = /^(http:|https:)?\/\/\w+/;
//url地址非法验证（比如"http://","http:///","https://","https:///","//","///"）
var urlLegalReg = /^(http:|https:)?\/{2,3}$/;

/**JDF登录方法封装 20150826星期三**/

seajs.config({
    alias:{
        'login':'//misc.360buyimg.com/jdf/1.0.0/unit/login/1.0.0/login.js'
    }
})
seajs.use('//misc.360buyimg.com/jdf/1.0.0/ui/ui/1.0.0/ui.js');//解决金融频道冲突

function thick_login(callback,scope){
    seajs.use('login',function(_login){
        _login({
            //firstCheck:false,
            modal: true,//false跳转,true显示登录注册弹层
            complete: function(c) {
                callback.call(scope || this, c.Identity);
            }
        })
    });
}

/** 接口 20151010 cdwanchuan@jd.com */
var INTERFACE = {
	activityFollw :{
		follow : SLD.followSoa + '/rpc/activity/follow', //关注活动
		unfollow : SLD.followSoa + '/rpc/activity/unfollow', //取消关注活动
		isFollow : SLD.followSoa + '/rpc/activity/isFollow', //查询用户是否关注某活动
		queryForPage : SLD.followSoa + '/rpc/activity/queryForPage', //查询用户关注活动列表
		queryForCount : SLD.followSoa + '/rpc/activity/queryForCount', //查询用户关注活动数量
		isFollowBrand : SLD.followSoa + '/rpc/activity/isFollowBrand' //查询活动是否被关注 （20151009吴劲平 根据代码遗留情况看，有一部分活动变成了现在的品牌，应该是遗留问题 ）
	},
	venderFollow : {
		follow : SLD.followSoa + '/rpc/vender/follow', //关注店铺
		queryForCount : SLD.followSoa + '/rpc/vender/queryForCount', //查询用户关注店铺数量
		queryTagForListByCount : SLD.followSoa + '/rpc/vender/queryTagForListByCount', //新接口已经移除
		editTag : SLD.followSoa + '/rpc/vender/editTag', //新接口已经移除
		queryForPage  : SLD.followSoa + '/rpc/vender/queryForPage' //查询用户关注店铺列表
	},
	brandFollow : {
		follow : SLD.followSoa + '/rpc/brand/follow', //单个品牌关注
		unfollow : SLD.followSoa + '/rpc/brand/unfollow', //单个取消关注品牌
		queryForCountByPin : SLD.followSoa + '/rpc/brand/queryForCountByPin', //查询用户关注品牌数量
		batchfollow : SLD.followSoa + '/rpc/brand/batchfollow', //批量品牌关注
		batchIsFollow : SLD.followSoa + '/rpc/brand/batchIsFollow', //批量查询是否已关注品牌
		batchUnfollow : SLD.followSoa + '/rpc/brand/batchUnfollow' //批量取消关注品牌
	},
	productFollow : {
		follow : SLD.followSoa + '/rpc/product/follow', //关注商品
		queryForCountByPid : SLD.followSoa + '/rpc/product/queryForCountByPid', //商品关注人数
        queryForCountByPids: SLD.followSoa + '/rpc/product/queryForCountByPids', // 批量获取商品关注人数
		queryForPage : SLD.followSoa + '/rpc/product/queryForPage' //查询用户关注商品列表
	},
	price : {
		jd : SLD.p + '/prices/mgets', //获取商品促销后的商品价格（主站）
		jdMobile : SLD.pm + '/prices/mgets', //查询商品促销价格（手机）
		jdMobileBatch : SLD.pm + '/prices/pcpmgets', //批量查询商品促销价格（手机）"
		eptprice : SLD.jprice + '/eptprice',  //ept
		getPriceRange : SLD.ipi360buy + '/batchGetPriceRange.html', // newEpt 批量获取spu的价格
		getEptPromoInfo: SLD.ipromojd + '/api/promoinfo/getBtCurJdPrice.html', // newEpt 根据sku批量获取商家商品促销价格及折扣信息
        vsp : SLD.vsp + '/jshop/batchPrice'  //vsp
    },
    getBatchPrdPromo : SLD.ipr360buy + '/getBatchPrdPromo.html', //新EPT获取商品折扣及促销广告词
    promoTag : SLD.ad + '/flags/mgets', //商品促销标签
    reBuyForOrderCenter : SLD.cart + '/cart/dynamic/reBuyForOrderCenter.action', //主站购物车
    miniCartServiceNew : SLD.cart + '/cart/miniCartServiceNew.action', //迷你购物车
    sevencard_insert : SLD.creadE + '/sevencard/sevencard_insert.action', //电子书频道下领取畅读卡
    sevencard_gettoken : SLD.creadE + 'sevencard/sevencard_gettoken.action',
    jindou : SLD.jprice + '/skuprice',  //京豆
    vote : {
        vote : SLD.activity + '/vote/vote.action',  //传入投票id、投票项id，用户pin，回传状态，提示内容，得票数
        optHistory : SLD.activity + '/vote/optHistory.action', //传入投票id，获取当前用户投票记录
        getCount : SLD.activity + '/vote/getCount.action', //入投票项id串，批量获取投票数
        voteInfo : SLD.activity + '/vote/voteInfo.action' //传入投票id，回传投票所有信息"
    },
    soaYushou : SLD.soaYushou + '/youshouinfo.action', //预售老接口
    yushou : SLD.yushou + '/youshouinfo.action', //预售新接口
    diviner : SLD.diviner + '/diviner', //商品智能推荐接口 //商品浏览历史记录
    rankData : SLD.rankM + '/rankData', //调用二级分类类目的地址及商品列表地址（热门排行榜）
    lottery : {
        getWinnerList : SLD.lsActivity + '/lotteryApi/getWinnerList.action', //中奖信息查询
        getLotteryInfo : SLD.lsActivity + '/lotteryApi/getLotteryInfo.action', //抽奖基本信息查询
        lottery_start : SLD.lActivity + '/lottery/lottery_start.action', //抽奖（web端）
        lottery_chance : SLD.lActivity + '/lottery/lottery_chance.action', //剩余抽奖次数查询（web端）
        lottery_address : SLD.lActivity + '/lottery/lottery_address.action'   //提交用户中奖收货信息
    },
    paimai : {
        currentList : SLD.paimai + '/services/currentList.action', //根据拍卖ID批量获取拍品的实时数据
        queryCurAlbumInfo : SLD.paimai + '/json/current/queryCurAlbumInfo' //获取专场实时信息
    },
    mpaimai : {
        queryProAccess : SLD.mpaimai + '/json/current/queryProAccess' //根据拍卖ID批量获取拍品的围观次数
    },
    group : {
        addGroupCircle : SLD.group + '/jshop/addGroupCircle.htm', //加入圈子接口
        isJoinQuanZi : SLD.group + '/relation/isJoinQuanZi.htm', //是否加入圈子
        collect : SLD.group + '/jshop/collect.htm', //收藏主题帖接口
        saveGroupPost : SLD.group + '/jshop/saveGroupPost.htm' // 发表回复帖接口
    },
    passport : {
        helloService : SLD.passport + '/new/helloService.ashx', // 判断是否登录
        login : SLD.passport + '/new/login.aspx'
    },
    checkChat : SLD.chat1 + '/api/checkChat', //店铺客服状态
    linkJimi : SLD.jimi + '/index.action', //JIMI缩小版
    linkCart : SLD.gate + '/InitCart.aspx', //添加到购物车地址
    linkPresale : SLD.cart + '/cart/dynamic/presale.action', //预售购物车列表
    linkGoods : SLD.item + '', //商品详情页
    clever: SLD.clever + '/rule/mgets.action',  //获取选品接口数据（用于分群商品推荐模块）
    actJshop : {
        ad : SLD.actJshop + '/ad.html', //获取广告位
        recommend : SLD.actJshop + '/recommend.html', //获取商品评论相关信息
        serverTime : SLD.actJshop + '/serverTime.html', //获取服务器时间
        couponSend : SLD.actJshop + '/couponSend.html', //获取优惠券信息
        couponExchange : SLD.actJshop + '/couponExchange.html', //返回京豆换券是否成功
        fs : SLD.actJshop + '/fs.html', //新限时抢购
        multi : SLD.actJshop + '/multi.html', //多个促销推荐
        single : SLD.actJshop + '/single.html', //单个促销推荐
        ms : SLD.actJshop + '/ms.html', //促销推荐
        promo : SLD.actJshop + '/promo.html', //促销接龙
        userExd : SLD.actJshop + '/userExd.html', //用户信息
        getOrderInfo : SLD.actJshop + '/getOrderInfo.html', //订单信息
        getOrderTrack : SLD.actJshop + '/getOrderTrack.html', //订单跟踪
        couponInfo : SLD.actJshop + '/couponInfo.html', // 京东优惠券
        getShopCoupon : SLD.actJshop + '/getShopCoupon.html', //店铺优惠券
        goodsInfo : SLD.actJshop + '/goodsInfo.html', //商品信息
        getPopShopInfo : SLD.actJshop + '/getPopShopInfo.html', //店铺优惠券信息
        balance : SLD.actJshop + '/balance.html', //账户余额
        jbn : SLD.actJshop + '/jbn.html', // 用户京豆数量
        getUserAddress: SLD.actJshop + '/getDefaultAddress.html',   //获取用户默认地址
        attentionCount : SLD.actJshop + '/attentionCount.html', //商品关注数
		brandinfo : SLD.actJshop + '/brandinfo.html', //获取品牌信息，LOGO等 cdzhouguoxin@jd.com
    },
    getData : function(args){
        var param = jQuery.extend({
            url : '',
            data : {},
            dataType : 'jsonp',
            callBack : function(){}
        }, args || {});

        if(param.jsonpCallback){
            jQuery.ajax({
                url : url,
                data : data,
                dataType : 'jsonp',
                jsonpCallback : param.jsonpCallback,
                success : function(d){
                    callBack.call(d);
                }
            });
        }else{
            jQuery.ajax({
                url : url,
                data : data,
                dataType : 'jsonp',
                success : function(d){
                    callBack.call(d);
                }
            });
        }
    }
};

/*
 ***********************************************************base animate tools **************************************
*/
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",

    easeInQuint: function(a, b, c, d, e) {
        return d * (b /= e) * b * b * b * b + c
    },

    easeOutQuint: function(a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b * b * b + 1) + c
    },

    easeInOutQuint: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c: d / 2 * ((b -= 2) * b * b * b * b + 2) + c
    },

    easeOutElastic: function(a, b, c, d, e) {
        var f = 1.70158,
        g = 0,
        h = d;
        if (0 == b) return c;
        if (1 == (b /= e)) return c + d;
        if (g || (g = .3 * e), h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return h * Math.pow(2, -10 * b) * Math.sin(2 * (b * e - f) * Math.PI / g) + d + c
    },

    easeInOutElastic: function(a, b, c, d, e) {
        var f = 1.70158,
        g = 0,
        h = d;
        if (0 == b) return c;
        if (2 == (b /= e / 2)) return c + d;
        if (g || (g = .3 * e * 1.5), h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return 1 > b ? -.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) + c: h * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) * .5 + d + c
    },

    easeInCirc: function(a, b, c, d, e) {
        return - d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
    },

    easeOutCirc: function(a, b, c, d, e) {
        return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
    },

    easeInOutCirc: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c: d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
    }
});

/*
*************************************************goods share class ********************************************************
*/

(function(window, undefined){
    var css = '.jShareArea{display: none;position: absolute;width: 191px;background-color: #464646;padding-top: 3px;border-radius: 5px;overflow: hidden;z-index:200;}.jShareArea ul {padding-left: 5px;overflow: hidden;}.jShareArea li {float: left;margin: 3px 5px 3px 0;padding: 3px;width: 80px;text-align: center;cursor: pointer;border: solid 1px #464646;color: #bbb;}.jShareArea li:hover {box-shadow: 0 0 1px rgba(102,102,102,.9);border-radius: 2px;border-color: #363636;color: #fff;}.jShareArea li span {float: left;display: block;width: 16px;height: 16px;background: url(//img14.360buyimg.com/cms/g14/M03/07/07/rBEhVVHw12IIAAAAAAATGyPhlyEAABalQLZrLcAABMz254.gif);}.jShareArea .iconWeibo {background-position: 0 0;}.jShareArea .iconQQ {background-position: 0 -16px;}.jShareArea .icon163 {background-position: 0 -32px;}.jShareArea .iconRenren {background-position: 0 -48px;}.jShareArea .iconQzone {background-position: 0 -64px;}.jShareArea .iconMogujie {background-position: 0 -112px;}.jShareArea .iconKaixin {background-position: 0 -128px;}.jShareArea .iconDouban {background-position: 0 -144px;}.jShareArea li .jText {float: left;margin-left: 5px;font-style: normal;}';
    $(function(){
        $('<style type="text/css">' + css + '</style>').appendTo('head');
    });
    var _SNS = [
        {
            title: "新浪微博",
            icon: "iconWeibo",
            id: "sinaminiblog"
        },
        {
            title: "腾讯微博",
            icon: "iconQQ",
            id: "qqmb"
        },
        {
            title: "网易微博",
            icon: "icon163",
            id: "neteasemb"
        },
        {
            title: "人人网",
            icon: "iconRenren",
            id: "renren"
        },
        {
            title: "QQ空间",
            icon: "iconQzone",
            id: "qzone"
        },
        {
            title: "蘑菇街",
            icon: "iconMogujie",
            id: "mogujie"
        },
        {
            title: "开心网",
            icon: "iconKaixin",
            id: "kaixin001"
        },
        {
            title: "豆瓣",
            icon: "iconDouban",
            id: "douban"
        }
    ],
    _SNSLINK = {
        "sinaminiblog": 'http://v.t.sina.com.cn/share/share.php?appkey=583395093&title={{content}}&url={{url}}&source=bshare&retcode=0&pic={{pic}}',
        "qqmb": 'http://v.t.qq.com/share/share.php?title={{content}}&site={{url}}&pic={{pic}}&url={{url}}&appkey=dcba10cb2d574a48a16f24c9b6af610c',
        "neteasemb": 'http://t.163.com/article/user/checkLogin.do?source=' + encodeURIComponent('jd.com') + '&info={{content}} {{url}}&images={{pic}}',
        "renren": 'http://widget.renren.com/dialog/share?resourceUrl={{url}}&title=&images={{url}}&description={{content}}',
        "qzone": 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={{url}}&title=&pics={{pic}}&summary={{content}}',
        "mogujie": 'http://www.mogujie.com/mshare?url={{url}}&content={{content}}&from=mogujie&pic={{pic}}',
        "kaixin001": 'http://www.kaixin001.com/rest/records.php?url={{url}}&content={{content}}&pic={{pic}}&aid=100013770&style=111',
        "douban": 'http://www.douban.com/recommend/?url={{url}}&title={{content}}&v=1'
    };

    function JShare(cfg) {
        var config = $.extend({}, cfg);

        this.get = function(n) {
            return config[n];
        };

        this.set = function(n, v) {
            config[n] = v;
        };

        this.init();
    }

    JShare.prototype = {
        init: function() {
            this.parseSns(_SNS);
            this.bindEvent();
        },
        parseSns: function(sns) {
            var node = $('<div class="jShareArea J_JShareBoxNode"></div>'),
                html = '<ul>';
            jQuery.each(sns, function(index, item){
                html += '<li id="' + item.id + '"><span class="' + item.icon + '"></span><em class="jText">' + item.title + '</em></li>';
            });
            html += "</ul>";
            node.html(html);
            jQuery("body").append(node);
            this.set("snsBox", node);
            this.set("snser", node.find("li"));
        },
        getLink: function(lt, data) {
            var link = lt,
                data = data || '{content: "", url: "", pic: ""}';
            if (!link) {
                return "about:blank";
            }
            for (var key in data) {
                var rKey = new RegExp("{{" + key + "}}", "g");
                link = link.replace(rKey, data[key]);
            }
            return link;
        },
        bindEvent: function() {
            var _this = this,
                timer = null;
            _this.get("triggers").each(function(index, node){
                jQuery(this).bind(_this.get("eventType"), function(ev){
                    _this.set("current", jQuery(this));
                    _this.setPosition();
                    _this.show();
                    ev.preventDefault();
                });
                jQuery(this).bind("mousemove", function(ev){
                    return false;
                });
                jQuery(this).bind('mouseout', function(ev){
                    ev.preventDefault();
                    if (timer) {
                        clearTimeout(timer);
                        timer = null;
                    }
                    timer = setTimeout(function(){
                        _this.hide();
                    }, 200);
                });
            });

            _this.get("snsBox").bind('mouseover', function(ev){
                if (timer) {
                    clearTimeout(timer);
                    timer = null;
                }
            });
            _this.get("snsBox").bind("mousemove", function(ev){
                return false;
            });
            jQuery(document).bind("mousemove", function(ev){
                _this.hide();
            });

            _this.get("snser").each(function(index, node){
                jQuery(this).bind("click", function(ev){
                    ev.preventDefault();
                    window.open(_this.getLink(_SNSLINK[jQuery(this).attr("id")], {"url":window.location.href,"content":$('title').html(),"pic":""}), "_blank");
                });
            });
        },
        setPosition: function() {

         var target = this.get("current"),
                snsBox = this.get("snsBox"),
                offset = target.offset(),
                ofs = this.get("offset") || {},
                dl = 0, dt = 0,
                ww = $(window).width(),
                wh = $(window).height();
            snsBox.css("display", "block");
            dl = offset.left + (target.width() - snsBox.width()) + ofs.left;
            dt = offset.top + target.height() + ofs.top;
            if (dl + snsBox.outerWidth() > ww) {
                dl = ww - snsBox.outerWidth();
            }
            if (dt + snsBox.outerHeight() > wh + $(window).scrollTop()) {
                dt = offset.top - snsBox.outerHeight();
            }
            snsBox.css({
                "left": dl,
                "top": dt
            });
            snsBox.css("display", "none");
        },
        show: function() {
            this.get("snsBox").show();
        },
        hide: function() {
            this.get("snsBox").hide();
        }
    };

    jQuery.fn.JShare = function(cfg) {
        cfg.triggers = this;
        new JShare(cfg);
        return this;
    };
})(window);

/*
 ******************************************************************goods follow *********************************************************************
*/

(function(window, undefined){

    var html = '<div id="J_FollowSuccessMark" style="display:none;position:absolute;z-index:9999;opacity:1;width:24px;height:24px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEUAAAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AACV3M16AAAAD3RSTlMAgDAQ8KBg0ELgwHAgsJC+LfoJAAAAl0lEQVQoz2MYfIA5UVACRYDr//+fMDbTASDB////d5jA+x9Agm3l/99QPs//byCK/f9nqAAjhKX/PwAqwAlhxf9vAHO1BeP/X5QAWusPMhNE/wcBoKEQkxg4wPxfIDOdISYkiv93FGxANtMEZqYCVCAfzGJGuPP+LxDJDTQTCuSdII5xhgnwMMDciQL0vxxAFeC+xEA/AAASoDz+eKRxBgAAAABJRU5ErkJggg==) center center no-repeat;"></div>',
        _globalDiv = document.createElement("div"),
        style = _globalDiv.style,
        vendor = "";

    if ('webkitTransition' in style) {
        vendor = 'webkit';
    } else if ('mozTransition' in style) {
        vendor = "moz";
    } else if ('oTransition' in style) {
        vendor = 'o';
    }

    /*
     * @param showNum{String|HTMLElements} 显示已关注数的元素，一般为class选择器
     * @param followApi{String} 添加关注异步接口地址，默认传递productId(sku)参数
     * @param getFollower{String} 获取关注人数异步接口地址，默认传递productId(sku)参数
     */

    function JFollow(cfg) {
        var config = $.extend({
			followApi: INTERFACE.productFollow.follow,
			getFollower: INTERFACE.productFollow.queryForCountByPid,
            getFollowers: INTERFACE.productFollow.queryForCountByPids,
			item : '.item'
		}, cfg);

        this.get = function(n) {
            return config[n];
        };

        this.set = function(n, v) {
            config[n] = v;
        };

        this.init();
    }

    JFollow.prototype = {
        init: function() {
            this.set("sNum", jQuery(this.get("showNum")));
            this.getNum();
            this.addMark();
            this.bindEvent();
        },
		getNum : function(){
			var _this = this,
				targets = $(this.get('triggers')),
                nodes = {},
                ids = [];

            targets.each(function(index, n){
                var _trig = $(n),
                    _sku = _trig.closest(_this.get('item')).attr('skuid');
                ids.push(_sku);
                nodes[_sku] = _trig;
            });

            jQuery.ajax({
                url: _this.get("getFollowers"),
                dataType: "jsonp",
                type: "get",
                data: {
                    productIds: ids.join(','),
                    sysName : 'sale.jd.com'
                },
                success: function(data) {
                    if (data.success) {
                        try{
                            var oData = data.data;
                            for (var key in oData) {
                                nodes[key].closest(_this.get('item')).find(_this.get('showNum')).html(oData[key]);
                            }
                            // t.closest(_this.get('item')).find(_this.get('showNum')).html(data.data);
                        }catch(e){}
                    }
                }
            });
            /*
			targets.each(function(index,n){
				var t = $(n),
					sku = t.closest(_this.get('item')).attr('skuid');

				jQuery.ajax({
					url: _this.get("getFollowers"),
					dataType: "jsonp",
					type: "get",
					data: {
						productId: sku,
						sysName : 'sale.jd.com'
					},
					success: function(data) {
						if (data.success) {
							try{
								t.closest(_this.get('item')).find(_this.get('showNum')).html(data.data);
							}catch(e){}
						}
					}
				});
			});
            */
		},
        addMark: function() {
            var _this = this,
                ado = null;
            if (vendor || 'transition' in style) {
                !$("#J_FollowSuccessMark").length && $("body").append(html);
                ado = $("#J_FollowSuccessMark")[0];
                this.set("addOne", jQuery(ado));
            }
        },
        bindEvent: function() {
            var _this = this;
            _this.get("triggers").each(function(index, node){
                jQuery(node).bind("click", function(ev){
                    thick_login(function(){
                        _this.doFollow(node, index);
                    });
                    ev.preventDefault();
                });
            });
        },
        doFollow: function(tr, idx) {
            var _this = this,
                target = jQuery(tr),
                sku = target.closest(_this.get('item')).attr("skuid"),
                sNum = target.closest(_this.get('item')).find(this.get("showNum")),
                ado = _this.get("addOne");
            jQuery.ajax({
                url: _this.get("followApi"),
                dataType: "jsonp",
                type: "get",
                data: {
                    productId: sku,
                    sysName : 'sale.jd.com'
                },
                success: function(data) {
                    if (data.success) {
                        jQuery.ajax({
                            url: _this.get("getFollower"),
                            dataType: "jsonp",
                            type: "get",
                            data: {
                                productId: sku,
                                sysName : 'sale.jd.com'
                            },
                            success: function(data) {
                                if (data.success) {
                                    if (ado) {
                                        var datas = target.offset();
                                        ado.css("display", "block");
                                        ado.css("left", datas.left + (target.width() - ado.width()) / 2);
                                        ado.css("top", datas.top - ado.height() / 2);
                                        if (vendor) {
                                            ado.css(vendor + "Transition", 'opacity 1s ease-out, -' + vendor + '-transform 1s ease-out');
                                            ado.css(vendor + "Transform", 'scale(0.2) translate3d(0, -32px, 0)');
                                        } else {
                                            ado.css("transition", 'opacity 1.5s ease-out, transform 1.5s ease-out');
                                            ado.css("transform", 'scale(0.2) translate3d(0, -32px, 0)');
                                        }
                                        ado.css('opacity', 0);
                                        setTimeout(function(){
                                            ado.css("display", "none");
                                            if (vendor) {
                                                ado.css(vendor + "Transition", '');
                                                ado.css(vendor + "Transform", 'scale(1) translate3d(0, 0, 0)');
                                            } else {
                                                ado.css("transition", '');
                                                ado.css("transform", 'scale(1) translate3d(0, 0, 0)');
                                            }
                                            ado.css('opacity', 1);
                                        }, 300);
                                        sNum.html(parseInt(sNum.html(),10) + 1);
                                    }
                                } else {
                                    if (console) {
                                        console.log(data.msg);
                                    }
                                }
                            }
                        })
                    } else {
                        if(data.code && data.code === "F0409"){
                            alert("请勿重复关注哦");
                        }else{
                            alert(data.msg);
                        }
                    }
                }
            });
        }
    };

    jQuery.fn.JFollow = function(cfg) {
        cfg.triggers = this;
        new JFollow(cfg);
        return this;
    };
})(window);

/**
 * JVote 投票功能（投票后显示投票结果，进入页面要根据用户投票情况判断是否展示投票结果及投票按钮）
 * @param  {[type]} window    [description]
 * @param  {[type]} undefined [description]
 * @return {[type]}           [description]
 */
(function(window, undefined) {

    function JVote(args) {
        var args = jQuery.extend({
            //传入投票id、投票项id，用户pin，回传状态，提示内容，得票数
            voteUrl: INTERFACE.vote.vote,
            //传入投票id，获取当前用户投票记录
            historyUrl: INTERFACE.vote.optHistory,
            //入投票项id串，批量获取投票数
            voteCountUrl: INTERFACE.vote.getCount,
            //传入投票id，回传投票所有信息
            voteInfoUrl: INTERFACE.vote.voteInfo,
            //投票项
            voteItem: 'li',
            //投票按钮
            voteBtn: '.jVoteBtn',
            //投票区域
            voteItemArea: '.voteItemArea',
            //投票结果区域
            countArea: '.jCountArea',
            //显示已参与人数节点
            countTotal: '.jVoteTotal',
            //用户pin，thick_login方法返回
            pin: ''
        }, args);

        this.get = function(n) {
            return args[n];
        };

        this.set = function(n, v) {
            args[n] = v;
        };

        this.init();
    }

    JVote.prototype = {

        init: function() {
            this.isJoin();
            this.bindVoteClick();
        },

        /**
         * 判断用户是否参加过投票
         * @return {Boolean} [description]
         */
        isJoin: function() {
            var _this = this,
                scope = _this.get('scope'),
                voteid = scope.find(_this.get('voteBtn')).attr('voteid');
            jQuery.ajax({
                url: _this.get('historyUrl'),
                data: {
                    id: voteid
                },
                cache: false,
                dataType: 'jsonp',
                success: function(data) {
                    _this.getVoteResult(); //获取投票结果
                    _this.showVoteArea();
                    if (data && data.success) {
                        // 请求接口正常（已登录，正确返回数据）
                        switch (data.isJoin) {
                            case 1:
                                // 参与过此次投票，展示投票结果区域
                                _this.showResultArea();
                                break;
                            default:
                                break;
                        }
                    } else {
                        // 请求接口异常（有可能未登录），不展示结果，点击投票时再进行登录判断。
                    }
                }
            });
        },

        /**
         * 判断用户是否已登录
         * @return {Boolean} [description]
         */
        isLogin: function() {
            var _this = this,
                scope = _this.get('scope');
            thick_login(function(c) {
                _this.set('pin', c.Name); //登录成功设置用户pin
                _this.voteAction(); //投票请求
            }, scope);
        },

        /**
         * 批量获取投票数
         * @return {[type]} [description]
         */
        getVoteResult: function() {
            var _this = this,
                items = '',
                scope = _this.get('scope');

            // 循环获取选项id
            scope.find('.jNum').each(function(){
                items += jQuery(this).attr('votecount') + ',';
            });

            // 获取投票结果详细数据，回调函数渲染数据
            jQuery.ajax({
                url: _this.get('voteCountUrl'),
                data: {
                    ids: items.substring(0, items.length - 1)
                },
                cache: false,
                dataType: 'jsonp',
                success: function(data) {
                    var total = 0;
                    for (var key in data) {
                        // 渲染每个选项得票数
                        scope.find('[votecount=' + key + ']').html(data[key]);
                        total += data[key];
                    };
                    // 渲染总投票人数
                    scope.find(_this.get('countTotal')).html(total);
                    for (var key in data) {
                        if (total != 0) {
                            var ratio = data[key] / total;
                            // 渲染每个选项得票率
                            scope.find('[voterationum=' + key + ']').html(Math.round(ratio * 100));
                            // 渲染每个选项得票率进度条
                            scope.find('[voteratio=' + key + ']').css({
                                width: ratio * 100 + '%'
                            });
                        } else {
                            //此处正常情况下执行不到
                            scope.find('[voterationum=' + key + ']').html(0);
                        }

                    };
                }
            });
        },

        /**
         * 显示投票区域
         * @return {[type]} [description]
         */
        showVoteArea: function() {
            var _this = this,
                scope = _this.get('scope');
            scope.find(_this.get('voteItemArea')).css({
                'opacity': 1,
                'filter': 'alpha(opacity=100)'
            })
        },

        /**
         * 展示投票结果区域
         * @return {[type]} [description]
         */
        showResultArea: function() {
            var _this = this,
                scope = _this.get('scope');
            // 隐藏投票按钮
            scope.find(_this.get('voteBtn')).hide();
            // 展示结果区域
            scope.find(_this.get('countArea')).css({
                'display': 'inline-block',
                '*display': 'inline',
                '*zoom': 1
            });
        },

        /**
         * 传入投票id、投票项id，用户pin，回传状态，提示内容，得票数
         * @return {[type]} [description]
         */
        voteAction: function() {
            var _this = this,
                scope = _this.get('scope');
            if (scope.find('input[checked=checked]').length != 0) {
                // 根据选中项获取投票id，和投票项id，获取用户pin
                var _this = this,
                    scope = _this.get('scope'),
                    id = scope.find('input[checked=checked]').attr('voteid'),
                    itemid = scope.find('input[checked=checked]').attr('itemid'),
                    pin = _this.get('pin');
                // 发起投票请求
                jQuery.ajax({
                    url: _this.get('voteUrl'),
                    data: {
                        id: id,
                        pin: pin,
                        itemId: itemid
                    },
                    cache: false,
                    dataType: 'jsonp',
                    success: function(content) {
                        if (!content) return;
                        if (content.isSuccess) {
                            setTimeout(function() {
                                _this.getVoteResult();
                                _this.showResultArea();
                            }, 1000);
                        } else {
                            _this.voteFail(content);
                        }
                    },
                    error: function() {
                        _this.voteFail();
                    }
                });
            } else {
                alert('请选择投票项！');
            }
        },

        bindVoteClick: function() {
            var _this = this,
                scope = _this.get('scope');
            scope.find(_this.get('voteBtn')).click(function() {
                _this.isLogin();
            });
        },

        voteFail: function(data) {
            // 模板内居中显示失败信息，2秒后消失
            var _this = this,
                scope = _this.get('scope')
            _message = scope.find('.message');
            if (data && data.tip) {
                _message.find('.tip').html(data.tip);
            } else {
                _message.find('.tip').html('网络出现问题');
            }
            _message.css({
                'top': scope.height() / 2 - _message.height() / 2,
                'left': scope.width() / 2 - _message.width() / 2,
                'opacity': 0.7,
                'filter': 'alpha(opacity=70)'
            }).show();
            setTimeout(function() {
                _message.animate({
                    'opacity': 0,
                    'filter': 'alpha(opacity=0)'
                });
            }, 2000);
        }

    };

    jQuery.fn.JVote = function(args) {
        args.scope = this;
        new JVote(args);
        return this;
    };

})(window);

(function(w,$,undefined){
    /*
     * @function：关注
     * @description：活动关注、店铺关注、商品关注
     * @param：
     * @author：20151015 cdwanchuan@jd.com
     *一、业务
        1、逻辑业务：
            1）页面打开时，获取页面上当前作用域下所有带有点击class节点上的data-id，初始化关注状态；
            2）根据3种关注功能类型，展示不同的效果，参见dataType参数

     * 二、公共方法（Module.js里面增加attent方法）
        1、点击元素：e-attention（用此class名做唯一区分）
        2、关注ID：data-id（节点伪属性，将ID保存在此）
        3、区分关注功能类型：data-type（节点伪属性，用户手动传入），获取点击元素上的功能类型  0：所有状态+弹出层；1：关注和取消关注+修改按钮文案+关注成功弹出层；2：默默关注
        4、点击元素，受限于模块module-name，只有在模块下才能使用
        5、使用方法：<div class="j-module" module-function="saleAttent" module-param="{}"><a href="javascript:;" class="e-attention" data-id="" data-state="0" data-type="0">关注活动</a></div>
    */
    function saleAttent(args){
        var param = jQuery.extend({
            attentType : 'activity', //关注的ID类型：activity（活动）、vender（店铺）、product（商品）
            activityType : 1, //当关注的ID类型是活动时，必须传此值；0店铺活动，1采销活动
            node : '.e-attention', //关注点击元素
            dataId : 'data-id',//（节点伪属性，将活动ID保存在此）
            dataState : 'data-state', //临时状态data-state ：0未关注；1关注成功；2已经关注；3关注数量达到上限；4关注失败
            dataType : 'data-type',//获取点击元素上的功能类型  0：所有状态+弹出层；1：关注和取消关注+修改按钮文案+关注成功弹出层；2：默默关注
            current : 'current', //已经关注样式名，初始化关注状态时，如果已经关注过的，则默认加上此样式
            sysName : 'sale.jd.com' //关注注册系统名
        }, args || {}),
            _this = jQuery(this),
            attentType = param.attentType,
            activityType = param.activityType,
            node = _this.find(param.node),
            current = param.current,
            currentDom,//全局变量，获取当前触发的事件元素
            dataTypeValue,//全局变量，获取当前触发的事件元素上的功能类型
            para = [], //传入参数
            _INTERFACE = {
                follow : SLD.followSoa + '/rpc/' + attentType + '/follow', //关注活动
                batchIsFollow : SLD.followSoa + '/rpc/' + attentType + '/batchIsFollow', //查询用户关注活动状态（批量）
                unfollow : SLD.followSoa + '/rpc/' + attentType + '/unfollow', //取消关注活动
                queryForCount : SLD.followSoa + '/rpc/' + attentType + '/queryForCount' //查询用户关注活动数量
            };

        if(!node.length){return;}

        var attentHtml = '<div class="follow-dialog-mask"></div>'
        +'<div class="follow-dialog">'
        +   '<div class="attent-mt">'
        +       '<span class="attent-close" title="关闭">关闭</span>'
        +       '<span class="attent-title">提示</span>'
        +   '</div>'
        +   '<div class="attent-mc">'
        +       '<div class="attent-con">'
        +           '<span class="attent-msg"></span>'
        +           '<span class="attent-other"></span>'
        +       '</div>'
        +   '</div>'
        +'</div>';

        var attentCss = '<style id="followCls">'
        +'.follow-dialog-mask{position:fixed; _position:absolute; left:0; top:0; right:0; bottom:0; background:#000; opacity:0.3; filter:alpha(opacity=30); z-index:100; display:none;}'
        +'.follow-dialog-mask.current{display:block;}'
        +'.follow-dialog{width:320px; border:solid 4px rgba(0,0,0,0.1); background:#fff; position:fixed; _position:absolute; left:50%; top:50%; margin:-60px 0 0 -160px; z-index:101; display:none;}'
        +'.follow-dialog.current{display:block;}'
        +'.follow-dialog .attent-mt{height:32px; line-height:32px; background:#f5f5f5; font-size:16px; color:#222; text-indent:10px; overflow:hidden;}'
        +'.follow-dialog .attent-close{float:right; width:32px; height:32px; text-indent:-9999px; background:url(//misc.360buyimg.com/lib/skin/2013/i/thickbox_close.png) center center no-repeat; cursor:pointer;}'
        +'.follow-dialog .attent-ok, .follow-dialog .attent-repeat, .follow-dialog .attent-error, .follow-dialog .attent-max{height:48px; margin-left:20px; padding:20px 20px 20px 48px;}'
        +'.follow-dialog .attent-ok{background:url(//img12.360buyimg.com/cms/jfs/t1435/352/153421548/1347/d377c92d/555e9e71Nb767e906.png) left center no-repeat;}'
        +'.follow-dialog .attent-repeat, .follow-dialog .attent-error, .follow-dialog .attent-max{background:url(//img14.360buyimg.com/cms/jfs/t1516/358/164942511/1418/e0c25f0c/555e9e75Nfca9da16.png) left center no-repeat;}'
        +'.follow-dialog .attent-ok .attent-msg{font-size:14px; color:#009900; font-weight:bold;}'
        +'.follow-dialog .attent-repeat .attent-msg, .follow-dialog .attent-error .attent-msg, .follow-dialog .attent-max .attent-msg{font-size:14px; color:#ff771e; font-weight:bold;}'
        +'.follow-dialog .attent-other{color:#6f6363; display:block; margin-top:10px;}'
        +'.follow-dialog .attent-other a{color:#004499;}'
        +'.follow-dialog .attent-other .attent-text{margin-right:10px;}'
        +'</style>';

        var attentInfo = {
            activity : {
                msgOk : '&#x5173;&#x6CE8;&#x6210;&#x529F;&#xFF01;',
                msgRepeat : '&#x5DF2;&#x5173;&#x6CE8;&#x8FC7;&#x8BE5;&#x6D3B;&#x52A8;&#xFF01;',
                msgError : '&#x5173;&#x6CE8;&#x6D3B;&#x52A8;&#x5931;&#x8D25;&#xFF01;',
                msgMax : '&#x5173;&#x6CE8;&#x7684;&#x6D3B;&#x52A8;&#x8FBE;&#x5230;&#x6700;&#x5927;&#x6570;&#x91CF;&#xFF01;',
                msgOther : '<span class="attent-text">&#x60A8;&#x5DF2;&#x5173;&#x6CE8;<span class="attent-num">{attentNum}</span>&#x4E2A;&#x6D3B;&#x52A8;</span><a href="//t.jd.com/activity/followActivityList.action" target="_blank">&#x67E5;&#x770B;&#x6211;&#x7684;&#x5173;&#x6CE8;>></a>'
            },
            vender : {
                msgOk : '&#x5173;&#x6CE8;&#x6210;&#x529F;&#xFF01;',
                msgRepeat : '&#x5DF2;&#x5173;&#x6CE8;&#x8FC7;&#x8BE5;&#x5E97;&#x94FA;&#xFF01;',
                msgError : '&#x5173;&#x6CE8;&#x5E97;&#x94FA;&#x5931;&#x8D25;&#xFF01;',
                msgMax : '&#x5173;&#x6CE8;&#x7684;&#x5E97;&#x94FA;&#x8FBE;&#x5230;&#x6700;&#x5927;&#x6570;&#x91CF;&#xFF01;',
                msgOther : '<span class="attent-text">&#x60A8;&#x5DF2;&#x5173;&#x6CE8;<span class="attent-num">{attentNum}</span>&#x4E2A;&#x5E97;&#x94FA;</span><a href="//t.jd.com/vender/followVenderList.action" target="_blank">&#x67E5;&#x770B;&#x6211;&#x7684;&#x5173;&#x6CE8;>></a>'
            },
            product : {
                msgOk : '&#x5173;&#x6CE8;&#x6210;&#x529F;&#xFF01;',
                msgRepeat : '&#x5DF2;&#x5173;&#x6CE8;&#x8FC7;&#x8BE5;&#x5546;&#x54C1;&#xFF01;',
                msgError : '&#x5173;&#x6CE8;&#x5546;&#x54C1;&#x5931;&#x8D25;&#xFF01;',
                msgMax : '&#x5173;&#x6CE8;&#x7684;&#x5546;&#x54C1;&#x8FBE;&#x5230;&#x6700;&#x5927;&#x6570;&#x91CF;&#xFF01;',
                msgOther : '<span class="attent-text">&#x60A8;&#x5DF2;&#x5173;&#x6CE8;<span class="attent-num">{attentNum}</span>&#x4E2A;&#x5546;&#x54C1;</span><a href="//t.jd.com/home/follow" target="_blank">&#x67E5;&#x770B;&#x6211;&#x7684;&#x5173;&#x6CE8;>></a>'
            }
        };
        var attentText = {
            activity : '\u5173\u6ce8\u6d3b\u52a8', //关注活动
            vender : '\u5173\u6ce8\u5e97\u94fa', //关注店铺
            product : '\u5173\u6ce8\u5546\u54c1', //关注商品
            followed : '\u5df2\u5173\u6ce8', //已关注
            unFollow : '\u53d6\u6d88\u5173\u6ce8' //取消关注
        };

        //临时状态data-state ：0未关注；1关注成功；2已经关注；3关注数量达到上限；4关注失败
        function domOperate(){
            //取消关注
            if(currentDom.attr(param.dataState) == 0){
                if(dataTypeValue == 1){currentDom.html(attentText[attentType]);}//如果当前需要取消关注功能，则修改文案
                return;
            }

            jQuery('body').append(attentHtml,attentCss);
            var _this = jQuery('.follow-dialog'),
                mask = jQuery('.follow-dialog-mask'),
                con = _this.find('.attent-con'),
                msg = _this.find('.attent-msg'),
                other = _this.find('.attent-other'),
                close = _this.find('.attent-close'),
                cssDom = jQuery('#followCls');

            //关注成功
            if(currentDom.attr(param.dataState) == 1){
                if(dataTypeValue == 1){currentDom.html(attentText.followed); }//如果当前需要取消关注功能，则修改文案
                msg.html(attentInfo[attentType].msgOk);
                con.addClass('attent-ok');
            }
            //已经关注
            if(currentDom.attr(param.dataState) == 2){
                msg.html(attentInfo[attentType].msgRepeat);
                con.addClass('attent-repeat');
            }
            //关注达到最大数量
            if(currentDom.attr(param.dataState) == 3){
                msg.html(attentInfo[attentType].msgMax);
                con.addClass('attent-repeat');
            }
            //关注失败
            if(currentDom.attr(param.dataState) == 4){
                msg.html(attentInfo[attentType].msgError);
                con.addClass('attent-error');
            }

            other.html(attentInfo[attentType].msgOther);
            _this.addClass(current);
            mask.addClass(current);

            //关闭弹层
            close.click(function(){
                _this.remove();
                mask.remove();
                cssDom.remove();
            });
        }

        //获取参数ID，此段供初始化元素状态及文案所用
        !function getId(){
            for(var i = 0, len = node.length; i<len; i+=1){
                //activity（活动）、vender（店铺）、product（商品）
                switch (attentType) {
                    case 'activity':
                        para.push({id : jQuery(node[i]).attr(param.dataId),srcType:activityType});
                        break;
                    case 'vender':
                        para.push(jQuery(node[i]).attr(param.dataId));
                        break;
                    case 'product':
                        para.push(jQuery(node[i]).attr(param.dataId));
                        break;
                    default:
                        break;
                }
            }
        }();

        function init(){
            getState();//遍历节点，初始化关注状态
            event();
        }

        function event(){
            //当dataTypeValue == 1时，增加鼠标hover改变文字提示
            node.mouseenter(function(){
                var _state = jQuery(this).attr(param.dataState);
                dataTypeValue = jQuery(this).attr(param.dataType);

                if(_state == 1 || _state == 2){
                    if(dataTypeValue == 1){jQuery(this).html(attentText.unFollow);}//如果当前需要取消关注功能，则修改文案
                }
            }).mouseleave(function(){
                var _state = jQuery(this).attr(param.dataState);
                dataTypeValue = jQuery(this).attr(param.dataType);

                if(_state == 1 || _state == 2){
                    if(dataTypeValue == 1){jQuery(this).html(attentText.followed);}//如果当前需要取消关注功能，则修改文案
                }
            });

            node.click(function(){
                //获取当前点击元素上的品牌活动ID伪属性data-id
                currentDom = jQuery(this);

                //activity（活动）、vender（店铺）、product（商品）
                switch (attentType) {
                    case 'activity':
                        para = {activityId : currentDom.attr(param.dataId), sysName : param.sysName, srcType : activityType};
                        break;
                    case 'vender':
                        para = {venderId : currentDom.attr(param.dataId), sysName : param.sysName};
                        break;
                    case 'product':
                        para = {productId : currentDom.attr(param.dataId), sysName : param.sysName};
                        break;
                    default:
                        break;
                }

                dataTypeValue = currentDom.attr(param.dataType);

                if(dataTypeValue == 1){//如果当前需要取消关注功能
                    if(currentDom.attr(param.dataState) == 1 || currentDom.attr(param.dataState) == 2){
                        thick_login(abortAttent);
                    }else{
                        thick_login(attent);
                    }
                }else{
                    thick_login(attent);
                }
            });
        }

        //data : 'sysName=sale.jd.com&data=[{"id":"375590","srcType":"1"},{"id":"375498","srcType":"1"},{"id":"376757","srcType":"1"}]' 采销活动数据形式
        function getState(){
            //activity（活动）、vender（店铺）、product（商品）
            var data;
            switch (attentType) {
                case 'activity':
                    data = 'sysName=' + param.sysName + '&data=' + JSON.stringify(para);
                    break;
                case 'vender':
                    data = {venderIds : para.toString(), sysName:param.sysName};
                    break;
                case 'product':
                    data = {productIds : para.toString(), sysName : param.sysName};
                    break;
                default:
                    break;
            }
            $.ajax({
                url : _INTERFACE.batchIsFollow,
                data : data,
                dataType : 'jsonp',
                success : function(data){
                    if(data.code == 'F10000'){
                        for(var i = 0, len = node.length; i < len; i+=1){
                            var _node = jQuery(node[i]),
                                dataId = _node.attr(param.dataId);
                            dataTypeValue = _node.attr(param.dataType);

                            if(data.data[dataId]){
                                if(dataTypeValue == 1){_node.html(attentText.followed);}//如果当前需要取消关注功能，则修改文案
                                _node.attr(param.dataState,2).addClass(current);//已关注
                            }else{
                                if(dataTypeValue == 1){_node.html(attentText[attentType]);}//如果当前需要取消关注功能，则修改文案
                                _node.attr(param.dataState,0);//未关注
                            }
                        }
                    };
                }
            });
        }

        function attent(){
            $.ajax({
                url : _INTERFACE.follow,
                data : para,
                dataType : 'jsonp',
                success : function(data){
                    if(data.code == 'F10000'){
                        if(data.data){
                            currentDom.attr(param.dataState,1).addClass(current);
                        }
                    }else if(data.code == 'F0402'){
                        if(!data.data){
                            currentDom.attr(param.dataState,2);
                        }
                    }else if(data.code == 'F0410'){
                        currentDom.attr(param.dataState,3);
                    }else{
                        currentDom.attr(param.dataState,4);
                    }
					
					getAttentNum(function(){
						if(dataTypeValue == 2){
							//默默关注
						}else{
							domOperate();
						}
					});//获取关注数量
                }
            });
        }

        function getAttentNum(callBack,scope){
            $.ajax({
                url : _INTERFACE.queryForCount,
                data : {sysName : param.sysName},
                dataType : 'jsonp',
                success : function(data){
                    attentInfo[attentType].msgOther = attentInfo[attentType].msgOther.replace("{attentNum}", data.data);
					callBack();
                }
            });
        }

        function abortAttent(){
            $.ajax({
                url : _INTERFACE.unfollow,
                data : para,
                dataType : 'jsonp',
                success : function(data){
                    if(data.code == 'F10000'){
                        if(data.data){
                            currentDom.attr(param.dataState,0).removeClass(current);
                            domOperate();
                        }
                    }
                }
            });
        }

        init();
    }
    jQuery.fn.saleAttent = saleAttent;
})(window,jQuery);

/**
 * 判断传入链接类型公用方法
 * 链接类型如下:
 * 采销活动
 * //pinpaijie.jd.com/act/gmZNRvejxsPbqDyl.html
 * //sale.jd.com/act/osz8dDvICHefFn.html
 *
 * 店铺活动
 * //sale.jd.com/mall/jsvCNWL6TIZrYFcA.html
 * //pinpaijie.jd.com/mall/SQenmaC214K.html
 *
 * 店铺
 * //mall.jd.com/index-15706.html
 * //only.jd.com/
 *
 * @return {[整数]} [链接类型，0表示店铺活动，1表示采销活动，2表示店铺]
 */
function returnUrlType(url) {
    if(url.indexOf('/mall/') != -1) {
        // 店铺活动
        return 0;
    } else if(url.indexOf('/act/') != -1) {
        // 采销活动
        return 1;
    } else {
        // 店铺
        return 2;
    }
}



/*
    * 依赖 //sale.jd.com/script/module/utils.js   thick_login登录封装
    * 依赖 //misc.360buyimg.com/lib/js/2012/lib-v1.js  jdThickBox弹出框
    * 依赖//sale.jd.com/script/jshop.lib-v1.js  skuIdPriceObj.localPriceRefresh(obj);去除价格懒加载
    * 依赖//misc.360buyimg.com/lib/js/2012/base-v1.js  login
*/

/**
    * @description: 扩展模块命名空间
*/
/**
 * 验证参数有效性
 */
function validateData(obj){
     if(typeof obj!="undefined"&&obj!=""){
        return true;
     }else{
         return false;
     }
}

/**
 * @fileOverView  jshop SDK名称空间
 */
var jshop = jshop || {};

/**
 * 模块
 */
jshop.module = {
    /*
     * 给每行最后一个节点增加样式：主要应用在每一行有多个节点，并且想给最后一个节点如改变背景、边框等。
     * 参数传递：如{node:'li', defaultClass:'noBg'}。参数node为单个节点名；参数defaultClass可任意命名，只要css里面有这个名字。
     */
    removeBg:function(args){
        var param=$.extend({defaultClass:"noBg"}, args),
            elem = $(this).find(param.node),
            qty = parseInt(elem.parent().width()/elem.outerWidth(true)),
            defaultClass=param.defaultClass;

        elem.each(function(index, e){
            if(index && !(((index+1)/qty).toString().indexOf(".")>=0) ){
                $(e).addClass(defaultClass);
            }else if((index+1)/qty==1){
                $(e).addClass("noBgOne");
            }
        });
    },
    /*
     * 瀑布流：主要应用在商品列表图片交错布局，就像瀑布一样
     * 参数传递：如{node:'li', topSpac:15}。参数node为单个节点名；参数topSpac为第一行与顶部的距离
     */
    waterfallFlow:function(args){
       var _this = this,
            param = jQuery.extend({node:"li", topSpac:10}, args),
            elem = jQuery(_this).find(param.node),
            qty = parseInt(elem.parent().width()/parseInt(elem.outerWidth(true))),
            topPos,
            array = [];

       elem.each(function(index, e){
           //获取行数
            var row = parseInt(index/qty),
                //获取列数：通过每一个的位置除去每一行的数量，剩下的余数就是每一列
                col = index%qty,
                //获取每一个的左边距：离最左边的距离
                leftPos = col*jQuery(e).outerWidth(true);

            //如果是第一行
           if(row == 0){
               topPos = parseInt((col%2)*param.topSpac);
           }
           else{
               var topNode = jQuery(elem.get((row-1)*qty+col));
               topPos = topNode.outerHeight(true)+parseInt(topNode.css("top"));
           }
           jQuery(e).css({left:leftPos,top:topPos});

            //将每一个的top和自身的高度之和保存到数组里
            array.push(parseInt(jQuery(e).css("top"))+jQuery(e).outerHeight(true));
       });

        //数组排序，获取最大的高度
        function compare(value1, value2){
            if(value1<value2){
                return -1;
            }else if(value1>value2){
                return 1;
            }else{
                return 0;
            }
        }
        array.sort(compare);

        //重设父级的高度，以达到背景自适应
        jQuery(_this).css("height",array[array.length-1]);
   },
    /*
     * 给鼠标当前出发的节点增加一个样式：主要应用在鼠标移动到节点，节点伸缩与展开等。
     * 参数传递：如{node:'li', defaultClass:'jCurrent', defaultShow:0}。参数node为单个节点名；参数defaultClass可任意命名，只要css里面有这个名字。
     */
    changeStyle:function(args){
        var param = $.extend({node:'li', defaultClass:'jCurrent', defaultShow:0}, args),
            elem = $(this).find(param.node),
            defaultClass = param.defaultClass,
            defaultShow = param.defaultShow;

        elem.eq(defaultShow).addClass(defaultClass);

        elem.each(function(index,n){
            $(n).mouseenter(function(e){
                $(this).addClass(defaultClass).siblings().removeClass(defaultClass);
            });
        });
    },

    /**
     * 新EPT商品名称截断处理，自动添加省略号
     * by Luxingyuan
     */
   addEllipsis:function(args){

       if(!args) return;
       var _this = this,
               param = jQuery.extend({title:'li', count:20, text:'...'}, args),
               elem = jQuery(_this).find(param.title),
               reg = /\s|\,|\.|\!|\'|\"|\;|\:|\t|\n|\r/g;
//               reg = new RegExp("\\s|\\,|\\.|\\!|\\'|\\\"|\\;|\\:|\\t|\\n|\\r", "g");
       elem.each(function(index, ele){
           var _textNode = ele.firstChild,
                   _textValue = _textNode.nodeValue;
           if(_textNode && _textNode.nodeType == 3 && _textNode.length >= param.count){
               var _tempValue = _textValue.substring(0, param.count - param.text.length);
               var _char = _textValue.charAt(param.count - param.text.length);
               if(reg.test(_char)){
                   _textNode.nodeValue = _tempValue + param.text;
               }else{
                   var _arr = _tempValue.match(reg);
                   _tempValue = _tempValue.substring(0, _tempValue.lastIndexOf(_arr[_arr.length - 1]) + 1) + param.text;
                   _textNode.nodeValue = _tempValue;
               }
           }
       });

   },

    /*
     * 自适应布局：自适应布局宽度，根据布局的宽度判断能放下的一行数量，并将多余的宽度赋给每一个列表。支持css对象传入
     * 参数传递：如{_this:'.template-area', node:'.item', extra:{}}。
     */
    autoWidth:function(args){
        var _para = $.extend({node:'li', extra:{}}, args || {}),
            _this = this,
            elems = $(_this).find(_para.node),
            elem = elems.eq(0);

        elems.css(_para.extra);

        var outerWidth = parseInt(elem.data('outerWidth') || elem.outerWidth(true)),
            width = parseInt(elem.data('width') || elem.css('width')),
            qty = parseInt(elem.parent().parent().width()/outerWidth);

        elem.data({'outerWidth':outerWidth, 'width':width});

        var extraWidth = outerWidth - width;
        var newWidth = (elem.parent().parent().width()-extraWidth*qty-0.03)/qty;
        elems.css({width:newWidth});
    },
    /*
     * @function：自动填充宽度：通过传入不同的参数，让商品呈现不同的间距排列。
     * @description：可应用于列表类模块。
     * @param：如{autoFillNode:'li', xInner:0, yInner:0, minWidth:' ', xOuter:' ', yOuter:' '}
     * autoFillNode为需要计算宽度的节点，默认为li；xInner为节点之间的横向间距；yInner为节点之间的纵向间距。
     * minWidth为节点除内外边距、边框之后的宽度，如果没传则自动获取。如果最终算出来的宽度小于最小宽度，则不做改变。
     * xOuter为节点父级左右边距，默认为空，表示两边没有间距；如果传入值大于0，则两边增加传入的间距值；如果等于0，则表示两边完全不要间距，包括每一行第一个节点和最后一个节点的边距。
     * yOuter和xOuter相反
     * length 每一行的数量有三种方式：1是自定义传；2是根据每一行的宽度和单个的宽度计算能放下的数量；3是当一行的数量不够占一行的数量
     * @author：20140321 by bjwanchuan
     */
    autoFill : function(args){
        var param = $.extend({autoFillNode:'li', xInner:0, yInner:0, minWidth:' ', xOuter:' ', yOuter:' ', isEqual:false, length:''} , args||{}),
            _this = $(this),
            node = _this.find(param.autoFillNode),
            xInner = parseInt(param.xInner),
            yInner = parseInt(param.yInner),
            minWidth = parseInt(param.minWidth)?parseInt(param.minWidth):node.width(),
            xOuter = param.xOuter,
            yOuter = param.yOuter,
            isEqual = param.isEqual,
            _thisWidth = _this.css("display") != "none" ? _this.width() : _this.parent().width(),
            length;


        //有最外层横向两边距
        if(xOuter !== 0){
            //是否需要平均节点宽度
            if(isEqual){
                length = node.length;
            }else if(param.length > 0){
                length = param.length;
            }else{
                length = parseInt((_thisWidth - xOuter*2)/minWidth);
            }

            var width = (_thisWidth - (length+1)*xInner - xOuter*2 - length*(parseFloat(node.css('padding-left')) + parseFloat(node.css('padding-right')) + parseFloat(node.css('border-left-width')) + parseFloat(node.css('border-right-width'))))/length;

            if(width < minWidth){return;};

            init();
            _this.css('padding-left',xOuter);
        }

        //不要最外层横向两边距
        if(xOuter === 0){
            //是否需要平均节点宽度
            if(isEqual){
                length = node.length;
            }else if(param.length > 0){
                length = param.length;
            }else{
                length = parseInt(_thisWidth/minWidth);
            }

            var width = (_thisWidth - (length-1)*xInner - length*(parseFloat(node.css('padding-left')) + parseFloat(node.css('padding-right')) + parseFloat(node.css('border-left-width')) + parseFloat(node.css('border-right-width'))))/length;

            if(width < minWidth){return;};

            init();
            getRowFirst();
        }

        //默认状态，最外层横向两边距不存在
        if(xOuter ===' '){
            //是否需要平均节点宽度
            if(isEqual){
                length = node.length;
            }else if(param.length > 0){
                length = param.length;
            }else{
                length = parseInt(_thisWidth/minWidth);
            }

            var width = (_thisWidth - (length+1)*xInner - length*(parseFloat(node.css('padding-left')) + parseFloat(node.css('padding-right')) + parseFloat(node.css('border-left-width')) + parseFloat(node.css('border-right-width'))))/length;

            if(width < minWidth){return;};

            init();
        }

        //有最外层纵向两边距
        if(yOuter != 0){
            _this.css('padding-bottom',yInner+yOuter);
            _this.css('padding-top',yOuter);
        }

        //不要最外层纵向两边距
        if(yOuter === 0){
            getRow();
        }

        //默认状态，最外层纵向两边距不存在
        if(yOuter === ' '){
            _this.css('padding-bottom',yInner);
        }


        node.css('width', width);

        //初始化节点
        function init(){
            _this.css('overflow','hidden');

            if(node.css('margin-left')||node.css('margin-right')){
                node.css({'margin-left':0, 'margin-right':0});
            }

            node.css('margin-top',yInner);
            node.css('margin-left',xInner);
        }

        //获取每一行的第一个节点
        function getRowFirst(){
            node.each(function(i,e){
                if(i % length === 0){
                    $(e).css('margin-left',0);
                }
            });
        }

        //获取任意多行节点
        function getRow(){
            var number = [1];
            node.each(function(i,e){
                for(var j = 0; j < number.length; j++){
                    if(i >= length * (number[j] - 1) && i < length * number[j]){
                        $(e).css('margin-top',0);
                    }
                }
            });
        }

    },
    tabClass:function(args){
        var param = $.extend({node:'li', defaultClass:'current'}, args),
            elem = $(this).find(param.node),
            defaultClass = param.defaultClass,
            defaultShow = param.defaultShow;

        if(defaultShow){
            elem.eq(defaultShow).addClass(defaultClass);
        }

        elem.bind({
            mouseenter:function(){
                $(this).addClass(defaultClass).siblings().removeClass(defaultClass);
            },
            mouseleave:function(){
                $(this).removeClass(defaultClass);
            }
        });
    },
    /*
     * 根据父节点宽度，平均分配子节点宽度 20130603
     * 参数传递：如{equallyNode:'.jSortTab span'}。参数equallyNode为单个节点名。
     */
    equallyWidth:function(args){
        var param = $.extend({equallyNode:'.jSortTab span', equallyParentNode:null}, args),
            _this = $(this),
            nodeParent = (_this.find(param.equallyParentNode).length > 0) ? _this.find(param.equallyParentNode) : _this,
            elems = _this.find(param.equallyNode),
            elem = elems.eq(0);

        var outerWidth = parseInt(elem.data('outerWidth') || elem.outerWidth(true)),
            width = parseInt(elem.data('width') || elem.css('width')),
            qty = elems.length;

        elem.data({'outerWidth':outerWidth, 'width':width});

        var extraWidth = outerWidth - width;
        var newWidth = (nodeParent.width()-extraWidth*qty-0.03)/qty;
        elems.css({width:newWidth});
    },
    /*
     * 改变图片，点击小图看大图
    */
    changePhoto : function(args){
        var param = $.extend({changePhotoNode:'.jPic img' , smallPhoto:'.jScrollWrap li', title:'.jDesc a', defaultClass:'jCurrent', eventType:'click'} , args || {}),
            _this = $(this),
            largePhoto = _this.find(param.changePhotoNode),
            smallPhoto = _this.find(param.smallPhoto),
            title = _this.find(param.title);

        //初始化
        largePhoto.attr('src' , smallPhoto.eq(0).attr('data-src'));
        largePhoto.parent().attr('href' , smallPhoto.eq(0).attr('data-href'));
        title.attr('href' , smallPhoto.eq(0).attr('data-href'));

        smallPhoto.eq(0).addClass(param.defaultClass);

        //触发小图
        smallPhoto[param.eventType](function(){
            var _target = this;

            largePhoto.attr('src' , $(_target).attr('data-src'));
            largePhoto.parent().attr('href' , $(_target).attr('data-href'));
            title.attr('href' , $(_target).attr('data-href'));

            $(_target).addClass(param.defaultClass).siblings().removeClass(param.defaultClass);
        });
    },
    /*
     * 移动图片，点击左右箭头移动图片
    */
    movePhoto : function(args){
        var param = $.extend({movePhotoNode:'.jScrollWrap li' , arrowPrev:'.jScrollPrev', arrowNext:'.jScrollNext', defaultClass:'disabled'} , args || {}),
            _this = $(this),
            node = _this.find(param.movePhotoNode),
            prev = _this.find(param.arrowPrev),
            next = _this.find(param.arrowNext),
            visibleNode = parseInt(node.parent().parent().width()/node.width()),
            index = 0,
            length = node.length;

        //初始化结构
        if(length > visibleNode){
            prev.addClass(param.defaultClass).show();
            next.show();
            node.parent().css('width',node.width()*length);
        }

        //向右移动
        next.click(function(){
            var _this = this;

            if(length - visibleNode){
                prev.removeClass(param.defaultClass);
            }

            if(index < length - visibleNode){
                index++;
                node.parent().animate({
                    left:-node.eq(0).outerWidth(true)*index
                },function(){
                    if(index + visibleNode == length){
                        $(_this).addClass(param.defaultClass);
                    }
                });
            }
        });

        //向左移动
        prev.click(function(){
            var _this = this;
            if(index  + visibleNode <= length){
                next.removeClass(param.defaultClass);
            }

            if(index > 0){
                index--;
                node.parent().animate({
                    left:-node.eq(0).outerWidth(true)*index
                },function(){
                    if(!index){
                        $(_this).addClass(param.defaultClass);
                    }
                });
            }
        });
    },
    /*
     * 隐藏节点 鼠标移动到某个节点时，隐藏传入的其他参数节点
    */
    hideNode : function(args){
        var param = $.extend({currentNode:'.jLeftPic' , changeNode:'.jMiddlePic', defaultClass:'jCurrent', enterTime:200, leaveTime:100} , args || {}),
            _this = $(this),
            currentNode = _this.find(param.currentNode),
            changeNode = _this.find(param.changeNode);

        if(param.enterTime < 0 || param.leaveTime < 0 ){
            return;
        }

        currentNode.mouseenter(function(){
            changeNode.animate({
                opacity:0
            },param.enterTime,function(){
                changeNode.addClass(param.defaultClass);
            });
        });
        currentNode.mouseleave(function(){
            changeNode.removeClass(param.defaultClass);
            changeNode.animate({
                opacity:1
            },param.leaveTime,function(){

            });
        });
    },
    /*
     * 撑满高度：用在相对定位里面有绝对定位时，背景透明图层以父节点为基准将高度撑满
    */
    fullHeight:function(args){
        var param = $.extend({fullHeightNode:'li', fullNode:'.jShade'}, args),
            elem = $(this).find(param.fullHeightNode),
            fullNode;

        elem.bind({
            mouseenter:function(){
                fullNode =$(this).find(param.fullNode);
                fullNode.css({height:$(this).height()});

            }
        });
    },
    ridLazy : function(obj) {
        $(obj).find('img.J_imgLazyload').each(function(){
            $(this).attr('src',$(this).attr('original'));
            $(this).removeAttr('original');
            $(this).removeClass('J_imgLazyload');
        });
        setTimeout(function(){
            skuIdPriceObj.localPriceRefresh(obj);
        },0);
    },

    rid : function(){
        jshop.module.ridLazy(this);
    },
    middle : function(obj){
        var bIsIE6 = $.browser.msie&&$.browser.version == "6.0",
            sPos = bIsIE6? 'absolute' : 'fixed',
            w = $(window).width(),
            h = $(window).height();
        $(obj).css({
            left : parseInt((w - $(obj).outerWidth())/2) + 'px',
            top : parseInt((h - $(obj).outerHeight())/2) + (this.bIsIE6?$(window).scrollTop():0) + 'px',
            position : sPos
        });
        return obj;
    },
    positionLayout:function(args){
        // 定义传入的CSS调用变量
        var _this=this,
            param=$.extend({node:'.btn-coll', nodeParent:'.d-layout'}, args),
            node = $(_this).find(param.node),
            nodeParent = $(_this).parents(param.nodeParent);
        nodeParent.css({position:"relative"});
        node.appendTo(nodeParent).siblings(param.node).remove();
    },
    notity : function(arg){
        var _para = $.extend({
            notityNode : '.jshop_jiangjia'
        }, arg || {}),
            _this = this;

        NotifyPop.init = function(c,e){
            var b = this,
            f = this.serializeUrl(location.href),
            d = /from=weibo/.test(location.href) ? location.search.replace(/\?/, "") : "",
            a;
            if (/from=weibo/.test(location.href)) {
                a = f.param.type;
                this.setThickBox(a, d);
            }
            c.bind("click",
                    function() {
                        var j = this,
                        h = $(this).attr("id"),
                        g = $(this).attr("data-type") || 2;
                        b.sku = $(this).attr("data-sku");
                        b.checkLogin(function(k) {
                        if (!k.IsAuthenticated) {
                            thick_login(function(l){
                                b._userPin = l.Identity.Name;
                                b.setThickBox(g, d);
                            });
                            /*
                            jdModelCallCenter.settings.fn = function() {
                                b.checkLogin(function(l) {
                                    if (l.IsAuthenticated) {
                                        b._userPin = l.Name;
                                        b.setThickBox(g, d);
                                    }
                                });
                            };
                            jdModelCallCenter.login();
                            */
                        } else {
                            b._userPin = k.Name;
                            b.setThickBox(g, d);
                        }
             });
            return false;
            }).attr("href", "#none").removeAttr("target");
        };

        $(_this).find(_para.notityNode).each(function(index,n){
            NotifyPop.init($(n));
        });
    },
    tab:function(args){
        var param = $.extend({tabNode:'.jSortTab span', arrow:'.jSortTabArrow', defaultClass:'current', tabContent:'.jSortContent ul',isNeedWidth:true, eventType:'mouseenter'}, args),
            _this = this,
            tabNode = $(_this).find(param.tabNode),
            tabContent = $(_this).find(param.tabContent),
            arrow = $(_this).find(param.arrow), index = 0;

        var eventFlag = true;

        //初始化结构
        tabNode.eq(0).addClass(param.defaultClass);
        tabContent.eq(0).addClass(param.defaultClass).data('lazyload',true);

        var width = (tabNode.parent().parent().width()-0.03)/tabNode.length;
        if(param.isNeedWidth){
            tabNode.css({width: width});
        }
        arrow.css({width: width});

        //绑定鼠标移动事件
        tabNode.each(function(ind,n){
            $(n)[param.eventType](function(){
                index = ind;
                if(eventFlag){
                    eventFlag = false;
                    $(this).addClass(param.defaultClass).siblings().removeClass(param.defaultClass);
                    tabContent.eq(index).addClass(param.defaultClass).siblings().removeClass(param.defaultClass);
                    if(arrow.length){
                        arrow.animate({
                                left: (index) * width
                            },
                            300,
                            function() {
                                eventFlag=true;
                                if(index != ind){
                                    tabNode.eq(index).trigger(param.eventType);
                                }
                            });
                    }
                    else{
                        eventFlag = true;
                        if(index != ind){
                            tabNode.eq(index).trigger(param.eventType);
                        }
                    }
                }
                if(!tabContent.eq(index).data('lazyload')){
                    jshop.module.ridLazy(tabContent.eq(index).data('lazyload',true));
                }
            });
        });
    },
    /*
     * funcTab 功能框架模块模板切换显示，切换事件支持点击，鼠标移动等
     */
    funcTab:function(args){
        var _default = {
            tabNode:'.jSortTab span',
            defaultClass:'current',
            tabContent:'.jSortContent ul',
            eventType:'click'
        };
        var param = $.extend(_default, args),
            tabNode = $(this).find(param.tabNode),
            tabContent = $(param.tabContent);
        //装修状态不需要初始化布局和绑定事件
        if(!$(".pc_func_module_invisible").length) return;
        var eventFlag = true;
        //初始化布局内容区
        var _this_layout_ids = tabNode.eq(0).attr("funcLayoutIds").split(",");
        $.map(_this_layout_ids,function(item){
            tabContent.find("#"+item).parent().show().addClass("func-module-init").attr("funcompleted",true);
            tabContent.find("#"+item).parent().addClass(param.defaultClass).data('lazyload',true);
            //解决默认初始化由于隐藏而获取不到宽度的问题
            setTimeout(function(){
                moduleRefresh.call($("#"+item),"funcParam");
            },50);
        });
        //绑定鼠标移动事件
        tabNode.unbind(param.eventType).bind(param.eventType,function(){
            if(eventFlag){
                eventFlag = false;
                $(this).addClass(param.defaultClass).siblings().removeClass(param.defaultClass);
                var _this_layout_ids = $(this).attr("funcLayoutIds").split(",");
                $(".d-layout-area.pc_func_module_invisible").hide();
                $.map(_this_layout_ids,function(item){
                    $("#"+item).parent().show(10,function(){
                        if(!$("#"+item).parent().attr("funcompleted")){
                            moduleRefresh.call($("#"+item),"funcParam");
                            $("#"+item).parent().attr("funcompleted",true);
                        }
                        if(!$("#"+item).parent().data('lazyload')){
                            jshop.module.ridLazy($("#"+item).parent().data('lazyload',true));
                        }
                    });
                });
                eventFlag = true;
            }
        });
    },
    /*
     * @function：切换显示：通过触发一个元素，切换其他元素的显示。可选择闭环切换、前进后退及随机切换显示。
     * @description：可应用于任意模块，只要有使用场景。
     * @param：如{eventNode:'.jClick', parentNode:'.jSortContent', childNode:'ul', defaultClass:'current', eventType:'click', num:0, tabTime:500, subFunction:'circle'}
     * eventNode触发切换的节点；parent切换节点的父节点；child切换节点；defaultClass显示样式；eventType触发的事件类型；
     * num初始显示第几个；tabTime每一屏切换的时间；subFunction显示方式：闭环circle、前进倒退direction、随机random；
     * @author：20140117 by bjwanchuan
     */
    tabShow : function(args){
        var param = $.extend({eventNode:'.jClick', parentNode:'.jSortContent', childNode:'ul', defaultClass:'current', eventType:'click', num:0, tabTime:500, subFunction:'circle'},args),
            _this = $(this),
            eventNode = _this.find(param.eventNode),//触发切换的节点
            parent = _this.find(param.parentNode),//切换节点的父节点
            child = _this.find(param.childNode),//切换节点
            defaultClass = param.defaultClass,//显示样式
            eventType = param.eventType,//触发的事件类型
            num = (param.num === Number && param.num <= len) ? param.num : 0,//初始显示第几个
            tabTime = param.tabTime,//每一屏切换的时间
            subFunction = param.subFunction,//显示方式：闭环circle、前进倒退direction、随机random
            len = child.length,
            isLeft = true;

        //初始化显示
        child.eq(num).addClass(defaultClass);

        //事件触发
        eventNode[eventType](function(){
            if(param.subFunction){
                showStyle[param.subFunction].call(_this);
            }
            callBack();
        });

        var showStyle = {
            circle : function(){
                num = (num + 1)%len;
            },
            direction : function(){
                if(isLeft){
                    num++;
                    if(num == len - 1){
                        isLeft = false;
                    }
                }else{
                    num--;
                    if(num  == 0){
                        isLeft = true;
                    }
                }
            },
            random : function(){
                num = parseInt(Math.random() * len);
            }
        };

        function callBack(){
            child.eq(num).addClass(defaultClass).siblings().removeClass(defaultClass);
            child.animate({opacity:0},0,function(){});
            child.eq(num).animate({opacity:1},param.tabTime,function(){});
        }
    },
    slide:function(args){
        // 定义传入的CSS调用变量
        var _this=this,
            param=$.extend({imgArea:'.jbannerImg', imgNodeArea:'.jImgNodeArea', imgNode:'.jbannerImg li', tabArea:'.jbannerTab', tabNode:'.jbannerTab span', arrowLeft:'.jPreOut', arrowRight:'.jNextOut', arrowLeftOver:'jPreOver', arrowRightOver:'jNextOver', defaultClass:'show', slideDirection:'left', timer:'3', subFunction:'transparentEffect', eventType:'click',showArrow:1, isCircular:false, isTabAvailable:true, isHoverStop:true}, args),
            imgArea = $(_this).find(param.imgArea),
            imgNode = $(_this).find(param.imgNode),
            tabArea = $(_this).find(param.tabArea),
            tabNode = $(_this).find(param.tabNode),
            defaultClass = param.defaultClass,
            eventType = param.eventType,
            timer = !param.timer*1000?3000:param.timer*1000,
            scroll,
            ul = $(_this).find(param.imgNodeArea + '>ul'),
            imgNodeArea = $(_this).find(param.imgNodeArea),
            isFull = param.isFull;

        //全局变量
        var index = 0,direction = 1,time = null,moveRange = 0,partTime = null,animate = null,enterFlag = false;
        if(!imgNode.length) return;
        jshop.module.ridLazy($(_this));

        //是否鼠标移动到内容区域时，停止轮播
        if(param.isHoverStop){
            imgArea.bind({
                mouseenter:function(){
                    enterFlag = true;
                    _stop();
                },
                mouseleave:function(){
                    enterFlag = false;
                    time = setTimeout(imgMove, timer);
                }
            });
        }

        /**
         * 轮播图所有效果
         */
        var banner = {
            transparentEffect : function(){
                //初始化
                $(_this).css({'background-color':imgNode.eq(index).attr('background')});

                // 调用函数
                init();
                if(param.isTabAvailable){triggerThumbnail();}//如果切换切点可用
                triggerDirection();
                if(param.showArrow!=1){triggerArrow();}
                animate = transparent;
                time = setTimeout(imgMove, timer);
            },
            moveEffect : function(){
                var isTop = (param.slideDirection == 'top')?true:false;
                scroll = (isTop)?"scrollTop":"scrollLeft";

                //初始化
                $(_this).css({'background-color':imgNode.eq(index).attr('background')});
                if(isTop){
                    imgNodeArea.css({height:20000});
                    imgNode.css({width:imgNode.attr("width"),height:imgNode.attr("height")});
                    moveRange = imgNode.height();
                    imgArea[0][scroll] = index * moveRange;
                }else{
                    imgNodeArea.css({width:20000});
                    imgNode.css({width:imgNode.attr("width"),height:imgNode.attr("height"),'float':"left"});//将这个宽度写在css里，在ie6下面，获取到的父级宽度是被这个元素撑开的宽度
                    moveRange = imgNode.width();
                    imgArea[0][scroll] = index * moveRange;
                };

                // 调用函数
                init();
                if(param.isTabAvailable){triggerThumbnail();}//如果切换切点可用
                triggerDirection();
                if(param.showArrow!=1){triggerArrow();}
                animate = oneImgMove;
                time = setTimeout(imgMove, timer);
            }
        };

        /**
         * 根据传入的子方法名执行对应的子方法
         */
        if(banner[param.subFunction])
            banner[param.subFunction].call(_this);

        /**
         * 轮播图初始化
         */
        function init(){
            imgArea.css({width:imgNode.attr("width"),height:imgNode.attr("height")});
            imgNode.eq(0).addClass(defaultClass);
            tabNode.eq(0).addClass(defaultClass);
            autoMiddle();
            $(window).resize(function(){
                autoMiddle();
            });
        }

        /**
         * 轮播图自适应居中于屏幕中间
         */
        function autoMiddle(){
            var extra = imgArea.width()-$(_this).width();
            if(extra>0){
                imgArea.css({'margin-left':-extra/2});
            }else{
                imgArea.css('margin','0 auto');
            }
        }

        /**
         * 给每个tab缩略图绑定事件
         */
        function triggerThumbnail(){
            tabNode.each(function(i,elem){
                $(elem)[eventType](function(){
                    imgNode.eq(index).removeClass(defaultClass);
                    tabNode.eq(index).removeClass(defaultClass);
                    index = i;
                    imgNode.eq(index).addClass(defaultClass);
                    tabNode.eq(index).addClass(defaultClass);
                    animate();
                    return false;
                });
            });
        }

        /**
         * 点击箭头或数字时，重置时间
         */
        function _stop(){
            clearTimeout(time);
            time = null;
            //clearTimeout(partTime);
            //partTime = null;
            ul.clearQueue();
            imgNode.eq(index).clearQueue();
        }

        /**
         * 切换图片和缩略图
         */
        function imgMove(){
            //判断是否是圆形循环，只支持渐变方式
            if(param.isCircular){
                if (index < imgNode.length - 1){
                    classOper([imgNode,tabNode],defaultClass,true);
                }else{
                    index = -1;
                    classOper([imgNode,tabNode],defaultClass,true);

                }
            }else{
                if (direction == 1){
                    if (index < imgNode.length - 1){
                        classOper([imgNode,tabNode],defaultClass,true);
                    }else{
                        direction = 0;
                        classOper([imgNode,tabNode],defaultClass,false);
                    }
                }else{
                    if (index > 0){
                        classOper([imgNode,tabNode],defaultClass,false);
                    }else{
                        direction = 1;
                        classOper([imgNode,tabNode],defaultClass,true);
                    }
                }
            }
            animate();
        }

        /**
         * 鼠标移动显示左右移动箭头
         */
        function triggerArrow(){
            var arrowLeft = $(_this).find(param.arrowLeft),arrowRight = $(_this).find(param.arrowRight);
            $(_this).bind({
                mouseover:function(){
                    arrowLeft.show();
                    arrowRight.show();
                },
                mouseout:function(){
                    arrowLeft.hide();
                    arrowRight.hide();
                }
             });
        }

        /**
         * 处理左右移动箭头
         */
        function triggerDirection(){
            var arrowLeft = $(_this).find(param.arrowLeft),arrowRight = $(_this).find(param.arrowRight),
                arrowLeftOver = param.arrowLeftOver, arrowRightOver = param.arrowRightOver;

            arrowLeft.bind({
                click:function(){
                    if(index != 0){// 判断当前是不是第一张
                        classOper([imgNode,tabNode],defaultClass,false);
                        animate();
                    }else{
                        //判断是否是圆形循环，只支持渐变方式
                        if(param.isCircular){
                            classOper([imgNode,tabNode],defaultClass,false);
                            index = imgNode.length;
                            classOper([imgNode,tabNode],defaultClass,false);
                            animate();
                        }
                    }
                    return false;
                },
                mouseover:function(){$(this).addClass(arrowLeftOver);},
                mouseout:function(){$(this).removeClass(arrowLeftOver);}
            });
            arrowRight.bind({
                click:function(){
                    if(index < imgNode.length - 1){// 判断当前是不是最后一张
                        classOper([imgNode,tabNode],defaultClass,true);
                        animate();
                    }else{
                        //判断是否是圆形循环，只支持渐变方式
                        if(param.isCircular){
                            index = -1;
                            classOper([imgNode,tabNode],defaultClass,true);
                            animate();
                        }
                    }
                    return false;
                },
                mouseover:function(){$(this).addClass(arrowRightOver);},
                mouseout:function(){$(this).removeClass(arrowRightOver);}
            });
        }

        /**
         * 透明效果
         */
        function transparent(){
            imgNode.animate({
                opacity: 0
              }, 0, function() {
              });
            $(_this).css({'background-color':imgNode.eq(index).attr('background')});
            imgNode.eq(index).animate({
                opacity: 1
              }, 1000, function() {
                  _stop();
                  if(enterFlag) return;
                  time = setTimeout(imgMove, timer);
              });

        }

        /**
         * 移动效果：每一张图片分10次移动
         */
        function oneImgMove(){
            var nowMoveRange = (index * moveRange) - imgArea[0][scroll],
            partImgRange = nowMoveRange > 0 ? Math.ceil(nowMoveRange / 10) : Math.floor(nowMoveRange / 10);
            imgArea[0][scroll] += partImgRange;
            if (partImgRange == 0){
                imgNode.eq(index).addClass(defaultClass);
                tabNode.eq(index).addClass(defaultClass);
                partImgRange = null;
                _stop();
                if(!enterFlag)
                    time = setTimeout(imgMove, timer);
            }
            else{
                partTime = setTimeout(oneImgMove,30);
            }
            $(_this).css({'background-color':imgNode.eq(index).attr('background')});
        }

        /**
         * 节点css类名操作
         */
        function classOper(arr,className,flag){
            arr.each(function(ind,n){
                n.eq(index).removeClass(className);
            });
            flag?(index++):(index--);
            arr.each(function(ind,n){
                n.eq(index).addClass(className);
            });
        }
    },
    /*
     * @function：操作节点：通过不同的条件，调用不同的方法，查找对象里面的某一个或一些节点，并对这些节点做操作，默认为增加一个样式。
     * @description：可应用于任意模块，只要有使用场景。
     * @param：如{operateNode:'li', operateParentNode:null, defaultClass:'jCurrent', length:0, subFunction:null, number:[], callBack:null}
     * operateNode为需要查找的节点；operateParentNode为查找节点的父级节点；defaultClass为默认样式名；length为每一行的节点个数；subFunction为此方法里面的子方法；
     * number为数组对象，当使用getNode方法时，表示数组里面指定的节点，当使用getColumn方法时，表示指定的列节点。当使用getRow方法时，表示指定的行节点；
     * callBack为函数体，参数接收一个节点对象，可在函数体里对接收的这个对象做操作。
     * @author：20130114 by bjwanchuan
     */
    operateNode: function(args){
        var param = $.extend({operateNode:'li', operateParentNode:null, defaultClass:'jCurrent', length:0, subFunction:null, number:[], callBack:null},args||{}),
        _this = $(this),
        node = _this.find(param.operateNode),
        nodeParent = (_this.find(param.operateParentNode).length > 0) ? _this.find(param.operateParentNode) : _this.parent().parent().parent(),
        defaultClass = param.defaultClass,
        number = param.number,
        length = (param.length != 0) ? param.length : parseInt(nodeParent.outerWidth(true)/node.outerWidth(true)),
        callBack = typeof(param.callBack) === 'function' ? param.callBack : function(a){a.addClass(defaultClass);};

        if(node.length === 0) return;

        //ie9下获取nodeParent.outerWidth(true)有差异。为避免此问题，1、可传入明确知道宽度的节点；2、程序会取this的父级的父级的父级定义了宽度的层。
        //此段尚未使用，当元素隐藏后获取不到元素的偏移值
        var rowLen = 0;
        var nowTop = $(node[0]).offset().top;
        node.each(function(index, dom){
            if(index > 0){
                rowLen++;
                var _top = $(dom).offset().top;
                if(nowTop !== _top){
                    return false;
                }else{
                    nowTop = _top;
                }
            }
        });

        var operate = {
            //获取任意节点
            getNode : function(){
                return node.map(function(i,e){
                    for(var j = 0; j < number.length; j++){
                        if(i + 1 === number[j]){
                            return e;
                        }
                    }
                });
            },
            //获取所有奇数列节点
            getAllOdd : function (){
                return node.map(function(i, e){
                    if(i % 2 === 0){
                        return e;
                    }
                });
            },
            //获取所有偶数列节点
            getAllEven : function(){
                return node.map(function(i,e){
                    if(i % 2 === 1){
                        return e;
                    }
                });
            },
            //获取任意多列节点
            getColumn : function(){
                return node.map(function(i,e){
                    for(var j = 0; j < number.length; j++){
                        if(i % length === number[j] - 1){
                            return e;
                        }
                    }
                });
            },
            //获取任意多行节点
            getRow : function(){
                return node.map(function(i,e){
                    for(var j = 0; j < number.length; j++){
                        if(i >= length * (number[j] - 1) && i < length * number[j]){
                            return e;
                        }
                    }
                });
            },
            //获取每一行的奇数节点
            getRowOdd : function(){
                return node.map(function(i,e){
                    if(i % length % 2 === 0){
                        return e;
                    }
                });
            },
            //获取每一行的偶数节点
            getRowEven : function(){
                return node.map(function(i,e){
                    if(i % length % 2 === 1){
                        return e;
                    }
                });
            },
            //获取第一个节点
            getFirst : function(){
                return node.eq(0);
            },
            //获取最后一个节点
            getLast : function(){
                return node.eq(node.length - 1);
            },
            //获取每一行的第一个节点
            getRowFirst : function(){
                return node.map(function(i,e){
                    if(i % length === 0){
                        return e;
                    }
                });
            },
            //获取每一行的最后一个节点
            getRowLast : function(){
                return node.map(function(i,e){
                    if(i % length === length - 1){
                        return e;
                    }
                });
            },
            //获取每一行的第一个节点和最后一个节点
            getRowFirstAndLast : function(){
                return node.map(function(i,e){
                    if(i % length === 0 || i % length === length - 1){
                        return e;
                    }
                });
            }
        };

        if(operate[param.subFunction]){
            callBack(operate[param.subFunction]());
        }
    },
    /*
     * @function：显示节点：触发一个元素，根据设定的数量按先后顺序显示元素
     * @description：可应用于任意模块，只要有使用场景。
     * @param：如{par : '.jSaleAttention20150423-1', node : 'li', btn : '.jBtn', pageNum : 10, className : 'current'}
     * par为被显示元素的父级元素；node被显示元素；btn触发元素；pageNum每一次显示数量；className被显示元素增加的class名
     * @author：20150427 by bjwanchuan
     */
   showNode : function(args){
    var _this = this,
        param = jQuery.extend({
        par : '.jSaleAttention20150423-1',
        node : 'li',
        btn : '.jBtn',
        pageNum : 10,
        className : 'current'
     }, args || {}),
        par = jQuery(param.par),
        node = jQuery(_this).find(param.node),
        btn = jQuery(_this).find(param.btn),
        index = 0,
        pageTotal = Math.ceil(node.length/param.pageNum);

    function showData(){
        node.removeClass(param.className);
        for(var i = index*param.pageNum; i <= index*param.pageNum +param.pageNum - 1; i+=1){
            node.eq(i).addClass(param.className);
        }
    }
    showData();

    btn.click(function(){
        if((index+1) == pageTotal) {
            index = 0;
        }else{
            index +=1;
        }
        showData();
    });
    },
    countdown : (function(){
        var timer = null,
            countList = [],
            sysTime = 0;
        return function(arg){
            var that = this,
                args = $.extend({
                    hasDay : true,
                    dayCnt : '.days',
                    hourCnt : 'hours',
                    minuteCnt : '.minutes',
                    secondCnt : '.seconds'
                },arg || {}),
                cutTime = [];

            function init(){
                if(!args.countdownInfo) return;

                getCutTime();
                $(that).data('cutTime',cutTime).data('arg',args);
                setTimeout(function(){
                    countList = $('[module-function*="countdown"]').toArray();
                },0);
                if(!timer){
                    getServerTime(function(data){
                        sysTime = new Date() - data;
                        count();
                    });
                }
            }

            function timeStrHandler(str){
                var rowTemp = str.split(' '),
                    inplicit = rowTemp[0].split('-'),
                    explicit = rowTemp[1].split(':');
                return new Date(Number(inplicit[0]),(Number(inplicit[1]) + 11)%12,Number(inplicit[2]),Number(explicit[0]),Number(explicit[1]),Number(explicit[2]));
            }

            function getCutTime(){
                var temp = args.countdownInfo;
                if(temp.constructor == String){
                    cutTime.push(timeStrHandler(temp));
                }
                else{
                    $.each(temp,function(index,data){
                        cutTime.push(timeStrHandler(data));
                    });
                }
            }

            function count(){
                timer = setInterval(function(){
                    for(var i = 0, len = countList.length; i < len; i++){
                        var item = $(countList[i]),
                            cT = item.data('cutTime'),
                            options = item.data('arg'),
                            leftTime = parseInt((cT[0] - new Date() + sysTime)/1000);
                        if(leftTime < 0){
                            cT.shift();
                            if(cT.length === 0){
                                countList.splice(i,1);
                                len -- ;
                                i--;
                            }
                            else{
                                item.data('cutTime',cT);
                            }
                            item.closest('[module-name]').trigger('countdownchange');
                        }
                        else{
                            var day = Math.floor(leftTime/(24*3600)),
                                hour = Math.floor(leftTime/3600) - (options.hasDay?day*24 : 0),
                                minute = Math.floor(leftTime%3600/60),
                                second = leftTime%60;

                            if(options.hasDay){
                                item.find(options.dayCnt).html(day > 9?day : '0' + day);
                            }

                            item.find(options.hourCnt).html(hour > 9?hour : '0' + hour);
                            item.find(options.minuteCnt).html(minute > 9?minute : '0' + minute);
                            item.find(options.secondCnt).html(second > 9?second : '0' + second);
                        }
                    }
                },1000);
            }

            init();
        };
    })(),

    loop : function(arg){
        var that = this,
        root = $(that),
        options = $.extend({
            auto : false,
            next : '.next',
            prev : '.prev',
            container : '.con',
            item : '.item'
        },arg),
        container = root.find(options.container),
        itemWidth = 0,
        total = 0,
        animating = false,
        index = 0,step = 1,
        itemContainer = null,
        duration = options.duration || 1000;

        function css(){
            container.css({
                overflow : 'hidden',
                position : 'relative'
            });
            root.find(options.item).css('float','left');
        }

        function dom(){
            var html = container.html(),
                height = options.height || container.height();
            root.find(options.item).remove();
            container.height(height);
            itemContainer = $('<div></div>').prependTo(container).css({
                width : (total + 2*step)*itemWidth,
                height : height,
                position : 'absolute',
                left : 0,
                top :0
            }).html(html);
            if(options.conCls){
                itemContainer.addClass(options.conCls);
            }
            var node = root.find(options.item);
            for(var i = total - 1, little = total - step; i >= little; i--){
                node.eq(i).clone(true).prependTo(itemContainer);
            }
            for(var i = 0;i < step; i++){
                node.eq(i).clone(true).appendTo(itemContainer);
            }
            itemContainer.css('left',-step*itemWidth);
        }

        function event(){
            root.find(options.next).click(function(){
                if(animating) return;
                animating = true;
                index += step;
                itemContainer.animate({
                    left : -index*itemWidth
                },duration,function(){
                    if(index >= total + step){
                        index = index - total;
                        itemContainer.css('left',-(index)*itemWidth);
                    }
                    animating = false;
                });
            });

            root.find(options.prev).click(function(){
                if(animating) return;
                animating = true;
                index -= step;
                itemContainer.animate({
                    left : -index*itemWidth
                },duration,function(){
                    if(index < step){
                        index = index + total;
                        itemContainer.css('left',-index*itemWidth);
                    }
                    animating = false;
                });
            });

            if(options.eventType){
                root.find(options.item).each(function(index,n){
                    $(n)[options.eventType](function(){
                        options.handle(n,index,step);
                    });
                });
            }

        }

        function init(){
            css();
            if(!root.find(options.item).length) return;
            step = Math.ceil(container.width()/root.find(options.item).outerWidth(true));
            itemWidth = root.find(options.item).outerWidth(true);
            total = root.find(options.item).length;
            index = step;
            if(root.find(options.item).length < step) return;
            dom();
            event();
        }

        init();
    },
    /*
     * @function：移入动画
     * @description：对节点的移入及移出执行不同的CSS属性动画
     * css value: backgroundPosition, borderWidth, borderBottomWidth, borderLeftWidth, borderRightWidth, borderTopWidth, borderSpacing, margin, marginBottom, marginLeft, marginRight, marginTop, outlineWidth, padding, paddingBottom, paddingLeft, paddingRight, paddingTop, height, width, maxHeight, maxWidth, minHeight, maxWidth, font, fontSize, bottom, left, right, top, letterSpacing, wordSpacing, lineHeight, textIndent, opacity
     * 应用场景：所有
     * @param：hoverNode执行css动画的节点；cssValueOne和cssValueTwo数组对象；timerOne和timerTwo为时间值
     * @author：cdwanchuan@jd.com 2014-07-14
    */
    hoverAnimate : function(args){
        var param = $.extend({
                node : 'li .jItem',
                cssValueOne : [
                    {width: 235, height: 365, marginTop: -10, opacity:1},
                    {width: 235, height: 355, marginTop: -5, opacity:0.9},
                    {width: 235, height: 365, marginTop: -10, opacity:1}
                ],
                cssValueTwo : [
                    {width: 235, height: 345, marginTop: 0, opacity:1}
                ],
                timerOne : 100,
                timerTwo : 100
            } , args||{}),
            _this = $(this),
            dom_node = _this.find(param.node),
            a_css_value_enter = param.cssValueOne,
            a_css_value_leave = param.cssValueTwo;

        dom_node.bind({
            mouseenter: function(){
                var count = a_css_value_enter.length,
                    index = 0,
                    target = $(this);

                function animate(){
                    var caller = arguments.callee;
                    target.animate(a_css_value_enter[index] , param.timerOne, function(){
                        index++;
                        if(index == count) return;
                        caller();
                    });
                }
                animate();
            },
            mouseleave: function(){
                var count = a_css_value_leave.length,
                    index = 0,
                    target = $(this);

                target.stop(true);

                function animate(){
                    var caller = arguments.callee;
                    target.animate(a_css_value_leave[index], param.timerTwo, function(){
                        index++;
                        if(index == count) return;
                        caller();
                    });
                }
                animate();
            }
        });
    },
    /*
     * @function：获取促销标签
     * @description：根据获取的促销标签编号显示促销标签
     * 应用场景：带有SKUID商品的模块
     * @param：node方法应用节点；tagNode标签节点；tagValue标签键值；dataNum每次最多能获取的商品数量；url接口；urlNum可用接口长度
     * @author：cdwanchuan@jd.com 2014-07-15
    */
    getProTag : function(arg){
        var param = $.extend({
                node : 'li',
                tagNode : '.jSlogan',
                tagValue : {1:'直降', 3:'返券', 4:'赠京豆', 5:'赠品', 11:'会员特价', 22:'京豆优惠购'} ,//标签键值
                dataNum : 40,//每次最多能获取的商品数量
                url : INTERFACE.promoTag + '?callback=getPromotionTag&skuids=J_981821,J_1057746',//接口
                urlNum : 26//可用接口长度
            },arg),
            that = $(this),
            dom_node = that.find(param.node);

        if(!dom_node.length) return;

        function getTag(){
            var a_skuid = [];
            dom_node.each(function(index,n){
                a_skuid.push('J_' + $(n).attr('skuid'));
            });

            var len = Math.ceil(a_skuid.length/param.dataNum);

            for(var i=0; i<len; i++){
                var a_single_skuid =  a_skuid.slice(i*param.dataNum , Math.min(a_skuid.length , (i+1)*param.dataNum));

                $.ajax({
                    url : param.url.substr(0,param.urlNum),
                    data : {
                        skuids : a_single_skuid.join(',')
                    },
                    dataType : 'jsonp',
                    success : function(data){
                        $.each(data,function(index,n){
                            var dom = '';
                            for(var i = 0; i<n.pf.length; i++){
                                if(param.tagValue[n.pf[i]]){
                                    dom += '<span>' + param.tagValue[n.pf[i]] + '</span>';
                                }
                            }
                            that.find(param.node + '[skuid=' + n.pid + ']').find(param.tagNode).html(dom);
                        });
                    }
                });
            }
        }
        getTag();
    },
    /*
     * @function： 移动节点
     * @description：点击左右箭头移动节点，可移动单个节点，也可移动一屏节点，可左右移动，也可左右循环移动
     * @param：moveNode需要移动的节点；arrowPrev左箭头；arrowNext右箭头；disabled箭头不可用样式；showNum一屏显示数量，可传入正确的一屏数量，没传则程序计算；
                cssValue改变的css属性名；isLoop是否循环，默认为真；isScreen是否是移动一屏，默认为真；timer每一次移动的时间，默认为1，值取0-4之间。
     * @note：如果是移动一屏，则需要的节点总数量必须为每一屏可显示的整数倍；如果是循环切换，disabled参数可不用。
     * @author： cdwanchuan@jd.com 2014-03
    */
    moveNode : function(args){
        var param = $.extend({moveNode:'.scroll-area li' , arrowPrev:'.arrow-left', arrowNext:'.arrow-right', disabled:'disabled', showNum:'', cssValue:'margin-left', isLoop:true, isScreen:true, timer:1} , args || {}),
            _this = $(this),
            node = _this.find(param.moveNode),
            prev = _this.find(param.arrowPrev),
            next = _this.find(param.arrowNext),
            //当前父级宽度可以放下的节点个数
            showNum = (param.showNum> 0)? parseInt(param.showNum) : Math.ceil(node.parent().parent().width()/node.outerWidth(true)),
            index = 0,
            length = param.isScreen ? Math.ceil(node.length/showNum) : node.length,
            eventFlag = true,
            moveWidth = param.isScreen ? showNum*node.eq(0).outerWidth(true) : node.eq(0).outerWidth(true),
            visibleNum = param.isScreen ? 1 : showNum,
            timer = !(param.timer > -1 && param.timer < 5) ? 1000 : param.timer*1000;

        //初始化结构
        if(length > visibleNum){
            prev.show().addClass(param.disabled);
            next.show();
            node.parent().css('width',moveWidth*length*10);//初始化移动节点父级元素宽度，解决父级元素被css定义宽度导致放不下的问题

            if(param.isLoop){initLoop();}//如果是循环，则初始化循环所需结构
        }

        //循环初始化
        function initLoop(){
            //复制前面3个节点及后面3个节点
            for(var i=0; i<showNum; i++){
                node.eq(i).clone().appendTo(node.parent());
                node.eq(node.length-1-i).clone().prependTo(node.parent());
            }
            //初始化第一个节点显示位置
            node.parent().css(param.cssValue,-moveWidth*visibleNum + parseInt(node.parent().css(param.cssValue)));
        }

        //移动的css属性可传margin-left或left
        var cssJson = {};
        node.parent().data('cssInitValue', parseInt(node.parent().css(param.cssValue)));

        //向右移动
        next.click(function(){
            //如果不是循环
            if(!param.isLoop){
                if(index == 0) eventFlag = true;
            }

            if(eventFlag){
                eventFlag = false;
                index++;
                cssJson[param.cssValue] = -moveWidth*index + node.parent().data('cssInitValue');

                node.parent().animate(cssJson, timer, function(){
                    eventFlag = true;
                    //如果不是循环
                    if(!param.isLoop){
                        if(index > 0){
                            prev.removeClass(param.disabled);
                        }
                        if(index+visibleNum == length){
                            next.addClass(param.disabled);
                            eventFlag = false;
                        }
                    }else{
                        if(index == length){
                            index = 0;
                            node.parent().css(param.cssValue,node.parent().data('cssInitValue'));
                        }
                    }
                });
            }
        });

        //向左移动
        prev.click(function(){
            //如果不是循环
            if(!param.isLoop){
                eventFlag = (index > 0) ? true :false;
            }

            if(eventFlag){
                eventFlag = false;
                index--;
                cssJson[param.cssValue] = -moveWidth*index + node.parent().data('cssInitValue');

                node.parent().animate(cssJson, timer, function(){
                    eventFlag = true;
                    //如果不是循环
                    if(!param.isLoop){
                        if(index < length - 1){
                            next.removeClass(param.disabled);
                        }
                        if(index == 0){
                            prev.addClass(param.disabled);
                            eventFlag = false;
                        }
                    }else{
                        if(index < 0){
                            index = length-1;
                            node.parent().css(param.cssValue,node.parent().data('cssInitValue')+(-moveWidth*index));
                        }
                    }
                });
            }
        });
    },
    /*
     * @function：飞入购物车
     * @description：点击购物车，获取商品图片飞入购物车特效
     * @author： 2014-09
    */
    addToCart : function(args){
        var param = $.extend({
            node : 'li',
            img : '.jPic img',//飞入节点
            cart : '.jBtnArea a',//点击节点
            property : 'data-sku',//获取节点li上的skuid
            jdCart : '#settleup-2013',//购物车
            cartNum : '#shopping-amount',//购物车数量
            timer : 500
        }, args || {}),
            that = $(this),
            node = that.find(param.node),
            jdCart = $(param.jdCart),
            cartNum = jdCart.find(param.cartNum);

        node.each(function(i, e){
            var img = $(e).find(param.img),
                cart = $(e).find(param.cart);

            cart.click(function(){
                smarket.add(cart, $(e).attr(param.property), img, jdCart, cartNum, param.timer);
            });
        });

        var smarket = {
            ele : null,
            sku : null,
            ptype : null,
            pcount : null,
            add : function(a,b,img, jdCart, cartNum, timer, c,d){
                0 != b &&(this.ele = a, this.sku = b, this.ptype = d || 1, this.pcount = c || 1, this.img = img, this.jdCart = jdCart, this.cartNum = cartNum, this.timer = timer, this.versonAnimate());
            },

            versonAnimate : function(){
                var a = this;
                clearTimeout(a.timer);
                a.timer = null;
                this.addToCart();
                var b = a.img,
                    c = b.height(),
                    d = b.width(),
                    e = b.offset().left,
                    f = b.offset().top,
                    g = $(document).scrollTop(),
                    h = a.jdCart.offset().left + 50,
                    i = a.jdCart.offset().top,
                    j = $('<div class="flyGoods jGoodsRecommend20140909" style="position:absolute;z-index: 10;"></div>'),
                    l = 25;

            var t = $(a.ele);
                j.html(b.clone()).css({
                    left: e + d / 2 - l + Math.round(40 * Math.random() + 0 - 20),
                    top: f + c/2 - 1 + Math.round(40 * Math.random() + 0 - 20)
                });

                j.appendTo('body');
                j.animate({
                    top : t.offset().top,
                    left : t.offset().left + t.width() - 50
                    },a.timer,'easeOutCirc',function(){
                        j.animate({
                            left : h,
                            top : i,
                            opacity : 0.1
                        },a.timer,'easeInOutQuint',function(){
                            a.getCartNum();
                            j.remove();
                        });
                    });
            },

            addToCart : function(){
                var a = INTERFACE.reBuyForOrderCenter + "?wids={PID}&nums={PCOUNT}";
                a = a.replace("{PID}", this.sku).replace("{PCOUNT}", this.pcount).replace("{PTYPE}", this.ptype),
                jQuery.ajax({
                    url: a,
                    dataType: "jsonp"
                });
            },
            getCartNum : function(){
                var that = this;
                jQuery.ajax({
                    url : INTERFACE.miniCartServiceNew,
                    data : {
                        method : 'GetCart'
                    },
                    dataType : 'jsonp',
                    success : function(data){
                        try{
                            that.cartNum.html(data.Cart.Num);
                        }
                        catch(e){
                        }
                    }
                });
            }
        }
    },

    /**
     * 获取商品评论相关信息
     * 评价星级规则：五星，好评度≥95%，四星，好评度≥90%，三星，好评度≥85%，二星，好评度≥80%，一星，好评度≥75%
     * 备注：skuNode节点需要位于starNode、commentNode节点层级之上
     * @param args.item         存放skuid商品单元节点选择器
     * @param args.j-star       星级评价节点选择器
     * @param args.j-rate       好评率节点选择器
     * @param args.j-count      评论数节点选择器
     * @param args.j-comment    评论内容节点选择器
     * @param args.skuid        存放skuid的属性名称
     */
    estimation: function(args){
        var _param = $.extend({skuNode: 'li', starNode: '.j-star', rateNote: '.j-rate', countNode: '.j-count', commentNode: '.j-comment', skuName: 'skuid'}, args),
            _this = $(this),
            _jItemNodes = _this.find(_param.skuNode),
            _skuArr = [];
        if(_jItemNodes.length === 0) return;
        _jItemNodes.each(function(index, dom){
            _skuArr.push(dom.getAttribute(_param.skuName));
        });
        for(var i = 0; i < _skuArr.length; i+=10){
            $.ajax({
                url: INTERFACE.actJshop.recommend,
                type: "GET",
                dataType: "jsonp",
                data: {"type": 0, "skuIds": _skuArr.slice(i, i+10).join(",")},
                success: function(arr){
                    if(arr && arr.length > 0){
                        for(var i = 0; i < arr.length; i++){
                            var _jItem = _this.find(_param.skuNode + "[" + _param.skuName + "='" + arr[i].skuId + "']"),
                                _class = "";
                            _jItem.find(_param.rateNote).text(arr[i].rate * 10000 / 100);
                            _jItem.find(_param.countNode).text(arr[i].count);
                            _jItem.find(_param.commentNode).text(arr[i].comment).attr("title", arr[i].comment);
                            if(arr[i].rate >= 0.95){
                                _class = "star5";
                            }else if(arr[i].rate >= 0.9 && arr[i].rate < 0.95){
                                _class = "star4";
                            }else if(arr[i].rate >= 0.85 && arr[i].rate < 0.9){
                                _class = "star3";
                            }else if(arr[i].rate >= 0.8 && arr[i].rate < 0.85){
                                _class = "star2";
                            }else if(arr[i].rate >= 0.75 && arr[i].rate < 0.8){
                                _class = "star1";
                            }else{
                                _class = "star0";
                            }
                            _jItem.find(_param.starNode).addClass(_class);
                        }
                    }
                }
            });
        }

    },

    goodsFollow : function(arg){
        var that = this,
            options = $.extend({
                node : '.J-follow',
                showNum : '.J-follow-num'
            },arg);
        $(that).find(options.node).JFollow(options);
    },

    goodsShare : function(arg){
        var that = this,
            options = $.extend({
                node : '.J-share',
                eventType : 'mouseover',
                offset :{
                    top : 0,
                    left : 0
                }
            },arg);
        $(that).find(options.node).JShare({
            eventType : options.eventType,
            offset : options.offset
        });
    },
    /*
     * @function：向左移动
     * @description：可应用于图片类模块。
     * @param：如{}
     * @author：20141021 cdwanchuan@jd.com
     */
    marqueeLeft : function(args){
        var param = $.extend({
                node : '.scroll-area',
                tr : 'tr',
                td : 'td',
                speed : 20
            },args || {}),
            that = $(this),
            par = that.find(param.node)[0],
            tr = $(par).find("tr")[0],
            chi =$(par).find("td")[0];

        if(chi.offsetWidth>=par.offsetWidth){
            copyChild();
            var mar = setInterval(marquee, param.speed);
            par.onmouseover = function(){clearInterval(mar)};
            par.onmouseout = function(){mar = setInterval(marquee,param.speed)};
        }
        function copyChild(){
            var copy=document.createElement("td");
            copy.innerHTML=chi.innerHTML;
            tr.appendChild(copy);
        }

        function marquee(){
            if(chi.offsetWidth-par.scrollLeft<=0){
                par.scrollLeft-=chi.offsetWidth;
            }else{
                par.scrollLeft++;
            }
        }
    },
    seamlessScroll: function(args) {
        var args = jQuery.extend({
            box: jQuery('.marquee'),
            step: 5,
            el: 'ul',
            itemClass: '.item',
            inteval: 30
        }, args || {});
        var scr = new SeamlessScroll(args);
        scr.init();
    },
    /*
     * @function：关注品牌
     * @description：支持多个品牌关注
     * @param：
     * @author：20150526 cdwanchuan@jd.com
     *一、业务
        0、关注店铺和关注品牌街活动，传的都是“品牌街”那边的品牌活动ID，当前活动的“品牌活动ID”可以在隐藏域#tb_id里面获取
        1、点击元素：系统用j-attention（用此class名做唯一区分），用户自定义用e-attention
        2、品牌活动ID：data-id（节点伪属性，将品牌活动ID保存在此）,品牌街活动是“品牌街活动ID”，商家是shopId
        3、区分关注功能类型：data-type（节点伪属性，用户手动传入），0表示不需要改变文案及取消功能，1表示需要改变文案和要取消功能
        4、currentDom：当前点击的元素
        5、临时状态data-state ：0未关注；1关注成功；2已经关注；3关注数量达到上限；4关注失败
        6、逻辑业务：
            1）页面打开时，获取页面上所有带有点击class节点上的data-id，整体初始化；
            2）点击某一个元素时，将此元素设置为当前元素，获取元素上的data-id，和data-state发送不同请求（关注或取消关注）
            3）当元素是关注状态1和已经关注状态2时，hover上去都显示取消关注
            4）根据不同的请求状态，修改按钮文案

     * 二、系统使用（引入attent_bp.js）：
        1、点击元素：j-attention（用此class名做唯一区分）
        2、品牌活动ID：data-id（节点伪属性，将品牌活动ID保存在此）,品牌街活动是“品牌街活动ID”
        3、区分关注功能类型：data-type（节点伪属性，用户手动传入），0表示不需要改变文案及取消功能，1表示需要改变文案和要取消功能

    * 三、公共方法（Module.js里面增加brandAttent方法）
        1、点击元素：e-attention（用此class名做唯一区分）
        2、品牌活动ID：data-id（节点伪属性，将品牌活动ID保存在此）,品牌街活动是“品牌街活动ID”
        3、区分关注功能类型：data-type（节点伪属性，用户手动传入），0表示不需要改变文案及取消功能，1表示需要改变文案和要取消功能
        4、点击元素，受限于模块module-name，只有在模块下才能使用
        5、使用方法：<div class="j-module" module-function="brandAttent" module-param="{}">自定义代码</div>
    */
    brandAttent : function(args){
        var param = jQuery.extend({
            node : '.e-attention', //关注点击元素
            pageIdValue : '#tb_id',
            dataId : 'data-id',//（节点伪属性，将品牌活动ID保存在此）,品牌街活动是“品牌街活动ID”
            dataState : 'data-state',
            dataType : 'data-type'//关注类型，如果是1，则只需要关注和已经关注2个状态
        }, args || {}),
            _this = jQuery(this),
            node = _this.find(param.node),
            dataTye,//全局变量，获取点击元素上的类型  0只要关注和已经关注，非0则默认有取消功能，且修改按钮文案
            currentDom,//全局变量，获取当前点击的元素
            para = []; //传入参数

        if(!node.length){return;}

        var attentHtml = '<div class="follow-dialog-mask"></div>'
        +'<div class="follow-dialog">'
        +   '<div class="attent-mt">'
        +       '<span class="attent-close" title="关闭">关闭</span>'
        +       '<span class="attent-title">提示</span>'
        +   '</div>'
        +   '<div class="attent-mc">'
        +       '<div class="attent-con">'
        +           '<span class="attent-msg"></span>'
        +           '<span class="attent-other"></span>'
        +       '</div>'
        +   '</div>'
        +'</div>';

        var attentCss = '<style id="followCls">'
        +'.follow-dialog-mask{position:fixed; _position:absolute; left:0; top:0; right:0; bottom:0; background:#000; opacity:0.3; filter:alpha(opacity=30); z-index:100; display:none;}'
        +'.follow-dialog-mask.current{display:block;}'
        +'.follow-dialog{width:310px; height:185px; /*border:solid 5px rgba(8,1,3,0.3);*/ border:solid 5px #ccc; background:#fff; position:fixed; _position:absolute; left:50%; top:50%; margin:-92px 0 0 -155px; z-index:101; display:none;}'
        +'.follow-dialog.current{display:block;}'
        +'.follow-dialog .attent-mt{height:32px; line-height:32px; background:#f5f5f5; font-size:16px; color:#222; text-indent:10px; overflow:hidden;}'
        +'.follow-dialog .attent-close{float:right; width:32px; height:32px; text-indent:-9999px; background:url(//img10.360buyimg.com/cms/jfs/t1420/84/156758085/1080/d48a39fe/555e9e79N85386290.png) center center no-repeat; cursor:pointer;}'
        +'.follow-dialog .attent-ok, .follow-dialog .attent-repeat, .follow-dialog .attent-error, .follow-dialog .attent-max{margin:48px 0 0 55px; height:40px; padding-left:48px;}'
        +'.follow-dialog .attent-ok{background:url(//img12.360buyimg.com/cms/jfs/t1435/352/153421548/1347/d377c92d/555e9e71Nb767e906.png) left center no-repeat;}'
        +'.follow-dialog .attent-repeat, .follow-dialog .attent-error, .follow-dialog .attent-max{background:url(//img14.360buyimg.com/cms/jfs/t1516/358/164942511/1418/e0c25f0c/555e9e75Nfca9da16.png) left center no-repeat;}'
        +'.follow-dialog .attent-ok .attent-msg{font-size:14px; color:#009900; font-weight:bold;}'
        +'.follow-dialog .attent-repeat .attent-msg, .follow-dialog .attent-error .attent-msg, .follow-dialog .attent-max .attent-msg{font-size:14px; color:#ff771e; font-weight:bold;}'
        +'.follow-dialog .attent-other{color:#6f6363; display:block; margin-top:3px;}'
        +'.follow-dialog .attent-other a{color:#004499;}'
        +'.follow-dialog.attent-mall .attent-other a{margin:0 5px;}'
        +'</style>';

        var attentInfo = {
            brand : {
                msgOk : '&#x5173;&#x6CE8;&#x54C1;&#x724C;&#x6210;&#x529F;',
                msgRepeat : '&#x5DF2;&#x7ECF;&#x5173;&#x6CE8;',
                msgError : '&#x5173;&#x6CE8;&#x54C1;&#x724C;&#x5931;&#x8D25;',
                msgMax : '&#x5173;&#x6CE8;&#x7684;&#x54C1;&#x724C;&#x8FBE;&#x5230;&#x6700;&#x5927;&#x6570;&#x91CF;',
                msgOther : '<a href="//t.jd.com/follow/brand/list.action" target="_blank">&#x67E5;&#x770B;&#x6211;&#x7684;&#x5173;&#x6CE8;>></a>'
            },
            mall : {
                msgOk : '&#x5173;&#x6CE8;&#x6210;&#x529F;',
                msgRepeat : '&#x5DF2;&#x7ECF;&#x5173;&#x6CE8;',
                msgError : '&#x5173;&#x6CE8;&#x5931;&#x8D25;',
                msgOther : '&#x67E5;&#x770B;&#x6211;&#x5173;&#x6CE8;&#x7684;<a href="//t.jd.com/vender/followVenderList.action" target="_blank">&#x5E97;&#x94FA;</a>&#x548C;<a href="//t.jd.com/follow/brand/list.action" target="_blank">&#x54C1;&#x724C;</a>'
            }
        };

        //临时状态data-state ：0未关注；1关注成功；2已经关注；3关注数量达到上限；4关注失败
        function domOperate(){
            //取消关注
            if(currentDom.attr(param.dataState) == 0){
                if(dataType == 1){currentDom.html('\u5173\u6ce8\u54c1\u724c');}//如果当前需要取消关注功能，就需要修改文案
                return;
            }

            jQuery('body').append(attentHtml,attentCss);
            var _this = jQuery('.follow-dialog'),
                mask = jQuery('.follow-dialog-mask'),
                con = _this.find('.attent-con'),
                msg = _this.find('.attent-msg'),
                other = _this.find('.attent-other'),
                close = _this.find('.attent-close'),
				cssDom = jQuery('#followCls'),
                current = 'current';

            //关注成功
            if(currentDom.attr(param.dataState) == 1){
                if(dataType == 1){currentDom.html('\u5df2\u5173\u6ce8');}//如果当前需要取消关注功能，就需要修改文案
                msg.html(attentInfo.brand.msgOk);
                other.html(attentInfo.brand.msgOther);
                con.addClass('attent-ok');
                _this.addClass(current);
                mask.addClass(current);
            }
            //已经关注
            if(currentDom.attr(param.dataState) == 2){
                msg.html(attentInfo.brand.msgRepeat);
                other.html(attentInfo.brand.msgOther);
                con.addClass('attent-repeat');
                _this.addClass(current);
                mask.addClass(current);
            }
            //关注达到最大数量
            if(currentDom.attr(param.dataState) == 3){
                msg.html(attentInfo.brand.msgMax);
                other.html(attentInfo.brand.msgOther);
                con.addClass('attent-repeat');
                _this.addClass(current);
                mask.addClass(current);
            }
            //关注失败
            if(currentDom.attr(param.dataState) == 4){
                msg.html(attentInfo.brand.msgError);
                other.html(attentInfo.brand.msgOther);
                con.addClass('attent-error');
                _this.addClass(current);
                mask.addClass(current);
            }
            close.click(function(){
                _this.remove();
                mask.remove();
				cssDom.remove();
            });
        }

        //获取参数ID，此段供初始化元素状态及文案所用
        !function getActivityId(){
            for(var i = 0, len = node.length; i<len; i+=1){
                para.push({activityId : jQuery(node[i]).attr(param.dataId)});
            }
        }();

        //获取预览页面活动ID
        function getAppId(){
             var args=new Object(),
                qry=location.search.substring(1),
                pairs=qry.split("&");
            for(var i=0;i<pairs.length;i++)
             {
                var pos=pairs[i].indexOf('=');
                    if(pos==-1)   continue;
                    var argname=pairs[i].substring(0,pos),
                        val=pairs[i].substring(pos+1);
                    args[argname]=unescape(val);
             }
            return args['veBean.appId'];
        }

        function init(){
            getState();
            event();
        }

        function event(){
            node.mouseenter(function(){
                var _state = jQuery(this).attr(param.dataState),
                    dataType = jQuery(this).attr(param.dataType);

                if(_state == 1 || _state == 2){
                    if(dataType!=0){jQuery(this).html('\u53d6\u6d88\u5173\u6ce8');}//如果当前需要取消关注功能，就需要修改文案
                }
            }).mouseleave(function(){
                var _state = jQuery(this).attr(param.dataState),
                    dataType = jQuery(this).attr(param.dataType);

                if(_state == 1 || _state == 2){
                    if(dataType!=0){jQuery(this).html('\u5df2\u5173\u6ce8');}//如果当前需要取消关注功能，就需要修改文案
                }
            });

            node.click(function(){
                //获取当前点击元素上的品牌活动ID伪属性data-id
                currentDom = jQuery(this);
                para = [{activityId:currentDom.attr(param.dataId)}],
                dataType = currentDom.attr(param.dataType);

                if(dataType!=0){//如果当前需要取消关注功能
                    if(currentDom.attr(param.dataState) == 1 || currentDom.attr(param.dataState) == 2){
                        thick_login(abortAttent);
                    }else{
                        thick_login(attent);
                    }
                }else{
                    thick_login(attent);
                }
            });
        }

        function getState(){
            $.ajax({
                url : INTERFACE.brandFollow.batchIsFollow,
				data : {brandId : JSON.stringify(para), sysName : 'sale.jd.com'},
                dataType : 'jsonp',
                success : function(data){
                    if(data.code == 'F10000'){
                        for(var i = 0, len = node.length; i < len; i+=1){
                            var _node = jQuery(node[i]),
                                dataId = _node.attr(param.dataId),
                                dataType = _node.attr(param.dataType);

                            if(data.data[dataId]){
                                if(dataType == 1){_node.html('\u5df2\u5173\u6ce8');}//如果当前需要取消关注功能，就需要修改文案
                                _node.attr(param.dataState,1);//已关注
                            }else{
                                if(dataType == 1){_node.html('\u5173\u6ce8\u54c1\u724c');}//如果当前需要取消关注功能，就需要修改文案
                                _node.attr(param.dataState,0);//未关注
                            }
                        }
                    };
                }
            });
        }

        function attent(){
            $.ajax({
                url : INTERFACE.brandFollow.batchfollow,
				data : {brandId : JSON.stringify(para), sysName : 'sale.jd.com'},
                dataType : 'jsonp',
                success : function(data){
                    if(data.code == 'F10000'){
                        if(data.data){
                            currentDom.attr(param.dataState,1);
                            domOperate();
                        }
                    }else if(data.code == 'F0402'){
                        if(!data.data){
                            currentDom.attr(param.dataState,2);
                            domOperate();
                        }
                    }else if(data.code == 'F0410'){
                        currentDom.attr(param.dataState,3);
                        domOperate();
                    }else{
                        currentDom.attr(param.dataState,4);
                        domOperate();
                    }
                }
            });
        }

        function abortAttent(){
            $.ajax({
                url : INTERFACE.brandFollow.batchUnfollow,
				data : {brandId : JSON.stringify(para), sysName : 'sale.jd.com'},
                dataType : 'jsonp',
                success : function(data){
                    if(data.code == 'F10000'){
                        if(data.data){
                            currentDom.attr(param.dataState,0);
                            domOperate();
                        }
                    }
                }
            });
        }

        init();
    },
    /*
     * @function：关注
     * @description：活动关注、店铺关注、商品关注，依赖module/utils.js
     * @param：
     * @author：20151015 cdwanchuan@jd.com
     *
    */
    saleAttent : function(args){
        jQuery(this).saleAttent(args);
    },
    /*
     * @function：创建二维码
     * @description：可应用于所有模块。
     * @param：
     * @author：20150605 cdwanchuan@jd.com
     */
    createQrCode : function(args){
        var param = jQuery.extend({
            node : 'li',
            iconQrCode : '.iconQrCode',
            qrCodeArea : '.jQrCode',
            dataHref : 'qrHref',
            qrCode : '.qrPic',
            qrcJsImport : '//static.360buyimg.com/jshop/common/widget/qrCode/qrcode.min.js',
            current : 'current'
        }, args || {}),
            _this = jQuery(this),
            node = _this.find(param.node),
            iconQrCode = _this.find(param.iconQrCode),
            qrcJsImport = param.qrcJsImport,
            eventType = param.eventType,
            close = _this.find(param.close),
            current = param.current;

        //判断页面是否引入了二维码JS文件
        isQrcJsImport = typeof isQrcJsImport === "undefined"? false: isQrcJsImport;
        if (isQrcJsImport === false) {
            isQrcJsImport = true;
            jQuery.getScript(qrcJsImport, function (){});
        }

        //鼠标移动到节点上显示二维码
        iconQrCode.hover(function () {
            var dom = jQuery(this).closest(param.node);
            domOperate(dom);
        },function () {
            //var dom = jQuery(this).closest(param.node);
            //dom.removeClass(current);
        });

        //二维码主逻辑
        function domOperate(dom){
            var activityId,
                qrCodeArea = dom.find(param.qrCodeArea),
                qrCode = qrCodeArea.find(param.qrCode),
                urlText,
                qrCodeText;
            if(qrCode.html() === '') {
                urlText = qrCodeArea.attr(param.dataHref).replace(/ /g, "");
                if (param.activityId) {
                    activityId = $("#" + param.activityId).val();
                    qrCodeText = urlText + "&resourceType=Jshop_pc_scan&resourceValue=Jshop_" + activityId;
                } else {
                    qrCodeText = urlText;
                }
                new QRCode(qrCode[0], {
                    text: qrCodeText,
                    width: qrCode.width(),
                    height: qrCode.height()
                });
                qrCodeArea.removeAttr(param.dataHref);
            }
            dom.addClass(current);

            qrCodeArea.mouseleave(function(){
                dom.removeClass(current);
            });
        }
    },
	/*
	 * @function：获取推荐位商品
	 * @description：619045 PC首页-猜你喜欢（商品+品牌LOGO）
	 * 应用场景：活动
	 * @param：nodeCon装拼装好的容器节点ul；url接口；
	 * @author：cdwanchuan@jd.com 2016-04-19
	 * @INTERFACE：http://diviner.jd.com/diviner?p=619033&uuid=-1&sku=&pin=xxxxxxx&lid=1&lim=40&hi=&ec=utf-8&ck=pin,aview
	*/
	getDivinerGoods : function(args){
		var param = jQuery.extend({
				nodeParent : '#J_hotListWrap', //外层节点
				nodeCon : 'ul', //拼装插入节点
				domNode : 'li',
				url : INTERFACE.diviner,//接口
				p : 619044,//推荐位
				lim : 8, //获取条数
				startLim : 0, //开始显示条数
				current : 'current'
			},args),
			_this = jQuery(this),
			nodeParent = jQuery(param.nodeParent),
			node_con = _this.find(param.nodeCon);

		if(!node_con.length) return;
			
		/* 组装html片段 */
		function getHtml(data){
			if(!data.data) return;
			var oLi = node_con.html(), //获取页面上html模板
				html = '';
			
			if(!oLi.length) return;

			for (var i = param.startLim, len = data.data.length || 0; i < len; i++) {
				if(data.data[i].bn && !/\/\//.test(data.data[i].bn)){
					data.data[i].bn = '//img30.360buyimg.com/jgsq-productsoa/' + data.data[i].bn;//20160421 杨磊，品牌LOGO多种来源，路径格式不统一；
				}
				
				html += jshop.module.renderHTML(oLi, data.data[i]); //使用公共方法renderHTML拼装数据
			}
			node_con.html(html).addClass(param.current);
		}

		/* 埋点方法 */
		function newImage(src) {
			var img = new Image();
			src = src + "&m=UA-J2011-1&ref=" + encodeURIComponent(document.referrer) + "&random=" + Math.random();
			img.setAttribute('src', src);
		}

		/* 获取数据 */
		!function getList(){
			var data = {
				p : param.p,
				uuid : readCookie('uuid') ? readCookie('uuid') : '',
				sku : '',
				pin : decodeURI(readCookie('pin')?readCookie('pin') : ''),
				lid : readCookie('areald') ? readCookie('areald') : 1,
				lim : param.lim,
				sp : '',
				hi : '',
				ec : 'utf-8'
				//ck : 'pin,aview,pinId,lighting'
			};

			jQuery.ajax({
				url : param.url,
				data : data,
				dataType : 'jsonp',
				success : function(data){
					getHtml(data);
					newImage(data.impr);//初始化埋点
					var dom_node = _this.find(param.domNode);
					dom_node.click(function(){newImage(jQuery(this).attr('data-clk'))});
					jshop.module.autoTag.call(_this,{node:param.domNode});
				}
			});
		}();
	},
    /*
     * @function：获取品牌LOGO
     * @description：根据品牌ID获取品牌LOGO
     * 应用场景：商品推荐模块，录入有品牌的商品
     * @param：node方法应用节点；dataBrandId品牌ID伪属性；；dataNum每次最多能获取的商品数量；url接口
     * @author：cdwanchuan@jd.com 2016-04-20
    */
    getBrandLogo : function(arg){
        var param = $.extend({
                node : '.goods-logo img',
                dataBrandId : 'data-brandid',
                dataNum : 100,//每次最多传入100个ID
                url : INTERFACE.actJshop.brandinfo//接口
            },arg),
            _this = $(this),
            dom_node = _this.find(param.node);

        if(!dom_node.length) return;

        function getTag(){
            var a_brandid = [];
            dom_node.each(function(index,n){
                a_brandid.push($(n).attr(param.dataBrandId));
            });

            var len = Math.ceil(a_brandid.length/param.dataNum);

            for(var i=0; i<len; i++){
                var a_single_skuid =  a_brandid.slice(i*param.dataNum , Math.min(a_brandid.length , (i+1)*param.dataNum));

                $.ajax({
                    url : param.url,
                    data : {
                        brandIds : a_single_skuid.join(',')
                    },
                    dataType : 'jsonp',
                    success : function(data){
                        $.each(data,function(index,n){
							if(n.logoUrl){
								if(!/\/\//.test(n.logoUrl)){
									n.logoUrl = '//img30.360buyimg.com/jgsq-productsoa/' + n.logoUrl;//20160421 杨磊，品牌LOGO多种来源，路径格式不统一；
								}
								jQuery(param.node + '[' + param.dataBrandId + '=' + n.brandId + ']').attr('src', n.logoUrl).css('display','block');
							}
                        });
                    }
                });
            }
        }
        getTag();
    },
    /*
     * 显示App专享价及相对于京东价的优惠金额
     * @param param.jdPriceNode     京东价格节点选择器
     * @param param.appPriceNode    app价格节点选择器
     * @param param.couponPriceNode 优惠额度节点选择器
     * @param param.couponType      优惠额度计算类型，1：算优惠了多少金额（京东价 - App专享价），2：算相当于打了几折（App专享价 / 京东价 * 10）
     * @param param.skuAttName      价格节点上的sku标示
     * @param param.itemNode        单个sku最外层的节点
     * @param param.noAppPriceClass 没有app专享价时给itemNode添加的样式
     */
    showAppPriceCoupon: function(param){

        var jTarget = $(this),
            arrSku = [],   //请求专享价时的arr
            jprice_arr=[], //请求京东价时的arr
            url = INTERFACE.price.jdMobile;
        param = $.extend({
            jdPriceNode: ".j-jd-price",
            appPriceNode: ".j-app-price",
            couponPriceNode: ".j-coupon-price",
            couponType: 1,
            skuAttName: "sku",
            itemNode: "li",
            noAppPriceHandle: ""
        }, param);

        //返回优惠额度或者折扣
        function getYh(jdPrice, appPrice){
            var val = 0,
                jdPrice = parseFloat(jdPrice),
                appPrice = parseFloat(appPrice);
            if(param.couponType === 1){
                val = parseInt(100 * jdPrice - 100 * appPrice, 10) / 100;
            }else if(param.couponType === 2){
                val = parseInt(appPrice * 100 / jdPrice, 10) / 10;
            }
            return val;
        }

        /**
         * 使用jsonp方式请求价格
         * @param arr
         * @param type
         * @private;
         */
        function jsonpPrice(arr) {
            for(var i = 0; i < arr.length; i+=20){
                //请求app专享价
                $.ajax({
                    url: url+"?skuids="+arr.slice(i, i+20).join(",")+"&origin=2",
                    type: "get",
                    dataType: "jsonp",
                    success: function(data) {
                        if (data && data.constructor === Array) {
                            for (var i = 0; i < data.length; i++) {
                                var price = data[i],
                                    id = price.id,
                                    appPrice = +price.p <=0 ? "暂无价格" : price.p,
                                    skuName = "[" + param.skuAttName + "='" + id + "']",
                                    jJdPriceNode = jTarget.find(param.jdPriceNode + skuName),
                                    jAppPriceNode = jTarget.find(param.appPriceNode + skuName).text(appPrice);
                                //京东价已经请求响应完成
                                if(jJdPriceNode.text() !== ""){
                                    var yh = getYh(jJdPriceNode.text(), appPrice),
                                        jItem = jAppPriceNode.closest(param.itemNode),
                                        jCouponPriceNode = jTarget.find(param.couponPriceNode + skuName);
                                    //如果没有专享价
                                    if(isNaN(yh) || yh <= 0 || (param.couponType === 2 && yh === 10)){
                                        jItem.addClass(param.noAppPriceClass);
                                    }else{
                                        jCouponPriceNode.text(yh);
                                    }
                                }
                            }
                        }
                    }
                });

                //请求jd价
                $.ajax({
                    url: INTERFACE.price.jd + "?skuids="+jprice_arr.slice(i, i+20).join(","),
                    type: "get",
                    dataType: "jsonp",
                    success: function(data) {
                        if (data && data.constructor === Array) {
                            for (var i = 0; i < data.length; i++) {
                                var price = data[i],
                                    id = price.id.substring(2, price.id.length),
                                    jdPrice = price.p === "-1" ? "暂无价格" : price.p,
                                    skuName = "[" + param.skuAttName + "='" + id + "']",
                                    jAppPriceNode = jTarget.find(param.appPriceNode + skuName);
                                jTarget.find(param.jdPriceNode + skuName).text(jdPrice);
                                //专享价已经请求响应完成
                                if(jAppPriceNode.text() !== ""){
                                    var yh = getYh(jdPrice, jAppPriceNode.text()),
                                        jItem = jAppPriceNode.closest(param.itemNode),
                                        jCouponPriceNode = jTarget.find(param.couponPriceNode + skuName);
                                    //如果没有专享价
                                    if(isNaN(yh) || yh <= 0 || (param.couponType === 2 && yh === 10)){
                                        jItem.addClass(param.noAppPriceClass);
                                    }else{
                                        jCouponPriceNode.text(yh);
                                    }
                                }
                            }
                        }
                    }
                });
            }
        }

        $(this).find(param.appPriceNode).each(function(){
            arrSku.push($(this).attr("sku"));
            jprice_arr.push("J_"+$(this).attr("sku"));
        });

        arrSku.length && jsonpPrice(arrSku, 1);

    },
    /*
     * @function: 简单模板渲染
     * @description：根据html模板及数据拼接html片段
     * 应用场景：任意
     * @param：
     * @author：cdzhengwujiang@jd.com 2015-01-07
     */
    renderHTML : function(tpl, data) {
        var subTpl = tpl,
            reg = /{([\w-_]+)}/,
            mArr;
        while (mArr = subTpl.match(reg)) {
            subTpl = subTpl.replace(reg, data[mArr[1]]);
        }
        return subTpl;
    },
    /*
     * @function：页面跳转
     * @description：
     * 应用场景：装修、预览、浏览
     * @param：value页面地址中的关键字；url需要跳转的地址；
     * @author：cdwanchuan@jd.com 2015-06-30
    */
    changePageUrl : function(args){
        var param = jQuery.extend({
            value : 'sale',
            url : '//www.jd.com'
        }, args || {});
        if(location.href.indexOf(param.value)!=-1){
            location.href = param.url;
        }
    },
    /*
     * @function：优惠券iframe调用
     * @description：支持module-function调用（里面除A链接外每一个结构上设置伪属性data-href）；a链接调用需在href里填写javascript:void(0)
     * 应用场景：公用调用（采用module-function方式）；a链接调用；优惠券iframe方法由高铁gaotie@jd.com提供
     * @param：
     * @data: http://active.coupon.jd.com/ilink/couponActiveFront/ifram_index.action?key=79566ba7fcee44e8924a4354cdeda7ce&roleId=1422862&to=sale.jd.com/act/syji8khazyfjwluq.html
     * @author：cdwanchuan@jd.com 2015-08-21
    */
    userGetCoupon : function(args){
        var param = jQuery.extend({
            node : 'a',
            dataAttr : 'data-href'
        } , args || {}),
            _this = jQuery(this),
            node = _this.find(param.node);

        if(!node.length){
            return;
        }

        var activeCoupon= function(source){
            var roleIdReg = /[?&]roleId=([^?&]*)/i,
                roleId = source.match(roleIdReg)[1] || '',
                keyReg = /[?&]key=([^?&]*)/i,
                key = source.match(keyReg)[1] || '',
                toReg = /[?&]to=([^?&]*)/i,
                to = source.match(toReg)[1] || '';
            $.jdThickBox({
                type: 'iframe',
                title: '免费抢券',
                source: 'http://active.coupon.jd.com/ilink/couponActiveFront/ifram_index.action?key=' + key + '&roleId=' + roleId + '&to=' + to + '&r=' + Math.random(),
                width: 800,
                height: 450,
                _title: 'thicktitler',
                _close: 'thickcloser',
                _con: 'thickconr'
            })
        };

        var activeCouponLogin= function(source){
            thick_login(function(){
                activeCoupon(source);
             });
        };

        node.click(function(){
            var href = jQuery(this).attr(param.dataAttr);
            activeCouponLogin(href);
        });
    },
    /**
     * [clickToFly 点击元素飞入，目标元素显示+1]
     * @param  {[type]} args [description]
     * @return {[type]}      [description]
     * @author cdlilinpu@jd.com
     * @date 2015-09-22
     */
    clickToFly: function(args) {
        var param = jQuery.extend({
            clickToFlyNode: 'a', //点击元素
            desNode: '.fly-des em', //目标元素
            flyNode: '.fly-elems img', //飞行元素
            tipNode: '.fly-elems .tip' //显隐元素
        }, args || {}),
            $this = this;
        jQuery(param.clickToFlyNode).click(function() {
            var _this = jQuery(this),
                des = jQuery(param.desNode),
                flyElm = jQuery($this).find(param.flyNode).clone(),
                tipElm = jQuery($this).find(param.tipNode).clone();
            if (des.length != 0) {
                flyElm.css({
                    'z-index': 9000,
                    'display': 'block',
                    'position': 'absolute',
                    'top': _this.offset().top + 'px',
                    'left': _this.offset().left + 'px',
                    'width': '13px',
                    'height': '12px'
                });
                jQuery('body').append(flyElm).append(tipElm);
                flyElm.animate({
                    top: des.offset().top + 13,
                    left: des.offset().left + 11,
                    opacity: 0
                }, 1000);
                setTimeout(function() {
                    tipElm.html('+1').css({
                        'z-index': 2147483647,
                        'display': 'block',
                        'position': 'absolute',
                        width: '37px',
                        height: '37px',
                        top: des.offset().top,
                        left: des.offset().left,
                        color: '#FFF116',
                        opacity: 1,
                        'text-align': 'center',
                        'font-size': '18px'
                    }).animate({
                        top: des.offset().top - 15,
                        opacity: 0
                    }, 800);

                    setTimeout(function() {
                        tipElm.remove();
                        flyElm.remove();
                    }, 800);
                }, 1000);
            }
        });
    },
    /**
     * [attentStoreOrAct 关注店铺或活动]
     * @param  {[type]} args [description]
     * @return {[type]}      [description]
     * @author cdlilinpu@jd.com
     * @date 2015-09-22
     */
    attentStoreOrAct: function(args) {
        var param = jQuery.extend({
                attentNode: 'a',  //点击元素
                shopId: 'shop-id', //店铺ID（绑定在节点伪属性，可为空）
                actId: 'act-id',  //活动ID（绑定在节点伪属性，可为空）
                typeUrl: 'url'    //活动或店铺链接（绑定在节点伪属性）
            }, args || {}),
            followUrl = '',
			data = {},
            _this = $(this),
            _node = _this.find(param.attentNode),
            appType = 0; //链接类型
        _node.each(function(){
            var $this = $(this),
                $parent = $this.parent();
            // 调用公共方法获取链接类型（0表示采销活动，1表示店铺活动，2表示店铺）
            appType = returnUrlType($this.attr(param.typeUrl));
            $this.attr('data-type', 2); //表示默默关注
            $parent.addClass('attentScope');
            switch (appType) {
                case 0:
                case 1:
                    // 活动
                    $parent.saleAttent({
                        attentType: 'activity',
                        node: param.attentNode,
                        dataId: 'act-id',
                        current: 'favor-handle',
                        activityType: appType
                    });
                    break;
                case 2:
                    // 店铺
                    $parent.saleAttent({
                        attentType: 'vender',
                        node: param.attentNode,
                        dataId: 'shop-id',
                        current: 'favor-handle'
                    });
                    break;
                default:
                    break;
            }
        });
    },
    /**
     * [getGoodsAttentCount 获取商品关注数]
     * @param  {[type]} args [模板参数]
     * @return {[type]}      [description]
     */
    getGoodsAttentCount: function(args){
        var j = $,
            _param = j.extend({skuNode: 'li', countNode: '.JAttentCount', skuName: 'skuid'}, args),
            _this = j(this),
            _jItemNodes = _this.find(_param.skuNode),
            _skuArr = [];
        if(_jItemNodes.length === 0) return;
        _jItemNodes.each(function(index, dom){
            _skuArr.push(dom.getAttribute(_param.skuName));
        });
        for(var i = 0; i < _skuArr.length; i+=10){
            j.ajax({
                url: INTERFACE.actJshop.attentionCount,
                type: "GET",
                dataType: "jsonp",
                data: {"type": 0, "attentionIds": _skuArr.slice(i, i+10).join(",")},
                success: function(arr){
                    if(arr && arr.length > 0){
                        for(var i = 0; i < arr.length; i++){
                            var _jItem = _this.find(_param.skuNode + "[" + _param.skuName + "='" + arr[i].productId + "']");
                            _jItem.find(_param.countNode).text(arr[i].count);
                        }
                    }
                }
            });
        }
    },
    /**
     * [getWechatPrice 获取微信专享价]
     * @param  {[type]} args [模板参数]
     * @return {[type]}      [description]
     */
    getWechatPrice: function(args){
        var j = $,
            _param = j.extend({skuNode: 'li', wechatPriceNode: '.jQrCode .wechatNum', skuName: 'skuid'}, args),
            _this = j(this),
            _jItemNodes = _this.find(_param.skuNode),
            url = '//pe.3.cn/prices/pcpmgets',
            _skuArr = [];
        if(_jItemNodes.length === 0) return;
        _jItemNodes.each(function(index, dom){
            _skuArr.push(dom.getAttribute(_param.skuName));
        });
        for(var i = 0; i < _skuArr.length; i+=10){
            j.ajax({
                url: url,
                type: "GET",
                dataType: "jsonp",
                data: {
                    'skuids': _skuArr.slice(i, i+10).join(','),
                    'origin': 5,
                    'source': 'jshop'
                },
                success: function(arr){
                    if(arr && arr.length > 0){
                        for(var i = 0; i < arr.length; i++){
                            var _jItem = _this.find(_param.wechatPriceNode + "[" + _param.skuName + "='" + arr[i].id + "']"),
                                price = '';
                            if (arr[i].p && arr[i].p > 0) {
                                _jItem.text(arr[i].p);
                            } else {
                                _jItem.text('暂无价格');
                            }
                        }
                    }
                }
            });
        }
    },
    /*
     * 给a链接增加埋点
	 * 20160112 cdwanchuan@jd.com
     */
    autoTag:function(args){
        var param = jQuery.extend({
				node:'a'
				}, args || {}),
            _this = jQuery(this),
			node = _this.find(param.node),
			instanceid = _this.closest('div[instanceid]').attr('instanceid');

		node.each(function(i,e){
			jQuery(e).attr('clstag','sale|keycount|'+instanceid+'|'+i);
		});
    },
    /*
     * 商品独立分享
     * 20160224 cdtanhongzhao@jd.com
     */
    waresShare:function(args) {
        var _default = {
            shareType: '1',//0表示本窗口，1表示另外新开窗口
            shareClass: '.shareType'
        };
        var _defaultProLink = {
            facebook: 'http://en.jd.com/',
            vk: 'http://en.jd.com/',
            ok: 'http://en.jd.com/'
        };
        var settings = $.extend(_default, args), _this = $(this),
            _openType = settings.shareType == "0" ? "_self" : "_blank";
        _this.find(settings.shareClass).unbind("click").bind("click", function () {
            var skuId = $(this).attr("skuId") ? $(this).attr("skuId") : null, shareType = $(this).attr("shareType"), proUrl, imgUrl;
            switch (shareType) {
                case "facebook":
                    proUrl = skuId != null ?_defaultProLink.facebook + skuId + ".html" : window.location.href;
                    window.open('http://www.facebook.com/sharer.php?u=' + proUrl + '&t=' + encodeURIComponent(document.title), _openType);
                    break;
                case "vk":
                    if(skuId != null){
                        proUrl = _defaultProLink.vk + skuId + ".html" ;
                        imgUrl = $(this).attr("imgUrl");
                        window.open('http://vk.com/share.php?url=' + encodeURIComponent(proUrl) + '&title=' + encodeURIComponent(document.title) + '&image=' + encodeURIComponent(imgUrl), _openType);
                    }else{
                        proUrl =  window.location.href;
                        window.open('http://vk.com/share.php?url=' + encodeURIComponent(proUrl) + '&title=' + encodeURIComponent(document.title), _openType);
                    }
                    break;
                case "ok":
                    proUrl = skuId != null ?_defaultProLink.ok + skuId + ".html" : window.location.href;
                    window.open('http://connect.ok.ru/dk?cmd=WidgetSharePreview&st.cmd=WidgetSharePreview&st.shareUrl=' + encodeURIComponent(proUrl), _openType);
                    break;
            }
        })
    }
};

//数组验真：判断数组中是否存在某个值
Array.prototype.has = function(value){
    for(var i =0, len = this.length; i < len; i++){
        if(this[i] === value) return true;
    }
    return false;
};
//根据数字范围创建数组
function getArray(start, end){
    a = [];
    for(var i = start, len = end; i <= len; i++){
        a.push(i);
    }
    return a;
}


function getServerTime(callback){
    var url = INTERFACE.actJshop.serverTime;
    $.ajax({
        url: url,
        type: 'GET',
        cache: false,
        dataType: 'jsonp',
        success: function(data) {
            if (callback)
                callback(data.nowTime? new Date(data.nowTime): new Date());
        }
    });
}

jQuery.fn.extend({adaptiveLayout:function(args){if(jQuery(this).data("adaptiveLayout"))return;var options=jQuery.extend({node:null},args),elem=jQuery(this).find(options.node),quantity=parseInt(elem.parent().width()/elem.outerWidth(true)),ie=jQuery.browser.msie&&parseInt(jQuery.browser.version)<=7?"i":"",spacingType=arguments[1]=="padding"?"p":"m",size=arguments[2]==0.5?"OneHalf":"One";switch(quantity){case 10: jQuery(elem).addClass(ie+"qTen"+size).addClass(spacingType+size); break;case 9: jQuery(elem).addClass(ie+"qNine"+size).addClass(spacingType+size); break;case 8: jQuery(elem).addClass(ie+"qEight"+size).addClass(spacingType+size); break;case 7: jQuery(elem).addClass(ie+"qSeven"+size).addClass(spacingType+size); break;case 6: jQuery(elem).addClass(ie+"qSix"+size).addClass(spacingType+size); break;case 5:jQuery(elem).addClass(ie+"qFive"+size).addClass(spacingType+size);break;case 4:jQuery(elem).addClass(ie+"qFour"+size).addClass(spacingType+size);break;case 3:jQuery(elem).addClass(ie+"qThree"+size).addClass(spacingType+size);break;case 2:jQuery(elem).addClass(ie+"qTwo"+size).addClass(spacingType+size);break;case 1:jQuery(elem).addClass(ie+"qOne"+size).addClass(spacingType+size);break;default:if(jQuery(".app_edit_page_operate20130305")[0]){jQuery(this).defaultMessage()}}jQuery(this).data("adaptiveLayout",true)},insertMessage:function(){jQuery(this).prepend(jQuery("<div class='message_remind'>你选择的模板不适合这个布局，请重新选择模板！</div>").show())},defaultMessage:function(){var _this=this;jQuery(this).insertMessage();setTimeout(function(){jQuery(_this).find(".message_remind").remove()},10000)},imgOnload:function(spacingType,size){jQuery(this).parents('.mc').eq(0).adaptiveLayout({node:'li'},spacingType,size)}});

// 中奖列表无缝滚动
(function(a,c,d){function b(e){var f=c.extend({box:c(".marquee"),step:5,el:"ul",itemClass:".item",inteval:30},e);this.get=function(g){return f[g]};this.set=function(h,g){f[h]=g}}b.prototype={constructor:b,init:function(){this.parseNode();this.startScroll();this.bindEvent()},parseNode:function(){var f=this.get("box"),e=f.find(this.get("el"));this.set("elHeight",e.height());if(e.height()>f.height()){if(f.css("position")==="static"){f.css("position","relative");e.css({position:"absolute",top:"0"})}f.find(this.get("itemClass")).each(function(g,i){var h=$(i).clone();$(i).parent().append(h)})}},startScroll:function(){var h=this,f=h.get("_timer"),e=h.get("box").find(h.get("el")),g=h.get("step");if(f){clearInterval(f);h.set("_timer",null)}f=setInterval(function(){var j=parseFloat(e.css("top")),i=Math.abs(j-g)>h.get("elHeight")?0:j-g;e.css("top",i)},h.get("interval"));h.set("_timer",f)},stopScroll:function(){var f=this,e=f.get("_timer");if(e){clearInterval(e);f.set("_timer",null)}},bindEvent:function(){var f=this,e=f.get("box");e.mouseover(function(g){f.stopScroll();return false}).mouseout(function(g){f.startScroll();return false})}};a.SeamlessScroll=b})(window,jQuery);

// 老虎机抽奖滚动
function Slot(){this.options={startVal:0,changeVal:0,duration:0,startTime:0,step:2,result:0,complete:jQuery.noop},this.init=function(){var b=this.options;var c=0;var d=["webkit","moz","ms"];for(var a=0;a<d.length&&!window.requestAnimationFrame;++a){window.requestAnimationFrame=window[d[a]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[d[a]+"CancelAnimationFrame"]||window[d[a]+"CancelRequestAnimationFrame"]}if(!window.requestAnimationFrame){window.requestAnimationFrame=function(i,f){var e=new Date().getTime();var g=Math.max(0,16-(e-c));var h=window.setTimeout(function(){i(e+g)},g);c=e+g;return h}}if(!window.cancelAnimationFrame){window.cancelAnimationFrame=function(e){clearTimeout(e)}}this.target=this.el;this.startVal=+b.startVal;this.changeVal=+b.endVal;this.result=b.result;this.startTime=b.startTime;this.duration=b.duration;this.step=b.step;this.complete=b.complete;this.start()},this.tween={Linear:function(e,a,g,f){return g*e/f+a},Quad:{easeIn:function(e,a,g,f){return g*(e/=f)*e+a},easeOut:function(e,a,g,f){return -g*(e/=f)*(e-2)+a},easeInOut:function(e,a,g,f){if((e/=f/2)<1){return g/2*e*e+a}return -g/2*((--e)*(e-2)-1)+a}},Cubic:{easeIn:function(e,a,g,f){return g*(e/=f)*e*e+a},easeOut:function(e,a,g,f){return g*((e=e/f-1)*e*e+1)+a},easeInOut:function(e,a,g,f){if((e/=f/2)<1){return g/2*e*e*e+a}return g/2*((e-=2)*e*e+2)+a}},Quart:{easeIn:function(e,a,g,f){return g*(e/=f)*e*e*e+a},easeOut:function(e,a,g,f){return -g*((e=e/f-1)*e*e*e-1)+a},easeInOut:function(e,a,g,f){if((e/=f/2)<1){return g/2*e*e*e*e+a}return -g/2*((e-=2)*e*e*e-2)+a}},Quint:{easeIn:function(e,a,g,f){return g*(e/=f)*e*e*e*e+a},easeOut:function(e,a,g,f){return g*((e=e/f-1)*e*e*e*e+1)+a},easeInOut:function(e,a,g,f){if((e/=f/2)<1){return g/2*e*e*e*e*e+a}return g/2*((e-=2)*e*e*e*e+2)+a}},Sine:{easeIn:function(e,a,g,f){return -g*Math.cos(e/f*(Math.PI/2))+g+a},easeOut:function(e,a,g,f){return g*Math.sin(e/f*(Math.PI/2))+a},easeInOut:function(e,a,g,f){return -g/2*(Math.cos(Math.PI*e/f)-1)+a}},Expo:{easeIn:function(e,a,g,f){return(e==0)?a:g*Math.pow(2,10*(e/f-1))+a},easeOut:function(e,a,g,f){return(e==f)?a+g:g*(-Math.pow(2,-10*e/f)+1)+a},easeInOut:function(e,a,g,f){if(e==0){return a}if(e==f){return a+g}if((e/=f/2)<1){return g/2*Math.pow(2,10*(e-1))+a}return g/2*(-Math.pow(2,-10*--e)+2)+a}},Circ:{easeIn:function(e,a,g,f){return -g*(Math.sqrt(1-(e/=f)*e)-1)+a},easeOut:function(e,a,g,f){return g*Math.sqrt(1-(e=e/f-1)*e)+a},easeInOut:function(e,a,g,f){if((e/=f/2)<1){return -g/2*(Math.sqrt(1-e*e)-1)+a}return g/2*(Math.sqrt(1-(e-=2)*e)+1)+a}},Elastic:{easeIn:function(g,e,k,j,f,i){var h;if(g==0){return e}if((g/=j)==1){return e+k}if(typeof i=="undefined"){i=j*0.3}if(!f||f<Math.abs(k)){h=i/4;f=k}else{h=i/(2*Math.PI)*Math.asin(k/f)}return -(f*Math.pow(2,10*(g-=1))*Math.sin((g*j-h)*(2*Math.PI)/i))+e},easeOut:function(g,e,k,j,f,i){var h;if(g==0){return e}if((g/=j)==1){return e+k}if(typeof i=="undefined"){i=j*0.3}if(!f||f<Math.abs(k)){f=k;h=i/4}else{h=i/(2*Math.PI)*Math.asin(k/f)}return(f*Math.pow(2,-10*g)*Math.sin((g*j-h)*(2*Math.PI)/i)+k+e)},easeInOut:function(g,e,k,j,f,i){var h;if(g==0){return e}if((g/=j/2)==2){return e+k}if(typeof i=="undefined"){i=j*(0.3*1.5)}if(!f||f<Math.abs(k)){f=k;h=i/4}else{h=i/(2*Math.PI)*Math.asin(k/f)}if(g<1){return -0.5*(f*Math.pow(2,10*(g-=1))*Math.sin((g*j-h)*(2*Math.PI)/i))+e}return f*Math.pow(2,-10*(g-=1))*Math.sin((g*j-h)*(2*Math.PI)/i)*0.5+k+e}},Back:{easeIn:function(e,a,h,g,f){if(typeof f=="undefined"){f=1.70158}return h*(e/=g)*e*((f+1)*e-f)+a},easeOut:function(e,a,h,g,f){if(typeof f=="undefined"){f=1.70158}return h*((e=e/g-1)*e*((f+1)*e+f)+1)+a},easeInOut:function(e,a,h,g,f){if(typeof f=="undefined"){f=1.70158}if((e/=g/2)<1){return h/2*(e*e*(((f*=(1.525))+1)*e-f))+a}return h/2*((e-=2)*e*(((f*=(1.525))+1)*e+f)+2)+a}},Bounce:{easeIn:function(e,a,g,f){return g-Tween.Bounce.easeOut(f-e,0,g,f)+a},easeOut:function(e,a,g,f){if((e/=f)<(1/2.75)){return g*(7.5625*e*e)+a}else{if(e<(2/2.75)){return g*(7.5625*(e-=(1.5/2.75))*e+0.75)+a}else{if(e<(2.5/2.75)){return g*(7.5625*(e-=(2.25/2.75))*e+0.9375)+a}else{return g*(7.5625*(e-=(2.625/2.75))*e+0.984375)+a}}}},easeInOut:function(e,a,g,f){if(e<f/2){return Tween.Bounce.easeIn(e*2,0,g,f)*0.5+a}else{return Tween.Bounce.easeOut(e*2-f,0,g,f)*0.5+g*0.5+a}}}},this.start=function(){this.goal=$(this.target).find("ul");this.itemHeight=$(this.target).find("li").outerHeight();this.itemTotalHeight=($(this.target).find("li").length-1)*this.itemHeight;this.changeVal=this.result*this.itemHeight;this.reset();this.freeRun()},this.freeRun=function(){this.goal.css("marginTop",Math.ceil(this.tween.Quint.easeIn(this.startTime,this.startVal,-1*this.itemTotalHeight,this.duration)));if(this.startTime<this.duration){this.startTime+=this.step;this.rAF=requestAnimationFrame(jQuery.proxy(this.freeRun,this))}else{this.reset();this.goalRun()}},this.goalRun=function(){this.goal.css("marginTop",Math.ceil(this.tween.Quad.easeOut(this.startTime,this.startVal,-1*this.changeVal,this.duration)));if(this.startTime<this.duration){this.startTime+=this.step;this.rAF=requestAnimationFrame(jQuery.proxy(this.goalRun,this))}else{this.reset();this.complete()}},this.reset=function(){cancelAnimationFrame(this.rAF);this.startTime=0}};