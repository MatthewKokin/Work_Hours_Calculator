let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;
let totalEl = document.getElementById("total-el");
let totalHours = 0;

function increment() {
    count += 0.25;
    countEl.textContent = count;
}

function save() {
    if (count > 0) {
        totalHours += count;
        totalEl.textContent = "Total: " + totalHours + " h";

        let countStr = count + " + ";
        saveEl.textContent += countStr;
    }

    countEl.textContent = 0;
    count = 0;
}
