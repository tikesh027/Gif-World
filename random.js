
const fetchRandomGif = () => {
    const url = "https://api.giphy.com/v1/gifs/random?api_key=OBc8eceFvHtg0DXmT3787PP1TxcJrDj4&tag=&rating=g";
    const myButton = document.getElementById("getRandomButton");
    myButton.disabled = true;
    fetch(url, { method: 'get'})
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            getRandomImg(data.data);
            myButton.disabled = false;
        })
        .catch((error) => {
            console.log(error);
            myButton.disabled = false;
        })
}


const getRandomImg = (dataRnd) =>{
    const RndImg = document.getElementById('RandomImg');
    const imgUrl = dataRnd.images.original.url;
    const imgCaption = dataRnd.title;
    const imgTitle = document.getElementById("imgCaption");
    imgTitle.innerText = imgCaption;
    RndImg.src = imgUrl;
    RndImg.alt = "test";
    //const imgTag = 
}