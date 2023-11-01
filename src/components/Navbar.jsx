import React, {useState}from 'react'

const Navbar = () => {
    const [nav, setNav] = useState (false)
    const handleClick = () => setNav (!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-900 text-gray-300'>
        <div>
       
        </div>
    </div>
  )
}

export default Navbar