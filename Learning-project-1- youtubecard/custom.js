const darkMood = document.getElementById("dark");

let mainMood = document.getElementById("main");

darkMood.addEventListener("click", () => {
    mainMood.classList.toggle("dark");
})