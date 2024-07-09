<template>
  <div>
    <h1>Welcome to Simple</h1>
    <h1 v-if="show">{{ name }} za</h1>
    <v-btn color="success" @click="show = !show">switch</v-btn>

    <v-row>
      <v-col cols="3" v-for="(item, index) in datacat" :key="index">
        <v-card width="350">
          <v-img width="350" :src="item.imglink"></v-img>
          <v-card-title primary-title>
            {{ item.name }}
          </v-card-title>
          <v-card-action>
            <v-btn color="success" @click="AlertParam(item.name)">
                callname
            </v-btn>
          </v-card-action>
        </v-card>
      </v-col>

      <v-col cols="12">
        <h1>{{ value1 }}</h1>
        <v-text-field v-model="value1" label="value1" id="value1">
        </v-text-field>
        <v-btn color="success" @click="AlertParam(value1)">alert</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "hello",
      show: false,
      datacat: [
        {
          name: "bibble",
          imglink:
            "https://i.pinimg.com/474x/1f/1b/cd/1f1bcd08c6c95d4d2246066ffc2750dc.jpg",
        },
        {
          name: "dog",
          imglink: require("../assets/ad5373e021426ed1e23aa68baff219fc.jpg"),
        },
      ],
      value1: "",
    };
  },
  methods: {
    AlertName() {
      alert("Hello World");
    },
    AlertParam(item) {
      alert(item);
    },
  },
};
</script>

<style></style>
