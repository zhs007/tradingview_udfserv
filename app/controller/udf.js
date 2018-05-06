'use strict';

const Controller = require('egg').Controller;

class UDFController extends Controller {
  async config() {
    const ret = this.service.udf.config();

    this.ctx.body = JSON.stringify(ret);
  }
}

module.exports = UDFController;
