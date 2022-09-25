const axios = require("axios");

const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/hotels/list',
    params: {
        location_id: '293861',
        adults: '1',
        rooms: '1',
        nights: '2',
        checkin: '2022-09-25',
        offset: '0',
        currency: 'USD',
        order: 'asc',
        limit: '30',
        sort: 'recommended',
        lang: 'en_US'
    },
    headers: {
        'X-RapidAPI-Key': '41ceb7b31cmsh5651d830cf91333p1c49b5jsn43c158f93845',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});