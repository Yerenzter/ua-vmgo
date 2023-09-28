let btn = document.querySelectorAll(".btn");
let pages = [
    "index.html",
    "vision.html",
    "mission.html",
    "goals.html",
    "objectives.html"
]

for(let r=0; r < btn.length; r++) {
    btn[r].addEventListener("click", () => {
        window.location.href = pages[r];
    });
}