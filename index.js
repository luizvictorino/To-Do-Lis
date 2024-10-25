let tasks = [
  { id: 1, description: "comprar pão", checked: false },
  { id: 2, description: "passear com o cachorro", checked: false },
  { id: 3, description: "fazer o almoço", checked: false },
];

// Cria a lista e exibe na tela'
window.onload = function () {
  tasks.forEach((task) => {
    const list = document.getElementById("todo-list");
    const toDo = document.createElement("li");

    toDo.textContent = task.description;
    list.appendChild(toDo);
  });
};
