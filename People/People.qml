import QtQuick 2.3

Rectangle {
    id: people
    width: 1024
    height: 768
    color: "blue"

    GridView {
        id:personGridview
        anchors.fill: parent
        //anchors.margins: 20
        cellHeight: people.width/5
        cellWidth: people.width/5
        clip: true
        delegate: personGridDelegate
        model: allUserModel
    }
    Component {
        id: personGridDelegate
        Person {
            width: people.width/5
            height: people.width/5
            usercode: UserCode
        }
    }
}
