let tarefas = [];

function adicionarTarefa() {
  let mensagem = document.getElementById("mensagem");

  let inputTarefa = document.getElementById("inputTarefa");

  let tarefa = inputTarefa.value.trim().toUpperCase();

  if (tarefa == "") {
    mensagem.className = "erro";
    mensagem.textContent = "A tarefa está vazia";
  } else {
    mensagem.className = "sucesso";
    mensagem.textContent = "Tarefa adicionada com sucesso!";
    tarefas.push(tarefa);
    console.log(tarefas);

    renderizarTarefas();
  }
}

function renderizarTarefas() {
  const listaTarefas = document.getElementById("listaTarefas");
  listaTarefas.innerHTML = "";

  for (let i = 0; i < tarefas.length; i++) {
    let novaTarefa = document.createElement("li");
    novaTarefa.textContent = tarefas[i];
    listaTarefas.appendChild(novaTarefa);
    let botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.classList = "remover";
    //botaoRemover.onclick = removerTarefa();
    novaTarefa.appendChild(botaoRemover);
    let botaoEditar = document.createElement("button");
    botaoEditar.textContent = "Editar";
    botaoEditar.classList = "editar";
    //botaoEditar.onclick = editarTarefa();
    novaTarefa.appendChild(botaoEditar);
  }
}
