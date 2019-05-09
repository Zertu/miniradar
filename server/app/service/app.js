'use strict';
const Service = require('egg').Service;
const WebSocketClient = require('websocket').w3cwebsocket;
const formateData = require('../../util/formateData');
const handleData = require('../../util/handleData');
const url =
  'wss://publicld.gwgo.qq.com?account_value=0&account_type=0&appid=0&token=0';
let ws;
const defaultdata = {
  request_type: '1002',
  latitude: 32058380,
  longtitude: 118796470,
  requestid: 282682,
  platform: 0,
};
class LeitaiService extends Service {
  // 默认不需要提供构造函数。
  constructor(ctx) {
    super(ctx);
    ws = new WebSocketClient(url);
    if (!this.ctx.data) {
      this.ctx.data = defaultdata;
    }
    // 如果需要在构造函数做一些处理，一定要有这句话，才能保证后面 `this.ctx`的使用。
    // 就可以直接通过 this.ctx 获取 ctx 了
    // 还可以直接通过 this.app 获取 app 了
  }
  async getInfo(latitude = 32057380, longtitude = 118796470) {
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    const leitai = await new Promise((res, rej) => {
      ws.onopen = function() {
        ws.send(
          formateData({
            request_type: '1002',
            latitude,
            longtitude,
            requestid: 282682,
            platform: 0,
          })
        );
      };
      // 接收到服务端响应的数据时，触发事件
      ws.onmessage = evt => {
        const { data } = evt;
        if (typeof data === 'object') {
          res(handleData(data));
        }
      };
      ws.onerror = err => {
        rej(err);
      };
      ws.onclose = () => {
        console.log('关闭');
      };
    });
    return leitai;
  }
}
module.exports = LeitaiService;
