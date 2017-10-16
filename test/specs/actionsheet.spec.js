import { getRenderedVm, createVue } from '../utils'
import Actionsheet from 'components/actionsheet'

describe('component actionsheet testing', () => {
  it('should render correct classes', () => {
    let vm = getRenderedVm(Actionsheet, {
      open: true,
      menus: [
        { label: '选项一', value: 'value1' },
        { label: '选项二', value: 'value2' }
      ]
    })
    expect(vm.$el.className).toEqual('yui-popup')
    expect(vm.$el.querySelector('.yui-actionsheet')).not.toBeNull()
  })
  it('should render props:showCancel', () => {
    let vm = getRenderedVm(Actionsheet, {
      open: true,
      menus: [
        { label: '选项一', value: 'value1' },
        { label: '选项二', value: 'value2' }
      ],
      showCancel: true
    })
    expect(vm.showCancel).toEqual(true)
    expect(vm.$el.querySelector('.yui-actionsheet-cancel')).not.toBeNull()
  })
  it('should render props:cancelText', () => {
    let vm = getRenderedVm(Actionsheet, {
      open: true,
      menus: [
        { label: '选项一', value: 'value1' },
        { label: '选项二', value: 'value2' }
      ],
      showCancel: true,
      cancelText: 'cancelText'
    })
    expect(vm.cancelText).toEqual('cancelText')
    expect(vm.$el.querySelector('.yui-actionsheet-cancel').textContent).toEqual('cancelText')
  })
  it('should render props:autoClose', () => {
    let vm = getRenderedVm(Actionsheet, {
      open: true,
      menus: [
        { label: '选项一', value: 'value1' },
        { label: '选项二', value: 'value2' }
      ],
      autoClose: false
    })
    expect(vm.autoClose).toEqual(false)
  })
  it('click menu', () => {
    let result = null
    let vm = createVue({
      template: `
        <actionsheet v-model="open" :menus="menus" @on-change="onChange"></actionsheet>
      `,
      data() {
        return {
          open: true,
          menus: [
            { label: '选项一', value: 'value1' },
            { label: '选项二', value: 'value2' }
          ]
        }
      },
      methods: {
        onChange(value) {
          result = value
        }
      }
    })
    const menus = vm.$el.querySelector('.yui-actionsheet-menus').children
    menus[1].click()
    setTimeout(() => {
      expect(vm.open).toEqual(false)
      expect(result).toEqual('value2')
      expect(vm.$el.querySelector('.yui-actionsheet')).toBeNull()
    }, 500)
  })
  it('click menu not close menus', () => {
    let result = null
    let vm = createVue({
      template: `
        <actionsheet v-model="open" :menus="menus" :auto-close="false" @on-change="onChange"></actionsheet>
      `,
      data() {
        return {
          open: true,
          menus: [
            { label: '选项一', value: 'value1' },
            { label: '选项二', value: 'value2' }
          ]
        }
      },
      methods: {
        onChange(value) {
          result = value
        }
      }
    })
    const menus = vm.$el.querySelector('.yui-actionsheet-menus').children
    menus[0].click()
    setTimeout(() => {
      expect(vm.open).toEqual(false)
      expect(result).toEqual('value1')
      expect(vm.$el.querySelector('.yui-actionsheet')).not.toBeNull()
    }, 500)
  })
})