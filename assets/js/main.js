// selecionar os botões
const btns = document.querySelectorAll(".btn");
// selecionar tela de resultado
const screen = document.getElementById("result");

let expre = "";

function writeScreen (value) {
    screen.innerText += value;

    expre += value;

    return 0;
}

function format() {
    screen.innerText = "";
    expre = "";
    return 0;
}

function result (expression) {
    const cont = eval(expression);

    format();
    writeScreen(cont);
    return 0;
}




btns.forEach(function (btn, ind) {

    btn.addEventListener("click", (e) => {

        switch (e.target.value) {
            case "C": 
                format();
                break;
            case "=":
                result(expre);
                break;
            default:
                writeScreen(e.target.value);
        }


    })

});


