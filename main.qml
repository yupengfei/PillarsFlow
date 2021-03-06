import QtQuick 2.4
import QtQuick.Window 2.2
import QtQuick.LocalStorage 2.0

import "Connection"
import "Topbar"
import "Home"
import "People"

import "js/storage.js" as StorageJs
import "js/constants.js" as ConstantsJs
import "js/connection.js" as ConnectionJs
import "js/login.js" as LoginJs
import "js/types.js" as TypesJs
import "js/topbar.js" as TopbarJs
import "js/home.js" as HomeJs
import "js/shot.js" as ShotJs
import "js/asset.js" as AssetJs
import "js/daily.js" as DailyJs
import "js/people.js" as PeopleJs
import "js/project.js" as ProjectJs
import "js/chart.js" as ChartJs

Window {
    id: root
    property var currentContext: ({})

    property color backgroundColor: "#2c2c2c"
    property color splitlineColor: "#373737"
    property color inputTitleColor: "#8b8b8b"
    property color inputTextColor: "#606060"
    property color inputBackgroundColor: "#282828"

    property color chartBackgroundOneColor: "#636363"
    property color chartBackgroundTwoColor: "#029b79"
    property color charTextColor: "#E8E8E8"

    visible: true
    width: 1000
    height: 700
    Connection {
        id: socket
    }
    Topbar {
        id: topBar
        width: parent.width
        height: 45
        anchors.top: parent.top
        anchors.left: parent.left
        z: 1
    }

    ListView {
        id: mainAreaView
        width: parent.width
        height: parent.height - topBar.height
        model: itemModel
        snapMode: ListView.SnapOneItem
        orientation: ListView.Horizontal
        boundsBehavior: Flickable.StopAtBounds
        flickDeceleration: 5000
        highlightFollowsCurrentItem: true
        highlightMoveDuration: 240
        highlightRangeMode: ListView.StrictlyEnforceRange
        anchors.top: topBar.bottom
    }

    VisualItemModel {
        id: itemModel
        Home {
            id: home
            width: mainAreaView.width
            height: mainAreaView.height
        }
        Rectangle {
            id: shot
            width: mainAreaView.width
            height: mainAreaView.height
        }
        Rectangle {
            id:asset
            width: mainAreaView.width
            height: mainAreaView.height
        }

        Rectangle {
            id: daily
            width: mainAreaView.width
            height:mainAreaView.height
        }

        People {
            id: people
            width: mainAreaView.width
            height: mainAreaView.height
        }
    }
    ListModel {
        id: currentUserModel
    }
    ListModel{
        id:allUserModel
    }
    ListModel {
        id: projectListModel
    }
    ListModel {
        id:  waitingMissionModel
    }
    ListModel {
        id: undergoingMissionModel
    }
    ListModel {
        id: reviewMissionTaskModel
    }
    ListModel {
        id: finishedMissionModel
    }
    ListModel {
        id: undesignatedMissionModel
    }
    Component.onCompleted: {
        //所有使用的属性必须在此先初始化
        root.currentContext["storageJs"] = StorageJs;
        root.currentContext["constantsJs"] = ConstantsJs;
        root.currentContext["connectionJs"] = ConnectionJs;
        root.currentContext["loginJs"] = LoginJs;
        root.currentContext["typesJs"] = TypesJs;
        root.currentContext["topbarJs"] = TypesJs;
        root.currentContext["homeJs"] = HomeJs;
        root.currentContext["shotJs"] = ShotJs;
        root.currentContext["assetJs"] = AssetJs;
        root.currentContext["dailyJs"] = DailyJs;
        root.currentContext["peopleJs"] = PeopleJs;
        root.currentContext["projectJs"] = ProjectJs;
        root.currentContext["chartJs"] = ChartJs;

        root.currentContext["personInfoComponent"] = Qt.createComponent("qrc/people/People/PersonInfo.qml");
        root.currentContext["storage"] = LocalStorage.openDatabaseSync("PillarsFlow", "1.0", "缓存当前内容", 100000);
        root.currentContext["storageJs"].initDatabase(root.currentContext["storage"]);

        root.currentContext["loginJs"].showLogin();
    }
}
