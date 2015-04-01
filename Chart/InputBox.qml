import QtQuick 2.3

import "../js/constants.js" as Constants

//输入框是QQ聊天框的下半部分
//包含了消息编辑、发送等功能
//每次只能发送一张图片或者一段文字，不能同时发送图片和文字
Rectangle {
    id: inputBox
    width: 100
    height: 100
    Row {
        anchors.fill: parent
        TextInput {
            id: inputText
            width:inputBox.width/4*3
            height: inputBox.height
        }
        Rectangle {
            width: inputBox.width/4
            height: inputBox.height
            color:Qt.lighter("grey")
            Text {
                text:"send"
                anchors.centerIn: parent
                color:"grey"
            }
            MouseArea {
                anchors.fill: parent
                onClicked: sendMessage()
            }
        }
    }
    //addChart(isPicture, message, toPerson)
    function sendStringMessage() {
        //console.log(inputText.text)
        root.currentContext["chartJs"].addChart(0, inputText.text,  root.currentContext["currentToUser"]);
    }
    function sendPictureMessage(picture) {
        root.currentContext["chartJs"].addChart(1, picture, root.currentContext["currentToUser"]);
    }
}
