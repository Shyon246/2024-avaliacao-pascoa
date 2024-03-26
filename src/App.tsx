import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import "./App.css";

type Tarefa = {
  id: number,
  titulo: string;
  concluido: boolean;
};
type Publicacao = {
  id: number,
  titulo: string;
  corpo: string;
};
type Tarefa = { /*album*/ 
  id: number,
  titulo: string;
  concluido: boolean;
};
type Tarefa = {/*user*/
  id: number,
  titulo: string;
  concluido: boolean;
};

const ListaDeTarefas = () => {
  const [tarefas, setTarefas] = useState([]);
  const escutarCliqueAcessarAPI = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((resposta: AxiosResponse) => {
      const dados = resposta.data.map((item: { id: number; title: string; completed: boolean; }) => {
        return {
          id: item.id,
          titulo: item.title,
          concluido: item.completed,
        };
      });
      setTarefas(dados);
    });
  };
  
  return (
    <>
      <h4>Tarefas</h4>
      <div>
        <button onClick={escutarCliqueAcessarAPI}>Atualizar lista de tarefas</button>
      </div>
      <ul>
        {
          tarefas.map((item: Tarefa) => {
            return <ItemTarefa key={item.id} titulo={item.titulo} />
          })
        }
      </ul>
    </>
  );
}

const ItemTarefa = (props: {titulo: string}) => {
  return (<li>{props.titulo}</li>);
}

/*----------------------------------------*/

/**/
const ListaDePublicacoes = () => {
  const [publicacoes, setPublicacoes] = useState([]);
  const escutarCliqueAcessarAPI = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts/").then((resposta: AxiosResponse) => {
      const dados = resposta.data.map((itemPub: { id: number; title: string; body: string; }) => {/*mudar o item*/ 
        return {
          id: itemPub.id,
          titulo: itemPub.title,
          corpo: itemPub.body,

        };
      });
      setPublicacoes(dados);
    });
  };
  
  return (
    <>
      <h4>Publicações</h4>
      <div>
        <button onClick={escutarCliqueAcessarAPI}>Atualizar publicações</button>
      </div>
      <ul>
        {
          publicacoes.map((itemPub: Publicacao) => {
            return <ItemPublicacao key={itemPub.id} titulo={itemPub.titulo} corpo={itemPub.corpo}/>
          })
        }
      </ul>
    </>
  );
}

const ItemPublicacao = (props: {titulo: string; corpo: string;}) => {/*chamando oque quero que mostre na tela*/ 
  return (<li>{props.titulo}</li>);

/*------------------*/

const ListaDeUsuarios = () => {
  return null;
}

const ListaDeAlbuns = () => {
  return null;
}

const App = () => {
  return (
    <div className="avaliacao">
      <h1>Infoweb - React</h1>
      <ListaDeTarefas />
      <ListaDePublicacoes />
      <ListaDeAlbuns />
      <ListaDeUsuarios />
    </div>
  );
}

export default App;
