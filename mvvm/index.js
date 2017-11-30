import Mvvm from './src/mvvm'

window.vm = new Mvvm({
  el: document.querySelector('#app'),
  data: {
    name: 'World'
  },
  methods: {
    sayHi() {
      this.name = 'Mvvm'
    }
  }
})

