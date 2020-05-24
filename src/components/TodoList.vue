<template>
  <div class="todolist">
    <Preloader v-if="!haveItems" />
    <NoData v-else-if="haveEmptyItems" />
    <transition-group v-else name="flip-list" tag="ul">
      <li v-for="(item, index) in todoItems" :key="item.id">
        <TodoTile :item="item" :odd="index % 2" />
      </li>
    </transition-group>
  </div>
</template>

<script>
import TodoTile from '@/components/TodoTile';
import Preloader from '@/components/NotifyAndPlaceholders/Preloader';
import NoData from '@/components/NotifyAndPlaceholders/NoData';

import { getStatusPriorityByCode } from '@/models/status';

export default {
  name: 'TodoList',
  components: {
    TodoTile,
    Preloader,
    NoData,
  },
  mounted() {
    this.$store.dispatch('loadTodoItems');
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
      return items.sort((a, b) => {
        const diff =
          getStatusPriorityByCode[a.code] - getStatusPriorityByCode[b.code];
        return diff ? diff : a.id - b.id;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.todolist {
  ul {
    padding: 0;
    list-style: none;
    li {
      margin-bottom: 10px;
      padding: 0;
    }
  }
  .flip-list-move {
    transition: transform 1.5s;
  }
}
</style>
