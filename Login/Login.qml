import QtQuick 2.4
import QtGraphicalEffects 1.0

//var backgroundColor = "#2c2c2c"
//var splitlineColor = "#373737"
//var inputTitleColor = "#8b8b8b"
//var inputTextColor = "#606060"
//var inputBackgroundColor = "#282828"
Rectangle {
    id: loginRoot
    Rectangle {
        id: container
        width: 420
        height: 240
        anchors.centerIn: parent
        color: "#2c2c2c"
        radius: 7
        property int shadowRadius: 3
        Rectangle {
            id: loginWindow
            width: container.width - (parent.shadowRadius * 4)
            height: container.height - (parent.shadowRadius * 4)
            anchors.centerIn: parent
            color: backgroundColor
            radius: 7
            Grid {
                id:grid
                anchors.top: parent.top
                anchors.topMargin: 50
                anchors.horizontalCenter: parent.horizontalCenter
                rows: 2
                columns: 2
                spacing: 8
                horizontalItemAlignment: Text.AlignLeft
                verticalItemAlignment: Text.AlignVCenter
                Text {
                    text: "UserEmail:"
                    font.pointSize: 16
                    color: inputTextColor
                }
                Rectangle {
                    width: 200
                    height: 30
                    radius: 5
                    color: inputBackgroundColor
                    TextInput {
                        id: userEmail
                        anchors.fill: parent
                        anchors.leftMargin: 6
                        font.pointSize: 16
                        color: inputTextColor
                        autoScroll: false
                        selectByMouse: true
                        verticalAlignment: Text.AlignVCenter
                        KeyNavigation.tab: password
                        focus: true
                        text:"1@test.com"
                    }
                }
                Text {
                    text: "Password :"
                    font.pointSize: 16
                    color: inputTextColor
                }
                Rectangle {
                    width: 200
                    height: 30
                    radius: 5
                    color: inputBackgroundColor
                    TextInput {
                        id: password
                        anchors.fill: parent
                        anchors.leftMargin: 6
                        font.pointSize: 12
                        color: inputTextColor
                        echoMode: TextInput.Password
                        autoScroll: false
                        selectByMouse: true
                        verticalAlignment: Text.AlignVCenter
                        KeyNavigation.tab:userEmail
                        text:"aaa"
                    }
                }
            }
            Rectangle {
                id: loginButton
                width: loginWindow.width / 4
                height: loginWindow.height / 5
                anchors.top: grid.bottom
                anchors.topMargin: 15
                anchors.horizontalCenter: parent.horizontalCenter
                color: "#019b79"
                radius: 7
                Text {
                    anchors.centerIn: parent
                    text: "Login"
                    font.pointSize: 18
                }
                MouseArea {
                    anchors.fill: parent
                    onClicked: {
                        loginFunc()
                    }
                }
            }
            Rectangle {
                id: loginMessage
                anchors.left: loginWindow.left
                anchors.leftMargin: 10
                anchors.bottom: loginWindow.bottom
                color: parent.color
                width: 100
                height: 20
                Text {
                    id: loginMessageText
                    color: inputTextColor
                    text: ""
                }
            }
        }
    }

    DropShadow {
        id: rectShadow
        anchors.fill: container
        cached: true
        horizontalOffset: 3
        verticalOffset: 3
        radius: container.shadowRadius
        samples: 16
        color: "#80000000"
        smooth: true
        source: container
    }
    function loginFunc() {
        console.log("Login as " + userEmail.text)
        root.currentContext["loginJs"].login( userEmail.text, password.text)
    }

    function showMessage(message) {
        loginMessageText.text = message
    }
}
