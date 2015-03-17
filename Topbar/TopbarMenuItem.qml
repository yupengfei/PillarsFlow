import QtQuick 2.4

Rectangle {
    property int itemWidth: 100
    property string iconUrl: ""  //自定义一个图片地址
    property bool isFocus: false

    color: isFocus === false ? "#ffffff" : "#03997e"
    width: itemWidth
    height: width

    Image {
        anchors.horizontalCenter: parent.horizontalCenter
        anchors.verticalCenter: parent.verticalCenter
        //为图片设置宽高
        width: parent.width * 0.2
        height: width
        //图片的url
        source: iconUrl
    }
}

