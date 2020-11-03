<template>
  <div>
    <h1>Component 1</h1>
    <input type="text" v-model="inputText"/>
    <button @click="sendData">Click</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: ''
    }
  },
  methods: {
    sendData() {
      EventBus.fire('ExchangeData', this.inputText);
    }
  }
}
</script>

<style scoped>
</style>
