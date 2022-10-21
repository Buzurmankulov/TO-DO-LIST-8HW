import React, { useState, useEffect } from "react";
import { MdCheck, MdDelete } from "react-icons/md";

import { Container, Cadastro, List, NameTask, ListItem } from "./Styles";

function Home() {
  const [tarefa, SetTarefa] = useState("");
  const [atualizaGrid, SetAtualizaGrid] = useState(false);
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("Dados")) ?? []
  );

  useEffect(() => {
    const DadosGrid = JSON.parse(localStorage.getItem("Dados")) ?? [];
    setData(DadosGrid);
  }, [atualizaGrid]);

  function HandleSalvar(event) {
    event.preventDefault();

    if (!tarefa) {
      return alert("Informe o nome da tarefa");
    }

    const dados = {
      nome: tarefa,
      checked: false,
    };

    const dadosArray = [...data, dados];
    setData(dadosArray);
    localStorage.setItem("Dados", JSON.stringify(dadosArray));
    SetTarefa("");
    event.target.reset();
  }

  function handleExcluir(index) {
    const dadosExcluido = data;
    dadosExcluido.splice(index,1);
    setData(dadosExcluido);
    localStorage.setItem("Dados", JSON.stringify(dadosExcluido));
    SetAtualizaGrid(!atualizaGrid);
  }

  function handleConcluir(index) {
    const dadosAlterar = data;
    dadosAlterar[index].checked = !dadosAlterar[index].checked;

    setData(dadosAlterar);
    localStorage.setItem("Dados", JSON.stringify(dadosAlterar));
    SetAtualizaGrid(!atualizaGrid);
  }

  return (
    <Container>
      <header>
        <h1>To Do List</h1>
      </header>
      <Cadastro>
        <form onSubmit={HandleSalvar}>
          <input
            type="text"
            placeholder="Descreva sua tarefa"
            onChange={(e) => SetTarefa(e.target.value)}
          />
          <button type="submit">Incluir</button>
        </form>
      </Cadastro>
      <List>
        {data.map((dado, index) => {
          return (
            <ListItem key={index}>
              <NameTask checked={dado.checked ? true : false}>
                {dado.nome}
              </NameTask>
              <div>
                <MdCheck
                  size={24}
                  color="#00f1f"
                  onClick={() => handleConcluir(index)}
                />
                <MdDelete
                  size={24}
                  color="#ff0000"
                  onClick={() => handleExcluir(index)}
                />
              </div>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
}
export default Home;
