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
            <PizzaList
              :pizzas="pizzas"
              v-show="!loading"
              @view="handleView"
              @delete="handleDelete"
            />
            <b-modal hide-footer title="Editar pizza" v-model="showPizza">
              <PizzaForm :pizza="pizza" @edit="handleEdit" />
            </b-modal>
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
import PizzaForm from "./components/PizzaForm";

export default {
  name: "app",
  components: {
    BaseSpinner,
    PizzaList,
    PizzaForm
  },
  data() {
    return {
      loading: false,
      showPizza: false,
      pizza: {},
      pizzas: []
    };
  },
  methods: {
    handleView(pizza) {
      this.pizza = pizza;
      this.showPizza = true;
    },
    handleEdit(e, pizza) {
      this.loading = true;
      if (e.target.checkValidity()) {
        console.log("Valid!");
        console.log(pizza);
      }
      this.loading = false;
    },
    handleDelete(pizza) {
      console.log(pizza);
    }
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
