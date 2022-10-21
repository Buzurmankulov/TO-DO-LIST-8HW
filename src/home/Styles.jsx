import styled from "styled-components";

export const Container = styled.div`
  & {
    padding: 1em;
    background: #6c63ff;
    width: 50vw;
    border-radius: 5px;
  }

  & header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
  }
  & h1 {
    text-align: center;
  }
`;

export const Cadastro = styled.header`
  display: flex;
  justify-content: space-between;

  & form {
    display: flex;
    width: 100%;
  }
  & input {
    margin-right: 0.5em;
    text-align: center;
  }
`;
export const List = styled.div`
  margin-top: 0.5em;
  max-height: 60vh;
  overflow: auto;

  & ::-webkit-scrollbar {
    width: 0;
  }
`;

export const NameTask = styled.span`
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  font-weight: ${(props) => (props.checked ? "bold" : "none")};
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5em;
  padding: 1em;
  background: #519;
  border-radius: 3px;

  & :where(div, svg) {
    margin-left: 1em;
    cursor: pointer;
  }
`;
