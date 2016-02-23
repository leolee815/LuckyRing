var GameRuleView = (function (_super) {
    __extends(GameRuleView, _super);
    function GameRuleView() {
        _super.call(this);
        this.closeContain = new egret.Shape();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=GameRuleView,p=c.prototype;
    p.onAddToStage = function (evt) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        var gameRuleView = new egret.Bitmap();
        gameRuleView.texture = RES.getRes("gameRuleView");
        gameRuleView.width = 450;
        gameRuleView.height = 350;
        gameRuleView.x = this.stage.stageWidth / 2 - gameRuleView.width / 2;
        gameRuleView.y = this.stage.stageHeight / 2 - gameRuleView.height / 2 - 30;
        this.addChild(gameRuleView);
        this.closeContain.graphics.beginFill(0x000000);
        this.closeContain.alpha = 0;
        this.closeContain.graphics.drawRect(415, 495, 50, 50);
        this.closeContain.graphics.endFill();
        this.addChild(this.closeContain);
    };
    return GameRuleView;
})(egret.Sprite);
egret.registerClass(GameRuleView,'GameRuleView');
