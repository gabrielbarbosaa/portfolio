import type { UserConfig } from '@commitlint/types'

const commitlintConfig: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [2, 'always', 80],
    'header-max-length': [2, 'always', 72],
  },
}

export default commitlintConfig
