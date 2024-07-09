<template>
  <div class="input">

    <v-form 
    ref="form"
    v-model="valid">

    <v-flex>
      <v-text-field 
      v-model="studentID" 
      label="Student ID" 
      id="studentID"
      :rules="studentIDRule"
      required>
      </v-text-field>
    </v-flex>

    <v-flex>
      <v-text-field 
      v-model="score" 
      label="Score" 
      id="score"
      :rules="scoreRule">
      
      </v-text-field>
    </v-flex>

    <v-btn @click="display">calculate</v-btn>
</v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      studentID: "",
      score: "",
      snackbar: false,
      alert: false,
      alertMsg: "",
      studentIDRule: [
        v => !!v || "Student ID is required",
        v => !isNaN(v) || "Student ID must be a number"
      ],
      scoreRule: [
        v => !!v || "Score must be a number",
        v => (v >= 0 && v <= 100) || "Score must be between 0 and 100"
      ]
    };
  },

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }else {
        this.alert = true
        this.alertMsg = "Please fill in the form"
      }
    },

    display() {
      if (this.score <= 100 && this.score >= 80) {
        alert(`StudentID: ${this.studentID} \nScore: ${this.score} \nGrade: A`);
      } else if (this.score <= 79 && this.score >= 70) {
        alert(`StudentID: ${this.studentID} \nScore: ${this.score} \nGrade: B`);
      } else if (this.score <= 69 && this.score >= 60) {
        alert(`StudentID: ${this.studentID} \nScore: ${this.score} \nGrade: C`);
      } else if (this.score <= 59 && this.score >= 50) {
        alert(`StudentID: ${this.studentID} \nScore: ${this.score} \nGrade: D`);
      } else {
        alert(`StudentID: ${this.studentID} \nScore: ${this.score} \nGrade: F`);
      }
    },
  },
};
</script>

<style>
.input {
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
