import QtQuick 2.4
import Qt.WebSockets 1.0

import "../js/constants.js" as ConstantsJs
import "../js/connection.js" as ConnectionJs


WebSocket {
    id: socket
    url: ConstantsJs.wsServer
    active: true
    onTextMessageReceived: {
        ConnectionJs.dispatch(message)
    }
    onStatusChanged: {
        if (socket.status == WebSocket.Error) {
            console.error("Error: " + socket.errorString)
        } else if (socket.status == WebSocket.Open) {
            console.log("connection enstablished")
        } else if (socket.status == WebSocket.Closed) {
            console.log("connection closed")
        }
    }
}

