import axios from 'axios';


const fetchApiData = async (uri) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3${uri}`, {
            params: {
                language: 'en-US',
                page: 1
            },
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
            }
        });
        return response
    } catch (error) {
        console.log(error);
    }
}

export default fetchApiData