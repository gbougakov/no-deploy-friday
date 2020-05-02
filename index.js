const core = require('@actions/core')
const moment = require('moment-timezone')

const timezone = core.getInput('timezone')

const now = moment().tz(timezone)

if (now.hours() >= 17 && now.day() === 5) {
  core.setFailed('It\'s probably better if you leave it for next week')
}
