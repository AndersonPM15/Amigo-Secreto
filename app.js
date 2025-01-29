let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim(); // Remove espaços extras

    // Validação: verificar se o campo está vazio
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    // Adicionar o nome ao array de amigos e limpar o campo de entrada
    amigos.push(nome);
    input.value = "";

    // Atualizar a lista visível na página
    atualizarLista();
}

// Função para atualizar a exibição da lista de amigos
function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpa a lista antes de renderizar novamente

    // Adiciona cada nome como um item da lista
    amigos.forEach((nome, index) => {
        const li = document.createElement("li");
        li.textContent = nome;

        // Botão para remover um amigo da lista
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.classList.add("button-remove");
        botaoRemover.onclick = () => removerAmigo(index);

        li.appendChild(botaoRemover);
        listaAmigos.appendChild(li);
    });
}

// Função para remover um amigo da lista
function removerAmigo(index) {
    amigos.splice(index, 1); // Remove o amigo pelo índice
    atualizarLista(); // Atualiza a lista visível
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia. Adicione pelo menos um nome antes de realizar o sorteio.");
        return;
    }

    // Selecionar um índice aleatório da lista
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibir o resultado do sorteio
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
}
