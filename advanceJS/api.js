const url = 'https://official-joke-api.appspot.com/random_joke';
const getfact = document.querySelector('.getfact');
const btn = document.querySelector('.btn');
const getJoke = async () => {
    console.log("fetching data");
    let promise=await fetch(url);
    console.log(promise);
    let data = await promise.json();
    console.log(data.setup+" "+data.punchline);
    getfact.innerHTML = data.setup+" "+data.punchline;
};
addEventListener('click',getJoke);