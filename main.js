//Java Code
    document.getElementById("btn").addEventListener("click", btnClicked);

//Input
    function btnClicked() {
    let client1 = +document.getElementById("c1").value;
    let structured1 = +document.getElementById("s1").value;
    let structured2 = +document.getElementById("s2").value;
    let client2 = +document.getElementById("c2").value;
    let project = +document.getElementById("pj").value;

    //Process
    let total = (client1 + structured1 + structured2 + client2 + project)/5;

    //Output
    document.getElementById("output").innerHTML = total
}

