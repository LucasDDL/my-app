import { FiSearch} from "react-icons/fi";
import "./styles.css";


function App() {
  return (
    <div className="container"> 
      <h1>BUSCADOR</h1>
      <div className="containerImput">
        <input 
        type= "text"
        placeholder="Digite seu CEP..."
        />
        <button className="buttonsearch">
          <FiSearch size={25} color= "#fff"/>
        </button>
        <mai className="main">
          <h2>CEP: 05798150</h2>
          <span>Rua teste algum</span>
          <span>Complemento: Algum complemento</span>
          <span>Bairro: Vila Lisse</span>
          <span>São Paulo - SP</span>

        </mai>
      </div>
      
    </div>
  );
}

export default App;
