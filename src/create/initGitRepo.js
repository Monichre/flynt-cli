import exec from '../utils/executeCommand'

import * as allPrompts from '../prompts'
import * as allRequirements from '../requirements'

export const description = 'initialize new git repo and push to origin'

export const runMessage = 'Initializing git repo...'

export const requirements = [
  allRequirements.git
]

export const prompts = [
  allPrompts.gitRepo
]

export function run (answers) {
  let cmds = [
    'git init',
    'git add .',
    'git commit -m "chore(setup): initial commit"'
  ]
  if (answers.gitRepo) {
    cmds = cmds.concat([
      `git remote add origin ${answers.gitRepo}`,
      'git push -u origin master'
    ])
  }
  return exec(cmds)
}
