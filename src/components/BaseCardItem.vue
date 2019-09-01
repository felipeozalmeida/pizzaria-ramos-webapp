<template>
  <div class="BaseCardItem">
    <b-card
      overlay
      text-variant="white"
      sub-title-text-variant="white"
      :img-src="imgSrc"
      :img-alt="imgAlt"
      :title="title"
      :sub-title="subTitle"
    ></b-card>
  </div>
</template>

<script>
export default {
  name: "BaseCardItem",
  props: {
    imgAlt: String,
    imgSrc: String,
    title: String,
    subTitle: String
  }
};
</script>

<style lang="scss" scoped></style>
