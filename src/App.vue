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
            <template v-if="!loading">
              <b-row>
                <b-col>
                  <div class="d-flex justify-content-end mb-3">
                    <b-button variant="success" @click="handleCreate">
                      <font-awesome-icon :icon="['fas', 'plus']" /> Adicionar
                    </b-button>
                  </div>
                </b-col>
              </b-row>
              <PizzaList
                :pizzas="pizzas"
                @view="handleView"
                @delete="handleDelete"
              />
              <b-modal
                hide-footer
                :title="showPizzaModalTitle"
                v-model="showPizza"
              >
                <PizzaForm :pizza="pizza" @submit="handleSave" />
              </b-modal>
            </template>
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
      showPizzaModalTitle: "",
      pizza: {},
      pizzas: []
    };
  },
  methods: {
    handleView(pizza) {
      this.pizza = pizza;
      this.showPizza = true;
      this.showPizzaModalTitle = "Visualizar pizza";
    },
    handleCreate() {
      this.pizza = {};
      this.showPizza = true;
      this.showPizzaModalTitle = "Adicionar pizza";
    },
    handleSave(pizza) {
      this.loading = true;
      console.log("Valid!");
      console.log(pizza);
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
