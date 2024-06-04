'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import './style.css'



export default function Menu() {
  const [menuLateral, setMenuLateral] = useState(false)
  const router = useRouter();

  return (
    <>
      <nav className='menu'>
        <button onClick={() => setMenuLateral(!menuLateral)}>Menu</button>
        <div>Logo</div>
        <button onClick={() => router.push('/login')}>Login</button>
      </nav>

      { menuLateral &&
        <div className='menu_lateral'>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </ul>
        </div>
      } 
    </>
  )
}