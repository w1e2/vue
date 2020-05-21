<template>
  <div>
    <div>
      <router-link to="/a">转向A页面</router-link> |
      <router-link to="/b">转向B页面</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  }
}
</script>
