<template>
  <div>
    <div>
      <ul>
      <li><router-link class="second" to="/a">转向A页面</router-link></li>
      <li><router-link to="/b">转向B页面</router-link></li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* a会对router-link的样式改变，因为router-link被HTML渲染后是当作a标签来使用的 */
a {
  color: #42b983;
  font-size: 26px;
}
/* 以上为第一种方式 全局影响-添加scoped只作用于本页面 */

/* class方式，内部样式表，写法上注意.first*/
/* .first {
  color: coral;
  font-size: 24px;
} */
/* 以上为第二种方式 局部影响-只作用于定义其的元素，且优先级大于标签 */


/* class方式，外部样式表 */
/* @import "../../public/ys1.css" */

/* 以上为第三种方式 局部影响-只作用于定义其的元素，内部样式表比外部样式表优先级高，且class方式比标签方式优先级高 */

/* 在public--index.html文件中修改某个标签的样式，public--index.html是最先被执行的页面 */
/* 上述为第四种方式，全局影响-比标签优先级低且比class优先级更低 */
</style>
