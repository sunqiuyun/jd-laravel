/**
 * Created by luxingyuan on 2015/7/3.
 */

(function(){

    //页面加载JS队列
    var SCRIPT_QUEUE = [
                "{{MODULE_SCRIPT}}",
                "{$}script/module/ParseSdkScript.js"
            ],

        //模块依赖JS，兼容老的模块依赖标签返回格式
        MODULE_SCRIPT = "",

        //只对限定域名下进行请求合并
        COMBO_DOMAIN = "static.360buyimg.com",

        //资源路径
         RESOURCE_PATH = $("#resourcePath").val(),

        //时间戳
        TIMESTAMP = $("#timestamp").val();

    //把模块依赖JS插入到ParseSdkScript之前，确保公共方法执行前，都已经进行方法的声明
    concatModuleScript();

    //配置sea相关规则
    seajs.config({
        map: [[/.*?\{\$\}/, RESOURCE_PATH]],
        //请求合并规则控制
        comboSyntax: ["??", ","],
        comboExcludes: function(uri) {
            //只针对指定域名下的资源地址进行请求合并
            if (uri.indexOf(COMBO_DOMAIN) > 0) {
                return false;
            }
        },
        //合并后请求时间戳控制
        comboTimestamp: TIMESTAMP
    });

    //加载队列JS
    seajs.use(SCRIPT_QUEUE);

    /**
     * 把模块依赖JS合并到待加载JS队列中
     */
    function concatModuleScript(){
        var moduleScriptIndex =  -1;
        for(var i = 0; i < SCRIPT_QUEUE.length; i++){
            if(SCRIPT_QUEUE[i] === "{{MODULE_SCRIPT}}"){
                moduleScriptIndex = i;
                break;
            }
        }
        var scriptStr = $("#moduleScript").val();
        if(scriptStr){
            MODULE_SCRIPT = $("#moduleScript").val().match(/js=(.*)&t/)[1].replace(/\/script/g, "{$}script")
        }
        if(MODULE_SCRIPT){
            if(!~MODULE_SCRIPT.indexOf(",")){
                SCRIPT_QUEUE[moduleScriptIndex] = MODULE_SCRIPT;
            }else{
                SCRIPT_QUEUE = SCRIPT_QUEUE.slice(0, moduleScriptIndex).concat(MODULE_SCRIPT.split(",")).concat(SCRIPT_QUEUE.slice(moduleScriptIndex + 1));
            }
        }else{
            SCRIPT_QUEUE.splice(moduleScriptIndex, 1);
        }
    }

})();


