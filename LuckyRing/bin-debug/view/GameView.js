var GameView = (function (_super) {
    __extends(GameView, _super);
    function GameView() {
        _super.call(this);
        this.speed = 2;
        this.radius = 143;
        this.degree = 0;
        this.times = 0;
        this.money = 0;
        this.textMoney = new egret.TextField;
        this.shp1 = new egret.Shape;
        this.gameViewBg = new egret.Bitmap();
        this.addOne = new egret.TextField();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=GameView,p=c.prototype;
    p.onAddToStage = function (evt) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.gameViewBg.texture = RES.getRes("gameViewBg");
        this.gameViewBg.width = 450;
        this.gameViewBg.height = 500;
        this.gameViewBg.x = this.stage.stageWidth / 2 - this.gameViewBg.width / 2;
        this.gameViewBg.y = this.stage.stageHeight / 2 - this.gameViewBg.height / 2;
        this.addChild(this.gameViewBg);
        var textNum = new egret.TextField();
        textNum.text = "累计金额";
        textNum.size = 25;
        textNum.fontFamily = "黑体";
        textNum.x = this.stage.stageWidth - 140;
        textNum.y = 70;
        this.addChild(textNum);
        this.addOne.text = "+1";
        this.addOne.size = 50;
        this.addOne.textColor = 0xD1090F;
        this.addOne.bold = true;
        this.addOne.fontFamily = "黑体";
        this.addOne.x = this.stage.stageWidth / 2 - 30;
        this.addOne.y = 240;
        this.addOne.alpha = 0;
        this.addChild(this.addOne);
        this.createMoney();
        this.monkeyRing = new egret.Bitmap();
        this.monkeyRing.texture = RES.getRes("monkeyring");
        this.monkeyRing.width = 260;
        this.monkeyRing.height = 140;
        this.monkeyRing.anchorOffsetX = 130;
        this.monkeyRing.anchorOffsetY = 70;
        this.monkeyRing.x = this.stage.stageWidth / 2;
        this.monkeyRing.y = this.stage.stageHeight / 2 - 27;
        this.addChild(this.monkeyRing);
        this.monkeyRing.addEventListener(egret.Event.ENTER_FRAME, this.enterFrameHandle, this);
        this.createCo();
        egret.localStorage.setItem("money", "0");
        egret.localStorage.setItem("times", "0");
    };
    p.enterFrameHandle = function () {
        this.monkeyRing.rotation += this.speed;
    };
    p.createCo = function () {
        this.shp = new egret.Shape;
        this.centerX = this.stage.stageWidth / 2;
        this.centerY = this.stage.stageHeight / 2 - 27;
        this.degree = Math.random() * 360;
        this.co = new egret.Bitmap();
        this.co.texture = RES.getRes("co");
        this.co.width = 65;
        this.co.height = 30;
        var pt = egret.Point.polar(this.radius, this.degree * Math.PI / 180);
        this.co.x = this.centerX + pt.x;
        this.co.y = this.centerY + pt.y;
        this.co.rotation = this.degree + 10;
        this.creatept1();
        this.addChild(this.co);
    };
    p.creatept1 = function () {
        var pt1 = egret.Point.polar(this.radius, (this.degree + 10) * Math.PI / 180);
        this.shp.graphics.beginFill(0xf000000);
        this.shp.alpha = 0;
        this.shp.graphics.drawCircle(this.centerX + pt1.x, this.centerY + pt1.y, 15);
        this.shp.graphics.endFill();
        this.shp.width = 140;
        this.shp.height = 140;
        this.addChild(this.shp);
    };
    p.creatept2 = function () {
        var pt2 = egret.Point.polar(135, (this.monkeyRing.rotation + 25) * Math.PI / 180);
        var point = {
            x: this.centerX + pt2.x,
            y: this.centerY + pt2.y
        };
        return point;
    };
    p.createMoney = function () {
        this.textMoney.text = "¥" + this.money;
        this.textMoney.size = 30;
        this.textMoney.bold = true;
        this.textMoney.fontFamily = "黑体";
        this.textMoney.x = this.stage.stageWidth - 120;
        this.textMoney.y = 100;
        this.addChild(this.textMoney);
    };
    return GameView;
})(egret.Sprite);
egret.registerClass(GameView,'GameView');
