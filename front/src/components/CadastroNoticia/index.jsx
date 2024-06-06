'use client'
import { useState } from 'react'

export default function() {
  const [titulo, setTitulo] = useState('')
  const [img, setImg] = useState('')
  const [texto, setTexto] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
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
      <button type="submit">Cadastrar Noticia</button>
    </form>
  )
}