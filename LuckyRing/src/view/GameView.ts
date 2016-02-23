class GameView extends egret.Sprite {
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);

    }

    public speed:number = 2;
    public centerX:number;
    public centerY:number;
    public radius:number = 143;
    public degree: number = 0;
    public times: number = 0;
    public monkeyRing:egret.Bitmap;
    public co:egret.Bitmap;
    public money:number = 0;
    public textMoney:egret.TextField = new egret.TextField;
    public shp:egret.Shape;
    public shp1:egret.Shape = new egret.Shape;
    public gameViewBg:egret.Bitmap = new egret.Bitmap();
    public addOne:egret.TextField = new egret.TextField();



    private onAddToStage(evt:egret.Event):void {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);


        this.gameViewBg.texture = RES.getRes("gameViewBg");
        this.gameViewBg.width = 450;
        this.gameViewBg.height = 500;
        this.gameViewBg.x = this.stage.stageWidth/2 - this.gameViewBg.width/2;
        this.gameViewBg.y = this.stage.stageHeight/2 - this.gameViewBg.height/2;
        this.addChild(this.gameViewBg);

        var textNum:egret.TextField = new egret.TextField();
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
        this.addOne.x = this.stage.stageWidth/2 - 30;
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
        this.monkeyRing.x = this.stage.stageWidth/2;
        this.monkeyRing.y = this.stage.stageHeight/2 - 27;
        this.addChild(this.monkeyRing);
        this.monkeyRing.addEventListener(egret.Event.ENTER_FRAME,this.enterFrameHandle,this);
        this.createCo();
        egret.localStorage.setItem("money", "0");
        egret.localStorage.setItem("times", "0");

    }
    public enterFrameHandle () {
        this.monkeyRing.rotation += this.speed;
    }
    public createCo () {
        this.shp = new egret.Shape;
        this.centerX = this.stage.stageWidth/2;
        this.centerY =  this.stage.stageHeight/2 - 27;
        this.degree = Math.random()*360;
        this.co = new egret.Bitmap();
        this.co.texture = RES.getRes("co");
        this.co.width = 65;
        this.co.height = 30;
        var pt: egret.Point = egret.Point.polar(this.radius,this.degree * Math.PI / 180);
        this.co.x = this.centerX + pt.x;
        this.co.y = this.centerY + pt.y;
        this.co.rotation = this.degree + 10;
        this.creatept1();
        this.addChild(this.co);
    }
    public creatept1() {
        var pt1: egret.Point = egret.Point.polar(this.radius,(this.degree +10)* Math.PI / 180);
        this.shp.graphics.beginFill( 0xf000000 );
        this.shp.alpha = 0;
        this.shp.graphics.drawCircle( this.centerX + pt1.x, this.centerY + pt1.y, 15);
        this.shp.graphics.endFill();
        this.shp.width = 140;
        this.shp.height = 140;
        this.addChild( this.shp );
    }
    public creatept2() {
        var pt2: egret.Point = egret.Point.polar(135,(this.monkeyRing.rotation+25)* Math.PI / 180);
        var point = {
            x:this.centerX + pt2.x,
            y:this.centerY +pt2.y
        }
        return point;
    }
    private  createMoney () {
        this.textMoney.text = "¥" + this.money;
        this.textMoney.size = 30;
        this.textMoney.bold = true;
        this.textMoney.fontFamily = "黑体";
        this.textMoney.x = this.stage.stageWidth - 120;
        this.textMoney.y = 100;
        this.addChild(this.textMoney);
    }

}
