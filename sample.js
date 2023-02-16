let count = 0;

function increment() {
    if (count > 0) document.getElementById("text").disabled = false;
    count++;
    document.getElementById("text").innerHTML = "Score: " + count;
}

function decrement() {
    if (count == 0) document.getElementById("text").disabled = true;
    count--;
    document.getElementById("text").innerHTML = "Score: " + count;
}

document.getElementById("increment").addEventListener("click", increment);
document.getElementById("decrement").addEventListener("click", decrement);

