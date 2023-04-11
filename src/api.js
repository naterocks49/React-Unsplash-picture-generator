import axios from 'axios';

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: "Client-ID AvoBsZgZKtr5629eFbvJe3EbcGvi2b2btkycCDI6ZMc"
        },
        params: {
            query: 'cars'
        },
    });
    console.log(response);

    return response;
};

export default searchImages;