function mascaraCPF() {
    let cpf = document.getElementById("cpf");
    let valor = cpf.value;

    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    cpf.value = valor.slice(0, 14);
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
