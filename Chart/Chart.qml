import QtQuick 2.3
import QtQuick.Window 2.0
import "../js/constants.js" as ConstantsJs
import "../Utility"
import "../Chart"
//chart窗口最终的结果与QQ聊天的界面类似
//它由放消息记录的地方和输入文本的地方两部分组成
//放消息记录的地方包含若干条ChartItem

//var backgroundColor = "#2c2c2c"
//var splitlineColor = "#373737"
//var inputTitleColor = "#8b8b8b"
//var inputTextColor = "#606060"
//var inputBackgroundColor = "#282828"
Window {
    id:chartChart
    width: 500
    height: 500
    visible: true
    property string fromAvatar
    property string fromUserName
    Row {
        Column {

        }
    }

//    CloseButton {
//        id:closeButton
//        anchors.top: parent.top
//        anchors.right: parent.right
//        anchors.margins: 10
//        color:"grey"
//        MouseArea {
//            anchors.fill: parent
//            onClicked: {
//                chartChart.destroy();
//            }
//        }
//    }

//    Rectangle {
//        id: chartHistory
//        width: parent.width
//        height: parent.height/4*3
//        border.color:"grey"
//        anchors.top:closeButton.bottom
//        ListView {
//            width:chartHistory.width
//            height:chartHistory.height
//            id:chartMessageListView
//            anchors.top:chartHistory.top
//            anchors.left:chartHistory.left
//            clip:true
//            focus:true
//            orientation:ListView.Vertical
//            delegate:ChartItem {
//                width:chartMessageListView.width
//                height:chartMessageListView.height/4
//            }
//        }
//        Component.onCompleted: {
//            //此处改为从数据库读取数据
//        }
//    }
//    InputBox {
//        border.color: "grey"
//        anchors.top: chartHistory.bottom
//        width: parent.width
//        height: parent.height/4
//    }

}
