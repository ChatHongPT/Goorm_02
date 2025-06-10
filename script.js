document.addEventListener("DOMContentLoaded", () => {
  const todoListElement = document.getElementById("todo-list");
  const addNewTodoButton = document.getElementById("add-new-todo-button");

  let todos = [];

  const loadTodos = () => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      todos = JSON.parse(storedTodos);
    }
  };

  const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const renderTodoItem = (todo, index) => {
    const todoItemDiv = document.createElement("div");
    todoItemDiv.classList.add("todo-item");
    if (todo.completed) {
      todoItemDiv.classList.add("completed");
    }

    todoItemDiv.innerHTML = `
            <div class="todo-content">
                <input type="checkbox" data-index="${index}" ${
      todo.completed ? "checked" : ""
    }>
                <span class="todo-text">${todo.text}</span>
            </div>
            <div class="actions">
                <button class="edit-button" data-index="${index}">✏️</button>
                <button class="delete-button" data-index="${index}">✖️</button>
            </div>
        `;

    const checkbox = todoItemDiv.querySelector('input[type="checkbox"]');
    checkbox.addEventListener("change", (e) =>
      toggleTodoCompletion(e.target.dataset.index)
    );

    const todoTextSpan = todoItemDiv.querySelector(".todo-text");
    todoTextSpan.addEventListener("click", (e) => {
      if (!todoItemDiv.classList.contains("editing")) {
        enterEditMode(index, todoItemDiv, todoTextSpan);
      }
    });

    const editButton = todoItemDiv.querySelector(".edit-button");
    editButton.addEventListener("click", (e) => {
      if (!todoItemDiv.classList.contains("editing")) {
        enterEditMode(index, todoItemDiv, todoTextSpan);
      }
    });

    const deleteButton = todoItemDiv.querySelector(".delete-button");
    deleteButton.addEventListener("click", (e) =>
      deleteTodo(e.target.dataset.index)
    );

    return todoItemDiv;
  };

  const renderTodos = () => {
    todoListElement.innerHTML = "";
    todos.forEach((todo, index) => {
      todoListElement.appendChild(renderTodoItem(todo, index));
    });
  };

  const addTodo = (text = "") => {
    todos.push({ text: text, completed: false });
    saveTodos();
  };

  const toggleTodoCompletion = (index) => {
    todos[index].completed = !todos[index].completed;
    saveTodos();
    renderTodos();
  };

  const enterEditMode = (index, todoItemDiv, todoTextSpan) => {
    todoItemDiv.classList.add("editing");
    const currentText = todos[index].text;

    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = currentText;
    editInput.classList.add("edit-input");

    todoTextSpan.replaceWith(editInput);
    editInput.focus();

    const saveEdit = () => {
      const newText = editInput.value.trim();
      if (newText !== "" && newText !== currentText) {
        todos[index].text = newText;
        saveTodos();
      }
      todoItemDiv.classList.remove("editing");
      editInput.replaceWith(todoTextSpan);
      renderTodos();
    };

    editInput.addEventListener("blur", saveEdit);
    editInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        saveEdit();
      }
    });
  };

  const deleteTodo = (index) => {
    if (confirm("정말로 이 TODO를 삭제하시겠습니까?")) {
      todos.splice(index, 1);
      saveTodos();
      renderTodos();
    }
  };

  loadTodos();
  renderTodos();

  const handleAddTodo = () => {
    addTodo();
    renderTodos();

    const lastTodoItem = todoListElement.lastElementChild;
    if (lastTodoItem) {
      const todoTextSpan = lastTodoItem.querySelector(".todo-text");
      const index = todos.length - 1;
      enterEditMode(index, lastTodoItem, todoTextSpan);
      lastTodoItem.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  addNewTodoButton.addEventListener("click", (e) => {
    e.preventDefault();
    handleAddTodo();
  });
});
