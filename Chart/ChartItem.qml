import QtQuick 2.0

Rectangle {
    width: 100
    height: 62
    border.color:"grey"
    Rectangle {
        id:from
        anchors.top:parent.top
        anchors.left:parent.left
        anchors.leftMargin:5
        Text {
            text:"From:"+"  "+From
        }
    }
    Rectangle {
        id:message
        anchors.top:from.bottom
        anchors.topMargin:30
        anchors.left:parent.left
        anchors.leftMargin:20
        Text {
            text:Message
        }
         Image {
            source:Message
        }
    }
    Rectangle {
        id:toPerson
        anchors.top:message.bottom
        anchors.topMargin:30
        anchors.right:parent.right
        anchors.rightMargin:100
        Text {
            text:"To:"+"  "+To
        }
    }
}
