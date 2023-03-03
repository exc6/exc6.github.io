// 设置div移动的位置 
function getStyle(el,attr){
    return window.getComputedStyle(el)[attr]
}
 // 调用：div 属性：left top,目标位置：600 100,50 ，步长：10，毫秒数：20 callback：回调
function moveFn(el,attr,target,step,speed,callback){
    // 当div的移动的位置 < 目标位置600 成立是正值step ，不成立为负值 -step
    step = parseFloat(getStyle(el,attr)) < target ? step : -step
    // 清除定时器
    clearInterval(timer)
    // 使用timer 开启定时器
    timer = setInterval(() => {
        // 获取div的移动的位置的值
        let temp = parseFloat(getStyle(el,attr))
        // 定时器每执行一次就让 temp div的初始位置上 + 步长step 没走一次+10 一直走到600就停止计时器 也就不懂了
        let attrValue = temp + step
        // 当div移动位置的值 > 目标值的时候 并且 目标值比0大的时候 就让初始位置的关于目标位置 反之 当div移动位置的值 <  目标值的时候 并且 目标值比0小的时候 就让初始位置的关于目标位置
        if(attrValue > target && step > 0 || attrValue < target && step < 0){
            attrValue = target
            // 停止计时器
            clearInterval(timer)
        }
        // 定时器每执行一次div的left值 就往前走10px
        el.style[attr] = attrValue + 'px'
        // 当div的步长 等于 目标值的时候就停止计时器
        if(attrValue === target){
            // 停止计时器
            clearInterval(timer)
            // callback永远为真，callback（）只有在调用了才是真 &&：一边为假两边都假。 有一边是假，则回调函数不成立。
            callback && callback()
        }
    },speed)
   
}

