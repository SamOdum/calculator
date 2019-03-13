function readContent(x) {
    return document.querySelector(x).textContent;
}

function writeContent(content) {
    let displayContent = document.querySelector(".p-display").textContent;
    displayContent = contentt;
    return displayContent;
}

function Button(id, value, content) {
    this.id = document.getElementById(id);
    this.value = value;
    sciOperator = false;
    baseOperator = false;
    baseNumber = false;
    write = writeContent(this.content);
}

const zero = new Button("0", 0);