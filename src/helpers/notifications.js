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
    defaults: {
      message: {
        error: "Já existe uma pizza com estes dados!"
      }
    },
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
    delete: {
      message: {
        success: "Pizza removida com sucesso!"
      }
    }
  }
};
