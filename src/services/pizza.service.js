import Axios from "axios";

function get() {
  return Axios.get("http://www.mocky.io/v2/5d6c26b43300006200346d38");
}

function create() {
  return Axios.post("http://www.mocky.io/v2/5d751d0f310000d82b95059a"); // 201
  // return Axios.post("http://www.mocky.io/v2/5d75226d310000a61e9505a1"); // 409
  // return Axios.post("http://www.mocky.io/v2/5d7522bf310000b4229505a3"); // 500
}

function update() {
  return Axios.put("http://www.mocky.io/v2/5d7525043100007e2f9505a7"); // 204
  // return Axios.put("http://www.mocky.io/v2/5d75226d310000a61e9505a1"); // 409
  // return Axios.put("http://www.mocky.io/v2/5d7522bf310000b4229505a3"); // 500
}

function remove() {
  return Axios.delete("http://www.mocky.io/v2/5d7525043100007e2f9505a7"); // 204
  // return Axios.put("http://www.mocky.io/v2/5d7522bf310000b4229505a3"); // 500
}

export default {
  get,
  create,
  update,
  remove
};
