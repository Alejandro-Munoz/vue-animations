<template>
  <div id="app">
    <button class="btn btn-primary" @click="show = !show">Toggle Menu</button>  
    {{ show }}
    <br><br>
    <div class="alert alert-warning" v-show="show">test</div>
    <appmenu class='menu' v-if="show"></appmenu>
  </div>
</template>

<script>
import Menu from './components/menu.vue'

export default {
  name: 'app',
  data () {
    return {
      show: true,
    }
  },
  components:{
    'appmenu':Menu,
  }
}
</script>

<style>
#app {
  height: 300px;
}
.menu{
  height: 200px;
}

</style>
