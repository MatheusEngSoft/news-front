'use client'
import { useEffect, useState } from "react"
import axios from 'axios'
import Noticia from "../../../components/Noticia/index"
import LateralEsquerdo from '../../../components/LateralEsquerdo/index'
import LateralDireito from '../../../components/LateralDireito/index'
import './style.css'

export default function HomePage() {
  const [noticias, setNoticias] = useState([])

  // Fetch news data from the server
  async function getNoticias() {
    try {
      const result = await axios.get('http://localhost:8080/noticias')
      setNoticias(result.data)
    } catch (error) {
      alert(error.response?.data?.message || 'Error fetching news')
    }
  }

  // Function to determine the latest news items dynamically
  function getUltimasNoticias() {
    const sortedNoticias = [...noticias].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    return sortedNoticias.slice(0, 3)
  }

  useEffect(() => {
    getNoticias()
  }, [])

  const noticiaMaisPopular = noticias.find(noticia => noticia.isPopular)
  const ultimasNoticias = getUltimasNoticias()
  const outrasNoticias = noticias.filter(noticia => !ultimasNoticias.includes(noticia) && !noticia.isPopular)

  return (
    <div className="grid-home">
      {noticiaMaisPopular && <LateralEsquerdo noticia={noticiaMaisPopular} />}
      <div>
        {outrasNoticias.map(noticia => <Noticia key={noticia.id} noticia={noticia} />)}
      </div>
      {ultimasNoticias.length > 0 && <LateralDireito noticias={ultimasNoticias} />}
    </div>
  )
}
