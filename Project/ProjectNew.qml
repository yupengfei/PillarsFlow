import QtQuick 2.0
import QtQuick.Dialogs 1.2

Rectangle {
    width: 100
    height: 62
    color: backgroundColor

    //    property color backgroundColor: "#2c2c2c"
    //    property color splitlineColor: "#373737"
    //    property color inputTitleColor: "#8b8b8b"
    //    property color inputTextColor: "#606060"
    //    property color inputBackgroundColor: "#282828"
    Rectangle {
        anchors.top: parent.top
        anchors.left: parent.left
        anchors.topMargin: 10
        width: 10
        height: 200
        color: "white"
        Text {
            anchors.fill: parent
            //
            text: '123'
        }
    }

    FileDialog {
        id:fileDialog
        title:"please select a file"
        nameFilters:["Image Files (*.png)"];
        selectedNameFilter: "Image Files (*.png)"
        selectMultiple: false
        onAccepted:{
            var imageFile = String(fileDialog.fileUrl);
            console.log("Select image"+imageFile);
            //从imageFile文件路径的第7位开始截取
            imagePath.text=imageFile.slice(7);
            console.log(imagePath);
        }

    }

    //输出工程的名称、管理者等
//    console.log("Project Name: " + projectName.text);
//    console.log("Project Manager: " + projectManager.text);
//    console.log("Start Date: " + projectStart.text);
//    console.log("End Date: " + projectEnd.text);
//    console.log(imagePath.text);
//    console.log("ma"+ImageIO.pngToBase64(imagePath.text));
//    console.log("companyCode.text"+companyCode.text)
//    //        root.currentContent["imagePath"] =imagePath.text;
//    root.currentContext.production.addProject(projectName.text, projectStart.text, projectEnd.text, projectManager.text,companyCode.text, "detail",ImageIO.pngToBase64(imagePath.text));

}

