function initDatabase(db) {
    console.log("初始化数据库，丢弃现有的表，重新再建一遍");
    var dropProjectTable = "DROP TABLE IF EXISTS project";
    var dropMissionTable = "DROP TABLE IF EXISTS mission";
    var dropDependencyTable = "DROP TABLE IF EXISTS graph";
    var createProjetTable = "CREATE TABLE IF NOT EXISTS project(ProjectCode TEXT, \
        ProjectName TEXT, ProjectDetail TEXT, PlanBeginDatetime TEXT, PlanEndDatetime TEXT, \
        RealBeginDatetime TEXT, RealEndDatetime TEXT, PersonInCharge TEXT, \
        CompanyCode TEXT, Status INTEGER, Picture TEXT)";
    var createMissionTable = "CREATE TABLE IF NOT EXISTS mission(MissionCode TEXT, \
        MissionName TEXT, ProjectCode TEXT, ProductType INTEGER, IsCampaign INTEGER, \
        MissionDetail TEXT, PlanBeginDatetime TEXT, PlanEndDatetime TEXT, \
        RealBeginDatetime TEXT, RealEndDatetime TEXT, PersonInCharge TEXT, \
        Status INTEGER, Picture TEXT)";
    var createDependencyTable = "CREATE TABLE IF NOT EXISTS graph(GraphCode TEXT, \
        CampaignCode TEXT, ProjectCode TEXT, NodeCode TEXT, ProductType TEXT, \
        XCoordinate INTEGER, YCoordinate INTEGER, Width INTEGER, Height INTEGER)";

    db.transaction(
        function(tx) {
            tx.executeSql(dropProjectTable);
            tx.executeSql(dropMissionTable);
            tx.executeSql(dropDependencyTable);
            tx.executeSql(createProjetTable);
            tx.executeSql(createMissionTable);
            tx.executeSql(createDependencyTable);
        }
    );
}

function insertProject(db, project) {
    //UPDATE data set value=? where name="crazy"', [JSON.stringify(obj)]
    //INSERT INTO data VALUES (?,?)', ['crazy', JSON.stringify(obj)]
}

function updateProject(db, project, projectCode) {

}

function deleteProject(db, projectCode) {

}

function getAllProject(db) {

}

function getProjectByProjectCode(db) {

}

function insertMission(db, mission) {
    //UPDATE data set value=? where name="crazy"', [JSON.stringify(obj)]
    //INSERT INTO data VALUES (?,?)', ['crazy', JSON.stringify(obj)]
}

function updateMission(db, mission, missionCode) {

}

function deleteMission(db, missionCode) {

}

function getAllMissionByProjectCode(db, projectCode) {

}

function getMissionByMissionCode(db, missionCode) {

}

function insertGraph(db, dependency) {
    //UPDATE data set value=? where name="crazy"', [JSON.stringify(obj)]
    //INSERT INTO data VALUES (?,?)', ['crazy', JSON.stringify(obj)]
}

function updateGraph(db, dependency, dependencyCode) {

}

function deleteGraph(db, dependencyCode) {

}

function getDependencyByDependencyCode(db, dependencyCode) {

}

