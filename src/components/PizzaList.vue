<template>
  <div class="PizzaList">
    <b-row no-gutters class="m-n1">
      <template v-if="!pizzas.length">
        <p>Nenhuma pizza encontrada.</p>
      </template>
      <template v-else>
        <b-col
          class="p-1"
          cols="6"
          sm="4"
          md="3"
          lg="2"
          v-for="pizza in pizzas"
          :key="pizza.id"
        >
          <b-card
            overlay
            text-variant="white"
            sub-title-text-variant="white"
            :img-src="pizza.image.src"
            :img-alt="pizza.image.alt"
            :title="pizza.name"
            :sub-title="`R$ ${pizza.price}`"
          ></b-card>
        </b-col>
      </template>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "PizzaList",
  props: {
    pizzas: Array
  }
};
</script>

<style lang="scss" scoped></style>
