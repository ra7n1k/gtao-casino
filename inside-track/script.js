const form = document.querySelector("body form");
const entries = form.querySelectorAll("input")

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let odds = [];
    let total = 0;

    entries.forEach((input, index) => {
        odds.push(1 / (parseFloat(input.value) + 1))
        total += odds[index];
    });

    entries.forEach((input, index) => {
        odds[index] = Math.round(odds[index] / total * 10000) / 100;
        input.parentNode.querySelector("output").textContent = "Odds: " + odds[index] + "%"
    });
});