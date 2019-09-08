<template>
  <div class="PizzaForm">
    <b-form novalidate :validated="wasValidated" @submit.prevent="handleSubmit">
      <b-form-group
        class="d-flex flex-column align-items-center"
        id="pizzaImageInputGroup"
        label-for="pizzaImageInput"
      >
        <template slot="label">
          Capa
          <font-awesome-icon
            class="text-success"
            :icon="['fas', 'check']"
            v-show="wasValidated && isPizzaImageValid"
          />
          <font-awesome-icon
            class="text-danger"
            :icon="['fas', 'times']"
            v-show="wasValidated && !isPizzaImageValid"
          />
        </template>
        <img-inputer
          no-hover-effect
          class="border mb-3"
          placeholder="Adicionar foto da pizza (máx. 2 MB)"
          bottom-text="Arraste e solte aqui ou clique para alterar (máx. 2 MB)"
          exceed-size-text="Tamanho do arquivo deve ser menor que "
          id="pizzaImageInput"
          :max-size="2048"
          :img-src="formData.imageUrl"
          v-model="formData.imageFile"
        />
      </b-form-group>
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
    pizza: Object
  },
  data() {
    return {
      formData: {
        id: this.pizza.id || null,
        name: this.pizza.name || "",
        price: this.pizza.price || 0.0,
        ingredients: this.pizza.ingredients || "",
        imageUrl:
          this.pizza.image && this.pizza.image.src
            ? this.pizza.image.src
            : null,
        imageFile: null
      },
      wasValidated: false
    };
  },
  computed: {
    isPizzaImageValid() {
      return this.formData.imageFile || this.formData.imageUrl ? true : false;
    }
  },
  methods: {
    handleSubmit(event) {
      this.wasValidated = true;
      if (event.target.checkValidity() && this.isPizzaImageValid) {
        this.$emit("submit", this.formData);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
