import childProcess from 'child_process'
import Promise from 'bluebird'

import * as allPrompts from '../prompts'
import * as allRequirements from '../requirements'

export const requirements = [
  allRequirements.wpCli
]

export const prompts = [
  allPrompts.dbName,
  allPrompts.dbUser,
  allPrompts.dbPassword,
  allPrompts.dbHost,
  allPrompts.wpEnv,
  allPrompts.wpHome,
  allPrompts.wpSiteUrl,
  allPrompts.wpAdminName,
  allPrompts.wpAdminEmail,
]

export function run (answers) {
  let cmds = [
    'ls'
  ]
  console.log('this is setupWordpress')
  return new Promise(function (resolve, reject) {
    let exec = childProcess.exec(cmds.join(' && '), function () {
      resolve()
    })
    exec.stdout.pipe(process.stdout)
    exec.stderr.pipe(process.stderr)
  })
}
