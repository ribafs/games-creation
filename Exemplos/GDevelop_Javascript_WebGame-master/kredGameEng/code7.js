gdjs.DangerSceneCode = {};
gdjs.DangerSceneCode.GDRulesButtonObjects1= [];
gdjs.DangerSceneCode.GDRulesButtonObjects2= [];
gdjs.DangerSceneCode.GDworktObjects1= [];
gdjs.DangerSceneCode.GDworktObjects2= [];
gdjs.DangerSceneCode.GDBackTextObjects1= [];
gdjs.DangerSceneCode.GDBackTextObjects2= [];
gdjs.DangerSceneCode.GDbackgroundObjects1= [];
gdjs.DangerSceneCode.GDbackgroundObjects2= [];
gdjs.DangerSceneCode.GDhazardtObjects1= [];
gdjs.DangerSceneCode.GDhazardtObjects2= [];
gdjs.DangerSceneCode.GDfuntObjects1= [];
gdjs.DangerSceneCode.GDfuntObjects2= [];
gdjs.DangerSceneCode.GDCanvasObjects1= [];
gdjs.DangerSceneCode.GDCanvasObjects2= [];
gdjs.DangerSceneCode.GDBuildingsObjects1= [];
gdjs.DangerSceneCode.GDBuildingsObjects2= [];
gdjs.DangerSceneCode.GDLifeLineObjects1= [];
gdjs.DangerSceneCode.GDLifeLineObjects2= [];
gdjs.DangerSceneCode.GDButtonObjects1= [];
gdjs.DangerSceneCode.GDButtonObjects2= [];
gdjs.DangerSceneCode.GDcloseObjects1= [];
gdjs.DangerSceneCode.GDcloseObjects2= [];
gdjs.DangerSceneCode.GDbackgroundObjects1= [];
gdjs.DangerSceneCode.GDbackgroundObjects2= [];
gdjs.DangerSceneCode.GDtextObjects1= [];
gdjs.DangerSceneCode.GDtextObjects2= [];
gdjs.DangerSceneCode.GDOkObjects1= [];
gdjs.DangerSceneCode.GDOkObjects2= [];

gdjs.DangerSceneCode.conditionTrue_0 = {val:false};
gdjs.DangerSceneCode.condition0IsTrue_0 = {val:false};
gdjs.DangerSceneCode.condition1IsTrue_0 = {val:false};
gdjs.DangerSceneCode.condition2IsTrue_0 = {val:false};
gdjs.DangerSceneCode.conditionTrue_1 = {val:false};
gdjs.DangerSceneCode.condition0IsTrue_1 = {val:false};
gdjs.DangerSceneCode.condition1IsTrue_1 = {val:false};
gdjs.DangerSceneCode.condition2IsTrue_1 = {val:false};


gdjs.DangerSceneCode.mapOfGDgdjs_46DangerSceneCode_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.DangerSceneCode.GDButtonObjects1});gdjs.DangerSceneCode.eventsList0xe32c08 = function(runtimeScene) {

{


gdjs.DangerSceneCode.condition0IsTrue_0.val = false;
{
gdjs.DangerSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.DangerSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(11).sub(250);
}{runtimeScene.getGame().getVariables().getFromIndex(4).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) - 150);
}{runtimeScene.getGame().getVariables().getFromIndex(9).add(5000);
}{runtimeScene.getGame().getVariables().getFromIndex(14).add(5000);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "DecisionView", false);
}{runtimeScene.getGame().getVariables().getFromIndex(117).setNumber(1);
}}

}


}; //End of gdjs.DangerSceneCode.eventsList0xe32c08
gdjs.DangerSceneCode.mapOfGDgdjs_46DangerSceneCode_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.DangerSceneCode.GDButtonObjects1});gdjs.DangerSceneCode.mapOfGDgdjs_46DangerSceneCode_46GDcloseObjects1Objects = Hashtable.newFrom({"close": gdjs.DangerSceneCode.GDcloseObjects1});gdjs.DangerSceneCode.eventsList0xe7d0d8 = function(runtimeScene) {

{


gdjs.DangerSceneCode.condition0IsTrue_0.val = false;
{
gdjs.DangerSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.DangerSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://kredytofer.pl/", runtimeScene);
}}

}


}; //End of gdjs.DangerSceneCode.eventsList0xe7d0d8
gdjs.DangerSceneCode.mapOfGDgdjs_46DangerSceneCode_46GDcloseObjects1Objects = Hashtable.newFrom({"close": gdjs.DangerSceneCode.GDcloseObjects1});gdjs.DangerSceneCode.eventsList0xb2158 = function(runtimeScene) {

{

gdjs.DangerSceneCode.GDButtonObjects1.createFrom(runtimeScene.getObjects("Button"));

gdjs.DangerSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.DangerSceneCode.conditionTrue_1 = gdjs.DangerSceneCode.condition0IsTrue_0;
gdjs.DangerSceneCode.condition0IsTrue_1.val = false;
gdjs.DangerSceneCode.condition1IsTrue_1.val = false;
{
gdjs.DangerSceneCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.DangerSceneCode.mapOfGDgdjs_46DangerSceneCode_46GDButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.DangerSceneCode.condition0IsTrue_1.val ) {
{
gdjs.DangerSceneCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(26)) == 0;
}}
gdjs.DangerSceneCode.conditionTrue_1.val = true && gdjs.DangerSceneCode.condition0IsTrue_1.val && gdjs.DangerSceneCode.condition1IsTrue_1.val;
}
}if (gdjs.DangerSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.DangerSceneCode.GDButtonObjects1 */
gdjs.DangerSceneCode.GDOkObjects1.createFrom(runtimeScene.getObjects("Ok"));
{for(var i = 0, len = gdjs.DangerSceneCode.GDButtonObjects1.length ;i < len;++i) {
    gdjs.DangerSceneCode.GDButtonObjects1[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.DangerSceneCode.GDOkObjects1.length ;i < len;++i) {
    gdjs.DangerSceneCode.GDOkObjects1[i].setOpacity(100);
}
}
{ //Subevents
gdjs.DangerSceneCode.eventsList0xe32c08(runtimeScene);} //End of subevents
}

}


{

gdjs.DangerSceneCode.GDButtonObjects1.createFrom(runtimeScene.getObjects("Button"));

gdjs.DangerSceneCode.condition0IsTrue_0.val = false;
{
gdjs.DangerSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DangerSceneCode.mapOfGDgdjs_46DangerSceneCode_46GDButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.DangerSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.DangerSceneCode.GDButtonObjects1 */
gdjs.DangerSceneCode.GDOkObjects1.createFrom(runtimeScene.getObjects("Ok"));
{for(var i = 0, len = gdjs.DangerSceneCode.GDButtonObjects1.length ;i < len;++i) {
    gdjs.DangerSceneCode.GDButtonObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.DangerSceneCode.GDOkObjects1.length ;i < len;++i) {
    gdjs.DangerSceneCode.GDOkObjects1[i].setOpacity(255);
}
}}

}


{

gdjs.DangerSceneCode.GDcloseObjects1.createFrom(runtimeScene.getObjects("close"));

gdjs.DangerSceneCode.condition0IsTrue_0.val = false;
{
gdjs.DangerSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DangerSceneCode.mapOfGDgdjs_46DangerSceneCode_46GDcloseObjects1Objects, runtimeScene, true, false);
}if (gdjs.DangerSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.DangerSceneCode.GDcloseObjects1 */
{for(var i = 0, len = gdjs.DangerSceneCode.GDcloseObjects1.length ;i < len;++i) {
    gdjs.DangerSceneCode.GDcloseObjects1[i].setOpacity(100);
}
}
{ //Subevents
gdjs.DangerSceneCode.eventsList0xe7d0d8(runtimeScene);} //End of subevents
}

}


{

gdjs.DangerSceneCode.GDcloseObjects1.createFrom(runtimeScene.getObjects("close"));

gdjs.DangerSceneCode.condition0IsTrue_0.val = false;
{
gdjs.DangerSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DangerSceneCode.mapOfGDgdjs_46DangerSceneCode_46GDcloseObjects1Objects, runtimeScene, true, true);
}if (gdjs.DangerSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.DangerSceneCode.GDcloseObjects1 */
{for(var i = 0, len = gdjs.DangerSceneCode.GDcloseObjects1.length ;i < len;++i) {
    gdjs.DangerSceneCode.GDcloseObjects1[i].setOpacity(255);
}
}}

}


{


{
}

}


}; //End of gdjs.DangerSceneCode.eventsList0xb2158


gdjs.DangerSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.DangerSceneCode.GDRulesButtonObjects1.length = 0;
gdjs.DangerSceneCode.GDRulesButtonObjects2.length = 0;
gdjs.DangerSceneCode.GDworktObjects1.length = 0;
gdjs.DangerSceneCode.GDworktObjects2.length = 0;
gdjs.DangerSceneCode.GDBackTextObjects1.length = 0;
gdjs.DangerSceneCode.GDBackTextObjects2.length = 0;
gdjs.DangerSceneCode.GDbackgroundObjects1.length = 0;
gdjs.DangerSceneCode.GDbackgroundObjects2.length = 0;
gdjs.DangerSceneCode.GDhazardtObjects1.length = 0;
gdjs.DangerSceneCode.GDhazardtObjects2.length = 0;
gdjs.DangerSceneCode.GDfuntObjects1.length = 0;
gdjs.DangerSceneCode.GDfuntObjects2.length = 0;
gdjs.DangerSceneCode.GDCanvasObjects1.length = 0;
gdjs.DangerSceneCode.GDCanvasObjects2.length = 0;
gdjs.DangerSceneCode.GDBuildingsObjects1.length = 0;
gdjs.DangerSceneCode.GDBuildingsObjects2.length = 0;
gdjs.DangerSceneCode.GDLifeLineObjects1.length = 0;
gdjs.DangerSceneCode.GDLifeLineObjects2.length = 0;
gdjs.DangerSceneCode.GDButtonObjects1.length = 0;
gdjs.DangerSceneCode.GDButtonObjects2.length = 0;
gdjs.DangerSceneCode.GDcloseObjects1.length = 0;
gdjs.DangerSceneCode.GDcloseObjects2.length = 0;
gdjs.DangerSceneCode.GDbackgroundObjects1.length = 0;
gdjs.DangerSceneCode.GDbackgroundObjects2.length = 0;
gdjs.DangerSceneCode.GDtextObjects1.length = 0;
gdjs.DangerSceneCode.GDtextObjects2.length = 0;
gdjs.DangerSceneCode.GDOkObjects1.length = 0;
gdjs.DangerSceneCode.GDOkObjects2.length = 0;

gdjs.DangerSceneCode.eventsList0xb2158(runtimeScene);
return;
}
gdjs['DangerSceneCode'] = gdjs.DangerSceneCode;
