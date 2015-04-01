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
function getAllProject() {
    console.log("geting the project list");
    var outMessage = new root.currentContext['typesJs'].OutMessage("getAllProject", "");
    root.currentContext['connectionJs'].sendMessage(JSON.stringify(outMessage));
}
//根据command参数，用dispatch()转发到onGetAllProject（）这个函数
function onGetAllProject(res) {
    console.log("Update project list.");
    var projectList = JSON.parse(res.Result);  //获取整个大结果集合里面的Result
    if (projectList === null)
        return;
    console.log("ongetallproject" + projectList.length);
    for (var i = 0; i < projectList.length; ++i) {

        root.currentContext["projectListModel"].append(projectList[i]);

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

//登陆框
function showNewProject() {
    var projectNew = Qt.createComponent("qrc:/Project/ProjectNew.qml");
    if (projectNew.status === Component.Error) {
        console.log("Error loading component:", projectNew.errorString());
    }
    var projectNewWidth = root.width*3/5
    var projectNewHeight = root.height/2

    var projectNewWindow = projectNew.createObject(root, {width: projectNewWidth, height: projectNewHeight});
    //projectNewWindow.width = Qt.binding(function() {return root.width});
    //projectNewWindow.height = Qt.binding(function() {return root.height});
}
