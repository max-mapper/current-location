# current-location

Get your current location (latitude, longitude) on the command line as JSON

Uses CoreLocation.framework on OS X (thanks to [WhereAmI](https://github.com/robmathers/WhereAmI)) and falls back to asking Google

Used by the [`gititude`](https://github.com/maxogden/gititude) module

#### TODO (send a PR)

- add offline wifi geolocation database
- better linux/windows support

## install

```
npm i current-location -g
```

## usage

```
$ current-location
{"latitude":45.51645,"longitude":-122.629713}
```

will exit with exit code 1 if it could not get a location

