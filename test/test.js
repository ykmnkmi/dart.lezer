import { parser } from '../dist/index.es.js'

let result = parser.parse('true')
let cursor = result.cursor()

do {
  if (cursor.type.isSkipped) {
    continue
  }

  console.log(`[${cursor.from}, ${cursor.to}]: ${cursor.name}`)
} while (cursor.next())
