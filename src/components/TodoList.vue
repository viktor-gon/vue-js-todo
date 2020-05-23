<template>
  <div class="todolist">
    <h3 v-if="!haveItems">Загрузка...</h3>
    <div v-else-if="haveEmptyItems">
      <h3>Задач еще нет</h3>
      <button @click="createNewItems">Создать 10 элементов</button>
    </div>
    <transition-group v-else name="flip-list" tag="ul">
      <li v-for="item in todoItems" :key="item.id">
        <Tile :item="item" />
      </li>
    </transition-group>
  </div>
</template>

<script>
import Tile from '@/components/Tile';
import { getStatusPriorityByCode } from '@/models/status';

export default {
  name: 'TodoList',
  components: {
    Tile,
  },
  mounted() {
    this.$store.dispatch('loadTodoItems');
  },
  methods: {
    createNewItems() {
      this.$store.dispatch('createNewItems');
    },
  },
  computed: {
    haveItems() {
      return this.$store.state.todo.items;
    },
    haveEmptyItems() {
      const items = this.$store.state.todo.items;
      return items && items.length == 0;
    },
    todoItems() {
      const items = this.$store.state.todo.items.slice(0);
      return items.sort(
        (a, b) =>
          getStatusPriorityByCode[a.code] - getStatusPriorityByCode[b.code]
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.todolist {
  button {
    min-height: 40px;
    font-weight: bold;
  }

  ul {
    list-style: none;
    li {
      margin-bottom: 10px;
    }
  }
  .flip-list-move {
    transition: transform 1.5s;
  }
}
</style>
