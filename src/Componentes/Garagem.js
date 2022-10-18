import Carro from "./Carro";

function Garagem(props) {
  return (
    <div>
      <h1>Garagem de {props.nome} </h1>
      <button onClick={()=>props.funcao(props.nome)}>botão</button>
      <Carro 
      carro={props.carroça1}
      />
      <Carro 
      carro={props.carroça2}
      />
      <Carro 
      carro={props.carroça3}
      />
    </div>
  );
}

export default Garagem;
