'use client'
import axios from 'axios'
import { useRouter} from 'next/navigation'
import { useState } from 'react'

export default function LoginForm() {
    const router = useRouter()
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
    async function handleSubmit(e) {
        e.preventDefault()
        try{
            const result = await axios.post('http://localhost:8080/login', formulario)
            console.log(result)
            alert(result.data.message)
            router.push('/admin/noticia/criar')
        }catch (error){
            alert(error.response.data.message)
        }
        console.log(result)    
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