let CustomKey = {}
CustomKey.install = function (Vue, options) {
    Vue.directive('customKey', {
        inserted: (el, binding, vnode) => {
            el.setAttribute('tabindex', '0')
            el.style.outline = 'none'
            el.onkeyup = function (e) {
                let keys = Object.keys(binding.modifiers)
                if (keys[0] && Number(keys[0])) {
                    if (e.keyCode == keys[0]) {
                        // vnode.context[binding.value]()
                        binding.value()
                    }
                } else if (keys[0]) {
                    binding.value()
                } else {
                    throw new Error('传入值出错')
                }
            }
        }
    })
}
export default CustomKey
