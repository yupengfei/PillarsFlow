function login(userEmail, password) {
    root.currentContext["userName"] = userEmail;
    root.currentContext["password"] = password;
    var user = new root.currentContext["typesJs"].UserLogin(userEmail, password);
    var outMessage = new root.currentContext["typesJs"].OutMessage("login", JSON.stringify(user));  //为什么这个没有用new root.currentContext.types，而直接用的new TypesJs
    root.currentContext["connectionJs"].sendMessage(JSON.stringify(outMessage));
}

function onLogin(res) {
    if (res.Result !== "") {
        var user = JSON.parse(res.Result);
        currentUserModel.append(user);
        console.log("login success" + user.DisplayName);
        root.currentContext["loginWindow"].destroy();
    }
    else {
        root.currentContext["loginWindow"].showMessage("用户名或密码错误！");
    }
}

//登陆框
function showLogin() {
    var login = Qt.createComponent("qrc:/Login/Login.qml");
    if (login.status === Component.Error) {
        console.log("Error loading component:", login.errorString());
    }
    var loginWidth = root.width
    var loginHeight = root.height

    var loginWindow = login.createObject(root);
    loginWindow.width = Qt.binding(function() {return root.width});
    loginWindow.height = Qt.binding(function() {return root.height});
    root.currentContext["loginWindow"] = loginWindow
}
