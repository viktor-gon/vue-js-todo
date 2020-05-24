<template>
  <div>
    <h3>Задач еще нет</h3>
    <button @click="createNewItems">Создать 10 элементов</button>
  </div>
</template>

<script>
export default {
  name: 'NoData',
  methods: {
    createNewItems() {
      this.$store.dispatch('createNewItems');
    },
  },
};
</script>

<style scoped lang="scss">
button {
  min-height: 40px;
  font-weight: bold;
}
</style>
