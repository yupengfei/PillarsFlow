//{
//    “command”:”getAllUser”,
//    ”parameter“：”{
//    }“
//}
//返回值
//{
//    "error": {
//        "errorCode" : 0,
//        "errorMessage": ""
//    },
//    “commnd”: “getAllUser”,
//    “UserCode”: string,//发起该操作的user
//    “result”:”[{
//        UserCode string
//        Email string
//        Password string，返回只里面该字段为空
//        Group string
//        DisplayName string
//        Position string
//        Picture string
//        Phone string
//        InsertDatetime string
//        UpdateDatetime string
//    }]”
//}
function getAllUser()
{
    var outMessage = new root.currentContext.typesJs.OutMessage("getAllUser","");
    root.currentContext.connectionJs.sendMessage(JSON.stringify(outMessage));
}

function onGetAllUser(res) {
    if (res === null) {
        console.log("res is empty")
    }
    var allUser = JSON.parse(res.Result);
    if (allUser === null)
        return;
    for(var i = 0;i<allUser.length;i++)
    {
        allUserModel.append(allUser[i]);
    }
}
