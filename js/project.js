function addProject(name, begin, end, manager,company, detail,picture) {
    var proj = new root.currentContext.types.Project("", name, detail, begin, end, "", "", manager,company, 0, picture, "", "");
    var outMessage = new root.currentContext.types.OutMessage("addProject", JSON.stringify(proj));
    root.currentContext.connection.sendMessage(JSON.stringify(outMessage));
}
function onAddProject(res) {
    var project = JSON.parse(res.Result);
    //    console.log(project.CompanyCode);
    root.currentContext["projectListModel"].append(project);
}
//向服务器发送project接口信息，在connection.js 里的p29行－41行得到相应的projectList
function getProjectList() {
    console.log("to do, get the project list");
    var outMessage = new root.currentContext.types.OutMessage("getAllProject", "");
    root.currentContext.connection.sendMessage(JSON.stringify(outMessage));
}
//根据command参数，用dispatch()转发到onGetAllProject（）这个函数
function onGetAllProject(res) {
    console.log("Update project list.");
    var projectList = JSON.parse(res.Result);  //获取整个大结果集合里面的Result
    if (projectList === null)
        return;
    //projectlist 是一个数组
    root.currentContext["projects"] = projectList;
    //root.currentContext["projectListModel"].clear();
    console.log("ongetallproject" + root.currentContext["projects"].length);
    for (var i = 0; i < root.currentContext["projects"].length; ++i) {

        root.currentContext["projectListModel"].append(root.currentContext["projects"][i]);

    }
    console.log("ongetallproject" + root.currentContext["projectListModel"].count);
}

function modifyCurrentProject(projectCode,projectName,projectDetail,planBeginDateTime,planEndDateTime,realBeginDatetime,realEndDatetime,personInCharge,companyCode,status,picture) {

    var modifiedProject = new  root.currentContext["types"].Project(projectCode,projectName,projectDetail,planBeginDateTime,planEndDateTime,realBeginDatetime,realEndDatetime,personInCharge,companyCode,status,picture);
    var outMessage = new  root.currentContext["types"].OutMessage("modifyProject",JSON.stringify(modifiedProject));
    root.currentContext.connection.sendMessage(JSON.stringify(outMessage));
    console.log("修改Project"+JSON.stringify(outMessage));

}
function onModifyCurrentProject(res) {
    console.log("onModifyProject(res)");
    if(res === null)
        return;
    var modifiedProject = JSON.parse(res.Result);
    var order = root.currentContext["projectListModel"].count;
    //    console.log("order"+order);
    root.currentContext["projectListModel"].remove(root.currentContext["currentProjectIndex"],1);
    root.currentContext["projectListModel"].insert(root.currentContext["currentProjectIndex"],modifiedProject);

}
