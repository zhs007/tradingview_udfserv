'use strict';

const Service = require('egg').Service;

class UDFService extends Service {
  async config() {
    const cfg = {
      supports_search: false,
      supports_group_request: true,
      supported_resolutions: [ '1', '5', '15', '30', '60', '1D', '1W', '1M' ],
      supports_marks: false,
      suports_time: true,
    };

    return cfg;
  }
}

module.exports = UDFService;
