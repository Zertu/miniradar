const WebSocketClient = require("websocket").w3cwebsocket;
const formateData = require("./formateData");
const handleData = require("./handleData");
const url =
  "wss://publicld.gwgo.qq.com?account_value=0&account_type=0&appid=0&token=0";
const ws = new WebSocketClient(url);
var data = {
  // latitude: 32058380,
  // longtitude: 118796470,
  // platform: 0,
  // request_type: "1002",
  // requestid: 282682
  request_type: "1002",
  latitude: 32058380,
  longtitude: 118796470,
  requestid: 282682,
  platform: 0
};
// const data = {
//   latitude: 32058380,
//   longtitude: 118796470,
//   platform: 0,
//   request_type: "1001",
//   requestid: 731892
// };
ws.onopen = function() {
  ws.send(formateData(data));
};
//接收到服务端响应的数据时，触发事件
ws.onmessage = evt => {
  const { data } = evt;
  if (typeof data === "object") {
    console.info(handleData(data));
  } else {
    console.info(JSON.parse(data));
  }
};
ws.onerror = err => {
  console.log(err);
};
ws.onclose = () => {
  console.log("关闭");
};
