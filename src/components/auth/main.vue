
<script>
  import mySignIn from './signin.vue'
  import mySignUp from './signup.vue'
  export default {
    components: {
      mySignIn,
      mySignUp
    },
    data () {
      return {
        visible: 'signin',
        singin: null,
        singup: null
      }
    },
    methods: {
      change () {
        let component = 'signin'
        if (this.visible === 'signin') {
          component = 'signup'
        }
        this.$bus.$emit('reset', { component })
      },
      login (data) {
        this.singin = data
        this.$bus.$emit('reset', { component: 'signin' })
      },
      register (data) {
        this.singup = data
        this.visible = 'signin'
        this.$bus.$emit('reset', { component: 'signup' })
      }
    }
  }
</script>

<template>
  <div class="login-wrap">
    <div class="login-html">
      <input id="tab-1" type="radio" name="tab" class="sign-in" value="signin" @change="change" v-model="visible">
      <label for="tab-1" class="tab">Sign In</label>
      <input id="tab-2" type="radio" name="tab" class="sign-up" value="signup" @change="change" v-model="visible">
      <label for="tab-2" class="tab">Sign Up</label>
      <div class="login-form">
        <my-sign-in @login="login"/>
        <my-sign-up @register="register"/>
      </div>
    </div>
  </div>
</template>

<style src="./login.css"></style>
