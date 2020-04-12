import Vue from 'vue'
import niuToast from './niu-toast'

let Toast = Vue.extend(niuToast)
let instance
const Message = (message, time = 1000, style) => {
    if (!(instance && instance.inited)) {
        instance = new Toast({
            data: {
                message
            }
        }).$mount()
        instance.inited = true
        document.body.appendChild(instance.$el)
    }

    instance.$set(instance, 'message', message)
    instance.$el.style.display = 'block'
    if (style && style.width) {
        instance.$el.style.width = style.width
    }
    if (style && style.color) {
        instance.$el.querySelector('p').style.color = style.color
    }

    setTimeout(() => {
        instance.$el.style.display = 'none'
    }, time)
}
export default Message
