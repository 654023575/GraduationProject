var wow = new WOW({
    boxClass: 'wow-brand',
    animateClass: 'animated',
    offset: 0,
    mobile: false,
    live: true
});
wow.init();

// 属性/方法	 类型	   默认值	 说明
// boxClass	 字符串	‘wow’	需要执行动画的元素的 class
// animateClass	字符串	‘animated’	animation.css 动画的 class
// offset	整数	0	距离可视区域多少开始执行动画
// mobile	布尔值	true	是否在移动设备上执行动画
// live	布尔值	true	异步加载的内容是否有效
