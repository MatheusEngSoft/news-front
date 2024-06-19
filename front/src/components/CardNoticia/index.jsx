'use client'
import { useState } from 'react'
import './style.css'

export default function CardNoticia({ noticia }) {
  const [isHover, setIsHover] = useState(false)

  return (
    <div className="card-noticia">
      <div style={{ position: 'relative' }} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        <div className='popular' style={{ opacity: isHover ? '1' : '0' }}>Clique Aqui</div>
        <div className="imagem" style={{ backgroundImage: `url(${noticia.img})` }}></div>
      </div>
      <h2>{noticia.titulo}</h2>
      <p dangerouslySetInnerHTML={{ __html: noticia.texto }} />
      <hr />
      <div className="publicado-em">{new Date(noticia.createdAt).toLocaleDateString('pt-BR')}</div>
    </div>
  )
}
