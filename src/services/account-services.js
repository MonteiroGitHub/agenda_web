import axios from "axios";


//função para fazer uma requisição para o endpoint de login
export const postLogin = (data) => {
    // utilizando o AXIOS para fazer a requisição para a API
    return axios.post(
        'Account/login',/*endereço da API */
        data /*dados submetidos para a API(request body)*/
        ).then(
            //capturar e retornar a resposta da API
            response => {
                return response.data;
            }
        )
}