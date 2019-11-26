# 1. 简介
* 这是一个vue自定义指令插件，能给一个元素添加一个自定义按键事件

# 2. usage

```js
import CustomKey from './customKey'

Vue.use(CustomKey)
```

component:

```vue
<div v-customKey.83='testEvent'> </div>
```

testEvent 是绑定的事件函数，83是 `s` 的键值，在 div 元素上按下 `s`键即可触发 `testEvent`事件。