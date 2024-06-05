import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/customsearch/v1';


const params = {
    key: 'AIzaSyAEE-WBkqAB4pq_ntxLP4akrhvpH-oHN4k',
    cx: 'e2ded3badbdad41a1'
}
// AIzaSyAEE-WBkqAB4pq_ntxLP4akrhvpH-oHN4k

export const fetchDataFromApi = async (payload) => {
    const {data} = await axios.get(BASE_URL,{
        params:{...params,...payload}
    });
    return data;
}