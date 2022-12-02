import {useState} from "react";
import { FiSearch} from "react-icons/fi";
import "./styles.css";
import api from "./services/api";


function App() {
  
  const [input,setInput] = useState("");
  const [cep,setCep] = useState({});

  async function handleSearch(){
    //05798150/json/ 
        if(input === ""){
          alert("Preencha algum CEP!")
          return;
        }
        try{
            const response = await api.get(`${input}/json`);
            setCep(response.data)
            setInput("");
        }catch{
            alert("Ops erro ao buscar");
            setInput("")

        }
      
  }
  
  return (
    <div className="container"> 

      <h1 className="title">TRACKER CEP</h1>
      
      <div className="containerImput">
        <input 
        type= "text"
        placeholder="Digite seu CEP..."
        value={input}
        onChange= {(e) => setInput (e.target.value)}
        />
        <button className="buttonsearch" onClick={handleSearch}>
          <FiSearch size={25} color= "#fff"/>
        </button>
      </div>
       <mai className="main">
          <h2>CEP:{cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>Complemento:{cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
        </mai>
      
    </div>
  );
}

export default App;
