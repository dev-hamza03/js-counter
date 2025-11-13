let inp = document.querySelector("#show");
let incrementBtn = document.querySelector("#inct");
let decrementBtn = document.querySelector("#dect");
let resetBtn = document.querySelector("#reset");

let a = 0;

incrementBtn.addEventListener("click", () => {
    incrementBtn.classList.add("move");
    setTimeout(() => incrementBtn.classList.remove("move"), 300);

    a++;
    inp.innerHTML = a;
});

decrementBtn.addEventListener("click", () => {
    decrementBtn.classList.add("move");
    setTimeout(() => decrementBtn.classList.remove("move"), 300);

    a--;

    if (a < 0) {
        alert("Can't go in negative")
        a = 0;
    }

    inp.innerHTML = a;
});

resetBtn.addEventListener("click", () => {

    resetBtn.classList.add("move");
    setTimeout(() => resetBtn.classList.remove("move"), 300);

    if (a === 0) {
        alert("Please increment");
    }

    inp.innerHTML = 0;
    a = 0;
});