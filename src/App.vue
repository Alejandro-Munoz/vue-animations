<template>
  <div id="app" class="container">
      <br>
      <button class="btn btn-primary" @click="show = !show">Toggle Menu</button>  
      <hr>    
    <div class="flex">
        <appmenu class='menu' v-show="show"></appmenu>
        <br><br>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'

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

.flex{
  display:flex;
  justify-content:flex-start;
}

</style>
