export default {
  config: {
    solid: true,
    toaster: "b-toaster-bottom-center"
  },
  defaults: {
    message: {
      error: "Serviço indisponível. Por favor, tente novamente mais tarde!"
    },
    title: {
      error: "Erro!",
      success: "Sucesso!"
    }
  },
  PizzaService: {
    create: {
      message: {
        success: "Pizza adicionada com sucesso!"
      }
    },
    update: {
      message: {
        success: "Pizza atualizada com sucesso!"
      }
    },
    remove: {
      message: {
        success: "Pizza removida com sucesso!"
      }
    }
  }
};
