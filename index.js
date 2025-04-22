const changeContent = document.querySelector(".changecontent");
const words = ["London", "Paris", "New York", "Tokyo", "India"];
let index = 0;

function updateWord() {
  changeContent.textContent = words[index];
  index = (index + 1) % words.length;
}

setInterval(updateWord, 2000);
