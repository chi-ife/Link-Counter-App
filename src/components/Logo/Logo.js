import React from 'react'
import devIcon from '../../iconn.png'
import './Logo.css'

const Logo = () => {
  return (
    <div className='logo-div'>
        <img src={devIcon} alt="" className='logo' />
    </div>
  )
}

export default Logo