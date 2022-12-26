gdjs.WinViewCode = {};
gdjs.WinViewCode.GDRulesButtonObjects1= [];
gdjs.WinViewCode.GDRulesButtonObjects2= [];
gdjs.WinViewCode.GDworktObjects1= [];
gdjs.WinViewCode.GDworktObjects2= [];
gdjs.WinViewCode.GDBackTextObjects1= [];
gdjs.WinViewCode.GDBackTextObjects2= [];
gdjs.WinViewCode.GDbackgroundObjects1= [];
gdjs.WinViewCode.GDbackgroundObjects2= [];
gdjs.WinViewCode.GDhazardtObjects1= [];
gdjs.WinViewCode.GDhazardtObjects2= [];
gdjs.WinViewCode.GDfuntObjects1= [];
gdjs.WinViewCode.GDfuntObjects2= [];
gdjs.WinViewCode.GDCanvasObjects1= [];
gdjs.WinViewCode.GDCanvasObjects2= [];
gdjs.WinViewCode.GDBuildingsObjects1= [];
gdjs.WinViewCode.GDBuildingsObjects2= [];
gdjs.WinViewCode.GDLifeLineObjects1= [];
gdjs.WinViewCode.GDLifeLineObjects2= [];
gdjs.WinViewCode.GDButtonObjects1= [];
gdjs.WinViewCode.GDButtonObjects2= [];
gdjs.WinViewCode.GDcloseObjects1= [];
gdjs.WinViewCode.GDcloseObjects2= [];

gdjs.WinViewCode.conditionTrue_0 = {val:false};
gdjs.WinViewCode.condition0IsTrue_0 = {val:false};
gdjs.WinViewCode.condition1IsTrue_0 = {val:false};


gdjs.WinViewCode.mapOfGDgdjs_46WinViewCode_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.WinViewCode.GDButtonObjects1});gdjs.WinViewCode.mapOfGDgdjs_46WinViewCode_46GDcloseObjects1Objects = Hashtable.newFrom({"close": gdjs.WinViewCode.GDcloseObjects1});gdjs.WinViewCode.eventsList0xbf3a70 = function(runtimeScene) {

{


gdjs.WinViewCode.condition0IsTrue_0.val = false;
{
gdjs.WinViewCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.WinViewCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://kredytofer.pl/", runtimeScene);
}}

}


}; //End of gdjs.WinViewCode.eventsList0xbf3a70
gdjs.WinViewCode.mapOfGDgdjs_46WinViewCode_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.WinViewCode.GDButtonObjects1});gdjs.WinViewCode.eventsList0xbfed38 = function(runtimeScene) {

{


gdjs.WinViewCode.condition0IsTrue_0.val = false;
{
gdjs.WinViewCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.WinViewCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


}; //End of gdjs.WinViewCode.eventsList0xbfed38
gdjs.WinViewCode.mapOfGDgdjs_46WinViewCode_46GDcloseObjects1Objects = Hashtable.newFrom({"close": gdjs.WinViewCode.GDcloseObjects1});gdjs.WinViewCode.eventsList0xb0b28 = function(runtimeScene) {

{

gdjs.WinViewCode.GDButtonObjects1.createFrom(runtimeScene.getObjects("Button"));

gdjs.WinViewCode.condition0IsTrue_0.val = false;
{
gdjs.WinViewCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.WinViewCode.mapOfGDgdjs_46WinViewCode_46GDButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.WinViewCode.condition0IsTrue_0.val) {
/* Reuse gdjs.WinViewCode.GDButtonObjects1 */
{for(var i = 0, len = gdjs.WinViewCode.GDButtonObjects1.length ;i < len;++i) {
    gdjs.WinViewCode.GDButtonObjects1[i].setOpacity(255);
}
}}

}


{

gdjs.WinViewCode.GDcloseObjects1.createFrom(runtimeScene.getObjects("close"));

gdjs.WinViewCode.condition0IsTrue_0.val = false;
{
gdjs.WinViewCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.WinViewCode.mapOfGDgdjs_46WinViewCode_46GDcloseObjects1Objects, runtimeScene, true, false);
}if (gdjs.WinViewCode.condition0IsTrue_0.val) {
/* Reuse gdjs.WinViewCode.GDcloseObjects1 */
{for(var i = 0, len = gdjs.WinViewCode.GDcloseObjects1.length ;i < len;++i) {
    gdjs.WinViewCode.GDcloseObjects1[i].setOpacity(100);
}
}
{ //Subevents
gdjs.WinViewCode.eventsList0xbf3a70(runtimeScene);} //End of subevents
}

}


{

gdjs.WinViewCode.GDButtonObjects1.createFrom(runtimeScene.getObjects("Button"));

gdjs.WinViewCode.condition0IsTrue_0.val = false;
{
gdjs.WinViewCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.WinViewCode.mapOfGDgdjs_46WinViewCode_46GDButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.WinViewCode.condition0IsTrue_0.val) {
/* Reuse gdjs.WinViewCode.GDButtonObjects1 */
{for(var i = 0, len = gdjs.WinViewCode.GDButtonObjects1.length ;i < len;++i) {
    gdjs.WinViewCode.GDButtonObjects1[i].setOpacity(100);
}
}
{ //Subevents
gdjs.WinViewCode.eventsList0xbfed38(runtimeScene);} //End of subevents
}

}


{

gdjs.WinViewCode.GDcloseObjects1.createFrom(runtimeScene.getObjects("close"));

gdjs.WinViewCode.condition0IsTrue_0.val = false;
{
gdjs.WinViewCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.WinViewCode.mapOfGDgdjs_46WinViewCode_46GDcloseObjects1Objects, runtimeScene, true, true);
}if (gdjs.WinViewCode.condition0IsTrue_0.val) {
/* Reuse gdjs.WinViewCode.GDcloseObjects1 */
{for(var i = 0, len = gdjs.WinViewCode.GDcloseObjects1.length ;i < len;++i) {
    gdjs.WinViewCode.GDcloseObjects1[i].setOpacity(255);
}
}}

}


{


{
}

}


}; //End of gdjs.WinViewCode.eventsList0xb0b28


gdjs.WinViewCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.WinViewCode.GDRulesButtonObjects1.length = 0;
gdjs.WinViewCode.GDRulesButtonObjects2.length = 0;
gdjs.WinViewCode.GDworktObjects1.length = 0;
gdjs.WinViewCode.GDworktObjects2.length = 0;
gdjs.WinViewCode.GDBackTextObjects1.length = 0;
gdjs.WinViewCode.GDBackTextObjects2.length = 0;
gdjs.WinViewCode.GDbackgroundObjects1.length = 0;
gdjs.WinViewCode.GDbackgroundObjects2.length = 0;
gdjs.WinViewCode.GDhazardtObjects1.length = 0;
gdjs.WinViewCode.GDhazardtObjects2.length = 0;
gdjs.WinViewCode.GDfuntObjects1.length = 0;
gdjs.WinViewCode.GDfuntObjects2.length = 0;
gdjs.WinViewCode.GDCanvasObjects1.length = 0;
gdjs.WinViewCode.GDCanvasObjects2.length = 0;
gdjs.WinViewCode.GDBuildingsObjects1.length = 0;
gdjs.WinViewCode.GDBuildingsObjects2.length = 0;
gdjs.WinViewCode.GDLifeLineObjects1.length = 0;
gdjs.WinViewCode.GDLifeLineObjects2.length = 0;
gdjs.WinViewCode.GDButtonObjects1.length = 0;
gdjs.WinViewCode.GDButtonObjects2.length = 0;
gdjs.WinViewCode.GDcloseObjects1.length = 0;
gdjs.WinViewCode.GDcloseObjects2.length = 0;

gdjs.WinViewCode.eventsList0xb0b28(runtimeScene);
return;
}
gdjs['WinViewCode'] = gdjs.WinViewCode;
