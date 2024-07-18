<template>
  <div>
    <h1>APICON</h1>
    <v-btn color="success" @click="newItem()">NewItem</v-btn>

    <v-row>
      <v-col cols="3" v-for="(item, index) in apidata" :key="index">
        <v-card width="350">
          <v-img width="350" :src="item.imglink"></v-img>
          <v-card-title primary-title>{{ item.product_name }}</v-card-title>
          <v-card-actions>
            <v-btn color="success" @click="editItem(item)">Edit</v-btn>
            <v-btn color="error" @click="delItem(item._id)">Del</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="dialogedit" max-width="500px">
      <v-card>
        <v-card-title primary-title>{{ savemode }}</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="6">
              <v-text-field
                name="product_name"
                label="Product Name"
                v-model="postdata.product_name"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                name="price"
                label="Price"
                v-model="postdata.price"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                name="amount"
                label="Amount"
                v-model="postdata.amount"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text @click="closeItem()">Cancel</v-btn>
          <v-btn color="info" text @click="saveSelect()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios' // นำเข้า axios

export default {
  data() {
    return {
      dialogedit: false,
      apidata: [],
      id: "",
      postdata: {
        product_name: "",
        price: "",
        amount: "",
      },
      postdefault: {
        product_name: "",
        price: "",
        amount: "",
      },
    };
  },
  computed: {
    savemode() {
      return this.id === "" ? "New Item" : "Edit Item";
    },
  },
  created() {
    this.getData();
  },
  methods: {
    newItem() {
      this.id = "";
      this.postdata = { ...this.postdefault };
      this.dialogedit = true;
    },
    editItem(item) {
      this.id = item._id;
      this.postdata = { ...item };
      this.dialogedit = true;
    },
    closeItem() {
      this.id = "";
      this.postdata = { ...this.postdefault };
      this.dialogedit = false;
    },
    saveSelect() {
      if (this.id !== "") {
        this.savePutData();
      } else {
        this.savePostData();
      }
    },
    async savePostData() {
      try {
        const { data } = await axios.post('http://localhost:3000/api/v1/products', this.postdata, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        });
        console.log(data);
        alert('Create Complete');
        this.getData();
        this.closeItem();
      } catch (error) {
        console.log(error);
        alert('error');
      }
    },
    async savePutData() {
      try {
        const { data } = await axios.put(`http://localhost:3000/api/v1/products/${this.id}`, this.postdata, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        });
        console.log(data);
        alert('Update Complete');
        this.getData();
        this.closeItem();
      } catch (error) {
        console.log(error);
        alert('error');
      }
    },
    async delItem(id) {
      if (confirm('Delete it?')) {
        try {
          const { data } = await axios.delete(`http://localhost:3000/api/v1/products/${id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("Token")}`,
            },
          });
          console.log(data);
          alert('Delete Complete');
          this.getData();
        } catch (error) {
          console.log(error);
          alert('error');
        }
      }
    },
    getData() {
      axios.get(`${process.env.VUE_APP_API}/api/v1/products`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }).then((response) => {
        console.log(response.data);
        this.apidata = response.data.data;
      });
    },
  },
};
</script>

<style></style>
