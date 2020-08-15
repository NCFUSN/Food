import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErroMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
        const response = await yelp.get('/search', { params: {
            limit: 50,
            term: searchTerm,
            location: 'San Jose'
        }
        });
        setResults(response.data.businesses);
    } catch (e) {
        setErroMessage('Something went wrong');
    }
    };

    // call searchApi only when component is first rendered
    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];
};
