<template>
  <div id="app">
    <header>
      <b-jumbotron
        fluid
        header="Pizzaria"
        lead="Atendendo a seus pedidos, sempre!"
      ></b-jumbotron>
    </header>
    <main>
      <b-container>
        <b-row no-gutters class="m-n1">
          <template v-if="pizzas.length">
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
          <template v-else>
            <p>Nenhuma pizza encontrada.</p>
          </template>
        </b-row>
      </b-container>
    </main>
  </div>
</template>

<script>
import PizzaService from "./services/pizza.service";

export default {
  name: "app",
  data() {
    return {
      pizzas: []
    };
  },
  methods: {
    handleEdit() {},
    handleDelete() {}
  },
  mounted() {
    PizzaService.get().then(response => {
      this.pizzas = response.data.pizzas;
    });
  }
};
</script>

<style lang="scss"></style>
