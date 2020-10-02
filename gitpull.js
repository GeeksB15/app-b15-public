const { spawn } = require('child_process')
const exec = spawn('git', ['pull'])

exec.stdout.on('data', data => {
  console.log(String(data))
})

exec.stderr.on('data', data => {
  console.error(String(data))
})

exec.on('close', code => {
  console.log(`child process exited with code ${code}\n`)
})