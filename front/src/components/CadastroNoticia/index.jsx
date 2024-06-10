'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function CadastroNoticia() {
  const router = useRouter()
  const [titulo, setTitulo] = useState('')
  const [img, setImg] = useState('')
  const [texto, setTexto] = useState('')
  const [categoria, setCategoria] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const formulario = {
        titulo,
        img,
        texto,
        categoria
      }
      const result = await axios.post('http://localhost:8080/noticias', formulario)
      console.log(result)
      alert('Noticia criada com sucesso!')
      router.push('/home')
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Erro ao criar notícia'
      alert(errorMessage)
    }
    
    console.log('submeteu', titulo, img, texto)
  }

  function handleChange(e) {
    const { name, value } = e.target
    switch(name){
      case 'titulo':
        setTitulo(value)
        break
      case 'img':
        setImg(value)
        break
      case 'texto':
        setTexto(value)
        break
      case 'categoria':
        setCategoria(value)
        break
      default:
        break
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="titulo">Titulo</label>
        <input type="text" name="titulo" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="img">Imagem</label>
        <input type="text" name='img' onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="texto">Texto</label>
        <textarea name="texto" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="categoria">Categoria</label>
        <select name="categoria" onChange={handleChange}>
          <option value="produto">Produto</option>
          <option value="tecnologia">Tecnologia</option>
          <option value="rh">RH</option>
          <option value="venda">Venda</option>
        </select>
      </div>
      <button type="submit">Cadastrar Noticia</button>
    </form>
  )
}
