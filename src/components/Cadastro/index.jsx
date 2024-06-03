'use client'
import { useState } from 'react'

export default function CadastroForm() {

    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()

    function handleSubmit(e){
        e.preventDefault()

        //TODO: enviar os dados para o servidor
        console.log(nome, email, senha)
    }

    function handleChange(e){
        const { name, value } = e.target
        switch(name) {
            case 'nome':
                setNome(value)
                break
            case 'email':
                setEmail(value)
                break
            case 'senha':
                setSenha(value)
                break
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">Nome</label>
                <input type="text" name="nome" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="senha">Senha</label>
                <input type="password" name="senha" onChange={handleChange} />
            </div>
            <button type="submit">Cadastrar</button>
        </form>
    )
}