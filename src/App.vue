<template>
  <div id="app">
    <img class="logo" alt="Vue logo" src="./assets/logo.png" />
    <h1>Vue.js SOLID todo app example</h1>
    <TodoList />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    TodoList,
  },
};
</script>

<style lang="scss">
@import '@/styles/global';
@import '@/styles/fluid-font-size';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  @media (max-width: 380px) {
    margin-top: 30px;
  }

  img.logo {
    max-width: 200px;
    width: 40%;
  }
}

html {
  @include fluidFontSize(10px, 16px, 320px, 600px);
}
</style>
