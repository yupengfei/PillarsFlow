function sendMessage(message) {
    //用socket向服务器发送信息
    socket.sendTextMessage(message)
}

//************************Dispatch*********************//
function dispatch(message) {
    //让登陆信息显示出来
//    console.log("-----------------",message);
    var result = JSON.parse(message);
    if (result.Error.ErrorCode !== 0) {
        console.log(result.Error.ErrorMessage);
        return;
    }

    else {
        if (result.Command === "login") {
            root.currentContext["loginJs"].onLogin(result);
        } else if (result.Command === "getAllProject") {
            root.currentContext["projectJs"].onGetAllProject(result);
        } else if (result.Command === "addProject") {
            root.currentContext["production"].onAddProject(result);
        }else if(result.Command === "modifyProject") {

            root.currentContext["production"].onModifyCurrentProject(result);
        } else if(result.Command ==="getAllUnreceivedChart") {
            root.currentContext["chart"].onGetAllUnreceivedChart(result);
        } else if(result.Command === "getAllUser") {
            root.currentContext["peopleJs"].onGetAllUser(result);
        } else if (result.Command === "addNode") {
            root.currentContext["production"].onAddNode(result);
        } else if(result.Command === "getProjectAssertCampaign") {
            root.currentContext["production"].onGetAllAssetCampaign(result);

        } else if(result.Command === "getProjectShotCampaign") {
            root.currentContext["production"].onGetProjectShotCampaign(result);

        }else if(result.Command === "getCampaignNode"){
            console.log("执行onGetAllCampainNodes");
            root.currentContext["production"].onGetAllCampainNodes(result);
            console.log("GetCampaignNode"+result);
        }else if (result.Command === "getAllNode") {
            onGetAllNode(result);
        } else if (result.Command === "modifyMission") {
            root.currentContext["production"].onModifyCurrentMision(result);
        } else if (result.Command === "deleteMission") {
            root.currentContext["production"].onDeleteMission (result);
        } else if (result.Command === "deleteNode") {
            onDeleteNode(result);
        } else if (result.Command === "modifyNode") {
            root.currentContext["production"].onModifyNode(result);
            console.log("))))))))))))))))");
            console.log("onModifyNode()"+JSON.stringify(result));
        } else if (result.Command === "addDependency") {

            root.currentContext.ui.onAddDependency(result);
        } else if (result.Command === "deleteDependency") {
            onDeleteDependency(result);
        } else if (result.Command === "getCampaignDependency") {

            console.log("connection.js getCampaignDependency");
            root.currentContext["ui"].onGetCampaignDependency(result);

        } else if (result.Command === "addChart") {
            root.currentContext["chart"]. onChartMessage(result);
            console.log("add chart" + result.Result)

        } else if(result.Command === "receiveChart") {
            root.currentContext["chart"].onReceiveChart(result);

        }else if(result.Command === "getPersonAllWaitingMission") {
            root.currentContext["production"].onGetPersonAllWaitingMission(result);


        }else if(result.Command === "getPersonAllUndergoingMission") {
            root.currentContext["production"].onGetPersonAllUndergoingMission (result);

        }else if(result.Command === "getPersonAllReviewingMission") {
            root.currentContext["production"].onGetPersonAllReviewingMission (result);


        }else if(result.Command === "getPersonAllFinishedMission") {
            root.currentContext["production"].onGetPersonAllFinishedMission (result);

        }else if(result.Command === "getAllUndesignatedMission") {
            console.log(")))))))))))))))))");
            console.log("getAllUndesignatedMission"+result);
            root.currentContext["production"].onGetAllUndesignatedMission (result);

        }else if(result.Command === "addDaily") {

            root.currentContext["production"].onGetAddDaily(result);

        }else if(result.Command === "modifyDaily") {

            root.currentContext["production"].onModifyDaily(result);


        }else if(result.Command === "deleteDaily") {

            root.currentContext["production"].onDeleteDaily(result);


        }
        else if(result.Command === "getCompanyDaily") {
            root.currentContext["production"].onGetCompanyDaily(result);

        }else if(result.Command === "addTarget") {

            root.currentContext["production"].onAddTarget(result);

        }else if(result.Command === "getMissionByMissionCode") {
            root.currentContext["production"].onGetMissionByMissionCode(result);

        }else if(result.Command ==="addPost") {
            root.currentContext["production"].onAddPost(result);


        }


    }
}
