'use client'
import './style.css'

export default function Noticia({ noticia }) {
  return (
    <div className='noticia'>
      <img className='imagem' style={{ backgroundImage: `url(${noticia.img})` }} alt={noticia.title} />
      <div className='titulo'>{noticia.title}</div>
      <div className="publicado-em">{new Date(noticia.createdAt).toLocaleDateString('pt-BR')}</div>
      <div className='texto' dangerouslySetInnerHTML={{ __html: noticia.texto }} />
    </div>
  )
}
