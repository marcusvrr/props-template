import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {
  const nome = "Marcus"
  const nome2 = "Barbosa"
  const carro1 = {
    nomeDoCarro: "Fusca",
    ano: 1970,
    cor: "Azul",
    flex: false
  }
  const carro2 = {
    nomeDoCarro: "Brasilia",
    ano: 1965,
    cor: "Amarela",
    flex: false
  }
  const carro3 = {
    nomeDoCarro: "Opala",
    ano: 1984,
    cor: "Verde",
    flex: false
  }
  const carro4 = {
    nomeDoCarro: "Ferrari",
    ano: 2000,
    cor: "Vermelha",
    flex: false
  }
  const carro5 = {
    nomeDoCarro: "Mercedes",
    ano: 1965,
    cor: "Amarela",
    flex: false
  }
  const carro6 = {
    nomeDoCarro: "Jaguar",
    ano: 2010,
    cor: "Verde",
    flex: false
  }
  function apresentacao(nome) {
    alert("Boas vindas à garagem de " +nome)
  }
  return (
    <div>
      <Garagem
        nome={nome}
        carroça1={carro1}
        carroça2={carro2}
        carroça3={carro3}
        funcao={apresentacao}
      />
      <Garagem
        nome={nome2}
        carroça1={carro4}
        carroça2={carro5}
        carroça3={carro6}
        funcao={apresentacao}
      />
    </div>
  );
}
