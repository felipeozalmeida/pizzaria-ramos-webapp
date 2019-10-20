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
          :img-src="pizza.image_file"
          @onChange="handleImageFileChange"
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
              maxlength="60"
              placeholder="Ex.: Nordestina, Caiçara, Da Casa..."
              id="pizzaNameInput"
              :value="pizza.name"
              @change="handleNameChange"
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
              :value="pizza.price"
              @change="handlePriceChange"
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
          :value="pizza.ingredients"
          @change="handleIngredientsChange"
        />
        <b-form-invalid-feedback>Obrigatório</b-form-invalid-feedback>
      </b-form-group>
      <div class="d-flex justify-content-end">
        <b-button type="submit" variant="primary" :disabled="loading">
          <template v-if="loading">
            <div class="d-flex align-items-center">
              <b-spinner small class="mr-2" /> Carregando...
            </div>
          </template>
          <template v-else>
            Salvar
          </template>
        </b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "PizzaForm",
  props: {
    loading: Boolean,
    pizza: Object
  },
  data() {
    return {
      formData: {},
      wasValidated: false
    };
  },
  computed: {
    isPizzaImageValid() {
      return this.formData.image_file || this.pizza.image_file ? true : false;
    }
  },
  methods: {
    handleImageFileChange(file) {
      this.formData = { ...this.formData, image_file: file };
    },
    handleImageTextChange(value) {
      this.formData = { ...this.formData, image_text: value };
    },
    handleNameChange(value) {
      this.formData = { ...this.formData, name: value };
    },
    handlePriceChange(value) {
      this.formData = { ...this.formData, price: value };
    },
    handleIngredientsChange(value) {
      this.formData = { ...this.formData, ingredients: value };
    },
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
