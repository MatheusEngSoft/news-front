'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMugHot } from '@fortawesome/free-solid-svg-icons'
import './style.css'

export default function Menu() {
  const [menuLateral, setMenuLateral] = useState(false)
  const router = useRouter()

  const closeMenu = () => setMenuLateral(false)

  return (
    <>
      <nav className='menu'>
        <button onClick={() => setMenuLateral(!menuLateral)}>
          <FontAwesomeIcon icon={faBars} size='2x' />
        </button>
        <div className='logo'>
          <FontAwesomeIcon icon={faMugHot} />
          <div className='marca'>Logo</div>
        </div>
        <button className='login' onClick={() => router.push('/login')}>Login</button>
      </nav>

      {menuLateral && (
        <>
          <div className='menu_overlay' onClick={closeMenu}></div>
          <div className='menu_lateral'>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/admin/noticia/produto">Produto</a></li>
              <li><a href="/admin/noticia/tecnologia">Tecnologia</a></li>
              <li><a href="/admin/noticia/rh">RH</a></li>
              <li><a href="/admin/noticia/venda">Vendas</a></li>
            </ul>
          </div>
        </>
      )}
    </>
  )
}
