import Vue from "vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCircleNotch,
  faPen,
  faTrash,
  faPlus
} from "@fortawesome/free-solid-svg-icons";

library.add(faCircleNotch, faPen, faTrash, faPlus);

Vue.component("font-awesome-icon", FontAwesomeIcon);
