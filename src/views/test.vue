<template>
  <div id="databinding">
    <button v-on:click="show = !show">点我</button>
    <transition name="slide-fade">
      <p v-if="show">菜鸟教程</p>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/test.scss";
</style>

<script>
export default {
    data(){
        return{
            show:true,
        }
    }
}
</script>