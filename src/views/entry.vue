<template>
  <el-container>
    <!-- <el-header>
      <div class="imgBox"></div>
    </el-header>-->
    <el-main>
      <el-row type="flex" align="middle">
        <el-col :xs="0" :sm="6" :md="8" :lg="8" :xl="8">
          <div class="imgBoxContainer">
            <div class="imgBox"></div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
          <div class="content">
            <div class="swithBox">
              <div
                class="leftSwitch"
                v-bind:class="{active:switchProperty}"
                @click="loginFunction()"
              >登入</div>
              <div
                class="rightSwitch"
                v-bind:class="{active:!switchProperty}"
                @click="registerFunction()"
              >注册</div>
            </div>
            <div class="inputBox loginBox" v-if="switchProperty">
              <login></login>
            </div>
            <div class="inputBox loginBox" v-if="!switchProperty">
              <register></register>
            </div>
          </div>
        </el-col>
        <!-- <el-col :span="8"></el-col> -->
      </el-row>
    </el-main>
  </el-container>
</template>
<style lang="scss" scoped>
$img: "../assets/pic";
@import "../assets/scss/public.scss";
@import "../assets/scss/entry.scss";

@import url("../assets/scss/public.scss");
// @import url("../assets/scss/entry.scss");
</style>
<script>
import login from "./../components/login";
import register from "./../components/register";
// @ is an alias to /src
export default {
  components: {
    login,
    register
  },
  data() {
    return {
      switchProperty: true
    };
  },
  methods: {
    loginFunction() {
      this.switchProperty = true;
    },
    registerFunction() {
      this.switchProperty = false;
    }
  }
};
</script>
