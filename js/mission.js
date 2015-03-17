//GetMissionByMissionCode
function getMissionByMissionCode(missionCode) {
    var mission;
    if(root.currentContext["MissionCurrentState"] === 0) {
        mission =root.currentContext["currentWaitingMission"][root.currentContext["currentMissionIndex"]];

    }else if(root.currentContext["MissionCurrentState"] === 3) {
        mission =root.currentContext["currentUnderDoingMission"][root.currentContext["currentMissionIndex"]];

    }else if(root.currentContext["MissionCurrentState"] === 1) {
        mission = root.currentContext["currentReviewingMission"][root.currentContext["currentMissionIndex"]];

    }else if(root.currentContext["MissionCurrentState"] === 2) {
        mission = root.currentContext["currentFinishedMission"][root.currentContext["currentMissionIndex"]];

    }else if(root.currentContext["MissionCurrentState"] === 4) {
        mission = root.currentContext["currentAllUndesignatedMission"][root.currentContext["currentMissionIndex"]];

    }
    var currentMissionCode =  mission.MissionCode;
    console.log("currentMissionCode" +currentMissionCode);
    var currentMissionCodeStrut = {MissionCode:currentMissionCode};
    console.log("currentMissionCodeStrut"+currentMissionCodeStrut);
    var outMessage = new root.currentContext.types.OutMessage("getMissionByMissionCode",JSON.stringify(currentMissionCodeStrut));
    root.currentContext["connection"].sendMessage(JSON.stringify(outMessage));
    console.log("getMissionByMissionCode(missionCode)");

}
function onGetMissionByMissionCode (res) {

    console.log("onGetMissionByMissionCode (res)");
    if(res === null) {
        return;
    }
    console.log("res.Result"+res.Result);
    var getMissionByMissionCode = JSON.parse(res.Result);
    root.currentContext["getMissionByMissionCode"] = getMissionByMissionCode;
    root.currentContext["getMissionByMissionCodeModel"].append(getMissionByMissionCode);
    console.log( root.currentContext["getMissionByMissionCodeModel"].count);

}
//unStratMission.ActiveMission.unGoingMission.finishMission的Request
function getPersonAllWaitingMission () {
    var outMessage = new root.currentContext.types.OutMessage("getPersonAllWaitingMission","");
    console.log(JSON.stringify(outMessage));
    root.currentContext.connection.sendMessage(JSON.stringify(outMessage));
    console.log("getPersonAllWaitingMission ()发送成功");
}
function onGetPersonAllWaitingMission (res) {
    console.log("onGetPersonAllWaitingMission (res)");
    if(res === null) {
        return;
    }
    console.log("res.Result"+res.Result);
    var getPersonAllWaitingMission = JSON.parse(res.Result);

    //       console.log(typeof(res.Result));
    //       console.log(typeof(getPersonAllWaitingMission));
    //       console.log(res.Result.length);
    //       console.log(getPersonAllWaitingMission.length);
    root.currentContext["currentWaitingMission"] = getPersonAllWaitingMission;
    console.log( root.currentContext["currentWaitingMission"] );
    for(var i = 0 ;i < getPersonAllWaitingMission.length;i++)
    {     console.log("onGetPersonAllWaitingMission()");
        console.log(typeof(getPersonAllWaitingMission[i]));
        console.log(JSON.stringify(getPersonAllWaitingMission[i]));
        root.currentContext["getAllWaitingMissionModel"].append(getPersonAllWaitingMission[i]);

    }
    console.log(root.currentContext["getAllWaitingMissionModel"].count);
}
function  getPersonAllUndergoingMission () {
    var outMessage = new root.currentContext.types.OutMessage("getPersonAllUndergoingMission","");
    console.log(JSON.stringify(outMessage));
    root.currentContext.connection.sendMessage(JSON.stringify(outMessage));
    console.log("getPersonAllUndergoingMission发送成功");

}
function onGetPersonAllUndergoingMission (res) {
    console.log("onGetPersonAllUndergoingMission (res)");
    if(res === null) {
        return;
    }
    console.log("res.Result"+res.Result);
    var getPersonAllUndergoingMission = JSON.parse(res.Result);
    root.currentContext["currentUnderDoingMission"] = getPersonAllUndergoingMission;
    console .log( root.currentContext["currentUnderDoingMission"]);
    for(var i = 0 ;i < getPersonAllUndergoingMission.length;i++)
    {     console.log("GetPersonAllUndergoingMission()");
        console.log(typeof(getPersonAllUndergoingMission[i]));
        console.log(JSON.stringify(getPersonAllUndergoingMission[i]));
        root.currentContext["getAllundergoingMissionModel"].append(getPersonAllUndergoingMission[i]);

    }
    console.log( root.currentContext["getAllundergoingMissionModel"].count);

}
function getPersonAllReviewingMission () {
    var outMessage = new root.currentContext.types.OutMessage("getPersonAllReviewingMission","");
    console.log(JSON.stringify(outMessage));
    root.currentContext.connection.sendMessage(JSON.stringify(outMessage));
    console.log(" getPersonAllReviewingMission ()发送成功");


}
function onGetPersonAllReviewingMission (res) {
    console.log("onGetPersonAllReviewingMission (res)");
    if(res === null) {
        return;
    }
    //     console.log("res.Result"+res.Result);
    var getPersonAllReviewingMission = JSON.parse(res.Result);
    //       console.log(typeof(res.Result));
    //       console.log(typeof(getPersonAllWaitingMission));
    //       console.log(res.Result.length);
    //       console.log(getPersonAllWaitingMission.length);
    root.currentContext["currentReviewingMission"] = getPersonAllReviewingMission;
    for(var i = 0 ;i < getPersonAllReviewingMission.length;i++)
    {     console.log("GetPersonAllUndergoingMission()");
        console.log(typeof(getPersonAllReviewingMission[i]));
        console.log(JSON.stringify(getPersonAllReviewingMission[i]));
        root.currentContext["getPersonAllReviewingMissionModel"].append(getPersonAllReviewingMission[i]);

    }
    console.log( "root.currentContext[getPersonAllReviewingMissionModel"+root.currentContext["getPersonAllReviewingMissionModel"].count);
}
function getPersonAllFinishedMission () {
    var outMessage = new root.currentContext.types.OutMessage("getPersonAllFinishedMission","");
    console.log(JSON.stringify(outMessage));
    root.currentContext.connection.sendMessage(JSON.stringify(outMessage));
    console.log(" getPersonAllFinishedMission ()发送成功");

}
function onGetPersonAllFinishedMission (res) {
    console.log("onGetPersonAllFinishedMission (res)");
    if(res === null) {
        return;
    }
    //     console.log("res.Result"+res.Result);
    var getPersonAllFinishedMission = JSON.parse(res.Result);
    //       console.log(typeof(res.Result));
    //       console.log(typeof(getPersonAllWaitingMission));
    //       console.log(res.Result.length);
    //       console.log(getPersonAllWaitingMission.length);
    root.currentContext["currentFinishedMission"] = getPersonAllFinishedMission ;
    for(var i = 0 ;i < getPersonAllFinishedMission.length;i++)
    {     console.log("GetPersonAllUndergoingMission()");
        console.log(typeof(getPersonAllFinishedMission[i]));
        console.log(JSON.stringify(getPersonAllFinishedMission[i]));
        root.currentContext["getPersonAllFinishedMissionModel"].append(getPersonAllFinishedMission[i]);

    }
    console.log( "getPersonAllFinishedMissionModel"+ root.currentContext["getPersonAllFinishedMissionModel"].count);


}
function getAllUndesignatedMission () {

    var outMessage = new root.currentContext.types.OutMessage("getAllUndesignatedMission","");
    console.log(JSON.stringify(outMessage));
    root.currentContext.connection.sendMessage(JSON.stringify(outMessage));
    console.log(" getAllUndesignatedMission发送成功");

}
function onGetAllUndesignatedMission (res) {
    console.log("onGetAllUndesignatedMission (res)");
    if(res === null) {
        return;
    }
    console.log("res.Result"+res.Result);
    var getAllUndesignatedMission= JSON.parse(res.Result);
    //       console.log(typeof(res.Result));
    //       console.log(typeof(getPersonAllWaitingMission));
    //       console.log(res.Result.length);
    //       console.log(getPersonAllWaitingMission.length);
    root.currentContext["currentAllUndesignatedMission"] = getAllUndesignatedMission ;
    for(var i = 0 ;i < getAllUndesignatedMission.length;i++)
    {     console.log("onGetAllUndesignatedMission()");
        console.log(typeof(getAllUndesignatedMission [i]));
        console.log(JSON.stringify(getAllUndesignatedMission [i]));
        root.currentContext["getAllUndesignatedMissionModel"].append(getAllUndesignatedMission[i]);

    }
    console.log( "getAllUndesignatedMissionModel臭屁"+  root.currentContext["getAllUndesignatedMissionModel"].count);

}
