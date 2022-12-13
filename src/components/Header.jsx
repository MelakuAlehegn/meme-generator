import React from 'react'
import img from '../assets/troll.png'
function Header() {
  return (
    <header>
      <div className='logo'>
        <img src={img}/>
        <h3>Meme Generator</h3>
      </div>
      <h4 className='right-header'>React Course - Project 3</h4>
    </header>
  )
}

export default Header