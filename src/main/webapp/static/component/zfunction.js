/**
 * 通用函数封装
 */
var $_fn = (function(){

    /**
     * get 请求封装
     * @param url
     * @param data
     * @param successCb
     * @param dataType
     * demo:<br/>
     * 1:
     * $_fn.get('https://www.baidu.com');
     * 2:
     * $_fn.get('https://www.baidu.com',{param:'22'});
     *
     */
    function get(url,data,successCb,dataType){
        var _data = {showLoading:true};
        var _suCb = successCb;
        var _loaing = true;
        var endLoad = false;

        if((arguments.length == 2 && !(typeof _data == 'function')) || arguments.length > 2 ){
            _data = $.extend(_data,data||{});
            console.log(_data)
            _loaing = _data.showLoading;
            delete _data.showLoading;
        }

        if(_loaing){
            $_popup.showLoading()
        }

        if(arguments.length == 1){
            $.get(url);
            endLoad = true;
        }
        if(arguments.length == 2){
            if(typeof _data == 'function'){
                _suCb = data;
                $.get(url, function(res){
                        _loaing && $_popup.hideLoading();
                        _suCb && _suCb(res);
                    });
            }else{
                //忽略 回调
                $.get(url,data);
                endLoad = true;
            }
        }

        if(arguments.length == 3){
            $.get(url, _data,function(res){
                _loaing && $_popup.hideLoading();
                _suCb && _suCb(res);
            });
        }

        if(arguments.length == 4){
            $.get(url, _data,function(res){
                _loaing && $_popup.hideLoading();
                _suCb && _suCb(res);
            },dataType);
        }

        if(endLoad && _loaing){
            $_popup.hideLoading();
        }
    }
    /**
     * ajax请求封装
     * @param params    jQuery ajax处回调以外的参数设置
     * @param successCb 成功回调
     * @param errorCb   失败回调
     * demo:<br/>
     * //普通的异步请求下 只传 url地址即可
     * $_fn.ajax({
     *      url:'xxxxxx',
     *      async:false, //默认为异步true
     *      showLoading:false,//不传或者传false 则有遮罩
     * },function(data){
     *     console.log('成功回调',data)
     * })
     */
    function ajax(params,successCb,errorCb){
        //默认参数
        var _defaultParam = {
            type:'POST',
            showLoading:true, //默认请求数据有遮罩
            async:true, //默认值: true。默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为 false。
            cache:false,//默认值: true，dataType 为 script 和 jsonp 时默认为 false。设置为 false 将不缓存此页面
            dataType:'JSON'
        };

        _defaultParam = $.extend(_defaultParam,params);

        var loadFlag = _defaultParam.showLoading;
        //loading
        loadFlag && $_popup.showLoading();

        //成功回调
        _defaultParam.success = function(result){
            if (typeof successCb == 'function') {
                successCb(result);
            }
        };

        _defaultParam.error = function(er){
            $_popup.alert('"请求发送失败或服务器处理失败"');
            if (typeof errorCb == 'function') {
                errorCb(er);
            }
        };

        _defaultParam.beforeSend = function(XHR){
            var sts = new Date().getTime();
            var url = _defaultParam.url;
            //console.log('33333333333,url')
            url = url ? (url.indexOf('?')>-1 ? url + '&_t='+ sts : url + '?_t='+sts):url;
            _defaultParam.url = url;
        }

        _defaultParam.complete = function(XHR, TS){
            //end loading
            loadFlag && $_popup.hideLoading();
        };

        $.ajax(_defaultParam);
    }

    /**
     * easyui 公用数据过滤
     * @param data
     * @returns {*}
     */
    function gridLoadFilter(data){
        //判断 data 非数组下执行
        if(!(data instanceof Array)) {
            //后台没有返回的rows节点情况下执行
            if(typeof data.rows === 'undefined'){
                data.rows = data.list||[];
            }
        }
        return data;
    }
    
    return {
        gridLoadFilter:gridLoadFilter,
        ajax:ajax
    }
})();


/*----pupop 提示对象----*/
var $_popup = (function(){

    /**
     * 提示内容
     * @param msg
     * demo:<br/>
     * $_popup.alert('成功了')
     */
    function alert(msg){
        parent.layer.alert(msg,{
            skin:'layui-layer-molv'
        })
    }

    /**
     * 确认询问框
     * @param msg      提示询问文案
     * @param options  参数对象
     * @param okCb     确认回调
     * @param cancelCb 取消回调
     * demo:<br/>
     * 1: $_popup.confirm('是否删除?',function(){
     *      console.log('确认回调')
     * },function(){
     *      console.log('取消回调')
     * })
     *
     * 2: $_popup.confirm('是否删除?',{
     *      btn:['ok','cancel'],
     *      title:'删除单据'
     * },function(){
     * })
     */
    function confirm(msg,options,okCb,cancelCb){
        var _tempOkCb = okCb;
        var _tempCancelCb = cancelCb;
        var _defaultOptions = {
            btn: ['确定','取消'],           //按钮
            shade: true,                   //false 不显示遮罩,
            title:'确认',                   //弹框标题
            shadeClose: true,              //点击遮罩关闭弹框 默认true
            shade: 0.5,                     //遮罩透明度 默认1是 全黑  支持[0.1,'#fff']
            skin:'layui-layer-molv'         //皮肤 即样式
        };

        //如果不传 options 即options为回调时
        if(typeof options == 'function'){
            _tempOkCb = options;
            _tempCancelCb = arguments.length > 2 ? okCb : null;
        }else if(typeof options == 'object'){
            _defaultOptions = $.extend(_defaultOptions,options)
        }

        //询问框
        parent.layer.confirm(msg, _defaultOptions, function(){
            _tempOkCb&&_tempOkCb()
        }, function(){
            _tempCancelCb&&_tempCancelCb()
        });
    }

    /**
     * toast提示
     * @param type  toast提示类型 0(success) 1(info) 2(warning) 3(error)
     * @param msg   toast提示内容
     * @param title  默认不传
     */
    function toast(type,msg,title){
        var _type = type;
        var _msg = msg;
        if(arguments.length == 1){
            _type = 0;
            _msg = type;
        }
        var typeList=['success','info','warning','error']

        toastr.options = {
            "closeButton": true,
            "debug": false,
            "progressBar": true,
            "positionClass": "toast-top-right",
            "showDuration": "400",
            "hideDuration": "1000",
            "timeOut": "7000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
        toastr[typeList[_type||0]]("", _msg)

    }

    /**
     * loading 遮罩 显示
     */
    function showLoading(){
        //loading层
        parent.layer.load(1, {
            shade: 0.5   //[0.5,'#000'] //0.1透明度的白色背景
        });
    }

    /**
     *  loading 遮罩关闭
     */
    function hideLoading(){
        parent.layer.closeAll('loading')
    }

    function dialog(param){
        //http://www.layui.com/doc/modules/layer.html

        //默认参数
        var _defaultParam = {
            type:1,   //0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）
            area: 'auto',//['500px', '300px'],
            title: param.title,
            closeBtn:1,
            skin:'component-select', //class 样式名
            shadeClose:false, // 点击遮罩关闭弹窗  默认false
            success:function(layer,index){
                param.onOpen &&  param.onOpen(layer,index)
            },
            end:function(){
                param.onClose &&  param.onClose()
            },
            cancel: function(index, layero){
                return true;
            },
            content:param.content
        };

        /*有 href 则是 frame层*/
        if(param.href){
            _defaultParam.type = 2;
            _defaultParam.content = param.href;
        }
        /*高宽*/
        if(param.width){
            _defaultParam.area = parseFloat(param.width)+'px';
        }
        if(param.height){
            _defaultParam.area = parseFloat(param.height)+'px';
        }
        if(param.width && param.height){
            _defaultParam.area = [parseFloat(param.width)+'px',parseFloat(param.height)+'px'];
        }

        //覆盖 原有的关闭 回调事件
        if(param.onBeforeClose){
            _defaultParam.cancel = param.onBeforeClose
        }

        return parent.layer.open(_defaultParam);
    }

    /**
     * 关闭 layer
     */
    function close(){
        parent.layer.closeAll(); //疯狂模式，关闭所有层
    }

    return {
        alert:alert,
        confirm:confirm,
        toast:toast,
        dialog:dialog,
        close:close,
        showLoading:showLoading,
        hideLoading:hideLoading
    }
})();

// 数组是否包含某个元素
Array.prototype.contains = function (value) {
    for (i in this) {
        if (this[i] == value) return true;
    }
    return false;
};

//实现字符串占位format
String.prototype.format = function() {
	if (arguments.length == 0)
		return this;
	for (var s = this, i = 0; i < arguments.length; i++) {
		s = s.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);
	}
	return s;
};

/**
 * form表单序列化为json对象
 */
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};