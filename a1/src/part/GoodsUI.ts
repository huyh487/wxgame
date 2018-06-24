/**
 * Created by egret on 2016/1/25.
 */

class GoodsUI extends eui.Component {

    constructor() {
        super();
        this.addEventListener( eui.UIEvent.COMPLETE, this.uiCompHandler, this );
        this.skinName = "resource/custom_skins/goodsUISkin.exml";
    }

    private uiCompHandler():void {
        console.log( "\t\tGoodsUI uiCompHandler" );

        /// 填充数据
        var dsListHeros:Array<Object> = [
            { icon: "goods01_png", goodsName: "初始获得", comment: "容易获得奖励", goodsType:"步行" }
            , { icon: "goods02_png", goodsName: "明信片*15", comment: "步数减少1/5", goodsType:"自行车" }
            , { icon: "goods03_png", goodsName: "明信片*40", comment: "步数减少1/5", goodsType:"小汽车" }
            , { icon: "goods04_png", goodsName: "明信片*40", comment: "步数减少1/5", goodsType:"动车" }
            , { icon: "goods05_png", goodsName: "明信片*40", comment: "步数减少1/5", goodsType:"飞机" }
            , { icon: "goods06_png", goodsName: "明信片*40", comment: "步数减少1/5", goodsType:"火箭" }
            , { icon: "goods06_png", goodsName: "明信片*40", comment: "步数减少1/5", goodsType:"火箭" }
            , { icon: "goods07_png", goodsName: "明信片*40", comment: "力量加成 +5", goodsType:"筋斗云" }
        ];
        this.listGoods.dataProvider = new eui.ArrayCollection( dsListHeros );

        this.listGoods.itemRenderer = GoodsListIRSkin;
    }

    protected createChildren():void {
        super.createChildren();

    }

    private listGoods:eui.List;
}

class GoodsListIRSkin extends eui.ItemRenderer {

    private cb:eui.CheckBox;

    constructor() {
        super();
        this.skinName = "goodsListIRSkin";
    }

    protected createChildren():void {
        super.createChildren();
    }

    protected dataChanged():void {
    }

}