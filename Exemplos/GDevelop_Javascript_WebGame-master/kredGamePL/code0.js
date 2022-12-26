gdjs.MenuCode = {};
gdjs.MenuCode.GDRulesButtonObjects1= [];
gdjs.MenuCode.GDRulesButtonObjects2= [];
gdjs.MenuCode.GDRulesButtonObjects3= [];
gdjs.MenuCode.GDworktObjects1= [];
gdjs.MenuCode.GDworktObjects2= [];
gdjs.MenuCode.GDworktObjects3= [];
gdjs.MenuCode.GDBackTextObjects1= [];
gdjs.MenuCode.GDBackTextObjects2= [];
gdjs.MenuCode.GDBackTextObjects3= [];
gdjs.MenuCode.GDbackgroundObjects1= [];
gdjs.MenuCode.GDbackgroundObjects2= [];
gdjs.MenuCode.GDbackgroundObjects3= [];
gdjs.MenuCode.GDhazardtObjects1= [];
gdjs.MenuCode.GDhazardtObjects2= [];
gdjs.MenuCode.GDhazardtObjects3= [];
gdjs.MenuCode.GDfuntObjects1= [];
gdjs.MenuCode.GDfuntObjects2= [];
gdjs.MenuCode.GDfuntObjects3= [];
gdjs.MenuCode.GDCanvasObjects1= [];
gdjs.MenuCode.GDCanvasObjects2= [];
gdjs.MenuCode.GDCanvasObjects3= [];
gdjs.MenuCode.GDBuildingsObjects1= [];
gdjs.MenuCode.GDBuildingsObjects2= [];
gdjs.MenuCode.GDBuildingsObjects3= [];
gdjs.MenuCode.GDLifeLineObjects1= [];
gdjs.MenuCode.GDLifeLineObjects2= [];
gdjs.MenuCode.GDLifeLineObjects3= [];
gdjs.MenuCode.GDButtonObjects1= [];
gdjs.MenuCode.GDButtonObjects2= [];
gdjs.MenuCode.GDButtonObjects3= [];
gdjs.MenuCode.GDcloseObjects1= [];
gdjs.MenuCode.GDcloseObjects2= [];
gdjs.MenuCode.GDcloseObjects3= [];
gdjs.MenuCode.GDStartGameTextObjects1= [];
gdjs.MenuCode.GDStartGameTextObjects2= [];
gdjs.MenuCode.GDStartGameTextObjects3= [];
gdjs.MenuCode.GDLoadButtonObjects1= [];
gdjs.MenuCode.GDLoadButtonObjects2= [];
gdjs.MenuCode.GDLoadButtonObjects3= [];
gdjs.MenuCode.GDHow2PlayObjects1= [];
gdjs.MenuCode.GDHow2PlayObjects2= [];
gdjs.MenuCode.GDHow2PlayObjects3= [];
gdjs.MenuCode.GDLoadGameTextObjects1= [];
gdjs.MenuCode.GDLoadGameTextObjects2= [];
gdjs.MenuCode.GDLoadGameTextObjects3= [];
gdjs.MenuCode.GDHow2PlayModalObjects1= [];
gdjs.MenuCode.GDHow2PlayModalObjects2= [];
gdjs.MenuCode.GDHow2PlayModalObjects3= [];
gdjs.MenuCode.GDCloseModalButtonObjects1= [];
gdjs.MenuCode.GDCloseModalButtonObjects2= [];
gdjs.MenuCode.GDCloseModalButtonObjects3= [];
gdjs.MenuCode.GDHow2PlayTextObjects1= [];
gdjs.MenuCode.GDHow2PlayTextObjects2= [];
gdjs.MenuCode.GDHow2PlayTextObjects3= [];
gdjs.MenuCode.GDbackgroundObjects1= [];
gdjs.MenuCode.GDbackgroundObjects2= [];
gdjs.MenuCode.GDbackgroundObjects3= [];
gdjs.MenuCode.GDnameObjects1= [];
gdjs.MenuCode.GDnameObjects2= [];
gdjs.MenuCode.GDnameObjects3= [];
gdjs.MenuCode.GDbuybtnObjects1= [];
gdjs.MenuCode.GDbuybtnObjects2= [];
gdjs.MenuCode.GDbuybtnObjects3= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.MenuCode.GDButtonObjects1});gdjs.MenuCode.eventsList0xb81b88 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ChooseView", false);
}}

}


}; //End of gdjs.MenuCode.eventsList0xb81b88
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.MenuCode.GDButtonObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDRulesButtonObjects1Objects = Hashtable.newFrom({"RulesButton": gdjs.MenuCode.GDRulesButtonObjects1});gdjs.MenuCode.eventsList0xb10a98 = function(runtimeScene) {

{

gdjs.MenuCode.GDHow2PlayModalObjects2.createFrom(runtimeScene.getObjects("How2PlayModal"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDHow2PlayModalObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDHow2PlayModalObjects2[i].getOpacity() == 255 ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDHow2PlayModalObjects2[k] = gdjs.MenuCode.GDHow2PlayModalObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDHow2PlayModalObjects2.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDCloseModalButtonObjects2.createFrom(runtimeScene.getObjects("CloseModalButton"));
/* Reuse gdjs.MenuCode.GDHow2PlayModalObjects2 */
gdjs.MenuCode.GDHow2PlayTextObjects2.createFrom(runtimeScene.getObjects("How2PlayText"));
{for(var i = 0, len = gdjs.MenuCode.GDHow2PlayModalObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDHow2PlayModalObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.MenuCode.GDHow2PlayTextObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDHow2PlayTextObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.MenuCode.GDCloseModalButtonObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDCloseModalButtonObjects2[i].setOpacity(0);
}
}{runtimeScene.getGame().getVariables().getFromIndex(26).setNumber(0);
}}

}


{

gdjs.MenuCode.GDHow2PlayModalObjects1.createFrom(runtimeScene.getObjects("How2PlayModal"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDHow2PlayModalObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDHow2PlayModalObjects1[i].getOpacity() == 0 ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDHow2PlayModalObjects1[k] = gdjs.MenuCode.GDHow2PlayModalObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDHow2PlayModalObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDCloseModalButtonObjects1.createFrom(runtimeScene.getObjects("CloseModalButton"));
/* Reuse gdjs.MenuCode.GDHow2PlayModalObjects1 */
gdjs.MenuCode.GDHow2PlayTextObjects1.createFrom(runtimeScene.getObjects("How2PlayText"));
{for(var i = 0, len = gdjs.MenuCode.GDHow2PlayTextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDHow2PlayTextObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.MenuCode.GDHow2PlayModalObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDHow2PlayModalObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.MenuCode.GDCloseModalButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDCloseModalButtonObjects1[i].setOpacity(255);
}
}{runtimeScene.getGame().getVariables().getFromIndex(26).setNumber(1);
}}

}


}; //End of gdjs.MenuCode.eventsList0xb10a98
gdjs.MenuCode.eventsList0xa1af38 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0xb10a98(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MenuCode.eventsList0xa1af38
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDRulesButtonObjects1Objects = Hashtable.newFrom({"RulesButton": gdjs.MenuCode.GDRulesButtonObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDCloseModalButtonObjects1Objects = Hashtable.newFrom({"CloseModalButton": gdjs.MenuCode.GDCloseModalButtonObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDCloseModalButtonObjects1Objects = Hashtable.newFrom({"CloseModalButton": gdjs.MenuCode.GDCloseModalButtonObjects1});gdjs.MenuCode.eventsList0xcebc20 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDCloseModalButtonObjects1 */
gdjs.MenuCode.GDHow2PlayModalObjects1.createFrom(runtimeScene.getObjects("How2PlayModal"));
gdjs.MenuCode.GDHow2PlayTextObjects1.createFrom(runtimeScene.getObjects("How2PlayText"));
{for(var i = 0, len = gdjs.MenuCode.GDHow2PlayModalObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDHow2PlayModalObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.MenuCode.GDHow2PlayTextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDHow2PlayTextObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.MenuCode.GDCloseModalButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDCloseModalButtonObjects1[i].setOpacity(0);
}
}{runtimeScene.getGame().getVariables().getFromIndex(26).setNumber(0);
}}

}


}; //End of gdjs.MenuCode.eventsList0xcebc20
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDcloseObjects1Objects = Hashtable.newFrom({"close": gdjs.MenuCode.GDcloseObjects1});gdjs.MenuCode.eventsList0x69d540 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://kredytofer.pl/", runtimeScene);
}}

}


}; //End of gdjs.MenuCode.eventsList0x69d540
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDcloseObjects1Objects = Hashtable.newFrom({"close": gdjs.MenuCode.GDcloseObjects1});gdjs.MenuCode.eventsList0xb2158 = function(runtimeScene) {

{

gdjs.MenuCode.GDButtonObjects1.createFrom(runtimeScene.getObjects("Button"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
gdjs.MenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_1.val ) {
{
gdjs.MenuCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(26)) == 0;
}}
gdjs.MenuCode.conditionTrue_1.val = true && gdjs.MenuCode.condition0IsTrue_1.val && gdjs.MenuCode.condition1IsTrue_1.val;
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDButtonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDButtonObjects1[i].setOpacity(100);
}
}
{ //Subevents
gdjs.MenuCode.eventsList0xb81b88(runtimeScene);} //End of subevents
}

}


{

gdjs.MenuCode.GDButtonObjects1.createFrom(runtimeScene.getObjects("Button"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDButtonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDButtonObjects1[i].setOpacity(255);
}
}}

}


{

gdjs.MenuCode.GDRulesButtonObjects1.createFrom(runtimeScene.getObjects("RulesButton"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
gdjs.MenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDRulesButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_1.val ) {
{
gdjs.MenuCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(gdjs.VariablesContainer.badVariable) == 0;
}}
gdjs.MenuCode.conditionTrue_1.val = true && gdjs.MenuCode.condition0IsTrue_1.val && gdjs.MenuCode.condition1IsTrue_1.val;
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDRulesButtonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDRulesButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDRulesButtonObjects1[i].setOpacity(100);
}
}
{ //Subevents
gdjs.MenuCode.eventsList0xa1af38(runtimeScene);} //End of subevents
}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDCloseModalButtonObjects1.createFrom(runtimeScene.getObjects("CloseModalButton"));
gdjs.MenuCode.GDHow2PlayModalObjects1.createFrom(runtimeScene.getObjects("How2PlayModal"));
gdjs.MenuCode.GDHow2PlayTextObjects1.createFrom(runtimeScene.getObjects("How2PlayText"));
{for(var i = 0, len = gdjs.MenuCode.GDHow2PlayTextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDHow2PlayTextObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.MenuCode.GDCloseModalButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDCloseModalButtonObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.MenuCode.GDHow2PlayModalObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDHow2PlayModalObjects1[i].setOpacity(0);
}
}}

}


{

gdjs.MenuCode.GDRulesButtonObjects1.createFrom(runtimeScene.getObjects("RulesButton"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDRulesButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDRulesButtonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDRulesButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDRulesButtonObjects1[i].setOpacity(255);
}
}}

}


{

gdjs.MenuCode.GDCloseModalButtonObjects1.createFrom(runtimeScene.getObjects("CloseModalButton"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
gdjs.MenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDCloseModalButtonObjects1Objects, runtimeScene, true, true);
}if ( gdjs.MenuCode.condition0IsTrue_1.val ) {
{
gdjs.MenuCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(26)) == 1;
}}
gdjs.MenuCode.conditionTrue_1.val = true && gdjs.MenuCode.condition0IsTrue_1.val && gdjs.MenuCode.condition1IsTrue_1.val;
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDCloseModalButtonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDCloseModalButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDCloseModalButtonObjects1[i].setOpacity(255);
}
}}

}


{

gdjs.MenuCode.GDCloseModalButtonObjects1.createFrom(runtimeScene.getObjects("CloseModalButton"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
gdjs.MenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDCloseModalButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_1.val ) {
{
gdjs.MenuCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(26)) == 1;
}}
gdjs.MenuCode.conditionTrue_1.val = true && gdjs.MenuCode.condition0IsTrue_1.val && gdjs.MenuCode.condition1IsTrue_1.val;
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDCloseModalButtonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDCloseModalButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDCloseModalButtonObjects1[i].setOpacity(100);
}
}
{ //Subevents
gdjs.MenuCode.eventsList0xcebc20(runtimeScene);} //End of subevents
}

}


{

gdjs.MenuCode.GDcloseObjects1.createFrom(runtimeScene.getObjects("close"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDcloseObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDcloseObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDcloseObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDcloseObjects1[i].setOpacity(100);
}
}
{ //Subevents
gdjs.MenuCode.eventsList0x69d540(runtimeScene);} //End of subevents
}

}


{

gdjs.MenuCode.GDcloseObjects1.createFrom(runtimeScene.getObjects("close"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDcloseObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDcloseObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDcloseObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDcloseObjects1[i].setOpacity(255);
}
}}

}


}; //End of gdjs.MenuCode.eventsList0xb2158


gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.MenuCode.GDRulesButtonObjects1.length = 0;
gdjs.MenuCode.GDRulesButtonObjects2.length = 0;
gdjs.MenuCode.GDRulesButtonObjects3.length = 0;
gdjs.MenuCode.GDworktObjects1.length = 0;
gdjs.MenuCode.GDworktObjects2.length = 0;
gdjs.MenuCode.GDworktObjects3.length = 0;
gdjs.MenuCode.GDBackTextObjects1.length = 0;
gdjs.MenuCode.GDBackTextObjects2.length = 0;
gdjs.MenuCode.GDBackTextObjects3.length = 0;
gdjs.MenuCode.GDbackgroundObjects1.length = 0;
gdjs.MenuCode.GDbackgroundObjects2.length = 0;
gdjs.MenuCode.GDbackgroundObjects3.length = 0;
gdjs.MenuCode.GDhazardtObjects1.length = 0;
gdjs.MenuCode.GDhazardtObjects2.length = 0;
gdjs.MenuCode.GDhazardtObjects3.length = 0;
gdjs.MenuCode.GDfuntObjects1.length = 0;
gdjs.MenuCode.GDfuntObjects2.length = 0;
gdjs.MenuCode.GDfuntObjects3.length = 0;
gdjs.MenuCode.GDCanvasObjects1.length = 0;
gdjs.MenuCode.GDCanvasObjects2.length = 0;
gdjs.MenuCode.GDCanvasObjects3.length = 0;
gdjs.MenuCode.GDBuildingsObjects1.length = 0;
gdjs.MenuCode.GDBuildingsObjects2.length = 0;
gdjs.MenuCode.GDBuildingsObjects3.length = 0;
gdjs.MenuCode.GDLifeLineObjects1.length = 0;
gdjs.MenuCode.GDLifeLineObjects2.length = 0;
gdjs.MenuCode.GDLifeLineObjects3.length = 0;
gdjs.MenuCode.GDButtonObjects1.length = 0;
gdjs.MenuCode.GDButtonObjects2.length = 0;
gdjs.MenuCode.GDButtonObjects3.length = 0;
gdjs.MenuCode.GDcloseObjects1.length = 0;
gdjs.MenuCode.GDcloseObjects2.length = 0;
gdjs.MenuCode.GDcloseObjects3.length = 0;
gdjs.MenuCode.GDStartGameTextObjects1.length = 0;
gdjs.MenuCode.GDStartGameTextObjects2.length = 0;
gdjs.MenuCode.GDStartGameTextObjects3.length = 0;
gdjs.MenuCode.GDLoadButtonObjects1.length = 0;
gdjs.MenuCode.GDLoadButtonObjects2.length = 0;
gdjs.MenuCode.GDLoadButtonObjects3.length = 0;
gdjs.MenuCode.GDHow2PlayObjects1.length = 0;
gdjs.MenuCode.GDHow2PlayObjects2.length = 0;
gdjs.MenuCode.GDHow2PlayObjects3.length = 0;
gdjs.MenuCode.GDLoadGameTextObjects1.length = 0;
gdjs.MenuCode.GDLoadGameTextObjects2.length = 0;
gdjs.MenuCode.GDLoadGameTextObjects3.length = 0;
gdjs.MenuCode.GDHow2PlayModalObjects1.length = 0;
gdjs.MenuCode.GDHow2PlayModalObjects2.length = 0;
gdjs.MenuCode.GDHow2PlayModalObjects3.length = 0;
gdjs.MenuCode.GDCloseModalButtonObjects1.length = 0;
gdjs.MenuCode.GDCloseModalButtonObjects2.length = 0;
gdjs.MenuCode.GDCloseModalButtonObjects3.length = 0;
gdjs.MenuCode.GDHow2PlayTextObjects1.length = 0;
gdjs.MenuCode.GDHow2PlayTextObjects2.length = 0;
gdjs.MenuCode.GDHow2PlayTextObjects3.length = 0;
gdjs.MenuCode.GDbackgroundObjects1.length = 0;
gdjs.MenuCode.GDbackgroundObjects2.length = 0;
gdjs.MenuCode.GDbackgroundObjects3.length = 0;
gdjs.MenuCode.GDnameObjects1.length = 0;
gdjs.MenuCode.GDnameObjects2.length = 0;
gdjs.MenuCode.GDnameObjects3.length = 0;
gdjs.MenuCode.GDbuybtnObjects1.length = 0;
gdjs.MenuCode.GDbuybtnObjects2.length = 0;
gdjs.MenuCode.GDbuybtnObjects3.length = 0;

gdjs.MenuCode.eventsList0xb2158(runtimeScene);
return;
}
gdjs['MenuCode'] = gdjs.MenuCode;
