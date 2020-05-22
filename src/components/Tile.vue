<template>
  <div class="tile">
    <h3>{{ item.title }}</h3>
    <p>{{ item.body }}</p>
  </div>
</template>

<script>
import { TodoItem } from '@/models/todo-item';

export default {
  name: 'Tile',
  props: {
    item: TodoItem,
  },
};
</script>

<style scoped lang="scss">
.tile {
  border: 1px solid gray;
  border-radius: 5px;
  background: lightgray;
}
</style>
