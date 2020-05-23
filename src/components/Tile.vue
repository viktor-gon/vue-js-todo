<template>
  <div class="tile">
    <h2>{{ item.title }}</h2>
    <Error v-if="hasError">Произошла ошибка</Error>
    <StatusExplanation v-else :code="item.code" />
    <ChangeStatus
      :itemId="item.id"
      :statusCode="item.code"
      :group="`Group${item.id}`"
      :hasError="hasError"
    />
  </div>
</template>

<script>
import { TodoItem } from '@/models/todo-item';
import ChangeStatus from '@/components/ChangeStatus';
import StatusExplanation from '@/components/StatusExplanation';
import Error from '@/components/NotifyAndPlaceholders/Error';

export default {
  name: 'Tile',
  components: {
    ChangeStatus,
    StatusExplanation,
    Error,
  },
  props: {
    item: TodoItem,
  },
  computed: {
    hasError() {
      return !!this.$store.state.todo.errors[this.item.id];
    },
  },
};
</script>

<style scoped lang="scss">
.tile {
  border: 1px solid gray;
  border-radius: 5px;
  background: lightgray;
  padding-bottom: 15px;
  max-width: 600px;
  margin: 0 auto;
}
</style>
