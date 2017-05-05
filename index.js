'use strict'

const EventEmitter = require('events')

exports.devicePixelRatioDetector = class devicePixelRatioDector extends EventEmitter {
  constructor() {
    super()
    let query, callback = () => {
      query && query.removeListener(callback);
      const dpr = devicePixelRatio;
      query = matchMedia(`screen and (min-resolution: ${dpr - 0.001}dppx) and \
                                     (max-resolution: ${dpr + 0.001}dppx)`)
      query.addListener(callback)
      this.emit('change', dpr)
    }
    callback()
  }
}
