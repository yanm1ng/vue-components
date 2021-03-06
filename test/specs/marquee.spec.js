import { createVue, destroyVM } from '../utils'

describe('component marquee testing', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('should render correct classes', () => {
    vm = createVue({
      template: `
        <x-marquee>
          <x-marquee-item>好消息好消息</x-marquee-item>
          <x-marquee-item>江南皮革厂倒闭了</x-marquee-item>
          <x-marquee-item>王八蛋黄鹤带着小姨子跑了</x-marquee-item>
        </x-marquee>
      `
    })
    expect(vm.$el.className).toEqual('yui-marquee')
    expect(vm.$el.querySelectorAll('.yui-marquee-item').length).toEqual(5)
  })
  it('should render props:height', () => {
    vm = createVue({
      template: `
        <x-marquee :height="50">
          <x-marquee-item>好消息好消息</x-marquee-item>
          <x-marquee-item>江南皮革厂倒闭了</x-marquee-item>
          <x-marquee-item>王八蛋黄鹤带着小姨子跑了</x-marquee-item>
        </x-marquee>
      `
    })
    expect(vm.$el.style.height).toEqual('50px')
  })
  it('should render props:direction', next => {
    vm = createVue({
      template: `
        <x-marquee direction="down">
          <x-marquee-item>好消息好消息</x-marquee-item>
          <x-marquee-item>江南皮革厂倒闭了</x-marquee-item>
          <x-marquee-item>王八蛋黄鹤带着小姨子跑了</x-marquee-item>
        </x-marquee>
      `
    })
    setTimeout(() => {
      expect(vm.$el.querySelector('.yui-marquee-box').style.webkitTransform).toEqual('translate3d(0, -90px, 0)')
      next()
    }, 3000)
  })
  it('should render props:align', () => {
    vm = createVue({
      template: `
        <x-marquee align="left">
          <x-marquee-item>好消息好消息</x-marquee-item>
          <x-marquee-item>江南皮革厂倒闭了</x-marquee-item>
          <x-marquee-item>王八蛋黄鹤带着小姨子跑了</x-marquee-item>
        </x-marquee>
      `
    })
    expect(vm.$el.querySelector('.yui-marquee-box').classList.contains('yui-marquee-box-align-left')).toEqual(true)
  })
  it('should render props:speed', next => {
    vm = createVue({
      template: `
        <x-marquee :speed="1000">
          <x-marquee-item>好消息好消息</x-marquee-item>
          <x-marquee-item>江南皮革厂倒闭了</x-marquee-item>
          <x-marquee-item>王八蛋黄鹤带着小姨子跑了</x-marquee-item>
        </x-marquee>
      `
    })
    setTimeout(() => {
      expect(vm.$el.querySelector('.yui-marquee-box').style.webkitTransitionDuration).toEqual('1000ms')
      next()
    }, 2200)
  })
  it('should render props:time', next => {
    vm = createVue({
      template: `
        <x-marquee :time="500">
          <x-marquee-item>好消息好消息</x-marquee-item>
          <x-marquee-item>江南皮革厂倒闭了</x-marquee-item>
          <x-marquee-item>王八蛋黄鹤带着小姨子跑了</x-marquee-item>
        </x-marquee>
      `
    })
    setTimeout(() => {
      expect(vm.$el.querySelector('.yui-marquee-box').style.webkitTransform).toEqual('translate3d(0, -60px, 0)')
      next()
    }, 520)
  })
})