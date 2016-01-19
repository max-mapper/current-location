#!/usr/bin/env node

var child = require('child_process')
var os = require('os')
var triangulate = require('wifi-triangulate')

var plat = os.platform()

if (plat === 'darwin') {
  var out, lat, lon
  try {
    out = child.execSync(__dirname + '/whereami')
    var lines = out.toString().split('\n')
    if (lines[0] && lines[0].indexOf('Latitude: ') === 0) lat = lines[0].split('Latitude: ')[1]
    if (lines[1] && lines[1].indexOf('Longitude: ') === 0) lon = lines[1].split('Longitude: ')[1]
  } catch (e) {}
  if (lat && lon) {
    console.log(JSON.stringify({latitude: parseFloat(lat), longitude: parseFloat(lon)}))
    process.exit(0)
  }
}

if (plat === 'linux') {
  // todo implement linux specific lookup
}

if (plat === 'win32') {
  // todo implement windows specific lookup
}

// ask google
triangulate(function (err, loc) {
  if (err) process.exit(1)
  console.log(JSON.stringify({latitude: loc.lat, longitude: loc.lng}))
  process.exit(0)
})

process.exit(1)
