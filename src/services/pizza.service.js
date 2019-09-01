import Axios from "axios";

function get() {
  return Axios.get("http://www.mocky.io/v2/5d6aecda3100000e00d20785");
}

export default {
  get
};
