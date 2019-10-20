import ApiService from "./api.service";
import convertToFormData from "@/helpers/formData";

const PizzaService = {
  list() {
    return ApiService.get("/pizzas/");
  },
  create(pizza) {
    return ApiService.post("/pizzas/", convertToFormData(pizza));
  },
  update(id, pizza) {
    return ApiService.patch(`/pizzas/${id}/`, convertToFormData(pizza));
  },
  delete(id) {
    return ApiService.delete(`/pizzas/${id}/`);
  }
};

export default PizzaService;
