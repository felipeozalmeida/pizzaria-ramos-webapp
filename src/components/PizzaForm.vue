<template>
  <div class="PizzaForm">
    <b-form novalidate :validated="wasValidated" @submit.prevent="handleSubmit">
      <b-form-row>
        <b-col cols="9">
          <b-form-group
            id="pizzaNameInputGroup"
            label="Nome:"
            label-for="pizzaNameInput"
          >
            <b-form-input
              required
              placeholder="Ex.: Nordestina, Caiçara, Da Casa..."
              id="pizzaNameInput"
              v-model="formData.name"
            />
            <b-form-invalid-feedback>Obrigatório</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="pizzaPriceInputGroup"
            label="Preço:"
            label-for="pizzaPriceInput"
          >
            <b-form-input
              required
              type="number"
              step="0.01"
              placeholder="Ex.: 20.00"
              id="pizzaPriceInput"
              v-model="formData.price"
            />
            <b-form-invalid-feedback>Obrigatório</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-group
        id="pizzaIngredientsInputGroup"
        label="Ingredientes"
        label-for="pizzaIngredientsInput"
      >
        <b-textarea
          required
          rows="5"
          placeholder="Ex.: queijo muçarela, manjericão, molho de tomate..."
          id="pizzaIngredientsInput"
          v-model="formData.ingredients"
        />
        <b-form-invalid-feedback>Obrigatório</b-form-invalid-feedback>
      </b-form-group>
      <div class="d-flex justify-content-end">
        <b-button type="submit" variant="primary">Salvar</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "PizzaForm",
  props: {
    pizza: Object,
    wasValidated: Boolean
  },
  data() {
    return {
      formData: {
        id: this.pizza.id || null,
        name: this.pizza.name || "",
        price: this.pizza.price || 0.0,
        ingredients: this.pizza.ingredients || "",
        image: this.pizza.image.src || null
      }
    };
  },
  methods: {
    handleSubmit(event) {
      this.$emit("edit", event, this.formData);
    }
  }
};
</script>

<style lang="scss" scoped></style>
