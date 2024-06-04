

export default function({ noticia }) {
  return (
    <div>
      <div>{ noticia.title }</div>
      <img src="{ noticia..img }" alt="Noticia" />
      <div dangerouslySetInnerHTML={ noticia.texto }/>
    </div>
  )
}