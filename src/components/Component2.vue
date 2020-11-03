<template>
  <div>
    <h1>Component 2</h1>
    <h2>{{ inputValue }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: 'Old value'
    }
  },
  mounted() {
    EventBus.listen('ExchangeData', this.onExchangeData);
  },
  methods: {
    onExchangeData(value) {
      this.inputValue = value;
    }
  }
}
</script>

<style scoped>
</style>
