import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='flex items-center justify-center max-w-screen-xl mt-10  mx-auto'>
        <div className=" flex max-w-screen-xl">
        <h1 className='head'><img src="#" alt="web3Bridge" /></h1>
        <nav className=' nav'>
            <ul className='list '>
                <li><a href="">Home</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Single Post</a></li>
                <li><a href="">Pages</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <span className=' mt-1 justify-end grow flex  m-0  relative h-7'>
                <input type="search" name="" id="search" placeholder='search' title='search' autoComplete='off' className='w-32 m-0 p-0 border-2 rounded-lg pl-3 ' />

                <button type="submit" className='ml-3 absolute top-0 right-0 items-center justify-center'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg></button>
            </span>
            
          
        </nav>

        </div>
      
    </div>
  )
}

export default Header