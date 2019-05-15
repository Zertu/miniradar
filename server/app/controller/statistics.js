'use strict';

const Controller = require('egg').Controller;
const data = require('../../util/data');
const { parallelForEach } = require('async-each-loop');

class StatisticsController extends Controller {
  async index() {
    const { ctx, service } = this;
    const locations = Object.keys(data).map(key => data[key]);
    const result = [];
    await parallelForEach(
      locations,
      async location => {
        const [ longtitude, latitude ] = location.split(',');
        const r = await service.app.getInfo(Number(latitude * 1000000), Number(longtitude * 1000000));
        await setTimeout(() => {

        }, 500);
        result.push(r);
      }
    );
    ctx.body = result;
  }
}

module.exports = StatisticsController;
