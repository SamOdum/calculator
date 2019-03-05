let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let btn = document.getElementById("btn");

btn.addEventListener("click", toggleBoxes);

function toggleBoxes() { 
    if (box1.classList == "box") {
        box1.classList = "box visible";
        box2.classList = "box";
    } else {
        box1.classList = "box";
        box2.classList = "box visible";
    }
}

box1.addEventListener("click", function(){
    console.log(this.id);
});
box2.addEventListener("click", function(){
    console.log(this.id);
});

// box1.onclick = console.log('clicked!');
// box2.addEventListener("click", showId(this.id));

// function showId(clicked_id) {
//     console.log("You clicked " + clicked_id + ".");
// }