<template>
  <div class="inputBox">
    <el-input v-model="username" placeholder="用户名" ></el-input>
    <el-input v-model="password" placeholder="密码" show-password></el-input>
    <div class="checkBox">
      <el-checkbox v-model="checked">记住我</el-checkbox>
    </div>
    <div class="forgetPassword">
      <router-link to>忘记密码</router-link>
    </div>
    <div class="buttonBox">
      <el-button round @click="login()">登入</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/components/login.scss";
</style>

<script>
import QS from "qs";
import Cookies from "js-cookie";
export default {
  data() {
    return {
      username: "",
      password: "",
      checked: true
    };
  },
  methods: {
    login() {
      let username = this.username;
      let password = this.password;
      let params = { username: username, password: password };
      this.$postWithURL('login',QS.stringify(params))
      .then(response => {
        if(response.code == 200){
          this.$store.commit("login",username)
          Cookies.set("userState",true,{expires:0.0104}),
          this.action();
        }
      })
      .catch(function (error) { // 请求失败处理
        window.console.error(error);
      });
    },
    action(){
      this.$message({
        showClose: true,
        message: "登入成功",
        type: "success",
        duration: 3000
      });
      this.$router.push({ path: "/" });
    }
  }
};
</script>

