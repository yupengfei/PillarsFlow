import QtQuick 2.4

Rectangle {
    width: 100
    height: 100
    ListView {
        id:showUserHeadImage
        anchors.fill:parent
        delegate:showHeadImage
        model: currentUserModel
    }
    Component {
        id:showHeadImage
        Rectangle {
            id:headImage
            Image{
                source:Picture
            }
        }
    }
}
