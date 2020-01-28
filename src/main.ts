import { setFailed, getInput, setOutput } from '@actions/core'

process.on('unhandledRejection', handleError)
run().catch(handleError)

async function run() {
  const map = parse(getInput('map'))
  const value = getInput('value')
  setOutput('alias', map.get(value) ?? '')
  setOutput('has-match', map.has(value) ? 'yes' : '')
}

function handleError(err: any) {
  console.error(err)

  if (err && err.message) {
    setFailed(err.message)
  } else {
    setFailed(`Unhandled error: ${err}`)
  }
}

function parse(input: string): Map<string, string> {
  return new Map(
    input.split('\n').map(parseLine)
  )
}

function parseLine(line: string): [string, string] {
  const [key, value] = line.split('->')
  return [
    key.trim(),
    value.trim(),
  ]
}
