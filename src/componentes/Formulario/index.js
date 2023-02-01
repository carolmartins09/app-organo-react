import './formulario.css'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({aoCadastrar, times, cadastrarTime}) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [id, setId] = useState('uuidv4');
    const [favorito, setFavorito] = useState(false)
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault()
        aoCadastrar({
            nome,
            cargo,
            imagem,
            time,
            id,
            favorito
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
        setId('')
        setFavorito(false)
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <Campo 
                    obrigatorio = {true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado = {valor => setNome(valor)}
                />
                <Campo
                    obrigatorio = {true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Campo 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio = {true} 
                    label="Time" 
                    itens = {times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
            <form onSubmit={(evento) => {
                evento.preventDefault()
                cadastrarTime({nome: nomeTime, cor: corTime})
            }}>
                <h2>Preencha os dados para criar um novo time:</h2>
                <Campo 
                    obrigatorio
                    label="Nome" 
                    placeholder="Digite o nome do time" 
                    valor={nomeTime}
                    aoAlterado = {valor => setNomeTime(valor)}
                />
                <Campo
                    obrigatorio
                    type = 'color'
                    label="Cor" 
                    placeholder="Digite a cor do time" 
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <Botao>
                    Criar um novo time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario