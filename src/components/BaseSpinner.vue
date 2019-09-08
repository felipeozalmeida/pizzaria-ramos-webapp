<template>
  <div class="BaseSpinner">
    <font-awesome-icon :icon="['fas', 'circle-notch']" size="2x" spin />
  </div>
</template>

<script>
export default {
  name: "BaseSpinner"
};
</script>

<style lang="scss" scoped>
.BaseSpinner {
  display: flex;
  justify-content: center;
}
</style>
