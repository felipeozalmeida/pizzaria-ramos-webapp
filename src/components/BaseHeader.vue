<template>
  <header class="BaseHeader">
    <b-jumbotron
      fluid
      class="BaseHeader__jumbotron"
      header="Pizzaria Ramos"
      lead="Atendendo a seus pedidos, sempre!"
      text-variant="white"
    ></b-jumbotron>
  </header>
</template>

<script>
export default {
  name: "BaseHeader"
};
</script>

<style lang="scss" scoped>
.BaseHeader__jumbotron {
  padding: 6rem 3rem;
  text-shadow: 0.0625rem 0.0625rem 0.625rem #000;
  background-image: url("~@/assets/header-background.jpg");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>
