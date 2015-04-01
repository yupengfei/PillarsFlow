import QtQuick 2.0
import QtQuick.Window 2.2

Window {
    id: ganttRec
    width: 1000
    height: 620
    property int timeAxisHeight: 50
    property int windowRowCount: 30
    property int windowColumnCount: 20
    //color: "blue"
    visible: true
    Canvas {
        id: gantt
        width: parent.width
        height: parent.height
        onPaint: {
            var beginDate = new Date();
            drawBase(beginDate);
            drawTimeAxis(beginDate)
            drawMission(3, 3, 10);
        }
    }
    function drawBase() {
        drawRectangle(0, timeAxisHeight, ganttRec.width, ganttRec.height, "#707070");
        for (var i = 1; i < windowColumnCount; ++i) {
            var beginX = i * ganttRec.width/windowColumnCount;
            drawLine(beginX, 0, beginX, ganttRec.height);
        }
    }

    function drawTimeAxis(beginDate) {
        var ctx = gantt.getContext("2d");
        var weekBottomMargin = -5;
        var weekLeftMargin = 20;

        var dateBottomMargin = -5;
        var dateLeftMargin = 20;

        for (var i = 0; i < windowColumnCount; ++i) {
            var weekBaseX = i  * ganttRec.width/windowColumnCount;
            var weekBaseY = timeAxisHeight/2;
            var dateBaseX = weekBaseX;
            var dateBaseY = timeAxisHeight;

            var week = beginDate.getDay().toString();
            ctx.font="10px Verdana";
            ctx.fillText(week, weekBaseX + weekLeftMargin, weekBaseY + weekBottomMargin);

            var date = beginDate.getDate().toString();
            ctx.font="12px Verdana";
            ctx.fillText(date, dateBaseX + dateLeftMargin, dateBaseY + dateBottomMargin);
            beginDate =new Date(beginDate.getTime() + 24*60*60*1000);
        }
    }

    function drawMission(columnIndex, rowIndex, days) {
        var beginX = columnIndex * ganttRec.width/windowColumnCount;
        var beginY = rowIndex * ganttRec.height/windowRowCount + timeAxisHeight;
        var endX = (columnIndex + days) * ganttRec.width/windowColumnCount;
        var endY = (rowIndex + 1) * ganttRec.height/windowRowCount + timeAxisHeight;
        drawRectangle(beginX, beginY, endX, endY, "steelblue");
    }

    function drawRectangle(beginX, beginY, endX, endY, color) {
        var ctx = gantt.getContext("2d");
        ctx.fillStyle = color;
        ctx.lineWidth = 0;
        ctx.beginPath();
        ctx.moveTo(beginX, beginY);
        ctx.lineTo(endX, beginY);
        ctx.lineTo(endX, endY);
        ctx.lineTo(beginX, endY);
        ctx.closePath();
        ctx.fill();
    }

    function drawLine(beginX, beginY, endX, endY, color) {
        var ctx = gantt.getContext("2d");
        ctx.strokeStyle = "#8F8F8F";
        ctx.beginPath();
        ctx.moveTo(beginX, beginY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
    }
}

