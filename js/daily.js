//Daily
function getCompanyDaily(companyCode) {

    var outMessage = new  root.currentContext["types"].OutMessage("getCompanyDaily",companyCode);
    root.currentContext.connection.sendMessage(JSON.stringify(outMessage));
    console.log("getCompanyDaily"+JSON.stringify(outMessage));
    console.log("查询公司今天的所有的Daily");

}
function onGetCompanyDaily(res) {
    if(res === null) {
        return;
    }
    //    console.log("onGetCompanyDaily(res)");
    //    console.log("res.Result"+res.Result);
    var getCompanyDaily = JSON.parse(res.Result);
    //    console.log("getCompanyDaily"+getCompanyDaily);
    root.currentContext["getCompanyDaily"] = getCompanyDaily ;
    //    console.log( "skksks"+root.currentContext["getCompanyDaily"]);

    for(var i = 0;i < getCompanyDaily.length;i++) {
        //          var companyDailyItem = JSON.parse(getCompanyDaily[i]);
        //          root.currentContext ["getCampanyDaily"][companyDailyItem.GraphCode] =companyDailyItem;
        //          root.currentContext["getCampainDailyDaily"] = root.currentContext ["getCampanyDaily"][companyDailyItem.GraphCode];
        root.currentContext["getCompanyDailyModel"].append(getCompanyDaily[i]);
    }
    //    console.log("getCompanyDailyModel"+JSON.stringify( root.currentContext["getCompanyDailyModel"]));
    //    console.log(" root.currentContextgetCompanyDailyModel的个数是"+  root.currentContext["getCompanyDailyModel"].count);
}

function  addDaily(versionTag,companyCode,storagePositionDocumentPath,imagePath) {
    var mission =  root.currentContext["currentUnderDoingMission"][ root.currentContext["currentMissionIndex"]];
    console.log(root.currentContext["currentMissionIndex"]);
    console.log(""+JSON.stringify(mission) );
    console.log(mission.MissionName);
    var newDaily =new root.currentContext["types"].Daily("",mission.MissionCode,companyCode,mission.ProjectCode,versionTag,storagePositionDocumentPath,ImageIO.pngToBase64(imagePath));
    var outMessage = new  root.currentContext["types"].OutMessage("addDaily",JSON.stringify(newDaily));
    console.log("addDaily()请求");
    console.log(JSON.stringify(outMessage));
    root.currentContext.connection.sendMessage(JSON.stringify(outMessage));
}
function onGetAddDaily(res)
{
    console.log(" onGetAddDaily(res)");
    if(res === null) {
        return;
    }
    console.log("res.Result"+res.Result);
    var getAddDaily = JSON.parse(res.Result);
    root.currentContext["addDaily"] =getAddDaily;
    console.log(" getAddDaily"+ JSON.stringify( root.currentContext["addDaily"]))
    console.log(" getAddDaily"+JSON.stringify(getAddDaily));
    console.log("getAddDaily的类型"+typeof(getAddDaily));
    console.log("getAddDaily的类型"+typeof(root.currentContext["addDaily"]));
    console.log(root.currentContext["getCompanyDailyModel"].count);
    root.currentContext["getCompanyDailyModel"].append(getAddDaily);
    console.log( root.currentContext["getCompanyDailyModel"].count);
}
function modifyDailyPage() {
    if (  root.currentContext["modifyDaily"].status === Component.Error) {
        console.log("Error loading component:",  root.currentContext["modifyDaily"].errorString());
    }
    var a =  root.currentContext["modifyDaily"].createObject(root.currentContext["dailyPage"]);

    a.width = root.currentContext["dailyPage"].width-200;
    a.height = root.currentContext["dailyPage"].height-100;
    a.x = root.currentContext["dailyPage"].width/2-a.width/2;
    a.y = (root.currentContext["dailyPage"].height-a.height)/2;



}
function modifyDaily(dailyCode,missionCode,companyCode,projectCode,versionTag,storagePosition,picture) {
    var modifiedDaily = new root.currentContext["types"].Daily(dailyCode,missionCode,companyCode,projectCode,versionTag,storagePosition,picture);
    var outMessage = new  root.currentContext["types"].OutMessage("modifyDaily",JSON.stringify(modifiedDaily));

    console.log(JSON.stringify(outMessage));
    root.currentContext.connection.sendMessage(JSON.stringify(outMessage));
}
function onModifyDaily(res) {
    if(res === null) {
        return;
    }
    var modiliedDaily =JSON.parse(res.Result);
    console.log("res.Result"+res.Result);
    root.currentContext["getCompanyDailyModel"].remove(root.currentContext["currentDailyIndex"],1);
    root.currentContext["getCompanyDailyModel"].insert(root.currentContext["currentDailyIndex"],modiliedDaily);

}
function deleteDaily(DailyCode) {
    var dailyCode = {DailyCode:DailyCode};
    var outMessage = new  root.currentContext["types"].OutMessage("deleteDaily",JSON.stringify(dailyCode));

    console.log(JSON.stringify(outMessage));
    root.currentContext.connection.sendMessage(JSON.stringify(outMessage));
}
function onDeleteDaily(res) {
    console.log("onDeleteDaily(res)");
    console.log(res.Result);
    root.currentContext["getCompanyDailyModel"].remove(root.currentContext["currentDailyIndex"],1);
}
