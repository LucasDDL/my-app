import axios from "axios";

//https://viacep.com.br/ws/  API - base correios     05798150/json/ router.
const api = axios.create({
   baseURL:"https://viacep.com.br/ws/"

});

export default api;