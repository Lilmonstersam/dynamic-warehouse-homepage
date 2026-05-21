import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'

function Enhancements() {
  useEffect(() => {
    // Mobile Menu logic
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

    // Slider Projects Data
    const projects = [
      {
        name: 'Oliva Social',
        meta: 'Custom Mezzanines, Preston',
        url: 'https://dynamicws.com.au/projects/oliva-social/'
      },
      {
        name: 'Hastings Mezzanine',
        meta: 'Mezzanine Offices, Hastings',
        url: 'https://dynamicws.com.au/projects/hastings-mezzanine-fitout/'
      },
      {
        name: 'Anytime Fitness',
        meta: 'Custom Mezzanines, Adelaide',
        url: 'https://dynamicws.com.au/projects/anytime-fitness/'
      },
      {
        name: 'Paramount Liquor',
        meta: 'Mezzanine Offices, Derrimut',
        url: 'https://dynamicws.com.au/projects/paramount-liquor/'
      },
      {
        name: 'Industry Cladding & Roofing',
        meta: 'Warehouse Fit-outs, Melbourne',
        url: 'https://dynamicws.com.au/projects/'
      }
    ]

    const slides = document.querySelectorAll('.hero__slide')
    const projectLink = document.getElementById('hero-project-link')
    const projectName = document.getElementById('hero-project-name')
    const projectMeta = document.getElementById('hero-project-meta')

    if (window.sliderInitialized || slides.length === 0) {
      return () => {
        menuToggle?.removeEventListener('click', toggleMenu)
        navLinks.forEach((link) => link.removeEventListener('click', closeMenu))
      }
    }
    window.sliderInitialized = true

    let currentIndex = 0
    const slideInterval = 5000 // 5 seconds

    const changeSlide = (index) => {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add('active')
        } else {
          slide.classList.remove('active')
        }
      })

      const project = projects[index]
      if (project) {
        if (projectLink) projectLink.href = project.url
        if (projectName) projectName.textContent = project.name
        if (projectMeta) projectMeta.textContent = project.meta
      }
    }

    // Initialise slider
    changeSlide(0)
    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length
      changeSlide(currentIndex)
    }, slideInterval)

    return () => {
      menuToggle?.removeEventListener('click', toggleMenu)
      navLinks.forEach((link) => link.removeEventListener('click', closeMenu))
      clearInterval(intervalId)
    }
  }, [])

  return null
}

createRoot(document.getElementById('react-enhancements')).render(
  <React.StrictMode>
    <Enhancements />
  </React.StrictMode>,
)

