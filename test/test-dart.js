import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import { fileTests } from '@lezer/generator/dist/test'
import { parser } from '../dist/index.es.js'

let caseDir = path.dirname(fileURLToPath(import.meta.url))

for (let file of fs.readdirSync(caseDir)) {
  if (file === 'test-dart.js') {
    continue
  }

  let name = /^[^\.]*/.exec(file)[0]

  describe(name, () => {
    let content = fs.readFileSync(path.join(caseDir, file), 'utf8')

    for (let { name, run } of fileTests(content, file)) {
      it(name, () => run(parser))
    }
  })
}
