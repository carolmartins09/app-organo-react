import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'DevOps',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }    
  ] 

  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador () {
    console.log ('deletando colaborador');
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        times={times.map(time => time.nome)} 
        aoCadastrar={colaborador => aoNovoColaboradorAdicionado(colaborador)} 
      />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => 
          <Time 
            key = {indice} 
            time = {time} 
            corPrimaria = {time.corPrimaria} 
            corSecundaria = {time.corSecundaria}
            colaboradores = {colaboradores.filter(colaborador => colaborador.time === time.nome)}
            aoDeletar = {deletarColaborador}
          />
        )}
      </section>
    </div>
  );
}

export default App;
