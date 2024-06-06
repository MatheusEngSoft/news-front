'use client'
import CardNoticia from "../CardNoticia"

export default function GridNoticias({ noticias }) {
  return (
    <div>
      {noticias.map(noticia => (
        <CardNoticia key={noticia.id} noticia={noticia} />
      ))}
    </div>
  )
}