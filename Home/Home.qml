import QtQuick 2.0

import "../Project"

Rectangle {
    width: 100
    height: 62
    SelfInfo {
        id: selfInfo
        width: parent.width/2
        height: parent.height
        anchors.left: parent.left
        anchors.top: parent.top
    }
    ProjectList {
        id: projectList
        width: parent.width/2
        height: parent.height
        anchors.right: parent.right
    }
}

