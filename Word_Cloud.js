let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let wordsContainerEl = document.getElementById("wordsContainer");
let errorMsgEl = document.getElementById("errorMsg");
let userInputEl = document.getElementById("userInput");
let addBtnEl = document.getElementById("addBtn");


for (let i = 0; i < wordCloud.length; i++) {

    let spanEl = document.createElement("span");
    let fontsizeEl = Math.floor(Math.random() * 50);
    //spanEl.classList.add("fontsize");
    spanEl.style.fontSize = fontsizeEl + "px";
    spanEl.textContent = wordCloud[i];

    wordsContainerEl.appendChild(spanEl);
}
addBtnEl.onclick = function() {
    if (userInputEl.value === "") {
        errorMsgEl.textContent = "Please Enter a word";
    } else {
        errorMsgEl.textContent = "";


        let fontsizeEl = Math.floor(Math.random() * 50);

        let spanEl = document.createElement("span");

        spanEl.style.fontSize = fontsizeEl + "px";
        spanEl.textContent = userInputEl.value;

        wordsContainerEl.appendChild(spanEl);

    }

}