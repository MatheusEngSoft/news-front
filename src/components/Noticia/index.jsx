'use client'

export default function( props ) {
  return (
    <div>
      <div>{ props.noticia.title }</div>
      <img src="{ props.noticia.img }" alt="Noticia" />
      <div dangerouslySetInnerHTML={ {__html: props.noticia.texto } }/>
    </div>
  )
}