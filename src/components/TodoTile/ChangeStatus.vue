<template>
  <div class="toggle">
    <toggle-switch
      :options="myOptions"
      @change="updateMap($event.value)"
      v-model="selectedValue"
      :group="group"
    />
  </div>
</template>

<script>
import {
  statusLabels,
  getStatusByName,
  getStatusNameByCode,
} from '@/models/status';

export default {
  name: 'ChangeStatus',
  props: {
    group: String,
    itemId: Number,
    statusCode: String,
    hasError: Boolean,
  },
  data: function() {
    return {
      selectedValue: this.statusName(),
      myOptions: {
        size: {
          width: 25,
        },
        items: {
          delay: 0.4,
          preSelected: this.statusName(),
          disabled: false,
          labels: statusLabels,
        },
      },
    };
  },
  watch: {
    hasError: function() {
      if (!this.hasError) {
        this.selectedValue = this.statusName();
        this.unlockToggler(true);
      }
    },
    statusCode: function() {
      // unlock toggler
      this.unlockToggler(true);
    },
  },
  methods: {
    statusName() {
      return (
        getStatusNameByCode[this.statusCode] || getStatusNameByCode.unknown
      );
    },
    unlockToggler(unlock) {
      this.myOptions = { ...this.myOptions, items: { disabled: !unlock } };
    },
    updateMap(value) {
      const status = getStatusByName(value);
      if (status.name === this.statusName()) {
        return;
      }

      // lock toggler
      this.unlockToggler(false);

      // update data
      this.$store.dispatch('updateTodoStatus', {
        status,
        id: this.itemId,
      });
    },
  },
};
</script>
