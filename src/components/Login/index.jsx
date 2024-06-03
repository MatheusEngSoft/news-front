'use client'
import { useState } from 'react'

export default function LoginForm() {
    const [formulario, setFormulario] = useState({
        email:'',
        senha:''
    })

    function handleChange(e){
        const { name, value } = e.target
        setFormulario({
            ...formulario,
            [name]: value
        })
    }
    function handleSubmit(e) {
        e.preventDefault()

        //TODO: enviar os dados para o servidor
        console.log(formulario)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="senha">Senha</label>
                <input type="password" name="senha" onChange={handleChange} />
            </div>
            <button type="submit">Logar</button>
        </form>
    )
}