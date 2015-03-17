//所有的类型信息汇总在这个地方
function UserLogin(email, password) {
    this.Email = email;
    this.Password = password;
}

function ProjectMissions(userName, projectName) {
    this.UserName = userName
    this.ProjectName = projectName
}

function OutMessage(command, parameter) {
    this.Command = command
    this.Parameter = parameter
}

function User() {

    this.UserCode = "";
    this.Email = "";
    this.Password = "";

    this.Group = "";
    this.DisplayName = "";
    this.Position = "";
    this.Picture = "";

    this.Phone = "";
    this.InsertDatetime = "";
    this.UpdateDatetime = "";
}


function Project(projectCode, projectName, projectDetail, planBeginDatetime, planEndDatetime, realBeginDatetime, realEndDatetime,
                 personInCharge, companyCode,status, picture, insertDatetime, updateDatetime) {
    this.ProjectCode = projectCode
    this.ProjectName = projectName
    this.ProjectDetail = projectDetail
    this.PlanBeginDatetime = planBeginDatetime
    this.PlanEndDatetime = planEndDatetime
    this.RealBeginDatetime = realBeginDatetime
    this.RealEndDatetime = realEndDatetime
    this.PersonInCharge = personInCharge
    this.CompanyCode = companyCode
    this.Status = status
    this.Picture = picture
    this.InsertDatetime = insertDatetime
    this.UpdateDatetime = updateDatetime
}

function Mission(missionCode,missionName,projectCode,projectType,isCampain,missionDetail,planBeginTime,planEndTime,RealBeginDatetime,RealEndDatetime,chargePerson,status,picture) {
    this.MissionCode =missionCode;
    this.MissionName = missionName;
    this.ProjectCode = projectCode;
    this.ProductType = projectType;
    this.IsCampaign = isCampain;

    this.MissionDetail = missionDetail;
    this.PlanBeginDatetime = planBeginTime;
    this.PlanEndDatetime = planEndTime;
    this.RealBeginDatetime = RealBeginDatetime;
    this.RealEndDatetime = RealEndDatetime;
    this.PersonIncharge = chargePerson;
    this.Status = status;
    this.Picture =picture;
}

function Graph(graphCode, campaignCode, projectCode, nodeCode, productType, xCoordinate, yCoordinate, width, height)
{
    this.GraphCode = graphCode;
    this.CampaignCode = campaignCode;  //missionCode
    this.ProjectCode  = projectCode;
    this.NodeCode  = nodeCode;
    this.ProductType = productType;
    this.XCoordinate  = xCoordinate ;
    this.YCoordinate  = yCoordinate ;
    this.Width = width;
    this.Height = height;

}

function ChartMessage(isPicture, message, to) {
    this.IsPicture = isPicture;
    this.Message = message;
    this.To = to;
}


function Node() {
    this.GraphCode = "";
    this.CampaignCode = "";
    this.ProjectCode = "";
    this.NodeCode = "";
    this.Width = 100;
    this.Height = 100;
    this.XCoordinate = 0;
    this.YCoordinate = 0;
    this.InsertDatetime = "";
    this.UpdateDatetime = "";
}
function Dependency(campainCode,projectCode,projectType,startMissionCode,endMissionCode,denPendency) {
    //    this.DependencyCode = dependencyCode;
    this.CampaignCode = campainCode;
    this.ProjectCode = projectCode;
    this.ProductType =projectType;
    this.StartMissionCode = startMissionCode;
    this.EndMissionCode = endMissionCode;
    this.DependencyType = denPendency;
    //    this.InsertDatetime = "";
    //    this.UpdateDatetime = "";
}

function Target(dailyCode,missionCode,projectCode,versionTag,storagePosition,picture) {
    this.DailyCode = dailyCode
    this.MissionCode = missionCode
    this.ProjectCode = projectCode
    this.VersionTag = versionTag
    this.StoragePosition = storagePosition
    this.Picture = picture

}

function Daily(dailyCode,missionCode,companyCode,projectCode,versionTag,storagePosition,picture) {
    this.DailyCode = dailyCode
    this.MissionCode = missionCode
    this.CompanyCode = companyCode
    this.ProjectCode = projectCode
    this.VersionTag = versionTag
    this.StoragePosition = storagePosition
    this.Picture = picture

}
function Post(missionCode,postType,code,isPicture,message,replyTo,postTime,deleted,deletedTime) {
    this.MissionCode =  missionCode;
    this.PostType = postType;
    this.Code = code;
    this.IsPicture = isPicture;
    this.Message = message;
    this.ReplyTo = replyTo;
    this.PostTime  = postTime;
    this.Deleted = deleted;
    this. DeletedTime = deletedTime;
}
