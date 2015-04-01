import QtQuick 2.4

//var backgroundColor = "#2c2c2c"
//var splitlineColor = "#373737"
//var inputTitleColor = "#8b8b8b"
//var inputTextColor = "#606060"
//var inputBackgroundColor = "#282828"

Rectangle {
    width: 100
    height: width
    radius: width/2
    color: backgroundColor

    Rectangle {
        width: parent.width
        height: parent.width/10
        color: splitlineColor
        anchors.verticalCenter: parent.verticalCenter
        anchors.horizontalCenter: parent.horizontalCenter
        transformOrigin: Item.Center
        rotation: 90
    }
    Rectangle {
        width: parent.width
        height: parent.width/10
        color: splitlineColor
        anchors.verticalCenter: parent.verticalCenter
        anchors.horizontalCenter: parent.horizontalCenter
    }
}

