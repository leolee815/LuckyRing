var GameEndView = (function (_super) {
    __extends(GameEndView, _super);
    function GameEndView() {
        _super.call(this);
        this.texttop = new egret.TextField;
        this.textMon = new egret.TextField;
        this.textMiddle = new egret.TextField;
        this.textMiddle1 = new egret.TextField;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=GameEndView,p=c.prototype;
    p.onAddToStage = function (evt) {
        var gameEndView = new egret.Bitmap();
        gameEndView.texture = RES.getRes("gameEndView");
        gameEndView.width = 220;
        gameEndView.height = 300;
        gameEndView.x = this.stage.stageWidth / 2 - gameEndView.width / 2;
        gameEndView.y = 100;
        this.addChild(gameEndView);
        var gameDiv = document.getElementById("gameDiv");
        var myImgWidth = 135;
        var myImgHeight = 135;
        var myImgPercent_width = Math.floor((myImgWidth / this.stage.stageWidth) * 100);
        var myImgPercent_height = Math.floor((myImgHeight / this.stage.stageHeight) * 100);
        this.gameDiv = document.getElementById("gameDiv");
        this.myImg = document.createElement("img");
        this.myImg.id = "img_code";
        this.myImg.src = "resource/assets/qrCode.png"; //"http://1.moyomoyo.sinaapp.com/Qr-code.png";
        this.myImg.style.width = myImgPercent_width + "%";
        this.myImg.style.height = myImgPercent_height + "%";
        this.myImg.style.position = "absolute";
        this.myImg.style.left = (50 - myImgPercent_width / 2) + "%";
        this.myImg.style.top = (100 - myImgPercent_height - myImgPercent_height / 3 * 2) + "%";
        gameDiv.appendChild(this.myImg);
        //页面移除的时候 也移除IMG标签
        //gameDiv.removeChild(myImg);
        /*var qrCode:egret.Bitmap = new egret.Bitmap();
        qrCode.texture = RES.getRes("qrCode");
        qrCode.width = 140;
        qrCode.height = 140;
        qrCode.x = this.stage.stageWidth/2 - qrCode.width/2;
        qrCode.y = 540;
        this.addChild(qrCode);*/
        /*
                qrCode.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                    wx.scanQRCode({
                        needResult: 1,
                        desc: 'scanQRCode desc',
                        success: function (res) {
                            alert(JSON.stringify(res));
                        }
                    });
                })*/
        this.textMon.text = egret.localStorage.getItem("money");
        this.textMon.size = 25;
        this.textMon.border = true;
        this.textMon.textColor = 0xffffff;
        this.textMon.fontFamily = "黑体";
        this.textMon.x = this.stage.stageWidth / 2 + 12;
        this.textMon.y = 142;
        this.texttop.text = "恭喜您!获得" + this.textMon.text + "元红包";
        this.texttop.size = 25;
        this.texttop.textColor = 0xffffff;
        this.texttop.fontFamily = "黑体";
        this.texttop.x = this.stage.stageWidth / 2 - this.texttop.width / 2;
        this.texttop.y = 140;
        this.addChild(this.texttop);
        this.textMiddle.text = egret.localStorage.getItem("money") + "元";
        this.textMiddle.size = 29;
        this.textMiddle.bold = true;
        this.textMiddle.textColor = 0xfdfc10;
        this.textMiddle.fontFamily = "黑体";
        this.textMiddle.x = this.stage.stageWidth / 2 - this.textMiddle.width / 2;
        this.textMiddle.y = 270;
        this.addChild(this.textMiddle);
        if (egret.localStorage.getItem("money") == "0") {
            this.textMiddle1.text = "";
        }
        else {
            this.textMiddle1.text = egret.localStorage.getItem("copon");
        }
        this.textMiddle1.size = 17;
        this.textMiddle1.textColor = 0xfdfc10;
        this.textMiddle1.fontFamily = "黑体";
        this.textMiddle1.x = this.stage.stageWidth / 2 - this.textMiddle1.width / 2;
        this.textMiddle1.y = 300;
        this.addChild(this.textMiddle1);
        this.ruleBtn = this.createBtn(75, 430, 150, 40, "红包使用规则", 15);
        this.replayBtn = this.createBtn(260, 430, 150, 40, "再玩一次", 35);
        this.shareBtn = this.createBtn(195, 480, 85, 40, "分享", 23);
        this.followBtn = this.createBtn(95, this.stage.stageHeight - 70, 290, 40, "关注公众号查看店铺位置兑奖", 15);
        this.shareView = new egret.Bitmap();
        this.shareView.texture = RES.getRes("shareView");
        this.shareView.width = this.stage.stageWidth;
        this.shareView.height = this.stage.stageHeight;
        this.shareView.touchEnabled = true;
        this.shareView.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            this.removeChild(this.shareView);
        }, this);
        this.shareBtn.touchEnabled = true;
        this.shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            this.addChild(this.shareView);
        }, this);
        this.followBtn.touchEnabled = true;
        this.followBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            window.open("http://mp.weixin.qq.com/s?__biz=MjM5NDE4NjA3Mg==&mid=201308273&idx=1&sn=2e2ac414cc9acceea8cfe38f7c1bb978&scene=1&srcid=0129xIsodLI51QbUO67Toysu&from=singlemessage&isappinstalled=0#wechat_redirect");
        }, this);
    };
    p.createBtn = function (x, y, width, height, text, paddin) {
        var paddingX = paddin || 15;
        var containBtn = new egret.Sprite();
        containBtn.graphics.beginFill(0xffffff);
        containBtn.graphics.drawRoundRect(x, y, width, height, 15, 15);
        containBtn.graphics.endFill();
        this.addChild(containBtn);
        var gameBtn = new egret.TextField();
        gameBtn.text = text;
        gameBtn.textColor = 0xd00000;
        gameBtn.size = 20;
        gameBtn.backgroundColor = 0x000000;
        gameBtn.x = x + paddingX;
        gameBtn.y = y + 10;
        gameBtn.fontFamily = "黑体";
        containBtn.addChild(gameBtn);
        return containBtn;
    };
    return GameEndView;
})(egret.Sprite);
egret.registerClass(GameEndView,'GameEndView');
