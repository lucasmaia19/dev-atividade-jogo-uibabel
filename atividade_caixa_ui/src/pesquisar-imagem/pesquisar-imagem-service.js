import axios from 'axios';

export default class PesquisarImagemService {

    getData(nome) {
        const url = `https://api.bing.microsoft.com/v7.0/images/search?q=${nome}`;
        const key = 'c91d0859ad614dd7bb9cfc2edf207e43';

        return axios.get(url, { 'headers': { 'Ocp-Apim-Subscription-Key': key } })
            .then((response => {
                console.log("response.data", response.data);
                return response.data
            }))
    }

    getData2(nome2) {
        const url = `https://api.bing.microsoft.com/v7.0/images/search?q=${nome2}`;
        const key = 'c91d0859ad614dd7bb9cfc2edf207e43';

        return axios.get(url, { 'headers': { 'Ocp-Apim-Subscription-Key': key } })
            .then((response => {
                console.log("response.data", response.data);
                return response.data
            }))
    }

    getData3(nome3) {
        const url = `https://api.bing.microsoft.com/v7.0/images/search?q=${nome3}`;
        const key = 'c91d0859ad614dd7bb9cfc2edf207e43';

        return axios.get(url, { 'headers': { 'Ocp-Apim-Subscription-Key': key } })
            .then((response => {
                console.log("response.data", response.data);
                return response.data
            }))
    }

    getData4(nome4) {
        const url = `https://api.bing.microsoft.com/v7.0/images/search?q=${nome4}`;
        const key = 'c91d0859ad614dd7bb9cfc2edf207e43';

        return axios.get(url, { 'headers': { 'Ocp-Apim-Subscription-Key': key } })
            .then((response => {
                console.log("response.data", response.data);
                return response.data
            }))
    }

    // GetAllAtivida() {
    //     const url = "http://localhost:8080/atividade_caixa"

    //     return axios.get(url)
    //         .then((response => {
    //             console.log("response.data", response.data);
    //             return response.data
    //         }))
    // } 

}
