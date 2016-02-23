var GameIntroductionView = (function (_super) {
    __extends(GameIntroductionView, _super);
    function GameIntroductionView() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=GameIntroductionView,p=c.prototype;
    p.onAddToStage = function (evt) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        var introduce = new egret.Bitmap();
        introduce.texture = RES.getRes("introduce");
        introduce.width = 400;
        introduce.height = 400;
        introduce.x = this.stage.stageWidth / 2 - introduce.width / 2;
        introduce.y = this.stage.stageHeight / 2 - introduce.height / 2 - 80;
        this.addChild(introduce);
        this.startGame = new egret.Bitmap();
        this.startGame.texture = RES.getRes("startgame");
        this.startGame.width = 142;
        this.startGame.height = 84;
        this.startGame.x = this.stage.stageWidth / 2 - this.startGame.width / 2;
        this.startGame.y = this.stage.stageHeight / 2 - this.startGame.height / 2 + 230;
        this.addChild(this.startGame);
    };
    return GameIntroductionView;
})(egret.Sprite);
egret.registerClass(GameIntroductionView,'GameIntroductionView');
