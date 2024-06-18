'use client'

import './style.css'

export default function( props ) {
  return (
    <div className='noticia'>      
      <img className='imagem' style={{ backgroundImage: `url(${ props.noticia.img })` }}/>
      <div className='titulo'>{ props.noticia.title }</div>
      <div className="publicado-em">{new Date(props.noticia.createdAt).toLocaleDateString('pt-BR') }</div>
      <div className='texto' dangerouslySetInnerHTML={ {__html: props.noticia.texto } }/>
    </div>
  )
}