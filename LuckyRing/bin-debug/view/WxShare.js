var WxShare = (function (_super) {
    __extends(WxShare, _super);
    function WxShare() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=WxShare,p=c.prototype;
    p.onAddToStage = function (evt) {
        this.loadScript('http://res.wx.qq.com/open/js/jweixin-1.0.0.js', function () {
            // this.loadScript('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx8d54578297ea2a5b&secret=f494b578d16db6f1283aab0c29c96ff0',function() {
            /*    $.ajax({
                    type: 'get',
                    url: "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx8d54578297ea2a5b&secret=f494b578d16db6f1283aab0c29c96ff0",
                    dataType: 'jsonp',
                    headers: {
                        'Access-Control-Allow-Origin': "api.weixin.qq.com"
                    },
                    success: function (json) {
                        var _json = JSON.parse(json)
                        access_token = json.access_token;
                    }
                });*/
            /*
                        var ifr = document.createElement('iframe');
                        ifr.style.display = 'none';
                        ifr.src = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx8d54578297ea2a5b&secret=f494b578d16db6f1283aab0c29c96ff0';
                        document.body.appendChild(ifr);
                        document.domain =  "192.168.21.84";
                        ifr.onload = function(){
                            debugger
                        }*/
            /*var request = new egret.HttpRequest();
            request.responseType = egret.HttpResponseType.TEXT;
            request.open("https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx8d54578297ea2a5b&secret=f494b578d16db6f1283aab0c29c96ff0",egret.HttpMethod.GET);
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            request.send();*/
            /*var urlreq:egret.URLRequest = new egret.URLRequest();
            this.urlloader = new egret.URLLoader();
            this.urlloader.dataFormat = egret.URLLoaderDataFormat.VARIABLES;
            urlreq.requestHeaders =
            this.urlloader.load(urlreq);*/
            /*  $.ajax({
                  type: 'get',
                  url: "https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=wZbvokpUiY8xFneH65K5S5wbw0Yc_Dd8eFCt_otDOztKDHtlyFIfEyKvQP8_7hTm9h0HudPxPMLInZrRZsYd_HqQSEMybN1RlQ4Va-h7b24POFcAEAJIZ&type=jsapi",
                  dataType: 'jsonp',
                  jsonp: 'jsoncallback',
                  success: function (json) {
                      var _json = JSON.parse(json)
                  }
              });
              wx.config(
                  {
                      debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                      appId: 'wx8d54578297ea2a5b', // 必填，公众号的唯一标识
                      timestamp: '', // 必填，生成签名的时间戳
                      nonceStr: '', // 必填，生成签名的随机串
                      signature: '',// 必填，签名，见附录1
                      jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                  }
              );
              wx.ready(function () {
                  var shareData = {
                      title: "",
                      desc: "",
                      link: "",
                      imgUrl: "",
                      success: function () {
                      },
                      cancel: function () {
                      }
                  }
                  //alert(shareData.desc);
                  wx.onMenuShareAppMessage(shareData);
                  wx.onMenuShareTimeline(shareData);
              });*/
            //}.bind(this));
        }.bind(this));
    };
    p.loadScript = function (url, callback) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        if (script.readyState) {
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        }
        else {
            script.onload = function () { callback(); };
        }
        document.body.appendChild(script);
    };
    p.jsApiShare = function (title, desc, img, url) {
    };
    p.WXshare = function (title, url, desc, img) {
        /*var a = navigator.userAgent;
        if(a.indexOf('MicroMessenger')>-1){
            var _match = a.match(/MicroMessenger\/([0-9\.]+)/);
            var version = _match[1];
            if(version>'6'){
                jsApiShare(title,desc,img,url);
            }
            else{
                shareApiOld(title,desc,img,url);
            }
        }*/
    };
    return WxShare;
})(egret.Sprite);
egret.registerClass(WxShare,'WxShare');
