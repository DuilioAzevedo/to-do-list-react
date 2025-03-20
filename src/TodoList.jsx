import React, { useState } from "react";

function TodoList() {
  const [tarefa, setTarefa] = useState("");
  const [lista, setLista] = useState([]);

  const adicionarTarefa = () => {
    if (tarefa.trim() === "") return;
    setLista([...lista, tarefa]);
    setTarefa("");
  };

  const removerTarefa = (index) => {
    setLista(lista.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <input
        type="text"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
        placeholder="Digite uma tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>

      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => removerTarefa(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
