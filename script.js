function mascararCPF() {
    let cpf = document.getElementById("cpf");
    let valor = cpf.value;
    let numeros = valor.replace(/\D/g, "");

    if (/[^0-9.-]/.test(valor)) {
        alert("Apenas números são permitidos no CPF.");
        cpf.value = valor.replace(/[^0-9.-]/g, "");
        return;
    }
    if (numeros.length < 11) {
        valor = numeros.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        cpf.value = valor;
    }
    if (numeros.length <= 11) {
        cpf.value = valor;
    } else {
        cpf.value = valor.slice(0, 14);
    }
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
    var divPagamento = document.getElementById(divID);
    divPagamento.style.display = "block";
}

function parcelamento() {
    var parcelas = document.getElementById("parcelas").value;
    var preco = "100"

    if (parcelas == "x1") {
       document.getElementById("x1").innerHTML = "1x de " + preco + " Rupees"
    } 
    if (parcelas == "x2") {
        var parcela = preco / 2
        document.getElementById("x2").innerHTML = "2x de " + parcela + " Rupees"
    }
    if (parcelas == "x3") {
        var parcela = (preco / 3).toFixed(2)
        document.getElementById("x3").innerHTML = "3x de " + parcela + " Rupees"
     } 
     if (parcelas == "x4") {
        var parcela = (preco / 4) * (1 + 0.05).toFixed(2)
         document.getElementById("x4").innerHTML = "(Com juros) 4x de " + parcela + " Rupees"
     }
     if (parcelas == "x5") {
        var parcela = (preco / 5 ) * (1 + 0.1).toFixed(2)
        document.getElementById("x5").innerHTML = "(Com juros) 5x de " + parcela + " Rupees"
     } 
     
    console.log(parcelas)
}


function mostrarReciboPix() {
    var DIVrecibo = document.getElementById("recibo");
    var nomePix = document.getElementById("nomePix").value;
    var cpf = document.getElementById("cpf").value;

    if (nomePix !== "" && cpf !== "") {
        DIVrecibo.style.display = "block";
    } else {
        DIVrecibo.style.display = "none";
    }
}

function mostrarReciboCartao() {
    var DIVrecibo = document.getElementById("recibo");
    var nomeCartao = document.getElementById("nomeCartao").value;
    var cartaoCredito = document.getElementById("cartaoCredito").value;
    var validadeCartao = document.getElementById("validadeCartao").value;
    var cvv = document.getElementById("cvv").value;

    if (nomeCartao !== "" && cartaoCredito !== "" && validadeCartao !== "" && cvv !== ""){
        DIVrecibo.style.display = "block";
    } else {
        DIVrecibo.style.display = "none";
    }
}

