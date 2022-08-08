import React from 'react'

const Navigation = ({onSignIn}) => {
  return (
   <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
    <p className='f3 pointer link underline pa3 dim' onClick={onSignIn}>Sign Out</p>
   </nav>
  )
}

export default Navigation