import axios from 'axios';
import API from  "./services/API"
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import Input from './components/Input';
import './Style.css';


function App(){
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});
  const [bairro, setBairro] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [uf, setUf] = useState('');

    const getAdress = async function () {
      try {
        const response = await API.get(`/ws/${input}/json`);
        setCep(response.data);
        setInput('');
        

      } catch (e) {
        alert("CEP Invalido")
        setInput('');
      }
    }


  return(
    <div className="container">

      <h1>
        Pesquise seu CEP
      </h1>

    <div className="inputContainer">
      <Input placeholder="Digite seu CEP" value={input} onChange={e => setInput(e.target.value)} />

      <button onClick={getAdress}>
        <FiSearch size={25} color="fff"/>
      </button>
      </div>
    {Object.keys(cep).length >0 &&
      <main className="main">
      <h2> CEP: { cep.cep } </h2>
      <span> { cep.bairro } </span>
      <span> { cep.logradouro } </span>
      <span> { cep.localidade } - { cep.uf } </span>
    </main>
    }
    </div>

    
  )
}


export default App;