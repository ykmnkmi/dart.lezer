import { parser } from '../dist/index.es.js'

let result = parser.parse("'hello ${ null }!'")
let cursor = result.cursor()

do {
  if (cursor.type.isSkipped) {
    console.log(`[${cursor.from}, ${cursor.to}]: SKIPPED`)
  } else {
    console.log(`[${cursor.from}, ${cursor.to}]: ${cursor.name}`)
  }

} while (cursor.next())
