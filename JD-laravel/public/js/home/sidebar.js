/*
    * 依赖 /script/module/utils.js   thick_login登录封装、saleAttent关注公共方法
*/

var sidebarHtml = '<div class="s-jd-toolbar" style="opacity:0;">  '
+    '<span class="s-icon-more" title="" clstag="jshopmall|keycount|jsdcblan|jsa21"></span>'
+    '<div class="s-icon-list">       '
+        '<div class="s-header" data-widget="s-header"> '
+           '<span class="s-mt s-icon-header" data-before="\u6d3b\u52a8\u5927\u4fc3"></span>    '
+            '<div class="s-mc">   '
+                '<div class="s-list">      '
+                '</div>      '
+            '</div>   '
+        '</div>  '
+        '<div class="s-order" data-widget="s-order"> '
+           '<span class="s-mt s-icon-order" data-before="\u6211\u7684\u8ba2\u5355" clstag="jshopmall|keycount|jsdcblan|jsa1"><em></em></span>    '
+            '<div class="s-mc">   '
+                '<div class="s-user-info">'
+                    '<span class="s-img"><img src="//i.jd.com/defaultImgs/16.jpg" width="70" height="70"></span>'
+                   '<span class="s-name">Hi，<em></em></span>'
+                   '<span class="s-level"></span>'
+                '</div>'
+                '<div class="s-mt-sub">\u6211\u7684\u8ba2\u5355</div>     '
+                '<div class="s-list">      '
+                    '<div class="s-tips">       '
+                        '<span>\u60a8\u8fd8\u6ca1\u6709\u8ba2\u5355\u54e6\uff01</span>\u8d76\u5feb\u5230<a href="//www.jd.com" target="_blank">\u4eac\u4e1c\u9996\u9875</a>\u770b\u770b\u5427\uff01      '
+                    '</div> '
+                    '<ul class="s-li-con">'
+                    '</ul>'
+                   '<a href="//order.jd.com" target="_blank" class="s-btn" clstag="jshopmall|keycount|jsdcblan|jsa3">\u67e5\u770b\u5168\u90e8\u8ba2\u5355</a>'
+                '</div>      '
+               '<div class="s-track-list">'
+                   '<span class="s-close" title="\u5173\u95ed"></span>'
+                   '<table>'
+                       '<thead>'
+                           '<tr>'
+                               '<th width="65">\u5904\u7406\u65f6\u95f4</th>'
+                               '<th>\u5904\u7406\u4fe1\u606f</th>'
+                           '</tr>'
+                       '</thead>'
+                   '</table>'
+                   '<div class="s-list-area">'
+                       '<table>'
+                           '<tbody>'
+                           '</tbody>'
+                       '</table>'
+                   '</div>'
+               '</div> '
+            '</div>   '
+        '</div>  '
+        '<div class="s-attention" data-widget="s-attention">    '
+            '<span class="s-mt s-icon-attention" data-before="\u6211\u7684\u5173\u6ce8" clstag="jshopmall|keycount|jsdcblan|jsa4"><em></em></span>    '
+            '<div class="s-mc">     '
+                '<div class="s-mt-sub">'
+                '\u6211\u7684\u5173\u6ce8     '
+                '</div>     '
+                '<div class="s-list">      '
+                    '<div class="s-tab">       '
+                        '<a href="javascript:void(0)" class="s-first-child">\u5546\u54c1</a>'
+                        '<a href="javascript:void(0)">\u5e97\u94fa</a>'
+                        '<a href="javascript:void(0)">\u6d3b\u52a8</a>      '
+                    '</div>      '
+                    '<div class="s-con">       '
+                        '<div class="s-tab-con s-goods">        '
+                            '<div class="s-tips">         '
+                                '<span>\u60a8\u8fd8\u6ca1\u5173\u6ce8\u4efb\u4f55\u5546\u54c1\u54e6\uff01</span>\u8d76\u5feb\u5230<a href="//www.jd.com" target="_blank">\u4eac\u4e1c\u9996\u9875</a>\u770b\u770b\u5427\uff01        '
+                            '</div>        '
+                            '<ul class="s-li-con">        '
+                            '</ul>       '
+                        '</div>       '
+                        '<div class="s-tab-con s-mall">        '
+                            '<div class="s-tips">         '
+                                '<span>\u60a8\u8fd8\u6ca1\u5173\u6ce8\u4efb\u4f55\u5e97\u94fa\u54e6\uff01</span>\u8d76\u5feb\u5230<a href="//www.jd.com" target="_blank">\u4eac\u4e1c\u9996\u9875</a>\u770b\u770b\u5427\uff01        '
+                            '</div>        '
+                            '<ul class="s-li-con">        '
+                            '</ul>       '
+                        '</div>       '
+                        '<div class="s-tab-con s-sale">        '
+                            '<div class="s-tips">         '
+                                '<span>\u60a8\u8fd8\u6ca1\u5173\u6ce8\u4efb\u4f55\u6d3b\u52a8\u54e6\uff01</span>\u8d76\u5feb\u5230<a href="//www.jd.com" target="_blank">\u4eac\u4e1c\u9996\u9875</a>\u770b\u770b\u5427\uff01        '
+                            '</div>        '
+                            '<ul class="s-li-con">        '
+                            '</ul>       '
+                        '</div>      '
+                    '</div>     '
+                '</div>    '
+            '</div>   '
+        '</div>   '
+        '<div class="s-coupon" data-widget="s-coupon">    '
+            '<span class="s-mt s-icon-coupon" data-before="\u6211\u7684\u4f18\u60e0\u5238" clstag="jshopmall|keycount|jsdcblan|jsa9"><em></em></span>    '
+            '<div class="s-mc">'
+                '<div class="s-list"> '
+                    '<div class="s-asset">       '
+                        '<span class="s-first-child">\u4f59\u989d<em class="s-balance-num">0</em></span>'
+                        '<span>\u4eac\u8c46<em class="s-beans-num">0</em></span>'
+                        '<span>\u4f18\u60e0\u5238<em class="s-coupon-num">0</em></span>      '
+                    '</div>      '
+                    '<div class="s-tips">       '
+                        '<span>\u60a8\u8fd8\u6ca1\u6709\u4f18\u60e0\u5238\u54e6\uff01</span>\u8d76\u5feb\u5230<a href="//www.jd.com" target="_blank">\u4eac\u4e1c\u9996\u9875</a>\u770b\u770b\u5427\uff01      '
+                    '</div>      '
+                    '<ul class="s-li-con">      '
+                    '</ul>     '
+                '</div>    '
+            '</div>   '
+        '</div>   '
+        '<div class="s-records" data-widget="s-records">    '
+            '<span class="s-mt s-icon-records" data-before="\u6211\u7684\u8db3\u8ff9" clstag="jshopmall|keycount|jsdcblan|jsa14"><em></em></span>    '
+            '<div class="s-mc">     '
+                '<div class="s-mt-sub">\u6211\u7684\u8db3\u8ff9</div>     '
+                '<div class="s-total">\u6211\u6d4f\u89c8\u8fc7\u7684<em></em>\u4ef6\u5546\u54c1</div>     '
+                '<div class="s-list">      '
+                    '<div class="s-tips">       '
+                        '<span>\u60a8\u8fd8\u6ca1\u7559\u4e0b\u8db3\u8ff9\u54e6\uff01</span>\u8d76\u5feb\u5230<a href="//www.jd.com" target="_blank">\u4eac\u4e1c\u9996\u9875</a>\u770b\u770b\u5427\uff01      '
+                    '</div>      '
+                    '<ul class="s-li-con">      '
+                    '</ul>     '
+                '</div>    '
+            '</div>   '
+        '</div> '
+        '<div class="s-jimi" data-widget="s-jimi">    '
+            '<span class="s-mt s-icon-jimi" data-before="\u6211\u7684JIMI" clstag="jshopmall|keycount|jsdcblan|jsa17"><em></em></span>    '
+            '<div class="s-mc">     '
+                '<div class="s-mt-sub">\u6211\u7684JIMI</div>       '
+                '<div class="s-list">        '
+               ''
+                '</div>    '
+            '</div>   '
+        '</div>'
+        '<div class="s-im" data-widget="s-im">    '
+            '<span class="s-mt s-icon-im" data-before="\u8054\u7cfb\u5356\u5bb6" clstag="jshopmall|keycount|jsdcblan|jsa23"><em></em></span>    '
+            '<div class="s-mc">'
+            '</div>'
+        '</div>'
+        '<div class="s-cart" data-widget="s-cart">    '
+            '<span class="s-mt s-icon-cart" data-before="\u6211\u7684\u8d2d\u7269\u8f66" clstag="jshopmall|keycount|jsdcblan|jsa11"><em></em><span class="s-cart-text">购物车</span><span class="s-cart-num">0</span></span>    '
+            '<div class="s-mc">     '
+                '<div class="s-mt-sub">      '
+                    '\u6211\u7684\u8d2d\u7269\u8f66     '
+                '</div>     '
+                '<div class="s-list">      '
+                    '<div class="s-tips">       '
+                        '<span>\u60a8\u7684\u8d2d\u7269\u8f66\u8fd8\u662f\u7a7a\u7684\u54e6\uff01</span>\u8d76\u5feb\u5230<a href="//www.jd.com" target="_blank">\u4eac\u4e1c\u9996\u9875</a>\u770b\u770b\u5427\uff01      '
+                    '</div>      '
+                    '<ul class="s-li-con">      '
+                    '</ul>      '
+                    '<div class="s-addtocart">       '
+                        '<div class="s-total">        '
+                            '<span>\u5171<span class="s-num">0</span>\u4ef6\u5546\u54c1</span>&nbsp;&nbsp;<span>\u5171\u8ba1<span class="s-price">¥<em>0.00</em></span></span>       '
+                        '</div>       '
+                        '<a href="//cart.jd.com/cart/cart.html" target="_blank" class="s-btn" clstag="jshopmall|keycount|jsdcblan|jsa13">\u53bb\u8d2d\u7269\u8f66\u7ed3\u7b97</a>      '
+                    '</div>     '
+                '</div>    '
+            '</div>   '
+        '</div> '
+    '</div>'
+    '<!-- 附属图标列表 -->'
+    '<div class="s-icon-extra">'
+        '<div class="s-extra-3d" data-widget="s-extra-3d">    '
+            '<span class="s-mt s-icon-extra-3d" data-before="3D\u5e97\u94fa" clstag="jshopmall|keycount|jsdcblan|jsa22" id="usage3D_iconTd" class="iconTd"><em></em></span>    '
+            '<div class="s-mc">'
+            '</div>'
+        '</div>'
+        '<div class="s-extra-share" data-widget="s-extra-share">'
+            '<span class="s-mt s-icon-extra-share" data-before="\u5206\u4eab" clstag="jshopmall|keycount|jsdcblan|jsa19"><em></em></span>'
+            '<div class="s-mc">'
+                '<div class="s-share-area">'
+                   '<div class="jQrCodeArea">'
+                       '<div class="qrWrap">'
+                           '<p class="qrPic"></p>'
+                           '<p class="qrDesc">微信扫码享优惠</p>'
+                       '</div>'
+                   '</div>'
+                '</div>'
+            '</div>'
+        '</div>'
+        '<div class="s-extra-attention" data-widget="s-extra-attention">    '
+            '<span class="s-mt s-icon-extra-attention" data-before="\u52a0\u5173\u6ce8"  data-id="" data-state="0" data-type="0" clstag="jshopmall|keycount|jsdcblan|jsa18"><em></em></span>    '
+            '<div class="s-mc">'
+            '</div>'
+        '</div>'
+        '<div class="s-extra-favorite" data-widget="s-extra-favorite">'
+            '<span class="s-mt s-icon-extra-favorite" data-before="\u6536\u85cf"><em></em></span>'
+            '<div class="s-mc">'
+            '</div>'
+        '</div>'
+        '<div class="s-extra-totop" data-widget="s-extra-totop">'
+            '<span class="s-mt s-icon-extra-totop" data-before="\u8fd4\u56de\u9876\u90e8" clstag="jshopmall|keycount|jsdcblan|jsa20"><em></em></span>'
+            '<div class="s-mc">'
+            '</div>'
+        '</div> '
+    '</div>'
+'</div>';

//document.body.innerHTML.replace(/((^|\s)+)([^\n\r]+)(\n|\r)/g, "+$1'$3'$4").replace(/^\+/g, "")

!function(w, $, undefined){
    /* 区分采销活动0、商家店铺1、商家活动2、自营店铺3、其他等 */
    /* 根据src地址，获取里面的type和appId */
    var APPTYPE = function(){
            var queryCss = '#jshopSidebar',
                domId = jQuery(queryCss),
                src = domId.attr('src'),
                result = {};
            //src = param.src, id, type;

        try{
            var searchString = src.split('?')[1],
                json = {};

                jQuery.each(searchString.split('&'),function(index,n){
                    if(n.indexOf('=') != -1){
                        var a = n.split('=');
                        json[a[0]] = a[1];
                    }
                });
            result.TYPE = parseInt(json.type);
            result.ID = json.id;
            result.CSSURL = src.split('?')[0].replace('.js', '.css');
            if(result.TYPE === 1 || result.TYPE === 3)  result.SHOPID = json.shopId;

        }catch(e){
            result.TYPE = 1;
        }

        return result;
    }();

    /* 接口 */
    var _INTERFACE = {
        userInfo : INTERFACE.actJshop.userExd + '?pin=',
        orderList : INTERFACE.actJshop.getOrderInfo,
        orderTrack : INTERFACE.actJshop.getOrderTrack,
        history : INTERFACE.diviner + '?p=305006&uuid=1&sku=&skus=&pin=tuijian&c1=&c2=&c3=&lid=1&lim=-1&sp=&hi=&fe=&fne=&ro=&ec=gbk',
        jdCoupon : INTERFACE.actJshop.couponInfo, // //act.jshop.jd.com/couponInfo.html?callback=abc,//act.jshop.jd.com/getShopCoupon.html
        jdShopCoupon : INTERFACE.actJshop.getShopCoupon,
        attentionGoods : INTERFACE.productFollow.queryForPage + '?callback=a&indexPage=1&pageSize=10',
        goodsInfo : INTERFACE.actJshop.goodsInfo + '?skuIds=1220040,1057746&callback=abc',
        attentionMall : INTERFACE.venderFollow.queryForPage + '?callback=aa&indexPage=1&pageSize=10',
        popShopInfo : INTERFACE.actJshop.getPopShopInfo,
        attentionSale : INTERFACE.activityFollw.queryForPage + '?callback=aa&indexPage=1&pageSize=10',
        getCart : INTERFACE.miniCartServiceNew + '?callback=jsonp1411607249644&_=1411607257330&method=GetCart',
        removeProduct : INTERFACE.miniCartServiceNew + '?callback=jsonp1413544126333&_=1413544134468&method=RemoveProduct&cartId=796202 ',
        removeSuit : INTERFACE.miniCartServiceNew + '?callback=jsonp1413523756442&_=1413523763371&method=RemoveSuit&cartId=1069978375&targetId=180726448',
        jdBalance: INTERFACE.actJshop.balance,
        jdJingdou: INTERFACE.actJshop.jbn,
        jimi : '<iframe frameborder = "0" width = "210" height = "500" src = "' + INTERFACE.linkJimi + '?source=jshopEmbed'+'&pagetype=activity_page&pagevalue=' + APPTYPE.ID +'" ></iframe>',
        im : INTERFACE.checkChat + '?shopId=82075&callback=jQuery162038903879723511636_1442899980866&_=1442899983445'
    };

    /* 定义全局浏览器高度参数 0, 1, 2 */
    var screenSize;

    /* 根据不同屏幕高度，执行不同业务 */
    function resizeScale() {
        if ($(window).height() > 800 && $(window).height() <= 1050) {//一般液晶显示器
            return 0;
        } else if ($(window).height() > 1050) {//大屏幕显示器
            return 1;
        } else {//笔记本显示器
            return 2;
        }
    };

    /* 根据屏幕高度控制显示数量，默认2种 */
    function SHOWNUM1(){
        screenSize = resizeScale();

        if(screenSize == 0){
            return {
                orderNum : 5, attentionGoodsNum : 9, attentionMallNum : 5, attentionSaleNum : 9, couponNum : 8, cartNum : 7, historyNum : 9
            }
        }else if(screenSize == 1){
            return {
                orderNum : 5, attentionGoodsNum : 9, attentionMallNum : 5, attentionSaleNum : 9, couponNum : 8, cartNum : 7, historyNum : 9
            }
        }else{
            return {
                orderNum : 3, attentionGoodsNum : 5, attentionMallNum : 3, attentionSaleNum : 6, couponNum : 5, cartNum : 4, historyNum : 6
            }
        }
    };

    var SHOWNUM = SHOWNUM1();
    $(window).bind('resize', function(){
        SHOWNUM = SHOWNUM1();
    });

    /* 主体功能：订单、关注、优惠券、购物车、足迹、JIMI */
    var sidebar = function(){
        return {
            getHeader : function(arg){
                var param = jQuery.extend({
                    nodeParent : '.s-header',
                    nodeTitle : '.s-mt',
                    nodeCon : '.s-list',
                    domNodeTitle : '.s-sale-title',// 活动大促标题html
                    domNodeCon : '.s-sale-con',// 活动大促内容html
                    className : 's-show'
                },arg),
                that = jQuery(param.nodeParent),
                nodeTitle = that.find(param.nodeTitle),
                nodeCon = that.find(param.nodeCon),
                domNodeTitle = jQuery(param.domNodeTitle),
                domNodeCon = jQuery(param.domNodeCon);

                if(nodeCon.find(param.domNodeCon).length == 0){
                    nodeCon.append(domNodeCon);
                }
            },
            /**
             * @function：获取订单记录
             * @param arg
             * @author：luxingyuan@jd.com 2014-10-15
             */
            getOrder : function(arg){
                var param = jQuery.extend({
                    nodeParent : '.s-order',
                    nodeCon : '.s-list > ul',
                    domNode : 'li',
                    nodePhoto : '.s-user-info img',
                    nodeName : '.s-name em',
                    nodeLevel :  '.s-level',
                    urlUser : _INTERFACE.userInfo,// 用户信息接口,
                    urlOrder : _INTERFACE.orderList,// 订单信息接口
                    track : '.s-track',
                    trackList : '.s-track-list',
                    tbody : 'tbody',
                    closeTrack : '.s-close'
                },arg),
                that = jQuery(param.nodeParent),
                node_con = that.find(param.nodeCon),
                trackList = that.find(param.trackList);

                if(!node_con.length) return;

                //数组验真：判断数组中是否存在某个值
                Array.prototype.has = function(value){
                    for(var i =0, len = this.length; i < len; i++){
                        if(this[i] === value) return true;
                    }
                    return false;
                };

                /**
                 * 初始化用户信息
                 */
                !function initUserInfor(){
                    jQuery.ajax({
                        url : param.urlUser + (readCookie('pin')? readCookie('pin') : ""),
                        dataType : 'jsonp',
                        success : function(data){
                            that.find(param.nodePhoto).attr("src", data.midImg);
                            that.find(param.nodeName).text(data.nickName);
                            that.find(param.nodeLevel).text(data.levelName.replace("\u7528\u6237", "\u4f1a\u5458"));
                        }
                    });
                }();

                /* 过滤虚拟订单
                * 4：虚拟商品；8：服务产品；28：团购(虚拟)；30：手机充值；33：电子礼品卡；34：游戏点卡；35：机票；36：彩票
                * 37:手机充值(新)；38:电子书订单；39：酒店订单；43：电影票；44：景点门票；45：租车；46：火车票；47：旅游；
                * 48：保险；51：误购取件费订单；52：捐赠订单；53：票务订单；55：域名订单；57：应用商店订单；58：数字音乐；
                * 62：网页游戏；64：非车险保险订单；65：车险订单；66：数字音乐IAP订单；67：电子书IAP订单；68：POP拍卖保证金订单
                * 69：京东服务产品订单；70：软件服务订单；71：培训服务订单；72：模板服务订单；73：需求外包；74：生活缴费订单
                * 76：云产品订单；78：电商云订单 ；79：电商云平台订单；80：服务市场代销；81：电商云代销；82：汽车票订单；
                * 83：国际机票订单；84：拍拍对接快捷支付实物订单；85：拍拍对接快捷支付虚拟订单；86：合约机虚拟订单；
                * 87：手机流量充值；201：酒店团购；
                */
                var virtualOrderType = [4,8,28,30,33,34,35,36,37,38,39,43,44,45,46,47,48,51,52,53,55,57,58,62,64,65,66,67,68,69,70,71,72,73,74,76,78,79,80,81,82,83,84,85,86,87,201];

                !function initOrderList(){
                    jQuery.ajax({
                        url : param.urlOrder,
                        data : {index: 1, size : 15},
                        dataType : 'jsonp',
                        success : function(data){
                            var html = "",
                                tplHtml = '<li data-orderId="{orderId}">' +
                                        '    <span class="s-time">{dateSubmit}</span>' +
                                        '    <div class="s-item">' +
                                        '        <span class="s-img">$subTpl$</span>' +
                                        '        <span class="s-pay-info">' +
                                        '            <span class="s-price">￥{shouldPay}</span>' +
                                        '            <span class="s-client">{customerName}</span>' +
                                        '            <span class="s-pay">{paymentTypeName}</span>' +
                                        '        </span>' +
                                        '        <span class="s-status-info">' +
                                        '            <a href="{detailUrl}" target="_blank" class="s-look-detail">\u67e5\u770b</a>' +
                                        '            <span class="s-track">\u8ddf\u8e2a&gt;</span>' +
                                        '            <span class="s-status">{stateName}</span>' +
                                        '        </span>' +
                                        '    </div>' +
                                        '</li>',
                                subTplHtml = '<a href="{wareUrl}" target="_blank" clstag="jshopmall|keycount|jsdcblan|jsa2"><img src="{imgPath}" width="50" height="50"></a>';

                            /* 过滤虚拟订单 */
                            for(var i = 0; i < data.length; i++){
                                if(virtualOrderType.has(data[i].orderType)){
                                    data.splice(i,1);
                                    i--;
                                };
                            }

                            for(var i = 0; i < data.length; i++){
                                var item = data[i],
                                    tempHtml = "";
                                if(item.customerName === undefined) continue;
                                for(var j = 0; j < item.orderWareInfos.length; j++){
                                    if(j > 2) break;
                                    var obj = item.orderWareInfos[j];
                                    tempHtml += renderHTML(subTplHtml, obj);
                                }

                                item.dateSubmit = new Date(item.dateSubmit).format("yyyy-MM-dd hh:mm:ss");

                                item.paymentTypeName = item.orderListBussinessInfo.paymentTypeName;
                                item.stateName = item.orderListBussinessInfo.stateName || '';
                                item.detailUrl = item.orderListBussinessInfo.bussinessStatusListOperate.match(/http\S+(?=")|javascript:void\(0\)/)[0];
                                html += renderHTML(tplHtml, item).replace(/\$subTpl\$/g, tempHtml);
                            }

                            node_con.html(html);

                            var dom_node = node_con.find(param.domNode);
                            addPage(that, dom_node, {eleLen:dom_node.length, pageNum:SHOWNUM.orderNum, siblingNode:node_con});

                            getTrack(dom_node);
                        }
                    });
                }();

                function compare(value1, value2){
                    if(value1.msgTime<value2.msgTime){
                        return -1;
                    }else if(value1.msgTime>value2.msgTime){
                        return 1;
                    }else{
                        return 0;
                    }
                }

                function getTrack(dom_node){
                    /* 组装html片段 */
                    function getHtml(data){
                        var oTr = '<tr>' +
                                    '<td width="65">{msgTime}</td>' +
                                    '<td>{content}</td>' +
                                  '</tr>',
                        html = '';

                        var newA = data.ziyingShowResult;
                        if(data.thirdPsShowResult){
                            newA = data.ziyingShowResult.concat(data.thirdPsShowResult.slice(1));
                        }
                        newA.sort(compare);

                        for (var i = 0, len = newA.length; i < len; i++) {
                            if(newA[i].msgTime){
                                newA[i].msgTime = new Date(newA[i].msgTime).format("yyyy-MM-dd hh:mm:ss");
                            }else{
                                newA[i].msgTime = '';
                            }
                            html += renderHTML(oTr, newA[i]);
                        }
                        trackList.find(param.tbody).html(html);

                    }

                    that.find(param.track).click(function(){
                        var that = this,
                            orderId = jQuery(that).parents(param.domNode).attr('data-orderid');

                        jQuery.ajax({
                            url: _INTERFACE.orderTrack,
                            data: {
                                orderId: orderId
                            },
                            dataType: 'jsonp',
                            success: function(data) {
                                getHtml(data);
                                trackList.addClass('s-current');
                                trackList.find(param.closeTrack).click(function(){
                                    trackList.find(param.tbody).html('');
                                    trackList.removeClass('s-current');
                                });
                            }
                        });
                    });
                }

            },
            /*
             * @function：获取历史记录
             * @description：获取用户浏览历史记录，30条，接口上限是200条
             * 应用场景：任意
             * @param：nodeCon装拼装好的容器节点ul；url接口；
             * @author：cdwanchuan@jd.com 2014-10-15
            */
            getHistory : function(arg){
                var param = jQuery.extend({
                        nodeParent : '.s-records',
                        nodeCon : '.s-list ul',
                        domNode : 'li',
                        url : _INTERFACE.history//接口
                    },arg),
                    that = jQuery(param.nodeParent),
                    node_con = that.find(param.nodeCon);

                if(!node_con.length) return;

                /* 组装html片段 */
                function getHtml(data){
                    if(!data.data) return;
                    var oLi = '<li><a href="//item.jd.com/{sku}.html" target="_blank" data-clk="{clk}" class="s-img" clstag="jshopmall|keycount|jsdcblan|jsa16"><img src="//img13.360buyimg.com/n4/{img}" width="77" height="77" alt=""></a><span class="s-info"><a href="//item.jd.com/{sku}.html" target="_blank" class="s-desc" clstag="jshopmall|keycount|jsdcblan|jsa16">{t}</a><span class="s-jd-price">&yen; {jp}</span><!--<span class="s-sale-price">&yen; {mp}</span>--><a href="//cart.jd.com/cart/dynamic/gate.action?pid={sku}&pcount=1&ptype=1" class="s-btn" target="_blank" clstag="jshopmall|keycount|jsdcblan|jsa15">\u52a0\u5165\u8d2d\u7269\u8f66</a></span></li>',
                    html = '';
                    for (var i = 0, len = data.data.length || 0; i < len; i++) {
                        html += oLi.replace(/\{sku\}/g, data.data[i].sku).replace("{clk}", data.data[i].clk).replace("{img}", data.data[i].img).replace("{t}", data.data[i].t).replace("{jp}", data.data[i].jp > 0 ?data.data[i].jp:'\u6682\u65e0\u62a5\u4ef7').replace("{mp}", data.data[i].mp > 0 ?data.data[i].mp:'\u6682\u65e0\u62a5\u4ef7');
                    }
                    node_con.html(html);
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
                        p : 305006,
                        lid : readCookie('areald') ? readCookie('areald') : 1,
                        ec : 'utf-8',
                        lim : 30,
                        uuid : readCookie('uuid') ? readCookie('uuid') : '',
                        pin : decodeURI(readCookie('pin')),
                        ck : 'pin,aview,pinId,lighting'
                    };

                    jQuery.ajax({
                        url : param.url.substring(0,param.url.indexOf('?')+1),
                        data : data,
                        dataType : 'jsonp',
                        jsonpCallback  : 'history' + new Date().getTime(),
                        success : function(data){
                            getHtml(data);
                            newImage(data.impr);//初始化埋点
                            jshop.module.ridLazy(that);//去除图片懒加载
                            var dom_node = that.find(param.domNode);
                            addPage(that, dom_node, {eleLen:dom_node.length, pageNum:SHOWNUM.historyNum, siblingNode:node_con});
                            that.find('.s-total em').html(dom_node.length);
                            dom_node.find('a').click(function(){newImage(jQuery(this).attr('data-clk'))});

                        }
                    });
                }();
            },
            /*
             * @function：获取优惠券，余额，京豆
             * @description：获取用户所有的优惠券列表
             * 应用场景：任意
             * @param：node装拼装好的容器节点ul；url接口；
             * @author：cdwanchuan@jd.com 2014-10-14
            */
            getCoupon : function(arg){
                var param = jQuery.extend({
                        nodeParent : '.s-coupon',
                        nodeCon : '.s-list ul',
                        domNode : 'li',
                        urlJdCoupon : _INTERFACE.jdCoupon, // 京东优惠券接口
                        urlJdShopCoupon : _INTERFACE.jdShopCoupon, // 店铺优惠券接口
                        urlJdBalance : _INTERFACE.jdBalance, // 账户余额接口
                        urlJdJingdou : _INTERFACE.jdJingdou, // 用户京豆数量接口
                        balanceNum : '.s-asset .s-balance-num',
                        beansNum : '.s-asset .s-beans-num',
                        couponNum : '.s-asset .s-coupon-num'
                    },arg),
                    that = jQuery(param.nodeParent),
                    node_con = that.find(param.nodeCon);

                if(!node_con.length) return;

                /* 获取用户账户余额
                 * Add by cdzhengwujiang@jd.com 2015/01/07
                 */
                !function(){
                    jQuery.ajax({
                        url: param.urlJdBalance,
                        data: {
                            pin: readCookie('pin')
                        },
                        dataType: 'jsonp',
                        success: function(data) {
                            that.find(param.balanceNum).html('&yen;'+data.accountBalance);
                        }
                    });
                }();

                /* 获取用户京豆数量
                 * Add by cdzhengwujiang@jd.com 2015/01/07
                 */
                !function(){
                    jQuery.ajax({
                        url: param.urlJdJingdou,
                        data: {
                            pin: readCookie('pin')
                        },
                        dataType: 'jsonp',
                        success: function(data) {
                            that.find(param.beansNum).html(data.jBeanNum);
                        }
                    });
                }();

                /* 组装html片段 */
                function getHtml(data, isShop){
                    var outerHtml = '&nbsp;',
                        oJdLi = '<li class="s-jd-coupon"><div class="s-quota"><span class="s-desc">\u6ee1<em>{consumeValue}</em>\u4f7f\u7528</span><span class="s-num">¥<em>{faceValue}</em></span></div><div class="s-info"><p class="s-text" title="{counponLimitInfo}">\u9650<em>{counponLimitInfo}</em>\u4f7f\u7528</p><p class="s-time">\u6709\u6548\u671f\uff1a<em>{beginTime} - {endTime}</em></p></div></li>',
                        jdHtml = '<li class="s-mt-sub">\u6211\u7684\u4f18\u60e0\u5238</li>';

                    var oMallLi = '<li class="s-mall-coupon"><a href="{link}" class="s-btn" target="_blank" clstag="jshopmall|keycount|jsdcblan|jsa10">\u7acb\u5373\u9886\u53d6&gt;</a><div class="s-quota"><span class="s-desc"><em>{shopName}</em></span><span class="s-num">¥<em>{discount}</em></span></div><div class="s-info"><p class="s-text">\u6ee1<em>{quota}</em>\u4f7f\u7528</p><p class="s-time">\u6709\u6548\u671f\uff1a<em>{beginTime} - {endTime}</em></p></div></li>',
                        mallHtml = '<li class="s-mt-sub">\u5e97\u94fa\u4f18\u60e0\u5238</li>';
                    if(!data.length) return outerHtml;

                    var outHtml = isShop ? mallHtml : jdHtml;

                    for (var i = 0, len = data.length; i < len; i++) {
                        if (isShop) {
                            data[i].beginTime = data[i].beginTime.split(" ")[0];
                            data[i].endTime = data[i].endTime.split(" ")[0];
                            data[i].takeBeginTime = data[i].takeBeginTime.split(" ")[0];
                            data[i].takeEndTime = data[i].takeEndTime.split(" ")[0];
                            data[i].shopName = isShop;
                            outHtml += renderHTML(oMallLi, data[i]);
                        } else {
                            outHtml += renderHTML(oJdLi, data[i]);
                        }
                    }

                    return outHtml;
                }

                var sCoupon = jdCoupon = '', couponCount = 0, //定义数据对象变量
                    checkMoreCouponHtml = '<div class="check-more-coupon"><a href="//youhuiquan.jd.com/" target="_blank" clstag="jshopmall|keycount|jsdcblan|jsa23">查看更多优惠券&nbsp;&gt;&gt;</a></div>';

                /* 获取店铺优惠券数据 */
                function getShopCoupon(){
                    jQuery.ajax({
                        url : param.urlJdShopCoupon, // param.urlJdCoupon.substring(0,param.urlJdCoupon.indexOf('?') + 1)
                        data : {
                            venderId: APPTYPE.ID
                        },
                        dataType : 'jsonp',
                        success : function(data){
                            var json = data;
                            jQuery.ajax({
                                url: _INTERFACE.popShopInfo,
                                data: {
                                    venderId: APPTYPE.ID
                                },
                                dataType: 'jsonp',
                                success: function(data) {
                                    var title = data[APPTYPE.ID] ? data[APPTYPE.ID].title : "",
                                        sCoupon = getHtml(json, title || '\u4eac\u4e1c\u5546\u57ce');
                                    if(!!jdCoupon.length){
                                        node_con.html(sCoupon + jdCoupon);
                                        var dom_node = that.find(param.domNode);
                                        addPage(that, dom_node, {eleLen:dom_node.length, pageNum:SHOWNUM.couponNum, siblingNode:node_con});
                                        node_con.parent().find('.s-page').after(checkMoreCouponHtml);
                                        couponCount += json.length;
                                        jQuery(param.couponNum).html(couponCount);
                                    }
                                    else{
                                        couponCount = data.length;
                                    }
                                }
                            });
                        }
                    });
                };

                if(APPTYPE.TYPE == 1 || APPTYPE.TYPE == 3){
                    getShopCoupon();
                }

                // 获取京东优惠券数据
                !function(){
                    jQuery.ajax({
                        url : param.urlJdCoupon,
                        data : {},
                        dataType : 'jsonp',
                        success : function(data){
                            jdCoupon = getHtml(data, 0);
                            if((APPTYPE.TYPE != 1)&&(APPTYPE.TYPE != 3)|| !!sCoupon.length){
                                node_con.html(sCoupon + jdCoupon);
                                var dom_node = that.find(param.domNode);
                                addPage(that, dom_node, {eleLen:dom_node.length, pageNum:SHOWNUM.couponNum, siblingNode:node_con});
                                if(!node_con.parent().find('.s-page').length){
                                    node_con.after(checkMoreCouponHtml);
                                } else {
                                    node_con.parent().find('.s-page').after(checkMoreCouponHtml);
                                }
                                couponCount += data.length;
                                jQuery(param.couponNum).html(couponCount);
                            }
                            else{
                                couponCount = data.length;
                            }
                        }
                    });
                }();
            },
            /*
             * @function：获取关注的商品
             * @description：获取用户关注的商品，30条
             * 应用场景：任意
             * @param：nodeCon装拼装好的容器节点ul；url接口；
             * @author：cdwanchuan@jd.com 2014-10-16
            */
            getAttentionGoods : function(arg){
                var param = jQuery.extend({
                        nodeParent : '.s-attention .s-goods',
                        nodeCon : 'ul',
                        domNode : 'li',
                        url : _INTERFACE.attentionGoods//接口
                    },arg),
                    that = jQuery(param.nodeParent),
                    node_con = that.find(param.nodeCon);

                if(!node_con.length) return;

                /* 组装html片段 */
                function getHtml(data){
                    var oLi = '<li data-sku="{productId}"><a href="//item.jd.com/{productId}.html" target="_blank" class="s-img" clstag="jshopmall|keycount|jsdcblan|jsa5"><img src="{img}" width="77" height="77" alt=""/></a><span class="s-info"><a href="//item.jd.com/{productId}.html" target="_blank" class="s-desc" clstag="jshopmall|keycount|jsdcblan|jsa5"></a><span class="s-jd-price">¥ {followedPrice}</span><a href="//cart.jd.com/cart/dynamic/gate.action?pid={productId}&pcount=1&ptype=1" class="s-btn" target="_blank" clstag="jshopmall|keycount|jsdcblan|jsa6">\u52a0\u5165\u8d2d\u7269\u8f66</a></span></li>',
                    html = '';
                    for (var i = 0, len = data.data.list.length; i < len; i++) {
                        html += oLi.replace(/\{productId\}/g, data.data.list[i].productId).replace("{followedPrice}", data.data.list[i].followedPrice > 0 ? data.data.list[i].followedPrice.toFixed(2) :'\u6682\u65e0\u62a5\u4ef7');
                    }
                    node_con.html(html);
                }

                /* 获取数据 */
                !function getList(){
                    var data = {
                        indexPage : 1,
                        pageSize : 30,
                        sysName : (APPTYPE.TYPE == 0 || APPTYPE.TYPE == 2) ? 'sale.jd.com' : 'mall.jd.com'
                    };

                    jQuery.ajax({
                        url : param.url.substring(0,param.url.indexOf('?')+1),
                        data : data,
                        dataType : 'jsonp',
                        success : function(data){
                            getHtml(data);
                            var dom_node = that.find(param.domNode);
                            getGoodsInfo(dom_node);
                            addPage(that, dom_node, {eleLen:dom_node.length, pageNum:SHOWNUM.attentionGoodsNum, siblingNode:node_con});
                        }
                    });
                }();

                /* 获取商品图片、标题 */
                function getGoodsInfo(dom_node){
                    var url = _INTERFACE.goodsInfo,
                        skuid = [];

                    for(var i = 0, len = dom_node.length; i< len; i+=1){
                        skuid.push(dom_node.eq(i).attr('data-sku'));
                    }

                    var data = {
                        skuIds : skuid.join(',')
                    };

                    jQuery.ajax({
                        url : url.substring(0,url.indexOf('?')+1),
                        data : data,
                        dataType : 'jsonp',
                        success : function(data){
                            for(var i = 0, len = data.length; i<len; i+=1){
                                dom_node.eq(i).find('img').attr('src', '//img13.360buyimg.com/n4/' + data[i].imageurl);
                                dom_node.eq(i).find('.s-info a:eq(0)').html(data[i].wname);
                            }
                        }
                    });
                }
            },
            /*
             * @function：获取关注的店铺
             * @description：获取用户关注的活动，30条
             * 应用场景：任意
             * @param：nodeCon装拼装好的容器节点ul；url接口；
             * @author：cdwanchuan@jd.com 2014-10-16
            */
            getAttentionMall : function(arg){
                var param = jQuery.extend({
                        nodeParent : '.s-attention .s-mall',
                        nodeCon : 'ul',
                        domNode : 'li',
                        url : _INTERFACE.attentionMall//接口
                    },arg),
                    that = jQuery(param.nodeParent),
                    node_con = that.find(param.nodeCon);

                if(!node_con.length) return;

                /* 组装html片段 */
                function getHtml(data){
                    if(data.data.list.length < 0) return;
                    var oLi = '<li><a href="//mall.jd.com/index-{venderId}.html" target="_blank" clstag="jshopmall|keycount|jsdcblan|jsa7"><img src="{img}" width="180" height="60" /><span class="s-desc">{venderName}</span><span class="s-btn">\u8fdb\u5165\u5e97\u94fa &gt;</span></a></li>',
                    html = '&nbsp;';
                    for (var i = 0, len = data.data.list.length; i < len; i++) {
                        if(oMallInfo){
                            data.data.list[i].img = oMallInfo[data.data.list[i].venderId].logoURI;
                        }

                        html += oLi.replace("{venderId}", data.data.list[i].venderId).replace("{img}", data.data.list[i].img).replace("{venderName}", data.data.list[i].venderName);
                    }
                    node_con.html(html);

                    if(!data.length) return html;
                }

                /* venderId数组、返回回来的店铺信息对象 */
                var aVenderId = [],
                    oMallInfo;

                /* 获取数据 */
                !function getList(){
                    var data = {
                        indexPage : 1,
                        pageSize : 30,
                        sysName : (APPTYPE.TYPE == 0 || APPTYPE.TYPE == 2) ? 'sale.jd.com' : 'mall.jd.com'
                    };

                    jQuery.ajax({
                        url : param.url.substring(0,param.url.indexOf('?')+1),
                        data : data,
                        dataType : 'jsonp',
                        success : function(data){
                            if(data.data.list.length > 0){
                                aVenderId = [];
                                for (var i = 0, len = data.data.list.length; i < len; i++) {
                                    aVenderId.push(data.data.list[i].venderId);
                                }
                            }
                            getMallLogo(function(){
                                getHtml(data); //获取关注的店铺信息
                                jshop.module.ridLazy(that);//去除图片懒加载
                                var dom_node = that.find(param.domNode);
                                addPage(that, dom_node, {eleLen:dom_node.length, pageNum:SHOWNUM.attentionMallNum, siblingNode:node_con});
                            }); //获取所有店铺信息，包含LOGO
                        }
                    });

                    /* 获取店铺LOGO */
                    function getMallLogo(fun){
                        if(aVenderId.length > 0){
                            jQuery.ajax({
                                url : _INTERFACE.popShopInfo,
                                data : {
                                    shopId : aVenderId.join(',')
                                },
                                dataType : 'jsonp',
                                success : function(data){
                                    oMallInfo = data;
                                    fun();
                                }
                            });
                        }else{
                            fun();
                        }
                    }

                }();
            },
            /*
             * @function：获取关注的活动
             * @description：获取用户关注的活动，30条
             * 应用场景：任意
             * @param：nodeCon装拼装好的容器节点ul；url接口；
             * @author：cdwanchuan@jd.com 2014-10-16
            */
            getAttentionSale : function(arg){
                var param = jQuery.extend({
                        nodeParent : '.s-attention .s-sale',
                        nodeCon : 'ul',
                        domNode : 'li',
                        url : _INTERFACE.attentionSale//接口
                    },arg),
                    that = jQuery(param.nodeParent),
                    node_con = that.find(param.nodeCon);

                if(!node_con.length) return;

                /* 组装html片段 */
                function getHtml(data){
                    var oLi = '<li class="{classText}"><a href="{activityUrl}" target="_blank" class="s-desc" clstag="jshopmall|keycount|jsdcblan|jsa8">{activityName}</a><span class="s-time">{startDate}-{endDate}</span><a href="{activityUrl}" target="_blank" class="s-btn s-btn-go" title="\u8fdb\u5165\u6d3b\u52a8" clstag="jshopmall|keycount|jsdcblan|jsa8">\u8fdb\u5165\u6d3b\u52a8 ></a><a href="javascript:void(0);" class="s-btn s-btn-wait">\u656c\u8bf7\u671f\u5f85</a><a href="javascript:void(0);" class="s-btn s-btn-over">\u5df2\u7ecf\u7ed3\u675f</a></li>',
                    html = '',
                    nDate = new Date().format("yyyy.MM.dd hh:mm:ss");

                    if(data.data.list){
                        for (var i = 0, len = data.data.list.length; i < len; i++) {

                            var startDate = (data.data.list[i].startDate).replace(/\-/g,'.'),
                                endDate = data.data.list[i].endDate.replace(/\-/g,'.'),

                                sDate = startDate,
                                eDate = endDate;

                            if(startDate > endDate){
                                sDate = endDate;
                                eDate = startDate;
                            }

                            data.data.list[i].classText='';
                            if (sDate >= nDate) {
                                data.data.list[i].classText = "s-wait";
                            }

                            if(eDate < nDate){
                                data.data.list[i].classText = "s-over";
                            }

                            if(sDate < nDate && eDate > nDate){
                                data.data.list[i].classText = "s-go";
                            }
                            if(data.data.list[i].classText !== 's-over'){
                                html += oLi.replace("{classText}", data.data.list[i].classText).replace(/\{activityUrl\}/g, data.data.list[i].activityUrl).replace("{activityName}", data.data.list[i].activityName).replace("{startDate}", sDate.substring(0,10)).replace("{endDate}", eDate.substring(0,10));

                            }
                        }
                    }
                    node_con.html(html);
                }

                /* 获取数据 */
                !function getList(){
                    var data = {
                        indexPage : 1,
                        pageSize : 30,
                        sysName : (APPTYPE.TYPE == 0 || APPTYPE.TYPE == 2) ? 'sale.jd.com' : 'mall.jd.com'
                    };

                    jQuery.ajax({
                        url : param.url.substring(0,param.url.indexOf('?')+1),
                        data : data,
                        dataType : 'jsonp',
                        success : function(data){
                            getHtml(data);
                            var dom_node = that.find(param.domNode);
                            addPage(that, dom_node, {eleLen:dom_node.length, pageNum:SHOWNUM.attentionSaleNum, siblingNode:node_con});
                        }
                    });
                }();
            },
            /*
             * @function：获取购物商品列表
             * @description：获取用户的购物车商品，30条
             * 应用场景：任意
             * @param：nodeCon装拼装好的容器节点ul；url接口；
             * @author：cdwanchuan@jd.com 2014-10-17
            */
            getCart : function(arg){
                var param = jQuery.extend({
                        nodeParent : '.s-cart',
                        nodeCon : '.s-list ul',
                        domNode : 'li',
                        url : _INTERFACE.getCart//接口
                    },arg),
                    that = jQuery(param.nodeParent),
                    node_con = that.find(param.nodeCon);

                if(!node_con.length) return;

                var totalPrice = 0; //20151216星期三 由于迷你购物车接口将TotalPromotionPrice修改为只有用户选择了才返回价格，所以这里只有拼接所有商品的价格

                /* 组装html片段 */
                function getHtml(data){
                    var oLi = '<li data-cartid="{cartId}" data-targetid="{targetId}"><a href="//item.jd.com/{Id}.html" target="_blank" class="s-img" clstag="jshopmall|keycount|jsdcblan|jsa12"><img src="//img13.360buyimg.com/n4/{ImgUrl}" width="100" height="100" alt=""/></a><span class="s-info"><a href="//item.jd.com/{Id}.html" target="_blank" class="s-desc" clstag="jshopmall|keycount|jsdcblan|jsa12">{Name}</a><span class="s-sale-price">¥ {SalePrice}</span><span class="s-jd-price">¥ <em>{PromotionPrice}</em></span><span class="s-num">×<em>{Num}</em></span><a href="javascript:void(0);" class="s-btn">\u5220\u9664</a></span></li>',
                        html = '';
                    //单品
                    for (var i = 0, len = data.Cart.TheSkus.length; i < len; i++) {
                        html += oLi.replace(/\{cartId\}/g, data.Cart.TheSkus[i].Id).replace(/\{targetId\}/g, data.Cart.TheSkus[i].Id).replace(/\{Id\}/g, data.Cart.TheSkus[i].Id).replace("{ImgUrl}", data.Cart.TheSkus[i].ImgUrl).replace("{Name}", data.Cart.TheSkus[i].Name).replace("{SalePrice}", data.Cart.TheSkus[i].SalePrice).replace("{PromotionPrice}", data.Cart.TheSkus[i].PromotionPrice.toFixed(2)).replace("{Num}", data.Cart.TheSkus[i].Num);
                        totalPrice += data.Cart.TheSkus[i].PromotionPrice;
                    }
                    //赠品
                    for (var i = 0, len = data.Cart.TheGifts.length; i < len; i++) {
                            html += oLi.replace(/\{cartId\}/g, data.Cart.TheGifts[i].MainSKU.Id).replace(/\{targetId\}/g, data.Cart.TheGifts[i].Id).replace(/\{Id\}/g, data.Cart.TheGifts[i].MainSKU.Id).replace("{ImgUrl}", data.Cart.TheGifts[i].MainSKU.ImgUrl).replace("{Name}", data.Cart.TheGifts[i].MainSKU.Name).replace("{SalePrice}", data.Cart.TheGifts[i].SalePrice).replace("{PromotionPrice}", data.Cart.TheGifts[i].PromotionPrice.toFixed(2)).replace("{Num}", data.Cart.TheGifts[i].Num);
                            totalPrice += data.Cart.TheGifts[i].PromotionPrice;
                    }
                    //套装
                    for (var i = 0, len = data.Cart.TheSuit.length; i < len; i++) {
                        for (var j = 0, lenth = data.Cart.TheSuit[i].Skus.length; j < lenth; j++) {
                            html += oLi.replace(/\{cartId\}/g, data.Cart.TheSuit[i].Skus[j].Id).replace(/\{targetId\}/g, data.Cart.TheSuit[i].Id).replace(/\{Id\}/g, data.Cart.TheSuit[i].Skus[j].Id).replace("{ImgUrl}", data.Cart.TheSuit[i].Skus[j].ImgUrl).replace("{Name}", data.Cart.TheSuit[i].Skus[j].Name).replace("{SalePrice}", data.Cart.TheSuit[i].Skus[j].SalePrice).replace("{PromotionPrice}", data.Cart.TheSuit[i].Skus[j].PromotionPrice.toFixed(2)).replace("{Num}", data.Cart.TheSuit[i].Skus[j].Num);
                            totalPrice += data.Cart.TheSuit[i].Skus[j].PromotionPrice;
                        }
                    }
                    //满减
                    for (var i = 0, len = data.Cart.ManJian.length; i < len; i++) {
                        for (var j = 0, lenth = data.Cart.ManJian[i].Skus.length; j < lenth; j++) {
                            html += oLi.replace(/\{cartId\}/g, data.Cart.ManJian[i].Skus[j].Id).replace(/\{targetId\}/g, data.Cart.ManJian[i].Id).replace(/\{Id\}/g, data.Cart.ManJian[i].Skus[j].Id).replace("{ImgUrl}", data.Cart.ManJian[i].Skus[j].ImgUrl).replace("{Name}", data.Cart.ManJian[i].Skus[j].Name).replace("{SalePrice}", data.Cart.ManJian[i].Skus[j].SalePrice).replace("{PromotionPrice}", data.Cart.ManJian[i].Skus[j].PromotionPrice.toFixed(2)).replace("{Num}", data.Cart.ManJian[i].Skus[j].Num);
                            totalPrice += data.Cart.ManJian[i].Skus[j].PromotionPrice;
                        }
                    }
                    //满赠
                    for (var i = 0, len = data.Cart.ManZeng.length; i < len; i++) {
                        for (var j = 0, lenth = data.Cart.ManZeng[i].Skus.length; j < lenth; j++) {
                            html += oLi.replace(/\{cartId\}/g, data.Cart.ManZeng[i].Skus[j].Id).replace(/\{targetId\}/g, data.Cart.ManZeng[i].Id).replace(/\{Id\}/g, data.Cart.ManZeng[i].Skus[j].Id).replace("{ImgUrl}", data.Cart.ManZeng[i].Skus[j].ImgUrl).replace("{Name}", data.Cart.ManZeng[i].Skus[j].Name).replace("{SalePrice}", data.Cart.ManZeng[i].Skus[j].SalePrice).replace("{PromotionPrice}", data.Cart.ManZeng[i].Skus[j].PromotionPrice.toFixed(2)).replace("{Num}", data.Cart.ManZeng[i].Skus[j].Num);
                            totalPrice += data.Cart.ManZeng[i].Skus[j].PromotionPrice;
                        }
                    }
                    node_con.html(html);
                }

                /* 获取数据 */
                !function getList(){
                    var data = {
                        method : 'GetCart'
                    };

                    jQuery.ajax({
                        url : param.url.substring(0,param.url.indexOf('?')+1),
                        data : data,
                        dataType : 'jsonp',
                        jsonpCallback  : 'jsonp' + new Date().getTime(),
                        success : function(data){
                            getHtml(data);
                            jshop.module.ridLazy(that);//去除图片懒加载
                            var dom_node = that.find(param.domNode);
                            addPage(that, dom_node, {eleLen:dom_node.length, pageNum:SHOWNUM.cartNum, siblingNode:node_con});
                            that.find('.s-total .s-num,.s-cart-num').html(data.Cart.Num);
                            that.find('.s-total .s-price em').html(totalPrice.toFixed(2));
                            if(dom_node.length > 0){
                                that.find('.s-addtocart').addClass('s-current');
                            }else{
                                that.find('.s-addtocart').removeClass('s-current');
                            }
                        }
                    });
                }();

                /* 删除商品 */
                !function delGoods(dom_node){
                    var param = {
                        urlSingle : _INTERFACE.removeProduct,
                        urlMore : _INTERFACE.removeSuit,
                        methodSingle : 'RemoveProduct',
                        methodMore : 'RemoveSuit'
                    },
                    data;

                    that.delegate('.s-btn','click',function(){
                        var goodsNum = 0,
                        totalPrice = 0;

                        var id = {
                            cartId : jQuery(this).parents('li').attr('data-cartid'),
                            targetId : jQuery(this).parents('li').attr('data-targetid')
                        };

                        if(id.cartId === id.targetId){
                            data = {
                                cartId : id.cartId,
                                method : param.methodSingle,
                                url : param.urlSingle
                            }
                        }else{
                            data = {
                                cartId : id.cartId,
                                targetId : id.targetId,
                                method : param.methodMore,
                                url : param.urlMore
                            }
                        }

                        var currentNode = jQuery(this).parents('li'),
                            remain_node = currentNode.siblings();
                        for(var i = 0; i<remain_node.length; i++){
                            goodsNum += ~~jQuery(remain_node[i]).find('.s-num em').html();
                            totalPrice += ~~(jQuery(remain_node[i]).find('.s-jd-price em').html() * ~~jQuery(remain_node[i]).find('.s-num em').html());
                        }
                        jQuery.ajax({
                            url : data.url.substring(0,data.url.indexOf('?')+1),
                            data : data,
                            dataType : 'jsonp',
                            jsonpCallback  : 'jsonp' + new Date().getTime(),
                            success : function(data){
                                if(data.Result){
                                    //getList();每次都取数据会出现接口获取频繁而重定向，所以采用以下前端删除
                                    currentNode.remove();
                                    addPage(that, remain_node, {eleLen:remain_node.length, pageNum:SHOWNUM.cartNum, siblingNode:node_con});

                                    that.find('.s-total .s-num,.s-cart-num').html(goodsNum);
                                    that.find('.s-total .s-price em').html(totalPrice + '.00');
                                    if(remain_node.length < 1){
                                        that.find('.s-addtocart').removeClass('s-current');
                                        that.find('.s-page').css('display','none');
                                    }
                                }
                            }
                        });
                    });
                }();
            },
            /*
             * @function：获取购物商品数量
             * @description：获取用户的购物车商品数量
             * 应用场景：任意
             * @param：domNode购物车数量节点；
             * @author：cdwanchuan@jd.com 2015-05-12
            */
            getCartNum : function(arg){
                var param = jQuery.extend({
                        nodeParent : '.s-cart .s-mt',
                        domNode : '.s-cart-num',
                        url : _INTERFACE.getCart//接口
                    },arg),
                    that = jQuery(param.nodeParent),
                    domNode = that.find(param.domNode);

                if(!domNode.length) return;

                //如果cookie里面有cn值 20151026徐阳
                var cn = readCookie('cn');
                if(cn){
                    domNode.html(cn);
                    return;
                }

                /* 获取数据 */
                var data = {
                    method : 'GetCart'
                };

                jQuery.ajax({
                    url : param.url.substring(0,param.url.indexOf('?')+1),
                    data : data,
                    dataType : 'jsonp',
                    jsonpCallback  : 'jsonp' + new Date().getTime(),
                    success : function(data){
                        domNode.html(data.Cart.Num);
                    }
                });
            },
            getJimi : function(arg){
                var param = jQuery.extend({
                        nodeParent : '.s-jimi',
                        nodeCon : '.s-list',
                        url : _INTERFACE.jimi//接口
                    },arg),
                    that = jQuery(param.nodeParent),
                    node_con = that.find(param.nodeCon);

                if(!node_con.length) return;
                node_con.html(param.url);
            },
            getIm : function(arg){
                var param = jQuery.extend({
                    nodeParent : '.s-im',
                    nodeCon : '.s-list',
                    url : _INTERFACE.im//接口
                },arg);

                jQuery('.im').trigger('click');
            }
        };
    }();


    /* 附属功能：关注、收藏、分享、返回顶部 */

    var pageExtra = function(){
        return {
            /* 关注：活动和店铺 */
            addFollow : function(){

            },
            /* 收藏：活动和店铺 */
            addFavorite : function(arg){
                var param = jQuery.extend({
                        nodeParent : '.s-extra-favorite',
                        title : document.title,
                        href : location.href
                    },arg),
                    that = jQuery(param.nodeParent),
                    TITLE = param.title,
                    HREF = encodeURIComponent(param.href);

                if(!that.length) return;

                if (document.all) {
                    window.external.AddFavorite(HREF, TITLE);
                } else if (window.sidebar) {
                    window.sidebar.addPanel(TITLE, HREF, "");
                } else {
                    alert("\u5bf9\u4e0d\u8d77\uff0c\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u6b64\u64cd\u4f5c!\n\u8bf7\u60a8\u4f7f\u7528\u83dc\u5355\u680f\u6216Ctrl+D\u6536\u85cf\u672c\u7ad9\u3002");
                }
            },
            /* 显示分享二维码：活动和店铺 */
            addShare : function(args){
                var param = jQuery.extend({
                    scope: '.s-extra-share',
                    iconQrCode : '.s-icon-extra-share',
                    qrCodeArea : '.s-share-area',
                    qrCode : '.qrPic',
                    urlText: '',
                    qrcJsImport : '//static.360buyimg.com/jshop/common/widget/qrCode/qrcode.min.js'
                }, args || {}),
                    _this = jQuery(param.scope),
                    iconQrCode = _this.find(param.iconQrCode),
                    qrcJsImport = param.qrcJsImport,
                    close = _this.find(param.close);

                //判断页面是否引入了二维码JS文件
                isQrcJsImport = typeof isQrcJsImport === "undefined"? false: isQrcJsImport;
                if (isQrcJsImport === false) {
                    isQrcJsImport = true;
                    jQuery.getScript(qrcJsImport, function (){});
                }

                // 判断当前页面是活动还是店铺
                switch(APPTYPE.TYPE) {
                    case 0:
                    case 2:
                        // 活动
                        param.urlText = window.location.href + '&qrcode=0&utm_campaign=t_1000001992_pchuodong&utm_source=&utm_medium=&utm_term=';
                        break;
                    case 1:
                    case 3:
                        // 店铺
                        param.urlText = getHttp()+'ok.jd.com/m/index-' + $('#shop_id').val() + '.html' + '&qrcode=1';
                        break;
                    default:
                        break;
                }

                // 鼠标移动到节点上显示二维码
                iconQrCode.bind('mouseover', function (e) {
                    createQrCode(_this);
                });

                //二维码主逻辑
                function createQrCode(dom){
                    var qrCodeArea = dom.find(param.qrCodeArea),
                        qrCode = qrCodeArea.find(param.qrCode),
                        urlText,
                        qrCodeText;
                    if(qrCode.html() === '') {
                        urlText = param.urlText.replace(/ /g, "");
                        qrCodeText = urlText;
                        new QRCode(qrCode[0], {
                            text: qrCodeText,
                            width: qrCode.width(),
                            height: qrCode.height()
                        });
                    }
                }
            },
            /* 返回顶部 */
            toTop : function(arg){
                jQuery('body,html').animate({scrollTop:0}, 800);
            },
            /* 3d店铺 */
            threeD : function(arg){
               if(jQuery('#use3DShop').attr('value') == 'true'){
                window.open(jQuery('#url3d').attr('value'));
               }
            }
        };
    }();



    /* 调用函数 */
    jQuery(function(){
        /* 初始化页面结构及CSS */
        jQuery('body').append('<link href="' + APPTYPE.CSSURL + '" rel="stylesheet" type="text/css" />',sidebarHtml);

        if(jQuery('.s-jd-toolbar').length > 0){
            /* 如果是ipad浏览器或者是ie6，则隐藏侧栏 */
            if (/ipad/i.test(navigator.userAgent) || (jQuery.browser.msie && (jQuery.browser.version == "6.0") && !jQuery.support.style)) {
                jQuery('.s-jd-toolbar').css('display','none');
            }else{
                setTimeout(function(){
                    jQuery('.s-jd-toolbar').removeAttr('style').addClass('s-show');
                } , 1000);
            }
        }

        /* 20151020 统一关注接口 依赖utils.js关注公共方法 */
        !function(){
            var _this = jQuery('.s-extra-attention');
             if(!_this.find('.s-mt').attr('data-id')){
                 _this.find('.s-mt').attr('data-id',(APPTYPE.TYPE === 1 || APPTYPE.TYPE === 3)? APPTYPE.SHOPID : APPTYPE.ID);
             }

            var args = {};
            args.attentType = (APPTYPE.TYPE == 0 || APPTYPE.TYPE == 2) ? 'activity' : 'vender';
            if(APPTYPE.TYPE == 0){
                args.activityType = 1;
            }
            if(APPTYPE.TYPE == 2){
                args.activityType = 0;
            }
            args.node = '.s-mt';
            args.dataId = 'data-id';
            args.dataState = 'data-state';
            args.dataType = 'data-type';
            args.current = 'current';

            _this.saleAttent(args);
        }();

        /* 获取广告位内容 */
        function getRightCon(){
            var appId,
                param = {
                    node : '.s-jd-toolbar',
                    iconList : '.s-icon-list',
                    iconExtra: '.s-icon-extra',
                    header : '.s-header',
                    className : 's-show',
                    smallScreen : 's-small-screen',
                    headerTitle : '.s-mt',
                    domNodeTitle : '.s-sale-title'
                },
                node = jQuery(param.node),
                iconList = node.find(param.iconList),
                iconExtra = node.find(param.iconExtra),
                header  = node.find(param.header),
                headerTitle = header.find(param.headerTitle);

            if(APPTYPE.TYPE == 0 || APPTYPE.TYPE == 2){
                getJshopAdvertise(); //获取广告位内容
            }

            /* 获取jshop里面配置的广告内容 */
            function getJshopAdvertise(){
                $.ajax({
                    url : SLD.actJshop + '/pcSidebarAd.html',
                    dataType : 'jsonp',
                    success : function(data){
                        if(data.data!=''){

                            $(data.data).appendTo('body');
                            var domNodeTitle = jQuery(param.domNodeTitle);
                            headerTitle.append(domNodeTitle);
                            header.addClass(param.className);
                            setListPosition();

                        }else{
                            //getAdvertiseId();
                        }
                    }
                });
            }

            /* 获取提报广告位ID
            function getAdvertiseId(){
                jQuery.ajax({
                    url : '//act.jshop.jd.com/adv.html',
                    data : {
                        appId :  APPTYPE.ID,
                        appType : APPTYPE.TYPE/2
                    },
                    dataType : 'jsonp',
                    success : function(data){
                        if(data.result){
                            var str = jQuery.trim(data.values);
                            if(str == '') return;
                            else{
                                appId = data.values;
                                getOtherAdvertise();
                            }
                        }
                    }
                });
            }*/

            /* 获取提报系统里面配置的广告内容
            function getOtherAdvertise(){
                $.ajax({
                    url : '//mg.jd.com/json/gateway/at_tempAd.action?tempId=' + appId,
                    dataType : 'jsonp',
                    success : function(data){
                        try{
                            if(data.success){
                                if(typeof data.rightContent != 'undefined' && data.rightContent != ''){
                                    $(data.rightContent).appendTo('body');

                                    var domNodeTitle = jQuery(param.domNodeTitle);
                                    headerTitle.append(domNodeTitle);
                                    header.addClass(param.className);
                                    setListPosition();
                                }
                            }
                        }
                        catch(e){}
                    }
                });
            }*/
        }
        getRightCon();

        /* 修改主图标列表位置 */
        function setListPosition(){
            var param = {
                node : '.s-jd-toolbar',
                iconList : '.s-icon-list',
                iconExtra: '.s-icon-extra',
                header : '.s-header',
                className : 's-show',
                smallScreen : 's-small-screen',
                headerTitle : '.s-mt',
                domNodeTitle : '.s-sale-title'
            },
                node = jQuery(param.node),
                iconList = node.find(param.iconList),
                iconExtra = node.find(param.iconExtra),
                header  = node.find(param.header),
                headerTitle = header.find(param.headerTitle),
                domNodeTitle = jQuery(param.domNodeTitle);

            var w = jQuery(window).width();
            if(w <= 1380 || screenSize == 2){
                node.addClass(param.smallScreen);
            }else{
                node.removeClass(param.smallScreen);
            }

            var top = (jQuery(window).height() - 100 - 370)/2;
            if(APPTYPE.TYPE == 1 || APPTYPE.TYPE == 3){
                top = (jQuery(window).height() - 113 - 370)/2;
                //iconExtra.addClass('s-current');
            }

            header.find('.s-mt').css({height:top});

            //如果有活动大促
            if(domNodeTitle.length){
                iconList.css({marginTop : 0});
            }else{
                top = top > 0 ? top : 0;
                iconList.css({marginTop : top});
            }
        }
        setListPosition();
        jQuery(window).resize(function(){
            setListPosition();
        });

        /* 显示返回顶部、3D店铺 */
        var showExtraIcon = function(){
            var param = {
                node : '.s-jd-toolbar',
                iconTotop : '.s-extra-totop',
                icon3d : '.s-extra-3d'
            },
                node = jQuery(param.node),
                iconTotop = node.find(param.iconTotop),
                icon3d = node.find(param.icon3d);

            jQuery(window).scroll(function(){
                var topPos = jQuery(this).scrollTop();
                if(topPos > 200){
                    iconTotop.show(300);
                }else{
                    iconTotop.hide(300);
                }
            });

            if(APPTYPE.TYPE == 1 || APPTYPE.TYPE == 3){
                setTimeout(function(){
                    //icon3d.show();  20151228星期一 去除3D店铺显示
                },1000);
            }
        }();


        /* 点击外侧收起侧栏 */
        jQuery(window).click(function(e){
            if($(e.target).closest('.s-jd-toolbar').length) return;

            var param = {
                currentIcon : '.s-icon-list>div.s-current .s-mt'
            }
            if(jQuery(param.currentIcon)){
                jQuery(param.currentIcon).trigger('click');
            }
        });


        /* 判断客服是否是在线或者可留言 */
        function showIm(arg){
            var param = jQuery.extend({
                nodeParent : '.s-im',
                nodeCon : '.s-list',
                defaultClass:'s-online',
                url : _INTERFACE.im//接口
            },arg);

            /* 获取数据 */
            var data = {
                shopId : APPTYPE.SHOPID
            };

            jQuery.ajax({
                url : param.url.substring(0,param.url.indexOf('?')+1),
                data : data,
                dataType : 'jsonp',
                success : function(data){
                    if(data.code != 0){
                        jQuery(param.nodeParent).show();
                    }
                    if (data.code == 1) {
                        jQuery(param.nodeParent).addClass(param.defaultClass);
                    }
                }
            });
        };

        //20151023星期五 江春志强烈要求自营店铺侧边栏去掉咚咚
        if(APPTYPE.TYPE == 1){
            showIm();
        }
        /*
        if(APPTYPE.TYPE == 1 || APPTYPE.TYPE == 3){
            showIm();
            if(APPTYPE.TYPE == 3){
                jQuery('.s-icon-im').addClass('s-self');
            }
        }*/

         /* tab切换 */
         !function tab(){
            var param = {
                node : '.s-attention',
                tabNode:'.s-tab a',
                tabContent:'.s-con .s-tab-con',
                defaultClass:'s-current',
                eventType : 'mouseenter'
            },
                node = jQuery(param.node),
                tabNode = node.find(param.tabNode),
                tabContent = node.find(param.tabContent),
                index = 0;


            //初始化结构
            tabNode.eq(0).addClass(param.defaultClass);
            tabContent.eq(0).addClass(param.defaultClass);

            //绑定鼠标移动事件
            tabNode.each(function(ind,n){
                $(n)[param.eventType](function(){
                    index = ind;
                    $(this).addClass(param.defaultClass).siblings().removeClass(param.defaultClass);
                    tabContent.eq(index).addClass(param.defaultClass).siblings().removeClass(param.defaultClass);
                });
            });
         }();

        /* 侧栏图标事件 */
        jQuery('.s-icon-list>div .s-mt').click(function(){
            var that = jQuery(this);

            //判断是否是客服
            if(that.hasClass('s-icon-im')){
                _function[that.parent().attr('data-widget')]();
                return;
            }

            //如果是展开状态
            if(that.parent().hasClass('s-current')){
                that.parent().removeClass('s-current');
                that.parents('.s-jd-toolbar').removeClass('s-current');
                setTimeout(function(){that.parent().find('.s-li-con').html('');that.parent().find('.check-more-coupon').remove();},300);//关闭时，CSS动画完成后清空数据
            }else{
                jQuery('.s-header, .s-icon-list>div').removeClass('s-current');
                that.parent().find('.s-page').remove();//图标切换时删除分页
                that.parent().find('.s-li-con').html('');
                that.parent().find('.check-more-coupon').remove();//图标切换时先清空数据
                that.parent().addClass('s-current');
                that.parents('.s-jd-toolbar').addClass('s-current');
                if(!that.hasClass('s-icon-header')){
                    login(that.parent());
                }else{
                    _function[that.parent().attr('data-widget')]();
                }
            }
         });

         /* 显示购物车数量 */
         sidebar.getCartNum();
         jQuery('.s-cart .s-mt').mouseenter(function(){
            sidebar.getCartNum();
         });

         /* 更多图标点击判断 */
         jQuery('.s-icon-extra>div .s-mt').click(function(){
            var that = jQuery(this);
            if(that.parent().hasClass('s-extra-attention')){
                login(that.parent());
            }else{
                _function[that.parent().attr('data-widget')]();
            }
         });
         pageExtra.addShare();//上面函数也会执行分享，这里分享不需要点击图标，所以也可立即执行


        /* 方法对象 */
        var _function = {
            's-header' : function(){sidebar.getHeader();},//获取我的广告位
            's-order' : function(){sidebar.getOrder();},//获取我的订单
            's-records' : function(){sidebar.getHistory();},//获取我的足迹
            's-coupon' : function(){sidebar.getCoupon();},//获取我的优惠券
            's-cart' : function(){sidebar.getCart();},//获取我的购物车
            's-attention' : function(){
                sidebar.getAttentionGoods();//获取我关注的商品
                sidebar.getAttentionMall();//获取我关注的店铺
                sidebar.getAttentionSale();//获取我关注的活动
            },
            's-jimi' : function(){sidebar.getJimi();}, //JIMI咨询
            's-im' : function(){sidebar.getIm();}, //在线客服
            's-extra-attention' : function(){pageExtra.addFollow();}, //关注
            's-extra-favorite' : function(){pageExtra.addFavorite();}, //收藏
            's-extra-share' : function(){pageExtra.addShare();}, //分享
            's-extra-totop' : function(){pageExtra.toTop();}, //返回顶部
            's-extra-3d' : function(){pageExtra.threeD();} //3d店铺
        }

        /* 验证登陆过程，成功则获取数据 */
        function login(that){
            if(jQuery('#testSidebar').val()){//临时测试JDF登录，店铺系统还未升级JDF
                thick_login(function(){
                    _function[that.attr('data-widget')]();
                 });
            }else{
                jQuery.extend(jdModelCallCenter,{
                    voteLogin:function(obj){
                        jQuery.login({
                            modal:true,
                            complete:function(c){
                                if(c&&c.IsAuthenticated){
                                    _function[that.attr('data-widget')]();
                                }
                            }
                        });
                    }
                });
                jQuery.extend(jdModelCallCenter.settings,{
                    object:this,
                    fn:function(){
                        jdModelCallCenter.voteLogin(this);
                    }
                });
                jdModelCallCenter.settings.fn();
            }
        }
    });
}(window, jQuery);

/*
 * @function: 简单模板渲染
 * @description：根据html模板及数据拼接html片段
 * 应用场景：任意
 * @param：
 * @author：cdzhengwujiang@jd.com 2015-01-07
 */
function renderHTML(tpl, data) {
    var subTpl = tpl,
        reg = /{([\w-_]+)}/,
        mArr;
    while (mArr = subTpl.match(reg)) {
        subTpl = subTpl.replace(reg, data[mArr[1]]);
    }
    return subTpl;
};

/*
 * @function：静态分页
 * @description：根据元素总数量及当前可显示数量生成静态分页
 * 应用场景：任意
 * @param：
 * @author：cdwanchuan@jd.com 2014-10-15
*/
function addPage(that, dom_node, args){
    var param = jQuery.extend({
        node : '.s-page',
        prev : '.s-prev',
        next : '.s-next',
        pageCon : '.s-page-area',//页码父级容器
        pageScroll : '.s-scroll',
        pageNode : 'a',
        eleLen : 1,//元素个数
        pageNum : 1,//每页显示数量
        siblingNode : null,
        className : 's-current'
     }, args || {});

    if(dom_node.length < 1){
        that.find('.s-tips').addClass(param.className);
        that.find('.s-list').css('background','none');
        return;
    }else{
        that.find('.s-tips').removeClass(param.className);
        that.find('.s-page').remove();
    }

    var totalLen = Math.ceil(param.eleLen / param.pageNum);//获取总页数

    /* 生成分页 */
    function createPage(){
        var oA = '<a href="javascript:void(0);">{i}</a>',
        html = '';
        for (var i = 1, len = totalLen; i <= len; i++) {
            html += oA.replace("{i}", i);
        }

        var pageHtml = '<div class="s-page"><div class="s-con"><span class="s-bg-left"></span><span class="s-prev"></span><div class="s-page-area"><div class="s-scroll">' + html + '</div></div><span class="s-more">...</span><span class="s-next"></span><span class="s-bg-right"></span></div></div>';

        that.find(param.siblingNode).after(pageHtml);
    }
    createPage();

    /* 箭头、页面容器数量、容器宽度定义 */
    var prev = that.find(param.node).find(param.prev),//上一个箭头
        next = that.find(param.node).find(param.next),//下一个箭头
        index = 0,
        pageNode = that.find(param.pageCon).find(param.pageNode),//页码节点
        pageConNum = 5,//页码容器可显示数量
        pageConW = (pageNode.length < pageConNum) ? pageNode.length * pageNode.outerWidth(true) :pageConNum *  pageNode.outerWidth(true),//页码容器宽度
        minIndex=0,maxIndex=Math.min(pageConNum,totalLen) - 1;

    that.find(param.pageCon).css('width', pageConW);//控制页码容器宽度


    /* 如果少于1页，则上下移动箭头不显示 */
    if(totalLen < 2){
        prev.hide();
        next.hide();
    }

    function domOperate(){
        pageNode.removeClass(param.className);
        pageNode.eq(index).addClass(param.className);

        //当页码数量大于z容器可显示宽度时，移动容器位置
        if(index > maxIndex){
            that.find(param.pageScroll).css('margin-left', -(index - pageConNum + 1)*pageNode.outerWidth(true));
            maxIndex = index;
            minIndex = index - pageConNum + 1;
        }
        else if(index < minIndex){
            that.find(param.pageScroll).css('margin-left', -index*pageNode.outerWidth(true));
            minIndex = index;
            maxIndex = index + pageConNum - 1;
        }
        else{

        }
        showData();
    }

    /* 显示当前页数据 */
    function showData(){
        dom_node.removeClass(param.className);
        for(var i = index*param.pageNum; i <= index*param.pageNum +param.pageNum - 1; i+=1){
            dom_node.eq(i).addClass(param.className);
        }
    }

    /* 点击下一页 */
    next.click(function(){
        if((index+1) == pageNode.length) {return;};
        index +=1;
        domOperate();
    });
    /* 点击下一页 */
    prev.click(function(){
        if(index == 0) {return;};
        index -=1;
        domOperate();
    });

    /* 页码事件绑定及第一页初始化 */
    pageNode.each(function(i,e){
        jQuery(e).click(function(){
            index = i;
            domOperate();
            if(index == 0){
                that.find(param.node).addClass(param.className)
            }
        });
    });
    pageNode.eq(index).trigger('click');
}

/* 时间戳转日期格式 */
Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1,//month
        "d+": this.getDate(),//day
        "h+": this.getHours(),//hour
        "m+": this.getMinutes(),//minute
        "s+": this.getSeconds(),//second
        "q+": Math.floor((this.getMonth() + 3) / 3),//quarter
        "S": this.getMilliseconds() //millisecond
    };

    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
};
/* example
var testDate = new Date(1320336000000); //这里必须是整数，毫秒
var testStr = testDate.format("yyyy年MM月dd日hh小时mm分ss秒");
var testStr2 = testDate.format("yyyyMMdd hh:mm:ss");
alert(testStr + " " + testStr2);
*/

