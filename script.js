function touchRock() {
    var userName = prompt("Qual o seu nome?", "Entre com seu nome aqui.");

    if (userName) {
        alert("Prazer em conhecer você, " + userName + ".");
        document.getElementById("rockImg").src = "rock_happy.png";
    }
}
