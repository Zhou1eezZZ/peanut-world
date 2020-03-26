// 节流(如果持续触发一个事件，则在一定的时间内只执行一次事件)
export const throttle = (fn, t) => {
    let timer
    const delay = t || 500
    return (...args) => {
        if (!timer) {
            fn.apply(this, args)
            timer = setTimeout(() => {
                clearTimeout(timer)
                timer = null
            }, delay)
        }
    }
}

// 防抖(在事件被触发n秒之后执行，如果在此期间再次触发事件，则重新开始计时)
export const debounce = (fn, t) => {
    let timer
    const delay = t || 500
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
            clearTimeout(timer)
        }, delay)
    }
}

// base64转file
export const dataURLtoFile = (dataurl, filename) => {
    let arr = dataurl.split(',')
    let mime = arr[0].match(/:(.*?);/)[1]
    let bstr = atob(arr[1])
    let n = bstr.length
    let u8arr = new Uint8Array(n)
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
    }
    return new File([u8arr], filename, { type: mime })
}
