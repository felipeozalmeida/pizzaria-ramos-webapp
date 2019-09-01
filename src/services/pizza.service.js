import Axios from "axios";

function get() {
  return Axios.get("http://www.mocky.io/v2/5d6c26b43300006200346d38");
}

export default {
  get
};
