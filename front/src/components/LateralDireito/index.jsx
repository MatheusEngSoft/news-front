'use client'
import CardNoticia from "../CardNoticia"
import { truncateWithEllipses } from '../../libs/trucateWithElipses'
import './style.css'

export default function LateralDireito({ noticias }) {
  const noticiasComElipse = noticias.map((noticia, index) => {
    const truncatedNoticia = { ...noticia, texto: truncateWithEllipses(noticia.texto, 100) };
    return <CardNoticia key={index} noticia={truncatedNoticia} />
  })

  return (
    <div className="ultimas-noticias">
      <div className="titulo">Ultimas Noticias</div>
      <div className="card-noticia">
        {noticiasComElipse}
      </div>
    </div>
  )
}
