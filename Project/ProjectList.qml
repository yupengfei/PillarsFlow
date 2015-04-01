import QtQuick 2.0

import "../Utility"

Rectangle {
    id: projectList
    width: 480
    height: 80

    AddButton {
        anchors.right: parent.right
        anchors.top: parent.top
        z: 1
        MouseArea {
            anchors.fill: parent
            onClicked: {
                root.currentContext["projectJs"].showNewProject();
            }
        }
    }

    ListView {
        anchors.fill: parent
        anchors.margins: 20
        spacing: 4
        clip: true
        model: projectListModel
        orientation: ListView.Horizontal
        delegate: numberDelegate
    }

    Component {
        id: numberDelegate

        Image {
            width: projectList.width - 5
            height: projectList.height / 4
            source: picture
            Rectangle {
                width: parent.width / 7
                height: parent.height / 7
                anchors.bottom: parent.bottom
                anchors.left: parent.left
            }
        }
    }
}

