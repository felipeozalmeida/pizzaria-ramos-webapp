<template>
  <div class="PizzaItem">
    <b-card class="border-0" no-body>
      <b-card-img-lazy
        class="PizzaItem__img"
        :src="pizza.image_file"
        :alt="pizza.image_alt"
      />
      <b-card-body overlay body-text-variant="white">
        <b-card-title class="PizzaItem__title" title-tag="h3">{{
          pizza.name
        }}</b-card-title>
        <b-card-sub-title
          class="PizzaItem__subtitle"
          sub-title-tag="h4"
          sub-title-text-variant="white"
        >
          R$ {{ pizza.price }}
        </b-card-sub-title>
        <div class="PizzaItem__toolbar">
          <b-button
            class="PizzaItem__button"
            variant="outline-light"
            size="sm"
            @click="handleView(pizza)"
          >
            <font-awesome-icon :icon="['fas', 'pen']" />
          </b-button>
          <b-button
            class="PizzaItem__button"
            variant="outline-light"
            size="sm"
            @click="handleDelete(pizza)"
          >
            <font-awesome-icon :icon="['fas', 'trash']" />
          </b-button>
        </div>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "PizzaItem",
  props: {
    pizza: Object
  },
  methods: {
    handleView(pizza) {
      this.$emit("view", pizza);
    },
    handleDelete(pizza) {
      this.$emit("delete", pizza);
    }
  }
};
</script>

<style lang="scss" scoped>
.PizzaItem {
  text-shadow: 0.0625rem 0.0625rem 0.625rem #000;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);

  &__img {
    filter: brightness(0.75);
  }

  &__title {
    font-size: 1.25rem;

    @media (min-width: 576px) {
      font-size: 1.5rem;
    }
  }

  &__subtitle {
    font-size: 1rem;
  }

  &__toolbar {
    position: absolute;
    right: 1.25rem;
    bottom: 1.25rem;
    display: block;
    margin-left: -0.125rem;
    margin-right: -0.125rem;

    @media (min-width: 992px) {
      opacity: 0;
      transition: opacity 0.15s ease-in-out;
    }
  }

  &__button {
    margin-left: 0.125rem;
    margin-right: 0.125rem;
  }

  @media (min-width: 992px) {
    transition: box-shadow 0.15s ease-in-out, transform 0.15s ease-in-out;

    &:hover {
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
      transform: scale(1.025);
    }

    &:hover &__toolbar {
      opacity: 1;
    }
  }
}
</style>
