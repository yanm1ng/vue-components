const Demo = r => require.ensure([], () => r(require('examples/Demo')), 'Demo')
const Button = r => require.ensure([], () => r(require('examples/Button')), 'Button')
const Cell = r => require.ensure([], () => r(require('examples/Cell')), 'Cell')
const Tab = r => require.ensure([], () => r(require('examples/Tab')), 'Tab')
const ButtonTab = r => require.ensure([], () => r(require('examples/ButtonTab')), 'ButtonTab')
const Popup = r => require.ensure([], () => r(require('examples/Popup')), 'Popup')
const Toast = r => require.ensure([], () => r(require('examples/Toast')), 'Toast')
const Icon = r => require.ensure([], () => r(require('examples/Icon')), 'Icon')
const Actionsheet = r => require.ensure([], () => r(require('examples/Actionsheet')), 'Actionsheet')
const Badge = r => require.ensure([], () => r(require('examples/Badge')), 'Badge')
const Switch = r => require.ensure([], () => r(require('examples/Switch')), 'Switch')
const Input = r => require.ensure([], () => r(require('examples/Input')), 'Input')
const Radio = r => require.ensure([], () => r(require('examples/Radio')), 'Radio')
const Checkbox = r => require.ensure([], () => r(require('examples/Checkbox')), 'Checkbox')
const Textarea = r => require.ensure([], () => r(require('examples/Textarea')), 'Textarea')
const Alert = r => require.ensure([], () => r(require('examples/Alert')), 'Alert')
const Confirm = r => require.ensure([], () => r(require('examples/Confirm')), 'Confirm')
const Flex = r => require.ensure([], () => r(require('examples/Flex')), 'Flex')

export default [
  {
    path: '/',
    component: Demo
  }, {
    path: '/button',
    component: Button
  }, {
    path: '/cell',
    component: Cell
  }, {
    path: '/tab',
    component: Tab
  }, {
    path: '/button-tab',
    component: ButtonTab
  }, {
    path: '/popup',
    component: Popup
  }, {
    path: '/toast',
    component: Toast
  }, {
    path: '/icon',
    component: Icon
  }, {
    path: '/actionsheet',
    component: Actionsheet
  }, {
    path: '/badge',
    component: Badge
  }, {
    path: '/switch',
    component: Switch
  }, {
    path: '/input',
    component: Input
  }, {
    path: '/radio',
    component: Radio
  }, {
    path: '/checkbox',
    component: Checkbox
  }, {
    path: '/textarea',
    component: Textarea
  }, {
    path: '/alert',
    component: Alert
  }, {
    path: '/confirm',
    component: Confirm
  }, {
    path: '/flex',
    component: Flex
  }
]