
<script>
  import { required, sameAs, email } from 'vuelidate/lib/validators'
  export default {
    mounted () {
      this.$bus.$on('reset', this.reset)
    },
    data () {
      return {
        username: '',
        password1: '',
        password2: '',
        email: ''
      }
    },
    validations: {
      username: {
        required
      },
      password1: {
        required
      },
      password2: {
        required,
        sameAsPassword: sameAs('password1')
      },
      email: {
        required,
        email
      }
    },
    methods: {
      reset (obj) {
        if (obj.component === 'signup') {
          Object.keys(this.$data).forEach(key => {
            this.$v[key].$reset()
            this.$data[key] = ''
          })
        }
      },
      submit () {
        if (this.$v.$invalid) {
          Object.keys(this.$data).forEach(key => {
            this.$v[key].$touch()
          })
        }
        if (!this.$v.$invalid) {
          this.$emit('register', { ...this.$data })
        }
      }
    }
  }
</script>

<template>
  <form action="#" @submit.prevent="submit" class="sign-up-htm">
    <div class="group">
      <label :class="{ invalid: $v.username.$error }" for="user" class="label">Username</label>
      <input
        @input="$v.username.$touch()"
        :class="{ invalid: $v.username.$error }"
        id="user"
        type="text"
        class="input"
        v-model="username">
    </div>
    <div class="group">
      <label :class="{ invalid: $v.password1.$error }" for="pass1" class="label">Password</label>
      <input
        @input="$v.password1.$touch()"
        :class="{ invalid: $v.password1.$error }"
        id="pass1"
        type="password"
        class="input"
        data-type="password"
        v-model="password1">
    </div>
    <div class="group">
      <label :class="{ invalid: $v.password2.$error }" for="pass2" class="label">Repeat Password</label>
      <input
        @input="$v.password2.$touch()"
        :class="{ invalid: $v.password2.$error }"
        id="pass2" type="password"
        class="input"
        data-type="password"
        v-model="password2">
    </div>
    <div class="group">
      <label :class="{ invalid: $v.email.$error }" for="email" class="label">Email Address</label>
      <input
        @input="$v.email.$touch()"
        :class="{ invalid: $v.email.$error }"
        id="email"
        type="text" class="input"
        v-model="email">
    </div>
    <div class="group">
      <input type="submit" class="button" value="Sign Up">
    </div>
    <div class="hr"></div>
    <div class="foot-lnk">
      <label for="tab-1">Already Member?</a></label>
    </div>
  </form>
</template>
