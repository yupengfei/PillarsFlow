import QtQuick 2.4

import "../js/topbar.js" as TopbarJs

Rectangle {
    id: top_bar
    property int logoWidth: parent.width * 0.2
    property int menuItemWidth: parent.width * 0.1
    property var currentFocus: null
    height: 45

    Rectangle {
        width:logoWidth
        height: parent.height
        color: "#03997e"
        Image {
            id: logo
            source: "qrc:/Pictures/logo.png"
        }
    }
    TopbarMenuItem {
        id: home
        width: menuItemWidth
        height: parent.height
        anchors.right: shot.left
        iconUrl: "qrc:/Pictures/home-icon.png"
        MouseArea {
            anchors.fill: parent
            onClicked: TopbarJs.changeView("home")
        }
    }
    TopbarMenuItem {
        id: shot
        width: menuItemWidth
        height: parent.height
        anchors.right: asset.left
        iconUrl: "qrc:/Pictures/write-icon.png"
        MouseArea {
            anchors.fill: parent
            onClicked: TopbarJs.changeView("shot")
        }
    }
    TopbarMenuItem {
        id: asset
        width: menuItemWidth
        height: parent.height
        anchors.right: daily.left
        iconUrl: "qrc:/Pictures/folder-icon.png"
        MouseArea {
            anchors.fill: parent
            onClicked: TopbarJs.changeView("asset")
        }
    }
    TopbarMenuItem {
        id: daily
        width: menuItemWidth
        height: parent.height
        anchors.right: people.left
        iconUrl: "qrc:/Pictures/daily-icon.png"
        MouseArea {
            anchors.fill: parent
            onClicked: TopbarJs.changeView("daily")  //
        }
    }
    TopbarMenuItem {
        id: people
        width: menuItemWidth
        height: parent.height
        anchors.right: parent.right
        iconUrl: "qrc:/Pictures/people-icon.png"

        MouseArea {
            anchors.fill: parent
            onClicked: TopbarJs.changeView("people")
        }
    }
}

