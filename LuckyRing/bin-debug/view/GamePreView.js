var GamePreView = (function (_super) {
    __extends(GamePreView, _super);
    function GamePreView() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=GamePreView,p=c.prototype;
    p.onAddToStage = function (evt) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        var bg = new egret.Bitmap();
        bg.texture = RES.getRes("preview");
        bg.width = 260;
        bg.height = 400;
        bg.x = this.stage.stageWidth / 2 - bg.width / 2;
        bg.y = this.stage.stageHeight / 2 - bg.height / 2;
        this.addChild(bg);
        this.enterGame = new egret.Bitmap();
        this.enterGame.texture = RES.getRes("enterGame");
        this.enterGame.width = 142;
        this.enterGame.height = 84;
        this.enterGame.x = this.stage.stageWidth / 2 - this.enterGame.width / 2;
        this.enterGame.y = this.stage.stageHeight / 2 - this.enterGame.height / 2 + 80;
        this.addChild(this.enterGame);
    };
    return GamePreView;
})(egret.Sprite);
egret.registerClass(GamePreView,'GamePreView');
