'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function CadastroForm() {
    const router = useRouter()
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function handleSubmit(e){
        e.preventDefault()
        try {
            const formulario = {
                nome,
                email,
                senha
            }
            const result = await axios.post('http://localhost:8080/usuarios', formulario)
            alert('Usuario Cadastrado com Sucesso!')
            router.push('/admin/noticia/criar')
        } catch (error) {
            alert(error.response.data.message)
        }
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