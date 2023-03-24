import { parser } from '../dist/index.es.js'

const input = "'''hello ${ name} !'''"

const result = parser.parse(input)
const cursor = result.cursor()

do {
  const { from, to, type, name } = cursor

  if (type.isError) {
    console.log(`[${from}, ${to}]: Error`)
  } else if (type.isSkipped) {
    console.log(`[${from}, ${to}]: Skipped`)
  } else {
    console.log(`[${from}, ${to}]: ${name} ${JSON.stringify(input.substring(from, to))}`)
  }

} while (cursor.next())
