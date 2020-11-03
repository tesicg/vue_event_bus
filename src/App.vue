<template>
  <div id="app">
    <component-1></component-1>
    <component-2></component-2>
  </div>
</template>

<script>
import Component1 from './components/Component1'
import Component2 from './components/Component2'

export default {
  name: 'app',
  components: {
    Component1,
    Component2
  }
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
