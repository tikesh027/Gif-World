

async function mySearchFunction (event) {
    var x = event.target.value;
    console.log(x);
    
    try{
        const url = `https://api.giphy.com/v1/gifs/search?api_key=OBc8eceFvHtg0DXmT3787PP1TxcJrDj4&q=${x}&limit=25&offset=0&rating=g&lang=en`;
        const response = await fetch(url, { mrthod: 'get' });
        const data = await response.json();
        console.log(data.data);
        getSearchedImage(data.data);
    }catch(error) {
        console.log(error);
    }
};

const getSearchedImage = (searchArray) => {
    const searchedImg = document.getElementById('image-container');
    let html = "";

    searchArray.forEach((items) => {
        const imageUrl = items.images.original.url;
        const imgTag = `<img src="${imageUrl}" class="searchStyle">`;
        html += imgTag;
    });

    searchedImg.innerHTML = html;

}