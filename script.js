if (document.getElementById("botao_login")) {
    document.getElementById("botao_login").onclick = function() {
        if (window.location.pathname.includes("index.html")) {
            window.location.href = "login.html";
        } else {
            window.location.href = "login.html";
        }
    };
}

if (document.getElementById("pijama")) {
    document.getElementById("pijama").onclick = function() {
        if (window.location.pathname.includes("index.html")) {
            window.location.href = "visualizar_pijama.html";
        }
    };
}

if (document.getElementById("botao_fazer_cadastro")) {
    document.getElementById("botao_fazer_cadastro").onclick = function() {
        if (window.location.pathname.includes("login.html")) {
            window.location.href = "cadastro.html";
        }
    };
}

if (document.getElementById("botao_carrinho")) {
    document.getElementById("botao_carrinho").onclick = function() {
        if (window.location.pathname.includes("index.html")) {
            window.location.href = "carrinho.html";
        } else {
            window.location.href = "carrinho.html";
        }
    };
}

if (document.getElementById("botao_comprar")) {
    document.getElementById("botao_comprar").onclick = function() {
        if (window.location.pathname.includes("visualizar_pijama.html")) {
            window.location.href = "carrinho.html";
        }
    };
}

if (document.getElementById("finalizar_compra")) {
    document.getElementById("finalizar_compra").onclick = function() {
        if (window.location.pathname.includes("carrinho.html")) {
            window.location.href = "finalizar_compra.html";
        }
    };
}