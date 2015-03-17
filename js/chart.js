//Chart模块所对应的JS文件
//包含了发送信息和收到信息后怎么展示两部分
//后续可能需要将所有的聊天记录放入main.qml的上下文
//因为可能发送完信息没等到回复就关闭了聊天窗口
var  chartMessage;
function addChart(isPicture, message, toPerson) {
    var chartText = new root.currentContext["types"].ChartMessage(isPicture, message, toPerson);
    var outMessage = new root.currentContext["types"].OutMessage("addChart", JSON.stringify(chartText));
    root.currentContext["connection"].sendMessage(JSON.stringify(outMessage));
    console.log("添加聊天信息");
}
function  onChartMessage(res) {
    console.log("recieve message", res.Result)
    if(res === null) {
        return;
    }
    chartMessage = JSON.parse(res.Result);
    console.log("chartMessage的类型＋"+typeof(chartMessage));
    console.log("chartMessage[]"+chartMessage.Id);
    //    root.currentContent["chartCode"] = chartMessage.Id;
    root.currentContext["chartMessage"].append(chartMessage);
    console.log("chart消息的条数"+root.currentContext["chartMessage"].count);
    receiveChart();
}
//用户收到从服务器传过来的消息后，再返回给服务器一个ReceiveChartCode
function receiveChart() {
    var chartCode =  chartMessage.Id;
    console.log(" chartCode的数值 "+ chartCode );
    var outMessage = new root.currentContext["types"].OutMessage("receiveChart",chartCode );
    root.currentContext["connection"].sendMessage(JSON.stringify(outMessage));
    console.log("JSON.stringify(outMessage)"+JSON.stringify(outMessage));
}
function onReceiveChart(res) {
    console.log("res.Result" +res.Result);
    if(res === null)
        return;
    var receiveChartMessage = JSON.parse(res.Result);
    root.currentContext["receiveChartCodeModel"].append(receiveChartMessage );

    console.log("root.currentContextreceiveChartCodeModel"+root.currentContext["receiveChartCodeModel"].count);


}
//获取所有未查看的信息,他们起错了接口名,将就着看吧
function getAllUnreceivedChart() {
    //    var unReceiveChartText = new root.currentContext["types"].ChartMessage(isPicture, message, toPerson);
    var outMessage = new root.currentContext["types"].OutMessage("getAllUnreceivedChart", "");
    root.currentContext["connection"].sendMessage(JSON.stringify(outMessage));
    console.log("发送获取未查看的信息的请求");
}
function onGetAllUnreceivedChart(res) {
    console.log("onGetAllUnreceivedChart", res)
    if(res === null) {
        return;
    }
    var unChartMessage = JSON.parse(res.Result);
    for(var i =0 ;i < unChartMessage.length;i++) {

        root.currentContext["unReceivedMessageModel"].append(unChartMessage[i]);

    }
    //    root.currentContext["unReceivedMessageModel"].append(chartMessage);
    console.log("未查看的chart消息的条数"+ root.currentContext["unReceivedMessageModel"].count);


}
