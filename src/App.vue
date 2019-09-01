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
        <b-row>
          <b-col>
            <BaseSpinner v-show="loading" />
            <PizzaList :pizzas="pizzas" v-show="!loading" />
          </b-col>
        </b-row>
      </b-container>
    </main>
  </div>
</template>

<script>
import PizzaService from "./services/pizza.service";
import BaseSpinner from "./components/BaseSpinner";
import PizzaList from "./components/PizzaList";

export default {
  name: "app",
  components: {
    BaseSpinner,
    PizzaList
  },
  data() {
    return {
      loading: false,
      pizzas: []
    };
  },
  methods: {
    handleEdit() {},
    handleDelete() {}
  },
  mounted() {
    this.loading = true;
    PizzaService.get()
      .then(response => {
        this.pizzas = response.data.pizzas;
      })
      .finally(() => {
        this.loading = false;
      });
  }
};
</script>

<style lang="scss"></style>
