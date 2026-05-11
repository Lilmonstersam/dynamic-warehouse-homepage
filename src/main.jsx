import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'

function Enhancements() {
  useEffect(() => {
    const menuToggle = document.querySelector('.menu-toggle')
    const navLinks = document.querySelectorAll('.nav a')

    const closeMenu = () => {
      document.body.classList.remove('menu-open')
      menuToggle?.setAttribute('aria-expanded', 'false')
      menuToggle?.setAttribute('aria-label', 'Open menu')
    }

    const toggleMenu = () => {
      const isOpen = document.body.classList.toggle('menu-open')
      menuToggle?.setAttribute('aria-expanded', String(isOpen))
      menuToggle?.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu')
    }

    menuToggle?.addEventListener('click', toggleMenu)
    navLinks.forEach((link) => link.addEventListener('click', closeMenu))

    return () => {
      menuToggle?.removeEventListener('click', toggleMenu)
      navLinks.forEach((link) => link.removeEventListener('click', closeMenu))
    }
  }, [])

  return null
}

createRoot(document.getElementById('react-enhancements')).render(
  <React.StrictMode>
    <Enhancements />
  </React.StrictMode>,
)
