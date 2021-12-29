const { defaults } = require('jest-config')
module.exports = {
  moduleDirectories: [
    'node_modules'
  ],
  moduleFileExtensions: [
    ...defaults.moduleFileExtensions,
    'js',
    'jsx',
    'ts',
    'tsx',
    'map',
    'js.map'
  ],
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    './components/**/*.{js,jsx}',
    './pages/**/*.{js,jsx}',
    './back/**/*.{js,jsx}',
    '!./back/db/*',
    '!./back/models/*',
    '!./back/testScripts/*',
    '!./pages/_app.js'
  ],
  coverageReporters: [
    'text',
    'html'
  ],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js']

}
