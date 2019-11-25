<template>
  <div class="headerBox" @mousewheel="test">
    <!-- <transition name="slide-fade" mode="out-in">
      <div class="headerposition" v-if="show" key="myHead">
        <myHead></myHead>
      </div> -->
      <div class="headerposition"  key="myHeadNav">
        <myHeadNav></myHeadNav>
      </div>
    <!-- </transition> -->
  </div>
</template>


<style lang="scss" scoped>
@import "../assets/scss/index.scss";
</style>


<script>
// import myHead from "./../components/header";
import myHeadNav from "./../components/headerNav";
export default {
  components: {
    // myHead,
    myHeadNav
    // rotationChart,
    // layout,
    // myAside
  },
  data() {
    return {
      show: true
    };
  },
  methods: {
    test(e) {
      if (e.deltaY > 0) {
        this.show = !this.show;
        //设置组件a消失，组件b出现
      } else {
        this.show = !this.show;
        //设置组件b出现，组件a消失
      }
      window.console.log(e.deltaY);
    }
  }
};
</script>