//SideBar界面相关的登陆操作
function changeView(position) {
    if (position === "home") {
        mainAreaView.currentIndex = 0;
        if (currentFocus !== null) {
            console.log(currentFocus.isFocus);
            currentFocus.isFocus = false;
        }
        currentFocus = home;
        currentFocus.isFocus = true;
        return;
    }
    else if (position === "shot") {
        mainAreaView.currentIndex = 1;
        if (currentFocus !== null) {
            currentFocus.isFocus = false;
        }
        currentFocus = shot;
        currentFocus.isFocus = true;
        return;
    }
    else if (position === "asset") {
        mainAreaView.currentIndex = 2;
        if (currentFocus !== null) {
            currentFocus.isFocus = false;
        }
        currentFocus = asset;
        currentFocus.isFocus = true;
        return;
    }
    else if (position === "daily") {
        mainAreaView.currentIndex = 3;
        if (currentFocus !== null) {
            currentFocus.isFocus = false;
        }
        currentFocus = daily;
        currentFocus.isFocus = true;
        return;
    }
    else if (position === "people") {
        mainAreaView.currentIndex = 4;
        if (currentFocus !== null) {
            currentFocus.isFocus = false;
        }
        currentFocus = people;
        currentFocus.isFocus = true;
        return;
    }
}
