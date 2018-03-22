const express = require('express')
const path = require('path')

const facsterJobs = require('../')

const app = express()

const mockProfile = {
  firstName: 'Eoin',
  lastName: 'McCarthy',
  bioText: 'Full stack web developer based in Gaza.',
  photoUrl: 'https://user-images.githubusercontent.com/12845233/37771837-81314d02-2de1-11e8-8dd7-452ed7e1a64e.jpg',
  skills: [{
    name: "ReactJS"
  }, {
    name: "NodeJs"
  }, {
    name: "MongoDB"
  }, {
    name: "PostgreSQL"
  }, {
    name: "ElasticSearch"
  }],
  roles: [{
    startDate: {
      month: 5,
      year: 2017
    },
    endDate: {
      month: 12,
      year: 2017
    },
    name: 'Full stack web developer',
    organisationName: 'Authored Limited',
    description: "Work was divided between working on the Authored's internal product, and working on analytics tooling for the Financial Times.",
    points: [
      "When delivering features for Authored's product I would take responsibility for the implementation across the entirety of the stack.",
      "Was responsible for implementing analytics tooling for the Financial Times. Using a 'serverless' architecture I developed a system that you ingest 1.5 million documents per day and allowed teams at the Financial Times to get real time metrics about article annotations."
    ]
  }]
}

const validationResult = facsterJobs.validate(mockProfile)

if (validationResult.errors.length !== 0) {
  const messages = validationResult.errors
    .map(e => e.message)
    .join('\n')

  console.error(messages)

  process.exit(-1)
}

app.get('/', (req, res) => {
  res.send(facsterJobs.render(mockProfile))

})

app.listen(3000, err => {
  if (err) throw err

  console.log(`server listening on port 3000`);
})
