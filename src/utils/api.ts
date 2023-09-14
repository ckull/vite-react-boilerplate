import axios from "axios";

const main = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL || "http://localhost:3001",
});

const server = {
  main,
};

export default server;
