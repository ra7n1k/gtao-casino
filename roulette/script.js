const form = document.querySelector("body form");
const add = form.querySelector('button[name="add"]');
const output = form.querySelector("output")

addTarget();

add.addEventListener("click", function (event) {
    event.preventDefault()

    addTarget();
});

function addTarget() {
    if ("content" in document.createElement("template")) {
        const template = document.querySelector("#option");
        const clone = template.content.cloneNode(true);

        form.querySelector("div").appendChild(clone);
    }
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let entries = form.querySelectorAll("div>div");
    let totalBet = 0;
    let totalReturn = 0;

    entries.forEach((input, index) => {
        let target = input.querySelector("select").value;
        let bet = parseFloat(input.querySelector("input").value);
        totalBet += bet;
        totalReturn += returnOdds(target)[0] * (returnOdds(target)[1] * bet + bet);
        output.textContent = "Return: $" + Math.round(totalReturn * 100) / 100;
    });
});

function returnOdds(target) {
    const odds = {
        "1-18": () => [18 / 38, 1],
        "19-36": () => [18 / 38, 1],
        "even": () => [18 / 38, 1],
        "odd": () => [18 / 38, 1],
        "red": () => [18 / 38, 1],
        "black": () => [18 / 38, 1],
        "1st-12": () => [12 / 38, 2],
        "2nd-12": () => [12 / 38, 2],
        "3rd-12": () => [12 / 38, 2],
        "1st-2-to-1": () => [12 / 38, 2],
        "2nd-2-to-1": () => [12 / 38, 2],
        "3rd-2-to-1": () => [12 / 38, 2],
        "0": () => [1 / 38, 35],
        "00": () => [1 / 38, 35],
        "1": () => [1 / 38, 35],
        "2": () => [1 / 38, 35],
        "3": () => [1 / 38, 35],
        "4": () => [1 / 38, 35],
        "5": () => [1 / 38, 35],
        "6": () => [1 / 38, 35],
        "7": () => [1 / 38, 35],
        "8": () => [1 / 38, 35],
        "9": () => [1 / 38, 35],
        "10": () => [1 / 38, 35],
        "11": () => [1 / 38, 35],
        "12": () => [1 / 38, 35],
        "13": () => [1 / 38, 35],
        "14": () => [1 / 38, 35],
        "15": () => [1 / 38, 35],
        "16": () => [1 / 38, 35],
        "17": () => [1 / 38, 35],
        "18": () => [1 / 38, 35],
        "19": () => [1 / 38, 35],
        "20": () => [1 / 38, 35],
        "21": () => [1 / 38, 35],
        "22": () => [1 / 38, 35],
        "23": () => [1 / 38, 35],
        "24": () => [1 / 38, 35],
        "25": () => [1 / 38, 35],
        "26": () => [1 / 38, 35],
        "27": () => [1 / 38, 35],
        "28": () => [1 / 38, 35],
        "29": () => [1 / 38, 35],
        "30": () => [1 / 38, 35],
        "31": () => [1 / 38, 35],
        "32": () => [1 / 38, 35],
        "33": () => [1 / 38, 35],
        "34": () => [1 / 38, 35],
        "35": () => [1 / 38, 35],
        "36": () => [1 / 38, 35]
    }
    if (odds[target]) {
        return odds[target]();
    }
}