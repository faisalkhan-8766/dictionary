const inputElem = document.getElementById("inputArea");

const textareaElem = document.getElementById("infrarea");

const meaningcontainerElem = document.getElementById("meaning-container");

const word_title = document.getElementById("title");

const meaningElem = document.getElementById("meaning");

const audioElem = document.getElementById("audio");

async function fetchAPI(word){
try {

    textareaElem.style.display = "block";
        textareaElem.innerHTML = `Searcing the meaning of ${word}`
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result = await fetch(url).then((res) => res.json());
        console.log(result);


        if(result.title){
            meaningcontainerElem.style.display = "block";
            word_title.innerText = word;
            meaningElem.innerText = "N/A";
            audioElem.style.display = "none";
        }
        
        else{
        textareaElem.style.display = "none";
        meaningcontainerElem.style.display = "block";
        audioElem.style.display = "inline-flex";
        word_title.innerText = result[0].word;
        meaningElem.innerText = result[0].meanings[0].definitions[0].definition; 
        audioElem.src = result[0].phonetics[0].audio;

    }
}
    
 catch (error) {
    alert("Please check your internet connection")
}
}

inputElem.addEventListener("keyup" , (event)=>{
    if(event.target.value && event.key === "Enter"){
        fetchAPI(event.target.value)
    }
})