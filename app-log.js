const { spawn } = require('child_process')

const cwd = '/www/app.b15.com.br'
const command = 'git'
const args = ['log', '--oneline']

console.log('cwd', cwd)
console.log('$', command, args.join(' '))

const exec = spawn(command, args, { cwd })

exec.stdout.on('data', data => {
  console.log(String(data))
})

exec.stderr.on('data', data => {
  console.error(String(data))
})

exec.on('error', err => {
  console.log(`Failed to start subprocess. ${err}\n`)
})

exec.on('close', code => {
  console.log(`child process exited with code ${code}\n`)
})
