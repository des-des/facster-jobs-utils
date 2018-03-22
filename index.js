const renderers = require('./lib/render.js')
const validate = require('./lib/validate.js')

module.exports = {
  render: renderers.cv,
  validate
}
