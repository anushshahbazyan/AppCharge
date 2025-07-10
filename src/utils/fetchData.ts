import { cache } from 'react';
import { BASE_API } from '../constants/api';

const fetchData = cache(async (url_route = '') => {
    const route = url_route ?
        BASE_API.slice(0, BASE_API.lastIndexOf('?')) + '/' + url_route :
        BASE_API;

    try {
        const response = await fetch(route);

        if (response.status !== 200) {
            throw new Error(response.statusText);
        }

        const data = await response.json();
        return data;
    } catch(e) {
        console.error(e);
        return '';
    }
});

export default fetchData;