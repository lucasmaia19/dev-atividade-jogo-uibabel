import axios from 'axios';

export default class DataService {

    getData(nome) {

        // return axios.get('data/data.json').then(res => res.data.data);

        // axios.post('/login', {
        //     firstName: 'Finn',
        //     lastName: 'Williams'
        //   })
        //   .then((response) => {
        //     console.log(response);
        //   }, (error) => {
        //     console.log(error);
        //   });

        // const url = 'https://api.bing.microsoft.com/v7.0/images/search?q=cachorro';
        const url = `https://api.bing.microsoft.com/v7.0/images/search?q=${nome}`;
        const key = 'c91d0859ad614dd7bb9cfc2edf207e43';

        return axios.get(url, { 'headers': { 'Ocp-Apim-Subscription-Key': key } })
            .then((response => {
                //console.log(response.data);
                return response.data
            }))
    }

}
