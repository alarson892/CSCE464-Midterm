const joke = async () => {
    const response = await fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,racist,sexist,explicit');
    const responseJson = await response.json();
    var jokeString;
    if(responseJson.type=='single'){
        jokeString = responseJson.joke;
    }else{
        jokeString = responseJson.setup + "\n \n"+ responseJson.delivery;
    }
    alert(jokeString);
  }


