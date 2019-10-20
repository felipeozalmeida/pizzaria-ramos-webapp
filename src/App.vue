<template>
  <div id="app">
    <BaseHeader />
    <main>
      <b-container>
        <b-row>
          <b-col>
            <h2 class="sr-only">Pizzas</h2>
            <PizzaToolbar
              @search="handleSearch"
              @reset="handleReset"
              @create="handleCreate"
            />
            <BaseSpinner v-show="loading" />
            <PizzaList
              :pizzas="pizzas"
              @view="handleView"
              @delete="handleDelete"
              v-show="!loading"
            />
            <b-modal
              hide-footer
              :title="showPizzaModalTitle"
              v-model="showPizza"
            >
              <PizzaForm
                :pizza="pizza"
                @submit="handleSave"
                :loading="loadingPizzaForm"
              />
            </b-modal>
          </b-col>
        </b-row>
      </b-container>
    </main>
  </div>
</template>

<script>
import PizzaService from "./services/pizza.service";
import BaseHeader from "./components/BaseHeader";
import BaseSpinner from "./components/BaseSpinner";
import PizzaToolbar from "./components/PizzaToolbar";
import PizzaList from "./components/PizzaList";
import PizzaForm from "./components/PizzaForm";
import notifications from "./helpers/notifications";

export default {
  name: "app",
  components: {
    BaseHeader,
    BaseSpinner,
    PizzaToolbar,
    PizzaList,
    PizzaForm
  },
  data() {
    return {
      pizza: {},
      pizzas: [],
      loading: false,
      loadingPizzaForm: false,
      didGetPizzasFailed: false,
      showPizza: false,
      showPizzaModalTitle: ""
    };
  },
  methods: {
    getPizzas() {
      this.loading = true;
      PizzaService.list()
        .then(({ data }) => {
          this.pizzas = data;
        })
        .catch(() => {
          this.didGetPizzasFailed = true;
          this.$bvToast.toast(notifications.defaults.message.error, {
            ...notifications.config,
            title: notifications.defaults.title.error,
            variant: "danger"
          });
        })
        .finally(() => {
          this.loading = false;
        });
    },
    handleView(pizza) {
      this.pizza = pizza;
      this.showPizza = true;
      this.showPizzaModalTitle = "Visualizar pizza";
    },
    handleSearch(search) {
      this.loading = true;
      PizzaService.search(search)
        .then(({ data: { pizzas } }) => {
          this.pizzas = pizzas;
        })
        .catch(() => {
          this.$bvToast.toast(notifications.defaults.message.error, {
            ...notifications.config,
            title: notifications.defaults.title.error,
            variant: "danger"
          });
        })
        .finally(() => {
          this.loading = false;
        });
    },
    handleReset() {
      this.getPizzas();
    },
    handleCreate() {
      this.pizza = {};
      this.showPizza = true;
      this.showPizzaModalTitle = "Adicionar pizza";
    },
    handleSave(pizzaFormData) {
      this.loadingPizzaForm = true;
      if (this.pizza.id) {
        PizzaService.update(this.pizza.id, pizzaFormData)
          .then(() => {
            this.showPizza = false;
            this.$bvToast.toast(
              notifications.PizzaService.update.message.success,
              {
                ...notifications.config,
                title: notifications.defaults.title.success,
                variant: "success"
              }
            );
            this.getPizzas();
          })
          .catch(({ response }) => {
            if (response.status === 500) {
              this.$bvToast.toast(notifications.defaults.message.error, {
                ...notifications.config,
                title: notifications.defaults.title.error,
                variant: "danger"
              });
            } else if (response.status === 409) {
              this.$bvToast.toast(response.data.error.message, {
                ...notifications.config,
                title: notifications.defaults.title.error,
                variant: "danger"
              });
            }
          })
          .catch(() => {
            this.$bvToast.toast(notifications.defaults.message.error, {
              ...notifications.config,
              title: notifications.defaults.title.error,
              variant: "danger"
            });
          })
          .finally(() => {
            this.loadingPizzaForm = false;
          });
      } else {
        PizzaService.create(pizzaFormData)
          .then(() => {
            this.showPizza = false;
            this.$bvToast.toast(
              notifications.PizzaService.create.message.success,
              {
                ...notifications.config,
                title: notifications.defaults.title.success,
                variant: "success"
              }
            );
            this.getPizzas();
          })
          .catch(({ response }) => {
            if (response.status === 500) {
              this.$bvToast.toast(notifications.defaults.message.error, {
                ...notifications.config,
                title: notifications.defaults.title.error,
                variant: "danger"
              });
            } else if (response.status === 409) {
              this.$bvToast.toast(response.data.error.message, {
                ...notifications.config,
                title: notifications.defaults.title.error,
                variant: "danger"
              });
            }
          })
          .catch(() => {
            this.$bvToast.toast(notifications.defaults.message.error, {
              ...notifications.config,
              title: notifications.defaults.title.error,
              variant: "danger"
            });
          })
          .finally(() => {
            this.loadingPizzaForm = false;
          });
      }
    },
    handleDelete(pizza) {
      const message = `Pizza ${pizza.name}. Tem certeza?`;
      this.$bvModal
        .msgBoxConfirm(message, {
          title: "Excluir pizza",
          okTitle: "Sim",
          cancelTitle: "Não"
        })
        .then(response => {
          if (response) {
            PizzaService.delete(pizza.id)
              .then(() => {
                this.$bvToast.toast(
                  notifications.PizzaService.remove.message.success,
                  {
                    ...notifications.config,
                    title: notifications.defaults.title.success,
                    variant: "success"
                  }
                );
                this.getPizzas();
              })
              .catch(({ response }) => {
                if (response.status === 500) {
                  this.$bvToast.toast(notifications.defaults.message.error, {
                    ...notifications.config,
                    title: notifications.defaults.title.error,
                    variant: "danger"
                  });
                }
              })
              .catch(() => {
                this.$bvToast.toast(notifications.defaults.message.error, {
                  ...notifications.config,
                  title: notifications.defaults.title.error,
                  variant: "danger"
                });
              });
          }
        });
    }
  },
  mounted() {
    this.getPizzas();
  }
};
</script>

<style lang="scss"></style>
