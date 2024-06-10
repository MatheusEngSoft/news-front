'use client'
import { useEffect, useState } from "react"
import axios from 'axios'
import Noticia from "../../../components/Noticia/index"

export default function HomePage() {
  const [noticias, setNoticias] = useState([]) // Initialize with an empty array

  async function getNoticias(){
    try {
      const result = await axios.get('http://localhost:8080/noticias')
      setNoticias(result.data)
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  useEffect(() => {
    getNoticias()
  }, [])

  return (
    <div>
      <h1>Home</h1>
      {noticias.length > 0 ? (
        noticias.map(noticia => <Noticia key={noticia.key} noticia={noticia}/>)
      ) : (
        <p>No news available</p>
      )}
    </div>
  )
}
