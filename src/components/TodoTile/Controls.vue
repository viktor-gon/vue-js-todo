<template>
  <ul>
    <li>
      <button title="Expand" @click="expandClick">
        <img :src="iconExpand" alt="Expand" :class="{ rotate: isExpanded }" />
      </button>
    </li>
    <li>
      <button title="Delete" @click="deleteClick">
        <img :src="iconsDelete" alt="Delete" />
      </button>
    </li>
  </ul>
</template>

<script>
import iconsDelete from '@/assets/icons/delete.svg';
import iconExpand from '@/assets/icons/expand.svg';

export default {
  props: {
    isExpanded: Boolean,
  },
  data() {
    return {
      iconsDelete,
      iconExpand,
    };
  },
  methods: {
    expandClick() {
      this.$emit('click-expand');
    },
    deleteClick() {
      this.$emit('click-delete');
    },
  },
};
</script>

<style scoped lang="scss">
ul {
  display: flex;
  list-style: none;

  button {
    background: transparent;
    border: none;
    outline: none;
    padding: 0;
    opacity: 0.7;
    cursor: pointer;

    &:hover,
    &:focus {
      opacity: 1;
    }
  }

  img {
    transition: transform 0.5s;
  }

  .rotate {
    transform: translateY(5px);
  }
}
</style>
