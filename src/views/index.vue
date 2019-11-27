<template>
  <div class="headerBox" @mousewheel="test">
    <transition name="slide-fade">
      <div class="fixed" v-if="show" key="myHeadNav">
        <myHeadNav></myHeadNav>
      </div>
      <div class="fixed" v-else key="myHead">
        <myHead></myHead>
      </div>
    </transition>
    <!-- <transition name="slide-fade" mode="out-in">
    </transition> -->
  </div>
</template>


<style lang="scss" scoped>
@import "../assets/scss/index.scss";
</style>


<script>
import myHead from "./../components/header";
import myHeadNav from "./../components/headerNav";
export default {
  components: {
    myHead,
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
        this.show = true;
        //设置组件a消失，组件b出现
      } else {
        this.show = false;
        //设置组件b出现，组件a消失
      }
      window.console.log(e.deltaY);
    }
  }
};
</script>