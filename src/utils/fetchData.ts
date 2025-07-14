import { cache } from 'react';
import { BASE_API } from '../constants/api';
import notFound from '../app/products/[id]/not-found';

const fetchData = cache(async (url_route = '') => {
    const route = url_route ?
        BASE_API.slice(0, BASE_API.lastIndexOf('?')) + '/' + url_route :
        BASE_API;

    try {
        const response = await fetch(route, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
                'Cross-Origin-Opener-Policy': 'same-origin'
            }
        });

        if (response.status !== 200) {
            throw new Error(response.statusText);
        }

        const data = await response.json();
        return data;
    } catch(e) {
        // console.error(e);
        notFound();
        return '';
    }
});

export default fetchData;