const apiUrl = 'http://localhost:1337';
const endpoint = '/api/contacts?populate=*';
// Fetch data from the API
const fetchDataFromAPI = async () => {
    try {
        const response = await axios.get(`${apiUrl}${endpoint}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data from Strapi');
    }
};

// Display data fetched from the API
const displayFetchedData = async () => {
    try {
        const data = await fetchDataFromAPI();
        const titel = document.getElementById('beschrijving');
        const motto = document.getElementById('motto');
        const beschrijving = document.getElementById('beschrijving');

        titel.innerHTML = data.data[0].attributes.Titel;
        motto.innerHTML = data.data[0].attributes.Motto;
        beschrijving.innerHTML = data.data[0].attributes.Beschrijving;

    } catch (error) {
        console.error('Error displaying data: ', error);
    }
};


displayFetchedData();
