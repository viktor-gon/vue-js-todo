<template>
  <component :is="getStatusComponent" />
</template>

<script>
import { STATUS_COMPONENT_MAPPING } from '@/models/status';

export default {
  name: 'StatusExplanation',
  props: {
    code: String,
  },
  computed: {
    getStatusComponent() {
      return (
        STATUS_COMPONENT_MAPPING[`Status${this.code}`] ||
        STATUS_COMPONENT_MAPPING.StatusUnknown
      );
    },
  },
};
</script>
