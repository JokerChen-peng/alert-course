const fsex = require('fs-extra')
const path = require('path')

fsex.removeSync(path.resolve(__dirname, '../src/schedule/'))
fsex.mkdirSync(path.resolve(__dirname, '../src/schedule/'))

