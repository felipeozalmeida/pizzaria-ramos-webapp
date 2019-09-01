<template>
  <div class="PizzaList">
    <b-row no-gutters class="m-n2">
      <template v-if="!pizzas.length">
        <p>Nenhuma pizza encontrada.</p>
      </template>
      <template v-else>
        <b-col
          class="p-2"
          cols="6"
          sm="4"
          md="3"
          lg="2"
          v-for="pizza in pizzas"
          :key="pizza.id"
        >
          <PizzaItem
            :pizza="pizza"
            @edit="handleEdit"
            @delete="handleDelete"
          ></PizzaItem>
        </b-col>
      </template>
    </b-row>
  </div>
</template>

<script>
import PizzaItem from "./PizzaItem";

export default {
  name: "PizzaList",
  components: {
    PizzaItem
  },
  props: {
    pizzas: Array
  },
  methods: {
    handleEdit() {},
    handleDelete() {}
  }
};
</script>

<style lang="scss" scoped></style>
