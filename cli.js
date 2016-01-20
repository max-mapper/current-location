#!/usr/bin/env node

var currentLocation = require('./index.js')

currentLocation(function (err, loc) {
  if (err) {
    console.error(err)
    process.exit(1)
  } else {
    console.log(JSON.stringify(loc))
    process.exit(0)
  }
})
