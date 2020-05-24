<template>
    <div>
        <div class="title">热门推荐</div>
        <ul class="menu">
            <li @click="menu1">笔记本电脑</li>
            <li @click="menu2">手机</li>
            <li @click="menu3">服饰 </li>
            <li @click="menu4">手表</li>
            <li>书籍</li>
            <li>玩具</li>
            <li>小家电</li>
            <li>学习用品</li>
            <li>办公用品</li>
            <li>旅游用品</li>
            <li>游戏卡通</li>
        </ul>
    </div>
</template>

<script>
import msg from './msg.js'
export default {
    components: { },
    methods: {
        menu1() {
            msg.$emit('val', '1') // emit触发on事件
        },
        menu2() {
            msg.$emit('val', '2') // emit触发on事件,第二个参数为要传递的参数
        },
        menu3() {
            msg.$emit('val', '3') // emit触发on事件
        },
        menu4() {
            msg.$emit('val', '4') // emit触发on事件,第二个参数为要传递的参数
        }
    }
}
</script>
<style>
    .title {
        width: 100px;
        color: firebrick;
    }
    .menu li {
        list-style: none; /* 将li前面的点设置为不显示 */
        height: 50px;
        margin-bottom: 2px;
        background-color: white;
        line-height: 50px;
        cursor: pointer; /* 修改鼠标放在li点击事件上鼠标显示为手 */
    }
</style>