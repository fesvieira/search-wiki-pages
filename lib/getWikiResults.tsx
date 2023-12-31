import axios from "axios"

export default async function getWikiResults(searchTerm: string) {

    // From wikipedia API
    const searchParams = new URLSearchParams({
        action: 'query',
        generator: 'search',
        gsrsearch: searchTerm,
        gsrlimit: '20',
        prop: 'pageimages|extracts',
        exchars: '100',
        exintro: 'true',
        explaintext: 'true',
        exlimit: 'max',
        format: 'json',
        origin: '*',
    })

    const response = await axios.get('https://en.wikipedia.org/w/api.php?' + searchParams);
    return response.data
};
