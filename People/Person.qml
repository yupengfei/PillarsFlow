import QtQuick 2.4

Rectangle {
    width: 100
    height: 100
    property string usercode
    Image {
        anchors.fill: parent
        source: Picture
        fillMode: Image.Stretch
    }
    MouseArea {
        anchors.fill: parent
        onDoubleClicked: {
            root.currentContext["currentToUser"] = Email;

            var chartWin = Qt.createComponent("../Chart/Chart.qml");
            if (chartWin.status === Component.Ready) {

                var a = chartWin.createObject(root.currentContext["peopleWin"] );
                a.width =  root.currentContext["peopleWin"] .width-200;
                a.height = root.currentContext["peopleWin"] .height-150;
                a.x =   root.currentContext["peopleWin"] .width/2-a.width/2;
                a.y = (root.currentContext["peopleWin"] .height-a.height)/2-20;
                console.log( a.width,a.height,a.x,a.y);
            } else {
                console.log(chartWin.status)
            }

        }
        onPressAndHold: {
            console.log("person press" + usercode)
            var everyPerson = Qt.createComponent("../People/PersonInformation.qml");
            if (everyPerson.status === Component.Ready) {

                var a =everyPerson.createObject(root.currentContext["peopleWin"] );
                a.width =  root.currentContext["peopleWin"] .width-200;
                a.height = root.currentContext["peopleWin"] .height-150;
                a.x =   root.currentContext["peopleWin"] .width/2-a.width/2;
                a.y = (root.currentContext["peopleWin"] .height-a.height)/2-20;
                console.log( a.width,a.height,a.x,a.y);
            } else {
                console.log("组件的状态"+everyPerson.status)
            }
        }

    }
}


