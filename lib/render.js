const path = require('path')
const fs = require('fs')
const handlebars = require('handlebars')

const helpers = require('../templates/helpers/')

const templatesDirPath = path.join(__dirname, '..', 'templates')
const partialsDirPath = path.join(templatesDirPath, 'partials')

fs.readdirSync(partialsDirPath).forEach(fileName => {
  const partialPath = path.join(partialsDirPath, fileName)
  const src = fs.readFileSync(partialPath).toString()

  const name = fileName.split('.')[0]

  handlebars.registerPartial(name, src)
})

Object.keys(helpers).forEach(name => {
  handlebars.registerHelper(name, helpers[name])
})

const views = {}

fs
  .readdirSync(templatesDirPath)
  .filter(fileName => !['partials', 'helpers'].includes(fileName))
  .forEach(fileName => {
    const templatePath = path.join(templatesDirPath, fileName)
    const src = fs.readFileSync(templatePath).toString()
    const template = handlebars.compile(src)

    const name = fileName.split('.')[0]
    views[name] = context => template(context)
  })

module.exports = views
