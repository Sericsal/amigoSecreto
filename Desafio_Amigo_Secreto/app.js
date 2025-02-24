//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];
let sorteados = [];

// let quantidadeDeAmigos = parseInt(gets()); 


function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;
    if (nome !== "") {
        listaDeAmigos.push(nome);
        atualizarLista();
        document.getElementById("amigo").value = "";
    } else {
        alert("Por favor, insira um nome válido.");
    }
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    listaDeAmigos.forEach((amigo, index) => {
        let item = document.createElement("li");
        item.textContent = `${index + 1}. ${amigo}`;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        if (sorteados.length === 0) {
            alert("Insira pelo menos um nome para sortear!");
        } else {
            alert("Todos os amigos já foram sorteados!");
        }
        return; // Sai da função para evitar execução desnecessária
    }

    let sorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    document.getElementById("resultado").textContent = `Resultado: ${sorteado}`;

    sorteados.push(sorteado);
    listaDeAmigos = listaDeAmigos.filter(amigo => amigo !== sorteado);
    
    atualizarLista();
}

function criarNovaLista() {
    listaDeAmigos = [];
    sorteados = [];
    atualizarLista();
    document.getElementById("listaAmigos").textContent = "";
    document.getElementById("resultado").textContent = "";
} 

document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        adicionarAmigo();
    }
});