//addTarget
function addTarget(versionTag,storagePositionDocumentPath,imagePath) {

    var mission =  root.currentContext["currentUnderDoingMission"][ root.currentContext["currentMissionIndex"]];
    console.log(root.currentContext["currentMissionIndex"]);
    console.log(""+JSON.stringify(mission) );
    console.log(mission.MissionName);
    var newTarget =new root.currentContext["types"].Target("",mission.MissionCode,mission.ProjectCode,versionTag,storagePositionDocumentPath,ImageIO.pngToBase64(imagePath));
    var outMessage = new  root.currentContext["types"].OutMessage("addTarget",JSON.stringify(newTarget));
    console.log("addTarget()请求");
    console.log(JSON.stringify(outMessage));
    root.currentContext.connection.sendMessage(JSON.stringify(outMessage));
}
function onAddTarget(res) {
    console.log(" onAddTarget (res)");
    if(res === null) {
        return;
    }
    console.log("res.Result"+res.Result);
    var getAddTarge = JSON.parse(res.Result);
    root.currentContext["addTarget"] =getAddTarge;
    root.currentContext["getAddTargetModel"].append(getAddTarge);
    console.log( root.currentContext["getAddTargetModel"].count);


}
