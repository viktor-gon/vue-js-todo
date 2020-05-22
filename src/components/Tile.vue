<template>
  <div class="tile">
    <h2>{{ item.text }}</h2>
    <StatusExplanation :code="item.code" />
    <ChangeStatus :item="item" :group="`Group${item.id}`" />
  </div>
</template>

<script>
import { TodoItem } from '@/models/todo-item';
import ChangeStatus from '@/components/ChangeStatus';
import StatusExplanation from '@/components/StatusExplanation';

export default {
  name: 'Tile',
  components: {
    ChangeStatus,
    StatusExplanation,
  },
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
