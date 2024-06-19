'use client'
import CardNoticia from "../CardNoticia"
import { truncateWithEllipses } from "../../libs/trucateWithElipses"
import './style.css'

export default function LateralEsquerdo({ noticia }) {
  const truncatedNoticia = { ...noticia, texto: truncateWithEllipses(noticia.texto, 100) };

  return (
    <div className="mais-popular">
      <div className="titulo">Mais Popular</div>
      <div className="card-noticia">
        <CardNoticia noticia={truncatedNoticia} />
      </div>
    </div>
  )
}
