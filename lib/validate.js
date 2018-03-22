const jsonSchema = new require('jsonschema')

const validator = new jsonSchema.Validator()
const schema = require('../schema/cv_spec_v1.json')

module.exports = data => {
  return validator.validate(data, schema)
}
