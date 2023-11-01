import React from 'react'
import Html from '../assets/html5-01-svgrepo-com.svg'
import Photoshop from '../assets/photoshop-svgrepo-com.svg'
import Css from '../assets/cssssss.svg'
import JavaScript from '../assets/js02-svgrepo-com.svg'
import ReactLogo from '../assets/react-svgrepo-com.svg'
import Tailwind from '../assets/tailwind-css-svgrepo-com.svg'

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-slate-900'>
        <div className='max-w[1000px] mx-auto px-8 flex flex-col justify-center h-full pt-12'>
            <h1 className='text-5xl sm:text-9xl font-bold text-[#ccd6f6]'>Eliezer Perez</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0] '>Diseño web</h2>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#616c8d] '>Portfolio personal.</h2>
            <div className='mt-4'>
              <p className='text-2xl md:text-3xl font-bold text-[#dedede] pt-8 pb-2'>Habilidades</p>
              <div className='w-40 grid grid-cols-6 gap-1 text-center'>
                <div>
                <img className='w-8 mx-auto md:w-8' src={Html} alt="html" />
                
                </div>
                <div>
                <img className='w-8 mx-auto md:w-8 ' src={Css} alt="html" />
                
                </div>
                <div>
                <img className='w-8 mx-auto md:w-8 ' src={JavaScript} alt="html" />
                
                </div>
                <div>
                <img className='w-8 mx-auto md:w-8 ' src={ReactLogo} alt="html" />
                
                </div>
                <div>
                <img className='w-8 mx-auto md:w-8 ' src={Tailwind} alt="html" />
                
                </div>
                <div>
                <img className='w-8 mx-auto md:w-8 ' src={Photoshop} alt="html" />
                
                </div>
                
            </div>
            
            
            <p className='text-2xl font-bold text-[#dedede] pt-8 pb-2'>Proyectos</p>
            <div className='w-60 grid grid-cols-1 gap-2 ' >
            <a href="https://practica-autos.netlify.app/" target='_blank'><p className='text-[#8892b0] content-pr'>Car Website</p></a>
            <a href="https://practica-autos.netlify.app/" target='_blank'><p className='text-[#8892b0] content-pr'>Commerce JBL</p></a>
            <a href="https://practica-autos.netlify.app/" target='_blank'><p className='text-[#8892b0] content-pr'>The Wknd Tour</p></a>
            <a href="https://practica-autos.netlify.app/" target='_blank'><p className='text-[#8892b0] content-pr'>Airpods L</p></a>
            
            </div>

            <p className='text-2xl font-bold text-[#dedede] pt-8 pb-2'>Contacto</p>
            <a href="https://practica-autos.netlify.app/" target='_blank'><p className='text-[#8892b0] content-pr'>Whatsapp</p></a></div>
        </div>
    </div>

    

    
  )
}

<script src="
https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js
">
</script>


export default Hero