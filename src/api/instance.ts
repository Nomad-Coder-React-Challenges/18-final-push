import axios from "axios";

const instance = axios.create({
  baseURL: "https://movies-api.nomadcoders.workers.dev",
});

export default instance;
