var child = require('child_process')
var os = require('os')
var triangulate = require('wifi-triangulate')

module.exports = function (cb) {
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
      return cb(null, {latitude: parseFloat(lat), longitude: parseFloat(lon)})
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
    if (err) cb(new Error('Cannot reach google servers'))
    else cb(null, {latitude: loc.lat, longitude: loc.lng})
  })
}
