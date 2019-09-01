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
            <PizzaList :pizzas="pizzas" />
          </b-col>
        </b-row>
      </b-container>
    </main>
  </div>
</template>

<script>
import PizzaService from "./services/pizza.service";
import PizzaList from "./components/PizzaList";

export default {
  name: "app",
  components: {
    PizzaList
  },
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
