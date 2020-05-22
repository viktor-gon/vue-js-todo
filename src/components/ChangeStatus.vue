<template>
  <div class="toggle">
    <toggle-switch
      :options="myOptions"
      @change="updateMap($event.value)"
      :group="group"
    />
  </div>
</template>

<script>
import { statusLabels, getStatusByName } from '@/models/status';

export default {
  name: 'ChangeStatus',
  props: {
    group: String,
    item: Object,
  },
  data: function() {
    return {
      myOptions: {
        size: {
          width: 25,
        },
        items: {
          delay: 0.4,
          preSelected: this.item.status,
          disabled: false,
          labels: statusLabels,
        },
      },
    };
  },
  watch: {
    'item.code': function() {
      // unlock toggler
      this.myOptions = { ...this.myOptions, items: { disabled: false } };
    },
  },
  methods: {
    updateMap(value) {
      const status = getStatusByName(value);
      if (status.code === this.item.code) {
        return;
      }

      // lock toggler
      this.myOptions = { ...this.myOptions, items: { disabled: true } };

      // update data
      this.$store.dispatch('updateTodoStatus', {
        status,
        id: this.item.id,
      });
    },
  },
};
</script>
