//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends egret.DisplayObjectContainer {

    /**
     * 加载进度界面
     * Process interface loading
     */
    private loadingView:LoadingUI;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event:egret.Event) {
        //设置加载进度界面
        //Config to load process interface
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);

        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/data.json", "resource/");
    }

    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    private onConfigComplete(event:RES.ResourceEvent):void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
        RES.loadGroup("soundload",1);
    }

    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.createGameScene();
        }
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onItemLoadError(event:RES.ResourceEvent):void {
        console.warn("Resourse has failed to load");
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onResourceLoadError(event:RES.ResourceEvent):void {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    }

    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    private onResourceProgress(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }

    public  preView:GamePreView;
    public  gameIntroduceView:GameIntroductionView;
    public  gameView:GameView;
    public  gameEndView:GameEndView;
    public  gameRuleView:GameRuleView;
    public  WxShare:WxShare;
    public  sound:egret.Sound;
    private bgChannel: egret.SoundChannel;

    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene():void {
        //添加背景音乐
        var sound = new egret.Sound();
        sound = RES.getRes("sound");
        sound.type = egret.Sound.MUSIC;
        this.bgChannel = sound.play(0,0);

        //加载游戏背景
        var gameBg = new egret.Sprite();
        gameBg.graphics.beginFill(0xD1090F);
        gameBg.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
        gameBg.graphics.endFill();
        this.addChild(gameBg);

        var gameBg = new egret.Sprite();
        gameBg.graphics.beginFill(0xD1090F);
        gameBg.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
        gameBg.graphics.endFill();
        this.addChild(gameBg);

        var yRound = this.createBitmapByName("yRound");
        yRound.width = 110;
        yRound.height = 110;
        this.addChild(yRound);
        yRound.anchorOffsetX = 65;
        yRound.anchorOffsetY = 65;
        yRound.x = 120;
        yRound.y = 110;
        egret.Tween.get(yRound, {loop: true}).to({scaleX: 0.9, scaleY: 0.9}, 1000).to({scaleX: 1.0, scaleY: 1.0}, 1000);


        var yRound2 = this.createBitmapByName("yRound");
        yRound2.width = 100;
        yRound2.height = 100;
        this.addChild(yRound2);
        yRound2.anchorOffsetX = 65;
        yRound2.anchorOffsetY = 65;
        yRound2.x = 185;
        yRound2.y = 80;
        egret.Tween.get(yRound2, {loop: true}).to({scaleX: 1.0, scaleY: 1.0}, 100).to({
            scaleX: 1.1,
            scaleY: 1.1
        }, 1500).to({scaleX: 1.0, scaleY: 1.0}, 1000);


        var yRound3 = this.createBitmapByName("yRound");
        yRound3.width = 130;
        yRound3.height = 130;
        this.addChild(yRound3);
        yRound3.anchorOffsetX = 65;
        yRound3.anchorOffsetY = 65;
        yRound3.x = this.stage.stageWidth - 65;
        yRound3.y = 0;
        egret.Tween.get(yRound3, {loop: true}).to({scaleX: 1.0, scaleY: 1.0}, 100).to({
            scaleX: 1.1,
            scaleY: 1.1
        }, 1000).to({scaleX: 1.0, scaleY: 1.0}, 1000);


        var yRound4 = this.createBitmapByName("yRound");
        yRound4.width = 130;
        yRound4.height = 130;
        this.addChild(yRound4);
        yRound4.anchorOffsetX = 65;
        yRound4.anchorOffsetY = 65;
        yRound4.x = -35;
        yRound4.y = 265;
        egret.Tween.get(yRound4, {loop: true}).to({scaleX: 0.9, scaleY: 0.9}, 1000).to({
            scaleX: 1.0,
            scaleY: 1.0
        }, 1000);

        //半圆
        var yRound5 = this.createBitmapByName("yRound1");
        yRound5.width = 80;
        yRound5.height = 100;
        this.addChild(yRound5);
        yRound5.anchorOffsetX = 40;
        yRound5.anchorOffsetY = 50;
        yRound5.x = this.stage.stageWidth - 20;
        yRound5.y = 120;
        egret.Tween.get(yRound5, {loop: true}).to({scaleX: 0.9, scaleY: 0.9}, 1500).to({
            scaleX: 1.0,
            scaleY: 1.0
        }, 1000);


        var yRound6 = this.createBitmapByName("yRound");
        yRound6.width = 130;
        yRound6.height = 130;
        this.addChild(yRound6);
        egret.Tween.get(yRound6, {loop: true}).to({scaleX: 1.0, scaleY: 1.0}, 100).to({
            scaleX: 1.1,
            scaleY: 1.1
        }, 1000).to({scaleX: 1.0, scaleY: 1.0}, 1000);
        yRound6.anchorOffsetX = 65;
        yRound6.anchorOffsetY = 65;
        yRound6.x = -15;
        yRound6.y = 515;


        var yRound7 = this.createBitmapByName("yRound");
        yRound7.width = 130;
        yRound7.height = 130;
        this.addChild(yRound7);
        egret.Tween.get(yRound7, {loop: true}).to({scaleX: 0.9, scaleY: 0.9}, 1000).to({
            scaleX: 1.0,
            scaleY: 1.0
        }, 1000);
        yRound7.anchorOffsetX = 65;
        yRound7.anchorOffsetY = 65;
        yRound7.x = 40;
        yRound7.y = 600;
        
        
        var yRound8 = this.createBitmapByName("yRound");
        yRound8.width = 130;
        yRound8.height = 130;
        this.addChild(yRound8);
        yRound8.anchorOffsetX = 65;
        yRound8.anchorOffsetY = 65;
        yRound8.x = this.stage.stageWidth + 20;
        yRound8.y = 585;
        egret.Tween.get(yRound8, {loop: true}).to({scaleX: 0.9, scaleY: 0.9}, 2000).to({
            scaleX: 1.0,
            scaleY: 1.0
        }, 1000);

        var yRound9 = this.createBitmapByName("yRound3");
        yRound9.width = 115;
        yRound9.height = 95;
        this.addChild(yRound9);
        yRound9.anchorOffsetX = 65;
        yRound9.anchorOffsetY = 65;
        yRound9.x = this.stage.stageWidth - 40;
        yRound9.y = this.stage.stageHeight - 20;
        egret.Tween.get(yRound9, {loop: true}).to({scaleX: 0.9, scaleY: 0.9}, 1000).to({
            scaleX: 1.0,
            scaleY: 1.0
        }, 1000);

        if(egret.localStorage.getItem("money")){
            this.loadGameEndView();
        }else {
            this.preView = new GamePreView();
            this.addChild(this.preView);
            this.preView.enterGame.touchEnabled = true;
            this.preView.enterGame.addEventListener(egret.TouchEvent.TOUCH_TAP, this.loadIntroduceView, this);
        }

        this.WxShare = new WxShare();
        this.addChild(this.WxShare);
    }

    //创建游戏介绍页面
    private loadIntroduceView() {
        this.removeChild(this.preView);
        this.gameIntroduceView = new GameIntroductionView();
        this.addChild(this.gameIntroduceView);
        this.gameIntroduceView.startGame.touchEnabled = true;
        this.gameIntroduceView.startGame.addEventListener(egret.TouchEvent.TOUCH_TAP, function(){
            this.removeChild(this.gameIntroduceView);
            this.loadGameView();
        }, this);
    }

    //创建游戏页面
    public loadGameView() {
        this.gameView = new GameView();
        this.addChild(this.gameView);
        this.hittestEvent();
    }

    //创建游戏结束页面
    public loadGameEndView() {
        this.gameEndView = new GameEndView();
        this.addChild(this.gameEndView);
        this.gameEndView.ruleBtn.touchEnabled = true;
        this.gameEndView.ruleBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.loadGameRuleView, this);
        this.gameEndView.replayBtn.touchEnabled = true;
        this.gameEndView.replayBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            egret.localStorage.setItem("times","0");
            this.gameEndView.gameDiv.removeChild(this.gameEndView.myImg);
            this.removeChild(this.gameEndView);
            this.loadGameView();
        }, this);
    }

    //创建游戏规则页面
    private loadGameRuleView() {
        this.gameEndView.gameDiv.removeChild(this.gameEndView.myImg);
        this.gameRuleView = new GameRuleView();
        this.removeChild(this.gameEndView);
        this.addChild(this.gameRuleView);
        this.gameRuleView.closeContain.touchEnabled = true;
        this.gameRuleView.closeContain.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            this.removeChild(this.gameRuleView);
            this.loadGameEndView();
        }, this);
    }

    //碰撞检测
    private hittestEvent() {
        var container:egret.Shape = new egret.Shape();
        container.graphics.beginFill(0x000000);
        container.alpha = 0;
        container.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
        container.graphics.endFill();
        this.gameView.addChild(container);
        container.touchEnabled = true;
        container.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            var isHit:boolean = this.hitTestP(this.gameView.shp,this.gameView.shp1);
            var num:number = parseInt(egret.localStorage.getItem('times'));

            if (isHit) {
                this.gameView.speed += 0.4;
                this.gameView.removeChild(this.gameView.shp);
                this.gameView.removeChild(this.gameView.co);
                this.gameView.createCo();
                var st =  Number(String(Math.random()*5000).split('.')[0]);
                var timeNum = num + 1;
                egret.Tween.get(this.gameView.addOne).to({alpha:1},500).to({alpha:0},500);
                egret.localStorage.setItem("times",String(timeNum));
                if(timeNum<=3&&timeNum>0) {
                    egret.localStorage.setItem("money", "100");
                    egret.localStorage.setItem("conum", "100000");
                }else if(timeNum>3&&timeNum<=6){
                    egret.localStorage.setItem("money", "200");
                    egret.localStorage.setItem("conum", "200000");
                }else if(timeNum>6){
                    egret.localStorage.setItem("money", "300");
                    egret.localStorage.setItem("conum", "300000");
                    this.gameView.monkeyRing.removeEventListener(egret.Event.ENTER_FRAME,this.gameView.enterFrameHandle,this.gameView)
                    egret.Tween.get(this.gameView).to({x:5}, 100, egret.Ease.circIn).to({x:-8}, 100, egret.Ease.circIn).to({x:0}, 100, egret.Ease.circIn)
                        .call(function(){
                            this.removeChild(this.gameView)
                            this.loadGameEndView();
                        }.bind(this))
                    egret.localStorage.setItem("copon","YVX"+ String(Number(egret.localStorage.getItem("conum")) +st));
                    return;
                }
                this.gameView.textMoney.text = "¥" + egret.localStorage.getItem("money");
                egret.localStorage.setItem("copon","YVX"+ String(Number(egret.localStorage.getItem("conum")) +st));
            } else {
                if(num>0&&num<=3) {
                    egret.localStorage.setItem("money", "100");
                }else if(num>3&&num<=6){
                    egret.localStorage.setItem("money", "200");
                }else if(num>6){
                    egret.localStorage.setItem("money", "300");
                }
                this.gameView.monkeyRing.removeEventListener(egret.Event.ENTER_FRAME,this.gameView.enterFrameHandle,this.gameView)
                egret.Tween.get(this.gameView).to({x:5}, 100, egret.Ease.circIn).to({x:-8}, 100, egret.Ease.circIn).to({x:0}, 100, egret.Ease.circIn)
                .call(function(){
                    this.removeChild(this.gameView)
                    this.loadGameEndView();
                }.bind(this))

            }
        }, this);
    }

    /**基于矩形的碰撞检测*/
    public hitTest(obj1:egret.Sprite,obj2:egret.Sprite):boolean
    {
        var rect1:egret.Rectangle = obj1.getBounds();
        var rect2:egret.Rectangle = obj2.getBounds();
        rect1.x = obj1.x;
        rect1.y = obj1.y;
        rect2.x = obj2.x;
        rect2.y = obj2.y;
        return rect1.intersects(rect2);
    }

    public hitTestP(obj1:egret.DisplayObject,obj2:egret.DisplayObject):boolean
    {
        var point = this.gameView.creatept2();
        return obj1.hitTestPoint(point.x, point.y);
    }
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     */
    private createBitmapByName(name:string):egret.Bitmap {
        var result:egret.Bitmap = new egret.Bitmap();
        var texture:egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }


}


