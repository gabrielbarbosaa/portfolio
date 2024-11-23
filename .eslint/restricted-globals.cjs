/**
 * CONFUSING BROWSER GLOBALS
 *
 * The ESLint browser environment defines all browser globals as valid,
 * even though most people don't know some of them exist (e.g. `name` or `status`).
 *
 * This is dangerous as it hides accidentally undefined variables.
 * We blocklist the globals that we deem potentially confusing.
 * To use them, explicitly reference them, e.g. `window.name` or `window.status`.
 *
 * References:
 * @see https://eslint.org/docs/latest/rules/no-restricted-globals
 * @see https://github.com/facebook/create-react-app/blob/main/packages/eslint-config-react-app/index.js
 */
const restrictedGlobals = [
  'addEventListener',
  'blur',
  'close',
  'closed',
  'confirm',
  'defaultStatus',
  'defaultstatus',
  'event',
  'external',
  'find',
  'focus',
  'frameElement',
  'frames',
  'history',
  'innerHeight',
  'innerWidth',
  'length',
  'location',
  'locationbar',
  'menubar',
  'moveBy',
  'moveTo',
  'name',
  'onblur',
  'onerror',
  'onfocus',
  'onload',
  'onresize',
  'onunload',
  'open',
  'opener',
  'opera',
  'outerHeight',
  'outerWidth',
  'pageXOffset',
  'pageYOffset',
  'parent',
  'print',
  'removeEventListener',
  'resizeBy',
  'resizeTo',
  'screen',
  'screenLeft',
  'screenTop',
  'screenX',
  'screenY',
  'scroll',
  'scrollbars',
  'scrollBy',
  'scrollTo',
  'scrollX',
  'scrollY',
  'self',
  'status',
  'statusbar',
  'stop',
  'toolbar',
  'top',
]

module.exports = restrictedGlobals.map((name) => ({
  name,
  message: `Unsafe use of the ${name} global variable, use window.${name} instead.`,
}))
