const container = document.querySelector(".card-container");
const up = document.querySelector("#up");
const down = document.querySelector("#down");

let y = 0;
up.addEventListener("click", (e) => {
    if(y > "-1000") {
        y -= 200
        container.style.top = y + "px"
    }
})

down.addEventListener("click", (e) => {
    if(y < 0) {
        y += 200
        container.style.top = y + "px"
    }
})