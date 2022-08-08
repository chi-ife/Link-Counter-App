import React from 'react'

const Rank = ({ username }) => {
  return (
    <div>
        <div className='white f3'>Hey, {username} your current entries are:</div>
        <div className='white f1'>0</div>
    </div>
  )
}

export default Rank