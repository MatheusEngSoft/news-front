import Noticia from "@/components/Noticia"

const noticia = [
  {
    id: 1,
    titulo: 'Noticia 1',
    img: 'https://via.placeholder.com/150',
    texto: 'Texto da <b>Noticia 1</b>'
  },
  {
    id: 2,
    titulo: 'Noticia 2',
    img: 'https://via.placeholder.com/150',
    texto: 'Texto da <b>Noticia 2</b>'
  },
  {
    id: 1,
    titulo: 'Noticia 3',
    img: 'https://via.placeholder.com/150',
    texto: 'Texto da <b>Noticia 3</b>'
  }
]

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      {noticia.map(noticia => <Noticia key={noticia.key} noticia={noticia}/>)}
    </div>
  )
}