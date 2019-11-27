<template>
  <div class="headerNav" >
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">生活</el-menu-item>
          <el-menu-item index="2">教育</el-menu-item>
          <el-menu-item index="3">心理</el-menu-item>
          <el-menu-item index="4">学习</el-menu-item>
          <el-menu-item index="5">科技</el-menu-item>
          <el-menu-item index="6">数码</el-menu-item>
          <el-menu-item index="7">时尚</el-menu-item>
          <el-menu-item index="8">影视</el-menu-item>
        </el-menu>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/components/headerNav.scss";
</style>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      window.console.log(key, keyPath);
    },
    // test(e) {
    //   if (e.deltaY > 0) {
    //     this.show = !this.show;
    //     //设置组件a消失，组件b出现
    //   } else {
    //     this.show = !this.show;
    //     //设置组件b出现，组件a消失
    //   }
    //   window.console.log(e.deltaY);
    // }
  }
};
</script>