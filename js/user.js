function allUser()
{
    var outMessage = new root.currentContext.types.OutMessage("getAllUser","");
    root.currentContext.connection.sendMessage(JSON.stringify(outMessage));
    console.log("allUser()+向服务器发请求了");
}

//***********************Get AllUser*********************//

function onGetAllUser(res) {
    //console.log(" onGetAllUser() 函数的类型"+typeof(res));
    if (res === null) {
        console.log("res is empty")
    }
    //console.log(" onGetAllUser() 函数的类型"+typeof(res.Result));
    //res.Result的类型是String类型的，下面就是用JSON把它转化成对象
    var allUser = JSON.parse(res.Result);
    if (allUser === null)
        return;
    //console.log(allUser.length);
    for(var i = 0;i<allUser.length;i++)
    {
        //console.log("people.js ongetalluser" + allUser[i].DisplayName);
        root.currentContext.allUserModel.append(allUser[i]);
        console.log(typeof (allUser[i]));
        console.log(JSON.stringify(allUser[i]))
    }
    console.log( "onGetAllUser()"+root.currentContext.allUserModel.count);
    console.log( "onGetAllUser()+"+typeof(root.currentContext.allUserModel));

}
