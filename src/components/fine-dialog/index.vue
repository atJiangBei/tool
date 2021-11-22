<template>
  <teleport to="body">
    <div class="fine-dialog" v-if="modelValue">
      <div class="fine-dialog-mask" @click="close"></div>
      <div class="fine-dialog-container">
        <slot></slot>
      </div>
    </div>
  </teleport>
</template>
<script>
export default {
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    return {
      close() {
        context.emit('update:modelValue', false);
      },
    };
  },
};
</script>
<style lang="less">
.fine-dialog {
  .fine-dialog-mask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }
  .fine-dialog-container {
    position: fixed;
    left: 0;
    right: 0;
    top: 100px;
    background: #fff;
    border-radius: 3px;
    width: 500px;
    padding: 20px;
    margin: auto;
    border: 1px solid #ddd;
  }
}
</style>
