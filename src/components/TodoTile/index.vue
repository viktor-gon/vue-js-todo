<template>
  <section class="tile">
    <h2>{{ item.title }}</h2>
    <Controls
      class="controls"
      v-show="showControls"
      @click-expand="expandHandler"
      @click-delete="deleteHandler"
      :isExpanded="isExpanded"
    />
    <transition name="fade">
      <div v-show="isExpanded">
        <Error v-if="hasError">Произошла ошибка</Error>
        <StatusExplanation v-else :code="item.code" />
        <ChangeStatus
          :itemId="item.id"
          :statusCode="item.code"
          :group="`Group${item.id}`"
          :hasError="hasError"
        />
      </div>
    </transition>
  </section>
</template>

<script>
import { TodoItem } from '@/models/todo-item';
import { StatusCodes } from '@/models/status';
import ChangeStatus from '@/components/TodoTile/ChangeStatus';
import Controls from '@/components/TodoTile/Controls';
import StatusExplanation from '@/components/StatusExplanation';
import Error from '@/components/NotifyAndPlaceholders/Error';

export default {
  name: 'TodoTile',
  components: {
    ChangeStatus,
    Controls,
    StatusExplanation,
    Error,
  },
  props: {
    item: TodoItem,
  },
  data: function() {
    return { isExpandedManually: false };
  },
  methods: {
    expandHandler() {
      this.isExpandedManually = !this.isExpandedManually;
    },
    deleteHandler() {
      this.$store.dispatch('deleteTodoItem', { id: this.item.id });
    },
  },
  computed: {
    hasError() {
      return !!this.$store.state.todo.errors[this.item.id];
    },
    showControls() {
      return this.item.code === StatusCodes.forget;
    },
    isExpanded() {
      return !this.showControls || this.isExpandedManually;
    },
  },
};
</script>

<style scoped lang="scss">
.tile {
  position: relative;
  border: 1px solid gray;
  border-radius: 5px;
  background: lightgray;
  padding: 15px;
  max-width: 600px;
  margin: 0 auto;

  transition: all 1.5s;
  h2 {
    margin-top: 25px;
  }
}

.controls {
  position: absolute;
  top: 5px;
  right: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
