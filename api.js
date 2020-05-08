const URL = "https://geek-jokes.sameerkumar.website/api?format=json";


axios
    .get(URL)
    .then((r) => showJokes(r.data))
    .catch((err) => console.error(err))


function showJokes(jokes) {
    console.log(typeof jokes);
    const display = document.getElementById("display");
    const jokess = Object.values(jokes);
   
    jokess.forEach((elementQuiBoucle) => {

            display.innerHTML += `<li>${elementQuiBoucle}</li>`
        })
    };

    function selectGif(){
    // fonction pour chosir aleatoirement un gif 
    }
    function randomJoke(){};
    


