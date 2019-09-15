<template>
  <b-row class="mb-3">
    <b-col
      class="d-flex flex-column flex-lg-row align-items-stretch align-items-lg-center"
    >
      <div class="d-flex flex-fill">
        <b-form-group
          class="flex-fill mb-2 mb-lg-0 mr-2"
          id="pizzaSearchFormGroup"
          label="Pesquisar sabor:"
          label-for="pizzaSearchInput"
          label-sr-only
        >
          <b-form-input
            id="pizzaSearchInput"
            placeholder="Ex.: calabresa, escarola..."
            v-model="pizzaSearchText"
          />
        </b-form-group>
        <b-button
          class="mb-2 mb-lg-0 mr-2 mr-lg-2"
          variant="outline-secondary"
          @click="handleReset"
          :disabled="disabled"
        >
          <font-awesome-icon :icon="['fas', 'backspace']" />
          <span class="d-none d-lg-inline-block">&nbsp;Limpar</span>
        </b-button>
        <b-button
          class="mb-2 mb-lg-0 mr-lg-2"
          variant="outline-primary"
          @click="handleSearch"
          :disabled="disabled"
        >
          <font-awesome-icon :icon="['fas', 'search']" />
          <span class="d-none d-lg-inline-block">&nbsp;Pesquisar</span>
        </b-button>
      </div>
      <b-button
        class="mb-lg-0"
        variant="outline-success"
        @click="handleCreate"
        :disabled="disabled"
      >
        <font-awesome-icon :icon="['fas', 'plus']" /> Adicionar
      </b-button>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "PizzaToolbar",
  props: {
    disabled: Boolean
  },
  data() {
    return {
      pizzaSearchText: ""
    };
  },
  methods: {
    handleSearch() {
      this.$emit("search", this.pizzaSearchText);
    },
    handleReset() {
      this.pizzaSearchText = "";
      this.$emit("reset", this.pizzaSearchText);
    },
    handleCreate() {
      this.$emit("create");
    }
  }
};
</script>
