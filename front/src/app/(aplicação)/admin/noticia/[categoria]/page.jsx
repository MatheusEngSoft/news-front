'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import GridNoticias from '../../../../../components/GridNoticias/index'

const NoticiaPage = ({ params }) => {
  const [noticias, setNoticias] = useState([])

  async function getNoticias(){
    try {
      const result = await axios.get(`http://localhost:8080/noticias?categoria=${query.categoria}`)
      setNoticias(result.data)
    }catch(error) {
      alert(error.response.data.message)
    }
  }
  useEffect(() => {
    getNoticias()
  })
  return (
    <div>
      <h1>{ params.categoria.toUpperCase() }</h1>
      <GridNoticias noticias={noticias}/>
    </div>
  )
}

export default NoticiaPage