<template>
  <section :class="{ tile: true, odd, deleted }">
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
    odd: Number,
  },
  data: function() {
    return {
      isExpandedManually: false,
      deleted: false,
    };
  },
  methods: {
    expandHandler() {
      this.isExpandedManually = !this.isExpandedManually;
    },
    deleteHandler() {
      // start animation
      this.deleted = true;

      // really delete item in 500 ms
      setTimeout(() => {
        this.$store.dispatch('deleteTodoItem', { id: this.item.id });
      }, 500);
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
@import '@/styles/global';

.tile {
  position: relative;
  border: 1px solid gray;
  border-radius: 5px;
  background: $primaryColor;
  color: $textColor;
  padding: 15px;
  max-width: 600px;
  margin: 0 auto;

  &.odd {
    background: $primaryColorDark;
    color: $textColorDark;
  }

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

.deleted {
  transition: opacity transform 0.5s;
  opacity: 0;
  transform: translateX(-200px);
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
