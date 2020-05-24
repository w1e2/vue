<template>
    <div class="main">
        <div class="left">
            <left></left>
        </div>
        <div class="right">
            <div class="top">
                <img src="imgs/title.jpg">
            </div>
            <div class="buttom">
                <bottom></bottom>
            </div>
        </div>
    </div>
</template>


<script>
import left from '../components/left'
import bottom from '../components/bottom'
export default {
    components: { left, bottom }
    
}
</script>
<style type='text/css'>
/* 默认间距设置为0，以自己设置的间距为准 */
    * {
        padding: 0;
        margin: 0;
    }
    .left {
        /* background-color: red; */
        width: 100px;
        /* height: 560px; */
        float: left;
        margin-right: 10px;
    }
    .right {
        width: 1000px;
        float: left;
        margin-left: 10px;
        /* background-color: deepskyblue; */
    }
    .main {
        width: 1200px;
        margin: 20px auto; /* auto左右居中 */
    }
    /* img {} 类似router-link对应HTML渲染后为a标签  img会对全局的图片标签起作用 */
    .top img {
        width: 100%;
    }
    .left, .right {
        background-color: #f5f5f5;
    }
</style>