function counter() {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let x = document.getElementById("x")
    let result
    if (a>b) {
       result = a-b;
       x.value = result;
    } else {
        result = b-a;
        x.value = result;
    }
}