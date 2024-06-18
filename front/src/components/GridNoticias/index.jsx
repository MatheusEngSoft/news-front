'use client'
import './style.css'
import CardNoticia from "../CardNoticia"

export default function GridNoticias({ noticias }) {
  return (
    <div className="grid-noticias">
      {noticias.map(noticia => (
        <CardNoticia key={noticia.id} noticia={noticia} />
      ))}
    </div>
  )
}