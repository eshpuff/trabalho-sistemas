function mascararCPF() {
    let cpf = document.getElementById("cpf");
    let valor = cpf.value;
    let numeros = valor.replace(/\D/g, "");

    if (/[^0-9]/.test(valor)) {
        alert("Apenas números são permitidos no CPF.");
        cpf.value = valor.replace(/\D/g, "");
        return;
    }

    valor = numeros.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    cpf.value = valor.slice(0, 14);
}


function mascararCartao() {
    var numeroCartao = document.getElementById("cartaoCredito").value;
    var numeros = numeroCartao.replace(/\D/g, "");
    var cartaoFormatado = numeros.replace(/(\d{4})/g, "$1 ");

    cartaoFormatado = cartaoFormatado.trim();
    cartaoFormatado = cartaoFormatado.slice(0, 19);

    document.getElementById("cartaoCredito").value = cartaoFormatado;
}

function mascararCVV() {
    var cvv = document.getElementById("cvv");
    var valor = cvv.value;
    var numeros = valor.replace(/\D/g, '');

    numeros = numeros.slice(0, 3);
    cvv.value = numeros;
}

function mascararValidade() {
    var data = document.getElementById("validadeCartao").value;
    var numeros = data.replace(/\D/g, '');
    var dataFormatada = numeros.replace(/(\d{2})(\d{2})/, '$1/$2');

    dataFormatada = dataFormatada.slice(0, 5)
    document.getElementById("validadeCartao").value = dataFormatada;
}


function mostrarPagamento() {
    var DIVpagamento = document.getElementById("pagamento");
    DIVpagamento.style.display = "block";
}

function produtoSelecionado(IDproduto) {
    var DIVpagamento = document.getElementById("pagamento");
    DIVpagamento.style.display = "none";

    if (IDproduto === "omelete" || IDproduto === "salmao" || IDproduto === "bolo") {
        mostrarPagamento();
    } else {
        DIVpagamento.style.display = "none";
    }
}

function mostrarDivPagamento(divID) {
    var DIVspagamento = document.getElementsByClassName("pagamentoDiv");
    for (var i = 0; i < DIVspagamento.length; i++) {
        DIVspagamento[i].style.display = "none";
    }
    var divPagamento = document.getElementById(divID);
    divPagamento.style.display = "block";
}

// function mostrarRecibo() {
//     var DIVrecibo = document.getElementById("recibo");
//     var nomePix = document.getElementById("nomePix");
//     var nomeCartao = document.getElementById("nomeCartao");
//     var cpf = document.getElementById("cpf");

//     if (nomePix !== "" || nomeCartao !== "" && cpf !== "") {
//         DIVrecibo.style.display = "block";
//         console.log("OI")
//     } else {
//         DIVrecibo.style.display = "none";
//     }}