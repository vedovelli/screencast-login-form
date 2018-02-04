
<script>
  import { required } from 'vuelidate/lib/validators'
  export default {
    mounted () {
      this.$bus.$on('reset', this.reset)
    },
    data () {
      return {
        username: '',
        password: '',
        keepSigned: true,
        markAsInvalid: false
      }
    },
    validations: {
      username: {
        required
      },
      password: {
        required
      }
    },
    watch: {
      username () {
        this.markAsInvalid = false
      }
    },
    methods: {
      reset (obj) {
        if (obj.component === 'signin') {
          this.username = ''
          this.password = ''
          this.keepSigned = true
          this.$v.username.$reset()
          this.$v.password.$reset()
        }
      },
      submit () {
        if (this.$v.$invalid) {
          this.$v.username.$touch()
          this.$v.password.$touch()
        }
        if (!this.$v.$invalid) {
          this.$emit('login', { ...this.$data })
        }
      }
    }
  }
</script>

<template>
  <form action="#" @submit.prevent="submit" class="sign-in-htm">
    <div class="group">
      <label for="user1" :class="{ invalid: $v.username.$error }" class="label">Username</label>
      <input
        id="user1"
        type="text"
        @input="$v.username.$touch()"
        :class="{ invalid: $v.username.$error }"
        class="input" v-model="username">
    </div>
    <div class="group">
      <label for="pass" :class="{ invalid: $v.password.$error }" class="label">Password</label>
      <input
        id="pass"
        :class="{ invalid: $v.password.$error }"
        @input="$v.password.$touch()"
        type="password"
        class="input"
        data-type="password"
        v-model="password">
    </div>
    <div class="group">
      <input id="check" type="checkbox" class="check" v-model="keepSigned">
      <label for="check"><span class="icon"></span> Keep me Signed in</label>
    </div>
    <div class="group">
      <input type="submit" class="button" value="Sign In">
    </div>
    <div class="hr"></div>
    <div class="foot-lnk">
      <a href="#forgot">Forgot Password?</a>
    </div>
  </form>
</template>
