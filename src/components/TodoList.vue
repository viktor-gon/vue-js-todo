<template>
  <div class="hello">    
    <ul>
      <li v-for="(item, index) in items" :key="item.id">
        <Tile :item="item" :status="index" />
      </li>
    </ul>
  </div>
</template>

<script>
import Tile from '@/components/Tile';

export default {
  name: 'HelloWorld',
  components: {
    Tile,
  },
  mounted() {
    this.$store.dispatch('fetchData');
  },
  computed: {
    items() {
      return this.$store.state.todo.items;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
  list-style: none;
}
</style>
