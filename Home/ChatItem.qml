import QtQuick 2.0

Rectangle {
    id: chartItem
    width: 100
    height: 62
    color: root.backgroundColor
    property string fromAvatar
    property string fromName
    Rectangle {
        width:
        Rectangle {
            width: chartItem.width/7
            height: width
            radius: width/2
            anchors.topMargin: chartItem.width/10
            anchors.leftMargin: chartItem.width/10
            Image {
                source: fromAvatar
                anchors.fill: parent
            }
        }
        Rectangle {

        }
    }
}

