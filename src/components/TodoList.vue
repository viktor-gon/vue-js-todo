<template>
  <div class="hello">
    <transition-group name="flip-list" tag="ul">
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
  name: 'HelloWorld',
  components: {
    Tile,
  },
  mounted() {
    this.$store.dispatch('fetchData');
  },
  computed: {
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
ul {
  list-style: none;
  li {
    margin-bottom: 10px;
  }
}
.flip-list-move {
  transition: transform 1.5s;
}
</style>
