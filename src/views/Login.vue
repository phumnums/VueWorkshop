<template>
  <div>
    <h1>Welcome to Login page</h1>
    <p>{{data}}</p>

    <v-text-field
    name="username"
    label="Username"
    id="username"
    v-model="username"
    >
    </v-text-field>
    <v-btn @click="login">login</v-btn>
  </div>
</template>

<script>
export default {
    data () {
        return {
            username: ''
        }
    },
    methods: {
      login () {
        if(this.username == 'admin') {
          localStorage.setItem('username', 'admin')
          localStorage.setItem('Token', '123456')
          this.$router.push('/simple')
          
        }else alert('Login Failed')
      }
    }
    
}
</script>

<style>

</style>