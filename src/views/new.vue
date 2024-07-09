<template>
  <div>
    <h1 v-if="show">{{ data }}</h1>
    <ul>
      <li 
      v-for="(item, index) in items" :key='index'>
        {{item.message}}
      </li>
    </ul>

    <v-btn color="success" @click="display()">show</v-btn>

    <v-flex xs4>
        <v-text-field 
        v-model="email"
        label="E-mail"
        prepend-icon="mdi-email"
        id="email">
        </v-text-field>
    </v-flex>

    <v-flex xs4>
        <v-text-field
        v-model="password"
        label="Password"
        prepend-icon="mdi-lock"
        id="password">
        </v-text-field>
    </v-flex>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: "new",
      show: false,
      items: [{ message: "Foo" }, { message: "Bar" }]
    };
  },
  methods: {
    display() {
        alert('Display Function Alert');
    }
  },
  newData() {
    return {
        email: '',
        password: '',
    }
  },
  newMethods: {
    signin() {
        console.log(this.email);
    }
  }
};
</script>

<style></style>
