<template>
  <div id="app" class="container clearfix menu-color">
      <div class="row">
        <div class="col-md-12">
          <button class="btn btn-primary" @click="show = !show">Toggle Menu</button>  
          <hr>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="flex">
            <appmenu class='menu1' v-show="show"></appmenu>
            <router-view></router-view>
          </div>
        </div>
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
  height: 100%;
}
.menu1{
  height: 100%;
  background: red;
  /* width: 280px; */
  /* height: 200px; */
}

.flex{
  display:flex;
  justify-content:flex-start;
  align-items: stretch;
}

.clearfix::after {
    display: block;
    clear: both;
    content: "";
}

</style>
