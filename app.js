const API_KEY = 'OBc8eceFvHtg0DXmT3787PP1TxcJrDj4';
const BASE_URL = 'https://api.giphy.com/v1/gifs';

const fetchTrendingGifs = () => {
    const url = "https://api.giphy.com/v1/gifs/trending?api_key=OBc8eceFvHtg0DXmT3787PP1TxcJrDj4&limit=25&rating=g";
    fetch(url, { method: 'GET' })
        .then((response) => {
           return response.json();
        })
        .then((data) => {
            console.log(data.data);
            renderImages(data.data);
        })
        .catch((error) => {
            console.log(error);
        })
}

const fetchTrendingGifsAsync = async () => {
    const params = new URLSearchParams({
        api_key: API_KEY,
        limit: 100,
        rating: 'g'
    })
    try{
        const url = `${BASE_URL}/trending?${params}`;
        const response = await fetch(url, { method: 'GET',  });
        const data = await response.json();
        renderImages(data.data);
    } catch(error){
        console.log(error);
    }
}

const renderImages = (dataArray) => {
    const mainCtr = document.getElementById('image-container');
    let myHtml = "";

    dataArray.forEach((item) =>  {
        const imageUrl = item.images.original.url;
        const imageTag = `<img src="${imageUrl}" alt="" class="my-image" />`;
        myHtml += imageTag;
    });

    mainCtr.innerHTML = myHtml;
  
}

fetchTrendingGifsAsync();
// fetchTrendingGifs();
