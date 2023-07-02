<template>
  <div>
    <h1>Welcome to {{ text }}!</h1>
    <input @change="handleData" type="text" v-model="inputValue" />
    <ul>
      <li :key="i" v-for="(v, i) in list">{{ v }}</li>
    </ul>
    <p v-if="isRender">Rendered!</p>
    <button @click="changeRender">{{ isRender ? "hide" : "show" }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "Home",
      inputValue: "example",
      list: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      isRender: true,
    };
  },
  methods: {
    handleData() {
      console.log(this.inputValue);
      this.text = this.inputValue;
    },
    changeRender() {
      this.isRender = !this.isRender;
    },
  },
  beforeCreate() {
    alert("beforeCreate");
  },
  watch: {
    inputValue() {
      console.log("Watching! =>" + this.inputValue);
    },
  },
  name: "ViewHome",
};
</script>
